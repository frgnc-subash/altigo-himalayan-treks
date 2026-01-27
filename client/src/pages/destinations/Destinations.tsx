import { useTranslation } from "react-i18next";
import { FaMapMarkerAlt, FaClock, FaSignal, FaArrowRight } from "react-icons/fa";
import mapImg from "@/assets/backgrounds/bg2.jpeg";

const Destinations = () => {
 useTranslation();

  const regions = [
    {
      id: 1,
      title: "Everest Base Camp",
      region: "Khumbu Region",
      image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&q=80&w=1000",
      duration: "14 Days",
      difficulty: "Challenging",
      price: "$1,450",
      tag: "Best Seller"
    },
    {
      id: 2,
      title: "Annapurna Sanctuary",
      region: "Gandaki Province",
      image: "https://images.unsplash.com/photo-1585016495481-91613a3ab1bc?auto=format&fit=crop&q=80&w=1000",
      duration: "10 Days",
      difficulty: "Moderate",
      price: "$980",
      tag: "Top Rated"
    },
    {
      id: 3,
      title: "Upper Mustang Trek",
      region: "Hidden Kingdom",
      image: "https://images.unsplash.com/photo-1623492701902-47dc207df5dc?auto=format&fit=crop&q=80&w=1000",
      duration: "12 Days",
      difficulty: "Moderate",
      price: "$1,750",
      tag: "Cultural"
    },
    {
      id: 4,
      title: "Langtang Valley",
      region: "Rasuwa District",
      image: "https://images.unsplash.com/photo-1605640840605-14ac1855827b?auto=format&fit=crop&q=80&w=1000",
      duration: "8 Days",
      difficulty: "Easy",
      price: "$750",
      tag: "Short Trek"
    },
    {
      id: 5,
      title: "Manaslu Circuit",
      region: "Gorkha Region",
      image: "https://images.unsplash.com/photo-1526715469446-0bb0a701980a?auto=format&fit=crop&q=80&w=1000",
      duration: "16 Days",
      difficulty: "Hard",
      price: "$1,200",
      tag: "Remote"
    },
    {
      id: 6,
      title: "Pokhara Valley",
      region: "City of Lakes",
      image: "https://images.unsplash.com/photo-1571504244444-9960d15c2d46?auto=format&fit=crop&q=80&w=1000",
      duration: "4 Days",
      difficulty: "Easy",
      price: "$450",
      tag: "Leisure"
    }
  ];

  return (
    <div className="bg-[#050505] min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <img 
          src={mapImg} 
          alt="Map Background" 
          className="w-full h-full object-cover scale-110 rotate-2 select-none"
        />
        <div className="absolute inset-0 bg-linear-to-b from-[#050505] via-transparent to-[#050505]" />
        <div className="absolute inset-0 bg-linear-to-r from-[#050505] via-transparent to-[#050505]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-40 pb-24">
        <div className="relative mb-24">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-12 bg-[#e02b34]"></span>
            <span className="text-[#e02b34] text-[10px] font-black uppercase tracking-[0.6em]">
              Regional Expeditions
            </span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter uppercase leading-[0.9]">
            PLAN YOUR <br />
            <span className="text-transparent bg-clip-text bg-linear-to-b from-white to-zinc-700">TRIPS NOW.</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16">
          {regions.map((dest) => (
            <div key={dest.id} className="group relative flex flex-col">
              <div className="relative aspect-4/5 rounded-4xl overflow-hidden mb-8 shadow-2xl shadow-black">
                <img 
                  src={dest.image} 
                  alt={dest.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent" />
                
                <div className="absolute top-6 left-6">
                  <span className="px-4 py-1.5 bg-black/40 backdrop-blur-xl border border-white/10 text-white text-[9px] font-black uppercase tracking-widest rounded-xl">
                    {dest.tag}
                  </span>
                </div>

                <div className="absolute bottom-8 left-8 right-8">
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2 text-[#e02b34]">
                      <FaMapMarkerAlt size={10} />
                      <span className="text-[10px] font-black uppercase tracking-widest text-zinc-300">{dest.region}</span>
                    </div>
                    <h3 className="text-3xl font-black text-white uppercase tracking-tight leading-none">
                      {dest.title}
                    </h3>
                  </div>
                </div>
              </div>

              <div className="px-2">
                <div className="flex items-center gap-8 mb-8">
                  <div className="flex items-center gap-2.5">
                    <FaClock size={12} className="text-[#e02b34]" />
                    <span className="text-[11px] font-bold text-zinc-400 uppercase tracking-wider">{dest.duration}</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <FaSignal size={12} className="text-[#e02b34]" />
                    <span className="text-[11px] font-bold text-zinc-400 uppercase tracking-wider">{dest.difficulty}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-8 border-t border-white/5">
                  <div>
                    <span className="block text-[9px] text-zinc-600 font-black uppercase tracking-[0.2em] mb-1">Starting From</span>
                    <span className="text-2xl font-black text-white tracking-tight">{dest.price}</span>
                  </div>
                  <button className="h-14 px-8 bg-white/5 border border-white/10 hover:bg-white hover:text-black text-white rounded-2xl transition-all duration-300 font-black text-[10px] uppercase tracking-widest flex items-center gap-3 active:scale-95">
                    Explore
                    <FaArrowRight size={10} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-40 p-16 rounded-[48px] bg-white/2 border border-white/5 relative overflow-hidden backdrop-blur-3xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#e02b34]/5 blur-[120px] rounded-full -mr-48 -mt-48" />
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="text-left max-w-xl">
              <h2 className="text-4xl md:text-5xl font-black text-white uppercase mb-6 tracking-tighter leading-none">
                Not found the <br /><span className="text-[#e02b34]">Perfect Path?</span>
              </h2>
              <p className="text-zinc-500 text-lg font-light leading-relaxed">
                Connect with our mountain guides to design a custom expedition tailored to your experience level and ambitions.
              </p>
            </div>
            <button className="shrink-0 px-12 py-6 bg-white text-black font-black text-xs uppercase tracking-[0.2em] rounded-2xl hover:bg-[#e02b34] hover:text-white transition-all duration-500 shadow-2xl shadow-black">
              Custom Expedition
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destinations;