"use client";

import { useState, useEffect } from "react";
import type { PepperData } from "../_lib/pepper";
import PriceCard, { type ChangeInfo } from "./PriceCard";
import AdBanner from "@/components/AdBanner";
import PriceCalculator from "./PriceCalculator";
import PepperArticle from "./PepperArticle";
import { useLanguage } from "@/contexts/LanguageContext";
import type { HistoryEntry } from "../_lib/pepper-history";

interface PriceEntry {
  date: string;
  bps: number;
  wps: number;
}

type Lang = "bm" | "en";

const T = {
  en: {
    live: "Live from MPB",
    fallback: "Showing reference prices",
    title: "Pepper Price Malaysia",
    subtitle: "Daily prices from the Malaysia Pepper Board (MPB)",
    lastUpdated: "Last updated",
    shareWA: "Share via WhatsApp",
    historyTitle: "Price History (30 days)",
    historyEmpty: "Visit daily to build your price history chart",
    calcTitle: "Price Calculator",
    calcPlaceholder: "Enter quantity in kg…",
    calcBtn: "Calculate",
    blackPepper: "Black Pepper",
    whitePepper: "White Pepper",
    whatBPS: "What is BPS?",
    whatBPSBody:
      "Black Pepper Sarawak (BPS) is oven-dried black pepper from Sarawak, Malaysia — one of the world's premium pepper origins. FAQ grade is the standard traded grade.",
    whatWPS: "What is WPS?",
    whatWPSBody:
      "White Pepper Sarawak (WPS) comes from the same pepper berry as black pepper but is soaked and the outer skin removed. It is milder and preferred in lighter-coloured dishes.",
    howSet: "How Are Prices Set?",
    howSetBody:
      "MPB publishes official reference prices periodically. These are indicative prices for trade reference. Actual dealer prices may vary depending on grade, quantity, and market conditions.",
    sarawak: "Sarawak Pepper",
    sarawakBody:
      "Sarawak is Malaysia's main pepper-producing state and one of the world's top pepper exporters. Malaysian pepper is prized for its consistent quality and distinctive aroma.",
    tableTitle: "Price per Quantity",
    tableSubtitle: "At today's MPB reference rate",
    grade: "Grade",
    source: "Source",
    disclaimer: "Prices are for informational reference only",
  },
  bm: {
    live: "Langsung dari MPB",
    fallback: "Harga Rujukan",
    title: "Harga Lada Malaysia",
    subtitle: "Harga harian dari Lembaga Lada Malaysia (MPB)",
    lastUpdated: "Dikemaskini",
    shareWA: "Kongsi via WhatsApp",
    historyTitle: "Sejarah Harga (30 hari)",
    historyEmpty: "Lawati setiap hari untuk membina carta sejarah harga",
    calcTitle: "Kalkulator Harga",
    calcPlaceholder: "Masukkan kuantiti dalam kg…",
    calcBtn: "Kira",
    blackPepper: "Lada Hitam",
    whitePepper: "Lada Putih",
    whatBPS: "Apa itu BPS?",
    whatBPSBody:
      "Lada Hitam Sarawak (BPS) ialah lada hitam yang dikeringkan dari Sarawak, Malaysia — salah satu asal usul lada premium di dunia. Gred FAQ adalah gred perdagangan standard.",
    whatWPS: "Apa itu WPS?",
    whatWPSBody:
      "Lada Putih Sarawak (WPS) berasal dari beri lada yang sama seperti lada hitam tetapi direndam dan kulit luarnya dihilangkan. Ia lebih ringan dan digemari dalam masakan berwarna cerah.",
    howSet: "Bagaimana Harga Ditetapkan?",
    howSetBody:
      "MPB menerbitkan harga rujukan rasmi secara berkala sebagai panduan perdagangan. Harga sebenar mungkin berbeza bergantung kepada gred, kuantiti, dan keadaan pasaran.",
    sarawak: "Lada Sarawak",
    sarawakBody:
      "Sarawak adalah negeri penghasil lada utama Malaysia dan antara pengeksport lada terbesar di dunia. Lada Malaysia terkenal dengan kualiti yang konsisten dan aroma yang tersendiri.",
    tableTitle: "Harga mengikut Kuantiti",
    tableSubtitle: "Berdasarkan kadar rujukan MPB hari ini",
    grade: "Gred",
    source: "Sumber",
    disclaimer: "Harga adalah untuk rujukan maklumat sahaja",
  },
};

function formatDate(iso: string, lang: Lang) {
  return new Date(iso).toLocaleString(lang === "bm" ? "ms-MY" : "en-MY", {
    timeZone: "Asia/Kuala_Lumpur",
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function Sparkline({
  data,
  valueKey,
  color,
}: {
  data: PriceEntry[];
  valueKey: "bps" | "wps";
  color: string;
}) {
  if (data.length < 2) return null;
  const vals = data.map((d) => d[valueKey]);
  const min = Math.min(...vals);
  const max = Math.max(...vals);
  const range = max - min || 1;
  const W = 300, H = 56;
  const pad = 6;
  const pts = vals
    .map(
      (v, i) =>
        `${(i / (vals.length - 1)) * W},${H - pad - ((v - min) / range) * (H - pad * 2)}`
    )
    .join(" ");
  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      className="w-full h-14"
      preserveAspectRatio="none"
    >
      <polyline
        points={pts}
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function PepperContent({
  data,
  serverHistory,
}: {
  data: PepperData;
  serverHistory: HistoryEntry[];
}) {
  const { lang } = useLanguage();
  const [localHistory, setLocalHistory] = useState<PriceEntry[]>([]);

  // Use server data if available, otherwise fall back to localStorage accumulation
  const history: PriceEntry[] = serverHistory.length > 0 ? serverHistory : localHistory;

  const t = T[lang];
  const bps = data.prices.find((p) => p.code === "BPS");
  const wps = data.prices.find((p) => p.code === "WPS");

  useEffect(() => {
    let stored: PriceEntry[] = [];
    try {
      stored = JSON.parse(localStorage.getItem("pepper_price_history") || "[]");
    } catch {}

    const today = new Date().toISOString().split("T")[0];
    const entry: PriceEntry = {
      date: today,
      bps: bps?.price_per_tonne ?? 0,
      wps: wps?.price_per_tonne ?? 0,
    };
    const idx = stored.findIndex((e) => e.date === today);
    if (idx >= 0) stored[idx] = entry;
    else stored.push(entry);

    const trimmed = stored.slice(-30);
    localStorage.setItem("pepper_price_history", JSON.stringify(trimmed));
    setLocalHistory(trimmed);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function getChange(code: "bps" | "wps", current: number): ChangeInfo | null {
    if (history.length < 2) return null;
    const prev = history[history.length - 2];
    const prevVal = prev[code];
    if (!prevVal) return null;
    const amount = Math.round(current - prevVal);
    const pct = Math.abs((amount / prevVal) * 100).toFixed(1);
    return { amount, pct };
  }

  const waMsg = [
    "🌿 *Harga Lada Malaysia*",
    "",
    `⚫ BPS: RM ${bps?.price_per_tonne.toLocaleString()}/tan (RM ${bps?.price_per_kg.toFixed(2)}/kg)`,
    `⚪ WPS: RM ${wps?.price_per_tonne.toLocaleString()}/tan (RM ${wps?.price_per_kg.toFixed(2)}/kg)`,
    "",
    "https://www.themalaysianinfo.online/pepper",
  ].join("\n");
  const waUrl = `https://wa.me/?text=${encodeURIComponent(waMsg)}`;

  return (
    <div className="max-w-2xl mx-auto px-4 py-8 space-y-6">

      {/* Hero — image background */}
      <div
        className="animate-in rounded-2xl overflow-hidden shadow-lg relative h-44 flex flex-col items-center justify-center gap-2 text-center"
        style={{
          backgroundImage: "url(/pepper-hero.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full border border-white/30">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse inline-block" />
          {data.is_fallback ? t.fallback : t.live}
        </div>
        <h1 className="relative text-3xl font-extrabold text-white drop-shadow">
          {t.title}
        </h1>
        <p className="relative text-white/70 text-sm">{t.subtitle}</p>
      </div>

      {/* Split image banner */}
      <div className="rounded-2xl overflow-hidden shadow-md h-44 flex animate-in">
        <div
          className="w-1/2 relative flex flex-col items-end justify-end p-4"
          style={{
            backgroundImage: "url(/pepper-black.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          <div className="relative text-right">
            <p className="text-white font-extrabold text-sm leading-tight">{t.blackPepper}</p>
            <p className="text-gray-300 text-xs">BPS Sarawak</p>
          </div>
        </div>
        <div
          className="w-1/2 relative flex flex-col items-start justify-end p-4"
          style={{
            backgroundImage: "url(/pepper-white.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-white/20 to-transparent" />
          <div className="relative text-left">
            <p className="text-gray-900 font-extrabold text-sm leading-tight">{t.whitePepper}</p>
            <p className="text-gray-600 text-xs">WPS Sarawak</p>
          </div>
        </div>
      </div>

      {/* Price Cards with change indicator */}
      <div className="grid sm:grid-cols-2 gap-4 animate-in delay-1">
        {data.prices.map((p, i) => (
          <PriceCard
            key={p.code}
            price={p}
            index={i}
            change={getChange(p.code.toLowerCase() as "bps" | "wps", p.price_per_tonne)}
          />
        ))}
      </div>

      {/* WhatsApp Share */}
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold py-3 rounded-2xl shadow transition-colors text-sm"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
        {t.shareWA}
      </a>

      {/* Last updated */}
      <p className="text-center text-xs text-gray-400">
        {t.lastUpdated}: {formatDate(data.last_updated, lang)} (MYT)
      </p>

      {/* Price History Chart */}
      <div className="bg-white/90 border border-green-100 rounded-2xl shadow-sm overflow-hidden animate-in delay-2">
        <div className="px-5 py-4 border-b border-green-50 bg-green-50/50">
          <h2 className="font-bold text-gray-800 text-sm">📈 {t.historyTitle}</h2>
        </div>
        {history.length < 2 ? (
          <p className="text-center text-xs text-gray-400 py-8">{t.historyEmpty}</p>
        ) : (
          <div className="p-4 space-y-4">
            <div>
              <div className="flex justify-between text-xs text-gray-500 mb-1">
                <span className="font-semibold">⚫ BPS</span>
                <span>RM {history[history.length - 1].bps.toLocaleString()}/tonne</span>
              </div>
              <Sparkline data={history} valueKey="bps" color="#374151" />
            </div>
            <div>
              <div className="flex justify-between text-xs text-gray-500 mb-1">
                <span className="font-semibold">⚪ WPS</span>
                <span>RM {history[history.length - 1].wps.toLocaleString()}/tonne</span>
              </div>
              <Sparkline data={history} valueKey="wps" color="#16a34a" />
            </div>
            <div className="flex justify-between text-xs text-gray-300 pt-1">
              <span>{history[0].date} — {history[history.length - 1].date}</span>
              <span>{history.length} data point{history.length > 1 ? "s" : ""} · {serverHistory.length > 0 ? "MPB" : "local"}</span>
            </div>
          </div>
        )}
      </div>

      {/* Price Calculator */}
      <PriceCalculator bps={bps} wps={wps} t={t} />

      {/* Ad */}
      <AdBanner slot="1111111111" format="horizontal" className="min-h-[90px] rounded-xl overflow-hidden" />

      {/* Info cards */}
      <div className="grid sm:grid-cols-2 gap-4 animate-in delay-2">
        {[
          { icon: "🌿", title: t.whatBPS, body: t.whatBPSBody },
          { icon: "⚪", title: t.whatWPS, body: t.whatWPSBody },
          { icon: "📊", title: t.howSet, body: t.howSetBody },
          { icon: "🇲🇾", title: t.sarawak, body: t.sarawakBody },
        ].map((item) => (
          <div
            key={item.title}
            className="bg-white/80 border border-green-100 rounded-2xl shadow-sm p-5"
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xl">{item.icon}</span>
              <h2 className="font-bold text-gray-800 text-sm">{item.title}</h2>
            </div>
            <p className="text-xs text-gray-600 leading-relaxed">{item.body}</p>
          </div>
        ))}
      </div>

      {/* Pricing table */}
      <div className="bg-white/90 border border-green-100 rounded-2xl shadow-sm overflow-hidden animate-in delay-3">
        <div className="px-5 py-4 border-b border-green-50 bg-green-50/50">
          <h2 className="font-bold text-gray-800">{t.tableTitle}</h2>
          <p className="text-xs text-gray-400 mt-0.5">{t.tableSubtitle}</p>
        </div>
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-green-50 text-xs text-gray-500 uppercase tracking-wide">
              <th className="text-left px-5 py-2.5">{t.grade}</th>
              <th className="text-right px-5 py-2.5">100g</th>
              <th className="text-right px-5 py-2.5">500g</th>
              <th className="text-right px-5 py-2.5">1 kg</th>
              <th className="text-right px-5 py-2.5">10 kg</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-green-50">
            {data.prices.map((p) => (
              <tr key={p.code} className="hover:bg-green-50/40 transition-colors">
                <td className="px-5 py-3 font-bold text-green-700">{p.code}</td>
                <td className="px-5 py-3 text-right">RM {(p.price_per_kg * 0.1).toFixed(2)}</td>
                <td className="px-5 py-3 text-right">RM {(p.price_per_kg * 0.5).toFixed(2)}</td>
                <td className="px-5 py-3 text-right">RM {p.price_per_kg.toFixed(2)}</td>
                <td className="px-5 py-3 text-right">RM {(p.price_per_kg * 10).toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Ad */}
      <AdBanner slot="2222222222" format="rectangle" className="min-h-[250px] rounded-xl overflow-hidden" />

      {/* Rich editorial content + FAQ */}
      <PepperArticle />

      {/* Meta / source */}
      <div className="text-center text-xs text-gray-400 space-y-1 animate-in delay-4">
        <p>
          {t.source}:{" "}
          <a
            href="https://www.mpb.gov.my"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-green-600"
          >
            Malaysia Pepper Board (mpb.gov.my)
          </a>
        </p>
        <p className="text-gray-300">{t.disclaimer}</p>
      </div>
    </div>
  );
}
