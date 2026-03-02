"use client";

import { MapContainer, Marker, Polyline, TileLayer, Tooltip, useMap } from "react-leaflet";
import L from "leaflet";
import { Plus, Minus } from "lucide-react";
import { useMemo } from "react";
import type { TrailPoint } from "@/lib/destinations-data";

interface DestinationDetailMapProps {
  center: [number, number];
  zoom: number;
  trailCoordinates: TrailPoint[];
}

const createGlowIcon = (isEndpoint: boolean) =>
  L.divIcon({
    className: "destination-marker-wrap",
    html: `<div class="destination-marker ${isEndpoint ? "selected" : ""}">
      <span class="destination-marker-pulse"></span>
      <span class="destination-marker-core"></span>
    </div>`,
    iconSize: [32, 32],
    iconAnchor: [16, 16],
  });

function CustomZoomControls() {
  const map = useMap();
  return (
    <div className="absolute bottom-5 right-5 z-[500] flex flex-col gap-2">
      <button
        type="button"
        onClick={() => map.zoomIn()}
        className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/20 bg-black/70 text-white hover:bg-primary"
      >
        <Plus size={14} />
      </button>
      <button
        type="button"
        onClick={() => map.zoomOut()}
        className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/20 bg-black/70 text-white hover:bg-primary"
      >
        <Minus size={14} />
      </button>
    </div>
  );
}

export default function DestinationDetailMap({
  center,
  zoom,
  trailCoordinates,
}: DestinationDetailMapProps) {
  const polylineCoords = trailCoordinates.map((point) => point.pos);
  const normalIcon = useMemo(() => createGlowIcon(false), []);
  const endpointIcon = useMemo(() => createGlowIcon(true), []);

  return (
    <MapContainer
      center={center}
      zoom={zoom}
      scrollWheelZoom
      className="h-[48vh] min-h-[300px] w-full rounded-[1.75rem] bg-[#050505]"
      zoomControl={false}
      attributionControl={false}
      zoomAnimation={false}
      fadeAnimation={false}
      markerZoomAnimation={false}
    >
      <TileLayer url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png" />
      <Polyline
        positions={polylineCoords}
        pathOptions={{
          color: "#3b82f6",
          weight: 3,
          dashArray: "6, 10",
          lineCap: "round",
          opacity: 0.75,
        }}
      />
      {trailCoordinates.map((point, idx) => {
        const isEndpoint = idx === 0 || idx === trailCoordinates.length - 1;
        return (
          <Marker
            key={`${point.name}-${idx}`}
            position={point.pos}
            icon={isEndpoint ? endpointIcon : normalIcon}
          >
            <Tooltip direction="top" offset={[0, -10]} opacity={1}>
              {point.name}
            </Tooltip>
          </Marker>
        );
      })}
      <CustomZoomControls />
    </MapContainer>
  );
}
