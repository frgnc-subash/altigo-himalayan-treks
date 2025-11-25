import React from "react";
import { motion } from "framer-motion";

const Navbar: React.FC = () => {
  const navItems = [
    { label: "Explore" },
    { label: "Tour & Activities" },
    { label: "Plan My Trip" },
    { label: "Packages" },
    { label: "Contact" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: "spring",
        stiffness: 60,
        damping: 12,
        duration: 0.8,
      }}
    >
      <nav className="flex items-center m-4 px-6 py-3 bg-white border border-gray-200 shadow-md rounded-xl">
        <div className="flex items-center flex-1">
          <img
            src="/assets/logo.png"
            alt="Mount Treks Logo"
            className="h-14 w-auto cursor-pointer"
          />
        </div>

        <div className="flex gap-1 items-center justify-center">
          {navItems.map((item, index) => (
            <span
              key={index}
              className="cursor-pointer text-zinc-800 hover:text-black hover:bg-zinc-100 transition-colors duration-200 font-bold text-sm tracking-wide px-5 py-2.5 rounded-lg flex items-center"
            >
              {item.label}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-end gap-5 flex-1">
          <button className="text-xs font-extrabold text-zinc-950 hover:text-zinc-600 transition-colors px-2 uppercase tracking-wide">
            Log in
          </button>

          <button className="rounded-full bg-black text-white px-6 py-2.5 text-xs font-bold shadow-lg shadow-zinc-200 hover:bg-zinc-800 hover:shadow-xl transition-all transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-zinc-400">
            Sign up
          </button>
        </div>
      </nav>
    </motion.div>
  );
};

export default Navbar;
