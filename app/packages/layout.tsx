import type { Metadata } from "next";
import { absoluteUrl, SITE_NAME } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Nepal Trekking Packages",
  description:
    "Compare guided Nepal trekking packages with itinerary highlights, pricing tiers, and support details for Everest, Annapurna, Langtang, and more.",
  alternates: {
    canonical: "/packages",
  },
  openGraph: {
    title: `${SITE_NAME} | Nepal Trekking Packages`,
    description:
      "Compare guided Nepal trekking packages with itinerary highlights, pricing tiers, and support details.",
    url: "/packages",
    type: "website",
    images: [
      {
        url: absoluteUrl("/backgrounds/bg8.jpeg"),
        width: 1200,
        height: 630,
        alt: "Nepal trekking packages",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | Nepal Trekking Packages`,
    description:
      "Compare guided Nepal trekking packages with itinerary highlights, pricing tiers, and support details.",
    images: [absoluteUrl("/backgrounds/bg8.jpeg")],
  },
};

export default function PackagesLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
