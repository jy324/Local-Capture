import { useCallback, useEffect, useMemo, useState } from "react";
import type LocalCapturePlugin from "../../main";
import { CaptureItem } from "../../types";

/**
 * Selection state backed by a Set for O(1) membership checks per row
 * (the previous array + .includes was O(n) per render-row).
 */
export function useSelection(plugin: LocalCapturePlugin, items: CaptureItem[]) {
  const [selectedIds, setSelectedIds] = useState<Set<string>>(() => new Set());

  // Push the current selection to the plugin for command-palette actions.
  useEffect(() => {
    plugin.setSelectedCaptureIds([...selectedIds]);
  }, [plugin, selectedIds]);

  // Drop ids that no longer exist after the index changes.
  useEffect(() => {
    const valid = new Set(items.map((item) => item.id));
    setSelectedIds((current) => {
      let changed = false;
      const next = new Set<string>();
      for (const id of current) {
        if (valid.has(id)) next.add(id);
        else changed = true;
      }
      return changed ? next : current;
    });
  }, [items]);

  const has = useCallback((id: string) => selectedIds.has(id), [selectedIds]);

  const toggle = useCallback((id: string) => {
    setSelectedIds((current) => {
      const next = new Set(current);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }, []);

  const clear = useCallback(() => setSelectedIds(new Set()), []);

  const toggleAll = useCallback((visibleIds: string[]) => {
    setSelectedIds((current) => {
      const allSelected = visibleIds.length > 0 && visibleIds.every((id) => current.has(id));
      const next = new Set(current);
      if (allSelected) {
        for (const id of visibleIds) next.delete(id);
      } else {
        for (const id of visibleIds) next.add(id);
      }
      return next;
    });
  }, []);

  const selectedItems = useMemo(
    () => items.filter((item) => selectedIds.has(item.id)),
    [items, selectedIds]
  );

  return { selectedIds, has, toggle, clear, toggleAll, selectedItems };
}
