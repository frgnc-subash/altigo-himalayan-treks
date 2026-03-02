import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock3, Mountain, MapPin, ShieldCheck, CalendarDays } from "lucide-react";
import DestinationDetailMap from "@/components/destination-detail-map-client";
import DestinationWeather from "@/components/destination-weather";
import { destinationsById } from "@/lib/destinations-data";
import { absoluteUrl, SITE_NAME, SITE_URL } from "@/lib/seo";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const destination = destinationsById[id];

  if (!destination) {
    return {
      title: "Destination Not Found",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const title = `${destination.name} Trek Guide`;
  const description = `${destination.desc} Region: ${destination.region}. Duration: ${destination.duration}. Best season: ${destination.bestSeason}.`;
  const canonicalPath = `/destinations/${destination.id}`;
  const image = absoluteUrl(destination.image);

  return {
    title,
    description,
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      title,
      description,
      url: canonicalPath,
      type: "article",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: destination.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

const destinationGallery: Record<string, string[]> = {
  "everest-base-camp": [
    "/ebc/1.jpg",
    "/ebc/3.jpg",
    "/ebc/5.jpg",
    "/ebc/7.jpg",
    "/ebc/9.jpg",
  ],
  "annapurna-circuit": [
    "/abc/1.jpg",
    "/abc/3.jpg",
    "/abc/5.jpg",
    "/abc/7.jpg",
    "/abc/9.jpg",
  ],
  "upper-mustang": [
    "/upper-mustang/jomsom.jpg",
    "/upper-mustang/kagbeni.jpg",
    "/upper-mustang/ghami.jpg",
    "/upper-mustang/lomanthang.jpg",
    "/upper-mustang/tsarang.jpg",
  ],
  "poon-hill": [
    "/gallery/image7.jpeg",
    "/gallery/image5.jpeg",
    "/backgrounds/bg3.jpeg",
    "/gallery/image6.jpeg",
    "/backgrounds/bg6.jpeg",
  ],
  "langtang-valley": [
    "/gallery/image8.jpeg",
    "/backgrounds/bg5.jpeg",
    "/gallery/image4.jpeg",
    "/backgrounds/bg4.jpeg",
    "/gallery/image2.jpeg",
  ],
};

export default async function DestinationDetailPage({ params }: PageProps) {
  const { id } = await params;
  const destination = destinationsById[id];

  if (!destination) {
    notFound();
  }
  const galleryImages = destinationGallery[id] || [destination.image];
  const destinationJsonLd = {
    "@context": "https://schema.org",
    "@type": "TouristDestination",
    name: destination.name,
    description: destination.desc,
    url: `${SITE_URL}/destinations/${destination.id}`,
    image: galleryImages.map((src) => absoluteUrl(src)),
    geo: {
      "@type": "GeoCoordinates",
      latitude: destination.lat,
      longitude: destination.lng,
    },
    touristType: destination.difficulty,
    containedInPlace: {
      "@type": "Country",
      name: "Nepal",
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Destinations",
        item: `${SITE_URL}/destinations`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: destination.name,
        item: `${SITE_URL}/destinations/${destination.id}`,
      },
    ],
  };

  const travelAgencyJsonLd = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    name: SITE_NAME,
    url: SITE_URL,
  };

  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(destinationJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(travelAgencyJsonLd) }}
      />
      <section className="mx-auto w-full max-w-7xl px-5 pb-16 pt-28 sm:px-8">
        <Link
          href="/destinations"
          className="mb-6 inline-flex items-center gap-2 text-sm text-zinc-300 hover:text-white"
        >
          <ArrowLeft size={16} />
          Back to Map
        </Link>

        <div className="rounded-[2rem] border border-white/10 bg-black/30 p-3 shadow-2xl backdrop-blur-sm sm:p-4">
          <DestinationDetailMap
            center={destination.mapCenter}
            zoom={destination.mapZoom}
            trailCoordinates={destination.trailCoordinates}
          />
        </div>

        <div className="mt-8 rounded-3xl border border-white/10 bg-black/25 p-6 sm:p-8">
          <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-primary uppercase">
            Premium Expedition
          </p>
          <h1 className="text-3xl font-black uppercase tracking-tight sm:text-5xl">
            {destination.name}
          </h1>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-zinc-300 sm:text-base">
            {destination.desc}
          </p>
          <p className="mt-3 max-w-3xl text-xs leading-relaxed text-zinc-400 sm:text-sm">
            This page gives you a quick trail overview with route map, weather snapshot, key trek
            facts, and photo glimpses from {destination.name}.
          </p>

          <div className="mt-6">
            <DestinationWeather
              lat={destination.lat}
              lng={destination.lng}
              name={destination.name}
            />
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <p className="mb-1 flex items-center gap-2 text-xs uppercase tracking-wide text-zinc-400">
                <MapPin size={14} className="text-primary" />
                Region
              </p>
              <p className="font-medium text-white">{destination.region}</p>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <p className="mb-1 flex items-center gap-2 text-xs uppercase tracking-wide text-zinc-400">
                <Clock3 size={14} className="text-primary" />
                Duration
              </p>
              <p className="font-medium text-white">{destination.duration}</p>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <p className="mb-1 flex items-center gap-2 text-xs uppercase tracking-wide text-zinc-400">
                <Mountain size={14} className="text-primary" />
                Max Elevation
              </p>
              <p className="font-medium text-white">{destination.elevation}</p>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <p className="mb-1 flex items-center gap-2 text-xs uppercase tracking-wide text-zinc-400">
                <ShieldCheck size={14} className="text-primary" />
                Difficulty
              </p>
              <p className="font-medium text-white">{destination.difficulty}</p>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <p className="mb-1 flex items-center gap-2 text-xs uppercase tracking-wide text-zinc-400">
                <CalendarDays size={14} className="text-primary" />
                Best Season
              </p>
              <p className="font-medium text-white">{destination.bestSeason}</p>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <p className="mb-1 flex items-center gap-2 text-xs uppercase tracking-wide text-zinc-400">
                <ShieldCheck size={14} className="text-primary" />
                Permits
              </p>
              <p className="font-medium text-white">{destination.permits}</p>
            </div>
          </div>

          <div className="mt-8">
            <p className="mb-3 text-xs font-semibold tracking-[0.18em] text-zinc-400 uppercase">
              Trail Gallery
            </p>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {galleryImages.map((src, idx) => (
                <div key={`${src}-${idx}`} className="relative h-40 overflow-hidden rounded-xl">
                  <Image
                    src={src}
                    alt={`${destination.name} view ${idx + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          <Link
            href={`/packages/${destination.id}`}
            className="mt-8 inline-flex rounded-full bg-primary px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white hover:bg-primary/90"
          >
            Book This Trip
          </Link>
        </div>
      </section>
    </main>
  );
}
