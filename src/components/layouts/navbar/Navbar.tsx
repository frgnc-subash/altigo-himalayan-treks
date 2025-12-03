import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar: React.FC = () => {
  const navItems = [
    { label: "Explore", path: "/" },
    { label: "Tour & Activities", path: "/tour&activities" },
    { label: "Plan a Trip", path: "/plan-trips" },
    { label: "Packages", path: "/packages" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed top-4 inset-x-4 z-50 max-w-7xl mx-auto flex items-center px-6 py-3 bg-white/70 backdrop-blur-md border border-white/40 shadow-lg shadow-black/5 rounded-2xl transition-all duration-300">
      {/* Logo Section */}
      <div className="flex items-center flex-1">
        <Link to="/">
          <img
            src="/assets/logo.png"
            alt="Mount Treks Logo"
            className="h-14 w-auto cursor-pointer"
          />
        </Link>
      </div>

      <div className="flex gap-1 items-center justify-center">
        {navItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            className={({ isActive }) =>
              `cursor-pointer transition-all duration-200 font-bold text-sm tracking-wide px-5 py-2.5 rounded-xl flex items-center
              ${
                isActive
                  ? "text-black bg-white/50 shadow-sm border border-white/50" // Active state also gets a mini-glass effect
                  : "text-zinc-700 hover:text-black hover:bg-white/40"
              }`
            }
          >
            {item.label}
          </NavLink>
        ))}
      </div>

      <div className="flex items-center justify-end gap-5 flex-1">
        <button className="text-xs font-extrabold text-zinc-800 hover:text-black transition-colors px-2 uppercase tracking-wide">
          Log in
        </button>

        <button className="rounded-full bg-black/90 text-white px-6 py-2.5 text-xs font-bold shadow-lg hover:bg-black hover:scale-105 transition-all focus:outline-none">
          Sign up
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
