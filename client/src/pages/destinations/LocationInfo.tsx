import React, { useEffect } from "react";
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
  FaMapMarkerAlt,
  FaClock,
  FaCheckCircle,
  FaPlus,
  FaMinus,
} from "react-icons/fa";
import { locations } from "../../data/locations";
import { packages } from "../../data/packages";

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
  const { id } = useParams();
  const navigate = useNavigate();

  const location = locations.find((l) => String(l.id) === String(id));
  const pkg = packages.find((p) => String(p.locationId) === String(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!location || !pkg) return null;

  const fullTrail: { pos: [number, number]; name: string; type: string }[] = [
    { pos: [27.7172, 85.324], name: "Kathmandu", type: "start" },
    { pos: [28.2096, 83.9856], name: "Pokhara", type: "transit" },
    { pos: [28.7847, 83.7225], name: "Jomsom", type: "gateway" },
    { pos: [28.8351, 83.7836], name: "Kagbeni", type: "stop" },
    { pos: [28.8894, 83.8242], name: "Chele", type: "stop" },
    { pos: [28.9833, 83.85], name: "Geling", type: "stop" },
    { pos: [29.0417, 83.875], name: "Ghami", type: "stop" },
    { pos: [29.0917, 83.9333], name: "Charang", type: "stop" },
    { pos: [29.1824, 83.9575], name: "Lo-Manthang", type: "destination" },
  ];

  const polylineCoords = fullTrail.map((t) => t.pos);

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
            Go Back
          </span>
        </button>
      </nav>

      <section className="max-w-7xl mx-auto px-6 mb-12 relative z-0">
        <div className="h-[55vh] md:h-[65vh] w-full rounded-[2.5rem] overflow-hidden border border-white/5 shadow-2xl relative group/map">
          <MapContainer
            center={[28.5, 84.3]}
            zoom={8}
            scrollWheelZoom={true}
            className="w-full h-full bg-[#050505] cursor-grab active:cursor-grabbing"
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
            {fullTrail.map((point, idx) => (
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
              Expedition Log
            </h4>
            <div className="space-y-3 max-h-[35vh] overflow-y-auto custom-scrollbar pr-2">
              {fullTrail.map((point, idx) => (
                <div
                  key={idx}
                  onClick={() => scrollToDay(idx + 1)}
                  className="flex items-center gap-3 group/item cursor-pointer"
                >
                  <div
                    className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${point.type === "destination" ? "bg-blue-500 scale-125 shadow-[0_0_8px_rgba(59,130,246,0.8)]" : "bg-zinc-700 group-hover/item:bg-blue-400"}`}
                  ></div>
                  <span
                    className={`text-[8px] uppercase font-bold tracking-widest transition-colors ${point.type === "destination" ? "text-blue-400" : "text-zinc-500 group-hover/item:text-zinc-300"}`}
                  >
                    {point.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="absolute bottom-6 left-6 z-20 px-4 py-2 bg-black/60 backdrop-blur-md border border-white/10 rounded-full">
            <p className="text-[8px] font-black uppercase tracking-widest text-zinc-400">
              Interactivity: Scroll to Zoom • Drag to Pan
            </p>
          </div>

          <div className="absolute bottom-0 left-0 w-full h-32 bg-linear-to-t from-[#050505] via-transparent to-transparent z-10 pointer-events-none" />
        </div>
      </section>

      <header className="max-w-5xl mx-auto px-6 mb-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-6 italic">
            {location.name}
          </h1>
          <div className="flex flex-wrap justify-center gap-6 mb-8 opacity-60">
            <div className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-blue-600 text-[10px]" />
              <span className="text-white text-[9px] font-bold uppercase tracking-[0.2em]">
                {location.altitude}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <FaCheckCircle className="text-blue-600 text-[10px]" />
              <span className="text-white text-[9px] font-bold uppercase tracking-[0.2em]">
                {location.difficulty}
              </span>
            </div>
          </div>
          <p className="text-zinc-500 leading-relaxed font-light text-sm md:text-base max-w-2xl mx-auto italic">
            "{location.desc}"
          </p>
        </motion.div>
      </header>

      <section className="max-w-6xl mx-auto px-6 relative mb-20">
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-zinc-900 -translate-x-1/2 hidden md:block" />
        <div className="space-y-24 md:space-y-48">
          {pkg.itinerary.map((step, i) => (
            <motion.div
              id={`day-section-${step.day}`}
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`relative flex flex-col md:flex-row items-center gap-8 md:gap-24 ${i % 2 === 0 ? "md:flex-row-reverse" : ""}`}
            >
              <div className="md:absolute md:left-1/2 md:-translate-x-1/2 z-10 w-12 h-12 md:w-16 md:h-16 rounded-full bg-blue-600 md:bg-zinc-950 border-2 border-blue-600 flex flex-col items-center justify-center absolute -top-5 left-4 md:top-auto shadow-xl shadow-blue-500/20">
                <span className="text-lg md:text-xl font-black text-white leading-none">
                  {step.day}
                </span>
              </div>
              <div className="w-full md:w-1/2 group">
                <div className="relative aspect-16/10 rounded-[2.5rem] overflow-hidden border border-white/5 shadow-2xl">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[4s] ease-out"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-80" />
                </div>
              </div>
              <div
                className={`w-full md:w-1/2 space-y-4 ${i % 2 === 0 ? "md:text-left" : "md:text-right"}`}
              >
                <div
                  className={`flex items-center gap-3 text-zinc-600 ${i % 2 === 0 ? "" : "md:justify-end"}`}
                >
                  <FaClock className="text-blue-500 text-xs" />
                  <span className="text-[10px] font-black uppercase tracking-[0.3em]">
                    Checkpoint Phase
                  </span>
                </div>
                <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-white leading-[0.95]">
                  {step.title}
                </h3>
                <p className="text-zinc-400 leading-relaxed font-light text-base md:text-lg italic max-w-md mx-auto md:mx-0">
                  "{step.desc}"
                </p>
              </div>
              {i < pkg.itinerary.length - 1 && (
                <div className="absolute -bottom-16 md:-bottom-24 left-1/2 -translate-x-1/2 text-blue-600/20">
                  <FaArrowDown size={22} className="animate-bounce" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      <section className="px-6 text-center">
        <div className="max-w-3xl mx-auto border-t border-white/5 pt-20">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none mb-8 italic">
            Start Your <br className="md:hidden" /> Journey.
          </h2>
          <button
            onClick={() =>
              (window.location.href = "https://wa.me/9779707921000")
            }
            className="px-10 py-4 bg-white text-black font-black uppercase text-[10px] tracking-[0.4em] rounded-full hover:bg-blue-600 hover:text-white transition-all duration-500 shadow-xl"
          >
            Make an Inquiry
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
