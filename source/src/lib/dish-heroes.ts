/**
 * Unique hero photos for dish pages that used to share a file with another dish page.
 * Keyed by page path. Each value is used by exactly one page.
 */
export const DISH_HEROES: Record<string, string> = {
  '/thai-food/bangkok--bamee-moo-daeng': '/photos/dish-h-bangkok--bamee-moo-daeng.jpg',
  '/thai-food/bangkok--gaeng-keow-wan': '/photos/dish-h-bangkok--gaeng-keow-wan.jpg',
  '/thai-food/bangkok--khao-gaeng': '/photos/dish-h-bangkok--khao-gaeng.jpg',
  '/thai-food/bangkok--khao-kha-moo': '/photos/dish-h-bangkok--khao-kha-moo.jpg',
  '/thai-food/bangkok--mama-tom-yum': '/photos/dish-h-bangkok--mama-tom-yum.jpg',
  '/thai-food/bangkok--roti-mataba': '/photos/dish-h-bangkok--roti-mataba.jpg',
  '/thai-food/bangkok--suki': '/photos/dish-h-bangkok--suki.jpg',
  '/thai-food/chiang-mai--aep': '/photos/dish-h-chiang-mai--aep.jpg',
  '/thai-food/chiang-mai--gaeng-hang-lay': '/photos/dish-h-chiang-mai--gaeng-hang-lay.jpg',
  '/thai-food/chiang-mai--gaeng-khanun': '/photos/dish-h-chiang-mai--gaeng-khanun.jpg',
  '/thai-food/chiang-mai--gaeng-om': '/photos/dish-h-chiang-mai--gaeng-om.jpg',
  '/thai-food/chiang-mai--gaeng-pa': '/photos/dish-h-chiang-mai--gaeng-pa.jpg',
  '/thai-food/chiang-mai--jin-som': '/photos/dish-h-chiang-mai--jin-som.jpg',
  '/thai-food/chiang-mai--khanom-jeen-sao-nam': '/photos/dish-h-chiang-mai--khanom-jeen-sao-nam.jpg',
  '/thai-food/chiang-mai--khanom-tuay': '/photos/dish-h-chiang-mai--khanom-tuay.jpg',
  '/thai-food/chiang-mai--khao-kan-jin': '/photos/dish-h-chiang-mai--khao-kan-jin.jpg',
  '/thai-food/chiang-mai--khao-niew': '/photos/dish-h-chiang-mai--khao-niew.jpg',
  '/thai-food/chiang-mai--khao-soi-islam': '/photos/dish-h-chiang-mai--khao-soi-islam.jpg',
  '/thai-food/chiang-mai--larb-kua': '/photos/dish-h-chiang-mai--larb-kua.jpg',
  '/thai-food/chiang-mai--tod-mun-khao-pod': '/photos/dish-h-chiang-mai--tod-mun-khao-pod.jpg',
  '/thai-food/koh-samui--chaweng-grilled-fish': '/photos/dish-h-koh-samui--chaweng-grilled-fish.jpg',
  '/thai-food/koh-samui--grilled-squid-samui': '/photos/dish-h-koh-samui--grilled-squid-samui.jpg',
  '/thai-food/koh-samui--khao-man-gai-samui': '/photos/dish-h-koh-samui--khao-man-gai-samui.jpg',
  '/thai-food/krabi--gaeng-som-krabi': '/photos/dish-h-krabi--gaeng-som-krabi.jpg',
  '/thai-food/krabi--gaeng-som-railay': '/photos/dish-h-krabi--gaeng-som-railay.jpg',
  '/thai-food/krabi--grilled-squid-ao-nang': '/photos/dish-h-krabi--grilled-squid-ao-nang.jpg',
  '/thai-food/krabi--khao-man-gai-krabi': '/photos/dish-h-krabi--khao-man-gai-krabi.jpg',
  '/thai-food/krabi--mango-sticky-ao-nang': '/photos/dish-h-krabi--mango-sticky-ao-nang.jpg',
  '/thai-food/phuket--gaeng-poo-bai-chaplu': '/photos/dish-h-phuket--gaeng-poo-bai-chaplu.jpg',
  '/thai-food/phuket--gaeng-som-phuket': '/photos/dish-h-phuket--gaeng-som-phuket.jpg',
  '/thai-food/phuket--jok-go-benz': '/photos/dish-h-phuket--jok-go-benz.jpg',
  '/thai-food/phuket--kanom-jeen-nam-ya': '/photos/dish-h-phuket--kanom-jeen-nam-ya.jpg',
};

type HeroDish = { city: string; slug: string; standalone?: boolean; photo?: string };

export function dishHero(dish: HeroDish): string | undefined {
  const path = dish.standalone ? `/thai-food/${dish.slug}` : `/thai-food/${dish.city}--${dish.slug}`;
  return DISH_HEROES[path] ?? dish.photo;
}
