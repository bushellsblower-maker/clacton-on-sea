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
    id: "clacton-pier",
    name: "Clacton Pier",
    category: "Seafront",
    tagline: "Essex sunshine-coast icon over the North Sea",
    description:
      "Clacton's great wooden pier is the town's heartbeat — rides, arcades, fish and chips, and a long walk out above the waves. It is one of the largest pleasure piers in the country and the natural place to start a first visit.",
    highlights: [
      "Rides and arcade amusements",
      "North Sea views from the deck",
      "Seasonal fireworks from the berthing arm",
      "Family events from Pirates Ahoy to Halloween",
    ],
    duration: "2–4 hours",
    bestTime: "Afternoon into evening",
    price: "Free to walk; rides paid",
    location: "1 North Sea, Clacton-on-Sea CO15 1QX",
    coords: { lat: 51.7864, lng: 1.1561 },
    rating: 4.4,
    reviews: 11240,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/1/11/Clacton-on-Sea%2C_Clacton_Pier_%284%29_-_geograph.org.uk_-_6417513.jpg",
    imageAlt: "Clacton Pier stretching out over the North Sea",
    imageCredit: "Nigel Cox",
    imageLicense: "CC BY-SA 2.0",
    imageSourceUrl: "https://www.geograph.org.uk/photo/6417513",
    tips: [
      "Big Day Out bands are cheaper booked more than 24 hours ahead",
      "Fireworks are staged at the seaward end — arrive early for a rail",
      "Combine with a seafront stroll east towards Holland-on-Sea",
    ],
    tags: ["iconic", "family", "seafront", "rides"],
    featured: true,
  },
  {
    id: "clacton-seafront",
    name: "Clacton Seafront & Gardens",
    category: "Seafront",
    tagline: "Promenade, planting and a wide sandy beach",
    description:
      "Clacton's central seafront is classic Essex resort: a broad sandy beach, greensward, formal gardens and a level promenade that runs from the pier towards Holland-on-Sea. It is the stage for Carnival weekend and the free Clacton Airshow.",
    highlights: [
      "Sandy central beach",
      "Seafront gardens and greensward",
      "Level promenade for walking and cycling",
      "Airshow and carnival viewing",
    ],
    duration: "1–3 hours",
    bestTime: "Any tide; summer for events",
    price: "Free",
    location: "Marine Parade West, Clacton-on-Sea",
    coords: { lat: 51.788, lng: 1.155 },
    rating: 4.6,
    reviews: 6840,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/7/77/Seafront_Gardens%2C_Clacton-on-Sea_-_geograph.org.uk_-_3587277.jpg",
    imageAlt: "Planted seafront gardens beside Clacton-on-Sea promenade",
    imageCredit: "David Dixon",
    imageLicense: "CC BY-SA 2.0",
    imageSourceUrl: "https://www.geograph.org.uk/photo/3587277",
    tips: [
      "The greensward fills early on Airshow days — bring a blanket",
      "Blue Flag / Seaside Award status is checked each season",
      "Cafés and shelters sit along Marine Parade if the wind gets up",
    ],
    tags: ["beach", "walking", "free", "family"],
    featured: true,
  },
  {
    id: "holland-on-sea",
    name: "Holland-on-Sea Beach",
    category: "Coast & Cliffs",
    tagline: "Quieter sands and a mile of beach huts",
    description:
      "A short promenade walk or bus ride east of the pier, Holland-on-Sea is Clacton's calmer neighbour. Colourful beach huts line the cliffs, the sand is wide at low tide, and the greensward is made for picnics away from the main rides.",
    highlights: [
      "Rows of traditional beach huts",
      "Quieter swimming and sandcastle beach",
      "Cliff-top greensward walks",
      "Easy link along the prom from Clacton",
    ],
    duration: "2–4 hours",
    bestTime: "Morning or weekday afternoons",
    price: "Free (hut hire extra)",
    location: "Kings Parade, Holland-on-Sea CO15 5JB",
    coords: { lat: 51.8058, lng: 1.1886 },
    rating: 4.7,
    reviews: 3920,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/0/07/Holland_on_Sea_Beach_Huts_-_geograph.org.uk_-_7490910.jpg",
    imageAlt: "Colourful beach huts along Holland-on-Sea",
    imageCredit: "Glyn Baker",
    imageLicense: "CC BY-SA 2.0",
    imageSourceUrl: "https://www.geograph.org.uk/photo/7490910",
    tips: [
      "Walk the lower promenade from Clacton — it is almost entirely level",
      "Low tide reveals a wide stretch of sand for games",
      "Local buses along Kings Parade if you do not fancy the return walk",
    ],
    tags: ["beach", "quiet", "walking", "free"],
    featured: true,
  },
  {
    id: "westcliff-theatre",
    name: "West Cliff Theatre",
    category: "Culture",
    tagline: "Clacton's much-loved live stage",
    description:
      "A compact professional theatre on Tower Road with a year-round mix of comedy, tribute nights, variety and seasonal shows. It is the easy evening plan when you want something more than the arcades — and a short walk from the seafront.",
    highlights: [
      "Comedy, music and variety bills",
      "Seasonal family productions",
      "Walkable from the pier and hotels",
      "Intimate auditorium",
    ],
    duration: "2–3 hours",
    bestTime: "Evening performances",
    price: "Ticketed — check the box office",
    location: "Tower Rd, Clacton-on-Sea CO15 1LE",
    coords: { lat: 51.7879, lng: 1.1478 },
    rating: 4.5,
    reviews: 1680,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/3/34/Clacton-on-Sea%2C_The_West_Cliff_Theatre_-_geograph.org.uk_-_6096698.jpg",
    imageAlt: "The West Cliff Theatre in Clacton-on-Sea",
    imageCredit: "Nigel Cox",
    imageLicense: "CC BY-SA 2.0",
    imageSourceUrl: "https://www.geograph.org.uk/photo/6096698",
    tips: [
      "Book weekend nights in summer — popular bills sell through",
      "Princes Theatre in the town also hosts larger touring shows",
      "Combine with dinner on the seafront before curtain-up",
    ],
    tags: ["theatre", "evening", "indoor", "culture"],
  },
  {
    id: "st-osyth-priory",
    name: "St Osyth Priory",
    category: "Heritage",
    tagline: "Augustinian grandeur in a Tendring village",
    description:
      "One of Essex's great monastic sites, St Osyth Priory sits a few miles west of Clacton in a village of flint, brick and tidal creeks. The gatehouse and ranges are among the finest surviving Augustinian remains in England — a very different day from the pier.",
    highlights: [
      "Medieval priory gatehouse",
      "Parkland and historic ranges",
      "Village pubs and church nearby",
      "Easy hop from Clacton by car or bus",
    ],
    duration: "2–3 hours",
    bestTime: "Dry days; check open dates",
    price: "Check current visitor access",
    location: "The Bury, St Osyth CO16 8NZ",
    coords: { lat: 51.7992, lng: 1.0786 },
    rating: 4.6,
    reviews: 2140,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/7/7e/St_Osyth_Priory_-_geograph.org.uk_-_5576207.jpg",
    imageAlt: "Historic stone ranges at St Osyth Priory",
    imageCredit: "norman griffin",
    imageLicense: "CC BY-SA 2.0",
    imageSourceUrl: "https://www.geograph.org.uk/photo/5576207",
    tips: [
      "Access and events change — confirm before you set out",
      "Pair with Point Clear beach or Colne Point if you want sea air after",
      "The village centre is compact; park considerately on event days",
    ],
    tags: ["history", "architecture", "day-trip", "heritage"],
    featured: true,
  },
  {
    id: "st-osyth-beach",
    name: "Point Clear & St Osyth Beach",
    category: "Coast & Cliffs",
    tagline: "Creek-mouth sands west of town",
    description:
      "West of Jaywick, the coast opens into the Colne estuary. Point Clear and St Osyth Beach feel more creek than resort — shingle, wide skies, sailing club masts and a slower pace than Clacton's central sands.",
    highlights: [
      "Estuary views towards Brightlingsea",
      "Quieter swimming and beachcombing",
      "Holiday-park and village setting",
      "Gateway walks towards Colne Point",
    ],
    duration: "1–3 hours",
    bestTime: "Low tide for the widest beach",
    price: "Free",
    location: "Point Clear, St Osyth CO16 8JA",
    coords: { lat: 51.7915, lng: 1.0438 },
    rating: 4.4,
    reviews: 980,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/3/3e/Point_Clear_Beach%2C_mid_July_2020_-_geograph.org.uk_-_6545113.jpg",
    imageAlt: "Point Clear Beach on the St Osyth coast in midsummer",
    imageCredit: "Basher Eyre",
    imageLicense: "CC BY-SA 2.0",
    imageSourceUrl: "https://www.geograph.org.uk/photo/6545113",
    tips: [
      "Check tide times — the beach changes character quickly",
      "Facilities are thinner than Clacton; bring water and snacks",
      "Respect private holiday-park roads and signed access points",
    ],
    tags: ["beach", "quiet", "estuary", "free"],
  },
  {
    id: "jaywick-sands",
    name: "Jaywick Sands",
    category: "Seafront",
    tagline: "A sandy sweep with its own story",
    description:
      "Jaywick sits immediately west of Clacton: a plotland seaside that grew from 1930s holiday chalets. The beach is genuinely sandy, the breakwaters make interesting walking, and the place rewards visitors who come with curiosity rather than a checklist.",
    highlights: [
      "Sandy beach and timber breakwaters",
      "Distinctive plotland streetscape",
      "Short hop from Clacton seafront",
      "Local cafés on Brooklands and the front",
    ],
    duration: "1–2 hours",
    bestTime: "Weekday mornings",
    price: "Free",
    location: "Brooklands, Jaywick CO15 2EX",
    coords: { lat: 51.7758, lng: 1.1164 },
    rating: 4.3,
    reviews: 1420,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/7/76/Beach_and_Breakwater%2C_Jaywick_Sands_-_geograph.org.uk_-_8019577.jpg",
    imageAlt: "Sandy beach and timber breakwater at Jaywick Sands",
    imageCredit: "Roger Jones",
    imageLicense: "CC BY-SA 2.0",
    imageSourceUrl: "https://www.geograph.org.uk/photo/8019577",
    tips: [
      "Walk or cycle the sea wall from Clacton rather than driving if you can",
      "This is a living neighbourhood — be a considerate guest",
      "Continue west to the Martello tower for a fuller picture",
    ],
    tags: ["beach", "local", "walking", "free"],
  },
  {
    id: "jaywick-martello",
    name: "Jaywick Martello Tower",
    category: "Heritage",
    tagline: "Napoleonic watch-tower on the sands",
    description:
      "Martello Tower C stands on the Jaywick sea wall, one of the chain of early-19th-century gun towers built against Napoleonic invasion. It is a squat, atmospheric landmark and a reminder that this stretch of Essex coast has always looked seaward.",
    highlights: [
      "Grade II* Napoleonic tower",
      "Sea-wall setting and big skies",
      "Photo stop on a Jaywick walk",
      "Part of the wider Essex Martello line",
    ],
    duration: "30–60 mins",
    bestTime: "Golden hour on the sea wall",
    price: "Exterior free; interior by event",
    location: "The Promenade, Jaywick CO15 2LF",
    coords: { lat: 51.7732, lng: 1.1038 },
    rating: 4.5,
    reviews: 640,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/a/a6/Jaywick%2C_Martello_Tower_C_-_geograph.org.uk_-_5962652.jpg",
    imageAlt: "Martello Tower C on the sea wall at Jaywick",
    imageCredit: "Nigel Cox",
    imageLicense: "CC BY-SA 2.0",
    imageSourceUrl: "https://www.geograph.org.uk/photo/5962652",
    tips: [
      "Interior opening is occasional — treat the exterior as the visit",
      "The sea wall can be exposed; bring a windproof layer",
      "Pair with Jaywick Sands for a half-day west of the pier",
    ],
    tags: ["history", "walking", "coast", "free"],
  },
  {
    id: "little-clacton",
    name: "Little Clacton & St James's Church",
    category: "Heritage",
    tagline: "A quiet Tendring village inland of the resort",
    description:
      "Little Clacton is the older agricultural neighbour a couple of miles inland — flint church, village green, and a slower rhythm than the seafront. St James's is the landmark: a parish church that has watched the fields long before the pier was built.",
    highlights: [
      "Medieval parish church of St James",
      "Village pubs and green",
      "Contrast to the busy coast",
      "Handy if you are staying inland or passing the A133",
    ],
    duration: "45–90 mins",
    bestTime: "Quiet weekday afternoons",
    price: "Free to visit the village",
    location: "The Street, Little Clacton CO16 9LQ",
    coords: { lat: 51.8256, lng: 1.1418 },
    rating: 4.4,
    reviews: 310,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/a/aa/Little_Clacton%2C_The_Church_of_St_James_-_geograph.org.uk_-_6100558.jpg",
    imageAlt: "The Church of St James in Little Clacton",
    imageCredit: "Nigel Cox",
    imageLicense: "CC BY-SA 2.0",
    imageSourceUrl: "https://www.geograph.org.uk/photo/6100558",
    tips: [
      "This is a living village, not a visitor attraction — keep visits short and respectful",
      "Check church opening if you hope to go inside",
      "Combine with Clacton Shopping Village, a few minutes away",
    ],
    tags: ["village", "church", "quiet", "local"],
  },
  {
    id: "factory-outlet",
    name: "Clacton Shopping Village",
    category: "Family",
    tagline: "Covered outlet brands on Stephenson Road West",
    description:
      "Still widely known as Clacton Factory Outlet, this covered centre is now Clacton Shopping Village — fashion, home and everyday brands a short drive north of the seafront. A useful rainy-day reset, especially with children who have had enough of the wind.",
    highlights: [
      "Covered high-street and outlet brands",
      "Food court for a mid-shop pause",
      "Easy parking off Stephenson Road West",
      "Rainy-day alternative to the pier",
    ],
    duration: "2–3 hours",
    bestTime: "Weekday mornings",
    price: "Free to enter",
    location: "Stephenson Rd W, Clacton-on-Sea CO15 4TL",
    coords: { lat: 51.8078, lng: 1.1556 },
    rating: 4.1,
    reviews: 4560,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/c/c0/Clacton_factory_outlet_shopping_centre_-_geograph.org.uk_-_7321642.jpg",
    imageAlt: "Clacton Shopping Village, formerly the factory outlet centre",
    imageCredit: "Helen Steed",
    imageLicense: "CC BY-SA 2.0",
    imageSourceUrl: "https://www.geograph.org.uk/photo/7321642",
    tips: [
      "Use the current name — Clacton Shopping Village — if you ask for directions",
      "Check individual unit hours; some close earlier on Sundays",
      "Local buses run from the town centre if you are car-free",
    ],
    tags: ["shopping", "indoor", "family", "rainy-day"],
  },
  {
    id: "colne-point",
    name: "Colne Point Nature Reserve",
    category: "Nature",
    tagline: "Shingle, saltmarsh and estuary birds",
    description:
      "Colne Point is an Essex Wildlife Trust reserve on the shingle spit at the mouth of the Colne. It is one of the wildest corners of the Tendring coast — breeding terns, specialised shingle plants, and a reminder that this shoreline is more than a holiday beach.",
    highlights: [
      "SSSI shingle and saltmarsh",
      "Birdwatching at the Colne mouth",
      "Rare coastal flora",
      "Wild contrast to the pier",
    ],
    duration: "2–4 hours",
    bestTime: "Migration seasons; quiet weekdays",
    price: "Free (trust membership welcome)",
    location: "Point Clear / St Osyth, access via signed paths",
    coords: { lat: 51.7768, lng: 1.0412 },
    rating: 4.7,
    reviews: 420,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/a/a2/Part_of_Colne_Point_SSSI_-_geograph.org.uk_-_7504432.jpg",
    imageAlt: "Shingle and saltmarsh at Colne Point SSSI",
    imageCredit: "Glyn Baker",
    imageLicense: "CC BY-SA 2.0",
    imageSourceUrl: "https://www.geograph.org.uk/photo/7504432",
    tips: [
      "Stay on signed paths — this is a sensitive breeding site",
      "Access can be restricted in the nesting season; check EWT before you go",
      "Binoculars and sturdy shoes beat flip-flops",
    ],
    tags: ["wildlife", "walking", "nature", "free"],
    featured: true,
  },
  {
    id: "pickers-ditch",
    name: "Pickers Ditch Meadow",
    category: "Nature",
    tagline: "A green corridor through Clacton",
    description:
      "Pickers Ditch is a local meadow and waterside walk that cuts through the town away from the traffic. It is where residents walk the dog, watch dragonflies, and remember that Clacton is more than the front — a useful breather between beach sessions.",
    highlights: [
      "Meadow and ditch-side path",
      "Wildflowers in summer",
      "Town-centre nature without a car",
      "Gentle, pushchair-friendly stretches",
    ],
    duration: "45–90 mins",
    bestTime: "Late spring and summer mornings",
    price: "Free",
    location: "Pickers Ditch, Clacton-on-Sea CO15",
    coords: { lat: 51.8024, lng: 1.1528 },
    rating: 4.3,
    reviews: 280,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/3/3d/Pickers_Ditch_Meadow_1.jpg",
    imageAlt: "Meadow path along Pickers Ditch in Clacton",
    imageCredit: "Dudley Miles",
    imageLicense: "CC BY-SA 4.0",
    imageSourceUrl:
      "https://commons.wikimedia.org/wiki/File:Pickers_Ditch_Meadow_1.jpg",
    tips: [
      "Paths can be muddy after rain — not a dress-shoe walk",
      "Good pairing with Clacton Shopping Village if you want green space after shops",
      "Keep dogs under control around ground-nesting birds in spring",
    ],
    tags: ["walking", "local", "free", "nature"],
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
