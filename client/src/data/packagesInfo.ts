
// 1. IMPORT THE IMAGES
import ktmPokhara from "../assets/gallery/mustang/ktm-pokhara.jpg";
import kagbeni from "../assets/gallery/mustang/kagbeni.jpg";
import chele from "../assets/gallery/mustang/chele.png";
import geling from "../assets/gallery/mustang/geling.jpg";
import ghami from "../assets/gallery/mustang/ghami.jpg";
import tsarang from "../assets/gallery/mustang/tsarang.jpg";
import lomanthang from "../assets/gallery/mustang/lomanthang.jpg";
import chuksang from "../assets/gallery/mustang/chuksang.jpg";
import jomsom from "../assets/gallery/mustang/jomsom.jpg";

export interface ItineraryItem {
  day: number; // Changed to number for easier math
  title: string;
  desc: string;
  image: string; // This will hold the imported path
}

export interface PackageData {
  locationId: string;
  totalBaseCost: string;
  itinerary: ItineraryItem[];
  fixedCosts?: { label: string; cost: string }[];
  dailyCosts?: { label: string; cost: string }[];
}

export const packages: PackageData[] = [
  {
    locationId: "upper-mustang",
    totalBaseCost: "$1,999",
    itinerary: [
      {
        day: 1,
        title: "KTM – Pokhara",
        desc: "Scenic flight from the capital to the lakeside city of Pokhara.",
        image: ktmPokhara, // <--- 2. USE THE VARIABLE HERE
      },
      {
        day: 2,
        title: "Pokhara – Kagbeni",
        desc: "Mountain flight to Jomsom followed by a trek to the gateway of Upper Mustang.",
        image: kagbeni,
      },
      {
        day: 3,
        title: "Chele",
        desc: "Crossing the Kali Gandaki bridge and climbing through steep canyons to Chele.",
        image: chele,
      },
      {
        day: 4,
        title: "Geling",
        desc: "Trek through the passes of Taklam La and Dajori La with views of Tilicho Peak.",
        image: geling,
      },
      {
        day: 5,
        title: "Ghami",
        desc: "Descending into Ghami, surrounded by the region's most iconic red cliffs.",
        image: ghami,
      },
      {
        day: 6,
        title: "Charang",
        desc: "Exploring the massive white dzong and the red gompa of the former capital.",
        image: tsarang,
      },
      {
        day: 7,
        title: "Lo-Manthang",
        desc: "Entry into the legendary walled capital of the Forbidden Kingdom.",
        image: lomanthang,
      },
      {
        day: 8,
        title: "Acclimatization",
        desc: "Exploring the 2,500-year-old sky caves and local monasteries.",
        image: lomanthang,
      },
      {
        day: 9,
        title: "Chuksang",
        desc: "Beginning the return journey through unique wind-sculpted rock formations.",
        image: chuksang,
      },
      {
        day: 10,
        title: "Jomsom",
        desc: "Final trekking day returning to the bustling hub of the Lower Mustang region.",
        image: jomsom,
      },
      {
        day: 11,
        title: "Return to Pokhara",
        desc: "Early morning departure from the mountains back to the warmth of Pokhara.",
        image: ktmPokhara,
      },
    ],
    dailyCosts: [
      { label: "Meals", cost: "$25 - $35" },
      { label: "Hot Showers", cost: "$5 - $10" },
      { label: "Wi-Fi", cost: "$5" },
    ],
  },
];