import { CITY_FOOD_ROWS, SIGNATURE_DISHES, type CityFoodRow, type FoodDish } from './food-catalog';
import { BANGKOK_DISHES } from './dishes-bangkok';
import { CHIANG_MAI_DISHES } from './dishes-chiang-mai';
import { AYUTTHAYA_DISHES, CHIANG_RAI_DISHES } from './dishes-north-central';
import { HUA_HIN_DISHES, PATTAYA_DISHES, SUKHOTHAI_DISHES } from './dishes-gulf-sukhothai';
import { HAT_YAI_DISHES, KOH_SAMUI_DISHES } from './dishes-hat-yai-samui';
import { KHON_KAEN_DISHES, NONG_KHAI_DISHES, UDON_THANI_DISHES } from './dishes-isan-cities';
import { KRABI_DISHES, PHUKET_DISHES } from './dishes-south';
import { KANCHANABURI_DISHES, PAI_DISHES, KHAO_LAK_DISHES, KOH_LANTA_DISHES, KOH_TAO_DISHES, KOH_PHANGAN_DISHES, KOH_PHI_PHI_DISHES, KOH_LIPE_DISHES, KOH_KOOD_DISHES } from './dishes-batch3';
import { KANCHANABURI_MORE, PAI_MORE, KHAO_LAK_MORE, KOH_LANTA_MORE, KOH_TAO_MORE, KOH_PHANGAN_MORE, KOH_PHI_PHI_MORE, KOH_LIPE_MORE, KOH_KOOD_MORE } from './dishes-batch4';
import { KHAO_SOK_DISHES, KOH_CHANG_DISHES } from './dishes-batch5';
import { AYUTTHAYA_MORE, CHIANG_RAI_MORE, HUA_HIN_MORE, KHAO_YAI_DISHES, KOH_SAMUI_MORE, KRABI_MORE, PATTAYA_MORE, PHUKET_MORE, SUKHOTHAI_MORE } from './dishes-batch5-rest';
import { UniquePhotos } from './photos';

/** Files that actually show a plated Thai dish, not a street or temple. */
export const DISH_PHOTO_KEYS = new Set([
  'dish-khao-soi',
  'dish-khao-soi-2',
  'dish-pad-kra-pao',
  'dish-tom-yum',
  'dish-som-tum',
  'dish-som-tum-2',
  'dish-pad-thai',
  'dish-massaman',
  'dish-khao-man-gai',
  'dish-khao-man-gai-2',
  'dish-kanom-jeen',
  'dish-kanom-jeen-2',
  'dish-kanom-jeen-crab',
  'dish-boat-noodle',
  'dish-hoi-tod',
  'dish-mango-sticky',
  'dish-mango-sticky-2',
  'dish-guay-jub',
  'dish-sai-ua',
  'dish-nam-prik-ong',
  'dish-khao-kha-moo',
  'dish-oh-aew',
  'dish-gaeng-som',
  'dish-gaeng-som-2',
  'dish-grilled-squid',
  'dish-larb',
  'dish-gai-yang',
  'dish-nam-tok',
  'thai-food-lanna',
  ...[
    ...BANGKOK_DISHES,
    ...CHIANG_MAI_DISHES,
    ...PHUKET_DISHES,
    ...KRABI_DISHES,
    ...CHIANG_RAI_DISHES,
    ...KHON_KAEN_DISHES,
    ...UDON_THANI_DISHES,
    ...NONG_KHAI_DISHES,
    ...AYUTTHAYA_DISHES,
    ...HUA_HIN_DISHES,
    ...HAT_YAI_DISHES,
    ...SUKHOTHAI_DISHES,
    ...PATTAYA_DISHES,
    ...KOH_SAMUI_DISHES,
    ...KANCHANABURI_DISHES,
    ...PAI_DISHES,
    ...KHAO_LAK_DISHES,
    ...KOH_LANTA_DISHES,
    ...KOH_TAO_DISHES,
    ...KOH_PHANGAN_DISHES,
    ...KOH_PHI_PHI_DISHES,
    ...KOH_LIPE_DISHES,
    ...KOH_KOOD_DISHES,
    ...KANCHANABURI_MORE,
    ...PAI_MORE,
    ...KHAO_LAK_MORE,
    ...KOH_LANTA_MORE,
    ...KOH_TAO_MORE,
    ...KOH_PHANGAN_MORE,
    ...KOH_PHI_PHI_MORE,
    ...KOH_LIPE_MORE,
    ...KOH_KOOD_MORE,
    ...KOH_CHANG_DISHES,
    ...KHAO_SOK_DISHES,
    ...KHAO_YAI_DISHES,
    ...PHUKET_MORE,
    ...KOH_SAMUI_MORE,
    ...KRABI_MORE,
    ...HUA_HIN_MORE,
    ...PATTAYA_MORE,
    ...CHIANG_RAI_MORE,
    ...AYUTTHAYA_MORE,
    ...SUKHOTHAI_MORE,
  ]
    .map((dish) => String(dish.photo || '').replace(/^\/photos\//, '').replace(/\.[^.]+$/, ''))
    .filter((key) => key.startsWith('dish-')),
]);

export function photoKey(photo?: string): string {
  return String(photo || '')
    .replace(/^\/photos\//, '')
    .replace(/\.[^.]+$/, '');
}

export function isDishPhoto(photo?: string): boolean {
  return DISH_PHOTO_KEYS.has(photoKey(photo));
}

export function assignExactPhotos<T extends { photo?: string }>(items: T[], bag: UniquePhotos): T[] {
  return items.map((item) => ({ ...item, photo: bag.takeOrNone(item.photo) }));
}

function normalizeDishText(value: string): string {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
}

function dishStem(key: string): string {
  return key.replace(/^dish-/, '').replace(/-\d+$/, '').replace(/-/g, ' ');
}

/** True when the photo key is the same dish as the preferred file or title hint. */
function dishKeyMatchesHint(key: string, dishHint: string): boolean {
  const hay = normalizeDishText(dishHint);
  if (!hay) return false;
  const stem = dishStem(key);
  if (stem.length < 4) return false;
  if (hay.includes(stem)) return true;
  const tokens = stem.split(' ').filter((token) => token.length >= 3);
  return tokens.length >= 2 && tokens.every((token) => new RegExp(`(?:^| )${token}(?: |$)`).test(hay));
}

function takeDishPhoto(bag: UniquePhotos, preferred?: string, hint = ''): string | undefined {
  const exact = bag.takeOrNone(preferred);
  if (exact) return exact;
  const dishHint = `${photoKey(preferred)} ${hint}`;
  const matches = [...DISH_PHOTO_KEYS]
    .filter((key) => dishKeyMatchesHint(key, dishHint))
    .sort((a, b) => dishStem(b).length - dishStem(a).length);
  for (const key of matches) {
    const got = bag.takeOrNone(`/photos/${key}.jpg`);
    if (got) return got;
  }
  return undefined;
}

export function foodRowsFor(path: string, reserved: string[] = []): CityFoodRow[] {
  const bag = new UniquePhotos(reserved);
  return (CITY_FOOD_ROWS[path] || []).map((row) => ({
    ...row,
    photo: takeDishPhoto(bag, row.photo, row.title),
  }));
}

export function signatureDishesFor(reserved: string[] = []): FoodDish[] {
  const bag = new UniquePhotos(reserved);
  return SIGNATURE_DISHES.map((dish) => ({
    ...dish,
    photo: takeDishPhoto(bag, dish.photo, dish.title),
  }));
}
