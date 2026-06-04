import { ChevronRight, Star, Trash2, X } from "lucide-react";
import { JSX } from "react";
import type LocalCapturePlugin from "../../main";
import { CaptureItem, SavedQuery } from "../../types";
import { tagColorStyle } from "../shared/formatters";
import { Heatmap } from "./Heatmap";

interface AdvancedFiltersProps {
  open: boolean;
  onToggleOpen: () => void;
  plugin: LocalCapturePlugin;
  items: CaptureItem[];
  tagCounts: Array<[string, number]>;
  // saved queries
  savedQueries: SavedQuery[];
  savedQueryId: string;
  savedQueryName: string;
  onApplySavedQuery: (id: string) => void;
  onSavedQueryNameChange: (value: string) => void;
  onSaveQuery: () => void;
  onDeleteSavedQuery: () => void;
  // tags + heatmap + day
  onSelectTag: (tag: string) => void;
  selectedDay?: string;
  onSelectDay: (day: string) => void;
  onClearDay: () => void;
}

export function AdvancedFilters(props: AdvancedFiltersProps): JSX.Element {
  const { open, onToggleOpen } = props;
  return (
    <section className="local-capture-advanced" aria-label="高级筛选">
      <button
        type="button"
        className="local-capture-advanced-toggle"
        aria-expanded={open}
        onClick={onToggleOpen}
      >
        <ChevronRight
          size={14}
          aria-hidden="true"
          className={open ? "local-capture-chevron is-open" : "local-capture-chevron"}
        />
        高级筛选
      </button>

      <div className={`local-capture-advanced-body ${open ? "is-expanded" : "is-collapsed"}`}>
        <div className="local-capture-advanced-inner">
          <AdvancedFiltersBody {...props} />
        </div>
      </div>
    </section>
  );
}

function AdvancedFiltersBody({
  plugin,
  items,
  tagCounts,
  savedQueries,
  savedQueryId,
  savedQueryName,
  onApplySavedQuery,
  onSavedQueryNameChange,
  onSaveQuery,
  onDeleteSavedQuery,
  onSelectTag,
  selectedDay,
  onSelectDay,
  onClearDay
}: AdvancedFiltersProps): JSX.Element {
  return (
    <div className="local-capture-advanced-body">
      <div className="local-capture-saved-query-row">
        <select value={savedQueryId} onChange={(event) => onApplySavedQuery(event.currentTarget.value)}>
          <option value="">保存查询</option>
          {savedQueries.map((savedQuery) => (
            <option key={savedQuery.id} value={savedQuery.id}>
              {savedQuery.name}
            </option>
          ))}
        </select>
        <input
          value={savedQueryName}
          placeholder="命名当前筛选"
          onChange={(event) => onSavedQueryNameChange(event.currentTarget.value)}
        />
        <button type="button" title="保存当前查询" onClick={onSaveQuery}>
          <Star size={14} aria-hidden="true" />
        </button>
        <button type="button" title="删除选中查询" disabled={!savedQueryId} onClick={onDeleteSavedQuery}>
          <Trash2 size={14} aria-hidden="true" />
        </button>
      </div>

      {tagCounts.length > 0 ? (
        <div className="local-capture-tag-cloud" aria-label="标签列表">
          {tagCounts.slice(0, 18).map(([tag, count]) => (
            <button
              key={tag}
              type="button"
              title={`筛选 #${tag}`}
              style={tagColorStyle(plugin.settings.tagColors[tag])}
              onClick={() => onSelectTag(tag)}
            >
              #{tag}
              <span>{count}</span>
            </button>
          ))}
        </div>
      ) : null}

      <Heatmap
        items={items}
        days={plugin.settings.heatmapDays}
        selectedDay={selectedDay}
        onSelectDay={onSelectDay}
      />

      {selectedDay ? (
        <button type="button" className="local-capture-filter-chip" onClick={onClearDay}>
          {selectedDay}
          <X size={14} aria-hidden="true" />
        </button>
      ) : null}
    </div>
  );
}
