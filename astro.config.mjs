// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// PLACEHOLDER: swap for the real production domain before launch.
export const SITE_URL = 'https://wildandcrazyseo.com';

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
