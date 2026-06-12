"use client";
import { useState, useRef, useCallback } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

function fmtSize(bytes: number) {
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / 1024 / 1024).toFixed(2)} MB`;
}

export default function WordToPdf() {
  const { lang } = useLanguage();
  const [file, setFile] = useState<File | null>(null);
  const [html, setHtml] = useState<string | null>(null);
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);
  const [converting, setConverting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [dragging, setDragging] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const previewRef = useRef<HTMLDivElement>(null);

  const t = {
    bm: {
      title: "📄 Word ke PDF", subtitle: "Tukar dokumen .docx kepada PDF dalam pelayar anda",
      drop: "Seret & lepas fail .docx di sini, atau klik untuk pilih",
      convert: "Tukar ke PDF", download: "Muat Turun PDF", preview: "Pratonton Dokumen",
      reset: "Tukar Fail Lain", converting: "Menukar...", note: "* Pemformatan asas disokong. Dokumen kompleks mungkin kelihatan berbeza.",
    },
    en: {
      title: "📄 Word to PDF", subtitle: "Convert .docx documents to PDF in your browser",
      drop: "Drag & drop .docx file here, or click to select",
      convert: "Convert to PDF", download: "Download PDF", preview: "Document Preview",
      reset: "Convert Another", converting: "Converting...", note: "* Basic formatting supported. Complex documents may look different.",
    },
  };
  const s = t[lang];

  const loadFile = async (f: File) => {
    setFile(f); setPdfUrl(null); setError(null); setHtml(null);
    try {
      const mammoth = (await import("mammoth")).default;
      const arrayBuffer = await f.arrayBuffer();
      const result = await mammoth.convertToHtml({ arrayBuffer });
      setHtml(result.value);
    } catch {
      setError(lang === "bm" ? "Gagal membaca fail. Pastikan ia adalah .docx yang sah." : "Failed to read file. Make sure it is a valid .docx.");
    }
  };

  const onDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault(); setDragging(false);
    const f = e.dataTransfer.files[0];
    if (f && (f.name.endsWith(".docx") || f.type.includes("word"))) loadFile(f);
  }, [lang]);

  const convert = async () => {
    if (!html || !previewRef.current) return;
    setConverting(true);
    try {
      const [{ default: jsPDF }, { default: html2canvas }] = await Promise.all([
        import("jspdf"),
        import("html2canvas"),
      ]);
      const el = previewRef.current;
      const canvas = await html2canvas(el, { scale: 1.5, backgroundColor: "#ffffff", useCORS: true });
      const imgData = canvas.toDataURL("image/jpeg", 0.9);
      const pdf = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" });
      const pdfW = pdf.internal.pageSize.getWidth();
      const pdfH = pdf.internal.pageSize.getHeight();
      const ratio = canvas.width / canvas.height;
      const imgH = pdfW / ratio;
      let y = 0;
      while (y < imgH) {
        if (y > 0) pdf.addPage();
        pdf.addImage(imgData, "JPEG", 0, -y, pdfW, imgH);
        y += pdfH;
      }
      const blob = pdf.output("blob");
      setPdfUrl(URL.createObjectURL(blob));
    } catch {
      setError(lang === "bm" ? "Gagal menjana PDF." : "Failed to generate PDF.");
    }
    setConverting(false);
  };

  const baseName = file ? file.name.replace(/\.[^.]+$/, "") : "document";

  return (
    <div className="max-w-2xl mx-auto px-4 pt-10 pb-16 space-y-6">
      <div className="text-center space-y-1">
        <h1 className="text-3xl font-black text-white">{s.title}</h1>
        <p className="text-white/50 text-sm">{s.subtitle}</p>
      </div>

      {!file ? (
        <div className={`drop-zone rounded-2xl p-12 text-center cursor-pointer ${dragging ? "drag-over" : ""}`}
          onClick={() => inputRef.current?.click()}
          onDragOver={e => { e.preventDefault(); setDragging(true); }}
          onDragLeave={() => setDragging(false)}
          onDrop={onDrop}>
          <div className="text-5xl mb-3">📄</div>
          <p className="text-white/50 text-sm">{s.drop}</p>
          <p className="text-white/30 text-xs mt-2">.docx only</p>
          <input ref={inputRef} type="file" accept=".docx,application/vnd.openxmlformats-officedocument.wordprocessingml.document" className="hidden"
            onChange={e => { const f = e.target.files?.[0]; if (f) loadFile(f); }} />
        </div>
      ) : (
        <div className="space-y-4">
          {error && <div className="bg-red-900/30 border border-red-500/40 rounded-2xl p-4 text-red-300 text-sm">{error}</div>}

          {html && (
            <>
              <div className="card-glass rounded-2xl p-4">
                <div className="text-xs text-white/40 mb-3">{s.preview}: {file.name} · {fmtSize(file.size)}</div>
                <div className="bg-white rounded-xl overflow-auto max-h-96 p-6">
                  <div ref={previewRef}
                    className="text-gray-800 text-sm leading-relaxed prose max-w-none"
                    dangerouslySetInnerHTML={{ __html: html }} />
                </div>
              </div>

              {!pdfUrl ? (
                <button onClick={convert} disabled={converting}
                  className="w-full py-4 rounded-2xl bg-orange-500 hover:bg-orange-400 text-white font-black text-lg transition-colors disabled:opacity-50">
                  {converting ? `⏳ ${s.converting}` : s.convert}
                </button>
              ) : (
                <a href={pdfUrl} download={`${baseName}.pdf`}
                  className="block w-full py-4 rounded-2xl bg-green-600 hover:bg-green-500 text-white font-black text-lg text-center transition-colors">
                  ⬇️ {s.download}
                </a>
              )}

              <p className="text-white/30 text-xs text-center px-4">{s.note}</p>
            </>
          )}

          <button onClick={() => { setFile(null); setHtml(null); setPdfUrl(null); setError(null); }}
            className="w-full py-2 rounded-xl text-white/40 hover:text-white/70 text-sm transition-colors">
            ← {s.reset}
          </button>
        </div>
      )}
    </div>
  );
}
