import type { Metadata } from "next";
import ElectionContent from "./_components/ElectionContent";
import { ELECTION_FAQ } from "./_lib/faq";

export const metadata: Metadata = {
  title: "Pilihan Raya Malaysia — Keputusan PRU15 & Kerajaan Setiap Negeri",
  description:
    "Keputusan Pilihan Raya Umum ke-15 (PRU15 2022) dan kerajaan terkini setiap negeri Malaysia — peta interaktif, Menteri Besar/Ketua Menteri, parti & keputusan DUN mengikut negeri.",
  keywords: [
    "pilihan raya malaysia",
    "keputusan pru15",
    "ge15 results malaysia",
    "pru15 2022",
    "keputusan pilihan raya negeri",
    "menteri besar setiap negeri",
    "malaysia election results by state",
    "kerajaan negeri malaysia",
    "peta pilihan raya malaysia",
    "prn sabah 2025",
  ],
  alternates: { canonical: "/pilihanraya" },
  openGraph: {
    type: "website",
    locale: "ms_MY",
    title: "Pilihan Raya Malaysia — Keputusan PRU15 & Kerajaan Setiap Negeri",
    description:
      "Peta interaktif keputusan pilihan raya Malaysia — PRU15 2022 & kerajaan terkini setiap negeri dengan Menteri Besar/Ketua Menteri dan keputusan DUN.",
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
