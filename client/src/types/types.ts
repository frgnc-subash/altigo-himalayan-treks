import type { IconType } from "react-icons";

export type TrailPointType = "start" | "transit" | "gateway" | "stop" | "destination";

export interface TrailCoordinate {
  pos: [number, number];
  name: string;
  type: TrailPointType;
}

export interface TripDetail {
  icon: IconType;
  label: string;
  value: string;
}

export interface ItineraryDay {
  day: number;
  title: string;
  image: string;
  desc: string;
}

export interface TripData {
  id: string;
  name: string;
  description: string;
  price: number;
  altitude: string;
  mapCenter: [number, number];
  mapZoom: number;
  trailCoordinates: TrailCoordinate[];
  details: TripDetail[];
  itinerary: ItineraryDay[];
}