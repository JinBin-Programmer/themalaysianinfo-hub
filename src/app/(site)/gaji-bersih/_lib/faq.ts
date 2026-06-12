export interface FaqItem {
  q: string;
  qEn: string;
  a: string;
  aEn: string;
}

export const FAQ: FaqItem[] = [
  {
    q: "Apakah maksud gaji bersih (take-home pay)?",
    qEn: "What does net salary (take-home pay) mean?",
    a: "Gaji bersih ialah jumlah wang yang benar-benar masuk ke akaun anda setiap bulan selepas semua potongan wajib ditolak daripada gaji kasar. Potongan ini termasuk caruman EPF (KWSP), SOCSO (Perkeso), EIS (SIP) dan Potongan Cukai Berjadual (PCB) jika berkenaan. Gaji bersih sentiasa lebih rendah daripada gaji kasar yang tertera dalam surat tawaran kerja.",
    aEn: "Net salary is the amount of money that actually reaches your bank account each month after all mandatory deductions are taken from your gross pay. These deductions include EPF (KWSP), SOCSO (Perkeso), EIS (SIP) and Monthly Tax Deduction (PCB) where applicable. Your net pay is always lower than the gross figure stated in your offer letter.",
  },
  {
    q: "Berapakah kadar caruman EPF (KWSP) pekerja?",
    qEn: "What is the employee EPF (KWSP) contribution rate?",
    a: "Kalkulator ini menggunakan kadar caruman pekerja sebanyak 11% daripada gaji kasar, iaitu kadar standard. Majikan pula menyumbang 13% jika gaji RM5,000 ke bawah, atau 12% jika melebihi RM5,000. Caruman majikan tidak dipotong daripada gaji anda — ia ditambah ke atas pakej anda. Sila ambil kira bahawa kadar caruman pekerja kadangkala diubah secara sementara oleh kerajaan.",
    aEn: "This calculator uses the standard employee contribution rate of 11% of gross salary. The employer contributes 13% if your salary is RM5,000 or below, or 12% if above RM5,000. The employer's contribution is not deducted from your salary — it is added on top of your package. Note that the employee rate is sometimes temporarily adjusted by the government.",
  },
  {
    q: "Bagaimana SOCSO dan EIS dikira?",
    qEn: "How are SOCSO and EIS calculated?",
    a: "SOCSO (Perkeso) dan EIS (Sistem Insurans Pekerjaan) dikira berdasarkan gaji boleh-insurans yang dihadkan pada RM5,000 sebulan. Dalam kalkulator ini, bahagian pekerja SOCSO ialah kira-kira 0.5% dan EIS 0.2% daripada gaji terhad tersebut. Ini bermakna walaupun gaji anda melebihi RM5,000, jumlah potongan SOCSO dan EIS tidak terus meningkat melebihi siling itu.",
    aEn: "SOCSO (Perkeso) and EIS (Employment Insurance System) are calculated on an insurable wage capped at RM5,000 per month. In this calculator the employee SOCSO portion is roughly 0.5% and EIS 0.2% of that capped wage. This means that even if your salary exceeds RM5,000, your SOCSO and EIS deductions do not keep rising above that ceiling.",
  },
  {
    q: "Apakah PCB dan adakah anggaran ini tepat?",
    qEn: "What is PCB and is this estimate accurate?",
    a: "PCB (Potongan Cukai Berjadual) ialah cukai pendapatan yang dipotong setiap bulan oleh majikan dan diserahkan kepada LHDN. Kalkulator ini menganggarkan PCB dengan mengira cukai tahunan berdasarkan pendapatan bercukai selepas pelepasan asas, kemudian membahagikannya kepada 12. Ia adalah anggaran ringkas — PCB sebenar bergantung pada pelepasan tambahan, bonus dan keadaan peribadi anda, jadi sahkan dengan majikan atau LHDN.",
    aEn: "PCB (Monthly Tax Deduction) is income tax withheld each month by your employer and remitted to LHDN. This calculator estimates PCB by computing annual tax on taxable income after basic reliefs, then dividing by 12. It is a simplified estimate — your actual PCB depends on additional reliefs, bonuses and personal circumstances, so verify with your employer or LHDN.",
  },
  {
    q: "Pelepasan cukai apakah yang diambil kira?",
    qEn: "Which tax reliefs are taken into account?",
    a: "Kalkulator ini memasukkan pelepasan peribadi RM9,000, pelepasan caruman EPF (dihadkan pada RM4,000 setahun), pelepasan pasangan RM4,000 jika anda berkahwin dan pasangan tidak bekerja, serta RM2,000 bagi setiap anak. Ia tidak memasukkan pelepasan lain seperti insurans hayat, perubatan, pendidikan atau zakat. Jika anda menuntut pelepasan tambahan, cukai sebenar anda mungkin lebih rendah daripada anggaran ini.",
    aEn: "This calculator includes the RM9,000 personal relief, the EPF contribution relief (capped at RM4,000 a year), a RM4,000 spouse relief if you are married and your spouse is not working, and RM2,000 per child. It does not include other reliefs such as life insurance, medical, education or zakat. If you claim additional reliefs, your actual tax may be lower than this estimate.",
  },
  {
    q: "Mengapa caruman majikan ditunjukkan tetapi tidak ditolak?",
    qEn: "Why are employer contributions shown but not deducted?",
    a: "Caruman majikan untuk EPF, SOCSO dan EIS adalah kos yang ditanggung oleh majikan di atas gaji kasar anda, bukan potongan daripada gaji anda. Kami menunjukkannya supaya anda memahami nilai penuh pakej pampasan anda — wang EPF majikan tetap masuk ke akaun KWSP anda untuk persaraan, walaupun ia tidak mengurangkan gaji bersih bulanan anda.",
    aEn: "Employer contributions for EPF, SOCSO and EIS are costs borne by your employer on top of your gross salary, not deductions from your pay. We show them so you understand the full value of your compensation package — the employer EPF money still goes into your KWSP retirement account, even though it does not reduce your monthly take-home pay.",
  },
];
