import type { Metadata } from "next";
import CutiUmumContent from "./_components/CutiUmumContent";
import { FAQ } from "./_lib/faq";

export const metadata: Metadata = {
  title: "Cuti Umum Malaysia 2026 — Senarai Hari Cuti Mengikut Negeri",
  description:
    "Senarai lengkap cuti umum Malaysia 2026 mengikut negeri. Termasuk cuti kebangsaan, agama dan negeri dengan kiraan hari sehingga cuti seterusnya.",
  keywords: [
    "cuti umum malaysia",
    "public holidays malaysia",
    "cuti umum 2026",
    "cuti umum 2027",
    "cuti sekolah malaysia",
    "cuti negeri malaysia",
    "malaysia holiday calendar",
    "senarai cuti umum",
  ],
  alternates: { canonical: "/cuti-umum" },
  openGraph: {
    type: "website",
    locale: "ms_MY",
    title: "Cuti Umum Malaysia 2026 — Senarai Hari Cuti Mengikut Negeri",
    description:
      "Senarai lengkap cuti umum Malaysia mengikut negeri, dengan kiraan hari sehingga cuti seterusnya.",
  },
};

export default function CutiUmumPage() {
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
      <CutiUmumContent />
    </>
  );
}
