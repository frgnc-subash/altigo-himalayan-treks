import { useState, useEffect } from "react";

const BackgroundAni = () => {
  const imagesRecord = import.meta.glob(
    "../../../assets/backgrounds/*.{png,jpg,jpeg,webp}",
    {
      eager: true,
      import: "default",
    },
  );

  const backgroundImages = Object.values(imagesRecord) as string[];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (backgroundImages.length === 0) return;
    const interval = setInterval(() => {
      setCurrentIndex((p) => (p === backgroundImages.length - 1 ? 0 : p + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  return (
    <div className="absolute inset-0 z-0 bg-black">
      {backgroundImages.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-2000 ease-in-out ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={img}
            alt="Background"
            className="w-full h-full object-cover brightness-[0.55]"
          />
        </div>
      ))}
      <div className="absolute inset-0 bg-linear-to-b from-black/60 via-transparent to-[#050505] z-10" />
    </div>
  );
};

export default BackgroundAni;
