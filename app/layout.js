/**
 * =========================================================================
 * 💍 Royal Wedding Invitation Experience
 * 👨‍💻 Developed by: Vicky Prasad Mahato
 * 🌐 Website: https://abvicky.in
 * =========================================================================
 */

import localFont from "next/font/local";
import { Great_Vibes, Playfair_Display, Cormorant_Garamond, Cinzel, Noto_Serif_Devanagari } from "next/font/google";
import wedding from "@/data/wedding";
import "./globals.css";

const names = localFont({
  src: "../public/fonts/PinyonScript-Regular.ttf",
  variable: "--font-names",
  display: "swap",
});
const heading = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-heading",
  display: "swap",
});
const hand = Great_Vibes({ subsets: ["latin"], weight: "400", variable: "--font-hand", display: "swap" });
const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});
const caps = Cinzel({ subsets: ["latin"], weight: ["400", "600", "700"], variable: "--font-caps", display: "swap" });
const deva = Noto_Serif_Devanagari({ subsets: ["devanagari"], weight: ["400", "500", "600", "700"], variable: "--font-deva", display: "swap" });

export const metadata = {
  metadataBase: new URL(wedding.siteUrl),
  title: wedding.title,
  description: wedding.description,
  authors: [{ name: "Vicky Prasad Mahato", url: "https://abvicky.in" }],
  creator: "Vicky Prasad Mahato - abvicky.in",
  publisher: "Vicky Prasad Mahato",
  icons: {
    icon: "/images/logo1.png",
    shortcut: "/images/logo1.png",
    apple: "/images/logo1.png",
  },
  openGraph: {
    title: wedding.title,
    description: wedding.description,
    type: "website",
    locale: "en_IN",
    url: wedding.siteUrl,
    siteName: wedding.title,
    images: [
      {
        url: "/images/og-logo2.jpg",
        width: 1080,
        height: 1080,
        alt: wedding.title,
        type: "image/jpeg",
      },
      {
        url: "/images/og-logo2.png",
        width: 1080,
        height: 1080,
        alt: wedding.title,
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: wedding.title,
    description: wedding.description,
    images: ["/images/og-logo2.jpg"],
  },
  other: {
    developer: "Vicky Prasad Mahato - abvicky.in",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#511E2C",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${names.variable} ${heading.variable} ${hand.variable} ${serif.variable} ${caps.variable} ${deva.variable}`}
    >
      <body className="font-serif">{children}</body>
    </html>
  );
}
