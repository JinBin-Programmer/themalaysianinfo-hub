import type { Metadata } from "next";
import { headers } from "next/headers";
import CukaiJalanContent from "./_components/CukaiJalanContent";
import { FAQ } from "./_lib/faq";

const COPY = {
  bm: {
    title: "Kalkulator Cukai Jalan Malaysia — Kereta & Motosikal",
    description:
      "Semak dan kira kadar cukai jalan untuk kereta dan motosikal di Malaysia. Semenanjung, Sabah dan Sarawak. Anggaran mengikut kapasiti enjin (CC).",
    category: "Cukai Jalan",
  },
  en: {
    title: "Malaysia Road Tax Calculator — Cars & Motorcycles",
    description:
      "Check and estimate road tax rates for cars and motorcycles in Malaysia — Peninsula, Sabah and Sarawak, based on engine capacity (CC).",
    category: "Road Tax",
  },
};

export async function generateMetadata(): Promise<Metadata> {
  const locale = (await headers()).get("x-locale") === "en" ? "en" : "bm";
  const c = COPY[locale];
  const ogImage = `/api/og?title=${encodeURIComponent(c.title)}&icon=${encodeURIComponent("🚗")}&category=${encodeURIComponent(c.category)}`;

  return {
    title: c.title,
    description: c.description,
    keywords: [
      "cukai jalan malaysia",
      "road tax calculator malaysia",
      "kalkulator cukai jalan",
      "road tax kereta",
      "cukai jalan motosikal",
      "myeg road tax",
      "kadar cukai jalan jpj",
    ],
    alternates: {
      canonical: "/cukai-jalan",
      languages: { "ms-MY": "/cukai-jalan", "en-MY": "/cukai-jalan?lang=en", "x-default": "/cukai-jalan" },
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

export default function CukaiJalanPage() {
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
      <CukaiJalanContent />
    </>
  );
}
