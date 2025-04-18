import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar.tsx/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#000000',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://your-portfolio-domain.com'),
  title: {
    template: '%s | Kaialan Razz',
    default: 'Kaialan Razz | Developer & Designer',
  },
  description: 'Professional portfolio showcasing my work in web development, design and creative coding',
  keywords: ['typescript', 'next.js', 'web developer', 'designer', 'portfolio'],
  authors: [{ name: 'Kaialan Razz', url: 'https://your-portfolio-domain.com' }],
  creator: 'Kaialan Razz',
  publisher: 'Kaialan Razz',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-video-preview': -1,
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://your-portfolio-domain.com',
    siteName: 'Your Name | Portfolio',
    title: 'Your Name | Developer & Designer',
    description: 'Professional portfolio showcasing my work in web development, design and creative coding',
    images: [
      {
        url: '/images/og-default.jpg',
        width: 1200,
        height: 630,
        alt: 'Your Name Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@yourtwitterhandle',
    creator: '@yourtwitterhandle',
    title: 'Your Name | Developer & Designer',
    description: 'Professional portfolio showcasing my work in web development, design and creative coding',
    images: ['/images/twitter-default.jpg'],
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code', // if needed
  },
  alternates: {
    canonical: 'https://your-portfolio-domain.com',
    languages: {
      'en-US': 'https://your-portfolio-domain.com',
      // Add other language versions if you have them
    },
  },
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col justify-center items-center mx-auto`}
      >
        <Navbar />
      {children}
      </body>
    </html>
  );
}
