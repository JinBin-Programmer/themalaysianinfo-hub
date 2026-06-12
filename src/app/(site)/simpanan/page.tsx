import type { Metadata } from "next";
import SimpananContent from "./_components/SimpananContent";
import { FAQ } from "./_lib/faq";

export const metadata: Metadata = {
  title: "Kalkulator Simpanan Malaysia — FD, ASB, Tabung Haji, EPF",
  description:
    "Kira pertumbuhan simpanan atau sasaran kewangan anda dengan faedah kompaun. Sokongan kadar FD, ASB, Tabung Haji dan EPF. Mudah, percuma dan tepat.",
  keywords: [
    "kalkulator simpanan",
    "savings calculator malaysia",
    "fd calculator",
    "asb calculator",
    "kalkulator fd bank malaysia",
    "compound interest calculator",
    "kalkulator faedah kompaun",
    "kalkulator epf",
  ],
  alternates: { canonical: "/simpanan" },
  openGraph: {
    type: "website",
    locale: "ms_MY",
    title: "Kalkulator Simpanan Malaysia — FD, ASB, Tabung Haji, EPF",
    description:
      "Kira pertumbuhan simpanan atau sasaran kewangan anda dengan faedah kompaun — sokongan kadar FD, ASB, Tabung Haji dan EPF.",
  },
};

export default function SimpananPage() {
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
      <SimpananContent />
    </>
  );
}
