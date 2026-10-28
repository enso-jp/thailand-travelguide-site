import { CITY_FOOD_ROWS, SIGNATURE_DISHES, type CityFoodRow, type FoodDish } from './food-catalog';
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

export function foodRowsFor(path: string, reserved: string[] = []): CityFoodRow[] {
  const bag = new UniquePhotos(reserved);
  return assignExactPhotos(CITY_FOOD_ROWS[path] || [], bag);
}

export function signatureDishesFor(reserved: string[] = []): FoodDish[] {
  const bag = new UniquePhotos(reserved);
  return assignExactPhotos(SIGNATURE_DISHES, bag);
}
