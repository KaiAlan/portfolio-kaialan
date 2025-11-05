import type { Metadata, Viewport } from "next";
import { Roboto_Mono, Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/navbar/sidebar";
import Topbar from "@/components/navbar/topbar";
import MobileMenuBar from "@/components/navbar/mobile-menu";

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
  display: 'swap'
})

const inter = Inter({
  variable: "--font-inter",
  subsets: ['latin'],
  display: 'swap'
})

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ['latin'],
  display: 'swap'
})

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#000000",
};

const siteUrl =
  process.env.NEXT_PUBLIC_PORTFOLIO_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(`${siteUrl}`),
  title: {
    template: "%s | Kaialan Razz",
    default: "Kaialan Razz | UI/UX and Brand Designer",
  },
  description:
    "Professional portfolio showcasing kaialan's work in UI/UX, Web, Mobile and Brand design",
  keywords: ["ui", "ux", "ui/ux designer", "brand desgin", "web design", "mobile desgin", "designer", "portfolio"],
  authors: [{ name: "Kaialan Razz", url: `${siteUrl}` }],
  creator: "Kaialan Razz",
  publisher: "Kaialan Razz",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: `${siteUrl}`,
    siteName: "Kaialan Razz",
    title: "Kaialan | UI/UX and Brand Designer",
    description:
      "Professional portfolio showcasing kaialan's work in UI/UX, Web, Mobile and Brand design",
    images: [
      {
        url: "/images/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "Kaialan Razz",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@kaialan_",
    creator: "@kaialan_",
    title: "Kaialan | UI/UX and Brand Designer",
    description:
      "Professional portfolio showcasing kaialan's work in UI/UX, Web, Mobile and Brand design",
    images: ["/images/twitter-default.jpg"],
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code", // if needed
  },
  alternates: {
    canonical: `${siteUrl}`,
    languages: {
      "en-US": `${siteUrl}`,
      // Add other language versions if you have them
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${robotoMono.variable} ${inter.variable} ${spaceGrotesk.variable} antialiased flex flex-col justify-center items-center mx-auto relative bg-[#FCFCFC] text-[#000000]`}
      >
        <section className="relative w-full flex flex-col sm:flex-row">
          <Sidebar />
          <main className="w-full flex flex-col justify-start items-start gap-0">
            <Topbar />
          {children}
          </main>
          <MobileMenuBar />
        </section>
      </body>
    </html>
  );
}
