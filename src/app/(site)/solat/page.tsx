import type { Metadata } from "next";
import { getPrayerData } from "./_lib/prayer";
import PrayerContent from "./_components/PrayerContent";
import { PRAYER_FAQ } from "./_lib/faq";

export const revalidate = 43200; // 12 hours

export const metadata: Metadata = {
  title: "Waktu Solat Malaysia — Prayer Times Today",
  description:
    "Today's prayer times (waktu solat) for Kuala Lumpur and all major cities in Malaysia. Subuh, Syuruk, Zohor, Asar, Maghrib, Isyak — accurate daily schedule.",
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
  alternates: { canonical: "/solat" },
  openGraph: {
    type: "website",
    locale: "ms_MY",
    title: "Waktu Solat Malaysia — Prayer Times Today",
    description:
      "Waktu solat harian untuk Kuala Lumpur dan bandar utama di Malaysia — Subuh, Syuruk, Zohor, Asar, Maghrib, Isyak.",
  },
};

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
