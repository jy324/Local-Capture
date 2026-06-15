import { JSX, useMemo } from "react";
import { CaptureItem } from "../../types";
import { dayKeyFromIso, recentDayKeys } from "../../utils/dates";

interface HeatmapProps {
  items: CaptureItem[];
  days: number;
  selectedDay?: string;
  onSelectDay: (day: string) => void;
}

export function Heatmap({ items, days, selectedDay, onSelectDay }: HeatmapProps): JSX.Element {
  const counts = useMemo(() => {
    const map = new Map<string, number>();
    for (const item of items) {
      if (item.status === "deleted") continue;
      const day = dayKeyFromIso(item.createdAt);
      map.set(day, (map.get(day) ?? 0) + 1);
    }
    return map;
  }, [items]);

  const dayKeys = useMemo(() => recentDayKeys(days), [days]);
  const max = Math.max(1, ...dayKeys.map((day) => counts.get(day) ?? 0));

  return (
    <div className="local-capture-heatmap" aria-label="记录热力图">
      {dayKeys.map((day) => {
        const count = counts.get(day) ?? 0;
        const level = count === 0 ? 0 : Math.ceil((count / max) * 4);
        return (
          <button
            key={day}
            type="button"
            className={selectedDay === day ? "is-selected" : ""}
            data-level={level}
            title={`${day}: ${count} 条`}
            aria-label={`${day}: ${count} 条`}
            onClick={() => onSelectDay(day)}
          />
        );
      })}
    </div>
  );
}
