"use client";
import { useState, useRef, useCallback } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

function fmtSize(bytes: number) {
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / 1024 / 1024).toFixed(2)} MB`;
}

type Status = "idle" | "loading-ffmpeg" | "compressing" | "done" | "error";

const CRF_PRESETS = [
  { label: "High Quality", labelMs: "Kualiti Tinggi", crf: 23, desc: "~60% reduction" },
  { label: "Balanced",     labelMs: "Seimbang",       crf: 28, desc: "~75% reduction" },
  { label: "Small Size",   labelMs: "Saiz Kecil",     crf: 33, desc: "~85% reduction" },
];

export default function VideoCompressor() {
  const { lang } = useLanguage();
  const [file, setFile] = useState<File | null>(null);
  const [preset, setPreset] = useState(1);
  const [status, setStatus] = useState<Status>("idle");
  const [progress, setProgress] = useState(0);
  const [outputUrl, setOutputUrl] = useState<string | null>(null);
  const [outputSize, setOutputSize] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const [dragging, setDragging] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const t = {
    bm: {
      title: "🎬 Mampat Video", subtitle: "Kurangkan saiz video tanpa memuat naik ke pelayan",
      drop: "Seret & lepas video di sini, atau klik untuk pilih",
      quality: "Preset Kualiti", compress: "Mampat Video", download: "Muat Turun Video",
      reset: "Mampat Video Lain", loadingFfmpeg: "Memuatkan pemampat...",
      compressing: "Memampatkan", done: "Selesai!", saved: "Jimat",
      warning: "⚠️ Video besar mungkin mengambil masa beberapa minit. Jangan tutup tab ini.",
    },
    en: {
      title: "🎬 Video Compressor", subtitle: "Reduce video file size without uploading to any server",
      drop: "Drag & drop video here, or click to select",
      quality: "Quality Preset", compress: "Compress Video", download: "Download Video",
      reset: "Compress Another", loadingFfmpeg: "Loading compressor...",
      compressing: "Compressing", done: "Done!", saved: "Saved",
      warning: "⚠️ Large videos may take several minutes. Do not close this tab.",
    },
  };
  const s = t[lang];

  const loadFile = (f: File) => {
    setFile(f); setOutputUrl(null); setOutputSize(0); setError(null); setProgress(0);
  };

  const onDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault(); setDragging(false);
    const f = e.dataTransfer.files[0];
    if (f && f.type.startsWith("video/")) loadFile(f);
  }, []);

  const compress = async () => {
    if (!file) return;
    setError(null);
    setStatus("loading-ffmpeg");
    setProgress(0);
    try {
      const { FFmpeg } = await import("@ffmpeg/ffmpeg");
      const { fetchFile, toBlobURL } = await import("@ffmpeg/util");
      const ffmpeg = new FFmpeg();
      ffmpeg.on("progress", ({ progress: p }) => {
        setProgress(Math.round(p * 100));
      });
      const baseURL = "https://unpkg.com/@ffmpeg/core@0.12.6/dist/umd";
      await ffmpeg.load({
        coreURL: await toBlobURL(`${baseURL}/ffmpeg-core.js`, "text/javascript"),
        wasmURL: await toBlobURL(`${baseURL}/ffmpeg-core.wasm`, "application/wasm"),
      });
      setStatus("compressing");
      const crf = CRF_PRESETS[preset].crf;
      await ffmpeg.writeFile("input.mp4", await fetchFile(file));
      await ffmpeg.exec([
        "-i", "input.mp4",
        "-c:v", "libx264", "-crf", String(crf), "-preset", "fast",
        "-c:a", "aac", "-b:a", "128k",
        "-movflags", "+faststart",
        "output.mp4",
      ]);
      const raw = await ffmpeg.readFile("output.mp4") as Uint8Array;
      const blob = new Blob([raw.buffer.slice(0) as ArrayBuffer], { type: "video/mp4" });
      setOutputUrl(URL.createObjectURL(blob));
      setOutputSize(blob.size);
      setStatus("done");
    } catch (err) {
      console.error(err);
      setError(lang === "bm"
        ? "Gagal memampatkan video. Cuba fail yang lebih kecil atau format lain."
        : "Failed to compress video. Try a smaller file or different format.");
      setStatus("error");
    }
  };

  const savedPct = file && outputSize ? Math.round((1 - outputSize / file.size) * 100) : 0;
  const baseName = file ? file.name.replace(/\.[^.]+$/, "") : "compressed";

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
          <div className="text-5xl mb-3">🎬</div>
          <p className="text-white/50 text-sm">{s.drop}</p>
          <p className="text-white/30 text-xs mt-2">MP4, MOV, AVI, MKV · Max ~500MB recommended</p>
          <input ref={inputRef} type="file" accept="video/*" className="hidden"
            onChange={e => { const f = e.target.files?.[0]; if (f) loadFile(f); }} />
        </div>
      ) : (
        <div className="space-y-4">
          <div className="card-glass rounded-2xl p-4 flex items-center gap-3">
            <div className="text-3xl">🎬</div>
            <div>
              <div className="text-white font-bold text-sm">{file.name}</div>
              <div className="text-white/40 text-xs">{fmtSize(file.size)}</div>
            </div>
          </div>

          {/* Quality preset */}
          <div className="card-glass rounded-2xl p-5 space-y-3">
            <label className="text-xs text-white/50 uppercase tracking-wider">{s.quality}</label>
            <div className="grid grid-cols-3 gap-2">
              {CRF_PRESETS.map((p, i) => (
                <button key={i} onClick={() => setPreset(i)}
                  className={`py-3 px-2 rounded-xl border text-xs font-bold transition-colors text-center ${preset === i ? "bg-yellow-500 border-yellow-400 text-black" : "bg-white/5 border-white/10 text-white/70 hover:bg-white/10"}`}>
                  <div>{lang === "bm" ? p.labelMs : p.label}</div>
                  <div className={`text-xs mt-0.5 font-normal ${preset === i ? "text-black/60" : "text-white/40"}`}>{p.desc}</div>
                </button>
              ))}
            </div>
          </div>

          {error && <div className="bg-red-900/30 border border-red-500/40 rounded-2xl p-4 text-red-300 text-sm">{error}</div>}

          {(status === "loading-ffmpeg" || status === "compressing") && (
            <div className="card-glass rounded-2xl p-5 space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-white/60">{status === "loading-ffmpeg" ? s.loadingFfmpeg : `${s.compressing}...`}</span>
                <span className="text-yellow-400 font-bold">{progress}%</span>
              </div>
              <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-yellow-500 rounded-full transition-all duration-300"
                  style={{ width: `${status === "loading-ffmpeg" ? 5 : progress}%` }} />
              </div>
              <p className="text-white/30 text-xs">{s.warning}</p>
            </div>
          )}

          {status === "done" && outputUrl && (
            <div className="space-y-3">
              <div className="card-glass rounded-2xl p-4">
                <div className="grid grid-cols-3 text-center gap-2">
                  <div><div className="text-white/40 text-xs">Original</div><div className="text-white font-bold">{fmtSize(file.size)}</div></div>
                  <div><div className="text-white/40 text-xs">{s.saved}</div><div className="text-green-400 font-black text-xl">{savedPct}%</div></div>
                  <div><div className="text-white/40 text-xs">Output</div><div className="text-white font-bold">{fmtSize(outputSize)}</div></div>
                </div>
              </div>
              <a href={outputUrl} download={`${baseName}_compressed.mp4`}
                className="block w-full py-4 rounded-2xl bg-green-600 hover:bg-green-500 text-white font-black text-lg text-center transition-colors">
                ⬇️ {s.download}
              </a>
            </div>
          )}

          {status === "idle" || status === "error" ? (
            <button onClick={compress}
              className="w-full py-4 rounded-2xl bg-yellow-500 hover:bg-yellow-400 text-black font-black text-lg transition-colors">
              {s.compress}
            </button>
          ) : null}

          <button onClick={() => { setFile(null); setOutputUrl(null); setStatus("idle"); setProgress(0); }}
            className="w-full py-2 rounded-xl text-white/40 hover:text-white/70 text-sm transition-colors">
            ← {s.reset}
          </button>
        </div>
      )}
    </div>
  );
}
