import type { Metadata } from "next";
import { headers } from "next/headers";
import ZakatContent from "./_components/ZakatContent";
import { FAQ } from "./_lib/faq";

const COPY = {
  bm: {
    title: "Kalkulator Zakat Malaysia — Zakat Pendapatan & Simpanan",
    description:
      "Kira zakat pendapatan dan zakat simpanan anda. Berdasarkan nisab semasa, kadar 2.5%. Mudah, percuma dan tepat untuk semua negeri Malaysia.",
    category: "Kalkulator Zakat",
  },
  en: {
    title: "Malaysia Zakat Calculator — Income & Savings Zakat",
    description:
      "Calculate your income zakat and savings zakat. Based on the current nisab, at a rate of 2.5%. Simple, free and accurate for all Malaysian states.",
    category: "Zakat Calculator",
  },
};

export async function generateMetadata(): Promise<Metadata> {
  const locale = (await headers()).get("x-locale") === "en" ? "en" : "bm";
  const c = COPY[locale];
  const ogImage = `/api/og?title=${encodeURIComponent(c.title)}&icon=${encodeURIComponent("🌙")}&category=${encodeURIComponent(c.category)}`;

  return {
    title: c.title,
    description: c.description,
    keywords: [
      "kalkulator zakat",
      "zakat calculator malaysia",
      "zakat pendapatan",
      "zakat simpanan",
      "kira zakat",
      "nisab zakat",
      "zakat gaji",
      "income zakat calculator",
    ],
    alternates: {
      canonical: "/zakat",
      languages: { "ms-MY": "/zakat", "en-MY": "/zakat?lang=en", "x-default": "/zakat" },
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

export default function ZakatPage() {
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
      <ZakatContent />
    </>
  );
}
