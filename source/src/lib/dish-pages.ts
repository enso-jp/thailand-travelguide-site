import { BANGKOK_DISHES } from './dishes-bangkok';
import { CHIANG_MAI_DISHES } from './dishes-chiang-mai';
import { dishPath, dishTitleCore, dishToPage, type DishRecord } from './dish-model';
import type { Page } from './content';

export const ALL_DISHES: DishRecord[] = [...BANGKOK_DISHES, ...CHIANG_MAI_DISHES];

export const dishPages: Page[] = ALL_DISHES.map((dish) => dishToPage(dish, ALL_DISHES));

export const DISH_TITLE_CORE: Record<string, string> = Object.fromEntries(
  ALL_DISHES.map((dish) => [dishPath(dish), dishTitleCore(dish)]),
);
