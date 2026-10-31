import { hotelSearchLink, klookTours, stayAreaLink, stayLink, type StayCity } from './partners';
import type { Affiliate, Faq, Fact, Page } from './content';

export type FoodSpot = {
  name: string;
  nameLocal?: string;
  address: string;
  hours?: string;
  price: string;
  note: string;
};

export type DishCity =
  | 'bangkok'
  | 'chiang-mai'
  | 'phuket'
  | 'krabi'
  | 'chiang-rai'
  | 'khon-kaen'
  | 'udon-thani'
  | 'nong-khai'
  | 'ayutthaya'
  | 'hua-hin'
  | 'hat-yai'
  | 'sukhothai'
  | 'pattaya'
  | 'koh-samui'
  | 'kanchanaburi'
  | 'pai'
  | 'khao-lak'
  | 'koh-lanta'
  | 'koh-tao'
  | 'koh-phangan'
  | 'koh-phi-phi'
  | 'koh-lipe'
  | 'koh-kood'
  | 'koh-chang'
  | 'khao-sok'
  | 'khao-yai';

export type DishRecord = {
  city: DishCity;
  slug: string;
  title: string;
  nameLocal: string;
  orderLocal?: string;
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

export const DISH_CITY_META: Record<
  DishCity,
  {
    label: string;
    hub: string;
    geo: { lat: number; lon: number; containedIn: string };
    stayTitle: string;
    stayKicker: string;
    stayBody: string;
    stayHref: () => string;
    stayPhoto: string;
    klookTitle: string;
    klookBody: string;
    klookPhoto: string;
    portraits: { title: string; href: string; photo: string }[];
  }
> = {
  bangkok: {
    label: 'Bangkok',
    hub: '/thai-food/bangkok',
    geo: { lat: 13.746, lon: 100.535, containedIn: 'Bangkok' },
    stayTitle: 'Bangkok stays',
    stayKicker: 'Near the plate',
    stayBody: 'Sleep on the rail that already serves this neighbourhood.',
    stayHref: () => stayLink('bangkok'),
    stayPhoto: '/photos/bangkok.jpg',
    klookTitle: 'Bangkok food tour',
    klookBody: 'Book a walk only if the group will not split on the MRT. The stall still takes cash.',
    klookPhoto: '/photos/thai-food-bangkok-street.jpg',
    portraits: [
      { title: 'Bangkok food', href: '/thai-food/bangkok', photo: '/photos/yaowarat.jpg' },
      { title: 'Yaowarat food walk', href: '/thai-food/yaowarat-chinatown-food-walk', photo: '/photos/chinatown-day.jpg' },
      { title: 'Cooking classes', href: '/thai-food/thai-cooking-classes-bangkok-and-chiang-mai', photo: '/photos/thai-food.jpg' },
      { title: 'Dishes to order', href: '/thai-food/thai-dishes-to-order-first-trip', photo: '/photos/ari.jpg' },
    ],
  },
  'chiang-mai': {
    label: 'Chiang Mai',
    hub: '/thai-food/chiang-mai',
    geo: { lat: 18.788, lon: 98.985, containedIn: 'Chiang Mai' },
    stayTitle: 'Old City stays',
    stayKicker: 'Walk to lunch',
    stayBody: 'Sleep inside the moat if this plate is a lunch walk, not a Grab across town.',
    stayHref: () => stayAreaLink('chiang-mai-old-city'),
    stayPhoto: '/photos/chiang-mai-old-city.jpg',
    klookTitle: 'Chiang Mai cooking class',
    klookBody: 'Book a half-day wok if you want the paste explained. Morning slots beat the lunch clock.',
    klookPhoto: '/photos/thai-food-lanna.jpg',
    portraits: [
      { title: 'Chiang Mai food', href: '/thai-food/chiang-mai', photo: '/photos/night-market-cm.jpg' },
      { title: 'Khao soi and markets', href: '/thai-food/chiang-mai-khao-soi-and-markets', photo: '/photos/chiang-mai.jpg' },
      { title: 'Cooking classes', href: '/thai-food/thai-cooking-classes-bangkok-and-chiang-mai', photo: '/photos/thai-food.jpg' },
      { title: 'Dishes to order', href: '/thai-food/thai-dishes-to-order-first-trip', photo: '/photos/ari.jpg' },
    ],
  },
  phuket: {
    label: 'Phuket',
    hub: '/thai-food/phuket',
    geo: { lat: 7.8804, lon: 98.3923, containedIn: 'Phuket' },
    stayTitle: 'Phuket Town stays',
    stayKicker: 'Walk to lunch',
    stayBody: 'Sleep inland if this plate is a Thalang or Dibuk lunch, not a Patong grill.',
    stayHref: () => stayLink('phuket'),
    stayPhoto: '/photos/phuket.jpg',
    klookTitle: 'Phuket Old Town food',
    klookBody: 'Useful only if you want a guide through the mansions. Thalang is walkable without one.',
    klookPhoto: '/photos/thai-food-southern.jpg',
    portraits: [
      { title: 'Phuket food', href: '/thai-food/phuket', photo: '/photos/kata-and-karon.jpg' },
      { title: 'Old Town food', href: '/thai-food/phuket-old-town-hokkien-and-peranakan-food', photo: '/photos/rawai-and-nai-harn.jpg' },
      { title: 'South and Baba-Nyonya', href: '/thai-food/southern-and-baba-nyonya', photo: '/photos/kamala-and-surin.jpg' },
      { title: 'Dishes to order', href: '/thai-food/thai-dishes-to-order-first-trip', photo: '/photos/ari.jpg' },
    ],
  },
  krabi: {
    label: 'Krabi',
    hub: '/thai-food/krabi',
    geo: { lat: 8.0863, lon: 98.9063, containedIn: 'Krabi' },
    stayTitle: 'Ao Nang stays',
    stayKicker: 'Walk the grills',
    stayBody: 'Sleep in Ao Nang if dinner is the walking street. Sleep in Town if lunch is the plate.',
    stayHref: () => stayAreaLink('ao-nang'),
    stayPhoto: '/photos/krabi.jpg',
    klookTitle: 'Krabi food tour',
    klookBody: 'A town food walk or a Hong Island seat. Confirm the 300 THB park fee.',
    klookPhoto: '/photos/railay.jpg',
    portraits: [
      { title: 'Krabi food', href: '/thai-food/krabi', photo: '/photos/longtail-andaman.jpg' },
      { title: 'Railay', href: '/attractions/railay-beach-and-phra-nang-cave', photo: '/photos/tiger-cave.jpg' },
      { title: 'South and Baba-Nyonya', href: '/thai-food/southern-and-baba-nyonya', photo: '/photos/thai-food-southern.jpg' },
      { title: 'Dishes to order', href: '/thai-food/thai-dishes-to-order-first-trip', photo: '/photos/ari.jpg' },
    ],
  },
  'chiang-rai': {
    label: 'Chiang Rai',
    hub: '/thai-food/chiang-rai',
    geo: { lat: 19.907, lon: 99.831, containedIn: 'Chiang Rai' },
    stayTitle: 'Chiang Rai stays',
    stayKicker: 'Town night bazaar',
    stayBody: 'Sleep in town if this plate is a night-bazaar or clock-tower walk, not a White Temple van.',
    stayHref: () => stayLink('chiang-rai'),
    stayPhoto: '/photos/chiang-rai.jpg',
    klookTitle: 'Chiang Rai food tour',
    klookBody: 'Book a walk only if you already sleep in town. Temple vans are a different ticket.',
    klookPhoto: '/photos/blue-temple.jpg',
    portraits: [
      { title: 'Chiang Rai food', href: '/thai-food/chiang-rai', photo: '/photos/northern.jpg' },
      { title: 'Northern Lanna', href: '/thai-food/northern-lanna', photo: '/photos/thai-food-lanna.jpg' },
      { title: 'Chiang Rai', href: '/chiang-rai', photo: '/photos/chiang-mai.jpg' },
      { title: 'Dishes to order', href: '/thai-food/thai-dishes-to-order-first-trip', photo: '/photos/ari.jpg' },
    ],
  },
  'khon-kaen': {
    label: 'Khon Kaen',
    hub: '/thai-food/khon-kaen',
    geo: { lat: 16.4419, lon: 102.836, containedIn: 'Isan' },
    stayTitle: 'Bangkok stays for Isan rooms',
    stayKicker: 'Or fly into Khon Kaen',
    stayBody: 'Sleep in Khon Kaen if the grill is the trip. Sleep on Sukhumvit if you are still in Bangkok.',
    stayHref: () => stayLink('bangkok'),
    stayPhoto: '/photos/sukhumvit.jpg',
    klookTitle: 'Isan food walks',
    klookBody: 'Useful in Khon Kaen if you are actually there. In Bangkok the MRT is enough.',
    klookPhoto: '/photos/chatuchak.jpg',
    portraits: [
      { title: 'Khon Kaen food', href: '/thai-food/khon-kaen', photo: '/photos/khao-yai.jpg' },
      { title: 'Isan food', href: '/thai-food/isan', photo: '/photos/thai-food-night-markets.jpg' },
      { title: 'Udon Thani food', href: '/thai-food/udon-thani', photo: '/photos/pak-chong.jpg' },
      { title: 'Dishes to order', href: '/thai-food/thai-dishes-to-order-first-trip', photo: '/photos/ari.jpg' },
    ],
  },
  'udon-thani': {
    label: 'Udon Thani',
    hub: '/thai-food/udon-thani',
    geo: { lat: 17.415, lon: 102.787, containedIn: 'Isan' },
    stayTitle: 'Bangkok stays for Isan rooms',
    stayKicker: 'Or fly into Udon',
    stayBody: 'Sleep in Udon if UD Town and the night market are the trip. Sleep in Bangkok if not.',
    stayHref: () => stayLink('bangkok'),
    stayPhoto: '/photos/sukhumvit.jpg',
    klookTitle: 'Isan food walks',
    klookBody: 'Useful in Udon if you are actually there. In Bangkok the MRT is enough.',
    klookPhoto: '/photos/chatuchak.jpg',
    portraits: [
      { title: 'Udon Thani food', href: '/thai-food/udon-thani', photo: '/photos/khao-yai.jpg' },
      { title: 'Isan food', href: '/thai-food/isan', photo: '/photos/thai-food-night-markets.jpg' },
      { title: 'Nong Khai food', href: '/thai-food/nong-khai', photo: '/photos/haew-suwat.jpg' },
      { title: 'Dishes to order', href: '/thai-food/thai-dishes-to-order-first-trip', photo: '/photos/ari.jpg' },
    ],
  },
  'nong-khai': {
    label: 'Nong Khai',
    hub: '/thai-food/nong-khai',
    geo: { lat: 17.878, lon: 102.742, containedIn: 'Isan' },
    stayTitle: 'Bangkok stays for Isan rooms',
    stayKicker: 'Or sleep on the Mekong',
    stayBody: 'Sleep in Nong Khai if nam nuang and the river walk are the trip. Sleep in Udon if not.',
    stayHref: () => stayLink('bangkok'),
    stayPhoto: '/photos/sukhumvit.jpg',
    klookTitle: 'Isan food walks',
    klookBody: 'Useful on the Mekong if you are actually there. In Bangkok the MRT is enough.',
    klookPhoto: '/photos/chatuchak.jpg',
    portraits: [
      { title: 'Nong Khai food', href: '/thai-food/nong-khai', photo: '/photos/khao-yai.jpg' },
      { title: 'Isan food', href: '/thai-food/isan', photo: '/photos/thai-food-night-markets.jpg' },
      { title: 'Khon Kaen food', href: '/thai-food/khon-kaen', photo: '/photos/haew-suwat.jpg' },
      { title: 'Dishes to order', href: '/thai-food/thai-dishes-to-order-first-trip', photo: '/photos/ari.jpg' },
    ],
  },
  ayutthaya: {
    label: 'Ayutthaya',
    hub: '/thai-food/ayutthaya',
    geo: { lat: 14.353, lon: 100.565, containedIn: 'Ayutthaya' },
    stayTitle: 'Ayutthaya stays',
    stayKicker: 'Only if you overnight',
    stayBody: 'Sleep park-side if this plate is a dawn ruin plus lunch. Day-trip if the train is the plan.',
    stayHref: () => stayLink('ayutthaya'),
    stayPhoto: '/photos/ayutthaya.jpg',
    klookTitle: 'Ayutthaya food and bikes',
    klookBody: 'A bicycle is quieter than a combo van. The noodle shop still takes cash.',
    klookPhoto: '/photos/kanchanaburi.jpg',
    portraits: [
      { title: 'Ayutthaya food', href: '/thai-food/ayutthaya', photo: '/photos/sukhothai.jpg' },
      { title: 'Ayutthaya', href: '/ayutthaya', photo: '/photos/wat-mahathat-ayu.jpg' },
      { title: 'Bangkok food', href: '/thai-food/bangkok', photo: '/photos/thai-food-bangkok-street.jpg' },
      { title: 'Dishes to order', href: '/thai-food/thai-dishes-to-order-first-trip', photo: '/photos/ari.jpg' },
    ],
  },
  'hua-hin': {
    label: 'Hua Hin',
    hub: '/thai-food/hua-hin',
    geo: { lat: 12.57, lon: 99.958, containedIn: 'Hua Hin' },
    stayTitle: 'Hua Hin stays',
    stayKicker: 'Town or Khao Takiab',
    stayBody: 'Sleep in town if the night market is dinner. Sleep south if Cicada is the weekend plan.',
    stayHref: () => stayLink('hua-hin'),
    stayPhoto: '/photos/hua-hin.jpg',
    klookTitle: 'Hua Hin food tour',
    klookBody: 'The night market is walkable. Book a tour only if the group will not split.',
    klookPhoto: '/photos/jomtien.jpg',
    portraits: [
      { title: 'Hua Hin food', href: '/thai-food/hua-hin', photo: '/photos/pattaya.jpg' },
      { title: 'Hua Hin', href: '/hua-hin', photo: '/photos/khao-lak.jpg' },
      { title: 'Night markets', href: '/thai-food/night-markets', photo: '/photos/thai-food-night-markets.jpg' },
      { title: 'Dishes to order', href: '/thai-food/thai-dishes-to-order-first-trip', photo: '/photos/ari.jpg' },
    ],
  },
  'hat-yai': {
    label: 'Hat Yai',
    hub: '/thai-food/hat-yai',
    geo: { lat: 7.008, lon: 100.477, containedIn: 'Songkhla' },
    stayTitle: 'Phuket stays if you fly on',
    stayKicker: 'Hat Yai is a food city',
    stayBody: 'Sleep in Hat Yai if fried chicken and dim sum are the trip. Do not treat it as a beach hop.',
    stayHref: () => stayLink('phuket'),
    stayPhoto: '/photos/phuket.jpg',
    klookTitle: 'South Thailand food',
    klookBody: 'Hat Yai is a rail and food city. Island boats are a different ticket.',
    klookPhoto: '/photos/thai-food-southern.jpg',
    portraits: [
      { title: 'Hat Yai food', href: '/thai-food/hat-yai', photo: '/photos/koh-lipe.jpg' },
      { title: 'South and Baba-Nyonya', href: '/thai-food/southern-and-baba-nyonya', photo: '/photos/ferry-gulf.jpg' },
      { title: 'Phuket food', href: '/thai-food/phuket', photo: '/photos/kata-and-karon.jpg' },
      { title: 'Dishes to order', href: '/thai-food/thai-dishes-to-order-first-trip', photo: '/photos/ari.jpg' },
    ],
  },
  sukhothai: {
    label: 'Sukhothai',
    hub: '/thai-food/sukhothai',
    geo: { lat: 17.017, lon: 99.703, containedIn: 'Sukhothai' },
    stayTitle: 'Sukhothai stays',
    stayKicker: 'Old town first',
    stayBody: 'Sleep in Old Sukhothai if this bowl is lunch after the dawn bicycle.',
    stayHref: () => stayLink('sukhothai'),
    stayPhoto: '/photos/sukhothai-mahathat.jpg',
    klookTitle: 'Sukhothai park and food',
    klookBody: 'A bicycle is the right machine. The noodle room still takes cash.',
    klookPhoto: '/photos/sukhothai-lake.jpg',
    portraits: [
      { title: 'Sukhothai food', href: '/thai-food/sukhothai', photo: '/photos/si-satchanalai.jpg' },
      { title: 'Sukhothai', href: '/sukhothai', photo: '/photos/wat-sa-si.jpg' },
      { title: 'Northern Lanna', href: '/thai-food/northern-lanna', photo: '/photos/thai-food-lanna.jpg' },
      { title: 'Dishes to order', href: '/thai-food/thai-dishes-to-order-first-trip', photo: '/photos/ari.jpg' },
    ],
  },
  pattaya: {
    label: 'Pattaya',
    hub: '/thai-food/pattaya',
    geo: { lat: 12.9236, lon: 100.8825, containedIn: 'Pattaya' },
    stayTitle: 'Pattaya stays',
    stayKicker: 'Jomtien or Wongamat',
    stayBody: 'Sleep on the sand you will actually use. Walking Street is a taxi, not a hotel filter.',
    stayHref: () => stayLink('pattaya'),
    stayPhoto: '/photos/pattaya.jpg',
    klookTitle: 'Pattaya food and Koh Larn',
    klookBody: 'Ferry or a Sanctuary timed entry. Read whether transfer is included.',
    klookPhoto: '/photos/koh-larn.jpg',
    portraits: [
      { title: 'Pattaya food', href: '/thai-food/pattaya', photo: '/photos/jomtien.jpg' },
      { title: 'Pattaya', href: '/pattaya', photo: '/photos/sanctuary-truth.jpg' },
      { title: 'Hua Hin food', href: '/thai-food/hua-hin', photo: '/photos/hua-hin.jpg' },
      { title: 'Dishes to order', href: '/thai-food/thai-dishes-to-order-first-trip', photo: '/photos/ari.jpg' },
    ],
  },
  'koh-samui': {
    label: 'Koh Samui',
    hub: '/thai-food/koh-samui',
    geo: { lat: 9.512, lon: 100.013, containedIn: 'Koh Samui' },
    stayTitle: 'Chaweng stays',
    stayKicker: 'Walk to dinner',
    stayBody: 'Sleep on the strip if the walking street is night one. Bophut if Friday is the plan.',
    stayHref: () => stayAreaLink('chaweng'),
    stayPhoto: '/photos/chaweng.jpg',
    klookTitle: 'Koh Samui food tour',
    klookBody: 'A cooking class or an Ang Thong seat. Confirm the 300 THB park fee.',
    klookPhoto: '/photos/ang-thong.jpg',
    portraits: [
      { title: 'Koh Samui food', href: '/thai-food/koh-samui', photo: '/photos/lamai.jpg' },
      { title: 'Chaweng', href: '/koh-samui/chaweng', photo: '/photos/chaweng-night.jpg' },
      { title: 'Koh Samui', href: '/koh-samui', photo: '/photos/koh-samui.jpg' },
      { title: 'Dishes to order', href: '/thai-food/thai-dishes-to-order-first-trip', photo: '/photos/ari.jpg' },
    ],
  },
  'kanchanaburi': {
    label: 'Kanchanaburi',
    hub: '/thai-food/kanchanaburi',
    geo: { lat: 14.0228, lon: 99.5328, containedIn: 'Kanchanaburi' },
    stayTitle: 'Kanchanaburi stays',
    stayKicker: 'Town or river',
    stayBody: 'Sleep in town if the night market is dinner. Sleep on the river if the bridge is the trip.',
    stayHref: () => stayLink('kanchanaburi'),
    stayPhoto: '/photos/erawan.jpg',
    klookTitle: 'Kanchanaburi day trips',
    klookBody: 'Erawan and the railway are the tickets. Dinner stays in town.',
    klookPhoto: '/photos/erawan-tiers.jpg',
    portraits: [
      { title: 'Kanchanaburi food', href: '/thai-food/kanchanaburi', photo: '/photos/death-railway.jpg' },
      { title: 'Kanchanaburi', href: '/kanchanaburi', photo: '/photos/kanchanaburi.jpg' },
      { title: 'Bangkok food', href: '/thai-food/bangkok', photo: '/photos/thai-food-bangkok-street.jpg' },
      { title: 'Dishes to order', href: '/thai-food/thai-dishes-to-order-first-trip', photo: '/photos/ari.jpg' },
    ],
  },
  'pai': {
    label: 'Pai',
    hub: '/thai-food/pai',
    geo: { lat: 19.3583, lon: 98.4405, containedIn: 'Mae Hong Son' },
    stayTitle: 'Pai stays',
    stayKicker: 'Walk to Walking Street',
    stayBody: 'Sleep in town if the night stalls are dinner. Valley huts need a scooter.',
    stayHref: () => stayLink('pai'),
    stayPhoto: '/photos/pai-canyon.jpg',
    klookTitle: 'Pai tours',
    klookBody: 'Canyon and hot spring vans. Lunch is still a town bowl.',
    klookPhoto: '/photos/northern.jpg',
    portraits: [
      { title: 'Pai food', href: '/thai-food/pai', photo: '/photos/thai-food-lanna.jpg' },
      { title: 'Pai', href: '/pai', photo: '/photos/pai.jpg' },
      { title: 'Chiang Mai food', href: '/thai-food/chiang-mai', photo: '/photos/night-market-cm.jpg' },
      { title: 'Dishes to order', href: '/thai-food/thai-dishes-to-order-first-trip', photo: '/photos/ari.jpg' },
    ],
  },
  'khao-lak': {
    label: 'Khao Lak',
    hub: '/thai-food/khao-lak',
    geo: { lat: 8.6367, lon: 98.2487, containedIn: 'Phang Nga' },
    stayTitle: 'Khao Lak stays',
    stayKicker: 'Bang Niang first',
    stayBody: 'Sleep near Bang Niang if the market is dinner. Check the four market days.',
    stayHref: () => stayLink('khao-lak'),
    stayPhoto: '/photos/khao-lak-resort.jpg',
    klookTitle: 'Similan boats',
    klookBody: 'Similan day boats run mid-October to mid-May. Lunch is on the boat.',
    klookPhoto: '/photos/similan.jpg',
    portraits: [
      { title: 'Khao Lak food', href: '/thai-food/khao-lak', photo: '/photos/bang-niang.jpg' },
      { title: 'Khao Lak', href: '/khao-lak', photo: '/photos/khao-lak.jpg' },
      { title: 'Phuket food', href: '/thai-food/phuket', photo: '/photos/thai-food-southern.jpg' },
      { title: 'Dishes to order', href: '/thai-food/thai-dishes-to-order-first-trip', photo: '/photos/ari.jpg' },
    ],
  },
  'koh-lanta': {
    label: 'Koh Lanta',
    hub: '/thai-food/koh-lanta',
    geo: { lat: 7.5306, lon: 99.0428, containedIn: 'Krabi' },
    stayTitle: 'Koh Lanta stays',
    stayKicker: 'Saladan or the west coast',
    stayBody: 'Sleep near Saladan if the curry rooms are dinner. Old Town is a day ride.',
    stayHref: () => stayLink('koh-lanta'),
    stayPhoto: '/photos/longtail-andaman.jpg',
    klookTitle: 'Koh Lanta boats',
    klookBody: 'Four Islands boats leave from Saladan. Confirm the park fee.',
    klookPhoto: '/photos/thai-food-night-markets.jpg',
    portraits: [
      { title: 'Koh Lanta food', href: '/thai-food/koh-lanta', photo: '/photos/thai-food-southern.jpg' },
      { title: 'Koh Lanta', href: '/koh-lanta', photo: '/photos/koh-lanta.jpg' },
      { title: 'Krabi food', href: '/thai-food/krabi', photo: '/photos/krabi.jpg' },
      { title: 'Dishes to order', href: '/thai-food/thai-dishes-to-order-first-trip', photo: '/photos/ari.jpg' },
    ],
  },
  'koh-tao': {
    label: 'Koh Tao',
    hub: '/thai-food/koh-tao',
    geo: { lat: 10.0956, lon: 99.8404, containedIn: 'Surat Thani' },
    stayTitle: 'Koh Tao stays',
    stayKicker: 'Sairee or Mae Haad',
    stayBody: 'Sleep in Sairee if Blue Chair and Duck 995 are lunch. Mae Haad for the pier.',
    stayHref: () => stayLink('koh-tao'),
    stayPhoto: '/photos/sairee-beach.jpg',
    klookTitle: 'Koh Tao snorkel boats',
    klookBody: 'Round-island boats include lunch. Dive courses are a separate desk.',
    klookPhoto: '/photos/ferry-gulf.jpg',
    portraits: [
      { title: 'Koh Tao food', href: '/thai-food/koh-tao', photo: '/photos/thai-food-night-markets.jpg' },
      { title: 'Koh Tao', href: '/koh-tao', photo: '/photos/koh-tao.jpg' },
      { title: 'Koh Samui food', href: '/thai-food/koh-samui', photo: '/photos/chaweng.jpg' },
      { title: 'Dishes to order', href: '/thai-food/thai-dishes-to-order-first-trip', photo: '/photos/ari.jpg' },
    ],
  },
  'koh-phangan': {
    label: 'Koh Phangan',
    hub: '/thai-food/koh-phangan',
    geo: { lat: 9.7126, lon: 100.0132, containedIn: 'Surat Thani' },
    stayTitle: 'Koh Phangan stays',
    stayKicker: 'Thong Sala or Haad Rin',
    stayBody: 'Sleep near Thong Sala if Phantip is dinner. Haad Rin fills on Full Moon week.',
    stayHref: () => stayLink('koh-phangan'),
    stayPhoto: '/photos/ferry-gulf.jpg',
    klookTitle: 'Ang Thong and island boats',
    klookBody: 'Ang Thong day boats leave from Samui and Phangan. Confirm the 300 THB park fee.',
    klookPhoto: '/photos/ang-thong.jpg',
    portraits: [
      { title: 'Koh Phangan food', href: '/thai-food/koh-phangan', photo: '/photos/thai-food-night-markets.jpg' },
      { title: 'Koh Phangan', href: '/koh-phangan', photo: '/photos/koh-phangan.jpg' },
      { title: 'Koh Samui food', href: '/thai-food/koh-samui', photo: '/photos/lamai.jpg' },
      { title: 'Dishes to order', href: '/thai-food/thai-dishes-to-order-first-trip', photo: '/photos/ari.jpg' },
    ],
  },
  'koh-phi-phi': {
    label: 'Koh Phi Phi',
    hub: '/thai-food/koh-phi-phi',
    geo: { lat: 7.7407, lon: 98.7784, containedIn: 'Krabi' },
    stayTitle: 'Phi Phi stays',
    stayKicker: 'Tonsai or Long Beach',
    stayBody: 'Book Tonsai if dinner is the village. Long Beach if you want sleep.',
    stayHref: () => stayLink('krabi'),
    stayPhoto: '/photos/long-beach-pp.jpg',
    klookTitle: 'Phi Phi boats',
    klookBody: 'Maya Bay boats include a park fee. Eat back in Tonsai.',
    klookPhoto: '/photos/maya-bay.jpg',
    portraits: [
      { title: 'Koh Phi Phi food', href: '/thai-food/koh-phi-phi', photo: '/photos/tonsai.jpg' },
      { title: 'Koh Phi Phi', href: '/koh-phi-phi', photo: '/photos/phi-phi.jpg' },
      { title: 'Krabi food', href: '/thai-food/krabi', photo: '/photos/krabi.jpg' },
      { title: 'Dishes to order', href: '/thai-food/thai-dishes-to-order-first-trip', photo: '/photos/ari.jpg' },
    ],
  },
  'koh-lipe': {
    label: 'Koh Lipe',
    hub: '/thai-food/koh-lipe',
    geo: { lat: 6.4889, lon: 99.3046, containedIn: 'Satun' },
    stayTitle: 'Koh Lipe stays',
    stayKicker: 'Walk to Walking Street',
    stayBody: 'Sleep near Walking Street if dinner is the strip. Sunrise Beach is a short walk.',
    stayHref: () => stayLink('koh-lipe'),
    stayPhoto: '/photos/longtail-andaman.jpg',
    klookTitle: 'Lipe snorkel boats',
    klookBody: 'Longtails to Koh Adang and Rawi. Tarutao park fee applies.',
    klookPhoto: '/photos/thai-food.jpg',
    portraits: [
      { title: 'Koh Lipe food', href: '/thai-food/koh-lipe', photo: '/photos/thai-food-southern.jpg' },
      { title: 'Koh Lipe', href: '/koh-lipe', photo: '/photos/koh-lipe.jpg' },
      { title: 'Hat Yai food', href: '/thai-food/hat-yai', photo: '/photos/thai-food-night-markets.jpg' },
      { title: 'Dishes to order', href: '/thai-food/thai-dishes-to-order-first-trip', photo: '/photos/ari.jpg' },
    ],
  },
  'koh-kood': {
    label: 'Koh Kood',
    hub: '/thai-food/koh-kood',
    geo: { lat: 11.6545, lon: 102.5634, containedIn: 'Trat' },
    stayTitle: 'Koh Kood stays',
    stayKicker: 'Klong Chao',
    stayBody: 'Sleep at Klong Chao if dinner is near the hotels. Ao Yai is a lunch drive.',
    stayHref: () => stayLink('koh-kood'),
    stayPhoto: '/photos/klong-chao-fall.jpg',
    klookTitle: 'Koh Kood boats',
    klookBody: 'Speedboats from Laem Sok take about an hour. Rough seas May to October.',
    klookPhoto: '/photos/koh-kood-boat.jpg',
    portraits: [
      { title: 'Koh Kood food', href: '/thai-food/koh-kood', photo: '/photos/bang-bao-kood.jpg' },
      { title: 'Koh Kood', href: '/koh-kood', photo: '/photos/koh-kood.jpg' },
      { title: 'Koh Chang', href: '/koh-chang', photo: '/photos/koh-chang.jpg' },
      { title: 'Dishes to order', href: '/thai-food/thai-dishes-to-order-first-trip', photo: '/photos/ari.jpg' },
    ],
  },
  'koh-chang': {
    label: 'Koh Chang',
    hub: '/thai-food/koh-chang',
    geo: { lat: 12.1036, lon: 102.3518, containedIn: 'Trat' },
    stayTitle: 'Koh Chang stays',
    stayKicker: 'White Sand or Klong Prao',
    stayBody: 'Sleep on the west-coast beach where dinner actually is. The pier songthaew thins out after dark.',
    stayHref: () => stayLink('koh-chang'),
    stayPhoto: '/photos/white-sand-chang.jpg',
    klookTitle: 'Koh Chang boats',
    klookBody: 'Name the Trat pier on the ticket. Dinner stays on the island.',
    klookPhoto: '/photos/ferry-gulf.jpg',
    portraits: [
      { title: 'Koh Chang', href: '/koh-chang', photo: '/photos/koh-chang.jpg' },
      { title: 'Koh Kood food', href: '/thai-food/koh-kood', photo: '/photos/koh-kood.jpg' },
      { title: 'Koh Kood', href: '/koh-kood', photo: '/photos/bang-bao-kood.jpg' },
      { title: 'Dishes to order', href: '/thai-food/thai-dishes-to-order-first-trip', photo: '/photos/ari.jpg' },
    ],
  },
  'khao-sok': {
    label: 'Khao Sok',
    hub: '/thai-food/khao-sok',
    geo: { lat: 8.91, lon: 98.53, containedIn: 'Surat Thani' },
    stayTitle: 'Khao Sok stays',
    stayKicker: 'Village or lake',
    stayBody: 'Sleep in the Highway 401 village for restaurants. Sleep on a raft if dawn on the lake is the point.',
    stayHref: () => hotelSearchLink('Khao Sok'),
    stayPhoto: '/photos/khao-sok.jpg',
    klookTitle: 'Khao Sok lake boats',
    klookBody: 'Book the lake boat with the village transfer. Lunch on the raft is a different ticket from a village curry.',
    klookPhoto: '/photos/cheow-lan.jpg',
    portraits: [
      { title: 'Khao Sok', href: '/khao-sok', photo: '/photos/cheow-lan.jpg' },
      { title: 'Cheow Lan Lake', href: '/attractions/cheow-lan-lake-khao-sok', photo: '/photos/khao-sok.jpg' },
      { title: 'Krabi food', href: '/thai-food/krabi', photo: '/photos/krabi.jpg' },
      { title: 'Dishes to order', href: '/thai-food/thai-dishes-to-order-first-trip', photo: '/photos/ari.jpg' },
    ],
  },
  'khao-yai': {
    label: 'Khao Yai',
    hub: '/thai-food/khao-yai',
    geo: { lat: 14.439, lon: 101.372, containedIn: 'Nakhon Ratchasima' },
    stayTitle: 'Khao Yai stays',
    stayKicker: 'Pak Chong',
    stayBody: 'Sleep in Pak Chong if the night market is dinner. Park-edge rooms need the car you already booked.',
    stayHref: () => hotelSearchLink('Khao Yai'),
    stayPhoto: '/photos/pak-chong.jpg',
    klookTitle: 'Khao Yai park vans',
    klookBody: 'Dawn loops and night-safari seats. The 400 THB foreign park fee is often extra.',
    klookPhoto: '/photos/haew-suwat.jpg',
    portraits: [
      { title: 'Khao Yai', href: '/khao-yai', photo: '/photos/khao-yai.jpg' },
      { title: 'Isan food', href: '/thai-food/isan', photo: '/photos/dish-som-tum.jpg' },
      { title: 'Bangkok food', href: '/thai-food/bangkok', photo: '/photos/thai-food-bangkok-street.jpg' },
      { title: 'Dishes to order', href: '/thai-food/thai-dishes-to-order-first-trip', photo: '/photos/ari.jpg' },
    ],
  },
};

export function dishPath(dish: Pick<DishRecord, 'city' | 'slug'>): string {
  return `/thai-food/${dish.city}--${dish.slug}`;
}

export function cityLabel(city: DishCity): string {
  return DISH_CITY_META[city].label;
}

export function cityHubPath(city: DishCity): string {
  return DISH_CITY_META[city].hub;
}

export function dishTitleCore(dish: DishRecord): string {
  return `${dish.title} in ${cityLabel(dish.city)}: ${dish.hook}`;
}

function stayAffiliate(dish: DishRecord): Affiliate {
  if (dish.city === 'chiang-mai') {
    const nimman = dish.stayKey === 'nimmanhaemin';
    return {
      title: nimman ? 'Nimman stays' : 'Old City stays',
      kicker: nimman ? 'West of the moat' : 'Walk to lunch',
      body: nimman
        ? 'Sleep west of the moat if the plate is a Nimman table after a market morning.'
        : 'Sleep inside the moat if this plate is a lunch walk, not a Grab across town.',
      href: nimman ? stayAreaLink('nimmanhaemin') : stayAreaLink('chiang-mai-old-city'),
      cta: 'Search stays',
      photo: nimman ? '/photos/nimman.jpg' : '/photos/chiang-mai-old-city.jpg',
      partner: 'stay',
    };
  }
  if (dish.city === 'bangkok') {
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
  const meta = DISH_CITY_META[dish.city];
  return {
    title: meta.stayTitle,
    kicker: meta.stayKicker,
    body: meta.stayBody,
    href: meta.stayHref(),
    cta: 'Search stays',
    photo: meta.stayPhoto,
    partner: 'stay',
  };
}

export function dishToPage(dish: DishRecord, catalog: DishRecord[]): Page {
  const path = dishPath(dish);
  const city = cityLabel(dish.city);
  const hub = cityHubPath(dish.city);
  const meta = DISH_CITY_META[dish.city];
  const related = dish.related
    .map((slug) => catalog.find((row) => row.city === dish.city && row.slug === slug))
    .filter((row): row is DishRecord => Boolean(row));
  const stay = stayAffiliate(dish);

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
    geo: meta.geo,
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
          `**Thai name:** ${dish.orderName} (${dish.orderLocal ?? dish.nameLocal}).`,
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
            `**${spot.name}**${spot.nameLocal ? ` (${spot.nameLocal})` : ''}, ${spot.address}.${spot.hours ? ` ${spot.hours}.` : ''} ${spot.price}. ${spot.note}`,
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
    portraits: meta.portraits.map((row) =>
      row.title === meta.portraits[1].title ? { ...row, title: dish.walkLabel, href: dish.walkHref } : row,
    ),
    affiliates: [
      stay,
      {
        title: meta.klookTitle,
        kicker: 'Klook',
        body: meta.klookBody,
        href: klookTours(dish.klookQuery),
        cta: 'See tickets',
        photo: meta.klookPhoto,
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
    find: `${dish.title} ${dish.orderLocal ?? dish.nameLocal} ${dish.nameLocal} ${dish.city} ${dish.orderName}`,
    letter: dish.title[0].toUpperCase(),
  }));
}
