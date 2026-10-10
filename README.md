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
    <td width="50%"><img src="docs/screens/w1-hero.jpg" alt="Hero"></td>
    <td width="50%"><img src="docs/screens/w2-look-back.jpg" alt="See where your days happened"></td>
  </tr>
  <tr>
    <td><img src="docs/screens/w3-insights.jpg" alt="Notice how your days have felt"></td>
    <td><img src="docs/screens/w4-features.jpg" alt="Write a line or a page"></td>
  </tr>
  <tr>
    <td><img src="docs/screens/w5-support.jpg" alt="Support"></td>
    <td><img src="docs/screens/w6-terms.jpg" alt="Terms of Use"></td>
  </tr>
  <tr>
    <td><img src="docs/screens/w7-stays.jpg" alt="It stays on your iPhone"></td>
    <td><img src="docs/screens/w8-privacy.jpg" alt="Privacy Policy"></td>
  </tr>
</table>

<table>
  <tr>
    <td width="25%"><img src="docs/screens/m1-hero.jpg" alt="Phone: hero"></td>
    <td width="25%"><img src="docs/screens/m2-sheet.jpg" alt="Phone: the compose sheet"></td>
    <td width="25%"><img src="docs/screens/m3-insights.jpg" alt="Phone: insights"></td>
    <td width="25%"><img src="docs/screens/m4-features.jpg" alt="Phone: features"></td>
  </tr>
</table>

---

## How it's made

- **[Astro](https://astro.build)**, fully static. No client framework; the landing's motion
  is CSS (scroll-driven animations) with a little plain script.
- **Type:** New York on Apple devices, Source Serif 4 elsewhere, and Schoolbell for the
  writer's hand.
- **Icons:** [Phosphor](https://phosphoricons.com), regular weight, as in the app.
- **Light and dark** follow the system, with a toggle in the header.
- The demo photos are painted as SVG at build time, the same way the app paints its sample
  entries.
- Hosted on **Cloudflare Pages**; every push to `main` deploys.

## Run locally

```bash
npm install
npm run dev
```

---

<sub>© Muhammad Darrel Prawira. All rights reserved.</sub>
