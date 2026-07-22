import type { Metadata } from "next";
import { headers } from "next/headers";
import GajiBersihContent from "./_components/GajiBersihContent";
import { FAQ } from "./_lib/faq";

const COPY = {
  bm: {
    title: "Kalkulator Gaji Bersih — EPF SOCSO EIS PCB",
    description:
      "Kira gaji bersih anda selepas potongan EPF 11%, SOCSO, EIS dan cukai pendapatan PCB. Kalkulator gaji Malaysia yang mudah, percuma dan tepat dengan pecahan potongan dan ringkasan tahunan.",
    category: "Gaji Bersih",
  },
  en: {
    title: "Malaysia Net Salary Calculator — EPF, SOCSO, EIS & PCB",
    description:
      "Calculate your take-home pay after EPF, SOCSO, EIS and PCB income tax deductions. A simple, free and accurate Malaysia salary calculator with a full breakdown.",
    category: "Net Salary",
  },
};

export async function generateMetadata(): Promise<Metadata> {
  const locale = (await headers()).get("x-locale") === "en" ? "en" : "bm";
  const c = COPY[locale];
  const ogImage = `/api/og?title=${encodeURIComponent(c.title)}&icon=${encodeURIComponent("💰")}&category=${encodeURIComponent(c.category)}`;

  return {
    title: c.title,
    description: c.description,
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
    alternates: {
      canonical: "/gaji-bersih",
      languages: { "ms-MY": "/gaji-bersih", "en-MY": "/gaji-bersih?lang=en", "x-default": "/gaji-bersih" },
    },
    openGraph: {
      type: "website",
      locale: locale === "en" ? "en_MY" : "ms_MY",
      title: c.title,
      description: c.description,
      images: [{ url: ogImage, width: 1200, height: 630, alt: c.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: c.title,
      description: c.description,
      images: [ogImage],
    },
  };
}

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
