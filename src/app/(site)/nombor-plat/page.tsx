import type { Metadata } from "next";
import { headers } from "next/headers";
import NomborPlatContent from "./_components/NomborPlatContent";
import { FAQ } from "./_lib/faq";

const COPY = {
  bm: {
    title: "Semak Nombor Plat Kereta Malaysia — Decode Negeri & Kawasan",
    description:
      "Masukkan nombor plat kereta untuk mengetahui negeri dan kawasan. WA = KL, B = Selangor, J = Johor dan lebih banyak lagi. Semak kod plat JPJ Malaysia.",
    category: "Nombor Plat",
  },
  en: {
    title: "Malaysia Car Plate Decoder — Find State & Region",
    description:
      "Enter a Malaysian car plate number to find its state and region. WA = KL, B = Selangor, J = Johor and more. Decode JPJ plate prefixes instantly.",
    category: "Car Plate Decoder",
  },
};

export async function generateMetadata(): Promise<Metadata> {
  const locale = (await headers()).get("x-locale") === "en" ? "en" : "bm";
  const c = COPY[locale];
  const ogImage = `/api/og?title=${encodeURIComponent(c.title)}&icon=${encodeURIComponent("🚗")}&category=${encodeURIComponent(c.category)}`;

  return {
    title: c.title,
    description: c.description,
    keywords: [
      "semak nombor plat",
      "nombor plat kereta malaysia",
      "car plate decoder malaysia",
      "kod plat negeri",
      "JPJ plate prefix",
      "plat kereta negeri",
      "check car plate state malaysia",
    ],
    alternates: {
      canonical: "/nombor-plat",
      languages: { "ms-MY": "/nombor-plat", "en-MY": "/nombor-plat?lang=en", "x-default": "/nombor-plat" },
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

export default function NomborPlatPage() {
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
      <NomborPlatContent />
    </>
  );
}
