"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { DISKAUN_FAQ } from "../_lib/faq";

const CONTENT = {
  bm: {
    title: "Panduan Kalkulator Diskaun & SST",
    paras: [
      "Kalkulator Diskaun & SST ini ialah alat mudah dan percuma yang membantu rakyat Malaysia mengira harga sebenar selepas potongan diskaun, cukai SST, serta pembelian dalam kuantiti. Sama ada anda sedang membeli-belah semasa jualan mega seperti 11.11, Hari Raya, atau Black Friday, alat ini memberi anda jawapan pantas tentang berapa sebenarnya yang anda akan bayar dan berapa banyak yang anda jimat.",
      "Cara menggunakannya sangat mudah. Pilih salah satu daripada tiga mod di bahagian atas: 'Diskaun Biasa' untuk mengira harga selepas satu diskaun, 'Cari Harga Asal' untuk mengira semula harga asal daripada harga jualan, dan 'Diskaun Berganda' untuk gabungan dua peratus diskaun. Masukkan harga, pilih peratus diskaun (atau tekan butang pratetap seperti 10%, 20%, 50%), dan keputusan akan dipaparkan secara automatik di kad berwarna di bawah.",
      "Pengiraan diskaun biasa adalah mudah: harga asal didarab dengan peratus diskaun untuk mendapatkan jumlah potongan, kemudian ditolak daripada harga asal. Jika anda menanda kotak 'Tambah SST 6%', kalkulator akan menambah cukai perkhidmatan 6% ke atas harga selepas diskaun — mengikut amalan biasa di mana cukai dikenakan selepas potongan diberi. Anda juga boleh memilih kuantiti untuk melihat jumlah keseluruhan bagi beberapa unit.",
      "Salah satu kesilapan paling biasa pengguna ialah menganggap diskaun berganda boleh dijumlahkan. Diskaun '20% + 10%' BUKAN bersamaan dengan 30%. Sebaliknya, 20% ditolak dahulu, kemudian 10% ditolak daripada baki tersebut. Untuk barang berharga RM100, ini menghasilkan harga akhir RM72 — iaitu diskaun efektif 28% sahaja, bukan 30%. Mod 'Diskaun Berganda' menunjukkan diskaun efektif sebenar supaya anda tidak tertipu dengan tawaran yang kelihatan lebih menarik daripada sebenarnya.",
      "Mod 'Cari Harga Asal' pula berguna untuk menyemak sama ada sesuatu tawaran itu benar. Jika peniaga mengatakan barang itu 'diskaun 20%' dan kini dijual RM80, anda boleh mengesahkan harga asalnya sepatutnya RM100. Ini membantu anda mengelak daripada tertipu dengan harga 'asal' yang dinaikkan secara palsu sebelum diskaun dikenakan — satu taktik yang kadangkala digunakan semasa jualan.",
      "Perlu diingat bahawa kadar SST dan peraturan cukai di Malaysia boleh berubah dari semasa ke semasa, dan tidak semua barang atau perkhidmatan dikenakan kadar yang sama. Kalkulator ini menggunakan kadar 6% yang lazim sebagai rujukan umum. Untuk jumlah rasmi, sentiasa rujuk resit atau peniaga. Walau bagaimanapun, untuk anggaran pantas semasa membeli-belah dan merancang bajet, alat ini memberikan jawapan yang tepat dan boleh dipercayai.",
    ],
  },
  en: {
    title: "Discount & SST Calculator Guide",
    paras: [
      "This Discount & SST Calculator is a simple, free tool that helps Malaysians work out the real price after discounts, SST tax, and bulk-quantity purchases. Whether you are shopping during mega sales like 11.11, Hari Raya, or Black Friday, this tool gives you a fast answer on exactly how much you will pay and how much you will save.",
      "Using it is straightforward. Pick one of three modes at the top: 'Normal Discount' to calculate the price after a single discount, 'Find Original Price' to work backward from a sale price, and 'Stacked Discount' for combining two discount percentages. Enter the price, choose a discount percentage (or tap a preset such as 10%, 20%, or 50%), and the result appears automatically in the coloured card below.",
      "The normal discount calculation is simple: the original price is multiplied by the discount percentage to get the discount amount, which is then subtracted from the original price. If you tick the 'Add SST 6%' box, the calculator adds a 6% service tax on top of the discounted price — following the common practice where tax is applied after the discount is given. You can also choose a quantity to see the grand total for several units.",
      "One of the most common mistakes shoppers make is assuming that stacked discounts can be added together. A '20% + 10%' discount is NOT the same as 30% off. Instead, 20% is subtracted first, then 10% is taken off the remainder. For a RM100 item, this gives a final price of RM72 — an effective discount of only 28%, not 30%. The 'Stacked Discount' mode shows the true effective discount so you are not misled by deals that look better than they really are.",
      "The 'Find Original Price' mode is useful for checking whether a deal is genuine. If a merchant claims an item is '20% off' and now sells for RM80, you can confirm the original price should have been RM100. This helps you avoid being fooled by a falsely inflated 'original' price marked up just before a discount is applied — a tactic sometimes used during sales.",
      "Keep in mind that SST rates and tax rules in Malaysia can change over time, and not all goods or services are taxed at the same rate. This calculator uses the common 6% rate as a general reference. For official totals, always refer to your receipt or the merchant. That said, for quick estimates while shopping and planning your budget, this tool gives accurate and reliable answers.",
    ],
  },
};

export default function DiskaunArticle() {
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
          {DISKAUN_FAQ.map((f) => (
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
