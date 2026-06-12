import type { Metadata } from "next";
import KonversiContent from "./_components/KonversiContent";
import { FAQ } from "./_lib/faq";

export const metadata: Metadata = {
  title: "Penukar Unit Malaysia — Tukar Panjang, Berat, Suhu, Isipadu, Luas",
  description:
    "Penukar Unit percuma untuk Malaysia. Tukar cm ke inci, kg ke paun, Celsius ke Fahrenheit, liter ke galen, ekar ke hektar dan banyak lagi — mudah, pantas dan tepat.",
  keywords: [
    "penukar unit",
    "unit converter malaysia",
    "tukar cm ke inch",
    "convert kg to lbs malaysia",
    "tukar celsius ke fahrenheit",
    "tukar ekar ke hektar",
    "penukar isipadu",
    "unit converter",
  ],
  alternates: { canonical: "/konversi" },
  openGraph: {
    type: "website",
    locale: "ms_MY",
    title: "Penukar Unit Malaysia — Tukar Panjang, Berat, Suhu, Isipadu, Luas",
    description:
      "Penukar Unit percuma untuk Malaysia — tukar panjang, berat, suhu, isipadu dan luas dengan mudah dan tepat.",
  },
};

export default function KonversiPage() {
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
      <KonversiContent />
    </>
  );
}
