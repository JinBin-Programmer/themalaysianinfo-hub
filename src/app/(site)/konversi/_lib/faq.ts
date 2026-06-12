export interface FaqItem {
  q: string;
  qEn: string;
  a: string;
  aEn: string;
}

export const FAQ: FaqItem[] = [
  {
    q: "Apakah Penukar Unit ini dan bagaimana cara menggunakannya?",
    qEn: "What is this Unit Converter and how do I use it?",
    a: "Penukar Unit ialah alat percuma untuk menukar nilai ukuran antara unit yang berbeza — panjang, berat, suhu, isipadu dan luas. Pilih kategori, masukkan nilai, kemudian pilih unit 'Dari' dan 'Kepada'. Hasil penukaran dipaparkan serta-merta, bersama jadual semua penukaran yang berkaitan.",
    aEn: "The Unit Converter is a free tool for converting measurement values between different units — length, weight, temperature, volume and area. Pick a category, enter a value, then select the 'From' and 'To' units. The converted result is shown instantly, along with a table of all related conversions.",
  },
  {
    q: "Berapa kaki dalam satu meter?",
    qEn: "How many feet are in one metre?",
    a: "Satu meter bersamaan kira-kira 3.2808 kaki, kerana satu kaki ditakrifkan sebagai tepat 0.3048 meter. Untuk menukar meter ke kaki, bahagikan nilai meter dengan 0.3048; untuk kaki ke meter, darab dengan 0.3048.",
    aEn: "One metre equals about 3.2808 feet, because one foot is defined as exactly 0.3048 metres. To convert metres to feet, divide the metre value by 0.3048; for feet to metres, multiply by 0.3048.",
  },
  {
    q: "Bagaimana penukaran suhu dikira?",
    qEn: "How is temperature conversion calculated?",
    a: "Suhu tidak menggunakan faktor pendaraban mudah seperti unit lain kerana skala bermula pada titik sifar yang berbeza. Celsius ke Fahrenheit: darab dengan 9/5 kemudian tambah 32. Celsius ke Kelvin: tambah 273.15. Alat ini menggunakan Celsius sebagai unit asas dan mengira ke skala lain mengikut formula piawai.",
    aEn: "Temperature does not use a simple multiplication factor like other units because the scales start at different zero points. Celsius to Fahrenheit: multiply by 9/5 then add 32. Celsius to Kelvin: add 273.15. This tool uses Celsius as the base unit and computes other scales using the standard formulas.",
  },
  {
    q: "Adakah alat ini menggunakan galen AS atau galen UK?",
    qEn: "Does this tool use US gallons or UK gallons?",
    a: "Penukar isipadu ini menggunakan galen AS (US gallon), iaitu kira-kira 3.7854 liter. Galen UK (imperial) lebih besar pada kira-kira 4.5461 liter dan tidak digunakan di sini. Sila ambil perhatian perbezaan ini apabila merujuk resipi atau spesifikasi dari sumber British.",
    aEn: "This volume converter uses the US gallon, which is about 3.7854 litres. The UK (imperial) gallon is larger at about 4.5461 litres and is not used here. Keep this difference in mind when referencing recipes or specifications from British sources.",
  },
  {
    q: "Bolehkah saya menukar ekar dan hektar untuk tanah di Malaysia?",
    qEn: "Can I convert acres and hectares for land in Malaysia?",
    a: "Ya. Di bawah kategori Luas, anda boleh menukar antara ekar, hektar, meter persegi dan kaki persegi. Satu ekar bersamaan kira-kira 4046.86 meter persegi, dan satu hektar ialah 10,000 meter persegi (kira-kira 2.471 ekar). Unit ini berguna untuk hartanah dan tanah pertanian di Malaysia.",
    aEn: "Yes. Under the Area category you can convert between acres, hectares, square metres and square feet. One acre equals about 4046.86 square metres, and one hectare is 10,000 square metres (about 2.471 acres). These units are useful for property and agricultural land in Malaysia.",
  },
  {
    q: "Adakah hasil penukaran tepat?",
    qEn: "Are the conversion results accurate?",
    a: "Alat ini menggunakan faktor penukaran piawai yang diterima secara antarabangsa, jadi hasilnya tepat untuk kegunaan harian, pendidikan dan rujukan am. Untuk beberapa unit, faktor dibundarkan kepada beberapa tempat perpuluhan, jadi bagi aplikasi saintifik atau perundangan yang kritikal, sila sahkan dengan piawaian rasmi.",
    aEn: "This tool uses internationally accepted standard conversion factors, so results are accurate for everyday, educational and general reference use. For some units the factors are rounded to a few decimal places, so for critical scientific or legal applications, please verify against official standards.",
  },
];
