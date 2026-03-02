export interface TrailPoint {
  name: string;
  pos: [number, number];
}

export interface Destination {
  id: string;
  name: string;
  image: string;
  region: string;
  duration: string;
  elevation: string;
  lat: number;
  lng: number;
  desc: string;
  difficulty: string;
  bestSeason: string;
  permits: string;
  mapCenter: [number, number];
  mapZoom: number;
  trailCoordinates: TrailPoint[];
}

export const destinations: Destination[] = [
  {
    id: "everest-base-camp",
    name: "Everest Base Camp",
    image: "/ebc/5.jpg",
    region: "Khumbu, Nepal",
    duration: "14 Days",
    elevation: "5,364m",
    lat: 28.0043,
    lng: 86.8571,
    desc: "The classic Himalayan journey with Sherpa culture, glacier valleys, and iconic Everest views.",
    difficulty: "Moderate to Challenging",
    bestSeason: "Mar-May, Oct-Nov",
    permits: "SAG + Khumbu Pasang Lhamu Permit",
    mapCenter: [27.95, 86.79],
    mapZoom: 9,
    trailCoordinates: [
      { name: "Lukla", pos: [27.688, 86.731] },
      { name: "Namche", pos: [27.805, 86.714] },
      { name: "Dingboche", pos: [27.892, 86.831] },
      { name: "Gorakshep", pos: [27.98, 86.828] },
      { name: "EBC", pos: [28.0043, 86.8571] },
    ],
  },
  {
    id: "annapurna-circuit",
    name: "Annapurna Circuit",
    image: "/backgrounds/bg3.jpeg",
    region: "Annapurna, Nepal",
    duration: "12-16 Days",
    elevation: "5,416m",
    lat: 28.7963,
    lng: 83.9453,
    desc: "A diverse route crossing forests, villages, and high mountain passes in one complete trek.",
    difficulty: "Moderate",
    bestSeason: "Mar-Apr, Oct-Nov",
    permits: "ACAP + TIMS Card",
    mapCenter: [28.67, 84.03],
    mapZoom: 8,
    trailCoordinates: [
      { name: "Besisahar", pos: [28.235, 84.377] },
      { name: "Chame", pos: [28.556, 84.231] },
      { name: "Manang", pos: [28.669, 84.026] },
      { name: "Thorong La", pos: [28.798, 83.947] },
      { name: "Muktinath", pos: [28.816, 83.872] },
    ],
  },
  {
    id: "langtang-valley",
    name: "Langtang Valley",
    image: "/backgrounds/bg5.jpeg",
    region: "Rasuwa, Nepal",
    duration: "7-10 Days",
    elevation: "4,984m",
    lat: 28.2103,
    lng: 85.5607,
    desc: "A shorter yet scenic trek close to Kathmandu with rich Tamang heritage and alpine landscapes.",
    difficulty: "Moderate",
    bestSeason: "Mar-May, Sep-Nov",
    permits: "Langtang National Park Permit + TIMS",
    mapCenter: [28.2, 85.55],
    mapZoom: 10,
    trailCoordinates: [
      { name: "Syabrubesi", pos: [28.14, 85.35] },
      { name: "Lama Hotel", pos: [28.192, 85.447] },
      { name: "Langtang", pos: [28.211, 85.558] },
      { name: "Kyanjin Gompa", pos: [28.212, 85.573] },
      { name: "Kyanjin Ri", pos: [28.237, 85.618] },
    ],
  },
  {
    id: "poon-hill",
    name: "Poon Hill Trek",
    image: "/gallery/image7.jpeg",
    region: "Annapurna, Nepal",
    duration: "8 Days",
    elevation: "3,210m",
    lat: 28.4,
    lng: 83.69,
    desc: "A short and scenic Himalayan trek with sunrise from Poon Hill, rhododendron forests, and classic Gurung villages.",
    difficulty: "Easy to Moderate",
    bestSeason: "Mar-May, Oct-Nov",
    permits: "ACAP + TIMS",
    mapCenter: [28.4, 83.7],
    mapZoom: 10,
    trailCoordinates: [
      { name: "Pokhara", pos: [28.2096, 83.9856] },
      { name: "Ulleri", pos: [28.398, 83.685] },
      { name: "Ghorepani", pos: [28.401, 83.692] },
      { name: "Poon Hill", pos: [28.399, 83.686] },
      { name: "Ghandruk", pos: [28.374, 83.806] },
    ],
  },
  {
    id: "upper-mustang",
    name: "Upper Mustang",
    image: "/upper-mustang/lomanthang.jpg",
    region: "Mustang, Nepal",
    duration: "12-14 Days",
    elevation: "4,200m",
    lat: 29.1821,
    lng: 83.9594,
    desc: "A rare trans-Himalayan desert trek through ancient caves, walled villages, and Tibetan-influenced culture.",
    difficulty: "Moderate",
    bestSeason: "Mar-May, Oct-Nov",
    permits: "Restricted Area Permit + ACAP",
    mapCenter: [29.08, 83.95],
    mapZoom: 8,
    trailCoordinates: [
      { name: "Jomsom", pos: [28.782, 83.723] },
      { name: "Kagbeni", pos: [28.842, 83.769] },
      { name: "Chele", pos: [28.973, 83.846] },
      { name: "Ghami", pos: [29.084, 83.943] },
      { name: "Lo Manthang", pos: [29.1821, 83.9594] },
    ],
  },
];

export const destinationsById = Object.fromEntries(
  destinations.map((d) => [d.id, d]),
) as Record<string, Destination>;
