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
  day: string;
  title: string;
  desc: string;
  image: string;
}

export interface PackageData {
  locationId: string;
  totalBaseCost: string;
  itinerary: ItineraryItem[];
  fixedCosts: { label: string; cost: string }[];
  dailyCosts: { label: string; cost: string }[];
  transportCosts: { label: string; cost: string }[];
}

export const packages: PackageData[] = [
  {
    locationId: "upper-mustang",
    totalBaseCost: "$960",
    itinerary: [
      { day: "01", title: "KTM – Pokhara", desc: "Scenic flight from the capital to the lakeside city of Pokhara.", image: ktmPokhara },
      { day: "02", title: "Pokhara – Kagbeni", desc: "Mountain flight to Jomsom followed by a trek to the gateway of Upper Mustang.", image: kagbeni },
      { day: "03", title: "Chele", desc: "Crossing the Kali Gandaki bridge and climbing through steep canyons to Chele.", image: chele },
      { day: "04", title: "Geling", desc: "Trek through the passes of Taklam La and Dajori La with views of Tilicho Peak.", image: geling },
      { day: "05", title: "Ghami", desc: "Descending into Ghami, surrounded by the region's most iconic red cliffs.", image: ghami },
      { day: "06", title: "Charang", desc: "Exploring the massive white dzong and the red gompa of the former capital.", image: tsarang },
      { day: "07", title: "Lo-Manthang", desc: "Entry into the legendary walled capital of the Forbidden Kingdom.", image: lomanthang },
      { day: "08", title: "Acclimatization", desc: "Exploring the 2,500-year-old sky caves and local monasteries.", image: lomanthang },
      { day: "09", title: "Chuksang", desc: "Beginning the return journey through unique wind-sculpted rock formations.", image: chuksang },
      { day: "10", title: "Jomsom", desc: "Final trekking day returning to the bustling hub of the Lower Mustang region.", image: jomsom },
      { day: "11", title: "Return to Pokhara", desc: "Early morning departure from the mountains back to the warmth of Pokhara.", image: ktmPokhara },
    ],
    fixedCosts: [
      { label: "Restricted Area Permit (RAP)", cost: "$500" },
      { label: "TIMS & ACAP Permits", cost: "$45" }
    ],
    dailyCosts: [
      { label: "Guide & Porter Service", cost: "$60/day" },
      { label: "Food & Lodging", cost: "$35/day" }
    ],
    transportCosts: [
      { label: "Domestic Flights (Return)", cost: "$350" }
    ]
  }
];