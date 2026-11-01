import { hotelSearchLink, klookTours, stayAreaLink, stayLink } from './partners';
import type { Affiliate, Page } from './content';

function stay(title: string, kicker: string, body: string, href: string, photo: string): Affiliate {
  return { title, kicker, body, href, cta: 'Search stays', photo, partner: 'stay' };
}

function klook(title: string, body: string, query: string, photo: string): Affiliate {
  return { title, kicker: 'Klook', body, href: klookTours(query), cta: 'See tickets', photo, partner: 'klook' };
}

export const wave32FoodBatch9: Page[] = [

  {
    path: "/thai-food/thonburi-tha-din-daeng-food",
    title: "Tha Din Daeng food guide",
    description: "Khlong San is known for a cold Teochew noodle sweet, 35 to 45 THB at Bokkia on Tha Din Daeng Road, for a short afternoon stop after 15:30.",
    lede: "Bokkia is a cold Teochew noodle sweet, known for shaved ice, syrup, and a pile of toppings. On Tha Din Daeng Road the counter runs 15:30 to 19:00 daily.",
    schema: "Article",
    crumbs: [
      { name: "Thai food", href: "/thai-food" },
      { name: "Bangkok", href: "/thai-food/bangkok" },
      { name: "Tha Din Daeng", href: "/thai-food/thonburi-tha-din-daeng-food" },
    ],
    facts: [
      { label: "Hours", value: "15:30 to 19:00 daily" },
      { label: "Address", value: "323 Tha Din Daeng Rd, Khlong San" },
      { label: "Seafood room", value: "Ann, Wed to Sun 11:00 to 20:00" },
      { label: "Ride", value: "BTS or MRT 17 to 62 THB" },
    ],
    chips: ["Bokkia", "Khlong San", "Thonburi"],
    photo: "/photos/food-b9-tha-din-daeng.jpg",
    geo: { lat: 13.726, lon: 100.505, containedIn: "Bangkok" },
    paragraphs: [
      "Order the sweet at Bokkia, 323 Tha Din Daeng Road. A bowl is 35 THB, or 45 THB with every topping. Ann, the seafood room at 167 Tha Din Daeng Road, is a different kitchen: Wednesday to Sunday, 11:00 to 20:00.",
      "**Skip this, go here:** Yaowarat night crawl overruns this counter, which closes at 19:00. The crab pot at [Somsak Pu Ob](/thai-food/bangkok--charoen-rat-crab-noodles) opens at 16:00 and starts at 310 THB.",
    ],
    portraits: [
      { title: "Bokkia", href: "/thai-food/bangkok--bokkia", photo: "/photos/thai-food-bangkok-street.jpg" },
      { title: "Bangkok food", href: "/thai-food/bangkok", photo: "/photos/yaowarat.jpg" },
      { title: "Wang Lang", href: "/thai-food/wang-lang-and-talat-noi", photo: "/photos/riverside.jpg" },
      { title: "Dishes to order", href: "/thai-food/thai-dishes-to-order-first-trip", photo: "/photos/ari.jpg" },
    ],
    affiliates: [
      stay("Silom stays", "Across the river", "Sleep in Bang Rak if the boat to Khlong San is the plan.", stayAreaLink('silom'), "/photos/silom-and-sathorn.jpg"),
      klook("Bangkok food walk", "A guide is optional. The boat and a short walk already reach Tha Din Daeng.", "Bangkok food tour", "/photos/chinatown-day.jpg"),
    ],
    faqs: [
      { q: "What time is the sweet bowl?", a: "Bokkia runs daily from 15:30 to 19:00 at 323 Tha Din Daeng Road." },
      { q: "Is Ann the same shop?", a: "No. Ann is the seafood room at 167 Tha Din Daeng Road, Wednesday to Sunday, 11:00 to 20:00." },
    ],
  },

  {
    path: "/thai-food/yaowarat-song-wat-food",
    title: "Song Wat food guide",
    description: "Song Wat is known for Teochew braised goose over rice, 250 to 840 THB by size at Urai, for a lunch crowd that sits down at 10:00 sharp.",
    lede: "Braised goose over rice is a Teochew plate, known for a dark soy gravy. Urai on Song Wat Road serves it, with Monday limited to 10:00 to 13:00.",
    schema: "Article",
    crumbs: [
      { name: "Thai food", href: "/thai-food" },
      { name: "Bangkok", href: "/thai-food/bangkok" },
      { name: "Song Wat", href: "/thai-food/yaowarat-song-wat-food" },
    ],
    facts: [
      { label: "Monday", value: "10:00 to 13:00" },
      { label: "Tue to Sun", value: "10:00 to 13:00 and 16:00 to 19:00" },
      { label: "Address", value: "935 Song Wat Road" },
      { label: "Bokkia", value: "15:30 to 19:00 daily" },
    ],
    chips: ["Goose", "Song Wat", "Yaowarat"],
    photo: "/photos/food-b9-song-wat.jpg",
    geo: { lat: 13.737, lon: 100.507, containedIn: "Bangkok" },
    paragraphs: [
      "The plate is goose over rice at 935 Song Wat Road. A small plate is 250 THB, a medium 420 THB, and a large 840 THB. Tuesday to Sunday adds an evening sitting, 16:00 to 19:00.",
      "**Skip this, go here:** Cafe brunch on Song Wat will not have the goose, and Monday has no evening service. The cold sweet nearby is [bokkia](/thai-food/bangkok--bokkia), 35 to 45 THB, from 15:30.",
    ],
    portraits: [
      { title: "Goose rice", href: "/thai-food/bangkok--braised-goose-rice", photo: "/photos/chinatown-day.jpg" },
      { title: "Yaowarat walk", href: "/thai-food/yaowarat-chinatown-food-walk", photo: "/photos/yaowarat.jpg" },
      { title: "Bangkok food", href: "/thai-food/bangkok", photo: "/photos/thai-food-bangkok-street.jpg" },
      { title: "Dishes to order", href: "/thai-food/thai-dishes-to-order-first-trip", photo: "/photos/ari.jpg" },
    ],
    affiliates: [
      stay("Rattanakosin stays", "Walk to Song Wat", "Sleep in the old city if this lunch is the plan.", stayAreaLink('rattanakosin'), "/photos/old-city.jpg"),
      klook("Chinatown walk", "Use a guide only if the group will not split at Wat Mangkon.", "Bangkok Chinatown food", "/photos/grand-palace.jpg"),
    ],
    faqs: [
      { q: "Can I eat goose on Monday night?", a: "No. Monday is 10:00 to 13:00 only. Tuesday to Sunday adds 16:00 to 19:00." },
      { q: "Where is the shop?", a: "Urai Braised Goose is at 935 Song Wat Road, Samphanthawong." },
    ],
  },

  {
    path: "/thai-food/sathorn-chan-food",
    title: "Chan Road food guide",
    description: "Chan Road in Sathon is known for clear fish rice soup, 90 to 500 THB by fish at Hia Wan, for evenings that skip Wednesday and Thursday.",
    lede: "Fish rice soup is a clear bowl with fish, known for a late sitting rather than a morning congee. Hia Wan on Chan Road is closed Wednesday and Thursday.",
    schema: "Article",
    crumbs: [
      { name: "Thai food", href: "/thai-food" },
      { name: "Bangkok", href: "/thai-food/bangkok" },
      { name: "Chan Road", href: "/thai-food/sathorn-chan-food" },
    ],
    facts: [
      { label: "Hours", value: "16:00 to 23:00" },
      { label: "Closed", value: "Wednesday and Thursday" },
      { label: "Address", value: "2 Chan Road, Sathon" },
      { label: "Price", value: "90 to 500 THB by fish" },
    ],
    chips: ["Khao tom pla", "Sathon", "Chan Road"],
    photo: "/photos/food-b9-chan-road.jpg",
    geo: { lat: 13.71, lon: 100.535, containedIn: "Bangkok" },
    paragraphs: [
      "The order is khao tom pla at 2 Chan Road. A standard fish bowl is 90 to 160 THB, and pomfret runs up to 500 THB. A BTS or MRT ride elsewhere in the city is 17 to 62 THB, then a short taxi to Chan Road.",
      "**Skip this, go here:** Wednesday and Thursday are shut at Hia Wan, so those nights need another bowl. [Brass-pot jok](/thai-food/bangkok--brass-pot-jok) in Bang Sue is thicker porridge, 30 to 100 THB, daily until 21:00.",
    ],
    portraits: [
      { title: "Fish rice soup", href: "/thai-food/bangkok--fish-rice-soup-chan", photo: "/photos/silom-and-sathorn.jpg" },
      { title: "Bang Rak food", href: "/thai-food/bang-rak-food", photo: "/photos/lumphini.jpg" },
      { title: "Bangkok food", href: "/thai-food/bangkok", photo: "/photos/yaowarat.jpg" },
      { title: "Dishes to order", href: "/thai-food/thai-dishes-to-order-first-trip", photo: "/photos/ari.jpg" },
    ],
    affiliates: [
      stay("Silom stays", "Near Sathon", "Sleep on Silom if Chan Road is dinner.", stayAreaLink('silom'), "/photos/siam.jpg"),
      klook("Bangkok food tour", "Book a walk only if the group stays together.", "Bangkok food tour", "/photos/thai-food-bangkok-street.jpg"),
    ],
    faqs: [
      { q: "Which days is Hia Wan closed?", a: "Wednesday and Thursday. The other days run 16:00 to 23:00." },
      { q: "Is this jok?", a: "No. It is a clearer fish rice soup, not the thicker Bang Sue porridge." },
    ],
  },

  {
    path: "/thai-food/ari-pradiphat-food",
    title: "Pradiphat food guide",
    description: "Pradiphat Road is known for sweet soy pork belly and egg, a typical plate 150 to 350 THB at Prik Yuak, for a cash lunch that skips Monday.",
    lede: "Pork belly and egg stew is a sweet soy pot, known for soft belly and a jammy egg. Prik Yuak on Pradiphat Road is closed Monday and takes cash.",
    schema: "Article",
    crumbs: [
      { name: "Thai food", href: "/thai-food" },
      { name: "Bangkok", href: "/thai-food/bangkok" },
      { name: "Pradiphat", href: "/thai-food/ari-pradiphat-food" },
    ],
    facts: [
      { label: "Hours", value: "11:00 to 21:30" },
      { label: "Closed", value: "Monday" },
      { label: "Pay", value: "Cash" },
      { label: "Address", value: "108 Pradiphat Road" },
    ],
    chips: ["Prik Yuak", "Phaya Thai", "Stew"],
    photo: "/photos/food-b9-pradiphat.jpg",
    geo: { lat: 13.789, lon: 100.547, containedIn: "Bangkok" },
    paragraphs: [
      "The stew is at 108 Pradiphat Road, Phaya Thai, a short walk from BTS Saphan Khwai and a longer one from BTS Ari. A typical plate is 150 to 350 THB. Bring cash.",
      "**Skip this, go here:** An Ari cafe lunch misses the soy pot, and this room is closed Monday. A BTS ride is 17 to 62 THB. The dish page is [pork belly and egg stew](/thai-food/bangkok--pradiphat-pork-belly).",
    ],
    portraits: [
      { title: "Pork belly stew", href: "/thai-food/bangkok--pradiphat-pork-belly", photo: "/photos/ari.jpg" },
      { title: "Ari food", href: "/thai-food/ari-food", photo: "/photos/bts.jpg" },
      { title: "Bangkok food", href: "/thai-food/bangkok", photo: "/photos/yaowarat.jpg" },
      { title: "Dishes to order", href: "/thai-food/thai-dishes-to-order-first-trip", photo: "/photos/thai-food-bangkok-street.jpg" },
    ],
    affiliates: [
      stay("Ari stays", "Phaya Thai ridge", "Sleep near Ari if this stew is dinner.", stayAreaLink('ari'), "/photos/sukhumvit.jpg"),
      klook("Bangkok food tour", "The BTS already gets you close. A tour is optional.", "Bangkok food tour", "/photos/siam.jpg"),
    ],
    faqs: [
      { q: "Does Prik Yuak take a card?", a: "No. Bring cash. Hours are 11:00 to 21:30, and Monday is closed." },
      { q: "Is the shop in Ari soi?", a: "It is at 108 Pradiphat Road in Phaya Thai, on the same northern BTS ridge as Ari." },
    ],
  },

  {
    path: "/thai-food/phra-nakhon-daytime-food",
    title: "Phra Nakhon daytime food",
    description: "Phra Nakhon is known for a daytime run of Hainanese noodles, mango rice, and pad thai, with Kolun.h bowls at 70 THB on Mahannop Road.",
    lede: "Hainanese rice noodles are a pork broth with radish, known for a rich bowl and a clear bowl. Kolun.h on Mahannop Road serves both until 15:00 and is closed Monday.",
    schema: "Article",
    crumbs: [
      { name: "Thai food", href: "/thai-food" },
      { name: "Bangkok", href: "/thai-food/bangkok" },
      { name: "Phra Nakhon day", href: "/thai-food/phra-nakhon-daytime-food" },
    ],
    facts: [
      { label: "Noodles", value: "Tue to Sun 08:00 to 15:00" },
      { label: "Mango", value: "K. Panich, closed Sunday" },
      { label: "Pad thai", value: "Dinso Road, 10:00 to 00:00" },
      { label: "Ride", value: "BTS 17 to 62 THB" },
    ],
    chips: ["Kolun.h", "K. Panich", "Dinso"],
    photo: "/photos/food-b9-phra-nakhon.jpg",
    geo: { lat: 13.753, lon: 100.499, containedIn: "Bangkok" },
    paragraphs: [
      "Start with the rich or clear noodles at 110/1 Mahannop Road. K. Panich mango sticky rice is at 431-433 Tanao Road, Monday to Saturday, 07:00 to 17:00. Pad Thai Fai Ta Lu at 115/5 Dinso Road runs 10:00 to 00:00.",
      "**Skip this, go here:** Monday is closed at Kolun.h, and a bowl is 70 THB on the days it opens. The mango counter at [K. Panich](/thai-food/bangkok--tanao-mango-sticky) is the Sunday gap, 130 THB from Monday to Saturday.",
    ],
    portraits: [
      { title: "Rich noodles", href: "/thai-food/bangkok--kolun-rich-noodles", photo: "/photos/old-city.jpg" },
      { title: "Mango sticky rice", href: "/thai-food/bangkok--tanao-mango-sticky", photo: "/photos/grand-palace.jpg" },
      { title: "Pad thai", href: "/thai-food/bangkok--fai-ta-lu-pad-thai", photo: "/photos/wat-pho.jpg" },
      { title: "Bangkok food", href: "/thai-food/bangkok", photo: "/photos/yaowarat.jpg" },
    ],
    affiliates: [
      stay("Rattanakosin stays", "Palace grid", "Sleep by the wats if these counters are lunch.", stayAreaLink('rattanakosin'), "/photos/wat-arun-night.jpg"),
      klook("Old City walk", "Temples and these kitchens share a neighbourhood.", "Bangkok old city", "/photos/wat-phra-si-sanphet.jpg"),
    ],
    faqs: [
      { q: "What time do the Hainanese noodles stop?", a: "Kolun.h runs Tuesday to Sunday, 08:00 to 15:00, and is closed Monday." },
      { q: "Is the mango shop open on Sunday?", a: "No. K. Panich is Monday to Saturday, 07:00 to 17:00." },
    ],
  },

  {
    path: "/thai-food/bang-sue-porridge",
    title: "Bang Sue porridge guide",
    description: "Bang Sue is known for all-day brass-pot jok, 30 to 100 THB at Pae on Pracha Rat Sai 1 Road, for breakfast through a 21:00 close each day.",
    lede: "Brass-pot jok is rice porridge, known for a slow rice base and pork toppings. Pae in Bang Sue simmers the pot from 06:00 to 21:00 daily.",
    schema: "Article",
    crumbs: [
      { name: "Thai food", href: "/thai-food" },
      { name: "Bangkok", href: "/thai-food/bangkok" },
      { name: "Bang Sue", href: "/thai-food/bang-sue-porridge" },
    ],
    facts: [
      { label: "Hours", value: "06:00 to 21:00 daily" },
      { label: "Address", value: "320 Pracha Rat Sai 1 Rd" },
      { label: "Bowl", value: "Jok, not a clear soup" },
      { label: "Price", value: "30 to 100 THB" },
    ],
    chips: ["Jok", "Bang Sue", "Porridge"],
    photo: "/photos/food-b9-bang-sue.jpg",
    geo: { lat: 13.809, lon: 100.53, containedIn: "Bangkok" },
    paragraphs: [
      "The bowl is jok at 320 Pracha Rat Sai 1 Road, 30 to 100 THB. It is thicker than the fish rice soup on Chan Road.",
      "**Skip this, go here:** Chinatown jok at 45 to 80 THB is a different pot from this Bang Sue room, which runs until 21:00 rather than breakfast only. The clear fish bowl is [fish rice soup](/thai-food/bangkok--fish-rice-soup-chan).",
    ],
    portraits: [
      { title: "Brass-pot jok", href: "/thai-food/bangkok--brass-pot-jok", photo: "/photos/riverside.jpg" },
      { title: "Fish rice soup", href: "/thai-food/bangkok--fish-rice-soup-chan", photo: "/photos/silom-and-sathorn.jpg" },
      { title: "Bangkok food", href: "/thai-food/bangkok", photo: "/photos/yaowarat.jpg" },
      { title: "Dishes to order", href: "/thai-food/thai-dishes-to-order-first-trip", photo: "/photos/ari.jpg" },
    ],
    affiliates: [
      stay("Bangkok stays", "Bang Sue rail", "Sleep near the northern rail if this porridge is breakfast and dinner.", stayLink('bangkok'), "/photos/bangkok.jpg"),
      klook("Bangkok food tour", "A tour is a different ticket from this one pot.", "Bangkok food tour", "/photos/bts.jpg"),
    ],
    faqs: [
      { q: "How late is the porridge?", a: "It runs daily from 06:00 to 21:00." },
      { q: "Is this the Chan Road fish soup?", a: "No. This is thicker rice porridge in Bang Sue. The fish soup is on Chan Road." },
    ],
  },

  {
    path: "/thai-food/khlong-san-crab-night",
    title: "Khlong San crab night",
    description: "Khlong San nights are known for baked crab and glass noodles, 310 to 950 THB by size at Somsak Pu Ob on Charoen Rat Road, closed Monday.",
    lede: "Baked crab with glass noodles is a covered pot, known for crab juices steaming the noodles. Somsak Pu Ob on Charoen Rat Road opens at 16:00 and is closed Monday.",
    schema: "Article",
    crumbs: [
      { name: "Thai food", href: "/thai-food" },
      { name: "Bangkok", href: "/thai-food/bangkok" },
      { name: "Khlong San crab", href: "/thai-food/khlong-san-crab-night" },
    ],
    facts: [
      { label: "Hours", value: "16:00 to 21:30" },
      { label: "Closed", value: "Monday" },
      { label: "Road", value: "Charoen Rat, Khlong San" },
      { label: "Sweet", value: "Bokkia until 19:00" },
    ],
    chips: ["Crab", "Glass noodles", "Khlong San"],
    photo: "/photos/food-b9-khlong-san.jpg",
    geo: { lat: 13.718, lon: 100.508, containedIn: "Bangkok" },
    paragraphs: [
      "The pot is pu op woon sen, 310 THB for a regular crab and up to 950 THB for a large one. The address published for the room is Charoen Rat Road, Khlong Ton Sai, without a shop number.",
      "**Skip this, go here:** Som tum is the wrong crossing when crab is the order. Monday is closed. The afternoon sweet is [bokkia](/thai-food/bangkok--bokkia), done by 19:00.",
    ],
    portraits: [
      { title: "Baked crab", href: "/thai-food/bangkok--charoen-rat-crab-noodles", photo: "/photos/riverside.jpg" },
      { title: "Tha Din Daeng", href: "/thai-food/thonburi-tha-din-daeng-food", photo: "/photos/thai-food-bangkok-street.jpg" },
      { title: "Bangkok food", href: "/thai-food/bangkok", photo: "/photos/yaowarat.jpg" },
      { title: "Dishes to order", href: "/thai-food/thai-dishes-to-order-first-trip", photo: "/photos/ari.jpg" },
    ],
    affiliates: [
      stay("Silom stays", "River cross", "Sleep in Bang Rak and cross for the pot.", stayAreaLink('silom'), "/photos/silom-and-sathorn.jpg"),
      klook("River dinner", "A food tour is separate from this one pot.", "Bangkok river dinner", "/photos/wat-arun-night.jpg"),
    ],
    faqs: [
      { q: "What day is the crab room closed?", a: "Monday. Other days run 16:00 to 21:30." },
      { q: "Is a shop number posted?", a: "The published address is Charoen Rat Road in Khlong Ton Sai, Khlong San, without a house number." },
    ],
  },

  {
    path: "/thai-food/khon-kaen-klang-mueang-food",
    title: "Klang Mueang food guide",
    description: "Klang Mueang in Khon Kaen is known for a 06:00 breakfast and a 15:30 pork-neck grill, with typical plates at 40 to 150 THB on that road.",
    lede: "Grilled pork neck is a charred Isan cut, known for a spicy chaeo dip. On Klang Mueang Road the grill opens at 15:30, after the breakfast room has already been going since 06:00.",
    schema: "Article",
    crumbs: [
      { name: "Thai food", href: "/thai-food" },
      { name: "Khon Kaen", href: "/thai-food/khon-kaen" },
      { name: "Klang Mueang", href: "/thai-food/khon-kaen-klang-mueang-food" },
    ],
    facts: [
      { label: "Breakfast", value: "Baan Heng, 06:00 to 21:00" },
      { label: "Grill", value: "Pork neck, 15:30 to 23:30" },
      { label: "Dumplings", value: "Khun Jaeng, until 16:00" },
      { label: "Songthaew", value: "10 to 15 THB" },
    ],
    chips: ["Klang Mueang", "Pork neck", "Baan Heng"],
    photo: "/photos/food-b9-klang-mueang.jpg",
    geo: { lat: 16.432, lon: 102.823, containedIn: "Khon Kaen" },
    paragraphs: [
      "Baan Heng at 54/2 Klang Mueang Road is the sandwich and the baked sausage rice. The neck grill is at 77/4 on the same road, from 15:30. Khun Jaeng dumplings are on Lang Mueang Road until 16:00. A city songthaew is 10 to 15 THB.",
      "**Skip this, go here:** The highway bird at Kai Yang Wanna, 120 to 220 THB, is a detour once the plan is already on Klang Mueang Road. Baan Heng breakfast plates are typically 40 to 120 THB. The evening grill is [grilled pork neck](/thai-food/khon-kaen--grilled-pork-neck).",
    ],
    portraits: [
      { title: "Pork neck", href: "/thai-food/khon-kaen--grilled-pork-neck", photo: "/photos/khao-yai.jpg" },
      { title: "Khon Kaen food", href: "/thai-food/khon-kaen", photo: "/photos/pak-chong.jpg" },
      { title: "Isan food", href: "/thai-food/isan", photo: "/photos/thai-food-night-markets.jpg" },
      { title: "Dishes to order", href: "/thai-food/thai-dishes-to-order-first-trip", photo: "/photos/ari.jpg" },
    ],
    affiliates: [
      stay("Bangkok stays, or fly in", "Town breakfast", "Sleep in Khon Kaen if this road is the meal. The stay search below starts in Bangkok if you are still there.", stayLink('bangkok'), "/photos/sukhumvit.jpg"),
      klook("Isan day", "A van is a different ticket from this road.", "Khon Kaen food", "/photos/haew-suwat.jpg"),
    ],
    faqs: [
      { q: "What opens first on Klang Mueang Road?", a: "Baan Heng opens at 06:00. The pork-neck grill opens at 15:30." },
      { q: "How much is a songthaew?", a: "Fixed city routes in Khon Kaen are 10 to 15 THB." },
    ],
  },

  {
    path: "/thai-food/khon-kaen-airport-road-food",
    title: "Airport Road food guide",
    description: "Airport Road in Khon Kaen is known for fried fermented fish, a typical plate 120 to 250 THB at Praprai, for a meal that skips Monday.",
    lede: "Fried sour fish is fermented fish with a crisp crust, known for a sharp flavour. Praprai on Airport Road, in front of Khon Kaen Airport, is closed Monday.",
    schema: "Article",
    crumbs: [
      { name: "Thai food", href: "/thai-food" },
      { name: "Khon Kaen", href: "/thai-food/khon-kaen" },
      { name: "Airport Road", href: "/thai-food/khon-kaen-airport-road-food" },
    ],
    facts: [
      { label: "Hours", value: "10:30 to 22:00" },
      { label: "Closed", value: "Monday" },
      { label: "Address", value: "345/1-2 Airport Road" },
      { label: "Som tum", value: "Ask; not on the board" },
    ],
    chips: ["Praprai", "Pla som", "Airport"],
    photo: "/photos/food-b9-airport-road.jpg",
    geo: { lat: 16.466, lon: 102.783, containedIn: "Khon Kaen" },
    paragraphs: [
      "The room is at 345/1-2 Airport Road, Ban Pet. Fried sour fish is the named plate, a typical 120 to 250 THB. Som tum with fermented fish sauce and salted crab is not on the board, so ask.",
      "**Skip this, go here:** Peanut som tum in town, 50 to 90 THB, is a different mortar, and Monday is closed at Praprai. The off-board plate is [fermented-fish som tum](/thai-food/khon-kaen--airport-som-tum).",
    ],
    portraits: [
      { title: "Fried sour fish", href: "/thai-food/khon-kaen--fried-sour-fish", photo: "/photos/khao-yai.jpg" },
      { title: "Som tum", href: "/thai-food/khon-kaen--airport-som-tum", photo: "/photos/pak-chong.jpg" },
      { title: "Khon Kaen food", href: "/thai-food/khon-kaen", photo: "/photos/thai-food-night-markets.jpg" },
      { title: "Town road", href: "/thai-food/khon-kaen-klang-mueang-food", photo: "/photos/ari.jpg" },
    ],
    affiliates: [
      stay("Bangkok stays, or fly in", "Airport lunch", "Eat here on the way in or out. Sleep in town if the grill is dinner.", stayLink('bangkok'), "/photos/chatuchak.jpg"),
      klook("Khon Kaen transfer", "The airport meal is separate from a city van.", "Khon Kaen airport", "/photos/haew-suwat.jpg"),
    ],
    faqs: [
      { q: "Is Praprai inside the terminal?", a: "No. It is on Airport Road in front of the airport, at 345/1-2, Ban Pet." },
      { q: "Which day is it closed?", a: "Monday. Other days run 10:30 to 22:00." },
    ],
  },

  {
    path: "/thai-food/udon-thani-mak-khaeng-food",
    title: "Mak Khaeng food guide",
    description: "Mak Khaeng in Udon Thani is known for shared fermented fish and snakehead soup, a typical plate 180 to 400 THB at Krua Khun Nid until 20:00.",
    lede: "Fried sour fish is a fermented freshwater fish, known for a sharp crust and a sharing plate. Krua Khun Nid in Mak Khaeng serves it daily until 20:00.",
    schema: "Article",
    crumbs: [
      { name: "Thai food", href: "/thai-food" },
      { name: "Udon Thani", href: "/thai-food/udon-thani" },
      { name: "Mak Khaeng", href: "/thai-food/udon-thani-mak-khaeng-food" },
    ],
    facts: [
      { label: "Hours", value: "10:00 to 20:00 daily" },
      { label: "Address", value: "64 Soi Nonnivet 1" },
      { label: "Soup", value: "Snakehead tom yum" },
      { label: "Town plates", value: "UD Town often 40 to 120 THB" },
    ],
    chips: ["Pla som", "Tom yum", "Udon"],
    photo: "/photos/food-b9-mak-khaeng.jpg",
    geo: { lat: 17.407, lon: 102.789, containedIn: "Udon Thani" },
    paragraphs: [
      "Krua Khun Nid is at 64 Soi Nonnivet 1, Udon Dussadi Road. Portions are large, a typical sharing plate 200 to 400 THB. Peng duck noodles, a different shop, stop at 15:00.",
      "**Skip this, go here:** Duck noodles at lunch are the wrong order for sour fish in the evening. This room stays open until 20:00. The sharing plate is [fried sour fish](/thai-food/udon-thani--fried-pla-som).",
    ],
    portraits: [
      { title: "Fried sour fish", href: "/thai-food/udon-thani--fried-pla-som", photo: "/photos/pak-chong.jpg" },
      { title: "Snakehead soup", href: "/thai-food/udon-thani--snakehead-tom-yum", photo: "/photos/khao-yai.jpg" },
      { title: "Udon Thani food", href: "/thai-food/udon-thani", photo: "/photos/thai-food-night-markets.jpg" },
      { title: "Isan food", href: "/thai-food/isan", photo: "/photos/ari.jpg" },
    ],
    affiliates: [
      stay("Bangkok stays, or fly in", "Udon night", "Sleep in Udon if this room is dinner.", stayLink('bangkok'), "/photos/sukhumvit.jpg"),
      klook("Udon day", "A tour is separate from this kitchen.", "Udon Thani food", "/photos/haew-suwat.jpg"),
    ],
    faqs: [
      { q: "How late is Krua Khun Nid?", a: "It runs daily from 10:00 to 20:00." },
      { q: "Is the fish a single bowl?", a: "Portions are large. Ask the kitchen to split a plate if you are alone." },
    ],
  },

  {
    path: "/thai-food/ubon-ratchathani-food",
    title: "Ubon Ratchathani food guide",
    description: "Ubon town is known for crisp-catfish som tum, five-spice noodles, and pork wraps, with the nam neung set at 280 THB at Agave on Phalorangrit.",
    lede: "Crispy-catfish som tum is papaya salad with fried fish, known for a tangy mortar. Som Tum Jinda on Phichit Rangsan Road serves it daily from 10:30 to 21:00.",
    schema: "Article",
    crumbs: [
      { name: "Thai food", href: "/thai-food" },
      { name: "Isan", href: "/thai-food/isan" },
      { name: "Ubon", href: "/thai-food/ubon-ratchathani-food" },
    ],
    facts: [
      { label: "Som tum", value: "10:30 to 21:00 daily" },
      { label: "Noodles", value: "Guay Jub, until 16:00" },
      { label: "Nam neung", value: "280 THB; closed Monday" },
      { label: "Dumpling", value: "Pak Mor, 06:30 to 14:00" },
    ],
    chips: ["Ubon", "Som tum", "Nam neung"],
    photo: "/photos/food-b9-ubon.jpg",
    geo: { lat: 15.228, lon: 104.857, containedIn: "Ubon Ratchathani" },
    paragraphs: [
      "Jinda is at 63/1-2 Phichit Rangsan Road. Guay Jub Ubon at 7 Phrommathep Road stops at 16:00. Agave at 153 Phalorangrit Road is closed Monday, and the pork nam neung set is 280 THB. Pak Mor Robot on Benchama Road runs 06:30 to 14:00.",
      "**Skip this, go here:** Night-market snacks at 40 to 80 THB are thin when the mortar is the meal. Mok, the herb-fish house, is closed Monday and Tuesday. Catfish som tum is [crispy catfish som tum](/thai-food/ubon--crispy-catfish-som-tum).",
    ],
    portraits: [
      { title: "Catfish som tum", href: "/thai-food/ubon--crispy-catfish-som-tum", photo: "/photos/khao-yai.jpg" },
      { title: "Five-spice noodles", href: "/thai-food/ubon--five-spice-guay-jub", photo: "/photos/pak-chong.jpg" },
      { title: "Isan food", href: "/thai-food/isan", photo: "/photos/thai-food-night-markets.jpg" },
      { title: "Khon Kaen food", href: "/thai-food/khon-kaen", photo: "/photos/ari.jpg" },
    ],
    affiliates: [
      stay("Ubon stays", "Town kitchens", "Search Bangkok if you are still there, or fly into Ubon for these rooms.", stayLink('bangkok'), "/photos/sukhumvit.jpg"),
      klook("Isan trains", "The night train is a different ticket from lunch.", "Ubon Ratchathani", "/photos/haew-suwat.jpg"),
    ],
    faqs: [
      { q: "What does the pork nam neung set cost?", a: "The pork nam neung set at Agave is 280 THB, and the room is closed Monday." },
      { q: "How late are the five-spice noodles?", a: "Guay Jub Ubon runs daily from 08:30 to 16:00." },
    ],
  },

  {
    path: "/thai-food/khao-lak-khuekkhak-food",
    title: "Khuekkhak food guide",
    description: "Khuekkhak is known for vegetables with southern tai pla, a typical plate 80 to 150 THB at Krua Luang Ten, for lunch and early dinner.",
    lede: "Tai pla vegetables are a southern dip plate, known for fermented fish-stomach sauce. Krua Luang Ten in Khuekkhak serves them at lunch and again from 17:00.",
    schema: "Article",
    crumbs: [
      { name: "Thai food", href: "/thai-food" },
      { name: "Khao Lak", href: "/thai-food/khao-lak" },
      { name: "Khuekkhak", href: "/thai-food/khao-lak-khuekkhak-food" },
    ],
    facts: [
      { label: "Lunch", value: "11:00 to 13:00" },
      { label: "Dinner", value: "17:00 to 20:00" },
      { label: "Closed dates", value: "10th, 20th, and 30th" },
      { label: "Park fee", value: "Often 400 THB extra" },
    ],
    chips: ["Tai pla", "Khuekkhak", "Khao Lak"],
    photo: "/photos/food-b9-khuekkhak.jpg",
    geo: { lat: 8.641, lon: 98.248, containedIn: "Phang Nga" },
    paragraphs: [
      "The room is at 160 Mu 2, Phet Kasem Road, Khuekkhak. A typical plate is 80 to 150 THB. Lam Kaen, a short ride north, is Krachang for shrimp coconut soup, closed Tuesday.",
      "**Skip this, go here:** Between 13:00 and 17:00, and on the 10th, 20th, and 30th, this room is shut. The Lam Kaen fish is [turmeric trevally](/thai-food/khao-lak--turmeric-trevally).",
    ],
    portraits: [
      { title: "Tai pla", href: "/thai-food/khao-lak--tai-pla-vegetables", photo: "/photos/khao-lak.jpg" },
      { title: "Khao Lak food", href: "/thai-food/khao-lak", photo: "/photos/khao-lak-andaman.jpg" },
      { title: "Shrimp soup", href: "/thai-food/khao-lak--shrimp-coconut-soup", photo: "/photos/similan.jpg" },
      { title: "Phuket food", href: "/thai-food/phuket", photo: "/photos/thai-food-southern.jpg" },
    ],
    affiliates: [
      stay("Khao Lak stays", "Khuekkhak beach", "Sleep in Khuekkhak if this dip is dinner.", stayLink('khao-lak'), "/photos/khao-lak-resort.jpg"),
      klook("Similan boat", "Park boats are a different day from this lunch.", "Khao Lak Similan", "/photos/similan-boat.jpg"),
    ],
    faqs: [
      { q: "Is the room open all afternoon?", a: "No. Lunch ends at 13:00 and dinner starts at 17:00." },
      { q: "Which dates are closed?", a: "The 10th, the 20th, and the 30th of the month." },
    ],
  },

  {
    path: "/thai-food/khao-yai-pak-chong-food",
    title: "Pak Chong kitchen guide",
    description: "Pak Chong is known for rice-field snail curry and southern pots near Khao Yai, a typical plate 120 to 200 THB at Krua Kampan in Mu Si.",
    lede: "Snail coconut curry is rice-field snails in a red coconut gravy, known for a Pak Chong pot. Krua Kampan in Mu Si serves it daily from 09:00 to 21:00.",
    schema: "Article",
    crumbs: [
      { name: "Thai food", href: "/thai-food" },
      { name: "Khao Yai", href: "/thai-food/khao-yai" },
      { name: "Pak Chong", href: "/thai-food/khao-yai-pak-chong-food" },
    ],
    facts: [
      { label: "Mu Si", value: "Krua Kampan, 09:00 to 21:00" },
      { label: "Mittraphap", value: "Banmai, 09:00 to 21:00" },
      { label: "Thanarat", value: "Yung Khao, until 20:00" },
      { label: "Price", value: "Typical plate 120 to 200 THB" },
    ],
    chips: ["Pak Chong", "Snail curry", "Mu Si"],
    photo: "/photos/food-b9-pak-chong-kitchens.jpg",
    geo: { lat: 14.428, lon: 101.372, containedIn: "Nakhon Ratchasima" },
    paragraphs: [
      "Krua Kampan is at 94-94/1 Mu 6 on Rural Road 3052, and a typical snail curry is 120 to 200 THB. Banmai Chay Nam is at 21 Mittraphap Road. Yung Khao, for petai prawns, is at 54 Mu 4 Thanarat Road and closes at 20:00.",
      "**Skip this, go here:** Town som tum at 50 to 90 THB is not the reason for a Mu Si stop. The snail curry runs daily until 21:00 at [Krua Kampan](/thai-food/khao-yai--snail-coconut-curry).",
    ],
    portraits: [
      { title: "Snail curry", href: "/thai-food/khao-yai--snail-coconut-curry", photo: "/photos/khao-yai.jpg" },
      { title: "Beef curry", href: "/thai-food/khao-yai--beef-coconut-curry", photo: "/photos/pak-chong.jpg" },
      { title: "Khao Yai food", href: "/thai-food/khao-yai", photo: "/photos/haew-suwat.jpg" },
      { title: "Khao Yai", href: "/khao-yai", photo: "/photos/food-b5-khao-yai.jpg" },
    ],
    affiliates: [
      stay("Khao Yai stays", "Pak Chong", "Sleep in Pak Chong if these kitchens are dinner.", hotelSearchLink('Khao Yai'), "/photos/nang-thong.jpg"),
      klook("Park van", "The 400 THB foreign park fee is often extra.", "Khao Yai National Park", "/photos/similan.jpg"),
    ],
    faqs: [
      { q: "Where is the snail curry?", a: "Krua Kampan, 94-94/1 Mu 6, Rural Road 3052, Mu Si, daily 09:00 to 21:00." },
      { q: "How late is Yung Khao?", a: "It runs daily from 10:00 to 20:00 on Thanarat Road." },
    ],
  },

  {
    path: "/thai-food/phuket-wichit-grill",
    title: "Wichit duck guide",
    description: "Wichit in Phuket is known for charcoal salt-roasted duck, 180 THB for a half bird at Niyom, for a late afternoon that skips Tuesday.",
    lede: "Salt-roasted duck is a charcoal bird, known for crisp skin and a spicy-sour or tamarind dip. Niyom in Wichit roasts it from 14:30 and is closed Tuesday.",
    schema: "Article",
    crumbs: [
      { name: "Thai food", href: "/thai-food" },
      { name: "Phuket", href: "/thai-food/phuket" },
      { name: "Wichit", href: "/thai-food/phuket-wichit-grill" },
    ],
    facts: [
      { label: "Hours", value: "14:30 to 19:30" },
      { label: "Closed", value: "Tuesday" },
      { label: "Order", value: "Half or whole bird" },
      { label: "Beach plate", value: "Often 60 to 150 THB" },
    ],
    chips: ["Duck", "Wichit", "Niyom"],
    photo: "/photos/food-b9-wichit.jpg",
    geo: { lat: 7.851, lon: 98.378, containedIn: "Phuket" },
    paragraphs: [
      "The shop is at 5/19 Mu 3, Chao Fah Tawan Tok Road. A half bird is 180 THB. Old Town morning rice soup is a different plan, closed Wednesday and Thursday.",
      "**Skip this, go here:** Tuesday is closed for the duck, and the grill starts at 14:30. Morning kaya toast is at [Khao Tom Dibuk](/thai-food/phuket--kaya-sandwich), and that counter stops at 13:00.",
    ],
    portraits: [
      { title: "Salt duck", href: "/thai-food/phuket--salt-roasted-duck", photo: "/photos/thai-food-southern.jpg" },
      { title: "Phuket food", href: "/thai-food/phuket", photo: "/photos/phuket.jpg" },
      { title: "Old Town food", href: "/thai-food/phuket-old-town-hokkien-and-peranakan-food", photo: "/photos/kata-and-karon.jpg" },
      { title: "Coconut crepe", href: "/thai-food/phuket--coconut-crepe", photo: "/photos/rawai-and-nai-harn.jpg" },
    ],
    affiliates: [
      stay("Phuket Town stays", "Wichit, not Patong", "Sleep in town if the duck is dinner.", stayLink('phuket'), "/photos/bang-niang.jpg"),
      klook("Old Town walk", "A mansion walk is a different hour from this grill.", "Phuket Old Town", "/photos/nang-thong.jpg"),
    ],
    faqs: [
      { q: "Can I buy a half duck?", a: "Yes. The shop sells half or whole birds." },
      { q: "Is Tuesday open?", a: "No. Other days run 14:30 to 19:30." },
    ],
  },

  {
    path: "/thai-food/koh-samui-taling-ngam-food",
    title: "Taling Ngam food guide",
    description: "Taling Ngam is known for a reserved southern seafood set in a coconut garden, 500 to 1,000 THB a person at Baan Suan Lung Khai on Koh Samui.",
    lede: "Blue swimming crab is a southern set on a woven tray, known for crab and coconut rice in a garden. Baan Suan Lung Khai in Taling Ngam is closed Monday and asks for a reservation.",
    schema: "Article",
    crumbs: [
      { name: "Thai food", href: "/thai-food" },
      { name: "Koh Samui", href: "/thai-food/koh-samui" },
      { name: "Taling Ngam", href: "/thai-food/koh-samui-taling-ngam-food" },
    ],
    facts: [
      { label: "Lunch", value: "11:00 to 14:00" },
      { label: "Dinner", value: "16:30 to 19:00" },
      { label: "Closed", value: "Monday" },
      { label: "Book", value: "Reservation required" },
    ],
    chips: ["Taling Ngam", "Crab", "Samui"],
    photo: "/photos/food-b9-taling-ngam.jpg",
    geo: { lat: 9.46, lon: 99.94, containedIn: "Koh Samui" },
    paragraphs: [
      "The room is at 18/18 Mu 4, Taling Ngam, on a coconut plantation. Sets run 350, 500, 700, and 1,000 THB a person, with crab or grilled prawns and rice. There is a break from 14:00 to 16:30.",
      "**Skip this, go here:** Chaweng walking-street grills, often 60 to 150 THB, are a different meal from this reserved set. Monday is closed, and walk-ins are not seated. The crab page is [blue swimming crab](/thai-food/koh-samui--taling-ngam-crab).",
    ],
    portraits: [
      { title: "Crab set", href: "/thai-food/koh-samui--taling-ngam-crab", photo: "/photos/koh-samui.jpg" },
      { title: "Prawns", href: "/thai-food/koh-samui--taling-ngam-prawns", photo: "/photos/chaweng.jpg" },
      { title: "Koh Samui food", href: "/thai-food/koh-samui", photo: "/photos/lamai.jpg" },
      { title: "Ang Thong", href: "/koh-samui/ang-thong-marine-park", photo: "/photos/ang-thong.jpg" },
    ],
    affiliates: [
      stay("Koh Samui stays", "West coast", "Sleep in Taling Ngam if this garden is dinner.", stayLink('koh-samui'), "/photos/nang-thong.jpg"),
      klook("Ang Thong boat", "The park boat is a different day.", "Koh Samui Ang Thong", "/photos/ferry-gulf.jpg"),
    ],
    faqs: [
      { q: "Do I need a reservation?", a: "Yes. Reserve before you go, and Monday is closed." },
      { q: "Is there a late sitting?", a: "Dinner ends at 19:00. Lunch is 11:00 to 14:00." },
    ],
  },

  {
    path: "/thai-food/takua-pa-thai-chinese-food",
    title: "Takua Pa food guide",
    description: "Takua Pa is known for soy-braised chicken with morning glory, a typical plate 120 to 220 THB at Hok Kee Lao on Rat Bumrung Road in town.",
    lede: "Soy chicken, or pae sa, is a braised bird, known for seasoned soy and morning glory. Hok Kee Lao in Takua Pa serves it at lunch and again from 16:30.",
    schema: "Article",
    crumbs: [
      { name: "Thai food", href: "/thai-food" },
      { name: "Khao Lak", href: "/thai-food/khao-lak" },
      { name: "Takua Pa", href: "/thai-food/takua-pa-thai-chinese-food" },
    ],
    facts: [
      { label: "Lunch", value: "10:30 to 13:30" },
      { label: "Dinner", value: "16:30 to 21:30" },
      { label: "Address", value: "207 Rat Bumrung Road" },
      { label: "Beach plate", value: "Often 60 to 150 THB" },
    ],
    chips: ["Pae sa", "Takua Pa", "Chicken"],
    photo: "/photos/food-b9-takua-pa.jpg",
    geo: { lat: 8.864, lon: 98.348, containedIn: "Phang Nga" },
    paragraphs: [
      "The room is at 207 Rat Bumrung Road, Bang Nai Si. A typical plate is 120 to 220 THB. Khuekkhak, toward the beach, is the tai pla vegetable room with its own split hours.",
      "**Skip this, go here:** Mid-afternoon at 15:00 falls in the break, because the kitchen is shut from 13:30 to 16:30. The beach dip is [tai pla vegetables](/thai-food/khao-lak--tai-pla-vegetables).",
    ],
    portraits: [
      { title: "Soy chicken", href: "/thai-food/khao-lak--chicken-pae-sa", photo: "/photos/khao-lak.jpg" },
      { title: "Khuekkhak", href: "/thai-food/khao-lak-khuekkhak-food", photo: "/photos/khao-lak-andaman.jpg" },
      { title: "Khao Lak food", href: "/thai-food/khao-lak", photo: "/photos/similan.jpg" },
      { title: "Phuket food", href: "/thai-food/phuket", photo: "/photos/thai-food-southern.jpg" },
    ],
    affiliates: [
      stay("Khao Lak stays", "Beach or town", "Sleep in Khao Lak and ride to Takua Pa for this chicken.", stayLink('khao-lak'), "/photos/khao-lak-resort.jpg"),
      klook("Khao Lak boats", "A Similan seat is not this lunch.", "Khao Lak tour", "/photos/similan-boat.jpg"),
    ],
    faqs: [
      { q: "Can I eat at 15:00?", a: "No. There is a break from 13:30 to 16:30." },
      { q: "What is pae sa?", a: "Chicken braised in seasoned soy, served with morning glory." },
    ],
  },

  {
    path: "/thai-food/pai-walking-street-food",
    title: "Pai Walking Street food",
    description: "Pai Walking Street is known for minced pork larb with sticky rice, often 80 to 120 THB, for a night stall by the bus terminal on Chai Songkhram.",
    lede: "Larb moo is minced pork with lime, toasted rice, and chili, known for a sticky-rice salad. Pai Walking Street on Chai Songkhram Road serves it nightly.",
    schema: "Article",
    crumbs: [
      { name: "Thai food", href: "/thai-food" },
      { name: "Pai", href: "/thai-food/pai" },
      { name: "Walking Street", href: "/thai-food/pai-walking-street-food" },
    ],
    facts: [
      { label: "Hours", value: "Nightly" },
      { label: "Price", value: "80 to 120 THB" },
      { label: "Road", value: "Chai Songkhram, by the terminal" },
      { label: "Heat", value: "Say pet nit noi" },
    ],
    chips: ["Larb", "Walking Street", "Pai"],
    photo: "/photos/food-b9-pai-street.jpg",
    geo: { lat: 19.358, lon: 98.441, containedIn: "Mae Hong Son" },
    paragraphs: [
      "The salad is the town plate after dark, often 80 to 120 THB. Stalls sit toward the bus terminal on Chai Songkhram Road. Say pet nit noi before they mix, and ask for cooked pork.",
      "**Skip this, go here:** Valley-hut kitchens are the miss for this sticky-rice salad, which is the stall by the terminal. The [Pai food hub](/thai-food/pai) also covers daytime khao soi.",
    ],
    portraits: [
      { title: "Larb", href: "/thai-food/pai--walking-street-larb", photo: "/photos/pai.jpg" },
      { title: "Pai food", href: "/thai-food/pai", photo: "/photos/pai-canyon.jpg" },
      { title: "Northern food", href: "/thai-food/northern-lanna", photo: "/photos/thai-food-lanna.jpg" },
      { title: "Chiang Mai to Pai", href: "/get-there/chiang-mai-to-pai", photo: "/photos/northern.jpg" },
    ],
    affiliates: [
      stay("Pai stays", "Walk to the street", "Sleep in town if the night stalls are dinner.", stayLink('pai'), "/photos/chiang-mai-old-city.jpg"),
      klook("Pai canyon", "The canyon van is a different hour from this salad.", "Pai tour", "/photos/doi-suthep.jpg"),
    ],
    faqs: [
      { q: "What time is Walking Street?", a: "Nightly. Stalls set up along Chai Songkhram Road by the bus terminal." },
      { q: "How much is the larb?", a: "A minced-pork salad on this street is often 80 to 120 THB. Say pet nit noi if you want less chili." },
    ],
  },

  {
    path: "/thai-food/sukhothai-park-gate-noodles",
    title: "Sukhothai park-gate noodles",
    description: "The old park gate in Sukhothai is known for thin pork noodles with lime and peanut, 40 to 70 THB, for a lunch on Charotwithithong Road that ends at 15:00.",
    lede: "Sukhothai noodles are thin rice noodles with pork, lime, and peanut, known for a sour lunch bowl. Rooms by the old park gate serve them from 08:00 to 15:00.",
    schema: "Article",
    crumbs: [
      { name: "Thai food", href: "/thai-food" },
      { name: "Sukhothai", href: "/thai-food/sukhothai" },
      { name: "Park gate", href: "/thai-food/sukhothai-park-gate-noodles" },
    ],
    facts: [
      { label: "Hours", value: "08:00 to 15:00" },
      { label: "Price", value: "40 to 70 THB" },
      { label: "Road", value: "Charotwithithong, Muang Kao" },
      { label: "Unlike", value: "Boat noodles or khao soi" },
    ],
    chips: ["Kuay tiew", "Old Sukhothai", "Lunch"],
    photo: "/photos/food-b9-sukhothai-gate.jpg",
    geo: { lat: 17.017, lon: 99.703, containedIn: "Sukhothai" },
    paragraphs: [
      "The bowl is kuay tiew Sukhothai, 40 to 70 THB, along Charotwithithong Road in Muang Kao. It is a lunch clock. New town is a separate ride if you arrive after 15:00.",
      "**Skip this, go here:** New-town dinner misses these noodles, because the park-gate rooms stop at 15:00. The [Sukhothai food hub](/thai-food/sukhothai) covers the other plates.",
    ],
    portraits: [
      { title: "Sukhothai noodles", href: "/thai-food/sukhothai--kuay-tiew-sukhothai", photo: "/photos/sukhothai.jpg" },
      { title: "Historical park", href: "/sukhothai/historical-park", photo: "/photos/sukhothai-mahathat.jpg" },
      { title: "Sukhothai food", href: "/thai-food/sukhothai", photo: "/photos/northern.jpg" },
      { title: "Dishes to order", href: "/thai-food/thai-dishes-to-order-first-trip", photo: "/photos/ari.jpg" },
    ],
    affiliates: [
      stay("Sukhothai stays", "Old town", "Sleep in Muang Kao if this bowl is lunch after the ruins.", stayLink('sukhothai'), "/photos/sukhothai-lake.jpg"),
      klook("Park bicycle", "The ruin loop is a morning, and this bowl is after.", "Sukhothai historical park", "/photos/doi-suthep.jpg"),
    ],
    faqs: [
      { q: "What time do the noodle rooms stop?", a: "08:00 to 15:00 along Charotwithithong Road by the old park." },
      { q: "How much is a bowl?", a: "40 to 70 THB for the pork, lime, and peanut noodles." },
    ],
  },

  {
    path: "/thai-food/koh-lanta-saladan-food",
    title: "Saladan food guide",
    description: "Saladan on Koh Lanta is known for a mild coconut green curry, 50 to 100 THB at Yawee on Highway 4245, for a cash dinner near the pier.",
    lede: "Green curry is a coconut gravy with Thai basil, known as a milder pot than a dry southern curry. Yawee in Saladan cooks it daily from 09:30 to 22:00.",
    schema: "Article",
    crumbs: [
      { name: "Thai food", href: "/thai-food" },
      { name: "Koh Lanta", href: "/thai-food/koh-lanta" },
      { name: "Saladan", href: "/thai-food/koh-lanta-saladan-food" },
    ],
    facts: [
      { label: "Hours", value: "09:30 to 22:00 daily" },
      { label: "Curry", value: "50 to 100 THB" },
      { label: "Pay", value: "Cash" },
      { label: "Address", value: "Highway 4245, Saladan" },
    ],
    chips: ["Green curry", "Saladan", "Yawee"],
    photo: "/photos/food-b9-saladan.jpg",
    geo: { lat: 7.535, lon: 99.042, containedIn: "Krabi" },
    paragraphs: [
      "Yawee is on Highway 4245 in Saladan. Chicken green curry is the usual order, 50 to 100 THB, and the room takes cash. A vegan pot is on the menu if you say jay.",
      "**Skip this, go here:** Mild coconut curry is the pot to leave when the goal is southern heat. Krua Dan Tai nearby cooks the hotter kua kling. The page is [green curry](/thai-food/koh-lanta--yawee-green-curry).",
    ],
    portraits: [
      { title: "Green curry", href: "/thai-food/koh-lanta--yawee-green-curry", photo: "/photos/koh-lanta.jpg" },
      { title: "Koh Lanta food", href: "/thai-food/koh-lanta", photo: "/photos/longtail-andaman.jpg" },
      { title: "Koh Lanta", href: "/koh-lanta", photo: "/photos/railay.jpg" },
      { title: "Krabi food", href: "/thai-food/krabi", photo: "/photos/krabi.jpg" },
    ],
    affiliates: [
      stay("Koh Lanta stays", "Saladan pier", "Sleep near Saladan if this curry is dinner.", stayLink('koh-lanta'), "/photos/ao-nang.jpg"),
      klook("Lanta boats", "A day boat is separate from this curry.", "Koh Lanta tour", "/photos/phi-phi.jpg"),
    ],
    faqs: [
      { q: "How much is the curry?", a: "Curries at Yawee are 50 to 100 THB. The room is cash only." },
      { q: "How late is Yawee?", a: "It runs daily from 09:30 to 22:00." },
    ],
  },

  {
    path: "/thai-food/hat-yai-kim-yong-food",
    title: "Kim Yong food guide",
    description: "Kim Yong Market in Hat Yai is known for turmeric fried chicken, 20 to 70 THB a piece at Kaitod MEENA, for a sticky-rice lunch on Niphat Uthit.",
    lede: "Hat Yai fried chicken is a turmeric-garlic bird, known for crisp skin and sticky rice. Kaitod MEENA in front of Kim Yong Market sells it from 10:30 to 19:00 daily.",
    schema: "Article",
    crumbs: [
      { name: "Thai food", href: "/thai-food" },
      { name: "Hat Yai", href: "/thai-food/hat-yai" },
      { name: "Kim Yong", href: "/thai-food/hat-yai-kim-yong-food" },
    ],
    facts: [
      { label: "Chicken", value: "10:30 to 19:00 daily" },
      { label: "Price", value: "20 to 70 THB a piece" },
      { label: "Road", value: "Niphat Uthit 3" },
      { label: "Dim sum", value: "Gookchai, 06:00 to 13:00" },
    ],
    chips: ["Fried chicken", "Kim Yong", "Hat Yai"],
    photo: "/photos/food-b9-kim-yong.jpg",
    geo: { lat: 7.001, lon: 100.473, containedIn: "Songkhla" },
    paragraphs: [
      "The cart is on Niphat Uthit 3 Road in front of Kim Yong Market. Buy by the piece, 20 to 70 THB, with sticky rice. Gookchai dim sum, a morning room, is a different clock, 06:00 to 13:00.",
      "**Skip this, go here:** Beach grills are gai yang, and this plate is fried turmeric chicken at 20 to 70 THB a piece. The page is [Hat Yai fried chicken](/thai-food/hat-yai--gai-tod-hat-yai).",
    ],
    portraits: [
      { title: "Fried chicken", href: "/thai-food/hat-yai--gai-tod-hat-yai", photo: "/photos/thai-food-southern.jpg" },
      { title: "Hat Yai food", href: "/thai-food/hat-yai", photo: "/photos/kata-and-karon.jpg" },
      { title: "South food", href: "/thai-food/southern-and-baba-nyonya", photo: "/photos/phuket.jpg" },
      { title: "Dim sum", href: "/thai-food/hat-yai--dim-sum-gookchai", photo: "/photos/rawai-and-nai-harn.jpg" },
    ],
    affiliates: [
      stay("Hat Yai stays", "Market grid", "Sleep near Kim Yong if the chicken is lunch. Search from Phuket if you are still on the island.", stayLink('phuket'), "/photos/kamala-and-surin.jpg"),
      klook("Hat Yai day", "A city tour is separate from this cart.", "Hat Yai", "/photos/nang-thong.jpg"),
    ],
    faqs: [
      { q: "How much is a piece of chicken?", a: "20 to 70 THB a piece at Kaitod MEENA, daily 10:30 to 19:00." },
      { q: "Is this grilled chicken?", a: "No. It is turmeric-garlic fried chicken with sticky rice." },
    ],
  },

  {
    path: "/thai-food/nong-khai-meechai-food",
    title: "Meechai food guide",
    description: "Meechai Road in Nong Khai is known for Vietnamese pork wraps, 120 to 220 THB a set at Daeng Namnuang, for a herb-table lunch by the river.",
    lede: "Nam nuang is a grilled pork wrap with herbs and rice sheets, known as Nong Khai's Vietnamese table. Daeng Namnuang on Meechai Road serves it from 10:00 to 20:00.",
    schema: "Article",
    crumbs: [
      { name: "Thai food", href: "/thai-food" },
      { name: "Nong Khai", href: "/thai-food/nong-khai" },
      { name: "Meechai", href: "/thai-food/nong-khai-meechai-food" },
    ],
    facts: [
      { label: "Hours", value: "10:00 to 20:00" },
      { label: "Set", value: "120 to 220 THB" },
      { label: "Address", value: "689/1 Meechai Road" },
      { label: "Unlike", value: "Sai krok, the sour sausage" },
    ],
    chips: ["Nam nuang", "Meechai", "Nong Khai"],
    photo: "/photos/food-b9-meechai.jpg",
    geo: { lat: 17.878, lon: 102.742, containedIn: "Nong Khai" },
    paragraphs: [
      "The wrap set is 120 to 220 THB at 689/1 Meechai Road. Build it with a rice sheet, herbs, pork, and sauce. It is not the sour Isan sausage.",
      "**Skip this, go here:** Sai krok at 30 to 60 THB is sour sausage, not this herb wrap. The set is 120 to 220 THB on the [nam nuang page](/thai-food/nong-khai--nam-nuang).",
    ],
    portraits: [
      { title: "Nam nuang", href: "/thai-food/nong-khai--nam-nuang", photo: "/photos/pak-chong.jpg" },
      { title: "Nong Khai food", href: "/thai-food/nong-khai", photo: "/photos/khao-yai.jpg" },
      { title: "Isan food", href: "/thai-food/isan", photo: "/photos/thai-food-night-markets.jpg" },
      { title: "Udon food", href: "/thai-food/udon-thani", photo: "/photos/ari.jpg" },
    ],
    affiliates: [
      stay("Bangkok stays, or the night train", "Mekong lunch", "Sleep in Nong Khai if Meechai is dinner. The search below starts in Bangkok.", stayLink('bangkok'), "/photos/sukhumvit.jpg"),
      klook("Nong Khai day", "The Mekong promenade is a walk, not a tour ticket.", "Nong Khai", "/photos/haew-suwat.jpg"),
    ],
    faqs: [
      { q: "How much is the wrap set?", a: "120 to 220 THB at Daeng Namnuang, 10:00 to 20:00." },
      { q: "Is nam nuang a Thai sausage?", a: "No. It is a Vietnamese-style pork wrap. Sai krok is the sour Isan sausage." },
    ],
  },

  {
    path: "/thai-food/koh-phangan-wok-tum-food",
    title: "Wok Tum food guide",
    description: "Wok Tum on Koh Phangan is known for deep-fried fermented catfish, 1,000 THB a dinner at Dear Phangan, for tables that book ahead in Wok Tum.",
    lede: "Deep-fried fermented catfish is a crisp fish with a moist centre, known for the funk under the crust. Dear Phangan in Wok Tum cooks it only for tables that are booked.",
    schema: "Article",
    crumbs: [
      { name: "Thai food", href: "/thai-food" },
      { name: "Koh Phangan", href: "/thai-food/koh-phangan" },
      { name: "Wok Tum", href: "/thai-food/koh-phangan-wok-tum-food" },
    ],
    facts: [
      { label: "Dinner", value: "1,000 THB" },
      { label: "Address", value: "13/9 Mu 4, Wok Tum" },
      { label: "Clock", value: "Booked covers only" },
      { label: "Island", value: "Koh Phangan" },
    ],
    chips: ["Catfish", "Wok Tum", "Phangan"],
    photo: "/photos/food-b9-wok-tum.jpg",
    geo: { lat: 9.706, lon: 100.024, containedIn: "Koh Phangan" },
    paragraphs: [
      "The kitchen at 13/9 Mu 4 cooks only the covers that are booked, so there is no public walk-in clock. A dinner is 1,000 THB, and the menu moves with the catch.",
      "**Skip this, go here:** Full Moon party stalls will not have this fish, which is cooked only for booked covers at 1,000 THB. The dish page is [fermented catfish](/thai-food/koh-phangan--fermented-catfish).",
    ],
    portraits: [
      { title: "Fermented catfish", href: "/thai-food/koh-phangan--fermented-catfish", photo: "/photos/koh-phangan.jpg" },
      { title: "Koh Phangan food", href: "/thai-food/koh-phangan", photo: "/photos/koh-tao.jpg" },
      { title: "Koh Phangan", href: "/koh-phangan", photo: "/photos/chaweng.jpg" },
      { title: "Koh Samui food", href: "/thai-food/koh-samui", photo: "/photos/koh-samui.jpg" },
    ],
    affiliates: [
      stay("Koh Phangan stays", "Wok Tum or Thong Sala", "Sleep on the island if this dinner is the night.", stayLink('koh-phangan'), "/photos/lamai.jpg"),
      klook("Phangan boats", "The ferry is separate from this table.", "Koh Phangan tour", "/photos/ferry-gulf.jpg"),
    ],
    faqs: [
      { q: "Can I walk in for the catfish?", a: "No. The kitchen cooks only the covers that are booked." },
      { q: "What does dinner cost?", a: "A dinner is 1,000 THB. The fish is part of that sitting, not a separate posted plate price." },
    ],
  },

];
