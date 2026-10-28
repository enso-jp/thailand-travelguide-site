#!/usr/bin/env node
import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const DIST = join(process.cwd(), 'dist');
const errors = [];

function walkHtml(dir, files = []) {
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    const st = statSync(full);
    if (st.isDirectory()) walkHtml(full, files);
    else if (name === 'index.html') files.push(full);
  }
  return files;
}

if (!existsSync(DIST)) {
  console.error('check-built-seo skipped: dist/ missing');
  process.exit(1);
}

if (!existsSync(join(DIST, 'sitemap.xml'))) {
  errors.push('dist/sitemap.xml is missing');
}
if (!existsSync(join(DIST, 'sitemap-index.xml'))) {
  errors.push('dist/sitemap-index.xml is missing');
}

const sitemap = existsSync(join(DIST, 'sitemap.xml'))
  ? readFileSync(join(DIST, 'sitemap.xml'), 'utf8')
  : '';
const locs = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
if (locs.length === 0) errors.push('dist/sitemap.xml has no <loc> entries');
for (const loc of locs) {
  const url = new URL(loc);
  if (!url.pathname.endsWith('/')) {
    errors.push(`sitemap loc missing trailing slash: ${loc}`);
  }
}

const robots = readFileSync(join(DIST, 'robots.txt'), 'utf8');
if (!/Disallow:\s*\/search/.test(robots)) errors.push('dist/robots.txt missing Disallow: /search');
if (!robots.includes('sitemap.xml')) errors.push('dist/robots.txt missing sitemap.xml');

const pages = walkHtml(DIST);
for (const file of pages) {
  const html = readFileSync(file, 'utf8');
  const title = html.match(/<title>([^<]*)<\/title>/)?.[1] ?? '';
  const desc = html.match(/<meta name="description" content="([^"]*)"/)?.[1] ?? '';
  const canonical = html.match(/<link rel="canonical" href="([^"]+)"/)?.[1] ?? '';
  const rel = file.slice(DIST.length);
  if (title.length < 45 || title.length > 60) {
    errors.push(`${rel} title is ${title.length} chars: ${title}`);
  }
  if (desc.length < 130 || desc.length > 155) {
    errors.push(`${rel} description is ${desc.length} chars`);
  }
  if (canonical && !canonical.endsWith('/')) {
    errors.push(`${rel} canonical missing trailing slash: ${canonical}`);
  }
}

if (errors.length) {
  console.error(`check-built-seo failed (${errors.length})`);
  for (const err of errors.slice(0, 80)) console.error(`  ${err}`);
  if (errors.length > 80) console.error(`  ... ${errors.length - 80} more`);
  process.exit(1);
}

console.log(`check-built-seo ok (${pages.length} html pages, ${locs.length} sitemap urls)`);
