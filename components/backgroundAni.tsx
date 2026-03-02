"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const backgroundImages = [
  "/backgrounds/bg1.jpeg",
  "/backgrounds/bg2.jpeg", 
  "/backgrounds/bg3.jpeg",
  "/backgrounds/bg4.jpeg",
  "/backgrounds/bg5.jpeg",
  "/backgrounds/bg6.jpeg",
  "/backgrounds/bg7.jpeg",
];

export default function BackgroundAni() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === backgroundImages.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 z-0 bg-black">
      {backgroundImages.map((src, index) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-2000 ease-in-out ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={src}
            alt="Hero Background"
            fill
            priority={index === 0}
            className="object-cover brightness-[0.55]"
            quality={90}
          />
        </div>
      ))}
      <div className="absolute inset-0 bg-linear-to-b from-black/60 via-transparent to-[#050505] z-10" />
    </div>
  );
}