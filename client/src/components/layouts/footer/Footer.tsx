import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaArrowRight,
  FaEnvelope,
} from "react-icons/fa";
import logoImg from "@/assets/logo.webp";

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  const navigation = {
    explore: [
      { name: t("Home"), path: "/" },
      { name: t("Destinations"), path: "/destinations" },
      { name: t("Packages"), path: "/packages" },
      { name: t("Contact Us"), path: "/contact" },
      { name: t("Journal"), path: "/journal" },
    ],
    destinations: [
      { name: t("Everest Region"), path: "#" },
      { name: t("Annapurna Region"), path: "#" },
      { name: t("Langtang Valley"), path: "#" },
      { name: t("Manaslu Circuit"), path: "#" },
      { name: t("Upper Mustang"), path: "#" },
    ],
  };

  return (
    <footer className="bg-[#050505] border-t border-white/5 pt-24 pb-12 overflow-hidden relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-linear-to-r from-transparent via-[#e02b34]/30 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 mb-20">
          <div className="lg:col-span-4 flex flex-col items-start space-y-8">
            <Link to="/" className="hover:opacity-80 transition-opacity">
              <img src={logoImg} alt="Logo" className="h-10 w-auto" />
            </Link>
            <p className="text-zinc-500 text-sm leading-relaxed max-w-sm">
              {t("footer_desc")}
            </p>
            <div className="flex gap-4">
              {[FaFacebookF, FaTwitter, FaInstagram].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:bg-[#e02b34] hover:text-white hover:border-[#e02b34] transition-all duration-300"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#e02b34] mb-8">
              {t("Explore")}
            </h4>
            <ul className="space-y-4">
              {navigation.explore.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-sm text-zinc-400 hover:text-white transition-colors flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-px bg-[#e02b34] mr-0 group-hover:mr-2 transition-all" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#e02b34] mb-8">
              {t("Regions")}
            </h4>
            <ul className="space-y-4">
              {navigation.destinations.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.path}
                    className="text-sm text-zinc-400 hover:text-white transition-colors flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-px bg-[#e02b34] mr-0 group-hover:mr-2 transition-all" />
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4 flex flex-col">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#e02b34] mb-8">
              {t("join_expedition")}
            </h4>
            <p className="text-zinc-400 text-sm mb-6 leading-relaxed">
              {t("newsletter_desc")}
            </p>
            <form className="relative group" onSubmit={(e) => e.preventDefault()}>
              <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-zinc-600 group-focus-within:text-[#e02b34] transition-colors">
                <FaEnvelope size={14} />
              </div>
              <input
                type="email"
                placeholder={t("email_placeholder")}
                className="w-full bg-white/5 border border-white/10 text-white text-sm rounded-2xl pl-11 pr-32 py-4 focus:outline-none focus:border-[#e02b34]/50 focus:ring-1 focus:ring-[#e02b34]/20 transition-all placeholder:text-zinc-600"
              />
              <button className="absolute right-2 inset-y-2 px-6 bg-[#e02b34] text-white text-xs font-black rounded-xl hover:bg-[#c0252c] transition-all flex items-center gap-2 active:scale-95 shadow-lg shadow-[#e02b34]/20">
                {t("subscribe")}
                <FaArrowRight size={10} />
              </button>
            </form>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6">
            <p className="text-[11px] text-zinc-600 font-medium uppercase">
              © {currentYear} SUMMIT EXPEDITIONS. {t("all_rights")}.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-[11px] text-zinc-600 hover:text-zinc-400 uppercase tracking-widest transition-colors">{t("Privacy")}</a>
              <a href="#" className="text-[11px] text-zinc-600 hover:text-zinc-400 uppercase tracking-widest transition-colors">{t("Terms")}</a>
            </div>
          </div>
          <div className="flex items-center gap-4 text-zinc-800">
             <div className="h-px w-8 bg-zinc-900" />
             <span className="text-[9px] font-black uppercase tracking-[0.5em] select-none">{t("born_nepal")}</span>
             <div className="h-px w-8 bg-zinc-900" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;