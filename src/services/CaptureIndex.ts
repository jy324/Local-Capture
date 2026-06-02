import { App, TAbstractFile, TFile, normalizePath } from "obsidian";
import { LocalCaptureSettings } from "../settings";
import { CaptureIndexListener, CaptureItem } from "../types";
import { parseCaptureFile } from "../utils/frontmatter";

export class CaptureIndex {
  private readonly itemsByPath = new Map<string, CaptureItem>();
  private readonly listeners = new Set<CaptureIndexListener>();
  private rebuilding = false;
  private sortedCache: CaptureItem[] | null = null;

  constructor(
    private readonly app: App,
    private readonly getSettings: () => LocalCaptureSettings
  ) {}

  subscribe(listener: CaptureIndexListener): () => void {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  isRebuilding(): boolean {
    return this.rebuilding;
  }

  getItems(): CaptureItem[] {
    if (!this.sortedCache) {
      this.sortedCache = [...this.itemsByPath.values()].sort(sortCaptures);
    }
    return this.sortedCache;
  }

  getById(id: string): CaptureItem | undefined {
    return this.getItems().find((item) => item.id === id);
  }

  getByIds(ids: Iterable<string>): CaptureItem[] {
    const idSet = new Set(ids);
    return this.getItems().filter((item) => idSet.has(item.id));
  }

  async rebuild(): Promise<void> {
    if (this.rebuilding) return;
    this.rebuilding = true;
    this.notify();

    try {
      const next = new Map<string, CaptureItem>();
      const files = this.app.vault
        .getMarkdownFiles()
        .filter((file) => this.isCapturePath(file.path));

      for (const file of files) {
        const item = await this.readCapture(file);
        if (item) {
          next.set(file.path, item);
        }
      }

      this.itemsByPath.clear();
      for (const [path, item] of next) {
        this.itemsByPath.set(path, item);
      }
    } finally {
      this.rebuilding = false;
      this.notify();
    }
  }

  async updateFile(file: TAbstractFile): Promise<void> {
    if (!(file instanceof TFile) || file.extension !== "md") return;

    if (!this.isCapturePath(file.path)) {
      if (this.itemsByPath.delete(file.path)) {
        this.notify();
      }
      return;
    }

    const item = await this.readCapture(file);
    if (item) {
      this.itemsByPath.set(file.path, item);
    } else {
      this.itemsByPath.delete(file.path);
    }
    this.notify();
  }

  removePath(path: string): void {
    if (this.itemsByPath.delete(path)) {
      this.notify();
    }
  }

  isCapturePath(path: string): boolean {
    const folder = normalizePath(this.getSettings().captureFolder).replace(/^\/+|\/+$/g, "");
    const normalized = normalizePath(path);
    return normalized === folder || normalized.startsWith(`${folder}/`);
  }

  private async readCapture(file: TFile): Promise<CaptureItem | null> {
    try {
      const raw = await this.app.vault.read(file);
      return parseCaptureFile(file.path, raw);
    } catch (error) {
      console.error("Local Capture failed to read capture", file.path, error);
      return null;
    }
  }

  private notify(): void {
    this.sortedCache = null;
    for (const listener of this.listeners) {
      listener();
    }
  }
}

function sortCaptures(a: CaptureItem, b: CaptureItem): number {
  if (a.pinned !== b.pinned) {
    return a.pinned ? -1 : 1;
  }

  return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
}

