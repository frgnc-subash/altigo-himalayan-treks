import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  FaMapMarkerAlt,
  FaMountain,
  FaClock,
  FaUserFriends,
  FaCheckCircle,
  FaTimesCircle,
  FaChevronDown,
  FaHiking,
  FaPlaneDeparture,
  FaCoffee,
} from "react-icons/fa";
import { packages } from "../../data/packagesInfo";
import FlashCard from "@/components/layouts/cards/FlashCard";

const PackageDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [activeTab, setActiveTab] = useState("overview");

  const pkg = packages.find((p) => p.locationId === id);

  useEffect(() => {
    window.scrollTo(0, 0);

    const handleScroll = () => {
      const sections = ["overview", "itinerary", "costs"];
      // Offset by 150px to account for the sticky header height + some buffer
      const scrollPosition = window.scrollY + 150;

      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          return (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          );
        }
        return false;
      });

      if (current) setActiveTab(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!pkg) {
    return (
      <div className="min-h-screen bg-[#050505] flex items-center justify-center text-white">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-2">Package Not Found</h2>
          <p className="text-zinc-500">Could not find package with ID: {id}</p>
        </div>
      </div>
    );
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Offset matches the buffer used in handleScroll roughly (sticky header height)
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      setActiveTab(sectionId);
    }
  };

  return (
    <div className="bg-[#050505] min-h-screen font-sans text-zinc-200 selection:bg-blue-600 selection:text-white pb-24 md:pb-20">
      {/* Hero Section */}
      <div className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden group">
        <div className="absolute inset-0 w-full h-full">
          <img
            src={pkg.itinerary[0]?.image}
            alt="Hero"
            className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent" />

        <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 z-10">
          <div className="max-w-7xl mx-auto">
            <div>
              <div className="flex items-center gap-2 text-blue-400 text-xs font-bold uppercase tracking-widest mb-3">
                <FaMapMarkerAlt />
                {pkg.locationId.replace("-", " ")}
              </div>
              <h1 className="text-4xl md:text-7xl font-black text-white uppercase tracking-tighter leading-tight mb-6">
                {pkg.locationId.replace("-", " ")} Expedition
              </h1>

              <div className="flex flex-wrap gap-4 md:gap-6 text-xs md:text-sm font-bold uppercase tracking-wider text-white/90">
                <div className="flex items-center gap-2 bg-white/5 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
                  <FaClock className="text-blue-500" />
                  {pkg.itinerary.length} Days
                </div>
                <div className="flex items-center gap-2 bg-white/5 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
                  <FaMountain className="text-blue-500" />
                  Max Alt: High
                </div>
                <div className="flex items-center gap-2 bg-white/5 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
                  <FaUserFriends className="text-blue-500" />
                  Small Group
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Navbar */}
      <div className="sticky top-0 z-50 bg-[#050505]/95 backdrop-blur-xl border-b border-white/10 shadow-2xl transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex items-center gap-12 overflow-x-auto no-scrollbar scroll-smooth">
            {["overview", "itinerary", "costs"].map((tab) => (
              <button
                key={tab}
                onClick={() => scrollToSection(tab)}
                className={`
                  relative py-6 text-xs font-black uppercase tracking-[0.2em] transition-all duration-300 whitespace-nowrap
                  ${
                    activeTab === tab
                      ? "text-white"
                      : "text-zinc-500 hover:text-zinc-300"
                  }
                `}
              >
                {tab}
                <span
                  className={`
                    absolute bottom-0 left-0 w-full h-[3px] bg-blue-600 shadow-[0_0_10px_rgba(37,99,235,0.8)] rounded-t-full transform transition-transform duration-300 origin-left
                    ${activeTab === tab ? "scale-x-100" : "scale-x-0"}
                  `}
                />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 pt-16">
        <div className="flex flex-col lg:flex-row gap-16 relative">
          <div className="flex-1 space-y-24">
            <section id="overview" className="scroll-mt-40">
              <h3 className="text-3xl font-black text-white uppercase tracking-tighter mb-8 flex items-center gap-4">
                <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-blue-600/10 text-blue-500 text-sm font-bold border border-blue-500/20">
                  01
                </span>
                The Experience
              </h3>
              <div className="prose prose-invert prose-lg max-w-none text-zinc-400 font-light leading-relaxed">
                <p>
                  Embark on a journey through the steep canyons, red cliffs, and
                  ancient walled cities. This package is designed for those who
                  seek the path less traveled, combining cultural immersion with
                  moderate trekking in one of the most preserved regions of the
                  Himalayas.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
                <div className="bg-zinc-900/30 p-6 rounded-3xl border border-white/5 hover:border-blue-500/20 transition-all group">
                  <div className="w-12 h-12 flex items-center justify-center bg-blue-500/10 rounded-2xl text-blue-500 mb-4 group-hover:scale-110 transition-transform">
                    <FaPlaneDeparture size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold uppercase text-sm tracking-wider mb-2">
                      Scenic Flights
                    </h4>
                    <p className="text-xs text-zinc-500 leading-relaxed">
                      Includes round trip domestic flights with mountain views
                      between Pokhara and Jomsom.
                    </p>
                  </div>
                </div>
                <div className="bg-zinc-900/30 p-6 rounded-3xl border border-white/5 hover:border-purple-500/20 transition-all group">
                  <div className="w-12 h-12 flex items-center justify-center bg-purple-500/10 rounded-2xl text-purple-500 mb-4 group-hover:scale-110 transition-transform">
                    <FaCoffee size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold uppercase text-sm tracking-wider mb-2">
                      Premium Lodging
                    </h4>
                    <p className="text-xs text-zinc-500 leading-relaxed">
                      Stay in the best available tea houses with attached
                      bathrooms where available.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section id="itinerary" className="scroll-mt-40">
              <div className="flex items-center justify-between mb-12">
                <h3 className="text-3xl font-black text-white uppercase tracking-tighter flex items-center gap-4">
                  <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-blue-600/10 text-blue-500 text-sm font-bold border border-blue-500/20">
                    02
                  </span>
                  Daily Itinerary
                </h3>
              </div>

              <div className="relative border-l border-dashed border-white/10 ml-5 space-y-8">
                {pkg.itinerary.map((item, i) => (
                  <ItineraryItem key={i} item={item} day={i + 1} />
                ))}
              </div>
            </section>

            <section id="costs" className="scroll-mt-40">
              <h3 className="text-3xl font-black text-white uppercase tracking-tighter mb-12 flex items-center gap-4">
                <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-blue-600/10 text-blue-500 text-sm font-bold border border-blue-500/20">
                  03
                </span>
                Investment
              </h3>

              <div className="grid md:grid-cols-2 gap-6 mb-12">
                <div className="bg-zinc-900/20 rounded-4xl p-8 border border-white/5 relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-32 bg-green-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                  <h4 className="text-green-400 font-black uppercase tracking-widest text-[10px] mb-6 flex items-center gap-2 border-b border-white/5 pb-4">
                    <FaCheckCircle /> Included in Price
                  </h4>
                  <ul className="space-y-4">
                    {[
                      "All Airport Transfers",
                      "3 Nights Hotel in Kathmandu",
                      "Domestic Flights & Taxes",
                      "Guided City Tour",
                      "Permits & TIMS Card",
                      "Guide & Porter Salaries",
                    ].map((inc, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-sm text-zinc-300"
                      >
                        <FaCheckCircle className="text-green-500/40 mt-1 shrink-0 text-[10px]" />
                        {inc}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-zinc-900/20 rounded-4xl p-8 border border-white/5 relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-32 bg-red-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                  <h4 className="text-red-400 font-black uppercase tracking-widest text-[10px] mb-6 flex items-center gap-2 border-b border-white/5 pb-4">
                    <FaTimesCircle /> Excluded from Price
                  </h4>
                  <ul className="space-y-4">
                    {[
                      "International Airfare",
                      "Nepal Entry Visa",
                      "Lunch & Dinner in Kathmandu",
                      "Travel Insurance",
                      "Personal Expenses",
                      "Tips for Staff",
                    ].map((exc, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-sm text-zinc-400"
                      >
                        <FaTimesCircle className="text-red-500/40 mt-1 shrink-0 text-[10px]" />
                        {exc}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-zinc-900/30 border border-white/5 rounded-3xl overflow-hidden backdrop-blur-sm">
                <div className="p-6 border-b border-white/5 bg-white/5">
                  <h4 className="font-bold text-white text-xs uppercase tracking-widest">
                    Estimated On-Trail Costs
                  </h4>
                  <p className="text-[10px] text-zinc-500 mt-1 uppercase tracking-wide">
                    Cash required per person per day
                  </p>
                </div>
                <div className="divide-y divide-white/5">
                  {(
                    pkg.dailyCosts || [
                      {
                        label: "Meals (Breakfast, Lunch, Dinner)",
                        cost: "$25 - $35",
                      },
                      { label: "Hot Showers & Charging", cost: "$5 - $10" },
                      { label: "Wi-Fi Cards", cost: "$5" },
                    ]
                  ).map((cost, i) => (
                    <div
                      key={i}
                      className="flex justify-between items-center p-5 px-6 hover:bg-white/5 transition-colors"
                    >
                      <span className="text-sm text-zinc-400">
                        {cost.label}
                      </span>
                      <span className="text-sm text-white font-mono font-bold">
                        {cost.cost}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>

          <div className="hidden lg:block w-80 xl:w-96 shrink-0 relative">
            <div className="sticky top-32 space-y-6">
              <FlashCard price={pkg.totalBaseCost} />

              <div className="p-6 rounded-3xl bg-blue-600/10 border border-blue-600/20 text-center">
                <p className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-2">
                  Need Customization?
                </p>
                <p className="text-zinc-400 text-sm mb-4">
                  We can tailor this itinerary to your fitness level and time.
                </p>
                <button
                  onClick={() => window.open("/contact", "_blank")}
                  className="text-white text-xs font-bold uppercase tracking-widest hover:text-blue-400 transition-colors"
                >
                  Contact Specialist &rarr;
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 w-full bg-[#050505]/80 backdrop-blur-xl border-t border-white/10 p-4 px-6 lg:hidden z-50 pb-8">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-[9px] text-zinc-500 uppercase tracking-widest font-bold mb-1">
              Starting From
            </p>
            <p className="text-xl font-bold text-white font-mono">
              {pkg.totalBaseCost}
            </p>
          </div>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-black uppercase tracking-widest text-[10px] shadow-lg shadow-blue-600/20 hover:bg-blue-500 transition-colors">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ItineraryItem = ({ item, day }: { item: any; day: number }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative pl-8 md:pl-12">
      <div
        className={`absolute -left-1.5 top-6 w-3 h-3 rounded-full border-2 transition-all duration-500 bg-[#050505] z-10 ${
          isOpen
            ? "border-blue-500 shadow-[0_0_15px_rgba(59,130,246,1)] scale-125"
            : "border-zinc-700"
        }`}
      />

      <div
        onClick={() => setIsOpen(!isOpen)}
        className={`
          cursor-pointer group relative overflow-hidden rounded-3xl border transition-all duration-500
          ${
            isOpen
              ? "bg-zinc-900 border-blue-500/30"
              : "bg-zinc-900/20 border-white/5 hover:border-white/10 hover:bg-zinc-900/40"
          }
        `}
      >
        <div className="p-6 md:p-8 flex items-center justify-between">
          <div>
            <span className="block text-[10px] font-black text-blue-500 uppercase tracking-widest mb-1">
              Day {day < 10 ? `0${day}` : day}
            </span>
            <h4
              className={`text-lg md:text-xl font-bold transition-colors ${
                isOpen ? "text-white" : "text-zinc-300 group-hover:text-white"
              }`}
            >
              {item.title}
            </h4>
          </div>
          <span
            className={`w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-zinc-500 transition-all duration-500 ${
              isOpen
                ? "rotate-180 bg-white/10 text-white"
                : "group-hover:bg-white/5"
            }`}
          >
            <FaChevronDown size={10} />
          </span>
        </div>

        <div
          className={`grid transition-[grid-template-rows] duration-500 ease-in-out ${
            isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
          }`}
        >
          <div className="overflow-hidden">
            <div className="px-6 pb-8 md:px-8">
              <div className="aspect-21/9 w-full rounded-2xl overflow-hidden mb-6 border border-white/5 shadow-2xl">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-[2s]"
                />
              </div>
              <p className="text-sm md:text-base text-zinc-400 leading-relaxed mb-6 font-light">
                {item.desc ||
                  "The journey begins with a scenic drive or flight, followed by a trek through lush forests and traditional villages, offering stunning views of the Himalayan giants."}
              </p>

              <div className="flex flex-wrap gap-3 pt-4 border-t border-white/5">
                <span className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-zinc-400 bg-black/20 px-3 py-2 rounded-lg border border-white/5">
                  <FaHiking className="text-blue-500" /> 5-6 Hours Trek
                </span>
                <span className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-zinc-400 bg-black/20 px-3 py-2 rounded-lg border border-white/5">
                  <FaMountain className="text-blue-500" /> Max Altitude 3,400m
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageDetails;