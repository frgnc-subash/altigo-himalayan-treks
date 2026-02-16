import React, { useEffect, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  MapContainer,
  TileLayer,
  Marker,
  Polyline,
  Tooltip,
  useMap,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import {
  FaChevronLeft,
  FaArrowDown,
  FaClock,
  FaPlus,
  FaMinus,
  FaTag,
} from "react-icons/fa";

import { UpperMustangData } from "./locations/UpperMustang";
import { AnnapurnaCircuitData } from "./locations/AnnapurnaCircuit";
import type { TripData } from "@/types/types";

const DESTINATIONS: Record<string, TripData> = {
  "upper-mustang": UpperMustangData,
  "annapurna-circuit": AnnapurnaCircuitData,
};

const createGlowIcon = (color: string, size: number = 20) =>
  L.divIcon({
    className: "custom-marker",
    html: `<div class="relative flex items-center justify-center" style="width: ${size}px; height: ${size}px;">
    <span class="absolute inline-flex h-full w-full rounded-full ${color} opacity-40 animate-ping"></span>
    <div class="relative h-2.5 w-2.5 border border-white rounded-full ${color} shadow-[0_0_15px_rgba(255,255,255,0.6)]"></div>
  </div>`,
    iconSize: [size, size],
    iconAnchor: [size / 2, size / 2],
  });

const CustomZoomControls = () => {
  const map = useMap();
  return (
    <div className="absolute bottom-10 right-6 z-20 flex flex-col gap-2">
      <button
        onClick={() => map.zoomIn()}
        className="w-10 h-10 bg-black/60 backdrop-blur-md border border-white/10 rounded-xl flex items-center justify-center text-white hover:bg-blue-600 hover:border-blue-600 transition-all shadow-xl"
      >
        <FaPlus size={12} />
      </button>
      <button
        onClick={() => map.zoomOut()}
        className="w-10 h-10 bg-black/60 backdrop-blur-md border border-white/10 rounded-xl flex items-center justify-center text-white hover:bg-blue-600 hover:border-blue-600 transition-all shadow-xl"
      >
        <FaMinus size={12} />
      </button>
    </div>
  );
};

const LocationInfo: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const data = id ? DESTINATIONS[id] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const polylineCoords = useMemo(() => {
    return data ? data.trailCoordinates.map((t) => t.pos) : [];
  }, [data]);

  if (!data) {
    return (
      <div className="min-h-screen bg-[#050505] flex items-center justify-center text-white">
        <p>Destination not found.</p>
      </div>
    );
  }

  const scrollToDay = (dayIndex: number) => {
    const element = document.getElementById(`day-section-${dayIndex}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <div className="bg-[#050505] min-h-screen text-zinc-100 font-sans pb-20 pt-24 lg:pt-28">
      <nav className="px-6 mb-8 flex justify-start max-w-7xl mx-auto z-10 relative">
        <button
          onClick={() => navigate("/destinations")}
          className="group flex items-center gap-4 text-zinc-500 hover:text-white transition-all duration-500"
        >
          <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-blue-500 group-hover:bg-blue-600 transition-all duration-500">
            <FaChevronLeft size={10} />
          </div>
          <span className="text-[10px] font-black uppercase tracking-[0.4em] opacity-70 group-hover:opacity-100">
            Back to Map
          </span>
        </button>
      </nav>

      <section className="max-w-7xl mx-auto px-6 mb-16 relative z-0">
        <div className="h-[50vh] md:h-[60vh] w-full rounded-[2.5rem] overflow-hidden border border-white/5 shadow-2xl relative group/map">
          <MapContainer
            key={data.id}
            center={data.mapCenter}
            zoom={data.mapZoom}
            scrollWheelZoom={true}
            className="w-full h-full bg-[#050505]"
            zoomControl={false}
            attributionControl={false}
          >
            <TileLayer url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png" />
            <Polyline
              positions={polylineCoords}
              pathOptions={{
                color: "#3b82f6",
                weight: 2,
                dashArray: "6, 10",
                lineCap: "round",
                opacity: 0.6,
              }}
            />
            {data.trailCoordinates.map((point, idx) => (
              <Marker
                key={idx}
                position={point.pos}
                eventHandlers={{ click: () => scrollToDay(idx + 1) }}
                icon={createGlowIcon(
                  point.type === "destination"
                    ? "bg-blue-600"
                    : point.type === "start"
                      ? "bg-zinc-500"
                      : "bg-blue-500",
                )}
              >
                <Tooltip
                  direction="top"
                  offset={[0, -10]}
                  opacity={1}
                  permanent={
                    point.type === "destination" || point.type === "start"
                  }
                  className="bg-zinc-900 border border-white/10 rounded-lg text-white font-black uppercase text-[8px] tracking-tighter px-2 py-1 shadow-2xl"
                >
                  {point.name}
                </Tooltip>
              </Marker>
            ))}
            <CustomZoomControls />
          </MapContainer>

          <div className="absolute top-6 right-6 z-20 bg-black/70 backdrop-blur-xl border border-white/10 p-5 rounded-3xl hidden lg:block w-56">
            <h4 className="text-[9px] font-black uppercase tracking-widest text-zinc-500 mb-4 border-b border-white/5 pb-2">
              Route Highlights
            </h4>
            <div className="space-y-3 max-h-[35vh] overflow-y-auto custom-scrollbar pr-2">
              {data.trailCoordinates.map((point, idx) => (
                <div
                  key={idx}
                  onClick={() => scrollToDay(idx + 1)}
                  className="flex items-center gap-3 group/item cursor-pointer"
                >
                  <div
                    className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                      point.type === "destination"
                        ? "bg-blue-500 scale-125 shadow-[0_0_8px_rgba(59,130,246,0.8)]"
                        : "bg-zinc-700 group-hover/item:bg-blue-400"
                    }`}
                  ></div>
                  <span
                    className={`text-[8px] uppercase font-bold tracking-widest transition-colors ${
                      point.type === "destination"
                        ? "text-blue-400"
                        : "text-zinc-500 group-hover/item:text-zinc-300"
                    }`}
                  >
                    {point.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-32 bg-linear-to-t from-[#050505] via-transparent to-transparent z-10 pointer-events-none" />
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 mb-32">
        <div className="flex flex-col lg:flex-row gap-12 xl:gap-24 items-start">
          <div className="flex-1 pt-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              key={data.id}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 mb-6">
                <FaTag size={10} />
                <span className="text-[10px] font-black uppercase tracking-widest">
                  Premium Expedition
                </span>
              </div>

              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.9] mb-8 text-white">
                {data.name}
              </h1>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-y-8 gap-x-4 mb-10 border-y border-white/5 py-8">
                {data.details.map((detail, index) => (
                  <div key={index} className="flex flex-col gap-2">
                    <div className="flex items-center gap-2 text-zinc-500">
                      <detail.icon className="text-blue-500 text-xs" />
                      <span className="text-[10px] font-bold uppercase tracking-widest">
                        {detail.label}
                      </span>
                    </div>
                    <span className="text-sm font-semibold text-zinc-200">
                      {detail.value}
                    </span>
                  </div>
                ))}
              </div>

              <p className="text-zinc-400 leading-relaxed font-light text-base md:text-lg max-w-2xl">
                "{data.description}"
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 relative mb-24">
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-zinc-900 -translate-x-1/2 hidden md:block" />

        <div className="space-y-24 md:space-y-40">
          {data.itinerary.map((step, i) => (
            <motion.div
              id={`day-section-${step.day}`}
              key={`${data.id}-step-${i}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`relative flex flex-col md:flex-row items-center gap-8 md:gap-24 ${
                i % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="md:absolute md:left-1/2 md:-translate-x-1/2 z-10 w-12 h-12 md:w-16 md:h-16 rounded-full bg-blue-600 md:bg-zinc-950 border-2 border-blue-600 flex flex-col items-center justify-center absolute -top-6 left-6 md:top-auto shadow-[0_0_20px_rgba(37,99,235,0.3)]">
                <span className="text-lg md:text-xl font-black text-white leading-none">
                  {step.day}
                </span>
              </div>
              <div className="w-full md:w-1/2 group">
                <div className="relative aspect-16/10 rounded-[2.5rem] overflow-hidden border border-white/5 shadow-2xl bg-zinc-900">
                  <img
                    src={step.image}
                    alt={step.title}
                    loading="lazy"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        "https://placehold.co/800x600/18181b/3f3f46?text=Image+Not+Found";
                    }}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2s] ease-out"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/90 via-transparent to-transparent opacity-80" />
                </div>
              </div>
              <div
                className={`w-full md:w-1/2 space-y-5 ${
                  i % 2 === 0 ? "md:text-left" : "md:text-right"
                }`}
              >
                <div
                  className={`flex items-center gap-3 text-zinc-600 ${
                    i % 2 === 0 ? "" : "md:justify-end"
                  }`}
                >
                  <FaClock className="text-blue-500 text-xs" />
                  <span className="text-[10px] font-black uppercase tracking-[0.3em]">
                    Phase {step.day}
                  </span>
                </div>
                <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-white leading-[0.95]">
                  {step.title}
                </h3>
                <p className="text-zinc-400 leading-relaxed font-light text-base md:text-lg max-w-md mx-auto md:mx-0">
                  "{step.desc}"
                </p>
              </div>
              {i < data.itinerary.length - 1 && (
                <div className="absolute -bottom-16 md:-bottom-20 left-1/2 -translate-x-1/2 text-blue-600/20">
                  <FaArrowDown size={20} className="animate-bounce" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      <section className="px-6 text-center pb-12">
        <div className="max-w-4xl mx-auto border-t border-white/5 pt-20">
          <h2 className="text-3xl md:text-6xl font-black uppercase tracking-tighter leading-none mb-10">
            Start Your <br className="md:hidden" /> Journey Today.
          </h2>
          <button
            onClick={() =>
              (window.location.href = "https://wa.me/9779707921000")
            }
            className="px-12 py-5 bg-white text-black font-black uppercase text-[11px] tracking-[0.4em] rounded-full hover:bg-blue-600 hover:text-white transition-all duration-500 shadow-2xl hover:scale-105 active:scale-95"
          >
            Inquire Now
          </button>
        </div>
      </section>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        ::-webkit-scrollbar { width: 0px; } 
        body { background-color: #050505; } 
        .leaflet-container { background: #050505 !important; cursor: grab !important; z-index: 0 !important; }
        .leaflet-container:active { cursor: grabbing !important; }
        .leaflet-tooltip { background: #18181b !important; border: 1px solid rgba(255,255,255,0.1) !important; color: #fff !important; }
        .leaflet-tooltip-top:before { border-top-color: rgba(255,255,255,0.1) !important; }
      `,
        }}
      />
    </div>
  );
};

export default LocationInfo;
