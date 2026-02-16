import React from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useNavigate } from "react-router-dom";

// Define the shape of your location data
interface Location {
  id: string | number;
  name: string;
  lat: number;
  lng: number;
  [key: string]: any; // Allow other properties
}

interface DestinationMapProps {
  locations: Location[];
  center?: [number, number];
  zoom?: number;
  className?: string;
}

const createGlowIcon = (isSelected: boolean) =>
  L.divIcon({
    className: "custom-marker",
    html: `<div class="relative flex items-center justify-center">
    <span class="absolute inline-flex ${
      isSelected ? "h-8 w-8" : "h-4 w-4"
    } rounded-full bg-blue-500/30 animate-ping"></span>
    <div class="relative ${
      isSelected
        ? "h-4 w-4 border-2 border-white"
        : "h-2 w-2 border border-white/50"
    } rounded-full bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,1)] transition-all duration-500"></div>
  </div>`,
    iconSize: [32, 32],
    iconAnchor: [16, 16],
  });

const DestinationMap: React.FC<DestinationMapProps> = ({
  locations,
  center = [28.3949, 84.124],
  zoom = 7,
  className = "w-full h-full bg-[#050505]",
}) => {
  const navigate = useNavigate();

  return (
    <MapContainer
      center={center}
      zoom={zoom}
      scrollWheelZoom
      className={className}
      zoomControl={false}
      attributionControl={false}
    >
      <TileLayer url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png" />
      {locations.map((loc) => (
        <Marker
          key={loc.id}
          position={[loc.lat, loc.lng]}
          icon={createGlowIcon(false)}
          eventHandlers={{
            click: () => navigate(`/destinations/${loc.id}`),
          }}
        />
      ))}
    </MapContainer>
  );
};

export default DestinationMap;
