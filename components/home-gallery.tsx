"use client";

import { useEffect, useState } from "react";
import { Camera, ChevronLeft, ChevronRight, X } from "lucide-react";

const items = [
  "/gallery/image2.jpeg",
  "/gallery/image3.jpeg",
  "/gallery/image4.jpeg",
  "/gallery/image5.jpeg",
  "/gallery/image6.jpeg",
  "/gallery/image7.jpeg",
  "/gallery/image8.jpeg",
  "/gallery/image9.jpeg",
  "/gallery/image13.jpeg",
  "/gallery/image11.jpeg",
];

export default function HomeGallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [expanded, setExpanded] = useState(false);
  const visibleItems = expanded ? items : items.slice(0, 6);

  useEffect(() => {
    if (activeIndex === null) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveIndex(null);
      if (e.key === "ArrowRight") {
        setActiveIndex((prev) => (prev === null ? 0 : (prev + 1) % items.length));
      }
      if (e.key === "ArrowLeft") {
        setActiveIndex((prev) =>
          prev === null ? 0 : (prev - 1 + items.length) % items.length,
        );
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeIndex]);

  return (
    <section className="w-full">
      <div className="relative isolate mb-8 text-center md:mb-10">
        <span
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/2 -z-10 w-full -translate-x-1/2 -translate-y-1/2 text-center text-5xl font-black tracking-[0.16em] text-white/5 uppercase sm:text-7xl md:text-8xl lg:text-9xl"
        >
          Gallery
        </span>
        <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">Gallery</p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
          Stories from Himalayan Trails
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm text-zinc-300 sm:text-base">
          A quick glimpse of mountain views, trail life, and expedition moments.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-3 sm:gap-4">
        {visibleItems.map((src, idx) => (
          <button
            key={src}
            type="button"
            onClick={() => setActiveIndex(items.indexOf(src))}
            className="group relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 text-left"
            aria-label={`Open trek gallery image ${idx + 1}`}
          >
            <img
              src={src}
              alt={`Trek gallery ${idx + 1}`}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-3 left-3 flex items-center gap-2 rounded-full border border-white/15 bg-black/45 px-3 py-1 text-[11px] text-zinc-200">
              <Camera className="h-3.5 w-3.5" />
              Himalayan Trail
            </div>
          </button>
        ))}
      </div>

      {items.length > 6 && (
        <div className="mt-5 flex justify-center">
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            className="inline-flex h-10 items-center justify-center rounded-full border border-white/15 bg-white/5 px-5 text-xs font-semibold tracking-[0.12em] text-zinc-200 uppercase transition hover:bg-white/10"
          >
            {expanded ? "Show Less" : "Show More"}
          </button>
        </div>
      )}

      {activeIndex !== null && (
        <div
          className="fixed inset-0 z-[2500] flex items-center justify-center bg-black/90 p-4"
          onClick={() => setActiveIndex(null)}
        >
          <button
            type="button"
            onClick={() => setActiveIndex(null)}
            className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/50 text-white hover:bg-black/70"
            aria-label="Close gallery"
          >
            <X size={18} />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setActiveIndex((prev) => (prev === null ? 0 : (prev - 1 + items.length) % items.length));
            }}
            className="absolute left-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/50 text-white hover:bg-black/70"
            aria-label="Previous image"
          >
            <ChevronLeft size={18} />
          </button>

          <img
            src={items[activeIndex]}
            alt={`Trek gallery ${activeIndex + 1}`}
            className="max-h-[88vh] max-w-[94vw] rounded-xl object-contain"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setActiveIndex((prev) => (prev === null ? 0 : (prev + 1) % items.length));
            }}
            className="absolute right-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/50 text-white hover:bg-black/70"
            aria-label="Next image"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      )}
    </section>
  );
}
