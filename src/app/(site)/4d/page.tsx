import type { Metadata } from "next";
import FourDContent from "./_components/FourDContent";
import { FAQ } from "./_lib/faq";

export const metadata: Metadata = {
  title: "Jadual Cabutan 4D Malaysia — Magnum TOTO Da Ma Cai",
  description:
    "Jadual cabutan 4D Malaysia — hari cabutan Rabu, Sabtu & Ahad, keputusan dari 7 malam. Pautan terus ke keputusan rasmi Magnum 4D, Sports TOTO dan Da Ma Cai.",
  keywords: [
    "jadual cabutan 4d",
    "hari cabutan 4d",
    "keputusan 4d",
    "magnum 4d",
    "sports toto result",
    "da ma cai result",
    "4d malaysia",
    "pukul berapa keputusan 4d",
  ],
  alternates: { canonical: "/4d" },
  openGraph: {
    type: "website",
    locale: "ms_MY",
    title: "Jadual Cabutan 4D Malaysia — Magnum TOTO Da Ma Cai",
    description:
      "Hari cabutan 4D Malaysia dan pautan terus ke keputusan rasmi Magnum 4D, Sports TOTO dan Da Ma Cai.",
  },
};

export default function FourDPage() {
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
      <FourDContent />
    </>
  );
}
