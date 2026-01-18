import React, { useEffect, useRef, useState } from "react";
import Map from "ol/Map";
import View from "ol/View";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import Overlay from "ol/Overlay";
import { fromLonLat } from "ol/proj";
import { defaults as defaultInteractions } from "ol/interaction";
import "ol/ol.css";

// ---------------- DATA ----------------
const LOCATIONS = [
  {
    id: "everest",
    name: "Everest Region",
    description: "The roof of the world. Home to Sherpa culture and Mt. Everest.",
    coords: [86.925, 27.9881],
    image:
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: "annapurna",
    name: "Annapurna Region",
    description:
      "From subtropical jungles to the high-altitude Thorong La Pass.",
    coords: [83.8203, 28.5961],
    image:
      "https://images.unsplash.com/photo-1502472584811-0a2f2ca8f9cf?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: "kathmandu",
    name: "Kathmandu Valley",
    description:
      "The city of temples and the historic gateway to the Himalayas.",
    coords: [85.324, 27.7172],
    image:
      "https://images.unsplash.com/photo-1572887968853-936639890d2e?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: "mustang",
    name: "Upper Mustang",
    description: "The forbidden kingdom beyond the mountains.",
    coords: [83.8473, 28.9985],
    image:
      "https://images.unsplash.com/photo-1545326880-90c0064f72d4?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: "rara",
    name: "Rara Lake",
    description: "The queen of lakes in Karnali province.",
    coords: [82.1057, 29.5306],
    image:
      "https://images.unsplash.com/photo-1625232694701-081034f4948a?q=80&w=400&auto=format&fit=crop",
  },
];

// ---------------- COMPONENT ----------------
const Showcase: React.FC = () => {
  const [activeLocation, setActiveLocation] = useState(LOCATIONS[0]);
  const mapRef = useRef<HTMLDivElement | null>(null);
  const mapInstance = useRef<Map | null>(null);

  // Initialize map safely
  useEffect(() => {
    if (!mapRef.current || mapInstance.current) return;

    const map = new Map({
      target: mapRef.current,
      interactions: defaultInteractions({
        mouseWheelZoom: false, // UX FIX
        doubleClickZoom: false,
      }),
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      view: new View({
        center: fromLonLat([84.124, 28.3949]),
        zoom: 7,
        minZoom: 6,
        maxZoom: 9,
        smoothExtentConstraint: true,
      }),
    });

    // Create markers
    LOCATIONS.forEach((loc) => {
      const el = document.createElement("div");
      el.className =
        "w-3 h-3 rounded-full bg-[#084EA8] shadow-[0_0_15px_#084EA8] cursor-pointer transition-transform hover:scale-150";

      el.onmouseenter = () => flyTo(loc);
      el.onclick = () => flyTo(loc);

      const overlay = new Overlay({
        position: fromLonLat(loc.coords),
        positioning: "center-center",
        element: el,
        stopEvent: false,
      });

      map.addOverlay(overlay);
    });

    mapInstance.current = map;

    // Critical for refresh bug
    setTimeout(() => map.updateSize(), 0);

    return () => {
      map.setTarget(undefined);
      mapInstance.current = null;
    };
  }, []);

  // Smooth camera movement
  const flyTo = (loc: (typeof LOCATIONS)[0]) => {
    setActiveLocation(loc);
    const view = mapInstance.current?.getView();
    if (!view) return;

    view.animate(
      {
        center: fromLonLat(loc.coords),
        duration: 800,
      },
      {
        zoom: 8,
        duration: 800,
      }
    );
  };

  return (
    <div className="relative w-full py-10 lg:py-0 font-sans">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* LEFT */}
        <div className="lg:col-span-4 space-y-8 z-20">
          <h2 className="text-4xl font-black text-white">
            Explore <br /> Nepal
          </h2>

          <div className="bg-[#111] border border-white/10 rounded-2xl p-5">
            <img
              src={activeLocation.image}
              alt={activeLocation.name}
              className="h-36 w-full object-cover rounded-xl mb-4"
            />
            <h3 className="text-white font-bold mb-2">
              {activeLocation.name}
            </h3>
            <p className="text-gray-400 text-xs mb-4">
              {activeLocation.description}
            </p>
            <button className="w-full py-3 bg-[#084EA8] rounded-lg text-xs font-bold uppercase">
              Explore Packages
            </button>
          </div>
        </div>

        {/* MAP */}
        <div className="lg:col-span-8 relative">
          <div className="relative w-full aspect-video rounded-xl overflow-hidden">
            <div ref={mapRef} className="absolute inset-0" />
            <div className="absolute inset-0 pointer-events-none bg-linear-to-t from-black/40 via-transparent to-black/30" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Showcase;
