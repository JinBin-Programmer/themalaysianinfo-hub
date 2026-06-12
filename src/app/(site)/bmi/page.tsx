import type { Metadata } from "next";
import BMIContent from "./_components/BMIContent";
import { BMI_FAQ } from "./_lib/faq";

export const metadata: Metadata = {
  title: "Kalkulator BMI Malaysia — Semak Berat Badan Ideal Anda",
  description:
    "Kira BMI anda dengan piawai WHO Asia-Pasifik. Ketahui kategori berat badan dan julat berat ideal mengikut tinggi anda.",
  keywords: [
    "kalkulator bmi",
    "bmi calculator malaysia",
    "kira bmi",
    "indeks jisim badan",
    "berat badan ideal",
    "bmi asia pasifik",
    "semak berat badan",
    "ideal weight calculator",
  ],
  alternates: { canonical: "/bmi" },
  openGraph: {
    type: "website",
    locale: "ms_MY",
    title: "Kalkulator BMI Malaysia — Semak Berat Badan Ideal Anda",
    description:
      "Kira BMI anda dengan piawai WHO Asia-Pasifik. Ketahui kategori berat badan dan julat berat ideal mengikut tinggi anda.",
  },
};

export default function BMIPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: BMI_FAQ.map((f) => ({
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
      <BMIContent />
    </>
  );
}
