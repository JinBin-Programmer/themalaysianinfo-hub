import type { Metadata } from "next";
import { getPepperData } from "./_lib/pepper";
import { getPepperHistory } from "./_lib/pepper-history";
import PepperContent from "./_components/PepperContent";
import { PEPPER_FAQ } from "./_lib/faq";

export const revalidate = 21600;

export const metadata: Metadata = {
  title: "Harga Lada Malaysia — Harga MPB Lada Hitam & Putih Sarawak",
  description:
    "Harga rujukan terkini Lembaga Lada Malaysia (MPB) untuk Lada Hitam Sarawak (BPS) dan Lada Putih Sarawak (WPS) dalam RM setan dan RM sekg — dengan kalkulator harga & sejarah harga.",
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
  alternates: { canonical: "/pepper" },
  openGraph: {
    type: "website",
    locale: "ms_MY",
    title: "Harga Lada Malaysia — Harga MPB Lada Hitam & Putih Sarawak",
    description:
      "Harga rujukan MPB terkini untuk Lada Hitam Sarawak (BPS) dan Lada Putih Sarawak (WPS) — setan dan sekg.",
  },
};

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
