export interface TrekPackage {
  id: string;
  name: string;
  duration: string;
  altitude: string;
  difficulty: string;
  idealFor: string;
  summary: string;
  pricing: { label: string; price: string }[];
  itinerary: string[];
  includes: string[];
  excludes: string[];
}

export const trekPackages: TrekPackage[] = [
  {
    id: "langtang-valley",
    name: "Langtang Valley Trek",
    duration: "8 Days",
    altitude: "Up to 5,033m",
    difficulty: "Easy/Moderate",
    idealFor: "First-time trekkers",
    summary:
      "A shorter and comfortable introduction to Himalayan trekking with gradual altitude gain.",
    pricing: [
      { label: "2-4 Pax", price: "$900 / person" },
      { label: "4-7 Pax", price: "$850 / person" },
      { label: "7-10 Pax", price: "$825 / person" },
    ],
    itinerary: [
      "Day 1: Kathmandu to Syabrubesi (1,550m) - 7-8 hour drive by private or shared jeep.",
      "Day 2: Syabrubesi to Lama Hotel (2,470m) - Trek through lush river forests.",
      "Day 3: Lama Hotel to Langtang Village (3,430m) - Langtang Lirung views begin to open.",
      "Day 4: Langtang Village to Kyanjin Gompa (3,870m) - Reach the glacial bowl and visit yak cheese factory.",
      "Day 5: Kyanjin Gompa exploration (up to 5,033m) - Hike to Tserko Ri or Kyanjin Ri (4,773m).",
      "Day 6: Kyanjin Gompa to Lama Hotel (2,470m) - Retrace route with mostly downhill trekking.",
      "Day 7: Lama Hotel to Syabrubesi (1,550m) - Final full day of walking.",
      "Day 8: Syabrubesi to Kathmandu (1,400m) - Drive back to the city.",
    ],
    includes: [
      "Airport pickup and drop",
      "Licensed trekking guide",
      "Tea house accommodation during trek",
      "Daily breakfast on trekking days",
      "Basic first aid support",
    ],
    excludes: [
      "International flights",
      "Travel insurance",
      "Lunch and dinner in Kathmandu",
      "Personal gear and tips",
    ],
  },
  {
    id: "annapurna-circuit",
    name: "Annapurna Base Camp Trek",
    duration: "14 Days",
    altitude: "Up to 4,130m",
    difficulty: "Moderate",
    idealFor: "Intermediate trekkers",
    summary:
      "A complete Annapurna sanctuary journey with Poon Hill sunrise, Gurung villages, forest trails, and a full ascent to Annapurna Base Camp.",
    pricing: [
      { label: "1 Pax", price: "$1,400" },
      { label: "2-4 Pax", price: "$1,350 / person" },
      { label: "4+ Pax", price: "$1,200 / person" },
    ],
    itinerary: [
      "Day 1: Arrival in Kathmandu - Airport pick-up and hotel check-in.",
      "Day 2: Kathmandu sightseeing - Trek briefing and permit preparation.",
      "Day 3: Kathmandu to Pokhara - 6-7 hour tourist bus or 25-minute flight.",
      "Day 4: Pokhara to Tikhedhunga - 1.5 hour drive and around 4 hour trek (staircase day).",
      "Day 5: Tikhedhunga to Ghorepani - Steep climb through rhododendron forests.",
      "Day 6: Poon Hill sunrise to Tadapani - Morning viewpoint at 3,210m then trek onward.",
      "Day 7: Tadapani to Chhomrong - Descend to river and climb to the Gurung village.",
      "Day 8: Chhomrong to Dovan - Enter the deep sanctuary valley.",
      "Day 9: Dovan to Deurali - Pass Hinku Cave as high-altitude vegetation begins.",
      "Day 10: Deurali to Annapurna Base Camp - Reach ABC (4,130m) via Machhapuchhre Base Camp.",
      "Day 11: ABC to Bamboo - Long descent back down the valley.",
      "Day 12: Bamboo to Jhinu - Relax in natural riverside hot springs.",
      "Day 13: Jhinu to Pokhara - Walk to road-head and take around 3-hour jeep drive.",
      "Day 14: Pokhara to Kathmandu - Return to the capital by bus or flight.",
    ],
    includes: [
      "All required trekking permits",
      "Guide + porter support",
      "Tea house accommodation",
      "Breakfast, lunch, and dinner during trek",
      "Ground transportation as per itinerary",
    ],
    excludes: [
      "Visa fees",
      "Personal travel insurance",
      "Personal expenses and hot showers",
      "Emergency evacuation costs",
    ],
  },
  {
    id: "everest-base-camp",
    name: "Everest Base Camp Trek",
    duration: "16+ Days",
    altitude: "Up to 5,500m+",
    difficulty: "Mod/Challenging",
    idealFor: "Experienced trekkers",
    summary:
      "High-altitude expedition-style itinerary with stronger logistics and support for advanced routes.",
    pricing: [
      { label: "1 Pax", price: "$2,240" },
      { label: "2-4 Pax", price: "$1,990 / person" },
      { label: "5+ Pax", price: "$1,890 / person" },
    ],
    itinerary: [
      "Day 1: Arrive in Kathmandu, expedition briefing, and detailed gear inspection.",
      "Day 2: Fly to Lukla and trek to Phakding on a short introductory trail day.",
      "Day 3: Trek from Phakding to Namche Bazaar through suspension bridges and pine forest.",
      "Day 4: Acclimatization day at Namche with a hike to higher viewpoints and return.",
      "Day 5: Trek to Tengboche with panoramic views of Ama Dablam and nearby ridgelines.",
      "Day 6: Continue to Dingboche through alpine terrain and increasingly dry high-valley climate.",
      "Day 7: Acclimatization day in Dingboche with controlled elevation gain on side trails.",
      "Day 8: Trek to Lobuche following memorial ridge and glacial moraine paths.",
      "Day 9: Trek to Gorak Shep and continue to Everest Base Camp before returning to lodge.",
      "Day 10: Early hike to Kala Patthar for sunrise panorama, then descend to Pheriche.",
      "Day 11: Trek to Namche Bazaar on a long descent with meal and hydration breaks.",
      "Day 12: Trek to Lukla and complete final evening with support crew.",
      "Day 13: Fly back to Kathmandu and transfer to hotel for recovery.",
      "Day 14: Contingency day in case of flight weather delays in Lukla sector.",
      "Day 15: Optional sightseeing or rest day in Kathmandu with equipment return.",
      "Day 16: Departure transfer to international airport.",
    ],
    includes: [
      "Senior mountain guide + full support crew",
      "Permits and logistics management",
      "All meals during trek",
      "Accommodation as per route plan",
      "Emergency oxygen and first response kit",
    ],
    excludes: [
      "International airfare and visa",
      "Comprehensive evacuation insurance",
      "Personal mountaineering equipment rental",
      "Tips for crew and guide team",
    ],
  },
  {
    id: "poon-hill",
    name: "Poon Hill Trek",
    duration: "8 Days",
    altitude: "Up to 3,210m",
    difficulty: "Easy/Moderate",
    idealFor: "Beginners + short trek seekers",
    summary:
      "A short Annapurna trek featuring Poon Hill sunrise, rhododendron forests, and authentic Gurung village culture.",
    pricing: [
      { label: "1 Pax", price: "$799" },
      { label: "2-4 Pax", price: "$750 / person" },
      { label: "4+ Pax", price: "$700 / person" },
    ],
    itinerary: [
      "Day 1: Arrive in Kathmandu - Airport pickup and hotel check-in.",
      "Day 2: Kathmandu sightseeing - Trek briefing and permit preparation.",
      "Day 3: Kathmandu to Pokhara - Drive or short flight transfer.",
      "Day 4: Pokhara to Ulleri - 2.5 hour drive to Hile and around 3 hour trek with stone staircase ascent.",
      "Day 5: Ulleri to Ghorepani - Trek through dense rhododendron forest trails.",
      "Day 6: Poon Hill sunrise to Tadapani - Early viewpoint hike at 3,210m, then continue trek.",
      "Day 7: Tadapani to Ghandruk - Descend to the Gurung village and local museum area.",
      "Day 8: Ghandruk to Pokhara to Kathmandu - Walk to Nayapul, drive to Pokhara, then transfer to Kathmandu.",
    ],
    includes: [
      "Airport pickup and drop",
      "ACAP + TIMS permits",
      "Guide support during trek",
      "Tea house accommodation on route",
      "Ground transportation as per itinerary",
    ],
    excludes: [
      "International flights and visa",
      "Travel insurance",
      "Personal expenses and beverages",
      "Tips and personal trekking gear",
    ],
  },
  {
    id: "upper-mustang",
    name: "Upper Mustang Trek",
    duration: "12 Days",
    altitude: "Up to 4,200m",
    difficulty: "Moderate",
    idealFor: "Culture + landscape trekkers",
    summary:
      "A 12-day Upper Mustang journey with Lo Manthang, red cliffs, monasteries, and restricted-area logistics professionally managed.",
    pricing: [
      { label: "2-4 Pax", price: "$2,299 / person" },
      { label: "4-7 Pax", price: "$2,250 / person" },
      { label: "7-10 Pax", price: "$2,150 / person" },
    ],
    itinerary: [
      "Day 1: Kathmandu - Arrival and permit processing.",
      "Day 2: Kathmandu to Pokhara - Drive or flight to the lake city.",
      "Day 3: Pokhara to Jomsom to Kagbeni - 20-minute flight and around 3-hour trek; entry to Upper Mustang.",
      "Day 4: Kagbeni to Chele - Enter the restricted zone where RAP daily permit counting starts.",
      "Day 5: Chele to Syangboche - Cross high passes with wide Himalayan views.",
      "Day 6: Syangboche to Lo Manthang - Arrive at the historic walled capital.",
      "Day 7: Explore Lo Manthang - Visit Chhoser caves and key monasteries.",
      "Day 8: Lo Manthang to Dhakmar - Scenic descent with the iconic red cliffs.",
      "Day 9: Dhakmar to Ghiling - Walk through ancient monasteries and local culture routes.",
      "Day 10: Ghiling to Muktinath - Exit restricted zone and continue by trek/drive to the temple area.",
      "Day 11: Muktinath to Jomsom - Morning temple darshan and bath, then return to Jomsom.",
      "Day 12: Jomsom to Pokhara to Kathmandu - Fly back and connect for onward departure.",
    ],
    includes: [
      "Upper Mustang restricted permits",
      "ACAP permit and logistics",
      "Guide + porter support",
      "Accommodation and meals during trek",
      "Domestic route transport as per itinerary",
    ],
    excludes: [
      "International flights and visa",
      "Travel insurance and evacuation cover",
      "Personal expenses and beverages",
      "Tips and personal trekking gear",
    ],
  },
];

export const trekPackagesById = Object.fromEntries(
  trekPackages.map((pkg) => [pkg.id, pkg]),
) as Record<string, TrekPackage>;
