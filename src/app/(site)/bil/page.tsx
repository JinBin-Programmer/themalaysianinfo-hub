import type { Metadata } from "next";
import { headers } from "next/headers";
import BillContent from "./_components/BillContent";
import { FAQ } from "./_lib/faq";

const COPY = {
  bm: {
    title: "Kira Bil & Bahagi Restoran — Kalkulator Tip & SST",
    description:
      "Kira Bil & Bahagi Restoran percuma. Bahagi bil antara kawan, tambah tip, SST 6% dan caj servis 10%, dan lihat jumlah setiap orang dengan serta-merta.",
    category: "Kira Bil",
  },
  en: {
    title: "Restaurant Bill Split & Tip Calculator — Malaysia",
    description:
      "Free bill split calculator for Malaysia. Split the bill among friends, add a tip, SST 6% and 10% service charge, and see each person's share instantly.",
    category: "Bill Splitter",
  },
};

export async function generateMetadata(): Promise<Metadata> {
  const locale = (await headers()).get("x-locale") === "en" ? "en" : "bm";
  const c = COPY[locale];
  const ogImage = `/api/og?title=${encodeURIComponent(c.title)}&icon=${encodeURIComponent("🍽️")}&category=${encodeURIComponent(c.category)}`;

  return {
    title: c.title,
    description: c.description,
    keywords: [
      "kira bil",
      "bahagi bil restoran",
      "bill split calculator malaysia",
      "tip calculator malaysia",
      "kalkulator SST",
      "caj servis 10%",
      "split bill",
      "bahagi bil kawan",
    ],
    alternates: {
      canonical: "/bil",
      languages: { "ms-MY": "/bil", "en-MY": "/bil?lang=en", "x-default": "/bil" },
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

export default function BillPage() {
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
      <BillContent />
    </>
  );
}
