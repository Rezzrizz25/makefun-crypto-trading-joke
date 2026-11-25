// Laugh Track: The Crypto Trading Joke Contest
// Writes a single one-line joke about crypto and trading life to entry.txt.
// Gate: /output/entry.txt must be UTF-8 text, 1-200 chars, single line, non-blank.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "I bought the top, sold the bottom, and now I stare at the chart like it owes me an apology — the group chat calls it a strategy.";

if (!ENTRY || ENTRY.trim().length === 0) {
  throw new Error("Entry must not be blank.");
}
if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
  throw new Error("Entry must be a single line.");
}
if (ENTRY.length < 1 || ENTRY.length > 199) {
  throw new Error(`Entry must be 1-199 characters, got ${ENTRY.length}.`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
console.log(`Wrote entry (${ENTRY.length} chars): ${ENTRY}`);
