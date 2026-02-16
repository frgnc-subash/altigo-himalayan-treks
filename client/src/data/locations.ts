import bg1 from "../assets/backgrounds/bg1.jpeg";

export interface Location {
  id: string;
  name: string;
  lat: number;
  lng: number;
  image: string;
  desc: string;
  altitude: string;
  difficulty: string;
  season: string;
}

export const locations: Location[] = [
  {
    id: "upper-mustang",
    name: "Upper Mustang",
    lat: 29.1833,
    lng: 83.95,
    image: bg1,
    desc: "A trans-Himalayan salt-trade route offering a look into a forbidden kingdom of ancient monasteries, sky caves, and stark desert beauty preserved for centuries.",
    altitude: "3,840m",
    difficulty: "Moderate",
    season: "March - November",
  },
  // {
  //   id: "annapurna-circuit",
  //   name: "Annapurna Circuit",
  //   lat: 29.1833,
  //   lng: 83.95,
  //   image: bg1,
  //   desc: "A trans-Himalayan salt-trade route offering a look into a forbidden kingdom of ancient monasteries, sky caves, and stark desert beauty preserved for centuries.",
  //   altitude: "3,840m",
  //   difficulty: "Moderate",
  //   season: "March - November",
  // },
];
