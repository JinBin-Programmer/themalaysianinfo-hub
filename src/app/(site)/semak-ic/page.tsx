import type { Metadata } from "next";
import IcContent from "./_components/IcContent";
import { FAQ } from "./_lib/faq";

export const metadata: Metadata = {
  title: "Semak IC Malaysia — Decode Nombor MyKad Anda",
  description:
    "Masukkan nombor IC 12 digit untuk mengetahui tarikh lahir, umur, negeri lahir dan jantina. Percuma, selamat, tiada data disimpan — semua pengiraan dalam pelayar anda.",
  keywords: [
    "semak ic",
    "semak ic malaysia",
    "ic number checker",
    "decode mykad",
    "kira umur dari ic",
    "kod negeri ic",
    "tarikh lahir dari ic",
    "ic number malaysia",
  ],
  alternates: { canonical: "/semak-ic" },
  openGraph: {
    type: "website",
    locale: "ms_MY",
    title: "Semak IC Malaysia — Decode Nombor MyKad Anda",
    description:
      "Masukkan nombor IC 12 digit untuk mengetahui tarikh lahir, umur, negeri lahir dan jantina. Percuma, selamat dan tiada data disimpan.",
  },
};

export default function SemakIcPage() {
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
      <IcContent />
    </>
  );
}
