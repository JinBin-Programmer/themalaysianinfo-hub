import type { Metadata } from "next";
import PTPTNContent from "./_components/PTPTNContent";
import { PTPTN_FAQ } from "./_lib/faq";

export const metadata: Metadata = {
  title: "Kalkulator PTPTN — Kira Bayaran Balik Pinjaman Pelajaran",
  description:
    "Kira bayaran balik pinjaman PTPTN anda. Masukkan jumlah pinjaman dan gaji untuk dapatkan cadangan bayaran bulanan, jumlah keseluruhan dan tempoh bayaran. Termasuk caj perkhidmatan 1% setahun.",
  keywords: [
    "kalkulator ptptn",
    "ptptn repayment calculator",
    "bayar balik ptptn",
    "ptptn calculator malaysia",
    "cara bayar ptptn",
    "ptptn monthly payment",
  ],
  alternates: { canonical: "/ptptn" },
  openGraph: {
    type: "website",
    locale: "ms_MY",
    title: "Kalkulator PTPTN — Bayaran Balik Pinjaman Pelajaran",
    description:
      "Kira bayaran balik pinjaman PTPTN anda — termasuk caj perkhidmatan 1% setahun, tempoh bayaran dan jumlah keseluruhan.",
  },
};

export default function PTPTNPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: PTPTN_FAQ.map((f) => ({
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
      <PTPTNContent />
    </>
  );
}
