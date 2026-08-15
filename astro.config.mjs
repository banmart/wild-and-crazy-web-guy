// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Canonical host. Keep the www — canonicals, OG URLs and the sitemap all derive
// from this, so the apex must 301 to www at the host/DNS level to avoid split signals.
export const SITE_URL = 'https://www.stevemartinseo.com';

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  integrations: [
    sitemap({
      // /thanks is a form redirect target — noindex, so keep it out of the sitemap too.
      filter: (page) => !page.includes('/thanks'),
    }),
  ],
  build: { inlineStylesheets: 'auto' },
});
