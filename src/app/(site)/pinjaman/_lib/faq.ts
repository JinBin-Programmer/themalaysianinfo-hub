export interface FaqItem {
  q: string;
  qEn: string;
  a: string;
  aEn: string;
}

export const FAQ: FaqItem[] = [
  {
    q: "Apakah perbezaan antara baki berkurangan dan kadar rata (flat rate)?",
    qEn: "What is the difference between reducing balance and flat rate?",
    a: "Pinjaman baki berkurangan mengira faedah berdasarkan baki pinjaman yang masih belum dibayar, jadi faedah berkurangan dari masa ke masa — ini digunakan untuk pinjaman perumahan dan kebanyakan pinjaman peribadi. Kadar rata pula mengira faedah ke atas jumlah prinsipal asal untuk keseluruhan tempoh, jadi kadar rata 3% sebenarnya jauh lebih mahal daripada kadar baki berkurangan 3%. Pinjaman kereta (sewa beli) di Malaysia lazimnya menggunakan kadar rata.",
    aEn: "A reducing balance loan charges interest on the outstanding balance, so interest falls over time — this is used for home loans and most personal loans. Flat rate charges interest on the original principal for the whole tenure, so a 3% flat rate is actually far more expensive than a 3% reducing rate. Car loans (hire purchase) in Malaysia typically use flat rate.",
  },
  {
    q: "Bagaimana ansuran bulanan pinjaman dikira?",
    qEn: "How is the monthly loan installment calculated?",
    a: "Untuk pinjaman baki berkurangan, ansuran bulanan dikira menggunakan formula amortisasi standard yang mengambil kira prinsipal, kadar faedah bulanan dan bilangan bulan tempoh. Untuk kadar rata, jumlah faedah ditambah kepada prinsipal dahulu, kemudian dibahagi dengan jumlah bulan. Kalkulator ini menggunakan formula yang sama supaya anda dapat anggaran pantas sebelum berunding dengan bank.",
    aEn: "For reducing balance loans, the monthly installment uses the standard amortisation formula that factors in the principal, the monthly interest rate and the number of months. For flat rate, the total interest is added to the principal first, then divided by the total months. This calculator uses the same formulas so you get a quick estimate before discussing with your bank.",
  },
  {
    q: "Adakah kadar faedah dalam kalkulator ini kadar sebenar bank?",
    qEn: "Are the interest rates in this calculator real bank rates?",
    a: "Tidak. Kadar yang dipaparkan adalah anggaran julat umum bagi pinjaman rumah, kereta dan peribadi di Malaysia, dan anda boleh laraskan menggunakan slider. Kadar sebenar bergantung pada bank, profil kredit anda, jenis produk dan keadaan pasaran. Sentiasa sahkan kadar dan terma sebenar dengan bank atau institusi kewangan anda.",
    aEn: "No. The rates shown are general estimated ranges for home, car and personal loans in Malaysia, and you can adjust them with the slider. Actual rates depend on the bank, your credit profile, the product type and market conditions. Always verify the actual rate and terms with your bank or financial institution.",
  },
  {
    q: "Apakah tempoh maksimum pinjaman perumahan di Malaysia?",
    qEn: "What is the maximum home loan tenure in Malaysia?",
    a: "Pinjaman perumahan di Malaysia lazimnya boleh sehingga 30 hingga 35 tahun, tertakluk kepada had umur peminjam pada akhir tempoh (selalunya sekitar 70 tahun atau umur persaraan). Tempoh yang lebih panjang merendahkan ansuran bulanan tetapi meningkatkan jumlah faedah keseluruhan. Gunakan kalkulator ini untuk membandingkan kesan tempoh berbeza.",
    aEn: "Home loans in Malaysia can typically run up to 30 to 35 years, subject to the borrower's age limit at the end of the tenure (often around 70 years or retirement age). A longer tenure lowers the monthly installment but increases the total interest paid. Use this calculator to compare the effect of different tenures.",
  },
  {
    q: "Mengapa pinjaman kereta menggunakan kadar rata yang kelihatan rendah?",
    qEn: "Why do car loans use a flat rate that looks low?",
    a: "Pinjaman kereta di Malaysia menggunakan struktur sewa beli dengan kadar rata, biasanya sekitar 2% hingga 4% setahun. Walaupun nombor ini kelihatan rendah, kadar rata dikenakan ke atas jumlah pinjaman penuh sepanjang tempoh, jadi kadar efektif (APR) sebenarnya hampir dua kali ganda kadar rata. Kalkulator ini menggunakan formula kadar rata untuk pinjaman kereta supaya anggaran lebih tepat.",
    aEn: "Car loans in Malaysia use a hire purchase structure with a flat rate, usually around 2% to 4% per year. Although these numbers look low, the flat rate is charged on the full loan amount for the entire tenure, so the effective rate (APR) is roughly double the flat rate. This calculator applies the flat rate formula for car loans so the estimate is more accurate.",
  },
  {
    q: "Bolehkah saya menjimatkan faedah dengan bayaran tambahan?",
    qEn: "Can I save on interest by making extra payments?",
    a: "Untuk pinjaman baki berkurangan seperti pinjaman rumah, membuat bayaran tambahan ke atas prinsipal mengurangkan baki tertunggak, lalu menjimatkan faedah dan memendekkan tempoh. Untuk pinjaman kadar rata seperti sewa beli kereta, penjimatan daripada penyelesaian awal biasanya terhad kerana faedah telah dikira di awal — semak terma rebat penyelesaian awal dengan bank anda.",
    aEn: "For reducing balance loans such as home loans, making extra payments toward the principal lowers the outstanding balance, which saves interest and shortens the tenure. For flat rate loans like car hire purchase, the savings from early settlement are usually limited because interest is computed upfront — check the early settlement rebate terms with your bank.",
  },
];
