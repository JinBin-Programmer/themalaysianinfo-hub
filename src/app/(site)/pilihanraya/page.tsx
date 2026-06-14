import type { Metadata } from "next";
import ElectionContent from "./_components/ElectionContent";
import { ELECTION_FAQ } from "./_lib/faq";

export const metadata: Metadata = {
  title: "Pilihan Raya Malaysia — PRN Johor & N. Sembilan 2026, Keputusan PRU15",
  description:
    "PRN Johor (11 Julai) & Negeri Sembilan (1 Ogos 2026) — tarikh penting, kira detik & kerusi. Plus keputusan PRU15 2022 dan kerajaan setiap negeri: peta interaktif, Menteri Besar & pemenang setiap kawasan.",
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
  alternates: { canonical: "/pilihanraya" },
  openGraph: {
    type: "website",
    locale: "ms_MY",
    title: "PRN Johor & N. Sembilan 2026 + Keputusan Pilihan Raya Malaysia",
    description:
      "Kira detik PRN Johor (11 Julai) & Negeri Sembilan (1 Ogos 2026), tarikh penting, peta interaktif kerajaan negeri & pemenang setiap kerusi PRU15.",
  },
};

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
