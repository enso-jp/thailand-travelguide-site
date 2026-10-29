import { BANGKOK_DISHES } from './dishes-bangkok';
import { CHIANG_MAI_DISHES } from './dishes-chiang-mai';
import { AYUTTHAYA_DISHES, CHIANG_RAI_DISHES } from './dishes-north-central';
import { HUA_HIN_DISHES, PATTAYA_DISHES, SUKHOTHAI_DISHES } from './dishes-gulf-sukhothai';
import { HAT_YAI_DISHES, KOH_SAMUI_DISHES } from './dishes-hat-yai-samui';
import { KHON_KAEN_DISHES, NONG_KHAI_DISHES, UDON_THANI_DISHES } from './dishes-isan-cities';
import { KRABI_DISHES, PHUKET_DISHES } from './dishes-south';
import { dishPath, dishTitleCore, dishToPage, type DishRecord } from './dish-model';
import type { Page } from './content';

export const ALL_DISHES: DishRecord[] = [
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
];

export const dishPages: Page[] = ALL_DISHES.map((dish) => dishToPage(dish, ALL_DISHES));

export const DISH_TITLE_CORE: Record<string, string> = Object.fromEntries(
  ALL_DISHES.map((dish) => [dishPath(dish), dishTitleCore(dish)]),
);
