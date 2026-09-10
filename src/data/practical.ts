export interface PracticalItem {
  id: string;
  title: string;
  body: string;
  icon: "train" | "car" | "bus" | "sun" | "info" | "map" | "phone" | "shield";
}

export const practicalTips: PracticalItem[] = [
  {
    id: "get-here",
    title: "Getting here",
    body: "Greater Anglia runs direct trains from London Liverpool Street to Clacton-on-Sea in about 1 hour 26–32 minutes, typically hourly via Colchester and Thorpe-le-Soken. By car: A12 then A120/A133. Nearest airport: Stansted (~1 hour).",
    icon: "train",
  },
  {
    id: "getting-around",
    title: "Getting around",
    body: "The central seafront, pier and West Cliff Theatre are walkable. The promenade is almost level east to Holland-on-Sea. Local buses cover Jaywick, St Osyth, Little Clacton and Clacton Shopping Village. Taxis wait by the station.",
    icon: "bus",
  },
  {
    id: "beaches",
    title: "Beaches",
    body: "Central Clacton is the sandy family beach under the pier. Holland-on-Sea is quieter with beach huts. Jaywick Sands is sandy and local in feel. Point Clear / St Osyth is estuary shore — check tides. Swim where lifeguards are posted in season.",
    icon: "map",
  },
  {
    id: "weather",
    title: "Weather & seasons",
    body: "Tendring markets itself as the Essex Sunshine Coast, and Clacton can be genuinely bright. Summer is peak for the pier, Carnival and Airshow. Spring and autumn are kinder for Jaywick and Colne Point walks. Winter is quiet, with grotto dates and theatre.",
    icon: "sun",
  },
  {
    id: "parking",
    title: "Parking",
    body: "Seafront and town-centre car parks fill early on Airshow (27–28 Aug 2026) and Carnival procession day. Clacton Shopping Village has its own parking on Stephenson Road West. Station drop-off is short-stay — do not leave a car there for the beach.",
    icon: "car",
  },
  {
    id: "safety",
    title: "Sea & event safety",
    body: "The North Sea is colder than it looks. Observe flags and tide times, especially at Point Clear. Airshow and Carnival close roads and pack the greensward — arrive by train if you can. Colne Point is a sensitive reserve: stay on signed paths.",
    icon: "shield",
  },
  {
    id: "visitor-info",
    title: "Visitor information",
    body: "Tendring District Council and visit Essex list accommodation and event notices. Airshow: clactonairshow.com. Pier programme: clactonpier.co.uk. Carnival: clactoncarnival.org. Confirm dates before you travel — listings here are for planning.",
    icon: "info",
  },
];

export const quickFacts = [
  { label: "County", value: "Essex · Tendring" },
  { label: "Known for", value: "Pier, Airshow & Carnival" },
  { label: "From London", value: "Liverpool St ~1h 30m" },
  { label: "Neighbours", value: "Holland, Jaywick, St Osyth" },
  { label: "Signature event", value: "Clacton Airshow" },
  { label: "Coast", value: "Essex Sunshine Coast" },
];
