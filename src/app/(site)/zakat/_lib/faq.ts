export interface FaqItem {
  q: string;
  qEn: string;
  a: string;
  aEn: string;
}

export const FAQ: FaqItem[] = [
  {
    q: "Apakah itu zakat pendapatan?",
    qEn: "What is income zakat?",
    a: "Zakat pendapatan ialah zakat ke atas hasil pekerjaan dan sumber pendapatan seperti gaji, upah, bonus dan elaun. Ia dikira pada kadar 2.5% daripada pendapatan bersih yang layak setelah ditolak keperluan asas, sekiranya pendapatan bersih setahun mencapai atau melebihi nisab.",
    aEn: "Income zakat is zakat on earnings from employment and income sources such as salary, wages, bonuses and allowances. It is charged at 2.5% of eligible net income after deducting basic necessities, provided the annual net income reaches or exceeds the nisab.",
  },
  {
    q: "Apakah nisab dan berapa nilainya?",
    qEn: "What is nisab and how much is it?",
    a: "Nisab ialah jumlah minimum harta yang menjadikan seseorang wajib membayar zakat. Ia berdasarkan nilai semasa emas (biasanya 85 gram). Kalkulator ini menggunakan anggaran RM22,000 setahun sebagai panduan, tetapi nilai sebenar berubah mengikut harga emas semasa. Sila semak nisab terkini dengan Majlis Agama Islam negeri anda.",
    aEn: "Nisab is the minimum amount of wealth that makes a person obligated to pay zakat. It is based on the current value of gold (typically 85 grams). This calculator uses an estimate of RM22,000 per year as a guide, but the actual value changes with the current gold price. Please check the latest nisab with your state Islamic Religious Council.",
  },
  {
    q: "Bagaimana zakat pendapatan dikira?",
    qEn: "How is income zakat calculated?",
    a: "Kalkulator ini mengambil gaji kasar bulanan dan mendarabkannya dengan 12 untuk mendapat pendapatan kasar setahun. Ia kemudian menolak caruman KWSP (11%) serta elaun keperluan asas — RM8,000 untuk diri sendiri dan RM3,000 bagi setiap tanggungan — dan sebarang potongan lain. Jika baki bersih mencapai nisab, zakat dikenakan pada kadar 2.5%.",
    aEn: "This calculator takes your monthly gross salary and multiplies it by 12 to get annual gross income. It then deducts EPF contributions (11%) plus basic necessity allowances — RM8,000 for yourself and RM3,000 for each dependent — and any other deductions. If the net balance reaches the nisab, zakat is charged at 2.5%.",
  },
  {
    q: "Apakah perbezaan antara zakat pendapatan dan zakat simpanan?",
    qEn: "What is the difference between income zakat and savings zakat?",
    a: "Zakat pendapatan dikira ke atas hasil pendapatan tahunan setelah ditolak keperluan, manakala zakat simpanan dikira ke atas baki wang simpanan yang telah dipegang selama setahun (haul) dan mencapai nisab. Kedua-duanya menggunakan kadar yang sama iaitu 2.5%, tetapi asas pengiraannya berbeza.",
    aEn: "Income zakat is calculated on annual earnings after deducting necessities, while savings zakat is calculated on the balance of saved funds that has been held for one year (haul) and reaches the nisab. Both use the same 2.5% rate, but the basis of the calculation differs.",
  },
  {
    q: "Adakah caruman KWSP dikira dalam zakat pendapatan?",
    qEn: "Is the EPF contribution included in income zakat?",
    a: "Dalam kalkulator ini, caruman KWSP pekerja (dianggap 11%) ditolak daripada pendapatan kasar sebelum zakat dikira, kerana wang itu belum lagi dimiliki sepenuhnya untuk dibelanjakan. Sesetengah majlis agama mempunyai kaedah berbeza, jadi rujuk panduan negeri anda untuk pengiraan rasmi.",
    aEn: "In this calculator, the employee's EPF contribution (assumed at 11%) is deducted from gross income before zakat is calculated, since those funds are not yet fully available to spend. Some religious councils use different methods, so refer to your state's guidance for the official calculation.",
  },
  {
    q: "Di manakah saya boleh membayar zakat di Malaysia?",
    qEn: "Where can I pay zakat in Malaysia?",
    a: "Zakat dibayar melalui Majlis Agama Islam atau Pusat Pungutan Zakat di negeri anda, seperti Lembaga Zakat Selangor, PPZ-MAIWP (Wilayah Persekutuan) atau badan zakat negeri masing-masing. Kebanyakannya menawarkan pembayaran dalam talian, potongan gaji bulanan dan kaunter di seluruh negeri.",
    aEn: "Zakat is paid through the Islamic Religious Council or Zakat Collection Centre in your state, such as Lembaga Zakat Selangor, PPZ-MAIWP (Federal Territories) or your respective state zakat body. Most offer online payment, monthly salary deductions and counters across the state.",
  },
];
