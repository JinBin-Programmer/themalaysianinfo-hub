import type { Metadata } from "next";
import { headers } from "next/headers";
import ElectionContent from "./_components/ElectionContent";
import { ELECTION_FAQ } from "./_lib/faq";

const COPY = {
  bm: {
    title: "Pilihan Raya Malaysia — PRN Johor & N. Sembilan 2026, Keputusan PRU15",
    description:
      "PRN Johor (11 Julai) & Negeri Sembilan (1 Ogos 2026) — tarikh penting, kira detik & kerusi. Plus keputusan PRU15 2022 dan kerajaan setiap negeri: peta interaktif, Menteri Besar & pemenang setiap kawasan.",
    category: "Pilihan Raya",
  },
  en: {
    title: "Malaysia Elections — Johor & N. Sembilan 2026, GE15 Results",
    description:
      "Johor (11 July) & Negeri Sembilan (1 Aug 2026) state elections — key dates and countdown, plus GE15 2022 results and every state government: interactive map, Chief Ministers and seat winners.",
    category: "Elections",
  },
};

export async function generateMetadata(): Promise<Metadata> {
  const locale = (await headers()).get("x-locale") === "en" ? "en" : "bm";
  const c = COPY[locale];
  const ogImage = `/api/og?title=${encodeURIComponent(c.title)}&icon=${encodeURIComponent("🗳️")}&category=${encodeURIComponent(c.category)}`;

  return {
    title: c.title,
    description: c.description,
    keywords: [
      "prn johor 2026",
      "prn negeri sembilan 2026",
      "tarikh prn johor",
      "pilihan raya johor 2026",
      "pilihan raya malaysia",
      "keputusan pru15",
      "ge15 results malaysia",
      "keputusan pilihan raya negeri",
      "menteri besar setiap negeri",
      "malaysia election results by state",
      "peta pilihan raya malaysia",
      "prn sabah 2025",
    ],
    alternates: {
      canonical: "/pilihanraya",
      languages: { "ms-MY": "/pilihanraya", "en-MY": "/pilihanraya?lang=en", "x-default": "/pilihanraya" },
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

export default function PilihanRayaPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: ELECTION_FAQ.map((f) => ({
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
      <ElectionContent />
    </>
  );
}
