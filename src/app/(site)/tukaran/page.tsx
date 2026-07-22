import type { Metadata } from "next";
import { headers } from "next/headers";
import { getExchangeRates } from "./_lib/exchange";
import ExchangeContent from "./_components/ExchangeContent";
import { FAQ } from "./_lib/faq";

const COPY = {
  bm: {
    title: "Kadar Tukaran Matawang Malaysia Hari Ini — MYR ke USD SGD EUR",
    description:
      "Kadar tukaran Ringgit Malaysia terkini. 1 USD = RM 4.xx. Semak kadar MYR ke SGD, EUR, GBP, JPY, AUD dan lebih banyak lagi, dengan penukar matawang pantas.",
    category: "Kadar Tukaran",
  },
  en: {
    title: "Malaysia Currency Exchange Rate Today — MYR to USD SGD EUR",
    description:
      "Latest Malaysian Ringgit exchange rates. Check MYR to SGD, EUR, GBP, JPY, AUD and more, with a fast currency converter.",
    category: "Exchange Rate",
  },
};

export async function generateMetadata(): Promise<Metadata> {
  const locale = (await headers()).get("x-locale") === "en" ? "en" : "bm";
  const c = COPY[locale];
  const ogImage = `/api/og?title=${encodeURIComponent(c.title)}&icon=${encodeURIComponent("💱")}&category=${encodeURIComponent(c.category)}`;

  return {
    title: c.title,
    description: c.description,
    keywords: [
      "kadar tukaran matawang",
      "currency exchange malaysia",
      "tukaran matawang",
      "MYR to USD",
      "kadar ringgit",
      "MYR exchange rate",
      "penukar matawang",
      "currency converter malaysia",
    ],
    alternates: {
      canonical: "/tukaran",
      languages: { "ms-MY": "/tukaran", "en-MY": "/tukaran?lang=en", "x-default": "/tukaran" },
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

export default async function TukaranPage() {
  let data;
  try {
    data = await getExchangeRates();
  } catch {
    // Fallback static data
    data = {
      base: "MYR",
      date: new Date().toISOString().split("T")[0],
      rates: { USD: 0.2256, SGD: 0.3038, EUR: 0.2080, GBP: 0.1762, JPY: 33.4, AUD: 0.3453, CNY: 1.634, THB: 7.85, IDR: 3685, SAR: 0.8460 },
    };
  }

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
      <ExchangeContent data={data} />
    </>
  );
}
