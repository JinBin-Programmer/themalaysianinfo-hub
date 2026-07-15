"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { FAQ } from "../_lib/faq";

const CONTENT = {
  bm: {
    title: "Panduan Keputusan 4D Malaysia",
    paras: [
      "Permainan nombor empat digit (4D) adalah antara bentuk loteri berangka yang paling popular di Malaysia. Pemain memilih nombor empat digit dari 0000 hingga 9999 dan membuat pertaruhan dengan harapan ia sepadan dengan nombor yang dicabut. Halaman ini menyenaraikan jadual cabutan bagi tiga pengendali berlesen utama — Magnum 4D, Sports TOTO dan Da Ma Cai — bersama pautan terus ke keputusan rasmi setiap pengendali.",
      "Setiap cabutan 4D standard mengeluarkan beberapa kategori hadiah. Terdapat tiga hadiah utama iaitu Hadiah Pertama, Hadiah Kedua dan Hadiah Ketiga, diikuti oleh 10 nombor Hadiah Khas dan 10 nombor Saguhati. Nombor anda dikira menang jika ia sepadan dengan mana-mana nombor dalam kategori ini. Jumlah kemenangan bergantung pada jenis pertaruhan (Besar atau Kecil) dan amaun yang anda pertaruhkan.",
      "Untuk menyemak sama ada nombor anda menang, lawati laman rasmi pengendali melalui butang 'Lihat Keputusan' di atas. Keputusan penuh — termasuk tarikh cabutan, nombor cabutan dan semua kategori hadiah — diterbitkan di laman rasmi sebaik sahaja cabutan selesai, biasanya bermula sekitar jam 7 malam pada hari cabutan.",
      "Cabutan 4D biasanya diadakan pada hari Rabu, Sabtu dan Ahad, dengan cabutan khas tambahan pada tarikh tertentu seperti hari kelepasan am. Setiap pengendali menjalankan cabutan secara berasingan dan menerbitkan keputusan rasmi mereka sendiri. Oleh itu, nombor menang berbeza antara Magnum, TOTO dan Da Ma Cai untuk tarikh yang sama.",
      "Kami sengaja tidak memaparkan nombor keputusan di halaman ini — hanya laman rasmi pengendali yang boleh dijadikan sumber sah untuk keputusan cabutan. Sentiasa sahkan nombor anda terus di laman rasmi yang dipautkan di atas sebelum membuat sebarang tuntutan hadiah. Berjudi membawa risiko kewangan dan boleh menyebabkan ketagihan.",
      "Di Malaysia, hanya individu berumur 21 tahun ke atas dibenarkan membeli tiket loteri berangka. Sekiranya anda memilih untuk bermain, lakukan secara bertanggungjawab, tetapkan had perbelanjaan, dan jangan sekali-kali bertaruh lebih daripada yang anda mampu untuk kehilangannya. Jika berjudi menjejaskan kehidupan anda, dapatkan bantuan daripada perkhidmatan sokongan yang berkaitan.",
    ],
  },
  en: {
    title: "Malaysia 4D Results Guide",
    paras: [
      "The four-digit number game (4D) is one of the most popular numbers-based lotteries in Malaysia. Players choose a four-digit number from 0000 to 9999 and place a bet hoping it matches the drawn numbers. This page lists the draw schedule for the three main licensed operators — Magnum 4D, Sports TOTO and Da Ma Cai — with direct links to each operator's official results.",
      "Each standard 4D draw produces several prize categories. There are three main prizes — First, Second and Third — followed by 10 Special prize numbers and 10 Consolation prize numbers. Your number counts as a win if it matches any number in these categories. The payout depends on the bet type (Big or Small) and the amount you stake.",
      "To check whether your number won, visit the operator's official site via the 'View Results' buttons above. Full results — including the draw date, draw number and all prize categories — are published on the official sites as soon as the draw completes, usually starting from around 7:00 PM on draw days.",
      "4D draws are usually held on Wednesday, Saturday and Sunday, with additional special draws on selected dates such as public holidays. Each operator runs its draws separately and publishes its own official results. As a result, the winning numbers differ between Magnum, TOTO and Da Ma Cai for the same date.",
      "We deliberately do not display result numbers on this page — only the operators' official sites are a valid source for draw results. Always verify your numbers directly on the official sites linked above before making any prize claim. Gambling carries financial risk and can be addictive.",
      "In Malaysia, only individuals aged 21 and above are permitted to buy numbers-based lottery tickets. If you choose to play, do so responsibly, set a spending limit, and never bet more than you can afford to lose. If gambling is affecting your life, seek help from the relevant support services.",
    ],
  },
};

export default function FourDArticle() {
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
