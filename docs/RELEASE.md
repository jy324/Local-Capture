# Local Capture Release

Only run release operations when the user or maintainer explicitly requests them. Do not commit, tag, push, create a GitHub Release, or upload assets as a default completion step.

## Invariants

- `manifest.json.version`, `package.json.version`, `package-lock.json`, and `versions.json` stay synchronized.
- `versions.json[manifest.version]` equals `manifest.minAppVersion`.
- Release tag equals `manifest.json.version` exactly.
- Obsidian release tags do not use a `v` prefix.
- Release assets include `main.js`, `manifest.json`, `styles.css`, `versions.json`, and `SHA256SUMS.txt`.
- Root `main.js` stays committed for Obsidian, BRAT, and manual install.

## Version Prep

1. Choose the next version and confirm no existing tag or release already uses it.
2. Update `package.json`, `package-lock.json`, `manifest.json`, `versions.json`, and `CHANGELOG.md`.
3. Confirm `versions.json` maps the new version to the current `manifest.minAppVersion`.
4. Do not raise `manifest.minAppVersion` unless the required Obsidian API is identified and documented.

Useful checks:

```powershell
git tag --list "<version>"
```

If GitHub CLI access is available:

```powershell
gh release view "<version>"
```

## Validation

Run the required checks before publishing:

```powershell
npm run typecheck
npm test
npm run verify:release
```

When UI, Obsidian API, vault writes, indexing, release assets, or user-visible behavior changed, also run:

```powershell
npm run qa:vault -- "<path-to-vault>"
```

Update `docs/OB_DEV_QA.md` and screenshots when QA requires visual or vault evidence.

## Publish Flow

1. Check `git status --short --branch` and confirm only task-related files changed.
2. Commit with a clear English imperative message.
3. Create a tag matching `manifest.json.version` exactly.
4. Push the branch and tag.
5. Create a GitHub Release for that tag.
6. Upload assets from `dist/local-capture/`:
   - `main.js`
   - `manifest.json`
   - `styles.css`
   - `versions.json`
   - `SHA256SUMS.txt`
7. Confirm the release URL and uploaded asset list.

Do not reuse an existing tag. If the target version already has a tag or release, bump the version before publishing.
