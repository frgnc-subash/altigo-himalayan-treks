import { useState, useEffect } from "react";
import {
  FaArrowRight,
  FaInstagram,
  FaFacebookF,
  FaEnvelope,
} from "react-icons/fa";

import logoImg from "@/assets/logo.webp";
import bgImage from "@/assets/backgrounds/bg9.jpg";

const App = () => {
  const currentYear = new Date().getFullYear();
  const calculateTimeLeft = () => {
    const difference = +new Date("2026-03-01T00:00:00") - +new Date();

    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative min-h-dvh w-full bg-[#050505] font-sans selection:bg-[#084EA8] selection:text-white flex flex-col">
      <div className="fixed inset-0 z-0">
        <img
          src={bgImage}
          alt="Himalayan Background"
          className="w-full h-full object-cover opacity-50 scale-105"
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/90 via-black/50 to-[#050505]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#050505_120%)] opacity-90" />
      </div>

      <main className="relative z-10 grow flex flex-col items-center justify-center w-full max-w-7xl mx-auto px-4 sm:px-6 py-6 text-center">
        <div className="flex flex-col items-center gap-6 md:gap-8 w-full">
          <div className="animate-fade-in-up flex items-center justify-center gap-3">
            <img
              src={logoImg}
              alt="Mount Treks Logo"
              className="h-10 w-auto opacity-90"
            />
            <span className="text-xl md:text-3xl font-black text-white tracking-tighter uppercase drop-shadow-lg">
              Mount Treks
            </span>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#084EA8] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#084EA8]"></span>
            </span>
            <span className="text-[10px] md:text-xs font-bold text-gray-200 uppercase tracking-widest">
              Visit Nepal {currentYear}
            </span>
          </div>

          <div className="space-y-2 md:space-y-4">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-white tracking-tight leading-[1.1] drop-shadow-2xl">
              Launching <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-white to-gray-500">
                Soon
              </span>
            </h1>

            <p className="text-gray-400 text-xs sm:text-sm md:text-lg max-w-75 sm:max-w-md md:max-w-lg mx-auto leading-relaxed">
              We are designing the way you experience the Himalayas. Get ready
              for curated expeditions in Nepal.
            </p>
          </div>

          <div className="grid grid-cols-4 gap-2 sm:gap-4 md:gap-5 w-full max-w-85 sm:max-w-md md:max-w-2xl">
            {[
              { label: "Days", value: timeLeft.days },
              { label: "Hours", value: timeLeft.hours },
              { label: "Mins", value: timeLeft.minutes },
              { label: "Secs", value: timeLeft.seconds },
            ].map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center py-2.5 px-1 sm:p-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl shadow-2xl"
              >
                <span className="text-xl sm:text-3xl md:text-4xl font-black text-white mb-0.5 tabular-nums">
                  {String(item.value).padStart(2, "0")}
                </span>
                <span className="text-[8px] sm:text-[10px] font-bold text-[#084EA8] uppercase tracking-widest">
                  {item.label}
                </span>
              </div>
            ))}
          </div>

          <div className="w-full max-w-xs md:max-w-sm mx-auto flex justify-center mt-2">
            <a
              href="mailto:mounttrekspvtltd@gmail.com?subject=Inquiry%20about%20Expeditions"
              className="w-full group bg-white text-black font-black uppercase text-xs tracking-wider px-6 py-3.5 rounded-xl hover:bg-[#084EA8] hover:text-white transition-colors duration-300 flex items-center justify-center gap-3 shadow-lg shadow-white/10"
            >
              <FaEnvelope className="text-[#084EA8] group-hover:text-white transition-colors" />
              Contact Us
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </main>

      <footer className="relative z-10 w-full py-4 md:py-6 border-t border-white/5 bg-black/20 backdrop-blur-sm mt-auto shrink-0">
        <div className="max-w-7xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center justify-between gap-3 md:gap-0">
          <p className="text-[10px] md:text-xs text-gray-500 font-medium uppercase tracking-wider text-center md:text-left">
            © {currentYear} Mount Treks. Kathmandu, Nepal.
          </p>

          <div className="flex items-center gap-6">
            {[
              {
                Icon: FaFacebookF,
                href: "https://www.facebook.com/profile.php?id=61584054197541",
              },
              {
                Icon: FaInstagram,
                href: "https://instagram.com/mounttreksofficial",
              },
            ].map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300 p-1"
              >
                <item.Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
