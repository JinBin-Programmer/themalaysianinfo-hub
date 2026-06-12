"use client";
import { useState, useRef, useCallback } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

function fmtSize(bytes: number) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / 1024 / 1024).toFixed(2)} MB`;
}

export default function ImageCompressor() {
  const { lang } = useLanguage();
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [quality, setQuality] = useState(75);
  const [outputUrl, setOutputUrl] = useState<string | null>(null);
  const [outputSize, setOutputSize] = useState(0);
  const [compressing, setCompressing] = useState(false);
  const [dragging, setDragging] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const t = {
    bm: {
      title: "🗜️ Mampat Imej", subtitle: "Kurangkan saiz imej tanpa kehilangan kualiti ketara",
      drop: "Seret & lepas imej di sini, atau klik untuk pilih fail",
      quality: "Kualiti", compress: "Mampat Sekarang", download: "Muat Turun",
      original: "Asal", saved: "Jimat", reset: "Mampat Imej Lain",
    },
    en: {
      title: "🗜️ Image Compressor", subtitle: "Reduce image file size without noticeable quality loss",
      drop: "Drag & drop image here, or click to select file",
      quality: "Quality", compress: "Compress Now", download: "Download",
      original: "Original", saved: "Saved", reset: "Compress Another",
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

  const compress = () => {
    if (!preview || !file) return;
    setCompressing(true);
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = img.width; canvas.height = img.height;
      const ctx = canvas.getContext("2d")!;
      const isJpeg = file.type === "image/jpeg" || file.type === "image/jpg";
      const mimeType = isJpeg ? "image/jpeg" : "image/webp";
      if (isJpeg) { ctx.fillStyle = "#fff"; ctx.fillRect(0, 0, canvas.width, canvas.height); }
      ctx.drawImage(img, 0, 0);
      canvas.toBlob(blob => {
        if (!blob) return;
        setOutputUrl(URL.createObjectURL(blob));
        setOutputSize(blob.size);
        setCompressing(false);
      }, mimeType, quality / 100);
    };
    img.src = preview;
  };

  const savedPct = file && outputSize ? Math.round((1 - outputSize / file.size) * 100) : 0;
  const ext = file?.type === "image/png" ? "png" : "jpg";
  const baseName = file ? file.name.replace(/\.[^.]+$/, "") : "compressed";

  const qualityLabel =
    quality >= 85 ? (lang === "bm" ? "Sangat Baik" : "High Quality") :
    quality >= 65 ? (lang === "bm" ? "Seimbang" : "Balanced") :
    quality >= 40 ? (lang === "bm" ? "Mampatan Tinggi" : "High Compression") :
                    (lang === "bm" ? "Terlalu Mampat" : "Very Compressed");

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
          <div className="text-5xl mb-3">🗜️</div>
          <p className="text-white/50 text-sm">{s.drop}</p>
          <p className="text-white/30 text-xs mt-2">JPG, PNG, WEBP</p>
          <input ref={inputRef} type="file" accept="image/*" className="hidden"
            onChange={e => { const f = e.target.files?.[0]; if (f) loadFile(f); }} />
        </div>
      ) : (
        <div className="space-y-4">
          <div className="card-glass rounded-2xl p-4">
            <img src={preview!} alt="preview" className="max-h-56 mx-auto rounded-xl object-contain" />
            <p className="text-center text-white/40 text-xs mt-2">{s.original}: {file.name} · {fmtSize(file.size)}</p>
          </div>

          {/* Quality slider */}
          <div className="card-glass rounded-2xl p-5 space-y-3">
            <div className="flex justify-between items-center">
              <label className="text-xs text-white/50 uppercase tracking-wider">{s.quality}</label>
              <div className="flex items-center gap-2">
                <span className="text-yellow-400 font-black text-lg">{quality}%</span>
                <span className="text-white/40 text-xs">{qualityLabel}</span>
              </div>
            </div>
            <input type="range" min={10} max={95} value={quality}
              onChange={e => { setQuality(+e.target.value); setOutputUrl(null); }}
              className="w-full accent-yellow-400" />
            <div className="flex justify-between text-xs text-white/30">
              <span>{lang === "bm" ? "Mampatan Max" : "Max Compression"}</span>
              <span>{lang === "bm" ? "Kualiti Max" : "Max Quality"}</span>
            </div>
          </div>

          {!outputUrl ? (
            <button onClick={compress} disabled={compressing}
              className="w-full py-4 rounded-2xl bg-yellow-500 hover:bg-yellow-400 text-black font-black text-lg transition-colors disabled:opacity-50">
              {compressing ? "⏳ Compressing..." : s.compress}
            </button>
          ) : (
            <div className="space-y-3">
              <div className="card-glass rounded-2xl p-4">
                <div className="grid grid-cols-3 text-center gap-2">
                  <div>
                    <div className="text-white/40 text-xs">{s.original}</div>
                    <div className="text-white font-bold">{fmtSize(file.size)}</div>
                  </div>
                  <div>
                    <div className="text-white/40 text-xs">{s.saved}</div>
                    <div className="text-green-400 font-black text-lg">{savedPct}%</div>
                  </div>
                  <div>
                    <div className="text-white/40 text-xs">Output</div>
                    <div className="text-white font-bold">{fmtSize(outputSize)}</div>
                  </div>
                </div>
              </div>
              <a href={outputUrl} download={`${baseName}_compressed.${ext}`}
                className="block w-full py-4 rounded-2xl bg-green-600 hover:bg-green-500 text-white font-black text-lg text-center transition-colors">
                ⬇️ {s.download}
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
