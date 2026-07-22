import type { Metadata } from "next";
import { headers } from "next/headers";
import OtContent from "./_components/OtContent";
import { FAQ } from "./_lib/faq";

const COPY = {
  bm: {
    title: "Kalkulator OT Malaysia — Kira Kerja Lebih Masa EA 1955",
    description:
      "Kira bayaran kerja lebih masa (OT) Malaysia mengikut Akta Kerja 1955. Hari biasa 1.5x, hari rehat 2x, cuti umum 3x — dengan kadar sejam & kadar harian.",
    category: "Kalkulator OT",
  },
  en: {
    title: "Malaysia Overtime (OT) Calculator — Employment Act 1955",
    description:
      "Calculate Malaysia overtime (OT) pay under the Employment Act 1955. Normal day 1.5x, rest day 2x, public holiday 3x — with hourly and daily rates.",
    category: "Overtime Calculator",
  },
};

export async function generateMetadata(): Promise<Metadata> {
  const locale = (await headers()).get("x-locale") === "en" ? "en" : "bm";
  const c = COPY[locale];
  const ogImage = `/api/og?title=${encodeURIComponent(c.title)}&icon=${encodeURIComponent("⏰")}&category=${encodeURIComponent(c.category)}`;

  return {
    title: c.title,
    description: c.description,
    keywords: [
      "kalkulator OT malaysia",
      "kira overtime malaysia",
      "overtime calculator malaysia",
      "kerja lebih masa",
      "akta kerja 1955",
      "kadar OT 1.5x 2x 3x",
      "kira gaji OT",
      "employment act 1955 overtime",
    ],
    alternates: {
      canonical: "/ot",
      languages: { "ms-MY": "/ot", "en-MY": "/ot?lang=en", "x-default": "/ot" },
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

export default function OtPage() {
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
      <OtContent />
    </>
  );
}
