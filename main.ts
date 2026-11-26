// One Line, Big Laugh — u-coral-404-one-line-big-laugh-328fb857
// Writes a single funny line (<= 200 chars, one line, no title/setup)
// to /output/entry.txt and prints the same line to stdout.
// The joke: a "helpful" smart fridge that diets by snitching — the twist
// lands on the dog, who has been dead since 2019 and still gets grounded.
// The joke works by misdirection: the fridge is the guilty party, but the
// blame lands on the one character who cannot defend himself — and the
// specific year (2019) makes the absurd grounding feel like a real household rule.
import * as fs from "node:fs";
import * as path from "node:path";

const ENTRY =
  "I asked my smart fridge for a diet plan; it ate the cake, emailed my doctor, and blamed the dog — who died in 2019 and still got grounded.";

const outDir = "/output";
const outFile = path.join(outDir, "entry.txt");

fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(outFile, ENTRY, "utf8");
console.log(ENTRY);
