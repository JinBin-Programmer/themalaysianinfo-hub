export interface FaqItem {
  q: string;
  qEn: string;
  a: string;
  aEn: string;
}

export const FAQ: FaqItem[] = [
  {
    q: "Bagaimana nombor IC Malaysia (MyKad) disusun?",
    qEn: "How is a Malaysian IC (MyKad) number structured?",
    a: "Nombor kad pengenalan 12 digit terdiri daripada tiga bahagian: enam digit pertama ialah tarikh lahir dalam format YYMMDD, dua digit seterusnya ialah kod tempat lahir (negeri atau negara), dan empat digit terakhir ialah nombor siri unik. Digit terakhir sekali menunjukkan jantina — ganjil bermaksud lelaki dan genap bermaksud perempuan.",
    aEn: "A 12-digit identity card number has three parts: the first six digits are the birth date in YYMMDD format, the next two digits are the place-of-birth code (state or country), and the last four digits are a unique serial number. The very last digit indicates gender — odd means male and even means female.",
  },
  {
    q: "Bagaimana alat ini menentukan umur saya?",
    qEn: "How does this tool work out my age?",
    a: "Alat ini membaca enam digit pertama nombor IC untuk mendapatkan tarikh lahir, kemudian membandingkannya dengan tarikh hari ini untuk mengira umur dalam tahun penuh. Oleh kerana IC hanya menyimpan dua digit tahun, alat ini menganggap tahun selepas 2000 jika nilainya kurang atau sama dengan tahun semasa, dan tahun 1900-an jika lebih besar.",
    aEn: "The tool reads the first six digits of the IC to get your birth date, then compares it with today's date to calculate your age in completed years. Because the IC only stores two digits for the year, the tool assumes a 2000s year when the value is at or below the current year, and a 1900s year when it is larger.",
  },
  {
    q: "Adakah nombor IC saya disimpan atau dihantar ke pelayan?",
    qEn: "Is my IC number stored or sent to a server?",
    a: "Tidak. Semua pengiraan berlaku terus dalam pelayar anda pada peranti anda. Nombor IC yang anda masukkan tidak dihantar ke mana-mana pelayan, tidak disimpan, dan tidak dikongsi. Setelah anda menutup atau memuat semula halaman, maklumat itu hilang sepenuhnya.",
    aEn: "No. All calculations happen directly in your browser on your device. The IC number you enter is not sent to any server, not stored, and not shared. Once you close or reload the page, the information is gone entirely.",
  },
  {
    q: "Apakah maksud dua digit kod negeri dalam IC?",
    qEn: "What do the two state-code digits in the IC mean?",
    a: "Dua digit selepas tarikh lahir menunjukkan tempat kelahiran. Kod 01 hingga 16 mewakili negeri dan wilayah persekutuan di Malaysia, contohnya 10 untuk Selangor dan 14 untuk Wilayah Persekutuan Kuala Lumpur. Kod lain seperti 71, 72, 74 dan ke atas pula menunjukkan kelahiran di luar negara atau status warganegara tertentu.",
    aEn: "The two digits after the birth date indicate the place of birth. Codes 01 to 16 represent Malaysian states and federal territories, for example 10 for Selangor and 14 for the Federal Territory of Kuala Lumpur. Other codes such as 71, 72, 74 and above indicate birth abroad or particular citizenship statuses.",
  },
  {
    q: "Bolehkah jantina ditentukan daripada nombor IC?",
    qEn: "Can gender be determined from the IC number?",
    a: "Ya. Digit terakhir nombor IC menandakan jantina pemegang kad: nombor ganjil bermaksud lelaki dan nombor genap bermaksud perempuan. Ini ialah konvensyen rasmi yang digunakan dalam sistem pendaftaran negara, jadi alat ini hanya membaca digit tersebut tanpa sebarang tekaan.",
    aEn: "Yes. The last digit of the IC number marks the card holder's gender: an odd number means male and an even number means female. This is the official convention used in the national registration system, so the tool simply reads that digit without any guessing.",
  },
  {
    q: "Mengapa alat ini mengatakan nombor IC saya tidak sah?",
    qEn: "Why does the tool say my IC number is invalid?",
    a: "Alat ini menyemak bahawa anda memasukkan tepat 12 digit dan bahawa tarikh lahir yang tersirat adalah munasabah (bulan 01–12 dan hari yang wujud untuk bulan itu). Jika anda tersilap digit, memasukkan kurang daripada 12 nombor, atau tarikh seperti 30 Februari, alat akan menolak input tersebut. Semak semula nombor pada MyKad anda dan cuba lagi.",
    aEn: "The tool checks that you entered exactly 12 digits and that the implied birth date is plausible (month 01–12 and a day that exists for that month). If you mistype a digit, enter fewer than 12 numbers, or imply a date like 30 February, the tool rejects the input. Re-check the number on your MyKad and try again.",
  },
];
