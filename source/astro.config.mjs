import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://thailand-travelguide.com',
  trailingSlash: 'never',
  integrations: [sitemap()],
  compressHTML: true,
});
