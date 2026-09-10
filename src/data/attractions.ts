export type AttractionCategory =
  | "Coast & Cliffs"
  | "Seafront"
  | "Culture"
  | "Heritage"
  | "Food & Drink"
  | "Nature"
  | "Family";

export interface Attraction {
  id: string;
  name: string;
  category: AttractionCategory;
  tagline: string;
  description: string;
  highlights: string[];
  duration: string;
  bestTime: string;
  price: string;
  location: string;
  coords: { lat: number; lng: number };
  rating: number;
  reviews: number;
  image: string;
  imageAlt: string;
  /** Photographer or rights holder, as required by the image licence. */
  imageCredit?: string;
  /** Short licence label, e.g. "CC BY-SA 4.0" or "CC0". */
  imageLicense?: string;
  /** File or photo page on Wikimedia Commons / Geograph. */
  imageSourceUrl?: string;
  tips: string[];
  tags: string[];
  featured?: boolean;
}

export const CATEGORIES: AttractionCategory[] = [
  "Coast & Cliffs",
  "Seafront",
  "Culture",
  "Heritage",
  "Food & Drink",
  "Nature",
  "Family",
];

export const attractions: Attraction[] = [
  {
    id: "beachy-head",
    name: "Beachy Head",
    category: "Coast & Cliffs",
    tagline: "England's highest chalk cliff",
    description:
      "Stand atop 162 metres of brilliant white chalk and look out over the English Channel. Beachy Head is Eastbourne's signature natural landmark — wild, dramatic, and unforgettable at sunrise or sunset.",
    highlights: [
      "Panoramic Channel views",
      "Beachy Head Lighthouse below",
      "South Downs Way trailhead",
      "Wildflower meadows in summer",
    ],
    duration: "1–3 hours",
    bestTime: "Sunrise or golden hour",
    price: "Free",
    location: "Beachy Head Rd, Eastbourne BN20 7YA",
    coords: { lat: 50.7378, lng: 0.2478 },
    rating: 4.8,
    reviews: 12840,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/4/42/Beachy_Head_and_Lighthouse%2C_East_Sussex%2C_England_-_April_2010_crop_horizon_corrected.jpg",
    imageAlt: "Dramatic chalk cliffs overlooking the sea at Beachy Head",
    imageCredit: "Diliff / Papa Lima Whiskey",
    imageLicense: "CC BY-SA 3.0",
    imageSourceUrl:
      "https://commons.wikimedia.org/wiki/File:Beachy_Head_and_Lighthouse,_East_Sussex,_England_-_April_2010_crop_horizon_corrected.jpg",
    tips: [
      "Wear sturdy shoes — paths can be muddy after rain",
      "Stay well back from the cliff edge",
      "Pair with Birling Gap café for a full coastal day",
    ],
    tags: ["views", "walking", "photography", "free"],
    featured: true,
  },
  {
    id: "seven-sisters",
    name: "Seven Sisters & Birling Gap",
    category: "Coast & Cliffs",
    tagline: "World-famous chalk coastline",
    description:
      "Seven undulating chalk cliffs rolling into the Channel — one of Britain's most photographed coastlines. Birling Gap gives easy access to the beach and National Trust facilities.",
    highlights: [
      "Iconic cliff walk",
      "Pebble beach at Birling Gap",
      "National Trust visitor centre",
      "Fossil hunting at low tide",
    ],
    duration: "2–5 hours",
    bestTime: "Morning, low tide for beach",
    price: "Free (parking charges)",
    location: "Birling Gap, East Dean BN20 0AB",
    coords: { lat: 50.7431, lng: 0.2008 },
    rating: 4.9,
    reviews: 15620,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/6/6f/Seven_Sisters_March_2017_02.jpg",
    imageAlt: "Rolling white chalk cliffs of the Seven Sisters coastline",
    imageCredit: "Arild Vågen",
    imageLicense: "CC BY-SA 4.0",
    imageSourceUrl:
      "https://commons.wikimedia.org/wiki/File:Seven_Sisters_March_2017_02.jpg",
    tips: [
      "Check tide times before beach access",
      "National Trust members get free parking",
      "The Cuckmere Valley walk is a gentler alternative",
    ],
    tags: ["walking", "nature", "photography", "national-trust"],
    featured: true,
  },
  {
    id: "eastbourne-pier",
    name: "Eastbourne Pier",
    category: "Seafront",
    tagline: "Victorian elegance over the waves",
    description:
      "A Grade II* listed pier stretching into the Channel. Arcade games, fish and chips, photo spots, and pure British seaside charm — especially magical when lit at night.",
    highlights: [
      "Victorian architecture",
      "Amusements & arcade",
      "Sea views from the end",
      "Night-time illuminations",
    ],
    duration: "45–90 mins",
    bestTime: "Afternoon or evening",
    price: "Free to walk",
    location: "Grand Parade, Eastbourne BN21 3EL",
    coords: { lat: 50.7665, lng: 0.2912 },
    rating: 4.5,
    reviews: 9430,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/4/43/Eastbourne_Pier_April_2018_01.jpg",
    imageAlt: "Classic British seaside pier stretching over the water",
    imageCredit: "Arild Vågen",
    imageLicense: "CC BY-SA 4.0",
    imageSourceUrl:
      "https://commons.wikimedia.org/wiki/File:Eastbourne_Pier_April_2018_01.jpg",
    tips: [
      "Great for families and rainy-day amusements",
      "Combine with a seafront stroll to the Bandstand",
      "Watch for seasonal events on the deck",
    ],
    tags: ["iconic", "family", "seafront", "free"],
    featured: true,
  },
  {
    id: "seafront-promenade",
    name: "Seafront Promenade & Bandstand",
    category: "Seafront",
    tagline: "Three miles of palm-lined coast",
    description:
      "Stroll Eastbourne's famous palm-lined promenade from Holywell to the Sovereign Centre. Stop at the Art Deco Bandstand for free summer concerts, ice cream, and people-watching.",
    highlights: [
      "Art Deco Bandstand",
      "Palm trees & flower beds",
      "Blue Flag beaches",
      "Wish Tower & Western Lawns",
    ],
    duration: "1–3 hours",
    bestTime: "Any day, summer concerts",
    price: "Free",
    location: "Grand Parade, Eastbourne",
    coords: { lat: 50.7648, lng: 0.2885 },
    rating: 4.7,
    reviews: 6120,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/5/56/Eastbourne_Bandstand_and_Lower_Promenade.jpg",
    imageAlt: "Sunny beach promenade along the English coast",
    imageCredit: "TrickyWikiWoo",
    imageLicense: "CC BY 4.0",
    imageSourceUrl:
      "https://commons.wikimedia.org/wiki/File:Eastbourne_Bandstand_and_Lower_Promenade.jpg",
    tips: [
      "Bandstand concerts run through summer free of charge",
      "Hire a beach hut for a proper seaside day",
      "Cycle the flat promenade path east towards the Harbour",
    ],
    tags: ["walking", "free", "family", "music"],
    featured: true,
  },
  {
    id: "sovereign-harbour",
    name: "Sovereign Harbour",
    category: "Seafront",
    tagline: "UK's largest marina complex",
    description:
      "Four linked harbours packed with yachts, waterside restaurants, shops, and a cinema. Perfect for a relaxed evening meal or boat-spotting stroll.",
    highlights: [
      "Waterside dining",
      "Yacht watching",
      "Shops & cinema",
      "Harbour walks",
    ],
    duration: "2–4 hours",
    bestTime: "Evening for dining",
    price: "Free to visit",
    location: "Harbour Quay, Eastbourne BN23 5QF",
    coords: { lat: 50.7905, lng: 0.3308 },
    rating: 4.4,
    reviews: 4210,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/4/49/Marina_at_Sovereign_Harbour%2C_Eastbourne_-_geograph.org.uk_-_1383841.jpg",
    imageAlt: "Marina boats moored at a coastal harbour",
    imageCredit: "Oast House Archive",
    imageLicense: "CC BY-SA 2.0",
    imageSourceUrl:
      "https://commons.wikimedia.org/wiki/File:Marina_at_Sovereign_Harbour,_Eastbourne_-_geograph.org.uk_-_1383841.jpg",
    tips: [
      "Book harbour-side restaurants on summer weekends",
      "Look for harbour boat trips in peak season",
      "Easy free parking evenings and weekends",
    ],
    tags: ["dining", "marina", "shopping", "evening"],
  },
  {
    id: "towner",
    name: "Towner Eastbourne",
    category: "Culture",
    tagline: "Contemporary art by the sea",
    description:
      "One of the South East's leading contemporary galleries, home to the Eric Ravilious collection and rotating world-class exhibitions. Free permanent collection access.",
    highlights: [
      "Eric Ravilious works",
      "Contemporary exhibitions",
      "Café with sea views",
      "Family workshops",
    ],
    duration: "1–2 hours",
    bestTime: "Weekday mornings",
    price: "Free entry (special shows may charge)",
    location: "Devonshire Park, College Rd BN21 4JJ",
    coords: { lat: 50.7639, lng: 0.2815 },
    rating: 4.6,
    reviews: 3180,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/d4/Towner_Contemporary%2C_Eastbourne_%286849836834%29.jpg",
    imageAlt: "Modern art gallery interior with contemporary works",
    imageCredit: "John Lord",
    imageLicense: "CC BY 2.0",
    imageSourceUrl:
      "https://commons.wikimedia.org/wiki/File:Towner_Contemporary,_Eastbourne_(6849836834).jpg",
    tips: [
      "Check the exhibitions calendar before you go",
      "Combine with Devonshire Park gardens",
      "Free Wi-Fi and excellent café",
    ],
    tags: ["art", "indoor", "free", "culture"],
    featured: true,
  },
  {
    id: "redoubt-fortress",
    name: "Redoubt Fortress & Military Museum",
    category: "Heritage",
    tagline: "Napoleonic coastal fortress",
    description:
      "A circular fort built to defend against Napoleon, now a fascinating military museum with tunnels, cannons, and hands-on history for all ages.",
    highlights: [
      "Napoleonic fort architecture",
      "Military collections",
      "Underground casemates",
      "Seafront location",
    ],
    duration: "1–2 hours",
    bestTime: "Mid-morning",
    price: "Paid entry",
    location: "Royal Parade, Eastbourne BN22 7AQ",
    coords: { lat: 50.7725, lng: 0.3015 },
    rating: 4.5,
    reviews: 2140,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/8/8d/Redoubt_Fort%2C_Eastbourne_%28NHLE_Code_1043662%29_%28October_2012%29.JPG",
    imageAlt: "Historic coastal fortification and stone walls",
    imageCredit: "The Voice of Hassocks",
    imageLicense: "CC0",
    imageSourceUrl:
      "https://commons.wikimedia.org/wiki/File:Redoubt_Fort,_Eastbourne_(NHLE_Code_1043662)_(October_2012).JPG",
    tips: [
      "Great rainy-day option",
      "Kids love the tunnels and cannons",
      "Look out for re-enactment weekends",
    ],
    tags: ["history", "family", "indoor", "museum"],
  },
  {
    id: "south-downs",
    name: "South Downs National Park",
    category: "Nature",
    tagline: "Gateway to 100 miles of trail",
    description:
      "Eastbourne is the eastern start of the South Downs Way. Rolling hills, wild orchids, skylarks, and endless walking, cycling, and horse-riding country.",
    highlights: [
      "South Downs Way start",
      "Hilltop views",
      "Wildlife & wildflowers",
      "Dark sky stargazing",
    ],
    duration: "Half or full day",
    bestTime: "Spring–autumn",
    price: "Free",
    location: "Access via Beachy Head & South Downs Way",
    coords: { lat: 50.76, lng: 0.24 },
    rating: 4.9,
    reviews: 8900,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/e/e2/Beachy_Head_Lighthouse_from_the_South_Downs_Way_-_geograph.org.uk_-_4509700.jpg",
    imageAlt: "Green rolling hills in the South Downs countryside",
    imageCredit: "Marathon",
    imageLicense: "CC BY-SA 2.0",
    imageSourceUrl:
      "https://commons.wikimedia.org/wiki/File:Beachy_Head_Lighthouse_from_the_South_Downs_Way_-_geograph.org.uk_-_4509700.jpg",
    tips: [
      "Download OS maps or use the South Downs app",
      "Pack layers — weather changes fast on the ridges",
      "Bus services link Beachy Head and town centre",
    ],
    tags: ["walking", "nature", "free", "adventure"],
    featured: true,
  },
  {
    id: "devonshire-park",
    name: "Devonshire Park & Tennis Centre",
    category: "Heritage",
    tagline: "Home of Eastbourne tennis",
    description:
      "Elegant Victorian park and world-class grass tennis courts — host of the annual international tennis tournament each June, just before Wimbledon.",
    highlights: [
      "International tennis",
      "Victorian gardens",
      "Congress Theatre nearby",
      "Winter Garden events",
    ],
    duration: "1–3 hours",
    bestTime: "June tournament week",
    price: "Park free; tournament tickets vary",
    location: "College Rd, Eastbourne BN21 4JJ",
    coords: { lat: 50.7645, lng: 0.2805 },
    rating: 4.6,
    reviews: 2890,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/c/cb/Devonshire_Park_in_September_2021.jpg",
    imageAlt: "Grass tennis courts ready for play",
    imageCredit: "YCDI2020",
    imageLicense: "CC0",
    imageSourceUrl:
      "https://commons.wikimedia.org/wiki/File:Devonshire_Park_in_September_2021.jpg",
    tips: [
      "Book tournament tickets early for centre court",
      "Explore Congress Theatre for evening shows",
      "Gardens are lovely even outside tournament week",
    ],
    tags: ["sport", "gardens", "events", "heritage"],
  },
  {
    id: "camillas-bookshop",
    name: "Camilla's Bookshop",
    category: "Culture",
    tagline: "Legendary second-hand labyrinth",
    description:
      "A multi-floor maze of books — and yes, there's a famous parrot. One of Britain's most characterful bookshops and pure Eastbourne eccentricity.",
    highlights: [
      "Thousands of rare & used books",
      "Resident parrot",
      "Quirky atmosphere",
      "Local literary gem",
    ],
    duration: "30–90 mins",
    bestTime: "Quiet weekday afternoons",
    price: "Free to browse",
    location: "16 Grove Rd, Eastbourne BN21 4TR",
    coords: { lat: 50.7688, lng: 0.2812 },
    rating: 4.7,
    reviews: 1560,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/dd/Camilla%27s_book_store_in_Eastbourne.jpg",
    imageAlt: "Shelves of books in a charming second-hand bookshop",
    imageCredit: "Les Chatfield",
    imageLicense: "CC BY 2.0",
    imageSourceUrl:
      "https://commons.wikimedia.org/wiki/File:Camilla%27s_book_store_in_Eastbourne.jpg",
    tips: [
      "Cash and card accepted",
      "Allow time to get lost in the stacks",
      "Ask staff for local history titles",
    ],
    tags: ["quirky", "indoor", "culture", "free"],
  },
  {
    id: "grand-hotel",
    name: "The Grand Hotel & Afternoon Tea",
    category: "Food & Drink",
    tagline: "Victorian grandeur by the sea",
    description:
      "The 'White Palace' has hosted royalty and celebrities for over a century. Treat yourself to classic afternoon tea overlooking the Western Lawns.",
    highlights: [
      "Iconic white façade",
      "Afternoon tea service",
      "Garden Terrace",
      "Live music evenings",
    ],
    duration: "1–2 hours",
    bestTime: "Afternoon tea 2–5pm",
    price: "Tea from mid-range; hotel luxury",
    location: "King Edward's Parade, BN21 4EQ",
    coords: { lat: 50.7595, lng: 0.2825 },
    rating: 4.6,
    reviews: 3720,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/4/4f/Grand_Hotel%2C_Eastbourne-geograph-2631118.jpg",
    imageAlt: "Elegant grand hotel exterior with classical architecture",
    imageCredit: "Stacey Harris",
    imageLicense: "CC BY-SA 2.0",
    imageSourceUrl:
      "https://commons.wikimedia.org/wiki/File:Grand_Hotel,_Eastbourne-geograph-2631118.jpg",
    tips: [
      "Book afternoon tea in advance at weekends",
      "Dress code is smart-casual",
      "Even a walk past the façade is worth it",
    ],
    tags: ["luxury", "dining", "heritage", "treat"],
  },
  {
    id: "holywell-retreat",
    name: "Holywell Retreat & Beach",
    category: "Nature",
    tagline: "Hidden western cove",
    description:
      "A quieter end of the seafront with chalk cliffs, a secluded beach, and the lovely Holywell tea chalet. Ideal for a peaceful escape from the main promenade.",
    highlights: [
      "Quieter beach",
      "Cliff walks",
      "Holywell tea chalet",
      "Sunset views",
    ],
    duration: "1–2 hours",
    bestTime: "Late afternoon / sunset",
    price: "Free",
    location: "Holywell, Eastbourne BN20 7XB",
    coords: { lat: 50.7535, lng: 0.2755 },
    rating: 4.7,
    reviews: 1980,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/a/a8/Holywell_Retreat_beach%2C_near_Eastbourne_-_geograph.org.uk_-_5746603.jpg",
    imageAlt: "Quiet rocky beach cove with cliff backdrop",
    imageCredit: "Jim Osley",
    imageLicense: "CC BY-SA 2.0",
    imageSourceUrl:
      "https://commons.wikimedia.org/wiki/File:Holywell_Retreat_beach,_near_Eastbourne_-_geograph.org.uk_-_5746603.jpg",
    tips: [
      "Walk from the Wish Tower along the lower promenade",
      "Footwear needed for the shingle beach",
      "Café closes earlier out of season — check times",
    ],
    tags: ["quiet", "beach", "free", "sunset"],
  },
  {
    id: "eastbourne-heritage-centre",
    name: "Eastbourne Heritage Centre",
    category: "Heritage",
    tagline: "Town stories from Victorian boom to today",
    description:
      "Dive into how Eastbourne grew from a fishing village into a fashionable Victorian resort under the Dukes of Devonshire.",
    highlights: [
      "Local history exhibits",
      "Victorian resort story",
      "Walking tour start point",
      "Volunteer-run charm",
    ],
    duration: "45–75 mins",
    bestTime: "Any rainy day",
    price: "Donation / low entry",
    location: "2 Carlisle Rd, Eastbourne BN21 4BT",
    coords: { lat: 50.7672, lng: 0.2865 },
    rating: 4.5,
    reviews: 890,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/d2/Eastbourne_Heritage_Centre_-_geograph.org.uk_-_7138286.jpg",
    imageAlt: "Historic museum display of local town heritage",
    imageCredit: "N Chadwick",
    imageLicense: "CC BY-SA 2.0",
    imageSourceUrl:
      "https://commons.wikimedia.org/wiki/File:Eastbourne_Heritage_Centre_-_geograph.org.uk_-_7138286.jpg",
    tips: [
      "Ask about guided town walks",
      "Small but packed with character",
      "Perfect paired with a pier visit",
    ],
    tags: ["history", "indoor", "local", "rainy-day"],
  },
  {
    id: "howe-bridge",
    name: "Pevensey Castle & Bay",
    category: "Heritage",
    tagline: "Roman fort to Norman castle",
    description:
      "Just east of Eastbourne, Pevensey Castle spans Roman walls and a Norman keep. Nearby Pevensey Bay offers a quieter beach and fish restaurants.",
    highlights: [
      "English Heritage site",
      "Roman & Norman layers",
      "Pevensey Bay beach",
      "Short bus or drive from town",
    ],
    duration: "2–3 hours",
    bestTime: "Dry weather for walls",
    price: "English Heritage entry",
    location: "Castle Rd, Pevensey BN24 5LE",
    coords: { lat: 50.8195, lng: 0.3385 },
    rating: 4.6,
    reviews: 4520,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/1/1e/Pevensey_Castle_from_the_West.jpg",
    imageAlt: "Ancient stone castle ruins under open sky",
    imageCredit: "Barbara van Cleve",
    imageLicense: "CC BY-SA 3.0",
    imageSourceUrl:
      "https://commons.wikimedia.org/wiki/File:Pevensey_Castle_from_the_West.jpg",
    tips: [
      "English Heritage members enter free",
      "Combine with a Pevensey Bay lunch",
      "Bus 99 / 54 from Eastbourne",
    ],
    tags: ["history", "day-trip", "castle", "family"],
  },
  {
    id: "gildredge-park",
    name: "Gildredge Park & Manor Gardens",
    category: "Family",
    tagline: "Town-centre green escape",
    description:
      "Spacious park with playgrounds, tennis, bowling greens, and the charming Manor Gardens — a local favourite for picnics and family time.",
    highlights: [
      "Play areas",
      "Manor Gardens",
      "Sports facilities",
      "Central location",
    ],
    duration: "1–2 hours",
    bestTime: "Sunny afternoons",
    price: "Free",
    location: "The Goffs, Eastbourne BN21 1HF",
    coords: { lat: 50.7715, lng: 0.2755 },
    rating: 4.5,
    reviews: 1340,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/5/56/Gildredge_Park_Eastbourne_-_geograph.org.uk_-_3242173.jpg",
    imageAlt: "Lush park gardens with flower beds and trees",
    imageCredit: "PAUL FARMER",
    imageLicense: "CC BY-SA 2.0",
    imageSourceUrl:
      "https://commons.wikimedia.org/wiki/File:Gildredge_Park_Eastbourne_-_geograph.org.uk_-_3242173.jpg",
    tips: [
      "Great picnic spot with kids",
      "Café nearby on The Goffs",
      "Check council site for park events",
    ],
    tags: ["family", "free", "parks", "local"],
  },
  {
    id: "treasure-island",
    name: "Treasure Island & Adventure Golf",
    category: "Family",
    tagline: "Seafront fun for all ages",
    description:
      "Pirate-themed crazy golf and family amusements right on the seafront — pure holiday nostalgia and perfect for kids after a cliff walk.",
    highlights: [
      "Adventure golf",
      "Seafront location",
      "Family amusements",
      "Photo-friendly sets",
    ],
    duration: "1–2 hours",
    bestTime: "Late afternoon",
    price: "Paid per game",
    location: "Royal Parade, Eastbourne",
    coords: { lat: 50.7735, lng: 0.3045 },
    rating: 4.3,
    reviews: 980,
    image:
      "https://s0.geograph.org.uk/geophotos/03/14/72/3147262_571570e0.jpg",
    imageAlt: "Colourful outdoor family adventure and amusement area",
    imageCredit: "Robin Webster",
    imageLicense: "CC BY-SA 2.0",
    imageSourceUrl: "https://www.geograph.org.uk/photo/3147262",
    tips: [
      "Combine with ice cream on the prom",
      "Can get busy in school holidays",
      "Check seasonal opening hours",
    ],
    tags: ["family", "fun", "seafront", "kids"],
  },
];

export function getFeaturedAttractions() {
  return attractions.filter((a) => a.featured);
}

export function getAttractionById(id: string) {
  return attractions.find((a) => a.id === id);
}

export function isCc0License(license?: string) {
  return Boolean(license?.toUpperCase().startsWith("CC0"));
}

/** CC BY / CC BY-SA (and similar) require visible credit; CC0 does not. */
export function requiresImageAttribution(attraction: Attraction) {
  return Boolean(attraction.imageCredit && !isCc0License(attraction.imageLicense));
}

export function formatImageCredit(attraction: Attraction) {
  if (!attraction.imageCredit) return "";
  if (!attraction.imageLicense || isCc0License(attraction.imageLicense)) {
    return attraction.imageCredit;
  }
  return `${attraction.imageCredit} · ${attraction.imageLicense}`;
}

export function getAttributedAttractions() {
  return attractions.filter(requiresImageAttribution);
}

const COMMONS_FILE =
  /^https:\/\/upload\.wikimedia\.org\/wikipedia\/commons\/([0-9a-f])\/([0-9a-f]{2})\/([^/?#]+)$/i;

/** Widths Wikimedia will serve when hotlinking (https://w.wiki/GHai). */
export type CommonsThumbWidth = 960 | 1280;

/**
 * Display URL for cards and heroes. Data still stores the exact original
 * file URL; Commons originals are often multi‑MB, so the UI uses a standard
 * thumbnail size and can fall back to the original on error.
 */
export function displayAttractionImage(
  attraction: Pick<Attraction, "image">,
  width: CommonsThumbWidth = 960,
) {
  const match = attraction.image.match(COMMONS_FILE);
  if (!match) return attraction.image;
  const [, dir, sub, filename] = match;
  return `https://upload.wikimedia.org/wikipedia/commons/thumb/${dir}/${sub}/${filename}/${width}px-${filename}`;
}
