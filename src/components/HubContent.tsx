"use client";

import { useState, useMemo, useRef, useEffect, useCallback } from "react";

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
  { id: "petrol",  icon: "⛽", name: "Harga Petrol",       nameEn: "Petrol Price",        desc: "RON95, RON97 & Diesel dikemas kini setiap Khamis",       descEn: "RON95, RON97 & Diesel updated every Thursday",          url: "https://petrol.themalaysianinfo.online",                    category: "prices",     badge: "TERKINI", badgeEn: "LIVE",  hot: true  },
  { id: "gold",    icon: "🥇", name: "Harga Emas",         nameEn: "Gold Price",          desc: "Harga emas 916 & 999 terkini di Malaysia",               descEn: "Latest 916 & 999 gold price in Malaysia",               url: "https://goldprice-malaysia.com",                category: "prices",     hot: true  },
  { id: "pepper",  icon: "🌶️", name: "Harga Lada",         nameEn: "Pepper Price",        desc: "Kadar harga lada hitam & putih semasa",                  descEn: "Current black & white pepper market prices",            url: "https://pepper.themalaysianinfo.online",                    category: "prices"  },

  // ── Kewangan ──
  { id: "kwsp",    icon: "💰", name: "KWSP / EPF",         nameEn: "EPF Calculator",      desc: "Kira caruman KWSP majikan & pekerja",                    descEn: "Calculate employer & employee EPF contributions",        url: "https://kwsp.themalaysianinfo.online",          category: "finance",    hot: true  },
  { id: "gaji",    icon: "💵", name: "Gaji Bersih",        nameEn: "Net Salary",          desc: "Kira gaji bersih selepas EPF, SOCSO & PCB",              descEn: "Calculate take-home pay after EPF, SOCSO & PCB",        url: "https://gaji.themalaysianinfo.online",          category: "finance"  },
  { id: "cukai",   icon: "🧾", name: "Cukai Pendapatan",   nameEn: "Income Tax",          desc: "Kalkulator cukai pendapatan individu Malaysia",           descEn: "Malaysia individual income tax calculator",              url: "https://cukai.themalaysianinfo.online",         category: "finance"  },
  { id: "cukaijalan",icon:"🚗",name: "Cukai Jalan",        nameEn: "Road Tax",            desc: "Kira cukai jalan kenderaan berdasarkan cc enjin",        descEn: "Calculate vehicle road tax by engine cc",               url: "https://cukaijalan.themalaysianinfo.online",    category: "finance"  },
  { id: "zakat",   icon: "🕌", name: "Kira Zakat",         nameEn: "Zakat Calculator",    desc: "Kalkulator zakat pendapatan, simpanan & emas",           descEn: "Income, savings & gold zakat calculator",               url: "https://zakat.themalaysianinfo.online",         category: "finance"  },
  { id: "ptptn",   icon: "🎓", name: "Pinjaman PTPTN",     nameEn: "PTPTN Loan",          desc: "Kira jadual bayaran balik pinjaman PTPTN anda",          descEn: "Calculate your PTPTN loan repayment schedule",          url: "https://ptptn.themalaysianinfo.online",         category: "finance",    badge: "2025", badgeEn: "2025" },
  { id: "rumah",   icon: "🏠", name: "Pinjaman Rumah",     nameEn: "Home Loan",           desc: "Kalkulator pinjaman perumahan & ansuran bulanan",        descEn: "Housing loan & monthly instalment calculator",          url: "https://rumah.themalaysianinfo.online",         category: "finance"  },
  { id: "simpanan",icon: "🏦", name: "Kira Simpanan",      nameEn: "Savings Calculator",  desc: "Projeksikan pertumbuhan simpanan masa depan anda",       descEn: "Project your future savings growth",                    url: "https://simpanan.themalaysianinfo.online",      category: "finance"  },
  { id: "ot",      icon: "⏰", name: "Kira Overtime",      nameEn: "OT Calculator",       desc: "Kira bayaran kerja lebih masa mengikut akta",            descEn: "Calculate overtime pay per Malaysian labour law",        url: "https://ot.themalaysianinfo.online",            category: "finance"  },
  { id: "pinjaman",icon: "📊", name: "Kalkulator Pinjaman",nameEn: "Loan Calculator",     desc: "Kira bayaran bulanan & jumlah faedah pinjaman",          descEn: "Calculate monthly payments & total interest",           url: "https://pinjaman.themalaysianinfo.online",      category: "finance"  },

  // ── Kalkulator ──
  { id: "bmi",     icon: "⚖️", name: "Kira BMI",           nameEn: "BMI Calculator",      desc: "Semak indeks jisim badan & tafsiran berat badan",        descEn: "Check your body mass index & weight status",            url: "https://bmi.themalaysianinfo.online",           category: "calculator" },
  { id: "umur",    icon: "🎂", name: "Kira Umur",          nameEn: "Age Calculator",      desc: "Kira umur tepat dalam tahun, bulan & hari",             descEn: "Calculate exact age in years, months & days",           url: "https://umur.themalaysianinfo.online",          category: "calculator" },
  { id: "diskaun", icon: "🏷️", name: "Kira Diskaun",       nameEn: "Discount Calculator", desc: "Kira harga akhir & penjimatan selepas diskaun",          descEn: "Calculate final price & savings after discount",        url: "https://diskaun.themalaysianinfo.online",       category: "calculator" },
  { id: "bil",     icon: "🧮", name: "Kira Bil",           nameEn: "Bill Calculator",     desc: "Anggaran bil TNB & utiliti rumah anda",                  descEn: "Estimate your TNB electricity & utility bills",         url: "https://kirabill.themalaysianinfo.online",      category: "calculator" },

  // ── Semakan ──
  { id: "plat",    icon: "🚘", name: "Nombor Plat",        nameEn: "Car Plate",           desc: "Semak negeri & kawasan nombor plat kenderaan",           descEn: "Check state & area of a vehicle plate number",          url: "https://plat.themalaysianinfo.online",          category: "lookup"  },
  { id: "poskod",  icon: "📮", name: "Semak Poskod",       nameEn: "Postcode Lookup",     desc: "Cari poskod sebarang kawasan di seluruh Malaysia",       descEn: "Find postcode for any area across Malaysia",            url: "https://poskod.themalaysianinfo.online",        category: "lookup"  },
  { id: "ic",      icon: "🪪", name: "Semak IC",           nameEn: "IC Checker",          desc: "Semak tarikh lahir, negeri & jantina dari nombor IC",    descEn: "Check birthdate, state & gender from IC number",        url: "https://ic.themalaysianinfo.online",            category: "lookup"  },
  { id: "cuti",    icon: "📅", name: "Cuti Umum",          nameEn: "Public Holidays",     desc: "Kalendar cuti umum Malaysia 2025 mengikut negeri",       descEn: "Malaysia 2025 public holidays calendar by state",       url: "https://cuti.themalaysianinfo.online",          category: "lookup",   badge: "2025", badgeEn: "2025" },
  { id: "4d",      icon: "🎰", name: "Keputusan 4D",       nameEn: "4D Results",          desc: "Semak keputusan loteri 4D Magnum, Toto & Damacai",      descEn: "Check Magnum, Toto & Damacai 4D lottery results",       url: "https://4d.themalaysianinfo.online",            category: "lookup",   hot: true  },

  // ── Cuaca & Solat ──
  { id: "weather", icon: "🌤️", name: "Cuaca Hari Ini",    nameEn: "Today's Weather",     desc: "Ramalan cuaca terkini semua negeri Malaysia",            descEn: "Latest weather forecast for all Malaysian states",       url: "https://www.weather-jinbin.site",               category: "weather",  badge: "LANGSUNG", badgeEn: "LIVE" },
  { id: "solat",   icon: "🌙", name: "Waktu Solat",        nameEn: "Prayer Times",        desc: "Jadual waktu solat harian seluruh Malaysia",             descEn: "Daily prayer times schedule across Malaysia",           url: "https://solat.themalaysianinfo.online",                     category: "weather",  hot: true  },

  // ── Alatan ──
  { id: "tukaran", icon: "💱", name: "Tukaran Matawang",   nameEn: "Currency Exchange",   desc: "Kadar tukaran matawang ringgit terkini",                 descEn: "Latest Malaysian Ringgit exchange rates",               url: "https://tukaran.themalaysianinfo.online",       category: "tools"  },
  { id: "konversi",icon: "📐", name: "Konversi Unit",      nameEn: "Unit Converter",      desc: "Tukar unit panjang, jisim, suhu, luas & lain-lain",     descEn: "Convert length, mass, temperature, area & more",        url: "https://konversi.themalaysianinfo.online",      category: "tools"  },
  { id: "tukar",   icon: "📁", name: "Tukar Fail",         nameEn: "File Converter",      desc: "Tukar format fail PDF, gambar & dokumen dalam talian",   descEn: "Convert PDF, image & document file formats online",     url: "https://tukar.themalaysianinfo.online",         category: "tools"  },
];

interface Category {
  id: CategoryId;
  label: string;
  labelEn: string;
  icon: string;
  activeColor: string;
}

const CATEGORIES: Category[] = [
  { id: "all",        label: "Semua",         labelEn: "All",              icon: "🏠", activeColor: "text-white" },
  { id: "prices",     label: "Harga Terkini", labelEn: "Live Prices",      icon: "💹", activeColor: "text-amber-400" },
  { id: "finance",    label: "Kewangan",      labelEn: "Finance",          icon: "💰", activeColor: "text-emerald-400" },
  { id: "calculator", label: "Kalkulator",    labelEn: "Calculators",      icon: "🧮", activeColor: "text-blue-400" },
  { id: "lookup",     label: "Semakan",       labelEn: "Lookup",           icon: "🔍", activeColor: "text-purple-400" },
  { id: "weather",    label: "Cuaca & Solat", labelEn: "Weather & Prayer", icon: "🌤️", activeColor: "text-sky-400" },
  { id: "tools",      label: "Alatan",        labelEn: "Tools",            icon: "🔧", activeColor: "text-slate-400" },
];

const CAT_STYLE: Record<string, {
  gradient: string; border: string; hoverBorder: string;
  badgeBg: string; badgeText: string; dot: string; heading: string;
}> = {
  prices:     { gradient: "from-amber-500/10 to-orange-600/10",   border: "border-white/10", hoverBorder: "hover:border-amber-500/40",   badgeBg: "bg-amber-500/20",   badgeText: "text-amber-300",   dot: "bg-amber-400",   heading: "text-amber-400" },
  finance:    { gradient: "from-emerald-500/10 to-green-700/10",  border: "border-white/10", hoverBorder: "hover:border-emerald-500/40", badgeBg: "bg-emerald-500/20", badgeText: "text-emerald-300", dot: "bg-emerald-400", heading: "text-emerald-400" },
  calculator: { gradient: "from-blue-500/10 to-cyan-700/10",      border: "border-white/10", hoverBorder: "hover:border-blue-500/40",    badgeBg: "bg-blue-500/20",    badgeText: "text-blue-300",    dot: "bg-blue-400",    heading: "text-blue-400" },
  lookup:     { gradient: "from-purple-500/10 to-violet-700/10",  border: "border-white/10", hoverBorder: "hover:border-purple-500/40",  badgeBg: "bg-purple-500/20",  badgeText: "text-purple-300",  dot: "bg-purple-400",  heading: "text-purple-400" },
  weather:    { gradient: "from-sky-500/10 to-indigo-700/10",     border: "border-white/10", hoverBorder: "hover:border-sky-500/40",     badgeBg: "bg-sky-500/20",     badgeText: "text-sky-300",     dot: "bg-sky-400",     heading: "text-sky-400" },
  tools:      { gradient: "from-slate-500/10 to-gray-700/10",     border: "border-white/10", hoverBorder: "hover:border-slate-500/40",   badgeBg: "bg-slate-500/20",   badgeText: "text-slate-300",   dot: "bg-slate-400",   heading: "text-slate-400" },
};

/* ── Ad Slot ── */
function AdSlot({ slot }: { slot: string }) {
  const ins = useRef<HTMLModElement>(null);
  useEffect(() => {
    try {
      if (ins.current && !ins.current.getAttribute("data-adsbygoogle-status")) {
        ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
      }
    } catch {}
  }, []);
  return (
    <div className="my-2 flex justify-center overflow-hidden">
      <ins
        ref={ins}
        className="adsbygoogle"
        style={{ display: "block", minHeight: "90px", width: "100%" }}
        data-ad-client="ca-pub-7019273666606982"
        data-ad-slot={slot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
}

/* ── Tool Card ── */
function ToolCard({ tool, lang, isFav, onToggleFav }: {
  tool: Tool;
  lang: Lang;
  isFav: boolean;
  onToggleFav: (id: string, e: React.MouseEvent) => void;
}) {
  const s     = CAT_STYLE[tool.category];
  const name  = lang === "bm" ? tool.name   : tool.nameEn;
  const desc  = lang === "bm" ? tool.desc   : tool.descEn;
  const badge = lang === "bm" ? tool.badge  : tool.badgeEn;

  return (
    <a
      href={tool.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`tool-card group relative flex flex-col gap-3 bg-gradient-to-br ${s.gradient} border ${s.border} ${s.hoverBorder} rounded-2xl p-5 cursor-pointer`}
    >
      {/* Icon row */}
      <div className="flex items-start justify-between">
        <div className="relative">
          <div className="w-11 h-11 rounded-xl bg-black/30 flex items-center justify-center text-2xl shrink-0">
            {tool.icon}
          </div>
          {tool.hot && (
            <span className={`absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full ${s.dot} ring-2 ring-[#0a0a0a] animate-pulse`} />
          )}
        </div>
        <div className="flex items-center gap-2">
          {badge && (
            <span className={`text-[10px] font-bold tracking-widest px-2 py-0.5 rounded-full ${s.badgeBg} ${s.badgeText} border border-current/20`}>
              {badge}
            </span>
          )}
          <button
            onClick={(e) => onToggleFav(tool.id, e)}
            className={`text-base leading-none transition-all duration-150 ${isFav ? "text-red-400 scale-110" : "text-white/15 hover:text-white/40"}`}
            aria-label={isFav ? "Remove from favourites" : "Add to favourites"}
          >
            {isFav ? "❤️" : "♡"}
          </button>
        </div>
      </div>

      {/* Name + Desc */}
      <div className="flex-1">
        <div className="font-bold text-white text-[15px] leading-snug mb-1.5">{name}</div>
        <div className="text-white/45 text-[13px] leading-relaxed line-clamp-2">{desc}</div>
      </div>

      {/* Footer row */}
      <div className="flex items-center justify-between pt-1 border-t border-white/[0.06]">
        <span className={`text-[11px] font-semibold uppercase tracking-wider ${s.badgeText} opacity-70`}>
          {lang === "bm" ? "Percuma" : "Free"}
        </span>
        <span className="text-white/25 group-hover:text-white/60 transition-colors duration-200 text-base font-light">→</span>
      </div>
    </a>
  );
}

/* ── Category Section ── */
function CategorySection({ categoryId, tools, lang, favorites, onToggleFav }: {
  categoryId: Exclude<CategoryId, "all">;
  tools: Tool[];
  lang: Lang;
  favorites: Set<string>;
  onToggleFav: (id: string, e: React.MouseEvent) => void;
}) {
  const cat = CATEGORIES.find(c => c.id === categoryId)!;
  const s   = CAT_STYLE[categoryId];
  return (
    <section className="mb-10">
      <div className="flex items-center gap-3 mb-5">
        <span className="text-xl">{cat.icon}</span>
        <h2 className={`text-lg font-bold ${s.heading}`}>
          {lang === "bm" ? cat.label : cat.labelEn}
        </h2>
        <span className="text-white/25 text-sm">· {tools.length} {lang === "bm" ? "alatan" : "tools"}</span>
        <div className="flex-1 h-px bg-white/[0.06]" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {tools.map(t => (
          <ToolCard key={t.id} tool={t} lang={lang} isFav={favorites.has(t.id)} onToggleFav={onToggleFav} />
        ))}
      </div>
    </section>
  );
}

/* ── Main Component ── */
export default function HubContent() {
  const [lang, setLang]         = useState<Lang>("bm");
  const [query, setQuery]       = useState("");
  const [activeTab, setActiveTab] = useState<CategoryId>("all");
  const [favorites, setFavorites] = useState<Set<string>>(new Set());
  const searchRef = useRef<HTMLInputElement>(null);

  // Load favorites + URL query on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem("tmi-favorites");
      if (stored) setFavorites(new Set(JSON.parse(stored)));
    } catch {}
    const params = new URLSearchParams(window.location.search);
    const q = params.get("q");
    if (q) setQuery(q);
  }, []);

  // Sync URL with search query
  useEffect(() => {
    if (typeof window === "undefined") return;
    const url = new URL(window.location.href);
    if (query) url.searchParams.set("q", query);
    else url.searchParams.delete("q");
    window.history.replaceState({}, "", url.toString());
  }, [query]);

  const toggleFavorite = useCallback((id: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setFavorites(prev => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      try { localStorage.setItem("tmi-favorites", JSON.stringify([...next])); } catch {}
      return next;
    });
  }, []);

  const clearFavorites = () => {
    setFavorites(new Set());
    try { localStorage.removeItem("tmi-favorites"); } catch {}
  };

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

  const favTools = TOOLS.filter(t => favorites.has(t.id));

  const handleTabClick = (id: CategoryId) => { setActiveTab(id); setQuery(""); };

  const waText = encodeURIComponent(
    lang === "bm"
      ? "🇲🇾 The Malaysian Info — 27 alatan percuma untuk rakyat Malaysia!\n\nHarga petrol, KWSP, cukai, waktu solat dan lebih lagi:\nhttps://www.themalaysianinfo.online"
      : "🇲🇾 The Malaysian Info — 27 free tools for Malaysians!\n\nPetrol prices, EPF, taxes, prayer times and more:\nhttps://www.themalaysianinfo.online"
  );

  return (
    <div className="min-h-screen flex flex-col">

      {/* ── Navbar ── */}
      <nav className="sticky top-0 z-50 bg-black/70 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center text-lg font-black text-white shadow-lg shadow-red-900/40">
              MY
            </div>
            <div>
              <div className="font-extrabold text-white text-base leading-tight tracking-tight">The Malaysian Info</div>
              <div className="text-white/35 text-[10px] leading-none">
                {lang === "bm" ? "Portal Maklumat Malaysia" : "Malaysia Information Hub"}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button onClick={() => searchRef.current?.focus()} className="sm:hidden p-2 rounded-lg bg-white/8 hover:bg-white/12 text-white/60 transition-colors" aria-label="Search">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
              </svg>
            </button>
            <div className="flex bg-white/8 border border-white/10 rounded-full p-0.5 text-sm font-semibold">
              {(["bm","en"] as Lang[]).map(l => (
                <button key={l} onClick={() => setLang(l)}
                  className={`px-3 py-1 rounded-full transition-all duration-200 ${lang === l ? "bg-red-600 text-white shadow-sm" : "text-white/50 hover:text-white/80"}`}>
                  {l.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* ── Hero ── */}
      <div className="hero-bg">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 pt-16 pb-20 text-center space-y-6">
          <div className="animate-fade-in-up inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-white/20 text-white/80 text-xs font-semibold px-4 py-1.5 rounded-full">
            <span className="w-2 h-2 rounded-full bg-red-400 animate-pulse inline-block" />
            {lang === "bm" ? "Portal Maklumat #1 Malaysia" : "Malaysia's #1 Information Portal"}
          </div>

          <div className="animate-fade-in-up delay-100 space-y-2">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight drop-shadow-2xl">
              {lang === "bm"
                ? <> Semua <span className="text-red-400">Maklumat</span> Malaysia<br />di Satu Tempat </>
                : <> All Malaysia <span className="text-red-400">Information</span><br />in One Place </>
              }
            </h1>
            <p className="text-white/55 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
              {lang === "bm"
                ? "Harga petrol, KWSP, cukai, waktu solat, kalkulator & lebih lagi — percuma untuk semua rakyat Malaysia."
                : "Petrol prices, EPF, tax, prayer times, calculators & more — free for all Malaysians."
              }
            </p>
          </div>

          {/* Search bar */}
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
            {query && (
              <button onClick={() => setQuery("")} className="absolute inset-y-0 right-4 flex items-center text-white/30 hover:text-white/60">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>

          {/* Stats */}
          <div className="animate-fade-in-up delay-300 flex items-center justify-center gap-6 sm:gap-10 text-center">
            {[
              { value: TOOLS.length, label: lang === "bm" ? "Alatan Percuma" : "Free Tools" },
              { value: 6,            label: lang === "bm" ? "Kategori"       : "Categories" },
              { value: "100%",       label: lang === "bm" ? "Percuma"        : "Free Forever" },
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
            <div className="flex items-center gap-1 overflow-x-auto px-4 sm:px-0 pb-1">
              {CATEGORIES.map(cat => {
                const active = activeTab === cat.id;
                return (
                  <button key={cat.id} onClick={() => handleTabClick(cat.id)}
                    className={`flex items-center gap-1.5 whitespace-nowrap px-3.5 py-2 rounded-xl text-sm font-semibold transition-all duration-200 shrink-0 ${
                      active
                        ? `bg-white/12 border border-white/20 ${cat.activeColor}`
                        : "text-white/45 hover:text-white/70 hover:bg-white/6 border border-transparent"
                    }`}
                  >
                    <span>{cat.icon}</span>
                    <span>{lang === "bm" ? cat.label : cat.labelEn}</span>
                    {cat.id !== "all" && (
                      <span className="text-[10px] font-normal opacity-50">
                        {TOOLS.filter(t => t.category === cat.id).length}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* ── Favourites section ── */}
          {favTools.length > 0 && !isSearching && activeTab === "all" && (
            <section className="mb-10">
              <div className="flex items-center gap-3 mb-5">
                <span className="text-xl">❤️</span>
                <h2 className="text-lg font-bold text-red-400">
                  {lang === "bm" ? "Kegemaran Saya" : "My Favourites"}
                </h2>
                <span className="text-white/25 text-sm">· {favTools.length}</span>
                <button onClick={clearFavorites} className="text-[11px] text-white/25 hover:text-white/50 transition-colors ml-1">
                  {lang === "bm" ? "Padam semua" : "Clear all"}
                </button>
                <div className="flex-1 h-px bg-white/[0.06]" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {favTools.map(t => (
                  <ToolCard key={t.id} tool={t} lang={lang} isFav={true} onToggleFav={toggleFavorite} />
                ))}
              </div>
            </section>
          )}

          {/* ── Tool Grid ── */}
          {isSearching ? (
            <div>
              <p className="text-white/40 text-sm mb-6">
                {filteredTools.length === 0
                  ? (lang === "bm" ? `Tiada alatan dijumpai untuk "${query}"` : `No tools found for "${query}"`)
                  : (lang === "bm"
                    ? `${filteredTools.length} keputusan untuk "${query}"`
                    : `${filteredTools.length} result${filteredTools.length !== 1 ? "s" : ""} for "${query}"`)}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {filteredTools.map(t => (
                  <ToolCard key={t.id} tool={t} lang={lang} isFav={favorites.has(t.id)} onToggleFav={toggleFavorite} />
                ))}
              </div>
            </div>
          ) : activeTab !== "all" ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {filteredTools.map(t => (
                <ToolCard key={t.id} tool={t} lang={lang} isFav={favorites.has(t.id)} onToggleFav={toggleFavorite} />
              ))}
            </div>
          ) : (
            // Grouped "All" view with ad slots between sections
            groupedTools?.map(({ id, tools }, idx) => (
              <div key={id}>
                <CategorySection
                  categoryId={id as Exclude<CategoryId, "all">}
                  tools={tools}
                  lang={lang}
                  favorites={favorites}
                  onToggleFav={toggleFavorite}
                />
                {/* Ad slots after prices and finance sections */}
                {(id === "prices" || id === "finance") && (
                  // Replace "TODO_SLOT_1" / "TODO_SLOT_2" with your AdSense ad unit slot IDs
                  // Create ad units at: https://adsense.google.com → Ads → By ad unit
                  <AdSlot slot={id === "prices" ? "TODO_SLOT_1" : "TODO_SLOT_2"} />
                )}
              </div>
            ))
          )}
        </div>

        {/* ── CTA Banner ── */}
        <div className="border-t border-white/[0.06] bg-gradient-to-b from-transparent to-black/30">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 py-14 text-center space-y-5">
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
            <div className="flex flex-wrap justify-center gap-2 pt-1">
              {["⛽ Petrol","🥇 Emas","💰 KWSP","🌙 Solat","🧾 Cukai","🚗 Road Tax"].map(tag => (
                <span key={tag} className="text-xs bg-white/8 border border-white/12 text-white/50 px-3 py-1.5 rounded-full">{tag}</span>
              ))}
            </div>
            {/* WhatsApp share */}
            <div className="pt-2">
              <a
                href={`https://wa.me/?text=${waText}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-700/70 hover:bg-green-700 border border-green-600/40 text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-colors shadow-lg shadow-green-900/20"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                {lang === "bm" ? "Kongsi ke WhatsApp" : "Share on WhatsApp"}
              </a>
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
          <p className="text-white/20 text-[11px]">
            {lang === "bm" ? "Percuma · Tiada Log Masuk · Dikemas Kini Selalu" : "Free · No Login · Always Updated"}
          </p>
        </footer>
      </div>
    </div>
  );
}
