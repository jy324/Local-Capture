import { copyFile, mkdir, readFile } from "node:fs/promises";
import { join, resolve } from "node:path";

const vaultArg = process.argv[2];

if (!vaultArg) {
  console.error("Usage: npm run install:vault -- <path-to-obsidian-vault>");
  process.exit(1);
}

const root = process.cwd();
const vaultPath = resolve(vaultArg);
const manifest = JSON.parse(await readFile(join(root, "manifest.json"), "utf8"));
const pluginDir = join(vaultPath, ".obsidian", "plugins", manifest.id);
const files = ["main.js", "manifest.json", "styles.css"];

await mkdir(pluginDir, { recursive: true });

for (const file of files) {
  await copyFile(join(root, file), join(pluginDir, file));
}

console.log(`Installed ${manifest.name} ${manifest.version} to ${pluginDir}`);

