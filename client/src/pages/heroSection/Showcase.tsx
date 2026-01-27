import React from "react";
import { FaArrowRight, FaMapMarkerAlt, FaStar } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Showcase: React.FC = () => {
  useTranslation();

  const destinations = [
    {
      id: 1,
      title: "Everest Base Camp",
      location: "Solu-Khumbu, Nepal",
      rating: 4.9,
      price: "$1,250",
      image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 2,
      title: "Annapurna Circuit",
      location: "Gandaki, Nepal",
      rating: 4.8,
      price: "$980",
      image: "https://images.unsplash.com/photo-1585016495481-91613a3ab1bc?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 3,
      title: "Upper Mustang Trek",
      location: "Mustang, Nepal",
      rating: 5.0,
      price: "$1,800",
      image: "https://images.unsplash.com/photo-1623492701902-47dc207df5dc?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  return (
    <section className="w-full">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 mb-4">
            <div className="h-px w-8 bg-secondary" />
            <span className="text-secondary text-xs font-bold uppercase tracking-[0.3em]">
              Top Destinations
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">
            ADVENTURES AWAITING <br />
            <span className="text-zinc-500">YOU IN THE WILD</span>
          </h2>
        </div>
        
        <button className="group flex items-center gap-3 text-white font-bold text-sm bg-white/5 border border-white/10 px-6 py-3 rounded-xl hover:bg-white/10 transition-all">
          VIEW ALL DESTINATIONS
          <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {destinations.map((item) => (
          <div 
            key={item.id} 
            className="group relative bg-[#0a0a0a] border border-white/5 rounded-3xl overflow-hidden hover:border-white/20 transition-all duration-500"
          >
            <div className="relative h-72 overflow-hidden">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 brightness-90"
              />
              <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center gap-1.5 border border-white/10">
                <FaStar className="text-yellow-500 text-xs" />
                <span className="text-white text-xs font-bold">{item.rating}</span>
              </div>
            </div>

            <div className="p-6">
              <div className="flex items-center gap-2 text-zinc-500 text-xs mb-3">
                <FaMapMarkerAlt />
                <span>{item.location}</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-secondary transition-colors">
                {item.title}
              </h3>
              
              <div className="flex items-center justify-between pt-6 border-t border-white/5">
                <div>
                  <p className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold">Starts From</p>
                  <p className="text-white font-black text-lg">{item.price}</p>
                </div>
                <button className="h-12 w-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-secondary hover:border-secondary transition-all">
                  <FaArrowRight size={14} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Showcase;