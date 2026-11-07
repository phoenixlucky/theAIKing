// 由 skills-index.md 生成 docs/data/skills.json（网站数据源）。
// 零依赖，可反复运行（幂等）：icon/categories/updated 从已有 json 继承，其余字段以 md 为准。
// 用法：node scripts/build-skills-json.mjs [repoRoot]
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(process.argv[2] ?? path.join(here, '..'));
const mdPath = path.join(root, 'skills-index.md');
const outPath = path.join(root, 'docs', 'data', 'skills.json');
const scriptPath = path.join(root, 'docs', 'js', 'script.js');
const htmlPath = path.join(root, 'docs', 'index.html');
const today = new Date().toISOString().slice(0, 10);

// ---- 读旧 json 作为种子（保留 icon / updated / categories）----
let seed = { categories: [], skills: [] };
try { seed = JSON.parse(fs.readFileSync(outPath, 'utf8')); } catch {}
const seedSkill = new Map((seed.skills ?? []).map((s) => [s.id, s]));
const catByName = new Map((seed.categories ?? []).map((c) => [c.name, c.id]));

// ---- 解析 md ----
const lines = fs.readFileSync(mdPath, 'utf8').split(/\r?\n/);
const entries = [];
let cur = null;
let inCode = false;
let section = null;

const stripLeadingEmoji = (s) => s.replace(/^[^\p{L}\p{N}]+/u, '').trim();

for (const line of lines) {
  if (/^```/.test(line.trim())) { inCode = !inCode; continue; }

  if (!inCode) {
    let m;
    if ((m = line.match(/^##\s+(.+?)\s*$/))) {
      section = stripLeadingEmoji(m[1]).replace(/[（(].*$/, '').trim();
      continue;
    }
    if ((m = line.match(/^###\s+(\d+)\s+[—–-]\s+(.+?)\s*$/))) {
      if (cur) entries.push(cur);
      cur = { id: Number(m[1]), title: m[2], section };
      continue;
    }
    if (cur && (m = line.match(/^\|\s*\*\*(来源|分类|一句话)\*\*\s*\|\s*(.*?)\s*\|\s*$/))) {
      cur[m[1]] = m[2].trim();
    }
  } else if (cur) {
    // 安装代码块内的「来源：URL」
    if (!cur.repo) {
      const m = line.match(/来源：\s*(https?:\/\/[^\s（）()]+)/);
      if (m) cur.repo = m[1].replace(/[，。、]+$/, '');
    }
    // 「npm：https://www.npmjs.com/package/<包名>」
    if (!cur.npm) {
      const m = line.match(/npm\s*[：:]\s*https?:\/\/www\.npmjs\.com\/package\/([^\s，。、（）()]+)/);
      if (m) cur.npm = decodeURIComponent(m[1].replace(/[，。、]+$/, ''));
    }
  }
}
if (cur) entries.push(cur);

// ---- 字段转换 ----
const baseName = (t) => t.replace(/[（(][^（()）]*[）)]\s*$/u, '').trim();
const nameCount = {};
for (const e of entries) {
  const b = baseName(e.title);
  nameCount[b] = (nameCount[b] ?? 0) + 1;
}

const recordOf = (e) => {
  const base = baseName(e.title);
  const name = nameCount[base] > 1
    ? e.title.replace(/（([^）]*)）\s*$/u, ' ($1)').trim() // 有重名则保留括号后缀区分
    : base;

  let source = e['来源'] ?? null;
  let stars = null;
  const sm = source && source.match(/^(.*?)\s*[（(]\s*([★⭐][^）)]*?)\s*[）)]\s*$/u);
  if (sm) { source = sm[1].trim(); stars = sm[2].replace(/★/g, '⭐').trim(); }

  const cat = catByName.get(e['分类']) ?? catByName.get(e.section) ?? null;
  const old = seedSkill.get(e.id);
  const icon = old?.icon ?? (base.match(/[A-Za-z0-9\p{L}]/u)?.[0]?.toUpperCase() ?? '?');

  return {
    id: e.id,
    name,
    cat,
    icon,
    repo: e.repo ?? old?.repo ?? null,
    npm: e.npm ?? old?.npm ?? null,
    desc: e['一句话'] ?? old?.desc ?? null,
    source,
    stars,
    updated: old?.updated ?? today,
  };
};

const skills = entries.map(recordOf).sort((a, b) => a.id - b.id);

// ---- 校验：字段缺失 / id 重复 / cat 无法归类时直接失败（CI 会拦下）----
const problems = [];
const seen = new Set();
for (const s of skills) {
  if (seen.has(s.id)) problems.push(`重复 id: ${s.id}`);
  seen.add(s.id);
  for (const k of ['name', 'cat', 'desc', 'source']) {
    if (!s[k]) problems.push(`id ${s.id} (${s.name ?? '?'}) 缺少字段 ${k}`);
  }
}
if (problems.length) {
  console.error('skills-index.md 存在问题：\n- ' + problems.join('\n- '));
  process.exit(1);
}

const out = { total: skills.length, categories: seed.categories ?? [], skills };

fs.mkdirSync(path.dirname(outPath), { recursive: true });
const json = JSON.stringify(out, null, 2) + '\n';
fs.writeFileSync(outPath, json, 'utf8');

// ---- 缓存版本号：用内容哈希自动更新 ?v=，json 变了就自动失效缓存 ----
const hash = crypto.createHash('sha1').update(json).digest('hex').slice(0, 8);
const bumps = [
  [scriptPath, /(data\/skills\.json\?v=)[^'"]+/],
  [htmlPath, /(js\/script\.js\?v=)[^'"]+/],
];
for (const [file, re] of bumps) {
  try {
    const src = fs.readFileSync(file, 'utf8');
    const next = src.replace(re, `$1${hash}`);
    if (next !== src) fs.writeFileSync(file, next, 'utf8');
  } catch { /* 文件不存在时跳过 */ }
}
console.log(`cache: ?v=${hash}`);

// ---- 摘要 ----
const prevIds = new Set((seed.skills ?? []).map((s) => s.id));
const nowIds = new Set(skills.map((s) => s.id));
const added = skills.filter((s) => !prevIds.has(s.id)).map((s) => s.id);
const removed = [...prevIds].filter((id) => !nowIds.has(id));
console.log(`total: ${out.total}`);
console.log(`added: ${added.join(', ') || '-'}`);
console.log(`removed: ${removed.join(', ') || '-'}`);
