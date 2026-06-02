import { describe, expect, it } from "vitest";
import { mapWithConcurrency } from "../src/utils/async";

describe("mapWithConcurrency", () => {
  it("processes every item while respecting the concurrency limit", async () => {
    let active = 0;
    let maxActive = 0;
    const processed: number[] = [];

    await mapWithConcurrency([1, 2, 3, 4, 5], 2, async (item) => {
      active += 1;
      maxActive = Math.max(maxActive, active);
      await new Promise((resolve) => setTimeout(resolve, 5));
      processed.push(item);
      active -= 1;
    });

    expect(processed.sort((a, b) => a - b)).toEqual([1, 2, 3, 4, 5]);
    expect(maxActive).toBeLessThanOrEqual(2);
  });
});
