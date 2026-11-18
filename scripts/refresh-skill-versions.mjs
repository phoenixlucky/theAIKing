// 刷新 skills-index.md 里每条的「最新版本」行（GitHub 数据）。
// - 版本优先级：latest release → 最新 tag → 最近提交（main 分支）
// - 纯 ClawHub / 内置 / 商业来源（无 GitHub 仓库）标记为「平台托管」
// - 幂等：已有「最新版本」行会被就地替换，不会重复插入
//
// 用法：
//   node scripts/refresh-skill-versions.mjs           # 写回 skills-index.md
//   node scripts/refresh-skill-versions.mjs --dry     # 只打印，不写文件
//
// Token：优先 GITHUB_TOKEN，其次 `gh auth token`。
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(process.argv[2] && !process.argv[2].startsWith('--') ? process.argv[2] : path.join(here, '..'));
const mdPath = path.join(root, 'skills-index.md');
const dry = process.argv.includes('--dry');
const today = new Date().toISOString().slice(0, 10);

const token = process.env.GITHUB_TOKEN || (() => {
  try { return execFileSync('gh', ['auth', 'token'], { encoding: 'utf8' }).trim(); } catch { return ''; }
})();
if (!token) {
  console.error('缺少 GitHub token：请设置 GITHUB_TOKEN，或先 `gh auth login`。');
  process.exit(1);
}

// ---------- 解析 ----------
const raw = fs.readFileSync(mdPath, 'utf8');
const eol = raw.includes('\r\n') ? '\r\n' : '\n';
const lines = raw.split(/\r?\n/);

const entries = [];
let cur = null;
for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  if (/^#{2,3}\s/.test(line)) {
    const m = line.match(/^###\s+(\d+)\s+[—–-]\s+(.+?)\s*$/);
    if (cur) { cur.end = i; entries.push(cur); cur = null; }
    if (m) cur = { id: Number(m[1]), name: m[2], start: i, end: lines.length };
    continue;
  }
  if (cur) {
    const repo = line.match(/https:\/\/github\.com\/([\w.-]+)\/([\w.-]+)/);
    if (repo && !cur.repo) cur.repo = `${repo[1]}/${repo[2]}`.replace(/\.git$/, '');
    if (repo && /来源/.test(line) && !cur.srcRepo) cur.srcRepo = cur.repo;
  }
}
if (cur) entries.push(cur);
for (const e of entries) e.repo = e.srcRepo || e.repo || null;

// ---------- 查询 GitHub ----------
const repos = [...new Set(entries.map((e) => e.repo).filter(Boolean))];
const q = (s) => JSON.stringify(s);
const info = {};
const BATCH = 25;

for (let i = 0; i < repos.length; i += BATCH) {
  const chunk = repos.slice(i, i + BATCH);
  const parts = chunk.map((r, j) => {
    const [o, n] = r.split('/');
    return `r${j}: repository(owner:${q(o)}, name:${q(n)}) { nameWithOwner latestRelease { tagName publishedAt } refs(refPrefix:"refs/tags/", first:1, orderBy:{field:TAG_COMMIT_DATE, direction:DESC}) { nodes { name } } defaultBranchRef { target { ... on Commit { committedDate } } } }`;
  });
  let json;
  try {
    const res = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: { Authorization: `bearer ${token}`, 'Content-Type': 'application/json', 'User-Agent': 'refresh-skill-versions' },
      body: JSON.stringify({ query: `query { ${parts.join('\n')} }` }),
    });
    json = await res.json();
  } catch (err) {
    console.error(`查询失败（batch ${i}）：${err.message}`);
    process.exit(1);
  }
  if (!json.data) {
    console.error(`GraphQL 错误：${JSON.stringify(json.errors ?? json).slice(0, 500)}`);
    process.exit(1);
  }
  chunk.forEach((r, j) => {
    const d = json.data[`r${j}`];
    info[r] = d
      ? {
          release: d.latestRelease?.tagName ?? null,
          releaseAt: d.latestRelease?.publishedAt ?? null,
          tag: d.refs?.nodes?.[0]?.name ?? null,
          pushedAt: d.defaultBranchRef?.target?.committedDate ?? null,
        }
      : null;
    if (r.toLowerCase() !== (d?.nameWithOwner ?? r).toLowerCase()) info[r].renamed = d?.nameWithOwner;
  });
  console.error(`已查询 ${Math.min(i + BATCH, repos.length)}/${repos.length} 个仓库`);
}

// ---------- 生成版本行 ----------
const cell = (s) => s.replace(/\|/g, '\\|');
const day = (s) => (s ? new Date(s).toISOString().slice(0, 10) : null);

function versionCell(repo) {
  if (!repo) return '—（平台托管，无仓库版本）';
  const d = info[repo];
  if (!d) return '—（仓库 404）';
  if (d.release) return `\`${d.release}\`（${day(d.releaseAt) ?? day(d.pushedAt)}）`;
  if (d.tag) return `\`${d.tag}\`（tag，最新提交 ${day(d.pushedAt) ?? '—'}）`;
  return `默认分支（最新提交 ${day(d.pushedAt) ?? '—'}，无 tag）`;
}

const VER_RE = /^\|\s*\*\*最新版本\*\*\s*\|/;
const ANCHOR_RE = /^\|\s*\*\*(一句话|分类|来源)\*\*\s*\|/;

let inserted = 0;
let replaced = 0;

for (const e of entries.reverse()) {
  const block = lines.slice(e.start, e.end);
  const row = `| **最新版本** | ${cell(versionCell(e.repo))} |`;

  const verIdx = block.findIndex((l) => VER_RE.test(l));
  if (verIdx >= 0) {
    lines[e.start + verIdx] = row;
    replaced++;
    continue;
  }
  let anchor = -1;
  for (const key of ['一句话', '分类', '来源']) {
    const idx = block.findIndex((l) => new RegExp(`^\\|\\s*\\*\\*${key}\\*\\*\\s*\\|`).test(l));
    if (idx >= 0) { anchor = idx; break; }
  }
  if (anchor < 0) {
    console.error(`跳过 ${e.id} ${e.name}：找不到表格行`);
    continue;
  }
  lines.splice(e.start + anchor + 1, 0, row);
  inserted++;
}

// ---------- frontmatter 时间戳 ----------
const out = lines.join(eol).replace(/^updated:.*$/m, `updated: "${today}"`);

if (dry) {
  console.log(out === raw ? '无变化' : '有变化（--dry 未写入）');
} else {
  fs.writeFileSync(mdPath, out, 'utf8');
  console.log(`已写入 ${mdPath}`);
}
console.log(`条目 ${entries.length}，仓库 ${repos.length}，新增版本行 ${inserted}，替换 ${replaced}`);
