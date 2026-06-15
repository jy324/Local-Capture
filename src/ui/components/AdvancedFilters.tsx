import { ChevronRight, Star, Trash2, X } from "lucide-react";
import { JSX, useState } from "react";
import type LocalCapturePlugin from "../../main";
import { CaptureItem, SavedQuery } from "../../types";
import { tagColorStyle } from "../shared/formatters";
import { Heatmap } from "./Heatmap";

const TAG_CLOUD_COLLAPSED_LIMIT = 18;

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
    <>
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

      {tagCounts.length > 0 ? <TagCloud plugin={plugin} tagCounts={tagCounts} onSelectTag={onSelectTag} /> : null}

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
    </>
  );
}

interface TagCloudProps {
  plugin: LocalCapturePlugin;
  tagCounts: Array<[string, number]>;
  onSelectTag: (tag: string) => void;
}

function TagCloud({ plugin, tagCounts, onSelectTag }: TagCloudProps): JSX.Element {
  const [expanded, setExpanded] = useState(false);
  const overflowCount = tagCounts.length - TAG_CLOUD_COLLAPSED_LIMIT;
  const showAll = expanded || overflowCount <= 0;
  const visible = showAll ? tagCounts : tagCounts.slice(0, TAG_CLOUD_COLLAPSED_LIMIT);

  return (
    <div
      className={`local-capture-tag-cloud ${expanded ? "is-expanded" : ""}`}
      aria-label="标签列表"
    >
      {visible.map(([tag, count]) => (
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
      {overflowCount > 0 ? (
        <button
          type="button"
          className="local-capture-tag-cloud-more"
          onClick={() => setExpanded((current) => !current)}
        >
          {expanded ? "收起" : `+${overflowCount} 更多`}
        </button>
      ) : null}
    </div>
  );
}
