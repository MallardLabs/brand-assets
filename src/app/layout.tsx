'use client'

import { LoadingScreen } from "@/components/loading";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: '--font-inter',
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const metadata = {
  metadataBase: new URL("https://brand.mallardlabs.xyz"),
  title: "Brand Assets | Mallard Labs",
  description: "Download the Mallard Lab Brand Kit here.",
  openGraph: {
    title: "Brand Assets | Mallard Labs",
    description: "Download the Mallard Lab Brand Kit here.",
    images: [
      {
        url: "/branddotmallard.webp",
        width: 1200,
        height: 630,
        alt: "Mallard Labs Brand Assets"
      }
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Brand Assets | Mallard Labs",
    description: "Download the Mallard Lab Brand Kit here.",
    images: ["/branddotmallard.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} antialiased`}
      >
        <LoadingScreen />
        {children}
      </body>
    </html>
  );
}