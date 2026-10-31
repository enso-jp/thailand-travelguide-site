import { dishesForCity } from './dish-factory';
import type { DishRecord, FoodSpot } from './dish-model';

type Faq = DishRecord['faqs'][number];

type Spec = {
  slug: string;
  title: string;
  nameLocal: string;
  orderLocal: string;
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
  spot: string;
  address: string;
  hours?: string;
  spotPrice: string;
  note: string;
  related: string[];
  room: string;
  clock?: string;
  standalone?: boolean;
  faqs: Faq[];
};

function pack7(city: string, rows: Spec[]): DishRecord[] {
  return dishesForCity(
    city as DishRecord['city'],
    rows.map((row) => {
      const spot: FoodSpot = {
        name: row.spot,
        address: row.address,
        ...(row.hours ? { hours: row.hours } : {}),
        price: row.spotPrice,
        note: row.note,
      };
      return {
        slug: row.slug,
        title: row.title,
        nameLocal: row.nameLocal,
        orderLocal: row.orderLocal,
        hook: row.hook,
        lede: row.lede,
        description: row.description,
        taste: row.taste,
        orderName: row.orderName,
        orderPhrase: row.orderPhrase,
        orderNote: row.orderNote,
        price: row.price,
        spice: row.spice,
        diet: row.diet,
        spots: [spot],
        related: row.related,
        photo: `/photos/dish-b7-${city}-${row.slug}.jpg`,
        room: row.room,
        ...(row.clock ? { clock: row.clock } : {}),
        ...(row.standalone ? { standalone: true } : {}),
        faqs: row.faqs,
      };
    }),
  );
}

export const AYUTTHAYA_B7: DishRecord[] = pack7('ayutthaya', [
  {
    slug: "lotus-root-curry",
    title: "Lotus Root Curry",
    nameLocal: "แกงเหลืองรากบัว",
    orderLocal: "แกงเหลืองรากบัว",
    hook: "Thin Herbal Soup in Wat Tum",
    lede: "Lotus root curry is a thin yellow herbal soup, known for lotus root and the sweet taste of river shrimp, not a thick coconut curry. Baan Pu Karn in Wat Tum serves it Wednesday to Monday, 09:30 to 16:30.",
    description: "Lotus root curry is a light herbal soup with river shrimp, known for lotus in a thin broth. Baan Pu Karn in Wat Tum cooks it. The lotus-and-shrimp bowl is 180 THB.",
    taste: "Herb broth, lotus root, and shrimp. Lighter than a red curry. Rice sits beside the bowl.",
    orderName: "kaeng lueang rak bua",
    orderPhrase: "Khor kaeng lueang rak bua, khrap/kha.",
    orderNote: "Closed Tuesday. Arrive early. The room does not take bookings. The lotus-and-shrimp bowl is 180 THB.",
    price: "180 THB",
    spice: "Mild herbs, with chili on the side.",
    diet: "Shrimp. Ask which pots are vegetable.",
    spot: "Baan Pu Karn",
    address: "15 Mu 5, Wat Tum, Phra Nakhon Si Ayutthaya 13000",
    hours: "09:30 to 16:30; closed Tuesday",
    spotPrice: "180 THB",
    note: "**Skip this, go here:** skip the crab stir-fry at 450 THB if you came for the herbal bowl. The yellow curry with lotus and shrimp is 180 THB.",
    related: ["shredded-chicken-noodle", "khanom-mo-kaeng", "guay-tiew-reua"],
    room: "Baan Pu Karn, Wat Tum",
    clock: "09:30 to 16:30; closed Tue",
    faqs: [
      { q: "Is this a thick coconut curry?", a: "No. It is a thin herbal soup with lotus root and river shrimp." },
      { q: "Which day is the kitchen closed?", a: "Tuesday. The other days run 09:30 to 16:30, and the room does not take bookings." }
    ],
  },
  {
    slug: "khanom-mo-kaeng",
    title: "Khanom Mo Kaeng",
    nameLocal: "ขนมหม้อแกง",
    orderLocal: "ขนมหม้อแกง",
    hook: "Coconut Custard in Phai Ling",
    lede: "Khanom mo kaeng is a baked coconut custard, known for a silky centre and a browned top. Mae Yai in Phai Ling squeezes the coconut milk each morning, daily from 07:00 to 19:00.",
    description: "Khanom mo kaeng is baked coconut custard with a browned top, known for a silky centre. Mae Yai in Phai Ling presses the coconut milk each morning. A cup price is not published.",
    taste: "Egg, palm sugar, and fresh coconut. The top should be set, not wet.",
    orderName: "khanom mo kaeng",
    orderPhrase: "Khor khanom mo kaeng, khrap/kha.",
    orderNote: "The shop also keeps sweet sorghum and piak pun. The custard is the named order. A cup price is not published.",
    price: "Cup price not published",
    spice: "None.",
    diet: "Egg and coconut. Not a savoury lunch.",
    spot: "Khanom Mo Kaeng Mae Yai (Phai Ling)",
    address: "95 Mu 7, Phai Ling, Phra Nakhon Si Ayutthaya 13000",
    hours: "07:00 to 19:00 daily",
    spotPrice: "Cup price not published",
    note: "**Skip this, go here:** skip the gold-drop sweets, tagged at 30 THB in the case, if you came for the custard. The baked mo kaeng is the sweet this counter is known for.",
    related: ["roti-sai-mai", "lotus-root-curry", "shredded-chicken-noodle"],
    room: "Mae Yai, Phai Ling",
    clock: "07:00 to 19:00 daily",
    faqs: [
      { q: "Is the custard a full meal?", a: "No. It is the sweet after lunch, not a savoury plate." },
      { q: "What hours is the counter open?", a: "Daily from 07:00 to 19:00. Morning is when the case is fullest." }
    ],
  },
  {
    slug: "clear-tofu-soup",
    title: "Clear Tofu Soup",
    nameLocal: "แกงจืดเต้าหู้หมูสับ",
    orderLocal: "แกงจืดเต้าหู้หมูสับ",
    hook: "Mild Bowl on Soi U Thong 7",
    lede: "Clear tofu soup is a light pork-and-tofu broth, known for being the mild bowl when the rest of the table is hot. Baan Mai Rim Nam on Soi U Thong 7 keeps it from 10:00 to 21:00 daily.",
    description: "Clear tofu soup is a mild pork broth with soft tofu, known as the quiet bowl beside hotter plates. Baan Mai Rim Nam serves it. The menu page does not print a price for this soup.",
    taste: "Clear broth, minced pork, and tofu. A pause between hotter plates.",
    orderName: "kaeng juet tao hu mu sap",
    orderPhrase: "Khor kaeng juet tao hu mu sap, khrap/kha.",
    orderNote: "Salt-baked prawns on the same menu are 400 THB. This soup is the mild bowl, and its price is not printed.",
    price: "Not printed on the menu",
    spice: "None in the soup.",
    diet: "Pork. Ask if you want it without meat.",
    spot: "Baan Mai Rim Nam",
    address: "33 Soi U Thong 7, Pratu Chai, Phra Nakhon Si Ayutthaya 13000",
    hours: "10:00 to 21:00 daily",
    spotPrice: "Not printed on the menu",
    note: "**Skip this, go here:** skip the salt-baked prawns at 400 THB if you want the mild bowl. The clear tofu soup is the quiet plate on the same menu.",
    related: ["lotus-root-curry", "kung-mae-nam", "khanom-mo-kaeng"],
    room: "Baan Mai Rim Nam",
    clock: "10:00 to 21:00 daily",
    faqs: [
      { q: "Is the soup spicy?", a: "No. It is a clear pork-and-tofu broth, a pause between hotter plates." },
      { q: "What does a bowl cost?", a: "The menu does not print a price for this soup. Salt-baked prawns on that menu are 400 THB." }
    ],
  },
]);

export const PATTAYA_B7: DishRecord[] = pack7('pattaya', [
  {
    slug: "beef-noodle-soup",
    title: "Beef Noodle Soup",
    nameLocal: "ก๋วยเตี๋ยวเนื้อ",
    orderLocal: "ก๋วยเตี๋ยวเนื้อรวม",
    hook: "Clear and Amber Broth on Chaiyaphruek",
    lede: "Beef noodle soup here is a long-simmered beef broth, known for a clear bowl and an amber bowl with several cuts in one order. La Voi on Chaiyaphruek Road is open Tuesday to Sunday and closed Monday.",
    description: "Beef noodle soup is a beef broth with meatballs and several cuts, known for clear and amber soup together. La Voi serves the mixed bowl at 150 THB.",
    taste: "Beef broth, tendon, meat, and meatballs. Clear or amber. Noodles on the side of the spoon.",
    orderName: "kuai tiao nuea ruam",
    orderPhrase: "Khor kuai tiao nuea ruam, khrap/kha.",
    orderNote: "Tuesday to Friday 09:00 to 18:00. Saturday and Sunday 09:00 to 16:30. Closed Monday. The mixed bowl is 150 THB.",
    price: "150 THB for the mixed bowl",
    spice: "Mild. Chili vinegar is on the table.",
    diet: "Beef.",
    spot: "La Voi",
    address: "324/61 Chaiyaphruek Rd, Nong Prue, Bang Lamung, Chon Buri 20150",
    hours: "Tue to Fri 09:00 to 18:00; Sat and Sun 09:00 to 16:30; closed Monday",
    spotPrice: "150 THB for the mixed bowl",
    note: "**Skip this, go here:** skip a Walking Street seafood grill if you want beef broth. La Voi's mixed bowl is 150 THB, with clear and amber soup in one order.",
    related: ["squid-ink-stir", "som-tum-pattaya", "nang-nual-seafood"],
    room: "La Voi, Nong Prue",
    clock: "Tue to Fri 09:00 to 18:00; Sat and Sun 09:00 to 16:30",
    faqs: [
      { q: "Should I order one broth or both?", a: "Start with the mixed beef soup. It comes with clear broth and amber broth, plus several cuts." },
      { q: "What are the opening hours?", a: "Tuesday to Friday 09:00 to 18:00. Saturday and Sunday 09:00 to 16:30. The shop is closed Monday." }
    ],
  },
]);

export const KOH_SAMUI_B7: DishRecord[] = pack7('koh-samui', [
  {
    slug: "crab-coconut-curry",
    title: "Crab Coconut Curry",
    nameLocal: "แกงกะทิปู",
    orderLocal: "แกงกะทิปูใบกะเพรา",
    hook: "Mae Nam Pot with Shrubby Basil",
    lede: "Crab coconut curry is a coconut gravy with crab, known for shrubby basil, with wild betel as a swap. Jun Hom in Mae Nam runs 11:00 to 20:00 daily.",
    description: "Crab coconut curry is a coconut gravy with crab and shrubby basil, known for a rich pot cooked to order. Jun Hom in Mae Nam serves it at 450 THB.",
    taste: "Coconut, crab, and basil. Richer than a clear tom yum. Each plate is cooked to order.",
    orderName: "kaeng kathi pu bai kraphrao",
    orderPhrase: "Khor kaeng kathi pu, khrap/kha.",
    orderNote: "Daily 11:00 to 20:00. The crab coconut curry is 450 THB. Ask for wild betel if you do not want the shrubby basil.",
    price: "450 THB",
    spice: "Medium. The curry paste carries heat.",
    diet: "Crab and coconut.",
    spot: "Jun Hom",
    address: "8/3 Mu 5, Mae Nam, Koh Samui, Surat Thani 84330",
    hours: "11:00 to 20:00 daily",
    spotPrice: "450 THB",
    note: "**Skip this, go here:** skip a Chaweng beach grill if you want crab in coconut gravy. Jun Hom in Mae Nam cooks that curry to order at 450 THB.",
    related: ["swimming-crab-set", "gaeng-som-bang-po", "chaweng-grilled-fish"],
    room: "Jun Hom, Mae Nam",
    clock: "11:00 to 20:00 daily",
    faqs: [
      { q: "Is this a beach grill?", a: "No. It is an open-air southern kitchen in Mae Nam, and each plate is cooked to order." },
      { q: "How late does the kitchen run?", a: "Daily until 20:00. The room opens at 11:00." }
    ],
  },
  {
    slug: "coconut-fish-curry",
    title: "Coconut Fish Curry",
    nameLocal: "แกงกะทิปลา",
    orderLocal: "แกงกะทิปลา",
    hook: "Bo Phut Gravy at Khao Hom",
    lede: "Coconut fish curry is fish in a coconut gravy, known for a milder pot than a southern sour curry. Khao Hom at 34/36 Mu 4, Bo Phut, runs 11:00 to 21:30 daily.",
    description: "Coconut fish curry is a coconut gravy with fish, milder than a sour curry. Khao Hom in Bo Phut cooks it. A plate price for this pot is not printed.",
    taste: "Coconut milk, fish, and a light chili. Softer than gaeng som.",
    orderName: "kaeng kathi pla",
    orderPhrase: "Khor kaeng kathi pla, khrap/kha.",
    orderNote: "Daily 11:00 to 21:30. Bai liang with egg is the vegetable plate. Tom yum on the menu is 220 THB.",
    price: "Not printed on the menu",
    spice: "Medium. Say pet nit noi.",
    diet: "Fish and coconut.",
    spot: "Khao Hom",
    address: "34/36 Mu 4, Bo Phut, Koh Samui, Surat Thani",
    hours: "11:00 to 21:30 daily",
    spotPrice: "Not printed on the menu",
    note: "**Skip this, go here:** skip the tom yum at 220 THB if you want fish in coconut milk. This gravy is the milder curry.",
    related: ["crab-coconut-curry", "gaeng-som-bang-po", "khao-man-gai-samui"],
    room: "Khao Hom, Bo Phut",
    clock: "11:00 to 21:30 daily",
    faqs: [
      { q: "Is this the sour curry?", a: "No. This pot is fish in coconut milk, milder than gaeng som." },
      { q: "What does the curry cost?", a: "A plate price for this curry is not printed. Tom yum on the same menu is 220 THB." }
    ],
  },
]);

export const KOH_PHANGAN_B7: DishRecord[] = pack7('koh-phangan', [
  {
    slug: "fermented-catfish",
    title: "Fermented Catfish",
    nameLocal: "ปลาดุกหมักทอด",
    orderLocal: "ปลาดุกหมักทอด",
    hook: "Crisp Fish in Wok Tum",
    lede: "Deep-fried fermented catfish is a crisp, moist fish, known for the funk of the ferment under a dry crust. Dear Phangan in Wok Tum cooks it only for booked tables.",
    description: "Deep-fried fermented catfish is crisp outside and moist inside, known for the funk under the crust. Dear Phangan in Wok Tum cooks only booked tables. A dinner is 1,000 THB.",
    taste: "Fermented fish, a dry crust, and a moist centre. Sharper than a plain fry.",
    orderName: "pla duk mak thot",
    orderPhrase: "Khor pla duk mak thot, khrap/kha.",
    orderNote: "There is no fixed public clock. The kitchen cooks only the covers that are booked. A dinner is 1,000 THB.",
    price: "1,000 THB a dinner",
    spice: "Medium, and it changes with the day.",
    diet: "Fish. The menu is not fixed.",
    spot: "Dear Phangan",
    address: "13/9 Mu 4, Wok Tum, Koh Phangan, Surat Thani 84280",
    spotPrice: "1,000 THB a dinner",
    note: "**Skip this, go here:** skip a Full Moon party stall if you want this fish. Dear Phangan cooks only for tables booked ahead, and the dinner is 1,000 THB.",
    related: ["khao-gaeng", "som-tum", "chaloklum-seafood"],
    room: "Dear Phangan, Wok Tum",
    faqs: [
      { q: "Can you walk in for dinner?", a: "No. The kitchen cooks only the covers that are booked, so reserve before you go." },
      { q: "What does dinner cost?", a: "A dinner on the booking page is 1,000 THB. The menu changes with the catch, so the fish is not a separate plate price." }
    ],
  },
]);

export const KRABI_B7: DishRecord[] = pack7('krabi', [
  {
    slug: "crab-relish",
    title: "Crab Relish",
    nameLocal: "หลนปูม้า",
    orderLocal: "หลนปูม้า",
    hook: "Simmered Blue Crab in Pak Nam",
    lede: "Lon pu ma is blue crab simmered into a thick relish, known for coconut, chili, and meat you eat with vegetables. Ruen Thip on Naowarat in Pak Nam runs 10:00 to 21:30 daily.",
    description: "Lon pu ma is a thick blue-crab relish, known for coconut and chili eaten with vegetables. Ruen Thip in Pak Nam cooks it. A current plate price is not printed.",
    taste: "Crab, coconut milk, and chili. Thick, eaten with vegetables, not poured over a mound of rice alone.",
    orderName: "lon pu ma",
    orderPhrase: "Khor lon pu ma, khrap/kha.",
    orderNote: "Daily 10:00 to 21:30. The address is 16 Naowarat, Pak Nam. A current price for the relish is not printed.",
    price: "Not printed on the menu",
    spice: "Medium to hot.",
    diet: "Crab and coconut.",
    spot: "Ruen Thip",
    address: "16 Naowarat, Pak Nam, Mueang Krabi, Krabi",
    hours: "10:00 to 21:30 daily",
    spotPrice: "Not printed on the menu",
    note: "**Skip this, go here:** skip a whole fried crab if you want the meat already cooked down. Lon is the thick relish, eaten with vegetables.",
    related: ["phak-miang-egg", "kanom-jeen-nam-ya-poo", "gaeng-som-krabi"],
    room: "Ruen Thip, Pak Nam",
    clock: "10:00 to 21:30 daily",
    faqs: [
      { q: "Is the relish a whole crab?", a: "No. The crab meat is cooked down into a thick coconut relish, and you eat it with vegetables." },
      { q: "Where in Krabi town is the room?", a: "Pak Nam, at 16 Naowarat. The kitchen runs 10:00 to 21:30 daily." },
      { q: "What does the relish cost?", a: "A current menu price is not printed. A review on 8 September 2021 paid 150 THB for the relish." }
    ],
  },
]);

export const HUA_HIN_B7: DishRecord[] = pack7('hua-hin', [
  {
    slug: "bird-eye-sour-curry",
    title: "Sour Fish Curry",
    nameLocal: "แกงส้มพริกนก",
    orderLocal: "แกงส้มพริกนกปลากระพง",
    hook: "Sea Bass Bowl",
    lede: "Bird's-eye sour curry is a sour fish curry spiked with prik ki nu, known for a sharp broth over sea bass. Ko Mark, at the mouth of Hua Hin Soi 30, closes from 16:00 to 17:00 between lunch and dinner.",
    description: "Bird's-eye sour curry is a sharp sour broth with sea bass, known for bird's-eye chili. Ko Mark at Hua Hin Soi 30 serves the bowl at 280 THB.",
    taste: "Tamarind, bird's-eye chili, and fish. Hotter than a mild gaeng som.",
    orderName: "kaeng som phrik nok pla kapong",
    orderPhrase: "Khor kaeng som phrik nok pla kapong, pet nit noi, khrap/kha.",
    orderNote: "Daily 11:00 to 16:00 and 17:00 to 21:00. The sea bass bowl is 280 THB.",
    price: "280 THB",
    spice: "Hot. Say pet nit noi.",
    diet: "Fish.",
    spot: "Ko Mark",
    address: "Mouth of Hua Hin Soi 30, Phetkasem Rd, Hua Hin",
    hours: "11:00 to 16:00 and 17:00 to 21:00 daily",
    spotPrice: "280 THB",
    note: "**Skip this, go here:** skip a sweet tom yum if you want Hua Hin's sharp bowl. This sour curry is sea bass and bird's-eye chili, at 280 THB.",
    related: ["chu-chi-prawns", "pla-pao-hh", "hoi-tod-hh"],
    room: "Ko Mark, Soi 30",
    clock: "11:00 to 16:00 and 17:00 to 21:00",
    faqs: [
      { q: "Does the kitchen stay open all afternoon?", a: "No. It closes from 16:00 to 17:00 between lunch and dinner, then opens again until 21:00." },
      { q: "How hot is the bowl?", a: "It is spiked with bird's-eye chili. Say pet nit noi if you want it milder." }
    ],
  },
]);

export const STANDALONE_B7: DishRecord[] = pack7('bangkok', [
  {
    slug: "five-spice-pork-eggs",
    title: "Five-Spice Pork and Eggs",
    nameLocal: "หมูตุ๋นไข่พะโล้",
    orderLocal: "หมูตุ๋นไข่พะโล้",
    hook: "Spiced Stew on Suan Phlu",
    lede: "Five-spice pork and eggs is pork belly and soft eggs braised in a spiced broth, known for tofu that drinks the gravy. Plu on Soi Phra Phinit serves it at 375 THB before VAT and service.",
    description: "Five-spice pork and eggs is a spiced pork stew with soft eggs, known for tofu that takes the gravy. Plu on Soi Phra Phinit prices it at 375 THB before VAT and service.",
    taste: "Five spice, soy, soft egg, and pork belly. The tofu takes the broth.",
    orderName: "mu tun khai phalo",
    orderPhrase: "Khor mu tun khai phalo, khrap/kha.",
    orderNote: "Daily 11:00 to 14:00 and 17:00 to 21:30. The 375 THB is before 7 percent VAT and 10 percent service.",
    price: "375 THB before VAT and service",
    spice: "Mild spice, not a chili fry.",
    diet: "Pork and egg.",
    spot: "Plu",
    address: "3 Soi Phra Phinit, Suan Phlu Rd, Thung Maha Mek, Sathon, Bangkok 10120",
    hours: "11:00 to 14:00 and 17:00 to 21:30 daily",
    spotPrice: "375 THB before VAT and service",
    note: "**Skip this, go here:** skip khao kha moo, the dry pork-leg plate, if you want meat in a spiced gravy. This bowl is belly, soft egg, and tofu at 375 THB before VAT and service.",
    related: ["son-in-law-eggs", "rice-cracker-dip", "khao-kha-moo"],
    room: "Plu, Suan Phlu",
    clock: "11:00 to 14:00 and 17:00 to 21:30",
    standalone: true,
    faqs: [
      { q: "What is the menu price?", a: "375 THB before 7 percent VAT and 10 percent service." },
      { q: "When is lunch, and when does dinner start?", a: "Lunch is 11:00 to 14:00. Dinner is 17:00 to 21:30. The kitchen is closed between the two." }
    ],
  },
  {
    slug: "son-in-law-eggs",
    title: "Son-in-Law Eggs",
    nameLocal: "ไข่ลูกเขย",
    orderLocal: "ไข่ลูกเขย",
    hook: "Fried Eggs in Tamarind",
    lede: "Son-in-law eggs are boiled eggs fried and dressed in tamarind, palm sugar, and fish sauce, known for a sour-sweet shell. Plu prices them at 150 THB before VAT and service.",
    description: "Son-in-law eggs are fried boiled eggs in a tamarind sauce, known for a sour-sweet shell. Plu on Soi Phra Phinit prices them at 150 THB before VAT and service.",
    taste: "Crisp egg white, tamarind, and palm sugar. A small plate, often with fried shallot.",
    orderName: "khai luk khoei",
    orderPhrase: "Khor khai luk khoei, khrap/kha.",
    orderNote: "The same room as the five-spice stew. 150 THB is before tax and service. A plain omelette on the menu is 140 THB.",
    price: "150 THB before VAT and service",
    spice: "Mild.",
    diet: "Egg and fish sauce.",
    spot: "Plu",
    address: "3 Soi Phra Phinit, Suan Phlu Rd, Thung Maha Mek, Sathon, Bangkok 10120",
    hours: "11:00 to 14:00 and 17:00 to 21:30 daily",
    spotPrice: "150 THB before VAT and service",
    note: "**Skip this, go here:** skip the plain omelette at 140 THB. These are boiled eggs fried and dressed in tamarind, at 150 THB before VAT and service.",
    related: ["five-spice-pork-eggs", "rice-cracker-dip", "kai-jeow-pu"],
    room: "Plu, Suan Phlu",
    clock: "11:00 to 14:00 and 17:00 to 21:30",
    standalone: true,
    faqs: [
      { q: "Is this a main plate?", a: "It is a small plate at 150 THB before VAT and service, not a rice meal on its own." },
      { q: "Where is the restaurant?", a: "Plu, 3 Soi Phra Phinit, off Suan Phlu Road in Sathon." }
    ],
  },
  {
    slug: "miang-leaf-wrap",
    title: "Miang Kham",
    nameLocal: "เมี่ยงคำ",
    orderLocal: "เมี่ยงคำ",
    hook: "One-Bite Betel Wrap",
    lede: "Miang kham is a wild betel leaf wrapped around coconut, ginger, lime, and a palm-sugar sauce, known as a single bite. Plu prices the wrap at 195 THB before VAT and service.",
    description: "Miang kham is a betel-leaf bite with coconut and palm sugar, known as one leaf eaten whole. Plu on Soi Phra Phinit prices it at 195 THB before VAT and service.",
    taste: "Leaf, toasted coconut, lime, chili, and a sweet salty sauce. One wrap, one bite.",
    orderName: "miang kham",
    orderPhrase: "Khor miang kham, khrap/kha.",
    orderNote: "195 THB before VAT and service. Eat each leaf whole. The rice-cracker dip on the same menu is 235 THB.",
    price: "195 THB before VAT and service",
    spice: "A little chili in the sauce.",
    diet: "Often dried shrimp. Ask if you skip seafood.",
    spot: "Plu",
    address: "3 Soi Phra Phinit, Suan Phlu Rd, Thung Maha Mek, Sathon, Bangkok 10120",
    hours: "11:00 to 14:00 and 17:00 to 21:30 daily",
    spotPrice: "195 THB before VAT and service",
    note: "**Skip this, go here:** skip the rice-cracker dip at 235 THB if you want one leaf and one bite. Miang kham is toasted coconut, lime, and palm sugar, at 195 THB before VAT and service.",
    related: ["rice-cracker-dip", "son-in-law-eggs", "nam-prik-kapi"],
    room: "Plu, Suan Phlu",
    clock: "11:00 to 14:00 and 17:00 to 21:30",
    standalone: true,
    faqs: [
      { q: "How do you eat a wrap?", a: "Fold the leaf around the filling and eat it in one bite. Do not pick it apart." },
      { q: "Does it contain dried shrimp?", a: "Often, yes. Ask before you order if you skip seafood." }
    ],
  },
]);
