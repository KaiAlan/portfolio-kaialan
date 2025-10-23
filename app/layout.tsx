import type { Metadata, Viewport } from "next";
import { Roboto_Mono, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/navbar";
import Sidebar from "@/components/navbar/sidebar";

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
    default: "Kaialan Razz | Developer & Designer",
  },
  description:
    "Professional portfolio showcasing my work in web development, design and creative coding",
  keywords: ["typescript", "next.js", "web developer", "designer", "portfolio"],
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
    title: "Kaialan Razz | Developer & Designer",
    description:
      "Professional portfolio showcasing my work in web development, design and creative coding",
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
    title: "Kaialan | UI/UX and Graphics Designer",
    description:
      "Professional portfolio showcasing my work in web development, design and creative coding",
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
        className={`${robotoMono.variable} ${inter.variable} antialiased flex flex-col justify-center items-center mx-auto relative bg-[#FCFCFC] text-[#000000]`}
      >
        {/* <Navbar /> */}
        <section className="relative w-full flex">
          <Sidebar />
          {children}
        </section>
      </body>
    </html>
  );
}
