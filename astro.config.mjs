import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://oku-journal.pages.dev',
  // privacy.astro -> privacy.html, which Cloudflare Pages serves at /privacy
  build: { format: 'preserve' },
});
