import { JSX, useEffect, useMemo, useState } from "react";
import type LocalCapturePlugin from "../main";
import { CaptureType } from "../types";
import { todayDayKey } from "../utils/dates";
import { AdvancedFilters } from "./components/AdvancedFilters";
import { BatchBar } from "./components/BatchBar";
import { CaptureTable, TableColumnControls } from "./components/CaptureTable";
import { Composer } from "./components/Composer";
import { EmptyState } from "./components/EmptyState";
import { FilterBar } from "./components/FilterBar";
import { Timeline } from "./components/Timeline";
import { useCaptureFilters } from "./hooks/useCaptureFilters";
import { useCaptureItems } from "./hooks/useCaptureItems";
import { useSavedQueries } from "./hooks/useSavedQueries";
import { useSelection } from "./hooks/useSelection";
import { useTableSort } from "./hooks/useTableSort";
import { buildDefaultQueryName } from "./shared/formatters";
import { ViewMode } from "./types";

interface LocalCaptureAppProps {
  plugin: LocalCapturePlugin;
}

export function LocalCaptureApp({ plugin }: LocalCaptureAppProps): JSX.Element {
  const { items, isRebuilding } = useCaptureItems(plugin);

  const [draft, setDraft] = useState("");
  const [draftType, setDraftType] = useState<CaptureType>(plugin.settings.defaultType);
  const [viewMode, setViewMode] = useState<ViewMode>("timeline");
  const [advancedOpen, setAdvancedOpen] = useState<boolean>(() => plugin.settings.advancedFiltersOpen);

  const filters = useCaptureFilters(items);
  const { filteredItems, query, status, selectedDay } = filters;

  const selection = useSelection(plugin, items);
  const tableSort = useTableSort(filteredItems);
  const savedQueriesState = useSavedQueries(plugin);

  // Keep plugin informed of the active day for header summary actions.
  useEffect(() => {
    plugin.setActiveDayKey(selectedDay);
  }, [plugin, selectedDay]);

  const tagCounts = useMemo(() => {
    const counts = new Map<string, number>();
    for (const item of items) {
      if (item.status === "deleted") continue;
      for (const tag of item.tags) {
        counts.set(tag, (counts.get(tag) ?? 0) + 1);
      }
    }
    return [...counts.entries()].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
  }, [items]);

  async function submitDraft(): Promise<void> {
    const bodyMarkdown = draft.trim();
    if (!bodyMarkdown) return;
    await plugin.captureService.createCapture({
      bodyMarkdown,
      type: draftType,
      source: { type: "manual" }
    });
    setDraft("");
  }

  async function toggleAdvanced(): Promise<void> {
    const next = !advancedOpen;
    setAdvancedOpen(next);
    plugin.settings.advancedFiltersOpen = next;
    await plugin.saveSettings();
  }

  function selectVisible(): void {
    const visibleIds = (viewMode === "table" ? tableSort.tableItems : filteredItems).map((item) => item.id);
    selection.toggleAll(visibleIds);
  }

  async function archiveSelected(): Promise<void> {
    await plugin.captureService.archiveMany(selection.selectedItems);
    selection.clear();
  }

  async function deleteSelected(): Promise<void> {
    await plugin.captureService.softDeleteMany(selection.selectedItems);
    selection.clear();
  }

  async function restoreSelected(): Promise<void> {
    await plugin.captureService.restoreMany(selection.selectedItems);
    selection.clear();
  }

  function applySavedQuery(id: string): void {
    savedQueriesState.setSavedQueryId(id);
    const saved = savedQueriesState.savedQueries.find((savedQuery) => savedQuery.id === id);
    if (!saved) return;
    filters.setQuery(saved.query);
    filters.setStatus(saved.status);
    filters.setSelectedDay(saved.selectedDay);
  }

  async function saveCurrentQuery(): Promise<void> {
    const name = savedQueriesState.savedQueryName.trim() || buildDefaultQueryName(query, status, selectedDay);
    await savedQueriesState.save(name, { query, status, selectedDay });
  }

  function clearFilters(): void {
    filters.setQuery("");
    filters.setStatus("active");
    filters.setSelectedDay(undefined);
    savedQueriesState.setSavedQueryId("");
  }

  const listIsEmpty = filteredItems.length === 0;
  const hasNoData = items.length === 0;
  const hasActiveFilter = Boolean(query.trim()) || status !== "active" || Boolean(selectedDay);

  return (
    <div className="local-capture-app">
      <Composer
        draft={draft}
        draftType={draftType}
        onDraftChange={setDraft}
        onDraftTypeChange={setDraftType}
        onSubmit={() => void submitDraft()}
      />

      <FilterBar
        query={query}
        onQueryChange={filters.setQuery}
        status={status}
        onStatusChange={filters.setStatus}
        viewMode={viewMode}
        onViewModeChange={setViewMode}
        onSelectVisible={selectVisible}
      />

      <AdvancedFilters
        open={advancedOpen}
        onToggleOpen={() => void toggleAdvanced()}
        plugin={plugin}
        items={items}
        tagCounts={tagCounts}
        savedQueries={savedQueriesState.savedQueries}
        savedQueryId={savedQueriesState.savedQueryId}
        savedQueryName={savedQueriesState.savedQueryName}
        onApplySavedQuery={applySavedQuery}
        onSavedQueryNameChange={savedQueriesState.setSavedQueryName}
        onSaveQuery={() => void saveCurrentQuery()}
        onDeleteSavedQuery={() => void savedQueriesState.remove()}
        onSelectTag={(tag) => filters.setQuery(`#${tag}`)}
        selectedDay={selectedDay}
        onSelectDay={(day) => filters.setSelectedDay(selectedDay === day ? undefined : day)}
        onClearDay={() => filters.setSelectedDay(undefined)}
      />

      <BatchBar
        plugin={plugin}
        selectedItems={selection.selectedItems}
        onArchive={() => void archiveSelected()}
        onRestore={() => void restoreSelected()}
        onDelete={() => void deleteSelected()}
        onClear={selection.clear}
      />

      {isRebuilding && hasNoData ? (
        <EmptyState variant="loading" />
      ) : listIsEmpty ? (
        hasNoData && !hasActiveFilter ? (
          <EmptyState variant="first-run" captureFolder={plugin.settings.captureFolder} />
        ) : (
          <EmptyState variant="no-match" onClearFilters={hasActiveFilter ? clearFilters : undefined} />
        )
      ) : viewMode === "timeline" ? (
        <Timeline
          plugin={plugin}
          items={filteredItems}
          isSelected={selection.has}
          onToggleSelected={selection.toggle}
        />
      ) : (
        <>
          <TableColumnControls visibleColumns={tableSort.visibleColumns} onToggle={tableSort.toggleColumn} />
          <CaptureTable
            plugin={plugin}
            items={tableSort.tableItems}
            isSelected={selection.has}
            onToggleSelected={selection.toggle}
            visibleColumns={tableSort.visibleColumns}
            sortKey={tableSort.sortKey}
            sortDirection={tableSort.sortDirection}
            onSort={tableSort.onSort}
          />
        </>
      )}
    </div>
  );
}
