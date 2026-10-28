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
└── archive/                          # 已归档文件
    ├── install-king-skills.ps1
    └── install-king-skills.bat
```

## 技能数据位置

所有 Skill 数据定义在 `skills-index.md` 中，每个 Skill 包含名称、来源（GitHub URL + Star 数）、分类、描述和安装指令。这是**唯一需要手改的文件**。

网站数据 `docs/data/skills.json` **由脚本自动生成，不要手改**：

- 生成脚本：`scripts/build-skills-json.mjs`（零依赖）
- 生成规则：`id`/`name`/`cat`/`desc`/`source`/`stars`/`repo` 取自 `skills-index.md`；
  `icon`/`updated`/`categories` 从已有 json 按 id 继承（新条目用默认值）
- 本地生成：`node scripts/build-skills-json.mjs`
- 推送 `main` 后，`.github/workflows/deploy-pages.yml` 会重新生成并发布到 GitHub Pages

## 添加新 Skill 的步骤

1. 在 `skills-index.md` 的对应分类下增加一条新条目（`### NN — 名称（备注）`）
2. 更新 `skills-index.md` 开头的 `total` 字段
3. 更新底部「一键安装」区的列表，包含新 Skill 的名称和来源信息
4. （可选）本地跑 `node scripts/build-skills-json.mjs` 更新 json；即使不跑，推送后 CI 也会自动生成并发布

## 通信偏好

- 使用用户当前语言回复
- 代码、文件路径、仓库地址保持英文原样
