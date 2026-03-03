"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  ArrowRight,
  Check,
  ChevronDown,
  Clock3,
  Mountain,
  RotateCcw,
  ShieldCheck,
  SlidersHorizontal,
} from "lucide-react";
import SearchField from "@/components/search-field";
import { trekPackages } from "@/lib/packages-data";

const packageImage: Record<string, string> = {
  "langtang-valley": "/gallery/image8.jpeg",
  "annapurna-circuit": "/abc/8.jpg",
  "annapurna-semi-circuit": "/abc/6.jpg",
  "everest-gokyo-cho-la": "/ebc/8.jpg",
  "lower-dolpo-trek": "/backgrounds/bg9.jpeg",
  "nar-phu-valley-jomsom": "/backgrounds/bg4.jpeg",
  "sacred-valley-ruby-valley": "/backgrounds/bg7.jpeg",
  "everest-base-camp": "/ebc/5.jpg",
  "poon-hill": "/gallery/image7.jpeg",
  "upper-mustang": "/upper-mustang/lomanthang.jpg",
};

const shortText = (text: string, max = 92) =>
  text.length > max ? `${text.slice(0, max).trim()}...` : text;

const parsePrice = (price: string) => Number(price.replace(/[^0-9.]/g, "") || 0);

const packageLowestPrice = (prices: { label: string; price: string }[]) =>
  prices.reduce((min, tier) => {
    const amount = parsePrice(tier.price);
    return min === 0 || amount < min ? amount : min;
  }, 0);

const durationDays = (duration: string) => {
  const match = duration.match(/\d+/);
  return match ? Number(match[0]) : 0;
};
const ICON_STROKE = 2.4;

export default function PackagesPage() {
  const [query, setQuery] = useState("");
  const [sortBy, setSortBy] = useState<"recommended" | "price-low" | "duration-short">(
    "recommended",
  );
  const [sortOpen, setSortOpen] = useState(false);
  const sortRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sortRef.current && !sortRef.current.contains(event.target as Node)) {
        setSortOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const sortOptions = [
    { value: "recommended", label: "Recommended" },
    { value: "price-low", label: "Lowest Price" },
    { value: "duration-short", label: "Shortest Duration" },
  ] as const;
  const selectedSortLabel =
    sortOptions.find((option) => option.value === sortBy)?.label || "Recommended";

  const filteredPackages = useMemo(() => {
    const searched = trekPackages.filter((item) => {
      const q = query.trim().toLowerCase();
      if (!q) return true;
      return (
        item.name.toLowerCase().includes(q) ||
        item.summary.toLowerCase().includes(q) ||
        item.idealFor.toLowerCase().includes(q)
      );
    });

    const sorted = [...searched];
    if (sortBy === "price-low") {
      sorted.sort((a, b) => packageLowestPrice(a.pricing) - packageLowestPrice(b.pricing));
    } else if (sortBy === "duration-short") {
      sorted.sort((a, b) => durationDays(a.duration) - durationDays(b.duration));
    }

    return sorted;
  }, [query, sortBy]);

  const clearFilters = () => {
    setQuery("");
    setSortBy("recommended");
  };

  return (
    <main className="bg-background text-foreground">
      <section className="mx-auto w-full max-w-7xl px-5 pb-16 pt-28 sm:px-8">
        <div>
          <p className="mb-2 text-xs font-semibold tracking-[0.2em] text-primary uppercase">
            Trek Packages
          </p>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Choose Your Trek Package
          </h1>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            Browse package cards first, then open each package to view full
            pricing, itinerary, and all trip details.
          </p>
        </div>

        <div className="mt-7 rounded-2xl bg-card/45 p-4 shadow-[0_12px_28px_rgba(0,0,0,0.22)] sm:p-5">
          <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="inline-flex items-center gap-2 text-sm font-medium text-foreground">
              <SlidersHorizontal size={16} strokeWidth={ICON_STROKE} className="text-primary" />
              Refine Packages
            </div>
            <div className="w-full sm:w-auto">
              <div className="sm:flex sm:justify-end">
                <button
                  type="button"
                  onClick={clearFilters}
                  className="inline-flex h-9 w-full items-center justify-center gap-1.5 rounded-md px-3 text-xs font-medium text-muted-foreground ring-1 ring-white/12 hover:text-foreground sm:h-8 sm:w-auto"
                >
                  <RotateCcw size={12} strokeWidth={ICON_STROKE} />
                  Clear
                </button>
              </div>
            </div>
          </div>

          <div className="grid gap-3 lg:grid-cols-[1.8fr_1fr]">
            <label className="block">
              <span className="mb-1.5 block text-xs font-medium text-muted-foreground">Search</span>
              <SearchField
                value={query}
                onChange={setQuery}
                placeholder="Search by package name, route style, or ideal trekker..."
                ariaLabel="Search packages"
              />
            </label>

            <div>
              <span className="mb-1.5 block text-xs font-medium text-muted-foreground">
                Sort
              </span>
              <div ref={sortRef} className="relative">
                <button
                  type="button"
                  onClick={() => setSortOpen((prev) => !prev)}
                  className="inline-flex h-11 w-full items-center justify-between rounded-lg bg-[#060607] px-3 text-sm font-medium text-zinc-100 transition hover:bg-[#101012] focus-visible:outline-none focus-visible:shadow-[0_0_0_1px_rgba(255,255,255,0.2)]"
                >
                  <span className="inline-flex items-center gap-2">
                    <SlidersHorizontal
                      strokeWidth={ICON_STROKE}
                      className="h-3.5 w-3.5 text-zinc-400"
                    />
                    {selectedSortLabel}
                  </span>
                  <ChevronDown
                    strokeWidth={ICON_STROKE}
                    className={`h-4 w-4 text-zinc-500 transition ${sortOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {sortOpen && (
                  <div className="absolute left-0 right-0 top-[calc(100%+8px)] z-30 overflow-hidden rounded-xl bg-[#0a0a0c] p-1 shadow-[0_16px_34px_rgba(0,0,0,0.55)]">
                    {sortOptions.map((option) => {
                      const active = sortBy === option.value;
                      return (
                        <button
                          key={option.value}
                          type="button"
                          onClick={() => {
                            setSortBy(option.value);
                            setSortOpen(false);
                          }}
                          className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-sm transition ${
                            active ? "bg-white/[0.12] text-white" : "text-zinc-200 hover:bg-white/[0.06]"
                          }`}
                        >
                          {option.label}
                          {active && <Check strokeWidth={ICON_STROKE} className="h-4 w-4" />}
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {filteredPackages.map((item) => (
            <article
              key={item.id}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border-0 bg-card/45 shadow-[0_12px_28px_rgba(0,0,0,0.22)] transition-all hover:-translate-y-1"
            >
              <div className="relative h-48 shrink-0 overflow-hidden">
                <img
                  src={packageImage[item.id] || "/backgrounds/bg8.jpeg"}
                  alt={item.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
              </div>

              <div className="flex flex-1 flex-col p-4">
                <div className="mb-2 flex flex-wrap items-center gap-2">
                  <h2 className="text-xl font-semibold">{item.name}</h2>
                  <span className="inline-flex max-w-full items-center rounded-md bg-primary/15 px-2 py-1 text-[10px] leading-tight font-semibold text-primary sm:whitespace-nowrap">
                    {item.difficulty}
                  </span>
                </div>
                <p className="min-h-[44px] text-sm leading-relaxed text-zinc-200">
                  {shortText(item.summary)}
                </p>

                <div className="mt-3 grid gap-2 text-sm text-zinc-200 sm:grid-cols-2">
                  <p className="flex items-center gap-2">
                    <Clock3 strokeWidth={ICON_STROKE} className="h-4 w-4 text-primary" />
                    {item.duration}
                  </p>
                  <p className="flex items-center gap-2">
                    <Mountain strokeWidth={ICON_STROKE} className="h-4 w-4 text-primary" />
                    {item.altitude}
                  </p>
                  <p className="flex items-center gap-2">
                    <ShieldCheck strokeWidth={ICON_STROKE} className="h-4 w-4 text-primary" />
                    Ideal for: {item.idealFor}
                  </p>
                </div>

                <div className="mt-auto pt-4">
                  <div className="rounded-lg border-0 bg-black/25 p-3 ring-0">
                    <div className="mb-3 flex items-center justify-between">
                      <p className="text-xs tracking-wide text-zinc-300 uppercase">Starting Price</p>
                      <p className="text-sm font-semibold text-white">
                        {item.pricing[item.pricing.length - 1]?.price}
                      </p>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <Link
                        href={`/packages/${item.id}`}
                        className="inline-flex h-10 items-center justify-center gap-1 rounded-lg border border-white/8 bg-black/25 px-3 text-sm font-medium text-white hover:border-white/15 hover:bg-white/10"
                      >
                        View
                        <ArrowRight size={13} strokeWidth={ICON_STROKE} />
                      </Link>
                      <Link
                        href={`/booking?package=${item.id}`}
                        className="inline-flex h-10 items-center justify-center rounded-lg bg-primary px-3 text-sm font-medium text-primary-foreground hover:bg-primary/90"
                      >
                        Book
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
        {filteredPackages.length === 0 && (
          <p className="mt-6 rounded-lg bg-black/20 px-4 py-3 text-sm text-zinc-300">
            No packages matched your filters. Try changing search or sort.
          </p>
        )}

        <div className="mt-10 rounded-2xl bg-linear-to-r from-white/[0.04] to-white/[0.02] p-5 shadow-[0_10px_24px_rgba(0,0,0,0.2)] sm:p-6">
          <div className="grid gap-5 md:grid-cols-[1.4fr_1fr] md:items-center">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] text-zinc-400 uppercase">
                Need Help Choosing?
              </p>
              <h3 className="mt-1 text-xl font-semibold text-white sm:text-2xl">
                Tell us your time and fitness level. We will suggest the best trek.
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-300">
                Get a route recommendation with realistic pacing, comfort options, and a matching budget range.
              </p>
            </div>

            <div className="grid gap-2 sm:grid-cols-2 md:grid-cols-1">
              <Link
                href="/booking"
                className="inline-flex h-11 items-center justify-center rounded-lg bg-white px-4 text-sm font-semibold text-black transition hover:bg-zinc-200"
              >
                Plan My Trek
              </Link>
              <Link
                href="/contact"
                className="inline-flex h-11 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] px-4 text-sm font-semibold text-zinc-200 transition hover:bg-white/[0.08]"
              >
                Talk to Specialist
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
