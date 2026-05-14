import type { Metadata } from "next";
import { Barlow_Condensed, DM_Sans } from "next/font/google";
import "./globals.css";

const barlowCondensed = Barlow_Condensed({
  weight: ["700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-display",
});

const dmSans = DM_Sans({
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Astra Agency — Meta Ads for DTC Ecommerce Brands",
  description:
    "Paid media agency for DTC ecommerce brands with physical products spending $8K+/mo on Meta Ads. We find where your ad spend is leaking, fix it, and scale what's actually working.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${barlowCondensed.variable} ${dmSans.variable}`}
      style={{ fontFamily: "var(--font-body), sans-serif" }}
    >
      <body>{children}</body>
    </html>
  );
}
