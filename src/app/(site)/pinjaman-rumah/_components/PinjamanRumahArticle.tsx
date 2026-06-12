"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { FAQ } from "../_lib/faq";

const CONTENT = {
  bm: {
    title: "Panduan Kalkulator Pinjaman Rumah Malaysia",
    paras: [
      "Membeli rumah ialah salah satu komitmen kewangan terbesar dalam hidup, dan memahami kos sebenar sebelum menandatangani sebarang perjanjian amat penting. Kalkulator pinjaman rumah ini membantu anda menganggar ansuran bulanan, jumlah faedah sepanjang tempoh pinjaman, serta kos pendahuluan seperti bayaran muka, duti setem dan yuran guaman — semuanya dalam satu paparan ringkas yang mudah difahami.",
      "Cara menggunakannya mudah. Masukkan harga hartanah, pilih peratus bayaran pendahuluan (10%, 20% atau 30%), tetapkan kadar faedah tahunan yang ditawarkan oleh bank anda, dan pilih tempoh pinjaman antara 10 hingga 35 tahun. Apabila anda menekan butang kira, kalkulator akan memaparkan ansuran bulanan, jumlah pinjaman selepas bayaran pendahuluan, jumlah bayaran keseluruhan, dan jumlah faedah yang akan anda bayar sepanjang tempoh.",
      "Ansuran bulanan dikira menggunakan formula amortisasi pinjaman standard. Kadar faedah tahunan dibahagikan kepada kadar bulanan, dan bayaran disebarkan sama rata sepanjang bilangan bulan dalam tempoh pinjaman. Pada peringkat awal, sebahagian besar ansuran anda pergi kepada faedah, manakala lebih banyak pokok dibayar pada tahun-tahun kemudian. Inilah sebabnya tempoh pinjaman yang lebih panjang menurunkan ansuran bulanan tetapi meningkatkan jumlah faedah keseluruhan.",
      "Di Malaysia, pembelian hartanah turut melibatkan kos pendahuluan selain bayaran muka. Duti setem untuk Memorandum Pindah Milik (MOT) dikira secara berperingkat: 1% untuk RM100,000 pertama, 2% untuk bahagian sehingga RM500,000, 3% sehingga RM1,000,000, dan 4% untuk baki selebihnya. Yuran guaman pula bergantung kepada jumlah pinjaman dan skala yang ditetapkan. Kalkulator ini menjumlahkan semua kos ini supaya anda tahu berapa banyak tunai yang perlu disediakan sebelum memiliki kunci rumah.",
      "Bayaran pendahuluan yang lebih tinggi mengurangkan jumlah pinjaman, justeru menurunkan ansuran bulanan dan jumlah faedah yang dibayar. Sebaliknya, bayaran muka yang lebih rendah memerlukan tunai pendahuluan yang lebih sedikit tetapi meningkatkan beban bulanan. Gunakan kalkulator ini untuk mencuba pelbagai kombinasi dan cari keseimbangan yang sesuai dengan kemampuan kewangan anda.",
      "Ingat bahawa keputusan kalkulator ini adalah anggaran untuk tujuan perancangan sahaja. Kadar faedah sebenar bergantung kepada tawaran bank dan profil kredit anda, manakala duti setem serta yuran guaman boleh berubah mengikut peraturan semasa dan sebarang pengecualian yang berkenaan, seperti pelepasan untuk pembeli rumah pertama. Sentiasa sahkan angka dengan bank dan peguam anda sebelum membuat keputusan muktamad.",
    ],
  },
  en: {
    title: "Malaysia Housing Loan Calculator Guide",
    paras: [
      "Buying a home is one of the biggest financial commitments in life, and understanding the true cost before signing any agreement is essential. This housing loan calculator helps you estimate your monthly installment, the total interest over the loan tenure, and the upfront costs such as the down payment, stamp duty and legal fees — all in one simple, easy-to-read view.",
      "Using it is straightforward. Enter the property price, choose your down payment percentage (10%, 20% or 30%), set the annual interest rate offered by your bank, and pick a loan tenure between 10 and 35 years. When you press calculate, the tool displays your monthly installment, the loan amount after the down payment, the total payment over the term, and the total interest you will pay.",
      "The monthly installment is calculated using the standard loan amortisation formula. The annual interest rate is divided into a monthly rate, and payments are spread evenly across the number of months in the tenure. In the early years, a larger share of each installment goes toward interest, while more principal is repaid in later years. This is why a longer tenure lowers your monthly installment but increases the total interest you pay.",
      "In Malaysia, a property purchase also involves upfront costs besides the down payment. Stamp duty for the Memorandum of Transfer (MOT) is calculated in tiers: 1% on the first RM100,000, 2% up to RM500,000, 3% up to RM1,000,000, and 4% on the remaining balance. Legal fees depend on the loan amount and the prescribed scale. This calculator totals these costs so you know how much cash to prepare before you get the keys to your home.",
      "A higher down payment reduces the loan amount, which lowers both the monthly installment and the total interest paid. Conversely, a lower down payment requires less upfront cash but increases your monthly burden. Use this calculator to try different combinations and find the balance that suits your financial situation.",
      "Remember that the results from this calculator are estimates for planning purposes only. The actual interest rate depends on the bank's offer and your credit profile, while stamp duty and legal fees can change with current regulations and any applicable exemptions, such as relief for first-time home buyers. Always confirm the figures with your bank and lawyer before making a final decision.",
    ],
  },
};

export default function PinjamanRumahArticle() {
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
