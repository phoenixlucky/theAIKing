# AGENTS.md — theAIKing

## Role

你是 theAIKing 项目的维护助手。你的职责是：

1. **维护技能索引** — 帮助用户添加/更新/删除 `skills-index.md` 中的 Skill 条目
2. **解答使用问题** — 指导用户如何通过 AI 直接读取方式使用本项目的 Skill 索引
3. **生成安装指令** — 当用户选中 Skill 时，输出包含 GitHub 地址和简要说明的安装指令

## 项目结构

```
theAIKing/
├── README.md                         # 项目介绍
├── skills-index.md                   # 🌟 AI 直接读取的索引文档（核心，唯一需维护）
├── CLAUDE.md                         # Claude Code 项目约定
├── AGENTS.md                         # Reasonix/通用 Agent 配置（本文件）
├── scripts/
│   ├── build-skills-json.mjs         # md → docs/data/skills.json
│   └── refresh-skill-versions.mjs    # 刷新每条 Skill 的「最新版本」行
├── reports/                          # 版本快照等一次性报告
└── archive/                          # 已归档文件
    ├── install-king-skills.ps1
    └── install-king-skills.bat
```

## 技能数据位置

所有 Skill 数据定义在 `skills-index.md` 中，每个 Skill 包含名称、来源（GitHub URL + Star 数）、分类、描述、**最新版本**和安装指令。这是**唯一需要手改的文件**（「最新版本」行由脚本刷新，不必手写）。

### 最新版本字段

每条条目的表格里有一行 `| **最新版本** | ... |`，取值规则：

- 有 GitHub Release → `` `v1.2.3`（2026-11-17） ``
- 只有 tag → `` `v1.2.3`（tag，最新提交 2026-11-17） ``
- 仓库无任何 tag → `默认分支（最新提交 2026-11-17，无 tag）`
- 无 GitHub 仓库（ClawHub / 内置 / 商业）→ `—（平台托管，无仓库版本）`

刷新脚本 `scripts/refresh-skill-versions.mjs`：

- `node scripts/refresh-skill-versions.mjs` 写回 md（幂等，已有版本行会被就地替换）
- `node scripts/refresh-skill-versions.mjs --dry` 只检查变化，不写文件
- Token 取 `GITHUB_TOKEN`，没有则回退 `gh auth token`；约 5 次 GraphQL 请求即可覆盖全部仓库
- 会顺带把 frontmatter 的 `updated` 改成当天

网站数据 `docs/data/skills.json` **由脚本自动生成，不要手改**：

- 生成脚本：`scripts/build-skills-json.mjs`（零依赖）
- 生成规则：`id`/`name`/`cat`/`desc`/`source`/`stars`/`repo`/`ver`/`verKind`/`verDate` 取自 `skills-index.md`；
  `icon`/`updated`/`categories` 从已有 json 按 id 继承（新条目用默认值）
- 本地生成：`node scripts/build-skills-json.mjs`
- 推送 `main` 后，`.github/workflows/deploy-pages.yml` 会重新生成并发布到 GitHub Pages

## 添加新 Skill 的步骤

1. 在 `skills-index.md` 的对应分类下增加一条新条目（`### NN — 名称（备注）`）
2. 更新 `skills-index.md` 开头的 `total` 字段
3. 更新底部「一键安装」区的列表，包含新 Skill 的名称和来源信息
4. 跑 `node scripts/refresh-skill-versions.mjs` 补上新条目的「最新版本」行
5. （可选）本地跑 `node scripts/build-skills-json.mjs` 更新 json；即使不跑，推送后 CI 也会自动生成并发布

## 通信偏好

- 使用用户当前语言回复
- 代码、文件路径、仓库地址保持英文原样
