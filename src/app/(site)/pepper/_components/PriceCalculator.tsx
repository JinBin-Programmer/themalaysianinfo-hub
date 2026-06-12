"use client";
import { useState } from "react";
import type { PepperPrice } from "../_lib/pepper";

interface CalcT {
  calcTitle: string;
  calcPlaceholder: string;
  calcBtn: string;
}

interface Props {
  bps?: PepperPrice;
  wps?: PepperPrice;
  t: CalcT;
}

export default function PriceCalculator({ bps, wps, t }: Props) {
  const [qty, setQty] = useState("");
  const [result, setResult] = useState<{ bps: number; wps: number } | null>(null);

  function calculate() {
    const kg = parseFloat(qty);
    if (!kg || kg <= 0) return;
    setResult({
      bps: (bps?.price_per_kg ?? 0) * kg,
      wps: (wps?.price_per_kg ?? 0) * kg,
    });
  }

  return (
    <div className="bg-white/90 border border-green-100 rounded-2xl shadow-sm overflow-hidden">
      <div className="px-5 py-4 border-b border-green-50 bg-green-50/50">
        <h2 className="font-bold text-gray-800 text-sm">🧮 {t.calcTitle}</h2>
      </div>
      <div className="p-4 space-y-3">
        <div className="flex gap-2">
          <input
            type="number"
            min="0"
            step="0.1"
            value={qty}
            onChange={(e) => {
              setQty(e.target.value);
              setResult(null);
            }}
            placeholder={t.calcPlaceholder}
            className="flex-1 text-sm border border-gray-200 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <button
            onClick={calculate}
            className="bg-green-700 hover:bg-green-800 text-white text-sm font-bold px-4 py-2 rounded-xl transition-colors"
          >
            {t.calcBtn}
          </button>
        </div>
        {result && (
          <div className="grid grid-cols-2 gap-3 pt-1">
            <div className="bg-gray-900 rounded-xl p-4 text-center">
              <div className="text-gray-400 text-xs mb-1">⚫ BPS</div>
              <div className="text-white font-extrabold text-lg">
                RM {result.bps.toLocaleString("en-MY", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </div>
              <div className="text-gray-500 text-xs mt-0.5">{qty} kg</div>
            </div>
            <div className="bg-gray-100 rounded-xl p-4 text-center border border-gray-200">
              <div className="text-gray-500 text-xs mb-1">⚪ WPS</div>
              <div className="text-gray-800 font-extrabold text-lg">
                RM {result.wps.toLocaleString("en-MY", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </div>
              <div className="text-gray-400 text-xs mt-0.5">{qty} kg</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
