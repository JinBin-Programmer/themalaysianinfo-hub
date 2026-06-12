"use client";

import OtCalculator from "./OtCalculator";
import OtArticle from "./OtArticle";
import AdBanner from "@/components/AdBanner";

export default function OtContent() {
  return (
    <div>
      <div className="hero-bg">
        <OtCalculator />
      </div>

      <div className="max-w-2xl mx-auto px-4 py-10 space-y-6 bg-[#0a0a0a]">
        <AdBanner slot="6666666666" format="horizontal" className="min-h-[90px] rounded-xl overflow-hidden" />

        {/* Rich editorial content + FAQ */}
        <OtArticle />

        <AdBanner slot="7777777777" format="rectangle" className="min-h-[250px] rounded-xl overflow-hidden" />
      </div>
    </div>
  );
}
