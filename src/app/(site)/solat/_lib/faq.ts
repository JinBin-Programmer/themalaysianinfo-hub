export interface FaqItem {
  q: string;
  qEn: string;
  a: string;
  aEn: string;
}

export const PRAYER_FAQ: FaqItem[] = [
  {
    q: "Apakah lima waktu solat fardhu setiap hari?",
    qEn: "What are the five daily obligatory prayers?",
    a: "Lima waktu solat fardhu ialah Subuh (Fajr), Zohor (Dhuhr), Asar (Asr), Maghrib dan Isyak (Isha). Syuruk pula menandakan waktu matahari terbit — ia bukan waktu solat tetapi menandakan tamatnya tempoh solat Subuh.",
    aEn: "The five obligatory daily prayers are Subuh (Fajr), Zohor (Dhuhr), Asar (Asr), Maghrib and Isyak (Isha). Syuruk marks sunrise — it is not a prayer but signals the end of the Subuh prayer window.",
  },
  {
    q: "Bagaimana waktu solat dikira di laman ini?",
    qEn: "How are the prayer times on this page calculated?",
    a: "Waktu solat dikira menggunakan kaedah Liga Dunia Islam (Muslim World League, Method 3) yang digunakan secara meluas di Malaysia. Untuk waktu rasmi yang tepat bagi lokasi anda, sila rujuk aplikasi e-Solat JAKIM.",
    aEn: "Prayer times are calculated using the Muslim World League method (Method 3), which is widely used in Malaysia. For the exact official times for your location, please refer to the JAKIM e-Solat app.",
  },
  {
    q: "Apakah maksud Imsak?",
    qEn: "What does Imsak mean?",
    a: "Imsak menandakan permulaan tempoh berpuasa semasa bulan Ramadan — biasanya sekitar 10 minit sebelum Subuh. Di luar Ramadan, ia berfungsi sebagai peringatan bahawa waktu Subuh semakin hampir.",
    aEn: "Imsak marks the start of the fasting period during Ramadan — typically around 10 minutes before Subuh. Outside Ramadan it serves as a reminder that the Subuh time is approaching.",
  },
  {
    q: "Mengapa waktu solat berbeza mengikut bandar?",
    qEn: "Why do prayer times differ between cities?",
    a: "Waktu solat bergantung pada kedudukan matahari, yang berubah mengikut latitud dan longitud sesebuah lokasi. Oleh itu, bandar di utara, selatan, Sabah dan Sarawak mempunyai waktu yang sedikit berbeza. Pilih bandar anda daripada menu untuk waktu setempat yang lebih tepat.",
    aEn: "Prayer times depend on the position of the sun, which varies with a location's latitude and longitude. Cities in the north, south, Sabah and Sarawak therefore have slightly different times. Select your city from the dropdown for more accurate local times.",
  },
  {
    q: "Adakah waktu solat di laman ini rasmi?",
    qEn: "Are the prayer times on this page official?",
    a: "Waktu yang dipaparkan adalah pengiraan astronomi untuk rujukan dan mungkin berbeza beberapa minit daripada waktu rasmi JAKIM atau jabatan agama negeri. Untuk waktu rasmi, sila sahkan dengan aplikasi e-Solat JAKIM atau masjid berhampiran anda.",
    aEn: "The times shown are astronomical calculations for reference and may differ by a few minutes from the official JAKIM or state religious department times. For official times, please confirm with the JAKIM e-Solat app or your local mosque.",
  },
  {
    q: "Apakah perbezaan antara Syuruk dan Subuh?",
    qEn: "What is the difference between Syuruk and Subuh?",
    a: "Subuh (Fajr) ialah solat fardhu yang bermula pada waktu fajar (cahaya pertama). Syuruk pula ialah waktu matahari terbit dan menandakan tamatnya tempoh untuk menunaikan solat Subuh. Ia bukan satu waktu solat, tetapi penting sebagai sempadan waktu Subuh.",
    aEn: "Subuh (Fajr) is the obligatory prayer that begins at dawn (first light). Syuruk is the moment of sunrise and marks the end of the window for performing the Subuh prayer. It is not a prayer itself but is important as the boundary of the Subuh time.",
  },
];
