import { Notice } from "obsidian";

export function reportActionError(label: string, error: unknown): void {
  console.error(`Local Capture action failed: ${label}`, error);
  new Notice(`操作失败：${label}`);
}

export function runGuardedAction(label: string, action: () => void | Promise<unknown>): void {
  try {
    void Promise.resolve(action()).catch((error: unknown) => {
      reportActionError(label, error);
    });
  } catch (error) {
    reportActionError(label, error);
  }
}
