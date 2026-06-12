import type { Metadata } from "next";
import GajiBersihContent from "./_components/GajiBersihContent";
import { FAQ } from "./_lib/faq";

export const metadata: Metadata = {
  title: "Kalkulator Gaji Bersih — EPF SOCSO EIS PCB",
  description:
    "Kira gaji bersih anda selepas potongan EPF 11%, SOCSO, EIS dan cukai pendapatan PCB. Kalkulator gaji Malaysia yang mudah, percuma dan tepat dengan pecahan potongan dan ringkasan tahunan.",
  keywords: [
    "kalkulator gaji bersih",
    "net salary calculator malaysia",
    "take home pay malaysia",
    "kira gaji bersih",
    "epf calculator",
    "pcb calculator",
    "socso eis calculator",
    "gaji selepas potongan",
  ],
  alternates: { canonical: "/gaji-bersih" },
  openGraph: {
    type: "website",
    locale: "ms_MY",
    title: "Kalkulator Gaji Bersih — EPF SOCSO EIS PCB",
    description:
      "Kira gaji bersih anda selepas potongan EPF, SOCSO, EIS dan cukai pendapatan PCB.",
  },
};

export default function GajiBersihPage() {
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
      <GajiBersihContent />
    </>
  );
}
