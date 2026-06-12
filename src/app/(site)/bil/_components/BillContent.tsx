"use client";

import BillCalculator from "./BillCalculator";
import BillArticle from "./BillArticle";

export default function BillContent() {
  return (
    <div>
      <BillCalculator />

      {/* Rich editorial content + FAQ */}
      <div className="max-w-2xl mx-auto px-4 pb-10 space-y-6 bg-[#0a0a0a]">
        <BillArticle />
      </div>
    </div>
  );
}
