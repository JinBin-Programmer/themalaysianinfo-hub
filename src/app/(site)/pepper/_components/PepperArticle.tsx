"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { PEPPER_FAQ } from "../_lib/faq";

const CONTENT = {
  bm: {
    title: "Panduan Harga Lada Malaysia",
    paras: [
      "Lada ialah salah satu komoditi pertanian paling penting di Malaysia, dengan Sarawak sebagai negeri penghasil utama. Halaman ini memaparkan harga rujukan terkini untuk Lada Hitam Sarawak (BPS) dan Lada Putih Sarawak (WPS) dalam Ringgit Malaysia bagi setiap tan dan setiap kilogram, berdasarkan harga yang diterbitkan oleh Lembaga Lada Malaysia (Malaysia Pepper Board, MPB).",
      "Lada hitam dan lada putih sebenarnya berasal dari beri pokok lada yang sama. Lada hitam dihasilkan dengan mengeringkan beri yang belum matang sepenuhnya bersama kulit luarnya, menghasilkan rasa yang lebih tajam dan pedas. Lada putih pula diperoleh dengan merendam beri yang lebih matang, membuang kulit luar, dan mengeringkan biji di dalamnya — menghasilkan rasa yang lebih ringan dan halus yang sesuai untuk masakan berwarna cerah seperti sup dan sos krim.",
      "Untuk menggunakan halaman ini, lihat kad harga di bahagian atas untuk harga semasa BPS dan WPS. Petunjuk perubahan menunjukkan sama ada harga naik atau turun berbanding bacaan terakhir. Carta sejarah memaparkan trend harga mingguan, manakala kalkulator harga membenarkan anda memasukkan kuantiti dalam kilogram untuk menganggar kos pembelian. Jadual harga pula memecahkan kos kepada 100g, 500g, 1kg dan 10kg pada kadar rujukan hari ini.",
      "Harga lada dipengaruhi oleh banyak faktor termasuk permintaan global, cuaca dan hasil tuaian, kos pengeluaran, kadar pertukaran mata wang, serta persaingan daripada negara pengeluar lain seperti Vietnam, India dan Indonesia. Oleh kerana lada Malaysia banyak dieksport, harga tempatan sering bergerak seiring dengan pasaran antarabangsa.",
      "Penting untuk diingat bahawa harga yang dipaparkan di sini adalah harga rujukan indikatif untuk panduan perdagangan sahaja. Harga sebenar yang ditawarkan oleh peniaga, pemborong atau pengilang mungkin berbeza bergantung kepada gred, kuantiti pembelian, lokasi dan keadaan pasaran semasa. Petani dan peniaga digalakkan menyemak harga dari beberapa sumber sebelum membuat keputusan jual beli.",
      "Bagi peladang lada di Sarawak, memahami trend harga membantu dalam merancang masa menuai dan menjual hasil. Bagi pengguna dan peniaga runcit, maklumat ini berguna untuk membandingkan kos dan menetapkan bajet. Lawati halaman ini secara berkala untuk mengikuti pergerakan harga lada Malaysia.",
    ],
  },
  en: {
    title: "Malaysia Pepper Price Guide",
    paras: [
      "Pepper is one of Malaysia's most important agricultural commodities, with Sarawak serving as the main producing state. This page shows the latest reference prices for Black Pepper Sarawak (BPS) and White Pepper Sarawak (WPS) in Malaysian Ringgit per tonne and per kilogram, based on prices published by the Malaysia Pepper Board (MPB).",
      "Black pepper and white pepper actually come from the berries of the same pepper plant. Black pepper is made by drying not-yet-fully-ripe berries along with their outer skin, producing a sharper, more pungent flavour. White pepper is obtained by soaking riper berries, removing the outer skin, and drying the inner seed — giving a milder, more refined taste that suits light-coloured dishes such as soups and cream sauces.",
      "To use this page, look at the price cards near the top for the current BPS and WPS prices. The change indicator shows whether the price has risen or fallen since the last reading. The history chart displays the weekly price trend, while the price calculator lets you enter a quantity in kilograms to estimate purchase cost. The pricing table breaks the cost down into 100g, 500g, 1kg and 10kg at today's reference rate.",
      "Pepper prices are influenced by many factors including global demand, weather and harvest yields, production costs, currency exchange rates, and competition from other producing countries such as Vietnam, India and Indonesia. Because Malaysian pepper is heavily exported, local prices often move in step with the international market.",
      "It is important to remember that the prices shown here are indicative reference prices for trade guidance only. The actual prices offered by dealers, wholesalers or millers may differ depending on grade, purchase quantity, location and current market conditions. Farmers and traders are encouraged to check prices from several sources before making buying or selling decisions.",
      "For pepper farmers in Sarawak, understanding price trends helps in planning when to harvest and sell their crop. For consumers and retail traders, this information is useful for comparing costs and setting budgets. Visit this page regularly to follow the movement of Malaysian pepper prices.",
    ],
  },
};

export default function PepperArticle() {
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
          {PEPPER_FAQ.map((f) => (
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
