import type { Metadata } from "next";
import { headers } from "next/headers";
import KonversiContent from "./_components/KonversiContent";
import { FAQ } from "./_lib/faq";

const COPY = {
  bm: {
    title: "Penukar Unit Malaysia — Tukar Panjang, Berat, Suhu, Isipadu, Luas",
    description:
      "Penukar Unit percuma untuk Malaysia. Tukar cm ke inci, kg ke paun, Celsius ke Fahrenheit, liter ke galen, ekar ke hektar dan banyak lagi — mudah, pantas dan tepat.",
    category: "Penukar Unit",
  },
  en: {
    title: "Unit Converter — Length, Weight, Temperature, Volume, Area",
    description:
      "Free unit converter for Malaysia. Convert cm to inches, kg to lbs, Celsius to Fahrenheit, litres to gallons, acres to hectares and more — fast and accurate.",
    category: "Unit Converter",
  },
};

export async function generateMetadata(): Promise<Metadata> {
  const locale = (await headers()).get("x-locale") === "en" ? "en" : "bm";
  const c = COPY[locale];
  const ogImage = `/api/og?title=${encodeURIComponent(c.title)}&icon=${encodeURIComponent("📏")}&category=${encodeURIComponent(c.category)}`;

  return {
    title: c.title,
    description: c.description,
    keywords: [
      "penukar unit",
      "unit converter malaysia",
      "tukar cm ke inch",
      "convert kg to lbs malaysia",
      "tukar celsius ke fahrenheit",
      "tukar ekar ke hektar",
      "penukar isipadu",
      "unit converter",
    ],
    alternates: {
      canonical: "/konversi",
      languages: { "ms-MY": "/konversi", "en-MY": "/konversi?lang=en", "x-default": "/konversi" },
    },
    openGraph: {
      type: "website",
      locale: locale === "en" ? "en_MY" : "ms_MY",
      title: c.title,
      description: c.description,
      images: [{ url: ogImage, width: 1200, height: 630, alt: c.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: c.title,
      description: c.description,
      images: [ogImage],
    },
  };
}

export default function KonversiPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <KonversiContent />
    </>
  );
}
