export interface FaqItem {
  q: string;
  qEn: string;
  a: string;
  aEn: string;
}

export const KWSP_FAQ: FaqItem[] = [
  {
    q: "Berapakah kadar caruman KWSP standard?",
    qEn: "What are the standard EPF contribution rates?",
    a: "Bagi pekerja warganegara, caruman pekerja secara amnya 11% daripada gaji, manakala majikan menyumbang 13% untuk gaji bulanan RM5,000 ke bawah dan 12% untuk gaji melebihi RM5,000. Kadar ini boleh berubah mengikut pengumuman kerajaan, jadi sentiasa rujuk laman rasmi KWSP.",
    aEn: "For citizen employees, the employee contribution is generally 11% of salary, while the employer contributes 13% for monthly wages of RM5,000 and below, and 12% for wages above RM5,000. These rates can change by government announcement, so always refer to the official EPF website.",
  },
  {
    q: "Bagaimana kalkulator ini menganggar baki semasa bersara?",
    qEn: "How does this calculator estimate the balance at retirement?",
    a: "Kalkulator mengambil baki KWSP semasa anda dan caruman bulanan (pekerja + majikan), kemudian mengkompaun kedua-duanya sehingga umur bersara menggunakan kadar dividen tahunan yang anda pilih. Ia menggunakan formula nilai masa hadapan kompaun bulanan untuk baki sedia ada dan anuiti untuk caruman berterusan.",
    aEn: "The calculator takes your current EPF balance and monthly contributions (employee + employer), then compounds both until your retirement age using the annual dividend rate you choose. It uses a monthly-compounded future value formula for the existing balance and an annuity formula for ongoing contributions.",
  },
  {
    q: "Adakah dividen 5.5% dijamin?",
    qEn: "Is the 5.5% dividend guaranteed?",
    a: "Tidak. Dividen KWSP berubah setiap tahun berdasarkan prestasi pelaburan dana. Secara sejarah, dividen tahunan sering berada di sekitar 5-6%, tetapi KWSP hanya menjamin dividen minimum 2.5% bagi Akaun Konvensional. Nilai 5.5% di sini hanyalah andaian lalai untuk anggaran.",
    aEn: "No. The EPF dividend changes each year based on the fund's investment performance. Historically the annual dividend has often been around 5-6%, but EPF only guarantees a minimum dividend of 2.5% for the Conventional Account. The 5.5% here is just a default assumption for estimation.",
  },
  {
    q: "Pada umur berapa saya boleh mengeluarkan simpanan KWSP penuh?",
    qEn: "At what age can I withdraw my full EPF savings?",
    a: "Pengeluaran penuh simpanan KWSP secara amnya dibenarkan pada umur 55 tahun. Terdapat juga Pengeluaran Umur 50 untuk sebahagian simpanan, serta Pengeluaran Umur 60. Selain itu, ahli boleh memilih untuk mengekalkan simpanan dalam KWSP untuk terus menerima dividen.",
    aEn: "Full withdrawal of EPF savings is generally allowed at age 55. There is also an Age 50 withdrawal for part of the savings, as well as an Age 60 withdrawal. Members may also choose to keep their savings in the EPF to continue earning dividends.",
  },
  {
    q: "Apakah maksud anggaran sara hidup bulanan selama 20 atau 25 tahun?",
    qEn: "What does the estimated monthly withdrawal over 20 or 25 years mean?",
    a: "Angka itu membahagikan anggaran baki bersara anda secara sama rata kepada 20 tahun (240 bulan) atau 25 tahun (300 bulan). Ia memberi gambaran kasar berapa banyak anda boleh belanjakan sebulan jika simpanan habis dalam tempoh tersebut. Ia tidak mengambil kira dividen selepas bersara atau inflasi.",
    aEn: "That figure divides your estimated retirement balance evenly across 20 years (240 months) or 25 years (300 months). It gives a rough idea of how much you could spend per month if the savings last that long. It does not account for post-retirement dividends or inflation.",
  },
  {
    q: "Bolehkah saya menyemak baki KWSP sebenar saya?",
    qEn: "Can I check my actual EPF balance?",
    a: "Ya. Anda boleh menyemak baki dan penyata KWSP sebenar melalui portal i-Akaun atau aplikasi KWSP i-Akaun (Ahli) menggunakan ID pengguna anda. Gunakan baki sebenar tersebut dalam kalkulator ini untuk anggaran yang lebih tepat.",
    aEn: "Yes. You can check your actual EPF balance and statements through the i-Akaun portal or the EPF i-Akaun (Member) app using your user ID. Use that actual balance in this calculator for a more accurate estimate.",
  },
];
