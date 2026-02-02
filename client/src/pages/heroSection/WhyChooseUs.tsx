import React from "react";
import { useTranslation } from "react-i18next";
import { FaShieldAlt, FaHiking, FaLeaf } from "react-icons/fa";

interface Feature {
  icon: React.ReactNode;
  titleKey: string;
  descKey: string;
}

const WhyChooseUs: React.FC = () => {
  const { t } = useTranslation();

  const features: Feature[] = [
    {
      icon: <FaShieldAlt />,
      titleKey: "feature_1_title",
      descKey: "feature_1_desc",
    },
    {
      icon: <FaHiking />,
      titleKey: "feature_2_title",
      descKey: "feature_2_desc",
    },
    {
      icon: <FaLeaf />,
      titleKey: "feature_3_title",
      descKey: "feature_3_desc",
    },
  ];

  return (
    <section className="relative w-full py-24 bg-[#050505] overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary/5 blur-[120px] rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="flex flex-col mb-20">
          <div className="flex items-center gap-4 mb-6">
            <span className="h-0.5 w-12 bg-secondary"></span>
            <span className="text-secondary text-xs font-bold uppercase tracking-[0.3em]">
              {t("born_nepal")}
            </span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none">
            {t("why", "WHY")} <span className="text-transparent stroke-zinc-700" style={{ WebkitTextStroke: '1px #3f3f46' }}>{t("expedition", "EXPEDITION")}</span> <br /> 
            <span className="text-white">{t("with_us", "WITH US")}</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((item, index) => (
            <div 
              key={index} 
              className="group relative p-8 rounded-2xl border border-zinc-800/50 bg-zinc-900/20 hover:bg-zinc-900/40 transition-all duration-500 hover:border-primary/50"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-zinc-800 text-primary text-2xl mb-8 transition-all duration-500 group-hover:scale-110 group-hover:bg-primary group-hover:text-white">
                {item.icon}
              </div>

              <h3 className="text-lg font-bold text-white uppercase tracking-wide mb-4">
                {t(item.titleKey)}
              </h3>
              
              <p className="text-zinc-400 text-sm leading-relaxed font-light group-hover:text-zinc-300 transition-colors">
                {t(item.descKey)}
              </p>

              <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-1 h-1 bg-primary rounded-full shadow-[0_0_10px_#084ea8]"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;