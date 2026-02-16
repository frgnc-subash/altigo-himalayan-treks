import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaClock,
  FaMountain,
  FaArrowRight,
  FaTag,
  FaCalendarAlt,
} from "react-icons/fa";
import { destinationsData } from "../../data/destinations";

const Packages: React.FC = () => {
  return (
    <div className="bg-[#050505] min-h-screen font-sans text-zinc-200 selection:bg-blue-600 selection:text-white py-24 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-20 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block py-1.5 px-4 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-500 font-bold tracking-[0.2em] uppercase text-[10px] mb-6 shadow-[0_0_20px_rgba(59,130,246,0.1)]">
              Curated Expeditions
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-white uppercase mb-6 leading-[0.9] tracking-tighter">
              The Himalayan <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-blue-400 to-white">
                Collection
              </span>
            </h1>
            <p className="text-zinc-400 max-w-2xl mx-auto font-light text-lg leading-relaxed">
              Experience the raw beauty of the mountains with our all-inclusive
              packages. Designed for the modern explorer seeking comfort in the
              wild.
            </p>
          </motion.div>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {destinationsData.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Link
                to={`/packages/${pkg.id}`}
                className="group relative block h-full w-full"
              >
                {/* 1. Card Container */}
                <div className="relative h-[500px] w-full overflow-hidden rounded-[2.5rem] bg-zinc-900 border border-white/5 shadow-2xl transition-all duration-500 group-hover:shadow-[0_0_40px_rgba(37,99,235,0.15)] group-hover:border-blue-500/30">
                  {/* 2. Image Layer */}
                  <div className="absolute inset-0 h-[65%] w-full overflow-hidden">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 1.2, ease: "easeOut" }}
                      className="h-full w-full"
                    >
                      <img
                        src={pkg.image}
                        alt={pkg.name}
                        className="h-full w-full object-cover"
                      />
                    </motion.div>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-90" />

                    {/* Top Badges */}
                    <div className="absolute top-5 left-5 right-5 flex justify-between items-start z-10">
                      <div className="px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-xl border border-white/10 flex items-center gap-2">
                        <FaMapMarkerAlt className="text-blue-500 text-[10px]" />
                        <span className="text-white text-[10px] font-black uppercase tracking-widest">
                          {pkg.region}
                        </span>
                      </div>
                      <div
                        className={`px-3 py-1.5 rounded-full backdrop-blur-xl border border-white/10 ${
                          pkg.difficulty === "Extreme"
                            ? "bg-red-500/20 text-red-200 border-red-500/30"
                            : pkg.difficulty === "Challenging"
                              ? "bg-orange-500/20 text-orange-200 border-orange-500/30"
                              : "bg-green-500/20 text-green-200 border-green-500/30"
                        }`}
                      >
                        <span className="text-[10px] font-black uppercase tracking-widest">
                          {pkg.difficulty}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* 3. Floating Content Card */}
                  <div className="absolute bottom-0 left-0 w-full h-[45%] bg-[#0a0a0a] border-t border-white/5 p-6 flex flex-col justify-between group-hover:bg-[#0f0f0f] transition-colors duration-500">
                    {/* Floating Stats Bar (Overlapping Image) */}
                    <div className="absolute -top-8 left-6 right-6 h-16 bg-zinc-900/80 backdrop-blur-xl border border-white/10 rounded-2xl flex items-center justify-between px-6 shadow-xl z-20">
                      <div className="flex flex-col items-center">
                        <FaClock className="text-blue-500 text-xs mb-1" />
                        <span className="text-[9px] font-bold text-zinc-400 uppercase tracking-wider">
                          {pkg.days}
                        </span>
                      </div>
                      <div className="w-px h-6 bg-white/10" />
                      <div className="flex flex-col items-center">
                        <FaMountain className="text-blue-500 text-xs mb-1" />
                        <span className="text-[9px] font-bold text-zinc-400 uppercase tracking-wider">
                          {pkg.altitude}
                        </span>
                      </div>
                      <div className="w-px h-6 bg-white/10" />
                      <div className="flex flex-col items-center">
                        <FaCalendarAlt className="text-blue-500 text-xs mb-1" />
                        <span className="text-[9px] font-bold text-zinc-400 uppercase tracking-wider">
                          {pkg.season}
                        </span>
                      </div>
                    </div>

                    {/* Main Text Content */}
                    <div className="pt-10">
                      <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-3 group-hover:text-blue-400 transition-colors duration-300">
                        {pkg.name}
                      </h3>
                      <p className="text-zinc-500 text-xs leading-relaxed line-clamp-2 font-medium">
                        {pkg.desc}
                      </p>
                    </div>

                    {/* Bottom Action Row */}
                    <div className="flex items-end justify-between pt-4 border-t border-white/5 mt-auto">
                      <div>
                        <span className="block text-[9px] text-zinc-600 uppercase tracking-widest font-bold mb-1">
                          All Inclusive From
                        </span>
                        <div className="flex items-center gap-1.5 text-white">
                          <FaTag className="text-blue-500 text-xs" />
                          <span className="font-mono font-bold text-xl tracking-tight">
                            ${pkg.price.toLocaleString()}
                          </span>
                        </div>
                      </div>

                      <div className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-zinc-400 group-hover:bg-blue-600 group-hover:border-blue-600 group-hover:text-white transition-all duration-300 group-hover:scale-110 group-hover:-rotate-45">
                        <FaArrowRight size={12} />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Packages;
