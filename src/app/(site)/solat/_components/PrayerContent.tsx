"use client";

import PrayerDisplay from "./PrayerDisplay";
import PrayerArticle from "./PrayerArticle";
import AdBanner from "@/components/AdBanner";
import { useLanguage } from "@/contexts/LanguageContext";
import type { PrayerData } from "../_lib/prayer";

interface Props {
  data: PrayerData;
}

const INFO = {
  bm: [
    {
      icon: "📿",
      title: "5 Waktu Solat Fardhu",
      body: "Lima waktu solat fardhu dalam Islam ialah Subuh (Fajr), Zohor (Dhuhr), Asar (Asr), Maghrib dan Isyak (Isha). Syuruk menandakan matahari terbit — ia bukan waktu solat tetapi menandakan tamatnya tempoh solat Subuh.",
    },
    {
      icon: "🕐",
      title: "Kaedah Pengiraan",
      body: "Waktu solat dikira menggunakan kaedah Liga Dunia Islam (Method 3) yang digunakan secara meluas di Malaysia. Sentiasa sahkan dengan aplikasi rasmi e-Solat JAKIM untuk lokasi tepat anda.",
    },
    {
      icon: "🗓",
      title: "Imsak",
      body: "Imsak menandakan permulaan tempoh berpuasa semasa Ramadan — biasanya 10 minit sebelum Subuh. Di luar Ramadan, ia menjadi peringatan bahawa Subuh semakin hampir.",
    },
    {
      icon: "📍",
      title: "Ketepatan Lokasi",
      body: "Waktu solat berbeza mengikut bandar dan latitud. Pilih bandar anda daripada menu di atas untuk waktu setempat yang tepat. Untuk waktu yang tepat, rujuk masjid berhampiran atau aplikasi e-Solat JAKIM.",
    },
  ],
  en: [
    {
      icon: "📿",
      title: "5 Fardhu Prayers",
      body: "The five obligatory daily prayers in Islam are Fajr (Subuh), Dhuhr (Zohor), Asr (Asar), Maghrib, and Isha (Isyak). Syuruk marks sunrise — it is not a prayer but marks the end of the Fajr prayer window.",
    },
    {
      icon: "🕐",
      title: "Prayer Method",
      body: "Prayer times are calculated using the Muslim World League method (Method 3) which is widely used in Malaysia. Always verify against the official JAKIM e-Solat app for your exact location.",
    },
    {
      icon: "🗓",
      title: "Imsak",
      body: "Imsak marks the beginning of the fasting period during Ramadan — typically 10 minutes before Subuh. Outside Ramadan it serves as a reminder that Subuh is approaching.",
    },
    {
      icon: "📍",
      title: "Location Accuracy",
      body: "Prayer times vary by city and latitude. Select your city from the dropdown above for accurate local times. For precise times, consult your local mosque or the JAKIM e-Solat app.",
    },
  ],
};

export default function PrayerContent({ data }: Props) {
  const { lang } = useLanguage();
  const info = INFO[lang];

  return (
    <div>
      {/* Hero section — title + prayer display over shared hero background */}
      <div className="hero-bg">
        <div className="max-w-2xl mx-auto px-4 pt-8 pb-6">
          <div className="animate-in text-center mb-5">
            <h1 className="text-3xl font-extrabold text-white drop-shadow-lg">
              🕌 Waktu Solat Malaysia
            </h1>
            <p className="text-indigo-200 text-sm mt-1.5">
              {lang === "bm"
                ? "Waktu solat harian untuk Malaysia"
                : "Daily Prayer Times for Malaysia"}
            </p>
          </div>
          <PrayerDisplay initial={data} />
        </div>
      </div>

      {/* Below-fold: ads + info */}
      <div className="max-w-2xl mx-auto px-4 py-6 space-y-6">
        {/* First ad — below prayer display */}
        <AdBanner slot="4444444444" format="horizontal" className="min-h-[90px] rounded-xl overflow-hidden" />

        {/* Info cards */}
        <div className="grid sm:grid-cols-2 gap-4 animate-in delay-3">
          {info.map((item) => (
            <div
              key={item.title}
              className="bg-white/5 border border-white/10 rounded-2xl shadow-sm p-5 hover:bg-white/10 transition-colors"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xl">{item.icon}</span>
                <h2 className="font-bold text-white text-sm">{item.title}</h2>
              </div>
              <p className="text-xs text-indigo-200 leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>

        {/* Second ad */}
        <AdBanner slot="5555555555" format="rectangle" className="min-h-[250px] rounded-xl overflow-hidden" />

        {/* Rich editorial content + FAQ */}
        <PrayerArticle />
      </div>
    </div>
  );
}
