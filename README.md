<div align="center">

![Oku: a quiet place for your days.](public/og-en.png)

# Oku

**A quiet place for your days. The website for a journal for iPhone.**

[Live site](https://oku-journal.pages.dev) · App Store: coming soon

</div>

Oku (奥) is named for the inner, hidden part of a place. You write a line or a page, mark how
the day felt, and look back on where your days happened. Everything stays on your iPhone.
This is the site that goes with the app: an introduction, the privacy policy, the terms, and
support.

<p align="center">
  <img src="docs/demo.gif" width="100%" alt="The hero: a day written in the compose sheet, then the next">
</p>

<table>
  <tr>
    <td width="50%" rowspan="4" valign="top"><img src="docs/screens/phone.jpg" alt="On a phone: the hero and the compose sheet"></td>
    <td width="50%"><img src="docs/screens/w1-hero.jpg" alt="A quiet place for your days"></td>
  </tr>
  <tr><td><img src="docs/screens/w2-look-back.jpg" alt="See where your days happened"></td></tr>
  <tr><td><img src="docs/screens/w3-insights.jpg" alt="Notice how your days have felt"></td></tr>
  <tr><td><img src="docs/screens/w4-features.jpg" alt="Write a line or a page"></td></tr>
</table>

---

## Built with

| Technology | What it does here |
|---|---|
| **Astro** | Builds every page as static HTML. No client framework. |
| **CSS scroll-driven animations** | The motion: the dot that grows as you scroll, the rings, the lines drawn to the map. |
| **Plain TypeScript** | The compose sheet that writes itself, the mood chart and the small pieces that move. |
| **New York, Source Serif 4, Schoolbell** | Type: New York on Apple devices, Source Serif 4 elsewhere, Schoolbell for the writer's hand. |
| **Phosphor Icons** | Icons in the regular weight, the same set as the app. |
| **SVG painting** | The demo photos, painted at build time the way the app paints its sample entries. |
| **Cloudflare Pages** | Hosting. Every push to `main` deploys. |

Light and dark follow the system, with a toggle in the header. Fonts are bundled with the site
and there are no analytics or trackers, so a visit makes no outside requests. The site is in
English and Bahasa Indonesia.

## Run locally

```bash
npm install
npm run dev
```

---

<sub>© Muhammad Darrel Prawira. All rights reserved.</sub>
