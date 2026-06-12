"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { PETROL_FAQ } from "../_lib/faq";

const CONTENT = {
  bm: {
    title: "Panduan Harga Petrol Malaysia",
    paras: [
      "Harga petrol ialah salah satu maklumat harian yang paling kerap disemak oleh rakyat Malaysia, kerana ia memberi kesan langsung kepada kos pengangkutan dan perbelanjaan isi rumah. Halaman ini memaparkan harga RON95, RON97 dan diesel terkini, bersama kalkulator kos untuk membantu anda merancang perbelanjaan minyak bulanan.",
      "Malaysia menggunakan Mekanisme Harga Automatik (Automatic Pricing Mechanism, APM) yang menyemak harga runcit bahan api secara mingguan. Harga baharu berkuat kuasa setiap hari Khamis dan kekal sehingga Rabu minggu berikutnya. Di bawah sistem ini, harga RON97 dan diesel Euro 5 di Semenanjung mengikut harga pasaran, manakala RON95 dikekalkan pada harga siling yang ditetapkan kerajaan untuk rakyat yang layak melalui program subsidi disasarkan BUDI95.",
      "RON95 kekal sebagai bahan api paling popular di Malaysia kerana harganya yang lebih rendah dan sesuai untuk majoriti kereta penumpang. RON97 pula menawarkan nombor oktana lebih tinggi yang sesuai untuk enjin berprestasi tinggi. Bagi diesel, Semenanjung Malaysia menggunakan harga pasaran terurus, manakala Sabah dan Sarawak menikmati harga diesel bersubsidi yang lebih rendah.",
      "Memahami perbezaan antara harga bersubsidi dan harga pasaran amat penting, terutamanya bagi pengguna yang melebihi kuota subsidi atau yang tidak layak. Jadual sejarah harga di halaman ini menunjukkan trend harga pasaran dari minggu ke minggu, supaya anda dapat melihat sama ada harga sedang naik atau turun sebelum mengisi minyak.",
    ],
  },
  en: {
    title: "Malaysia Petrol Price Guide",
    paras: [
      "Fuel prices are among the most frequently checked pieces of daily information for Malaysians, because they directly affect transport costs and household spending. This page shows the latest RON95, RON97 and diesel prices, along with a cost calculator to help you plan your monthly fuel budget.",
      "Malaysia uses an Automatic Pricing Mechanism (APM) that reviews retail fuel prices weekly. New prices take effect every Thursday and remain in place until the following Wednesday. Under this system, RON97 and Euro 5 diesel in the Peninsula follow market prices, while RON95 is held at a government-set ceiling price for eligible citizens through the BUDI95 targeted subsidy programme.",
      "RON95 remains the most popular fuel in Malaysia due to its lower price and suitability for the majority of passenger cars. RON97 offers a higher octane rating suited to high-performance engines. For diesel, Peninsular Malaysia uses a managed market price, while Sabah and Sarawak enjoy a lower subsidised diesel price.",
      "Understanding the difference between subsidised and market prices is important, especially for users who exceed their subsidy quota or who are not eligible. The price history table on this page shows the week-to-week market price trend, so you can see whether prices are rising or falling before you fill up.",
    ],
  },
};

export default function PetrolArticle() {
  const { lang } = useLanguage();
  const c = CONTENT[lang];

  return (
    <div className="space-y-6">
      <article className="card-glass rounded-2xl p-6 space-y-4">
        <h2 className="text-xl font-bold text-white">{c.title}</h2>
        {c.paras.map((p, i) => (
          <p key={i} className="text-sm text-white/65 leading-relaxed">{p}</p>
        ))}
      </article>

      <div className="card-glass rounded-2xl p-6 space-y-4">
        <h2 className="text-xl font-bold text-white">
          {lang === "bm" ? "Soalan Lazim (FAQ)" : "Frequently Asked Questions"}
        </h2>
        <div className="divide-y divide-white/10">
          {PETROL_FAQ.map((f) => (
            <details key={f.qEn} className="group py-3">
              <summary className="cursor-pointer list-none flex items-start justify-between gap-3 text-white font-semibold text-sm">
                <span>{lang === "bm" ? f.q : f.qEn}</span>
                <span className="text-yellow-400 transition-transform group-open:rotate-45 shrink-0">+</span>
              </summary>
              <p className="text-sm text-white/55 leading-relaxed mt-2">
                {lang === "bm" ? f.a : f.aEn}
              </p>
            </details>
          ))}
        </div>
      </div>
    </div>
  );
}
