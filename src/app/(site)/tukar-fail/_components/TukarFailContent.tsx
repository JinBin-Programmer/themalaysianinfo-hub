"use client";

import { useState } from "react";
import ImageConverter from "./ImageConverter";
import ImageCompressor from "./ImageCompressor";
import ImageResizer from "./ImageResizer";
import WordToPdf from "./WordToPdf";
import VideoCompressor from "./VideoCompressor";
import TukarFailArticle from "./TukarFailArticle";
import AdBanner from "@/components/AdBanner";
import { useLanguage } from "@/contexts/LanguageContext";

type ToolKey = "image-converter" | "image-compressor" | "image-resizer" | "word-to-pdf" | "video-compressor";

const TOOLS: {
  key: ToolKey;
  icon: string;
  titleMs: string;
  titleEn: string;
}[] = [
  { key: "image-converter",  icon: "🖼️", titleMs: "Tukar Imej",   titleEn: "Image Converter" },
  { key: "image-compressor", icon: "🗜️", titleMs: "Mampat Imej",  titleEn: "Image Compressor" },
  { key: "image-resizer",    icon: "📐", titleMs: "Ubah Saiz",    titleEn: "Image Resizer" },
  { key: "word-to-pdf",      icon: "📄", titleMs: "Word ke PDF",  titleEn: "Word to PDF" },
  { key: "video-compressor", icon: "🎬", titleMs: "Mampat Video", titleEn: "Video Compressor" },
];

export default function TukarFailContent() {
  const { lang } = useLanguage();
  const [active, setActive] = useState<ToolKey>("image-converter");

  const t = {
    bm: {
      h1: "🔄 Tukar Fail Online",
      sub: "Penukar & Pemampat Fail Percuma",
      note: "Semua diproses dalam pelayar · Tiada muat naik ke pelayan",
      privacyTitle: "100% Peribadi · 100% Private",
      privacy: "Fail anda tidak dihantar ke mana-mana pelayan. Semua pemprosesan berlaku terus dalam pelayar anda menggunakan teknologi WebAssembly dan Canvas API.",
    },
    en: {
      h1: "🔄 Tukar Fail Online",
      sub: "Free File Converter & Compressor",
      note: "All processing in your browser · No uploads to any server",
      privacyTitle: "100% Private · 100% Peribadi",
      privacy: "Your files are never sent to any server. All processing happens locally in your browser using WebAssembly and the Canvas API.",
    },
  };
  const tx = t[lang];

  return (
    <div>
      {/* Hero */}
      <div className="hero-bg">
        <div className="max-w-2xl mx-auto px-4 pt-10 pb-12 text-center space-y-3">
          <div className="animate-in pt-4">
            <div className="text-6xl mb-3">🔄</div>
            <h1 className="text-4xl font-black text-white drop-shadow-lg">{tx.h1}</h1>
            <p className="text-white/60 mt-2 text-lg">{tx.sub}</p>
            <p className="text-white/40 text-sm mt-1">{tx.note}</p>
          </div>

          {/* Tool selector tabs */}
          <div className="flex flex-wrap justify-center gap-2 pt-2 animate-in delay-1">
            {TOOLS.map(tool => (
              <button key={tool.key} onClick={() => setActive(tool.key)}
                className={`flex items-center gap-1.5 text-sm px-3 py-2 rounded-xl border font-semibold transition-colors ${active === tool.key ? "bg-yellow-500 border-yellow-400 text-black" : "bg-white/5 border-white/10 text-white/70 hover:bg-white/10"}`}>
                <span>{tool.icon}</span>
                <span>{lang === "bm" ? tool.titleMs : tool.titleEn}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Active tool widget */}
      <div className="bg-[#0a0a0a]">
        {active === "image-converter"  && <ImageConverter />}
        {active === "image-compressor" && <ImageCompressor />}
        {active === "image-resizer"    && <ImageResizer />}
        {active === "word-to-pdf"      && <WordToPdf />}
        {active === "video-compressor" && <VideoCompressor />}
      </div>

      {/* Content below widget */}
      <div className="max-w-2xl mx-auto px-4 py-10 space-y-6 bg-[#0a0a0a]">
        <AdBanner slot="6666666666" format="horizontal" className="min-h-[90px] rounded-xl overflow-hidden" />

        <div className="card-glass rounded-2xl p-6 text-center">
          <div className="text-2xl mb-2">🔒</div>
          <h2 className="font-bold text-white text-lg">{tx.privacyTitle}</h2>
          <p className="text-white/50 text-sm mt-2 max-w-xl mx-auto">{tx.privacy}</p>
        </div>

        <AdBanner slot="7777777777" format="rectangle" className="min-h-[250px] rounded-xl overflow-hidden" />

        {/* Rich editorial content + FAQ */}
        <TukarFailArticle />
      </div>
    </div>
  );
}
