import { Mountain, LoaderCircle } from "lucide-react";

export default function Loading() {
  return (
    <div className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-[#050505] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_10%,rgba(8,78,168,0.25),transparent_70%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(140deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:28px_28px] opacity-25" />

      <div className="relative flex flex-col items-center gap-4 rounded-2xl bg-white/[0.04] px-8 py-7 ring-1 ring-white/10 backdrop-blur-sm">
        <div className="relative">
          <Mountain className="h-9 w-9 text-white/90" />
          <LoaderCircle className="absolute -right-5 -top-4 h-5 w-5 animate-spin text-primary" />
        </div>
        <p className="text-xs font-semibold tracking-[0.2em] text-zinc-300 uppercase">
          Preparing Your Route
        </p>
        <p className="text-sm text-zinc-400">Loading trek details...</p>
      </div>
    </div>
  );
}
