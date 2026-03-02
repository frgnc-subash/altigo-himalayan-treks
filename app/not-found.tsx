import Link from "next/link";
import { ArrowRight, Compass, Mountain } from "lucide-react";

export default function PageNotFound() {
  return (
    <main className="relative flex min-h-dvh items-center justify-center overflow-hidden bg-[#050505] px-6 py-16 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(85%_65%_at_50%_5%,rgba(8,78,168,0.25),transparent_65%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(140deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:30px_30px] opacity-25" />

      <section className="relative w-full max-w-2xl rounded-3xl bg-white/[0.04] p-8 shadow-[0_20px_50px_rgba(0,0,0,0.4)] ring-1 ring-white/10 backdrop-blur-md sm:p-10">
        <p className="mb-3 text-xs font-semibold tracking-[0.25em] text-primary uppercase">
          Error 404
        </p>
        <h1 className="mb-2 text-5xl leading-none font-black tracking-tight text-white sm:text-6xl">
          LOST IN THE HIMALAYAS
        </h1>
        <p className="mb-8 max-w-xl text-sm leading-relaxed text-zinc-300 sm:text-base">
          This page does not exist or has moved. Let&apos;s get you back to the
          routes that matter.
        </p>

        <div className="grid gap-3 sm:grid-cols-3">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary/90"
          >
            <Mountain size={15} />
            Home
          </Link>
          <Link
            href="/destinations"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-white/10 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/15"
          >
            <Compass size={15} />
            Destinations
          </Link>
          <Link
            href="/booking"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-white/10 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/15"
          >
            Booking
            <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </main>
  );
}
