# Local Capture QA

Use this document for validation and local QA. Root rules live in `AGENTS.md`; release steps live in `docs/RELEASE.md`; Obsidian review checks live in `docs/OBSIDIAN_PLUGIN_REVIEW.md`.

## Required Checks

Before declaring an implementation complete, run the narrowest relevant test first, then:

```powershell
npm run typecheck
npm test
npm run verify:release
```

Report any skipped check and the reason.

## Vault QA

Run vault QA when UI, Obsidian API, vault writes, indexing, release assets, or user-visible behavior changed.

```powershell
npm run qa:vault -- "<path-to-vault>"
```

For a local PowerShell setup, prefer environment variables instead of hard-coded machine paths:

```powershell
npm run qa:vault -- "$env:OBSIDIAN_QA_VAULT"
```

The vault QA script packages the plugin, installs it into the target vault, enables it, creates fixture captures, generates a Daily Summary fixture, and writes a vault-side QA report.

## Obsidian CLI Checks

When an Obsidian CLI is available, use it to confirm plugin install state, command registration, and runtime errors:

```powershell
& "$env:OBSIDIAN_CLI" vault=ob-dev plugins filter=community versions format=json
& "$env:OBSIDIAN_CLI" vault=ob-dev commands filter=local-capture
& "$env:OBSIDIAN_CLI" vault=ob-dev dev:errors
```

If the local CLI path or vault name differs, set environment variables or adapt the command for the local machine. Do not copy user-specific absolute paths into root repository instructions.

## Smoke Test

- Create a note capture with Markdown and `#tags`.
- Create a task capture and toggle it done/todo.
- Search by text and tag.
- Use the heatmap to filter a date.
- Pin, archive, delete, and restore a capture.
- Open the source Markdown file.
- Send one capture to an existing note.
- Generate a Daily Summary for the selected heatmap date.
- Send the same date summary to another file twice and confirm the managed block updates instead of duplicating.
- Switch to Table view and confirm rows open source files correctly.
- Select multiple captures, add/remove tags in batch, and change note/task type in batch.
- Save a query, apply it, and delete it.
- Run the Local Capture diagnostics command and confirm it reports no issues.
- Run `obsidian://local-capture?text=hello%20%23qa&type=note` from the OS or browser.

## UI And Screenshot QA

For UI/CSS changes:

- Capture or refresh screenshots in `docs/qa-screenshots/`.
- Update `docs/OB_DEV_QA.md` with the QA date, plugin version, commands, coverage, notes, and screenshots.
- Visually inspect screenshots for blank views, overlap, clipped text, layout shifts, and stale UI states.

## Mobile Basics

- Confirm the sidebar view opens on mobile.
- Create and edit a short capture.
- Use search and status filters.
- Generate today's summary.
