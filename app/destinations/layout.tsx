import type { Metadata } from "next";
import { absoluteUrl, SITE_NAME } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Trekking Destinations in Nepal",
  description:
    "Explore trekking destinations in Nepal including Everest, Annapurna, Langtang, Poon Hill, and Upper Mustang with route insights and trek facts.",
  alternates: {
    canonical: "/destinations",
  },
  openGraph: {
    title: `${SITE_NAME} | Trekking Destinations`,
    description:
      "Explore trekking destinations in Nepal including Everest, Annapurna, Langtang, Poon Hill, and Upper Mustang.",
    url: "/destinations",
    type: "website",
    images: [
      {
        url: absoluteUrl("/backgrounds/bg5.jpeg"),
        width: 1200,
        height: 630,
        alt: "Trekking destinations in Nepal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | Trekking Destinations`,
    description:
      "Explore trekking destinations in Nepal including Everest, Annapurna, Langtang, Poon Hill, and Upper Mustang.",
    images: [absoluteUrl("/backgrounds/bg5.jpeg")],
  },
};

export default function DestinationsLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
