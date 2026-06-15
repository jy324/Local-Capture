import { useEffect, useState } from "react";
import type LocalCapturePlugin from "../../main";
import { CaptureItem } from "../../types";

/**
 * Subscribes to the capture index and exposes the current items plus the
 * rebuild-in-progress flag (used to show a loading state on first open).
 */
export function useCaptureItems(plugin: LocalCapturePlugin): {
  items: CaptureItem[];
  isRebuilding: boolean;
} {
  const [items, setItems] = useState<CaptureItem[]>(() => plugin.index.getItems());
  const [isRebuilding, setIsRebuilding] = useState<boolean>(() => plugin.index.isRebuilding());

  useEffect(() => {
    setItems(plugin.index.getItems());
    setIsRebuilding(plugin.index.isRebuilding());
    return plugin.index.subscribe(() => {
      setItems(plugin.index.getItems());
      setIsRebuilding(plugin.index.isRebuilding());
    });
  }, [plugin]);

  return { items, isRebuilding };
}
