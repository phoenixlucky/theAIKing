---
title:   "The AI King — AI 一键安装索引"
version: "1.9"
updated: "2026-10-28"
total:   165
---

# 🎯 The AI King — AI 一键安装索引

本文件是**核心索引**。AI Agent 读取后，可根据每个 Skill 的来源和安装方式自动完成安装。

兼容 **Claude Code**、**CodeX**，部分兼容 **Cursor**、**Windsurf**。

---

## 🛠 基础与元 Skill

关于 Skill 本身的创建、查找、管理与效率优化。

### 01 — Skill Creator

| 字段 | 值 |
|------|-----|
| **来源** | Anthropic 官方 |
| **分类** | 基础与元 Skill |
| **一句话** | 创建 Skill 的 Skill，把重复工作流封装成 Skill |

**安装指令：**

```
安装 Skill Creator，来源：Anthropic 官方。
安装后，告诉它你想创建一个什么样的 Skill，它会先问你几个问题确认需求细节，
你回答完之后，它会按照规范把 Skill 创建好。
```

---

### 02 — Find Skills

| 字段 | 值 |
|------|-----|
| **来源** | ClawHub |
| **分类** | 基础与元 Skill |
| **一句话** | Skill 搜索引擎，帮你从 ClawHub 全网搜索想要的 Skill |

**安装指令：**

```
安装 Find Skills。
来源：https://clawhub.ai/fangkelvin/skills/find-skills-skill
安装后，你可以说「帮我找一个配图 Skill」，它会从 ClawHub 搜出备选项，选好后直接帮你装上。
```

---

### 09 — ZeroToken Skill

| 字段 | 值 |
|------|-----|
| **来源** | phoenixlucky |
| **分类** | 基础与元 Skill |
| **一句话** | Token 高效约束，最少 token 和精准提示完成任务，减少无效输出 |

**安装指令：**

```
安装 ZeroToken Skill。
来源：https://github.com/phoenixlucky/zerotoken-skill
安装后，Agent 默认以最少 token 和精准提示完成任务，减少无效上下文、无效解释和无效输出。
```

---

### 27 — book-to-skill（书籍转 Skill）

| 字段 | 值 |
|------|-----|
| **来源** | virgiliojr94（⭐ 28k） |
| **分类** | 基础与元 Skill |
| **一句话** | 把技术类 PDF/EPUB/DOCX 书籍转化为可交互的 Agent Skill，按需加载章节 |

**安装指令：**

```
安装 book-to-skill。
来源：https://github.com/virgiliojr94/book-to-skill（⭐ 28k）
安装后，输入 /book-to-skill <书籍路径>，它会自动提取书籍内容，
生成 SKILL.md + 章节摘要 + 术语表 + 模式集，Agent 按需加载，无需全量塞入上下文。
```

---

### 31 — Skill Vetter（技能安全审查）

| 字段 | 值 |
|------|-----|
| **来源** | ClawHub — spclaudehome（★ 1.2k，安装 4.7k） |
| **分类** | 基础与元 Skill |
| **一句话** | 安装任何第三方 Skill 前的安全审查，检查红旗、权限范围和可疑模式 |

**安装指令：**

```
安装 Skill Vetter Skill。
来源：https://clawhub.ai/spclaudehome/skills/skill-vetter（★ 1.2k）
安装后，从 ClawHub、GitHub 等任何来源安装新 Skill 前，先让它审查一遍：
检查红旗、权限范围和可疑代码模式，确认安全再装。
```

---

### 35 — Auto-Updater（自动更新）

| 字段 | 值 |
|------|-----|
| **来源** | ClawHub — maximeprades（★ 428，安装 1.5k） |
| **分类** | 基础与元 Skill |
| **一句话** | 每天自动检查并更新 Agent 本体和所有已安装 Skill，附变更摘要 |

**安装指令：**

```
安装 Auto-Updater Skill。
来源：https://clawhub.ai/maximeprades/skills/auto-updater（★ 428）
安装后，它会通过定时任务每天自动检查更新、应用更新，并把改动摘要发给你。
```

---

### 75 — Skill Creator（ClawHub 版）

| 字段 | 值 |
|------|-----|
| **来源** | ClawHub — chindden（★ 319，安装 2.5k） |
| **分类** | 基础与元 Skill |
| **一句话** | ClawHub 社区版 Skill 创建指南，扩展 Agent 的知识、工作流和工具集成 |

**安装指令：**

```
安装 ClawHub 版 Skill Creator。
来源：https://clawhub.ai/chindden/skills/skill-creator（★ 319）
安装后，当你想新建或更新 Skill 来扩展 Agent 能力时，它会按规范引导你完成创建。
与上方 01 号 Anthropic 官方版互为补充，可按需选用。
```

---

### 80 — agent-skills（技能工厂）

| 字段 | 值 |
|------|-----|
| **来源** | addyosmani |
| **分类** | 基础与元 Skill |
| **一句话** | 从 .claude 等目录提炼可复用结构化技能，系统化管理 Agent 能力 |

**安装指令：**

```
安装 agent-skills Skill。
来源：https://github.com/addyosmani/agent-skills
安装后，可以从 .claude 等目录中提取、组织和复用结构化技能，
让 Claude Code / Cursor 等 Agent 原生扩展能力，进入「技能工厂」系统化时代。
```

---

### 81 — headroom（Token 压缩神器）

| 字段 | 值 |
|------|-----|
| **来源** | headroomlabs-ai |
| **分类** | 基础与元 Skill |
| **一句话** | LLM token 自动压缩：减少 60-95% token 消耗，支持 library / proxy / MCP 集成 |

**安装指令：**

```
安装 headroom Skill。
来源：https://github.com/headroomlabs-ai/headroom
安装后，自动压缩日志、文件和 RAG chunks，减少 60-95% token 消耗。
支持 library / proxy / MCP server 三种集成模式，高频 Agent 场景省钱省时。
```

---

### 135 — Caveman（穴居人省 token）

| 字段 | 值 |
|------|-----|
| **来源** | JuliusBrussee（⭐ 111k） |
| **分类** | 基础与元 Skill |
| **一句话** | 让 Agent「说穴居人话」省 token：输出压缩 + 代理压缩，整段会话省 33% 输入 token，答案不变 |

**安装指令：**

```
安装 Caveman Skill。
来源：https://github.com/JuliusBrussee/caveman（⭐ 111k）
安装方式（二选一）：
- 只要短回答（skill）：npx skills add JuliusBrussee/caveman -g
- 连输入也省（proxy，推荐）：npm install -g @caveman-ai/cli && caveman setup --install，再 caveman claude
（支持 Claude Code / Codex / Gemini / Cursor / Copilot / OpenCode 等 30+，需 Node.js 22.13+）

安装后，Agent 用最少 token 表达且不改动代码/命令/路径/数字：
- /caveman、/ultracave、/megacave 三档口吻；/caveman-commit、/caveman-review、/caveman-compress、/caveman-stats
- 代理把日志/CSV/YAML/JSON/测试输出压小 98%+，整段会话输入 token 减 33.2%，18/18 答案正确
- 研究表明改用户 prompt 会适得其反，故 caveman 从不改写你的提示词
被 Adobe Research、JetBrains、Elastic 引用与实测。Apache-2.0 开源。
```

---

### 136 — awesome-claude-skills（Skill 精选合集）

| 字段 | 值 |
|------|-----|
| **来源** | ComposioHQ（⭐ 76.7k） |
| **分类** | 基础与元 Skill |
| **一句话** | 1000+ 生产级 Claude Skill / 插件精选清单，覆盖文档、开发、数据、营销、协作等全场景 |

**安装指令：**

```
安装 awesome-claude-skills（Skill 精选合集）。
来源：https://github.com/ComposioHQ/awesome-claude-skills（⭐ 76.7k）
使用方式：直接阅读仓库 README 目录，按分类挑选所需 Skill；
配合 connect-apps 插件可让 Claude 对 1000+ 应用执行真实操作：
- claude --plugin-dir ./connect-apps-plugin 然后 /connect-apps:setup

这条索引本身收录了 1000+ 生产级 Skill 与插件，按 12 个类别组织：
- 文档处理 / 开发与代码工具 / 数据与分析 / 商业与营销 / 沟通与写作 / 创意与媒体 /
  效率与组织 / 协作与项目管理 / 安全与系统 / 辅助技术 / 应用自动化（Composio）
跨 Claude.ai、Claude Code，以及 Codex、Cursor、Gemini CLI、Antigravity 等编码 Agent。
```

---

### 139 — i-have-adhd（重点前置输出）

| 字段 | 值 |
|------|-----|
| **来源** | ayghri（⭐ 56.3k） |
| **分类** | 基础与元 Skill |
| **一句话** | 让编码 Agent 别把答案埋没：先给动作、编号步骤、结尾一个下一步，去掉寒暄和总结 |

**安装指令：**

```
安装 i-have-adhd Skill。
来源：https://github.com/ayghri/i-have-adhd（⭐ 56.3k）
安装方式（任选）：
- 把仓库地址直接发给编码 Agent：Install the i-have-adhd skill/plugin from
  https://github.com/ayghri/i-have-adhd, refer to the repo's AGENTS.md
- Claude Code：/plugin marketplace add ayghri/i-have-adhd 然后 /plugin install i-have-adhd@i-have-adhd

安装后，Agent 输出遵守 10 条规则：
- 先给下一步动作、编号多步任务、结尾给一个具体下一步、抑制跑题
- 每轮复述状态、给具体时间估计（分钟）、错误平淡陈述、列表最多 5 条
- 无开场白、无复述、无“希望有帮助”式收尾
跨 Claude Code / Codex / Cursor / Gemini / OpenCode 等（MIT）。
```

---

## 🧠 Agent 智能化

让 Agent 自我进化、长期记忆、主动预判与专家协作。

### 30 — Self-Improving Agent（自我进化 Agent）

| 字段 | 值 |
|------|-----|
| **来源** | ClawHub — pskoett（★ 3.8k，安装 6.9k） |
| **分类** | Agent 智能化 |
| **一句话** | 持续学习与纠错：自动记录错误、纠正和经验，让 Agent 永久进化 |

**安装指令：**

```
安装 Self-Improving Agent Skill。
来源：https://clawhub.ai/pskoett/skills/self-improving-agent（★ 3.8k）
安装后，命令报错、被用户纠正或自我发现问题时，它会自动把经验写进 .learnings/ 目录，
下次遇到同类场景会主动避开，相当于给 Agent 装上长期进化记忆。
```

---

### 32 — Proactive Agent（主动型 Agent）

| 字段 | 值 |
|------|-----|
| **来源** | ClawHub — halthelobster（★ 800，安装 3.0k） |
| **分类** | Agent 智能化 |
| **一句话** | 把 Agent 从「等指令」变成「主动预判需求」，带 WAL 协议与自动定时任务 |

**安装指令：**

```
安装 Proactive Agent Skill。
来源：https://clawhub.ai/halthelobster/skills/proactive-agent（★ 800）
安装后，Agent 会主动预判你的需求、持续自我改进，并支持 WAL 协议、工作缓冲区和自动定时任务。
Hal Stack 系列成员。
```

---

### 33 — Self-Improving + Proactive Agent

| 字段 | 值 |
|------|-----|
| **来源** | ClawHub — ivangdavila（★ 1.2k，安装 2.2k） |
| **分类** | Agent 智能化 |
| **一句话** | 自我反思 + 自我批评 + 自我学习 + 自组织记忆，Agent 能评估自己的工作并永久改进 |

**安装指令：**

```
安装 Self-Improving + Proactive Agent Skill。
来源：https://clawhub.ai/ivangdavila/skills/self-improving（★ 1.2k）
安装后，Agent 会反思自己的工作、主动发现错误并永久改进，适合希望 Agent 越用越聪明的场景。
```

---

### 34 — Ontology（知识图谱记忆）

| 字段 | 值 |
|------|-----|
| **来源** | ClawHub — oswalpalash（★ 638，安装 1.4k） |
| **分类** | Agent 智能化 |
| **一句话** | 类型化知识图谱，给 Agent 结构化记忆与可组合的技能能力 |

**安装指令：**

```
安装 Ontology Skill。
来源：https://clawhub.ai/oswalpalash/skills/ontology（★ 638）
安装后，可以用知识图谱创建/查询实体（人物、项目、任务、事件、文档）并建立关联，
让 Agent 拥有结构化长期记忆。
```

---

### 79 — cognee（长期记忆平台）

| 字段 | 值 |
|------|-----|
| **来源** | topoteretes（⭐ 30.4k） |
| **分类** | Agent 智能化 |
| **一句话** | 开源 AI Agent 长期记忆平台：自托管知识图谱引擎，跨会话持久上下文 |

**安装指令：**

```
安装 cognee Skill。
来源：https://github.com/topoteretes/cognee
安装后，Agent 获得「终身大脑」—— 跨会话保留持久上下文，
支持 RAG、多 Agent 协作和长期知识管理，解决会话级健忘症。
```

---

### 98 — agency-agents（AI 专家团队）

| 字段 | 值 |
|------|-----|
| **来源** | msitarzewski（⭐ 150k） |
| **分类** | Agent 智能化 |
| **一句话** | 232 个领域专家 AI Agent 合集：从前端开发到安全审计，一人即团队 |

**安装指令：**

```
安装 agency-agents Skill。
来源：https://github.com/msitarzewski/agency-agents（⭐ 150k）
安装方式：推荐下载桌面 App（agencyagents.app），或 ./scripts/install.sh
安装后，获得 232 个专业 AI Agent，覆盖工程/设计/营销/销售/金融/安全等 16 个领域。
每个 Agent 有独立人格、工作流和交付标准，支持 Claude Code / Cursor / Codex 等工具。
```

---

## 💻 开发与编码

开发流程规范化、编码 Agent 与代码质量保障。

### 03 — Superpowers

| 字段 | 值 |
|------|-----|
| **来源** | GitHub 社区（⭐ 21 万+） |
| **分类** | 开发与编码 |
| **一句话** | 开发流程规范化，模糊需求 → 执行计划 → 代码落地 |

**安装指令：**

```
安装 Superpowers Skill。
来源：GitHub（⭐ 21 万+ Star）。
安装后，给它一个模糊的需求想法，它会帮你做出具体的执行计划并落地。
支持 Subagent 并行开发、自动代码审查、Git 自动提交。
```

---

### 04 — gstack

| 字段 | 值 |
|------|-----|
| **来源** | Gary Tan（YC 总裁） |
| **分类** | 开发与编码 |
| **一句话** | 内置 23 个工程专家角色（CEO/PM/设计师/工程师），AI 工程团队 |

**安装指令：**

```
安装 gstack Skill。
来源：Gary Tan（YC 总裁）开发。
安装后，使用 /office-hours 梳理需求，/plan -ceo-review 审查方案，/qa 做浏览器测试。
```

---

### 20 — bug-hunt

| 字段 | 值 |
|------|-----|
| **来源** | Reasonix 内置 |
| **分类** | 开发与编码 |
| **一句话** | 复现并定位问题，给出最小修复和验证路径 |

**安装指令：**

```
安装 bug-hunt Skill。
来源：Reasonix 内置。
安装后，输入 bug 描述，它会复现问题、定位根因，给出最小修复方案和验证步骤。
```

---

### 21 — code-review

| 字段 | 值 |
|------|-----|
| **来源** | Reasonix 内置 |
| **分类** | 开发与编码 |
| **一句话** | 审查代码变更，优先发现缺陷、回归和缺失测试 |

**安装指令：**

```
安装 code-review Skill。
来源：Reasonix 内置。
安装后，提交代码变更时自动进行代码审查，标记缺陷、回归问题和测试遗漏。
```

---

### 24 — release-notes

| 字段 | 值 |
|------|-----|
| **来源** | Reasonix 内置 |
| **分类** | 开发与编码 |
| **一句话** | 整理面向用户的发布说明和升级注意事项 |

**安装指令：**

```
安装 release-notes Skill。
来源：Reasonix 内置。
安装后，根据代码变更自动生成面向用户的发布说明、更新日志和升级指南。
```

---

### 28 — Ponytail（懒人开发哲学）

| 字段 | 值 |
|------|-----|
| **来源** | DietrichGebert（⭐ 122k） |
| **分类** | 开发与编码 |
| **一句话** | 让 AI Agent 像资深懒人开发者一样思考：能省则省，YAGNI，用最少的代码完成任务 |

**安装指令：**

```
安装 Ponytail Skill。
来源：https://github.com/DietrichGebert/ponytail（⭐ 122k）
安装后，Agent 写代码前会按优先级判断：这东西真的需要吗？标准库能搞定吗？
平台原生功能能直接用吗？一行代码够吗？—— 平均减少 54% 代码、20% 成本和 27% 耗时。
安全性/验证/可访问性等关键保障不会被砍掉。
```

---

### 83 — opencode（开源编码 Agent）

| 字段 | 值 |
|------|-----|
| **来源** | anomalyco |
| **分类** | 开发与编码 |
| **一句话** | TypeScript 开源编码 Agent，高性能可扩展的 AI 编码助手 |

**安装指令：**

```
安装 opencode Skill。
来源：https://github.com/anomalyco/opencode
安装后，Agent 获得高性能、可扩展的 AI 编码能力，TypeScript 实现，
适合本地/自托管重度编码场景，一人顶一个开发团队。
```

---

### 102 — ui-test（AI 对抗性 UI 测试）

| 字段 | 值 |
|------|-----|
| **来源** | browserbase（⭐ 3.7k） |
| **分类** | 开发与编码 |
| **一句话** | AI 对抗性 UI 测试：分析 git diff 测变更，或全 app 主动探索找 bug |

**安装指令：**

```
安装 ui-test Skill。
来源：https://github.com/browserbase/skills（skills/ui-test，⭐ 3.7k）
安装方式：npx skills add browserbase/skills
安装后，两种用法：
1. 传一个 git diff → 自动测试变更是否引入回归（交互/边界/竞态）
2. 不传 diff → 自己探索整个 app 找 bug（表单/导航/空态/权限）
与 bug-hunt 互补：bug-hunt 复现你报的 bug，ui-test 主动替你找 bug。
注：深度模式依赖 Browserbase 云（可选 API key），diff 测试模式本地可跑。
```

---

### 120 — codebase-inspection（代码库体检）

| 字段 | 值 |
|------|-----|
| **来源** | Hermes Agent / Nous Research（官方内置） |
| **分类** | 开发与编码 |
| **一句话** | 用 pygount 统计代码量、语言占比、目录分布 |

**安装指令：**

```
安装 codebase-inspection Skill（Hermes Agent 官方内置）。
来源：https://hermes-agent.nousresearch.com/docs/zh-Hans/skills
安装方式：安装 Hermes Agent 后内置，直接 /codebase-inspection 调用。
安装后，Agent 用 pygount 快速统计仓库的代码行数、语言占比和目录分布，
评估代码规模与技术栈构成。
```

---

### 131 — Understand-Anything（代码转知识图谱）

| 字段 | 值 |
|------|-----|
| **来源** | Egonex-AI（⭐ 85.7k） |
| **分类** | 开发与编码 |
| **一句话** | 把任意代码库/知识库/文档变成可探索、可搜索、可提问的交互式知识图谱，附可视化 Dashboard |

**安装指令：**

```
安装 Understand-Anything Skill。
来源：https://github.com/Egonex-AI/Understand-Anything（⭐ 85.7k）
安装方式（多平台）：
- Claude Code：/plugin marketplace add Egonex-AI/Understand-Anything 然后 /plugin install understand-anything
- macOS / Linux：curl -fsSL https://raw.githubusercontent.com/Egonex-AI/Understand-Anything/main/install.sh | bash -s <平台>
  （平台：codex / opencode / gemini / antigravity / vibe / cline / kimi / trae / kiro 等）
- Windows PowerShell：iwr -useb https://raw.githubusercontent.com/Egonex-AI/Understand-Anything/main/install.ps1 | iex

安装后，Agent 获得代码库理解能力（Tree-sitter 静态解析 + LLM 语义补全的多 Agent 管线）：
- /understand 扫描代码库，生成知识图谱（.ua/knowledge-graph.json），支持 --language zh 中文输出
- /understand-dashboard 打开可视化 Dashboard（按架构分层着色、搜索、点击）
- /understand-chat 提问 / -diff 变更影响分析 / -explain 深挖文件 / -onboard 新人导览
- /understand-domain 提取业务领域与流程 / -knowledge 分析 Karpathy 式 LLM wiki
增量更新、可提交图谱 JSON 供团队共享，也支持本地模型（Ollama）。
```

---

### 132 — Graphify（代码库知识图谱）

| 字段 | 值 |
|------|-----|
| **来源** | Graphify-Labs（⭐ 125k，YC S26） |
| **分类** | 开发与编码 |
| **一句话** | 把代码、文档、SQL、配置、PDF 变成可查询知识图谱：本地确定性 AST 解析，每条边可解释，无需向量库 |

**安装指令：**

```
安装 Graphify Skill。
来源：https://github.com/Graphify-Labs/graphify（⭐ 125k）
安装方式：
- uv tool install graphifyy   # 或 pipx install graphifyy
- graphify install            # 注册 skill 到 AI 助手（支持 Claude Code / Cursor / Codex / Gemini / OpenCode 等 20+）

安装后，Agent 可用 /graphify . 把工程映射成知识图谱（graph.html / GRAPH_REPORT.md / graph.json）：
- 代码本地 tree-sitter AST 解析（无 LLM，不出机器），节点/边带 EXTRACTED / INFERRED 置信标签
- 40 种语言跨文件调用/导入/继承/混入解析；Leiden 社区发现、god nodes、跨模块意外连接
- 文档/PDF/图片/音视频并入同一图谱；# NOTE:/# WHY: 注释与 ADR 引用成为一等节点
- 支持 query（提问取子图）、path（两点路径）、explain（单概念），可导出 MCP server / wiki / Obsidian
CLI 命令为 graphify，PyPI 包名为 graphifyy（双 y）。
```

---

## 🎨 前端与设计

UI 设计规范、视觉风格与动效，告别 AI 味界面。

### 05 — Frontend Design

| 字段 | 值 |
|------|-----|
| **来源** | Anthropic 官方 |
| **分类** | 前端与设计 |
| **一句话** | 去 AI 感设计，配色/字体/间距一键优化，输出专业级前端 |

**安装指令：**

```
安装 Frontend Design Skill。
来源：Anthropic 官方出品。
安装后，生成前端页面时自动应用专业设计规范。
```

---

### 06 — ui-ux-pro-max

| 字段 | 值 |
|------|-----|
| **来源** | nextlevelbuilder（⭐ 124k） |
| **分类** | 前端与设计 |
| **一句话** | 设计资源库：50 种设计风格 + 97 种配色方案 + 9 个技术栈 |

**安装指令：**

```
安装 ui-ux-pro-max Skill。
来源：https://github.com/nextlevelbuilder/ui-ux-pro-max-skill（⭐ 124k）
安装后，生成页面时自动匹配适合的设计风格和配色方案。
```

---

### 22 — frontend-polish

| 字段 | 值 |
|------|-----|
| **来源** | Reasonix 内置 |
| **分类** | 前端与设计 |
| **一句话** | 优化界面细节、响应式状态和视觉一致性 |

**安装指令：**

```
安装 frontend-polish Skill。
来源：Reasonix 内置。
安装后，自动优化前端界面细节，修复响应式布局问题，确保视觉一致性。
```

---

### 84 — taste-skill（AI 设计品味）

| 字段 | 值 |
|------|-----|
| **来源** | Leonxlnx（⭐ 84k） |
| **分类** | 前端与设计 |
| **一句话** | 反模板化前端设计框架：让 AI 生成有品味的 UI，告别千篇一律的「AI 味」界面 |

**安装指令：**

```
安装 taste-skill Skill。
来源：https://github.com/Leonxlnx/taste-skill（⭐ 84k）
安装方式：npx skills add https://github.com/Leonxlnx/taste-skill
安装后，Agent 增强布局/排版/动效/间距设计能力，支持多种设计风格（简约/工业/高端/暗黑等）
和图像生成技能（网页排版、移动端、品牌套件），配合 Cursor / Claude Code / Codex 使用。
```

---

### 85 — gsap-skills（GSAP 动画官方技能）

| 字段 | 值 |
|------|-----|
| **来源** | greensock（⭐ 14.8k） |
| **分类** | 前端与设计 |
| **一句话** | GSAP 动画官方 AI Skill：教 AI 代理正确使用 GSAP 动画库（核心 API/时间线/ScrollTrigger/插件） |

**安装指令：**

```
安装 gsap-skills Skill。
来源：https://github.com/greensock/gsap-skills（⭐ 14.8k）
安装方式：npx skills add https://github.com/greensock/gsap-skills
安装后，Agent 获得 GSAP 动画全栈能力：gsap.core、Timeline、ScrollTrigger、插件（SplitText/MorphSVG 等）、
React/Vue/Svelte 集成、性能优化。所有 GSAP 插件现已免费商用。
```

---

### 112 — architecture-diagram（SVG 架构图）

| 字段 | 值 |
|------|-----|
| **来源** | Hermes Agent / Nous Research（官方内置） |
| **分类** | 前端与设计 |
| **一句话** | 暗色主题 SVG 架构/云/基础设施图，直接输出 HTML |

**安装指令：**

```
安装 architecture-diagram Skill（Hermes Agent 官方内置）。
来源：https://hermes-agent.nousresearch.com/docs/zh-Hans/skills
安装方式：安装 Hermes Agent 后内置，直接 /architecture-diagram 调用。
安装后，描述系统结构，Agent 生成暗色主题的 SVG 架构图、
云架构图或基础设施图，输出为 HTML，技术方案文档直接可用。
```

---

### 113 — excalidraw（手绘风图表）

| 字段 | 值 |
|------|-----|
| **来源** | Hermes Agent / Nous Research（官方可选） |
| **分类** | 前端与设计 |
| **一句话** | 手绘风格 Excalidraw JSON 图表：架构/流程/时序图 |

**安装指令：**

```
安装 excalidraw Skill（Hermes Agent 官方可选）。
来源：https://hermes-agent.nousresearch.com/docs/zh-Hans/skills
安装方式：Hermes 官方仓库 skills 目录已移除，现位于 optional-skills/creative，安装后 /excalidraw 调用。
安装后，Agent 生成手绘风格的 Excalidraw JSON 图表（架构图/流程图/时序图），
在 excalidraw.com 打开即可编辑。
```

---

### 114 — popular-web-designs（大厂设计系统）

| 字段 | 值 |
|------|-----|
| **来源** | Hermes Agent / Nous Research（官方内置） |
| **分类** | 前端与设计 |
| **一句话** | 54 个大厂真实设计系统（Stripe/Linear/Vercel）HTML/CSS 参考实现 |

**安装指令：**

```
安装 popular-web-designs Skill（Hermes Agent 官方内置）。
来源：https://hermes-agent.nousresearch.com/docs/zh-Hans/skills
安装方式：安装 Hermes Agent 后内置，直接 /popular-web-designs 调用。
安装后，Agent 可参照 Stripe、Linear、Vercel 等 54 个知名产品的真实
HTML/CSS 设计系统，做出高质感前端。
```

---

### 126 — design-md（DESIGN.md 规范）

| 字段 | 值 |
|------|-----|
| **来源** | Hermes Agent / Nous Research（官方内置） |
| **分类** | 前端与设计 |
| **一句话** | 编写/校验/导出 Google DESIGN.md 设计 token 规范文件 |

**安装指令：**

```
安装 design-md Skill（Hermes Agent 官方内置）。
来源：https://hermes-agent.nousresearch.com/docs/zh-Hans/skills
安装方式：安装 Hermes Agent 后内置，直接 /design-md 调用。
安装后，Agent 可编写、校验和导出 Google DESIGN.md 设计 token 规范文件，
让前端设计与实现对齐。
```

---

### 127 — shaders（WebGPU 特效组件）

| 字段 | 值 |
|------|-----|
| **来源** | shader-effects-inc（⭐ 3.6k） |
| **分类** | 前端与设计 |
| **一句话** | 200+ WebGPU 特效组件：渐变/噪点/玻璃/金属/光效/畸变/转场/模糊/光标特效，支持 React/Vue/Svelte/Solid/JS/Framer |

**安装指令：**

```
安装 shaders Skill。
来源：https://github.com/shader-effects-inc/shaders（⭐ 3.6k）
安装方式：npx skills add shader-effects-inc/shaders（或 npx shaders skill）
安装后，Agent 获得 200+ WebGPU 特效组件能力：
- 声明式组件 API，图层可嵌套、混合、遮罩，全部在 GPU 上合成
- 一等公民支持 React / Vue / Svelte / Solid / JavaScript（同一套 props），附 Framer 插件
- 附带 CLI（npx shaders search/preview/install/update）与 MCP server（npx shaders install-mcp）
- 可视化设计编辑器导出对应框架组件代码（shaders.com，免费）
引擎与组件 MIT 开源；1000+ 预设 / 55+ 网页区块为 Pro 付费内容。
```

---

### 133 — Archify（交互式架构图）

| 字段 | 值 |
|------|-----|
| **来源** | tt-a1i（⭐ 81k，GitHub Trending 周榜第一） |
| **分类** | 前端与设计 |
| **一句话** | 把任何想法、方案或代码库变成漂亮的交互式 HTML 图（架构/流程/时序/数据流/生命周期），可探索、可分享 |

**安装指令：**

```
安装 Archify Skill。
来源：https://github.com/tt-a1i/archify（⭐ 81k）
安装方式：npx skills add tt-a1i/archify -g
（支持 Claude Code / Codex / Cursor / OpenCode；也可上传 archify.zip 到 Claude.ai）

安装后，Agent 用一句话或读仓库生成自包含的交互式 HTML 图：
- 五种图类型：Architecture / Workflow / Sequence / Data Flow / Lifecycle
- 类型化 JSON IR + 渲染前 schema/布局/路由/标签避让原子校验，失败带可修复诊断
- 节点详情、上下游 reach、精确路径、角色对比、演示舞台；暗/亮主题一键切换
- 可导出 PNG / 静态与动态格式 / 1200×630 路线分享卡；输出为单 HTML 文件，无需安装即可查看
可选 Architecture Delta 对比 Before/Delta/After，做设计或 PR 评审。MIT 开源。
```

---

### 134 — Impeccable（AI 设计语言）

| 字段 | 值 |
|------|-----|
| **来源** | pbakaus / Paul Bakaus（⭐ 78.9k） |
| **分类** | 前端与设计 |
| **一句话** | 让 AI 编码 Agent 更懂设计的技能：1 个 skill + 24 个命令 + 实时浏览器迭代 + 59 条确定性检测规则 |

**安装指令：**

```
安装 Impeccable Skill。
来源：https://github.com/pbakaus/impeccable（⭐ 78.9k）
安装方式：项目根目录执行 npx impeccable install，再在 AI 工具里运行 /impeccable init
（支持 Cursor / Claude Code / Copilot / Codex / Gemini / OpenCode / Trae 等 17+；更新用 npx impeccable update）

安装后，Agent 获得一套设计语言与命令：
- 24 个命令：craft / init / document / extract / shape / critique / audit / polish / bolder / quieter /
  distill / harden / onboard / animate / colorize / typeset / layout / delight / overdrive / clarify /
  adapt / optimize / live / generate
- 59 条确定性检测规则（无需 LLM / API Key）+ LLM 批评检查，专治 AI 味前端（Inter 到处用、
  紫蓝渐变、卡片套卡片、纯黑纯灰、bounce 缓动等），并附明确反模式清单
- 设计钩子在 Claude Code / Copilot / Codex / Cursor / Grok 上编辑 UI 文件时自动给出检测发现
CLI：npx impeccable detect <目录|文件|URL>，可接 CI（--json）。Apache-2.0 开源。
```

---

### 142 — emilkowalski/skills（Emil 设计工程技能）

| 字段 | 值 |
|------|-----|
| **来源** | emilkowalski（⭐ 45k） |
| **分类** | 前端与设计 |
| **一句话** | Vercel/Linear 设计工程师 Emil Kowalski 的界面与动画技能包：让 Agent 选对缓动/时长/属性，做出「顺滑」的交互 |

**安装指令：**

```
安装 emilkowalski/skills Skill 包。
来源：https://github.com/emilkowalski/skills（⭐ 45k）
安装方式：npx skills@latest add emilkowalski/skills

安装后，Agent 获得一套界面/动画判断力（含 43 条动画规则、7 大类，按影响排序）：
- emil-design-eng（主技能：动画 + 设计建议）、animate（从零搭动画，选对曲线/时长/属性）
- animate-expo（React Native/Expo：手势/抽屉/触感/转场，避开 JS 线程）
- review-animations（按规则严格评审）、improve-animations（审计全库并给可执行计划）
- find-animation-opportunities（找该动的地方 + 不该动的地方）、animation-vocabulary（用对术语）
- apple-design、write-swift、pick-ui-library、prototype、mobile-native、break-ui、ask-sonner
适合去 AI 味、打磨前端手感。MIT。
```

---

### 144 — figma-design-skill（Figma / 设计规范提取）

| 字段 | 值 |
|------|-----|
| **来源** | phoenixlucky |
| **分类** | 前端与设计 |
| **一句话** | 把 Claude 官方 UI kit 的设计细节（token/组件几何/动效/硬规则）取到手，照着改或做页面，交付可运行代码而非设计赏析 |

**安装指令：**

```
安装 figma-design-skill。
来源：https://github.com/phoenixlucky/figma-design-skill
安装方式：git clone https://github.com/phoenixlucky/figma-design-skill.git
装到全局 skills 根下（如 %APPDATA%\reasonix\skills\figma-design-skill\），技能名 figma-design-skill。

安装后，Agent 以 Claude 官方 UI kit 为蓝本产出页面/改稿：
- 主蓝本 references/anthropic-mcp-apps-design.md：颜色 37 / 字体 29 / 几何 15 个变量（Light/Dark 双 mode）+ 官方九条硬规则
- 次选蓝本（社区逆向 Storybook，标来源、冲突以官方为准）；browser-recipes.md 为代码口径权威
- 通过本地 Chrome MCP 实读 Figma 变量面板与 Design 面板 DOM，画布只能截图（无需 Figma 官方 MCP / access token）
- 产出页面代码（CSS 变量 + 带出处注释的字面量）/ 改稿 diff / 映射表 / 细节表
覆盖场景：贴 Figma 或网页版设计系统链接提 token、对齐配色/字号/圆角/层级/动效。MIT。
```

---

## ✍️ 内容创作

文案、图像生成与聊天陪伴等内容产出工具。

### 07 — baoyu-skills

| 字段 | 值 |
|------|-----|
| **来源** | JimLiu（⭐ 25.6k） |
| **分类** | 内容创作 |
| **一句话** | 约 20 个视觉设计 Skill 包：封面图/信息图/PPT/文章配图/长文排版 |

**安装指令：**

```
安装 baoyu-skills 技能包。
来源：https://github.com/JimLiu/baoyu-skills（⭐ 25.6k）
安装后，把文章发给它，它会自动找出适合配图的段落并生成插图放到对应位置。
```

---

### 12 — Moon Lovers（白月光）

| 字段 | 值 |
|------|-----|
| **来源** | phoenixlucky |
| **分类** | 内容创作 |
| **一句话** | 温柔/克制/留白感强的恋爱聊天回复 Skill，内置西施/王昭君/貂蝉/杨玉环四大美人角色卡 |

**安装指令：**

```
安装 Moon Lovers Skill。
来源：https://github.com/phoenixlucky/moon-lovers-skill
安装后，提供对方消息或聊天上下文，生成自然克制、有白月光感的回复。
```

---

### 70 — Nano Banana Pro（AI 绘图）

| 字段 | 值 |
|------|-----|
| **来源** | ClawHub — steipete（★ 405，安装 1.9k） |
| **分类** | 内容创作 |
| **一句话** | 用 Nano Banana Pro（Gemini 3 Pro Image）生成/编辑图片，支持文生图 + 图生图 |

**安装指令：**

```
安装 Nano Banana Pro Skill。
来源：https://clawhub.ai/steipete/skills/nano-banana-pro（★ 405）
安装后，Agent 可用 Nano Banana Pro（Gemini 3 Pro Image）生成或编辑图片，
支持文生图和图生图（--input-image），可输出 1K/2K/4K 分辨率。
```

---

### 71 — OpenAI Image Gen（批量绘图）

| 字段 | 值 |
|------|-----|
| **来源** | ClawHub — steipete（★ 37，安装 1.1k） |
| **分类** | 内容创作 |
| **一句话** | 通过 OpenAI Images API 批量生成图片，附随机 prompt 采样和画廊 |

**安装指令：**

```
安装 OpenAI Image Gen Skill。
来源：https://clawhub.ai/steipete/skills/openai-image-gen（★ 37）
安装后，Agent 可通过 OpenAI Images API 批量生成图片，内置随机 prompt 采样器和 index.html 画廊。
```

---

### 72 — Humanizer（去 AI 味）

| 字段 | 值 |
|------|-----|
| **来源** | ClawHub — biostartechnology（★ 669，安装 1.5k） |
| **分类** | 内容创作 |
| **一句话** | 去除文本中的 AI 写作痕迹，基于维基百科「AI 写作迹象」清单改写得更自然 |

**安装指令：**

```
安装 Humanizer Skill。
来源：https://clawhub.ai/biostartechnology/skills/humanizer（★ 669）
安装后，编辑或审阅文本时可自动去除 AI 写作痕迹：
夸张象征、推销用语、空泛归因、破折号滥用、三段式、AI 词汇、负面并列和过度连接词等。
```

---

### 117 — youtube-content（YouTube 转内容）

| 字段 | 值 |
|------|-----|
| **来源** | Hermes Agent / Nous Research（官方内置） |
| **分类** | 内容创作 |
| **一句话** | YouTube 字幕 → 摘要/长文/博客/社交媒体文案 |

**安装指令：**

```
安装 youtube-content Skill（Hermes Agent 官方内置）。
来源：https://hermes-agent.nousresearch.com/docs/zh-Hans/skills
安装方式：安装 Hermes Agent 后内置，直接 /youtube-content 调用。
安装后，给一个 YouTube 链接，Agent 拉取字幕转成摘要、
深度长文、博客或社交媒体文案。
```

---

### 121 — comfyui（扩散工作流生图）

| 字段 | 值 |
|------|-----|
| **来源** | Hermes Agent / Nous Research（官方可选） |
| **分类** | 内容创作 |
| **一句话** | ComfyUI 扩散工作流生成图片/视频/音频 |

**安装指令：**

```
安装 comfyui Skill（Hermes Agent 官方可选）。
来源：https://hermes-agent.nousresearch.com/docs/zh-Hans/skills
安装方式：Hermes 官方仓库 skills 目录已移除，现位于 optional-skills/creative，安装后 /comfyui 调用。
安装后，Agent 通过 ComfyUI 扩散工作流生成图片、视频和音频，
适合本地可控的 AI 创作。
```

---

### 122 — songwriting-and-ai-music（写歌 + Suno）

| 字段 | 值 |
|------|-----|
| **来源** | Hermes Agent / Nous Research（官方内置） |
| **分类** | 内容创作 |
| **一句话** | 写歌技巧 + Suno AI 音乐提示词创作 |

**安装指令：**

```
安装 songwriting-and-ai-music Skill（Hermes Agent 官方内置）。
来源：https://hermes-agent.nousresearch.com/docs/zh-Hans/skills
安装方式：安装 Hermes Agent 后内置，直接 /songwriting-and-ai-music 调用。
安装后，Agent 懂写歌结构和歌词技巧，能生成 Suno AI 音乐提示词，
帮你从词到曲完成歌曲创作。
```

---

### 129 — lieflat-less-ai-tone（去 AI 味）

| 字段 | 值 |
|------|-----|
| **来源** | larashero3-dotcom（⭐ 2.5k） |
| **分类** | 内容创作 |
| **一句话** | 基于 283 万字语料统计的去 AI 味 skill：用语言学方法量化「什么是 AI 味」并逐项检验后可复算地去痕 |

**安装指令：**

```
安装 lieflat-less-ai-tone Skill（去 AI 味）。
来源：https://github.com/larashero3-dotcom/lieflat-less-ai-tone（⭐ 2.5k）
安装方式：npx skills add larashero3-dotcom/lieflat-less-ai-tone
（或直接在 MoxtHub 打开：https://moxt.ai/zh-CN/hub?type=skill&id=lieflat-less-ai-tone；
  也可把 SKILL.md 当 system prompt 用，适配任何支持自定义指令的工具）

安装后，Agent 可按基于 629 篇 / 283 万字对照语料检验出的规则集清除生成痕迹：
- 通过检验的 11 项特征（对举结构、顿号并列、相邻句同构、破折号、冒号滥用、序数词小标题、
  拟人化喻体、起首语、译文句式、段首零回指评论等）逐项改写
- 白名单 + 信息守恒：不新增细节、不改判断强度，未命中项逐字保留
- 公开可复算脚本（compare-human-ai.py / check-structure.py / check-translationese.py）
与 writing-dna-skill 配合：前者负责风格逼近，本 skill 负责清除生成痕迹。
```

---

### 137 — Character Prompt Studio（人物设计与生图提示词）

| 字段 | 值 |
|------|-----|
| **来源** | joshesye（⭐ 18） |
| **分类** | 内容创作 |
| **一句话** | 把一句灵感或一张参考图整理成可用生图提示词：外貌/服装/构图/材质/光影，含 3397 条分类词库 |

**安装指令：**

```
安装 Character Prompt Studio（Skill 名：ai-image-prompt）。
来源：https://github.com/joshesye/Character-Prompt-Studio（⭐ 18）
安装方式（Codex）：
- 下载仓库 ZIP 解压，文件夹改名为 ai-image-prompt，放到 ~/.codex/skills/ai-image-prompt/
  （Windows：%USERPROFILE%\.codex\skills\ai-image-prompt\），确保目录内直接是 SKILL.md，重启 Codex
- 或把仓库地址发给 Codex：帮我安装这个 Skill：https://github.com/joshesye/Character-Prompt-Studio

安装后，Agent 可把灵感变成结构化人物提示词：
- 人物设定：面部特写 + 正面/侧面/背面全身的角色资产布局
- 冷酷科幻人物、韩式财阀千金（香槟金丝缎/血红天鹅绒/黑丝绒星链三套礼服模板，3D 漫剧写实厚涂）
- 3397 条分类词库 + 检索/生成/完整性检查脚本（python3 scripts/check_terms.py）
- 按需求写明人物身份/风格/构图/使用模型，生成后可持续调整
基于 AI绘梦师葉子（huimengshiyezi/ai-image-prompt）定制扩展（MIT）。
```

---

### 138 — cy-carousel（图文轮播）

| 字段 | 值 |
|------|-----|
| **来源** | chengyi-ai（⭐ 129） |
| **分类** | 内容创作 |
| **一句话** | 给一个选题，查证/找素材/排版/检查/打包，交付封面 + 10 页（1440×1920）成套可直接发布的图文轮播 |

**安装指令：**

```
安装 cy-carousel Skill。
来源：https://github.com/chengyi-ai/cy-carousel-skill（⭐ 129）
安装方式（Claude Code）：
  git clone https://github.com/chengyi-ai/cy-carousel-skill.git ~/.claude/skills/cy-carousel
  python3 -m pip install -r ~/.claude/skills/cy-carousel/requirements.txt
（Codex）改路径为 ~/.codex/skills/cy-carousel，装好后新开对话。

安装后，Agent 按流程产出一整套图文轮播（含标题/正文/置顶评论/来源清单）：
- 选题（2–4 候选对比）→ 查证（回到一手出处，PyMuPDF 定位原句）→ 找素材（只用开放授权，记链接/许可/SHA256）
- 手排（scripts/手排.py：照片卡、论文矢量纸条、扫描书页、红圈/下划线、毛笔双色标题、电子青大数字）
- 渲染 render.py → 检查 check_all.py（红线/出界/背景分类，errors 必须为零）→ 打包 package.py（不自动发布）
依赖：Python 3.10+、Pillow、numpy、PyMuPDF（扫描书页找词需 macOS Vision）。代码 MIT，字体 SIL OFL 1.1。
```

---

## 📄 文档处理

Office/PDF 文档创建、编辑与格式转换。

### 08 — NotebookLM Skill

| 字段 | 值 |
|------|-----|
| **来源** | teng-lin（⭐ 19.1k） |
| **分类** | 文档处理 |
| **一句话** | 打通 Agent 与 NotebookLM，Agent 可直接查询 NotebookLM 中的文档 |

**安装指令：**

```
安装 NotebookLM Skill。
来源：https://github.com/teng-lin/notebooklm-py（⭐ 19.1k）
安装后，Agent 可以查询和分析你在 NotebookLM 中存储的所有文档，
显著减少 AI 幻觉，相当于给 Agent 接上超强长期记忆外挂。
```

---

### 23 — officecli

| 字段 | 值 |
|------|-----|
| **来源** | iOfficeAI（⭐ 29.8k） |
| **分类** | 文档处理 |
| **一句话** | AI Agent 专用 Office 文档工具：创建、编辑和自动化 Word/Excel/PPT，单二进制免装 Office |

**安装指令：**

```
安装 officecli Skill。
来源：https://github.com/iOfficeAI/OfficeCLI（⭐ 29.8k）
安装方式（任选）：
- 官方推荐：运行 officecli install，自动装 binary 并注册到 Claude Code / Cursor / Windsurf / Copilot
- 或把 https://officecli.ai/SKILL.md 喂给 Agent 自动安装
- Windows: irm https://raw.githubusercontent.com/iOfficeAI/OfficeCLI/main/install.ps1 | iex
安装后，Agent 可以直接创建、读取和修改 Word、Excel、PowerPoint 文件，
支持模板合并（{{key}} 占位符批量填）、batch 批量操作、
内置渲染引擎（HTML/PNG 预览，无需装 Office）和 watch 实时预览，
还能 officecli mcp claude 注册成 MCP server 暴露全部文档操作。
```

---

### 25 — docx

| 字段 | 值 |
|------|-----|
| **来源** | kimi-skills（⭐ 232） |
| **分类** | 文档处理 |
| **一句话** | 完整的 DOCX 文档创建、编辑与分析能力，支持修订、批注、格式保持和文本提取 |

**安装指令：**

```
安装 docx Skill。
来源：https://github.com/thvroyal/kimi-skills（⭐ 232）
安装后，可以创建 Word 文档：设置封面/目录/页眉页脚/图表，支持修订跟踪和批注，
也支持编辑现有文档，提取文本和结构。
依赖：.NET SDK、Python 3、pandoc（可选）。
```

---

### 26 — pdf

| 字段 | 值 |
|------|-----|
| **来源** | zavora-ai（⭐ 1） |
| **分类** | 文档处理 |
| **一句话** | 专业 PDF 工具集：报告生成/提取/合并/拆分/表单填写/安全处理（57 种工具） |

**安装指令：**

```
安装 pdf Skill。
来源：https://github.com/zavora-ai/skill-pdf-document-management（⭐ 1）
安装后，可以处理 PDF：检查/分类/提取文本表格/生成发票合同/格式转换/
合并拆分/加密脱敏/表单填写。依赖 mcp-pdf v3.0.0+。
```

---

### 73 — Nano PDF（自然语言编辑 PDF）

| 字段 | 值 |
|------|-----|
| **来源** | ClawHub — steipete（★ 260，安装 2.6k） |
| **分类** | 文档处理 |
| **一句话** | 用自然语言指令通过 nano-pdf CLI 编辑 PDF |

**安装指令：**

```
安装 Nano PDF Skill。
来源：https://clawhub.ai/steipete/skills/nano-pdf（★ 260）
安装后，Agent 可用自然语言指令通过 nano-pdf CLI 编辑 PDF 文档。
```

---

### 94 — MarkItDown（微软文档转文本）

| 字段 | 值 |
|------|-----|
| **来源** | Microsoft |
| **分类** | 文档处理 |
| **一句话** | 微软出品：PDF/Office/HTML/图片批量转 Markdown 文本，开源免费 |

**安装指令：**

```
安装 MarkItDown Skill。
来源：https://github.com/microsoft/markitdown
安装后，Agent 可将 PDF、Word、Excel、PPT、HTML 和图片中的文字
批量转换为 Markdown 格式文本，方便 AI 进一步处理。
```

---

### 108 — ocr-and-documents（OCR 文档提取 · ⚠️ 已失效）

| 字段 | 值 |
|------|-----|
| **来源** | Hermes Agent / Nous Research（官方内置 · ⚠️ 已移除） |
| **分类** | 文档处理 |
| **一句话** | ⚠️ 已失效：Hermes 官方已移除该 Skill，OCR 能力并入内置 pdf Skill |

**安装指令：**

```
⚠️ 已失效：Hermes Agent 官方仓库已移除该 Skill，
OCR 提取能力已并入内置 pdf Skill（skills/productivity/pdf，含 pymupdf/marker 脚本）。
如需 OCR 请使用「26 — pdf」Skill。
```

---

### 109 — document-to-action-items（文档转行动项）

| 字段 | 值 |
|------|-----|
| **来源** | Hermes Agent / Nous Research（官方内置） |
| **分类** | 文档处理 |
| **一句话** | 从文档中提取带引用的义务、截止日期和任务清单 |

**安装指令：**

```
安装 document-to-action-items Skill（Hermes Agent 官方内置）。
来源：https://hermes-agent.nousresearch.com/docs/zh-Hans/skills
安装方式：安装 Hermes Agent 后内置，直接 /document-to-action-items 调用。
安装后，Agent 通读合同/方案/通知等文档，提取每条义务、截止日期和任务，
每条附原文引用，方便核对执行。
```

---

## 🎬 视频制作

视频生成、剪辑、动画与导演制作管线。

### 14 — HyperFrames

| 字段 | 值 |
|------|-----|
| **来源** | heygen-com |
| **分类** | 视频制作 |
| **一句话** | 一句话生成动效视频：HTML/CSS/动画制作产品介绍/动态海报/知识视频，输出 MP4 |

**安装指令：**

```
安装 HyperFrames Skill。
来源：https://github.com/heygen-com/hyperframes
安装后，告诉 Codex 视频主题，它可以用 HTML、CSS 和动画制作产品介绍、动态海报、知识视频和 PPT 风格视频，最后渲染为 MP4。
```

---

### 15 — video-use

| 字段 | 值 |
|------|-----|
| **来源** | browser-use |
| **分类** | 视频制作 |
| **一句话** | Agent 帮你剪视频：删除停顿/错误片段/口头禅，处理字幕/音频/调色/画面动效 |

**安装指令：**

```
安装 video-use Skill。
来源：https://github.com/browser-use/video-use
安装后，把拍摄素材交给 Agent，它可以协助删除停顿、错误片段和口头禅，继续处理字幕、音频、调色与画面动效。
```

---

### 16 — Remotion Skills

| 字段 | 值 |
|------|-----|
| **来源** | Remotion 官方 |
| **分类** | 视频制作 |
| **一句话** | 用 React 代码批量制作视频：排行榜/数据周报/产品更新/固定栏目视频 |

**安装指令：**

```
安装 Remotion Skills。
来源：https://github.com/remotion-dev/skills
安装后，可以使用 React 编写视频，统一控制画面、字幕、动画和时间轴。特别适合批量制作排行榜、数据周报、产品更新和固定栏目视频。
```

---

### 17 — Generative Media Skills

| 字段 | 值 |
|------|-----|
| **来源** | SamurAIGPT |
| **分类** | 视频制作 |
| **一句话** | AI 视频/图片/音频生成工具箱：广告/UGC/音乐视频/社交媒体短片 |

**安装指令：**

```
安装 Generative Media Skills。
来源：https://github.com/SamurAIGPT/Generative-Media-Skills
安装后，可以调用 AI 模型制作产品广告、UGC 视频、音乐视频和社交媒体短片。部分功能需要配置 MuAPI，并会产生生成费用。
```

---

### 18 — videocut-skills

| 字段 | 值 |
|------|-----|
| **来源** | Agentchengfeng（原 Ceeon） |
| **分类** | 视频制作 |
| **一句话** | 面向中文创作者的视频剪辑 Agent（原 videocut-skills，已迁移改名）：素材/字幕/短视频制作流程 |

**安装指令：**

```
安装 videocut-skills。
来源：https://github.com/Agentchengfeng/chengfeng-videocut-skills
安装后，Agent 可以理解剪辑需求，并协助处理素材、字幕和短视频制作流程。中文用户想用 Claude Code 或其他 Agent 剪视频，可以重点研究。
```

---

### 19 — seedance2-skill

| 字段 | 值 |
|------|-----|
| **来源** | dexhunter |
| **分类** | 视频制作 |
| **一句话** | 为即梦 Seedance 2.0 设计逐秒分镜/运镜/提示词，输出专业视频提示词 |

**安装指令：**

```
安装 seedance2-skill。
来源：https://github.com/dexhunter/seedance2-skill
安装后，告诉 Codex 一个视频创意，它会设计逐秒分镜、人物动作、运镜、对白、音效和素材引用方式。生成的提示词可以直接交给即梦 Seedance 2.0 制作核心镜头。
```

---

### 61 — Video Frames（视频抽帧）

| 字段 | 值 |
|------|-----|
| **来源** | ClawHub — steipete（★ 129，安装 1.6k） |
| **分类** | 视频制作 |
| **一句话** | 用 ffmpeg 从视频中提取帧或短片段 |

**安装指令：**

```
安装 Video Frames Skill。
来源：https://clawhub.ai/steipete/skills/video-frames（★ 129）
安装后，Agent 可用 ffmpeg 从视频中提取帧或短片段。
```

---

### 76 — FFmpeg Skill（专业视频处理）

| 字段 | 值 |
|------|-----|
| **来源** | fabriqaai / LobeHub |
| **分类** | 视频制作 |
| **一句话** | 专业视频处理命令行神器：格式转换/压缩/剪辑/分析，视频工具链的底层基石 |

**安装指令：**

```
安装 FFmpeg Skill。

首先安装系统级 FFmpeg：
  - macOS: brew install ffmpeg
  - Windows: winget install Gyan.FFmpeg

推荐 Agent Skill：
  - https://github.com/fabriqaai/ffmpeg-analyse-video-skill（分析 + 时间戳总结）
  - LobeHub 搜索 "ffmpeg" 有多个可用 Skill

安装后，Agent 可做格式转换、压缩、剪辑、拼接、提取音频帧等专业视频处理。
很多上层视频工具（Video-Use 等）内部都依赖 FFmpeg。
```

---

### 77 — OpenMontage（智能剪辑拼接）

| 字段 | 值 |
|------|-----|
| **来源** | calesthio |
| **分类** | 视频制作 |
| **一句话** | 世界首个开源 agentic 视频生产系统：12 条 pipeline、100+ 工具、700+ agent skills |

**安装指令：**

```
安装 OpenMontage Skill。
来源：https://github.com/calesthio/OpenMontage
安装后，Claude Code 变成完整视频制作团队：研究→脚本→资产生成→剪辑→合成。
包含 12 条 pipeline、100+ 工具和 700+ agent skills，覆盖视频制作全流程。
```

---

### 78 — Manim Skill（数学动画引擎）

| 字段 | 值 |
|------|-----|
| **来源** | adithya-s-k（Manim Community） |
| **分类** | 视频制作 |
| **一句话** | 3Blue1Brown 同款数学动画引擎：文字描述 → 高质量知识动画视频 |

**安装指令：**

```
安装 Manim Skill。
推荐 Skill 仓库：https://github.com/adithya-s-k/manim_skill
安装：npx skills add adithya-s-k/manim_skill/skills/manimce-best-practices
官方 Manim：https://manim.community

安装后，Agent 可将文字描述变成高质量数学/知识动画视频，
完美复现 3Blue1Brown 风格的知识讲解动画。
```

---

### 99 — seedance-2.0（Seedance 2.0 导演 OS）

| 字段 | 值 |
|------|-----|
| **来源** | Emily2040（⭐ 7.1k） |
| **分类** | 视频制作 |
| **一句话** | Seedance 2.0 完整导演制作管线：专业分镜/运镜/续拍/安全改写，支持多语言提示词 |

**安装指令：**

```
安装 seedance-2.0 Skill OS。
来源：https://github.com/Emily2040/seedance-2.0（⭐ 7.1k）
安装方式：npx skills add https://github.com/Emily2040/seedance-2.0
或 python scripts/install_codex_skill.py
安装后，Agent 获得完整的 Seedance 2.0 导演能力：
- 场景理解 → 导演意图 → 提示词编译的专业管线
- 支持文本/图像/视频/音频四模态输入
- 多语言提示词（中/日/韩/英/西/俄）
- 专业分镜、续拍预案、安全改写、质量评估、交付检查
- 内置 33 个风格示例库和 12 条质量评估管线
```

---

### 128 — huashu-art-motion（艺术动画）

| 字段 | 值 |
|------|-----|
| **来源** | alchaincyf / 花叔（⭐ 2.7k） |
| **分类** | 视频制作 |
| **一句话** | 用代码让画动起来：35 种艺术风格配方 + 9 种解说语法，让 coding agent 把艺术风格写成会动的画 |

**安装指令：**

```
安装 huashu-art-motion Skill。
来源：https://github.com/alchaincyf/huashu-art-motion（⭐ 2.7k）
安装方式：npx skills add alchaincyf/huashu-art-motion
依赖：uv、ffmpeg、Playwright Chromium（uv run --with playwright playwright install chromium）

安装后，Agent 获得「艺术动画」制作能力：
- 35 种艺术风格配方卡（岩洞/埃及壁画/梵高/克里姆特/包豪斯/Kirby 漫画/8-bit/蒸汽波/新海诚等），
  每张附参数、母题动作、签名转场和对应的 Canvas 场景代码
- 9 种解说视频语法（Kurzgesagt/Vox/白板/storytime/动态文字/3Blue1Brown/发布会 UI/财经图表等），
  8 种示范片 + 参数化片段，喂一份 JSON 即可出时长精确到帧的片段（横竖屏/可透明底）
- 长卷穿越片骨架（角色从左走到右，跨边界换画风）＋拆解脚本（把参考动画量成转场/节拍/热图）
- QA 数字验收（qa.py 量稳定/效率/动感/流畅）＋纯代码配乐、字体子集、绿幕抠图等工具
代码与文档 MIT 开源；花叔卡通形象与角色帧仅供本 skill 示范，不随 MIT 授权他用。
```

---

### 130 — seedance-2-5-video-director（Seedance 2.5 视频导演）

| 字段 | 值 |
|------|-----|
| **来源** | liyue-aigc（★ 566） |
| **分类** | 视频制作 |
| **一句话** | 面向 Dreamina／即梦 Seedance 2.5 的视频导演 Skill：把创意/参考图/视频/音频整理成脚本、导演方案、诊断结果与复制即用的提示词 |

**安装指令：**

```
安装 seedance-2-5-video-director Skill。
来源：https://github.com/liyue-aigc/seedance-2-5-video-director（★ 566）
安装方式：npx skills add liyue-aigc/seedance-2-5-video-director -g -y
（无 Node.js 时可在 Codex 中发送：请使用 $skill-installer，从 GitHub 安装 liyue-aigc/seedance-2-5-video-director）

安装后，Agent 获得 Seedance 2.5 视频导演能力：
- 4–30 秒普通视频与精确 30 秒时间轴，30–180 秒 Long Video
- 视频前置/后置续写、Smart Edit、标记区域编辑、Clay Renderer 粗/精白模
- 两段无缝转场、多格分镜动画、多人物与对白音色、BGM 移除与声画同步
- 人物身份/体型/服装/配饰锁定，提示词冲突诊断并按原结构改写
只在本地产出策划/脚本/诊断/提示词文本，不调用付费接口、不消耗积分。
```

---

## 📊 商业与金融

商业分析、金融投资、市场情报与广告数据。

### 10 — Business Data Analyst

| 字段 | 值 |
|------|-----|
| **来源** | phoenixlucky |
| **分类** | 商业与金融 |
| **一句话** | 商业分析与指标拆解，业务问题→分析方案→可执行建议 |

**安装指令：**

```
安装 Business Data Analyst Skill。
来源：https://github.com/phoenixlucky/business-data-analyst-skill
安装后，将业务问题翻译成分析方案，统一指标口径，拆解增长/转化/留存问题。
```

---

### 11 — Weiliaozi Analysis（尉缭子分析法）

| 字段 | 值 |
|------|-----|
| **来源** | phoenixlucky |
| **分类** | 商业与金融 |
| **一句话** | 结构化五栏分析框架：本质→条件→得失→先后→对手 |

**安装指令：**

```
安装 Weiliaozi Analysis Skill。
来源：https://github.com/phoenixlucky/weiliaozi-skill
安装后，用五栏框架分析复杂决策问题：先看结构，再看约束，再算利弊，
最后定顺序与对抗策略。
```

---

### 13 — Financial Analyst

| 字段 | 值 |
|------|-----|
| **来源** | phoenixlucky |
| **分类** | 商业与金融 |
| **一句话** | 金融投资分析：周期定位→六栏框架→交易策略与风险判断 |

**安装指令：**

```
安装 Financial Analyst Skill。
来源：https://github.com/phoenixlucky/financial-analyst-skill
安装后，分析市场方向、行业赛道、个股估值、持仓复盘和交易策略。
```

---

### 55 — AdMapix（广告情报）

| 字段 | 值 |
|------|-----|
| **来源** | ClawHub — fly0pants（★ 286） |
| **分类** | 商业与金融 |
| **一句话** | 广告情报与应用分析助手，搜索广告素材、分析 App、排名、下载、收入和市场洞察 |

**安装指令：**

```
安装 AdMapix Skill。
来源：https://clawhub.ai/fly0pants/skills/admapix（★ 286）
安装后，Agent 可搜索广告素材、分析 App 及其排名、下载量、收入和市场洞察，
用于广告素材和竞品分析。
```

---

### 56 — Polymarket（预测市场）

| 字段 | 值 |
|------|-----|
| **来源** | ClawHub — mvanhorn（★ 22） |
| **分类** | 商业与金融 |
| **一句话** | 接入 Polymarket 预测市场数据 |

**安装指令：**

```
安装 Polymarket Skill。
来源：https://clawhub.ai/mvanhorn/skills/polymarket（★ 22）
安装后，Agent 可查询 Polymarket 预测市场的行情和事件数据。
```

---

### 57 — Automation Workflows（自动化工作流）

| 字段 | 值 |
|------|-----|
| **来源** | ClawHub — jk-0001（★ 305，安装 1.1k） |
| **分类** | 商业与金融 |
| **一句话** | 设计并实现自动化工作流，覆盖 Zapier/Make/n8n 工具选型、触发器和测试维护 |

**安装指令：**

```
安装 Automation Workflows Skill。
来源：https://clawhub.ai/jk-0001/skills/automation-workflows（★ 305）
安装后，识别可自动化的重复任务、设计工作流、选型工具（Zapier、Make、n8n），
并完成测试和维护。触发词：自动化、workflow、省时间。
```

---

### 58 — Model Usage（模型用量统计）

| 字段 | 值 |
|------|-----|
| **来源** | ClawHub — steipete（★ 113，安装 1.6k） |
| **分类** | 商业与金融 |
| **一句话** | 用 CodexBar CLI 统计各模型的本地用量和成本 |

**安装指令：**

```
安装 Model Usage Skill。
来源：https://clawhub.ai/steipete/skills/model-usage（★ 113）
安装后，可以用 CodexBar CLI 汇总 Codex/Claude 各模型的用量和成本，
输出当前模型或完整模型明细。
```

---

### 59 — Blogwatcher（博客监控）

| 字段 | 值 |
|------|-----|
| **来源** | ClawHub — steipete（★ 70，安装 1.5k） |
| **分类** | 商业与金融 |
| **一句话** | 用 blogwatcher CLI 监控博客和 RSS/Atom 订阅源的更新 |

**安装指令：**

```
安装 Blogwatcher Skill。
来源：https://clawhub.ai/steipete/skills/blogwatcher（★ 70）
安装后，Agent 可用 blogwatcher CLI 监控博客和 RSS/Atom 订阅源的更新。
```

---

### 101 — solo-law-firm-agents（一人律所 Agents）

| 字段 | 值 |
|------|-----|
| **来源** | saysoph（⭐ 41） |
| **分类** | 商业与金融 |
| **一句话** | 一人律所 Agents：28 位 AI 虚拟专员、7 大部门，覆盖接案/检索/文书/排期/催收/品宣/知识沉淀全链条 |

**安装指令：**

```
安装 solo-law-firm-agents Skill。
来源：https://github.com/saysoph/solo-law-firm-agents（⭐ 41）
安装后，为独立执业律师组建一支 7×24 小时待命的 AI 律所团队：
- 28 位虚拟专员分布在案件实务/案件管理/客户关系/尽职调查/市场拓展/财务行政/知识管理 7 大部门
- 每位专员自带标准交付物（法条清单、风险批注版合同、证据目录、法官画像报告等）
- 跨部门协同 + 知识复利：胜诉经验脱敏后沉淀回律所私有智库
推荐从「初次咨询接待」专员开始，先生成标准化案情摘要卡再分派任务。
```

---

### 105 — competitor-analysis（竞品深度分析）

| 字段 | 值 |
|------|-----|
| **来源** | browserbase（⭐ 3.7k） |
| **分类** | 商业与金融 |
| **一句话** | 自动发现公司竞品，营销/信号/基准/战略四维深研，输出可浏览 HTML 报告 |

**安装指令：**

```
安装 competitor-analysis Skill。
来源：https://github.com/browserbase/skills（skills/competitor-analysis，⭐ 3.7k）
安装方式：npx skills add browserbase/skills
安装后，给它一家公司，自动完成：
- 用 Browserbase Search API 自动发现竞品
- 营销/信号/基准/战略差异四条线深度研究
- 产出带总览、单家深潜、功能/定价矩阵、提及情报流的 HTML 报告
适合商业情报、产品定位、投资研究。依赖 Browserbase 云（API key）。
```

---

### 106 — company-research（ICP 目标公司研究）

| 字段 | 值 |
|------|-----|
| **来源** | browserbase（⭐ 3.7k） |
| **分类** | 商业与金融 |
| **一句话** | 按 ICP 画像发现目标公司，逐家深研并打分，输出研究报告和 CSV |

**安装指令：**

```
安装 company-research Skill。
来源：https://github.com/browserbase/skills（skills/company-research，⭐ 3.7k）
安装方式：npx skills add browserbase/skills
安装后，描述你的理想客户画像（ICP）：
- 用 Browserbase Search API 发现匹配公司
- 逐家深度研究并按匹配度打分
- 输出研究报告 + CSV 清单
适合 B2B 销售线索、投资标的筛选。依赖 Browserbase 云（API key）。
```

---

### 111 — competitor-news-monitor（竞品新闻监控）

| 字段 | 值 |
|------|-----|
| **来源** | Hermes Agent / Nous Research（官方内置） |
| **分类** | 商业与金融 |
| **一句话** | 盯住指定公司的重大新闻，输出带引用的情报简报 |

**安装指令：**

```
安装 competitor-news-monitor Skill（Hermes Agent 官方内置）。
来源：https://hermes-agent.nousresearch.com/docs/zh-Hans/skills
安装方式：安装 Hermes Agent 后内置，直接 /competitor-news-monitor 调用。
安装后，Agent 持续关注指定公司的重大新闻（融资/财报/人事/产品），
生成带来源引用的情报简报，与 competitor-analysis 的深度报告互补。
```

---

### 143 — marketingskills（40+ 营销技能包）

| 字段 | 值 |
|------|-----|
| **来源** | coreyhaines31 / Corey Haines（⭐ 32.8k） |
| **分类** | 商业与金融 |
| **一句话** | 面向营销的 AI Agent 技能合集：CRO、文案、SEO、分析、增长工程，40+ 个可复用营销技能 |

**安装指令：**

```
安装 marketingskills Skill 包。
来源：https://github.com/coreyhaines31/marketingskills（⭐ 32.8k）
安装方式（任选）：
- 全部：npx skills add coreyhaines31/marketingskills
- 指定：npx skills add coreyhaines31/marketingskills --skill page-cro copywriting
- Claude Code 插件：/plugin install marketing-skills

安装后，Agent 覆盖 20+ 营销工作流，如：
- 转化优化：page-cro、form-cro、signup-flow-cro、onboarding-cro
- 文案：copywriting、copy-editing；社媒 social-content
- 邮件：email-sequence；增长：marketing-ideas（140 条）、marketing-psychology（70+ 心智模型）
- 发布：launch-strategy；定价：pricing-strategy
先用 .agents/product-marketing.md（或 .claude/ 回退）写入产品营销上下文。
支持 Claude Code / Codex / Cursor / Windsurf 等。MIT。
```

---

## 🔌 集成与协作

打通第三方服务：GitHub、邮箱、日历、密码等。

### 36 — Github

| 字段 | 值 |
|------|-----|
| **来源** | ClawHub — steipete（★ 636，安装 4.5k） |
| **分类** | 集成与协作 |
| **一句话** | 用 `gh` CLI 操作 GitHub：issue、PR、CI 运行和高级查询 |

**安装指令：**

```
安装 Github Skill。
来源：https://clawhub.ai/steipete/skills/github（★ 636）
安装后，可以用 gh issue、gh pr、gh run、gh api 操作 GitHub 的 issue、PR、CI 和高级查询。
```

---

### 37 — Gog（Google Workspace）

| 字段 | 值 |
|------|-----|
| **来源** | ClawHub — steipete（★ 924，安装 3.7k） |
| **分类** | 集成与协作 |
| **一句话** | Google Workspace CLI：Gmail、日历、Drive、通讯录、Sheets、Docs 一站式操控 |

**安装指令：**

```
安装 Gog Skill。
来源：https://clawhub.ai/steipete/skills/gog（★ 924）
安装后，Agent 可直接操作 Gmail、Google 日历、Drive、通讯录、Sheets 和 Docs。
```

---

### 38 — Slack

| 字段 | 值 |
|------|-----|
| **来源** | ClawHub — steipete（★ 158，安装 1.4k） |
| **分类** | 集成与协作 |
| **一句话** | 从 Agent 控制 Slack：发消息、表情回复、置顶/取消置顶等 |

**安装指令：**

```
安装 Slack Skill。
来源：https://clawhub.ai/steipete/skills/slack（★ 158）
安装后，可以通过 slack 工具控制 Slack：发/改/删消息、表情回复、管理置顶和成员信息。
```

---

### 39 — Trello

| 字段 | 值 |
|------|-----|
| **来源** | ClawHub — steipete（★ 161，安装 1.3k） |
| **分类** | 集成与协作 |
| **一句话** | 通过 Trello REST API 管理看板、列表和卡片 |

**安装指令：**

```
安装 Trello Skill。
来源：https://clawhub.ai/steipete/skills/trello（★ 161）
安装后，Agent 可以管理 Trello 看板、列表和卡片。
```

---

### 40 — Notion

| 字段 | 值 |
|------|-----|
| **来源** | ClawHub — steipete（★ 259，安装 2.4k） |
| **分类** | 集成与协作 |
| **一句话** | Notion API 创建和管理页面、数据库与 block |

**安装指令：**

```
安装 Notion Skill。
来源：https://clawhub.ai/steipete/skills/notion（★ 259）
安装后，Agent 可通过 Notion API 创建和管理页面、数据库与 block。
```

---

### 41 — Obsidian

| 字段 | 值 |
|------|-----|
| **来源** | ClawHub — steipete（★ 428，安装 2.6k） |
| **分类** | 集成与协作 |
| **一句话** | 操作 Obsidian 笔记库（纯 Markdown）并通过 obsidian-cli 自动化 |

**安装指令：**

```
安装 Obsidian Skill。
来源：https://clawhub.ai/steipete/skills/obsidian（★ 428）
安装后，Agent 可以读写 Obsidian 笔记库（纯 Markdown），并通过 obsidian-cli 自动化笔记流程。
```

---

### 42 — Discord

| 字段 | 值 |
|------|-----|
| **来源** | ClawHub — steipete（★ 77，安装 1.3k） |
| **分类** | 集成与协作 |
| **一句话** | 从 Agent 控制 Discord：发消息、表情、投票、管理频道/成员/权限 |

**安装指令：**

```
安装 Discord Skill。
来源：https://clawhub.ai/steipete/skills/discord（★ 77）
安装后，可以通过 discord 工具控制 Discord：发消息、表情、贴纸、投票，
管理话题/置顶/搜索，以及处理频道权限和成员/角色信息。
```

---

### 43 — mcporter（MCP 工具箱）

| 字段 | 值 |
|------|-----|
| **来源** | ClawHub — steipete（★ 194，安装 2.0k） |
| **分类** | 集成与协作 |
| **一句话** | 用 mcporter CLI 列出、配置、授权并调用任意 MCP 服务器/工具（HTTP 或 stdio） |

**安装指令：**

```
安装 mcporter Skill。
来源：https://clawhub.ai/steipete/skills/mcporter（★ 194）
安装后，可以用 mcporter CLI 直接列出、配置、授权并调用 MCP 服务器和工具，
支持临时服务器、配置编辑和 CLI/类型生成。
```

---

### 44 — Himalaya（终端邮件）

| 字段 | 值 |
|------|-----|
| **来源** | ClawHub — lamelas（★ 69，安装 1.5k） |
| **分类** | 集成与协作 |
| **一句话** | 用 himalaya CLI 通过 IMAP/SMTP 收发、搜索和管理邮件 |

**安装指令：**

```
安装 Himalaya Skill。
来源：https://clawhub.ai/lamelas/skills/himalaya（★ 69）
安装后，Agent 可在终端用 himalaya 列出、读取、撰写、回复、转发、搜索和整理邮件，支持多账户。
```

---

### 45 — 1Password

| 字段 | 值 |
|------|-----|
| **来源** | ClawHub — steipete（★ 52，安装 1.3k） |
| **分类** | 集成与协作 |
| **一句话** | 设置并使用 1Password CLI（op），读取/注入/运行密钥 |

**安装指令：**

```
安装 1Password Skill。
来源：https://clawhub.ai/steipete/skills/1password（★ 52）
安装后，可以安装 op CLI、启用桌面应用集成、登录（单/多账户），
并读取/注入/运行密钥。
```

---

### 46 — Apple Notes

| 字段 | 值 |
|------|-----|
| **来源** | ClawHub — steipete（★ 57，安装 1.4k） |
| **分类** | 集成与协作 |
| **一句话** | 用 `memo` CLI 在 macOS 上管理 Apple Notes（创建/查看/编辑/搜索/导出） |

**安装指令：**

```
安装 Apple Notes Skill。
来源：https://clawhub.ai/steipete/skills/apple-notes（★ 57）
安装后，Agent 可通过 memo CLI 在 macOS 上创建、查看、编辑、删除、搜索、移动和导出 Apple Notes。
```

---

### 47 — Apple Reminders

| 字段 | 值 |
|------|-----|
| **来源** | ClawHub — steipete（★ 54，安装 1.3k） |
| **分类** | 集成与协作 |
| **一句话** | 用 `remindctl` CLI 管理 Apple 提醒事项（列表/添加/编辑/完成/删除） |

**安装指令：**

```
安装 Apple Reminders Skill。
来源：https://clawhub.ai/steipete/skills/apple-reminders（★ 54）
安装后，Agent 可通过 remindctl CLI 管理 Apple 提醒事项：列表、日期筛选、增删改和 JSON/纯文本输出。
```

---

### 48 — CalDAV Calendar

| 字段 | 值 |
|------|-----|
| **来源** | ClawHub — asleep123（★ 242） |
| **分类** | 集成与协作 |
| **一句话** | 用 vdirsyncer + khal 同步查询 CalDAV 日历（iCloud/Google/Fastmail/Nextcloud） |

**安装指令：**

```
安装 CalDAV Calendar Skill。
来源：https://clawhub.ai/asleep123/skills/caldav-calendar（★ 242）
安装后，可以用 vdirsyncer 把 CalDAV 日历（iCloud、Google、Fastmail、Nextcloud 等）
同步到本地 .ics 文件，再用 khal 查看、搜索、创建和编辑事件。仅支持 Linux。
```

---

### 118 — meeting-action-items（会议行动项）

| 字段 | 值 |
|------|-----|
| **来源** | Hermes Agent / Nous Research（官方内置） |
| **分类** | 集成与协作 |
| **一句话** | 会议记录 → 带引用的决策、负责人和待办工单 |

**安装指令：**

```
安装 meeting-action-items Skill（Hermes Agent 官方内置）。
来源：https://hermes-agent.nousresearch.com/docs/zh-Hans/skills
安装方式：安装 Hermes Agent 后内置，直接 /meeting-action-items 调用。
安装后，Agent 把会议纪要提炼成决策、负责人和待办清单，
每条附原文引用，直接对接工单系统。
```

---

## 🔍 搜索与浏览

搜索引擎与浏览器自动化，获取实时信息。

### 49 — Multi Search Engine（多搜索引擎）

| 字段 | 值 |
|------|-----|
| **来源** | ClawHub — gpyangyoujun（★ 727，安装 2.2k） |
| **分类** | 搜索与浏览 |
| **一句话** | 集成 16 个搜索引擎（7 国内 + 9 全球），支持高级运算符和时间筛选 |

**安装指令：**

```
安装 Multi Search Engine Skill。
来源：https://clawhub.ai/gpyangyoujun/skills/multi-search-engine（★ 727）
安装后，Agent 可调用 16 个搜索引擎（7 国内 + 9 全球），
支持高级搜索运算符、时间筛选、站内搜索和隐私引擎。
```

---

### 50 — Tavily 搜索

| 字段 | 值 |
|------|-----|
| **来源** | ClawHub — jacky1n7（★ 263，安装 1.4k） |
| **分类** | 搜索与浏览 |
| **一句话** | 通过 Tavily API 联网搜索（Brave 不可用时的替代方案） |

**安装指令：**

```
安装 Tavily 搜索 Skill。
来源：https://clawhub.ai/jacky1n7/skills/openclaw-tavily-search（★ 263）
安装后，当需要联网搜索、查找资料或获取链接时，可通过 Tavily API 搜索，
作为 Brave web_search 不可用时的替代方案。
```

---

### 51 — Baidu 搜索

| 字段 | 值 |
|------|-----|
| **来源** | ClawHub — ide-rea（★ 216） |
| **分类** | 搜索与浏览 |
| **一句话** | 用百度 AI 搜索引擎（BDSE）联网搜索，适合中文实时信息 |

**安装指令：**

```
安装 Baidu 搜索 Skill。
来源：https://clawhub.ai/ide-rea/skills/baidu-search（★ 216）
安装后，Agent 可用百度 AI 搜索引擎联网搜索，适合查询实时信息、文档资料或研究类中文内容。
```

---

### 52 — Agent Browser（无头浏览器）

| 字段 | 值 |
|------|-----|
| **来源** | ClawHub — matrixy（★ 424） |
| **分类** | 搜索与浏览 |
| **一句话** | 为 AI Agent 优化的无头浏览器自动化 CLI，带可访问性树快照和 ref 元素选择 |

**安装指令：**

```
安装 Agent Browser Skill。
来源：https://clawhub.ai/matrixy/skills/agent-browser-clawdbot（★ 424）
安装后，Agent 可以驱动无头浏览器自动化网页操作，
通过可访问性树快照和 ref 元素引用精准定位和点击页面元素。
```

---

### 89 — browser-use（AI 浏览器自动化）

| 字段 | 值 |
|------|-----|
| **来源** | browser-use（⭐ 112k） |
| **分类** | 搜索与浏览 |
| **一句话** | 让 AI 像真人一样点鼠标、登录、填表，ETH Zurich 学生团队出品 |

**安装指令：**

```
安装 browser-use Skill。
来源：https://github.com/browser-use/browser-use（⭐ 112k）
安装后，Agent 可驱动真实浏览器进行页面操作：点击、输入、登录、
表单填写等，适合需要交互操作的场景。
```

---

### 100 — chrome-mcp-bridge-2026-skill（Chrome MCP 桥接）

| 字段 | 值 |
|------|-----|
| **来源** | phoenixlucky |
| **分类** | 搜索与浏览 |
| **一句话** | MCP Streamable HTTP 桥接工具：session ID 自动持久化，零配置连接 Chrome MCP 服务 |

**安装指令：**

```
安装 chrome-mcp-bridge-2026-skill Skill。
来源：https://github.com/phoenixlucky/chrome-mcp-bridge-2026-skill
安装：git clone 仓库后，Reasonix 自动发现 .reasonix/skills/mcp-streamable-connect/
前置条件：Node.js ≥ 18，MCP 服务运行于 http://127.0.0.1:12306/mcp

使用示例：
  node mcp-bridge.js init                          # 初始化连接
  node mcp-bridge.js call tools/list               # 列出工具
  node mcp-bridge.js call tools/call '{...}'       # 调用工具
  node mcp-bridge.js close                         # 关闭连接

安装后，Agent 获得稳定的 MCP Streamable HTTP 连接能力：
- Session ID 自动持久化到临时文件，跨调用无缝复用
- 超时自动重连，30 秒请求超时兜底
- 支持 Chrome 浏览器自动化工具（导航/截图/点击/表单/数据提取等 28+ 工具）
- 纯 Node.js 内置 fetch API，零外部依赖
```

---

### 104 — browser（最强浏览器自动化）

| 字段 | 值 |
|------|-----|
| **来源** | browserbase（⭐ 3.7k） |
| **分类** | 搜索与浏览 |
| **一句话** | 最强浏览器自动化：CAPTCHA 自动解决、住宅代理、远程会话，支持登录态复用 |

**安装指令：**

```
安装 browser Skill。
来源：https://github.com/browserbase/skills（skills/browser，⭐ 3.7k）
安装方式：npx skills add browserbase/skills
安装后，Agent 可自动化真实浏览器操作：
- 远程 Browserbase 会话 + Browserbase Identity 登录态复用
- Verified 浏览器反爬、CAPTCHA 自动解决
- 住宅代理出口，绕过地域限制
- 本地 --local 模式（干净隔离浏览器）和 --auto-connect（复用本地 Chrome）
本地模式免费，远程模式需要 Browserbase 账号（有免费额度）。
```

---

### 107 — arxiv（论文搜索）

| 字段 | 值 |
|------|-----|
| **来源** | Hermes Agent / Nous Research（官方内置） |
| **分类** | 搜索与浏览 |
| **一句话** | 按关键词/作者/分类/ID 搜索 arXiv 论文，做学术调研 |

**安装指令：**

```
安装 arxiv Skill（Hermes Agent 官方内置）。
来源：https://hermes-agent.nousresearch.com/docs/zh-Hans/skills
安装方式：安装 Hermes Agent（https://hermes-agent.nousresearch.com）后内置，
直接 /arxiv 或 hermes -s arxiv 调用。
安装后，Agent 可按关键词、作者、分类或论文 ID 搜索 arXiv 论文，
获取标题/摘要/链接，适合学术调研和资料收集。
```

---

### 141 — last30days（近 30 天舆情调研）

| 字段 | 值 |
|------|-----|
| **来源** | mvanhorn（⭐ 63.9k） |
| **分类** | 搜索与浏览 |
| **一句话** | 跨 Reddit/X/YouTube/TikTok/HN/Polymarket/GitHub 等平台，调研任何话题最近 30 天真实讨论，综合成带引用的简报 |

**安装指令：**

```
安装 last30days Skill。
来源：https://github.com/mvanhorn/last30days-skill（⭐ 63.9k）
安装方式（任选）：
- Claude Code：/plugin marketplace add mvanhorn/last30days-skill 然后 /plugin install last30days
- 其他 50+ Agent Skills 宿主：npx skills add mvanhorn/last30days-skill -g
- claude.ai 网页版：下载 last30days.skill 上传到 Settings > Capabilities > Skills

安装后，/last30days <话题> 并行搜索多平台并按真实互动（赞/票/真金下注）打分，综合成一份简报：
- 零配置即可用：Reddit（含评论）+ HN + Polymarket + GitHub
- 首次运行向导 30 秒解锁 X / YouTube / TikTok / arXiv / Techmeme 等
- 支持对比模式（/last30days A vs B）、发现模式（what's trending）、--emit=html 简报
- 人物模式、--hiring-signals、watchlist 趋势监控、本地 library 检索
MIT 开源、本地运行、2700+ 测试。
```

---

## 🕷️ 数据采集与爬虫

网页抓取、爬虫框架与反爬伪装。

### 82 — Agent-Reach（全网情报抓取）

| 字段 | 值 |
|------|-----|
| **来源** | Panniantong |
| **分类** | 数据采集与爬虫 |
| **一句话** | 一 CLI 零 API 费用实时抓取 Twitter/X、Reddit、YouTube、GitHub、Bilibili、小红书情报 |

**安装指令：**

```
安装 Agent-Reach Skill。
来源：https://github.com/Panniantong/Agent-Reach
安装后，Agent 可一键抓取 Twitter/X、Reddit、YouTube、GitHub、Bilibili 等平台
实时情报并自动总结。无需多工具切换，一条命令全包，效率直接起飞。
```

---

### 87 — Firecrawl（整站爬取）

| 字段 | 值 |
|------|-----|
| **来源** | firecrawl（⭐ 176k，GitHub Top 100） |
| **分类** | 数据采集与爬虫 |
| **一句话** | 丢个 URL 进去整站爬完，吐出 AI 能直接吃的干净数据，JS 渲染页面也扛得住 |

**安装指令：**

```
安装 Firecrawl Skill。
来源：https://github.com/firecrawl/firecrawl（⭐ 176k）
安装后，Agent 可一键爬取整站并返回结构化数据，
支持 JS 渲染页面抓取，输出格式 AI 可直接消费。
```

---

### 88 — Crawl4AI（LLM 就绪网页抓取）

| 字段 | 值 |
|------|-----|
| **来源** | unclecode（⭐ 81k） |
| **分类** | 数据采集与爬虫 |
| **一句话** | 把网站整成 LLM 能直接读的文本，不要 API Key 不要钱 |

**安装指令：**

```
安装 Crawl4AI Skill。
来源：https://github.com/unclecode/crawl4ai（⭐ 81k）
安装后，Agent 可直接将 URL 内容转为 LLM 友好文本格式，
无需任何 API Key，零成本使用。
```

---

### 90 — Crawlee（爬虫框架）

| 字段 | 值 |
|------|-----|
| **来源** | apify |
| **分类** | 数据采集与爬虫 |
| **一句话** | 自动换代理/重试/伪装指纹/管队列，整套躲限制的爬虫框架 |

**安装指令：**

```
安装 Crawlee Skill。
来源：https://github.com/apify/crawlee
安装后，Agent 获得完整爬虫框架能力：自动代理轮换、
请求重试、浏览器指纹伪装、URL 队列管理等功能。
```

---

### 91 — Scrapy（老牌爬虫）

| 字段 | 值 |
|------|-----|
| **来源** | scrapy（⭐ 64k） |
| **分类** | 数据采集与爬虫 |
| **一句话** | 干了十多年的老牌爬虫框架，几百万页面照样稳，永久免费 |

**安装指令：**

```
安装 Scrapy Skill。
来源：https://github.com/scrapy/scrapy
安装后，Agent 可使用业界最成熟的 Python 爬虫框架，
处理百万级页面稳定可靠，支持中间件扩展和数据管道。
```

---

### 92 — Scrapling（自适应爬虫）

| 字段 | 值 |
|------|-----|
| **来源** | D4Vinci |
| **分类** | 数据采集与爬虫 |
| **一句话** | 网站改版它自己适应，持续躲封禁，免费版能打付费的 |

**安装指令：**

```
安装 Scrapling Skill。
来源：https://github.com/D4Vinci/Scrapling
安装后，Agent 获得自适应爬虫能力：自动适应网站结构变化、
持续躲避反爬封禁，免费使用。
```

---

### 93 — AutoScraper（自动学习爬虫）

| 字段 | 值 |
|------|-----|
| **来源** | alirezamika |
| **分类** | 数据采集与爬虫 |
| **一句话** | 给它一个样例，它自己学规律批量扒，不用写选择器 |

**安装指令：**

```
安装 AutoScraper Skill。
来源：https://github.com/alirezamika/autoscraper
安装后，Agent 可通过示例页面自动学习抓取规则，
无需手动编写 CSS 选择器或 XPath，几行 Python 就能跑。
```

---

### 96 — curl-impersonate（请求指纹伪装）

| 字段 | 值 |
|------|-----|
| **来源** | lwthiker |
| **分类** | 数据采集与爬虫 |
| **一句话** | 把请求伪装成真 Chrome 浏览器指纹，绕反爬不要太轻松 |

**安装指令：**

```
安装 curl-impersonate Skill。
来源：https://github.com/lwthiker/curl-impersonate
安装后，Agent 发起的 HTTP 请求会伪装成真实 Chrome 浏览器指纹，
包括 TLS 握手、HTTP/2 帧等，轻松绕过反爬检测。
```

---

### 97 — MediaCrawler（自媒体数据采集）

| 字段 | 值 |
|------|-----|
| **来源** | NanmiCoder（⭐ 64k） |
| **分类** | 数据采集与爬虫 |
| **一句话** | 多平台自媒体数据采集：小红书/抖音/B站/微博/快手/贴吧/知乎，支持关键词搜索和评论爬取 |

**安装指令：**

```
安装 MediaCrawler Skill。
来源：https://github.com/NanmiCoder/MediaCrawler（⭐ 64k）
安装后，Agent 可采集小红书、抖音、快手、B 站、微博、贴吧、知乎等平台
的帖子/视频/评论公开数据，支持关键词搜索和指定 ID 爬取。
```

---

### 103 — browser-to-api（网站流量转 OpenAPI）

| 字段 | 值 |
|------|-----|
| **来源** | browserbase（⭐ 3.7k） |
| **分类** | 数据采集与爬虫 |
| **一句话** | 观察网站 HTTP 流量，逆向生成 OpenAPI 3.1 规范，把网页变可调用的 API |

**安装指令：**

```
安装 browser-to-api Skill。
来源：https://github.com/browserbase/skills（skills/browser-to-api，⭐ 3.7k）
安装方式：npx skills add browserbase/skills
安装后，捕获一次浏览器会话的流量（browser-trace 或 HAR），
它自动分析请求-响应，产出 best-effort OpenAPI 3.1 规范：
- 识别端点、方法、参数与请求/响应结构
- 导出 API 文档或 SDK 客户端，绕过网页直接调接口
适合数据采集、接口逆向、无官方 API 的网站集成。
```

---

### 110 — product-price-monitor（价格监控）

| 字段 | 值 |
|------|-----|
| **来源** | Hermes Agent / Nous Research（官方内置） |
| **分类** | 数据采集与爬虫 |
| **一句话** | 监控商品/航班/挂牌价格，达到目标价自动提醒 |

**安装指令：**

```
安装 product-price-monitor Skill（Hermes Agent 官方内置）。
来源：https://hermes-agent.nousresearch.com/docs/zh-Hans/skills
安装方式：安装 Hermes Agent 后内置，直接 /product-price-monitor 调用。
安装后，Agent 定期盯商品、航班或房源价格，达到目标价就提醒你。
```

---

## 🖥️ 终端与自动化

终端控制、UI 自动化与设备操控。

### 53 — Peekaboo（macOS UI 自动化）

| 字段 | 值 |
|------|-----|
| **来源** | ClawHub — steipete（★ 82，安装 1.3k） |
| **分类** | 终端与自动化 |
| **一句话** | 用 Peekaboo CLI 捕获并自动化 macOS UI |

**安装指令：**

```
安装 Peekaboo Skill。
来源：https://clawhub.ai/steipete/skills/peekaboo（★ 82）
安装后，Agent 可通过 Peekaboo CLI 捕获屏幕并自动化 macOS 界面操作。
```

---

### 54 — tmux

| 字段 | 值 |
|------|-----|
| **来源** | ClawHub — steipete（★ 43，安装 1.4k） |
| **分类** | 终端与自动化 |
| **一句话** | 远程控制 tmux 会话，向交互式 CLI 发送按键并抓取输出 |

**安装指令：**

```
安装 tmux Skill。
来源：https://clawhub.ai/steipete/skills/tmux（★ 43）
安装后，Agent 可以远程控制 tmux 会话，向交互式 CLI 发送按键并抓取输出，
适合自动化需要 TTY 的命令行程序。
```

---

### 95 — scrcpy（手机投屏操控）

| 字段 | 值 |
|------|-----|
| **来源** | Genymobile（⭐ 149k） |
| **分类** | 终端与自动化 |
| **一句话** | 用电脑远程操控安卓手机，专治那些只有 App 没网页的数据源 |

**安装指令：**

```
安装 scrcpy Skill。
来源：https://github.com/Genymobile/scrcpy（⭐ 149k）
安装后，Agent 可通过电脑远程操控安卓手机，
适合抓取只有移动 App 没有网页端的数据源。
```

---

### 119 — computer-use（后台桌面操控）

| 字段 | 值 |
|------|-----|
| **来源** | Hermes Agent / Nous Research（官方内置） |
| **分类** | 终端与自动化 |
| **一句话** | 后台驱动桌面完成自动化操作，不抢占焦点 |

**安装指令：**

```
安装 computer-use Skill（Hermes Agent 官方内置）。
来源：https://hermes-agent.nousresearch.com/docs/zh-Hans/skills
安装方式：安装 Hermes Agent 后内置，直接 /computer-use 调用。
安装后，Agent 可在后台驱动桌面（点击/输入/截图），不抢你正在用的窗口焦点，
适合 GUI 自动化、重复点击类任务。
```

---

### 140 — claude-hud（实时状态 HUD）

| 字段 | 值 |
|------|-----|
| **来源** | jarrodwatts（⭐ 28.4k） |
| **分类** | 终端与自动化 |
| **一句话** | Claude Code 状态栏插件：实时显示上下文用量、速率限制、活跃工具、运行中的 Agent 和 todo 进度 |

**安装指令：**

```
安装 claude-hud 插件。
来源：https://github.com/jarrodwatts/claude-hud（⭐ 28.4k）
安装方式：在 Claude Code 内依次执行
  /plugin marketplace add jarrodwatts/claude-hud
  /plugin install claude-hud
  /reload-plugins
  /claude-hud:setup

安装后，输入框下方常驻一条 HUD（无需 tmux，任意终端可用）：
- 模型/provider、项目路径、git 分支；上下文用量条 + 订阅速率限制条
- 可选行：活跃工具、运行中的 Agent、todo 进度、会话时长、成本、缓存命中率等
- /claude-hud:configure 配置布局与元素，支持中英文标签，本地运行、无网络请求
MIT 开源。要求 Claude Code v2.1.260+、Node.js 18+（或 Bun）。
```

---

## 🎵 生活与媒体

天气、音乐、语音、健康等生活场景工具。

### 60 — Weather（天气）

| 字段 | 值 |
|------|-----|
| **来源** | ClawHub — steipete（★ 417，安装 3.9k） |
| **分类** | 生活与媒体 |
| **一句话** | 查询实时天气和预报，无需 API Key |

**安装指令：**

```
安装 Weather Skill。
来源：https://clawhub.ai/steipete/skills/weather（★ 417）
安装后，Agent 可查询实时天气和预报，无需任何 API Key。
```

---

### 62 — OpenAI Whisper（本地语音转文字）

| 字段 | 值 |
|------|-----|
| **来源** | ClawHub — steipete（★ 325，安装 2.1k） |
| **分类** | 生活与媒体 |
| **一句话** | 用 Whisper CLI 本地语音转文字，无需 API Key |

**安装指令：**

```
安装 OpenAI Whisper Skill。
来源：https://clawhub.ai/steipete/skills/openai-whisper（★ 325）
安装后，Agent 可用 Whisper CLI 在本地做语音转文字，无需 API Key。
```

---

### 63 — OpenAI Whisper API（云端语音转文字）

| 字段 | 值 |
|------|-----|
| **来源** | ClawHub — steipete（★ 52，安装 1.2k） |
| **分类** | 生活与媒体 |
| **一句话** | 通过 OpenAI Audio Transcriptions API 转录音频 |

**安装指令：**

```
安装 OpenAI Whisper API Skill。
来源：https://clawhub.ai/steipete/skills/openai-whisper-api（★ 52）
安装后，Agent 可通过 OpenAI Audio Transcriptions API 转录音频。
```

---

### 64 — Sag（ElevenLabs 语音合成）

| 字段 | 值 |
|------|-----|
| **来源** | ClawHub — steipete（★ 26，安装 1.3k） |
| **分类** | 生活与媒体 |
| **一句话** | ElevenLabs 文字转语音，提供 macOS say 风格体验 |

**安装指令：**

```
安装 Sag Skill。
来源：https://clawhub.ai/steipete/skills/sag（★ 26）
安装后，Agent 可用 ElevenLabs 做文字转语音，体验类似 macOS 的 say 命令。
```

---

### 65 — Spotify Player

| 字段 | 值 |
|------|-----|
| **来源** | ClawHub — steipete（★ 54，安装 1.2k） |
| **分类** | 生活与媒体 |
| **一句话** | 终端 Spotify 播放与搜索（spogo 或 spotify_player） |

**安装指令：**

```
安装 Spotify Player Skill。
来源：https://clawhub.ai/steipete/skills/spotify-player（★ 54）
安装后，Agent 可在终端控制 Spotify 播放和搜索（优先 spogo，或 spotify_player）。
```

---

### 66 — Sonos 音箱控制

| 字段 | 值 |
|------|-----|
| **来源** | ClawHub — steipete（★ 55，安装 2.8k） |
| **分类** | 生活与媒体 |
| **一句话** | 控制 Sonos 音箱（发现/状态/播放/音量/分组） |

**安装指令：**

```
安装 Sonoscli Skill。
来源：https://clawhub.ai/steipete/skills/sonoscli（★ 55）
安装后，Agent 可控制 Sonos 音箱：发现设备、查看状态、播放、调节音量和分组。
```

---

### 67 — goplaces（Google 地点查询）

| 字段 | 值 |
|------|-----|
| **来源** | ClawHub — steipete（★ 30，安装 1.3k） |
| **分类** | 生活与媒体 |
| **一句话** | 用 goplaces CLI 查询 Google Places API，做地点搜索/详情/评价 |

**安装指令：**

```
安装 goplaces Skill。
来源：https://clawhub.ai/steipete/skills/goplaces（★ 30）
安装后，Agent 可用 goplaces CLI 查询 Google Places API，
做文本搜索、地点详情、解析和评价，支持人性化输出或 JSON。
```

---

### 68 — Gemini

| 字段 | 值 |
|------|-----|
| **来源** | ClawHub — steipete（★ 56，安装 1.5k） |
| **分类** | 生活与媒体 |
| **一句话** | Gemini CLI 一次性问答、摘要和生成 |

**安装指令：**

```
安装 Gemini Skill。
来源：https://clawhub.ai/steipete/skills/gemini（★ 56）
安装后，Agent 可用 Gemini CLI 做一次性问答、摘要和内容生成。
```

---

### 69 — Session-logs（会话日志）

| 字段 | 值 |
|------|-----|
| **来源** | ClawHub — guogang1024（★ 30，安装 1.4k） |
| **分类** | 生活与媒体 |
| **一句话** | 用 jq 搜索和分析自己的会话日志（历史/父级对话） |

**安装指令：**

```
安装 Session-logs Skill。
来源：https://clawhub.ai/guogang1024/skills/session-logs（★ 30）
安装后，Agent 可用 jq 搜索和分析自己的会话日志（更早或父级对话）。
```

---

### 74 — Healthcheck（喝水/睡眠追踪）

| 字段 | 值 |
|------|-----|
| **来源** | ClawHub — stellarhold170nt（★ 11，安装 1.2k） |
| **分类** | 生活与媒体 |
| **一句话** | 用 JSON 文件存储追踪每日喝水和睡眠 |

**安装指令：**

```
安装 Healthcheck Skill。
来源：https://clawhub.ai/stellarhold170nt/skills/healthcheck（★ 11）
安装后，Agent 可用 JSON 文件存储追踪你每日的喝水和睡眠情况。
```

---

### 86 — family-lovers-skill（家庭关怀）

| 字段 | 值 |
|------|-----|
| **来源** | phoenixlucky |
| **分类** | 生活与媒体 |
| **一句话** | ❤️ 家庭关怀陪伴 Skill：原生家庭觉察与疗愈，内置八大历史人物文化原型自动匹配 |

**安装指令：**

```
安装 family-lovers-skill Skill。
来源：https://github.com/phoenixlucky/family-lovers-skill
安装后，Agent 拥有原生家庭关怀陪伴能力：
- 内置长孙皇后/孟母/诸葛亮/刘伯温等八位历史人物作为陪伴原型
- 自动匹配最佳回应身份（觉察/疗愈/陪伴/行动四模式）
- 16 个扩展角色（女朋友/男朋友/女儿/儿子）可指名调用
- 内置智能路由引擎，根据输入自动检测情绪状态和家庭模式
```

---

### 115 — maps（地图与地理编码）

| 字段 | 值 |
|------|-----|
| **来源** | Hermes Agent / Nous Research（官方内置） |
| **分类** | 生活与媒体 |
| **一句话** | OpenStreetMap/OSRM 地理编码、POI、路线规划、时区查询，免 API Key |

**安装指令：**

```
安装 maps Skill（Hermes Agent 官方内置）。
来源：https://hermes-agent.nousresearch.com/docs/zh-Hans/skills
安装方式：安装 Hermes Agent 后内置，直接 /maps 调用。
安装后，Agent 用 OpenStreetMap/OSRM 做地理编码、POI 搜索、
路线规划、时区查询，无需 API Key。
```

---

### 116 — weekly-review-planning（每周复盘）

| 字段 | 值 |
|------|-----|
| **来源** | Hermes Agent / Nous Research（官方内置） |
| **分类** | 生活与媒体 |
| **一句话** | 每周重置复盘：承诺事项/搁置工作/下周计划 |

**安装指令：**

```
安装 weekly-review-planning Skill（Hermes Agent 官方内置）。
来源：https://hermes-agent.nousresearch.com/docs/zh-Hans/skills
安装方式：安装 Hermes Agent 后内置，直接 /weekly-review-planning 调用。
安装后，Agent 引导做每周复盘：梳理已承诺事项、搁置工作和下周计划，
保持节奏不跑偏。
```

---

### 123 — findmy（查找设备）

| 字段 | 值 |
|------|-----|
| **来源** | Hermes Agent / Nous Research（官方内置） |
| **分类** | 生活与媒体 |
| **一句话** | macOS 上通过 FindMy 定位 Apple 设备和 AirTag |

**安装指令：**

```
安装 findmy Skill（Hermes Agent 官方内置）。
来源：https://hermes-agent.nousresearch.com/docs/zh-Hans/skills
安装方式：安装 Hermes Agent 后内置，直接 /findmy 调用。
安装后，Agent 可在 macOS 上通过 FindMy.app 定位你的 Apple 设备和 AirTag。
```

---

### 124 — imessage（iMessage 收发）

| 字段 | 值 |
|------|-----|
| **来源** | Hermes Agent / Nous Research（官方内置） |
| **分类** | 生活与媒体 |
| **一句话** | macOS 上用 imsg CLI 收发 iMessage/SMS |

**安装指令：**

```
安装 imessage Skill（Hermes Agent 官方内置）。
来源：https://hermes-agent.nousresearch.com/docs/zh-Hans/skills
安装方式：安装 Hermes Agent 后内置，直接 /imessage 调用。
安装后，Agent 可在 macOS 上用 imsg CLI 发送和接收 iMessage/SMS。
```

---

### 125 — gif-search（GIF 搜索）

| 字段 | 值 |
|------|-----|
| **来源** | Hermes Agent / Nous Research（官方内置） |
| **分类** | 生活与媒体 |
| **一句话** | 从 Tenor 搜索/下载 GIF，curl + jq 一行搞定 |

**安装指令：**

```
安装 gif-search Skill（Hermes Agent 官方内置）。
来源：https://hermes-agent.nousresearch.com/docs/zh-Hans/skills
安装方式：安装 Hermes Agent 后内置，直接 /gif-search 调用。
安装后，Agent 可从 Tenor 搜索并下载 GIF，配上 curl + jq 即可。
```

---

## 🔱 DeepSeek Harness 插件

DeepSeek Harness（`dsh`）是 DeepSeek 开源、以「万物皆插件」为架构的 Agent Harness。
本板块收录可直接用于 DSH 的插件与配套生态，安装方式分三类：

- **Bundle 插件**：`dsh plugin --profile web add <npm 包名 | github:owner/repo#ref>`，装完重启 `dsh web`
- **仓储插件（monorepo 子包）**：插件面板 → repository source 填 `github:owner/repo#ref&path:/子目录`
- **桌面端**：从 Releases 下载安装，或使用自带插件市场安装

> ⚠️ 插件代码以你的本机权限运行，可读写文件、使用凭据和访问网络；收录不等于安全审查。
> DSH 仍处于 developer preview，升级宿主后请留意插件版本兼容性。

### 145 — DeepSeek Harness（DSH 本体）

| 字段 | 值 |
|------|-----|
| **来源** | deepseek-ai（⭐ 264k） |
| **分类** | DeepSeek Harness 插件 |
| **一句话** | 万物皆插件的开源 Agent Harness，Web UI / 桌面端 / CLI 三种形态，插件生态的底座 |

**安装指令：**

```
安装 DeepSeek Harness（DSH）。
来源：https://github.com/deepseek-ai/deepseek-harness（⭐ 264k）
安装方式（任选）：
- 免安装试用：npx @deepseek-ai/dsh web（默认 http://127.0.0.1:3080）
- 源码运行：git clone 后 pnpm install && pnpm run build && pnpm dsh web
- 桌面端：https://github.com/anywhere-labs/dsh-desktop

安装后，在 Settings 填入模型 API Key 并选择工作区即可开始会话；
后续插件统一用 dsh plugin --profile web add <包名|github:owner/repo#ref> 安装，
装完重启 dsh web 生效。第三方插件以你的权限运行，安装前先读源码。
```

---

### 146 — dsh-market（插件市场）

| 字段 | 值 |
|------|-----|
| **来源** | dsh-market（⭐ 9.3k） |
| **分类** | DeepSeek Harness 插件 |
| **一句话** | DSH 内置可视化插件市场：搜索、分类、一键安装升级，附带主题切换 |

**安装指令：**

```
安装 dsh-market 插件。
来源：https://github.com/dsh-market/dsh-market（⭐ 9.3k）
安装：dsh plugin --profile web add dshmarket

安装后，Settings → Plugins 出现插件市场：
- 浏览、搜索、一键安装/升级社区插件
- Themes 标签一键切换主题
- 装完重启 dsh web 生效
```

---

### 147 — awesome-dsh-plugin（插件精选清单）

| 字段 | 值 |
|------|-----|
| **来源** | awesome-dsh-plugin（⭐ 21.1k） |
| **分类** | DeepSeek Harness 插件 |
| **一句话** | 社区维护的 DSH 插件精选清单，按 AGI/UI/记忆/工具/通知等 24 类整理 |

**安装指令：**

```
使用 awesome-dsh-plugin（清单，不是插件）。
来源：https://github.com/awesome-dsh-plugin/awesome-dsh-plugin（⭐ 21.1k）
使用方式：
- 直接读 README 按分类挑选，每条都给出 dsh plugin --profile web add 命令
- 在线版：https://awesome-dsh-plugin.com
- 想让 Agent 代找插件：dsh plugin --profile web add dsh-find-plugin

只收录声明 dsh.bundle、能用 dsh plugin add 装上的插件；收录≠安全审查，装前读源码。
```

---

### 148 — dsh-context（上下文透视）

| 字段 | 值 |
|------|-----|
| **来源** | bowenliang123（⭐ 1.3k） |
| **分类** | DeepSeek Harness 插件 |
| **一句话** | 上下文可视化与管理：组成、统计、演进、压缩、剪枝一目了然 |

**安装指令：**

```
安装 dsh-context 插件。
来源：https://github.com/bowenliang123/dsh-context（⭐ 1.3k）
安装：dsh plugin --profile web add dsh-context

安装后，从会话头部或 Settings 打开 Context 面板：
- 查看上下文占比、组成明细和逐轮增长
- 追踪压缩、剪枝等事件，理解上下文如何演进
- 支持 /context 命令，重启 dsh web 生效
```

---

### 149 — DSH-better-sidebar（侧边栏底座）

| 字段 | 值 |
|------|-----|
| **来源** | omdsh-dev（⭐ 3.4k） |
| **分类** | DeepSeek Harness 插件 |
| **一句话** | 可扩展侧边栏底座：文件编辑/终端/侧边对话/Git/子代理页面，第三方可注册新页面 |

**安装指令：**

```
安装 DSH-better-sidebar 插件。
来源：https://github.com/omdsh-dev/DSH-better-sidebar（⭐ 3.4k）
安装：dsh plugin --profile web add dsh-better-sidebar@latest
注意版本匹配：DSH 0.2.1-rc.2 用 @0.26.1；0.2.1-alpha.5 用 @0.28.0-alpha.0；
0.2.1-rc.1+ 用 @0.28.2（完整兼容表见仓库 README）。

安装后，右侧边栏获得文件浏览/编辑、终端、Git、子代理等页面，
并开放注册机制，其他插件可把自己的页面挂进来。
```

---

### 150 — modlens（视觉插件）

| 字段 | 值 |
|------|-----|
| **来源** | liustack（⭐ 3.9k） |
| **分类** | DeepSeek Harness 插件 |
| **一句话** | 给纯文本模型外挂视觉：粘贴图片输出 OCR、版面与语义的结构化 JSON |

**安装指令：**

```
安装 modlens 插件。
来源：https://github.com/liustack/modlens（⭐ 3.9k）
安装：npx -y @deepseek-ai/dsh plugin --profile web add @liustack/modlens

安装后，粘贴图片即可识别（OCR/版面/语义），输出结构化 JSON 证据；
模型选择器会多出 (modlens vision) 入口，可复用本机已有的多模态模型/Key。
图片会经所选视觉通道上传到对应服务商，机密材料请改用本地视觉链。
```

---

### 151 — dsh-vision-router（视觉工具箱）

| 字段 | 值 |
|------|-----|
| **来源** | ysr666（⭐ 1.1k） |
| **分类** | DeepSeek Harness 插件 |
| **一句话** | 文本模型的「眼睛」：免费视觉链 + 像素级工具（问答/定位/裁剪/OCR/抠图） |

**安装指令：**

```
安装 dsh-vision-router 插件。
来源：https://github.com/ysr666/dsh-vision-router（⭐ 1.1k）
安装：npx @deepseek-ai/dsh plugin --profile web add dsh-vision-router

安装后，纯文本模型获得图像输入与像素级视觉工具：
问答、grounding、裁剪、像素 diff、取色、OCR、SVG 描摹、抠图、截图。
默认启用匿名云端视觉兜底，图片会离开本机；敏感场景请切到本地视觉链。
```

---

### 152 — modsearch（免费联网搜索）

| 字段 | 值 |
|------|-----|
| **来源** | liustack（⭐ 433） |
| **分类** | DeepSeek Harness 插件 |
| **一句话** | 给不会联网的模型补上搜索：免注册免 Key，返回结构化 JSON 证据 |

**安装指令：**

```
安装 modsearch 插件。
来源：https://github.com/liustack/modsearch（⭐ 433）
安装：npx -y @deepseek-ai/dsh plugin --profile web add @liustack/modsearch

安装后，DSH 自带 web_search 走 modsearch：
- 默认 Firecrawl 无 Key 额度（每月 1000 次），也可接 Keenable / Antigravity CLI
- 返回带引用的结构化 JSON，支持网页抓取；装有 Grok Build 时还可搜 X
桌面端请在 Plugins → Add plugin 输入 @liustack/modsearch，不要填 GitHub 地址。
```

---

### 153 — dsh-agent-teams（多 Agent 团队）

| 字段 | 值 |
|------|-----|
| **来源** | NanmiCoder（⭐ 1.5k） |
| **分类** | DeepSeek Harness 插件 |
| **一句话** | 给 DSH 加 Agent 团队：多角色并行协作、任务分派与结果汇总 |

**安装指令：**

```
安装 dsh-agent-teams 插件。
来源：https://github.com/NanmiCoder/dsh-agent-teams（⭐ 1.5k）
安装（任选）：
- 插件面板 Add plugin 粘贴 https://github.com/NanmiCoder/dsh-agent-teams
  （或简写 github:NanmiCoder/dsh-agent-teams）
- npm：dsh plugin --profile web add @nanmicoder/dsh-agent-teams@<版本>

安装后，可在 DSH 内组建多 Agent 团队，按角色分派任务并汇总结果；
注意宿主版本兼容矩阵（仓库 compatibility.json），桌面端请用自带包管理器安装。
```

---

### 154 — dsh-im（IM 机器人接入）

| 字段 | 值 |
|------|-----|
| **来源** | xmanrui（⭐ 1.2k） |
| **分类** | DeepSeek Harness 插件 |
| **一句话** | 扫码/凭据把飞书、微信、钉钉、QQ、Slack、Telegram 等 9 个 IM 接进 DSH |

**安装指令：**

```
安装 dsh-im 插件。
来源：https://github.com/xmanrui/dsh-im（⭐ 1.2k）
安装：dsh plugin --profile web add -w @xmanrui/dsh-im

安装后，用扫码或机器人凭据把 DSH 接入 IM：
支持飞书、微信、钉钉、企业微信、QQ、Slack、Telegram、Discord、WhatsApp，
在聊天窗口里直接给 Agent 派任务。接入前确认机器人权限与消息隐私范围。
```

---

### 155 — dsh-routing-suite（推理路由）

| 字段 | 值 |
|------|-----|
| **来源** | yjh051108（⭐ 7k） |
| **分类** | DeepSeek Harness 插件 |
| **一句话** | 运行时注入器 + 任务感知推理模式路由，按任务自动选思考档位（P1–P23 实测） |

**安装指令：**

```
安装 dsh-routing-suite 插件。
来源：https://github.com/yjh051108/dsh-routing-suite（⭐ 7k）
安装：dsh plugin --profile web add github:yjh051108/dsh-routing-suite

安装后，获得运行时注入器与任务感知的推理模式路由：
- 按任务类型自动切换思考档位，减少简单任务的过度思考
- 附带 dev_* 工具：注入、热重载、侧挂转正、卸载、路由自愈
装完重启 dsh web；先用小任务验证路由行为再上生产。
```

---

### 156 — dsh-univer-office（Office 工作区）

| 字段 | 值 |
|------|-----|
| **来源** | dream-num（⭐ 303） |
| **分类** | DeepSeek Harness 插件 |
| **一句话** | 把表格/文档/幻灯片/多维表搬进 DSH，产出 xlsx/docx/pptx 并支持多 Agent 协作 |

**安装指令：**

```
安装 dsh-univer-office 插件。
来源：https://github.com/dream-num/dsh-univer-office（⭐ 303）
安装：dsh plugin --profile web add dsh-univer-office

安装后，DSH 获得类 Office 工作区：
- 表格、文档、幻灯片、画布、关系表，可实时预览与校验
- 产出 .xlsx / .docx / .pptx，支持版本化修改与多 Agent 隔离 worktree
插件默认发送匿名使用统计（不含文件内容/路径），可用 DO_NOT_TRACK=1 关闭。
```

---

### 157 — OpenViking（记忆与上下文）

| 字段 | 值 |
|------|-----|
| **来源** | volcengine（⭐ 41k） |
| **分类** | DeepSeek Harness 插件 |
| **一句话** | 火山引擎自进化上下文数据库，为 DSH 提供跨会话记忆、知识 RAG 与自动召回 |

**安装指令：**

```
安装 OpenViking 的 DSH 记忆插件。
来源：https://github.com/volcengine/OpenViking（⭐ 41k）
安装（插件面板 → repository source）：
github:volcengine/OpenViking#main&path:/examples/dsh-memory-plugin

安装后，接入 OpenViking 服务即可获得：
- 每轮前置自动召回与画像注入，会话结束自动归档
- recall / write memory 工具，viking:// URI 守卫
- 记忆、知识 RAG 与 Skills 统一管理，跨会话持久
需要先部署 OpenViking 服务端；不要把敏感数据交给未加固的实例。
```

---

### 158 — WeKnora（知识库 RAG）

| 字段 | 值 |
|------|-----|
| **来源** | Tencent（⭐ 35.7k） |
| **分类** | DeepSeek Harness 插件 |
| **一句话** | 腾讯开源知识平台，给 DSH 四个只读工具：列库/混合检索/文档重组/带引用作答 |

**安装指令：**

```
安装 WeKnora 的 DSH 插件。
来源：https://github.com/Tencent/WeKnora（⭐ 35.7k）
安装（插件面板 → repository source）：
github:Tencent/WeKnora#main&path:/dsh-weknora

安装后，Agent 获得四个只读知识库工具：
列出知识库、混合段落检索、按序重组单篇文档、带引用的 RAG/ReAct 作答（可续会话）。
适合企业文档问答与资料溯源；需先部署 WeKnora 并导入文档。
```

---

### 159 — DeepSeek 余额小鲸鱼（余额监控）

| 字段 | 值 |
|------|-----|
| **来源** | MeteorNOX（⭐ 6.3k） |
| **分类** | DeepSeek Harness 插件 |
| **一句话** | DSH 右下角常驻小鲸鱼：API 余额、今日消耗、每轮花费，气泡可自定义 |

**安装指令：**

```
安装 DeepSeek-Balance-Whale-Widget 插件。
来源：https://github.com/MeteorNOX/DeepSeek-Balance-Whale-Widget（⭐ 6.3k）
安装：dsh plugin --profile web add dsh-whale-widget

安装后，DSH Web 右下角常驻小鲸鱼挂件：
- 显示 DeepSeek API 余额、今日已用、每轮对话消耗
- 点击气泡可自定义文案/图片/模块排版，支持拖拽吸附
npm 名与 github: 源二选一，不要混装；桌面端使用 desktop profile，需在应用内安装。
```

---

### 160 — dsh-desktop（桌面端）

| 字段 | 值 |
|------|-----|
| **来源** | anywhere-labs（⭐ 33.6k） |
| **分类** | DeepSeek Harness 插件 |
| **一句话** | 为 DSH 插件生态打造的桌面端，桌面本身也是插件，内置插件市场 |

**安装指令：**

```
安装 DSH 桌面端。
来源：https://github.com/anywhere-labs/dsh-desktop（⭐ 33.6k）
安装：从 GitHub Releases 下载 Windows / macOS / Linux 安装包

安装后，获得带插件市场的 DSH 桌面工作区：
- 内置 dsh-market，插件一键安装/升级
- 桌面窗口、文件与多会话管理，无需手动起 Web 服务
桌面端使用独立的 desktop profile，部分 CLI 插件需在应用内插件面板安装。
```

---

### 161 — qiaomu-rss-dsh（RSS 伴读）

| 字段 | 值 |
|------|-----|
| **来源** | joeseesun（★ 54） |
| **分类** | DeepSeek Harness 插件 |
| **一句话** | 在 DSH 里读 RSS：频道发现、原文/中文版本切换，并就当前文章向 AI 追问 |

**安装指令：**

```
安装 乔木 RSS 插件。
来源：https://github.com/joeseesun/qiaomu-rss-dsh（★ 54）
安装（预构建 tgz，未发布 npm）：
- 从 GitHub Releases 下载 qiaomu-rss-dsh-0.8.0.tgz 与 .sha256，先校验：
  shasum -a 256 -c qiaomu-rss-dsh-0.8.0.tgz.sha256
- 安装并重启 profile：
  dsh plugin --profile web add /absolute/path/qiaomu-rss-dsh-0.8.0.tgz
  （桌面端把 web 换成 desktop）

安装后，侧栏出现乔木 RSS：
- 发现作者与频道，读原文或已有中文改写版本
- 选中段落让 AI 伴读、翻译或追问，当前文章作为上下文
- 提交的公开链接与改写结果会进入所配置的乔木服务，凭据保存在 Host 存储
```

---

### 162 — qiaomu-reader-dsh（电子书阅读）

| 字段 | 值 |
|------|-----|
| **来源** | joeseesun（★ 5） |
| **分类** | DeepSeek Harness 插件 |
| **一句话** | 在 DSH 中读 EPUB/PDF/TXT/Markdown，划线、听书、记生词并导出笔记 |

**安装指令：**

```
安装 乔木阅读插件。
来源：https://github.com/joeseesun/qiaomu-reader-dsh（★ 5）
安装（预构建 tgz，未发布 npm）：
- 从 v1.1.0 Release 下载 qiaomu-reader-dsh-1.1.0.tgz 与 SHA256SUMS，校验后安装：
  dsh plugin --profile web add /absolute/path/qiaomu-reader-dsh-1.1.0.tgz
  （把 web 换成 desktop 即可装进桌面 profile）

安装后，DSH 内获得完整阅读器：
- EPUB / PDF / TXT / Markdown / HTML 导入，支持 UTF-8、UTF-16 BOM、GB18030
- 划线、生词本（保留上下文与原文回跳）、Markdown 笔记导出、可选 AnkiConnect
- 系统语音跨章朗读；选区查词复用 Harness 原生会话；移除书库后进度可恢复
```

---

### 163 — qiaomu-ui-learn-dsh（UI 学习）

| 字段 | 值 |
|------|-----|
| **来源** | joeseesun（★ 10） |
| **分类** | DeepSeek Harness 插件 |
| **一句话** | 在 DSH 里逛 13,561 条设计参考、106 个交互标本，做审美测验并沉淀 Markdown 笔记 |

**安装指令：**

```
安装 乔木 UI 学习插件。
来源：https://github.com/joeseesun/qiaomu-ui-learn-dsh（★ 10）
安装（预构建 tgz）：
- 从 GitHub Releases 下载 qiaomu-ui-learn-dsh-0.1.0.tgz，校验后安装：
  dsh plugin --profile web add /absolute/path/qiaomu-ui-learn-dsh-0.1.0.tgz
  （把 web 换成 desktop 即可装进桌面 profile）

安装后，获得 Obsidian 版乔木 UI 学习的完整迁移界面：
- 13,561 条设计参考、184 个分类，支持搜索、收藏、最近浏览与点评筛选
- 106 个交互标本的 UI 词典与风格图鉴，含双语解释、特征与实现提示词
- 审美测验、收藏夹与设置，点评可保存为 Markdown 并接入 Home 入口
```

---

### 164 — qiaomu-home-dsh（起点页）

| 字段 | 值 |
|------|-----|
| **来源** | joeseesun（★ 10） |
| **分类** | DeepSeek Harness 插件 |
| **一句话** | DSH 起点页：会话搜索、今日重点、待办、记录与专注计时，一打开就知道该做什么 |

**安装指令：**

```
安装 乔木 Home 插件。
来源：https://github.com/joeseesun/qiaomu-home-dsh（★ 10）
安装（源码仓库，未发布 npm）：
git clone https://github.com/joeseesun/qiaomu-home-dsh.git
cd qiaomu-home-dsh && npm ci && npm run build && npm test

然后在 DSH 插件管理工具中执行 install_bundle，target 指向克隆目录的绝对路径：
plugin_manager install_bundle
  target=/absolute/path/to/qiaomu-home-dsh
（或手动把 qiaomu-home-dsh 加入 profile 的 dsh.profile.bundles 与 dependencies，
  在该 profile 下 pnpm install，再重启 DSH）

安装后，侧栏出现「乔木 Home」：问候、会话搜索、今日重点、待办、最近会话与常用入口；
待办/重点/便签等数据保存在本地 localStorage（dsh-qiaomu-home:v1），不自动跨设备同步。
```

---

### 165 — dsh-mcp-settings（MCP 设置）

| 字段 | 值 |
|------|-----|
| **来源** | phoenixlucky |
| **分类** | DeepSeek Harness 插件 |
| **一句话** | 可选 Bundle：在 Web/桌面 profile 管理 MCP 服务器、Chrome 连接与记忆设置 |

**安装指令：**

```
安装 dsh-mcp-settings Bundle。
来源：https://github.com/phoenixlucky/dsh-mcp-settings
安装：
git clone https://github.com/phoenixlucky/dsh-mcp-settings.git
cd ..（进入包含该目录的上级目录）
pnpm dsh plugin --profile web add file:./dsh-mcp-settings
装完重启 DSH（桌面端把 web 换成 desktop）。

安装后，Settings 出现 MCP 管理入口：
- 启停、编辑、连接受管 MCP 服务器
- Chrome 连接与 VISION-LIAO 记忆为可选项，默认关闭，需手动开启
包 id 为 @deepseek-ai/dsh-mcp-settings；官方 Web/Desktop profile 已内置时无需重复安装。
```

---

### 166 — dsh-theme（主题包）

| 字段 | 值 |
|------|-----|
| **来源** | phoenixlucky |
| **分类** | DeepSeek Harness 插件 |
| **一句话** | 可选主题 Bundle：六套壁纸主题 + 配色预览，含 VIP 金色光辉玻璃风格 |

**安装指令：**

```
安装 dsh-theme Bundle。
来源：https://github.com/phoenixlucky/dsh-theme
安装（任选）：
- Git 源：dsh plugin --profile web add git+https://github.com/phoenixlucky/dsh-theme.git#main
- 本地目录：dsh plugin --profile web add <dsh-theme 绝对路径>
（桌面端把 web 换成 desktop）

安装后，Settings 主题页出现六套可选主题与配套壁纸、配色和预览：
- WJ Dreamlight 六套主题；VIP Golden Radiance 增加金色点缀、玻璃质感与授权展示字体
- 主题选择随 profile 保留，升级 DSH 不丢失
包 id @deepseek-ai/dsh-theme，bundle 版本 1.0.8，适配 DSH 0.2.1-rc.3。
```

---

## 🚀 AI 一键安装（全文复制）

> 将下方内容直接提供给 AI Agent，它会读取每个 Skill 的来源和安装指令自动完成安装：

```
请依次阅读并安装以下 Skill。
具体技能

【基础与元 Skill】
1. Skill Creator — Anthropic 官方，用于创建 Skill 的 Skill
2. Find Skills — ClawHub，从 ClawHub 全网搜索 Skill（https://clawhub.ai/fangkelvin/skills/find-skills-skill）
9. ZeroToken Skill — Token 高效约束，减少无效输出
27. book-to-skill — virgiliojr94（⭐ 28k），把书籍转化为 Agent Skill，按需加载
31. Skill Vetter — ClawHub（★ 1.2k），安装第三方 Skill 前的安全审查
35. Auto-Updater — ClawHub（★ 428），每天自动更新 Agent 和 Skill
75. Skill Creator（ClawHub 版）— ClawHub（★ 319），社区版 Skill 创建指南
80. agent-skills — addyosmani，从 .claude 提炼结构化技能
81. headroom — headroomlabs-ai，Token 压缩减少 60-95%
135. Caveman — JuliusBrussee（⭐ 111k），穴居人话省 token（会话输入 -33%）
136. awesome-claude-skills — ComposioHQ（⭐ 76.7k），1000+ 生产级 Claude Skill 精选合集
139. i-have-adhd — ayghri（⭐ 56.3k），重点前置输出（先动作、编号、去寒暄）

【Agent 智能化】
30. Self-Improving Agent — ClawHub（★ 3.8k），自动记录错误与经验，永久进化
32. Proactive Agent — ClawHub（★ 800），把 Agent 变成主动预判需求
33. Self-Improving + Proactive Agent — ClawHub（★ 1.2k），自我反思与自组织记忆
34. Ontology — ClawHub（★ 638），类型化知识图谱记忆
79. cognee — topoteretes，开源长期记忆平台，知识图谱引擎
98. agency-agents — msitarzewski（⭐ 150k），232 个领域专家 AI Agent 合集

【开发与编码】
3. Superpowers — ⭐ 21 万+ Star，开发流程规范化
4. gstack — YC 总裁 Gary Tan，23 个工程专家角色
20. bug-hunt — 复现定位 Bug，最小修复验证
21. code-review — 审查代码，发现缺陷和回归
24. release-notes — 整理发布说明和升级指南
28. Ponytail — DietrichGebert（⭐ 122k），懒人开发哲学，代码量减少 54%
83. opencode — anomalyco，TypeScript 开源编码 Agent
102. ui-test — browserbase（⭐ 3.7k），AI 对抗性 UI 测试
120. codebase-inspection — Hermes Agent 官方内置，代码库体检
131. Understand-Anything — Egonex-AI（⭐ 85.7k），把代码库变成交互式知识图谱
132. Graphify — Graphify-Labs（⭐ 125k），代码/文档/PDF 转可查询知识图谱（本地 AST）

【前端与设计】
5. Frontend Design — Anthropic 官方，去 AI 感设计
6. ui-ux-pro-max — ⭐ 124k，50 种设计风格 + 97 种配色方案
22. frontend-polish — 优化界面细节和视觉一致性
84. taste-skill — Leonxlnx（⭐ 84k），反模板化前端设计框架
85. gsap-skills — greensock（⭐ 14.8k），GSAP 动画官方 AI Skill
112. architecture-diagram — Hermes Agent 官方内置，暗色 SVG 架构图
113. excalidraw — Hermes Agent 官方可选，手绘风 Excalidraw 图表
114. popular-web-designs — Hermes Agent 官方内置，54 个大厂设计系统
126. design-md — Hermes Agent 官方内置，DESIGN.md 设计 token 规范
127. shaders — shader-effects-inc（⭐ 3.6k），200+ WebGPU 特效组件（React/Vue/Svelte/Solid/JS）
133. Archify — tt-a1i（⭐ 81k），把想法/方案/代码库变成交互式 HTML 图
134. Impeccable — pbakaus（⭐ 78.9k），AI 设计语言（24 命令 + 59 条检测规则）
142. emilkowalski/skills — emilkowalski（⭐ 45k），Emil 设计工程技能（动画/手势/评审）
144. figma-design-skill — phoenixlucky，提取 Claude UI kit 设计规范并出页面代码

【内容创作】
7. baoyu-skills — JimLiu（⭐ 25.6k），20 个视觉设计 Skill
12. Moon Lovers — 白月光风格恋爱聊天回复
70. Nano Banana Pro — ClawHub（★ 405），Gemini 3 Pro Image 生成/编辑图片
71. OpenAI Image Gen — ClawHub（★ 37），批量生成图片
72. Humanizer — ClawHub（★ 669），去除文本 AI 味
117. youtube-content — Hermes Agent 官方内置，YouTube 字幕转内容
121. comfyui — Hermes Agent 官方可选，ComfyUI 扩散生图/视频
122. songwriting-and-ai-music — Hermes Agent 官方内置，写歌 + Suno 提示词
129. lieflat-less-ai-tone — larashero3-dotcom（⭐ 2.5k），基于 283 万字语料统计的去 AI 味
137. Character Prompt Studio — joshesye（⭐ 18），人物设计与生图提示词（3397 条词库）
138. cy-carousel — chengyi-ai（⭐ 129），给一个选题产出封面 + 10 页图文轮播

【文档处理】
8. NotebookLM Skill — ⭐ 19.1k，打通 Agent 与 NotebookLM
23. officecli — AI Agent 专用 Office 文档工具（⭐ 29.8k）
25. docx — 完整的 DOCX 创建、编辑与分析能力（⭐ 232）
26. pdf — 专业 PDF 工具集：57 种工具，生成/提取/合并/表单（⭐ 1）
73. Nano PDF — ClawHub（★ 260），自然语言编辑 PDF
94. MarkItDown — Microsoft，PDF/Office/HTML/图片批量转 Markdown
108. ocr-and-documents — ⚠️ 已失效（官方已移除，OCR 并入 pdf Skill）
109. document-to-action-items — Hermes Agent 官方内置，文档转带引用的行动项

【视频制作】
14. HyperFrames — 用 HTML/动画一键生成动效视频
15. video-use — Agent 辅助剪辑视频
16. Remotion Skills — 用 React 代码批量制作视频
17. Generative Media Skills — AI 视频/图片/音频生成
18. videocut-skills — 面向中文创作者的视频剪辑
19. seedance2-skill — 为即梦设计逐秒分镜提示词
61. Video Frames — ClawHub（★ 129），视频抽帧
76. FFmpeg Skill — 专业视频处理命令行神器（fabriqaai/LobeHub）
77. OpenMontage — 开源 agentic 视频生产系统（calesthio）
78. Manim Skill — 3Blue1Brown 同款数学动画引擎（adithya-s-k）
99. seedance-2.0 — Emily2040（⭐ 7.1k），Seedance 2.0 完整导演制作管线
128. huashu-art-motion — alchaincyf（⭐ 2.7k），35 种艺术风格 + 9 种解说语法的艺术动画
130. seedance-2-5-video-director — liyue-aigc（★ 566），Seedance 2.5 视频导演（脚本/诊断/人物锁定）

【商业与金融】
10. Business Data Analyst — 商业分析与指标拆解
11. Weiliaozi Analysis — 尉缭子五栏结构分析法
13. Financial Analyst — 金融投资分析与决策
55. AdMapix — ClawHub（★ 286），广告情报与应用分析
56. Polymarket — ClawHub（★ 22），预测市场数据
57. Automation Workflows — ClawHub（★ 305），自动化工作流设计
58. Model Usage — ClawHub（★ 113），各模型用量成本统计
59. Blogwatcher — ClawHub（★ 70），监控博客和 RSS 更新
101. solo-law-firm-agents — saysoph（⭐ 41），一人律所 28 位 AI 虚拟专员 7 大部门
105. competitor-analysis — browserbase（⭐ 3.7k），竞品四维深度分析报告
106. company-research — browserbase（⭐ 3.7k），ICP 目标公司发现与打分
111. competitor-news-monitor — Hermes Agent 官方内置，竞品重大新闻监控
143. marketingskills — coreyhaines31（⭐ 32.8k），40+ 营销技能包（CRO/文案/SEO/增长）

【集成与协作】
36. Github — ClawHub（★ 636），用 gh CLI 操作 GitHub
37. Gog — ClawHub（★ 924），Google Workspace CLI
38. Slack — ClawHub（★ 158），控制 Slack
39. Trello — ClawHub（★ 161），管理 Trello 看板
40. Notion — ClawHub（★ 259），操作 Notion
41. Obsidian — ClawHub（★ 428），操作 Obsidian 笔记库
42. Discord — ClawHub（★ 77），控制 Discord
43. mcporter — ClawHub（★ 194），调用任意 MCP 服务器/工具
44. Himalaya — ClawHub（★ 69），终端收发邮件
45. 1Password — ClawHub（★ 52），密钥管理
46. Apple Notes — ClawHub（★ 57），管理 Apple Notes
47. Apple Reminders — ClawHub（★ 54），管理 Apple 提醒事项
48. CalDAV Calendar — ClawHub（★ 242），同步查询日历
118. meeting-action-items — Hermes Agent 官方内置，会议纪要转行动项

【搜索与浏览】
49. Multi Search Engine — ClawHub（★ 727），16 个搜索引擎集成
50. Tavily 搜索 — ClawHub（★ 263），Tavily API 联网搜索
51. Baidu 搜索 — ClawHub（★ 216），百度 AI 搜索
52. Agent Browser — ClawHub（★ 424），无头浏览器自动化
89. browser-use — browser-use（⭐ 112k），AI 浏览器自动化
100. chrome-mcp-bridge-2026-skill — phoenixlucky，Chrome MCP 桥接
104. browser — browserbase（⭐ 3.7k），最强浏览器自动化（CAPTCHA/住宅代理）
107. arxiv — Hermes Agent 官方内置，arXiv 论文搜索
141. last30days — mvanhorn（⭐ 63.9k），跨平台近 30 天舆情调研

【数据采集与爬虫】
82. Agent-Reach — Panniantong，全网情报一键抓取+总结
87. Firecrawl — firecrawl（⭐ 176k），整站爬取 AI 直接读
88. Crawl4AI — unclecode（⭐ 81k），网站转 LLM 文本
90. Crawlee — apify，自动代理/重试/伪装指纹
91. Scrapy — scrapy，老牌爬虫框架百万级稳定
92. Scrapling — D4Vinci，自适应网站改版绕封禁
93. AutoScraper — alirezamika，给样例自动学规律
96. curl-impersonate — lwthiker，HTTP 请求伪装 Chrome 指纹
97. MediaCrawler — NanmiCoder（⭐ 64k），多平台自媒体数据采集
103. browser-to-api — browserbase（⭐ 3.7k），网站流量转 OpenAPI 规范
110. product-price-monitor — Hermes Agent 官方内置，商品/航班价格监控

【终端与自动化】
53. Peekaboo — ClawHub（★ 82），macOS UI 自动化
54. tmux — ClawHub（★ 43），远程控制 tmux 会话
95. scrcpy — Genymobile（⭐ 149k），电脑远程操控安卓手机
119. computer-use — Hermes Agent 官方内置，后台桌面操控不抢焦点
140. claude-hud — jarrodwatts（⭐ 28.4k），Claude Code 实时状态 HUD 插件

【生活与媒体】
60. Weather — ClawHub（★ 417），天气查询
62. OpenAI Whisper — ClawHub（★ 325），本地语音转文字
63. OpenAI Whisper API — ClawHub（★ 52），云端语音转文字
64. Sag — ClawHub（★ 26），ElevenLabs 语音合成
65. Spotify Player — ClawHub（★ 54），终端控制 Spotify
66. Sonoscli — ClawHub（★ 55），控制 Sonos 音箱
67. goplaces — ClawHub（★ 30），Google 地点查询
68. Gemini — ClawHub（★ 56），Gemini CLI 问答生成
69. Session-logs — ClawHub（★ 30），搜索分析会话日志
74. Healthcheck — ClawHub（★ 11），喝水/睡眠追踪
86. family-lovers-skill — phoenixlucky，原生家庭关怀陪伴
115. maps — Hermes Agent 官方内置，地图/地理编码/路线免 Key
116. weekly-review-planning — Hermes Agent 官方内置，每周复盘规划
123. findmy — Hermes Agent 官方内置，FindMy 定位设备/AirTag
124. imessage — Hermes Agent 官方内置，macOS 收发 iMessage
125. gif-search — Hermes Agent 官方内置，Tenor GIF 搜索下载

【DeepSeek Harness 插件】
145. DeepSeek Harness（DSH 本体）— deepseek-ai（⭐ 264k），万物皆插件的开源 Agent Harness
146. dsh-market — dsh-market（⭐ 9.3k），DSH 可视化插件市场（一键安装/升级/主题）
147. awesome-dsh-plugin — awesome-dsh-plugin（⭐ 21.1k），24 类 DSH 插件精选清单
148. dsh-context — bowenliang123（⭐ 1.3k），上下文组成/演进/压缩可视化
149. DSH-better-sidebar — omdsh-dev（⭐ 3.4k），可扩展侧边栏（文件/终端/Git/子代理）
150. modlens — liustack（⭐ 3.9k），给纯文本模型外挂视觉（OCR/版面/语义）
151. dsh-vision-router — ysr666（⭐ 1.1k），免费视觉链 + 像素级视觉工具箱
152. modsearch — liustack（⭐ 433），免 Key 联网搜索，返回带引用 JSON
153. dsh-agent-teams — NanmiCoder（⭐ 1.5k），多 Agent 团队协作与任务分派
154. dsh-im — xmanrui（⭐ 1.2k），飞书/微信/钉钉/QQ/Slack/Telegram 等 9 个 IM 接入
155. dsh-routing-suite — yjh051108（⭐ 7k），运行时注入器 + 任务感知推理路由
156. dsh-univer-office — dream-num（⭐ 303），表格/文档/幻灯片 Office 工作区
157. OpenViking — volcengine（⭐ 41k），跨会话记忆 + 知识 RAG + 自动召回
158. WeKnora — Tencent（⭐ 35.7k），知识库检索与带引用作答
159. DeepSeek 余额小鲸鱼 — MeteorNOX（⭐ 6.3k），余额/消耗监控挂件
160. dsh-desktop — anywhere-labs（⭐ 33.6k），内置插件市场的 DSH 桌面端
161. qiaomu-rss-dsh — joeseesun（★ 54），RSS 订阅 + 原生 AI 伴读
162. qiaomu-reader-dsh — joeseesun（★ 5），EPUB/PDF/TXT 阅读、划线、听书与生词本
163. qiaomu-ui-learn-dsh — joeseesun（★ 10），13561 设计参考 + 106 交互标本 + 审美测验
164. qiaomu-home-dsh — joeseesun（★ 10），会话搜索/今日重点/待办/专注计时起点页
165. dsh-mcp-settings — phoenixlucky，MCP 服务器管理 + Chrome 连接 + 记忆设置
166. dsh-theme — phoenixlucky，六套主题壁纸与 VIP 金色玻璃风格

请根据上面每个 Skill 的「安装指令」完成安装，如果存在，则覆盖安装。
```

---

*本索引由 theAIKing 项目维护。欢迎提交 Issue 和 PR 补充更多热门 Skill 的来源信息！*
