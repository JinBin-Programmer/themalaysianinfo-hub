import type { PepperPrice } from "../_lib/pepper";

export interface ChangeInfo {
  amount: number;
  pct: string;
}

interface Props {
  price: PepperPrice;
  index: number;
  change?: ChangeInfo | null;
}

const ICONS: Record<string, string> = { BPS: "⚫", WPS: "⚪" };
const BG: Record<string, string> = {
  BPS: "from-gray-800 to-gray-600",
  WPS: "from-gray-100 to-white border border-gray-200",
};
const TEXT: Record<string, string> = { BPS: "text-white", WPS: "text-gray-800" };
const SUB: Record<string, string> = { BPS: "text-gray-300", WPS: "text-gray-500" };

export default function PriceCard({ price, index, change }: Props) {
  const icon = ICONS[price.code] ?? "🌿";
  const bg = BG[price.code] ?? "from-green-500 to-green-700";
  const text = TEXT[price.code] ?? "text-white";
  const sub = SUB[price.code] ?? "text-green-100";
  const isDark = price.code === "BPS";

  let changeBadge = null;
  if (change) {
    const up = change.amount > 0;
    const flat = change.amount === 0;
    const arrow = flat ? "─" : up ? "▲" : "▼";
    const sign = up ? "+" : "";
    const badgeText = flat
      ? "─ No change"
      : `${arrow} RM ${Math.abs(change.amount).toLocaleString()} (${sign}${change.pct}%)`;
    const badgeClass = flat
      ? isDark ? "bg-gray-700/40 text-gray-400" : "bg-gray-100 text-gray-500"
      : up
      ? isDark ? "bg-green-900/40 text-green-300" : "bg-green-100 text-green-700"
      : isDark ? "bg-red-900/40 text-red-300" : "bg-red-100 text-red-600";
    changeBadge = (
      <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${badgeClass}`}>
        {badgeText}
      </span>
    );
  }

  return (
    <div
      className={`animate-in bg-gradient-to-br ${bg} rounded-2xl shadow-lg p-6 flex flex-col gap-3`}
      style={{ animationDelay: `${index * 0.08}s` }}
    >
      <div className="flex items-start justify-between gap-2">
        <div className="flex items-center gap-3">
          <span className="text-3xl">{icon}</span>
          <div>
            <div className={`font-bold text-lg leading-tight ${text}`}>{price.type}</div>
            <div className={`text-xs ${sub}`}>Code: {price.code}</div>
          </div>
        </div>
        {changeBadge}
      </div>

      <div className="flex flex-wrap gap-4 mt-2">
        <div>
          <div className={`text-xs uppercase tracking-wide ${sub} mb-0.5`}>Per Tonne</div>
          <div className={`text-2xl font-extrabold ${text}`}>
            RM {price.price_per_tonne.toLocaleString("en-MY", { minimumFractionDigits: 0 })}
          </div>
        </div>
        <div>
          <div className={`text-xs uppercase tracking-wide ${sub} mb-0.5`}>Per Kilogram</div>
          <div className={`text-2xl font-extrabold ${text}`}>
            RM {price.price_per_kg.toFixed(2)}
          </div>
        </div>
      </div>

      <div className={`text-xs ${sub} mt-1`}>
        {price.code === "BPS"
          ? "Black Pepper Sarawak · Oven dried, FAQ grade"
          : "White Pepper Sarawak · ASTA/FAQ grade"}
      </div>
    </div>
  );
}
