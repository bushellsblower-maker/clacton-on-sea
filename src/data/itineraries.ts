export interface ItineraryStop {
  time: string;
  title: string;
  detail: string;
  attractionId?: string;
}

export interface Itinerary {
  id: string;
  title: string;
  days: number;
  vibe: string;
  summary: string;
  bestFor: string[];
  stops: ItineraryStop[];
}

export const itineraries: Itinerary[] = [
  {
    id: "iconic-day",
    title: "Classic Clacton in One Day",
    days: 1,
    vibe: "Highlights",
    summary:
      "Pier, gardens, a quieter Holland-on-Sea stretch and an evening show — the first-visit loop that still leaves room for chips.",
    bestFor: ["First-timers", "Couples", "Families"],
    stops: [
      {
        time: "09:30",
        title: "Seafront gardens & central sands",
        detail: "Coffee on Marine Parade, then a walk through the planted gardens before the beach fills.",
        attractionId: "clacton-seafront",
      },
      {
        time: "11:00",
        title: "Clacton Pier",
        detail: "Rides if you want them, or just walk the boards to the seaward end for the North Sea view.",
        attractionId: "clacton-pier",
      },
      {
        time: "13:30",
        title: "Fish & chips, then east along the prom",
        detail: "Level walk towards Holland-on-Sea. The beach huts start as the crowds thin.",
        attractionId: "holland-on-sea",
      },
      {
        time: "16:00",
        title: "Holland-on-Sea sands",
        detail: "Hut-backed beach and greensward. Turn back whenever the legs say so.",
        attractionId: "holland-on-sea",
      },
      {
        time: "19:30",
        title: "West Cliff Theatre",
        detail: "Comedy, tribute or variety — check the bill. Princes Theatre is the larger alternative in town.",
        attractionId: "westcliff-theatre",
      },
    ],
  },
  {
    id: "family-weekend",
    title: "Family Weekend on the Sunshine Coast",
    days: 2,
    vibe: "Family",
    summary:
      "Rides, sand, a rainy-day shopping village and enough ice cream to justify the train from Liverpool Street.",
    bestFor: ["Families", "School holidays"],
    stops: [
      {
        time: "Day 1 · AM",
        title: "Central beach & gardens",
        detail: "Sandcastles on the main beach; greensward picnic if the tide is in.",
        attractionId: "clacton-seafront",
      },
      {
        time: "Day 1 · PM",
        title: "Pier rides and arcade",
        detail: "Wristbands are cheaper booked ahead. Look for seasonal shows in the school holidays.",
        attractionId: "clacton-pier",
      },
      {
        time: "Day 1 · Eve",
        title: "Promenade wander",
        detail: "Lights on the pier and a slow walk back to the hotels.",
        attractionId: "clacton-pier",
      },
      {
        time: "Day 2 · AM",
        title: "Holland-on-Sea beach huts",
        detail: "Quieter sand and a hut-lined cliff. Less intense than the pier for younger children.",
        attractionId: "holland-on-sea",
      },
      {
        time: "Day 2 · PM",
        title: "Clacton Shopping Village",
        detail: "Covered brands on Stephenson Road West if the weather turns — still called the Factory Outlet by plenty of locals.",
        attractionId: "factory-outlet",
      },
    ],
  },
  {
    id: "coast-west",
    title: "West along the Tendring shore",
    days: 1,
    vibe: "Adventure",
    summary:
      "Leave the rides behind: Jaywick sands, a Martello tower, St Osyth Priory and the wild shingle of Colne Point.",
    bestFor: ["Walkers", "Photographers", "History fans"],
    stops: [
      {
        time: "09:00",
        title: "Jaywick Sands",
        detail: "Sea-wall walk from Clacton or a short bus. Sandy beach and timber breakwaters.",
        attractionId: "jaywick-sands",
      },
      {
        time: "10:30",
        title: "Martello Tower C",
        detail: "Napoleonic gun tower on the wall. Exterior is the usual visit.",
        attractionId: "jaywick-martello",
      },
      {
        time: "12:30",
        title: "St Osyth Priory & village",
        detail: "Lunch in the village, then the Augustinian gatehouse and ranges.",
        attractionId: "st-osyth-priory",
      },
      {
        time: "15:00",
        title: "Point Clear Beach",
        detail: "Estuary sand and sailing-club masts — a different sea from the pier.",
        attractionId: "st-osyth-beach",
      },
      {
        time: "16:30",
        title: "Colne Point (if access is open)",
        detail: "Shingle SSSI and birds. Stay on signed paths; check Essex Wildlife Trust in nesting season.",
        attractionId: "colne-point",
      },
    ],
  },
  {
    id: "inland-reset",
    title: "Village, meadow & a treat",
    days: 1,
    vibe: "Local",
    summary:
      "When you want Clacton without the arcade noise: Little Clacton church, Pickers Ditch, and a covered shop if the sky goes grey.",
    bestFor: ["Repeat visitors", "Quieter days", "Rainy days"],
    stops: [
      {
        time: "10:00",
        title: "Little Clacton & St James's",
        detail: "A short inland hop to the flint parish church and village street.",
        attractionId: "little-clacton",
      },
      {
        time: "12:00",
        title: "Clacton Shopping Village",
        detail: "Covered browsing on Stephenson Road West.",
        attractionId: "factory-outlet",
      },
      {
        time: "14:30",
        title: "Pickers Ditch Meadow",
        detail: "A local green walk to stretch the legs after the shops.",
        attractionId: "pickers-ditch",
      },
      {
        time: "16:30",
        title: "Back to the seafront gardens",
        detail: "Finish with the planted promenade and a look at the pier lights coming on.",
        attractionId: "clacton-seafront",
      },
      {
        time: "19:30",
        title: "West Cliff or Princes Theatre",
        detail: "An evening bill if anything good is on — otherwise chips on the front.",
        attractionId: "westcliff-theatre",
      },
    ],
  },
];
