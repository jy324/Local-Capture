import { beforeEach, describe, expect, it, vi } from "vitest";

const notices: string[] = [];

vi.mock("obsidian", () => ({
  Notice: class {
    constructor(message: string) {
      notices.push(message);
    }
  }
}));

const { runGuardedAction } = await import("../src/actionErrors");

describe("guarded actions", () => {
  beforeEach(() => {
    notices.length = 0;
    vi.restoreAllMocks();
  });

  it("reports rejected async actions to the console and the user", async () => {
    const error = new Error("write failed");
    const consoleError = vi.spyOn(console, "error").mockImplementation(() => {});

    runGuardedAction("生成今日摘要", async () => {
      throw error;
    });

    await new Promise((resolve) => setTimeout(resolve, 0));

    expect(consoleError).toHaveBeenCalledWith("Local Capture action failed: 生成今日摘要", error);
    expect(notices).toEqual(["操作失败：生成今日摘要"]);
  });

  it("reports synchronous action failures", () => {
    const error = new Error("sync failed");
    const consoleError = vi.spyOn(console, "error").mockImplementation(() => {});

    runGuardedAction("标签管理", () => {
      throw error;
    });

    expect(consoleError).toHaveBeenCalledWith("Local Capture action failed: 标签管理", error);
    expect(notices).toEqual(["操作失败：标签管理"]);
  });
});
