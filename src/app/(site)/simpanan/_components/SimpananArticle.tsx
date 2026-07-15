"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { FAQ } from "../_lib/faq";

const CONTENT = {
  bm: {
    title: "Panduan Kalkulator Simpanan Malaysia",
    paras: [
      "Kalkulator Simpanan ini membantu rakyat Malaysia merancang masa depan kewangan dengan mudah. Sama ada anda menyimpan untuk pendahuluan rumah, pendidikan anak, persaraan, atau sekadar tabung kecemasan, alat ini menunjukkan dengan jelas bagaimana wang anda boleh berkembang dari masa ke masa apabila disimpan secara konsisten dan dilaburkan pada kadar pulangan tertentu.",
      "Untuk menggunakannya, pilih dahulu mod yang sesuai. Mod 'Berapa akan dapat' sesuai jika anda sudah tahu berapa anda mampu simpan setiap bulan dan ingin lihat jumlah akhirnya. Mod 'Berapa perlu simpan' pula bekerja secara terbalik — masukkan sasaran jumlah yang anda impikan, dan kalkulator akan kira berapa anda perlu simpan sebulan untuk mencapainya dalam tempoh yang ditetapkan. Selepas itu, laraskan simpanan bulanan, simpanan awal, kadar pulangan, dan tempoh tahun mengikut keadaan anda.",
      "Di sebalik tabir, kalkulator menggunakan formula faedah kompaun bulanan. Kadar tahunan yang anda pilih dibahagikan kepada 12 untuk mendapatkan kadar bulanan, dan setiap caruman dianggap dikompaun setiap bulan sepanjang tempoh. Simpanan awal juga dikompaun dengan cara yang sama. Inilah sebabnya keuntungan biasanya kecil pada tahun-tahun awal tetapi membesar dengan pantas pada tahun-tahun kemudian — kerana keuntungan turut menjana keuntungan, satu konsep yang sering dipanggil 'kuasa kompaun'.",
      "Butang preset kadar memudahkan anda menganggar pulangan untuk instrumen popular di Malaysia. Simpanan Tetap (FD) biasanya menawarkan pulangan yang lebih rendah tetapi paling selamat. Amanah Saham Bumiputera (ASB) dan Tabung Haji secara sejarah memberi dividen sederhana, manakala KWSP (EPF) mengisytiharkan dividen tahunan untuk simpanan persaraan. Kadar dalam preset hanyalah anggaran umum; pulangan sebenar berubah setiap tahun dan tidak dijamin, jadi anda digalakkan melaraskan kadar mengikut jangkaan realistik anda sendiri.",
      "Penting untuk diingat bahawa kalkulator ini memaparkan nilai nominal — ia tidak mengambil kira inflasi atau cukai. Dengan inflasi, kuasa beli RM100,000 dalam 20 tahun akan lebih rendah daripada hari ini. Oleh itu, gunakan keputusan sebagai panduan perancangan dan bukan jaminan. Walaupun begitu, mesej utamanya tetap berkuasa: semakin awal dan semakin konsisten anda menyimpan, semakin besar manfaat yang anda peroleh daripada faedah kompaun.",
      "Gunakan carta tahun demi tahun dan jadual pecahan untuk melihat dengan jelas berapa banyak datang daripada caruman anda sendiri berbanding keuntungan pelaburan. Visualisasi ini sering menjadi pendorong yang baik untuk mula menyimpan hari ini, walaupun dengan jumlah kecil, kerana setiap ringgit yang disimpan lebih awal mempunyai lebih banyak masa untuk berkembang.",
    ],
  },
  en: {
    title: "Malaysia Savings Calculator Guide",
    paras: [
      "This Savings Calculator helps Malaysians plan their financial future with ease. Whether you are saving for a house deposit, your children's education, retirement, or simply an emergency fund, this tool clearly shows how your money can grow over time when saved consistently and invested at a given rate of return.",
      "To use it, first choose the right mode. The 'How much will I have' mode suits you if you already know how much you can save each month and want to see the final amount. The 'How much to save' mode works in reverse — enter the target amount you are dreaming of, and the calculator works out how much you need to save monthly to reach it within the set period. After that, adjust the monthly savings, initial savings, return rate, and number of years to match your situation.",
      "Behind the scenes, the calculator uses a monthly compound interest formula. The annual rate you choose is divided by 12 to get a monthly rate, and each contribution is assumed to compound every month over the whole period. Initial savings compound the same way. This is why returns are usually small in the early years but grow rapidly in later years — because returns also generate returns, a concept often called the 'power of compounding'.",
      "The rate preset buttons make it easy to estimate returns for popular Malaysian instruments. Fixed Deposit (FD) typically offers lower but very safe returns. Amanah Saham Bumiputera (ASB) and Tabung Haji have historically paid moderate dividends, while EPF (KWSP) declares an annual dividend for retirement savings. The preset rates are general estimates only; actual returns change every year and are not guaranteed, so you are encouraged to adjust the rate to your own realistic expectations.",
      "It is important to remember that this calculator shows nominal values — it does not account for inflation or tax. With inflation, the purchasing power of RM100,000 in 20 years will be lower than today. So use the results as a planning guide rather than a guarantee. Even so, the core message remains powerful: the earlier and more consistently you save, the greater the benefit you reap from compound interest.",
      "Use the year-by-year chart and the breakdown table to clearly see how much comes from your own contributions versus investment returns. This visualisation is often a great motivator to start saving today, even with a small amount, because every ringgit saved earlier has more time to grow.",
    ],
  },
};

export default function SimpananArticle() {
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
