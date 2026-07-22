import type { Metadata } from "next";
import { headers } from "next/headers";
import CutiUmumContent from "./_components/CutiUmumContent";
import { FAQ } from "./_lib/faq";

const COPY = {
  bm: {
    title: "Cuti Umum Malaysia 2026 — Senarai Hari Cuti Mengikut Negeri",
    description:
      "Senarai lengkap cuti umum Malaysia 2026 mengikut negeri. Termasuk cuti kebangsaan, agama dan negeri dengan kiraan hari sehingga cuti seterusnya.",
    category: "Cuti Umum",
  },
  en: {
    title: "Malaysia Public Holidays 2026 — Full List By State",
    description:
      "Complete list of Malaysia public holidays for 2026 by state, including national, religious and state holidays with a countdown to the next one.",
    category: "Public Holidays",
  },
};

export async function generateMetadata(): Promise<Metadata> {
  const locale = (await headers()).get("x-locale") === "en" ? "en" : "bm";
  const c = COPY[locale];
  const ogImage = `/api/og?title=${encodeURIComponent(c.title)}&icon=${encodeURIComponent("🏖️")}&category=${encodeURIComponent(c.category)}`;

  return {
    title: c.title,
    description: c.description,
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
    alternates: {
      canonical: "/cuti-umum",
      languages: { "ms-MY": "/cuti-umum", "en-MY": "/cuti-umum?lang=en", "x-default": "/cuti-umum" },
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
