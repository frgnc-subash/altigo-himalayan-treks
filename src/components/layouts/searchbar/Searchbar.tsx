import React, { useState, useRef, useEffect } from "react";
import {
  FaSearch,
  FaHistory,
  FaTimes,
  FaMapMarkerAlt,
  FaArrowRight,
  FaMountain,
} from "react-icons/fa";

interface SearchbarProps {
  containerClassName?: string;
}

const HighlightText = ({
  text,
  highlight,
}: {
  text: string;
  highlight: string;
}) => {
  if (!highlight.trim()) return <span>{text}</span>;
  const parts = text.split(new RegExp(`(${highlight})`, "gi"));
  return (
    <span>
      {parts.map((part, i) =>
        part.toLowerCase() === highlight.toLowerCase() ? (
          <strong
            key={i}
            className="text-black font-extrabold underline decoration-2 decoration-gray-400/50 underline-offset-2"
          >
            {part}
          </strong>
        ) : (
          <span key={i} className="text-gray-700">
            {part}
          </span>
        )
      )}
    </span>
  );
};

const Searchbar: React.FC<SearchbarProps> = ({ containerClassName }) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<string[]>([]);
  const [recent, setRecent] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const inputRef = useRef<HTMLInputElement>(null);

  const featuredPlaces = ["Illam", "Pokhara", "Kathmandu", "Everest Base Camp"];
  const items = [
    "Home",
    "About Us",
    "Services",
    "Contact",
    "Blog",
    "Careers",
    "Pricing",
    "FAQ",
    "Kathmandu Valley",
    "Annapurna Trek",
    "Mount Everest",
    "Langtang Region",
    "Mustang Expedition",
  ];

  useEffect(() => {
    const stored = localStorage.getItem("recentSearches");
    if (stored) setRecent(JSON.parse(stored));
  }, []);

  useEffect(() => {
    setSelectedIndex(-1);
  }, [query, isOpen]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const addToRecent = (item: string) => {
    const updated = [item, ...recent.filter((r) => r !== item)].slice(0, 5);
    setRecent(updated);
    localStorage.setItem("recentSearches", JSON.stringify(updated));
  };

  const handleSearch = (value: string) => {
    setQuery(value);
    if (!value.trim()) {
      setResults([]);
      return;
    }
    const filtered = items.filter((item) =>
      item.toLowerCase().includes(value.toLowerCase())
    );
    setResults(filtered);
  };

  const handleSelect = (item: string) => {
    setQuery(item);
    addToRecent(item);
    setIsOpen(false);
    setQuery("");
    console.log(`Navigating to: ${item}`);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isOpen) return;

    let activeList: string[] = [];
    if (!query) activeList = [...recent, ...featuredPlaces];
    else activeList = results;

    if (activeList.length === 0) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev < activeList.length - 1 ? prev + 1 : 0));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev > 0 ? prev - 1 : activeList.length - 1));
    } else if (e.key === "Enter" && selectedIndex >= 0) {
      e.preventDefault();
      handleSelect(activeList[selectedIndex]);
    } else if (e.key === "Escape") {
      setIsOpen(false);
    }
  };

  const removeRecent = (e: React.MouseEvent, item: string) => {
    e.stopPropagation();
    const updated = recent.filter((r) => r !== item);
    setRecent(updated);
    localStorage.setItem("recentSearches", JSON.stringify(updated));
  };

  const clearAllRecent = () => {
    setRecent([]);
    localStorage.removeItem("recentSearches");
  };

  return (
    <>
      {/* 
        TRIGGER BUTTON (Hero Section)
        Updates: 
        - bg-white/60: Semi-transparent
        - backdrop-blur-md: Frosted glass
        - border-white/40: Light edge highlight
      */}
      <div
        className={`relative z-10 w-full ${
          containerClassName ?? "max-w-2xl"
        } mx-auto font-sans`}
      >
        <div
          className="w-full bg-white/60 backdrop-blur-md border border-white/40 hover:bg-white/80 hover:border-white/60 hover:shadow-2xl hover:shadow-black/10
            transition-all duration-300 rounded-full px-5 py-3.5 flex items-center cursor-pointer group"
          onClick={() => setIsOpen(true)}
        >
          <FaSearch className="text-gray-600 group-hover:text-black mr-3 transition-colors duration-300" />
          <span className="text-gray-700 group-hover:text-black transition-colors duration-300 select-none flex-1 font-medium">
            Find your destination...
          </span>
          <div className="bg-white/50 rounded px-2 py-1 text-xs text-gray-600 font-bold border border-white/30 group-hover:border-gray-400 group-hover:text-gray-800 transition-all">
            CMD+K
          </div>
        </div>
      </div>

      {/* 
        MODAL (Popup)
        Updates:
        - bg-white/90: Slightly less transparent so text is readable
        - backdrop-blur-xl: Heavy blur for focus
      */}
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          
          {/* Darker backdrop for focus */}
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" 
            onClick={() => setIsOpen(false)}
          />

          <div className="relative w-full max-w-2xl bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl overflow-hidden border border-white/20 ring-1 ring-black/5 animate-fade-in-up">
            
            {/* Header */}
            <div className="relative border-b border-gray-200/60 bg-white/40">
              <FaSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-800 text-lg" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => handleSearch(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Search treks, peaks, or guides..."
                className="w-full pl-14 pr-10 py-5 text-lg text-black placeholder-gray-500 focus:outline-none bg-transparent font-medium"
              />
              <button
                onClick={() => {
                  if (query) {
                    setQuery("");
                    setResults([]);
                    inputRef.current?.focus();
                  } else {
                    setIsOpen(false);
                  }
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-black p-2 transition-colors rounded-full hover:bg-black/5"
              >
                <FaTimes />
              </button>
            </div>

            {/* Content Area */}
            <div className="max-h-[60vh] overflow-y-auto py-2 custom-scrollbar bg-white/10">
              {!query && (
                <>
                  {recent.length > 0 && (
                    <div className="mb-2">
                      <div className="flex justify-between items-center px-5 py-2">
                        <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest">
                          Recent Trails
                        </h4>
                        <button
                          onClick={clearAllRecent}
                          className="text-[10px] font-bold text-gray-400 hover:text-black transition-colors uppercase tracking-wide"
                        >
                          Clear All
                        </button>
                      </div>

                      {recent.map((item, index) => (
                        <div
                          key={item}
                          onClick={() => handleSelect(item)}
                          className={`px-5 py-3 flex items-center justify-between cursor-pointer group transition-all duration-200
                              ${
                                selectedIndex === index
                                  ? "bg-black/5 border-l-4 border-black pl-4"
                                  : "hover:bg-black/5 border-l-4 border-transparent"
                              }`}
                        >
                          <div className="flex items-center gap-4">
                            <FaHistory
                              className={`text-sm ${
                                selectedIndex === index
                                  ? "text-black"
                                  : "text-gray-400"
                              }`}
                            />
                            <span className="text-gray-800 text-sm font-medium group-hover:text-black">
                              {item}
                            </span>
                          </div>
                          <button
                            onClick={(e) => removeRecent(e, item)}
                            className="text-gray-400 hover:text-black opacity-0 group-hover:opacity-100 transition-all p-1"
                          >
                            <FaTimes size={12} />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}

                  <div>
                    <h4 className="px-5 py-2 text-xs font-bold text-gray-500 uppercase tracking-widest mt-2">
                      Featured Peaks
                    </h4>
                    {featuredPlaces.map((place, index) => {
                      const actualIndex = recent.length + index;
                      return (
                        <div
                          key={place}
                          onClick={() => handleSelect(place)}
                          className={`px-5 py-3 flex items-center cursor-pointer transition-all duration-200
                              ${
                                selectedIndex === actualIndex
                                  ? "bg-black/5 border-l-4 border-black pl-4"
                                  : "hover:bg-black/5 border-l-4 border-transparent"
                              }`}
                        >
                          <div
                            className={`w-8 h-8 rounded-full flex items-center justify-center mr-4 transition-colors
                              ${
                                selectedIndex === actualIndex
                                  ? "bg-black text-white"
                                  : "bg-white/70 text-gray-600 shadow-sm"
                              }`}
                          >
                            <FaMountain size={12} />
                          </div>
                          <span className="text-gray-800 text-sm font-semibold">
                            {place}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </>
              )}

              {/* Search Results */}
              {query && results.length > 0 && (
                <ul>
                  {results.map((item, index) => (
                    <li
                      key={index}
                      onClick={() => handleSelect(item)}
                      className={`px-5 py-3.5 flex items-center cursor-pointer border-l-4 transition-all duration-150
                          ${
                            selectedIndex === index
                              ? "bg-black/5 border-black pl-4"
                              : "border-transparent hover:bg-black/5"
                          }`}
                    >
                      <div
                        className={`mr-4 ${
                          selectedIndex === index
                            ? "text-black"
                            : "text-gray-400"
                        }`}
                      >
                        {featuredPlaces.includes(item) ? (
                          <FaMapMarkerAlt />
                        ) : (
                          <FaArrowRight size={12} />
                        )}
                      </div>
                      <div className="text-sm">
                        <HighlightText text={item} highlight={query} />
                      </div>
                    </li>
                  ))}
                </ul>
              )}

              {/* No Results */}
              {query && results.length === 0 && (
                <div className="px-4 py-12 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/50 mb-4">
                    <FaSearch className="text-gray-400 text-xl" />
                  </div>
                  <p className="text-gray-900 font-medium">
                    No results found
                  </p>
                  <p className="text-gray-500 text-sm mt-1">
                    We couldn't find "{query}" on our map.
                  </p>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="bg-white/40 px-5 py-3 border-t border-gray-200/50 flex justify-between items-center text-[10px] md:text-xs text-gray-500 uppercase tracking-wide">
              <span className="font-semibold">Mount Treks Search</span>
              <div className="flex items-center gap-3 sm:flex">
                <span className="flex items-center gap-1">
                  <kbd className="font-sans bg-white/60 border border-gray-300/50 rounded px-1.5 py-0.5 shadow-sm text-gray-700 font-bold">
                    ↑
                  </kbd>
                  <kbd className="font-sans bg-white/60 border border-gray-300/50 rounded px-1.5 py-0.5 shadow-sm text-gray-700 font-bold">
                    ↓
                  </kbd>
                  <span>navigate</span>
                </span>
                <span className="flex items-center gap-1">
                  <kbd className="font-sans bg-white/60 border border-gray-300/50 rounded px-1.5 py-0.5 shadow-sm text-gray-700 font-bold">
                    ↵
                  </kbd>
                  <span>select</span>
                </span>
                <span className="flex items-center gap-1">
                  <kbd className="font-sans bg-white/60 border border-gray-300/50 rounded px-1.5 py-0.5 shadow-sm text-gray-700 font-bold">
                    esc
                  </kbd>
                  <span>close</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Searchbar;