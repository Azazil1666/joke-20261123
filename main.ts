import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outputDir = process.env.OUTPUT_DIR || "/output";
const joke =
  "My agent hallucinated an import, I `npm install`ed the package, and now the import works — we call this 'pair programming'.";

// Competition guard: the entry must be a non-empty one-liner within the
// 280-character limit. Fail loudly on a bad edit rather than silently
// submitting an entry the judge would discard.
if (joke.length < 1 || joke.length > 280) {
  throw new Error(`entry.txt payload invalid: ${joke.length} chars (limit 1-280)`);
}

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), joke + "\n", "utf8");