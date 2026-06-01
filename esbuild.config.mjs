import builtins from "builtin-modules";
import esbuild from "esbuild";
import process from "process";

const production = process.argv.includes("production");
const watch = process.argv.includes("--watch");

const context = await esbuild.context({
  banner: {
    js: "/* Local Capture - generated bundle */"
  },
  entryPoints: ["src/main.ts"],
  bundle: true,
  external: [
    "obsidian",
    "electron",
    "@codemirror/*",
    ...builtins
  ],
  format: "cjs",
  target: "es2020",
  logLevel: "info",
  sourcemap: production ? false : "inline",
  treeShaking: true,
  outfile: "main.js",
  define: {
    "process.env.NODE_ENV": JSON.stringify(production ? "production" : "development")
  }
});

if (watch) {
  await context.watch();
  console.log("Watching for changes...");
} else {
  await context.rebuild();
  await context.dispose();
}

