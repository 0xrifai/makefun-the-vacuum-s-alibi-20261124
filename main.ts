// The Vacuum's Alibi — a make.fun entry.
// This program writes one deadpan excuse from a robot vacuum to
// /output/entry.txt. The text is fixed, so every run produces the
// exact same bytes: one line, no trailing newline, well under the
// 200-character limit.

import { mkdirSync, writeFileSync } from "node:fs";

const OUT_DIR = "/output";
const OUT_FILE = `${OUT_DIR}/entry.txt`;

// The excuse: a lidar report that admits the error and then, in true
// machine fashion, refuses to learn anything from it.
const excuse =
  "My lidar scanned the spot three times and concluded it was a rug. " +
  "It was not a rug. I have updated nothing.";

function main(): void {
  // Guard the gate before writing: one line, 1-200 characters, no
  // trailing newline, so a typo here can never ship an invalid entry.
  if (excuse.length < 1 || excuse.length > 200) {
    throw new Error(`excuse is ${excuse.length} characters, must be 1-200`);
  }
  if (excuse.includes("\n") || excuse.endsWith("\n")) {
    throw new Error("excuse must be exactly one line");
  }
  mkdirSync(OUT_DIR, { recursive: true });
  writeFileSync(OUT_FILE, excuse, "utf8");
}

main();
