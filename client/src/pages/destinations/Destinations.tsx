import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import { useNavigate } from "react-router-dom";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { FaMountain, FaCloudSun, FaArrowRight } from "react-icons/fa";
import { locations } from "../../data/locations";
import Searchbar from "@/components/layouts/searchbar/Searchbar";

const createGlowIcon = (isSelected: boolean) =>
  L.divIcon({
    className: "custom-marker",
    html: `<div class="relative flex items-center justify-center">
    <span class="absolute inline-flex ${isSelected ? "h-8 w-8" : "h-4 w-4"} rounded-full bg-blue-500/30 animate-ping"></span>
    <div class="relative ${isSelected ? "h-4 w-4 border-2 border-white" : "h-2 w-2 border border-white/50"} rounded-full bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,1)] transition-all duration-500"></div>
  </div>`,
    iconSize: [32, 32],
    iconAnchor: [16, 16],
  });

const Destinations: React.FC = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const filtered = useMemo(
    () =>
      locations.filter((l) =>
        l.name.toLowerCase().includes(search.toLowerCase()),
      ),
    [search],
  );

  return (
    <div className="bg-[#050505] min-h-screen flex flex-col relative font-sans text-zinc-200">
      <section className="relative w-full h-[55vh] z-0">
        <MapContainer
          center={[28.3949, 84.124]}
          zoom={7}
          scrollWheelZoom
          className="w-full h-full bg-[#050505]"
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
        <div className="absolute bottom-0 left-0 w-full h-24 bg-linear-to-t from-[#050505] to-transparent z-40 pointer-events-none" />
      </section>

      <section className="relative w-full bg-[#050505] z-10 flex flex-col min-h-[45vh]">
        <div className="w-full max-w-7xl mx-auto px-4 md:px-6 relative">
          <div className="sticky top-0 z-50 pt-4 pb-8 flex flex-col items-center justify-center gap-2 border-b border-white/5 bg-[#050505]/80 backdrop-blur-xl">
            <div className="absolute -top-10 left-0 w-full h-10 bg-linear-to-t from-[#050505]/80 to-transparent pointer-events-none" />

            <Searchbar
              onSearch={(q) => setSearch(q)}
              containerClassName="w-full max-w-md"
            />
            <span className="text-[10px] text-zinc-600 uppercase tracking-widest font-mono mt-2">
              {filtered.length} Locations Found
            </span>
          </div>

          <div className="py-8 flex flex-col gap-6 max-w-5xl mx-auto">
            {filtered.map((loc) => (
              <motion.div
                key={loc.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                onClick={() => navigate(`/destinations/${loc.id}`)}
                className="group flex flex-col md:flex-row items-stretch gap-8 p-5 rounded-3xl bg-zinc-900/20 border border-white/5 hover:border-blue-500/40 transition-all duration-500 cursor-pointer"
              >
                <div className="relative w-full md:w-80 h-56 md:h-48 rounded-2xl overflow-hidden shrink-0 border border-white/10 shadow-2xl">
                  <img
                    src={loc.image}
                    alt={loc.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="px-3 py-1 rounded-lg bg-blue-600 text-[10px] font-black text-white uppercase tracking-tighter shadow-lg">
                      {loc.difficulty}
                    </span>
                  </div>
                </div>

                <div className="flex-1 flex flex-col justify-center py-2">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="text-2xl font-black text-white group-hover:text-blue-400 transition-colors uppercase">
                        {loc.name}
                      </h4>
                      <div className="flex items-center gap-3 mt-1 text-zinc-500">
                        <span className="flex items-center gap-1.5 font-mono">
                          <FaMountain className="text-xs" />
                          {loc.altitude}
                        </span>
                        <span className="flex items-center gap-1.5 font-mono">
                          <FaCloudSun className="text-xs" />
                          {loc.season}
                        </span>
                      </div>
                    </div>
                    <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-zinc-500 group-hover:bg-blue-600 group-hover:text-white transition-all transform group-hover:rotate-45">
                      <FaArrowRight size={14} />
                    </div>
                  </div>
                  <p className="text-zinc-400 leading-relaxed line-clamp-2 mb-6 font-light italic">
                    {loc.desc}
                  </p>
                  <div className="flex items-center gap-4 mt-auto">
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-500/80">
                      Explore Region
                    </span>
                    <div className="h-px flex-1 bg-linear-to-r from-blue-500/20 to-transparent" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Destinations;
