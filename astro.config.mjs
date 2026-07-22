// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// IMPORTANT: update `site` to the client's real domain before the production build.
// It is used for the sitemap, canonical URLs, and absolute social-share links.
export default defineConfig({
  site: 'https://example.com',
  integrations: [sitemap()],
});
