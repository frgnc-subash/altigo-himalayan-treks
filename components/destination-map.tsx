"use client";

import { MapContainer, Marker, TileLayer, Tooltip } from "react-leaflet";
import L from "leaflet";
import { useRouter } from "next/navigation";
import { useMemo } from "react";

interface Location {
  id: string | number;
  name: string;
  lat: number;
  lng: number;
}

interface DestinationMapProps {
  locations: Location[];
  center?: [number, number];
  zoom?: number;
  className?: string;
}

const createGlowIcon = (isSelected: boolean) =>
  L.divIcon({
    className: "destination-marker-wrap",
    html: `<div class="destination-marker ${isSelected ? "selected" : ""}">
      <span class="destination-marker-pulse"></span>
      <span class="destination-marker-core"></span>
    </div>`,
    iconSize: [32, 32],
    iconAnchor: [16, 16],
  });

export default function DestinationMap({
  locations,
  center = [28.3949, 84.124],
  zoom = 7,
  className = "h-[420px] w-full rounded-2xl",
}: DestinationMapProps) {
  const router = useRouter();
  const defaultIcon = useMemo(() => createGlowIcon(false), []);

  return (
    <MapContainer
      center={center}
      zoom={zoom}
      scrollWheelZoom
      className={className}
      zoomControl={false}
      attributionControl={false}
      zoomAnimation={false}
      fadeAnimation={false}
      markerZoomAnimation={false}
    >
      <TileLayer url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png" />
      {locations.map((loc) => (
        <Marker
          key={loc.id}
          position={[loc.lat, loc.lng]}
          icon={defaultIcon}
          eventHandlers={{
            click: () => router.push(`/destinations/${loc.id}`),
          }}
        >
          <Tooltip direction="top" offset={[0, -10]} opacity={1} permanent>
            {loc.name}
          </Tooltip>
        </Marker>
      ))}
    </MapContainer>
  );
}
