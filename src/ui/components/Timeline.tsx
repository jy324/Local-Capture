import { JSX, useRef } from "react";
import { useVirtualizer } from "@tanstack/react-virtual";
import type LocalCapturePlugin from "../../main";
import { CaptureItem } from "../../types";
import { CaptureCard } from "./CaptureCard";

interface TimelineProps {
  plugin: LocalCapturePlugin;
  items: CaptureItem[];
  isSelected: (id: string) => boolean;
  onToggleSelected: (id: string) => void;
}

export function Timeline({ plugin, items, isSelected, onToggleSelected }: TimelineProps): JSX.Element {
  const parentRef = useRef<HTMLDivElement>(null);
  const virtualizer = useVirtualizer({
    count: items.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 220,
    overscan: 8
  });

  return (
    <div ref={parentRef} className="local-capture-timeline">
      <div
        className="local-capture-virtual-space"
        style={{
          height: `${virtualizer.getTotalSize()}px`
        }}
      >
        {virtualizer.getVirtualItems().map((virtualItem) => {
          const item = items[virtualItem.index];
          return (
            <div
              key={item.id}
              className="local-capture-virtual-row"
              data-index={virtualItem.index}
              ref={virtualizer.measureElement}
              style={{
                transform: `translateY(${virtualItem.start}px)`
              }}
            >
              <CaptureCard
                plugin={plugin}
                item={item}
                selected={isSelected(item.id)}
                onToggleSelected={() => onToggleSelected(item.id)}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
