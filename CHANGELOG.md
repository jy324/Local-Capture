# Changelog

## 0.9.1

- Fixed empty-vault rebuild state so the first-run empty state appears after indexing completes.
- Fixed batch tag remove/replace so inline body tags are synchronized and do not reappear after rebuilding the index.
- Added bounded concurrency for batch writes and queued duplicate index refresh events.
- Added release verification and expanded regression/performance tests.

## 0.9.0

- Fixed a data-loss bug where editing a capture's body (or renaming/deleting tags) silently dropped user-authored frontmatter keys such as `aliases` and `cssclass`. Body and frontmatter writes are now isolated and preserve unknown keys.
- Reworked the sidebar with progressive disclosure: the composer, search, status, and view controls stay visible while saved queries, tag cloud, and the heatmap collapse into a "高级筛选" section (state persisted).
- Moved low-frequency global actions (rebuild, summary, send summary, tag management, diagnostics) into the view header instead of the filter area.
- Added a virtualized Table view, an index sort cache, Set-based selection, and a memoized + debounced search so large vaults stay responsive.
- Added distinct first-run onboarding and no-match empty states (with a clear-filters action and visible keyboard hints), plus a loading state during initial index rebuild.
- Split the monolithic capture view into focused components and hooks; added frontmatter-preservation and 1k/5k/10k performance regression tests.

## 0.8.0

- Added tag management with counts, colors, rename, and delete actions.
- Added Table view sorting, column visibility controls, and select-current-results.
- Added capture templates for note, task, clipboard, and URI capture sources.
- Added an `ob-dev` vault QA flow and screenshot-backed documentation.

## 0.7.0

- Added runtime diagnostics for real vault smoke testing.
- Added batch tag updates and batch note/task type conversion for selected captures.
- Added a compact Table view alongside the timeline.
- Added saved queries for reusable search/status/date filters.

## 0.6.0

- Added Daily Summary generation for today or the currently selected heatmap day.
- Added idempotent summary blocks that can update generated summary files, Daily Notes, or a chosen target file without duplicating content.
- Added release packaging and vault install helper scripts for BRAT/manual testing.
- Added QA guidance for real Obsidian vault smoke testing.

## 0.5.0

- Initial Markdown-native quick capture timeline.
- Added one-file-per-capture storage, search, tags, archive/delete/restore, Send to File, URI capture, and release-ready Obsidian assets.
