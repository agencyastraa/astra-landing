import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Montserrat, JetBrains_Mono } from "next/font/google";
import "../globals.css";
import { dictionaries, hasLocale, locales } from "./content";

const display = Montserrat({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-display",
});

const mono = JetBrains_Mono({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-mono",
});

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const d = dictionaries[lang];
  return {
    metadataBase: new URL("https://www.agencyastra.com"),
    title: d.meta.title,
    description: d.meta.description,
    alternates: {
      canonical: `/${lang}`,
      languages: { en: "/en", es: "/es", "x-default": "/en" },
    },
    openGraph: { title: d.meta.title, description: d.meta.description, locale: lang === "es" ? "es_ES" : "en_US" },
  };
}

export default async function RootLayout({ children, params }: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  return (
    <html lang={lang} data-act="hero" className={`${display.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
