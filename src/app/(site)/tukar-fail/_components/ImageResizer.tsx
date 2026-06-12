"use client";
import { useState, useRef, useCallback } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

function fmtSize(bytes: number) {
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / 1024 / 1024).toFixed(2)} MB`;
}

const PRESETS = [
  { label: "HD", w: 1280, h: 720 },
  { label: "Full HD", w: 1920, h: 1080 },
  { label: "4K", w: 3840, h: 2160 },
  { label: "Instagram", w: 1080, h: 1080 },
  { label: "Twitter", w: 1200, h: 675 },
  { label: "Facebook", w: 1200, h: 630 },
];

export default function ImageResizer() {
  const { lang } = useLanguage();
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [origW, setOrigW] = useState(0);
  const [origH, setOrigH] = useState(0);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [lockRatio, setLockRatio] = useState(true);
  const [outputUrl, setOutputUrl] = useState<string | null>(null);
  const [outputSize, setOutputSize] = useState(0);
  const [dragging, setDragging] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const t = {
    bm: {
      title: "📐 Ubah Saiz Imej", subtitle: "Ubah dimensi imej kepada saiz tersuai",
      drop: "Seret & lepas imej di sini, atau klik untuk pilih fail",
      presets: "Saiz Tetap", width: "Lebar", height: "Tinggi",
      lockRatio: "Kunci nisbah aspek", resize: "Ubah Saiz", download: "Muat Turun", reset: "Ubah Imej Lain",
    },
    en: {
      title: "📐 Image Resizer", subtitle: "Resize images to custom dimensions",
      drop: "Drag & drop image here, or click to select file",
      presets: "Presets", width: "Width", height: "Height",
      lockRatio: "Lock aspect ratio", resize: "Resize", download: "Download", reset: "Resize Another",
    },
  };
  const s = t[lang];

  const loadFile = (f: File) => {
    setFile(f); setOutputUrl(null);
    const reader = new FileReader();
    reader.onload = e => {
      const src = e.target?.result as string;
      setPreview(src);
      const img = new Image();
      img.onload = () => { setOrigW(img.width); setOrigH(img.height); setWidth(img.width); setHeight(img.height); };
      img.src = src;
    };
    reader.readAsDataURL(f);
  };

  const onDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault(); setDragging(false);
    const f = e.dataTransfer.files[0];
    if (f && f.type.startsWith("image/")) loadFile(f);
  }, []);

  const onWidthChange = (v: number) => {
    setWidth(v);
    if (lockRatio && origW) setHeight(Math.round(v * origH / origW));
    setOutputUrl(null);
  };
  const onHeightChange = (v: number) => {
    setHeight(v);
    if (lockRatio && origH) setWidth(Math.round(v * origW / origH));
    setOutputUrl(null);
  };

  const resize = () => {
    if (!preview || !width || !height) return;
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = width; canvas.height = height;
      canvas.getContext("2d")!.drawImage(img, 0, 0, width, height);
      canvas.toBlob(blob => {
        if (!blob) return;
        setOutputUrl(URL.createObjectURL(blob));
        setOutputSize(blob.size);
      }, file?.type || "image/jpeg", 0.92);
    };
    img.src = preview;
  };

  const ext = file?.name.split(".").pop() ?? "jpg";
  const baseName = file ? file.name.replace(/\.[^.]+$/, "") : "resized";

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
          <div className="text-5xl mb-3">📐</div>
          <p className="text-white/50 text-sm">{s.drop}</p>
          <input ref={inputRef} type="file" accept="image/*" className="hidden"
            onChange={e => { const f = e.target.files?.[0]; if (f) loadFile(f); }} />
        </div>
      ) : (
        <div className="space-y-4">
          <div className="card-glass rounded-2xl p-4">
            <img src={preview!} alt="preview" className="max-h-48 mx-auto rounded-xl object-contain" />
            <p className="text-center text-white/40 text-xs mt-2">{origW} × {origH}px · {fmtSize(file.size)}</p>
          </div>

          {/* Presets */}
          <div className="card-glass rounded-2xl p-5 space-y-4">
            <div>
              <label className="text-xs text-white/50 uppercase tracking-wider">{s.presets}</label>
              <div className="flex flex-wrap gap-2 mt-2">
                {PRESETS.map(p => (
                  <button key={p.label} onClick={() => { setWidth(p.w); setHeight(p.h); setLockRatio(false); setOutputUrl(null); }}
                    className="text-xs px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-white/60 hover:bg-white/10 transition-colors">
                    {p.label} {p.w}×{p.h}
                  </button>
                ))}
              </div>
            </div>

            {/* W × H inputs */}
            <div className="flex items-center gap-3">
              <div className="flex-1">
                <label className="text-xs text-white/50 block mb-1">{s.width} (px)</label>
                <input type="number" value={width} onChange={e => onWidthChange(+e.target.value)}
                  className="w-full bg-white/10 border border-white/20 text-white rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-yellow-400" />
              </div>
              <button onClick={() => setLockRatio(!lockRatio)}
                className={`mt-5 p-2 rounded-xl border transition-colors ${lockRatio ? "bg-yellow-500/20 border-yellow-400/50 text-yellow-400" : "bg-white/5 border-white/10 text-white/40"}`}
                title={s.lockRatio}>
                {lockRatio ? "🔒" : "🔓"}
              </button>
              <div className="flex-1">
                <label className="text-xs text-white/50 block mb-1">{s.height} (px)</label>
                <input type="number" value={height} onChange={e => onHeightChange(+e.target.value)}
                  className="w-full bg-white/10 border border-white/20 text-white rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-yellow-400" />
              </div>
            </div>
          </div>

          {!outputUrl ? (
            <button onClick={resize}
              className="w-full py-4 rounded-2xl bg-yellow-500 hover:bg-yellow-400 text-black font-black text-lg transition-colors">
              {s.resize} → {width}×{height}px
            </button>
          ) : (
            <div className="space-y-3">
              <div className="card-glass rounded-2xl p-4 text-center">
                <div className="text-green-400 font-bold">✅ {width}×{height}px · {fmtSize(outputSize)}</div>
              </div>
              <a href={outputUrl} download={`${baseName}_${width}x${height}.${ext}`}
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
