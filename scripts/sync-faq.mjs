import { copyFileSync, existsSync, mkdirSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const websiteRoot = resolve(here, "..");
const source = resolve(
  websiteRoot,
  "..",
  "Project_Kivo_CoreApp",
  "frontend",
  "src",
  "shared",
  "content",
  "kivoFaq.ts",
);
const target = resolve(websiteRoot, "app", "content", "kivoFaq.ts");

if (existsSync(source)) {
  mkdirSync(dirname(target), { recursive: true });
  copyFileSync(source, target);
  console.log("Synced FAQ content from Project_Kivo_CoreApp.");
} else if (existsSync(target)) {
  console.log("FAQ source repo not found; using the checked-in website copy.");
} else {
  throw new Error(`FAQ content is missing. Expected ${source} or ${target}.`);
}
