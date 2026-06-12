"use client";

import SavingsCalculator from "./SavingsCalculator";
import SimpananArticle from "./SimpananArticle";

export default function SimpananContent() {
  return (
    <div>
      {/* Calculator widget */}
      <SavingsCalculator />

      {/* Rich editorial content + FAQ */}
      <div className="max-w-2xl mx-auto px-4 pb-10 space-y-6 bg-[#0a0a0a]">
        <SimpananArticle />
      </div>
    </div>
  );
}
