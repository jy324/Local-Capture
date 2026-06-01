# Local Capture QA Checklist

Use this checklist before tagging a public test release.

## Install

1. Run `npm run package:release`.
2. Copy `dist/local-capture/main.js`, `manifest.json`, and `styles.css` to a test vault, or run:

   ```bash
   npm run install:vault -- "D:/Path/To/Vault"
   ```

3. Enable Local Capture from Obsidian community plugins.
4. Confirm the ribbon icon and command palette entries appear.

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

## ob-dev Regression

For the local `ob-dev` vault, run:

```bash
npm run qa:vault -- "D:/Documents/Projects/ob-dev"
```

Then use Obsidian CLI to verify:

```bash
Obsidian.com vault=ob-dev plugin id=local-capture
Obsidian.com vault=ob-dev commands filter=local-capture
Obsidian.com vault=ob-dev dev:errors
```

## Mobile Basics

- Confirm the sidebar view opens on mobile.
- Create and edit a short capture.
- Use search and status filters.
- Generate today's summary.
