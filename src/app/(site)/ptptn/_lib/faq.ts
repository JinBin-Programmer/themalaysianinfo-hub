export interface FaqItem {
  q: string;
  qEn: string;
  a: string;
  aEn: string;
}

export const PTPTN_FAQ: FaqItem[] = [
  {
    q: "Adakah PTPTN mengenakan faedah (riba)?",
    qEn: "Does PTPTN charge interest (riba)?",
    a: "PTPTN tidak mengenakan faedah/riba. Sebaliknya, ia mengenakan caj perkhidmatan sebanyak 1% setahun atas baki tertunggak (Ujrah). Kalkulator ini mengira caj perkhidmatan 1% tahunan secara baki berkurangan, jadi semakin cepat anda membayar, semakin rendah jumlah caj perkhidmatan keseluruhan.",
    aEn: "PTPTN does not charge interest/riba. Instead it applies a service charge (Ujrah) of 1% per year on the outstanding balance. This calculator computes the 1% annual service charge on a reducing balance, so the faster you repay, the lower your total service charge.",
  },
  {
    q: "Bagaimana caj perkhidmatan 1% dikira?",
    qEn: "How is the 1% service charge calculated?",
    a: "Caj 1% setahun dikira atas baki tertunggak setiap bulan (1% dibahagi 12 bulan). Setiap bayaran bulanan anda akan menampung caj perkhidmatan dahulu, dan bakinya mengurangkan jumlah pokok pinjaman. Oleh itu pada awal tempoh, sebahagian besar bayaran menampung caj, dan semakin lama semakin banyak menampung pokok.",
    aEn: "The 1% annual charge is applied to the outstanding balance each month (1% divided by 12). Each monthly payment first covers the service charge, and the remainder reduces the loan principal. So early on, more of your payment covers the charge, and over time more goes towards the principal.",
  },
  {
    q: "Berapa patut saya bayar setiap bulan?",
    qEn: "How much should I pay each month?",
    a: "Tiada jumlah tetap yang wajib — ia bergantung kepada kemampuan anda. Kalkulator ini mencadangkan bayaran berdasarkan julat gaji bulanan anda, tetapi anda boleh memasukkan jumlah sendiri. Membayar lebih daripada cadangan akan memendekkan tempoh bayaran dan mengurangkan jumlah caj perkhidmatan.",
    aEn: "There is no single fixed amount — it depends on your means. This calculator suggests a payment based on your monthly salary bracket, but you can enter your own figure. Paying more than the suggestion shortens the repayment period and reduces the total service charge.",
  },
  {
    q: "Adakah terdapat diskaun untuk bayaran PTPTN?",
    qEn: "Are there discounts for PTPTN repayment?",
    a: "PTPTN dari semasa ke semasa menawarkan diskaun untuk bayaran penuh sekali gus atau bayaran melalui potongan gaji/arahan tetap, tertakluk kepada tempoh kempen yang diumumkan. Kalkulator ini tidak memasukkan sebarang diskaun; ia hanya menganggar bayaran berdasarkan caj perkhidmatan 1%. Semak laman web rasmi PTPTN untuk tawaran terkini.",
    aEn: "PTPTN periodically offers discounts for full lump-sum settlement or for payments via salary deduction/standing instruction, subject to announced campaign periods. This calculator does not include any discounts; it only estimates payments based on the 1% service charge. Check the official PTPTN website for current offers.",
  },
  {
    q: "Apa berlaku jika saya tidak membayar balik PTPTN?",
    qEn: "What happens if I do not repay PTPTN?",
    a: "Kegagalan membayar balik boleh menyebabkan tindakan seperti penyenaraian dalam rekod yang menjejaskan permohonan pinjaman lain, dan tindakan kutipan. Membayar secara konsisten, walaupun jumlah kecil, membantu mengelakkan masalah. Gunakan kalkulator ini untuk merancang bayaran bulanan yang mampu dan konsisten.",
    aEn: "Failing to repay can lead to actions such as being listed in records that affect other loan applications, and collection action. Paying consistently, even small amounts, helps avoid problems. Use this calculator to plan an affordable, consistent monthly payment.",
  },
  {
    q: "Adakah hasil kalkulator ini tepat?",
    qEn: "Are the results from this calculator accurate?",
    a: "Hasil ini adalah anggaran berdasarkan caj perkhidmatan 1% setahun atas baki berkurangan dan bayaran bulanan tetap. Jumlah sebenar boleh berbeza mengikut tarikh bayaran, sebarang bayaran tambahan, diskaun kempen dan polisi semasa PTPTN. Sentiasa rujuk penyata rasmi PTPTN untuk angka tepat.",
    aEn: "These results are an estimate based on a 1% annual service charge on a reducing balance and a fixed monthly payment. Actual amounts can differ based on payment dates, any extra payments, campaign discounts and PTPTN's current policies. Always refer to your official PTPTN statement for exact figures.",
  },
];
