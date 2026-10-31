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
import { HAT_YAI_B6, KHAO_SOK_B6, KHAO_YAI_B6, KOH_CHANG_B6, NONG_KHAI_B6, UDON_THANI_B6 } from './dishes-batch6-rest';
import { KANCHANABURI_B6, KHAO_LAK_B6, KHON_KAEN_B6, KOH_KOOD_B6, KOH_LANTA_B6, KOH_LIPE_B6, KOH_PHANGAN_B6, KOH_PHI_PHI_B6, KOH_TAO_B6, PAI_B6 } from './dishes-batch6';
import { STANDALONE_DISHES } from './dishes-batch6-standalone';
import {
  AYUTTHAYA_B7,
  HUA_HIN_B7,
  KOH_PHANGAN_B7,
  KOH_SAMUI_B7,
  KRABI_B7,
  PATTAYA_B7,
  STANDALONE_B7,
} from './dishes-batch7';
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
  ...KANCHANABURI_DISHES,
  ...KANCHANABURI_MORE,
  ...PAI_DISHES,
  ...PAI_MORE,
  ...KHAO_LAK_DISHES,
  ...KHAO_LAK_MORE,
  ...KOH_LANTA_DISHES,
  ...KOH_LANTA_MORE,
  ...KOH_TAO_DISHES,
  ...KOH_TAO_MORE,
  ...KOH_PHANGAN_DISHES,
  ...KOH_PHANGAN_MORE,
  ...KOH_PHI_PHI_DISHES,
  ...KOH_PHI_PHI_MORE,
  ...KOH_LIPE_DISHES,
  ...KOH_LIPE_MORE,
  ...KOH_KOOD_DISHES,
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
  ...KANCHANABURI_B6,
  ...PAI_B6,
  ...KHAO_LAK_B6,
  ...KHON_KAEN_B6,
  ...KOH_KOOD_B6,
  ...KOH_LANTA_B6,
  ...KOH_LIPE_B6,
  ...KOH_PHANGAN_B6,
  ...KOH_PHI_PHI_B6,
  ...KOH_TAO_B6,
  ...HAT_YAI_B6,
  ...KHAO_SOK_B6,
  ...KHAO_YAI_B6,
  ...KOH_CHANG_B6,
  ...NONG_KHAI_B6,
  ...UDON_THANI_B6,
  ...STANDALONE_DISHES,
  ...KRABI_B7,
  ...KOH_SAMUI_B7,
  ...PATTAYA_B7,
  ...HUA_HIN_B7,
  ...AYUTTHAYA_B7,
  ...KOH_PHANGAN_B7,
  ...STANDALONE_B7,
];

export const dishPages: Page[] = ALL_DISHES.map((dish) => dishToPage(dish, ALL_DISHES));

export const DISH_TITLE_CORE: Record<string, string> = Object.fromEntries(
  ALL_DISHES.map((dish) => [dishPath(dish), dishTitleCore(dish)]),
);
