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
  title: "Astra Agency — Find the revenue you're already leaving on the table",
  description:
    "Paid media agency for brands spending $10K+/mo. We find your underperforming campaigns, misallocated budget, and creative that almost converts — then scale it.",
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
