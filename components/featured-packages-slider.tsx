"use client";

import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface FeaturedPackageItem {
  id: string;
  name: string;
  duration: string;
  summary: string;
  image: string;
}

interface FeaturedPackagesSliderProps {
  items: FeaturedPackageItem[];
}

export default function FeaturedPackagesSlider({ items }: FeaturedPackagesSliderProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);
  const [isAutoPaused, setIsAutoPaused] = useState(false);

  const getStep = () => {
    const el = trackRef.current;
    if (!el) return 0;

    const card = el.querySelector<HTMLElement>("[data-featured-card]");
    const cardGap = 16;
    return (card?.offsetWidth || el.clientWidth * 0.88) + cardGap;
  };

  const updateScrollState = () => {
    const el = trackRef.current;
    if (!el) return;

    const maxLeft = el.scrollWidth - el.clientWidth;
    setCanPrev(el.scrollLeft > 8);
    setCanNext(el.scrollLeft < maxLeft - 8);
  };

  useEffect(() => {
    updateScrollState();
    const el = trackRef.current;
    if (!el) return;

    const onScroll = () => updateScrollState();
    el.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      el.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [items.length]);

  const scrollByCard = (direction: "prev" | "next") => {
    const el = trackRef.current;
    if (!el) return;

    const step = getStep();

    el.scrollBy({
      left: direction === "next" ? step : -step,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    if (isAutoPaused || items.length <= 1) return;

    const timer = window.setInterval(() => {
      const el = trackRef.current;
      if (!el) return;

      const maxLeft = el.scrollWidth - el.clientWidth;
      const step = getStep();
      const nextLeft = el.scrollLeft + step;

      if (nextLeft >= maxLeft - 8) {
        el.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        el.scrollBy({ left: step, behavior: "smooth" });
      }
    }, 3200);

    return () => window.clearInterval(timer);
  }, [isAutoPaused, items.length]);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsAutoPaused(true)}
      onMouseLeave={() => setIsAutoPaused(false)}
      onFocusCapture={() => setIsAutoPaused(true)}
      onBlurCapture={() => setIsAutoPaused(false)}
      onTouchStart={() => setIsAutoPaused(true)}
      onTouchEnd={() => setIsAutoPaused(false)}
    >
      <div
        ref={trackRef}
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-3 scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {items.map((item) => (
          <article
            key={item.id}
            data-featured-card
            className="group min-w-[84%] snap-start overflow-hidden rounded-2xl bg-white/5 sm:min-w-[65%] md:min-w-[47%] lg:min-w-[38%]"
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
              <p className="absolute bottom-3 left-3 text-sm font-semibold text-white">{item.name}</p>
            </div>

            <div className="flex min-h-[176px] flex-col p-4 sm:h-[200px]">
              <p className="text-sm text-zinc-300">{item.duration}</p>
              <p className="mt-2 text-sm text-zinc-400">{item.summary}</p>
              <Link
                href="/packages"
                className="mt-auto inline-flex self-start rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary/90"
              >
                View Packages
              </Link>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-2 flex items-center justify-end gap-2">
        <button
          type="button"
          onClick={() => scrollByCard("prev")}
          disabled={!canPrev}
          className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/[0.08] text-white transition enabled:hover:bg-white/[0.16] disabled:cursor-not-allowed disabled:opacity-35"
          aria-label="Previous featured package"
        >
          <ChevronLeft size={16} />
        </button>
        <button
          type="button"
          onClick={() => scrollByCard("next")}
          disabled={!canNext}
          className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/[0.08] text-white transition enabled:hover:bg-white/[0.16] disabled:cursor-not-allowed disabled:opacity-35"
          aria-label="Next featured package"
        >
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
}
