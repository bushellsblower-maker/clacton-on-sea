/** Practical visitor data derived from docs/research pack dated 2026-09-10. */

export const RESEARCH_PACK_DATE = "2026-09-10";

export const researchAttribution =
  "Visitor facts, toilets, parking, cautions and links in this guide are derived from the docs/research pack dated 2026-09-10. Hours, fees and access rules change — confirm with Tendring District Council and venue sites before you travel.";

export interface HistoryFact {
  id: string;
  fact: string;
  sourceUrl: string;
}

export const historyFacts: HistoryFact[] = [
  {
    id: "hf-pier-1871",
    fact: "Clacton Pier opened 27 July 1871 as the first public building of Clacton-on-Sea; originally about 160 yards, built as a steamship landing stage.",
    sourceUrl: "https://en.wikipedia.org/wiki/Clacton_Pier",
  },
  {
    id: "hf-pier-1893",
    fact: "By 1893 the pier was lengthened to about 1,180 ft (360 m) with pavilion facilities for growing day-trippers.",
    sourceUrl: "https://en.wikipedia.org/wiki/Clacton_Pier",
  },
  {
    id: "hf-bruff",
    fact: "Modern Clacton-on-Sea was founded as a planned seaside resort from 1871 under Peter Bruff; the railway arrived in 1882.",
    sourceUrl: "https://en.wikipedia.org/wiki/Clacton-on-Sea",
  },
  {
    id: "hf-martello-east",
    fact: "Twenty-nine Martello towers were built on the Essex/Suffolk east coast c.1808/09–1812 against Napoleonic invasion; they are lettered from A at St Osyth/Point Clear. The name comes from Mortella Point, Corsica.",
    sourceUrl:
      "https://heritagecalling.com/2025/10/09/a-brief-introduction-to-martello-towers/",
  },
  {
    id: "hf-jaywick-c",
    fact: "Jaywick Martello Tower (Tower C) was built c.1808–1811; Essex County Council bought it in 2002 and it opened as an arts/heritage venue in 2005 after an English Heritage / NLHF-supported renovation.",
    sourceUrl:
      "https://www.explore-essex.com/places-to-go/find-whats-near-me/jaywick-martello-tower",
  },
  {
    id: "hf-st-osyth-1121",
    fact: "St Osyth's Abbey (Priory) was founded c.1121 by Richard de Belmeis, Bishop of London, for Augustinian canons; it was dissolved in 1539.",
    sourceUrl: "https://en.wikipedia.org/wiki/St_Osyth%27s_Priory",
  },
  {
    id: "hf-gatehouse-gi",
    fact: "The late-15th-century Priory gatehouse and flanking ranges are Grade I listed; five separate Grade I listings cover the major priory buildings.",
    sourceUrl: "https://en.wikipedia.org/wiki/St_Osyth%27s_Priory",
  },
  {
    id: "hf-princes-1931",
    fact: "Princes Theatre in Clacton Town Hall opened 14 April 1931 by Prince Arthur of Connaught; it originally seated 1,250 and now seats 820.",
    sourceUrl: "https://princestheatre.co.uk/our-history",
  },
  {
    id: "hf-pier-year-2020",
    fact: "Clacton Pier was named Pier of the Year 2020 by the National Piers Society.",
    sourceUrl: "https://en.wikipedia.org/wiki/Clacton_Pier",
  },
  {
    id: "hf-naze-1720",
    fact: "Naze Tower at Walton was built by Trinity House in 1720 as an 86 ft octagonal navigation mark; it is now a Grade II* visitor attraction.",
    sourceUrl: "https://www.nazetower.co.uk/",
  },
  {
    id: "hf-little-clacton",
    fact: "Little Clacton appears in the Domesday Book; parish histories link early settlement to the Bovill and Engayne estates.",
    sourceUrl: "https://www.littleclactonparishcouncil.gov.uk/little-clacton",
  },
  {
    id: "hf-gardens-1921",
    fact: "Clacton Seafront Gardens were originally laid out in 1921 and refurbished in 1997.",
    sourceUrl: "https://discoverclacton.co.uk/place/clacton-seafront-gardens/",
  },
  {
    id: "hf-mustang-1945",
    fact: "The East Essex Aviation Museum grew from the recovery of a USAAF P-51 Mustang ditched off Clacton on 13 January 1945; the museum opened in the Point Clear Martello in 1986.",
    sourceUrl:
      "https://airmuseumnetwork.com/directory/listing/east-essex-aviation-society-museum",
  },
];

export type ToiletSeason = "year-round" | "seasonal";

export interface PublicToilet {
  id: string;
  name: string;
  area: string;
  season: ToiletSeason;
  openNote: string;
  facilities: string[];
  location: string;
  officialUrl: string;
}

export const publicToilets: PublicToilet[] = [
  {
    id: "toilet-pier-gap",
    name: "Pier Gap Public Conveniences",
    area: "Clacton",
    season: "year-round",
    openNote: "Open all year, dawn–dusk. Opposite Clacton Pier.",
    facilities: ["Disabled access adjacent (Beach Patrol)", "Men's / women's"],
    location: "Pier Gap, CO15 1QX",
    officialUrl: "https://www.tendringdc.gov.uk/public-conveniences/pier-gap",
  },
  {
    id: "toilet-ambleside",
    name: "Ambleside (+ Changing Places)",
    area: "Clacton",
    season: "seasonal",
    openNote: "Open Good Friday–31 October. About a 5-minute walk to the pier.",
    facilities: ["Changing Places (hoist/bed/shower; Access Key)"],
    location: "Kings Promenade, CO15 6JJ",
    officialUrl: "https://www.tendringdc.gov.uk/public-conveniences/ambleside",
  },
  {
    id: "toilet-west-greensward",
    name: "West Greensward (+ Changing Places)",
    area: "Clacton",
    season: "year-round",
    openNote: "Open all year. Near the cafe, crazy golf and Toby.",
    facilities: ["Changing Places (Access Key)", "Baby changing"],
    location: "Marine Parade Way, CO15 1ND",
    officialUrl:
      "https://www.tendringdc.gov.uk/public-conveniences/west-greensward",
  },
  {
    id: "toilet-queensway",
    name: "Queensway Public Conveniences",
    area: "Holland-on-Sea",
    season: "seasonal",
    openNote: "Open Good Friday–31 October. Near the Kingscliff Hotel slope.",
    facilities: ["Disabled on site"],
    location: "Kings Parade, Holland-on-Sea, CO15 5JF",
    officialUrl: "https://www.tendringdc.gov.uk/public-conveniences/queensway",
  },
  {
    id: "toilet-holland-gap",
    name: "Holland Gap Public Conveniences",
    area: "Holland-on-Sea",
    season: "seasonal",
    openNote:
      "Open Good Friday–31 October. Beside Holland Haven car park and the sailing club.",
    facilities: ["Disabled", "Changing Places on the seafront (Access Key)"],
    location: "Manor Way, Holland-on-Sea, CO15 5UB",
    officialUrl: "https://www.tendringdc.gov.uk/public-conveniences/holland-gap",
  },
  {
    id: "toilet-walton-pier",
    name: "Walton Pier Public Conveniences",
    area: "Walton-on-the-Naze",
    season: "year-round",
    openNote: "Year-round toilets opposite Walton Pier — useful on a Naze day trip.",
    facilities: ["Baby changing", "Disabled"],
    location: "The Parade, Walton, CO14 8EH",
    officialUrl: "https://www.tendringdc.gov.uk/public-conveniences/walton-pier",
  },
];

export interface CarPark {
  id: string;
  name: string;
  area: string;
  spaces: string;
  miPermit?: string;
  notes: string;
  lockNote?: string;
  location: string;
  officialUrl: string;
}

export const carParks: CarPark[] = [
  {
    id: "parking-sea-front-bays",
    name: "Sea Front Bays Car Park",
    area: "Clacton",
    spaces: "48 (4 disabled)",
    miPermit: "706017",
    notes:
      "24/7. Tendring DC page (research date) listed charges 08:00–18:00. Blue badge 3 hours free with clock. Fees may have changed for 2025/26 — check Mi Permit.",
    location: "Marine Parade East, CO15 5AE",
    officialUrl:
      "https://www.tendringdc.gov.uk/car-parks/sea-front-bays-clacton-on-sea",
  },
  {
    id: "parking-martello-coach",
    name: "Martello Coach and Car Park",
    area: "Clacton",
    spaces: "48 cars + 14 coaches",
    miPermit: "706011 / 706028",
    notes:
      "Coach parking near Martello Bay. Verify live charges on the Tendring DC page.",
    lockNote: "Locked 21:00 (1 Apr–30 Sep) and 18:00 (1 Oct–31 Mar).",
    location: "West Road, CO15 1AH",
    officialUrl:
      "https://www.tendringdc.gov.uk/car-parks/martello-coach-and-car-park-clacton-on-sea",
  },
  {
    id: "parking-holland-haven",
    name: "Holland Haven Car Park",
    area: "Holland-on-Sea",
    spaces: "~300 (grass)",
    miPermit: "706016",
    notes:
      "Serves Holland Haven Country Park. Seasonal toilets at Holland Gap beside the park. Tariff: verify live.",
    location: "Holland Haven, Holland-on-Sea",
    officialUrl: "https://www.tendringdc.gov.uk/car-parking",
  },
  {
    id: "parking-jaywick-beach",
    name: "Jaywick Beach Car Park",
    area: "Jaywick",
    spaces: "54 (4 disabled)",
    miPermit: "706027",
    notes: "Tamarisk Way, near the beach.",
    location: "Tamarisk Way, Jaywick",
    officialUrl: "https://www.tendringdc.gov.uk/car-parking",
  },
  {
    id: "parking-wellesley",
    name: "Wellesley Road Car Park",
    area: "Clacton",
    spaces: "206",
    miPermit: "706013",
    notes: "Large town-centre park — useful for the theatres and shops.",
    location: "Wellesley Road, Clacton",
    officialUrl: "https://www.tendringdc.gov.uk/car-parking",
  },
  {
    id: "parking-hazelmere",
    name: "Hazelmere Road Car Park",
    area: "Holland-on-Sea",
    spaces: "140 (4 disabled)",
    miPermit: "706033",
    notes: "Holland-on-Sea access.",
    location: "Hazelmere Road, Holland-on-Sea",
    officialUrl: "https://www.tendringdc.gov.uk/car-parking",
  },
  {
    id: "parking-naze",
    name: "Naze Car Park",
    area: "Walton-on-the-Naze",
    spaces: "~250",
    miPermit: "706004",
    notes:
      "Pay & display for Naze Tower and the Nature Discovery Centre. Example tariffs quoted on EWT pages may lag the 2025/26 fee review.",
    location: "Old Hall Lane, Walton",
    officialUrl: "https://www.tendringdc.gov.uk/car-parking",
  },
];

export type CautionSeverity = "avoid" | "caution" | "info";

export interface VisitorCaution {
  id: string;
  title: string;
  severity: CautionSeverity;
  where: string;
  advice: string;
  sourceUrl: string;
}

export const visitorCautions: VisitorCaution[] = [
  {
    id: "caution-colne-point-access",
    title: "Colne Point is not casual public access",
    severity: "avoid",
    where: "Colne Point Nature Reserve, St Osyth",
    advice:
      "Essex Wildlife Trust: Wildlife Trust members only, or prior consent. The car park needs prior consent and can flood on high tides.",
    sourceUrl: "https://www.essexwt.org.uk/nature-reserves/colne-point",
  },
  {
    id: "caution-colne-point-nesting",
    title: "Ground-nesting birds at Colne Point",
    severity: "caution",
    where: "Colne Point beach and shingle in summer",
    advice:
      "Important for little terns, oystercatchers and ringed plovers. Do not disturb nests; follow Share Our Shores if you visit with permission.",
    sourceUrl: "https://www.essexwt.org.uk/nature-reserves/colne-point",
  },
  {
    id: "caution-howlands-dogs",
    title: "Howlands Marsh dog and field restrictions",
    severity: "caution",
    where: "Howlands Marsh (Essex Wildlife Trust)",
    advice:
      "Dogs only on the public footpath, on leads. No public access into the grazed fields.",
    sourceUrl: "https://www.essexwt.org.uk/nature-reserves/howlands-marsh",
  },
  {
    id: "caution-weeleyhall-dogs",
    title: "Weeleyhall Wood seasonal dog ban",
    severity: "caution",
    where: "Weeleyhall Wood",
    advice: "Dogs are not permitted 1 March–1 July; on leads 1 July–1 March.",
    sourceUrl: "https://www.essexwt.org.uk/nature-reserves/weeleyhall-wood",
  },
  {
    id: "caution-holland-haven-private",
    title: "Much of Holland Haven Marshes SSSI is private",
    severity: "caution",
    where: "Beyond country-park paths",
    advice:
      "The country park is accessible; much of the wider SSSI is private with no public access. Stay on signed routes.",
    sourceUrl: "https://en.wikipedia.org/wiki/Holland_Haven_Marshes",
  },
  {
    id: "caution-martello-lock",
    title: "Martello Coach & Car Park locks at night",
    severity: "caution",
    where: "West Road Martello car park",
    advice: "Locked 21:00 (1 April–30 September) and 18:00 (1 October–31 March).",
    sourceUrl:
      "https://www.tendringdc.gov.uk/car-parks/martello-coach-and-car-park-clacton-on-sea",
  },
  {
    id: "caution-seasonal-toilets",
    title: "Many seafront toilets are seasonal",
    severity: "info",
    where: "Ambleside, Queensway, Holland Gap",
    advice:
      "Seasonal blocks open Good Friday–31 October. Year-round: Pier Gap and West Greensward. Tendring DC notes the Easter reopen date each year.",
    sourceUrl: "https://www.tendringdc.gov.uk/public-conveniences",
  },
  {
    id: "caution-dog-beach-bans",
    title: "Seasonal dog bans 1 May–30 September",
    severity: "caution",
    where: "Clacton central (Pier–West Road outfall) and Holland ban strips",
    advice:
      "Dogs are banned on listed beach sections May–September, and should be on a lead on adjacent promenades. Check the Tendring DC map and on-site signs.",
    sourceUrl:
      "https://www.tendringdc.gov.uk/content/bye-laws-and-animals-on-beaches",
  },
  {
    id: "caution-swim-structures",
    title: "Keep away from piers and groynes when swimming",
    severity: "caution",
    where: "All Tendring beaches",
    advice:
      "Avoid piers, groynes, breakwaters and outfalls — rips and undertows. Swim between red/yellow flags; a red flag means do not enter.",
    sourceUrl: "https://www.tendringdc.gov.uk/content/beach-safety",
  },
  {
    id: "caution-pier-sides",
    title: "Beaches either side of Clacton Pier are unsupervised",
    severity: "caution",
    where: "Clacton, either side of the pier",
    advice:
      "Tendring DC advises using supervised beaches (Martello Bay, Palace Breakwater, East Fishtail) rather than unsupervised pier-side areas.",
    sourceUrl: "https://www.tendringdc.gov.uk/content/beach-safety",
  },
  {
    id: "caution-tides",
    title: "Check tides — cut-off risk on the foreshore",
    severity: "caution",
    where: "Coastal walks, Colne Point, Naze beach",
    advice:
      "Always check the tide before shore walks or entering the water. Essex Wildlife Trust also warns of flooding and tide-limited access.",
    sourceUrl: "https://www.tendringdc.gov.uk/content/beach-safety",
  },
  {
    id: "caution-naze-cliffs",
    title: "Naze cliffs are actively eroding",
    severity: "caution",
    where: "Walton Naze cliffs (day trip)",
    advice:
      "Erosion is about 1–2 m per year. Use the Crag Walk platform; do not dig the cliffs. Steps to the beach are tide- and mobility-limited.",
    sourceUrl: "https://www.essexwt.org.uk/nature-reserves/naze",
  },
  {
    id: "caution-parking-fees",
    title: "Car-park charges may have changed for 2025/26",
    severity: "info",
    where: "All Tendring DC pay car parks",
    advice:
      "Revised fees were approved for 2025/26. Verify Mi Permit or on-site tariffs before you rely on a listed price.",
    sourceUrl:
      "https://tdcdemocracy.tendringdc.gov.uk/mgIssueHistoryHome.aspx?IId=34811&Opt=0",
  },
  {
    id: "caution-priory-tours",
    title: "St Osyth Priory is tour-access only",
    severity: "info",
    where: "St Osyth Priory estate",
    advice:
      "Pre-booked heritage, trailer and nature tours in season — it is not a free open park.",
    sourceUrl: "https://www.stosythprioryandparishtrust.org/visit/",
  },
  {
    id: "caution-inflatables",
    title: "No inflatables in strong wind",
    severity: "caution",
    where: "Tendring beaches",
    advice:
      "An orange windsock means dangerous wind; never take inflatables on the sea. An offshore breeze can sweep them out quickly.",
    sourceUrl: "https://www.tendringdc.gov.uk/content/beach-safety",
  },
];

export interface NearbyStop {
  id: string;
  name: string;
  detail: string;
  attractionId?: string;
  officialUrl?: string;
}

export const nearBarnfields: NearbyStop[] = [
  {
    id: "near-st-james-walks",
    name: "St James' Church & village walks",
    detail:
      "Little Clacton's parish church and a quieter village circular described on the Essex Sunshine Coast pages.",
    attractionId: "little-clacton",
    officialUrl: "https://essex-sunshine-coast.org.uk/places/little-clacton/",
  },
  {
    id: "near-great-holland-pits",
    name: "Great Holland Pits",
    detail:
      "Essex Wildlife Trust reserve on Little Clacton Road — ponds, woodland and a small car park (not Mill Lane).",
    attractionId: "great-holland-pits",
    officialUrl: "https://www.essexwt.org.uk/nature-reserves/great-holland-pits",
  },
  {
    id: "near-weeleyhall-wood",
    name: "Weeleyhall Wood",
    detail:
      "Ancient woodland SSSI. Park at Weeley Church (CO16 9AT). Dogs banned 1 March–1 July.",
    attractionId: "weeleyhall-wood",
    officialUrl: "https://www.essexwt.org.uk/nature-reserves/weeleyhall-wood",
  },
  {
    id: "near-shopping-village",
    name: "Clacton Shopping Village",
    detail: "Covered brands on Stephenson Road West (CO15 4TL), off the A133.",
    attractionId: "factory-outlet",
    officialUrl: "https://clactonshoppingvillage.com/",
  },
  {
    id: "near-clacton-pier",
    name: "Clacton Pier",
    detail:
      "The main seaside day out from the Weeley Heath–Little Clacton corridor. Confirm live travel times before you set out.",
    attractionId: "clacton-pier",
    officialUrl: "https://www.clactonpier.co.uk/",
  },
];

export interface ExternalLink {
  title: string;
  url: string;
  why: string;
}

export const externalLinks: ExternalLink[] = [
  {
    title: "Discover Clacton",
    url: "https://discoverclacton.co.uk/plan-your-visit/",
    why: "Local visitor planning hub for pier, beaches, theatres and gardens.",
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
    why: "Official car-park list with Mi Permit codes.",
  },
  {
    title: "Tendring DC – Beach Safety",
    url: "https://www.tendringdc.gov.uk/content/beach-safety",
    why: "Flags, lifeguarded beaches and swimming cautions.",
  },
  {
    title: "Tendring DC – Dogs on beaches",
    url: "https://www.tendringdc.gov.uk/content/bye-laws-and-animals-on-beaches",
    why: "Seasonal dog-ban zones and maps.",
  },
  {
    title: "Clacton Pier",
    url: "https://www.clactonpier.co.uk/",
    why: "Rides, tickets, events and hours.",
  },
  {
    title: "Clacton Airshow",
    url: "https://clactonairshow.com/",
    why: "Official airshow dates, travel and parking.",
  },
  {
    title: "Clacton Carnival",
    url: "http://www.clactoncarnival.org/",
    why: "Carnival week and street-procession details.",
  },
  {
    title: "Essex Wildlife Trust – Howlands Marsh",
    url: "https://www.essexwt.org.uk/nature-reserves/howlands-marsh",
    why: "Access rules and wildlife information.",
  },
  {
    title: "Essex Wildlife Trust – Colne Point",
    url: "https://www.essexwt.org.uk/nature-reserves/colne-point",
    why: "Restricted access and nesting cautions — not a casual hotspot.",
  },
  {
    title: "Essex Wildlife Trust – Great Holland Pits",
    url: "https://www.essexwt.org.uk/nature-reserves/great-holland-pits",
    why: "Near the Little Clacton / Weeley Heath corridor.",
  },
  {
    title: "Essex Wildlife Trust – Weeleyhall Wood",
    url: "https://www.essexwt.org.uk/nature-reserves/weeleyhall-wood",
    why: "Ancient woodland near Weeley, with seasonal dog rules.",
  },
  {
    title: "Essex Wildlife Trust – The Naze",
    url: "https://www.essexwt.org.uk/nature-reserves/naze",
    why: "Day-trip nature centre, fossils and cliff safety.",
  },
  {
    title: "Explore Essex – Jaywick Martello Tower",
    url: "https://www.explore-essex.com/places-to-go/find-whats-near-me/jaywick-martello-tower",
    why: "Opening times, entry and exhibitions.",
  },
  {
    title: "St Osyth Priory & Parish Trust – Visit",
    url: "https://www.stosythprioryandparishtrust.org/visit/",
    why: "Book guided tours of the Priory.",
  },
  {
    title: "Clacton Shopping Village",
    url: "https://clactonshoppingvillage.com/",
    why: "Outlet-style shopping and facilities.",
  },
  {
    title: "Greater Anglia – Clacton-on-Sea station",
    url: "https://www.greateranglia.co.uk/travel-information/station-information/clt",
    why: "Rail access and station facilities.",
  },
  {
    title: "National Rail – Clacton-on-Sea",
    url: "https://www.nationalrail.co.uk/stations/clacton-on-sea/",
    why: "Live times and station overview.",
  },
  {
    title: "Naze Tower",
    url: "https://www.nazetower.co.uk/",
    why: "Walton day-trip landmark hours and tickets.",
  },
  {
    title: "Tendring nature & countryside (legacy)",
    url: "https://legacy.tendringdc.gov.uk/leisure/countryside-parks-gardens/nature-and-countryside",
    why: "Holland Haven Country Park description on Tendring DC's legacy site.",
  },
];

export interface YoutubeVideo {
  title: string;
  channel: string;
  url: string;
  topic: string;
}

export const youtubeVideos: YoutubeVideo[] = [
  {
    title: "Clacton-on-Sea Essex UK | Town Walk 2025",
    channel: "Let's Explore UK",
    url: "https://www.youtube.com/watch?v=Pnsm_naDwBw",
    topic: "Town and pier walk (2025). Use for visuals, not commentary.",
  },
  {
    title: "Walking on Clacton Pier (Air Show day 2019)",
    channel: "EastAngliaUK",
    url: "https://www.youtube.com/watch?v=tZB2drnUxfo",
    topic: "Pier walk during the Airshow.",
  },
  {
    title: "Walking on Clacton Pier (Feb 2020 works)",
    channel: "EastAngliaUK",
    url: "https://www.youtube.com/watch?v=UH1QzWm65KE",
    topic: "Pier walk / winter works context.",
  },
  {
    title: "Holland-on-Sea to Frinton-on-Sea group walk",
    channel: "Coffee morning group walk",
    url: "https://www.youtube.com/watch?v=OREE7J26dK4",
    topic: "Amateur coastal-walk footage from Holland towards Frinton.",
  },
];

export const dayTripNotes = [
  {
    id: "daytrip-walton-naze",
    note: "Walton-on-the-Naze: Naze Tower, the Essex Wildlife Trust Discovery Centre and the fossil beach — the strongest short Tendring day trip from Clacton.",
    sourceUrl: "https://www.nazetower.co.uk/",
  },
];
