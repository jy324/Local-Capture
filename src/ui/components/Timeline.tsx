import { JSX, useRef } from "react";
import { useVirtualizer } from "@tanstack/react-virtual";
import type LocalCapturePlugin from "../../main";
import { CaptureItem } from "../../types";
import { EditSession } from "../types";
import { CaptureCard } from "./CaptureCard";

interface TimelineProps {
  plugin: LocalCapturePlugin;
  items: CaptureItem[];
  isSelected: (id: string) => boolean;
  onToggleSelected: (id: string) => void;
  editSession: EditSession | null;
  onStartEdit: (item: CaptureItem) => void;
  onEditBodyChange: (body: string) => void;
  onSaveEdit: (item: CaptureItem) => void;
  onCancelEdit: () => void;
  isEditDirty: boolean;
  hasEditConflict: (item: CaptureItem) => boolean;
}

export function Timeline({
  plugin,
  items,
  isSelected,
  onToggleSelected,
  editSession,
  onStartEdit,
  onEditBodyChange,
  onSaveEdit,
  onCancelEdit,
  isEditDirty,
  hasEditConflict
}: TimelineProps): JSX.Element {
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
                editing={editSession?.captureId === item.id}
                editBody={editSession?.captureId === item.id ? editSession.draftBody : item.bodyMarkdown}
                editDirty={editSession?.captureId === item.id ? isEditDirty : false}
                editConflict={hasEditConflict(item)}
                onStartEdit={() => onStartEdit(item)}
                onEditBodyChange={onEditBodyChange}
                onSaveEdit={() => onSaveEdit(item)}
                onCancelEdit={onCancelEdit}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
