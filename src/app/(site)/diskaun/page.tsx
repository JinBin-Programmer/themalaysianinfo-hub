import type { Metadata } from "next";
import { headers } from "next/headers";
import DiscountCalculator from "./_components/DiscountCalculator";
import { DISKAUN_FAQ } from "./_lib/faq";

const COPY = {
  bm: {
    title: "Kalkulator Diskaun & SST — Kira Harga Selepas Diskaun",
    description:
      "Kalkulator Diskaun & SST percuma untuk Malaysia. Kira harga selepas diskaun, diskaun berganda, cari harga asal, dan tambah SST 6%. Mudah, pantas dan tepat.",
    category: "Kalkulator Diskaun",
  },
  en: {
    title: "Discount & SST Calculator — Malaysia",
    description:
      "Free discount and SST calculator for Malaysia. Work out the sale price, stack multiple discounts, find the original price, and add 6% SST — fast and accurate.",
    category: "Discount Calculator",
  },
};

export async function generateMetadata(): Promise<Metadata> {
  const locale = (await headers()).get("x-locale") === "en" ? "en" : "bm";
  const c = COPY[locale];
  const ogImage = `/api/og?title=${encodeURIComponent(c.title)}&icon=${encodeURIComponent("🛍️")}&category=${encodeURIComponent(c.category)}`;

  return {
    title: c.title,
    description: c.description,
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
    alternates: {
      canonical: "/diskaun",
      languages: { "ms-MY": "/diskaun", "en-MY": "/diskaun?lang=en", "x-default": "/diskaun" },
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
