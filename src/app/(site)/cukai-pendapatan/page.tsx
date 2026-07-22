import type { Metadata } from "next";
import { headers } from "next/headers";
import CukaiPendapatanContent from "./_components/CukaiPendapatanContent";
import { FAQ } from "./_lib/faq";

const COPY = {
  bm: {
    title: "Kalkulator Cukai Pendapatan Malaysia YA2024 — LHDN",
    description:
      "Kira cukai pendapatan peribadi Malaysia untuk Tahun Taksiran 2024/2025. Relief peribadi, KWSP, insurans, pendidikan — anggaran cukai dan PCB bulanan.",
    category: "Cukai Pendapatan",
  },
  en: {
    title: "Malaysia Income Tax Calculator YA2024 — LHDN",
    description:
      "Estimate your Malaysia personal income tax for Assessment Year 2024/2025. Personal relief, EPF, insurance, education — annual tax and monthly PCB estimate.",
    category: "Income Tax",
  },
};

export async function generateMetadata(): Promise<Metadata> {
  const locale = (await headers()).get("x-locale") === "en" ? "en" : "bm";
  const c = COPY[locale];
  const ogImage = `/api/og?title=${encodeURIComponent(c.title)}&icon=${encodeURIComponent("🧾")}&category=${encodeURIComponent(c.category)}`;

  return {
    title: c.title,
    description: c.description,
    keywords: [
      "kalkulator cukai pendapatan",
      "income tax calculator malaysia",
      "cukai pendapatan malaysia",
      "LHDN cukai",
      "PCB calculator",
      "relief cukai",
      "YA2024 tax",
      "personal income tax malaysia",
    ],
    alternates: {
      canonical: "/cukai-pendapatan",
      languages: { "ms-MY": "/cukai-pendapatan", "en-MY": "/cukai-pendapatan?lang=en", "x-default": "/cukai-pendapatan" },
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

export default function CukaiPendapatanPage() {
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
      <CukaiPendapatanContent />
    </>
  );
}
