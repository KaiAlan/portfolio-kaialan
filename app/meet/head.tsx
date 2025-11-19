import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Google Meet | Kaialan",
  description:
    "I pray thee, grace this call with thy presence.",
  metadataBase: new URL('https://meet.kaialan.com'),
  openGraph: {
    title: "Google Meet | Kaialan",
    description:
      "I pray thee, grace this call with thy presence.",
    url: "https://meet.kaialan.com",
    siteName: "Kaialan",
    images: [
      {
        url: "/images/og-default.jpg",
        width: 1200,
        height: 630,
        alt: 'Google Meet | Kaialan'
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Google Meet | Kaialan",
    description:
      "I pray thee, grace this call with thy presence.",
    images: ["/images/twitter-default.jpg"],
  },
};
