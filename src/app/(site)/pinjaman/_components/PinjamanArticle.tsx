"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { FAQ } from "../_lib/faq";

const CONTENT = {
  bm: {
    title: "Panduan Kalkulator Pinjaman Malaysia",
    paras: [
      "Kalkulator Pinjaman Malaysia ini membantu anda menganggar ansuran bulanan bagi pinjaman rumah, kereta dan peribadi dalam beberapa saat sahaja. Sebelum menandatangani sebarang perjanjian pinjaman, penting untuk memahami berapa banyak yang perlu anda bayar setiap bulan, berapa jumlah faedah keseluruhan, dan bagaimana tempoh serta kadar faedah mempengaruhi kos sebenar pinjaman anda. Alat ini memberi gambaran pantas supaya anda boleh merancang bajet dengan lebih yakin.",
      "Cara menggunakannya mudah. Mula-mula, pilih jenis pinjaman — Rumah, Kereta atau Peribadi. Setiap jenis sudah dilengkapi nilai lalai dan julat kadar faedah yang munasabah untuk pasaran Malaysia. Kemudian, pilih jumlah pinjaman daripada pratetap yang disediakan atau masukkan jumlah anda sendiri dalam ruangan khas. Laraskan kadar faedah menggunakan slider, dan pilih tempoh pinjaman dalam tahun. Keputusan ansuran bulanan dikemas kini secara automatik setiap kali anda menukar mana-mana nilai.",
      "Dari segi pengiraan, kalkulator ini menggunakan dua kaedah berbeza. Pinjaman rumah dan pinjaman peribadi dikira menggunakan kaedah baki berkurangan (reducing balance), iaitu formula amortisasi piawai di mana faedah dikira ke atas baki prinsipal yang masih tertunggak. Pinjaman kereta pula dikira menggunakan kaedah kadar rata (flat rate), kerana pinjaman kereta di Malaysia kebiasaannya berbentuk sewa beli (hire purchase). Perbezaan ini penting: pada peratus yang sama, kadar rata menghasilkan jumlah faedah yang jauh lebih tinggi berbanding baki berkurangan.",
      "Di Malaysia, pinjaman perumahan biasanya menawarkan tempoh sehingga 30 atau 35 tahun, manakala pinjaman kereta lazimnya antara 5 hingga 9 tahun, dan pinjaman peribadi pula lebih pendek. Tempoh yang lebih panjang merendahkan ansuran bulanan tetapi meningkatkan jumlah faedah yang anda bayar sepanjang hayat pinjaman. Kalkulator ini turut memaparkan nisbah faedah dan bar visual yang menunjukkan bahagian prinsipal berbanding bahagian faedah, supaya anda dapat melihat dengan jelas berapa banyak kos sebenar pinjaman tersebut.",
      "Perlu diingat bahawa semua nilai yang dipaparkan hanyalah anggaran. Kadar faedah sebenar, yuran pemprosesan, insurans, dan terma pinjaman bergantung pada bank, jenis produk, profil kredit anda dan keadaan pasaran semasa. Gunakan keputusan kalkulator ini sebagai titik permulaan untuk membandingkan pilihan pinjaman, kemudian sahkan angka tepat dengan bank atau institusi kewangan anda sebelum membuat keputusan.",
    ],
  },
  en: {
    title: "Malaysia Loan Calculator Guide",
    paras: [
      "This Malaysia Loan Calculator helps you estimate the monthly installment for home, car and personal loans in just a few seconds. Before signing any loan agreement, it is important to understand how much you need to pay each month, how much total interest you will pay, and how the tenure and interest rate affect the true cost of your loan. This tool gives you a quick picture so you can plan your budget with more confidence.",
      "Using it is simple. First, choose the loan type — Home, Car or Personal. Each type comes preloaded with sensible default values and an interest rate range suited to the Malaysian market. Then select a loan amount from the presets provided or enter your own amount in the custom field. Adjust the interest rate using the slider, and pick a loan tenure in years. The monthly installment result updates automatically every time you change any value.",
      "In terms of calculation, this tool uses two different methods. Home loans and personal loans are computed using the reducing balance method, which is the standard amortisation formula where interest is charged on the outstanding principal. Car loans are computed using the flat rate method, because car loans in Malaysia are typically structured as hire purchase. This distinction matters: at the same percentage, a flat rate produces much higher total interest than a reducing balance rate.",
      "In Malaysia, home loans usually offer tenures of up to 30 or 35 years, while car loans are commonly between 5 and 9 years, and personal loans tend to be shorter. A longer tenure lowers the monthly installment but increases the total interest you pay over the life of the loan. This calculator also shows an interest ratio and a visual bar that displays the principal portion versus the interest portion, so you can clearly see how much the loan really costs.",
      "Keep in mind that all the figures shown are estimates only. The actual interest rate, processing fees, insurance, and loan terms depend on the bank, the product type, your credit profile and current market conditions. Use the calculator results as a starting point to compare loan options, then confirm the exact numbers with your bank or financial institution before making a decision.",
    ],
  },
};

export default function PinjamanArticle() {
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
