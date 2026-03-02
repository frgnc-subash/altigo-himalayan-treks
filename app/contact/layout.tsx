import type { Metadata } from "next";
import { absoluteUrl, SITE_NAME } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Contact Altigo Himalayan Treks",
  description:
    "Contact Altigo Himalayan Treks in Kathmandu for trek planning, custom itineraries, permits, and guided Himalayan adventures in Nepal.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: `Contact ${SITE_NAME}`,
    description:
      "Reach our Kathmandu team for trek planning, custom itineraries, permits, and guided Himalayan adventures.",
    url: "/contact",
    type: "website",
    images: [
      {
        url: absoluteUrl("/backgrounds/bg1.jpeg"),
        width: 1200,
        height: 630,
        alt: "Contact Altigo Himalayan Treks",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Contact ${SITE_NAME}`,
    description:
      "Reach our Kathmandu team for trek planning, custom itineraries, permits, and guided Himalayan adventures.",
    images: [absoluteUrl("/backgrounds/bg1.jpeg")],
  },
};

export default function ContactLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
