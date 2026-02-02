import React from "react";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaMapMarkerAlt,
  FaStar,
  FaClock,
  FaMountain,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Showcase: React.FC = () => {
  const { t } = useTranslation();

  const destinations = [
    {
      id: 1,
      title: "Everest Base Camp",
      location: "Solu-Khumbu, Nepal",
      rating: 4.9,
      reviews: "1.2k",
      price: "$1,250",
      days: "14 Days",
      altitude: "5,364m",
      image:
        "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=2070&auto=format&fit=crop",
    },
    {
      id: 2,
      title: "Annapurna Circuit",
      location: "Gandaki, Nepal",
      rating: 4.8,
      reviews: "850",
      price: "$980",
      days: "12 Days",
      altitude: "5,416m",
      image:
        "https://images.unsplash.com/photo-1585016495481-91613a3ab1bc?q=80&w=2070&auto=format&fit=crop",
    },
    {
      id: 3,
      title: "Upper Mustang Trek",
      location: "Mustang, Nepal",
      rating: 5.0,
      reviews: "320",
      price: "$1,800",
      days: "10 Days",
      altitude: "3,840m",
      image:
        "https://images.unsplash.com/photo-1623492701902-47dc207df5dc?q=80&w=2070&auto=format&fit=crop",
    },
  ];

  return (
    <section className="w-full py-32 bg-[#050505] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-150 bg-primary/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-0.5 w-12 bg-secondary" />
              <span className="text-secondary text-xs font-black uppercase tracking-[0.3em]">
                {t("Destinations")}
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight">
              {t("hero_title_1")}{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-white to-zinc-600">
                {t("hero_title_2")}
              </span>
            </h2>
          </div>

          <Link
            to="/packages"
            className="group flex items-center gap-3 text-white font-bold text-xs bg-white/5 border border-white/10 px-8 py-4 rounded-full hover:bg-white/10 hover:border-white/20 transition-all backdrop-blur-sm mb-2"
          >
            {t("find_adventure")}
            <span className="bg-primary rounded-full p-1 group-hover:translate-x-1 transition-transform">
              <FaArrowRight size={10} />
            </span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {destinations.map((item) => (
            <div
              key={item.id}
              className="group relative bg-[#0f0f0f] border border-white/5 rounded-4xl overflow-hidden hover:border-primary/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10"
            >
              <div className="relative h-70 overflow-hidden">
                <div className="absolute inset-0 bg-linear-to-t from-[#0f0f0f] to-transparent opacity-60 z-10" />

                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute top-5 left-5 z-20 flex gap-2">
                  <span className="bg-white/10 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-full flex items-center gap-1.5">
                    <FaStar className="text-yellow-400 text-xs" />
                    <span className="text-white text-xs font-bold">
                      {item.rating}
                    </span>
                  </span>
                </div>

                <div className="absolute bottom-5 left-5 z-20">
                  <div className="flex items-center gap-1.5 text-zinc-300 text-xs font-medium mb-1 drop-shadow-md">
                    <FaMapMarkerAlt className="text-secondary" />
                    <span>{item.location}</span>
                  </div>
                </div>
              </div>

              <div className="p-8 pt-4">
                <h3 className="text-2xl font-black text-white mb-8 group-hover:text-primary transition-colors leading-tight">
                  {item.title}
                </h3>

                <div className="flex items-center gap-6 mb-8 pb-8 border-b border-white/5">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-full bg-white/5 text-zinc-400">
                      <FaClock size={14} />
                    </div>
                    <div>
                      <p className="text-[10px] text-zinc-500 uppercase font-bold tracking-wider">
                        Duration
                      </p>
                      <p className="text-sm font-bold text-white">
                        {item.days}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-full bg-white/5 text-zinc-400">
                      <FaMountain size={14} />
                    </div>
                    <div>
                      <p className="text-[10px] text-zinc-500 uppercase font-bold tracking-wider">
                        Elevation
                      </p>
                      <p className="text-sm font-bold text-white">
                        {item.altitude}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-zinc-500 font-medium mb-1">
                      Starting from
                    </p>
                    <p className="text-xl font-black text-white">
                      {item.price}
                    </p>
                  </div>
                  <button className="h-12 w-12 rounded-2xl bg-white text-black flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-lg shadow-white/10 group-hover:shadow-primary/30">
                    <FaArrowRight className="-rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Showcase;
