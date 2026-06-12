"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { FAQ } from "../_lib/faq";

const CONTENT = {
  bm: {
    title: "Panduan Keputusan 4D Malaysia",
    paras: [
      "Permainan nombor empat digit (4D) adalah antara bentuk loteri berangka yang paling popular di Malaysia. Pemain memilih nombor empat digit dari 0000 hingga 9999 dan membuat pertaruhan dengan harapan ia sepadan dengan nombor yang dicabut. Halaman ini memaparkan keputusan terkini bagi tiga pengendali berlesen utama — Magnum 4D, Sports TOTO dan Da Ma Cai — bersama penyemak nombor untuk membantu anda menyemak sama ada nombor anda menang.",
      "Setiap cabutan 4D standard mengeluarkan beberapa kategori hadiah. Terdapat tiga hadiah utama iaitu Hadiah Pertama, Hadiah Kedua dan Hadiah Ketiga, diikuti oleh 10 nombor Hadiah Khas dan 10 nombor Saguhati. Nombor anda dikira menang jika ia sepadan dengan mana-mana nombor dalam kategori ini. Jumlah kemenangan bergantung pada jenis pertaruhan (Besar atau Kecil) dan amaun yang anda pertaruhkan.",
      "Untuk menggunakan halaman ini, pilih dahulu pengendali yang anda mahu dengan menekan tab di bahagian atas. Keputusan cabutan terkini untuk pengendali tersebut akan dipaparkan, termasuk tarikh dan nombor cabutan. Kemudian masukkan nombor empat digit anda dalam kotak penyemak. Alat ini akan membandingkan nombor anda dengan semua kategori hadiah dalam cabutan yang dipaparkan dan memberitahu sama ada ia menang.",
      "Cabutan 4D biasanya diadakan pada hari Rabu, Sabtu dan Ahad, dengan cabutan khas tambahan pada tarikh tertentu seperti hari kelepasan am. Setiap pengendali menjalankan cabutan secara berasingan dan menerbitkan keputusan rasmi mereka sendiri. Oleh itu, nombor menang berbeza antara Magnum, TOTO dan Da Ma Cai untuk tarikh yang sama.",
      "Penting untuk diingat bahawa keputusan yang dipaparkan di halaman ini adalah untuk tujuan demonstrasi dan rujukan sahaja. Untuk keputusan rasmi yang sah, sila sentiasa rujuk laman web rasmi setiap pengendali yang dipautkan di atas. Berjudi membawa risiko kewangan dan boleh menyebabkan ketagihan.",
      "Di Malaysia, hanya individu berumur 21 tahun ke atas dibenarkan membeli tiket loteri berangka. Sekiranya anda memilih untuk bermain, lakukan secara bertanggungjawab, tetapkan had perbelanjaan, dan jangan sekali-kali bertaruh lebih daripada yang anda mampu untuk kehilangannya. Jika berjudi menjejaskan kehidupan anda, dapatkan bantuan daripada perkhidmatan sokongan yang berkaitan.",
    ],
  },
  en: {
    title: "Malaysia 4D Results Guide",
    paras: [
      "The four-digit number game (4D) is one of the most popular numbers-based lotteries in Malaysia. Players choose a four-digit number from 0000 to 9999 and place a bet hoping it matches the drawn numbers. This page shows the latest results for the three main licensed operators — Magnum 4D, Sports TOTO and Da Ma Cai — along with a number checker to help you see whether your number wins.",
      "Each standard 4D draw produces several prize categories. There are three main prizes — First, Second and Third — followed by 10 Special prize numbers and 10 Consolation prize numbers. Your number counts as a win if it matches any number in these categories. The payout depends on the bet type (Big or Small) and the amount you stake.",
      "To use this page, first select the operator you want by tapping the tab at the top. The latest draw results for that operator are displayed, including the date and draw number. Then enter your four-digit number in the checker box. The tool compares your number against all prize categories in the displayed draw and tells you whether it won.",
      "4D draws are usually held on Wednesday, Saturday and Sunday, with additional special draws on selected dates such as public holidays. Each operator runs its draws separately and publishes its own official results. As a result, the winning numbers differ between Magnum, TOTO and Da Ma Cai for the same date.",
      "It is important to remember that the results shown on this page are for demonstration and reference purposes only. For valid official results, please always refer to each operator's official website linked above. Gambling carries financial risk and can be addictive.",
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
          <p key={i} className="text-sm text-white/65 leading-relaxed">{p}</p>
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
