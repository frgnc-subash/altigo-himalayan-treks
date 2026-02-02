import React, { useState, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { FaExpand, FaTimes, FaCamera, FaArrowDown } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const imageModules = import.meta.glob(
  "../../assets/gallery/*.{jpeg,jpg,png,webp,JPEG,JPG,PNG,WEBP}",
  {
    eager: true,
    import: "default",
  },
);

const Gallery: React.FC = () => {
  const { t } = useTranslation();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const allImages = useMemo(() => Object.values(imageModules) as string[], []);
  const [visibleCount, setVisibleCount] = useState(10);

  const loadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 5, allImages.length));
  };

  const openLightbox = (img: string) => {
    setSelectedImage(img);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = "unset";
  };

  const getClassForIndex = (index: number) => {
    const isBig = index % 5 === 0;
    if (isBig) {
      return "lg:col-span-2 lg:row-span-2 h-[300px] lg:h-[520px]";
    }
    return "lg:col-span-1 lg:row-span-1 h-[300px] lg:h-[250px]";
  };

  return (
    <section className="relative w-full pt-12 md:pt-16 pb-24 md:pb-32 bg-[#050505] overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-75 md:w-150 h-75 md:h-150 bg-primary/5 blur-[100px] md:blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="h-0.5 w-12 bg-secondary" />
              <span className="text-secondary text-xs font-black uppercase tracking-[0.3em]">
                {t("gallery_subtitle")}
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white leading-tight uppercase">
              {t("Gallery")}
            </h2>
          </div>
          <p className="text-zinc-400 text-sm md:text-base max-w-xs leading-relaxed border-l border-white/10 pl-6 hidden md:block">
            {t("gallery_desc")}
          </p>
        </div>

        {allImages.length > 0 ? (
          <>
            <motion.div
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
            >
              <AnimatePresence>
                {allImages.slice(0, visibleCount).map((img, index) => (
                  <motion.div
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    key={img}
                    className={`relative group overflow-hidden rounded-2xl bg-zinc-900 border border-white/5 hover:border-primary/50 cursor-pointer shadow-lg hover:shadow-primary/10 ${getClassForIndex(index)}`}
                    onClick={() => openLightbox(img)}
                  >
                    <img
                      src={img}
                      alt={`Gallery ${index}`}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 group-hover:brightness-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute top-4 right-4 -translate-y-2.5 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                      <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:bg-primary transition-colors">
                        <FaExpand size={12} />
                      </div>
                    </div>
                    <div className="absolute bottom-6 left-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-75">
                      <div className="flex items-center gap-2 mb-1">
                        <FaCamera className="text-secondary text-[10px]" />
                        <span className="text-zinc-300 text-[9px] font-bold uppercase tracking-widest">
                          {t("born_nepal")}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

            {visibleCount < allImages.length && (
              <div className="flex justify-center mt-12 md:mt-20">
                <button
                  onClick={loadMore}
                  className="group flex flex-col items-center gap-3 text-zinc-500 hover:text-white transition-colors"
                >
                  <span className="text-[10px] font-black uppercase tracking-[0.3em]">
                    Load More
                  </span>
                  <div className="w-12 h-12 rounded-full border border-zinc-800 flex items-center justify-center group-hover:border-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <FaArrowDown
                      size={14}
                      className="group-hover:translate-y-0.5 transition-transform"
                    />
                  </div>
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="w-full py-32 flex flex-col items-center justify-center border border-dashed border-white/10 rounded-3xl bg-white/5">
            <FaCamera className="text-zinc-700 text-4xl mb-4" />
            <p className="text-zinc-600 uppercase tracking-[0.2em] text-xs font-bold">
              No visual records found
            </p>
          </div>
        )}
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-100 flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 md:p-12"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 hover:scale-110 transition-all z-50 border border-white/10"
            >
              <FaTimes size={18} />
            </button>
            <motion.img
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3 }}
              src={selectedImage}
              alt="Enlarged view"
              className="w-auto h-auto max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl shadow-black/80"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
