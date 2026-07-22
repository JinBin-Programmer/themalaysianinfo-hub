import type { Metadata } from "next";
import { headers } from "next/headers";
import PTPTNContent from "./_components/PTPTNContent";
import { PTPTN_FAQ } from "./_lib/faq";

const COPY = {
  bm: {
    title: "Kalkulator PTPTN — Kira Bayaran Balik Pinjaman Pelajaran",
    description:
      "Kira bayaran balik pinjaman PTPTN anda. Masukkan jumlah pinjaman dan gaji untuk dapatkan cadangan bayaran bulanan, jumlah keseluruhan dan tempoh bayaran. Termasuk caj perkhidmatan 1% setahun.",
    category: "Kalkulator PTPTN",
  },
  en: {
    title: "PTPTN Study Loan Repayment Calculator — Malaysia",
    description:
      "Calculate your PTPTN loan repayment. Enter your loan amount and salary for a suggested monthly payment, total payable and repayment period, including the 1% annual service charge.",
    category: "PTPTN Calculator",
  },
};

export async function generateMetadata(): Promise<Metadata> {
  const locale = (await headers()).get("x-locale") === "en" ? "en" : "bm";
  const c = COPY[locale];
  const ogImage = `/api/og?title=${encodeURIComponent(c.title)}&icon=${encodeURIComponent("🎓")}&category=${encodeURIComponent(c.category)}`;

  return {
    title: c.title,
    description: c.description,
    keywords: [
      "kalkulator ptptn",
      "ptptn repayment calculator",
      "bayar balik ptptn",
      "ptptn calculator malaysia",
      "cara bayar ptptn",
      "ptptn monthly payment",
    ],
    alternates: {
      canonical: "/ptptn",
      languages: { "ms-MY": "/ptptn", "en-MY": "/ptptn?lang=en", "x-default": "/ptptn" },
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

export default function PTPTNPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: PTPTN_FAQ.map((f) => ({
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
      <PTPTNContent />
    </>
  );
}
