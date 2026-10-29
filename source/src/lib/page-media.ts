import { foodRowsFor, signatureDishesFor } from './dish-photos';
import { FOOD_CITY_CARDS } from './food-catalog';
import { INTEREST_GROUPS } from './nav';
import { UniquePhotos } from './photos';
import { attractionsFor, isPlacePage, PLACE_META } from './place-attractions';
import { REGIONS, type Region } from './regions';

type PageLike = {
  path: string;
  photo?: string;
  portraits?: { photo?: string; title?: string; href?: string }[];
  affiliates?: { photo?: string; title?: string; kicker?: string; body?: string }[];
  days?: { photo?: string; title?: string; body?: string }[];
  sections?: { cards?: { photo?: string; kicker?: string; title?: string; href?: string }[] }[];
};

export const VISIBLE_ATTRACTIONS = 6;

export type HomeStory = { href: string; kicker: string; title: string; when: string; photo: string; summary?: string };
export type HomeTile = { href: string; label: string; photo: string };
export type PlanTool = { href: string; title: string; text: string; icon: string };

export type HomeMedia = {
  lead: { href: string; photo: string; kicker: string; title: string; when: string };
  sheet: HomeStory[];
  collage: Array<HomeStory & { spot: string }>;
  regions: Array<Region & { photos: Array<{ name: string; href: string; photo: string }>; swipePhoto: string }>;
  topPlaces: Array<{ name: string; href: string; photo: string; dots: number; line: string }>;
  plan: PlanTool[];
  trips: PlanTool[];
  interests: HomeTile[];
  stories: HomeStory[];
};

export function buildHomeMedia(reserved: string[] = []): HomeMedia {
  const bag = new UniquePhotos(reserved);
  const lead = {
    href: '/bangkok',
    photo: bag.take('/photos/bangkok.jpg'),
    kicker: 'Land in the capital',
    title: 'Thailand, planned from the ground',
    when: '12 min read',
  };
  const sheet: HomeStory[] = [
    { href: '/plan/when-to-go', kicker: 'Seasons', title: 'Andaman or Gulf, not both', when: 'Nov to Apr vs Jan to Sep', photo: bag.take('/photos/phuket.jpg') },
    { href: '/itineraries/first-week-7-days', kicker: 'First week', title: 'Bangkok plus one fork', when: '7 days', photo: bag.take('/photos/sukhumvit.jpg') },
    { href: '/thai-food', kicker: 'Food', title: 'Eat by city, not by slogan', when: '60 to 150 THB plates', photo: bag.take('/photos/thai-food.jpg') },
  ];
  const collage = [
    { spot: 'collage-lead', href: '/bangkok', kicker: 'Landing city', title: 'Bangkok', when: '', photo: bag.take('/photos/old-city.jpg') },
    { spot: 'collage-top', href: '/chiang-mai', kicker: 'North hub', title: 'Chiang Mai', when: '', photo: bag.take('/photos/chiang-mai.jpg') },
    { spot: 'collage-mid', href: '/phuket', kicker: 'Andaman', title: 'Phuket', when: '', photo: bag.take('/photos/patong-night.jpg') },
    { spot: 'collage-wide', href: '/koh-samui', kicker: 'Gulf', title: 'Koh Samui', when: '', photo: bag.take('/photos/koh-samui.jpg') },
    { spot: 'collage-end', href: '/khao-sok', kicker: 'Karst lake', title: 'Khao Sok', when: '', photo: bag.take('/photos/khao-sok.jpg') },
  ];
  const regions = REGIONS.map((region) => ({
    ...region,
    photos: region.places.slice(0, 5).map((place) => ({
      ...place,
      photo: bag.take(place.photo),
    })),
    swipePhoto: bag.take(region.photo),
  }));
  const topPlaces = [
    { name: 'Bangkok', href: '/bangkok', photo: bag.take('/photos/wat-arun-night.jpg'), dots: 5, line: 'BTS hotel strips, river wats, two airports.' },
    { name: 'Chiang Mai', href: '/chiang-mai', photo: bag.take('/photos/chiang-mai-old-city.jpg'), dots: 5, line: 'Moat temples, khao soi at lunch, one mountain day.' },
    { name: 'Phuket', href: '/phuket', photo: bag.take('/photos/kata-and-karon.jpg'), dots: 5, line: 'West-coast sand. November to April.' },
    { name: 'Koh Samui', href: '/koh-samui', photo: bag.take('/photos/chaweng.jpg'), dots: 4, line: 'USM plus one Gulf island. January to September.' },
    { name: 'Krabi', href: '/krabi', photo: bag.take('/photos/railay.jpg'), dots: 5, line: 'Railay longtails and Ao Nang desks.' },
    { name: 'Khao Sok', href: '/khao-sok', photo: bag.take('/photos/cheow-lan.jpg'), dots: 4, line: 'Cheow Lan raft night. Different door from 401.' },
  ];
  const plan: PlanTool[] = [
    { href: '/plan/when-to-go', title: 'Seasons & Monsoons', text: 'Andaman Nov to Apr. Gulf Jan to Sep.', icon: 'calendar' },
    { href: '/plan/visas-and-tdac', title: 'Visas & TDAC', text: '60-day visa-free for many passports. File TDAC.', icon: 'passport' },
    { href: '/plan/trains-and-ferries', title: 'Airports & Sleeper Trains', text: 'BKK, DMK, and SRT 9 and 10 north.', icon: 'train' },
    { href: '/plan/trains-and-ferries', title: 'Ferries & Island Transfers', text: 'Lomprayah, Seatran, and longtails.', icon: 'ferry' },
    { href: '/plan/grab-and-bts', title: 'Grab, BTS & MRT', text: '2026 BTS tap 17 to 62 THB.', icon: 'metro' },
    { href: '/plan/money-atms-and-promptpay', title: 'Money, SIMs & Scams', text: 'PromptPay, eSIMs, and the closed-palace line.', icon: 'wallet' },
  ];
  const trips: PlanTool[] = [
    { href: '/itineraries/first-week-7-days', title: 'First week', text: 'Bangkok plus Chiang Mai or one coast.', icon: 'route' },
    { href: '/itineraries/best-14-days', title: 'Best 14 days', text: 'Capital, north, then one sea.', icon: 'route' },
    { href: '/itineraries/10-days-classic-thailand', title: 'Classic 10 days', text: 'The usual first spine.', icon: 'route' },
    { href: '/itineraries/2-weeks-andaman-island-hopping', title: 'Andaman hop', text: 'Phuket, Krabi, Phi Phi. One sea.', icon: 'ferry' },
    { href: '/itineraries/10-days-gulf-islands-samui-phangan-tao', title: 'Gulf islands', text: 'Samui, Phangan, Tao. Jan to Sep.', icon: 'ferry' },
    { href: '/itineraries/7-days-northern-thailand-loop', title: 'Northern loop', text: 'Chiang Mai first, then one fork.', icon: 'route' },
  ];
  const interests: HomeTile[] = [
    { href: '/thai-food', label: 'Thai food', photo: bag.take('/photos/thai-food-bangkok-street.jpg') },
    { href: '/interests/beaches-and-island-hopping', label: 'Beaches and islands', photo: bag.take('/photos/phi-phi.jpg') },
    { href: '/interests/temples-and-history', label: 'Temples and history', photo: bag.take('/photos/grand-palace.jpg') },
    { href: '/interests/nightlife', label: 'Nightlife', photo: bag.take('/photos/nightlife.jpg') },
    { href: '/interests/resort-living', label: 'Resort living', photo: bag.take('/photos/resort.jpg') },
    { href: '/interests/diving-and-snorkeling', label: 'Diving and snorkeling', photo: bag.take('/photos/koh-tao.jpg') },
    { href: '/interests/muay-thai-and-fitness-camps', label: 'Muay Thai', photo: bag.take('/photos/lumphini.jpg') },
    { href: '/interests/thai-massage-and-spas', label: 'Massage and spas', photo: bag.take('/photos/wat-pho.jpg') },
  ];
  const stories: HomeStory[] = [
    { href: '/plan/monsoon-and-burn-season', kicker: 'Weather', title: 'Monsoon flips and burn-season haze', when: 'Updated 2026', photo: bag.take('/photos/khao-lak.jpg'), summary: 'Which coast is open, and when Chiang Mai air is a problem.' },
    { href: '/attractions/grand-palace-and-wat-phra-kaew', kicker: 'Bangkok', title: 'Grand Palace morning, then Wat Pho', when: '500 THB', photo: bag.take('/photos/jim-thompson.jpg'), summary: 'Mani Noppharat Gate, dress code, and the closed-palace scam.' },
    { href: '/attractions/phi-phi-islands-and-maya-bay', kicker: 'Andaman', title: 'Maya Bay with the park fee on the voucher', when: '400 THB extra', photo: bag.take('/photos/longtail-andaman.jpg'), summary: 'One boat day from Phuket or Krabi. Not both.' },
    { href: '/thai-food/yaowarat-chinatown-food-walk', kicker: 'Food', title: 'Yaowarat after 18:00 from Wat Mangkon', when: 'Monday rest', photo: bag.take('/photos/yaowarat.jpg'), summary: 'Guay jub, Texas Lane, and fried dough. Cash still wins.' },
    { href: '/khao-lak/similan-and-surin-islands', kicker: 'Parks', title: 'Similan boats from Tab Lamu', when: '15 Oct to 15 May', photo: bag.take('/photos/ferry-gulf.jpg'), summary: '500 THB park fee. Confirm it is in the Klook price.' },
    { href: '/interests/solo-and-first-time-travel', kicker: 'First trip', title: 'Grab, BTS tap-in, and scams to skip', when: 'Practical', photo: bag.take('/photos/bts.jpg'), summary: 'The apps and the tuk-tuk lines that waste a first morning.' },
  ];
  return { lead, sheet, collage, regions, topPlaces, plan, trips, interests, stories };
}

export function homePhotoList(): string[] {
  const m = buildHomeMedia();
  return [
    m.lead.photo,
    ...m.sheet.map((row) => row.photo),
    ...m.collage.map((row) => row.photo),
    ...m.regions.flatMap((region) => [...region.photos.map((p) => p.photo), region.swipePhoto]),
    ...m.topPlaces.map((row) => row.photo),
    ...m.interests.map((row) => row.photo),
    ...m.stories.map((row) => row.photo),
  ];
}

export function destHubPhotoList(page: PageLike): string[] {
  const home = buildHomeMedia(page.photo ? [page.photo] : []);
  const used = [
    page.photo || '',
    ...home.regions.flatMap((region) => [...region.photos.map((place) => place.photo), region.swipePhoto]),
  ].filter(Boolean);
  const bag = new UniquePhotos(used);
  const portraits = (page.portraits || []).map((row) => bag.takeOrNone(row.photo)).filter(Boolean) as string[];
  return [...used, ...portraits];
}

export function foodHubPhotoList(page: PageLike): string[] {
  const reserved = page.photo ? [page.photo] : [];
  const bag = new UniquePhotos(reserved);
  const cities = FOOD_CITY_CARDS.map((card) => bag.takeOrNone(card.photo)).filter(Boolean) as string[];
  const dishes = signatureDishesFor([...reserved, ...cities])
    .map((dish) => dish.photo)
    .filter(Boolean) as string[];
  return [page.photo, ...cities, ...dishes].filter(Boolean) as string[];
}

export function interestHubPhotoList(page: PageLike): string[] {
  const bag = new UniquePhotos(page.photo ? [page.photo] : []);
  const tiles = INTEREST_GROUPS.flatMap((group) => group.items.map((item) => bag.take(item.photo)));
  return [page.photo, ...tiles].filter(Boolean) as string[];
}

export function placePhotoList(page: PageLike): string[] {
  const reserved = page.photo ? [page.photo] : [];
  const bag = new UniquePhotos(reserved);
  const attractions = bag.takeBatch(attractionsFor(page.path), (row) => `${page.path} ${row.name} ${row.href}`).map((r) => r.photo);
  const portraits = bag.takeBatch(page.portraits || [], (row) => `${page.path} ${row.title || ''} ${row.href || ''}`).map((r) => r.photo);
  const affiliates = bag.takeBatch(page.affiliates || [], (row) => `${page.path} ${row.title || ''} ${row.kicker || ''} ${row.body || ''}`).map((r) => r.photo);
  return [page.photo, ...attractions, ...portraits, ...affiliates].filter(Boolean) as string[];
}

export function foodGuidePhotoList(page: PageLike): string[] {
  const reserved = page.photo ? [page.photo] : [];
  const rows = foodRowsFor(page.path, reserved)
    .map((row) => row.photo)
    .filter(Boolean) as string[];
  const bag = new UniquePhotos([...reserved, ...rows]);
  const portraits = bag.takeBatch(page.portraits || [], (row) => `${page.path} ${row.title || ''} ${row.href || ''}`).map((r) => r.photo);
  const affiliates = bag.takeBatch(page.affiliates || [], (row) => `${page.path} ${row.title || ''} ${row.kicker || ''} ${row.body || ''}`).map((r) => r.photo);
  return [page.photo, ...rows, ...portraits, ...affiliates].filter(Boolean) as string[];
}

export function defaultPhotoList(page: PageLike): string[] {
  const bag = new UniquePhotos(page.photo ? [page.photo] : []);
  const portraits = bag.takeBatch(page.portraits || [], (row) => `${page.path} ${row.title || ''} ${row.href || ''}`).map((r) => r.photo);
  const affiliates = bag.takeBatch(page.affiliates || [], (row) => `${page.path} ${row.title || ''} ${row.kicker || ''} ${row.body || ''}`).map((r) => r.photo);
  const days = bag.takeBatch(page.days || [], (day) => `${page.path} ${day.title || ''} ${day.body || ''}`).map((r) => r.photo);
  const cards = (page.sections || []).flatMap((section) =>
    (section.cards || []).map((card) =>
      bag.take(card.photo, `${page.path} ${card.kicker || ''} ${card.title || ''} ${card.href || ''}`),
    ),
  );
  return [page.photo, ...portraits, ...affiliates, ...days, ...cards].filter(Boolean) as string[];
}

export function mainPhotosFor(page: PageLike): string[] {
  if (page.path === '/') return homePhotoList();
  if (page.path === '/destinations') return destHubPhotoList(page);
  if (page.path === '/thai-food') return foodHubPhotoList(page);
  if (page.path === '/interests') return interestHubPhotoList(page);
  if (isPlacePage(page.path)) return placePhotoList(page);
  if (page.path.startsWith('/thai-food/')) return foodGuidePhotoList(page);
  return defaultPhotoList(page);
}

export function assignUnique<T extends { photo?: string }>(items: T[], bag: UniquePhotos): T[] {
  return items.map((item) => ({ ...item, photo: bag.take(item.photo) }));
}

export { PLACE_META };
