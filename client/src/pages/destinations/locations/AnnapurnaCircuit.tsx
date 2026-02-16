import type { TripData } from "@/types/types";
import {
  FaCalendarAlt,
  FaBed,
  FaUtensils,
  FaSun,
  FaHiking,
  FaMapMarkerAlt,
} from "react-icons/fa";


export const AnnapurnaCircuitData: TripData = {
  id: "annapurna-circuit",
  name: "Annapurna Circuit",
  description: "One of the world's classic treks, circling the Annapurna Massif and crossing the dramatic Thorong La Pass.",
  price: 1450,
  altitude: "5,416m",
  mapCenter: [28.6, 84.0],
  mapZoom: 9,
  trailCoordinates: [
    { pos: [28.23, 84.37], name: "Besisahar", type: "start" },
    { pos: [28.40, 84.41], name: "Chame", type: "stop" },
    { pos: [28.61, 84.15], name: "Manang", type: "gateway" },
    { pos: [28.79, 83.93], name: "Thorong La", type: "destination" },
    { pos: [28.81, 83.87], name: "Muktinath", type: "stop" },
    { pos: [28.78, 83.72], name: "Jomsom", type: "stop" },
    { pos: [28.40, 83.70], name: "Tatopani", type: "stop" },
    { pos: [28.20, 83.98], name: "Pokhara", type: "transit" },
  ],
  details: [
    { icon: FaCalendarAlt, label: "Duration", value: "16-18 Days" },
    { icon: FaBed, label: "Accommodation", value: "Teahouses" },
    { icon: FaUtensils, label: "Meals", value: "Inclusive" },
    { icon: FaSun, label: "Best Time", value: "Oct-Nov, Apr-May" },
    { icon: FaHiking, label: "Activities", value: "High Pass" },
    { icon: FaMapMarkerAlt, label: "Max Altitude", value: "5,416m" },
  ],
  itinerary: [
    {
      day: 1,
      title: "Drive to Besisahar",
      image: "/images/besisahar.jpg",
      desc: "Scenic drive from Kathmandu to the starting point of the trek.",
    },
    {
      day: 4,
      title: "Arrival in Manang",
      image: "/images/manang.jpg",
      desc: "Acclimatization day in the beautiful valley of Manang with Gangapurna lake views.",
    },
    {
      day: 8,
      title: "Thorong Phedi",
      image: "/images/phedi.jpg",
      desc: "Reaching the base of the pass, preparing for the big climb.",
    },
    {
      day: 9,
      title: "Cross Thorong La Pass",
      image: "/images/thorongla.jpg",
      desc: "Crossing the highest point at 5416m and descending to Muktinath.",
    },
    {
      day: 10,
      title: "Muktinath to Jomsom",
      image: "/images/jomsom.jpg",
      desc: "Exploring the sacred temple and trekking through the Kali Gandaki valley.",
    },
  ],
};