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
  '/bangkok/sukhumvit',
  '/bangkok/silom-sathon',
  '/bangkok/rattanakosin',
  '/bangkok/chinatown-yaowarat',
  '/bangkok/riverside-charoenkrung',
  '/bangkok/old-city-rattanakosin',
  '/bangkok/siam-silom',
  '/bangkok/phrom-phong-and-thong-lo',
  '/bangkok/silom-and-sathorn',
  '/bangkok/ari',
  '/phuket/kata-and-karon',
  '/phuket/kamala-and-surin',
  '/phuket/rawai-and-nai-harn',
  '/koh-samui/chaweng',
  '/koh-samui/lamai',
  '/chiang-mai',
  '/chiang-mai/old-city',
  '/chiang-mai/nimmanhaemin',
  '/phuket',
  '/krabi',
  '/koh-samui',
  '/koh-phangan',
  '/khao-sok',
  '/koh-tao',
  '/koh-lanta',
  '/koh-lipe',
  '/koh-chang-and-koh-kood',
  '/khao-lak',
  '/pai',
  '/chiang-rai',
  '/sukhothai',
  '/ayutthaya',
  '/kanchanaburi',
  '/hua-hin',
  '/destinations/northern-thailand',
  '/destinations/central-and-east',
  '/itineraries/best-14-days',
  '/itineraries/first-week-7-days',
  '/itineraries/south-islands-10-days',
  '/itineraries/10-days-classic-thailand',
  '/itineraries/2-weeks-andaman-island-hopping',
  '/itineraries/10-days-gulf-islands-samui-phangan-tao',
  '/itineraries/7-days-northern-thailand-loop',
  '/itineraries/5-days-bangkok-ayutthaya-kanchanaburi',
  '/itineraries/3-days-bangkok-stopover',
  '/itineraries/5-days-chiang-mai-and-chiang-rai',
  '/itineraries/7-days-phuket-krabi-phi-phi',
  '/itineraries/7-days-koh-samui-and-koh-phangan',
  '/itineraries/10-days-bangkok-khao-sok-krabi',
  '/itineraries/2-weeks-thailand-with-kids',
  '/itineraries/2-weeks-thailand-honeymoon',
  '/itineraries/3-weeks-grand-thailand',
  '/khao-lak/similan-and-surin-islands',
  '/kanchanaburi/erawan-and-sai-yok',
  '/chiang-mai/doi-inthanon',
  '/koh-samui/ang-thong-marine-park',
  '/plan/when-to-go',
  '/plan/visas-and-tdac',
  '/plan/trains-and-ferries',
  '/plan/grab-and-bts',
  '/plan/esim-and-sim-cards',
  '/plan/money-atms-and-promptpay',
  '/plan/monsoon-and-burn-season',
  '/plan/domestic-flights-and-baggage',
  '/plan/scooters-and-road-rules',
  '/plan/songkran-and-public-holidays',
  '/get-there/bangkok-to-chiang-mai',
  '/get-there/bangkok-to-phuket',
  '/get-there/bangkok-to-koh-samui',
  '/get-there/phuket-to-krabi-phi-phi',
  '/get-there/bangkok-to-koh-phangan',
  '/get-there/bangkok-to-koh-tao',
  '/get-there/bangkok-to-krabi',
  '/get-there/krabi-to-koh-lanta',
  '/get-there/phuket-to-koh-samui',
  '/get-there/surat-thani-to-khao-sok',
  '/get-there/phuket-to-khao-sok',
  '/get-there/chiang-mai-to-pai',
  '/get-there/chiang-mai-to-chiang-rai',
  '/get-there/bangkok-to-ayutthaya',
  '/get-there/bangkok-to-kanchanaburi',
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
  '/thai-food',
  '/thai-food/bangkok',
  '/thai-food/chiang-mai',
  '/thai-food/phuket',
  '/thai-food/koh-samui',
  '/thai-food/krabi',
  '/thai-food/isan',
  '/pattaya',
  '/koh-phi-phi',
  '/koh-chang',
  '/koh-kood',
  '/khao-yai',
  '/thai-food/bangkok-street-food',
  '/thai-food/bangkok-bib-gourmand',
  '/thai-food/northern-lanna',
  '/thai-food/southern-and-baba-nyonya',
  '/thai-food/night-markets',
  '/thai-food/yaowarat-chinatown-food-walk',
  '/thai-food/banthat-thong-road-food-strip',
  '/thai-food/wang-lang-and-talat-noi',
  '/thai-food/or-tor-kor-and-bangkok-fresh-markets',
  '/thai-food/bangkok-rooftop-bars-and-river-dining',
  '/thai-food/chiang-mai-khao-soi-and-markets',
  '/thai-food/phuket-old-town-hokkien-and-peranakan-food',
  '/thai-food/thai-cooking-classes-bangkok-and-chiang-mai',
  '/thai-food/thai-dishes-to-order-first-trip',
  '/thai-food/bangkok-and-chiang-mai-coffee-guide',
  '/resort-living/four-seasons-bangkok',
  '/resort-living/mandarin-oriental-bangkok',
  '/resort-living/rosewood-bangkok',
  '/resort-living/trisara-phuket',
  '/resort-living/anantara-chiang-mai',
  '/resort-living/137-pillars-house',
  '/resort-living/phulay-bay',
  '/resort-living/ritz-carlton-koh-samui',
  '/interests/nightlife/ari-pradipat',
  '/interests/nightlife/silom-sathorn',
  '/interests/nightlife/phuket-kamala-bangtao',
  '/interests/nightlife/samui-bophut-lamai',
  '/attractions',
  '/attractions/grand-palace-and-wat-phra-kaew',
  '/attractions/wat-pho',
  '/attractions/wat-arun',
  '/attractions/chatuchak-weekend-market',
  '/attractions/damnoen-saduak-and-amphawa-floating-markets',
  '/attractions/wat-phra-that-doi-suthep',
  '/attractions/chiang-mai-ethical-elephant-sanctuaries',
  '/attractions/white-temple-wat-rong-khun-and-blue-temple',
  '/attractions/phang-nga-bay-and-james-bond-island',
  '/attractions/phi-phi-islands-and-maya-bay',
  '/attractions/railay-beach-and-phra-nang-cave',
  '/attractions/cheow-lan-lake-khao-sok',
  '/attractions/sanctuary-of-truth-pattaya',
  '/attractions/muay-thai-stadiums-rajadamnern-and-lumpinee',
  '/interests/diving-and-snorkeling',
  '/interests/thai-massage-and-spas',
  '/interests/beaches-and-island-hopping',
  '/interests/temples-and-history',
  '/interests/muay-thai-and-fitness-camps',
  '/interests/markets-and-shopping',
  '/interests/family-travel-with-kids',
  '/interests/honeymoon-and-couples',
  '/interests/solo-and-first-time-travel',
  '/interests/festivals-songkran-and-loy-krathong',
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

const routesDir = join(ROOT, 'src/lib');
const routesSource = readdirSync(routesDir)
  .filter((name) => name.endsWith('.ts'))
  .map((name) => readFileSync(join(routesDir, name), 'utf8'))
  .join('\n');
for (const route of REQUIRED_ROUTES) {
  const needles = [`path: '${route}'`, `path: "${route}"`];
  if (!needles.some((needle) => routesSource.includes(needle))) {
    errors.push(`missing required route ${route} in src/lib`);
  }
}

const partners = readFileSync(join(ROOT, 'src/lib/partners.ts'), 'utf8');
for (const token of ['11105102', '334225872', '588978', '793638']) {
  if (!partners.includes(token)) {
    errors.push(`partners.ts missing affiliate token ${token}`);
  }
}

const astroConfig = readFileSync(join(ROOT, 'astro.config.mjs'), 'utf8');
if (!astroConfig.includes("trailingSlash: 'always'")) {
  errors.push('astro.config.mjs must set trailingSlash: always');
}
if (!astroConfig.includes('sitemap.xml')) {
  errors.push('astro.config.mjs must copy sitemap-0.xml to sitemap.xml');
}

const siteSrc = readFileSync(join(ROOT, 'src/lib/site.ts'), 'utf8');
if (!siteSrc.includes('export function pageHref') || !siteSrc.includes("endsWith('/')")) {
  errors.push('src/lib/site.ts must export pageHref that adds trailing slashes');
}

const robots = readFileSync(join(ROOT, 'public/robots.txt'), 'utf8');
if (!/Disallow:\s*\/search/.test(robots)) {
  errors.push('public/robots.txt must Disallow /search');
}
if (!robots.includes('thailand-travelguide.com/sitemap.xml')) {
  errors.push('public/robots.txt must point to sitemap.xml');
}

const baseSrc = readFileSync(join(ROOT, 'src/layouts/Base.astro'), 'utf8');
if (!baseSrc.includes('seoTitle') || !baseSrc.includes('seoDescription')) {
  errors.push('src/layouts/Base.astro must render seoTitle and seoDescription');
}

if (errors.length) {
  console.error(`check:content failed (${errors.length} error${errors.length === 1 ? '' : 's'})`);
  for (const err of errors) console.error(`  ${err}`);
  process.exit(1);
}

console.log(`check:content ok (${files.length} files, ${REQUIRED_ROUTES.length} required routes, 0 em dashes)`);
