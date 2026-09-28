// @ts-check
import { execSync } from 'node:child_process';
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

const site = 'https://portfolio-7j9.pages.dev';

const lastmod = (() => {
  try {
    return execSync('git log -1 --format=%cI', { encoding: 'utf8' }).trim();
  } catch {
    return undefined;
  }
})();

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
        if (lastmod) item.lastmod = lastmod;
        return item;
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
