import { describe, expect, it, vi } from "vitest";

vi.mock("obsidian", () => ({
  App: class {},
  TFile: class {},
  normalizePath: (path: string) => path.replace(/\\/g, "/").replace(/\/+/g, "/")
}));

const { CaptureIndex } = await import("../src/services/CaptureIndex");

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
});
