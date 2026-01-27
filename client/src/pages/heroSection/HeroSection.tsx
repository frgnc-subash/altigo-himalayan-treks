import { useState, useEffect } from "react";
import { FaArrowDown } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import Showcase from "./Showcase";
import Gallery from "./Gallery";

const HeroSection = () => {
  const { t } = useTranslation();
  const imagesRecord = import.meta.glob("../../assets/backgrounds/*.{png,jpg,jpeg,webp}", {
    eager: true,
    import: "default",
  });

  const backgroundImages = Object.values(imagesRecord) as string[];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (backgroundImages.length === 0) return;
    const interval = setInterval(() => {
      setCurrentIndex((p) => (p === backgroundImages.length - 1 ? 0 : p + 1));
    }, 6000);
    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  return (
    <div className="flex flex-col w-full bg-[#050505]">
      <div className="relative w-full h-[90vh] md:h-screen min-h-125 flex flex-col font-sans overflow-hidden">
        <div className="absolute inset-0 z-0 bg-black">
          {backgroundImages.map((img, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-2000 ease-in-out ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <img src={img} alt="Background" className="w-full h-full object-cover brightness-[0.55]" />
            </div>
          ))}
          <div className="absolute inset-0 bg-linear-to-b from-black/60 via-transparent to-[#050505] z-10" />
        </div>

        <div className="relative z-20 flex flex-col items-center justify-center px-6 text-center h-full max-w-5xl mx-auto pt-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-4 md:mb-8">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary"></span>
            </span>
            <span className="text-[9px] md:text-xs font-bold text-gray-200 uppercase tracking-[0.2em]">
              {t("visit_nepal")} {new Date().getFullYear()}
            </span>
          </div>

          <h1 className="text-3xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-tight leading-[1.1] mb-4 md:mb-6 uppercase">
            {t("hero_title_1")} <br />
            <span className="text-transparent bg-clip-text bg-linear-to-b from-white to-zinc-500">
              {t("hero_title_2")}
            </span>
          </h1>

          <p className="text-zinc-300 text-sm sm:text-lg lg:text-xl max-w-2xl mb-6 md:mb-10 leading-relaxed font-light">
            {t("hero_subtitle")}
          </p>

          <div className="flex flex-wrap justify-center gap-x-5 gap-y-3 md:gap-x-8 text-[9px] md:text-xs text-zinc-400 font-bold tracking-widest uppercase">
            <span className="text-zinc-500">{t("trending")}</span>
            <button className="text-white hover:text-primary transition-colors border-b border-transparent hover:border-primary pb-0.5 cursor-pointer">
              {t("abc")}
            </button>
            <button className="text-white hover:text-primary transition-colors border-b border-transparent hover:border-primary pb-0.5 cursor-pointer">
              {t("annapurna")}
            </button>
            <button className="text-white hover:text-primary transition-colors border-b border-transparent hover:border-primary pb-0.5 cursor-pointer">
              {t("mustang")}
            </button>
          </div>
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/30 animate-bounce z-10">
          <FaArrowDown size={16} />
        </div>
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-2 md:py-16 flex flex-col gap-10 md:gap-32">
        <Gallery />
        <Showcase />
      </div>
    </div>
  );
};

export default HeroSection;