import type { Metadata } from "next";
import { Lilita_One, Inter } from "next/font/google";
import "./globals.css";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const lilitaOne = Lilita_One({ 
  weight: '400',
  subsets: ["latin"],
  variable: '--font-lilita-one',
});

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: "Anime Reborn Codes (November 2024) - Updated Daily",
  description: "Get the full list of all Anime Reborn codes for free gems, trait crystals, and keys. Updated daily with the latest working Anime Reborn codes!",
  keywords: "anime reborn codes, anime reborn",
  openGraph: {
    title: "Anime Reborn Codes 2024 - Latest Working Codes",
    description: "Get the full list of all Anime Reborn codes for free gems, trait crystals, and keys. Updated daily with working codes.",
    type: "website",
    url: "https://animereborncodes.org",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anime Reborn Codes 2024",
    description: "Get the latest Anime Reborn codes for free gems, trait crystals, and keys.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${lilitaOne.variable} ${inter.variable}`}>
      <head>
        <GoogleAnalytics />
      </head>
      <body className="font-inter">{children}</body>
    </html>
  );
}
