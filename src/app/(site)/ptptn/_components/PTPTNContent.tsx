"use client";

import PTPTNCalculator from "./PTPTNCalculator";
import PTPTNArticle from "./PTPTNArticle";

export default function PTPTNContent() {
  return (
    <div>
      <PTPTNCalculator />

      {/* Content below widget */}
      <div className="max-w-2xl mx-auto px-4 pb-10 space-y-6 bg-[#0a0a0a]">
        <PTPTNArticle />
      </div>
    </div>
  );
}
