"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { FAQ } from "../_lib/faq";

const CONTENT = {
  bm: {
    title: "Panduan Penukar Unit",
    paras: [
      "Penukar Unit ialah alat harian yang sangat berguna untuk sesiapa sahaja yang perlu menukar nilai ukuran antara sistem yang berbeza. Di Malaysia, kita sering berdepan dengan campuran unit metrik dan unit imperial — resipi mungkin menggunakan cawan dan sudu, spesifikasi kereta menggunakan kilometer, manakala perabot atau skrin TV sering dilabel dalam inci. Alat ini membolehkan anda menukar dengan pantas antara panjang, berat, suhu, isipadu dan luas tanpa perlu mengingati formula.",
      "Cara menggunakannya sangat mudah. Mula-mula, pilih kategori ukuran yang anda perlukan, seperti Panjang atau Berat. Kemudian masukkan nilai yang ingin ditukar dalam kotak input. Pilih unit asal di bahagian 'Dari' dan unit sasaran di bahagian 'Kepada'. Hasil penukaran akan dipaparkan serta-merta dalam kad besar di bawah, dan butang tukar (⇄) membolehkan anda menukar arah penukaran dengan satu klik.",
      "Di sebalik tabir, kebanyakan penukaran berfungsi dengan menukar nilai anda kepada satu 'unit asas' bagi setiap kategori, kemudian menukar dari unit asas itu kepada unit yang anda mahukan. Sebagai contoh, dalam kategori Panjang, meter digunakan sebagai unit asas: satu inci ialah 0.0254 meter dan satu kaki ialah 0.3048 meter. Faktor penukaran ini adalah piawai antarabangsa, jadi hasilnya konsisten dan boleh dipercayai untuk kegunaan harian.",
      "Suhu sedikit berbeza kerana skala Celsius, Fahrenheit dan Kelvin tidak berkongsi titik sifar yang sama. Oleh itu, penukaran suhu menggunakan formula penambahan dan pendaraban, bukan sekadar satu faktor. Contohnya, untuk menukar Celsius kepada Fahrenheit, kita darab dengan 9/5 dan tambah 32; untuk Kelvin, kita tambah 273.15 kepada nilai Celsius. Alat ini mengendalikan formula ini secara automatik supaya anda tidak perlu mengiranya sendiri.",
      "Bagi pengguna di Malaysia, kategori Luas amat berguna untuk urusan tanah dan hartanah. Saiz tanah sering dinyatakan dalam ekar atau hektar, manakala saiz rumah dan ruang lantai biasanya dalam kaki persegi atau meter persegi. Satu ekar bersamaan kira-kira 4046.86 meter persegi, dan satu hektar ialah 10,000 meter persegi. Dengan alat ini, anda boleh membandingkan saiz hartanah dengan cepat sebelum membuat keputusan.",
      "Jadual 'Semua Penukaran' di halaman ini memaparkan nilai anda yang ditukar kepada setiap unit dalam kategori yang dipilih secara serentak. Ini menjimatkan masa apabila anda perlu melihat beberapa penukaran sekaligus — contohnya, melihat berapa banyak gram, paun dan auns yang bersamaan dengan satu kilogram. Gunakan alat ini secara percuma untuk kerja sekolah, dapur, projek DIY, perniagaan atau sebarang keperluan pengukuran harian.",
    ],
  },
  en: {
    title: "Unit Converter Guide",
    paras: [
      "The Unit Converter is a handy everyday tool for anyone who needs to convert measurement values between different systems. In Malaysia we constantly deal with a mix of metric and imperial units — recipes may use cups and spoons, car specifications use kilometres, while furniture or TV screens are often labelled in inches. This tool lets you quickly convert between length, weight, temperature, volume and area without having to memorise any formulas.",
      "Using it is very simple. First, choose the measurement category you need, such as Length or Weight. Then enter the value you want to convert in the input box. Pick the original unit under 'From' and the target unit under 'To'. The converted result appears instantly in the large card below, and the swap button (⇄) lets you reverse the conversion direction with a single click.",
      "Behind the scenes, most conversions work by converting your value into a single 'base unit' for each category, then converting from that base unit to the unit you want. For example, in the Length category, the metre is used as the base unit: one inch is 0.0254 metres and one foot is 0.3048 metres. These conversion factors are international standards, so results are consistent and reliable for everyday use.",
      "Temperature is slightly different because the Celsius, Fahrenheit and Kelvin scales do not share the same zero point. As a result, temperature conversion uses addition and multiplication formulas rather than a single factor. For instance, to convert Celsius to Fahrenheit, we multiply by 9/5 and add 32; for Kelvin, we add 273.15 to the Celsius value. This tool handles these formulas automatically so you never have to calculate them yourself.",
      "For users in Malaysia, the Area category is especially useful for land and property matters. Land sizes are often given in acres or hectares, while house and floor sizes are usually in square feet or square metres. One acre equals about 4046.86 square metres, and one hectare is 10,000 square metres. With this tool you can quickly compare property sizes before making a decision.",
      "The 'All Conversions' table on this page shows your value converted into every unit in the selected category at once. This saves time when you need to see several conversions together — for example, seeing how many grams, pounds and ounces are equivalent to one kilogram. Use this tool free of charge for schoolwork, the kitchen, DIY projects, business, or any everyday measurement need.",
    ],
  },
};

export default function KonversiArticle() {
  const { lang } = useLanguage();
  const c = CONTENT[lang];

  return (
    <div className="space-y-6">
      <article className="card-glass rounded-2xl p-6 space-y-4">
        <h2 className="text-xl font-bold text-white">{c.title}</h2>
        {c.paras.map((p, i) => (
          <p key={i} className="text-sm text-white/65 leading-relaxed">{p}</p>
        ))}
      </article>

      <div className="card-glass rounded-2xl p-6 space-y-4">
        <h2 className="text-xl font-bold text-white">
          {lang === "bm" ? "Soalan Lazim (FAQ)" : "Frequently Asked Questions"}
        </h2>
        <div className="divide-y divide-white/10">
          {FAQ.map((f) => (
            <details key={f.qEn} className="group py-3">
              <summary className="cursor-pointer list-none flex items-start justify-between gap-3 text-white font-semibold text-sm">
                <span>{lang === "bm" ? f.q : f.qEn}</span>
                <span className="text-yellow-400 transition-transform group-open:rotate-45 shrink-0">+</span>
              </summary>
              <p className="text-sm text-white/55 leading-relaxed mt-2">
                {lang === "bm" ? f.a : f.aEn}
              </p>
            </details>
          ))}
        </div>
      </div>
    </div>
  );
}
