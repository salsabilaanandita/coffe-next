import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

const tones = {
  green: "bg-[#1e3932] text-[#faf6ee] border-transparent",
  gold: "bg-[#faf6ee] text-[#cba258] border-[#cba258]/30 font-semibold",
  mint: "bg-[#d4e9e2] text-[#1e3932] border-[#1e3932]/20 font-semibold",
  parchment: "bg-[#f4f0e6] text-[#1e3932] border-[#1e3932]/10",
  blue: "bg-[#7a4b2f]/10 text-[#7a4b2f] border-[#7a4b2f]/20 font-semibold",
} as const;

export function Badge({
  tone = "parchment",
  children,
  className,
}: {
  tone?: keyof typeof tones;
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-xs tracking-tight",
        tones[tone],
        className
      )}
    >
      {children}
    </span>
  );
}

export function Card({
  children,
  className,
  hoverable = true,
}: {
  children: ReactNode;
  className?: string;
  hoverable?: boolean;
}) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-[#1e3932]/8 bg-white p-6 shadow-soft transition-all duration-300 ease-out",
        hoverable && "hover:border-[#1e3932]/20 hover:shadow-card hover:translate-y-[-2px]",
        className
      )}
    >
      {children}
    </div>
  );
}

// Apple / Starbucks style Option Chip
export function OptionChip({
  active,
  onClick,
  children,
  className,
}: {
  active?: boolean;
  onClick?: () => void;
  children: ReactNode;
  className?: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "inline-flex h-9 cursor-pointer select-none items-center justify-center gap-1.5 rounded-full px-4 text-xs font-semibold tracking-tight transition-all duration-200 active:scale-[0.95]",
        active
          ? "border-2 border-[#1e3932] bg-[#1e3932] text-white shadow-xs"
          : "border border-[#1e3932]/15 bg-white text-[#1e3932] hover:border-[#1e3932]/40 hover:bg-[#f4f0e6]",
        className
      )}
    >
      {children}
    </button>
  );
}


