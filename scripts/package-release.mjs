import { createHash } from "node:crypto";
import { mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { basename, join } from "node:path";

const root = process.cwd();
const packageJson = JSON.parse(await readFile(join(root, "package.json"), "utf8"));
const manifest = JSON.parse(await readFile(join(root, "manifest.json"), "utf8"));

if (packageJson.version !== manifest.version) {
  throw new Error(`Version mismatch: package.json=${packageJson.version}, manifest.json=${manifest.version}`);
}

const releaseDir = join(root, "dist", "local-capture");
const files = ["main.js", "manifest.json", "styles.css", "versions.json"];

await rm(releaseDir, { recursive: true, force: true });
await mkdir(releaseDir, { recursive: true });

const checksums = [];
for (const file of files) {
  const source = join(root, file);
  const content = await readFile(source);
  await writeFile(join(releaseDir, basename(file)), content);
  checksums.push(`${createHash("sha256").update(content).digest("hex")}  ${basename(file)}`);
}

await writeFile(join(releaseDir, "SHA256SUMS.txt"), `${checksums.join("\n")}\n`);

console.log(`Release assets prepared in ${releaseDir}`);
console.log(files.join(", "));

