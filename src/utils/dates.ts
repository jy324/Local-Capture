function pad(value: number, length = 2): string {
  return String(value).padStart(length, "0");
}

function normalizeVaultPath(path: string): string {
  return path.replace(/\\/g, "/").replace(/\/+/g, "/").replace(/^\/+/, "");
}

export function localDateParts(date: Date): {
  year: string;
  month: string;
  day: string;
  hour: string;
  minute: string;
  second: string;
} {
  return {
    year: String(date.getFullYear()),
    month: pad(date.getMonth() + 1),
    day: pad(date.getDate()),
    hour: pad(date.getHours()),
    minute: pad(date.getMinutes()),
    second: pad(date.getSeconds())
  };
}

export function buildCapturePath(folder: string, createdAt: Date, id: string): string {
  const parts = localDateParts(createdAt);
  const fileName = `${parts.year}${parts.month}${parts.day}-${parts.hour}${parts.minute}${parts.second}-${id}.md`;
  return normalizeVaultPath(`${folder}/${parts.year}/${parts.month}/${fileName}`);
}

export function dayKeyFromDate(date: Date): string {
  const parts = localDateParts(date);
  return `${parts.year}-${parts.month}-${parts.day}`;
}

export function dayKeyFromIso(iso: string): string {
  return dayKeyFromDate(new Date(iso));
}

export function formatDisplayDateTime(iso: string): string {
  const date = new Date(iso);
  const parts = localDateParts(date);
  return `${parts.year}-${parts.month}-${parts.day} ${parts.hour}:${parts.minute}`;
}

export function formatDisplayTime(iso: string): string {
  const date = new Date(iso);
  const parts = localDateParts(date);
  return `${parts.hour}:${parts.minute}`;
}

export function recentDayKeys(days: number, now = new Date()): string[] {
  const keys: string[] = [];
  for (let offset = days - 1; offset >= 0; offset -= 1) {
    const date = new Date(now);
    date.setDate(now.getDate() - offset);
    keys.push(dayKeyFromDate(date));
  }
  return keys;
}

export function isSameLocalDay(iso: string, dayKey: string): boolean {
  return dayKeyFromIso(iso) === dayKey;
}
