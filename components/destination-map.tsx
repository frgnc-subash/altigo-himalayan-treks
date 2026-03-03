"use client";

import { MapContainer, Marker, TileLayer, Tooltip } from "react-leaflet";
import L from "leaflet";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

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

const createMarkerIcon = () =>
  L.divIcon({
    className: "destination-marker-wrap",
    html: `<div class="destination-marker">
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
  const defaultIcon = useMemo(() => createMarkerIcon(), []);
  const [activeLabelIndex, setActiveLabelIndex] = useState(0);
  const plottedLocations = useMemo(() => {
    const grouped = new Map<string, Location[]>();

    for (const loc of locations) {
      // Group practically identical points; nearby routes should keep real position.
      const key = `${loc.lat.toFixed(4)}:${loc.lng.toFixed(4)}`;
      const bucket = grouped.get(key) || [];
      bucket.push(loc);
      grouped.set(key, bucket);
    }

    const spreadRadius = 0.015;
    const spread: Array<{ loc: Location; position: [number, number] }> = [];

    for (const bucket of grouped.values()) {
      if (bucket.length === 1) {
        const loc = bucket[0];
        spread.push({ loc, position: [loc.lat, loc.lng] });
        continue;
      }

      const count = bucket.length;
      bucket.forEach((loc, index) => {
        const angle = (index / count) * Math.PI * 2;
        const latOffset = spreadRadius * Math.cos(angle);
        const lngOffset = spreadRadius * Math.sin(angle);
        spread.push({ loc, position: [loc.lat + latOffset, loc.lng + lngOffset] });
      });
    }

    return spread;
  }, [locations]);
  const shouldCycleLabels = plottedLocations.length > 6;

  useEffect(() => {
    setActiveLabelIndex(0);

    if (!shouldCycleLabels || plottedLocations.length === 0) return;

    const timer = window.setInterval(() => {
      setActiveLabelIndex((prev) => (prev + 1) % plottedLocations.length);
    }, 1300);

    return () => window.clearInterval(timer);
  }, [shouldCycleLabels, plottedLocations.length]);

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
      {plottedLocations.map(({ loc, position }, index) => {
        const isActive = shouldCycleLabels && index === activeLabelIndex;
        const markerKey = shouldCycleLabels
          ? `${loc.id}-${isActive ? "active" : "idle"}`
          : String(loc.id);

        return (
          <Marker
            key={markerKey}
            position={position}
            icon={defaultIcon}
            eventHandlers={{
              click: () => router.push(`/destinations/${loc.id}`),
            }}
          >
            <Tooltip
              direction="top"
              offset={[0, -10]}
              opacity={1}
              permanent={shouldCycleLabels ? isActive : true}
              className="destination-tooltip"
            >
              {loc.name}
            </Tooltip>
          </Marker>
        );
      })}
    </MapContainer>
  );
}
