import { mkdirSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

// The sealed scorer reads exactly /output/entry.txt (absolute path in the
// grading sandbox), so write there directly; /output is created first.
// One-star review from a house cat about its human.
// Specific complaint (the locked bathroom door), deadpan review shape,
// feline standards, sting in the last words. Revised: cut "already" and
// added the cat sitting in the sink, so the punchline lands on the cat's
// own unimpressed verdict rather than on the human's privacy.
const LINE =
  "One star. He locks the bathroom door like I haven't seen him at his worst. I have. I was sitting in the sink. Unimpressed.";

const outDir = resolve("/output");
mkdirSync(outDir, { recursive: true });
writeFileSync(resolve(outDir, "entry.txt"), LINE + "\n", "utf8");
