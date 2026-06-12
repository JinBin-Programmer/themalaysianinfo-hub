import type { Metadata } from "next";
import CukaiPendapatanContent from "./_components/CukaiPendapatanContent";
import { FAQ } from "./_lib/faq";

export const metadata: Metadata = {
  title: "Kalkulator Cukai Pendapatan Malaysia YA2024 — LHDN",
  description:
    "Kira cukai pendapatan peribadi Malaysia untuk Tahun Taksiran 2024/2025. Relief peribadi, KWSP, insurans, pendidikan — anggaran cukai dan PCB bulanan.",
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
  alternates: { canonical: "/cukai-pendapatan" },
  openGraph: {
    type: "website",
    locale: "ms_MY",
    title: "Kalkulator Cukai Pendapatan Malaysia YA2024 — LHDN",
    description:
      "Kira cukai pendapatan peribadi Malaysia YA2024/2025 — relief, KWSP, insurans, anggaran cukai dan PCB bulanan.",
  },
};

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
