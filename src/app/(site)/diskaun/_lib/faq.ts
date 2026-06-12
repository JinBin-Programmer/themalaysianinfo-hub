export interface FaqItem {
  q: string;
  qEn: string;
  a: string;
  aEn: string;
}

export const DISKAUN_FAQ: FaqItem[] = [
  {
    q: "Bagaimana cara mengira harga selepas diskaun?",
    qEn: "How do I calculate the price after a discount?",
    a: "Darabkan harga asal dengan peratus diskaun untuk mendapatkan jumlah potongan, kemudian tolak daripada harga asal. Contohnya, harga RM100 dengan diskaun 20% bermaksud potongan RM20 (100 × 20%), jadi harga akhir ialah RM80. Kalkulator di atas melakukan pengiraan ini secara automatik.",
    aEn: "Multiply the original price by the discount percentage to get the discount amount, then subtract it from the original price. For example, RM100 with a 20% discount means a RM20 reduction (100 × 20%), so the final price is RM80. The calculator above does this automatically.",
  },
  {
    q: "Apakah SST dan berapa kadarnya di Malaysia?",
    qEn: "What is SST and what is its rate in Malaysia?",
    a: "SST (Sales and Service Tax / Cukai Jualan dan Perkhidmatan) ialah cukai yang dikenakan ke atas barangan dan perkhidmatan tertentu di Malaysia. Kalkulator ini menggunakan kadar 6% yang biasa untuk cukai perkhidmatan. Kadar sebenar boleh berbeza mengikut jenis barang atau perkhidmatan, jadi sila rujuk resit atau peniaga untuk kadar tepat.",
    aEn: "SST (Sales and Service Tax) is a tax applied to certain goods and services in Malaysia. This calculator uses a common 6% service-tax rate. The actual rate can vary depending on the type of goods or service, so check your receipt or the merchant for the exact rate.",
  },
  {
    q: "Bagaimana mengira diskaun berganda (contoh 20% + 10%)?",
    qEn: "How do I calculate stacked discounts (e.g. 20% + 10%)?",
    a: "Diskaun berganda dikenakan satu demi satu, bukan dijumlahkan. Diskaun 20% kemudian 10% TIDAK sama dengan diskaun 30%. Pertama, tolak 20% daripada harga asal, kemudian tolak 10% daripada baki itu. Untuk RM100: RM100 → RM80 (selepas 20%) → RM72 (selepas 10%), iaitu diskaun efektif 28% sahaja.",
    aEn: "Stacked discounts are applied one after another, not added together. A 20% then 10% discount is NOT the same as 30% off. First subtract 20% from the original price, then subtract 10% from the remainder. For RM100: RM100 → RM80 (after 20%) → RM72 (after 10%), which is an effective discount of only 28%.",
  },
  {
    q: "Bagaimana cara mencari harga asal daripada harga jualan?",
    qEn: "How do I find the original price from a sale price?",
    a: "Gunakan mod 'Cari Harga Asal'. Jika sesuatu barang dijual pada RM80 selepas diskaun 20%, harga asalnya ialah harga jualan dibahagi dengan (1 tolak peratus diskaun): RM80 ÷ (1 − 0.20) = RM100. Ini berguna untuk mengesahkan sama ada diskaun yang diiklankan adalah benar.",
    aEn: "Use the 'Find Original Price' mode. If an item sells for RM80 after a 20% discount, the original price is the sale price divided by (1 minus the discount percentage): RM80 ÷ (1 − 0.20) = RM100. This is handy for verifying whether an advertised discount is genuine.",
  },
  {
    q: "Adakah diskaun dikira sebelum atau selepas SST?",
    qEn: "Is the discount applied before or after SST?",
    a: "Dalam kebanyakan kes, diskaun dikenakan ke atas harga asal terlebih dahulu, kemudian cukai dikira ke atas harga yang telah didiskaunkan. Kalkulator ini mengikut susunan tersebut: ia menolak diskaun dahulu, kemudian menambah SST 6% pada harga selepas diskaun. Sesetengah peniaga mungkin mengamalkan cara berbeza, jadi semak resit anda.",
    aEn: "In most cases, the discount is applied to the original price first, then tax is calculated on the discounted price. This calculator follows that order: it subtracts the discount first, then adds 6% SST to the discounted price. Some merchants may do it differently, so check your receipt.",
  },
  {
    q: "Adakah kalkulator ini percuma dan tepat untuk membeli-belah?",
    qEn: "Is this calculator free and accurate for shopping?",
    a: "Ya, kalkulator ini percuma sepenuhnya dan menggunakan formula matematik standard untuk diskaun, diskaun berganda, harga terbalik dan SST. Ia sesuai untuk anggaran semasa membeli-belah, jualan mega, atau membandingkan tawaran. Untuk jumlah rasmi atau cukai tepat, sahkan dengan peniaga kerana kadar dan peraturan boleh berubah.",
    aEn: "Yes, this calculator is completely free and uses standard mathematical formulas for discounts, stacked discounts, reverse pricing and SST. It is great for quick estimates while shopping, during mega sales, or when comparing deals. For official totals or exact tax, confirm with the merchant as rates and rules can change.",
  },
];
