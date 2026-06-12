import type { Metadata } from "next";
import BillContent from "./_components/BillContent";
import { FAQ } from "./_lib/faq";

export const metadata: Metadata = {
  title: "Kira Bil & Bahagi Restoran — Kalkulator Tip & SST",
  description:
    "Kira Bil & Bahagi Restoran percuma. Bahagi bil antara kawan, tambah tip, SST 6% dan caj servis 10%, dan lihat jumlah setiap orang dengan serta-merta.",
  keywords: [
    "kira bil",
    "bahagi bil restoran",
    "bill split calculator malaysia",
    "tip calculator malaysia",
    "kalkulator SST",
    "caj servis 10%",
    "split bill",
    "bahagi bil kawan",
  ],
  alternates: { canonical: "/bil" },
  openGraph: {
    type: "website",
    locale: "ms_MY",
    title: "Kira Bil & Bahagi Restoran — Kalkulator Tip & SST",
    description:
      "Bahagi bil restoran dengan mudah — tambah tip, SST 6% dan caj servis 10%, lihat jumlah setiap orang serta-merta.",
  },
};

export default function BillPage() {
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
      <BillContent />
    </>
  );
}
