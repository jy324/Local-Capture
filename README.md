# Local Capture

Local Capture 是一个 Markdown 原生、本地优先的 Obsidian 快速记录时间线插件。

## v0.5 范围

- 一条记录一个 Markdown 文件，默认保存到 `Captures/YYYY/MM/`。
- 侧边栏快速输入、时间线、搜索、标签、日期筛选和热力图。
- 支持 note/task、置顶、归档、软删除、恢复、打开源文件。
- Send to File 会把记录正文追加到目标笔记，并自动归档原记录。
- 支持剪贴板快速创建和 `obsidian://local-capture?...` URI 捕获。
- 完全离线，无遥测、账号、云同步或网络请求。

## 开发

```bash
npm install
npm run dev
```

## 发布包

```bash
npm run build
```

将 `main.js`、`manifest.json`、`styles.css` 放入 Obsidian vault 的 `.obsidian/plugins/local-capture/` 目录即可手动安装，也可用于 BRAT/GitHub Release 公测。

## URI 捕获

Local Capture 注册了 `local-capture` 协议处理器，可从自动化工具创建记录：

```text
obsidian://local-capture?text=hello%20%23inbox&type=note
obsidian://local-capture?body=todo%20item&type=task&url=https%3A%2F%2Fexample.com
```

支持参数：`text`、`body`、`content`、`type=note|task`、`url`、`source_url`。

## 数据结构

每条记录是独立 Markdown 文件，frontmatter 示例：

```yaml
---
capture_id: "a81f"
created: "2026-05-28T09:30:12.000Z"
updated: "2026-05-28T09:30:12.000Z"
type: "note"
status: "active"
pinned: false
tags:
  - "research"
source: "manual"
---
```
