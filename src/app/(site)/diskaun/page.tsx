import type { Metadata } from "next";
import DiscountCalculator from "./_components/DiscountCalculator";
import { DISKAUN_FAQ } from "./_lib/faq";

export const metadata: Metadata = {
  title: "Kalkulator Diskaun & SST — Kira Harga Selepas Diskaun",
  description:
    "Kalkulator Diskaun & SST percuma untuk Malaysia. Kira harga selepas diskaun, diskaun berganda, cari harga asal, dan tambah SST 6%. Mudah, pantas dan tepat.",
  keywords: [
    "kalkulator diskaun",
    "discount calculator malaysia",
    "kira diskaun",
    "kalkulator sst",
    "sst calculator",
    "harga selepas diskaun",
    "diskaun berganda",
    "stacked discount calculator",
  ],
  alternates: { canonical: "/diskaun" },
  openGraph: {
    type: "website",
    locale: "ms_MY",
    title: "Kalkulator Diskaun & SST — Kira Harga Selepas Diskaun",
    description:
      "Kira harga selepas diskaun, diskaun berganda, cari harga asal, dan tambah SST 6% — percuma, mudah dan tepat.",
  },
};

export default function DiskaunPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: DISKAUN_FAQ.map((f) => ({
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
      <DiscountCalculator />
    </>
  );
}
