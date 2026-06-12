import type { Metadata } from "next";
import FourDContent from "./_components/FourDContent";
import { FAQ } from "./_lib/faq";

export const metadata: Metadata = {
  title: "Keputusan 4D Malaysia Hari Ini — Magnum TOTO Da Ma Cai",
  description:
    "Keputusan 4D terkini Malaysia. Magnum 4D, Sports TOTO, Da Ma Cai — hadiah pertama, kedua, ketiga, khas dan saguhati. Semak nombor anda dengan penyemak 4D.",
  keywords: [
    "keputusan 4d",
    "4d result malaysia",
    "magnum 4d",
    "sports toto result",
    "da ma cai result",
    "keputusan 4d hari ini",
    "4d malaysia",
    "semak nombor 4d",
  ],
  alternates: { canonical: "/4d" },
  openGraph: {
    type: "website",
    locale: "ms_MY",
    title: "Keputusan 4D Malaysia Hari Ini — Magnum TOTO Da Ma Cai",
    description:
      "Keputusan 4D terkini Malaysia — Magnum 4D, Sports TOTO dan Da Ma Cai, dengan penyemak nombor.",
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
