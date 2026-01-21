import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logoImg from "@/assets/logo.webp";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Explore", path: "/" },
    { label: "Packages", path: "/packages" },
    { label: "Plan a Trip", path: "/plan-trips" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed top-4 inset-x-4 z-50 max-w-7xl mx-auto flex flex-col md:flex-row md:items-center px-6 py-2 bg-white/70 backdrop-blur-md border border-white/40 shadow-lg shadow-black/5 rounded-2xl transition-all duration-300">
      <div className="flex items-center justify-between flex-1">
        <Link to="/">
          <img
            src={logoImg}
            alt="Mount Treks Logo"
            className="h-11 w-auto cursor-pointer"
          />
        </Link>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-zinc-800 focus:outline-none"
        >
          {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
      </div>

      <div
        className={`${isOpen ? "flex" : "hidden"} md:flex flex-col md:flex-row gap-4 md:gap-1 items-center justify-center mt-4 md:mt-0 w-full md:w-auto`}
      >
        {navItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `cursor-pointer transition-colors duration-200 text-sm tracking-wide px-3 py-2 rounded-xl flex items-center
              ${
                isActive
                  ? "font-semibold text-black"
                  : "font-medium text-zinc-800 hover:text-black"
              }`
            }
          >
            {item.label}
          </NavLink>
        ))}

        <div className="flex md:hidden flex-col gap-3 mt-2 w-full items-center">
          <Link
            className="text-xs font-bold text-zinc-800 hover:text-black transition-colors px-2 uppercase tracking-wide"
            to={"/login"}
            onClick={() => setIsOpen(false)}
          >
            Log in
          </Link>

          <Link
            className="rounded-full bg-black/90 text-white px-6 py-2.5 text-xs font-bold shadow-lg hover:bg-black hover:scale-105 transition-all focus:outline-none w-full text-center"
            to={"/signup"}
            onClick={() => setIsOpen(false)}
          >
            Sign up
          </Link>
        </div>
      </div>

      <div className="hidden md:flex items-center justify-end gap-5 flex-1">
        <Link
          className="text-xs font-bold text-zinc-800 hover:text-black transition-colors px-2 uppercase tracking-wide"
          to={"/login"}
        >
          Log in
        </Link>

        <Link
          className="rounded-full bg-black/90 text-white px-6 py-2.5 text-xs font-bold shadow-lg hover:bg-black hover:scale-105 transition-all focus:outline-none"
          to={"/signup"}
        >
          Sign up
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
