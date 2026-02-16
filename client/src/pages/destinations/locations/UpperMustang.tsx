import type { TripData } from "@/types/types";
import {
  FaCalendarAlt,
  FaBed,
  FaUtensils,
  FaSun,
  FaHiking,
  FaMapMarkerAlt,
} from "react-icons/fa";

// --- Image Imports ---
import ktmPokhara from "@/assets/gallery/mustang/ktm-pokhara.jpg";
import kagbeni from "@/assets/gallery/mustang/kagbeni.jpg";
import chele from "@/assets/gallery/mustang/chele.png";
import geling from "@/assets/gallery/mustang/geling.jpg";
import ghami from "@/assets/gallery/mustang/ghami.jpg";
import tsarang from "@/assets/gallery/mustang/tsarang.jpg";
import lomanthang from "@/assets/gallery/mustang/lomanthang.jpg";
import chuksang from "@/assets/gallery/mustang/chuksang.jpg";
import jomsom from "@/assets/gallery/mustang/jomsom.jpg";

export const UpperMustangData: TripData = {
  id: "upper-mustang",
  name: "Upper Mustang",
  description:
    "A journey to the Last Forbidden Kingdom, exploring ancient caves, monasteries, and the walled city of Lo Manthang in the rain shadow of the Himalayas.",
  price: 1999,
  altitude: "3,840m",
  mapCenter: [28.9, 83.9], // Adjusted slightly to center the whole route
  mapZoom: 9,
  trailCoordinates: [
    { pos: [28.2096, 83.9856], name: "Pokhara", type: "start" },
    { pos: [28.7847, 83.7225], name: "Jomsom", type: "gateway" },
    { pos: [28.8351, 83.7836], name: "Kagbeni", type: "stop" },
    { pos: [28.8894, 83.8242], name: "Chele", type: "stop" },
    { pos: [28.9833, 83.85], name: "Geling", type: "stop" },
    { pos: [29.0417, 83.875], name: "Ghami", type: "stop" },
    { pos: [29.0917, 83.9333], name: "Charang", type: "stop" },
    { pos: [29.1824, 83.9575], name: "Lo-Manthang", type: "destination" },
  ],
  details: [
    { icon: FaCalendarAlt, label: "Duration", value: "11 Days" },
    { icon: FaBed, label: "Accommodation", value: "Luxury Teahouses" },
    { icon: FaUtensils, label: "Meals", value: "Full Board" },
    { icon: FaSun, label: "Best Time", value: "Mar-Nov" },
    { icon: FaHiking, label: "Difficulty", value: "Moderate" },
    { icon: FaMapMarkerAlt, label: "Max Altitude", value: "3,840m" },
  ],
  itinerary: [
    {
      day: 1,
      title: "KTM – Pokhara",
      image: ktmPokhara,
      desc: "A scenic 25-minute flight along the Himalayan range to the lakeside city of Pokhara.",
    },
    {
      day: 2,
      title: "Pokhara – Kagbeni",
      image: kagbeni,
      desc: "Early mountain flight to Jomsom (2,700m) followed by a 3-hour trek to Kagbeni, the gateway to Upper Mustang.",
    },
    {
      day: 3,
      title: "Kagbeni to Chele",
      image: chele,
      desc: "Enter the restricted area. The trail follows the Kali Gandaki river, passing through Tangbe and Chhusang villages.",
    },
    {
      day: 4,
      title: "Chele to Geling",
      image: geling,
      desc: "A tougher day crossing the Taklam La (3,624m) and Dajori La (3,735m) passes with views of Tilicho Peak.",
    },
    {
      day: 5,
      title: "Geling to Ghami",
      image: ghami,
      desc: "Descend into Ghami, a village surrounded by vast fields and the region's longest Mani wall.",
    },
    {
      day: 6,
      title: "Ghami to Charang",
      image: tsarang,
      desc: "Trek past the legendary Mani wall to Charang, home to a massive white dzong and a red gompa.",
    },
    {
      day: 7,
      title: "Arrival in Lo-Manthang",
      image: lomanthang,
      desc: "Reach the walled capital of the former Kingdom of Lo. A dramatic view of the city appears from the Lo La pass.",
    },
    {
      day: 8,
      title: "Explore Lo-Manthang",
      image: lomanthang,
      desc: "Acclimatization day. Visit the Namgyal Gompa, Tingkhar village, and the 2,500-year-old Jhong sky caves.",
    },
    {
      day: 9,
      title: "Return to Chuksang",
      image: chuksang,
      desc: "Begin the descent back, taking an alternative route via the Ghar Gompa to see ancient scriptures.",
    },
    {
      day: 10,
      title: "Chuksang to Jomsom",
      image: jomsom,
      desc: "Final day of trekking. Walk through the windy valley floor back to Jomsom to celebrate the journey.",
    },
    {
      day: 11,
      title: "Return to Pokhara",
      image: ktmPokhara,
      desc: "Early morning flight back to Pokhara, offering a final panoramic view of Dhaulagiri and Annapurna.",
    },
  ],
};