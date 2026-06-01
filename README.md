# Local Capture

Local Capture 是一个 Markdown 原生、本地优先的 Obsidian 快速记录时间线插件。

## v0.5 范围

- 一条记录一个 Markdown 文件，默认保存到 `Captures/YYYY/MM/`。
- 侧边栏快速输入、时间线、搜索、标签、日期筛选和热力图。
- 支持 note/task、置顶、归档、软删除、恢复、打开源文件。
- Send to File 会把记录正文追加到目标笔记，并自动归档原记录。
- 支持剪贴板快速创建和 `obsidian://local-capture?...` URI 捕获。
- 支持 Daily Summary，将选中日期或今天的记录汇总到独立摘要、Daily Note 或指定文件。
- 支持表格视图、保存查询、批量标签和批量类型修改。
- 支持标签管理、表格排序/列显示控制、捕获模板。
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

也可以生成发布目录：

```bash
npm run package:release
```

产物会写入 `dist/local-capture/`，包含 `main.js`、`manifest.json`、`styles.css`、`versions.json` 和校验和。

本地试装到测试 vault：

```bash
npm run install:vault -- "D:/Path/To/Vault"
```

针对 `ob-dev` 或其他真实 vault 的回归测试：

```bash
npm run qa:vault -- "D:/Documents/Projects/ob-dev"
```

## URI 捕获

Local Capture 注册了 `local-capture` 协议处理器，可从自动化工具创建记录：

```text
obsidian://local-capture?text=hello%20%23inbox&type=note
obsidian://local-capture?body=todo%20item&type=task&url=https%3A%2F%2Fexample.com
```

支持参数：`text`、`body`、`content`、`type=note|task`、`url`、`source_url`。

## Daily Summary

侧边栏中选择热力图日期后，可以直接生成该日期摘要；未选择日期时默认生成今天摘要。摘要使用托管块：

```text
<!-- local-capture-summary:start 2026-05-28 -->
...
<!-- local-capture-summary:end 2026-05-28 -->
```

重复生成同一天摘要时会更新原块，而不是重复追加。默认写入 `Captures/Generated/Daily Summary/YYYY-MM-DD.md`，也可以在设置里改为 Daily Note。

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
