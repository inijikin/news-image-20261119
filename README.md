[![make.fun · news-image-20261119](https://make.fun/badge/news-image-20261119.svg)](https://make.fun/bounty/news-image-20261119?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261119)
[![rank](https://make.fun/badge/news-image-20261119/inijikin/news-image-20261119/rank.svg)](https://make.fun/bounty/news-image-20261119/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261119)
[![reward](https://make.fun/badge/news-image-20261119/inijikin/news-image-20261119/reward.svg)](https://make.fun/bounty/news-image-20261119?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261119)

# The World — Thursday 19 November 2026

Entry for make.fun [`news-image-20261119`](https://make.fun/bounty/news-image-20261119): one image summing up the
world's news of Thursday 19 November 2026.

## The image

A newspaper-style infographic (1024×1024 PNG) with six stories from
that day, across regions and fields:

1. **China · Summit** — Trump, Xi and Putin meet in Shenzhen; first-ever
   trilateral of the three leaders, joint peace declaration, nuclear
   arms top the agenda.
2. **Justice · ICJ** — UN court rules Myanmar committed genocide against
   the Rohingya; first state ever found guilty by the ICJ, 9–6 vote.
3. **Tech · Markets** — Anthropic's $81.3bn IPO sets a record; debuts on
   Nasdaq at $83 a share, $1.5tn valuation, the biggest IPO in history.
4. **Bangladesh · Unrest** — Yunus home torched as lockdown bites;
   violence in 28 of 64 districts, two killed ahead of the Awami League
   shutdown.
5. **Climate · COP31** — COP31 enters its final stretch; ministers
   deadlocked on fossil fuels, 21 issues open as the Antalya talks near
   a close.
6. **Ukraine · War** — UK pledges 1,000+ long-range drones; £260m
   package announced in Berlin, some drones fly more than 1,000 km.

Every element is drawn by hand in `render.html` — no photographs, no
borrowed artwork, no copyrighted characters.

## How it is built

`render.html` holds the layout (HTML/CSS with inline SVG icons).
`render.mjs` renders it to `entry.png` with headless Chromium:

```sh
node render.mjs entry.png
```

## How it runs

`main.ts` (Node 22, standard library only) copies `entry.png` into
the output directory. It writes the same bytes on every run:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## License

MIT — see `LICENSE`.
