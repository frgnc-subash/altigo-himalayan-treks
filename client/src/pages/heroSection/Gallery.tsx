import React from "react";
import { useTranslation } from "react-i18next";
import { FaExpandAlt } from "react-icons/fa";

const Gallery: React.FC = () => {
  const { t } = useTranslation();

  const imageModules = import.meta.glob(
    "../../assets/gallery/*.{jpeg,jpg,png,webp,JPEG,JPG,PNG,WEBP}",
    {
      eager: true,
      import: "default",
    },
  );

  const galleryImages = Object.values(imageModules) as string[];

  return (
    <section className="w-full pt-32 pb-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 px-2">
        <div className="max-w-xl">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-10 bg-primary"></span>
            <span className="text-primary text-[10px] font-black uppercase tracking-[0.5em]">
              {t("gallery_subtitle")}
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight">
            {t("Gallery")}
          </h2>
        </div>
        <p className="text-zinc-500 max-w-sm text-sm font-medium leading-relaxed">
          {t("gallery_desc")}
        </p>
      </div>

      {galleryImages.length > 0 ? (
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {galleryImages.map((img, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-xl border border-white/10 bg-zinc-900 transition-all duration-500 hover:border-primary/50 hover:shadow-[0_0_40px_rgba(8,78,168,0.2)] active:scale-[0.98]"
            >
              <img
                src={img}
                alt={`Summit Expedition ${index + 1}`}
                className="w-full h-auto object-cover transition-all duration-700 ease-out group-hover:scale-105 group-hover:brightness-110"
              />

              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                <div className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-primary transition-colors">
                  <FaExpandAlt size={14} />
                </div>
              </div>

              <div className="absolute bottom-6 left-6 right-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-75">
                <div className="flex flex-col gap-1">
                  <span className="text-primary text-[9px] font-black uppercase tracking-[0.3em]">
                    Photography
                  </span>
                  <h4 className="text-white font-bold text-base tracking-tight">
                    {t("born_nepal")}
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="w-full py-24 text-center border border-white/5 bg-white/1 rounded-2xl">
          <p className="text-zinc-700 uppercase tracking-[0.4em] text-[10px] font-black">
            No visual data found
          </p>
        </div>
      )}
    </section>
  );
};

export default Gallery;
