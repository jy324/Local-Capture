import { mkdir, readFile, writeFile, copyFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import { join, resolve } from "node:path";

const vaultArg = process.argv[2];

if (!vaultArg) {
  console.error("Usage: npm run qa:vault -- <path-to-obsidian-vault>");
  process.exit(1);
}

const root = process.cwd();
const vaultPath = resolve(vaultArg);
const manifest = JSON.parse(await readFile(join(root, "manifest.json"), "utf8"));
const pluginDir = join(vaultPath, ".obsidian", "plugins", manifest.id);
const communityPluginsPath = join(vaultPath, ".obsidian", "community-plugins.json");
const qaRoot = join(vaultPath, "Local Capture QA");
const captureRoot = join(vaultPath, "Captures", "2026", "06");
const summaryRoot = join(vaultPath, "Captures", "Generated", "Daily Summary");
const reportPath = join(qaRoot, "QA Report.md");

await mkdir(pluginDir, { recursive: true });
for (const file of ["main.js", "manifest.json", "styles.css"]) {
  await copyFile(join(root, file), join(pluginDir, file));
}

await enablePlugin(communityPluginsPath, manifest.id);
await mkdir(qaRoot, { recursive: true });
await mkdir(captureRoot, { recursive: true });
await mkdir(summaryRoot, { recursive: true });

const captures = [
  {
    id: "qa-note-001",
    file: "20260602-090000-qa01.md",
    created: "2026-06-02T09:00:00+08:00",
    type: "note",
    status: "active",
    pinned: true,
    tags: ["qa", "project/local-capture"],
    body: "记录快速输入、Markdown 渲染和 #qa 标签。\n\n- 支持列表\n- 支持链接 [[Local Capture QA/Send Target]]"
  },
  {
    id: "qa-task-001",
    file: "20260602-101500-qa02.md",
    created: "2026-06-02T10:15:00+08:00",
    type: "task",
    taskStatus: "todo",
    status: "active",
    pinned: false,
    tags: ["qa", "task"],
    body: "验证任务切换、批量类型修改和 #task 标签。"
  },
  {
    id: "qa-archive-001",
    file: "20260602-113000-qa03.md",
    created: "2026-06-02T11:30:00+08:00",
    type: "note",
    status: "archived",
    pinned: false,
    tags: ["archive", "qa"],
    sentTo: ["Local Capture QA/Send Target.md"],
    body: "验证归档视图、Send to File 和 sent_to frontmatter。"
  },
  {
    id: "qa-deleted-001",
    file: "20260602-130000-qa04.md",
    created: "2026-06-02T13:00:00+08:00",
    type: "note",
    status: "deleted",
    pinned: false,
    tags: ["deleted", "qa"],
    body: "验证软删除视图和恢复流程。"
  }
];

for (const capture of captures) {
  await writeFile(join(captureRoot, capture.file), serializeCapture(capture));
}

await writeFile(
  join(qaRoot, "Send Target.md"),
  "# Send Target\n\n## Local Capture Append Check\n\n这里用于验证 Send to File 追加行为。\n",
  "utf8"
);

await writeFile(
  join(summaryRoot, "2026-06-02.md"),
  [
    "<!-- local-capture-summary:start 2026-06-02 -->",
    "## Local Capture · 2026-06-02",
    "",
    "共 3 条记录：2 条笔记，1 个任务，0 个已完成。",
    "",
    "### 09:00 · 笔记 · #qa #project/local-capture",
    "![[Captures/2026/06/20260602-090000-qa01.md|记录快速输入、Markdown 渲染和 #qa 标签。]]",
    "",
    "### 10:15 · 任务待办 · #qa #task",
    "![[Captures/2026/06/20260602-101500-qa02.md|验证任务切换、批量类型修改和 #task 标签。]]",
    "",
    "### 11:30 · 笔记 · #archive #qa",
    "![[Captures/2026/06/20260602-113000-qa03.md|验证归档视图、Send to File 和 sent_to frontmatter。]]",
    "",
    "<!-- local-capture-summary:end 2026-06-02 -->",
    ""
  ].join("\n"),
  "utf8"
);

const checks = [
  ["插件 manifest 已安装", existsSync(join(pluginDir, "manifest.json"))],
  ["插件 main.js 已安装", existsSync(join(pluginDir, "main.js"))],
  ["插件 styles.css 已安装", existsSync(join(pluginDir, "styles.css"))],
  ["community-plugins 已启用 local-capture", await pluginEnabled(communityPluginsPath, manifest.id)],
  ["QA capture 文件已生成", captures.every((capture) => existsSync(join(captureRoot, capture.file)))],
  ["Send target 已生成", existsSync(join(qaRoot, "Send Target.md"))],
  ["Daily Summary 已生成", existsSync(join(summaryRoot, "2026-06-02.md"))]
];

const passed = checks.filter(([, ok]) => ok).length;
const report = [
  "# Local Capture ob-dev QA Report",
  "",
  `- Vault: \`${vaultPath}\``,
  `- Plugin version: \`${manifest.version}\``,
  `- Generated at: \`${new Date().toISOString()}\``,
  `- Result: ${passed}/${checks.length} checks passed`,
  "",
  "## Checks",
  "",
  ...checks.map(([name, ok]) => `- ${ok ? "[x]" : "[ ]"} ${name}`),
  "",
  "## Fixture Files",
  "",
  "- `Captures/2026/06/*.md`",
  "- `Captures/Generated/Daily Summary/2026-06-02.md`",
  "- `Local Capture QA/Send Target.md`",
  ""
].join("\n");

await writeFile(reportPath, report, "utf8");

console.log(report);

async function enablePlugin(path, id) {
  let plugins = [];
  if (existsSync(path)) {
    try {
      plugins = JSON.parse(await readFile(path, "utf8"));
    } catch {
      plugins = [];
    }
  }
  if (!Array.isArray(plugins)) plugins = [];
  if (!plugins.includes(id)) {
    plugins.push(id);
  }
  await writeFile(path, `${JSON.stringify(plugins, null, 2)}\n`, "utf8");
}

async function pluginEnabled(path, id) {
  if (!existsSync(path)) return false;
  const plugins = JSON.parse(await readFile(path, "utf8"));
  return Array.isArray(plugins) && plugins.includes(id);
}

function serializeCapture(capture) {
  const frontmatter = [
    "---",
    `capture_id: "${capture.id}"`,
    `created: "${capture.created}"`,
    `updated: "${capture.created}"`,
    `type: "${capture.type}"`,
    ...(capture.type === "task" ? [`task_status: "${capture.taskStatus}"`] : []),
    `status: "${capture.status}"`,
    `pinned: ${capture.pinned ? "true" : "false"}`,
    "tags:",
    ...capture.tags.map((tag) => `  - "${tag}"`),
    ...(capture.sentTo ? ["sent_to:", ...capture.sentTo.map((target) => `  - "${target}"`)] : []),
    `source: "manual"`,
    "---",
    "",
    capture.body,
    ""
  ];
  return frontmatter.join("\n");
}

