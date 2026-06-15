# Changelog

## 0.9.5

- Fixed advanced filters expand/collapse animation that was unstable due to a duplicate `.local-capture-advanced-body` class collision between the animation wrapper and the inner content root.
- Added micro type badges to capture cards (笔记 outlined muted, 任务 outlined accent) replacing flat gray labels.
- Added status badge for non-active captures (归档/删除) with subtle background.
- Reshaped footer tags into outlined pills with 12px radius and tag-color border support.
- Removed duplicate timestamp from card footer; footer is now hidden entirely when a capture has no tags.
- Added inset shadow + slightly stronger border to composer/edit textareas so the input has a visible boundary even when unfocused.
- Added vertical divider between status tabs and view tabs in the filter row.
- Grouped BatchBar actions into safe/destructive segments with a divider, destructive hover color for the delete action, and a right-aligned close button.

## 0.9.4

- Added micro-interaction transitions to all interactive elements (icon buttons, tabs, tag pills, heatmap cells) with GPU-composited transforms.
- Added card hover elevation with subtle box-shadow lift and smooth border transitions.
- Established spatial hierarchy: composer elevated with shadow, filter bar compressed, advanced filters recessed, timeline expanded.
- Refined card design: larger border-radius, increased body padding, softened internal separators, enhanced selected/archived/deleted visual states.
- Added input focus rings with accent-colored glow on composer textarea and search field.
- Redesigned BatchBar with slide-in animation, accent-tinted background, and count badge.
- Added smooth grid-template-rows expand/collapse animation for advanced filters section.
- Improved typography rhythm with tabular-nums, font-weight hierarchy, and refined empty state spacing.
- Enhanced empty state onboarding with card-like container, breathing icon animation, and larger spinner.
- Added `prefers-reduced-motion` support to disable all animations and transitions for accessibility.

## 0.9.3

- Added edit draft protection so card edits keep a single active draft session while the view re-renders, filters, or virtualized rows unmount.
- Added confirmation modals for discarding unsaved card edits and overwriting a capture body when the source file changed during editing.
- Added keyboard support for card editing with Ctrl/Cmd+Enter to save and Esc to cancel through the same confirmation flow.
- Improved narrow sidebar card edit layout and added ob-dev QA screenshots for edit draft protection.

## 0.9.2

- Added guarded error handling for commands, view actions, modals, and table/batch controls so failed async actions show user-facing notices.
- Reworked folder creation and diagnostics probes to use Obsidian Vault APIs instead of direct adapter writes.
- Added bounded, pending-aware index rebuilds for large vaults and overlapping rebuild requests.
- Split agent, QA, release, and Obsidian review guidance into focused docs.
- Added regression tests for action error reporting, vault folder/diagnostics behavior, and index rebuild concurrency.

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
