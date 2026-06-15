import Fuse from "fuse.js";
import { useEffect, useMemo, useRef, useState } from "react";
import { CaptureItem } from "../../types";
import { dayKeyFromIso } from "../../utils/dates";
import { StatusFilter } from "../types";

/**
 * Owns query / status / day filtering. The Fuse index is memoized on the
 * status+day filtered list so typing only re-runs search() instead of
 * rebuilding the index, and the query is debounced to avoid per-keystroke
 * recompute on large lists.
 */
export function useCaptureFilters(items: CaptureItem[]) {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState<StatusFilter>("active");
  const [selectedDay, setSelectedDay] = useState<string | undefined>();
  const [debouncedQuery, setDebouncedQuery] = useState("");

  // Debounce the query that actually drives filtering (~150ms).
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(() => {
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setDebouncedQuery(query), 150);
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, [query]);

  // Status + day filtered source list; Fuse is rebuilt only when this changes.
  const scopedItems = useMemo(() => {
    const byStatus = status === "all" ? items : items.filter((item) => item.status === status);
    return selectedDay
      ? byStatus.filter((item) => dayKeyFromIso(item.createdAt) === selectedDay)
      : byStatus;
  }, [items, selectedDay, status]);

  const fuse = useMemo(
    () =>
      new Fuse(scopedItems, {
        keys: ["title", "bodyMarkdown", "tags", "path", "type"],
        threshold: 0.35,
        ignoreLocation: true
      }),
    [scopedItems]
  );

  const filteredItems = useMemo(() => {
    const trimmed = debouncedQuery.trim();
    if (!trimmed) return scopedItems;
    return fuse.search(trimmed).map((result) => result.item);
  }, [debouncedQuery, fuse, scopedItems]);

  return {
    query,
    setQuery,
    status,
    setStatus,
    selectedDay,
    setSelectedDay,
    filteredItems
  };
}
