import type { Metadata } from "next";
import UmurContent from "./_components/UmurContent";
import { UMUR_FAQ } from "./_lib/faq";

export const metadata: Metadata = {
  title: "Kalkulator Umur — Kira Umur Tepat dalam Tahun, Bulan & Hari",
  description:
    "Kira umur tepat anda dalam tahun, bulan, hari dan jam. Ketahui hari anda dilahirkan, generasi dan berapa hari hingga hari lahir seterusnya.",
  keywords: [
    "kalkulator umur",
    "age calculator malaysia",
    "kira umur",
    "cara kira umur",
    "berapa umur saya",
    "age calculator bm",
  ],
  alternates: { canonical: "/umur" },
  openGraph: {
    type: "website",
    locale: "ms_MY",
    title: "Kalkulator Umur — Kira Umur Tepat dalam Tahun, Bulan & Hari",
    description:
      "Kira umur tepat anda dalam tahun, bulan, hari dan jam. Ketahui hari anda dilahirkan, generasi dan hari lahir seterusnya.",
  },
};

export default function UmurPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: UMUR_FAQ.map((f) => ({
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
      <UmurContent />
    </>
  );
}
