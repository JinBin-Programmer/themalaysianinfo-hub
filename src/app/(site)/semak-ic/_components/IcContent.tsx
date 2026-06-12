"use client";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import IcArticle from "./IcArticle";

const STATE_MAP: Record<string, string> = {
  "01": "Johor", "02": "Kedah", "03": "Kelantan", "04": "Melaka",
  "05": "Negeri Sembilan", "06": "Pahang", "07": "Pulau Pinang", "08": "Perak",
  "09": "Perlis", "10": "Selangor", "11": "Terengganu", "12": "Sabah",
  "13": "Sarawak", "14": "W.P. Kuala Lumpur", "15": "W.P. Labuan", "16": "W.P. Putrajaya",
  "71": "Semenanjung (Lahir Luar Negara)", "72": "Sabah/Sarawak (Lahir Luar Negara)",
  "74": "Semenanjung (Warganegara Baru)", "82": "Sabah (Warganegara Baru)",
  "83": "Sarawak (Warganegara Baru)",
};

interface IcResult {
  birthDate: string;
  age: number;
  gender: string;
  genderEn: string;
  state: string;
  zodiac: string;
  isValid: boolean;
}

function getZodiac(month: number, day: number): string {
  if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) return "Aries ♈";
  if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) return "Taurus ♉";
  if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) return "Gemini ♊";
  if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) return "Cancer ♋";
  if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) return "Leo ♌";
  if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) return "Virgo ♍";
  if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) return "Libra ♎";
  if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) return "Scorpio ♏";
  if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) return "Sagittarius ♐";
  if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) return "Capricorn ♑";
  if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) return "Aquarius ♒";
  return "Pisces ♓";
}

function decodeIC(ic: string): IcResult | null {
  const clean = ic.replace(/[-\s]/g, "");
  if (!/^\d{12}$/.test(clean)) return null;

  const yy = parseInt(clean.slice(0, 2));
  const mm = parseInt(clean.slice(2, 4));
  const dd = parseInt(clean.slice(4, 6));
  const ss = clean.slice(6, 8);
  const lastDigit = parseInt(clean[11]);

  if (mm < 1 || mm > 12 || dd < 1 || dd > 31) return null;

  const currentYY = new Date().getFullYear() % 100;
  const year = yy <= currentYY ? 2000 + yy : 1900 + yy;

  const birthDate = new Date(year, mm - 1, dd);
  if (birthDate.getMonth() !== mm - 1) return null; // invalid date like Feb 30

  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const mDiff = today.getMonth() - birthDate.getMonth();
  if (mDiff < 0 || (mDiff === 0 && today.getDate() < birthDate.getDate())) age--;

  const monthsBm = ["Jan", "Feb", "Mac", "Apr", "Mei", "Jun", "Jul", "Ogos", "Sep", "Okt", "Nov", "Dis"];
  const birthStr = `${String(dd).padStart(2, "0")} ${monthsBm[mm - 1]} ${year}`;

  const gender = lastDigit % 2 === 1 ? "Lelaki" : "Perempuan";
  const genderEn = lastDigit % 2 === 1 ? "Male" : "Female";
  const state = STATE_MAP[ss] || "Tidak diketahui / Unknown";
  const zodiac = getZodiac(mm, dd);

  return { birthDate: birthStr, age, gender, genderEn, state, zodiac, isValid: true };
}

export default function IcContent() {
  const { lang } = useLanguage();
  const [input, setInput] = useState("");
  const [result, setResult] = useState<IcResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const t = {
    bm: {
      title: "🪪 Semak Nombor IC",
      subtitle: "Decode nombor MyKad anda — tarikh lahir, umur, negeri & jantina",
      placeholder: "Masukkan nombor IC (cth: 901231-14-5678)",
      check: "Semak IC",
      birthDate: "Tarikh Lahir", age: "Umur", gender: "Jantina", state: "Negeri Lahir", zodiac: "Zodiak",
      years: "tahun",
      invalidIc: "Nombor IC tidak sah. Pastikan 12 digit yang betul.",
      disclaimer: "⚠️ Alat ini hanya membaca maklumat dari nombor IC sahaja. Tiada data peribadi disimpan atau dihantar.",
      howTitle: "Bagaimana IC Malaysia dibina?",
      howDesc: "Nombor IC 12 digit terdiri dari: 6 digit tarikh lahir (YYMMDD) + 2 digit kod negeri + 4 digit unik (digit terakhir ganjil = lelaki, genap = perempuan).",
      example: "Contoh: 901231-14-5678 → Lahir 31 Dis 1990, WP KL, Lelaki",
    },
    en: {
      title: "🪪 IC Number Decoder",
      subtitle: "Decode your MyKad number — birth date, age, state & gender",
      placeholder: "Enter IC number (e.g. 901231-14-5678)",
      check: "Decode IC",
      birthDate: "Birth Date", age: "Age", gender: "Gender", state: "Birth State", zodiac: "Zodiac",
      years: "years old",
      invalidIc: "Invalid IC number. Please enter a valid 12-digit IC.",
      disclaimer: "⚠️ This tool reads information from your IC number only. No personal data is stored or transmitted.",
      howTitle: "How is a Malaysian IC structured?",
      howDesc: "The 12-digit IC consists of: 6-digit birth date (YYMMDD) + 2-digit state code + 4 unique digits (last digit odd = male, even = female).",
      example: "Example: 901231-14-5678 → Born 31 Dec 1990, WP KL, Male",
    },
  };
  const s = t[lang];

  const handleCheck = () => {
    setError(null);
    setResult(null);
    const res = decodeIC(input);
    if (!res) {
      setError(s.invalidIc);
    } else {
      setResult(res);
    }
  };

  const formatInput = (v: string) => {
    const digits = v.replace(/\D/g, "").slice(0, 12);
    if (digits.length > 8) return `${digits.slice(0,6)}-${digits.slice(6,8)}-${digits.slice(8)}`;
    if (digits.length > 6) return `${digits.slice(0,6)}-${digits.slice(6)}`;
    return digits;
  };

  return (
    <div className="max-w-2xl mx-auto px-4 pt-10 pb-16 space-y-6">
      {/* Hero */}
      <div className="text-center space-y-2 animate-in">
        <h1 className="text-3xl font-black text-white">{s.title}</h1>
        <p className="text-white/50 text-sm">{s.subtitle}</p>
      </div>

      {/* Input */}
      <div className="card-glass rounded-2xl p-6 space-y-4 animate-in delay-1">
        <input
          type="text"
          inputMode="numeric"
          value={input}
          onChange={e => setInput(formatInput(e.target.value))}
          placeholder={s.placeholder}
          onKeyDown={e => e.key === "Enter" && handleCheck()}
          className="w-full bg-white/10 border border-white/20 text-white text-xl font-mono rounded-xl px-4 py-4 placeholder:text-white/30 focus:outline-none focus:border-yellow-400 text-center tracking-widest"
        />
        <button onClick={handleCheck}
          className="w-full py-4 rounded-xl bg-yellow-500 hover:bg-yellow-400 text-black font-black text-lg transition-colors">
          {s.check}
        </button>
        {error && <p className="text-red-400 text-sm text-center">{error}</p>}
      </div>

      {/* Result */}
      {result && (
        <div className="space-y-4 animate-in">
          <div className="grid grid-cols-2 gap-3">
            {[
              { label: s.birthDate, value: result.birthDate, icon: "🎂" },
              { label: s.age, value: `${result.age} ${s.years}`, icon: "🎯" },
              { label: s.gender, value: `${result.gender} / ${result.genderEn}`, icon: result.gender === "Lelaki" ? "👨" : "👩" },
              { label: s.state, value: result.state, icon: "📍" },
              { label: s.zodiac, value: result.zodiac, icon: "⭐" },
            ].map((item, i) => (
              <div key={i} className={`card-glass rounded-2xl p-4 ${i === 4 ? "col-span-2" : ""}`}>
                <div className="text-white/40 text-xs mb-1">{item.icon} {item.label}</div>
                <div className="text-white font-bold text-sm">{item.value}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Disclaimer */}
      <div className="card-glass rounded-2xl p-4 animate-in delay-2">
        <p className="text-white/40 text-xs">{s.disclaimer}</p>
      </div>

      {/* How it works */}
      <div className="card-glass rounded-2xl p-5 space-y-2 animate-in delay-3">
        <h2 className="text-white font-bold">{s.howTitle}</h2>
        <p className="text-white/50 text-sm leading-relaxed">{s.howDesc}</p>
        <p className="text-yellow-400/70 text-xs mt-2">{s.example}</p>
      </div>

      {/* State codes reference */}
      <div className="card-glass rounded-2xl p-5 animate-in delay-4">
        <h2 className="text-white font-bold text-sm mb-3">
          {lang === "bm" ? "Kod Negeri dalam IC" : "State Codes in IC"}
        </h2>
        <div className="grid grid-cols-2 gap-1 text-xs">
          {Object.entries(STATE_MAP).slice(0, 16).map(([code, name]) => (
            <div key={code} className="flex gap-2 text-white/50">
              <span className="text-yellow-400/70 font-mono w-6">{code}</span>
              <span>{name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Rich editorial content + FAQ */}
      <IcArticle />
    </div>
  );
}
