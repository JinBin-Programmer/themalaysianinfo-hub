import type { Metadata } from "next";
import { headers } from "next/headers";
import { getPetrolData } from "./_lib/petrol";
import PetrolContent from "./_components/PetrolContent";
import { PETROL_FAQ } from "./_lib/faq";

const COPY = {
  bm: {
    title: "Harga Petrol Malaysia Minggu Ini — RON95 RON97 Diesel",
    description:
      "Harga petrol Malaysia terkini minggu ini. RON95, RON97 dan Diesel dikemas kini setiap Khamis. Semak harga sebelum isi minyak — dengan kalkulator kos & sejarah harga.",
    category: "Harga Petrol",
  },
  en: {
    title: "Malaysia Petrol Price This Week — RON95, RON97 & Diesel",
    description:
      "Latest Malaysia petrol prices — RON95, RON97 and diesel, updated every Thursday. Check prices before you fill up, with a cost calculator and price history.",
    category: "Fuel Prices",
  },
};

export async function generateMetadata(): Promise<Metadata> {
  const locale = (await headers()).get("x-locale") === "en" ? "en" : "bm";
  const c = COPY[locale];
  const ogImage = `/api/og?title=${encodeURIComponent(c.title)}&icon=${encodeURIComponent("⛽")}&category=${encodeURIComponent(c.category)}`;

  return {
    title: c.title,
    description: c.description,
    keywords: [
      "harga petrol malaysia",
      "petrol price malaysia",
      "harga minyak malaysia",
      "RON95 price",
      "RON97 price",
      "diesel price malaysia",
      "harga RON95 minggu ini",
      "petrol price today",
    ],
    alternates: {
      canonical: "/petrol",
      languages: {
        "ms-MY": "/petrol",
        "en-MY": "/petrol?lang=en",
        "x-default": "/petrol",
      },
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

export default async function PetrolPage() {
  const data = await getPetrolData();

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: PETROL_FAQ.map((f) => ({
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
      <PetrolContent data={data} />
    </>
  );
}
