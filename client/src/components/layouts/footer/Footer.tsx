import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import logoImg from "@/assets/logo.webp";

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: t("Home"), path: "/" },
    { name: t("Destinations"), path: "/destinations" },
    { name: t("Packages"), path: "/packages" },
    { name: t("Contact Us"), path: "/contact" },
  ];

  return (
    <footer className="bg-[#050505] border-t border-white/5 pt-20 pb-10 relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-5 space-y-8">
            <Link to="/" className="flex items-center gap-3 group">
              <img
                src={logoImg}
                alt="Logo"
                className="h-9 w-auto transition-transform duration-500 group-hover:rotate-3"
              />
              <h1 className="text-xl font-extrabold uppercase tracking-tighter flex">
                <span className="text-white">Mount</span>
                <span className="text-primary">Treks</span>
              </h1>
            </Link>

            <p className="text-zinc-500 text-sm leading-relaxed max-w-sm">
              {t("footer_desc")}
            </p>

            <div className="flex gap-3">
              {[
                { Icon: FaFacebookF, url: "https://facebook.com/mounttreks" },
                { Icon: FaInstagram, url: "https://instagram.com/mounttreks" },
                { Icon: FaWhatsapp, url: "https://wa.me/9779707921000" },
              ].map((item, idx) => (
                <a
                  key={idx}
                  href={item.url}
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-zinc-500 hover:text-white hover:border-white transition-all duration-500"
                >
                  <item.Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          <div className="hidden md:block md:col-span-1" />

          <div className="col-span-1 md:col-span-3">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-600 mb-8">
              {t("Menu")}
            </h4>
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm font-semibold text-zinc-400 hover:text-white transition-all duration-300 flex items-center group"
                  >
                    <span className="h-px w-0 bg-primary group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-3" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-1 md:col-span-3">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-600 mb-8">
              {t("Office")}
            </h4>
            <div className="space-y-4">
              <a
                href="mailto:info@mounttreks.com"
                className="block text-sm font-semibold text-zinc-400 hover:text-white transition-colors"
              >
                info@mounttreks.com
              </a>
              <p className="text-sm font-semibold text-zinc-400">
                +977 9707921000
              </p>
              <p className="text-[11px] text-zinc-600 leading-relaxed uppercase tracking-widest">
                Thamel Area - Yapikhya Marg, Kathmandu
                <br /> Nepal
              </p>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-2">
          <p className="text-[10px] text-zinc-600 font-bold uppercase tracking-widest">
            © {currentYear} MOUNT TREKS. {t("all_rights")}.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-[9px] font-black uppercase tracking-[0.6em] text-zinc-800 select-none">
              {t("born_nepal")}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
