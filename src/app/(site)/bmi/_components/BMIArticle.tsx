"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { BMI_FAQ } from "../_lib/faq";

const CONTENT = {
  bm: {
    title: "Panduan Kalkulator BMI Malaysia",
    paras: [
      "Indeks Jisim Badan (BMI) ialah salah satu ukuran kesihatan yang paling mudah dan paling kerap digunakan untuk menilai sama ada berat badan seseorang berada dalam julat yang sihat berbanding tingginya. Halaman ini menyediakan kalkulator BMI yang pantas dan percuma, direka khas mengikut piawai Asia-Pasifik Pertubuhan Kesihatan Sedunia (WHO) supaya keputusannya lebih relevan untuk rakyat Malaysia dan populasi Asia.",
      "Cara menggunakan kalkulator ini amat ringkas. Pilih sama ada unit metrik (kilogram dan sentimeter) atau imperial (paun dan kaki/inci), kemudian laraskan penggelongsor berat dan tinggi. Keputusan BMI anda dikira secara automatik dan dipaparkan serta-merta, bersama kategori berat badan, julat berat ideal mengikut tinggi anda, dan anggaran berapa kilogram yang perlu dinaikkan atau diturunkan untuk mencapai julat sihat tersebut.",
      "Pengiraan di sebalik kalkulator ini mudah difahami. BMI dikira dengan membahagikan berat dalam kilogram dengan kuasa dua tinggi dalam meter — iaitu berat ÷ (tinggi × tinggi). Sebagai contoh, seseorang yang beratnya 65 kilogram dan tingginya 1.65 meter mempunyai BMI 65 ÷ (1.65 × 1.65) yang bersamaan dengan kira-kira 23.9. Bagi pengguna unit imperial, kalkulator menukar paun kepada kilogram dan kaki/inci kepada sentimeter terlebih dahulu sebelum mengira.",
      "Apa yang membezakan kalkulator ini ialah penggunaan ambang Asia-Pasifik WHO. Kajian menunjukkan populasi Asia cenderung menghadapi risiko kesihatan seperti diabetes jenis 2 dan penyakit jantung pada BMI yang lebih rendah berbanding populasi Barat. Oleh itu, julat normal ditetapkan pada 18.5 hingga 22.9 (bukan sehingga 24.9 seperti piawai antarabangsa), berat berlebihan bermula pada 23.0, dan obes kelas I bermula pada 25.0. Skala warna pada halaman ini memaparkan kategori-kategori ini dengan jelas.",
      "Dalam konteks Malaysia, masalah berat badan berlebihan dan obesiti adalah cabaran kesihatan awam yang serius, dengan kadar obesiti negara antara yang tertinggi di Asia Tenggara. Kementerian Kesihatan Malaysia (KKM) menggalakkan rakyat memantau BMI mereka secara berkala sebagai langkah pencegahan, di samping pemakanan seimbang dan aktiviti fizikal yang mencukupi. Memeriksa BMI anda ialah satu langkah kecil tetapi bermakna untuk memahami status kesihatan anda.",
      "Walau bagaimanapun, penting untuk diingat bahawa BMI hanyalah panduan umum dan bukan diagnosis perubatan. Ia tidak membezakan antara jisim otot dan lemak, justeru atlet atau individu yang sangat berotot mungkin menunjukkan BMI tinggi walaupun peratusan lemak badan mereka rendah. BMI juga kurang sesuai untuk menilai kanak-kanak, wanita hamil, dan warga emas. Untuk penilaian kesihatan yang menyeluruh, sentiasa rujuk doktor atau pegawai kesihatan.",
    ],
  },
  en: {
    title: "Malaysia BMI Calculator Guide",
    paras: [
      "Body Mass Index (BMI) is one of the simplest and most widely used health measures for assessing whether a person's body weight falls within a healthy range relative to their height. This page provides a fast, free BMI calculator designed around the World Health Organization (WHO) Asia-Pacific standard, so the results are more relevant to Malaysians and Asian populations in general.",
      "Using the calculator is straightforward. Choose either metric units (kilograms and centimetres) or imperial units (pounds and feet/inches), then adjust the weight and height sliders. Your BMI result is calculated automatically and shown instantly, together with your weight category, your ideal weight range for your height, and an estimate of how many kilograms you would need to gain or lose to reach that healthy range.",
      "The calculation behind the tool is easy to follow. BMI is found by dividing weight in kilograms by the square of height in metres — that is, weight ÷ (height × height). For example, someone weighing 65 kilograms at 1.65 metres tall has a BMI of 65 ÷ (1.65 × 1.65), which equals about 23.9. For imperial users, the calculator first converts pounds to kilograms and feet/inches to centimetres before computing the result.",
      "What sets this calculator apart is its use of the WHO Asia-Pacific thresholds. Research shows that Asian populations tend to face health risks such as type 2 diabetes and heart disease at a lower BMI than Western populations. As a result, the normal range is set at 18.5 to 22.9 (rather than up to 24.9 as in the international standard), overweight begins at 23.0, and obese class I begins at 25.0. The colour scale on this page displays these categories clearly.",
      "In the Malaysian context, overweight and obesity are serious public health challenges, with the country's obesity rate among the highest in Southeast Asia. The Ministry of Health Malaysia (KKM) encourages people to monitor their BMI regularly as a preventive measure, alongside a balanced diet and sufficient physical activity. Checking your BMI is a small but meaningful step toward understanding your health status.",
      "That said, it is important to remember that BMI is only a general guide and not a medical diagnosis. It does not distinguish between muscle and fat mass, so athletes or very muscular individuals may show a high BMI even though their body fat percentage is low. BMI is also less suitable for assessing children, pregnant women, and the elderly. For a complete health assessment, always consult a doctor or health professional.",
    ],
  },
};

export default function BMIArticle() {
  const { lang } = useLanguage();
  const c = CONTENT[lang];

  return (
    <div className="space-y-6">
      <article className="card-glass rounded-2xl p-6 space-y-4">
        <h2 className="text-xl font-bold text-white">{c.title}</h2>
        {c.paras.map((p, i) => (
          <p key={i} className="text-[15px] text-white/80 leading-relaxed">{p}</p>
        ))}
      </article>

      <div className="card-glass rounded-2xl p-6 space-y-4">
        <h2 className="text-xl font-bold text-white">
          {lang === "bm" ? "Soalan Lazim (FAQ)" : "Frequently Asked Questions"}
        </h2>
        <div className="divide-y divide-white/10">
          {BMI_FAQ.map((f) => (
            <details key={f.qEn} className="group py-3">
              <summary className="cursor-pointer list-none flex items-start justify-between gap-3 text-white font-semibold text-sm">
                <span>{lang === "bm" ? f.q : f.qEn}</span>
                <span className="text-yellow-400 transition-transform group-open:rotate-45 shrink-0">+</span>
              </summary>
              <p className="text-[15px] text-white/75 leading-relaxed mt-2">
                {lang === "bm" ? f.a : f.aEn}
              </p>
            </details>
          ))}
        </div>
      </div>
    </div>
  );
}
