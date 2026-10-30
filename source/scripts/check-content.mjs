#!/usr/bin/env node
import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
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
  '/itineraries/3-days-bangkok-food-and-rooftops',
  '/itineraries/4-days-bangkok-and-ayutthaya',
  '/itineraries/3-days-bangkok-riverside-stopover',
  '/itineraries/8-days-bangkok-and-chiang-mai',
  '/itineraries/9-days-bangkok-and-phuket',
  '/itineraries/10-days-first-timer-gulf',
  '/itineraries/12-days-thailand-first-timer',
  '/itineraries/7-days-bangkok-and-hua-hin-kids',
  '/itineraries/10-days-chiang-mai-hua-hin-family',
  '/itineraries/14-days-samui-family-slow',
  '/itineraries/10-days-khao-lak-family',
  '/itineraries/5-days-bangkok-couples',
  '/itineraries/7-days-chiang-mai-and-pai-couples',
  '/itineraries/8-days-railay-phi-phi-couples',
  '/itineraries/10-days-koh-chang-and-koh-kood',
  '/itineraries/12-days-andaman-honeymoon',
  '/itineraries/10-days-backpacker-north',
  '/itineraries/14-days-backpacker-gulf',
  '/itineraries/14-days-backpacker-andaman',
  '/itineraries/21-days-backpacker-thailand',
  '/itineraries/5-days-phuket-west-coast',
  '/itineraries/5-days-koh-samui-beaches',
  '/itineraries/7-days-krabi-and-koh-lanta',
  '/itineraries/8-days-samui-and-koh-tao-dive',
  '/itineraries/10-days-lanta-and-lipe',
  '/itineraries/12-days-andaman-without-phuket',
  '/itineraries/7-days-khao-lak-and-similan',
  '/itineraries/4-days-chiang-mai-only',
  '/itineraries/6-days-pai-mae-hong-son',
  '/itineraries/8-days-chiang-mai-rai-pai',
  '/itineraries/10-days-north-loop-slow',
  '/itineraries/7-days-sukhothai-and-chiang-mai',
  '/itineraries/4-days-kanchanaburi-erawan',
  '/itineraries/6-days-bangkok-and-pattaya',
  '/itineraries/8-days-central-ruins',
  '/itineraries/10-days-bangkok-and-ho-chi-minh',
  '/itineraries/12-days-chiang-mai-and-hanoi',
  '/itineraries/14-days-thailand-vietnam-first-timer',
  '/itineraries/7-days-bangkok-da-nang-hoi-an',
  '/itineraries/16-days-thailand-vietnam-coasts',
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
  '/thai-food/chiang-rai',
  '/thai-food/khon-kaen',
  '/thai-food/udon-thani',
  '/thai-food/nong-khai',
  '/thai-food/ayutthaya',
  '/thai-food/hua-hin',
  '/thai-food/hat-yai',
  '/thai-food/sukhothai',
  '/thai-food/pattaya',
  '/thai-food/kanchanaburi',
  '/thai-food/pai',
  '/thai-food/khao-lak',
  '/thai-food/koh-lanta',
  '/thai-food/koh-tao',
  '/thai-food/koh-phangan',
  '/thai-food/koh-phi-phi',
  '/thai-food/koh-lipe',
  '/thai-food/koh-kood',
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
  '/about',
  '/about/ratings',
  '/privacy',
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
  '/bangkok/where-to-stay',
  '/bangkok/getting-around',
  '/bangkok/best-time-to-visit',
  '/bangkok/day-trips',
  '/bangkok/top-attractions',
  '/bangkok/nightlife-districts',
  '/phuket/where-to-stay',
  '/krabi/ao-nang',
  '/krabi/railay',
  '/koh-samui/where-to-stay',
  '/chiang-mai/where-to-stay',
  '/pai/where-to-stay',
  '/pattaya/where-to-stay',
  '/hua-hin/where-to-stay',
  '/kanchanaburi/where-to-stay',
  '/khao-lak/where-to-stay',
  '/sukhothai/historical-park',
  '/ayutthaya/from-bangkok',
  '/chiang-rai/white-temple-day',
  '/itineraries/3-days-bangkok-food-and-rooftops',
  '/itineraries/7-days-sukhothai-and-chiang-mai',
  '/itineraries/7-days-krabi-and-koh-lanta',
  '/itineraries/14-days-thailand-vietnam-first-timer',
  '/itineraries/16-days-thailand-vietnam-coasts',
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
    if (rel.startsWith('src/') && !rel.endsWith('clean-copy.ts') && /check on arrival/i.test(line)) {
      errors.push(`${rel}:${i + 1} Check on arrival filler is not allowed`);
    }
    if (rel.startsWith('src/') && /\(\s*(loop(?:\s+page)?|wikipedia|wikivoyage|dnp(?:\s+category\s+\d+)?)\s*\)/i.test(line)) {
      errors.push(`${rel}:${i + 1} scraper/source annotation is not allowed`);
    }
    if (rel.startsWith('src/')) {
      const banned = [
        ['clean' + ' clock', 'clean clock'],
        ['is a ' + 'roll', 'is a roll'],
        ['Believe' + ' the', 'Believe the'],
        ['GitHub' + ' Pages', 'GitHub Pages'],
        ['return to ' + 'BKK', 'return to BKK'],
      ];
      for (const [needle, label] of banned) {
        if (line.includes(needle)) {
          errors.push(`${rel}:${i + 1} banned phrase is not allowed (${label})`);
        }
      }
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

{
  const bkkDishes = readFileSync(join(ROOT, 'src/lib/dishes-bangkok.ts'), 'utf8');
  const cmDishes = readFileSync(join(ROOT, 'src/lib/dishes-chiang-mai.ts'), 'utf8');
  const contentSrc = readFileSync(join(ROOT, 'src/lib/content.ts'), 'utf8');
  const bkkCount = (bkkDishes.match(/slug: '/g) || []).length;
  const cmCount = (cmDishes.match(/slug: '/g) || []).length;
  if (bkkCount < 40) errors.push(`Bangkok dish catalog has ${bkkCount} slugs; need at least 40`);
  if (cmCount < 30) errors.push(`Chiang Mai dish catalog has ${cmCount} slugs; need at least 30`);
  if (!bkkDishes.includes("slug: 'pad-kra-pao'")) errors.push('missing Bangkok pad-kra-pao dish');
  if (!cmDishes.includes("slug: 'khao-soi'")) errors.push('missing Chiang Mai khao-soi dish');
  if (!contentSrc.includes('...dishPages')) errors.push('content.ts must spread dishPages');
  if (!readFileSync(join(ROOT, 'src/lib/dish-pages.ts'), 'utf8').includes('dishPath')) {
    errors.push('dish-pages.ts must build /thai-food/<city>--<slug> paths');
  }
}

const partners = readFileSync(join(ROOT, 'src/lib/partners.ts'), 'utf8');
for (const token of ['11105102', '334225872', '334804079', '588978', '793638']) {
  if (!partners.includes(token)) {
    errors.push(`partners.ts missing affiliate token ${token}`);
  }
}
// Old Trip.com SID 334225872: only the two fallback constants may hold it (used solely for links
// still awaiting a Partner-generated replacement). Any other occurrence in src fails the build.
{
  const { readdirSync: rd } = await import('node:fs');
  const ALLOWED = ["const TRIP_SID = '334225872';", "const TRIP_BASE = 'Allianceid=11105102&SID=334225872&trip_sub2=th';"];
  const walk = (dir) => rd(dir, { withFileTypes: true }).flatMap((e) => e.isDirectory() ? walk(join(dir, e.name)) : [join(dir, e.name)]);
  for (const file of walk(join(ROOT, 'src'))) {
    readFileSync(file, 'utf8').split('\n').forEach((line, n) => {
      if (line.includes('334225872') && !ALLOWED.includes(line.trim())) errors.push(`${file.slice(ROOT.length)}:${n + 1} has old Trip.com SID 334225872`);
    });
  }
}
if (!partners.includes('hotelSearchListUrl') || !partners.includes('/hotels/list?')) {
  errors.push('partners.ts must export hotelSearchListUrl using /hotels/list?');
}
const tripSearch = readFileSync(join(ROOT, 'src/components/TripSearch.astro'), 'utf8');
const ALLOWED_SEARCH_BOX = 'trip.com/partners/ad/S20729725?Allianceid=11105102&SID=334804079&trip_sub1=th_search_box';
if (!tripSearch.includes(ALLOWED_SEARCH_BOX)) {
  errors.push('TripSearch.astro must embed the Partner search box S20729725');
}
if ((tripSearch.match(/partners\/ad\//g) || []).length !== 1) {
  errors.push('TripSearch.astro may only reference the S20729725 Partner search box');
}
const cityBoxes = readFileSync(join(ROOT, 'src/lib/trip-searchboxes.ts'), 'utf8');
const cityBoxIds = [...cityBoxes.matchAll(/partners\/ad\/(S\d+)\?Allianceid=11105102&SID=334804079&/g)].map((m) => m[1]);
if (cityBoxIds.length !== 20 || new Set(cityBoxIds).size !== 20 || (cityBoxes.match(/partners\/ad\//g) || []).length !== 20) {
  errors.push('trip-searchboxes.ts must hold exactly 20 distinct Partner city search boxes under SID 334804079');
}
if (!existsSync(join(ROOT, 'scripts/check-stay-search.mjs')) || !existsSync(join(ROOT, 'scripts/check-unique-photos.mjs')) || !existsSync(join(ROOT, 'scripts/check-facts.mjs'))) {
  errors.push('missing check-stay-search, check-unique-photos, or check-facts script');
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

const wave23Dir = join(ROOT, 'src/lib');
const wave23Files = readdirSync(wave23Dir).filter((name) => /^wave23-[a-g]\.ts$/.test(name));
const DAYS_COVER = /\b(?:One|Two|Three|Four|Five|Six|Seven|Eight|Nine|Ten|Eleven|Twelve|Fourteen|Sixteen|Twenty-one)\s+(?:[A-Za-z-]+\s+){0,3}days cover\b/;
const THEN_IS_KIND =
  /\bthen\b[^.]{0,90}\bis the\b[^.]{0,50}\b(?:trip|week|pair)\b/i;
const OPENER_TICKET_RUN =
  /Palace 500 THB[\s\S]{0,80}Wat Pho[\s\S]{0,40}300 THB[\s\S]{0,50}(?:ferry|Tha Tien)[\s\S]{0,40}5 THB[\s\S]{0,40}Wat Arun[\s\S]{0,40}200 THB/i;
const ticketRunPages = [];
for (const name of wave23Files) {
  const rel = `src/lib/${name}`;
  const text = readFileSync(join(wave23Dir, name), 'utf8');
  text.split('\n').forEach((line, i) => {
    if (DAYS_COVER.test(line)) {
      errors.push(`${rel}:${i + 1} templated itinerary opener ("days cover")`);
    }
    if (THEN_IS_KIND.test(line) && /^\s+'/.test(line)) {
      errors.push(`${rel}:${i + 1} templated itinerary opener ("then ... is the trip/week/pair")`);
    }
    if (OPENER_TICKET_RUN.test(line) && /^\s+'/.test(line) && !/\/photos\//.test(line)) {
      ticketRunPages.push(`${rel}:${i + 1}`);
    }
  });
}
if (ticketRunPages.length >= 3) {
  errors.push(
    `identical Bangkok ticket list repeated across ${ticketRunPages.length} itinerary openers (${ticketRunPages.join(', ')})`,
  );
}

{
  const { createRequire } = await import('node:module');
  const { mkdtempSync, rmSync } = await import('node:fs');
  const { tmpdir } = await import('node:os');
  const { pathToFileURL } = await import('node:url');
  const require = createRequire(join(ROOT, 'package.json'));
  const esbuild = await import(pathToFileURL(require.resolve('esbuild')).href);
  const dir = mkdtempSync(join(tmpdir(), 'ttg-itinerary-photos-'));
  const outfile = join(dir, 'bundle.mjs');
  try {
    await esbuild.build({
      entryPoints: [join(ROOT, 'src/lib/audit-api.ts')],
      bundle: true,
      format: 'esm',
      platform: 'node',
      outfile,
      logLevel: 'silent',
    });
    const inlineOut = join(dir, 'inline.mjs');
    await esbuild.build({
      entryPoints: [join(ROOT, 'src/lib/inline.ts')],
      bundle: true,
      format: 'esm',
      platform: 'node',
      outfile: inlineOut,
      logLevel: 'silent',
    });
    const inlineMod = await import(pathToFileURL(inlineOut).href);
    const formatInline = inlineMod.formatInline;
    const RAW_MD_LINK = /\]\(https?:|\]\(\//;
    const mod = await import(pathToFileURL(outfile).href);
    const pages = typeof mod.allPages === 'function' ? mod.allPages() : [];
    const mainPhotosFor = mod.mainPhotosFor;
    const rawWave23 = Array.isArray(mod.WAVE23_ITINERARY_PAGES) ? mod.WAVE23_ITINERARY_PAGES : [];
    const toCheck = new Map();
    for (const page of rawWave23) toCheck.set(page.path, page);
    for (const page of pages) {
      if (!String(page.path || '').startsWith('/itineraries/')) continue;
      if (!toCheck.has(page.path)) toCheck.set(page.path, page);
    }
    function walkStrings(value, visit) {
      if (typeof value === 'string') visit(value);
      else if (Array.isArray(value)) value.forEach((item) => walkStrings(item, visit));
      else if (value && typeof value === 'object') {
        for (const item of Object.values(value)) walkStrings(item, visit);
      }
    }
    if (typeof formatInline === 'function') {
      for (const page of pages) {
        walkStrings(page, (text) => {
          if (RAW_MD_LINK.test(formatInline(text))) {
            errors.push(`${page.path} raw markdown link after formatInline`);
          }
        });
      }
    }
    for (const page of pages) {
      if (!String(page.path || '').startsWith('/itineraries/') || typeof mainPhotosFor !== 'function') continue;
      const rendered = mainPhotosFor(page).filter(Boolean);
      const seenRendered = new Set();
      for (const photo of rendered) {
        if (seenRendered.has(photo)) {
          errors.push(`${page.path} repeated photo in rendered itinerary page: ${photo}`);
        }
        seenRendered.add(photo);
      }
    }
    for (const page of toCheck.values()) {
      const source = [];
      if (page.photo) source.push(page.photo);
      for (const item of page.portraits || []) if (item.photo) source.push(item.photo);
      for (const item of page.affiliates || []) if (item.photo) source.push(item.photo);
      for (const item of page.days || []) if (item.photo) source.push(item.photo);
      for (const section of page.sections || []) {
        for (const card of section.cards || []) if (card.photo) source.push(card.photo);
      }
      const seenSource = new Set();
      for (const photo of source) {
        if (seenSource.has(photo)) {
          errors.push(`${page.path} repeated photo on itinerary page: ${photo}`);
        }
        seenSource.add(photo);
      }
    }
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
}

function scanBuiltHtmlForMarkdown(label) {
  const dist = join(ROOT, 'dist');
  if (!existsSync(dist)) return;
  const htmlFiles = [];
  function walkHtml(dir) {
    for (const name of readdirSync(dir)) {
      const full = join(dir, name);
      const st = statSync(full);
      if (st.isDirectory()) walkHtml(full);
      else if (name.endsWith('.html')) htmlFiles.push(full);
    }
  }
  walkHtml(dist);
  const leak = /\]\(https?:|\]\(\//;
  for (const file of htmlFiles) {
    const text = readFileSync(file, 'utf8');
    if (leak.test(text)) {
      errors.push(`${relative(ROOT, file)} ${label}: raw markdown link fragment in built HTML`);
    }
  }
}

scanBuiltHtmlForMarkdown('check:content');

if (errors.length) {
  console.error(`check:content failed (${errors.length} error${errors.length === 1 ? '' : 's'})`);
  for (const err of errors) console.error(`  ${err}`);
  process.exit(1);
}

console.log(`check:content ok (${files.length} files, ${REQUIRED_ROUTES.length} required routes, 0 em dashes)`);
