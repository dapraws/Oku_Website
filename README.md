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
| **Astro 7** | Builds every page to static HTML. No client framework ships to the browser. |
| **TypeScript** | The small scripts: the compose sheet that writes itself, the mood chart, the theme toggle. |
| **CSS scroll-driven animations** | The motion as you scroll: the dot that grows into the privacy section, the rings, the lines drawn from each day to the map. |
| **astro:assets + sharp** | Turns the app captures into WebP at several sizes, so a phone downloads a phone-sized image. |
| **Fontsource** | Bundles Source Serif 4, the stand-in for New York outside Apple devices, and Schoolbell for the writer's hand. |
| **Phosphor Icons** | Icons in the regular weight, the same set as the app. |
| **Custom SVG painter** | Paints the demo photos (sunsets, rain, city lights) at build time, ported from the app's sample-entry painter. |
| **Doc sync script** | Copies the privacy policy, terms and FAQ from the app's repo, so the site and the app always say the same thing. |
| **Cloudflare Pages** | Hosting. Every push to `main` deploys. |

The landing page is 19 KB of HTML gzipped, the fonts are bundled, and there are no analytics or
trackers, so a visit makes no outside requests. Light and dark follow the system, with a toggle
in the header. Below 1024px the floating pieces settle into columns, and with Reduce Motion on
the compose sheet simply shows a finished day.

## Run locally

```bash
npm install
npm run dev
```

---

<sub>© Muhammad Darrel Prawira. All rights reserved.</sub>
