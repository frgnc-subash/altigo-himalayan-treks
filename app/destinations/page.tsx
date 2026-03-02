"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  Mountain,
  MapPin,
  Clock3,
  ArrowRight,
  Search,
  RotateCcw,
  SlidersHorizontal,
  ChevronDown,
  Check,
  Heart,
} from "lucide-react";
import DestinationMap from "@/components/destination-map-client";
import { destinations } from "@/lib/destinations-data";

type DropdownOption = {
  value: string;
  label: string;
};

function FilterDropdown({
  value,
  onChange,
  options,
  placeholder,
}: {
  value: string;
  onChange: (value: string) => void;
  options: DropdownOption[];
  placeholder: string;
}) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selected = options.find((opt) => opt.value === value);

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="h-12 w-full rounded-lg border-0 bg-[#060607] px-3 pr-10 text-left text-sm text-zinc-100 outline-none shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] transition hover:bg-[#101012] focus-visible:bg-[#101012] focus-visible:shadow-[0_0_0_2px_rgba(255,255,255,0.18)]"
      >
        <span className={selected ? "text-zinc-100" : "text-zinc-500"}>
          {selected?.label || placeholder}
        </span>
        <ChevronDown
          className={`pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500 transition ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && (
        <div className="absolute left-0 right-0 top-[calc(100%+8px)] z-[140] overflow-hidden rounded-xl bg-[#0a0a0c] p-1 shadow-[0_16px_34px_rgba(0,0,0,0.55)]">
          <div className="max-h-56 overflow-auto">
            {options.map((opt) => {
              const isSelected = opt.value === value;
              return (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => {
                    onChange(opt.value);
                    setOpen(false);
                  }}
                  className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-sm transition ${
                    isSelected ? "bg-white/[0.12] text-white" : "text-zinc-200 hover:bg-white/[0.06]"
                  }`}
                >
                  <span>{opt.label}</span>
                  {isSelected && <Check className="h-4 w-4" />}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default function DestinationsPage() {
  const [query, setQuery] = useState("");
  const [difficulty, setDifficulty] = useState("all");
  const [season, setSeason] = useState("all");
  const [favoritesOnly, setFavoritesOnly] = useState(false);
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    try {
      const stored = localStorage.getItem("altigo-favorite-destinations");
      if (!stored) return;
      const parsed = JSON.parse(stored);
      if (Array.isArray(parsed)) {
        setFavorites(parsed.filter((item) => typeof item === "string"));
      }
    } catch {
      // Ignore malformed storage values.
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("altigo-favorite-destinations", JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (id: string) => {
    setFavorites((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]));
  };

  const filteredDestinations = useMemo(() => {
    return destinations.filter((item) => {
      const matchesQuery =
        item.name.toLowerCase().includes(query.toLowerCase()) ||
        item.region.toLowerCase().includes(query.toLowerCase());
      const matchesDifficulty =
        difficulty === "all" ||
        item.difficulty.toLowerCase().includes(difficulty.toLowerCase());
      const matchesSeason =
        season === "all" ||
        item.bestSeason.toLowerCase().includes(season.toLowerCase());
      const matchesFavorites = !favoritesOnly || favorites.includes(item.id);

      return matchesQuery && matchesDifficulty && matchesSeason && matchesFavorites;
    });
  }, [query, difficulty, season, favoritesOnly, favorites]);
  const hasActiveFilters =
    Boolean(query.trim()) || difficulty !== "all" || season !== "all" || favoritesOnly;

  const resetFilters = () => {
    setQuery("");
    setDifficulty("all");
    setSeason("all");
    setFavoritesOnly(false);
  };

  return (
    <main className="bg-background text-foreground">
      <section className="mx-auto w-full max-w-7xl px-5 pb-16 pt-0 sm:px-8">
        <div className="relative left-1/2 w-[110vw] -translate-x-1/2">
          <DestinationMap
            locations={hasActiveFilters ? filteredDestinations : destinations}
            className="h-[68vh] min-h-[440px] w-full rounded-none border-0 shadow-none"
          />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-background via-background/70 to-transparent blur-md" />
        </div>

        <div className="relative z-[120] mt-7 rounded-2xl bg-card/45 p-5 shadow-[0_12px_28px_rgba(0,0,0,0.28)] backdrop-blur-sm">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
            <div className="inline-flex items-center gap-2 text-sm font-medium text-foreground">
              <SlidersHorizontal size={16} className="text-primary" />
              Refine Destinations
            </div>
            <div className="inline-flex items-center gap-3">
              <p className="text-xs text-muted-foreground">
                Showing {filteredDestinations.length} of {destinations.length}
              </p>
              <button
                type="button"
                onClick={() => setFavoritesOnly((prev) => !prev)}
                className={`inline-flex h-8 items-center justify-center gap-1.5 rounded-md px-3 text-xs font-medium transition ${
                  favoritesOnly
                    ? "bg-white/[0.12] text-white"
                    : "text-muted-foreground ring-1 ring-white/12 hover:text-foreground"
                }`}
              >
                <Heart className={`h-3.5 w-3.5 ${favoritesOnly ? "fill-white" : ""}`} />
                Favorites {favorites.length ? `(${favorites.length})` : ""}
              </button>
              <button
                type="button"
                onClick={resetFilters}
                className="inline-flex h-8 items-center justify-center gap-1.5 rounded-md px-3 text-xs font-medium text-muted-foreground ring-1 ring-white/12 hover:text-foreground"
              >
                <RotateCcw size={12} />
                Clear
              </button>
            </div>
          </div>

          <div className="grid gap-3 lg:grid-cols-[1.8fr_1fr_1fr]">
            <label className="block">
              <span className="mb-1.5 block text-xs font-medium text-muted-foreground">
                Search
              </span>
              <div className="group relative">
                <div className="pointer-events-none absolute inset-0 rounded-xl bg-white/[0.05] opacity-0 blur-sm transition-opacity duration-300 group-focus-within:opacity-100" />
                <Search className="pointer-events-none absolute left-3 top-1/2 z-10 h-4 w-4 -translate-y-1/2 text-zinc-500 transition-colors group-focus-within:text-zinc-300" />
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search Everest, Annapurna, Khumbu..."
                  className="relative h-12 w-full rounded-xl border-0 bg-[#060607] pl-10 pr-10 text-sm text-zinc-100 shadow-[inset_0_1px_0_rgba(255,255,255,0.03),0_10px_22px_rgba(0,0,0,0.3)] outline-none transition-all placeholder:text-zinc-500 focus:bg-[#101012] focus:shadow-[0_0_0_2px_rgba(255,255,255,0.18)]"
                />
                {query && (
                  <button
                    type="button"
                    onClick={() => setQuery("")}
                    aria-label="Clear search"
                    className="absolute right-2 top-1/2 z-10 inline-flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full border-0 bg-white/[0.08] text-sm text-zinc-300 transition hover:bg-white/[0.14] hover:text-white"
                  >
                    ×
                  </button>
                )}
              </div>
            </label>

            <label className="block">
              <span className="mb-1.5 block text-xs font-medium text-muted-foreground">
                Difficulty
              </span>
              <FilterDropdown
                value={difficulty}
                onChange={setDifficulty}
                placeholder="All Difficulties"
                options={[
                  { value: "all", label: "All Difficulties" },
                  { value: "moderate", label: "Moderate" },
                  { value: "challenging", label: "Challenging" },
                ]}
              />
            </label>

            <label className="block">
              <span className="mb-1.5 block text-xs font-medium text-muted-foreground">
                Season
              </span>
              <FilterDropdown
                value={season}
                onChange={setSeason}
                placeholder="All Seasons"
                options={[
                  { value: "all", label: "All Seasons" },
                  { value: "mar", label: "Spring (Mar-May)" },
                  { value: "oct", label: "Autumn (Oct-Nov)" },
                  { value: "sep", label: "Late Monsoon / Autumn (Sep-Nov)" },
                ]}
              />
            </label>
          </div>
        </div>

        <div className="mt-8 space-y-5">
          {filteredDestinations.map((item) => (
            <article
              key={item.id}
              className="overflow-hidden rounded-2xl bg-card/35 shadow-[0_14px_34px_rgba(0,0,0,0.25)]"
            >
              <div className="grid md:grid-cols-[1.2fr_1fr]">
                <div className="flex h-full flex-col p-4 sm:p-5">
                  <div className="mb-2 flex items-center gap-2">
                    <h2 className="text-xl font-semibold">{item.name}</h2>
                    <span className="inline-flex max-w-full items-center rounded-md bg-primary/12 px-2 py-1 text-[10px] leading-tight font-medium text-primary sm:whitespace-nowrap">
                      {item.difficulty}
                    </span>
                    <button
                      type="button"
                      onClick={() => toggleFavorite(item.id)}
                      aria-label={favorites.includes(item.id) ? "Remove favorite" : "Add favorite"}
                      className={`ml-auto inline-flex h-8 w-8 items-center justify-center rounded-full transition ${
                        favorites.includes(item.id)
                          ? "bg-white/[0.12] text-white"
                          : "bg-white/[0.05] text-zinc-400 hover:bg-white/[0.1] hover:text-zinc-200"
                      }`}
                    >
                      <Heart
                        className={`h-4 w-4 ${favorites.includes(item.id) ? "fill-white" : ""}`}
                      />
                    </button>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {item.desc}
                  </p>

                  <div className="mt-3 grid gap-2 text-sm text-muted-foreground sm:grid-cols-2">
                    <p className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary" />
                      {item.region}
                    </p>
                    <p className="flex items-center gap-2">
                      <Clock3 className="h-4 w-4 text-primary" />
                      {item.duration}
                    </p>
                    <p className="flex items-center gap-2 sm:col-span-2">
                      <Mountain className="h-4 w-4 text-primary" />
                      Max elevation: {item.elevation}
                    </p>
                  </div>

                  <div className="mt-auto pt-4">
                    <Link
                      href={`/destinations/${item.id}`}
                      className="inline-flex h-10 items-center justify-center gap-1 rounded-lg bg-primary px-4 text-sm font-medium text-primary-foreground hover:bg-primary/90"
                    >
                      View Info
                      <ArrowRight size={13} />
                    </Link>
                  </div>
                </div>

                <div className="relative h-44 md:h-[250px]">
                  <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  <p className="absolute bottom-3 left-3 text-sm font-semibold text-white">
                    {item.name}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {filteredDestinations.length === 0 && (
          <div className="mt-6 rounded-xl bg-card/35 p-5 text-sm text-muted-foreground shadow-[0_12px_30px_rgba(0,0,0,0.2)]">
            No destinations matched your filters. Try adjusting search, season, or difficulty.
          </div>
        )}
      </section>
    </main>
  );
}
