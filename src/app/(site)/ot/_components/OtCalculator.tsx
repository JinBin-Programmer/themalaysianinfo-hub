"use client";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

function RM(n: number) { return n.toLocaleString("en-MY", { minimumFractionDigits: 2, maximumFractionDigits: 2 }); }

export default function OtCalculator() {
  const { lang } = useLanguage();
  const [salary, setSalary] = useState("");
  const [normalHours, setNormalHours] = useState(8);
  const [workDays, setWorkDays] = useState(5);
  const [ordinaryHours, setOrdinaryHours] = useState("");
  const [restHours, setRestHours] = useState("");
  const [phHours, setPhHours] = useState("");
  const [result, setResult] = useState<{
    hourlyRate: number; dailyRate: number;
    ordinaryPay: number; restPay: number; phPay: number; totalOT: number;
  } | null>(null);

  const t = {
    bm: {
      title: "⏰ Kalkulator Kerja Lebih Masa",
      subtitle: "Kira bayaran OT Malaysia mengikut Akta Kerja 1955",
      salaryLabel: "Gaji Pokok Bulanan (RM)",
      normalHoursLabel: "Jam Kerja Biasa Sehari",
      workDaysLabel: "Hari Kerja Seminggu",
      ordinaryLabel: "Jam OT — Hari Biasa (1.5×)",
      restLabel: "Jam OT — Hari Rehat (2×)",
      phLabel: "Jam OT — Cuti Umum (3×)",
      calcBtn: "Kira OT",
      hourlyRate: "Kadar Sejam", dailyRate: "Kadar Sehari",
      ordinaryPay: "OT Hari Biasa (1.5×)", restPay: "OT Hari Rehat (2×)", phPay: "OT Cuti Umum (3×)",
      totalOT: "Jumlah OT",
      ruleTitle: "Kadar OT (Akta Kerja 1955)",
      ordinary: "Hari Biasa", rest: "Hari Rehat", ph: "Cuti Umum",
      disclaimer: "Anggaran berdasarkan Akta Kerja 1955. Syarat mungkin berbeza mengikut kontrak.",
    },
    en: {
      title: "⏰ Overtime Pay Calculator",
      subtitle: "Calculate Malaysia OT pay under Employment Act 1955",
      salaryLabel: "Basic Monthly Salary (RM)",
      normalHoursLabel: "Normal Working Hours per Day",
      workDaysLabel: "Working Days per Week",
      ordinaryLabel: "OT Hours — Ordinary Day (1.5×)",
      restLabel: "OT Hours — Rest Day (2×)",
      phLabel: "OT Hours — Public Holiday (3×)",
      calcBtn: "Calculate OT",
      hourlyRate: "Hourly Rate", dailyRate: "Daily Rate",
      ordinaryPay: "OT Ordinary Day (1.5×)", restPay: "OT Rest Day (2×)", phPay: "OT Public Holiday (3×)",
      totalOT: "Total OT Pay",
      ruleTitle: "OT Rates (Employment Act 1955)",
      ordinary: "Ordinary Day", rest: "Rest Day", ph: "Public Holiday",
      disclaimer: "Estimate based on Employment Act 1955. Conditions may vary by employment contract.",
    },
  };
  const s = t[lang];

  const calculate = () => {
    const sal = parseFloat(salary) || 0;
    if (sal <= 0) return;
    // EA 1955: daily rate = monthly salary / 26; hourly rate = daily rate / normal hours
    const dailyRate = sal / 26;
    const hourlyRate = dailyRate / normalHours;
    const ordH = parseFloat(ordinaryHours) || 0;
    const restH = parseFloat(restHours) || 0;
    const phH = parseFloat(phHours) || 0;
    const ordinaryPay = ordH * hourlyRate * 1.5;
    const restPay = restH * hourlyRate * 2;
    const phPay = phH * hourlyRate * 3;
    setResult({ hourlyRate, dailyRate, ordinaryPay, restPay, phPay, totalOT: ordinaryPay + restPay + phPay });
  };

  const inp = (label: string, value: string, onChange: (v: string) => void, placeholder = "0") => (
    <div>
      <label className="text-xs text-white/50 block mb-1">{label}</label>
      <input type="number" value={value} onChange={e => onChange(e.target.value)} placeholder={placeholder}
        className="w-full bg-white/10 border border-white/20 text-white rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-yellow-400" />
    </div>
  );

  return (
    <div className="max-w-2xl mx-auto px-4 pt-10 pb-16 space-y-6">
      <div className="text-center space-y-2 animate-in">
        <h1 className="text-3xl font-black text-white">{s.title}</h1>
        <p className="text-white/50 text-sm">{s.subtitle}</p>
      </div>

      <div className="card-glass rounded-2xl p-5 space-y-4 animate-in delay-1">
        {inp(s.salaryLabel, salary, setSalary, "3000")}
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="text-xs text-white/50 block mb-1">{s.normalHoursLabel}</label>
            <select value={normalHours} onChange={e => setNormalHours(parseInt(e.target.value))}
              className="w-full bg-white/10 border border-white/20 text-white rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-yellow-400">
              {[7,8,9,10].map(h => <option key={h} value={h}>{h} {lang==="bm"?"jam":"hrs"}</option>)}
            </select>
          </div>
          <div>
            <label className="text-xs text-white/50 block mb-1">{s.workDaysLabel}</label>
            <select value={workDays} onChange={e => setWorkDays(parseInt(e.target.value))}
              className="w-full bg-white/10 border border-white/20 text-white rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-yellow-400">
              {[5,5.5,6].map(d => <option key={d} value={d}>{d} {lang==="bm"?"hari":"days"}</option>)}
            </select>
          </div>
        </div>
        <div className="border-t border-white/10 pt-3 space-y-3">
          {inp(s.ordinaryLabel, ordinaryHours, setOrdinaryHours)}
          {inp(s.restLabel, restHours, setRestHours)}
          {inp(s.phLabel, phHours, setPhHours)}
        </div>
        <button onClick={calculate}
          className="w-full py-4 rounded-2xl bg-yellow-500 hover:bg-yellow-400 text-black font-black text-lg transition-colors">
          {s.calcBtn}
        </button>
      </div>

      {result && (
        <div className="space-y-3 animate-in">
          <div className="card-glass rounded-2xl p-6 text-center">
            <div className="text-white/40 text-sm mb-1">{s.totalOT}</div>
            <div className="text-yellow-400 font-black text-4xl">RM {RM(result.totalOT)}</div>
          </div>
          <div className="card-glass rounded-2xl p-5 space-y-3">
            {[
              { label: s.hourlyRate, value: `RM ${RM(result.hourlyRate)}` },
              { label: s.dailyRate, value: `RM ${RM(result.dailyRate)}` },
              { label: s.ordinaryPay, value: `RM ${RM(result.ordinaryPay)}`, color: "text-blue-400" },
              { label: s.restPay, value: `RM ${RM(result.restPay)}`, color: "text-orange-400" },
              { label: s.phPay, value: `RM ${RM(result.phPay)}`, color: "text-red-400" },
            ].map((row, i) => (
              <div key={i} className="flex justify-between text-sm">
                <span className="text-white/50">{row.label}</span>
                <span className={`font-bold ${row.color ?? "text-white"}`}>{row.value}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="card-glass rounded-2xl p-5 animate-in delay-2">
        <h2 className="text-white font-bold text-sm mb-3">{s.ruleTitle}</h2>
        <div className="space-y-2 text-sm">
          {[[s.ordinary,"1.5×","Kadar sejam × 1.5","bg-blue-500/10 border-blue-500/20"],
            [s.rest,"2×","Kadar sejam × 2","bg-orange-500/10 border-orange-500/20"],
            [s.ph,"3×","Kadar sejam × 3","bg-red-500/10 border-red-500/20"]].map(([day,mult,formula,bg],i) => (
            <div key={i} className={`${bg} border rounded-xl p-3 flex justify-between items-center`}>
              <div><div className="text-white/70 font-medium">{day}</div><div className="text-white/30 text-xs">{formula}</div></div>
              <div className="text-yellow-400 font-black text-xl">{mult}</div>
            </div>
          ))}
        </div>
        <p className="text-white/30 text-xs mt-3">{lang==="bm"?"Kadar harian = Gaji ÷ 26 · Kadar sejam = Kadar harian ÷ jam kerja biasa":"Daily rate = Salary ÷ 26 · Hourly rate = Daily rate ÷ normal hours"}</p>
      </div>
      <p className="text-white/30 text-xs text-center">{s.disclaimer}</p>
    </div>
  );
}
