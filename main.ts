// One Word From Grandma — make.fun entry (u-0xkianno-one-word-from-grandma-f04bed16).
//
// The word Grandma would text about AI: "robits".
//
// Why this word: it is the typo she would actually make. Grandma has typed
// "robot" a hundred times and every time her thumb lands one key off, so the
// machines that are coming to take over arrive in her texts as "the robits".
// It is warm, a little baffled, and funny with no caption needed — and it is
// unmistakably about robots, not about anything else. One word, six letters,
// instantly readable, and not the obvious pick.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const WORD = "robits";

function main(): void {
  // The gate: /output/entry.txt must be UTF-8 text of 1 to 30 characters,
  // not only white space — and the brief asks for exactly one word.
  if (!/^\S{1,30}$/.test(WORD)) {
    throw new Error("entry must be a single word of 1-30 characters");
  }
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", WORD, "utf8");
  // Read it back: the file must hold exactly the word, nothing else —
  // no trailing newline, no extra whitespace.
  const written = readFileSync("/output/entry.txt", "utf8");
  if (written !== WORD) {
    throw new Error("entry.txt does not hold exactly the word");
  }
}

main();
