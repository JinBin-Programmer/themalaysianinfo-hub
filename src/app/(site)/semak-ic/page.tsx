import type { Metadata } from "next";
import { headers } from "next/headers";
import IcContent from "./_components/IcContent";
import { FAQ } from "./_lib/faq";

const COPY = {
  bm: {
    title: "Semak IC Malaysia — Decode Nombor MyKad Anda",
    description:
      "Masukkan nombor IC 12 digit untuk mengetahui tarikh lahir, umur, negeri lahir dan jantina. Percuma, selamat, tiada data disimpan — semua pengiraan dalam pelayar anda.",
    category: "Semak IC",
  },
  en: {
    title: "Malaysia IC Checker — Decode Your MyKad Number",
    description:
      "Enter a 12-digit IC number to find the birth date, age, state of birth and gender. Free, private, no data stored — all calculations happen in your browser.",
    category: "IC Decoder",
  },
};

export async function generateMetadata(): Promise<Metadata> {
  const locale = (await headers()).get("x-locale") === "en" ? "en" : "bm";
  const c = COPY[locale];
  const ogImage = `/api/og?title=${encodeURIComponent(c.title)}&icon=${encodeURIComponent("🪪")}&category=${encodeURIComponent(c.category)}`;

  return {
    title: c.title,
    description: c.description,
    keywords: [
      "semak ic",
      "semak ic malaysia",
      "ic number checker",
      "decode mykad",
      "kira umur dari ic",
      "kod negeri ic",
      "tarikh lahir dari ic",
      "ic number malaysia",
    ],
    alternates: {
      canonical: "/semak-ic",
      languages: { "ms-MY": "/semak-ic", "en-MY": "/semak-ic?lang=en", "x-default": "/semak-ic" },
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

export default function SemakIcPage() {
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
      <IcContent />
    </>
  );
}
