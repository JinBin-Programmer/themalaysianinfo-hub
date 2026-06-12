import type { Metadata } from "next";
import KWSPContent from "./_components/KWSPContent";
import { KWSP_FAQ } from "./_lib/faq";

export const metadata: Metadata = {
  title: "Kalkulator KWSP / EPF Malaysia — Anggaran Simpanan Bersara",
  description:
    "Kalkulator KWSP / EPF Malaysia percuma. Anggar baki simpanan anda semasa bersara berdasarkan gaji, umur, baki semasa dan kadar dividen KWSP. Lihat pecahan caruman pekerja & majikan.",
  keywords: [
    "kalkulator kwsp",
    "epf calculator malaysia",
    "kalkulator epf",
    "caruman kwsp",
    "kwsp contribution calculator",
    "anggaran simpanan kwsp",
    "epf retirement calculator",
    "dividen kwsp",
  ],
  alternates: { canonical: "/kwsp" },
  openGraph: {
    type: "website",
    locale: "ms_MY",
    title: "Kalkulator KWSP / EPF Malaysia — Anggaran Simpanan Bersara",
    description:
      "Anggar baki simpanan KWSP anda semasa bersara berdasarkan gaji, umur, baki semasa dan kadar dividen.",
  },
};

export default function KWSPPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: KWSP_FAQ.map((f) => ({
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
      <KWSPContent />
    </>
  );
}
