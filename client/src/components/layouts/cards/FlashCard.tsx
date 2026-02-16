import React from "react";
import { motion } from "framer-motion";
import { FaTag, FaCheck, FaWhatsapp } from "react-icons/fa";

// 1. Update interface to accept string OR number
interface FlashCardProps {
  price: string | number;
  phoneNumber?: string;
}

const FlashCard: React.FC<FlashCardProps> = ({
  price,
  phoneNumber = "9779707921000",
}) => {
  // 2. Format the price logic here
  const formattedPrice =
    typeof price === "number" ? `$${price.toLocaleString()}` : price;

  const features = [
    "Expert Local Sherpa Guide",
    "All TIMS & ACAP Permits",
    "Premium Teahouse Stays",
    "Private Jeep Transfers",
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.2 }}
      className="w-full lg:w-[380px] shrink-0"
    >
      <div className="p-1 rounded-3xl bg-gradient-to-b from-white/10 to-white/0">
        <div className="bg-[#0a0a0a] rounded-[22px] p-6 lg:p-8 border border-white/5 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 blur-[50px] rounded-full pointer-events-none" />

          <div className="relative z-10">
            <div className="flex justify-between items-start mb-6">
              <div>
                <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-1">
                  Total Package
                </p>
                <h3 className="text-3xl font-black text-white tracking-tight">
                  {/* 3. Use the formatted price variable */}
                  {formattedPrice || "Inquire"}
                </h3>
              </div>
              <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-600/20">
                <FaTag size={14} />
              </div>
            </div>

            {/* ... rest of the code remains the same ... */}

            <div className="space-y-4 mb-8">
              {features.map((feature, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-4 h-4 rounded-full bg-zinc-800 flex items-center justify-center border border-white/10 text-blue-500 shrink-0">
                    <FaCheck size={8} />
                  </div>
                  <span className="text-xs text-zinc-300 font-medium">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            <button
              onClick={() =>
                (window.location.href = `https://wa.me/${phoneNumber}`)
              }
              className="w-full py-4 bg-white hover:bg-blue-600 text-black hover:text-white transition-all duration-300 rounded-xl font-black uppercase text-[10px] tracking-[0.2em] flex items-center justify-center gap-2 group shadow-lg cursor-pointer"
            >
              <FaWhatsapp
                size={14}
                className="group-hover:scale-110 transition-transform"
              />
              Book This Trip
            </button>

            <p className="text-[9px] text-zinc-600 text-center mt-4 font-medium">
              Best Price Guaranteed • 24/7 Support
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default FlashCard;
