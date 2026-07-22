import type { Metadata } from "next";
import { headers } from "next/headers";
import { getPepperData } from "./_lib/pepper";
import { getPepperHistory } from "./_lib/pepper-history";
import PepperContent from "./_components/PepperContent";
import { PEPPER_FAQ } from "./_lib/faq";

const COPY = {
  bm: {
    title: "Harga Lada Malaysia — Harga MPB Lada Hitam & Putih Sarawak",
    description:
      "Harga rujukan terkini Lembaga Lada Malaysia (MPB) untuk Lada Hitam Sarawak (BPS) dan Lada Putih Sarawak (WPS) dalam RM setan dan RM sekg — dengan kalkulator harga & sejarah harga.",
    category: "Harga Lada",
  },
  en: {
    title: "Malaysia Pepper Price — MPB Sarawak Black & White Pepper",
    description:
      "Latest Malaysia Pepper Board (MPB) reference prices for Sarawak Black Pepper (BPS) and White Pepper (WPS) per tonne and per kg — with a price calculator and history.",
    category: "Pepper Price",
  },
};

export async function generateMetadata(): Promise<Metadata> {
  const locale = (await headers()).get("x-locale") === "en" ? "en" : "bm";
  const c = COPY[locale];
  const ogImage = `/api/og?title=${encodeURIComponent(c.title)}&icon=${encodeURIComponent("🌶️")}&category=${encodeURIComponent(c.category)}`;

  return {
    title: c.title,
    description: c.description,
    keywords: [
      "harga lada malaysia",
      "pepper price malaysia",
      "harga lada hitam",
      "harga lada putih",
      "black pepper sarawak",
      "white pepper sarawak",
      "BPS WPS price",
      "MPB pepper price",
      "harga lada sarawak",
    ],
    alternates: {
      canonical: "/pepper",
      languages: { "ms-MY": "/pepper", "en-MY": "/pepper?lang=en", "x-default": "/pepper" },
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

export default async function PepperPage() {
  const [data, history] = await Promise.all([
    getPepperData(),
    getPepperHistory(),
  ]);

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: PEPPER_FAQ.map((f) => ({
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
      <PepperContent data={data} serverHistory={history} />
    </>
  );
}
