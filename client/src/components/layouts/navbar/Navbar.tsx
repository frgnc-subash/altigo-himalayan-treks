import React, { useState, useEffect, useCallback, useRef } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import logoImg from "@/assets/logo.webp";

const Navbar: React.FC = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const [indicatorStyle, setIndicatorStyle] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnter = useCallback((element: HTMLElement) => {
    if (window.innerWidth >= 1024) {
      setIndicatorStyle({
        left: element.offsetLeft,
        width: element.offsetWidth,
        opacity: 1,
      });
    }
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIndicatorStyle((prev) => ({ ...prev, opacity: 0 }));
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIndicatorStyle((prev) => ({ ...prev, opacity: 0 }));
    setIsOpen(false);
  }, [location.pathname]);

  const navItems = [
    { label: t("Explore"), path: "/" },
    { label: t("Destinations"), path: "/destinations" },
    { label: t("Packages"), path: "/packages" },
    { label: t("Contact Us"), path: "/contact" },
  ];

  const commonLinkClasses =
    "relative px-4 lg:px-5 py-2 text-sm font-medium transition-all duration-300 rounded-lg flex items-center justify-center gap-2";

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-100 transition-all duration-500 ${
        scrolled || isOpen
          ? "bg-[#050505]/95 backdrop-blur-xl py-3 shadow-2xl "
          : "bg-linear-to-b from-black/80 via-black/20 to-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-between w-full lg:w-auto lg:flex-none">
            <Link
              to="/"
              className="shrink-0 relative group flex items-center gap-3"
            >
              <img
                src={logoImg}
                alt="Logo"
                className="h-8 md:h-9 lg:h-10 w-auto relative z-10 transition-transform duration-500 group-hover:scale-105"
              />
              <div className="flex flex-col leading-[1.1]">
                <span className="text-white font-black text-sm md:text-base lg:text-lg tracking-tighter uppercase relative z-10 whitespace-nowrap">
                  Altigo
                </span>
                <span className="text-primary font-black text-[10px] md:text-[11px] lg:text-xs tracking-tighter uppercase relative z-10 whitespace-nowrap">
                  Himalayan Treks
                </span>
              </div>
            </Link>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-white bg-white/10 rounded-xl active:scale-95 transition-all ml-4"
            >
              {isOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
            </button>
          </div>

          <div
            ref={navRef}
            onMouseLeave={handleMouseLeave}
            className={`${
              isOpen
                ? "absolute top-full left-0 w-full flex flex-col bg-[#050505] p-6 border-t border-white/5"
                : "hidden lg:flex lg:flex-row lg:items-center lg:justify-center relative"
            } z-40 transition-all duration-300`}
          >
            <div
              className="absolute hidden lg:block bg-white/10 rounded-lg transition-all duration-300 -z-10"
              style={{
                left: `${indicatorStyle.left}px`,
                width: `${indicatorStyle.width}px`,
                height: "100%",
                opacity: indicatorStyle.opacity,
              }}
            />
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onMouseEnter={(e) => handleMouseEnter(e.currentTarget)}
                className={({ isActive }) =>
                  `${commonLinkClasses} ${
                    isOpen ? "w-full justify-start py-4" : "w-auto"
                  } ${
                    isActive
                      ? "text-secondary font-bold"
                      : "text-white/90 hover:text-white"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}

            {isOpen && (
              <Link
                to="/packages"
                className="mt-4 w-full py-4 bg-primary text-white text-center rounded-xl font-bold uppercase text-[10px] tracking-widest active:scale-95 transition-transform"
              >
                {t("Make an Inquiry")}
              </Link>
            )}
          </div>

          <div className="hidden lg:flex items-center justify-end z-40 lg:flex-none">
            <Link
              to="/packages"
              onClick={() =>
                (window.location.href = "https://wa.me/9779707921000")
              }
              className="px-5 py-2.5 bg-primary hover:bg-primary/90 text-white rounded-full text-[10px] font-black uppercase tracking-widest transition-all shadow-lg shadow-primary/20 active:scale-95"
            >
              {t("Make an Inquiry")}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;