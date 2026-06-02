# AGENTS.md

本文件给后续在本仓库工作的代码代理和维护者使用。开始任何实现前先阅读本文件，并以当前仓库事实为准。

## 项目定位

- Local Capture 是一个 Obsidian 社区插件，目标是 Markdown 原生、本地优先、完全离线的快速记录时间线。
- UI 默认使用简体中文；保持 Obsidian 风格，不引入大 UI 框架。
- 一条 capture 对应一个 Markdown 文件，capture 文件和 frontmatter 是数据源；索引只能是可重建缓存。
- 插件声明 `isDesktopOnly: false`，因此任何新代码都必须默认考虑移动端兼容。
- 当前项目约定：根目录 `main.js` 作为 Obsidian/BRAT 手动安装产物随仓库提交；如果未来要改为 release-only 分发，必须先和维护者确认并同步文档与脚本。

## 代码注意事项

- 优先保持离线：不要加入网络请求、遥测、账号系统、云同步或 AI 调用。若未来确实需要网络能力，必须先更新 README 中的披露说明。
- 不要破坏用户 frontmatter：修改已存在 capture 的正文时保留未知 frontmatter key；修改 frontmatter 时优先使用 Obsidian `FileManager.processFrontMatter`。
- 写文件优先用 `Vault.process` 或 Obsidian 高层 API；避免手写 read/modify/write 流程，除非已有测试覆盖数据安全。
- 路径统一用 `normalizePath`，不要硬编码用户 vault 的 `.obsidian` 配置目录；测试/安装脚本例外也要限制在明确传入的 vault 路径。
- 移动端兼容：不要在插件运行时代码顶层使用 Node/Electron-only 模块；需要桌面能力时必须用平台判断和动态加载隔离。
- CSS 必须作用在 `local-capture-*` 作用域内，避免覆盖 Obsidian 全局样式或核心组件。
- 大批量文件操作必须考虑节流/并发限制；索引、搜索、表格等热路径要有 1k/5k/10k 量级测试或明确说明。
- 代码拆分优先保持现有结构：UI 放在 `src/ui`，业务服务放在 `src/services`，通用纯函数放在 `src/utils`，测试放在 `tests`。

## Obsidian Lint / 社区插件检查

每次实现完成后，都必须检查是否符合 Obsidian 插件 lint 和社区审核要求。当前仓库还没有独立 `npm run lint`，因此至少执行下面的人工/自动混合检查：

- 运行 `npm run typecheck`、`npm test`、`npm run verify:release`。
- 对照 Obsidian 官方 plugin self-critique checklist 检查：命名、兼容性、移动端、API 使用、安全、性能、UI 文案。
- 检查 `manifest.json`：
  - `id` 只使用小写字母和连字符，不能包含 `obsidian`，不能以 `plugin` 结尾。
  - `version` 使用 `x.y.z` 语义化版本。
  - `minAppVersion` 与 `versions.json` 对应。
  - `isDesktopOnly` 真实反映运行时代码能力。
- 检查发布资产：
  - 根目录和 release 资产中的 `manifest.json`、`main.js`、`styles.css`、`versions.json` 一致。
  - GitHub Release 的 tag 必须与 `manifest.json.version` 完全一致，不加 `v` 前缀。
  - Release 资产至少包含 `main.js`、`manifest.json`、`styles.css`；本项目还发布 `versions.json` 和 `SHA256SUMS.txt`。
- 检查安全披露：若新增付款、账号、网络、外部文件访问、广告、遥测、闭源代码或其他用户数据风险，必须更新 README。
- 检查 Obsidian API 习惯：
  - 避免全局 `app`，使用插件实例上的 `this.app`。
  - 避免 `Vault.modify`、手工 frontmatter 写入、`vault.delete`。
  - 避免不必要的 Adapter API；如果必须使用，说明原因并测试。
  - 不设置默认 hotkeys。
  - UI 文案保持 Obsidian 风格；中文界面保持简洁，不把实现说明写进界面。
- 如果官方 lint 要求与本项目现有约定冲突，必须在 PR/commit 说明中写明例外原因；例如当前 `main.js` 入库是本项目的既有发布约定。

参考来源：

- Obsidian plugin self-critique checklist: https://docs.obsidian.md/oo/plugin
- Obsidian submit your plugin: https://docs.obsidian.md/Plugins/Releasing/Submit%20your%20plugin
- Obsidian manifest reference: https://docs.obsidian.md/Reference/Manifest
- Obsidian sample plugin release notes: https://github.com/obsidianmd/obsidian-sample-plugin

## 完成实现后的固定流程

每次实现完成后按下面顺序收尾：

1. 更新版本相关文件：`package.json`、`package-lock.json`、`manifest.json`、`versions.json`、`CHANGELOG.md`。
2. 运行本地验证：
   - `npm run typecheck`
   - `npm test`
   - `npm run verify:release`
3. 如果涉及 UI、Obsidian API、文件读写、索引、发布资产或用户可见行为，运行真实 vault QA：
   - `npm run qa:vault -- "D:\Documents\Projects\ob-dev"`
   - 用 Obsidian CLI 验证插件版本、命令列表和 `dev:errors`。
   - 更新 `docs/OB_DEV_QA.md` 和 `docs/qa-screenshots/` 中相关截图。
4. 检查 git 状态，确认只有本次任务相关改动。
5. 提交 commit，commit message 使用清晰的英文祈使句，例如 `Release v0.9.1 stabilization fixes`。
6. 打 tag，tag 名必须等于 manifest 版本号，例如 `0.9.1`。
7. 推送分支和 tag。
8. 发布 GitHub Release，上传 `dist/local-capture/` 中的：
   - `main.js`
   - `manifest.json`
   - `styles.css`
   - `versions.json`
   - `SHA256SUMS.txt`
9. 最终回复中列出验证结果、commit、tag、release 链接；如果某一步失败，说明原因和下一步处理建议。

## 当前常用命令

```powershell
npm run typecheck
npm test
npm run verify:release
npm run qa:vault -- "D:\Documents\Projects\ob-dev"
```

Obsidian CLI 常用检查：

```powershell
& 'C:\Users\cjy17\AppData\Local\Obsidian\Obsidian.com' vault=ob-dev plugins filter=community versions format=json
& 'C:\Users\cjy17\AppData\Local\Obsidian\Obsidian.com' vault=ob-dev commands filter=local-capture
& 'C:\Users\cjy17\AppData\Local\Obsidian\Obsidian.com' vault=ob-dev dev:errors
```
