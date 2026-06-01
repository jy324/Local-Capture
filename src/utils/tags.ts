const TAG_REGEX = /(^|[\s([{>])#([\p{L}\p{N}_/-][\p{L}\p{N}_/-]*)/gu;

export function normalizeTag(tag: string): string {
  return tag.replace(/^#/, "").trim().replace(/^\/+|\/+$/g, "");
}

export function uniqueTags(tags: string[]): string[] {
  const seen = new Set<string>();
  const result: string[] = [];

  for (const rawTag of tags) {
    const tag = normalizeTag(rawTag);
    if (!tag) continue;

    const key = tag.toLocaleLowerCase();
    if (seen.has(key)) continue;
    seen.add(key);
    result.push(tag);
  }

  return result;
}

export function extractInlineTags(markdown: string): string[] {
  const tags: string[] = [];
  for (const match of markdown.matchAll(TAG_REGEX)) {
    tags.push(match[2]);
  }
  return uniqueTags(tags);
}

export function mergeTags(...tagGroups: string[][]): string[] {
  return uniqueTags(tagGroups.flat());
}
