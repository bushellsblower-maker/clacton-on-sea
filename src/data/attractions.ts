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
  /** Omit rather than invent a score. */
  rating?: number;
  reviews?: number;
  /** Official venue or council page, when verified. */
  officialUrl?: string;
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
    officialUrl: "https://www.clactonpier.co.uk/",
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
    officialUrl: "https://discoverclacton.co.uk/place/clacton-seafront-gardens/",
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
    officialUrl: "https://discoverclacton.co.uk/plan-your-visit/",
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
    officialUrl: "https://www.westcliffclacton.co.uk/",
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
      "Founded c.1121 as an Augustinian house and dissolved in 1539, St Osyth Priory is a Grade I complex a few miles west of Clacton. Public visits are via the Priory & Parish Trust's seasonal guided walking, trailer and nature tours — not free roaming.",
    highlights: [
      "Late-15th-century flint gatehouse (Grade I)",
      "Pre-booked heritage and nature tours",
      "Village museum nearby in season",
      "Easy hop from Clacton by car or bus",
    ],
    duration: "2–3 hours",
    bestTime: "Booked tour days in season",
    price: "Pre-booked tours — not a free open park",
    location: "Education Centre, Colchester Road, St Osyth CO16 8HA",
    coords: { lat: 51.7992, lng: 1.0749 },
    officialUrl: "https://www.stosythprioryandparishtrust.org/visit/",
    rating: 4.6,
    reviews: 2140,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/7/7e/St_Osyth_Priory_-_geograph.org.uk_-_5576207.jpg",
    imageAlt: "Historic stone ranges at St Osyth Priory",
    imageCredit: "norman griffin",
    imageLicense: "CC BY-SA 2.0",
    imageSourceUrl: "https://www.geograph.org.uk/photo/5576207",
    tips: [
      "Book via the Priory & Parish Trust — the estate is not a free open park",
      "Pair with Point Clear beach or Howlands Marsh if you want estuary air after",
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
      "Estuary setting west of Jaywick",
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
    officialUrl: "https://www.visitjaywicksands.com/see-and-do",
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
      "Public toilets are not at the beach waterline — plan a stop before you settle on the sand",
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
    officialUrl:
      "https://www.explore-essex.com/places-to-go/find-whats-near-me/jaywick-martello-tower",
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
      "Little Clacton is the older agricultural neighbour a couple of miles inland — flint church, village green, and a slower rhythm than the seafront. The parish appears in the Domesday Book; St James's is the landmark that watched the fields long before the pier was built.",
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
    officialUrl: "https://www.littleclactonparishcouncil.gov.uk/little-clacton",
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
    officialUrl: "https://clactonshoppingvillage.com/",
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
  {
    id: "princes-theatre",
    name: "Princes Theatre",
    category: "Culture",
    tagline: "820-seat theatre in Grade II Town Hall",
    description:
      "Opened 14 April 1931 by Prince Arthur of Connaught inside Clacton Town Hall (Sir A. Brumwell Thomas). Capacity is now 820, with more than 150 shows and events a year according to the venue's own history.",
    highlights: [
      "Grade II Town Hall setting",
      "Town-centre touring acts",
      "Larger auditorium than West Cliff",
    ],
    duration: "2–3 hours",
    bestTime: "Evening performances",
    price: "Ticketed — check the box office",
    location: "Clacton Town Hall, Station Road, CO15 1SE",
    coords: { lat: 51.7915, lng: 1.1538 },
    officialUrl: "https://princestheatre.co.uk/",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/dd/Clacton_Town_Hall_looking_south-west_%28geograph_5668500%29.jpg",
    imageAlt: "Clacton Town Hall looking south-west, home of Princes Theatre",
    imageCredit: "Duncan Graham",
    imageLicense: "CC BY-SA 2.0",
    imageSourceUrl: "https://www.geograph.org.uk/photo/5668500",
    tips: [
      "Confirm the bill and access at princestheatre.co.uk",
      "Wellesley Road car park is the large town-centre option nearby",
      "West Cliff Theatre on Tower Road is the smaller seaside alternative",
    ],
    tags: ["theatre", "evening", "indoor", "culture"],
  },
  {
    id: "clacton-museum",
    name: "Clacton Museum",
    category: "Heritage",
    tagline: "Free local history museum above the library",
    description:
      "Displays on the resort since 1871, pier entertainment, Butlin's and Great Clacton. Discover Clacton lists free entry and very limited hours (Tuesday and Saturday mornings at research time).",
    highlights: [
      "Free entry",
      "Seaside heritage",
      "Second floor of Clacton Library",
    ],
    duration: "45–90 mins",
    bestTime: "Confirm opening before you go",
    price: "Free",
    location: "2nd Floor, Clacton Library, 96 Station Road, CO15 1SF",
    coords: { lat: 51.7912, lng: 1.153 },
    officialUrl: "https://discoverclacton.co.uk/place/clacton-museum/",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/3/3d/Clacton_Library_-_geograph.org.uk_-_7615136.jpg",
    imageAlt: "Clacton Library, home of Clacton Museum on the second floor",
    imageCredit: "Glyn Baker",
    imageLicense: "CC BY-SA 2.0",
    imageSourceUrl: "https://www.geograph.org.uk/photo/7615136",
    tips: [
      "Hours are very limited — confirm on Discover Clacton before you climb the stairs",
      "Pair with Princes Theatre next door in Town Hall",
    ],
    tags: ["museum", "free", "indoor", "heritage"],
  },
  {
    id: "clacton-pavilion",
    name: "Clacton Pavilion",
    category: "Family",
    tagline: "Seafront fun park, bowling and dining",
    description:
      "Marine Parade East complex with a fun park, bowling and restaurants beside the pier. The operator notes that outdoor hours are weather-dependent.",
    highlights: ["Fun park", "Bowling", "Beside the pier"],
    duration: "1–3 hours",
    bestTime: "Fine-weather afternoons",
    price: "Check clactonpavilion.co.uk — outdoor hours weather-governed",
    location: "Marine Parade East, CO15 1PT",
    coords: { lat: 51.7862, lng: 1.1568 },
    officialUrl: "https://clactonpavilion.co.uk/",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/1/11/Clacton-on-Sea%2C_Clacton_Pier_%284%29_-_geograph.org.uk_-_6417513.jpg",
    imageAlt:
      "Clacton Pier and seafront beside the Pavilion on Marine Parade East",
    imageCredit: "Nigel Cox",
    imageLicense: "CC BY-SA 2.0",
    imageSourceUrl: "https://www.geograph.org.uk/photo/6417513",
    tips: [
      "Confirm fun-park hours on the operator site — they follow the weather",
      "No separate modern Commons photo of the Pavilion building; this card shows the adjoining pier",
    ],
    tags: ["family", "seafront", "indoor", "rides"],
  },
  {
    id: "hastys-adventure-farm",
    name: "Hasty's Adventure Farm",
    category: "Family",
    tagline: "Family farm park beside the airfield",
    description:
      "Opened in 2016 on West Road with animals, outdoor play and a large undercover adventure zone. Served by buses 4 and X76.",
    highlights: ["Animals and play", "Undercover adventure zone", "Next to the airfield"],
    duration: "2–4 hours",
    bestTime: "School holidays; check opening",
    price: "Paid — see hastys.co.uk",
    location: "West Road, CO15 1AG",
    coords: { lat: 51.7868, lng: 1.1285 },
    officialUrl: "https://www.hastys.co.uk/",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/7/70/Hasty%27s_Adventure_Farm_-_geograph.org.uk_-_7530397.jpg",
    imageAlt: "Hasty's Adventure Farm on West Road, Clacton",
    imageCredit: "Glyn Baker",
    imageLicense: "CC BY-SA 2.0",
    imageSourceUrl: "https://www.geograph.org.uk/photo/7530397",
    tips: [
      "Plan-your-visit notes are on hastys.co.uk",
      "Martello Coach & Car Park on West Road locks at night",
    ],
    tags: ["family", "indoor", "animals", "play"],
  },
  {
    id: "clacton-airfield",
    name: "Clacton Airfield / Aero Club",
    category: "Family",
    tagline: "Grass airfield — trial lessons and pleasure flights",
    description:
      "Clacton Aero Club has operated since 1988, offering pleasure flights and trial lessons from an unlicensed general-aviation field used for training and recreation.",
    highlights: ["Trial lessons", "Coastal views", "Beside Hasty's"],
    duration: "1–2 hours",
    bestTime: "Clear, settled weather — book ahead",
    price: "Book ahead; flights are weather-dependent",
    location: "West Road, CO15 1AG",
    coords: { lat: 51.786, lng: 1.126 },
    officialUrl: "https://www.clactonaeroclub.co.uk/",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/6/69/Clacton-on-Sea%2C_Clacton_Airfield_airstrip_%282%29_-_geograph.org.uk_-_5959307.jpg",
    imageAlt: "Clacton Airfield grass airstrip",
    imageCredit: "Nigel Cox",
    imageLicense: "CC BY-SA 2.0",
    imageSourceUrl: "https://www.geograph.org.uk/photo/5959307",
    tips: [
      "Flights depend on weather — book and confirm with the Aero Club",
      "Not a drop-in spectator airfield; treat it as a booked activity",
    ],
    tags: ["flights", "family", "booking"],
  },
  {
    id: "martello-bay-beach",
    name: "Martello Bay Beach",
    category: "Coast & Cliffs",
    tagline: "Award beach with seasonal lifeguards",
    description:
      "Sandy beach on Marine Parade West. Tendring DC posts seasonal lifeguards (typically May half-term through summer-holiday weekends and holidays, 10:30–17:30) and a May–September dog ban on the award area. Cover is staffing-dependent.",
    highlights: [
      "Seasonal lifeguard cover",
      "Near the RNLI station",
      "Dog ban May–September on the award beach",
    ],
    duration: "1–3 hours",
    bestTime: "Lifeguarded hours in season",
    price: "Free",
    location: "Marine Parade West, CO15 1NW",
    coords: { lat: 51.7835, lng: 1.145 },
    officialUrl:
      "https://www.tendringdc.gov.uk/beaches/martello-bay-clacton-co15-1bn",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/d3/Martello_Bay%2C_Clacton_Seafront.jpg",
    imageAlt: "Martello Bay on the Clacton seafront",
    imageCredit: "Colin21958",
    imageLicense: "CC BY-SA 4.0",
    imageSourceUrl:
      "https://commons.wikimedia.org/wiki/File:Martello_Bay,_Clacton_Seafront.jpg",
    tips: [
      "Beaches either side of Clacton Pier are unsupervised — Tendring DC points swimmers here instead",
      "West Greensward toilets (year-round, Changing Places) sit behind this stretch",
      "Martello Coach & Car Park on West Road locks at night",
    ],
    tags: ["beach", "lifeguard", "free", "family"],
  },
  {
    id: "st-osyth-museum",
    name: "St Osyth Museum",
    category: "Heritage",
    tagline: "Village museum behind the wall",
    description:
      "Village history at the Education Centre shared with Priory tours. Official site: Saturday–Sunday 12:00–16:00, Easter to the end of October.",
    highlights: ["Village history", "Weekend seasonal opening", "Shared site with Priory tours"],
    duration: "45–90 mins",
    bestTime: "Weekend afternoons in season",
    price: "Check stosythmuseum.co.uk",
    location: "Behind the Wall, Colchester Road, CO16 8HA",
    coords: { lat: 51.7985, lng: 1.0775 },
    officialUrl: "https://www.stosythmuseum.co.uk/",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/7/7e/St_Osyth_Priory_-_geograph.org.uk_-_5576207.jpg",
    imageAlt: "Historic ranges at St Osyth Priory, near the village museum",
    imageCredit: "norman griffin",
    imageLicense: "CC BY-SA 2.0",
    imageSourceUrl: "https://www.geograph.org.uk/photo/5576207",
    tips: [
      "Weekend-only in season — confirm on the museum site",
      "No separate Commons photo of the museum rooms; the picture is the nearby Priory",
    ],
    tags: ["museum", "village", "heritage", "seasonal"],
  },
  {
    id: "naze-tower",
    name: "Naze Tower",
    category: "Heritage",
    tagline: "1720 Trinity House tower — a Walton day trip",
    description:
      "Grade II* 86 ft octagonal navigation mark built by Trinity House in 1720. Gallery, museum, tea rooms and roof. Typically late March–early November, daily 10:00–17:00. Stairs are not step-free.",
    highlights: ["Roof views", "Museum and tea rooms", "Beside the Naze cliffs"],
    duration: "1–2 hours",
    bestTime: "Seasonal daily opening; confirm before travel",
    price: "Ticketed — see nazetower.co.uk",
    location: "Old Hall Lane, Walton-on-the-Naze, CO14 8LE",
    coords: { lat: 51.866, lng: 1.288 },
    officialUrl: "https://www.nazetower.co.uk/",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/4/4e/The_Naze_Tower.jpg",
    imageAlt: "The Naze Tower at Walton-on-the-Naze",
    imageCredit: "Michael Coppins",
    imageLicense: "CC BY-SA 4.0",
    imageSourceUrl: "https://commons.wikimedia.org/wiki/File:The_Naze_Tower.jpg",
    tips: [
      "Pair with the Naze Nature Discovery Centre next door",
      "Cliffs erode 1–2 m a year — stay on signed paths and do not dig",
      "Naze Car Park (Mi Permit 706004) serves the site",
    ],
    tags: ["day-trip", "heritage", "views", "walton"],
    featured: true,
  },
  {
    id: "clacton-heritage-trail",
    name: "Clacton Heritage Trail (Clacton 150)",
    category: "Heritage",
    tagline: "5-mile seafront trail with 19 signs",
    description:
      "A National Lottery Heritage Fund trail (2021) from Sunspot in Jaywick to Borrow Pit Bay at Holland-on-Sea, with 19 interpretation points and augmented reality at some stops via Zappar.",
    highlights: ["19 interpretation signs", "Seafront walk", "AR at some points"],
    duration: "2–4 hours",
    bestTime: "A dry half-day on the promenade",
    price: "Free",
    location: "Seafront from Jaywick Sunspot to Holland-on-Sea",
    coords: { lat: 51.788, lng: 1.155 },
    officialUrl: "https://essex-sunshine-coast.org.uk/places/trails-of-tendring/",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/7/77/Seafront_Gardens%2C_Clacton-on-Sea_-_geograph.org.uk_-_3587277.jpg",
    imageAlt: "Clacton seafront gardens, on the Clacton Heritage Trail",
    imageCredit: "David Dixon",
    imageLicense: "CC BY-SA 2.0",
    imageSourceUrl: "https://www.geograph.org.uk/photo/3587277",
    tips: [
      "Start wherever suits — Jaywick, the pier gardens or Holland",
      "Some signs include a Zappar AR layer",
    ],
    tags: ["walking", "free", "heritage", "seafront"],
  },
  {
    id: "toast-coffee",
    name: "TOAST Coffee Clacton",
    category: "Food & Drink",
    tagline: "Essex speciality coffee on Pier Avenue",
    description:
      "Independent Essex coffee brand at 73–75 Pier Avenue. Official hours at research time: Monday–Saturday 08:00–17:00, Sunday 09:00–16:00.",
    highlights: ["Speciality coffee", "Brunch and lunch", "Pier Avenue"],
    duration: "30–60 mins",
    bestTime: "Morning coffee or a mid-shop pause",
    price: "Café prices — see lovetoast.co.uk",
    location: "73–75 Pier Avenue, CO15 1QE",
    coords: { lat: 51.7895, lng: 1.1545 },
    officialUrl:
      "https://www.lovetoast.co.uk/blog/our-7th-store-opens-in-clacton-on-sea",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/2/2c/Pier_Avenue%2C_Clacton_-_geograph.org.uk_-_2961586.jpg",
    imageAlt: "Pier Avenue, Clacton, where TOAST Coffee is located",
    imageCredit: "Stacey Harris",
    imageLicense: "CC BY-SA 2.0",
    imageSourceUrl: "https://www.geograph.org.uk/photo/2961586",
    tips: [
      "Confirm current hours on the TOAST site before a Sunday visit",
      "Photo is Pier Avenue, not the café interior",
    ],
    tags: ["coffee", "brunch", "town"],
  },
  {
    id: "martello-lounge",
    name: "Martello Lounge",
    category: "Food & Drink",
    tagline: "Seafront Lounge café-bar by the pier",
    description:
      "Lounges-group café-bar in the Atlanta Building, Kings Promenade. Official page at research time: Sunday–Thursday 09:00–22:00, Friday–Saturday 09:00–23:00.",
    highlights: ["Seafront terraces", "All-day menu", "Beside the pier"],
    duration: "1–2 hours",
    bestTime: "Lunch through evening",
    price: "Café-bar prices — see thelounges.co.uk/martello",
    location: "Atlanta Building, Kings Promenade, CO15 1FS",
    coords: { lat: 51.786, lng: 1.1555 },
    officialUrl: "https://thelounges.co.uk/martello/",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/1/11/Clacton-on-Sea%2C_Clacton_Pier_%284%29_-_geograph.org.uk_-_6417513.jpg",
    imageAlt: "Clacton Pier and seafront beside Martello Lounge",
    imageCredit: "Nigel Cox",
    imageLicense: "CC BY-SA 2.0",
    imageSourceUrl: "https://www.geograph.org.uk/photo/6417513",
    tips: [
      "Confirm hours on the Lounge page — Friday and Saturday run later",
      "Photo is the adjoining pier, not the café interior",
    ],
    tags: ["cafe", "seafront", "evening"],
  },
  {
    id: "grandma-lillys",
    name: "Grandma Lilly's Tea Rooms",
    category: "Food & Drink",
    tagline: "Family tea rooms since 1997",
    description:
      "Frinton Road tea rooms in Holland-on-Sea. Official site at research time: Tuesday–Saturday 09:00–16:00; closed Monday and Sunday.",
    highlights: ["Afternoon tea", "Established 1997", "Near Holland seafront"],
    duration: "45–90 mins",
    bestTime: "Tuesday–Saturday daytime",
    price: "Tea-room prices — see grandmalillys.co.uk",
    location: "34–36 Frinton Road, Holland-on-Sea, CO15 5UL",
    coords: { lat: 51.8035, lng: 1.1885 },
    officialUrl: "https://grandmalillys.co.uk/",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/0/07/Holland_on_Sea_Beach_Huts_-_geograph.org.uk_-_7490910.jpg",
    imageAlt: "Holland-on-Sea beach huts, near Grandma Lilly's Tea Rooms",
    imageCredit: "Glyn Baker",
    imageLicense: "CC BY-SA 2.0",
    imageSourceUrl: "https://www.geograph.org.uk/photo/7490910",
    tips: [
      "Closed Monday and Sunday per the official site — confirm before you go",
      "Photo is the Holland seafront, not the tea-room interior",
    ],
    tags: ["tea", "holland", "daytime"],
  },
  {
    id: "charnallies",
    name: "Charnallies",
    category: "Food & Drink",
    tagline: "American-themed family restaurant near the pier",
    description:
      "Official site: breakfast through dinner, gluten-free and vegan menus, and a dog-friendly section. Reviews continue into 2026.",
    highlights: ["All-day dining", "Dog-friendly section", "Near the pier"],
    duration: "1–2 hours",
    bestTime: "Breakfast through evening",
    price: "Restaurant prices — see charnallies.co.uk",
    location: "1–5 Pier Avenue, CO15 1QB",
    coords: { lat: 51.7875, lng: 1.155 },
    officialUrl: "https://charnallies.co.uk/",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/d8/Pier_Avenue_in_Clacton_-_geograph.org.uk_-_5530218.jpg",
    imageAlt: "Pier Avenue in Clacton, near Charnallies",
    imageCredit: "Steve Daniels",
    imageLicense: "CC BY-SA 2.0",
    imageSourceUrl: "https://www.geograph.org.uk/photo/5530218",
    tips: [
      "Check the official menu and hours before you book a large group",
      "Photo is Pier Avenue, not the restaurant interior",
    ],
    tags: ["restaurant", "family", "dog-friendly"],
  },
  {
    id: "roaring-donkey",
    name: "The Roaring Donkey",
    category: "Food & Drink",
    tagline: "Hungry Horse family pub on Holland Road",
    description:
      "316 Holland Road: beer garden, outdoor play and a short hop from Kings Parade. Operated as a Hungry Horse.",
    highlights: ["Family menu", "Beer garden", "Near the promenade"],
    duration: "1–2 hours",
    bestTime: "Lunch or early evening",
    price: "Pub prices — see hungryhorse.co.uk",
    location: "316 Holland Road, CO15 6PD",
    coords: { lat: 51.797, lng: 1.175 },
    officialUrl: "https://www.hungryhorse.co.uk/pubs/essex/roaring-donkey",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/c/c5/%27The_Roaring_Donkey%27_public_house_-_geograph.org.uk_-_254496.jpg",
    imageAlt: "The Roaring Donkey public house on Holland Road",
    imageCredit: "Robert Edwards",
    imageLicense: "CC BY-SA 2.0",
    imageSourceUrl: "https://www.geograph.org.uk/photo/254496",
    tips: [
      "Confirm kitchen hours on the Hungry Horse page",
    ],
    tags: ["pub", "family", "holland"],
  },
  {
    id: "holland-haven",
    name: "Holland Haven Country Park",
    category: "Nature",
    tagline: "Coastal marsh LNR with bird hides",
    description:
      "Tendring District Council country park, part of Holland Haven Marshes SSSI. Hides and picnic space; satnav often CO15 5TZ. The wider SSSI is largely private — stay on country-park paths.",
    highlights: ["Bird hides", "SSSI flora and fauna", "Coastal walks"],
    duration: "1–3 hours",
    bestTime: "Migration seasons; quiet weekdays",
    price: "Free (car park is pay-and-display)",
    location: "Holland Haven, Holland-on-Sea",
    coords: { lat: 51.80785, lng: 1.20911 },
    officialUrl:
      "https://legacy.tendringdc.gov.uk/leisure/countryside-parks-gardens/nature-and-countryside",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/6/6d/Holland_Haven_Country_Park_-_view_from_bird_hide_2.jpg",
    imageAlt: "View from a bird hide at Holland Haven Country Park",
    imageCredit: "Dudley Miles",
    imageLicense: "CC BY-SA 4.0",
    imageSourceUrl:
      "https://commons.wikimedia.org/wiki/File:Holland_Haven_Country_Park_-_view_from_bird_hide_2.jpg",
    tips: [
      "Stay on signed country-park routes — much of the SSSI is private",
      "Holland Haven Car Park is Mi Permit 706016; toilets at Holland Gap are seasonal",
    ],
    tags: ["wildlife", "walking", "nature", "free"],
    featured: true,
  },
  {
    id: "howlands-marsh",
    name: "Howlands Marsh",
    category: "Nature",
    tagline: "Essex Wildlife Trust coastal grazing marsh",
    description:
      "74 hectares of coastal grazing marsh at St Osyth. Footpath plus stilts hides; dogs on a lead on the public footpath only, with no access to the grazed fields. The lay-by holds only three or four cars.",
    highlights: ["Winter wildfowl", "Marsh harriers", "Two hides"],
    duration: "1–2 hours",
    bestTime: "Winter for wildfowl; quiet weekdays",
    price: "Free (trust membership welcome)",
    location: "B1027 Colchester Road, St Osyth, CO16 8HW",
    coords: { lat: 51.805, lng: 1.055 },
    officialUrl: "https://www.essexwt.org.uk/nature-reserves/howlands-marsh",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/5/54/Howlands_Marsh_Reserve_-_geograph.org.uk_-_1356488.jpg",
    imageAlt: "Grazing marsh at Howlands Marsh nature reserve",
    imageCredit: "Glyn Baker",
    imageLicense: "CC BY-SA 2.0",
    imageSourceUrl: "https://www.geograph.org.uk/photo/1356488",
    tips: [
      "Dogs on the public footpath only, on leads",
      "Tiny lay-by — do not block the B1027",
    ],
    tags: ["wildlife", "walking", "nature", "ewt"],
  },
  {
    id: "great-holland-pits",
    name: "Great Holland Pits",
    category: "Nature",
    tagline: "Former gravel pits — a wildlife haven",
    description:
      "13 hectares of ponds, woodland and grassland on Little Clacton Road. Open always; small car park on site. Do not park on Mill Lane.",
    highlights: ["Ponds", "Butterflies", "Near Little Clacton"],
    duration: "1–2 hours",
    bestTime: "Late spring and summer",
    price: "Free (trust membership welcome)",
    location: "Little Clacton Road, Great Holland, CO13 0EU",
    coords: { lat: 51.82, lng: 1.205 },
    officialUrl: "https://www.essexwt.org.uk/nature-reserves/great-holland-pits",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/b/b9/A_Great_Holland_Pits_Scene_-_geograph.org.uk_-_7581008.jpg",
    imageAlt: "Woodland and water at Great Holland Pits",
    imageCredit: "Glyn Baker",
    imageLicense: "CC BY-SA 2.0",
    imageSourceUrl: "https://www.geograph.org.uk/photo/7581008",
    tips: [
      "Use the reserve car park — not Mill Lane",
      "Handy if you are based near Little Clacton or Weeley Heath",
    ],
    tags: ["wildlife", "walking", "nature", "ewt"],
  },
  {
    id: "weeleyhall-wood",
    name: "Weeleyhall Wood",
    category: "Nature",
    tagline: "Ancient woodland SSSI near Weeley",
    description:
      "32 hectares of ancient woodland. Bluebells and nightingales. Dogs are banned 1 March–1 July and must be on leads 1 July–1 March. Park at Weeley Church, CO16 9AT.",
    highlights: ["Bluebells", "Nightingales", "Ancient oak"],
    duration: "1–2 hours",
    bestTime: "April–May for bluebells",
    price: "Free (trust membership welcome)",
    location: "Church Lane, Weeley, CO16 9AT",
    coords: { lat: 51.855, lng: 1.135 },
    officialUrl: "https://www.essexwt.org.uk/nature-reserves/weeleyhall-wood",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/c/c5/Path_in_Weeleyhall_Wood_-_geograph.org.uk_-_3623710.jpg",
    imageAlt: "Path through Weeleyhall Wood",
    imageCredit: "Roger Jones",
    imageLicense: "CC BY-SA 2.0",
    imageSourceUrl: "https://www.geograph.org.uk/photo/3623710",
    tips: [
      "Park in front of Weeley Church and walk Church Lane — do not block residents",
      "Leave dogs at home from 1 March to 1 July",
    ],
    tags: ["woodland", "walking", "nature", "ewt"],
  },
  {
    id: "naze-nature-centre",
    name: "Naze Nature Discovery Centre",
    category: "Nature",
    tagline: "Essex Wildlife Trust centre for fossils and coastal walks",
    description:
      "Café, shop and education space at Walton-on-the-Naze. The Naze cliffs (SSSI) erode about 1–2 m a year. Geowalk on site; open all year. Check tides and do not dig the cliffs.",
    highlights: ["Fossil hunting on the beach", "Café views", "John Weston reserve"],
    duration: "2–4 hours",
    bestTime: "Low tide for the beach; any season for the centre",
    price: "Centre free to enter; café extra",
    location: "Old Hall Lane, Walton, CO14 8LE",
    coords: { lat: 51.8641, lng: 1.2877 },
    officialUrl: "https://www.essexwt.org.uk/nature-reserves/naze",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/8/8a/Naze_Cliffs%2C_Walton-on-the-Naze%2C_Essex_-_geograph.org.uk_-_3399527.jpg",
    imageAlt: "Eroding Naze cliffs at Walton-on-the-Naze",
    imageCredit: "Peter Pearson",
    imageLicense: "CC BY-SA 2.0",
    imageSourceUrl: "https://www.geograph.org.uk/photo/3399527",
    tips: [
      "Use the Crag Walk platform; do not dig the cliffs",
      "Pair with Naze Tower next door in season",
      "Naze Car Park is Mi Permit 706004",
    ],
    tags: ["wildlife", "fossils", "day-trip", "walton"],
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
