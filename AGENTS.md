# AGENTS.md

本文件适用于整个仓库。开始任何实现前先阅读本文件，并以当前仓库事实为准。优先遵守这里的架构边界、安全规则和验证门槛；具体 QA、发布和 Obsidian review 流程见 `docs/QA.md`、`docs/RELEASE.md`、`docs/OBSIDIAN_PLUGIN_REVIEW.md`。

## Project Overview

Local Capture 是一个 Obsidian 社区插件，用于 Markdown 原生、本地优先、完全离线的快速记录时间线。

- Target: Obsidian desktop + mobile basics；`manifest.json.isDesktopOnly` 为 `false`
- Minimum Obsidian version: `1.6.0`
- Main risks: vault 文件写入、frontmatter 保留、批量文件操作、大 vault 性能、移动端兼容、release 资产同步
- Storage model: 一条 capture = 一个 Markdown 文件；capture 文件是唯一真实数据源，索引只是可重建缓存
- Default capture folder: `Captures/YYYY/MM/YYYYMMDD-HHmmss-shortid.md`
- UI language: 简体中文
- Network policy: 完全离线；不要加入网络请求、遥测、账号、云同步或 AI 调用
- Release convention: 根目录 `main.js` 随仓库提交，用于 Obsidian/BRAT/manual install

## Stack

- Runtime: Obsidian Plugin API
- Language: TypeScript with `noImplicitAny`, `strictNullChecks`, `isolatedModules`
- Build: esbuild via `esbuild.config.mjs`
- UI: React 18 + Obsidian CSS variables + scoped custom CSS
- Rendering: Obsidian `MarkdownRenderer` for capture preview
- Storage: vault Markdown files + `plugin.loadData()` / `plugin.saveData()` settings
- Search/listing: Fuse.js + TanStack virtual list
- Icons: lucide-react
- Tests: Vitest
- Release assets: `main.js`, `manifest.json`, `styles.css`, `versions.json`, `SHA256SUMS.txt`

## Architecture

```text
src/
├── main.ts                 # plugin lifecycle, commands, ribbon, URI handler, event registration
├── view.tsx                # Obsidian ItemView and React root mounting
├── settings.ts             # settings schema, defaults, normalization, settings tab UI
├── types.ts                # domain types only
├── constants.ts            # plugin ids and path constants
├── services/               # vault/index/capture business logic; no React imports
├── modals/                 # Obsidian Modal classes and suggest modals
├── ui/                     # React app, components, hooks, shared UI helpers
└── utils/                  # pure helpers for async, dates, frontmatter, markdown, tags
```

Architecture boundaries:

- `main.ts` owns Obsidian lifecycle registration and cleanup.
- `view.tsx` owns `ItemView` integration and React mounting only.
- `services/` owns side effects against vault files and the derived index.
- `ui/components` and `ui/hooks` own React display/state only; they must not write vault files directly.
- UI components call plugin/service methods; vault writes, status transitions, Send to File, tag operations, Daily Summary generation, and diagnostics stay in services.
- `utils/` should stay pure whenever possible and must be fixture-tested if it parses or formats Markdown/frontmatter.
- `types.ts` must not import React, Obsidian, service, or runtime modules.
- Indexes are derived caches and must be rebuildable from Markdown capture files.
- File event refreshes should be queued/debounced when high frequency events can duplicate work.
- Keep external APIs or SDKs out of this project unless explicitly approved; if introduced, isolate them behind an adapter folder.

## Obsidian API Rules

- Register commands in `onload()` using `this.addCommand()`.
- Register ribbon icons with `this.addRibbonIcon()`.
- Register vault/workspace/metadata events through plugin lifecycle helpers such as `this.registerEvent()`.
- Register protocol routes with Obsidian's protocol handler APIs.
- Use `this.app`, never a global `app`.
- Use vault-relative paths with forward slashes and `normalizePath()`.
- Check files with `app.vault.getAbstractFileByPath()` before writes.
- Prefer `app.vault.process()` for body edits and `app.fileManager.processFrontMatter()` for frontmatter edits.
- Use `plugin.loadData()` / `plugin.saveData()` for plugin settings/state.
- Do not manipulate DOM outside plugin-owned containers (`contentEl`, `containerEl`, or the React root).
- Do not add default hotkeys.
- Do not raise `minAppVersion` unless the required Obsidian API is identified and documented.

Known project exception:

- `LocalCapturePlugin.onunload()` detaches the plugin's own view type. Do not add broader workspace cleanup unless explicitly justified.

## UI Safety

- Do not use `innerHTML` or `outerHTML` for user, vault, URI, clipboard, or external content.
- Use React-safe rendering or Obsidian helpers; Markdown preview must continue using Obsidian `MarkdownRenderer`.
- Keep all plugin styles scoped under `local-capture-*`.
- Put styles in `styles.css`; avoid JS-driven style mutation except simple dynamic values such as tag color style.
- Use Obsidian CSS variables and keep the UI visually consistent with Obsidian.
- UI text stays Simplified Chinese.
- Do not put implementation explanations or developer-only guidance into the app UI.
- Support mobile/narrow sidebars unless `manifest.isDesktopOnly` is intentionally changed.
- Avoid layout shifts: fixed-format controls, table columns, list rows, and icon buttons need stable dimensions.
- Text must not overlap, clip, or overflow controls.

## Vault Safety

- Destructive or bulk write operations must use exact vault paths; fuzzy matching is allowed only for read/search UX.
- Preserve unknown frontmatter keys, body content, code blocks, headings, indentation, and normal Markdown syntax.
- Frontmatter updates must be atomic and tested.
- Never rewrite a whole note when a body-only or frontmatter-only update is enough.
- Batch operations must have clear behavior, bounded concurrency, and regression tests.
- Soft delete means `status: deleted`; do not hard delete capture files unless explicitly requested and confirmed.
- Inline body `#tags` and frontmatter `tags` are synchronized by parsing; rebuild behavior must be tested for tag remove/replace.
- Do not scan the entire vault synchronously during render or high-frequency events.

## Performance Rules

- Do not put expensive vault scans, index rebuilds, or Fuse construction in render paths.
- Debounce search and metadata/file event refreshes where repeated events are expected.
- Use memoized selectors for filtered/sorted/tag count data.
- Use virtualized lists/tables for large capture sets.
- Keep Obsidian event handlers stable and registered through plugin lifecycle helpers.
- Large-vault hot paths should be guarded at 1k/5k/10k scale in tests.
- Batch writes should use `mapWithConcurrency()` or an equivalent bounded queue.

## Validation Gate

Before declaring implementation complete, run the narrowest relevant test first, then the full required checks:

```powershell
npm run typecheck
npm test
npm run verify:release
```

When UI, Obsidian API, vault writes, indexing, release assets, or user-visible behavior changed, also run the vault QA flow documented in `docs/QA.md`.

Report skipped checks explicitly in the final response.

## Release Invariants

- `manifest.json.id` uses lowercase letters and hyphens; no spaces, no `obsidian`, and no trailing `plugin`.
- `manifest.json.version`, `package.json.version`, `package-lock.json`, and `versions.json` must stay synchronized.
- `versions.json[manifest.version]` must equal `manifest.minAppVersion`.
- Release tag must equal `manifest.json.version` exactly.
- Obsidian release tags must not use a `v` prefix.
- Release assets must include `main.js`, `manifest.json`, `styles.css`; this project also includes `versions.json` and `SHA256SUMS.txt`.
- Do not commit, tag, push, or create a GitHub Release unless the user explicitly requests it.

Full release process: `docs/RELEASE.md`.

## Do Not

- Do not introduce unrelated refactors.
- Do not add dependencies for trivial helpers.
- Do not change setting keys without migration or normalization.
- Do not bypass `CaptureService`/`CaptureIndex` for vault writes or index mutations.
- Do not make UI components import services directly when a plugin prop method already exists.
- Do not silently change capture file schema.
- Do not degrade mobile compatibility.
- Do not add network calls, telemetry, accounts, cloud sync, or AI behavior.
- Do not rewrite user Markdown wholesale unless the operation specifically requires it and tests prove safety.
- Do not claim work is complete before running required checks or clearly reporting why a check was skipped.

## References

- `docs/QA.md`
- `docs/RELEASE.md`
- `docs/OBSIDIAN_PLUGIN_REVIEW.md`
- Obsidian plugin self-critique checklist: https://docs.obsidian.md/oo/plugin
- Obsidian submit your plugin: https://docs.obsidian.md/Plugins/Releasing/Submit%20your%20plugin
- Obsidian manifest reference: https://docs.obsidian.md/Reference/Manifest
- Obsidian sample plugin: https://github.com/obsidianmd/obsidian-sample-plugin
