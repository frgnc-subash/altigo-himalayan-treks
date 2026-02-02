import { FaArrowRight, FaCalendarAlt, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";

import heroBg from "../../assets/backgrounds/bg1.jpeg";

const Packages = () => {
  return (
    <div className="bg-[#050505] min-h-screen font-sans selection:bg-primary selection:text-white">
      <div className="relative h-[50vh] md:h-[60vh] flex flex-col items-center justify-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src={heroBg}
            alt="Himalayan Background"
            className="w-full h-full object-cover opacity-40 scale-105"
          />
          <div className="absolute inset-0 bg-linear-to-b from-black/80 via-black/20 to-[#050505]" />
        </div>

        <div className="relative z-10 w-full max-w-4xl flex flex-col items-center px-4 text-center mt-2">
          <h1 className="text-2xl md:text-7xl font-black text-white tracking-tighter leading-none uppercase mb-4">
            Expedition <br />
            <span className="text-transparent bg-clip-text bg-linear-to-b from-white to-zinc-700">
              Packages
            </span>
          </h1>
          <p className="text-zinc-500 text-sm md:text-lg max-w-xl font-medium">
            We are currently refining our high-altitude itineraries for the
            upcoming climbing season.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pb-32">
        <div className="relative z-20 flex flex-col items-center">
          <div className="w-full max-w-3xl bg-zinc-900/30 border border-white/5 rounded-[2.5rem] p-10 md:p-20 text-center backdrop-blur-3xl shadow-2xl">
            <div className="w-20 h-20 bg-primary/10 border border-primary/20 rounded-3xl flex items-center justify-center mx-auto mb-8">
              <FaCalendarAlt className="text-primary text-3xl" />
            </div>

            <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight mb-6">
              Arriving Soon
            </h2>

            <p className="text-zinc-400 text-base md:text-lg leading-relaxed mb-10 font-medium">
              The packages will arrive soon when the itineraries are finalized.
              Stay tuned for updates and be the first to know when they are
              available!
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="w-full sm:w-auto px-8 py-4 bg-white text-black text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-primary hover:text-white transition-all duration-500 flex items-center justify-center gap-3 shadow-xl"
              >
                <FaEnvelope /> Get Notified
              </Link>
              <Link
                to="/"
                className="w-full sm:w-auto px-8 py-4 bg-white/5 border border-white/10 text-white text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-white/10 transition-all flex items-center justify-center gap-3"
              >
                Go Back Home <FaArrowRight size={10} />
              </Link>
            </div>
          </div>

          {/* BACKGROUND DECORATION */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 blur-[120px] rounded-full -z-10" />
        </div>
      </div>
    </div>
  );
};

export default Packages;
