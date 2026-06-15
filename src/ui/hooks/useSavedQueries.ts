import { useState } from "react";
import type LocalCapturePlugin from "../../main";
import { SavedQuery } from "../../types";
import { CaptureFilterState } from "../../types";

export function useSavedQueries(plugin: LocalCapturePlugin) {
  const [savedQueries, setSavedQueries] = useState<SavedQuery[]>(() => plugin.settings.savedQueries);
  const [savedQueryId, setSavedQueryId] = useState("");
  const [savedQueryName, setSavedQueryName] = useState("");

  async function save(name: string, filter: CaptureFilterState): Promise<void> {
    const saved = await plugin.saveQuery(name, filter);
    setSavedQueries([...plugin.settings.savedQueries]);
    setSavedQueryId(saved.id);
    setSavedQueryName("");
  }

  async function remove(): Promise<void> {
    if (!savedQueryId) return;
    await plugin.deleteQuery(savedQueryId);
    setSavedQueries([...plugin.settings.savedQueries]);
    setSavedQueryId("");
  }

  return {
    savedQueries,
    savedQueryId,
    setSavedQueryId,
    savedQueryName,
    setSavedQueryName,
    save,
    remove
  };
}
