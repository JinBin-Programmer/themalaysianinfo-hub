import type { Metadata } from "next";
import { headers } from "next/headers";
import PinjamanContent from "./_components/PinjamanContent";
import { FAQ } from "./_lib/faq";

const COPY = {
  bm: {
    title: "Kalkulator Pinjaman Malaysia — Rumah, Kereta & Peribadi",
    description:
      "Kira ansuran bulanan pinjaman rumah, kereta dan peribadi. Termasuk kadar faedah, jumlah bayaran dan jumlah faedah. Percuma dan mudah digunakan.",
    category: "Kalkulator Pinjaman",
  },
  en: {
    title: "Malaysia Loan Calculator — Home, Car & Personal",
    description:
      "Calculate monthly installments for home, car and personal loans in Malaysia. Includes interest rate, total payment and total interest. Free and easy to use.",
    category: "Loan Calculator",
  },
};

export async function generateMetadata(): Promise<Metadata> {
  const locale = (await headers()).get("x-locale") === "en" ? "en" : "bm";
  const c = COPY[locale];
  const ogImage = `/api/og?title=${encodeURIComponent(c.title)}&icon=${encodeURIComponent("🏦")}&category=${encodeURIComponent(c.category)}`;

  return {
    title: c.title,
    description: c.description,
    keywords: [
      "kalkulator pinjaman",
      "loan calculator malaysia",
      "kalkulator pinjaman rumah",
      "kalkulator pinjaman kereta",
      "kalkulator pinjaman peribadi",
      "ansuran bulanan",
      "monthly installment calculator",
      "home loan calculator malaysia",
    ],
    alternates: {
      canonical: "/pinjaman",
      languages: { "ms-MY": "/pinjaman", "en-MY": "/pinjaman?lang=en", "x-default": "/pinjaman" },
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

export default function PinjamanPage() {
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
      <PinjamanContent />
    </>
  );
}
