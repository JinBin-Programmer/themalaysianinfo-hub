import type { Metadata } from "next";
import PinjamanRumahContent from "./_components/PinjamanRumahContent";
import { FAQ } from "./_lib/faq";

export const metadata: Metadata = {
  title: "Kalkulator Pinjaman Rumah Malaysia — Ansuran, Duti Setem & Kos",
  description:
    "Kira ansuran bulanan pinjaman rumah, duti setem MOT, yuran guaman dan jumlah faedah. Kalkulator percuma dan mudah untuk merancang pembelian rumah di Malaysia.",
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
  alternates: { canonical: "/pinjaman-rumah" },
  openGraph: {
    type: "website",
    locale: "ms_MY",
    title: "Kalkulator Pinjaman Rumah Malaysia — Ansuran, Duti Setem & Kos",
    description:
      "Kira ansuran bulanan pinjaman rumah, duti setem MOT, yuran guaman dan jumlah faedah — percuma dan mudah.",
  },
};

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
