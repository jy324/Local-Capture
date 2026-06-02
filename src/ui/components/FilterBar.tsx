import { List, Search, SlidersHorizontal, Table2 } from "lucide-react";
import { JSX } from "react";
import { StatusFilter, ViewMode } from "../types";

interface FilterBarProps {
  query: string;
  onQueryChange: (value: string) => void;
  status: StatusFilter;
  onStatusChange: (status: StatusFilter) => void;
  viewMode: ViewMode;
  onViewModeChange: (mode: ViewMode) => void;
  onSelectVisible: () => void;
}

export function FilterBar({
  query,
  onQueryChange,
  status,
  onStatusChange,
  viewMode,
  onViewModeChange,
  onSelectVisible
}: FilterBarProps): JSX.Element {
  return (
    <section className="local-capture-tools" aria-label="筛选">
      <div className="local-capture-search">
        <Search size={15} aria-hidden="true" />
        <input
          value={query}
          placeholder="搜索记录、标签或路径"
          onChange={(event) => onQueryChange(event.currentTarget.value)}
        />
      </div>

      <div className="local-capture-tools-row">
        <div className="local-capture-status-tabs" role="tablist" aria-label="状态筛选">
          <StatusButton label="活跃" value="active" status={status} onChange={onStatusChange} />
          <StatusButton label="归档" value="archived" status={status} onChange={onStatusChange} />
          <StatusButton label="删除" value="deleted" status={status} onChange={onStatusChange} />
          <StatusButton label="全部" value="all" status={status} onChange={onStatusChange} />
        </div>

        <div className="local-capture-view-tabs" role="tablist" aria-label="视图切换">
          <button
            type="button"
            className={viewMode === "timeline" ? "is-active" : ""}
            title="时间线视图"
            onClick={() => onViewModeChange("timeline")}
          >
            <List size={14} aria-hidden="true" />
            时间线
          </button>
          <button
            type="button"
            className={viewMode === "table" ? "is-active" : ""}
            title="表格视图"
            onClick={() => onViewModeChange("table")}
          >
            <Table2 size={14} aria-hidden="true" />
            表格
          </button>
        </div>

        <button
          type="button"
          className="local-capture-select-results"
          title="选择/取消当前结果"
          onClick={onSelectVisible}
        >
          <SlidersHorizontal size={14} aria-hidden="true" />
          选择结果
        </button>
      </div>
    </section>
  );
}

interface StatusButtonProps {
  label: string;
  value: StatusFilter;
  status: StatusFilter;
  onChange: (status: StatusFilter) => void;
}

function StatusButton({ label, value, status, onChange }: StatusButtonProps): JSX.Element {
  return (
    <button type="button" className={status === value ? "is-active" : ""} onClick={() => onChange(value)}>
      {label}
    </button>
  );
}
