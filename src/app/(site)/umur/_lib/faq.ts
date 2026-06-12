export interface FaqItem {
  q: string;
  qEn: string;
  a: string;
  aEn: string;
}

export const UMUR_FAQ: FaqItem[] = [
  {
    q: "Bagaimana kalkulator umur ini mengira umur saya?",
    qEn: "How does this age calculator work out my age?",
    a: "Kalkulator ini mengambil tarikh lahir anda dan membandingkannya dengan tarikh hari ini. Ia mengira selisih dalam tahun penuh, kemudian baki bulan dan baki hari, dengan mengambil kira bilangan hari sebenar dalam setiap bulan. Hasilnya ialah umur tepat anda dalam tahun, bulan dan hari.",
    aEn: "The calculator takes your date of birth and compares it with today's date. It computes the difference in full years, then the remaining months and remaining days, accounting for the actual number of days in each month. The result is your exact age in years, months and days.",
  },
  {
    q: "Adakah jumlah hari dan jam yang dipaparkan tepat?",
    qEn: "Are the total days and hours shown accurate?",
    a: "Jumlah hari dikira sebagai bilangan hari penuh antara tarikh lahir dan hari ini, manakala jumlah jam ialah jumlah hari tersebut didarab dengan 24. Angka ini berasaskan tarikh kalendar dan tidak mengambil kira zon waktu atau saat lompat, jadi ia adalah anggaran yang sangat hampir untuk tujuan rujukan.",
    aEn: "Total days is calculated as the number of full days between your birth date and today, while total hours is that day count multiplied by 24. These figures are based on calendar dates and do not account for time zones or leap seconds, so they are a very close approximation for reference purposes.",
  },
  {
    q: "Bagaimana 'hari dilahirkan' ditentukan?",
    qEn: "How is the 'day of birth' determined?",
    a: "Kalkulator menggunakan tarikh lahir yang anda masukkan untuk menentukan hari dalam minggu (Ahad hingga Sabtu) anda dilahirkan, berdasarkan kalendar Gregorian standard. Ini berguna untuk mengetahui sama ada anda dilahirkan pada hujung minggu atau hari bekerja.",
    aEn: "The calculator uses the birth date you enter to determine the day of the week (Sunday to Saturday) on which you were born, based on the standard Gregorian calendar. This is handy for finding out whether you were born on a weekend or a weekday.",
  },
  {
    q: "Apakah maksud 'generasi' dalam keputusan?",
    qEn: "What does the 'generation' in the result mean?",
    a: "Generasi adalah pengelompokan demografi mengikut tahun kelahiran, seperti Baby Boomer, Generasi X, Millennial, Generasi Z dan Generasi Alpha. Julat tahun yang digunakan di sini mengikut takrifan umum yang lazim digunakan, dan boleh berbeza sedikit antara sumber kerana ia bukan piawai rasmi.",
    aEn: "Generation is a demographic grouping by birth year, such as Baby Boomer, Generation X, Millennial, Generation Z and Generation Alpha. The year ranges used here follow commonly accepted definitions and may vary slightly between sources, as they are not an official standard.",
  },
  {
    q: "Bagaimana hari lahir seterusnya dikira?",
    qEn: "How is the next birthday calculated?",
    a: "Kalkulator mencari kemunculan seterusnya bagi tarikh dan bulan kelahiran anda. Jika hari lahir tahun ini sudah berlalu, ia mengira hari lahir pada tahun hadapan, kemudian memaparkan bilangan hari yang tinggal. Jika hari ini ialah hari lahir anda, ia akan memaparkan ucapan selamat hari lahir.",
    aEn: "The calculator finds the next occurrence of your birth day and month. If this year's birthday has already passed, it counts to next year's birthday, then shows the number of days remaining. If today is your birthday, it displays a happy birthday message.",
  },
  {
    q: "Adakah kalkulator umur ini boleh digunakan untuk urusan rasmi di Malaysia?",
    qEn: "Can this age calculator be used for official matters in Malaysia?",
    a: "Kalkulator ini sesuai untuk rujukan peribadi, seperti menyemak kelayakan umur untuk peperiksaan, permohonan atau aktiviti. Untuk urusan rasmi, sentiasa rujuk tarikh lahir pada kad pengenalan (MyKad) anda kerana sesetengah agensi mengira umur mengikut tahun semasa atau tarikh tertentu, bukan umur tepat hari ini.",
    aEn: "This calculator is suitable for personal reference, such as checking age eligibility for exams, applications or activities. For official matters, always refer to the date of birth on your identity card (MyKad), as some agencies calculate age by the current year or a specific cut-off date rather than your exact age today.",
  },
];
