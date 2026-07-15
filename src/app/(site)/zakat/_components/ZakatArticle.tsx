"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { FAQ } from "../_lib/faq";

const CONTENT = {
  bm: {
    title: "Panduan Kalkulator Zakat Malaysia",
    paras: [
      "Zakat ialah salah satu daripada lima Rukun Islam dan merupakan kewajipan kewangan ke atas setiap Muslim yang memenuhi syarat tertentu. Di Malaysia, dua jenis zakat yang paling kerap dikira oleh individu ialah zakat pendapatan dan zakat simpanan. Kalkulator di halaman ini membantu anda menganggar jumlah zakat yang wajib dibayar dengan cepat, percuma dan tanpa perlu memuat turun sebarang aplikasi.",
      "Untuk zakat pendapatan, mula dengan memilih atau memasukkan gaji kasar bulanan anda. Kalkulator akan mendarabkannya dengan 12 untuk mendapat pendapatan kasar setahun, kemudian menolak caruman KWSP sebanyak 11% serta elaun keperluan asas — RM8,000 untuk diri sendiri dan RM3,000 bagi setiap tanggungan seperti pasangan dan anak. Anda juga boleh memasukkan potongan bulanan lain. Baki yang tinggal ialah pendapatan bersih yang layak dizakatkan. Jika jumlah ini mencapai nisab, zakat dikenakan pada kadar 2.5%.",
      "Untuk zakat simpanan, anda hanya perlu memasukkan jumlah baki simpanan anda. Mengikut prinsip syarak, wang simpanan yang telah dipegang selama setahun penuh (haul) dan mencapai nilai nisab adalah wajib dizakatkan pada kadar yang sama, iaitu 2.5%. Kalkulator akan menunjukkan dengan jelas sama ada simpanan anda mencapai nisab dan berapa jumlah zakat yang sepatutnya dibayar.",
      "Nisab ialah ambang minimum harta yang menjadikan zakat wajib. Nilai nisab sebenar berubah mengikut harga emas semasa (lazimnya berasaskan 85 gram emas), jadi angka RM22,000 yang digunakan dalam kalkulator ini adalah anggaran panduan sahaja. Sentiasa rujuk Majlis Agama Islam negeri anda untuk nilai nisab terkini yang rasmi, kerana setiap negeri mungkin mengeluarkan kadar yang berbeza dari semasa ke semasa.",
      "Pecahan pengiraan yang dipaparkan membolehkan anda melihat dengan telus bagaimana setiap angka diperoleh — daripada pendapatan kasar, potongan KWSP, elaun keperluan, sehingga pendapatan bersih dan zakat akhir. Ini memudahkan anda menyemak dan memahami obligasi zakat anda sebelum membuat pembayaran.",
      "Setelah anda mengetahui jumlah zakat, pembayaran boleh dibuat melalui badan zakat negeri masing-masing seperti Lembaga Zakat Selangor, PPZ-MAIWP bagi Wilayah Persekutuan, atau majlis agama negeri lain. Kebanyakannya menawarkan pembayaran dalam talian, potongan gaji bulanan secara automatik, dan kaunter fizikal. Membayar zakat melalui saluran rasmi memastikan ia diagihkan kepada lapan asnaf yang berhak.",
    ],
  },
  en: {
    title: "Malaysia Zakat Calculator Guide",
    paras: [
      "Zakat is one of the five Pillars of Islam and is a financial obligation upon every Muslim who meets certain conditions. In Malaysia, the two types of zakat most commonly calculated by individuals are income zakat and savings zakat. The calculator on this page helps you quickly estimate how much zakat you owe, free of charge and without downloading any app.",
      "For income zakat, start by selecting or entering your monthly gross salary. The calculator multiplies it by 12 to get your annual gross income, then deducts an EPF contribution of 11% along with basic necessity allowances — RM8,000 for yourself and RM3,000 for each dependent such as a spouse and children. You can also enter other monthly deductions. The remaining balance is your eligible net income for zakat. If this amount reaches the nisab, zakat is charged at the rate of 2.5%.",
      "For savings zakat, you simply enter your savings balance. According to Islamic principles, saved funds that have been held for one full year (haul) and reach the nisab value are obligatory to be zakated at the same 2.5% rate. The calculator clearly shows whether your savings reach the nisab and how much zakat should be paid.",
      "Nisab is the minimum wealth threshold that makes zakat obligatory. The actual nisab value changes with the current gold price (usually based on 85 grams of gold), so the RM22,000 figure used in this calculator is a guideline estimate only. Always refer to your state Islamic Religious Council for the official, up-to-date nisab value, as each state may issue different rates from time to time.",
      "The calculation breakdown shown lets you transparently see how each figure is derived — from gross income, EPF deduction, necessity allowances, through to net income and the final zakat. This makes it easy to review and understand your zakat obligation before making a payment.",
      "Once you know your zakat amount, payment can be made through your respective state zakat body such as Lembaga Zakat Selangor, PPZ-MAIWP for the Federal Territories, or another state religious council. Most offer online payment, automatic monthly salary deductions, and physical counters. Paying zakat through official channels ensures it is distributed to the eight eligible recipient categories (asnaf).",
    ],
  },
};

export default function ZakatArticle() {
  const { lang } = useLanguage();
  const c = CONTENT[lang];

  return (
    <div className="space-y-6">
      <article className="card-glass rounded-2xl p-6 space-y-4">
        <h2 className="text-xl font-bold text-white">{c.title}</h2>
        {c.paras.map((p, i) => (
          <p key={i} className="text-[15px] text-white/80 leading-relaxed">{p}</p>
        ))}
      </article>

      <div className="card-glass rounded-2xl p-6 space-y-4">
        <h2 className="text-xl font-bold text-white">
          {lang === "bm" ? "Soalan Lazim (FAQ)" : "Frequently Asked Questions"}
        </h2>
        <div className="divide-y divide-white/10">
          {FAQ.map((f) => (
            <details key={f.qEn} className="group py-3">
              <summary className="cursor-pointer list-none flex items-start justify-between gap-3 text-white font-semibold text-sm">
                <span>{lang === "bm" ? f.q : f.qEn}</span>
                <span className="text-yellow-400 transition-transform group-open:rotate-45 shrink-0">+</span>
              </summary>
              <p className="text-[15px] text-white/75 leading-relaxed mt-2">
                {lang === "bm" ? f.a : f.aEn}
              </p>
            </details>
          ))}
        </div>
      </div>
    </div>
  );
}
