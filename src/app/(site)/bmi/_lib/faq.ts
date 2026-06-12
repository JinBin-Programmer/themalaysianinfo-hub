export interface FaqItem {
  q: string;
  qEn: string;
  a: string;
  aEn: string;
}

export const BMI_FAQ: FaqItem[] = [
  {
    q: "Apakah itu BMI?",
    qEn: "What is BMI?",
    a: "BMI (Body Mass Index) atau Indeks Jisim Badan ialah ukuran ringkas yang mengaitkan berat badan dengan tinggi anda. Ia dikira dengan membahagikan berat dalam kilogram dengan kuasa dua tinggi dalam meter (kg/m²). BMI digunakan secara meluas sebagai penunjuk awal sama ada seseorang berada dalam julat berat yang sihat.",
    aEn: "BMI (Body Mass Index) is a simple measure that relates your body weight to your height. It is calculated by dividing weight in kilograms by the square of height in metres (kg/m²). BMI is widely used as an initial indicator of whether a person is within a healthy weight range.",
  },
  {
    q: "Bagaimana BMI dikira?",
    qEn: "How is BMI calculated?",
    a: "Formula BMI ialah berat (kg) dibahagi dengan tinggi (m) kuasa dua. Contohnya, seseorang yang beratnya 65 kg dan tinggi 1.65 m mempunyai BMI 65 ÷ (1.65 × 1.65) = 23.9. Kalkulator ini melakukan pengiraan tersebut secara automatik apabila anda melaraskan berat dan tinggi.",
    aEn: "The BMI formula is weight (kg) divided by height (m) squared. For example, a person weighing 65 kg at 1.65 m tall has a BMI of 65 ÷ (1.65 × 1.65) = 23.9. This calculator performs that computation automatically as you adjust weight and height.",
  },
  {
    q: "Mengapa kalkulator ini menggunakan piawai Asia-Pasifik WHO?",
    qEn: "Why does this calculator use the WHO Asia-Pacific standard?",
    a: "Kajian mendapati populasi Asia cenderung mempunyai risiko kesihatan yang lebih tinggi pada BMI yang lebih rendah berbanding populasi Barat. Oleh itu WHO mencadangkan ambang Asia-Pasifik di mana julat normal ialah 18.5 hingga 22.9, dan berat berlebihan bermula pada 23.0. Kalkulator ini mengikut ambang tersebut supaya lebih relevan untuk rakyat Malaysia.",
    aEn: "Research suggests Asian populations tend to face higher health risks at a lower BMI than Western populations. The WHO therefore proposed Asia-Pacific cut-off points where the normal range is 18.5 to 22.9, and overweight begins at 23.0. This calculator follows those thresholds so it is more relevant for Malaysians.",
  },
  {
    q: "Apakah julat BMI yang dianggap sihat?",
    qEn: "What BMI range is considered healthy?",
    a: "Mengikut piawai Asia-Pasifik WHO yang digunakan kalkulator ini: di bawah 18.5 dianggap kurus, 18.5 hingga 22.9 adalah normal (sihat), 23.0 hingga 24.9 berat berlebihan, 25.0 hingga 29.9 obes kelas I, dan 30.0 ke atas obes kelas II. Julat sihat yang disasarkan ialah 18.5 hingga 22.9.",
    aEn: "Under the WHO Asia-Pacific standard used by this calculator: below 18.5 is underweight, 18.5 to 22.9 is normal (healthy), 23.0 to 24.9 is overweight, 25.0 to 29.9 is obese class I, and 30.0 and above is obese class II. The targeted healthy range is 18.5 to 22.9.",
  },
  {
    q: "Adakah BMI tepat untuk semua orang?",
    qEn: "Is BMI accurate for everyone?",
    a: "BMI ialah panduan umum dan bukan diagnosis. Ia tidak membezakan antara jisim otot dan lemak, jadi atlet atau individu berotot mungkin mempunyai BMI tinggi walaupun lemak badan rendah. Ia juga kurang sesuai untuk kanak-kanak, wanita hamil dan warga emas. Rujuk profesional kesihatan untuk penilaian yang lebih menyeluruh.",
    aEn: "BMI is a general guide, not a diagnosis. It does not distinguish between muscle and fat mass, so athletes or muscular individuals may have a high BMI despite low body fat. It is also less suitable for children, pregnant women and the elderly. Consult a health professional for a more complete assessment.",
  },
  {
    q: "Berapa berat ideal saya mengikut tinggi?",
    qEn: "What is my ideal weight for my height?",
    a: "Berat ideal dianggarkan dengan mendarabkan julat BMI sihat (18.5 hingga 22.9) dengan tinggi (m) kuasa dua. Kalkulator ini memaparkan julat berat ideal anda secara automatik dan memberitahu berapa kilogram yang perlu dinaikkan atau diturunkan untuk mencapai julat tersebut.",
    aEn: "Ideal weight is estimated by multiplying the healthy BMI range (18.5 to 22.9) by your height (m) squared. This calculator automatically displays your ideal weight range and tells you how many kilograms you need to gain or lose to reach it.",
  },
];
