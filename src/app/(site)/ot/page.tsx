import type { Metadata } from "next";
import OtContent from "./_components/OtContent";
import { FAQ } from "./_lib/faq";

export const metadata: Metadata = {
  title: "Kalkulator OT Malaysia — Kira Kerja Lebih Masa EA 1955",
  description:
    "Kira bayaran kerja lebih masa (OT) Malaysia mengikut Akta Kerja 1955. Hari biasa 1.5x, hari rehat 2x, cuti umum 3x — dengan kadar sejam & kadar harian.",
  keywords: [
    "kalkulator OT malaysia",
    "kira overtime malaysia",
    "overtime calculator malaysia",
    "kerja lebih masa",
    "akta kerja 1955",
    "kadar OT 1.5x 2x 3x",
    "kira gaji OT",
    "employment act 1955 overtime",
  ],
  alternates: { canonical: "/ot" },
  openGraph: {
    type: "website",
    locale: "ms_MY",
    title: "Kalkulator OT Malaysia — Kira Kerja Lebih Masa EA 1955",
    description: "Kira bayaran kerja lebih masa (OT) Malaysia mengikut Akta Kerja 1955 — hari biasa 1.5x, hari rehat 2x, cuti umum 3x.",
  },
};

export default function OtPage() {
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
      <OtContent />
    </>
  );
}
