import React, { useState, useRef, useEffect } from "react";
import {
  FaSearch,
  FaHistory,
  FaTimes,
  FaArrowRight,
  FaMountain,
} from "react-icons/fa";

interface SearchbarProps {
  containerClassName?: string;
  isInline?: boolean; // New prop
  onSearch?: (query: string) => void; // Callback for the Destinations page
}

const HighlightText = ({
  text,
  highlight,
}: {
  text: string;
  highlight: string;
}) => {
  if (!highlight.trim()) return <span className="text-zinc-400">{text}</span>;
  const parts = text.split(new RegExp(`(${highlight})`, "gi"));
  return (
    <span>
      {parts.map((part, i) =>
        part.toLowerCase() === highlight.toLowerCase() ? (
          <strong
            key={i}
            className="text-blue-500 font-extrabold underline underline-offset-2"
          >
            {part}
          </strong>
        ) : (
          <span key={i} className="text-zinc-400">
            {part}
          </span>
        ),
      )}
    </span>
  );
};

const Searchbar: React.FC<SearchbarProps> = ({
  containerClassName,
  onSearch,
}) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<string[]>([]);
  const [recent, setRecent] = useState<string[]>([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const featuredPlaces = [
    "Upper Mustang",
    "Everest Base Camp",
    "Annapurna Circuit",
  ];
  const items = [
    "Kathmandu Valley",
    "Annapurna Trek",
    "Mount Everest",
    "Langtang Region",
    "Mustang Expedition",
    "Chitwan National Park",
    "Lumbini",
  ];

  useEffect(() => {
    const stored = localStorage.getItem("recentSearches");
    if (stored) {
      const parsed = JSON.parse(stored);
      setRecent(Array.isArray(parsed) ? parsed.slice(0, 5) : []);
    }

    // Close dropdown when clicking outside
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const addToRecent = (item: string) => {
    const updated = [item, ...recent.filter((r) => r !== item)].slice(0, 5);
    setRecent(updated);
    localStorage.setItem("recentSearches", JSON.stringify(updated));
  };

  const handleSearchChange = (value: string) => {
    setQuery(value);
    onSearch?.(value); // Update the Destinations list
    if (!value.trim()) {
      setResults([]);
      return;
    }
    const filtered = items.filter((item) =>
      item.toLowerCase().includes(value.toLowerCase()),
    );
    setResults(filtered);
    setShowDropdown(true);
  };

  const handleSelect = (item: string) => {
    setQuery(item);
    onSearch?.(item);
    addToRecent(item);
    setShowDropdown(false);
    setSelectedIndex(-1);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    const activeList: string[] = !query
      ? [...recent, ...featuredPlaces]
      : results;
    if (activeList.length === 0) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setShowDropdown(true);
      setSelectedIndex((prev) => (prev < activeList.length - 1 ? prev + 1 : 0));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev > 0 ? prev - 1 : activeList.length - 1));
    } else if (e.key === "Enter" && selectedIndex >= 0) {
      e.preventDefault();
      handleSelect(activeList[selectedIndex]);
    } else if (e.key === "Escape") {
      setShowDropdown(false);
    }
  };

  return (
    <div
      className={`relative ${containerClassName ?? "w-full max-w-md"} mx-auto`}
      ref={dropdownRef}
    >
      {/* INPUT FIELD */}
      <div className="relative group">
        <FaSearch
          className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors ${showDropdown ? "text-blue-500" : "text-zinc-500"}`}
        />
        <input
          ref={inputRef}
          type="text"
          value={query}
          onFocus={() => setShowDropdown(true)}
          onChange={(e) => handleSearchChange(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Search regions (e.g. Everest, Mustang)..."
          className="w-full bg-zinc-900/50 border border-white/10 rounded-full py-3 pl-12 pr-12 text-zinc-200 text-sm focus:outline-none focus:border-blue-500/50 focus:bg-zinc-900 transition-all placeholder:text-zinc-600"
        />
        {query && (
          <button
            onClick={() => {
              setQuery("");
              onSearch?.("");
              setResults([]);
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-white transition-colors"
          >
            <FaTimes size={12} />
          </button>
        )}
      </div>

      {/* DROPDOWN RESULTS (The "Not a Pop-up" Part) */}
      {showDropdown && (
        <div className="absolute top-full left-0 right-0 mt-2 z-100 bg-zinc-900 border border-white/10 rounded-2xl shadow-2xl overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="max-h-75 overflow-y-auto custom-scrollbar py-2">
            {!query ? (
              <>
                {recent.length > 0 && (
                  <div className="mb-2">
                    <h4 className="px-5 py-2 text-[10px] font-bold text-zinc-500 uppercase tracking-widest">
                      Recent
                    </h4>
                    {recent.map((item, index) => (
                      <div
                        key={item}
                        onClick={() => handleSelect(item)}
                        className={`px-5 py-2 flex items-center justify-between cursor-pointer ${selectedIndex === index ? "bg-white/5" : "hover:bg-white/5"}`}
                      >
                        <div className="flex items-center gap-3">
                          <FaHistory className="text-zinc-600 text-xs" />
                          <span className="text-zinc-300 text-sm">{item}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                <div>
                  <h4 className="px-5 py-2 text-[10px] font-bold text-zinc-500 uppercase tracking-widest">
                    Suggested
                  </h4>
                  {featuredPlaces.map((place, index) => (
                    <div
                      key={place}
                      onClick={() => handleSelect(place)}
                      className={`px-5 py-2 flex items-center cursor-pointer ${selectedIndex === recent.length + index ? "bg-white/5" : "hover:bg-white/5"}`}
                    >
                      <FaMountain className="mr-3 text-zinc-600 text-xs" />
                      <span className="text-zinc-300 text-sm font-medium">
                        {place}
                      </span>
                    </div>
                  ))}
                </div>
              </>
            ) : results.length > 0 ? (
              results.map((item, index) => (
                <div
                  key={index}
                  onClick={() => handleSelect(item)}
                  className={`px-5 py-3 flex items-center cursor-pointer ${selectedIndex === index ? "bg-white/5" : "hover:bg-white/5"}`}
                >
                  <FaArrowRight className="mr-3 text-blue-500 text-[10px]" />
                  <HighlightText text={item} highlight={query} />
                </div>
              ))
            ) : (
              <div className="px-5 py-8 text-center text-zinc-500 text-xs">
                No results for "{query}"
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Searchbar;
