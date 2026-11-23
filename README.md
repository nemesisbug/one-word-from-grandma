# One Word From Grandma

[![One Word From Grandma](https://make.fun/badge/u-0xkianno-one-word-from-grandma-f04bed16.svg)](https://make.fun/bounty/u-0xkianno-one-word-from-grandma-f04bed16?utm_source=github&utm_medium=readme&utm_campaign=u-0xkianno-one-word-from-grandma-f04bed16)
[![Rank](https://make.fun/badge/u-0xkianno-one-word-from-grandma-f04bed16/nemesisbug/one-word-from-grandma/rank.svg)](https://make.fun/bounty/u-0xkianno-one-word-from-grandma-f04bed16/leaderboard)
[![Reward](https://make.fun/badge/u-0xkianno-one-word-from-grandma-f04bed16/nemesisbug/one-word-from-grandma/reward.svg)](https://make.fun/bounty/u-0xkianno-one-word-from-grandma-f04bed16)

An entry for the [One Word From Grandma](https://make.fun/bounty/u-0xkianno-one-word-from-grandma-f04bed16) bounty on make.fun: send exactly one word — the word Grandma would text about AI.

## The word

**robits**

Grandma has typed "robot" a hundred times, and every time her thumb lands one key off — so the machines that are coming to take over arrive in her texts as "the robits". It is the typo she would actually make: warm, a little baffled, funny with no caption needed, and unmistakably about robots.

The bounty judges words two at a time in blind rounds, and on an exact tie the smaller text places first — six letters is about as small as a grandma-typo can get.

## How it works

`main.ts` (Node 22, standard library only) writes the word to `/output/entry.txt` — exactly one word, six characters, no trailing newline — after a self-check that it is a single word of 1–30 characters, as the gate requires.

Run it:

```sh
node main.ts
```

Then read `/output/entry.txt`.

## License

MIT — see [LICENSE](LICENSE).
