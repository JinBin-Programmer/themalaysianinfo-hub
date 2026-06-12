export interface FaqItem {
  q: string;
  qEn: string;
  a: string;
  aEn: string;
}

export const FAQ: FaqItem[] = [
  {
    q: "Bagaimana kadar sejam OT dikira di Malaysia?",
    qEn: "How is the hourly OT rate calculated in Malaysia?",
    a: "Di bawah Akta Kerja 1955, kadar sejam biasa dikira dengan formula: kadar harian biasa (ORP) dibahagi dengan jam kerja biasa sehari. Kadar harian biasa pula ialah gaji bulanan dibahagi dengan 26. Jadi kadar sejam = (Gaji ÷ 26) ÷ jam kerja biasa. Bayaran OT kemudian dikira dengan mendarabkan kadar sejam ini dengan pengganda yang berkenaan.",
    aEn: "Under the Employment Act 1955, the ordinary hourly rate is calculated as the ordinary rate of pay per day (ORP) divided by your normal working hours per day. The ordinary rate of pay per day is your monthly salary divided by 26. So hourly rate = (Salary ÷ 26) ÷ normal hours per day. OT pay is then this hourly rate multiplied by the applicable rate.",
  },
  {
    q: "Apakah pengganda kadar OT untuk hari biasa, hari rehat dan cuti umum?",
    qEn: "What are the OT multipliers for ordinary days, rest days and public holidays?",
    a: "Mengikut Akta Kerja 1955, kerja lebih masa pada hari biasa dibayar pada kadar 1.5 kali kadar sejam. Kerja pada hari rehat lazimnya dikira pada kadar 2.0 kali, manakala kerja pada cuti umum berbayar dikira pada kadar 3.0 kali kadar sejam. Kalkulator ini menggunakan pengganda 1.5×, 2× dan 3× tersebut.",
    aEn: "Under the Employment Act 1955, overtime on a normal working day is paid at 1.5 times the hourly rate. Work on a rest day is generally calculated at 2.0 times, while work on a paid public holiday is calculated at 3.0 times the hourly rate. This calculator uses those 1.5×, 2× and 3× multipliers.",
  },
  {
    q: "Mengapa gaji bulanan dibahagi dengan 26 dan bukan 30?",
    qEn: "Why is the monthly salary divided by 26 and not 30?",
    a: "Akta Kerja 1955 menetapkan bahawa kadar harian biasa (ORP) bagi pekerja bergaji bulanan dikira dengan membahagi gaji bulanan dengan 26 hari. Angka 26 ini mewakili anggaran bilangan hari bekerja dalam sebulan selepas mengambil kira hari rehat, dan ia menjadi asas standard untuk pengiraan kadar harian dan kadar sejam.",
    aEn: "The Employment Act 1955 specifies that the ordinary rate of pay per day (ORP) for a monthly-rated employee is calculated by dividing the monthly salary by 26 days. The figure 26 represents the assumed number of working days in a month after accounting for rest days, and it serves as the standard basis for daily and hourly rate calculations.",
  },
  {
    q: "Adakah semua pekerja layak mendapat bayaran kerja lebih masa?",
    qEn: "Are all employees entitled to overtime pay?",
    a: "Perlindungan kerja lebih masa di bawah Akta Kerja 1955 terpakai kepada pekerja yang dilindungi oleh Akta tersebut. Selepas pindaan 2022, kebanyakan peruntukan Akta meliputi pekerja tanpa mengira gaji, tetapi hak khusus seperti bayaran OT mempunyai had pendapatan tertentu bagi sesetengah golongan. Semak kontrak pekerjaan anda dan rujuk Jabatan Tenaga Kerja jika ragu.",
    aEn: "Overtime protections under the Employment Act 1955 apply to employees covered by the Act. After the 2022 amendments, most provisions of the Act cover employees regardless of wage, but specific entitlements such as overtime pay carry certain income thresholds for some groups. Check your employment contract and consult the Labour Department (JTK) if unsure.",
  },
  {
    q: "Adakah keputusan kalkulator ini mengikat dari segi undang-undang?",
    qEn: "Is this calculator's result legally binding?",
    a: "Tidak. Kalkulator ini memberikan anggaran sahaja berdasarkan formula standard Akta Kerja 1955. Jumlah sebenar boleh berbeza bergantung pada terma kontrak pekerjaan anda, polisi syarikat, dan tafsiran khusus. Untuk pengiraan rasmi atau pertikaian, rujuk majikan, penyata gaji rasmi, atau Jabatan Tenaga Kerja Semenanjung Malaysia.",
    aEn: "No. This calculator provides an estimate only, based on the standard Employment Act 1955 formula. The actual amount may vary depending on your employment contract terms, company policy, and specific interpretations. For official calculations or disputes, refer to your employer, official payslips, or the Department of Labour (JTKSM).",
  },
  {
    q: "Bagaimana cara menggunakan kalkulator OT ini?",
    qEn: "How do I use this OT calculator?",
    a: "Masukkan gaji pokok bulanan anda dalam RM, pilih jam kerja biasa sehari dan bilangan hari kerja seminggu. Kemudian masukkan bilangan jam OT untuk setiap kategori — hari biasa (1.5×), hari rehat (2×) dan cuti umum (3×). Tekan butang 'Kira OT' dan kalkulator akan memaparkan kadar sejam, kadar harian, dan bayaran OT bagi setiap kategori serta jumlah keseluruhan.",
    aEn: "Enter your basic monthly salary in RM, choose your normal working hours per day and the number of working days per week. Then enter the number of OT hours for each category — ordinary day (1.5×), rest day (2×) and public holiday (3×). Press the 'Calculate OT' button and the calculator will show your hourly rate, daily rate, OT pay for each category and the grand total.",
  },
];
