import type { Metadata } from "next";
import NomborPlatContent from "./_components/NomborPlatContent";
import { FAQ } from "./_lib/faq";

export const metadata: Metadata = {
  title: "Semak Nombor Plat Kereta Malaysia — Decode Negeri & Kawasan",
  description:
    "Masukkan nombor plat kereta untuk mengetahui negeri dan kawasan. WA = KL, B = Selangor, J = Johor dan lebih banyak lagi. Semak kod plat JPJ Malaysia.",
  keywords: [
    "semak nombor plat",
    "nombor plat kereta malaysia",
    "car plate decoder malaysia",
    "kod plat negeri",
    "JPJ plate prefix",
    "plat kereta negeri",
    "check car plate state malaysia",
  ],
  alternates: { canonical: "/nombor-plat" },
  openGraph: {
    type: "website",
    locale: "ms_MY",
    title: "Semak Nombor Plat Kereta Malaysia — Decode Negeri & Kawasan",
    description:
      "Masukkan nombor plat kereta untuk mengetahui negeri dan kawasan asal mengikut kod plat JPJ Malaysia.",
  },
};

export default function NomborPlatPage() {
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
      <NomborPlatContent />
    </>
  );
}
