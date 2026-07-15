"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { FAQ } from "../_lib/faq";

const CONTENT = {
  bm: {
    title: "Panduan Kadar Tukaran Matawang Malaysia",
    paras: [
      "Kadar tukaran matawang ialah harga satu matawang berbanding matawang lain, dan ia penting bagi rakyat Malaysia yang sering berurusan dengan Ringgit (MYR), Dolar Amerika (USD), Dolar Singapura (SGD) dan Euro (EUR). Sama ada anda merancang percutian ke luar negara, membeli barangan dalam talian, menghantar wang kepada keluarga, atau hanya ingin tahu nilai Ringgit hari ini, halaman ini memaparkan kadar rujukan terkini bersama penukar matawang yang mudah digunakan.",
      "Untuk menggunakan penukar, pilih matawang asal dalam medan 'Dari' dan matawang sasaran dalam medan 'Kepada', kemudian masukkan jumlah yang anda mahu tukar. Keputusan dikira secara automatik. Di sebalik tabir, semua pengiraan menggunakan Ringgit Malaysia sebagai matawang pivot — jika anda menukar antara dua matawang asing, jumlah itu mula-mula ditukar kepada MYR, kemudian kepada matawang sasaran. Pendekatan ini memastikan keputusan konsisten dengan kad kadar yang dipaparkan di atas.",
      "Kad kadar di halaman ini menunjukkan berapa banyak Ringgit diperlukan untuk membeli satu unit setiap matawang asing (sebagai contoh, RM yang diperlukan untuk 1 USD). Matawang dengan nilai per unit yang tinggi seperti USD, EUR dan GBP dipaparkan dengan dua tempat perpuluhan, manakala matawang bernilai rendah per unit seperti Yen Jepun (JPY) dan Rupiah Indonesia (IDR) dipaparkan sebagai nombor bulat kerana anda menerima ribuan unit bagi jumlah Ringgit yang kecil.",
      "Penting untuk diingat bahawa kadar yang dipaparkan di sini ialah kadar pasaran tengah (mid-market) untuk rujukan sahaja. Bank, pengurup wang berlesen dan platform pemindahan wang biasanya menambah margin atau 'spread' pada kadar ini, dan kadang-kadang mengenakan yuran tambahan. Oleh itu, kadar belian dan jualan sebenar yang anda terima akan berbeza sedikit. Sentiasa bandingkan beberapa penyedia dan sahkan kadar urus niaga sebelum menukar wang dalam jumlah besar.",
      "Kadar matawang berubah-ubah sepanjang hari kerana ia dipengaruhi oleh faktor seperti dasar kadar faedah Bank Negara Malaysia dan bank pusat lain, harga komoditi, aliran dagangan, dan sentimen pelabur global. Pasaran matawang antarabangsa beroperasi 24 jam pada hari bekerja, jadi nilai Ringgit boleh naik atau turun pada bila-bila masa. Untuk perancangan harian seperti belanja perjalanan, halaman ini memberi anda gambaran pantas yang mencukupi.",
    ],
  },
  en: {
    title: "Malaysia Currency Exchange Rate Guide",
    paras: [
      "A currency exchange rate is the price of one currency in terms of another, and it matters to Malaysians who regularly deal with the Ringgit (MYR), the US Dollar (USD), the Singapore Dollar (SGD) and the Euro (EUR). Whether you are planning an overseas holiday, shopping online, sending money to family, or simply curious about the value of the Ringgit today, this page shows the latest reference rates alongside an easy-to-use currency converter.",
      "To use the converter, pick the source currency in the 'From' field and the target currency in the 'To' field, then enter the amount you want to convert. The result is calculated automatically. Behind the scenes, every calculation uses the Malaysian Ringgit as a pivot currency — if you convert between two foreign currencies, the amount is first converted to MYR and then to the target currency. This approach keeps results consistent with the rate cards shown above.",
      "The rate cards on this page show how many Ringgit are needed to buy one unit of each foreign currency (for example, the RM required for 1 USD). Currencies with a high per-unit value such as USD, EUR and GBP are shown to two decimal places, while low per-unit currencies such as the Japanese Yen (JPY) and Indonesian Rupiah (IDR) are displayed as whole numbers, since you receive thousands of units for a small Ringgit amount.",
      "It is important to remember that the rates shown here are mid-market reference rates, intended for reference only. Banks, licensed money changers and money-transfer platforms typically add a margin or 'spread' to this rate, and sometimes charge additional fees. As a result, the actual buy and sell rates you receive will differ slightly. Always compare several providers and confirm the transaction rate before exchanging large amounts of money.",
      "Currency rates move throughout the day because they are influenced by factors such as the interest-rate policy of Bank Negara Malaysia and other central banks, commodity prices, trade flows, and global investor sentiment. International currency markets run 24 hours on business days, so the value of the Ringgit can rise or fall at any time. For everyday planning such as travel budgeting, this page gives you a quick snapshot that is more than enough.",
    ],
  },
};

export default function ExchangeArticle() {
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
