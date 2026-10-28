#!/usr/bin/env node
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join, extname, relative } from 'node:path';

const ROOT = process.cwd();
const SKIP_DIRS = new Set([
  'node_modules',
  'dist',
  '.git',
  '.astro',
  '.cursor',
]);
const TEXT_EXT = new Set([
  '.astro',
  '.ts',
  '.tsx',
  '.js',
  '.mjs',
  '.cjs',
  '.md',
  '.css',
  '.json',
  '.html',
  '.yml',
  '.yaml',
  '.txt',
  '.svg',
  '.mjs',
]);

const REQUIRED_ROUTES = [
  '/',
  '/bangkok',
  '/bangkok/sukhumvit-thonglor',
  '/bangkok/riverside-charoenkrung',
  '/bangkok/old-city-rattanakosin',
  '/bangkok/siam-silom',
  '/chiang-mai',
  '/chiang-mai/old-city',
  '/chiang-mai/nimmanhaemin',
  '/phuket',
  '/krabi',
  '/koh-samui',
  '/koh-phangan',
  '/khao-sok',
  '/destinations/northern-thailand',
  '/itineraries/best-14-days',
  '/itineraries/first-week-7-days',
  '/itineraries/south-islands-10-days',
  '/plan/when-to-go',
  '/plan/visas-and-tdac',
  '/plan/trains-and-ferries',
  '/plan/grab-and-bts',
  '/get-there/bangkok-to-chiang-mai',
  '/get-there/bangkok-to-phuket',
  '/get-there/bangkok-to-koh-samui',
  '/get-there/phuket-to-krabi-phi-phi',
  '/interests/resort-living',
  '/resort-living/amanpuri',
  '/resort-living/six-senses-yao-noi',
  '/resort-living/six-senses-samui',
  '/resort-living/capella-bangkok',
  '/resort-living/the-siam',
  '/resort-living/four-seasons-chiang-mai',
  '/resort-living/four-seasons-koh-samui',
  '/resort-living/soneva-kiri',
  '/resort-living/rayavadee',
  '/resort-living/vie-hotel-bangkok',
  '/resort-living/veranda-high-chiang-mai',
  '/resort-living/avista-hideaway-phuket',
  '/interests/nightlife',
  '/interests/nightlife/charoenkrung-soi-nana',
  '/interests/nightlife/thonglor-ekkamai',
  '/interests/nightlife/sukhumvit-soi-11',
  '/interests/nightlife/phuket-beach-clubs',
  '/interests/nightlife/koh-samui-beach-clubs',
];

function walk(dir, files = []) {
  for (const name of readdirSync(dir)) {
    if (SKIP_DIRS.has(name)) continue;
    const full = join(dir, name);
    const st = statSync(full);
    if (st.isDirectory()) walk(full, files);
    else files.push(full);
  }
  return files;
}

const errors = [];
const files = walk(ROOT).filter((f) => {
  const ext = extname(f).toLowerCase();
  return TEXT_EXT.has(ext) || ext === '';
});

const emDash = new RegExp(
  String.fromCharCode(0x2014) + '|' + ['&', 'mdash;'].join('') + '|&#' + '8212;' + '|&#x' + '2014;',
  'i',
);

for (const file of files) {
  if (extname(file) === '' && !file.endsWith('_redirects')) continue;
  const text = readFileSync(file, 'utf8');
  const rel = relative(ROOT, file);
  const lines = text.split(/\n/);
  lines.forEach((line, i) => {
    if (emDash.test(line)) {
      errors.push(`${rel}:${i + 1} em dash is not allowed`);
    }
  });
}

const routesFile = join(ROOT, 'src/lib/content.ts');
const routesSource = readFileSync(routesFile, 'utf8');
for (const route of REQUIRED_ROUTES) {
  const needles = [`path: '${route}'`, `path: "${route}"`];
  if (!needles.some((needle) => routesSource.includes(needle))) {
    errors.push(`missing required route ${route} in src/lib/content.ts`);
  }
}

const partners = readFileSync(join(ROOT, 'src/lib/partners.ts'), 'utf8');
for (const token of ['11105102', '334225872', '588978', '793638']) {
  if (!partners.includes(token)) {
    errors.push(`partners.ts missing affiliate token ${token}`);
  }
}

if (errors.length) {
  console.error(`check:content failed (${errors.length} error${errors.length === 1 ? '' : 's'})`);
  for (const err of errors) console.error(`  ${err}`);
  process.exit(1);
}

console.log(`check:content ok (${files.length} files, ${REQUIRED_ROUTES.length} required routes, 0 em dashes)`);
