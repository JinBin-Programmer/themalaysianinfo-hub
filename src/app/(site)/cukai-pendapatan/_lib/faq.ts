export interface FaqItem {
  q: string;
  qEn: string;
  a: string;
  aEn: string;
}

export const FAQ: FaqItem[] = [
  {
    q: "Apakah relief peribadi cukai pendapatan?",
    qEn: "What is a personal income tax relief?",
    a: "Relief peribadi ialah jumlah yang dibenarkan untuk ditolak daripada pendapatan kasar anda sebelum cukai dikira. Contohnya relief diri sendiri RM9,000, caruman KWSP, insurans, pendidikan dan perubatan ibu bapa. Semakin tinggi jumlah relief yang layak anda tuntut, semakin rendah pendapatan bercukai anda dan dengan itu cukai yang perlu dibayar.",
    aEn: "A personal relief is an amount allowed to be deducted from your gross income before tax is calculated. Examples include the RM9,000 self relief, EPF contributions, insurance, education and parents' medical expenses. The more eligible relief you claim, the lower your chargeable income and therefore the tax payable.",
  },
  {
    q: "Bagaimana cukai pendapatan Malaysia dikira?",
    qEn: "How is Malaysian income tax calculated?",
    a: "Cukai dikira secara progresif mengikut kadar berperingkat. Mula-mula, jumlah relief ditolak daripada pendapatan kasar untuk mendapatkan pendapatan bercukai. Pendapatan bercukai itu kemudian dibahagikan kepada peringkat (bracket), dan setiap peringkat dikenakan kadar yang berbeza — daripada 0% untuk RM5,000 pertama sehingga kadar tertinggi untuk pendapatan yang sangat tinggi.",
    aEn: "Tax is calculated progressively using tiered rates. First, total reliefs are deducted from gross income to obtain chargeable income. That chargeable income is then split into brackets, with each bracket taxed at a different rate — from 0% on the first RM5,000 up to the top rate for very high incomes.",
  },
  {
    q: "Apakah pendapatan bercukai (chargeable income)?",
    qEn: "What is chargeable income?",
    a: "Pendapatan bercukai ialah pendapatan kasar anda setahun selepas ditolak semua relief dan potongan yang dibenarkan. Inilah jumlah yang sebenarnya digunakan untuk mengira cukai mengikut peringkat kadar. Jika jumlah relief melebihi pendapatan kasar, pendapatan bercukai menjadi sifar dan tiada cukai dikenakan.",
    aEn: "Chargeable income is your annual gross income after deducting all allowed reliefs and deductions. This is the figure actually used to compute tax according to the rate brackets. If your total reliefs exceed your gross income, chargeable income becomes zero and no tax is charged.",
  },
  {
    q: "Apakah PCB dan bagaimana ia berkaitan dengan cukai pendapatan?",
    qEn: "What is PCB and how does it relate to income tax?",
    a: "PCB (Potongan Cukai Berjadual) atau MTD ialah potongan cukai bulanan yang dibuat majikan daripada gaji dan dibayar kepada LHDN bagi pihak pekerja. Anggaran PCB di halaman ini hanyalah jumlah cukai tahunan dibahagi 12, jadi ia adalah panduan kasar sahaja — PCB sebenar mengikut jadual rasmi LHDN mungkin berbeza.",
    aEn: "PCB (Potongan Cukai Berjadual), also called MTD, is the monthly tax deduction an employer takes from salary and remits to LHDN on the employee's behalf. The PCB estimate on this page is simply annual tax divided by 12, so it is a rough guide only — actual PCB under LHDN's official schedule may differ.",
  },
  {
    q: "Siapa yang perlu memfailkan cukai pendapatan di Malaysia?",
    qEn: "Who needs to file income tax in Malaysia?",
    a: "Secara amnya, individu yang berpendapatan melebihi ambang cukai tahunan dikehendaki mendaftar dan memfailkan borang cukai dengan LHDN. Walaupun cukai anda dianggarkan sifar selepas relief, anda mungkin masih perlu memfailkan jika pendapatan tahunan melebihi paras tertentu. Rujuk MyTax LHDN untuk syarat terkini.",
    aEn: "Generally, individuals earning above the annual taxable threshold are required to register and file a tax return with LHDN. Even if your tax is estimated at zero after reliefs, you may still need to file if your annual income exceeds a certain level. Refer to LHDN MyTax for the current requirements.",
  },
  {
    q: "Adakah keputusan kalkulator ini tepat untuk pemfailan rasmi?",
    qEn: "Are this calculator's results accurate for official filing?",
    a: "Tidak. Kalkulator ini memberikan anggaran sahaja berdasarkan kadar dan had relief umum untuk membantu anda merancang. Pengiraan sebenar bergantung pada keadaan peribadi anda, rebat cukai, dan peraturan terkini. Untuk pengiraan dan pemfailan rasmi, sila gunakan portal MyTax LHDN atau rujuk penasihat cukai.",
    aEn: "No. This calculator provides estimates only, based on general rates and relief limits to help you plan. The actual computation depends on your personal circumstances, tax rebates, and the latest rules. For official calculation and filing, please use the LHDN MyTax portal or consult a tax adviser.",
  },
];
