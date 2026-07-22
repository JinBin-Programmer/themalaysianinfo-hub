import type { Metadata } from "next";
import { headers } from "next/headers";
import PoskodContent from "./_components/PoskodContent";
import { FAQ } from "./_lib/faq";

const COPY = {
  bm: {
    title: "Semak Poskod Malaysia — Cari Negeri & Bandar dari Poskod",
    description:
      "Semak poskod Malaysia — dapatkan negeri, bandar dan kawasan dari nombor poskod 5 digit. Check Malaysian postcode to find state, city and area.",
    category: "Semak Poskod",
  },
  en: {
    title: "Malaysia Postcode Checker — Find State & City",
    description:
      "Check a Malaysian postcode — find the state, city and area from a 5-digit postcode number, instantly and free.",
    category: "Postcode Checker",
  },
};

export async function generateMetadata(): Promise<Metadata> {
  const locale = (await headers()).get("x-locale") === "en" ? "en" : "bm";
  const c = COPY[locale];
  const ogImage = `/api/og?title=${encodeURIComponent(c.title)}&icon=${encodeURIComponent("📮")}&category=${encodeURIComponent(c.category)}`;

  return {
    title: c.title,
    description: c.description,
    keywords: [
      "semak poskod",
      "poskod malaysia",
      "postcode malaysia",
      "cari poskod",
      "malaysian postcode lookup",
      "poskod negeri",
      "check postcode",
      "poskod 5 digit",
    ],
    alternates: {
      canonical: "/poskod",
      languages: { "ms-MY": "/poskod", "en-MY": "/poskod?lang=en", "x-default": "/poskod" },
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

export default function PoskodPage() {
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
      <PoskodContent />
    </>
  );
}
