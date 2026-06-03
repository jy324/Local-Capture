import { afterEach, describe, expect, it, vi } from "vitest";
import type { LocalCaptureSettings } from "../src/settings";

vi.mock("obsidian", () => {
  class TFile {
    path: string;
    extension: string;
    basename: string;

    constructor(path: string) {
      this.path = path;
      this.extension = path.split(".").pop() ?? "";
      this.basename = path.split("/").pop()?.replace(/\.md$/, "") ?? path;
    }
  }

  class TFolder {
    path: string;
    name: string;

    constructor(path: string) {
      this.path = path;
      this.name = path.split("/").pop() ?? path;
    }
  }

  return {
    App: class {},
    Notice: class {
      constructor(_message: string) {}
    },
    TFile,
    TFolder,
    normalizePath: (path: string) => path.replace(/\\/g, "/").replace(/\/+/g, "/")
  };
});

const { TFile, TFolder } = await import("obsidian");
const { CaptureService } = await import("../src/services/CaptureService");

const TFileClass = TFile as unknown as { new (path: string): { path: string; extension: string; basename: string } };
const TFolderClass = TFolder as unknown as { new (path: string): { path: string; name: string } };

afterEach(() => {
  vi.useRealTimers();
});

describe("CaptureService vault writes", () => {
  it("creates nested parent folders through the Vault API", async () => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date(2026, 5, 3, 8, 9, 10));
    const context = makeService();

    await context.service.createCapture({
      bodyMarkdown: "测试正文 #qa",
      type: "note",
      source: { type: "manual" }
    });

    expect(context.vault.createFolder.mock.calls.map((call) => call[0])).toEqual([
      "Captures",
      "Captures/2026",
      "Captures/2026/06"
    ]);
    expect(context.vault.create.mock.calls[0][0]).toMatch(/^Captures\/2026\/06\/20260603-080910-/);
    expect(context.index.updateFile).toHaveBeenCalledTimes(1);
  });

  it("fails clearly when a parent path already exists as a file", async () => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date(2026, 5, 3, 8, 9, 10));
    const context = makeService({ entries: [["Captures", new TFileClass("Captures")]] });

    await expect(
      context.service.createCapture({
        bodyMarkdown: "测试正文",
        type: "note",
        source: { type: "manual" }
      })
    ).rejects.toThrow("无法创建目录，路径已存在且不是目录：Captures");
    expect(context.vault.create).not.toHaveBeenCalled();
  });

  it("uses create and delete for diagnostics probes", async () => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date(2026, 5, 3, 8, 9, 10));
    const context = makeService();

    const diagnostics = await context.service.runDiagnostics();

    expect(diagnostics.canWriteCaptureFolder).toBe(true);
    expect(diagnostics.canWriteDailySummaryFolder).toBe(true);
    expect(context.vault.create.mock.calls.map((call) => call[0])).toEqual([
      expect.stringMatching(/^Captures\/\.local-capture-diagnostic-\d+\.md$/),
      expect.stringMatching(/^Captures\/Generated\/Daily Summary\/\.local-capture-diagnostic-\d+\.md$/)
    ]);
    expect(context.vault.delete).toHaveBeenCalledTimes(2);
  });

  it("cleans up a diagnostics probe file when create throws after writing", async () => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date(2026, 5, 3, 8, 9, 10));
    const context = makeService({
      failCreatePath: (path) => path.includes(".local-capture-diagnostic")
    });
    vi.spyOn(console, "error").mockImplementation(() => {});

    const diagnostics = await context.service.runDiagnostics();

    expect(diagnostics.canWriteCaptureFolder).toBe(false);
    expect(diagnostics.canWriteDailySummaryFolder).toBe(false);
    expect(context.vault.delete).toHaveBeenCalledTimes(2);
    expect([...context.entries.keys()].filter((path) => path.includes(".local-capture-diagnostic"))).toEqual([]);
  });
});

function makeService(options?: {
  entries?: Array<[string, unknown]>;
  failCreatePath?: (path: string) => boolean;
}) {
  const entries = new Map<string, unknown>(options?.entries ?? []);

  const vault = {
    getAbstractFileByPath: vi.fn((path: string) => entries.get(path) ?? null),
    createFolder: vi.fn(async (path: string) => {
      if (entries.has(path)) {
        throw new Error(`Path already exists: ${path}`);
      }
      const folder = new TFolderClass(path);
      entries.set(path, folder);
      return folder;
    }),
    create: vi.fn(async (path: string, _data: string) => {
      const file = new TFileClass(path);
      entries.set(path, file);
      if (options?.failCreatePath?.(path)) {
        throw new Error(`Create failed: ${path}`);
      }
      return file;
    }),
    delete: vi.fn(async (file: { path: string }) => {
      entries.delete(file.path);
    })
  };

  const app = {
    vault,
    fileManager: {
      processFrontMatter: vi.fn()
    }
  };
  const index = {
    updateFile: vi.fn(async () => {}),
    getItems: vi.fn(() => [])
  };
  const service = new CaptureService(app as never, getSettings, index as never);

  return { entries, vault, index, service };
}

function getSettings(): LocalCaptureSettings {
  return {
    captureFolder: "Captures",
    defaultType: "note",
    autoArchiveAfterSend: true,
    timelinePageSize: 80,
    heatmapDays: 90,
    dailySummaryTarget: "generated",
    dailySummaryFolder: "Captures/Generated/Daily Summary",
    dailyNoteFolder: "",
    savedQueries: [],
    tagColors: {},
    captureTemplates: {
      note: "{{content}}",
      task: "{{content}}",
      clipboard: "{{content}}",
      uri: "{{content}}"
    },
    advancedFiltersOpen: false
  };
}
