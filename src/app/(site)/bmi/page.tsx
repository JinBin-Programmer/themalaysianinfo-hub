import type { Metadata } from "next";
import { headers } from "next/headers";
import BMIContent from "./_components/BMIContent";
import { BMI_FAQ } from "./_lib/faq";

const COPY = {
  bm: {
    title: "Kalkulator BMI Malaysia — Semak Berat Badan Ideal Anda",
    description:
      "Kira BMI anda dengan piawai WHO Asia-Pasifik. Ketahui kategori berat badan dan julat berat ideal mengikut tinggi anda.",
    category: "Kalkulator BMI",
  },
  en: {
    title: "Malaysia BMI Calculator — Check Your Ideal Body Weight",
    description:
      "Calculate your BMI using the WHO Asia-Pacific standard. Find your weight category and ideal weight range for your height.",
    category: "BMI Calculator",
  },
};

export async function generateMetadata(): Promise<Metadata> {
  const locale = (await headers()).get("x-locale") === "en" ? "en" : "bm";
  const c = COPY[locale];
  const ogImage = `/api/og?title=${encodeURIComponent(c.title)}&icon=${encodeURIComponent("🏋️")}&category=${encodeURIComponent(c.category)}`;

  return {
    title: c.title,
    description: c.description,
    keywords: [
      "kalkulator bmi",
      "bmi calculator malaysia",
      "kira bmi",
      "indeks jisim badan",
      "berat badan ideal",
      "bmi asia pasifik",
      "semak berat badan",
      "ideal weight calculator",
    ],
    alternates: {
      canonical: "/bmi",
      languages: { "ms-MY": "/bmi", "en-MY": "/bmi?lang=en", "x-default": "/bmi" },
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

export default function BMIPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: BMI_FAQ.map((f) => ({
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
      <BMIContent />
    </>
  );
}
