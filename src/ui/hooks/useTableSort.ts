import { useMemo, useState } from "react";
import { CaptureItem } from "../../types";
import { sortTableItems } from "../shared/formatters";
import { SortDirection, TableColumn, TableSortKey } from "../types";

export function useTableSort(filteredItems: CaptureItem[]) {
  const [sortKey, setSortKey] = useState<TableSortKey>("createdAt");
  const [sortDirection, setSortDirection] = useState<SortDirection>("desc");
  const [visibleColumns, setVisibleColumns] = useState<Set<TableColumn>>(
    () => new Set(["time", "type", "status", "title", "tags"])
  );

  const tableItems = useMemo(
    () => sortTableItems(filteredItems, sortKey, sortDirection),
    [filteredItems, sortDirection, sortKey]
  );

  function onSort(nextKey: TableSortKey): void {
    if (sortKey === nextKey) {
      setSortDirection((current) => (current === "asc" ? "desc" : "asc"));
    } else {
      setSortKey(nextKey);
      setSortDirection("asc");
    }
  }

  function toggleColumn(column: TableColumn): void {
    setVisibleColumns((current) => {
      const next = new Set(current);
      if (next.has(column) && next.size > 1) {
        next.delete(column);
      } else {
        next.add(column);
      }
      return next;
    });
  }

  return { sortKey, sortDirection, visibleColumns, tableItems, onSort, toggleColumn };
}
