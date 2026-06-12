import type { Metadata } from "next";
import PinjamanContent from "./_components/PinjamanContent";
import { FAQ } from "./_lib/faq";

export const metadata: Metadata = {
  title: "Kalkulator Pinjaman Malaysia — Rumah, Kereta & Peribadi",
  description:
    "Kira ansuran bulanan pinjaman rumah, kereta dan peribadi. Termasuk kadar faedah, jumlah bayaran dan jumlah faedah. Percuma dan mudah digunakan.",
  keywords: [
    "kalkulator pinjaman",
    "loan calculator malaysia",
    "kalkulator pinjaman rumah",
    "kalkulator pinjaman kereta",
    "kalkulator pinjaman peribadi",
    "ansuran bulanan",
    "monthly installment calculator",
    "home loan calculator malaysia",
  ],
  alternates: { canonical: "/pinjaman" },
  openGraph: {
    type: "website",
    locale: "ms_MY",
    title: "Kalkulator Pinjaman Malaysia — Rumah, Kereta & Peribadi",
    description:
      "Kira ansuran bulanan pinjaman rumah, kereta dan peribadi — termasuk kadar faedah, jumlah bayaran dan jumlah faedah.",
  },
};

export default function PinjamanPage() {
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
      <PinjamanContent />
    </>
  );
}
