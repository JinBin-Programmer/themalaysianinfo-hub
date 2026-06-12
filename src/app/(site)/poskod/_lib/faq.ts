export interface FaqItem {
  q: string;
  qEn: string;
  a: string;
  aEn: string;
}

export const FAQ: FaqItem[] = [
  {
    q: "Berapa digit poskod di Malaysia?",
    qEn: "How many digits is a Malaysian postcode?",
    a: "Poskod Malaysia terdiri daripada 5 digit. Dua digit pertama biasanya menunjukkan negeri atau wilayah, manakala digit seterusnya mengkhususkan kawasan penghantaran. Sebab itu alat ini meminta nombor 5 digit penuh untuk hasil yang tepat.",
    aEn: "Malaysian postcodes are 5 digits long. The first two digits generally indicate the state or territory, while the remaining digits narrow down the delivery area. That is why this tool asks for the full 5-digit number for an accurate result.",
  },
  {
    q: "Bagaimana alat semak poskod ini berfungsi?",
    qEn: "How does this postcode checker work?",
    a: "Masukkan poskod 5 digit, kemudian alat ini akan memadankannya dengan senarai poskod utama yang diketahui. Jika tiada padanan tepat, ia menggunakan julat nombor poskod untuk menganggar negeri. Carian dilakukan terus dalam pelayar anda, tanpa menghantar data ke pelayan.",
    aEn: "Enter a 5-digit postcode and the tool matches it against a list of known major postcodes. If there is no exact match, it falls back to postcode number ranges to estimate the state. The lookup runs entirely in your browser, with no data sent to a server.",
  },
  {
    q: "Mengapa sesetengah poskod hanya menunjukkan negeri tanpa bandar tepat?",
    qEn: "Why do some postcodes only show the state and not the exact town?",
    a: "Alat ini menyimpan butiran bandar untuk poskod utama yang popular. Bagi poskod lain, ia menggunakan julat nombor untuk menentukan negeri sahaja. Dalam kes itu, bandar akan dipaparkan sama dengan negeri sebagai anggaran umum.",
    aEn: "The tool stores town-level detail for popular major postcodes. For other codes, it uses number ranges to determine just the state. In those cases the town is shown as the state name as a general estimate.",
  },
  {
    q: "Adakah data poskod ini rasmi dan terkini?",
    qEn: "Is this postcode data official and up to date?",
    a: "Data ini untuk rujukan umum dan meliputi poskod utama serta julat negeri. Ia bukan pangkalan data rasmi Pos Malaysia. Untuk pengesahan rasmi atau poskod baharu, sila rujuk laman web Pos Malaysia.",
    aEn: "This data is for general reference and covers major postcodes plus state ranges. It is not the official Pos Malaysia database. For official verification or newly issued postcodes, please refer to the Pos Malaysia website.",
  },
  {
    q: "Mengapa poskod saya tidak dijumpai?",
    qEn: "Why is my postcode not found?",
    a: "Pastikan anda memasukkan tepat 5 digit nombor. Jika poskod itu berada di luar julat yang dikenali atau merupakan poskod khas (seperti peti surat atau institusi), ia mungkin tidak dipadankan. Cuba poskod kawasan berdekatan untuk mengenal pasti negeri.",
    aEn: "Make sure you enter exactly 5 numeric digits. If the postcode falls outside the known ranges or is a special-purpose code (such as a PO box or institution), it may not match. Try a nearby area's postcode to identify the state.",
  },
  {
    q: "Bolehkah saya tahu negeri dari dua digit pertama poskod?",
    qEn: "Can I tell the state from the first two digits of a postcode?",
    a: "Selalunya ya. Contohnya, poskod bermula dengan 50 hingga 60 merujuk kawasan Kuala Lumpur, 0 dan 1 untuk Perlis, Kedah dan Pulau Pinang, manakala 80-an untuk Johor. Walau bagaimanapun, terdapat pengecualian, jadi semakan 5 digit penuh lebih dipercayai.",
    aEn: "Often yes. For example, postcodes starting 50 to 60 point to the Kuala Lumpur area, 0 and 1 cover Perlis, Kedah and Penang, while the 80s belong to Johor. However there are exceptions, so a full 5-digit check is more reliable.",
  },
];
