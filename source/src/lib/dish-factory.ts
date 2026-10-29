import type { DishRecord, DishCity, FoodSpot } from './dish-model';
import { DISH_CITY_META } from './dish-model';
import type { StayCity } from './partners';

const WALKS: Record<DishCity, { walkHref: string; walkLabel: string; klookQuery: string; stayKey: DishRecord['stayKey'] }> = {
  bangkok: { walkHref: '/thai-food/bangkok-street-food', walkLabel: 'Bangkok street food', klookQuery: 'Bangkok food tour', stayKey: 'bangkok' },
  'chiang-mai': { walkHref: '/thai-food/chiang-mai-khao-soi-and-markets', walkLabel: 'Chiang Mai khao soi and markets', klookQuery: 'Chiang Mai food tour', stayKey: 'chiang-mai-old-city' },
  phuket: { walkHref: '/thai-food/phuket-old-town-hokkien-and-peranakan-food', walkLabel: 'Phuket Old Town food', klookQuery: 'Phuket Old Town food', stayKey: 'phuket' },
  krabi: { walkHref: '/thai-food/southern-and-baba-nyonya', walkLabel: 'South and Baba-Nyonya', klookQuery: 'Krabi food tour', stayKey: 'krabi' },
  'chiang-rai': { walkHref: '/thai-food/northern-lanna', walkLabel: 'Northern Lanna', klookQuery: 'Chiang Rai food tour', stayKey: 'chiang-rai' },
  'khon-kaen': { walkHref: '/thai-food/isan', walkLabel: 'Isan food', klookQuery: 'Isan food Khon Kaen', stayKey: 'bangkok' },
  'udon-thani': { walkHref: '/thai-food/isan', walkLabel: 'Isan food', klookQuery: 'Isan food Udon Thani', stayKey: 'bangkok' },
  'nong-khai': { walkHref: '/thai-food/isan', walkLabel: 'Isan food', klookQuery: 'Isan food Nong Khai', stayKey: 'bangkok' },
  ayutthaya: { walkHref: '/ayutthaya', walkLabel: 'Ayutthaya ruins', klookQuery: 'Ayutthaya food tour', stayKey: 'ayutthaya' },
  'hua-hin': { walkHref: '/thai-food/night-markets', walkLabel: 'Night markets', klookQuery: 'Hua Hin night market', stayKey: 'hua-hin' },
  'hat-yai': { walkHref: '/thai-food/southern-and-baba-nyonya', walkLabel: 'South and Baba-Nyonya', klookQuery: 'Hat Yai food', stayKey: 'phuket' },
  sukhothai: { walkHref: '/sukhothai/historical-park', walkLabel: 'Sukhothai historical park', klookQuery: 'Sukhothai food', stayKey: 'sukhothai' },
  pattaya: { walkHref: '/pattaya', walkLabel: 'Pattaya', klookQuery: 'Pattaya food tour', stayKey: 'pattaya' },
  'koh-samui': { walkHref: '/koh-samui/chaweng', walkLabel: 'Chaweng', klookQuery: 'Koh Samui food tour', stayKey: 'koh-samui' },
};

export type DishDraft = {
  city: DishCity;
  slug: string;
  title: string;
  nameLocal: string;
  hook: string;
  lede: string;
  description?: string;
  taste: string;
  orderName: string;
  orderPhrase: string;
  orderNote: string;
  price: string;
  spice: string;
  diet: string;
  spots: FoodSpot[];
  related: string[];
  photo: string;
  room: string;
  clock: string;
  faqs: DishRecord['faqs'];
  walkHref?: string;
  walkLabel?: string;
  klookQuery?: string;
  stayKey?: DishRecord['stayKey'] | StayCity;
};

export function makeDish(draft: DishDraft): DishRecord {
  const walk = WALKS[draft.city];
  const city = DISH_CITY_META[draft.city].label;
  return {
    city: draft.city,
    slug: draft.slug,
    title: draft.title,
    nameLocal: draft.nameLocal,
    hook: draft.hook,
    lede: draft.lede,
    description: draft.description || `${draft.lede} ${draft.spots[0].name} is the named start at ${draft.price}.`,
    taste: draft.taste,
    orderName: draft.orderName,
    orderPhrase: draft.orderPhrase,
    orderNote: draft.orderNote,
    price: draft.price,
    spice: draft.spice,
    diet: draft.diet,
    spots: draft.spots,
    related: draft.related,
    walkHref: draft.walkHref || walk.walkHref,
    walkLabel: draft.walkLabel || walk.walkLabel,
    photo: draft.photo,
    facts: [
      { label: 'Thai', value: `${draft.nameLocal} · ${draft.orderName}` },
      { label: 'Price', value: draft.price },
      { label: 'Room', value: draft.room },
      { label: 'Clock', value: draft.clock },
    ],
    faqs: draft.faqs,
    klookQuery: draft.klookQuery || walk.klookQuery,
      stayKey: draft.stayKey || walk.stayKey,
  };
}

export function dishesForCity(city: DishCity, drafts: Omit<DishDraft, 'city'>[]): DishRecord[] {
  return drafts.map((draft) => makeDish({ ...draft, city }));
}
