<div align="center">

![Oku](docs/screens/01-hero.jpg)

# Oku

**A quiet place for your days. The website for a journal for iPhone.**

[Live site](https://oku-journal.pages.dev) · [Bahasa Indonesia](https://oku-journal.pages.dev/id/) · App Store: coming soon

</div>

Oku (奥) is named for the inner, hidden part of a place. You write a line or a page, mark how
the day felt, and look back on where your days happened. Everything stays on your iPhone.
This is the site that goes with the app: an introduction, the privacy policy, the terms, and
support, in English and Bahasa Indonesia.

<p align="center">
  <img src="docs/demo.gif" width="70%" alt="The compose sheet writing a day, then the next">
</p>

<table>
  <tr>
    <td width="36%"><img src="docs/screens/02-look-back.jpg" alt="Look back: entries linked to the map"></td>
    <td width="36%"><img src="docs/screens/03-insights.jpg" alt="Insights: mood, rhythm and reasons"></td>
    <td width="28%" align="center">
      <img src="docs/screens/m1-hero.jpg" width="62" alt="Phone: the compose sheet">
      <img src="docs/screens/m2-insights.jpg" width="62" alt="Phone: insights in dark mode">
    </td>
  </tr>
  <tr>
    <td colspan="2"><img src="docs/screens/04-features.jpg" alt="Features as floating pieces, in dark mode"></td>
    <td><img src="docs/screens/05-privacy.jpg" alt="It stays on your iPhone"></td>
  </tr>
</table>

---

## Made by

**Darrel**, design and code.
[LinkedIn](https://linkedin.com/in/dapraws) · [GitHub](https://github.com/dapraws)

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
