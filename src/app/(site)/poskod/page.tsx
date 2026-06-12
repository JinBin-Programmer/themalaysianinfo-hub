import type { Metadata } from "next";
import PoskodContent from "./_components/PoskodContent";
import { FAQ } from "./_lib/faq";

export const metadata: Metadata = {
  title: "Semak Poskod Malaysia — Cari Negeri & Bandar dari Poskod",
  description:
    "Semak poskod Malaysia — dapatkan negeri, bandar dan kawasan dari nombor poskod 5 digit. Check Malaysian postcode to find state, city and area.",
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
  alternates: { canonical: "/poskod" },
  openGraph: {
    type: "website",
    locale: "ms_MY",
    title: "Semak Poskod Malaysia — Cari Negeri & Bandar dari Poskod",
    description:
      "Semak poskod Malaysia — dapatkan negeri, bandar dan kawasan dari nombor poskod 5 digit.",
  },
};

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
