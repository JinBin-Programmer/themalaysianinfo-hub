"use client";

import TankCalculator from "./TankCalculator";
import PriceHistory from "./PriceHistory";
import PetrolArticle from "./PetrolArticle";
import AdBanner from "@/components/AdBanner";
import { useLanguage } from "@/contexts/LanguageContext";
import type { PetrolData } from "../_lib/petrol";

interface Props {
  data: PetrolData;
}

const FUEL_STYLES: Record<string, {
  bg: string; border: string; badge: string; saveBadge: string; icon: string;
}> = {
  RON95:      { bg: "from-yellow-500 to-yellow-700",  border: "border-yellow-400/40", badge: "bg-yellow-600", saveBadge: "bg-green-700",  icon: "🟡" },
  RON97:      { bg: "from-green-600 to-green-800",    border: "border-green-500/40",  badge: "bg-green-700",  saveBadge: "",              icon: "🟢" },
  DIESEL:     { bg: "from-blue-600 to-blue-900",      border: "border-blue-400/40",   badge: "bg-blue-700",   saveBadge: "",              icon: "🔵" },
  DIESEL_B10: { bg: "from-gray-700 to-gray-950",      border: "border-gray-500/40",   badge: "bg-gray-600",   saveBadge: "bg-green-700",  icon: "⚫" },
};

const t = {
  bm: {
    live: "Langsung dari KPDNHEP",
    reference: "Harga Rujukan",
    h1: "⛽ Harga Petrol Malaysia",
    subtitle: "Dikemas kini setiap Khamis",
    effective: "Berkuat kuasa",
    nextUpdate: "Kemaskini seterusnya",
    subsidised: "Bersubsidi",
    noSubsidy: "tanpa subsidi",
    perLitre: "se-liter",
    save: "Jimat",
    perL: "/L",
    vsLastWeek: "vs minggu lalu",
    unchanged: "Tiada perubahan",
    shareText: (prices: string) =>
      `Harga Petrol Malaysia minggu ini:\n${prices}\n\nSemak harga terkini: https://www.themalaysianinfo.online/petrol`,
    shareBtn: "📤 Kongsi ke WhatsApp",
    source: "Sumber",
    disclaimer: "Harga untuk rujukan sahaja",
  },
  en: {
    live: "Live from KPDNHEP",
    reference: "Reference Price",
    h1: "⛽ Malaysia Petrol Price",
    subtitle: "Updated every Thursday",
    effective: "Effective",
    nextUpdate: "Next update",
    subsidised: "Subsidised",
    noSubsidy: "without subsidy",
    perLitre: "per litre",
    save: "Save",
    perL: "/L",
    vsLastWeek: "vs last week",
    unchanged: "No change",
    shareText: (prices: string) =>
      `Malaysia Petrol Prices this week:\n${prices}\n\nCheck latest prices: https://www.themalaysianinfo.online/petrol`,
    shareBtn: "📤 Share on WhatsApp",
    source: "Source",
    disclaimer: "Prices are for informational reference only",
  },
};

const HISTORY = [
  { ron97: 3.35 }, // most recent historical week, used for week-over-week trend
];

function getTrend(currentPrice: number, fuelCode: string) {
  // Trend reference: last week's market price for unsubsidised fuels
  const refMap: Record<string, number> = {
    RON97: HISTORY[0].ron97,
    DIESEL: 3.32,
  };
  const prev = refMap[fuelCode];
  if (prev === undefined) return null;
  const diff = parseFloat((currentPrice - prev).toFixed(2));
  return { diff, prev };
}

export default function PetrolContent({ data }: Props) {
  const { lang } = useLanguage();
  const tx = t[lang];

  const buildShareUrl = () => {
    const prices = data.fuels.map(f =>
      `${FUEL_STYLES[f.code]?.icon ?? "⛽"} ${lang === "bm" ? f.name_ms : f.name}: RM${f.price.toFixed(2)}/L`
    ).join("\n");
    const msg = tx.shareText(prices);
    return `https://wa.me/?text=${encodeURIComponent(msg)}`;
  };

  return (
    <div>
      {/* Hero */}
      <div className="hero-bg">
        <div className="max-w-2xl mx-auto px-4 pt-10 pb-16 space-y-6">

          {/* Title */}
          <div className="animate-in text-center space-y-1 pt-4">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur text-white/80 text-xs font-semibold px-3 py-1 rounded-full border border-white/20 mb-3">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse inline-block" />
              {data.is_fallback ? tx.reference : tx.live}
            </div>
            <h1 className="text-4xl font-black text-white drop-shadow-lg">{tx.h1}</h1>
            <p className="text-white/60 text-sm">{tx.subtitle}</p>
          </div>

          {/* Effective date */}
          <div className="animate-in delay-1 card-glass rounded-2xl px-5 py-3 flex flex-wrap items-center justify-between gap-2 text-sm">
            <div>
              <div className="text-white/40 text-xs uppercase tracking-wider">{tx.effective}</div>
              <div className="text-white font-semibold">{data.effective_date}</div>
            </div>
            <div className="text-right">
              <div className="text-white/40 text-xs uppercase tracking-wider">{tx.nextUpdate}</div>
              <div className="text-yellow-300 font-semibold">{data.next_update}</div>
            </div>
          </div>

          {/* Price cards */}
          <div className="grid sm:grid-cols-2 gap-4 animate-in delay-2">
            {data.fuels.map((fuel, i) => {
              const style = FUEL_STYLES[fuel.code] ?? FUEL_STYLES.RON97;
              const saving = fuel.market_price ? parseFloat((fuel.market_price - fuel.price).toFixed(2)) : null;
              const fuelName = lang === "bm" ? fuel.name_ms : fuel.name;
              const fuelNote = lang === "bm" ? fuel.note_ms : fuel.note;
              const trend = getTrend(fuel.price, fuel.code);

              return (
                <div
                  key={fuel.code}
                  className={`bg-gradient-to-br ${style.bg} border ${style.border} rounded-2xl p-5 shadow-xl`}
                  style={{ animationDelay: `${i * 0.06}s` }}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-lg">{style.icon}</span>
                        <span className="font-extrabold text-white text-xl">{fuelName}</span>
                      </div>
                    </div>
                    {fuel.is_subsidised && (
                      <span className={`text-xs text-white px-2 py-0.5 rounded-full ${style.badge} whitespace-nowrap`}>
                        {tx.subsidised}
                      </span>
                    )}
                  </div>

                  {fuel.market_price && (
                    <div className="text-sm text-white/40 line-through mb-0.5">
                      RM {fuel.market_price.toFixed(2)}{" "}
                      <span className="no-underline text-xs">({tx.noSubsidy})</span>
                    </div>
                  )}

                  <div className="text-4xl font-black text-white tabular-nums">
                    RM {fuel.price.toFixed(2)}
                  </div>
                  <div className="text-xs text-white/40 mt-0.5">{tx.perLitre} · {fuelNote}</div>

                  {/* Trend vs last week — subsidised fuels have fixed ceiling prices */}
                  {fuel.is_subsidised ? (
                    <div className="mt-2 text-xs text-white/30">
                      🔒 {lang === "bm" ? "Harga siling ditetapkan kerajaan" : "Government fixed ceiling price"}
                    </div>
                  ) : trend && (
                    <div className={`mt-2 text-xs font-semibold ${
                      trend.diff > 0 ? "text-red-300" : trend.diff < 0 ? "text-green-300" : "text-white/40"
                    }`}>
                      {trend.diff === 0
                        ? `— ${tx.unchanged}`
                        : `${trend.diff > 0 ? "▲" : "▼"} RM ${Math.abs(trend.diff).toFixed(2)} ${tx.vsLastWeek}`}
                    </div>
                  )}

                  {saving && saving > 0 && (
                    <div className={`mt-2 inline-flex items-center gap-1 text-xs text-white font-semibold px-2.5 py-1 rounded-full ${style.saveBadge}`}>
                      💰 {tx.save} RM {saving.toFixed(2)}{tx.perL}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* WhatsApp share button */}
          <div className="text-center animate-in delay-3">
            <a
              href={buildShareUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white font-semibold text-sm px-5 py-2.5 rounded-full transition-colors shadow-lg"
            >
              {tx.shareBtn}
            </a>
          </div>
        </div>
      </div>

      {/* Content below hero */}
      <div className="max-w-2xl mx-auto px-4 py-10 space-y-6 bg-[#0a0a0a]">

        <div className="animate-in delay-2">
          <PriceHistory currentFuels={data.fuels} history={data.history} />
        </div>

        <AdBanner slot="6666666666" format="horizontal" className="min-h-[90px] rounded-xl overflow-hidden" />

        <div className="animate-in delay-2">
          <TankCalculator fuels={data.fuels} />
        </div>

        <AdBanner slot="7777777777" format="rectangle" className="min-h-[250px] rounded-xl overflow-hidden" />

        {/* Rich editorial content + FAQ */}
        <PetrolArticle />

        <div className="text-center text-xs text-white/25 space-y-1 animate-in delay-4">
          <p>{tx.source}:{" "}
            <a href="https://www.kpdnhep.gov.my" target="_blank" rel="noopener noreferrer" className="underline hover:text-white/50">KPDNHEP</a>
            {" · "}
            <a href="https://data.gov.my" target="_blank" rel="noopener noreferrer" className="underline hover:text-white/50">data.gov.my</a>
          </p>
          <p>{tx.disclaimer}</p>
        </div>
      </div>
    </div>
  );
}
