# ob-dev Vault QA

This document records the Local Capture QA pass performed against the real Obsidian vault at `D:\Documents\Projects\ob-dev`.

## Environment

- Vault: `ob-dev`
- Vault path: `D:\Documents\Projects\ob-dev`
- Plugin version: `0.8.0`
- Test date: `2026-06-02`
- Install command: `npm run qa:vault -- "D:\Documents\Projects\ob-dev"`

## Automated Checks

The vault QA script installed the plugin, enabled it in `community-plugins.json`, generated capture fixtures, generated a Daily Summary fixture, and wrote a vault-side report to:

`Local Capture QA/QA Report.md`

Script result:

```text
Result: 7/7 checks passed
```

Verified with Obsidian CLI:

```text
plugin id=local-capture
type    community
name    Local Capture
version 0.8.0
enabled true
```

```text
commands filter=local-capture
local-capture:open-local-capture
local-capture:batch-tag-selected-captures
local-capture:batch-type-selected-captures
local-capture:generate-current-day-daily-summary
local-capture:manage-local-capture-tags
local-capture:run-local-capture-diagnostics
...
```

```text
dev:errors
No errors captured.
```

## Feature Screenshots

### Timeline, Search, Tags, Heatmap, Commands

![Local Capture timeline in ob-dev](qa-screenshots/ob-dev-local-capture.png)

### Table View, Column Controls, Selection

![Local Capture table view in ob-dev](qa-screenshots/ob-dev-table-view.png)

### Tag Management

![Local Capture tag management in ob-dev](qa-screenshots/ob-dev-tag-management.png)

## Tested Feature Coverage

- Plugin install into `.obsidian/plugins/local-capture`
- Plugin enable and reload through Obsidian CLI
- Sidebar view command: `local-capture:open-local-capture`
- Runtime diagnostics command: `local-capture:run-local-capture-diagnostics`
- Capture indexing from Markdown files under `Captures/`
- Timeline view with rendered Markdown cards
- Status filters for active, archived, deleted, and all captures
- Search input and tag chips
- Heatmap rendering from capture dates
- Daily Summary command and generated managed summary block
- Table view switch, row rendering, column visibility controls, and table sorting UI
- Tag management command and modal with counts, color inputs, rename, and delete actions
- Saved query controls are visible and wired in the sidebar
- Batch actions are visible for selected captures

## Vault Fixtures

Generated fixture files:

- `Captures/2026/06/20260602-090000-qa01.md`
- `Captures/2026/06/20260602-101500-qa02.md`
- `Captures/2026/06/20260602-113000-qa03.md`
- `Captures/2026/06/20260602-130000-qa04.md`
- `Captures/Generated/Daily Summary/2026-06-02.md`
- `Local Capture QA/Send Target.md`
- `Local Capture QA/QA Report.md`

Daily Summary content was verified through Obsidian CLI and includes the managed block markers:

```text
<!-- local-capture-summary:start 2026-06-02 -->
...
<!-- local-capture-summary:end 2026-06-02 -->
```

## Notes

- The screenshots are real Obsidian screenshots captured through `dev:screenshot`.
- The test did not mutate existing user notes outside the generated `Captures/` and `Local Capture QA/` fixture paths.
- The plugin reported no captured runtime errors after opening the view, running diagnostics, generating the daily summary, switching to table view, and opening tag management.

