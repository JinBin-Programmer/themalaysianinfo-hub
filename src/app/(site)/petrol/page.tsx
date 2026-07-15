import type { Metadata } from "next";
import { getPetrolData } from "./_lib/petrol";
import PetrolContent from "./_components/PetrolContent";
import { PETROL_FAQ } from "./_lib/faq";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Harga Petrol Malaysia Minggu Ini — RON95 RON97 Diesel",
  description:
    "Harga petrol Malaysia terkini minggu ini. RON95, RON97 dan Diesel dikemas kini setiap Khamis. Semak harga sebelum isi minyak — dengan kalkulator kos & sejarah harga.",
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
  alternates: { canonical: "/petrol" },
  openGraph: {
    type: "website",
    locale: "ms_MY",
    title: "Harga Petrol Malaysia Minggu Ini — RON95 RON97 Diesel",
    description: "Harga petrol Malaysia terkini — RON95, RON97 dan Diesel, dikemas kini setiap Khamis.",
  },
};

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
