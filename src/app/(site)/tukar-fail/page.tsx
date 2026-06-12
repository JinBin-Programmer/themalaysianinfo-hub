import type { Metadata } from "next";
import TukarFailContent from "./_components/TukarFailContent";
import { FAQ } from "./_lib/faq";

export const metadata: Metadata = {
  title: "Tukar Fail Online — Penukar Imej, PDF & Video Percuma",
  description:
    "Alat tukar fail percuma: tukar imej PNG/JPG/WEBP, mampat imej, ubah saiz imej, tukar Word ke PDF, mampat video. Semua diproses dalam pelayar anda — tiada fail dimuat naik ke pelayan.",
  keywords: [
    "tukar fail online",
    "file converter malaysia",
    "image converter",
    "compress image online",
    "word to pdf converter",
    "video compressor online",
    "tukar imej",
    "mampat imej",
    "convert png to jpg",
    "compress jpg online free",
  ],
  alternates: { canonical: "/tukar-fail" },
  openGraph: {
    type: "website",
    locale: "ms_MY",
    title: "Tukar Fail Online — Penukar Imej, PDF & Video Percuma",
    description:
      "Tukar dan mampat fail percuma — imej, Word ke PDF dan video. Semua diproses dalam pelayar anda, tiada muat naik ke pelayan.",
    url: "https://www.themalaysianinfo.online/tukar-fail",
  },
};

export default function TukarFailPage() {
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
      <TukarFailContent />
    </>
  );
}
