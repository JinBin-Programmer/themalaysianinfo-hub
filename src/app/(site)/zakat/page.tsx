import type { Metadata } from "next";
import ZakatContent from "./_components/ZakatContent";
import { FAQ } from "./_lib/faq";

export const metadata: Metadata = {
  title: "Kalkulator Zakat Malaysia — Zakat Pendapatan & Simpanan",
  description:
    "Kira zakat pendapatan dan zakat simpanan anda. Berdasarkan nisab semasa, kadar 2.5%. Mudah, percuma dan tepat untuk semua negeri Malaysia.",
  keywords: [
    "kalkulator zakat",
    "zakat calculator malaysia",
    "zakat pendapatan",
    "zakat simpanan",
    "kira zakat",
    "nisab zakat",
    "zakat gaji",
    "income zakat calculator",
  ],
  alternates: { canonical: "/zakat" },
  openGraph: {
    type: "website",
    locale: "ms_MY",
    title: "Kalkulator Zakat Malaysia — Zakat Pendapatan & Simpanan",
    description:
      "Kira zakat pendapatan dan zakat simpanan anda berdasarkan nisab semasa pada kadar 2.5%. Percuma dan mudah.",
  },
};

export default function ZakatPage() {
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
      <ZakatContent />
    </>
  );
}
