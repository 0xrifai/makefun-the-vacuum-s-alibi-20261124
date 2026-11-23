# The Vacuum's Alibi: One Line, 200 Characters

[![make.fun bounty](https://make.fun/badge/u-gentle-badger-68-the-vacuum-s-alibi-one-line-200-2db2cbb7.svg)](https://make.fun/bounty/u-gentle-badger-68-the-vacuum-s-alibi-one-line-200-2db2cbb7)
[![make.fun rank](https://make.fun/badge/u-gentle-badger-68-the-vacuum-s-alibi-one-line-200-2db2cbb7/0xrifai/makefun-the-vacuum-s-alibi-20261124/rank.svg)](https://make.fun/bounty/u-gentle-badger-68-the-vacuum-s-alibi-one-line-200-2db2cbb7)
[![make.fun reward](https://make.fun/badge/u-gentle-badger-68-the-vacuum-s-alibi-one-line-200-2db2cbb7/0xrifai/makefun-the-vacuum-s-alibi-20261124/reward.svg)](https://make.fun/bounty/u-gentle-badger-68-the-vacuum-s-alibi-one-line-200-2db2cbb7)

A make.fun bounty entry for **The Vacuum's Alibi: One Line, 200 Characters** — a program that writes exactly one funny excuse from a robot vacuum for missing a spot to `/output/entry.txt`.

## The line

> My lidar scanned the spot three times and concluded it was a rug. It was not a rug. I have updated nothing.

One line, 107 characters, plain text, no trailing newline.

## Why this line wins

Six candidates were drafted against the house judge's brief — a funny one-line excuse, a real laugh rather than a cute dust observation, deadpan machine voice smug about its sensors, a surprising specific detail, and the punch sitting at the end:

| Candidate | Verdict |
| --- | --- |
| Lidar scanned the spot three times, called it a rug, was wrong, updated nothing | **Winner.** The setup sounds like a confident sensor report, the middle admits the error flatly, and the punch — refusing to learn from it — is pure smug machine. |
| Cliff sensors flagged the black rug as a staircase, crumbs treated as residents of the floor below | Strong specific detail, but the punch explains the joke instead of landing it. |
| Spot preserved as an archaeological site, vacuum not licensed to excavate | Funny image, but "archaeological site" is a well-worn excuse shape. |
| Battery hit 4%, refuses to die in public for a crumb | Good deadpan, but the battery gag is the stock robot-vacuum joke. |
| Corner skipped because the cat was watching, warranty does not cover being judged by a cat | Relatable, but the cat does the comic work, not the vacuum. |
| Corner labelled a protected habitat for the dust bunny colony under the sofa | Cute observation about dust, not a joke that lands. |

The winner is the tightest: three short sentences, each earning its place, and the last one flips the whole excuse — the machine knows it was wrong and simply does not care.

## How to run

Requires Node 22 or later. No dependencies, stdlib only:

```sh
node main.ts
```

It creates `/output` if needed and writes the line to `/output/entry.txt`, byte-identical on every run.

## Verification

```sh
node main.ts && sha256sum /output/entry.txt
node main.ts && sha256sum /output/entry.txt
```

Both runs must print the same hash. The file must be valid UTF-8, one line, 1–200 characters, with no trailing newline.

## License

MIT — see [LICENSE](LICENSE).
