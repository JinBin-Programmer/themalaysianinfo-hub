export interface FaqItem {
  q: string;
  qEn: string;
  a: string;
  aEn: string;
}

export const FAQ: FaqItem[] = [
  {
    q: "Apakah faedah kompaun dan bagaimana kalkulator ini mengiranya?",
    qEn: "What is compound interest and how does this calculator work it out?",
    a: "Faedah kompaun bermaksud pulangan anda turut memperoleh pulangan dari masa ke masa. Kalkulator ini menganggap caruman bulanan dikompaun setiap bulan pada kadar tahunan yang anda pilih (kadar tahunan dibahagi 12). Jumlah akhir merangkumi simpanan awal anda, semua caruman bulanan, dan keuntungan terkumpul.",
    aEn: "Compound interest means your returns also earn returns over time. This calculator assumes monthly contributions are compounded monthly at the annual rate you choose (annual rate divided by 12). The final amount includes your initial savings, all monthly contributions, and accumulated returns.",
  },
  {
    q: "Apakah maksud preset FD, ASB, TH dan EPF?",
    qEn: "What do the FD, ASB, TH and EPF presets mean?",
    a: "Butang preset hanya mengisi kadar pulangan anggaran untuk instrumen biasa di Malaysia: Simpanan Tetap (FD), Amanah Saham Bumiputera (ASB), Tabung Haji (TH) dan KWSP/EPF. Kadar ini adalah anggaran umum sahaja — pulangan sebenar berbeza setiap tahun dan anda boleh laraskan kadar secara manual.",
    aEn: "The preset buttons simply fill in an estimated return rate for common Malaysian instruments: Fixed Deposit (FD), Amanah Saham Bumiputera (ASB), Tabung Haji (TH) and EPF/KWSP. These rates are general estimates only — actual returns vary each year and you can adjust the rate manually.",
  },
  {
    q: "Apakah perbezaan antara mod 'Berapa akan dapat' dan 'Berapa perlu simpan'?",
    qEn: "What is the difference between the 'How much will I have' and 'How much to save' modes?",
    a: "Mod pertama mengira jumlah akhir berdasarkan simpanan bulanan, simpanan awal, kadar dan tempoh yang anda masukkan. Mod kedua bekerja secara terbalik: anda masukkan sasaran jumlah dan tempoh, dan ia mengira berapa anda perlu simpan sebulan untuk mencapainya.",
    aEn: "The first mode calculates a final amount based on the monthly savings, initial savings, rate and period you enter. The second mode works in reverse: you enter a target amount and period, and it calculates how much you need to save each month to reach it.",
  },
  {
    q: "Adakah keputusan ini menjamin pulangan sebenar saya?",
    qEn: "Does this result guarantee my actual returns?",
    a: "Tidak. Kalkulator menggunakan kadar tetap yang anda pilih untuk seluruh tempoh, sedangkan pulangan sebenar seperti dividen ASB, EPF atau Tabung Haji berubah setiap tahun dan tidak dijamin. Anggap keputusan ini sebagai panduan perancangan, bukan janji pulangan.",
    aEn: "No. The calculator uses the fixed rate you select for the whole period, whereas actual returns such as ASB, EPF or Tabung Haji dividends change each year and are not guaranteed. Treat the result as a planning guide, not a promise of returns.",
  },
  {
    q: "Adakah kalkulator ini mengambil kira inflasi atau cukai?",
    qEn: "Does this calculator account for inflation or tax?",
    a: "Tidak. Angka yang dipaparkan adalah nilai nominal sebelum inflasi dan tanpa potongan cukai. Kuasa beli sebenar wang anda pada masa hadapan mungkin lebih rendah kerana inflasi, jadi pertimbangkan faktor ini semasa merancang sasaran kewangan jangka panjang.",
    aEn: "No. The figures shown are nominal values before inflation and without tax deductions. The real purchasing power of your money in the future may be lower due to inflation, so factor this in when planning long-term financial goals.",
  },
  {
    q: "Mengapa mula menyimpan awal memberi kesan begitu besar?",
    qEn: "Why does starting to save early make such a big difference?",
    a: "Kerana faedah kompaun, wang yang disimpan lebih awal mempunyai lebih banyak masa untuk berkembang, dan keuntungannya turut menjana keuntungan. Carta tahun demi tahun di atas menunjukkan bahawa bahagian keuntungan biasanya membesar dengan ketara dalam tahun-tahun kemudian berbanding caruman.",
    aEn: "Because of compounding, money saved earlier has more time to grow, and its returns also generate further returns. The year-by-year chart above shows that the returns portion typically grows significantly in later years relative to contributions.",
  },
];
