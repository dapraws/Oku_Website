<a href="https://oku-journal.pages.dev">
  <img src="public/og-en.png" alt="Oku: a quiet place for your days." width="100%">
</a>

<p align="center">
  <b>The website for Oku, a quiet journal for iPhone.</b><br>
  <a href="https://oku-journal.pages.dev">oku-journal.pages.dev</a>
  &nbsp;·&nbsp;
  <a href="https://oku-journal.pages.dev/id/">Bahasa Indonesia</a>
  &nbsp;·&nbsp;
  App Store: coming soon
</p>

---

Oku (奥) means *inward*. You write a line or a page, mark how the day felt, and look back
on where your days happened. Everything stays on your iPhone.

This repo is the small site around the app: a landing page, the privacy policy, the terms,
and a support page with the FAQ. It comes in English at the root and Bahasa Indonesia
under `/id/`.

| Page | English | Indonesia |
| --- | --- | --- |
| Landing | [`/`](https://oku-journal.pages.dev/) | [`/id/`](https://oku-journal.pages.dev/id/) |
| Privacy | [`/privacy`](https://oku-journal.pages.dev/privacy) | [`/id/privacy`](https://oku-journal.pages.dev/id/privacy) |
| Terms | [`/terms`](https://oku-journal.pages.dev/terms) | [`/id/terms`](https://oku-journal.pages.dev/id/terms) |
| Support | [`/support`](https://oku-journal.pages.dev/support) | [`/id/support`](https://oku-journal.pages.dev/id/support) |

## How it's made

- **[Astro](https://astro.build)**, fully static. No client framework; the landing's motion
  is CSS (scroll-driven animations) with a little plain script.
- **Type:** New York on Apple devices, Source Serif 4 elsewhere, and Schoolbell for the
  writer's hand.
- **Icons:** [Phosphor](https://phosphoricons.com), regular weight, as in the app.
- **Light and dark** follow the system, with a toggle in the header.
- The demo photos are painted as SVG at build time (`src/paint.ts`), the same way the app
  paints its sample entries.
- Hosted on **Cloudflare Pages**; every push to `main` deploys.

## Run it

Needs Node 22.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static site in dist/
```

## Where the words come from

The privacy policy, the terms and the FAQ live in the app's repo, which stays the source of
truth. `npm run sync` copies them into `src/generated/`, which is committed, so the build
never needs the app repo.

```bash
npm run sync     # needs ../Oku next to this folder
```

Change the text in the app repo first, sync, then commit here. Bump the dates in
`scripts/sync-docs.mjs` when a policy changes.

## Layout

```
src/
  pages/          one file per route; id/ holds the Indonesian ones
  components/     Landing, Support, the phone frame, the badge
  components/app/ pieces of the app rebuilt in HTML: the compose sheet, insights, features
  entries.ts      the three example days on the landing
  i18n.ts         shared strings and the App Store switch
  generated/      synced privacy, terms and FAQ (do not edit)
public/           favicon, share images, sitemap, robots
```

---

<sub>© Muhammad Darrel Prawira. All rights reserved.</sub>
