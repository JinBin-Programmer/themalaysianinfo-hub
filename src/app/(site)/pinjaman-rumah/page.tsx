import type { Metadata } from "next";
import { headers } from "next/headers";
import PinjamanRumahContent from "./_components/PinjamanRumahContent";
import { FAQ } from "./_lib/faq";

const COPY = {
  bm: {
    title: "Kalkulator Pinjaman Rumah Malaysia — Ansuran, Duti Setem & Kos",
    description:
      "Kira ansuran bulanan pinjaman rumah, duti setem MOT, yuran guaman dan jumlah faedah. Kalkulator percuma dan mudah untuk merancang pembelian rumah di Malaysia.",
    category: "Pinjaman Rumah",
  },
  en: {
    title: "Malaysia Housing Loan Calculator — Installment, Stamp Duty & Costs",
    description:
      "Calculate monthly home loan installment, MOT stamp duty, legal fees and total interest. A free, easy calculator for planning a home purchase in Malaysia.",
    category: "Housing Loan",
  },
};

export async function generateMetadata(): Promise<Metadata> {
  const locale = (await headers()).get("x-locale") === "en" ? "en" : "bm";
  const c = COPY[locale];
  const ogImage = `/api/og?title=${encodeURIComponent(c.title)}&icon=${encodeURIComponent("🏠")}&category=${encodeURIComponent(c.category)}`;

  return {
    title: c.title,
    description: c.description,
    keywords: [
      "kalkulator pinjaman rumah",
      "housing loan calculator malaysia",
      "kira ansuran rumah",
      "duti setem MOT",
      "yuran guaman pinjaman rumah",
      "kalkulator ansuran bulanan",
      "home loan installment malaysia",
      "stamp duty calculator malaysia",
    ],
    alternates: {
      canonical: "/pinjaman-rumah",
      languages: { "ms-MY": "/pinjaman-rumah", "en-MY": "/pinjaman-rumah?lang=en", "x-default": "/pinjaman-rumah" },
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

export default function PinjamanRumahPage() {
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
      <PinjamanRumahContent />
    </>
  );
}
