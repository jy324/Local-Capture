import { describe, expect, it, vi } from "vitest";

vi.mock("obsidian", () => ({
  App: class {},
  TFile: class {
    path: string;
    extension: string;

    constructor(path: string) {
      this.path = path;
      this.extension = path.split(".").pop() ?? "";
    }
  },
  normalizePath: (path: string) => path.replace(/\\/g, "/").replace(/\/+/g, "/")
}));

const { TFile } = await import("obsidian");
const { CaptureIndex } = await import("../src/services/CaptureIndex");

const TFileClass = TFile as unknown as { new (path: string): { path: string; extension: string } };

describe("CaptureIndex rebuild state", () => {
  it("notifies subscribers after rebuilding is released for an empty vault", async () => {
    const app = {
      vault: {
        getMarkdownFiles: vi.fn(() => []),
        read: vi.fn()
      }
    };
    const index = new CaptureIndex(
      app as never,
      () => ({
        captureFolder: "Captures"
      }) as never
    );
    const states: boolean[] = [];
    index.subscribe(() => states.push(index.isRebuilding()));

    await index.rebuild();

    expect(states).toEqual([true, false]);
    expect(index.isRebuilding()).toBe(false);
    expect(index.getItems()).toEqual([]);
  });

  it("bounds rebuild reads and reruns when a rebuild is requested while busy", async () => {
    const files = Array.from({ length: 12 }, (_value, index) => new TFileClass(`Captures/item-${index}.md`));
    let readCalls = 0;
    let inFlight = 0;
    let maxInFlight = 0;
    let releaseFirstReads: () => void = () => {};
    let firstReadsReleased = false;
    const firstReadsGate = new Promise<void>((resolve) => {
      releaseFirstReads = () => {
        firstReadsReleased = true;
        resolve();
      };
    });

    const app = {
      vault: {
        getMarkdownFiles: vi.fn(() => files),
        read: vi.fn(async (file: { path: string }) => {
          readCalls += 1;
          inFlight += 1;
          maxInFlight = Math.max(maxInFlight, inFlight);
          if (!firstReadsReleased) {
            await firstReadsGate;
          }
          inFlight -= 1;
          return makeRawCapture(file.path, readCalls);
        })
      }
    };
    const index = new CaptureIndex(
      app as never,
      () => ({
        captureFolder: "Captures"
      }) as never
    );

    const firstRebuild = index.rebuild();
    await waitUntil(() => readCalls === 8);
    await index.rebuild();
    expect(app.vault.getMarkdownFiles).toHaveBeenCalledTimes(1);

    releaseFirstReads();
    await firstRebuild;

    expect(maxInFlight).toBeLessThanOrEqual(8);
    expect(app.vault.getMarkdownFiles).toHaveBeenCalledTimes(2);
    expect(index.getItems()).toHaveLength(12);
  });
});

async function waitUntil(predicate: () => boolean): Promise<void> {
  for (let attempt = 0; attempt < 20; attempt += 1) {
    if (predicate()) return;
    await Promise.resolve();
  }
  throw new Error("Timed out waiting for condition");
}

function makeRawCapture(path: string, index: number): string {
  return [
    "---",
    `capture_id: "capture-${index}"`,
    'created: "2026-06-03T00:00:00.000Z"',
    'updated: "2026-06-03T00:00:00.000Z"',
    'type: "note"',
    'status: "active"',
    "pinned: false",
    "---",
    "",
    `Body from ${path}`,
    ""
  ].join("\n");
}
