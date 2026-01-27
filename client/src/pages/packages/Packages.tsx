import {
  FaClock,
  FaMountain,
  FaStar,
  FaArrowRight,
  FaMapMarkerAlt,
  FaCheckCircle,
} from "react-icons/fa";

import heroBg from "../../assets/backgrounds/bg1.jpeg";
import pkg1 from "../../assets/backgrounds/bg2.jpeg";
import pkg2 from "../../assets/backgrounds/bg3.jpeg";
import pkg3 from "../../assets/backgrounds/bg4.jpeg";

const PACKAGES = [
  {
    id: 1,
    title: "Everest Base Camp | The Gateway to the Top of the World",
    location: "Solukhumbu, Nepal",
    description:
      "Experience the legendary trail that has captivated adventurers for decades. Walk through Sherpa villages, ancient monasteries, and stand beneath the world's highest peak.",
    image: pkg1,
    price: 1450,
    days: 14,
    difficulty: "Hard",
    rating: 4.9,
    reviews: 124,
    category: "Trekking",
    featured: true,
  },
  {
    id: 2,
    title: "Annapurna Circuit | A Journey Through the Himalayas",
    location: "Manang/Mustang, Nepal",
    description:
      "Traverse diverse landscapes from subtropical jungles to high-altitude deserts. Cross the Thorong La Pass and witness the majestic Annapurna range up close.",
    image: pkg2,
    price: 1200,
    days: 18,
    difficulty: "Medium",
    rating: 4.8,
    reviews: 98,
    category: "Trekking",
    featured: false,
  },
  {
    id: 3,
    title: "Upper Mustang | The Forbidden Kingdom Expedition",
    location: "Mustang, Nepal",
    description:
      "Explore the hidden ancient kingdom of Lo Manthang. Witness unique Tibetan culture, red cliffs, and caves in one of the most preserved regions of the Himalayas.",
    image: pkg3,
    price: 1850,
    days: 16,
    difficulty: "Hard",
    rating: 4.9,
    reviews: 45,
    category: "Expedition",
    featured: true,
  },
];

const Packages = () => {
  return (
    <div className="bg-[#050505] min-h-screen font-sans selection:bg-primary selection:text-white">
      <div className="relative h-[40vh] md:h-[45vh] flex flex-col items-center justify-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src={heroBg}
            alt="Himalayan Background"
            className="w-full h-full object-cover opacity-60 scale-105"
          />
          <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/50 to-[#050505]" />
        </div>

        <div className="relative z-10 w-full max-w-4xl flex flex-col items-center px-4 text-center mt-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-5">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500"></span>
            </span>
            <span className="text-[10px] font-bold text-gray-300 uppercase tracking-widest">
              Season 2026 Open
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-tight drop-shadow-xl">
            Expedition <br className="md:hidden" />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-white to-zinc-500">
              Packages
            </span>
          </h1>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-6 pb-20 -mt-2 relative z-20">
        <div className="flex flex-col gap-8 md:gap-12">
          {PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              className={`group relative bg-[#0a0a0a] rounded-2xl overflow-hidden border transition-all duration-300 flex flex-col lg:flex-row hover:shadow-2xl hover:shadow-black/50 ${
                pkg.featured
                  ? "border-primary/30 shadow-[0_0_30px_rgba(8,78,168,0.1)]"
                  : "border-white/5 hover:border-white/10"
              }`}
            >
              <div className="relative w-full lg:w-[45%] h-64 sm:h-80 lg:h-auto overflow-hidden">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                />

                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent lg:bg-linear-to-r lg:from-transparent lg:to-[#0a0a0a]" />

                {pkg.featured && (
                  <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded-sm shadow-lg flex items-center gap-2">
                    <FaCheckCircle /> Featured
                  </div>
                )}

                <div className="absolute bottom-4 left-4 flex gap-2">
                  <span className="bg-black/60 backdrop-blur-md border border-white/10 text-white px-3 py-1 text-[10px] font-bold uppercase rounded-full">
                    {pkg.category}
                  </span>
                </div>
              </div>

              <div className="w-full lg:w-[55%] p-6 md:p-8 flex flex-col justify-center">
                <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-gray-400 mb-4 font-medium border-b border-white/5 pb-4">
                  <span className="flex items-center gap-1.5 text-primary">
                    <FaMapMarkerAlt /> {pkg.location}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <FaClock /> {pkg.days} Days
                  </span>
                  <span className="flex items-center gap-1.5">
                    <FaMountain /> {pkg.difficulty}
                  </span>
                </div>

                <h3 className="text-xl md:text-2xl font-black text-white mb-3 group-hover:text-primary transition-colors leading-tight">
                  {pkg.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3">
                  {pkg.description}
                </p>

                <div className="mt-auto flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase font-bold text-gray-500 tracking-wider mb-1">
                      Per Person
                    </span>
                    <div className="flex items-end gap-3">
                      <span className="text-3xl font-black text-white leading-none">
                        ${pkg.price}
                      </span>
                      <div className="flex items-center gap-1 mb-1.5 bg-white/5 px-2 py-0.5 rounded border border-white/5">
                        <FaStar className="text-yellow-500 text-[10px]" />
                        <span className="text-[10px] text-gray-300 font-bold">
                          {pkg.rating}
                        </span>
                      </div>
                    </div>
                  </div>

                  <button className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white text-black text-xs font-black uppercase tracking-wide hover:bg-primary hover:text-white transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-white/5 hover:shadow-primary/30">
                    Explore Package
                    <FaArrowRight
                      size={10}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Packages;
