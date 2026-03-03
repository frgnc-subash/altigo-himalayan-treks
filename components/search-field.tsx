"use client";

import { useEffect, useRef } from "react";
import { Search, X } from "lucide-react";
import { cn } from "@/lib/utils";

type SearchFieldProps = {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  ariaLabel: string;
  hint?: string;
  className?: string;
  enableSlashShortcut?: boolean;
};

export default function SearchField({
  value,
  onChange,
  placeholder,
  ariaLabel,
  hint,
  className,
  enableSlashShortcut = true,
}: SearchFieldProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!enableSlashShortcut) return;

    const handleShortcut = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null;
      const tag = target?.tagName;
      const isTypingContext =
        target?.isContentEditable ||
        tag === "INPUT" ||
        tag === "TEXTAREA" ||
        tag === "SELECT";

      if (isTypingContext) return;
      if (event.key === "/") {
        event.preventDefault();
        inputRef.current?.focus();
      }
    };

    document.addEventListener("keydown", handleShortcut);
    return () => document.removeEventListener("keydown", handleShortcut);
  }, [enableSlashShortcut]);

  return (
    <div className={cn("group", className)}>
      <div className="relative">
        <div className="pointer-events-none absolute inset-0 rounded-xl bg-white/[0.05] opacity-0 blur-sm transition-opacity duration-300 group-focus-within:opacity-100" />
        <Search
          strokeWidth={2.55}
          className="pointer-events-none absolute left-3 top-1/2 z-10 h-4 w-4 -translate-y-1/2 text-zinc-500 transition-colors group-focus-within:text-zinc-300"
        />

        <input
          ref={inputRef}
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={(event) => {
            if (event.key === "Escape" && value) {
              event.preventDefault();
              onChange("");
            }
          }}
          placeholder={placeholder}
          aria-label={ariaLabel}
          autoComplete="off"
          spellCheck={false}
          className="relative h-12 w-full rounded-xl border border-white/10 bg-[#090b12] pl-10 pr-12 text-sm text-zinc-100 outline-none placeholder:text-zinc-500 transition-all focus:border-sky-300/45 focus:bg-[#111524] focus:shadow-[0_0_0_2px_rgba(56,189,248,0.2)]"
        />

        {value ? (
          <button
            type="button"
            onClick={() => onChange("")}
            aria-label="Clear search"
            className="absolute right-2 top-1/2 z-10 inline-flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-md border border-white/15 bg-white/[0.08] text-zinc-200 transition hover:bg-white/[0.16] hover:text-white"
          >
            <X className="h-4 w-4" strokeWidth={2.55} />
          </button>
        ) : (
          <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 rounded border border-white/12 px-1.5 py-0.5 text-[10px] font-semibold tracking-[0.06em] text-zinc-400">
            /
          </span>
        )}
      </div>

      <p className="mt-1.5 text-[11px] text-zinc-500">
        {hint || "Press / to focus and Esc to clear"}
      </p>
    </div>
  );
}
