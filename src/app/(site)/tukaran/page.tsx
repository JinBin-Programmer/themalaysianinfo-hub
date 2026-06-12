import type { Metadata } from "next";
import { getExchangeRates } from "./_lib/exchange";
import ExchangeContent from "./_components/ExchangeContent";
import { FAQ } from "./_lib/faq";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Kadar Tukaran Matawang Malaysia Hari Ini — MYR ke USD SGD EUR",
  description:
    "Kadar tukaran Ringgit Malaysia terkini. 1 USD = RM 4.xx. Semak kadar MYR ke SGD, EUR, GBP, JPY, AUD dan lebih banyak lagi, dengan penukar matawang pantas.",
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
  alternates: { canonical: "/tukaran" },
  openGraph: {
    type: "website",
    locale: "ms_MY",
    title: "Kadar Tukaran Matawang Malaysia Hari Ini — MYR ke USD SGD EUR",
    description:
      "Kadar tukaran Ringgit Malaysia (MYR) terkini ke USD, SGD, EUR, GBP, JPY dan lebih banyak lagi, dengan penukar matawang pantas.",
  },
};

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
