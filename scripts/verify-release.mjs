import { createHash } from "node:crypto";
import { existsSync } from "node:fs";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

const root = process.cwd();
const releaseDir = join(root, "dist", "local-capture");
const packageJson = JSON.parse(await readFile(join(root, "package.json"), "utf8"));
const manifest = JSON.parse(await readFile(join(root, "manifest.json"), "utf8"));
const versions = JSON.parse(await readFile(join(root, "versions.json"), "utf8"));
const files = ["main.js", "manifest.json", "styles.css", "versions.json"];

if (packageJson.version !== manifest.version) {
  throw new Error(`Version mismatch: package.json=${packageJson.version}, manifest.json=${manifest.version}`);
}

if (versions[manifest.version] !== manifest.minAppVersion) {
  throw new Error(`versions.json is missing ${manifest.version}: ${manifest.minAppVersion}`);
}

for (const file of files) {
  const rootPath = join(root, file);
  const releasePath = join(releaseDir, file);
  if (!existsSync(rootPath)) throw new Error(`Missing root asset: ${file}`);
  if (!existsSync(releasePath)) throw new Error(`Missing release asset: ${file}`);

  const rootContent = await readFile(rootPath);
  const releaseContent = await readFile(releasePath);
  if (!rootContent.equals(releaseContent)) {
    throw new Error(`Release asset differs from root asset: ${file}`);
  }
}

const checksumsPath = join(releaseDir, "SHA256SUMS.txt");
if (!existsSync(checksumsPath)) {
  throw new Error("Missing release asset: SHA256SUMS.txt");
}

const expected = [];
for (const file of files) {
  const content = await readFile(join(releaseDir, file));
  expected.push(`${createHash("sha256").update(content).digest("hex")}  ${file}`);
}

const actual = (await readFile(checksumsPath, "utf8")).trim().split(/\r?\n/);
if (actual.join("\n") !== expected.join("\n")) {
  throw new Error("SHA256SUMS.txt does not match release assets");
}

console.log(`Release verified for Local Capture ${manifest.version}`);
