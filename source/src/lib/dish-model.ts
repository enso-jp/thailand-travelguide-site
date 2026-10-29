import { klookTours, stayAreaLink, stayLink, type StayCity } from './partners';
import type { Affiliate, Faq, Fact, Page } from './content';

export type FoodSpot = {
  name: string;
  nameLocal?: string;
  address: string;
  hours: string;
  price: string;
  note: string;
};

export type DishCity = 'bangkok' | 'chiang-mai';

export type DishRecord = {
  city: DishCity;
  slug: string;
  title: string;
  nameLocal: string;
  hook: string;
  lede: string;
  description: string;
  taste: string;
  orderName: string;
  orderPhrase: string;
  orderNote: string;
  price: string;
  spice: string;
  diet: string;
  spots: FoodSpot[];
  related: string[];
  walkHref: string;
  walkLabel: string;
  photo?: string;
  facts: Fact[];
  faqs: Faq[];
  klookQuery: string;
  stayKey: StayCity | 'rattanakosin' | 'sukhumvit' | 'thonglor' | 'silom' | 'chiang-mai-old-city' | 'nimmanhaemin';
};

export function dishPath(dish: Pick<DishRecord, 'city' | 'slug'>): string {
  return `/thai-food/${dish.city}--${dish.slug}`;
}

export function cityLabel(city: DishCity): string {
  return city === 'bangkok' ? 'Bangkok' : 'Chiang Mai';
}

export function cityHubPath(city: DishCity): string {
  return city === 'bangkok' ? '/thai-food/bangkok' : '/thai-food/chiang-mai';
}

export function dishTitleCore(dish: DishRecord): string {
  return `${dish.title} in ${cityLabel(dish.city)}: ${dish.hook}`;
}

function stayAffiliate(dish: DishRecord): Affiliate {
  if (dish.city === 'chiang-mai') {
    const oldCity = dish.stayKey === 'nimmanhaemin';
    return {
      title: oldCity ? 'Nimman stays' : 'Old City stays',
      kicker: oldCity ? 'West of the moat' : 'Walk to lunch',
      body: oldCity
        ? 'Sleep west of the moat if the plate is a Nimman table after a market morning.'
        : 'Sleep inside the moat if this plate is a lunch walk, not a Grab across town.',
      href: oldCity ? stayAreaLink('nimmanhaemin') : stayAreaLink('chiang-mai-old-city'),
      cta: 'Search stays',
      photo: oldCity ? '/photos/nimman.jpg' : '/photos/chiang-mai-old-city.jpg',
      partner: 'stay',
    };
  }
  const map: Record<string, Affiliate> = {
    rattanakosin: {
      title: 'Rattanakosin stays',
      kicker: 'Palace grid',
      body: 'Sleep by the wats if this plate is a Maha Chai or river lunch, not a Sukhumvit Grab.',
      href: stayAreaLink('rattanakosin'),
      cta: 'Search stays',
      photo: '/photos/old-city.jpg',
      partner: 'stay',
    },
    sukhumvit: {
      title: 'Sukhumvit stays',
      kicker: 'BTS dinner',
      body: 'Sleep on the BTS if this plate is a Sukhumvit shophouse, not an Old City queue.',
      href: stayAreaLink('sukhumvit'),
      cta: 'Search stays',
      photo: '/photos/sukhumvit.jpg',
      partner: 'stay',
    },
    thonglor: {
      title: 'Thonglor stays',
      kicker: 'BTS Thong Lo',
      body: 'Sleep on Thong Lo if this plate is an Ekkamai or Thonglor room after dark.',
      href: stayAreaLink('thonglor'),
      cta: 'Search stays',
      photo: '/photos/phrom-phong-and-thong-lo.jpg',
      partner: 'stay',
    },
    silom: {
      title: 'Silom stays',
      kicker: 'Bang Rak lunch',
      body: 'Sleep on Silom if this plate is a Charoen Krung or Bang Rak shophouse.',
      href: stayAreaLink('silom'),
      cta: 'Search stays',
      photo: '/photos/silom-and-sathorn.jpg',
      partner: 'stay',
    },
  };
  return (
    map[dish.stayKey] || {
      title: 'Bangkok stays',
      kicker: 'Near the plate',
      body: 'Sleep on the rail that already serves this neighbourhood.',
      href: stayLink('bangkok'),
      cta: 'Search stays',
      photo: '/photos/bangkok.jpg',
      partner: 'stay',
    }
  );
}

export function dishToPage(dish: DishRecord, catalog: DishRecord[]): Page {
  const path = dishPath(dish);
  const city = cityLabel(dish.city);
  const hub = cityHubPath(dish.city);
  const related = dish.related
    .map((slug) => catalog.find((row) => row.city === dish.city && row.slug === slug))
    .filter((row): row is DishRecord => Boolean(row));
  const stay = stayAffiliate(dish);
  const klookPhoto = dish.city === 'chiang-mai' ? '/photos/thai-food-lanna.jpg' : '/photos/thai-food-bangkok-street.jpg';

  return {
    path,
    title: `${dish.title} in ${city}`,
    alternateName: dish.nameLocal,
    description: dish.description,
    lede: dish.lede,
    schema: 'Article',
    crumbs: [
      { name: 'Thai food', href: '/thai-food' },
      { name: city, href: hub },
      { name: dish.title, href: path },
    ],
    facts: dish.facts,
    chips: [city, dish.price, dish.orderName],
    photo: dish.photo,
    geo:
      dish.city === 'bangkok'
        ? { lat: 13.746, lon: 100.535, containedIn: 'Bangkok' }
        : { lat: 18.788, lon: 98.985, containedIn: 'Chiang Mai' },
    parentPill: { name: `${city} food`, href: hub },
    paragraphs: [dish.lede],
    sections: [
      {
        id: 'taste',
        title: 'What it tastes like',
        bullets: [dish.taste],
      },
      {
        id: 'order',
        title: 'How to order it',
        bullets: [
          `**Thai name:** ${dish.orderName} (${dish.nameLocal}).`,
          `**Say:** ${dish.orderPhrase}`,
          dish.orderNote,
        ],
      },
      {
        id: 'price',
        title: 'Typical price',
        bullets: [`**2026 cash:** ${dish.price}.`],
      },
      {
        id: 'where',
        title: 'Where to try it',
        bullets: dish.spots.map(
          (spot) =>
            `**${spot.name}**${spot.nameLocal ? ` (${spot.nameLocal})` : ''}, ${spot.address}. ${spot.hours}. ${spot.price}. ${spot.note}`,
        ),
      },
      {
        id: 'spice-diet',
        title: 'Spice level and diet',
        bullets: [`**Heat:** ${dish.spice}`, `**Diet:** ${dish.diet}`],
      },
      {
        id: 'next',
        title: 'Next plates',
        bullets: [
          `Back to the [${city} food hub](${hub}) for the neighbourhood rows.`,
          `Use the [${dish.walkLabel}](${dish.walkHref}) page if you want the walk, not a second dish.`,
          ...related.map((row) => `[${row.title}](${dishPath(row)}) is the nearby order if this plate is done.`),
        ],
      },
    ],
    portraits: [
      {
        title: `${city} food`,
        href: hub,
        photo: dish.city === 'bangkok' ? '/photos/yaowarat.jpg' : '/photos/night-market-cm.jpg',
      },
      {
        title: dish.walkLabel,
        href: dish.walkHref,
        photo: dish.city === 'bangkok' ? '/photos/chinatown-day.jpg' : '/photos/chiang-mai.jpg',
      },
      {
        title: 'Cooking classes',
        href: '/thai-food/thai-cooking-classes-bangkok-and-chiang-mai',
        photo: '/photos/thai-food.jpg',
      },
      {
        title: 'Dishes to order',
        href: '/thai-food/thai-dishes-to-order-first-trip',
        photo: '/photos/ari.jpg',
      },
    ],
    affiliates: [
      stay,
      {
        title: dish.city === 'chiang-mai' ? 'Chiang Mai cooking class' : 'Bangkok food tour',
        kicker: 'Klook',
        body:
          dish.city === 'chiang-mai'
            ? 'Book a half-day wok if you want the paste explained. Morning slots beat the lunch clock.'
            : 'Book a walk only if the group will not split on the MRT. The stall still takes cash.',
        href: klookTours(dish.klookQuery),
        cta: 'See tickets',
        photo: klookPhoto,
        partner: 'klook',
      },
    ],
    faqs: dish.faqs,
  };
}

export function dishDirectoryItems(dishes: DishRecord[]) {
  return dishes.map((dish) => ({
    title: `${dish.title} (${cityLabel(dish.city)})`,
    nameLocal: dish.nameLocal,
    href: dishPath(dish),
    line: dish.lede,
    find: `${dish.title} ${dish.nameLocal} ${dish.city} ${dish.orderName}`,
    letter: dish.title[0].toUpperCase(),
  }));
}
