import { describe, expect, it } from "vitest";
import { buildCapturePath, dayKeyFromIso, recentDayKeys } from "../src/utils/dates";

describe("dates and paths", () => {
  it("builds the configured capture path", () => {
    const path = buildCapturePath("Captures", new Date("2026-05-28T09:30:12"), "a81f");
    expect(path).toContain("Captures/2026/05/");
    expect(path.endsWith("-a81f.md")).toBe(true);
  });

  it("uses local day keys", () => {
    expect(dayKeyFromIso("2026-05-28T09:30:12.000Z")).toMatch(/^2026-05-/);
    expect(recentDayKeys(3, new Date("2026-05-28T12:00:00")).length).toBe(3);
  });
});

