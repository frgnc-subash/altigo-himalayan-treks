export interface DestinationSummary {
  id: string;
  name: string;
  desc: string;
  image: string;
  coordinates: [number, number]; 
  difficulty: "Easy" | "Moderate" | "Challenging" | "Extreme";
  days: string;
  altitude: string;
  season: string;
  region: string;
  price: number;
}

export const destinationsData: DestinationSummary[] = [
  {
    id: "upper-mustang",
    name: "Upper Mustang",
    desc: "Journey to the Last Forbidden Kingdom. Explore ancient caves, vivid rock formations, and the walled city of Lo Manthang.",
    image:
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=2071&auto=format&fit=crop",
    coordinates: [29.1824, 83.9575],
    difficulty: "Moderate",
    days: "14-15 Days",
    altitude: "3,840m",
    season: "Mar-Nov",
    region: "Mustang",
    price: 1990,
  },
  // {
  //   id: "annapurna-circuit",
  //   name: "Annapurna Circuit",
  //   desc: "The world's classic trek circling the Annapurna Massif, crossing the dramatic Thorong La Pass into the arid landscapes of Lower Mustang.",
  //   image:
  //     "https://images.unsplash.com/photo-1585938389612-a552a28d6914?q=80&w=2060&auto=format&fit=crop",
  //   coordinates: [28.79, 83.93],
  //   difficulty: "Challenging",
  //   days: "16-18 Days",
  //   altitude: "5,416m",
  //   season: "Oct-Nov",
  //   region: "Annapurna",
  //   price: 1450,
  // },
];
