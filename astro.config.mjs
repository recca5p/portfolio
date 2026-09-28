// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

const site = 'https://portfolio-7j9.pages.dev';

// https://astro.build/config
export default defineConfig({
  site,
  trailingSlash: 'always',
  redirects: {
    '/': '/en/',
  },
  build: {
    inlineStylesheets: 'always',
  },
  integrations: [
    sitemap({
      filter: (page) => page !== `${site}/` && !page.includes('/404'),
      serialize(item) {
        item.lastmod = new Date().toISOString();
        return item;
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
