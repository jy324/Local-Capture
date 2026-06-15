# Obsidian Plugin Review Checklist

Use this checklist before commit, tag, release, or any user-visible change that could affect Obsidian plugin review expectations.

## Manifest And Release

- `manifest.json.id` uses lowercase letters and hyphens.
- `manifest.json.id` has no spaces, no `obsidian`, and no trailing `plugin`.
- `manifest.json.version`, `package.json.version`, `package-lock.json`, and `versions.json` stay synchronized.
- `versions.json[manifest.version]` equals `manifest.minAppVersion`.
- Release tag equals `manifest.json.version` exactly.
- Obsidian release tags do not use a `v` prefix.
- Release assets include `main.js`, `manifest.json`, and `styles.css`.
- This project also ships `versions.json` and `SHA256SUMS.txt`.
- `npm run verify:release` passes before publishing.

## API And Safety

- No global `app`; use `this.app`.
- No unscoped DOM mutation.
- No unsafe `innerHTML` or `outerHTML`.
- No Node/Electron-only runtime imports in mobile-capable plugin code.
- No default hotkeys.
- No unnecessary Adapter API usage; if needed, document and test it.
- No `vault.delete` or hard deletes for capture files without explicit confirmed feature scope.
- No logging vault content, tokens, private paths, clipboard content, or user note bodies.
- Register commands, ribbon icons, events, and protocol routes through Obsidian plugin lifecycle APIs.

## CSS And UI

- CSS selectors are scoped to `local-capture-*`.
- UI stays usable in right sidebar and narrow/mobile widths.
- Text does not overlap, clip, or overflow controls.
- Fixed-format controls, table columns, list rows, and icon buttons have stable dimensions.
- Icons should be `lucide-react` when available.
- UI text stays Simplified Chinese.
- Markdown preview uses Obsidian `MarkdownRenderer`.

## Exceptions

If official lint expectations conflict with current project conventions, document the exception in commit or PR notes with the reason and any risk mitigation.
