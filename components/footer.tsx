"use client";
import Link from "next/link";
import Image from "next/image";
// 1. Import Lucide Icons
import {
  Facebook,
  Instagram,
  MessageCircle, // Using this for WhatsApp
  Mail,
  Phone,
  MapPin,
  ArrowRight,
} from "lucide-react";

export default function Footer() {
  const t = (s: string) => s;
  const currentYear = new Date().getFullYear();
  const paymentMethods = [
    { key: "Visa", src: "https://cdn.simpleicons.org/visa" },
    { key: "Mastercard", src: "https://cdn.simpleicons.org/mastercard" },
    { key: "American Express", src: "https://cdn.simpleicons.org/americanexpress" },
    { key: "PayPal", src: "https://cdn.simpleicons.org/paypal" },
    { key: "Cash App", src: "https://cdn.simpleicons.org/cashapp" },
    { key: "Apple Pay", src: "https://cdn.simpleicons.org/applepay" },
  ];

  const navLinks = [
    { name: t("Home"), path: "/" },
    { name: t("Destinations"), path: "/destinations" },
    { name: t("Packages"), path: "/packages" },
    { name: t("Contact Us"), path: "/contact" },
  ];

  return (
    <footer className="bg-[#050505] border-t border-white/5 pt-16 md:pt-20 pb-10 relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16 md:mb-20">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-5 space-y-6 md:space-y-8">
            <Link href="/" className="flex items-center gap-3 group w-fit">
              <div className="relative h-8 w-8 md:h-9 md:w-9 lg:h-10 lg:w-10">
                <Image
                  src="/logo.webp"
                  alt="Altigo Treks Logo"
                  fill
                  className="object-contain transition-transform duration-500 group-hover:rotate-3"
                />
              </div>
              <div className="flex flex-col leading-[1.1]">
                <span className="text-white font-black text-sm md:text-base lg:text-lg tracking-tighter uppercase whitespace-nowrap">
                  Altigo
                </span>
                <span className="text-primary font-black text-[10px] md:text-[11px] lg:text-xs tracking-tighter uppercase whitespace-nowrap">
                  Himalayan Treks
                </span>
              </div>
            </Link>

            <p className="text-zinc-500 text-sm leading-relaxed max-w-sm">
              We specialize in high-altitude trekking adventures, ensuring safe
              and unforgettable journeys through the majestic Himalayas.
            </p>

            <div className="flex gap-3">
              {[
                { Icon: Facebook, url: "https://www.facebook.com/profile.php?id=61584054197541" },
                { Icon: Instagram, url: "https://www.instagram.com/altigohimalayantreksofficial/" },
                { Icon: MessageCircle, url: "https://wa.me/9779707921000" }, // WhatsApp
              ].map((item, idx) => (
                <a
                  key={idx}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:border-white hover:bg-white/5 transition-all duration-300"
                >
                  <item.Icon size={19} strokeWidth={2.3} />
                </a>
              ))}
            </div>

          </div>

          <div className="hidden md:block md:col-span-1" />

          <div className="col-span-1 md:col-span-3">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-600 mb-6 md:mb-8">
              {t("Menu")}
            </h4>
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.path}
                    className="text-sm font-medium text-zinc-400 hover:text-white transition-all duration-300 flex items-center group gap-2"
                  >
                    <ArrowRight className="h-3 w-3 text-primary opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Office Section */}
          <div className="col-span-1 md:col-span-3">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-600 mb-6 md:mb-8">
              {t("Office")}
            </h4>
            <div className="space-y-6">
              <a
                href="mailto:info@altigohimalayantreks.com"
                className="flex items-center gap-3 text-sm font-medium text-zinc-400 hover:text-white transition-colors group"
              >
                <div className="h-8 w-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail
                    size={14}
                    className="group-hover:text-primary transition-colors"
                  />
                </div>
                info@altigohimalayantreks.com
              </a>

              <a
                href="mailto:partner@altigohimalayantreks.com"
                className="flex items-start gap-3 text-sm font-medium text-zinc-400 hover:text-white transition-colors group"
              >
                <div className="h-8 w-8 rounded-full bg-white/5 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-primary/20 transition-colors">
                  <Mail
                    size={14}
                    className="group-hover:text-primary transition-colors"
                  />
                </div>
                <span className="leading-tight space-y-1">
                  <span className="block text-zinc-300 group-hover:text-white transition-colors break-all">
                    partner@altigohimalayantreks.com
                  </span>
                </span>
              </a>

              <div className="flex items-center gap-3 text-sm font-medium text-zinc-400 group">
                <div className="h-8 w-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Phone
                    size={14}
                    className="group-hover:text-primary transition-colors"
                  />
                </div>
                +977 9707921000
              </div>

              <div className="flex items-start gap-3 text-sm font-medium text-zinc-400 group">
                <div className="h-8 w-8 rounded-full bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                  <MapPin
                    size={14}
                    className="group-hover:text-primary transition-colors"
                  />
                </div>
                <span className="leading-relaxed">
                  Thamel Area - Yapikhya Marg,
                  <br /> Kathmandu, Nepal
                </span>
              </div>

            </div>
          </div>
        </div>

        <div className="mb-10 flex flex-col gap-2">
          <p className="text-xs font-medium text-zinc-500">
            We accept all international payments.
          </p>
          <div className="flex flex-wrap gap-2">
            {paymentMethods.map((method) => (
              <span
                key={method.key}
                title={method.key}
                aria-label={method.key}
                className="inline-flex h-[30px] w-[44px] items-center justify-center rounded-md bg-white px-1"
              >
                <img
                  src={method.src}
                  alt={method.key}
                  className={`w-auto ${method.key === "Apple Pay" ? "h-5" : "h-4"}`}
                  loading="lazy"
                />
              </span>
            ))}
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] text-zinc-600 font-bold uppercase tracking-widest text-center md:text-left">
            © {currentYear} ALTIGO HIMALAYAN TREKS. {t("All rights reserved")}.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-[9px] font-black uppercase tracking-[0.6em] text-zinc-800 select-none">
              {t("Born in Nepal")}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
