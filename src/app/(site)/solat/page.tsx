import type { Metadata } from "next";
import { headers } from "next/headers";
import { getPrayerData } from "./_lib/prayer";
import PrayerContent from "./_components/PrayerContent";
import { PRAYER_FAQ } from "./_lib/faq";

const COPY = {
  bm: {
    title: "Waktu Solat Malaysia — Prayer Times Today",
    description:
      "Waktu solat hari ini untuk Kuala Lumpur dan semua bandar utama di Malaysia. Subuh, Syuruk, Zohor, Asar, Maghrib, Isyak — jadual harian yang tepat.",
    category: "Waktu Solat",
  },
  en: {
    title: "Malaysia Prayer Times — Waktu Solat Today",
    description:
      "Today's prayer times (waktu solat) for Kuala Lumpur and all major cities in Malaysia. Subuh, Syuruk, Zohor, Asar, Maghrib, Isyak — accurate daily schedule.",
    category: "Prayer Times",
  },
};

export async function generateMetadata(): Promise<Metadata> {
  const locale = (await headers()).get("x-locale") === "en" ? "en" : "bm";
  const c = COPY[locale];
  const ogImage = `/api/og?title=${encodeURIComponent(c.title)}&icon=${encodeURIComponent("🕌")}&category=${encodeURIComponent(c.category)}`;

  return {
    title: c.title,
    description: c.description,
    keywords: [
      "waktu solat malaysia",
      "prayer times malaysia",
      "waktu solat kuala lumpur",
      "waktu solat hari ini",
      "jadual solat",
      "subuh zohor asar maghrib isyak",
      "e-solat jakim",
      "imsak ramadan",
    ],
    alternates: {
      canonical: "/solat",
      languages: { "ms-MY": "/solat", "en-MY": "/solat?lang=en", "x-default": "/solat" },
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

export default async function SolatPage() {
  const data = await getPrayerData("Kuala Lumpur");

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: PRAYER_FAQ.map((f) => ({
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
      <PrayerContent data={data} />
    </>
  );
}
