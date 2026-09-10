/** Research-backed visitor content from docs/research/clacton-expand-research.json. */

export type Area =
  | "Clacton"
  | "Holland-on-Sea"
  | "Jaywick"
  | "St Osyth"
  | "Little Clacton"
  | "Point Clear"
  | "Other Tendring";

export interface FacilityPlace {
  id: string;
  name: string;
  area: Area;
  tagline: string;
  description: string;
  highlights: string[];
  location: string;
  coords: { lat: number; lng: number } | null;
  officialUrl: string | null;
  notes?: string | null;
  attractionId?: string;
}

export interface HistoryFact {
  id: string;
  fact: string;
  sourceUrl: string;
}

export interface HeritagePlace {
  id: string;
  name: string;
  area: Area;
  tagline: string;
  description: string;
  highlights: string[];
  location: string;
  officialUrl: string | null;
  notes?: string | null;
  attractionId?: string;
}

export type CautionSeverity = "avoid" | "caution" | "info";

export interface Caution {
  id: string;
  title: string;
  severity: CautionSeverity;
  where: string;
  advice: string;
  sourceUrl: string;
}

export interface OfficialLink {
  title: string;
  url: string;
  why: string;
}

export interface GuideVideo {
  title: string;
  channel: string;
  url: string;
  topic: string;
  relevance: string;
  notes?: string;
}

export const publicToilets: FacilityPlace[] = [
  {
    id: "toilet-pier-gap",
    name: "Pier Gap Public Conveniences",
    area: "Clacton",
    tagline: "Year-round toilets opposite Clacton Pier",
    description:
      "Men's ~7 / women's ~10; disabled access adjacent by Beach Patrol. Open all year dawn–dusk.",
    highlights: ["Year-round", "Beside pier", "Disabled adjacent"],
    location: "Pier Gap, CO15 1QX",
    coords: { lat: 51.7858, lng: 1.1555 },
    officialUrl: "https://www.tendringdc.gov.uk/public-conveniences/pier-gap",
  },
  {
    id: "toilet-ambleside",
    name: "Ambleside (+ Changing Places)",
    area: "Clacton",
    tagline: "Seasonal seafront toilets + Changing Places",
    description:
      "Open Good Friday–31 Oct. Changing Places next door (hoist/bed/shower; Access Key). ~5 min to pier.",
    highlights: ["Changing Places", "Seasonal", "East seafront"],
    location: "Kings Promenade, CO15 6JJ",
    coords: { lat: 51.7885, lng: 1.162 },
    officialUrl: "https://www.tendringdc.gov.uk/public-conveniences/ambleside",
    notes: "Closed out of season.",
  },
  {
    id: "toilet-west-greensward",
    name: "West Greensward (+ Changing Places)",
    area: "Clacton",
    tagline: "Year-round toilets with Changing Places",
    description:
      "Men's ~7 / women's ~14 + baby change; Changing Places next door (Access Key). Near cafe/crazy golf/Toby.",
    highlights: ["Year-round", "Changing Places", "Baby changing"],
    location: "Marine Parade Way, CO15 1ND",
    coords: { lat: 51.783, lng: 1.142 },
    officialUrl:
      "https://www.tendringdc.gov.uk/public-conveniences/west-greensward",
  },
  {
    id: "toilet-queensway",
    name: "Queensway Public Conveniences",
    area: "Holland-on-Sea",
    tagline: "Seasonal Holland seafront toilets",
    description:
      "Open Good Friday–31 Oct; disabled on site; near Kingscliff Hotel slope.",
    highlights: ["Seasonal", "Seafront Holland", "Disabled"],
    location: "Kings Parade, Holland-on-Sea, CO15 5JF",
    coords: { lat: 51.801, lng: 1.188 },
    officialUrl: "https://www.tendringdc.gov.uk/public-conveniences/queensway",
  },
  {
    id: "toilet-holland-gap",
    name: "Holland Gap Public Conveniences",
    area: "Holland-on-Sea",
    tagline: "Seasonal toilets by Holland Haven car park",
    description:
      "Open Good Friday–31 Oct; adjacent Haven car park & sailing club; Changing Places on seafront (Access Key).",
    highlights: ["Seasonal", "By Haven parking", "Disabled"],
    location: "Manor Way, Holland-on-Sea, CO15 5UB",
    coords: { lat: 51.8075, lng: 1.208 },
    officialUrl: "https://www.tendringdc.gov.uk/public-conveniences/holland-gap",
  },
  {
    id: "toilet-walton-pier",
    name: "Walton Pier Public Conveniences",
    area: "Other Tendring",
    tagline: "Year-round toilets opposite Walton Pier",
    description:
      "Useful for day trips; baby changing; disabled; beside award beach/patrol.",
    highlights: ["Year-round", "Opposite pier", "Baby changing"],
    location: "The Parade, Walton, CO14 8EH",
    coords: { lat: 51.8485, lng: 1.27 },
    officialUrl: "https://www.tendringdc.gov.uk/public-conveniences/walton-pier",
  },
  {
    id: "toilet-jaywick-sunspot-note",
    name: "Jaywick toilets (Sunspot) — status note",
    area: "Jaywick",
    tagline: "Sunspot toilets per TDC; not at beach waterline",
    description:
      "July 2024 Cabinet report: new toilets at Sunspot replaced Sweet Tina's; Tamarisk Way closed after vandalism; Sunspot within ~700m of Jaywick Beach.",
    highlights: ["Sunspot location", "~700m of beach", "Not waterline"],
    location: "Sunspot, Jaywick (confirm entrance on TDC map/app)",
    coords: null,
    officialUrl:
      "https://tdcdemocracy.tendringdc.gov.uk/documents/s68810/A10%20Report%20Petition%20-%20Provision%20of%20Toilets%20at%20Jaywick%20Sands%20Beach.pdf",
    notes:
      "Pin exact entrance on the Tendring map or app; legacy Meadow Way listing is outdated.",
  },
];

export const carParks: FacilityPlace[] = [
  {
    id: "parking-sea-front-bays",
    name: "Sea Front Bays Car Park",
    area: "Clacton",
    tagline: "48-bay Marine Parade East parking",
    description:
      "48 spaces (4 disabled); 24/7; Mi Permit 706017. Page charges 08:00–18:00: 1h £1.50, 4h £4, over 4h £6. Blue badge 3h free with clock.",
    highlights: ["24/7", "Seafront", "706017"],
    location: "Marine Parade East, CO15 5AE",
    coords: { lat: 51.796, lng: 1.176 },
    officialUrl:
      "https://www.tendringdc.gov.uk/car-parks/sea-front-bays-clacton-on-sea",
    notes: "Fees may change under the 2025/26 schedule — verify Mi Permit.",
  },
  {
    id: "parking-martello-coach",
    name: "Martello Coach and Car Park",
    area: "Clacton",
    tagline: "West Road car & coach park",
    description:
      "48 cars + 14 coaches; Mi 706011/706028. Page: 2h £3.50, 4h £6, over 4h £8. LOCKED 21:00 (Apr–Sep) / 18:00 (Oct–Mar).",
    highlights: ["Coach parking", "Near Martello Bay", "Night lock"],
    location: "West Road, CO15 1AH",
    coords: { lat: 51.7827, lng: 1.1421 },
    officialUrl:
      "https://www.tendringdc.gov.uk/car-parks/martello-coach-and-car-park-clacton-on-sea",
    notes: "Verify live charges.",
  },
  {
    id: "parking-holland-haven",
    name: "Holland Haven Car Park",
    area: "Holland-on-Sea",
    tagline: "~300-space grass park for country park",
    description: "Mi Permit 706016; beside Holland Gap toilets (seasonal).",
    highlights: ["300 spaces", "Country park", "706016"],
    location: "Holland Haven, Holland-on-Sea",
    coords: { lat: 51.80785, lng: 1.20911 },
    officialUrl: "https://www.tendringdc.gov.uk/car-parking",
    notes: "Tariff — verify live.",
  },
  {
    id: "parking-jaywick-beach",
    name: "Jaywick Beach Car Park",
    area: "Jaywick",
    tagline: "Tamarisk Way beach parking",
    description: "54 spaces (4 disabled); Mi 706027.",
    highlights: ["54 spaces", "Near beach", "706027"],
    location: "Tamarisk Way, Jaywick",
    coords: { lat: 51.7735, lng: 1.1119 },
    officialUrl: "https://www.tendringdc.gov.uk/car-parking",
  },
  {
    id: "parking-wellesley",
    name: "Wellesley Road Car Park",
    area: "Clacton",
    tagline: "Large town-centre car park (206)",
    description: "206 spaces; Mi 706013; useful for theatres/town.",
    highlights: ["206 spaces", "Town centre", "706013"],
    location: "Wellesley Road, Clacton",
    coords: { lat: 51.7924, lng: 1.151 },
    officialUrl: "https://www.tendringdc.gov.uk/car-parking",
  },
  {
    id: "parking-hazelmere",
    name: "Hazelmere Road Car Park",
    area: "Holland-on-Sea",
    tagline: "Large Holland car park (140)",
    description: "140 spaces (4 disabled); Mi 706033.",
    highlights: ["140 spaces", "Holland access", "706033"],
    location: "Hazelmere Road, Holland-on-Sea",
    coords: { lat: 51.79739, lng: 1.18067 },
    officialUrl: "https://www.tendringdc.gov.uk/car-parking",
  },
  {
    id: "parking-naze",
    name: "Naze Car Park",
    area: "Other Tendring",
    tagline: "Pay & display for Naze Tower/centre",
    description: "~250 spaces; Mi 706004. EWT quotes example tariffs — verify live.",
    highlights: ["Serves Naze", "~250 spaces", "706004"],
    location: "Old Hall Lane, Walton",
    coords: { lat: 51.8640815, lng: 1.28766 },
    officialUrl: "https://www.tendringdc.gov.uk/car-parking",
    notes: "Quoted charges may lag the fee review.",
  },
];

export const historyFacts: HistoryFact[] = [
  {
    id: "hf-pier-1871",
    fact: "Clacton Pier opened 27 July 1871 as the first public building of Clacton-on-Sea; originally ~160 yards as a steamship landing stage.",
    sourceUrl: "https://en.wikipedia.org/wiki/Clacton_Pier",
  },
  {
    id: "hf-pier-1893",
    fact: "By 1893 the pier was lengthened to about 1,180 ft (360 m) with pavilion facilities for growing day-trippers.",
    sourceUrl: "https://en.wikipedia.org/wiki/Clacton_Pier",
  },
  {
    id: "hf-bruff",
    fact: "Modern Clacton-on-Sea was founded as a planned seaside resort from 1871 under Peter Bruff; railway arrived 1882.",
    sourceUrl: "https://en.wikipedia.org/wiki/Clacton-on-Sea",
  },
  {
    id: "hf-martello-east",
    fact: "29 Martello towers built on Essex/Suffolk east coast c.1808/09–1812 against Napoleonic invasion; lettered from A at St Osyth/Point Clear. Name from Mortella Point, Corsica.",
    sourceUrl:
      "https://heritagecalling.com/2025/10/09/a-brief-introduction-to-martello-towers/",
  },
  {
    id: "hf-jaywick-c",
    fact: "Jaywick Martello Tower (Tower C) built c.1808–1811; bought by ECC 2002; opened as arts/heritage venue 2005 after EH/NLHF-supported renovation.",
    sourceUrl:
      "https://www.explore-essex.com/places-to-go/find-whats-near-me/jaywick-martello-tower",
  },
  {
    id: "hf-st-osyth-1121",
    fact: "St Osyth's Abbey (Priory) founded c.1121 by Richard de Belmeis, Bishop of London, for Augustinian canons; dissolved 1539.",
    sourceUrl: "https://en.wikipedia.org/wiki/St_Osyth%27s_Priory",
  },
  {
    id: "hf-gatehouse-gi",
    fact: "Late-15th-century Priory gatehouse and flanking ranges are Grade I listed; five separate Grade I listings cover major priory buildings.",
    sourceUrl: "https://en.wikipedia.org/wiki/St_Osyth%27s_Priory",
  },
  {
    id: "hf-princes-1931",
    fact: "Princes Theatre in Clacton Town Hall opened 14 April 1931 by Prince Arthur of Connaught; original 1,250 seats, now 820.",
    sourceUrl: "https://princestheatre.co.uk/our-history",
  },
  {
    id: "hf-pier-year-2020",
    fact: "Clacton Pier named Pier of the Year 2020 by the National Piers Society.",
    sourceUrl: "https://en.wikipedia.org/wiki/Clacton_Pier",
  },
  {
    id: "hf-naze-1720",
    fact: "Naze Tower at Walton built by Trinity House in 1720 as an 86 ft octagonal navigation mark; now Grade II* visitor attraction.",
    sourceUrl: "https://www.nazetower.co.uk/",
  },
  {
    id: "hf-little-clacton",
    fact: "Little Clacton appears in Domesday Book; parish histories link early settlement to Bovill and Engayne estates.",
    sourceUrl: "https://www.littleclactonparishcouncil.gov.uk/little-clacton",
  },
  {
    id: "hf-gardens-1921",
    fact: "Clacton Seafront Gardens originally laid out in 1921 and refurbished in 1997.",
    sourceUrl: "https://discoverclacton.co.uk/place/clacton-seafront-gardens/",
  },
  {
    id: "hf-mustang-1945",
    fact: "East Essex Aviation Museum grew from recovery of a USAAF P-51 Mustang ditched off Clacton 13 Jan 1945; museum opened in Point Clear Martello 1986.",
    sourceUrl:
      "https://airmuseumnetwork.com/directory/listing/east-essex-aviation-society-museum",
  },
];

export const heritagePlaces: HeritagePlace[] = [
  {
    id: "st-osyth-priory-gatehouse",
    name: "St Osyth Priory Gatehouse",
    area: "St Osyth",
    tagline: "Late-15th-c flint Grade I gatehouse",
    description:
      "Most significant surviving monastic structure at the Priory; decorative flint; five Grade I listings cover major buildings.",
    highlights: ["Grade I", "Flint flushwork", "Estate landmark"],
    location: "St Osyth Priory",
    officialUrl: "https://en.wikipedia.org/wiki/St_Osyth%27s_Priory",
    notes: "Interior/grounds via tours.",
    attractionId: "st-osyth-priory",
  },
  {
    id: "clacton-pier-heritage",
    name: "Clacton Pier",
    area: "Clacton",
    tagline: "First public building of the 1871 resort",
    description:
      "Clacton Pier opened 27 July 1871 as the first public building of the new seaside resort. It offers rides including a 110ft observation wheel, ten-pin bowling, soft play, adventure golf, arcade and Jurassic Pier 4D, plus food outlets.",
    highlights: ["Opened 1871", "Rides & Wheel Experience", "National Piers Society 2020"],
    location: "1 North Sea, Clacton-on-Sea, CO15 1QX",
    officialUrl: "https://www.clactonpier.co.uk/",
    attractionId: "clacton-pier",
  },
  {
    id: "princes-theatre",
    name: "Princes Theatre",
    area: "Clacton",
    tagline: "820-seat theatre in Grade II Town Hall",
    description:
      "Opened 14 April 1931 by Prince Arthur of Connaught inside Clacton Town Hall (Sir A Brumwell Thomas). Capacity now 820; 150+ shows/events yearly per venue history.",
    highlights: ["Grade II Town Hall", "Town centre", "Touring acts"],
    location: "Clacton Town Hall, Station Road, CO15 1SE",
    officialUrl: "https://princestheatre.co.uk/",
  },
  {
    id: "clacton-museum",
    name: "Clacton Museum",
    area: "Clacton",
    tagline: "Free local history museum above library",
    description:
      "Displays on resort since 1871, pier entertainment, Butlin's and Great Clacton. Discover Clacton: free; limited hours (Tue/Sat mornings at research time).",
    highlights: ["Free entry", "Seaside heritage", "Library building"],
    location: "2nd Floor, Clacton Library, 96 Station Road, CO15 1SF",
    officialUrl: "https://discoverclacton.co.uk/place/clacton-museum/",
    notes: "Very limited hours — confirm before visit.",
  },
  {
    id: "jaywick-martello-tower",
    name: "Jaywick Martello Tower",
    area: "Jaywick",
    tagline: "Napoleonic Tower C as arts & heritage venue",
    description:
      "Grade II/scheduled Tower C (c.1808–1811); ECC renovated, opened 2005. Explore Essex: reopen 18 Feb 2026; term weekends / holiday Wed–Sun 10–16; £1 adult.",
    highlights: ["History exhibition", "Roof views", "Martello Trail hub"],
    location: "The Promenade, Belsize Ave, Jaywick, CO15 2LF",
    officialUrl:
      "https://www.explore-essex.com/places-to-go/find-whats-near-me/jaywick-martello-tower",
    notes: "Check staffing closures.",
    attractionId: "jaywick-martello",
  },
  {
    id: "st-osyth-priory-tours",
    name: "St Osyth Priory (guided tours)",
    area: "St Osyth",
    tagline: "Medieval abbey estate via pre-booked tours",
    description:
      "Founded c.1121 Augustinian house; Grade I complex. Public via Priory & Parish Trust seasonal guided walking/trailer/nature tours — not free roaming.",
    highlights: ["Gatehouse", "Pre-booked tours", "Large estate"],
    location: "Education Centre, Colchester Road, St Osyth, CO16 8HA",
    officialUrl: "https://www.stosythprioryandparishtrust.org/visit/",
    notes: "Book tours; seasonal.",
    attractionId: "st-osyth-priory",
  },
  {
    id: "east-essex-aviation-museum",
    name: "East Essex Aviation Society & Museum",
    area: "Point Clear",
    tagline: "WWII aviation museum in Martello Tower",
    description:
      "In Point Clear Martello since 1986; P-51 Mustang remains from 13 Jan 1945 ditching. Typical hours Apr–Oct Sun 10–14; Jun–Sep also Wed 10–14; donations.",
    highlights: ["Martello setting", "P-51 display", "Donation entry"],
    location: "Martello Tower, Point Clear, CO16 8LW",
    officialUrl: "http://www.eastessexaviationsociety.org/",
    notes: "Confirm hours on social; postcodes vary in directories.",
  },
  {
    id: "naze-tower-daytrip",
    name: "Naze Tower (Walton day trip)",
    area: "Other Tendring",
    tagline: "1720 Trinity House tower with views",
    description:
      "Grade II* 86ft octagonal tower; gallery, museum, tea rooms, roof. Typically late Mar–early Nov daily 10–17.",
    highlights: ["Roof views", "Museum & tea rooms", "Beside Naze cliffs"],
    location: "Old Hall Lane, Walton-on-the-Naze, CO14 8LE",
    officialUrl: "https://www.nazetower.co.uk/",
    notes: "Stairs not step-free; seasonal.",
  },
  {
    id: "clacton-heritage-trail",
    name: "Clacton Heritage Trail (Clacton 150)",
    area: "Clacton",
    tagline: "5-mile seafront trail with 19 signs",
    description:
      "NLHF trail (2021) from Sunspot to Borrow Pit Bay Holland with 19 interpretation points and some AR via Zappar.",
    highlights: ["19 signs", "Seafront walk", "AR at some points"],
    location: "Seafront Clacton to Holland-on-Sea",
    officialUrl: "https://essex-sunshine-coast.org.uk/places/trails-of-tendring/",
  },
];

export const cautions: Caution[] = [
  {
    id: "caution-colne-point-access",
    title: "Colne Point is not casual public access",
    severity: "avoid",
    where: "Colne Point NR, St Osyth",
    advice:
      "EWT: Wildlife Trust members only or prior consent. Car park needs prior consent and can flood on high tides.",
    sourceUrl: "https://www.essexwt.org.uk/nature-reserves/colne-point",
  },
  {
    id: "caution-colne-point-nesting",
    title: "Ground-nesting birds at Colne Point",
    severity: "caution",
    where: "Colne Point beach/shingle in summer",
    advice:
      "Important for little terns, oystercatchers, ringed plovers. Avoid nest disturbance; follow Share Our Shores if visiting with permission.",
    sourceUrl: "https://www.essexwt.org.uk/nature-reserves/colne-point",
  },
  {
    id: "caution-howlands-dogs",
    title: "Howlands Marsh dog/field restrictions",
    severity: "caution",
    where: "Howlands Marsh EWT",
    advice:
      "Dogs only on public footpath on leads. No public access into grazed fields.",
    sourceUrl: "https://www.essexwt.org.uk/nature-reserves/howlands-marsh",
  },
  {
    id: "caution-weeleyhall-dogs",
    title: "Weeleyhall Wood seasonal dog ban",
    severity: "caution",
    where: "Weeleyhall Wood",
    advice: "Dogs not permitted 1 Mar–1 Jul; on leads 1 Jul–1 Mar.",
    sourceUrl: "https://www.essexwt.org.uk/nature-reserves/weeleyhall-wood",
  },
  {
    id: "caution-holland-haven-private",
    title: "Much of Holland Haven Marshes SSSI is private",
    severity: "caution",
    where: "Beyond country park paths",
    advice:
      "Country park accessible; much of wider SSSI private with no public access. Stay on signed routes.",
    sourceUrl: "https://en.wikipedia.org/wiki/Holland_Haven_Marshes",
  },
  {
    id: "caution-martello-lock",
    title: "Martello Coach & Car Park locks at night",
    severity: "caution",
    where: "West Road Martello CP",
    advice: "Locked 21:00 (1 Apr–30 Sep) and 18:00 (1 Oct–31 Mar).",
    sourceUrl:
      "https://www.tendringdc.gov.uk/car-parks/martello-coach-and-car-park-clacton-on-sea",
  },
  {
    id: "caution-seasonal-toilets",
    title: "Many seafront toilets are seasonal",
    severity: "info",
    where: "Ambleside, Queensway, Holland Gap",
    advice:
      "Open Good Friday–31 Oct. Year-round: Pier Gap, West Greensward. Index notes seasonal reopen date for Easter.",
    sourceUrl: "https://www.tendringdc.gov.uk/public-conveniences",
  },
  {
    id: "caution-dog-beach-bans",
    title: "Seasonal dog bans 1 May–30 Sep on mapped beaches",
    severity: "caution",
    where: "Clacton central (Pier–West Road outfall) and Holland ban strips",
    advice:
      "Dogs banned on listed sections May–Sep; on lead on adjacent promenades. Check TDC map/signs.",
    sourceUrl:
      "https://www.tendringdc.gov.uk/content/bye-laws-and-animals-on-beaches",
  },
  {
    id: "caution-swim-structures",
    title: "Keep away from piers/groynes when swimming",
    severity: "caution",
    where: "All Tendring beaches",
    advice:
      "Avoid piers, groynes, breakwaters, outfalls — rips/undertows. Swim between red/yellow flags; red flag = do not enter.",
    sourceUrl: "https://www.tendringdc.gov.uk/content/beach-safety",
  },
  {
    id: "caution-pier-sides",
    title: "Beaches either side of Clacton Pier unsupervised",
    severity: "caution",
    where: "Clacton either side of pier",
    advice:
      "TDC advises using supervised beaches (Martello Bay, Palace Breakwater, East Fishtail) rather than red-flagged unsupervised pier-side areas.",
    sourceUrl: "https://www.tendringdc.gov.uk/content/beach-safety",
  },
  {
    id: "caution-tides",
    title: "Check tides — cut-off risk on foreshore",
    severity: "caution",
    where: "Coastal walks, Colne Point, Naze beach",
    advice:
      "Always check tide before shore walks/water entry. EWT also warns of flooding/tide-limited access.",
    sourceUrl: "https://www.tendringdc.gov.uk/content/beach-safety",
  },
  {
    id: "caution-naze-cliffs",
    title: "Naze cliffs actively eroding",
    severity: "caution",
    where: "Walton Naze cliffs (day trip)",
    advice:
      "Erosion ~1–2 m/year. Use Crag Walk platform; do not dig cliffs; steps to beach tide/mobility limited.",
    sourceUrl: "https://www.essexwt.org.uk/nature-reserves/naze",
  },
  {
    id: "caution-parking-fees",
    title: "Car park charges may have changed 2025/26",
    severity: "info",
    where: "All TDC pay car parks",
    advice:
      "Revised fees approved for 2025/26. Verify Mi Permit/on-site before quoting prices in guide.",
    sourceUrl:
      "https://tdcdemocracy.tendringdc.gov.uk/mgIssueHistoryHome.aspx?IId=34811&Opt=0",
  },
  {
    id: "caution-priory-tours",
    title: "St Osyth Priory is tour-access only",
    severity: "info",
    where: "St Osyth Priory estate",
    advice:
      "Pre-booked heritage/trailer/nature tours in season — not free open park.",
    sourceUrl: "https://www.stosythprioryandparishtrust.org/visit/",
  },
  {
    id: "caution-inflatables",
    title: "No inflatables in strong wind / windsock",
    severity: "caution",
    where: "Tendring beaches",
    advice:
      "Orange windsock = dangerous wind; never take inflatables on sea. Offshore breeze can sweep them out quickly.",
    sourceUrl: "https://www.tendringdc.gov.uk/content/beach-safety",
  },
];

export const nearBarnfields: FacilityPlace[] = [
  {
    id: "barnfields-retreat",
    name: "Barnfields Retreat",
    area: "Little Clacton",
    tagline: "B&B/annexe at Weeley Heath / Little Clacton CO16 9EF",
    description:
      "Listings place 1 Barnfields, Weeley/Little Clacton CO16 9EF with garden views, WiFi and free private parking. Base for EWT sites and Clacton coast (~20–30 min drive estimate).",
    highlights: ["CO16 9EF", "Near Weeley & Little Clacton", "Coast day trips"],
    location:
      "1 Barnfields / The Annexe Barnfields, Weeley Heath / Little Clacton, CO16 9EF",
    coords: null,
    officialUrl: null,
    notes: "No independent operator website verified; confirm with host.",
  },
  {
    id: "near-great-holland-pits",
    name: "Great Holland Pits (nearby)",
    area: "Other Tendring",
    tagline: "EWT reserve on Little Clacton Road",
    description:
      "13ha ponds/woodland/grassland on Little Clacton Road; open always; small car park; no parking Mill Lane. Convenient countryside walk from the Weeley Heath/Little Clacton corridor.",
    highlights: ["Open always", "Small car park", "Ponds"],
    location: "Little Clacton Road, Great Holland, CO13 0EU",
    coords: { lat: 51.82, lng: 1.205 },
    officialUrl: "https://www.essexwt.org.uk/nature-reserves/great-holland-pits",
  },
  {
    id: "near-st-james-walks",
    name: "St James' Church & village walks",
    area: "Little Clacton",
    tagline: "Church and ~3–4 mile circular",
    description:
      "Parish church and village heritage; Sunshine Coast describes circular from church.",
    highlights: ["Norman church", "Village circular", "Quiet lanes"],
    location: "Little Clacton",
    coords: { lat: 51.825, lng: 1.145 },
    officialUrl: "https://essex-sunshine-coast.org.uk/places/little-clacton/",
    attractionId: "little-clacton",
  },
  {
    id: "near-weeleyhall-wood",
    name: "Weeleyhall Wood (nearby)",
    area: "Other Tendring",
    tagline: "Ancient woodland near Weeley",
    description: "See nature entry; park at Weeley Church; dog ban Mar–Jul.",
    highlights: ["SSSI woodland", "Bluebells", "Nightingales"],
    location: "Church Lane, Weeley, CO16 9AT",
    coords: { lat: 51.855, lng: 1.135 },
    officialUrl: "https://www.essexwt.org.uk/nature-reserves/weeleyhall-wood",
  },
  {
    id: "near-weeley-village",
    name: "Weeley village / church access",
    area: "Other Tendring",
    tagline: "Village waypoint for woodland",
    description:
      "Wild Essex: park in front of Weeley Church for Weeleyhall Wood access via Church Lane.",
    highlights: ["Church parking tip", "B1441", "Rail at Weeley"],
    location: "Weeley, CO16 9AT",
    coords: { lat: 51.856, lng: 1.132 },
    officialUrl: "https://www.wildessex.net/sites/Weeleyhall%20Wood.htm",
  },
  {
    id: "near-clacton-pier",
    name: "Clacton Pier (drive from base)",
    area: "Clacton",
    tagline: "Main seaside day out",
    description:
      "Flagship pier day out. Drive from Weeley Heath/Little Clacton typically ~20–30 min (estimate only).",
    highlights: ["Flagship pier", "All-weather options"],
    location: "1 North Sea, CO15 1QX",
    coords: { lat: 51.7855, lng: 1.1559 },
    officialUrl: "https://www.clactonpier.co.uk/",
    notes: "Drive time is an estimate, not from an official journey planner.",
    attractionId: "clacton-pier",
  },
  {
    id: "near-shopping-village",
    name: "Clacton Shopping Village (nearby)",
    area: "Clacton",
    tagline: "Retail stop toward Clacton",
    description: "Stephenson Road West CO15 4TL off A133.",
    highlights: ["Free parking claim", "Brands"],
    location: "Stephenson Road West, CO15 4TL",
    coords: { lat: 51.8105, lng: 1.145 },
    officialUrl: "https://clactonshoppingvillage.com/",
    attractionId: "factory-outlet",
  },
];

export const officialLinks: OfficialLink[] = [
  {
    title: "Discover Clacton",
    url: "https://discoverclacton.co.uk/plan-your-visit/",
    why: "Local visitor planning hub for pier, beaches, theatres, gardens.",
  },
  {
    title: "Visit Essex – Clacton-on-Sea",
    url: "https://www.visitessex.com/explore/coastal-destinations/clacton-on-sea",
    why: "Official destination overview and attraction listings.",
  },
  {
    title: "Tendring DC – Public Conveniences",
    url: "https://www.tendringdc.gov.uk/public-conveniences",
    why: "Authoritative toilet locations and seasonal notes.",
  },
  {
    title: "Tendring DC – Car Parking",
    url: "https://www.tendringdc.gov.uk/car-parking",
    why: "Official car park list with Mi Permit codes and coords.",
  },
  {
    title: "Tendring DC – Beach Safety",
    url: "https://www.tendringdc.gov.uk/content/beach-safety",
    why: "Flags, lifeguarded beaches, swimming cautions.",
  },
  {
    title: "Tendring DC – Dogs on beaches",
    url: "https://www.tendringdc.gov.uk/content/bye-laws-and-animals-on-beaches",
    why: "Seasonal dog ban zones and maps.",
  },
  {
    title: "Clacton Pier",
    url: "https://www.clactonpier.co.uk/",
    why: "Rides, tickets, events, hours.",
  },
  {
    title: "Clacton Airshow",
    url: "https://clactonairshow.com/",
    why: "Official TDC-staged airshow dates, travel and parking.",
  },
  {
    title: "Clacton Carnival",
    url: "http://www.clactoncarnival.org/",
    why: "Carnival week and street procession details.",
  },
  {
    title: "Essex Wildlife Trust – Howlands Marsh",
    url: "https://www.essexwt.org.uk/nature-reserves/howlands-marsh",
    why: "Access rules and wildlife info.",
  },
  {
    title: "Essex Wildlife Trust – Colne Point",
    url: "https://www.essexwt.org.uk/nature-reserves/colne-point",
    why: "Restricted access and nesting cautions.",
  },
  {
    title: "Essex Wildlife Trust – Great Holland Pits",
    url: "https://www.essexwt.org.uk/nature-reserves/great-holland-pits",
    why: "Near Little Clacton/Weeley Heath base.",
  },
  {
    title: "Essex Wildlife Trust – Weeleyhall Wood",
    url: "https://www.essexwt.org.uk/nature-reserves/weeleyhall-wood",
    why: "Ancient woodland near Barn Fields corridor.",
  },
  {
    title: "Essex Wildlife Trust – The Naze",
    url: "https://www.essexwt.org.uk/nature-reserves/naze",
    why: "Day-trip nature centre, fossils, cliff safety.",
  },
  {
    title: "Explore Essex – Jaywick Martello Tower",
    url: "https://www.explore-essex.com/places-to-go/find-whats-near-me/jaywick-martello-tower",
    why: "Opening times, entry, exhibitions.",
  },
  {
    title: "St Osyth Priory & Parish Trust – Visit",
    url: "https://www.stosythprioryandparishtrust.org/visit/",
    why: "Book guided tours of Priory.",
  },
  {
    title: "Clacton Shopping Village",
    url: "https://clactonshoppingvillage.com/",
    why: "Outlet shopping and facilities.",
  },
  {
    title: "Greater Anglia – Clacton-on-Sea station",
    url: "https://www.greateranglia.co.uk/travel-information/station-information/clt",
    why: "Rail access, facilities, step-free Category A.",
  },
  {
    title: "National Rail – Clacton-on-Sea",
    url: "https://www.nationalrail.co.uk/stations/clacton-on-sea/",
    why: "Live times and station overview.",
  },
  {
    title: "Naze Tower",
    url: "https://www.nazetower.co.uk/",
    why: "Walton day-trip landmark hours/tickets.",
  },
  {
    title: "Tendring nature & countryside (legacy)",
    url: "https://legacy.tendringdc.gov.uk/leisure/countryside-parks-gardens/nature-and-countryside",
    why: "Holland Haven Country Park description.",
  },
];

export const guideVideos: GuideVideo[] = [
  {
    title: "Clacton-on-Sea Essex UK | Town Walk 2025",
    channel: "Let's Explore UK",
    url: "https://www.youtube.com/watch?v=Pnsm_naDwBw",
    topic: "Town and pier walk (2025)",
    relevance: "Clacton seafront/town overview",
    notes:
      "Travel vlog; description mentions contested framing — use for visuals not commentary.",
  },
  {
    title: "Walking on Clacton Pier (Air Show day 2019)",
    channel: "EastAngliaUK",
    url: "https://www.youtube.com/watch?v=tZB2drnUxfo",
    topic: "Pier walk during Air Show",
    relevance: "Clacton Pier / Airshow atmosphere",
  },
  {
    title: "Walking on Clacton Pier (Feb 2020 works)",
    channel: "EastAngliaUK",
    url: "https://www.youtube.com/watch?v=UH1QzWm65KE",
    topic: "Pier walk / winter works context",
    relevance: "Clacton Pier",
  },
  {
    title: "Holland-on-Sea to Frinton-on-Sea group walk",
    channel: "Coffee morning group walk (YouTube listing)",
    url: "https://www.youtube.com/watch?v=OREE7J26dK4",
    topic: "Coastal walk Holland to Frinton",
    relevance: "Holland-on-Sea promenade / day-trip coast",
    notes: "Amateur walk vlog; useful for coastal path visuals.",
  },
  {
    title: "Red Arrows display at Clacton Airshow (linked YT id from EastAngliaUK)",
    channel: "EastAngliaUK (cross-linked)",
    url: "https://www.youtube.com/watch?v=LRIuaCbaN-I",
    topic: "Red Arrows at Clacton Airshow",
    relevance: "Clacton Airshow / seafront",
    notes:
      "URL surfaced via EastAngliaUK Odysee page linking this YouTube id.",
  },
];

export function youtubeIdFromUrl(url: string): string | null {
  try {
    const parsed = new URL(url);
    const id = parsed.searchParams.get("v");
    return id && id.length >= 8 ? id : null;
  } catch {
    return null;
  }
}

export function mapsUrl(coords: { lat: number; lng: number }): string {
  return `https://www.google.com/maps?q=${coords.lat},${coords.lng}`;
}

export const TDC_TOILETS_INDEX =
  "https://www.tendringdc.gov.uk/public-conveniences";
export const TDC_PARKING_INDEX = "https://www.tendringdc.gov.uk/car-parking";
