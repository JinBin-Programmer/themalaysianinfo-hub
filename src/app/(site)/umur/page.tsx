import type { Metadata } from "next";
import { headers } from "next/headers";
import UmurContent from "./_components/UmurContent";
import { UMUR_FAQ } from "./_lib/faq";

const COPY = {
  bm: {
    title: "Kalkulator Umur — Kira Umur Tepat dalam Tahun, Bulan & Hari",
    description:
      "Kira umur tepat anda dalam tahun, bulan, hari dan jam. Ketahui hari anda dilahirkan, generasi dan berapa hari hingga hari lahir seterusnya.",
    category: "Kalkulator Umur",
  },
  en: {
    title: "Age Calculator — Exact Age in Years, Months & Days",
    description:
      "Calculate your exact age in years, months, days and hours. Find out what day you were born, your generation, and how many days until your next birthday.",
    category: "Age Calculator",
  },
};

export async function generateMetadata(): Promise<Metadata> {
  const locale = (await headers()).get("x-locale") === "en" ? "en" : "bm";
  const c = COPY[locale];
  const ogImage = `/api/og?title=${encodeURIComponent(c.title)}&icon=${encodeURIComponent("🎂")}&category=${encodeURIComponent(c.category)}`;

  return {
    title: c.title,
    description: c.description,
    keywords: [
      "kalkulator umur",
      "age calculator malaysia",
      "kira umur",
      "cara kira umur",
      "berapa umur saya",
      "age calculator bm",
    ],
    alternates: {
      canonical: "/umur",
      languages: { "ms-MY": "/umur", "en-MY": "/umur?lang=en", "x-default": "/umur" },
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

export default function UmurPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: UMUR_FAQ.map((f) => ({
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
      <UmurContent />
    </>
  );
}
