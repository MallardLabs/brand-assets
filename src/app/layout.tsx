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

// Define the OGImage type
interface OGImage {
  url: string;
  width: number;
  height: number;
  alt: string;
}

// Existing TwitterMetadata and AppMetadata interfaces
interface TwitterMetadata {
  card: string;
  title: string;
  description: string;
  images: string[];
}

interface AppMetadata {
  metadataBase: URL;
  title: string;
  description: string;
  openGraph: {
      title: string;
      description: string;
      images: OGImage[]; // Use OGImage type here
      type: string;
  };
  twitter: TwitterMetadata;
}

export const metadata: AppMetadata = {
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
      alt: "Mallard Labs Brand Assets",
    },
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

const twitterMetadata = {
card: "summary_large_image",
title: "Brand Assets | Mallard Labs",
description: "Download the Mallard Lab Brand Kit here.",
images: ["/branddotmallard.webp"],
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>{String(metadata.title || "Brand Assets | Mallard Labs")}</title>
        <meta name="description" content={String(metadata.description || "Download the Mallard Lab Brand Kit here.")} />
        <meta property="og:title" content={String(metadata.openGraph?.title || "Brand Assets | Mallard Labs")} />
        <meta property="og:description" content={String(metadata.openGraph?.description || "Download the Mallard Lab Brand Kit here.")} />
        <meta property="og:image" content={String(Array.isArray(metadata.openGraph?.images) ? (metadata.openGraph.images[0] as OGImage)?.url : "/branddotmallard.webp")} />
        <meta property="og:image:width" content={String(Array.isArray(metadata.openGraph?.images) ? (metadata.openGraph.images[0] as OGImage)?.width : 1200)} />
        <meta property="og:image:height" content={String(Array.isArray(metadata.openGraph?.images) ? (metadata.openGraph.images[0] as OGImage)?.height : 630)} />
        <meta property="twitter:card" content={twitterMetadata.card} />
        <meta property="twitter:title" content={twitterMetadata.title} />
        <meta property="twitter:description" content={twitterMetadata.description} />
        <meta property="twitter:image" content={twitterMetadata.images[0]} />
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