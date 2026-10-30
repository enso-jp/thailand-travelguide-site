import credits from '../../public/photos/credits.json';

export const PHOTO_POOL = Object.keys(credits)
  .map((key) => `/photos/${key}.jpg`)
  .sort();

const META_LAST = new Set([
  '/photos/about.jpg',
  '/photos/privacy.jpg',
  '/photos/destinations.jpg',
  '/photos/interests.jpg',
  '/photos/itineraries.jpg',
  '/photos/plan.jpg',
]);

export const SCENIC_POOL = [
  ...PHOTO_POOL.filter((p) => !p.includes('/dish-') && !META_LAST.has(p)),
  ...PHOTO_POOL.filter((p) => META_LAST.has(p)),
];

const CONTEXT_POOLS: Array<{ test: RegExp; photos: string[] }> = [
  {
    test: /hua-hin|hua hin|takiab|cicada|sam-roi-yot|sam roi yot|phraya nakhon|klai kangwon/i,
    photos: [
      '/photos/hua-hin.jpg',
      '/photos/sam-roi-yot.jpg',
      '/photos/jomtien.jpg',
      '/photos/wongamat.jpg',
      '/photos/chaweng.jpg',
      '/photos/lamai.jpg',
      '/photos/ferry-gulf.jpg',
      '/photos/resort-four-seasons-koh-samui.jpg',
      '/photos/resort-six-senses-samui.jpg',
      '/photos/bts.jpg',
    ],
  },
  {
    test: /pattaya|jomtien|koh-larn|koh larn|wongamat|sanctuary-truth|sanctuary of truth|nong-nooch|nong nooch/i,
    photos: [
      '/photos/pattaya.jpg',
      '/photos/sanctuary-truth.jpg',
      '/photos/jomtien.jpg',
      '/photos/koh-larn.jpg',
      '/photos/wongamat.jpg',
      '/photos/nong-nooch.jpg',
      '/photos/walking-street-pattaya.jpg',
      '/photos/ferry-gulf.jpg',
      '/photos/hua-hin.jpg',
    ],
  },
  {
    test: /koh-kood|koh kood|soneva|klong chao|ao tapao|bang-bao-kood|bang bao|laem sok|koh-chang|koh chang|white-sand-chang|white sand|klong-prao|klong prao|lonely-beach|lonely beach|kai-bae|kai bae|than-mayom|than mayom|trat/i,
    photos: [
      '/photos/koh-kood.jpg',
      '/photos/bang-bao-kood.jpg',
      '/photos/klong-chao-fall.jpg',
      '/photos/resort-soneva-kiri.jpg',
      '/photos/koh-chang.jpg',
      '/photos/white-sand-chang.jpg',
      '/photos/klong-prao.jpg',
      '/photos/lonely-beach.jpg',
      '/photos/kai-bae.jpg',
      '/photos/than-mayom.jpg',
      '/photos/ferry-gulf.jpg',
      '/photos/koh-kood-boat.jpg',
      '/photos/ang-thong.jpg',
    ],
  },
  {
    test: /samui|chaweng|lamai|bophut|fisherman|ang-thong|ang thong|laem yai|choeng mon|plai laem|lipa noi|phangan|haad rin|thong sala|thong nai pan|srithanu|bottle beach|koh-tao|koh tao|sairee|mae haad|chalok|shark bay|john suwan|ao tanot|lomprayah|seatran/i,
    photos: [
      '/photos/koh-samui.jpg',
      '/photos/chaweng.jpg',
      '/photos/lamai.jpg',
      '/photos/ang-thong.jpg',
      '/photos/koh-phangan.jpg',
      '/photos/koh-tao.jpg',
      '/photos/ferry-gulf.jpg',
      '/photos/samui-airport.jpg',
      '/photos/chaweng-night.jpg',
      '/photos/resort-four-seasons-koh-samui.jpg',
      '/photos/resort-six-senses-samui.jpg',
      '/photos/resort-ritz-carlton-koh-samui.jpg',
      '/photos/white-sand-chang.jpg',
      '/photos/klong-prao.jpg',
      '/photos/bang-bao-kood.jpg',
      '/photos/longtail-andaman.jpg',
    ],
  },
  {
    test: /phuket|kata|karon|kamala|surin|rawai|nai harn|patong|amanpuri|trisara|avista|pansea|naithon|khao-lak|khao lak|similan|tab lamu|takua pa|bang niang/i,
    photos: [
      '/photos/phuket.jpg',
      '/photos/kata-and-karon.jpg',
      '/photos/kamala-and-surin.jpg',
      '/photos/rawai-and-nai-harn.jpg',
      '/photos/big-buddha-phuket.jpg',
      '/photos/patong-night.jpg',
      '/photos/khao-lak.jpg',
      '/photos/bang-niang.jpg',
      '/photos/khuk-khak.jpg',
      '/photos/nang-thong.jpg',
      '/photos/khao-lak-andaman.jpg',
      '/photos/bang-niang-estuary.jpg',
      '/photos/khao-lak-resort.jpg',
      '/photos/similan.jpg',
      '/photos/similan-boat.jpg',
      '/photos/surin-islands.jpg',
      '/photos/phuket-airport.jpg',
      '/photos/longtail-andaman.jpg',
      '/photos/resort-amanpuri.jpg',
      '/photos/resort-trisara-phuket.jpg',
      '/photos/resort-avista-hideaway-phuket.jpg',
      '/photos/phi-phi.jpg',
      '/photos/phi-phi-viewpoint.jpg',
      '/photos/krabi.jpg',
      '/photos/railay.jpg',
    ],
  },
  {
    test: /krabi|railay|phra nang|ao nang|tubkaek|phulay|rayavadee|yao-noi|yao noi|tiger-cave|tiger cave|hong island|phi-phi|phi phi|maya|tonsai|viking|long-beach-pp|koh-lanta|koh lanta|klong dao|kantiang|saladan|koh-lipe|koh lipe|pak bara|adang/i,
    photos: [
      '/photos/krabi.jpg',
      '/photos/ao-nang.jpg',
      '/photos/railay.jpg',
      '/photos/longtail-andaman.jpg',
      '/photos/tiger-cave.jpg',
      '/photos/phi-phi.jpg',
      '/photos/phi-phi-viewpoint.jpg',
      '/photos/maya-bay.jpg',
      '/photos/long-beach-pp.jpg',
      '/photos/tonsai.jpg',
      '/photos/viking-cave.jpg',
      '/photos/koh-lanta.jpg',
      '/photos/koh-lipe.jpg',
      '/photos/resort-phulay-bay.jpg',
      '/photos/resort-rayavadee.jpg',
      '/photos/resort-six-senses-yao-noi.jpg',
      '/photos/kata-and-karon.jpg',
      '/photos/kamala-and-surin.jpg',
      '/photos/rawai-and-nai-harn.jpg',
      '/photos/khao-lak.jpg',
    ],
  },
  {
    test: /chiang-mai|chiang mai|doi-suthep|doi suthep|inthanon|nimman|phra singh|mae rim|137-pillars|137 pillars|anantara-chiang-mai|veranda|chiang-rai|chiang rai|white temple|blue-temple|blue temple|baan-dam|baan dam|pai|sukhothai|lanna|northern/i,
    photos: [
      '/photos/chiang-mai.jpg',
      '/photos/chiang-mai-airport.jpg',
      '/photos/chiang-mai-old-city.jpg',
      '/photos/doi-suthep.jpg',
      '/photos/doi-suthep-chedi.jpg',
      '/photos/wat-phra-singh.jpg',
      '/photos/nimman.jpg',
      '/photos/night-market-cm.jpg',
      '/photos/northern.jpg',
      '/photos/chiang-rai.jpg',
      '/photos/blue-temple.jpg',
      '/photos/baan-dam.jpg',
      '/photos/pai.jpg',
      '/photos/sukhothai.jpg',
      '/photos/resort-four-seasons-chiang-mai.jpg',
      '/photos/resort-137-pillars.jpg',
      '/photos/resort-anantara-chiang-mai.jpg',
      '/photos/resort-veranda-high-chiang-mai.jpg',
      '/photos/thai-food-lanna.jpg',
    ],
  },
  {
    test: /ayutthaya|mahathat|sanphet|bang-pa-in|kanchanaburi|erawan|kwai|sai yok|hellfire|khao-sok|khao sok|cheow-lan|cheow lan|ratchaprapha|khao-yai|khao yai|haew-suwat|haew suwat|pak-chong|pak chong/i,
    photos: [
      '/photos/ayutthaya.jpg',
      '/photos/wat-mahathat-ayu.jpg',
      '/photos/wat-phra-si-sanphet.jpg',
      '/photos/bang-pa-in.jpg',
      '/photos/kanchanaburi.jpg',
      '/photos/erawan.jpg',
      '/photos/khao-sok.jpg',
      '/photos/cheow-lan.jpg',
      '/photos/khao-yai.jpg',
      '/photos/haew-suwat.jpg',
      '/photos/pak-chong.jpg',
      '/photos/sam-roi-yot.jpg',
      '/photos/riverside.jpg',
      '/photos/longtail-andaman.jpg',
    ],
  },
  {
    test: /resort|villa|five-star|flagship/i,
    photos: [
      '/photos/resort-amanpuri.jpg',
      '/photos/resort-trisara-phuket.jpg',
      '/photos/resort-four-seasons-koh-samui.jpg',
      '/photos/resort-six-senses-samui.jpg',
      '/photos/resort-ritz-carlton-koh-samui.jpg',
      '/photos/resort-phulay-bay.jpg',
      '/photos/resort-six-senses-yao-noi.jpg',
      '/photos/resort-rayavadee.jpg',
      '/photos/resort-capella-bangkok.jpg',
      '/photos/resort-four-seasons-bangkok.jpg',
      '/photos/resort-mandarin-oriental-bangkok.jpg',
      '/photos/resort-the-siam.jpg',
      '/photos/resort-rosewood-bangkok.jpg',
      '/photos/resort-four-seasons-chiang-mai.jpg',
      '/photos/resort-137-pillars.jpg',
      '/photos/resort-anantara-chiang-mai.jpg',
      '/photos/resort-soneva-kiri.jpg',
      '/photos/resort-avista-hideaway-phuket.jpg',
      '/photos/resort-veranda-high-chiang-mai.jpg',
      '/photos/resort-vie-hotel-bangkok.jpg',
      '/photos/resort.jpg',
    ],
  },
  {
    test: /thai-food|food|market|yaowarat|chinatown|banthat|wang lang|or tor kor|khao soi|hokkien|baba|nyonya|cooking|coffee|rooftop|bib gourmand|street/i,
    photos: [
      '/photos/thai-food-bangkok-street.jpg',
      '/photos/thai-food-bib.jpg',
      '/photos/thai-food-lanna.jpg',
      '/photos/thai-food-southern.jpg',
      '/photos/thai-food-night-markets.jpg',
      '/photos/thai-food.jpg',
      '/photos/yaowarat.jpg',
      '/photos/chinatown-day.jpg',
      '/photos/night-market-cm.jpg',
      '/photos/chatuchak.jpg',
      '/photos/ari.jpg',
      '/photos/siam.jpg',
      '/photos/riverside.jpg',
      '/photos/wat-arun-night.jpg',
      '/photos/phrom-phong-and-thong-lo.jpg',
      '/photos/sukhumvit.jpg',
      '/photos/silom-and-sathorn.jpg',
      '/photos/old-city.jpg',
      '/photos/bangkok.jpg',
    ],
  },
  {
    test: /bangkok|sukhumvit|thonglor|phrom-phong|phrom phong|siam|silom|sathorn|rattanakosin|old-city|old city|charoenkrung|riverside|wat-pho|wat pho|wat-arun|wat arun|grand-palace|grand palace|jim-thompson|jim thompson|lumphini|muay-thai|muay thai|nightlife|bts|grab|capella|mandarin|rosewood|the-siam|the siam|vie-hotel/i,
    photos: [
      '/photos/bangkok.jpg',
      '/photos/sukhumvit.jpg',
      '/photos/phrom-phong-and-thong-lo.jpg',
      '/photos/siam.jpg',
      '/photos/silom-and-sathorn.jpg',
      '/photos/silom-night.jpg',
      '/photos/riverside.jpg',
      '/photos/wat-arun-night.jpg',
      '/photos/old-city.jpg',
      '/photos/grand-palace.jpg',
      '/photos/wat-pho.jpg',
      '/photos/jim-thompson.jpg',
      '/photos/lumphini.jpg',
      '/photos/chatuchak.jpg',
      '/photos/yaowarat.jpg',
      '/photos/chinatown-day.jpg',
      '/photos/ari.jpg',
      '/photos/bts.jpg',
      '/photos/suvarnabhumi-arrivals.jpg',
      '/photos/thonburi-station.jpg',
      '/photos/nightlife.jpg',
      '/photos/resort-capella-bangkok.jpg',
      '/photos/resort-four-seasons-bangkok.jpg',
      '/photos/resort-mandarin-oriental-bangkok.jpg',
      '/photos/resort-the-siam.jpg',
      '/photos/resort-rosewood-bangkok.jpg',
      '/photos/resort-vie-hotel-bangkok.jpg',
    ],
  },
  {
    test: /hanoi|ho chi minh|saigon|da nang|da-nang|hoi an|hoi-an|ha long|ha-long|tan son nhat|noi bai|vietnam/i,
    photos: [
      '/photos/hanoi.jpg',
      '/photos/hanoi-old-quarter.jpg',
      '/photos/hanoi-temple-literature.jpg',
      '/photos/ho-chi-minh.jpg',
      '/photos/hcmc-notre-dame.jpg',
      '/photos/hcmc-ben-thanh.jpg',
      '/photos/hcmc-opera.jpg',
      '/photos/da-nang.jpg',
      '/photos/da-nang-beach.jpg',
      '/photos/marble-mountains.jpg',
      '/photos/hoi-an.jpg',
      '/photos/hoi-an-lanterns.jpg',
      '/photos/ha-long.jpg',
      '/photos/hanoi-street-food.jpg',
      '/photos/temple-of-literature.jpg',
      '/photos/ben-thanh.jpg',
      '/photos/cu-chi-tunnels.jpg',
      '/photos/da-nang-airport.jpg',
      '/photos/hoi-an-river.jpg',
      '/photos/cham-islands.jpg',
      '/photos/linh-ung.jpg',
      '/photos/tan-son-nhat.jpg',
      '/photos/noi-bai.jpg',
      '/photos/ninh-binh.jpg',
    ],
  },
];

export type Credit = { author: string; license: string; source: string };

export function creditFor(photo?: string): string | undefined {
  if (!photo) return undefined;
  const key = photo.replace(/^\/photos\//, '').replace(/\.[^.]+$/, '');
  const row = (credits as Record<string, Credit>)[key];
  if (!row) return undefined;
  return `Photo: ${row.author} · ${row.license}`;
}

/** Assigns distinct /photos/* files for every image on one page. */
export class UniquePhotos {
  private used = new Set<string>();
  private cursor = 0;

  constructor(reserved: string[] = []) {
    for (const photo of reserved) {
      if (photo) this.used.add(photo);
    }
  }

  has(photo: string): boolean {
    return this.used.has(photo);
  }

  peek(): string[] {
    return [...this.used];
  }

  take(preferred?: string, hint?: string): string {
    const exact = this.takeOrNone(preferred);
    if (exact) return exact;
    const context = `${preferred || ''} ${hint || ''}`.trim();
    if (context) {
      for (const group of CONTEXT_POOLS) {
        if (group.test.test(context)) {
          for (const candidate of group.photos) {
            if (!this.used.has(candidate) && PHOTO_POOL.includes(candidate)) {
              this.used.add(candidate);
              return candidate;
            }
          }
        }
      }
    }
    while (this.cursor < SCENIC_POOL.length) {
      const next = SCENIC_POOL[this.cursor++];
      if (!this.used.has(next)) {
        this.used.add(next);
        return next;
      }
    }
    const fallback = SCENIC_POOL.find((photo) => !this.used.has(photo));
    if (!fallback) {
      throw new Error('PHOTO_POOL exhausted: add more licensed photos to public/photos/');
    }
    this.used.add(fallback);
    return fallback;
  }

  takeBatch<T extends { photo?: string }>(items: T[], getHint?: (item: T) => string): Array<T & { photo: string }> {
    const resolved: Array<string | undefined> = new Array(items.length);
    items.forEach((item, index) => {
      const exact = this.takeOrNone(item.photo);
      if (exact) resolved[index] = exact;
    });
    return items.map((item, index) => ({
      ...item,
      photo: resolved[index] || this.take(item.photo, getHint ? getHint(item) : ''),
    }));
  }

  /** Use the preferred file only. Never fall back to an unrelated pool photo. */
  takeOrNone(preferred?: string): string | undefined {
    if (preferred && !this.used.has(preferred) && PHOTO_POOL.includes(preferred)) {
      this.used.add(preferred);
      return preferred;
    }
    return undefined;
  }
}

export function uniqueList(preferred: Array<string | undefined>, reserved: string[] = []): string[] {
  const bag = new UniquePhotos(reserved);
  return preferred.map((photo) => bag.take(photo));
}
