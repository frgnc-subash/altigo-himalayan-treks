import type { Metadata } from "next";
import { absoluteUrl, SITE_NAME } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Book Your Trek in Nepal",
  description:
    "Book your Himalayan trek in Nepal with Altigo Himalayan Treks. Submit your dates, group size, route preferences, and custom requirements.",
  alternates: {
    canonical: "/booking",
  },
  openGraph: {
    title: `${SITE_NAME} | Book Your Trek`,
    description:
      "Submit your trek dates, group size, and route preferences to start your guided Nepal Himalayan trip.",
    url: "/booking",
    type: "website",
    images: [
      {
        url: absoluteUrl("/backgrounds/bg7.jpeg"),
        width: 1200,
        height: 630,
        alt: "Book a trek in Nepal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | Book Your Trek`,
    description:
      "Submit your trek dates, group size, and route preferences to start your guided Nepal Himalayan trip.",
    images: [absoluteUrl("/backgrounds/bg7.jpeg")],
  },
};

export default function BookingLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
