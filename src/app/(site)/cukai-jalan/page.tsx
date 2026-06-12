import type { Metadata } from "next";
import CukaiJalanContent from "./_components/CukaiJalanContent";
import { FAQ } from "./_lib/faq";

export const metadata: Metadata = {
  title: "Kalkulator Cukai Jalan Malaysia — Kereta & Motosikal",
  description:
    "Semak dan kira kadar cukai jalan untuk kereta dan motosikal di Malaysia. Semenanjung, Sabah dan Sarawak. Anggaran mengikut kapasiti enjin (CC).",
  keywords: [
    "cukai jalan malaysia",
    "road tax calculator malaysia",
    "kalkulator cukai jalan",
    "road tax kereta",
    "cukai jalan motosikal",
    "myeg road tax",
    "kadar cukai jalan jpj",
  ],
  alternates: { canonical: "/cukai-jalan" },
  openGraph: {
    type: "website",
    locale: "ms_MY",
    title: "Kalkulator Cukai Jalan Malaysia — Kereta & Motosikal",
    description:
      "Kira kadar cukai jalan kenderaan anda mengikut kapasiti enjin — kereta & motosikal, Semenanjung dan Sabah/Sarawak.",
  },
};

export default function CukaiJalanPage() {
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
      <CukaiJalanContent />
    </>
  );
}
