import type { Metadata } from "next";
import { headers } from "next/headers";
import SimpananContent from "./_components/SimpananContent";
import { FAQ } from "./_lib/faq";

const COPY = {
  bm: {
    title: "Kalkulator Simpanan Malaysia — FD, ASB, Tabung Haji, EPF",
    description:
      "Kira pertumbuhan simpanan atau sasaran kewangan anda dengan faedah kompaun. Sokongan kadar FD, ASB, Tabung Haji dan EPF. Mudah, percuma dan tepat.",
    category: "Kalkulator Simpanan",
  },
  en: {
    title: "Malaysia Savings Calculator — FD, ASB, Tabung Haji, EPF",
    description:
      "Calculate your savings growth or financial goal with compound interest. Presets for FD, ASB, Tabung Haji and EPF rates. Simple, free and accurate.",
    category: "Savings Calculator",
  },
};

export async function generateMetadata(): Promise<Metadata> {
  const locale = (await headers()).get("x-locale") === "en" ? "en" : "bm";
  const c = COPY[locale];
  const ogImage = `/api/og?title=${encodeURIComponent(c.title)}&icon=${encodeURIComponent("💵")}&category=${encodeURIComponent(c.category)}`;

  return {
    title: c.title,
    description: c.description,
    keywords: [
      "kalkulator simpanan",
      "savings calculator malaysia",
      "fd calculator",
      "asb calculator",
      "kalkulator fd bank malaysia",
      "compound interest calculator",
      "kalkulator faedah kompaun",
      "kalkulator epf",
    ],
    alternates: {
      canonical: "/simpanan",
      languages: { "ms-MY": "/simpanan", "en-MY": "/simpanan?lang=en", "x-default": "/simpanan" },
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

export default function SimpananPage() {
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
      <SimpananContent />
    </>
  );
}
