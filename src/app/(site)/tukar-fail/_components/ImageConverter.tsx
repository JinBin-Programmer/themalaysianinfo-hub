"use client";
import { useState, useRef, useCallback } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

type Format = "image/jpeg" | "image/png" | "image/webp";
const FORMATS: { value: Format; label: string }[] = [
  { value: "image/jpeg", label: "JPG" },
  { value: "image/png",  label: "PNG" },
  { value: "image/webp", label: "WEBP" },
];

function fmtSize(bytes: number) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / 1024 / 1024).toFixed(2)} MB`;
}

export default function ImageConverter() {
  const { lang } = useLanguage();
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [outputFormat, setOutputFormat] = useState<Format>("image/jpeg");
  const [outputUrl, setOutputUrl] = useState<string | null>(null);
  const [outputSize, setOutputSize] = useState(0);
  const [converting, setConverting] = useState(false);
  const [dragging, setDragging] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const t = {
    bm: {
      title: "🖼️ Tukar Format Imej", subtitle: "Tukar PNG, JPG, WEBP dengan mudah",
      drop: "Seret & lepas imej di sini, atau klik untuk pilih fail",
      outputFormat: "Format Output", convert: "Tukar Sekarang", download: "Muat Turun",
      original: "Asal", output: "Output", reset: "Tukar Imej Lain",
    },
    en: {
      title: "🖼️ Image Format Converter", subtitle: "Convert PNG, JPG, WEBP easily",
      drop: "Drag & drop image here, or click to select file",
      outputFormat: "Output Format", convert: "Convert Now", download: "Download",
      original: "Original", output: "Output", reset: "Convert Another",
    },
  };
  const s = t[lang];

  const loadFile = (f: File) => {
    setFile(f); setOutputUrl(null); setOutputSize(0);
    const reader = new FileReader();
    reader.onload = e => setPreview(e.target?.result as string);
    reader.readAsDataURL(f);
  };

  const onDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault(); setDragging(false);
    const f = e.dataTransfer.files[0];
    if (f && f.type.startsWith("image/")) loadFile(f);
  }, []);

  const convert = () => {
    if (!preview) return;
    setConverting(true);
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = img.width; canvas.height = img.height;
      const ctx = canvas.getContext("2d")!;
      if (outputFormat === "image/jpeg") { ctx.fillStyle = "#fff"; ctx.fillRect(0, 0, canvas.width, canvas.height); }
      ctx.drawImage(img, 0, 0);
      canvas.toBlob(blob => {
        if (!blob) return;
        setOutputUrl(URL.createObjectURL(blob));
        setOutputSize(blob.size);
        setConverting(false);
      }, outputFormat, 0.92);
    };
    img.src = preview;
  };

  const ext = outputFormat === "image/jpeg" ? "jpg" : outputFormat === "image/png" ? "png" : "webp";
  const baseName = file ? file.name.replace(/\.[^.]+$/, "") : "converted";

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
          <div className="text-5xl mb-3">🖼️</div>
          <p className="text-white/50 text-sm">{s.drop}</p>
          <p className="text-white/30 text-xs mt-2">PNG, JPG, WEBP, BMP, GIF</p>
          <input ref={inputRef} type="file" accept="image/*" className="hidden"
            onChange={e => { const f = e.target.files?.[0]; if (f) loadFile(f); }} />
        </div>
      ) : (
        <div className="space-y-4">
          {/* Preview */}
          <div className="card-glass rounded-2xl p-4">
            <img src={preview!} alt="preview" className="max-h-64 mx-auto rounded-xl object-contain" />
            <p className="text-center text-white/40 text-xs mt-2">{s.original}: {file.name} · {fmtSize(file.size)}</p>
          </div>

          {/* Format picker */}
          <div className="card-glass rounded-2xl p-5">
            <label className="block text-xs text-white/50 uppercase tracking-wider mb-3">{s.outputFormat}</label>
            <div className="flex gap-3">
              {FORMATS.map(f => (
                <button key={f.value} onClick={() => setOutputFormat(f.value)}
                  className={`flex-1 py-3 rounded-xl border font-bold text-sm transition-colors ${outputFormat === f.value ? "bg-yellow-500 border-yellow-400 text-black" : "bg-white/5 border-white/10 text-white/70 hover:bg-white/10"}`}>
                  {f.label}
                </button>
              ))}
            </div>
          </div>

          {/* Convert */}
          {!outputUrl ? (
            <button onClick={convert} disabled={converting}
              className="w-full py-4 rounded-2xl bg-yellow-500 hover:bg-yellow-400 text-black font-black text-lg transition-colors disabled:opacity-50">
              {converting ? "⏳ Converting..." : `${s.convert} → ${ext.toUpperCase()}`}
            </button>
          ) : (
            <div className="space-y-3">
              <div className="card-glass rounded-2xl p-4 text-center">
                <div className="text-green-400 font-bold text-lg">✅ {s.output}: {fmtSize(outputSize)}</div>
                <div className="text-white/40 text-xs mt-1">
                  {file.size > outputSize
                    ? `${Math.round((1 - outputSize / file.size) * 100)}% smaller than original`
                    : `${fmtSize(outputSize)} (${ext.toUpperCase()})`}
                </div>
              </div>
              <a href={outputUrl} download={`${baseName}.${ext}`}
                className="block w-full py-4 rounded-2xl bg-green-600 hover:bg-green-500 text-white font-black text-lg text-center transition-colors">
                ⬇️ {s.download} {ext.toUpperCase()}
              </a>
            </div>
          )}

          <button onClick={() => { setFile(null); setPreview(null); setOutputUrl(null); }}
            className="w-full py-2 rounded-xl text-white/40 hover:text-white/70 text-sm transition-colors">
            ← {s.reset}
          </button>
        </div>
      )}
    </div>
  );
}
