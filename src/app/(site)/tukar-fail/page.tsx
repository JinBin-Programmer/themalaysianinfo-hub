import type { Metadata } from "next";
import { headers } from "next/headers";
import TukarFailContent from "./_components/TukarFailContent";
import { FAQ } from "./_lib/faq";

const COPY = {
  bm: {
    title: "Tukar Fail Online — Penukar Imej, PDF & Video Percuma",
    description:
      "Alat tukar fail percuma: tukar imej PNG/JPG/WEBP, mampat imej, ubah saiz imej, tukar Word ke PDF, mampat video. Semua diproses dalam pelayar anda — tiada fail dimuat naik ke pelayan.",
    category: "Tukar Fail",
  },
  en: {
    title: "Online File Converter — Free Image, PDF & Video Tools",
    description:
      "Free file conversion tools: convert PNG/JPG/WEBP images, compress images, resize images, convert Word to PDF, compress video. Everything runs in your browser — no uploads to any server.",
    category: "File Converter",
  },
};

export async function generateMetadata(): Promise<Metadata> {
  const locale = (await headers()).get("x-locale") === "en" ? "en" : "bm";
  const c = COPY[locale];
  const ogImage = `/api/og?title=${encodeURIComponent(c.title)}&icon=${encodeURIComponent("🗜️")}&category=${encodeURIComponent(c.category)}`;

  return {
    title: c.title,
    description: c.description,
    keywords: [
      "tukar fail online",
      "file converter malaysia",
      "image converter",
      "compress image online",
      "word to pdf converter",
      "video compressor online",
      "tukar imej",
      "mampat imej",
      "convert png to jpg",
      "compress jpg online free",
    ],
    alternates: {
      canonical: "/tukar-fail",
      languages: { "ms-MY": "/tukar-fail", "en-MY": "/tukar-fail?lang=en", "x-default": "/tukar-fail" },
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

export default function TukarFailPage() {
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
      <TukarFailContent />
    </>
  );
}
