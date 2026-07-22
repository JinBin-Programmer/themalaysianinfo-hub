import type { Metadata } from "next";
import { headers } from "next/headers";
import KWSPContent from "./_components/KWSPContent";
import { KWSP_FAQ } from "./_lib/faq";

const COPY = {
  bm: {
    title: "Kalkulator KWSP / EPF Malaysia — Anggaran Simpanan Bersara",
    description:
      "Kalkulator KWSP / EPF Malaysia percuma. Anggar baki simpanan anda semasa bersara berdasarkan gaji, umur, baki semasa dan kadar dividen KWSP. Lihat pecahan caruman pekerja & majikan.",
    category: "Kalkulator KWSP",
  },
  en: {
    title: "Malaysia EPF / KWSP Calculator — Retirement Savings Estimate",
    description:
      "Free Malaysia EPF/KWSP calculator. Estimate your retirement savings based on salary, age, current balance and dividend rate. See the employee & employer breakdown.",
    category: "EPF Calculator",
  },
};

export async function generateMetadata(): Promise<Metadata> {
  const locale = (await headers()).get("x-locale") === "en" ? "en" : "bm";
  const c = COPY[locale];
  const ogImage = `/api/og?title=${encodeURIComponent(c.title)}&icon=${encodeURIComponent("🏦")}&category=${encodeURIComponent(c.category)}`;

  return {
    title: c.title,
    description: c.description,
    keywords: [
      "kalkulator kwsp",
      "epf calculator malaysia",
      "kalkulator epf",
      "caruman kwsp",
      "kwsp contribution calculator",
      "anggaran simpanan kwsp",
      "epf retirement calculator",
      "dividen kwsp",
    ],
    alternates: {
      canonical: "/kwsp",
      languages: { "ms-MY": "/kwsp", "en-MY": "/kwsp?lang=en", "x-default": "/kwsp" },
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

export default function KWSPPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: KWSP_FAQ.map((f) => ({
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
      <KWSPContent />
    </>
  );
}
