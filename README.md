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
| **Astro 7 + TypeScript** | Static pages and the small scripts behind them. |
| **CSS** | Styling and the scroll animations, with no framework. |
| **Fontsource** | Source Serif 4 and Schoolbell, bundled with the site. |
| **Phosphor Icons** | Icons, the same set as the app. |
| **sharp** | App screenshots resized to WebP. |
| **Cloudflare Pages** | Hosting. |

The demo photos are painted as SVG at build time, and the privacy policy, terms and FAQ are
synced from the app's repo. No analytics, no trackers, no outside requests.

## Run locally

```bash
npm install
npm run dev
```

---

<sub>© Muhammad Darrel Prawira. All rights reserved.</sub>
