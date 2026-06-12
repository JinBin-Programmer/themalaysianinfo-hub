"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { FAQ } from "../_lib/faq";

const CONTENT = {
  bm: {
    title: "Panduan Semak Nombor IC (MyKad) Malaysia",
    paras: [
      "Nombor kad pengenalan (IC) ialah pengecam unik 12 digit yang dimiliki oleh setiap warganegara dan pemastautin tetap Malaysia melalui MyKad. Walaupun ia kelihatan seperti satu siri nombor rawak, setiap bahagian membawa maksud tertentu. Alat Semak IC ini membantu anda membaca maklumat yang tersembunyi di dalam nombor itu — tarikh lahir, umur semasa, negeri tempat lahir dan jantina — dalam beberapa saat sahaja, tanpa perlu mengira secara manual.",
      "Struktur nombor IC dibahagikan kepada tiga bahagian. Enam digit pertama mewakili tarikh lahir dalam format YYMMDD (tahun, bulan, hari). Dua digit seterusnya ialah kod tempat lahir, yang biasanya merujuk kepada negeri atau wilayah persekutuan di mana pemegang kad dilahirkan, atau kod khas bagi mereka yang dilahirkan di luar negara. Empat digit terakhir pula ialah nombor siri unik yang dijana oleh Jabatan Pendaftaran Negara, dan digit terakhir sekali menunjukkan jantina — ganjil untuk lelaki dan genap untuk perempuan.",
      "Untuk menggunakan alat ini, taipkan nombor IC 12 digit anda ke dalam kotak input. Alat akan menambah tanda sengkang secara automatik mengikut format rasmi (contohnya 901231-14-5678) supaya lebih mudah dibaca. Apabila anda menekan butang Semak IC, alat akan mengasingkan setiap bahagian nombor dan memaparkan keputusan dalam kad-kad berasingan. Jika nombor yang dimasukkan tidak lengkap atau tidak sah, satu mesej ralat akan muncul supaya anda boleh menyemak semula.",
      "Pengiraan umur dilakukan dengan membandingkan tarikh lahir yang tersirat dengan tarikh hari ini. Oleh kerana IC hanya menyimpan dua digit untuk tahun, alat ini menggunakan logik mudah: jika nilai dua digit tahun itu kurang atau sama dengan tahun semasa, ia dianggap tahun 2000-an; jika lebih besar, ia dianggap tahun 1900-an. Pendekatan ini berfungsi dengan baik untuk majoriti pemegang IC, walaupun bagi kes yang sangat jarang ia mungkin memerlukan pertimbangan tambahan.",
      "Kod negeri dalam nombor IC amat berguna untuk mengenali tempat kelahiran. Kod 01 hingga 16 mewakili negeri-negeri dan wilayah persekutuan, seperti 01 untuk Johor, 10 untuk Selangor, dan 14 untuk Wilayah Persekutuan Kuala Lumpur. Terdapat juga kod khas seperti 71, 72 dan 74 ke atas yang menandakan kelahiran di luar negara atau status warganegara tertentu. Alat ini memaparkan senarai rujukan kod negeri supaya anda dapat memahami maksud setiap kod.",
      "Privasi anda dijaga sepenuhnya. Semua pemprosesan berlaku terus dalam pelayar pada peranti anda — tiada nombor IC dihantar ke pelayan, disimpan, atau dikongsi dengan mana-mana pihak. Sebaik sahaja anda menutup halaman, maklumat itu hilang. Alat ini hanya membaca maklumat yang sememangnya terkandung dalam struktur nombor IC dan tidak mengakses sebarang pangkalan data peribadi.",
    ],
  },
  en: {
    title: "Guide to Checking a Malaysian IC (MyKad) Number",
    paras: [
      "The identity card (IC) number is a unique 12-digit identifier held by every Malaysian citizen and permanent resident through the MyKad. Although it looks like a random string of numbers, each part carries a specific meaning. This IC Checker tool helps you read the information hidden inside the number — birth date, current age, state of birth and gender — in just a few seconds, with no manual calculation needed.",
      "The IC number is split into three sections. The first six digits represent the birth date in YYMMDD format (year, month, day). The next two digits are the place-of-birth code, which usually refers to the state or federal territory where the holder was born, or a special code for those born abroad. The final four digits are a unique serial number issued by the National Registration Department, and the very last digit indicates gender — odd for male and even for female.",
      "To use this tool, type your 12-digit IC number into the input box. The tool automatically adds dashes following the official format (for example 901231-14-5678) so the number is easier to read. When you press the Decode IC button, the tool separates each part of the number and displays the result in individual cards. If the number entered is incomplete or invalid, an error message appears so you can re-check it.",
      "Age is calculated by comparing the implied birth date with today's date. Because the IC stores only two digits for the year, the tool uses a simple rule: if the two-digit year value is at or below the current year, it is treated as a 2000s year; if it is larger, it is treated as a 1900s year. This approach works well for the vast majority of IC holders, although in very rare cases it may need extra judgement.",
      "The state code in the IC number is very useful for identifying place of birth. Codes 01 to 16 represent the states and federal territories, such as 01 for Johor, 10 for Selangor, and 14 for the Federal Territory of Kuala Lumpur. There are also special codes such as 71, 72 and 74 and above that mark birth abroad or certain citizenship statuses. The tool shows a reference list of state codes so you can understand what each code means.",
      "Your privacy is fully protected. All processing happens directly in the browser on your device — no IC number is sent to a server, stored, or shared with anyone. As soon as you close the page, the information is gone. The tool only reads information that is already encoded in the structure of the IC number and does not access any personal database.",
    ],
  },
};

export default function IcArticle() {
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
