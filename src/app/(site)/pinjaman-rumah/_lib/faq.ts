export interface FaqItem {
  q: string;
  qEn: string;
  a: string;
  aEn: string;
}

export const FAQ: FaqItem[] = [
  {
    q: "Bagaimana ansuran bulanan pinjaman rumah dikira?",
    qEn: "How is the monthly housing loan installment calculated?",
    a: "Ansuran bulanan dikira menggunakan formula amortisasi pinjaman standard yang mengambil kira jumlah pinjaman (selepas bayaran pendahuluan), kadar faedah tahunan dan tempoh pinjaman. Kalkulator ini membahagikan kadar faedah tahunan kepada kadar bulanan dan menyebarkan bayaran sama rata sepanjang tempoh, supaya setiap ansuran merangkumi sebahagian pokok dan sebahagian faedah.",
    aEn: "The monthly installment is calculated using the standard loan amortisation formula, which takes into account the loan amount (after the down payment), the annual interest rate and the loan tenure. This calculator converts the annual rate into a monthly rate and spreads payments evenly across the tenure, so each installment covers part principal and part interest.",
  },
  {
    q: "Berapakah bayaran pendahuluan yang biasa untuk rumah di Malaysia?",
    qEn: "What is the typical down payment for a house in Malaysia?",
    a: "Bagi kebanyakan pembelian hartanah di Malaysia, bank biasanya membiayai sehingga 90% daripada harga hartanah, jadi bayaran pendahuluan lazim ialah 10%. Bagi hartanah ketiga dan ke atas atau sesetengah jenis pembiayaan, bayaran pendahuluan boleh menjadi lebih tinggi. Kalkulator ini membenarkan anda memilih 10%, 20% atau 30% untuk melihat kesannya terhadap jumlah pinjaman dan ansuran.",
    aEn: "For most property purchases in Malaysia, banks typically finance up to 90% of the property price, so the common down payment is 10%. For third and subsequent properties or certain financing types, the down payment can be higher. This calculator lets you pick 10%, 20% or 30% to see the effect on the loan amount and installment.",
  },
  {
    q: "Bagaimana duti setem MOT dikira?",
    qEn: "How is the MOT stamp duty calculated?",
    a: "Duti setem untuk Memorandum Pindah Milik (MOT) dikira secara berperingkat berdasarkan harga hartanah: 1% untuk RM100,000 pertama, 2% untuk RM100,001 hingga RM500,000, 3% untuk RM500,001 hingga RM1,000,000, dan 4% untuk baki melebihi RM1,000,000. Kalkulator ini menggunakan kadar berperingkat yang sama untuk menganggar duti setem anda.",
    aEn: "Stamp duty for the Memorandum of Transfer (MOT) is calculated in tiers based on the property price: 1% on the first RM100,000, 2% on RM100,001 to RM500,000, 3% on RM500,001 to RM1,000,000, and 4% on the balance above RM1,000,000. This calculator applies the same tiered rates to estimate your stamp duty.",
  },
  {
    q: "Apakah yuran guaman dan bagaimana ia dianggarkan?",
    qEn: "What are the legal fees and how are they estimated?",
    a: "Yuran guaman merangkumi kos peguam untuk menyediakan dan menyempurnakan dokumen pinjaman serta pindah milik. Anggaran dalam kalkulator ini berdasarkan kadar berperingkat ringkas pada jumlah pinjaman (kira-kira 1% untuk RM500,000 pertama dan lebih rendah selepas itu). Yuran sebenar tertakluk kepada skala yang ditetapkan dan mungkin termasuk kos pendaftaran serta cukai tambahan.",
    aEn: "Legal fees cover the lawyer's cost to prepare and complete the loan and transfer documents. The estimate in this calculator uses a simple tiered rate on the loan amount (roughly 1% on the first RM500,000 and lower thereafter). Actual fees are subject to the prescribed scale and may include disbursements and additional taxes.",
  },
  {
    q: "Apakah kos pendahuluan yang perlu saya sediakan?",
    qEn: "What upfront costs should I prepare for?",
    a: "Selain bayaran pendahuluan, anda perlu menyediakan dana untuk duti setem MOT, yuran guaman bagi perjanjian jual beli dan perjanjian pinjaman, duti setem pinjaman, serta kos lain seperti penilaian dan insurans. Kalkulator ini menjumlahkan bayaran pendahuluan, duti setem MOT dan anggaran yuran guaman supaya anda mendapat gambaran kos pendahuluan keseluruhan.",
    aEn: "Besides the down payment, you should prepare funds for the MOT stamp duty, legal fees for the sale and purchase and loan agreements, loan stamp duty, plus other costs like valuation and insurance. This calculator totals the down payment, MOT stamp duty and estimated legal fees to give you a picture of overall upfront costs.",
  },
  {
    q: "Adakah keputusan kalkulator ini muktamad?",
    qEn: "Are the results from this calculator final?",
    a: "Tidak. Keputusan adalah anggaran untuk tujuan perancangan sahaja. Kadar faedah sebenar bergantung kepada tawaran bank dan profil kredit anda, manakala duti setem dan yuran guaman boleh berubah mengikut peraturan semasa dan pengecualian yang berkenaan. Sentiasa sahkan angka dengan bank dan peguam anda sebelum membuat keputusan.",
    aEn: "No. The results are estimates for planning purposes only. The actual interest rate depends on the bank's offer and your credit profile, while stamp duty and legal fees can change with current regulations and applicable exemptions. Always confirm the figures with your bank and lawyer before deciding.",
  },
];
