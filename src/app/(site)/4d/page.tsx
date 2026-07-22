import type { Metadata } from "next";
import { headers } from "next/headers";
import FourDContent from "./_components/FourDContent";
import { FAQ } from "./_lib/faq";

const COPY = {
  bm: {
    title: "Jadual Cabutan 4D Malaysia — Magnum TOTO Da Ma Cai",
    description:
      "Jadual cabutan 4D Malaysia — hari cabutan Rabu, Sabtu & Ahad, keputusan dari 7 malam. Pautan terus ke keputusan rasmi Magnum 4D, Sports TOTO dan Da Ma Cai.",
    category: "Jadual 4D",
  },
  en: {
    title: "Malaysia 4D Draw Schedule — Magnum, TOTO, Da Ma Cai",
    description:
      "Malaysia 4D draw schedule — draws on Wednesday, Saturday and Sunday, results from 7pm. Direct links to official results from Magnum 4D, Sports TOTO and Da Ma Cai.",
    category: "4D Results",
  },
};

export async function generateMetadata(): Promise<Metadata> {
  const locale = (await headers()).get("x-locale") === "en" ? "en" : "bm";
  const c = COPY[locale];
  const ogImage = `/api/og?title=${encodeURIComponent(c.title)}&icon=${encodeURIComponent("🎰")}&category=${encodeURIComponent(c.category)}`;

  return {
    title: c.title,
    description: c.description,
    keywords: [
      "jadual cabutan 4d",
      "hari cabutan 4d",
      "keputusan 4d",
      "magnum 4d",
      "sports toto result",
      "da ma cai result",
      "4d malaysia",
      "pukul berapa keputusan 4d",
    ],
    alternates: {
      canonical: "/4d",
      languages: { "ms-MY": "/4d", "en-MY": "/4d?lang=en", "x-default": "/4d" },
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

export default function FourDPage() {
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
      <FourDContent />
    </>
  );
}
