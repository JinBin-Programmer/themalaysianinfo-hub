"use client";

import { useState, useMemo, useRef, useEffect } from "react";

type Lang = "bm" | "en";
type CategoryId = "all" | "prices" | "finance" | "calculator" | "lookup" | "weather" | "tools";

interface Tool {
  id: string;
  icon: string;
  name: string;
  nameEn: string;
  desc: string;
  descEn: string;
  url: string;
  category: Exclude<CategoryId, "all">;
  badge?: string;
  badgeEn?: string;
  hot?: boolean;
}

const TOOLS: Tool[] = [
  // ── Harga Terkini ──
  {
    id: "petrol", icon: "⛽",
    name: "Harga Petrol", nameEn: "Petrol Price",
    desc: "RON95, RON97 & Diesel dikemas kini setiap Khamis", descEn: "RON95, RON97 & Diesel updated every Thursday",
    url: "https://petrol.merquri.com", category: "prices", badge: "TERKINI", badgeEn: "LIVE", hot: true,
  },
  {
    id: "gold", icon: "🥇",
    name: "Harga Emas", nameEn: "Gold Price",
    desc: "Harga emas 916 & 999 terkini di Malaysia", descEn: "Latest 916 & 999 gold price in Malaysia",
    url: "https://goldprice-malaysia.com", category: "prices", hot: true,
  },
  {
    id: "pepper", icon: "🌶️",
    name: "Harga Lada", nameEn: "Pepper Price",
    desc: "Kadar harga lada hitam & lada putih semasa", descEn: "Current black & white pepper market prices",
    url: "https://pepper.merquri.com", category: "prices",
  },

  // ── Kewangan ──
  {
    id: "kwsp", icon: "💰",
    name: "KWSP / EPF", nameEn: "EPF Calculator",
    desc: "Kira caruman KWSP majikan & pekerja", descEn: "Calculate employer & employee EPF contributions",
    url: "https://kwsp.themalaysianinfo.online", category: "finance", hot: true,
  },
  {
    id: "gaji", icon: "💵",
    name: "Gaji Bersih", nameEn: "Net Salary",
    desc: "Kira gaji bersih selepas EPF, SOCSO & PCB", descEn: "Calculate take-home pay after EPF, SOCSO & PCB",
    url: "https://gaji.themalaysianinfo.online", category: "finance",
  },
  {
    id: "cukai", icon: "🧾",
    name: "Cukai Pendapatan", nameEn: "Income Tax",
    desc: "Kalkulator cukai pendapatan individu Malaysia", descEn: "Malaysia individual income tax calculator",
    url: "https://cukai.themalaysianinfo.online", category: "finance",
  },
  {
    id: "cukaijalan", icon: "🚗",
    name: "Cukai Jalan", nameEn: "Road Tax",
    desc: "Kira cukai jalan kenderaan berdasarkan cc enjin", descEn: "Calculate vehicle road tax by engine cc",
    url: "https://cukaijalan.themalaysianinfo.online", category: "finance",
  },
  {
    id: "zakat", icon: "🕌",
    name: "Kira Zakat", nameEn: "Zakat Calculator",
    desc: "Kalkulator zakat pendapatan, simpanan & emas", descEn: "Income, savings & gold zakat calculator",
    url: "https://zakat.themalaysianinfo.online", category: "finance",
  },
  {
    id: "ptptn", icon: "🎓",
    name: "Pinjaman PTPTN", nameEn: "PTPTN Loan",
    desc: "Kira jadual bayaran balik pinjaman PTPTN anda", descEn: "Calculate your PTPTN loan repayment schedule",
    url: "https://ptptn.themalaysianinfo.online", category: "finance",
  },
  {
    id: "rumah", icon: "🏠",
    name: "Pinjaman Rumah", nameEn: "Home Loan",
    desc: "Kalkulator pinjaman perumahan & ansuran bulanan", descEn: "Housing loan & monthly instalment calculator",
    url: "https://rumah.themalaysianinfo.online", category: "finance",
  },
  {
    id: "simpanan", icon: "🏦",
    name: "Kira Simpanan", nameEn: "Savings Calculator",
    desc: "Projeksikan pertumbuhan simpanan masa depan anda", descEn: "Project your future savings growth",
    url: "https://simpanan.themalaysianinfo.online", category: "finance",
  },
  {
    id: "ot", icon: "⏰",
    name: "Kira Overtime", nameEn: "OT Calculator",
    desc: "Kira bayaran kerja lebih masa mengikut akta", descEn: "Calculate overtime pay per Malaysian labour law",
    url: "https://ot.themalaysianinfo.online", category: "finance",
  },
  {
    id: "pinjaman", icon: "📊",
    name: "Kalkulator Pinjaman", nameEn: "Loan Calculator",
    desc: "Kira bayaran bulanan & jumlah faedah pinjaman", descEn: "Calculate monthly payments & total interest",
    url: "https://pinjaman.themalaysianinfo.online", category: "finance",
  },

  // ── Kalkulator ──
  {
    id: "bmi", icon: "⚖️",
    name: "Kira BMI", nameEn: "BMI Calculator",
    desc: "Semak indeks jisim badan & tafsiran berat badan", descEn: "Check your body mass index & weight status",
    url: "https://bmi.themalaysianinfo.online", category: "calculator",
  },
  {
    id: "umur", icon: "🎂",
    name: "Kira Umur", nameEn: "Age Calculator",
    desc: "Kira umur tepat dalam tahun, bulan & hari", descEn: "Calculate exact age in years, months & days",
    url: "https://umur.themalaysianinfo.online", category: "calculator",
  },
  {
    id: "diskaun", icon: "🏷️",
    name: "Kira Diskaun", nameEn: "Discount Calculator",
    desc: "Kira harga akhir & penjimatan selepas diskaun", descEn: "Calculate final price & savings after discount",
    url: "https://diskaun.themalaysianinfo.online", category: "calculator",
  },
  {
    id: "bil", icon: "🧮",
    name: "Kira Bil", nameEn: "Bill Calculator",
    desc: "Anggaran bil TNB & utiliti rumah anda", descEn: "Estimate your TNB electricity & home utility bills",
    url: "https://kirabill.themalaysianinfo.online", category: "calculator",
  },

  // ── Semakan ──
  {
    id: "plat", icon: "🚘",
    name: "Nombor Plat", nameEn: "Car Plate",
    desc: "Semak negeri & kawasan nombor plat kenderaan", descEn: "Check state & area of a vehicle plate number",
    url: "https://plat.themalaysianinfo.online", category: "lookup",
  },
  {
    id: "poskod", icon: "📮",
    name: "Semak Poskod", nameEn: "Postcode Lookup",
    desc: "Cari poskod sebarang kawasan di seluruh Malaysia", descEn: "Find postcode for any area across Malaysia",
    url: "https://poskod.themalaysianinfo.online", category: "lookup",
  },
  {
    id: "ic", icon: "🪪",
    name: "Semak IC", nameEn: "IC Checker",
    desc: "Semak tarikh lahir, negeri & jantina dari nombor IC", descEn: "Check birthdate, state & gender from IC number",
    url: "https://ic.themalaysianinfo.online", category: "lookup",
  },
  {
    id: "cuti", icon: "📅",
    name: "Cuti Umum", nameEn: "Public Holidays",
    desc: "Kalendar cuti umum Malaysia 2025 mengikut negeri", descEn: "Malaysia 2025 public holidays calendar by state",
    url: "https://cuti.themalaysianinfo.online", category: "lookup",
  },
  {
    id: "4d", icon: "🎰",
    name: "Keputusan 4D", nameEn: "4D Results",
    desc: "Semak keputusan loteri 4D Magnum, Toto & Damacai", descEn: "Check Magnum, Toto & Damacai 4D lottery results",
    url: "https://4d.themalaysianinfo.online", category: "lookup", hot: true,
  },

  // ── Cuaca & Solat ──
  {
    id: "weather", icon: "🌤️",
    name: "Cuaca Hari Ini", nameEn: "Today's Weather",
    desc: "Ramalan cuaca terkini semua negeri Malaysia", descEn: "Latest weather forecast for all Malaysian states",
    url: "https://www.weather-jinbin.site", category: "weather", badge: "LANGSUNG", badgeEn: "LIVE",
  },
  {
    id: "solat", icon: "🌙",
    name: "Waktu Solat", nameEn: "Prayer Times",
    desc: "Jadual waktu solat harian seluruh Malaysia", descEn: "Daily prayer times schedule across Malaysia",
    url: "https://solat.merquri.com", category: "weather", hot: true,
  },

  // ── Alatan ──
  {
    id: "tukaran", icon: "💱",
    name: "Tukaran Matawang", nameEn: "Currency Exchange",
    desc: "Kadar tukaran matawang ringgit terkini", descEn: "Latest Malaysian Ringgit exchange rates",
    url: "https://tukaran.themalaysianinfo.online", category: "tools",
  },
  {
    id: "konversi", icon: "📐",
    name: "Konversi Unit", nameEn: "Unit Converter",
    desc: "Tukar unit panjang, jisim, suhu, luas & lain-lain", descEn: "Convert length, mass, temperature, area & more",
    url: "https://konversi.themalaysianinfo.online", category: "tools",
  },
  {
    id: "tukar", icon: "📁",
    name: "Tukar Fail", nameEn: "File Converter",
    desc: "Tukar format fail PDF, gambar & dokumen dalam talian", descEn: "Convert PDF, image & document file formats online",
    url: "https://tukar.themalaysianinfo.online", category: "tools",
  },
];

interface Category {
  id: CategoryId;
  label: string;
  labelEn: string;
  icon: string;
  color: string;
  activeColor: string;
}

const CATEGORIES: Category[] = [
  { id: "all",        label: "Semua",         labelEn: "All",              icon: "🏠", color: "text-white/60",     activeColor: "text-white" },
  { id: "prices",     label: "Harga Terkini", labelEn: "Live Prices",      icon: "💹", color: "text-amber-400/70", activeColor: "text-amber-400" },
  { id: "finance",    label: "Kewangan",      labelEn: "Finance",          icon: "💰", color: "text-emerald-400/70", activeColor: "text-emerald-400" },
  { id: "calculator", label: "Kalkulator",    labelEn: "Calculators",      icon: "🧮", color: "text-blue-400/70",  activeColor: "text-blue-400" },
  { id: "lookup",     label: "Semakan",       labelEn: "Lookup",           icon: "🔍", color: "text-purple-400/70",activeColor: "text-purple-400" },
  { id: "weather",    label: "Cuaca & Solat", labelEn: "Weather & Prayer", icon: "🌤️", color: "text-sky-400/70",   activeColor: "text-sky-400" },
  { id: "tools",      label: "Alatan",        labelEn: "Tools",            icon: "🔧", color: "text-slate-400/70", activeColor: "text-slate-400" },
];

const CAT_STYLE: Record<string, {
  gradient: string; border: string; activeBorder: string;
  badgeBg: string; badgeText: string; dot: string; heading: string;
}> = {
  prices:     { gradient: "from-amber-500/10 to-orange-600/10",   border: "border-white/10",   activeBorder: "border-amber-500/40",   badgeBg: "bg-amber-500/20",   badgeText: "text-amber-300",   dot: "bg-amber-400",   heading: "text-amber-400" },
  finance:    { gradient: "from-emerald-500/10 to-green-700/10",  border: "border-white/10",   activeBorder: "border-emerald-500/40", badgeBg: "bg-emerald-500/20", badgeText: "text-emerald-300", dot: "bg-emerald-400", heading: "text-emerald-400" },
  calculator: { gradient: "from-blue-500/10 to-cyan-700/10",      border: "border-white/10",   activeBorder: "border-blue-500/40",    badgeBg: "bg-blue-500/20",    badgeText: "text-blue-300",    dot: "bg-blue-400",    heading: "text-blue-400" },
  lookup:     { gradient: "from-purple-500/10 to-violet-700/10",  border: "border-white/10",   activeBorder: "border-purple-500/40",  badgeBg: "bg-purple-500/20",  badgeText: "text-purple-300",  dot: "bg-purple-400",  heading: "text-purple-400" },
  weather:    { gradient: "from-sky-500/10 to-indigo-700/10",     border: "border-white/10",   activeBorder: "border-sky-500/40",     badgeBg: "bg-sky-500/20",     badgeText: "text-sky-300",     dot: "bg-sky-400",     heading: "text-sky-400" },
  tools:      { gradient: "from-slate-500/10 to-gray-700/10",     border: "border-white/10",   activeBorder: "border-slate-500/40",   badgeBg: "bg-slate-500/20",   badgeText: "text-slate-300",   dot: "bg-slate-400",   heading: "text-slate-400" },
};

function ToolCard({ tool, lang }: { tool: Tool; lang: Lang }) {
  const s = CAT_STYLE[tool.category];
  const name  = lang === "bm" ? tool.name   : tool.nameEn;
  const desc  = lang === "bm" ? tool.desc   : tool.descEn;
  const badge = lang === "bm" ? tool.badge  : tool.badgeEn;

  return (
    <a
      href={tool.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`tool-card group relative flex flex-col gap-3 bg-gradient-to-br ${s.gradient} border ${s.border} hover:${s.activeBorder} rounded-2xl p-5 cursor-pointer`}
    >
      {/* Hot indicator */}
      {tool.hot && (
        <span className="absolute top-3 right-3 flex gap-1 items-center">
          <span className={`w-1.5 h-1.5 rounded-full ${s.dot} animate-pulse`} />
        </span>
      )}

      {/* Icon + Badge */}
      <div className="flex items-start justify-between">
        <div className="w-11 h-11 rounded-xl bg-black/30 flex items-center justify-center text-2xl shrink-0">
          {tool.icon}
        </div>
        {badge && (
          <span className={`text-[10px] font-bold tracking-widest px-2 py-0.5 rounded-full ${s.badgeBg} ${s.badgeText} border border-current/20`}>
            {badge}
          </span>
        )}
      </div>

      {/* Name + Desc */}
      <div className="flex-1">
        <div className="font-bold text-white text-[15px] leading-snug mb-1.5">{name}</div>
        <div className="text-white/45 text-[13px] leading-relaxed line-clamp-2">{desc}</div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-1 border-t border-white/[0.06]">
        <span className={`text-[11px] font-semibold uppercase tracking-wider ${s.badgeText} opacity-70`}>
          {lang === "bm" ? "Percuma" : "Free"}
        </span>
        <span className="text-white/25 group-hover:text-white/60 transition-colors duration-200 text-base font-light">
          →
        </span>
      </div>
    </a>
  );
}

function CategorySection({ categoryId, tools, lang }: {
  categoryId: Exclude<CategoryId, "all">;
  tools: Tool[];
  lang: Lang;
}) {
  const cat = CATEGORIES.find(c => c.id === categoryId)!;
  const s   = CAT_STYLE[categoryId];

  return (
    <section className="mb-12">
      <div className="flex items-center gap-3 mb-5">
        <span className="text-xl">{cat.icon}</span>
        <h2 className={`text-lg font-bold ${s.heading}`}>
          {lang === "bm" ? cat.label : cat.labelEn}
        </h2>
        <span className="text-white/25 text-sm font-normal">
          · {tools.length} {lang === "bm" ? "alatan" : "tools"}
        </span>
        <div className="flex-1 h-px bg-white/[0.06]" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {tools.map(tool => <ToolCard key={tool.id} tool={tool} lang={lang} />)}
      </div>
    </section>
  );
}

export default function HubContent() {
  const [lang, setLang]   = useState<Lang>("bm");
  const [query, setQuery] = useState("");
  const [activeTab, setActiveTab] = useState<CategoryId>("all");
  const searchRef = useRef<HTMLInputElement>(null);

  const isSearching = query.trim().length > 0;

  const filteredTools = useMemo(() => {
    let tools = TOOLS;
    if (activeTab !== "all") tools = tools.filter(t => t.category === activeTab);
    if (isSearching) {
      const q = query.toLowerCase();
      tools = tools.filter(t =>
        t.name.toLowerCase().includes(q) ||
        t.nameEn.toLowerCase().includes(q) ||
        t.desc.toLowerCase().includes(q) ||
        t.descEn.toLowerCase().includes(q)
      );
    }
    return tools;
  }, [query, activeTab, isSearching]);

  const groupedTools = useMemo(() => {
    if (activeTab !== "all" || isSearching) return null;
    const order: Exclude<CategoryId, "all">[] = ["prices","finance","calculator","lookup","weather","tools"];
    const map: Record<string, Tool[]> = {};
    TOOLS.forEach(t => { if (!map[t.category]) map[t.category] = []; map[t.category].push(t); });
    return order.filter(id => map[id]).map(id => ({ id, tools: map[id] }));
  }, [activeTab, isSearching]);

  const handleTabClick = (id: CategoryId) => {
    setActiveTab(id);
    setQuery("");
  };

  // Stats
  const totalTools = TOOLS.length;
  const totalCats  = 6;

  return (
    <div className="min-h-screen flex flex-col">
      {/* ── Navbar ── */}
      <nav className="sticky top-0 z-50 bg-black/70 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center text-lg font-black text-white shadow-lg shadow-red-900/40">
              MY
            </div>
            <div>
              <div className="font-extrabold text-white text-base leading-tight tracking-tight">
                The Malaysian Info
              </div>
              <div className="text-white/35 text-[10px] leading-none font-normal">
                {lang === "bm" ? "Portal Maklumat Malaysia" : "Malaysia Information Hub"}
              </div>
            </div>
          </div>

          {/* Nav right */}
          <div className="flex items-center gap-3">
            {/* Search hint on mobile */}
            <button
              onClick={() => searchRef.current?.focus()}
              className="sm:hidden p-2 rounded-lg bg-white/8 hover:bg-white/12 text-white/60 transition-colors"
              aria-label="Search"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
              </svg>
            </button>

            {/* Language toggle */}
            <div className="flex bg-white/8 border border-white/10 rounded-full p-0.5 text-sm font-semibold">
              <button
                onClick={() => setLang("bm")}
                className={`px-3 py-1 rounded-full transition-all duration-200 ${lang === "bm" ? "bg-red-600 text-white shadow-sm" : "text-white/50 hover:text-white/80"}`}
              >
                BM
              </button>
              <button
                onClick={() => setLang("en")}
                className={`px-3 py-1 rounded-full transition-all duration-200 ${lang === "en" ? "bg-red-600 text-white shadow-sm" : "text-white/50 hover:text-white/80"}`}
              >
                EN
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* ── Hero ── */}
      <div className="hero-bg">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 pt-16 pb-20 text-center space-y-6">

          {/* Badge */}
          <div className="animate-fade-in-up inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-white/20 text-white/80 text-xs font-semibold px-4 py-1.5 rounded-full">
            <span className="w-2 h-2 rounded-full bg-red-400 animate-pulse inline-block" />
            {lang === "bm" ? "Portal Maklumat #1 Malaysia" : "Malaysia's #1 Information Portal"}
          </div>

          {/* Headline */}
          <div className="animate-fade-in-up delay-100 space-y-2">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight drop-shadow-2xl">
              {lang === "bm"
                ? <>Semua <span className="text-red-400">Maklumat</span> Malaysia<br />di Satu Tempat</>
                : <>All Malaysia <span className="text-red-400">Information</span><br />in One Place</>
              }
            </h1>
            <p className="text-white/55 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
              {lang === "bm"
                ? "Harga petrol, KWSP, cukai, waktu solat, kalkulator & lebih lagi — percuma untuk semua rakyat Malaysia."
                : "Petrol prices, EPF, tax, prayer times, calculators & more — free for all Malaysians."
              }
            </p>
          </div>

          {/* Search */}
          <div className="animate-fade-in-up delay-200 relative max-w-xl mx-auto">
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
              <svg className="w-5 h-5 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
              </svg>
            </div>
            <input
              ref={searchRef}
              type="search"
              value={query}
              onChange={e => { setQuery(e.target.value); if (activeTab !== "all") setActiveTab("all"); }}
              placeholder={lang === "bm" ? "Cari alatan, harga, kalkulator…" : "Search tools, prices, calculators…"}
              className="w-full bg-white/10 backdrop-blur-sm border border-white/20 focus:border-white/40 focus:bg-white/15 text-white placeholder:text-white/35 rounded-2xl pl-12 pr-5 py-4 text-base outline-none transition-all duration-200 shadow-xl"
            />
          </div>

          {/* Stats */}
          <div className="animate-fade-in-up delay-300 flex items-center justify-center gap-6 sm:gap-10 text-center">
            {[
              { value: totalTools, label: lang === "bm" ? "Alatan Percuma" : "Free Tools" },
              { value: totalCats,  label: lang === "bm" ? "Kategori"       : "Categories" },
              { value: "100%",     label: lang === "bm" ? "Percuma"        : "Free Forever" },
            ].map(s => (
              <div key={s.label}>
                <div className="text-2xl sm:text-3xl font-black text-white">{s.value}</div>
                <div className="text-white/40 text-xs sm:text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Body ── */}
      <div className="bg-[#0a0a0a] flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">

          {/* Category Tabs */}
          <div className="mb-8 -mx-4 sm:mx-0">
            <div className="flex items-center gap-1 overflow-x-auto scrollbar-hide px-4 sm:px-0 pb-1">
              {CATEGORIES.map(cat => {
                const active = activeTab === cat.id;
                const acol   = active ? cat.activeColor : cat.color;
                return (
                  <button
                    key={cat.id}
                    onClick={() => handleTabClick(cat.id)}
                    className={`flex items-center gap-1.5 whitespace-nowrap px-3.5 py-2 rounded-xl text-sm font-semibold transition-all duration-200 shrink-0 ${
                      active
                        ? "bg-white/12 border border-white/20 " + cat.activeColor
                        : "text-white/45 hover:text-white/70 hover:bg-white/6 border border-transparent"
                    }`}
                  >
                    <span>{cat.icon}</span>
                    <span>{lang === "bm" ? cat.label : cat.labelEn}</span>
                    {cat.id !== "all" && (
                      <span className={`text-[10px] font-normal opacity-60 ${acol}`}>
                        {TOOLS.filter(t => t.category === cat.id).length}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Search results or grouped/filtered grid */}
          {isSearching ? (
            <div>
              <p className="text-white/40 text-sm mb-6">
                {filteredTools.length === 0
                  ? (lang === "bm" ? "Tiada alatan dijumpai." : "No tools found.")
                  : (lang === "bm"
                    ? `${filteredTools.length} keputusan untuk "${query}"`
                    : `${filteredTools.length} result${filteredTools.length !== 1 ? "s" : ""} for "${query}"`)
                }
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {filteredTools.map(tool => <ToolCard key={tool.id} tool={tool} lang={lang} />)}
              </div>
            </div>
          ) : activeTab !== "all" ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {filteredTools.length === 0 ? (
                <p className="col-span-full text-white/30 text-sm">
                  {lang === "bm" ? "Tiada alatan dalam kategori ini." : "No tools in this category."}
                </p>
              ) : (
                filteredTools.map(tool => <ToolCard key={tool.id} tool={tool} lang={lang} />)
              )}
            </div>
          ) : (
            // Grouped "All" view
            groupedTools?.map(({ id, tools }) => (
              <CategorySection
                key={id}
                categoryId={id as Exclude<CategoryId, "all">}
                tools={tools}
                lang={lang}
              />
            ))
          )}
        </div>

        {/* ── CTA Banner ── */}
        <div className="border-t border-white/[0.06] bg-gradient-to-b from-transparent to-black/30">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 py-14 text-center space-y-4">
            <div className="text-3xl">🇲🇾</div>
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              {lang === "bm" ? "Dibuat untuk Rakyat Malaysia" : "Built for Malaysians"}
            </h2>
            <p className="text-white/45 text-base max-w-xl mx-auto leading-relaxed">
              {lang === "bm"
                ? "Semua alatan di sini percuma sepenuhnya dan sentiasa dikemas kini. Tiada akaun diperlukan."
                : "All tools here are completely free and always up to date. No account required."
              }
            </p>
            <div className="flex flex-wrap justify-center gap-2 pt-2">
              {["⛽ Petrol", "🥇 Emas", "💰 KWSP", "🌙 Solat", "🧾 Cukai", "🚗 Road Tax"].map(tag => (
                <span key={tag} className="text-xs bg-white/8 border border-white/12 text-white/50 px-3 py-1.5 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ── Footer ── */}
        <footer className="border-t border-white/[0.06] bg-black/40 py-8 text-center text-xs text-white/25 space-y-3">
          <div className="flex items-center justify-center gap-2 text-white/50 font-semibold text-sm">
            <div className="w-6 h-6 rounded-lg bg-red-600/80 flex items-center justify-center text-[10px] font-black text-white">MY</div>
            <span>The Malaysian Info</span>
          </div>
          <p className="text-white/20 text-[11px]">
            {lang === "bm"
              ? `Semua maklumat adalah untuk rujukan sahaja. · © ${new Date().getFullYear()} The Malaysian Info`
              : `All information is for reference only. · © ${new Date().getFullYear()} The Malaysian Info`
            }
          </p>
          <div className="flex flex-wrap justify-center gap-3 text-white/30 text-[11px]">
            <span>{lang === "bm" ? "Percuma · Tiada Log Masuk · Dikemas Kini Selalu" : "Free · No Login · Always Updated"}</span>
          </div>
        </footer>
      </div>
    </div>
  );
}
