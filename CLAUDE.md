# theAIKing — 项目约定

## 项目定位

本项目的核心文件是 `skills-index.md`。
不存储 Skill 源文件，只提供**索引 + 安装指令**，告诉 AI Agent 去哪里获取每个 Skill。

## 核心文件

| 文件 | 用途 |
|------|------|
| `skills-index.md` | AI 直接读取的索引文档，包含全部 Skill 的来源/安装指令 |
| `README.md` | 项目总览 |

## 已收录 Skill（共 26 个）

**基础 Skill：** Skill Creator, Find Skills, ZeroToken Skill

**产品开发：** Superpowers, gstack, Frontend Design, ui-ux-pro-max, bug-hunt, code-review, frontend-polish, release-notes

**内容创作：** baoyu-skills, NotebookLM Skill, Moon Lovers, officecli

**文档处理：** docx, pdf

**视频制作：** HyperFrames, video-use, Remotion Skills, Generative Media Skills, videocut-skills, seedance2-skill

**商业与分析：** Business Data Analyst, Weiliaozi Analysis, Financial Analyst

## 使用方法

### AI 直接读取（唯一方式）
将 `skills-index.md` 全部内容发给 AI Agent，Agent 依次读取并安装。

> 旧版弹窗安装向导（install-king-skills.bat/.ps1）已归档至 `archive/`，不再维护。

## 扩展指南

在 `skills-index.md` 的对应分类下增加一条新条目，包含名称、来源（GitHub URL）、分类、描述及安装指令即可。注意更新 `total` 字段和底部「一键安装」区列表。

## 语言偏好

默认中文。代码和文件路径保持英文。
