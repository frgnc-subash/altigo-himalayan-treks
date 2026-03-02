import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowDown,
  ShieldCheck,
  Users,
  Mountain,
  Star,
} from "lucide-react";
import BackgroundAni from "@/components/backgroundAni";
import HomeGallery from "@/components/home-gallery";
import { Button } from "@/components/ui/button";
import { trekPackages } from "@/lib/packages-data";
import { absoluteUrl, SITE_NAME } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Himalayan Trekking in Nepal",
  description:
    "Plan your Himalayan trek in Nepal with expert local guides. Compare featured routes, trekking packages, and start your custom trip with Altigo Himalayan Treks.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${SITE_NAME} | Himalayan Trekking in Nepal`,
    description:
      "Plan your Himalayan trek in Nepal with expert local guides and transparent packages.",
    url: "/",
    type: "website",
    images: [
      {
        url: absoluteUrl("/backgrounds/bg9.jpeg"),
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} trekking routes in Nepal`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | Himalayan Trekking in Nepal`,
    description:
      "Plan your Himalayan trek in Nepal with expert local guides and transparent packages.",
    images: [absoluteUrl("/backgrounds/bg9.jpeg")],
  },
};

function SectionHeader({
  eyebrow,
  title,
  description,
  shadowText,
}: {
  eyebrow: string;
  title: string;
  description: string;
  shadowText: string;
}) {
  return (
    <div className="relative isolate mb-8 text-center md:mb-10">
      <span
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 w-full -translate-x-1/2 -translate-y-1/2 text-center text-5xl font-black tracking-[0.16em] text-white/5 uppercase sm:text-7xl md:text-8xl lg:text-9xl"
      >
        {shadowText}
      </span>
      <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">{eyebrow}</p>
      <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
        {title}
      </h2>
      <p className="mx-auto mt-3 max-w-2xl text-sm text-zinc-300 sm:text-base">{description}</p>
    </div>
  );
}

function WhyChooseUs() {
  const heroImages = [
    "/gallery/image9.jpeg",
    "/gallery/image11.jpeg",
    "/gallery/image13.jpeg",
    "/backgrounds/bg9.jpeg",
  ];
  const heroSlides = [...heroImages, heroImages[0]];

  const points = [
    {
      title: "Expertly Curated Routes",
      desc: "Balanced trail plans built for scenery, comfort, and safe altitude progression.",
      icon: Mountain,
    },
    {
      title: "Certified Local Team",
      desc: "Experienced guides and support crew who know each route in real conditions.",
      icon: ShieldCheck,
    },
    {
      title: "Small Group Quality",
      desc: "Fewer trekkers per group means smoother pacing and better on-trail support.",
      icon: Users,
    },
  ];

  return (
    <section className="w-full">
      <SectionHeader
        eyebrow="Why Choose Us"
        title="Trusted Trek Planning"
        description="Safety-first planning, local expertise, and smooth support from arrival to return."
        shadowText="Safety"
      />

      <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
        <article className="relative overflow-hidden rounded-3xl border border-white/10 shadow-[0_20px_42px_rgba(0,0,0,0.28)]">
          <div className="why-slide-track">
            {heroSlides.map((src, idx) => (
              <img
                key={`${src}-${idx}`}
                src={src}
                alt="Trek experience"
                className="why-slide-image"
              />
            ))}
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
          <p className="absolute left-5 bottom-5 rounded-full border border-white/20 bg-black/30 px-3 py-1 text-[11px] font-semibold text-white backdrop-blur-sm">
            Different locations, one trusted team
          </p>
          <div className="h-[360px] md:h-[420px]" />
        </article>

        <div className="grid gap-3">
          {points.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-white/10 bg-linear-to-br from-[#0b0b0c] via-[#09090a] to-[#070708] p-5 shadow-[0_12px_28px_rgba(0,0,0,0.45)] transition-colors hover:border-white/20"
            >
              <div className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/[0.04]">
                <item.icon className="h-4.5 w-4.5 text-zinc-100" />
              </div>
              <h3 className="mt-3 text-base font-semibold text-white">{item.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-zinc-300">{item.desc}</p>
            </article>
          ))}

          <article className="relative overflow-hidden rounded-2xl border border-white/10">
            <img
              src="/gallery/image4.jpeg"
              alt="Support team"
              className="h-28 w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <p className="absolute left-3 bottom-3 text-xs font-semibold text-white">
              Support on every trail day
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

function CustomerSay() {
  const comments = [
    {
      name: "Aarav Shah",
      initials: "AS",
      rating: 5,
      text: "Everything was perfectly organized. The guide team made our Annapurna trek safe and unforgettable.",
    },
    {
      name: "Sophie Turner",
      initials: "ST",
      rating: 5,
      text: "Clear communication, great accommodations, and breathtaking routes. Highly recommend Altigo.",
    },
    {
      name: "Nima Dorje",
      initials: "ND",
      rating: 5,
      text: "Professional support from start to finish. The acclimatization plan was excellent.",
    },
    {
      name: "Elena Rossi",
      initials: "ER",
      rating: 5,
      text: "Our Everest Base Camp trip was smooth, scenic, and well managed every day.",
    },
    {
      name: "Rohan Mehta",
      initials: "RM",
      rating: 5,
      text: "Great local knowledge and very friendly team. This was my best trekking experience.",
    },
  ];

  const loopComments = [...comments, ...comments];
  const row1 = loopComments;
  const row2 = [...comments.slice(2), ...comments.slice(0, 2), ...comments.slice(2), ...comments.slice(0, 2)];

  return (
    <section className="w-full">
      <SectionHeader
        eyebrow="Testimonials"
        title="Loved by Trekkers"
        description="Real feedback from trekkers who explored Nepal with Altigo."
        shadowText="Reviews"
      />

        <div className="space-y-4">
        <div className="testimonial-marquee">
          <div className="testimonial-track">
            {row1.map((item, idx) => (
              <article
                key={`row1-${item.name}-${idx}`}
                className="w-[170px] shrink-0 rounded-2xl bg-white/5 p-4 backdrop-blur-sm sm:w-[190px] md:w-[220px] lg:w-[250px] xl:w-[268px]"
              >
                <div className="mb-3 flex items-center gap-1 text-yellow-400">
                  {Array.from({ length: item.rating }).map((_, starIdx) => (
                    <Star
                      key={starIdx}
                      className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400 sm:h-4 sm:w-4"
                    />
                  ))}
                </div>
                <p className="text-xs leading-relaxed text-zinc-300 sm:text-sm">
                  &quot;{item.text}&quot;
                </p>
                <div className="mt-5 flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/85 text-[11px] font-semibold text-white sm:h-9 sm:w-9 sm:text-xs">
                    {item.initials}
                  </div>
                  <p className="text-xs font-semibold text-white sm:text-sm">{item.name}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="testimonial-marquee">
          <div className="testimonial-track testimonial-track-reverse">
            {row2.map((item, idx) => (
              <article
                key={`row2-${item.name}-${idx}`}
                className="w-[170px] shrink-0 rounded-2xl bg-white/5 p-4 backdrop-blur-sm sm:w-[190px] md:w-[220px] lg:w-[250px] xl:w-[268px]"
              >
                <div className="mb-3 flex items-center gap-1 text-yellow-400">
                  {Array.from({ length: item.rating }).map((_, starIdx) => (
                    <Star
                      key={starIdx}
                      className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400 sm:h-4 sm:w-4"
                    />
                  ))}
                </div>
                <p className="text-xs leading-relaxed text-zinc-300 sm:text-sm">
                  &quot;{item.text}&quot;
                </p>
                <div className="mt-5 flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/85 text-[11px] font-semibold text-white sm:h-9 sm:w-9 sm:text-xs">
                    {item.initials}
                  </div>
                  <p className="text-xs font-semibold text-white sm:text-sm">{item.name}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturedDestinations() {
  const featuredOrder = ["upper-mustang", "everest-base-camp", "annapurna-circuit"];
  const featured = featuredOrder
    .map((id) => trekPackages.find((pkg) => pkg.id === id))
    .filter((pkg): pkg is NonNullable<typeof pkg> => Boolean(pkg));
  const images: Record<string, string> = {
    "annapurna-circuit": "/abc/8.jpg",
    "everest-base-camp": "/ebc/9.jpg",
    "upper-mustang": "/upper-mustang/lomanthang.jpg",
  };

  return (
    <section className="w-full">
      <SectionHeader
        eyebrow="Featured Packages"
        title="Top Packages"
        description="Handpicked packages with complete itineraries, transparent pricing, and guided support."
        shadowText="Packages"
      />

      <div className="grid gap-4 md:grid-cols-3">
        {featured.map((item) => (
          <article
            key={item.id}
            className="group overflow-hidden rounded-2xl bg-white/5"
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={images[item.id] || "/backgrounds/bg1.jpeg"}
                alt={item.name}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
              <p className="absolute left-3 bottom-3 text-sm font-semibold text-white">
                {item.name}
              </p>
            </div>

            <div className="flex h-[200px] flex-col p-4">
              <p className="text-sm text-zinc-300">{item.duration}</p>
              <p className="mt-2 text-sm text-zinc-400">{item.summary}</p>
              <Link
                href={`/packages/${item.id}`}
                className="mt-auto inline-flex self-start rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary/90"
              >
                View Package
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default function Home() {
  const year = new Date().getFullYear();

  return (
    <main className="flex w-full flex-col bg-[#050505]">
      <section className="relative flex h-[90vh] min-h-[520px] w-full flex-col overflow-hidden md:h-screen">
        <BackgroundAni />

        <div className="relative z-20 mx-auto flex h-full w-full max-w-5xl flex-col items-center justify-center px-6 pt-10 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 backdrop-blur-md md:mb-8">
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
            <span className="text-[9px] font-bold tracking-[0.2em] text-gray-200 uppercase md:text-xs">
              VISIT NEPAL {year}
            </span>
          </div>

          <h1 className="mb-4 text-3xl font-black leading-[1.1] tracking-tight text-white uppercase sm:text-6xl md:mb-6 md:text-7xl lg:text-8xl">
            CONQUER THE <br />
            <span className="text-transparent bg-clip-text bg-linear-to-b from-white to-zinc-500">
              HIMALAYAS
            </span>
          </h1>

          <p className="mb-6 max-w-2xl text-sm leading-relaxed font-light text-zinc-300 sm:text-lg lg:text-xl md:mb-10">
            Experience the thrill of high-altitude trekking with certified
            guides. From Everest Base Camp to the Annapurna Circuit, we take
            you higher.
          </p>

          <div className="flex w-full max-w-sm flex-col gap-3 sm:max-w-none sm:w-auto sm:flex-row">
            <Button asChild size="lg" className="rounded-full bg-primary text-white hover:bg-primary/90">
              <Link href="/destinations">Find Your Trek</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full border-white/30 bg-white/5 text-white hover:bg-white/15 hover:text-white"
            >
              <Link href="/packages">Customize Trip</Link>
            </Button>
          </div>

        </div>

        <div className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-white/40">
          <ArrowDown size={16} />
        </div>
      </section>

      <div className="mx-auto flex w-full max-w-7xl flex-col gap-14 px-5 py-8 sm:px-8 md:gap-28 md:py-16">
        <WhyChooseUs />
        <FeaturedDestinations />
        <HomeGallery />
        <CustomerSay />
      </div>
    </main>
  );
}
