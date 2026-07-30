// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://portfolio-7j9.pages.dev',
  trailingSlash: 'always',
  integrations: [
    sitemap({
      // `/` permanently redirects to the canonical English homepage.
      filter: (page) => page !== 'https://portfolio-7j9.pages.dev/',
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
