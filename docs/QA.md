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

### Obsidian CLI Screenshot Flow

When the local Obsidian CLI exposes developer commands, capture UI evidence from the real Obsidian/Electron runtime instead of a browser. Use environment variables for machine-specific paths:

```powershell
$env:OBSIDIAN_CLI = "<path-to-Obsidian.com>"
$env:OBSIDIAN_QA_VAULT_NAME = "ob-dev"
$env:OBSIDIAN_QA_VAULT = "<path-to-vault>"
```

Install the current build into the QA vault first:

```powershell
npm run qa:vault -- "$env:OBSIDIAN_QA_VAULT"
& "$env:OBSIDIAN_CLI" vault=$env:OBSIDIAN_QA_VAULT_NAME plugin:reload id=local-capture
& "$env:OBSIDIAN_CLI" vault=$env:OBSIDIAN_QA_VAULT_NAME command id=local-capture:open-local-capture
```

Use `eval` only to operate plugin-owned UI for QA setup, such as opening the Local Capture view, clicking plugin buttons, focusing textareas, or creating a temporary unsaved draft. Keep scripts narrow and avoid mutating user notes unless the QA case explicitly requires it.

Example for entering card edit mode and capturing the result:

```powershell
$code = @'
new Promise((resolve) => {
  const editButton = document.querySelector(".local-capture-card [aria-label='编辑']");
  if (!editButton) {
    resolve("missing edit button");
    return;
  }

  editButton.click();
  setTimeout(() => {
    const textarea = document.querySelector(".local-capture-edit");
    resolve({
      editing: Boolean(textarea),
      dirtyStatus: document.querySelector(".local-capture-edit-status")?.textContent ?? null
    });
  }, 500);
})
'@

& "$env:OBSIDIAN_CLI" vault=$env:OBSIDIAN_QA_VAULT_NAME eval code=$code
& "$env:OBSIDIAN_CLI" vault=$env:OBSIDIAN_QA_VAULT_NAME dev:screenshot path="docs/qa-screenshots/ob-dev-edit-draft.png"
```

For confirmation modals, trigger the plugin action, confirm the expected modal text with `eval` or `dev:dom`, then take the screenshot before closing the modal:

```powershell
& "$env:OBSIDIAN_CLI" vault=$env:OBSIDIAN_QA_VAULT_NAME dev:dom selector=".modal-content p" text
& "$env:OBSIDIAN_CLI" vault=$env:OBSIDIAN_QA_VAULT_NAME dev:screenshot path="docs/qa-screenshots/ob-dev-edit-confirm.png"
```

For narrow/mobile checks, enable mobile emulation, reopen the plugin view after the reload, take the screenshot, then disable emulation:

```powershell
& "$env:OBSIDIAN_CLI" vault=$env:OBSIDIAN_QA_VAULT_NAME dev:mobile on
& "$env:OBSIDIAN_CLI" vault=$env:OBSIDIAN_QA_VAULT_NAME command id=local-capture:open-local-capture
& "$env:OBSIDIAN_CLI" vault=$env:OBSIDIAN_QA_VAULT_NAME dev:screenshot path="docs/qa-screenshots/ob-dev-edit-narrow.png"
& "$env:OBSIDIAN_CLI" vault=$env:OBSIDIAN_QA_VAULT_NAME dev:mobile off
```

After screenshots, check runtime errors:

```powershell
& "$env:OBSIDIAN_CLI" vault=$env:OBSIDIAN_QA_VAULT_NAME dev:errors
```

If a screenshot appears stale, first confirm the DOM state with `dev:dom` or `eval`, then capture to a temporary unique filename and visually inspect it before replacing the documented screenshot.

## Mobile Basics

- Confirm the sidebar view opens on mobile.
- Create and edit a short capture.
- Use search and status filters.
- Generate today's summary.
