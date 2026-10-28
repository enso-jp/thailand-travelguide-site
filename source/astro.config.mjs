import { copyFileSync, existsSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

function trailingSlashRedirects() {
  return {
    name: 'trailing-slash-redirects',
    hooks: {
      'astro:build:done': ({ dir, pages }) => {
        const lines = [
          '# Force trailing slashes on HTML pages so Google does not split impressions.',
        ];
        for (const page of pages) {
          const withSlash = page.pathname.endsWith('/') ? page.pathname : `${page.pathname}/`;
          const noSlash = withSlash.replace(/\/+$/, '');
          if (!noSlash || noSlash === '') continue;
          lines.push(`${noSlash} ${withSlash} 301`);
        }
        writeFileSync(join(dir.pathname, '_redirects'), `${lines.join('\n')}\n`);
        const sitemapZero = join(dir.pathname, 'sitemap-0.xml');
        if (existsSync(sitemapZero)) {
          copyFileSync(sitemapZero, join(dir.pathname, 'sitemap.xml'));
        }
      },
    },
  };
}

export default defineConfig({
  site: 'https://thailand-travelguide.com',
  trailingSlash: 'always',
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/search'),
      serialize(item) {
        const url = new URL(item.url);
        if (!/\.[a-z0-9]{2,8}$/i.test(url.pathname) && !url.pathname.endsWith('/')) {
          url.pathname = `${url.pathname}/`;
          item.url = url.toString();
        }
        return item;
      },
    }),
    trailingSlashRedirects(),
  ],
  compressHTML: true,
});
