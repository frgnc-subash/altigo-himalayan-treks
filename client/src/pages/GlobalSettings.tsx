import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FaGlobe, FaCoins, FaArrowLeft, FaCheck } from "react-icons/fa";
import { useCurrency } from "../context/CurrencyContext";

const GlobalSettings = () => {
  const { i18n } = useTranslation();
  const { selectedCurrency, setCurrency, currencies } = useCurrency();
  const navigate = useNavigate();

  const languages = [
    { code: "en", label: "English" },
    { code: "es", label: "Español" },
    { code: "hi", label: "हिन्दी" },
    { code: "ja", label: "日本語" },
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white pt-32 pb-20 px-6">
      <div className="max-w-2xl mx-auto">
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-zinc-500 hover:text-white transition-colors mb-10 uppercase text-[10px] font-black tracking-[0.3em]"
        >
          <FaArrowLeft size={10} /> Back
        </button>

        <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-16">
          Regional <span className="text-secondary">Settings</span>
        </h1>

        <div className="space-y-16">
          {/* Language Section */}
          <section>
            <div className="flex items-center gap-3 mb-8">
              <FaGlobe className="text-primary" />
              <h2 className="text-xs font-black uppercase tracking-[0.2em] text-zinc-400">Select Language</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => i18n.changeLanguage(lang.code)}
                  className={`flex items-center justify-between p-5 rounded-2xl border transition-all ${
                    i18n.language.startsWith(lang.code)
                      ? "bg-primary border-primary shadow-[0_0_20px_rgba(8,78,168,0.3)]"
                      : "bg-white/5 border-white/5 hover:bg-white/10"
                  }`}
                >
                  <span className="text-sm font-bold uppercase tracking-wider">{lang.label}</span>
                  {i18n.language.startsWith(lang.code) && <FaCheck size={12} />}
                </button>
              ))}
            </div>
          </section>

          {/* Currency Section */}
          <section>
            <div className="flex items-center gap-3 mb-8">
              <FaCoins className="text-primary" />
              <h2 className="text-xs font-black uppercase tracking-[0.2em] text-zinc-400">Select Currency</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {currencies.map((curr) => (
                <button
                  key={curr.code}
                  onClick={() => setCurrency(curr.code)}
                  className={`flex items-center justify-between p-5 rounded-2xl border transition-all ${
                    selectedCurrency.code === curr.code
                      ? "bg-white/10 border-white/20 shadow-xl"
                      : "bg-white/5 border-white/5 hover:bg-white/10"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span className="text-xl font-black text-zinc-500">{curr.symbol}</span>
                    <span className="text-sm font-bold uppercase tracking-wider">{curr.code}</span>
                  </div>
                  {selectedCurrency.code === curr.code && <FaCheck size={12} className="text-secondary" />}
                </button>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default GlobalSettings;