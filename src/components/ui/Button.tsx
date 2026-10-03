import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "dark"
  | "apple-blue"
  | "ghost"
  | "inverted";

export type ButtonSize = "sm" | "md" | "lg" | "icon";

const variants: Record<ButtonVariant, string> = {
  // Single Unified Dark Green pill
  primary:
    "bg-[#1e3932] text-[#faf6ee] hover:bg-[#162c26] border border-transparent shadow-xs active:scale-[0.96]",
  // Apple/Starbucks style parchment pill with hairline
  secondary:
    "bg-[#f4f0e6] text-[#1e3932] border border-[#1e3932]/15 hover:bg-[#ede8dc] active:scale-[0.96]",
  // Warm Brown Pill
  dark:
    "bg-[#7a4b2f] text-white hover:bg-[#633a22] border border-transparent shadow-xs active:scale-[0.96]",
  // Gold Accent pill
  "apple-blue":
    "bg-[#cba258] text-[#1e3932] hover:bg-[#b88f44] font-bold border border-transparent shadow-xs active:scale-[0.96]",
  // Ghost pill
  ghost:
    "bg-transparent text-[#1e3932] hover:bg-[#1e3932]/5 border border-transparent active:scale-[0.96]",
  // Inverted white pill on dark surfaces
  inverted:
    "bg-white text-[#1e3932] border border-white hover:bg-[#faf6ee] active:scale-[0.96]",
};

const sizes: Record<ButtonSize, string> = {
  sm: "h-9 px-4 text-xs font-semibold tracking-tight",
  md: "h-11 px-6 text-sm font-semibold tracking-tight",
  lg: "h-12 px-7 text-base font-semibold tracking-tight",
  icon: "size-11 p-0",
};

type Common = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
  className?: string;
};

export function Button({
  variant = "primary",
  size = "md",
  className,
  ...props
}: Common & ComponentProps<"button">) {
  return (
    <button
      className={cn(
        "inline-flex cursor-pointer select-none items-center justify-center gap-2 rounded-full transition-all duration-200 ease-out focus-visible:outline-2 focus-visible:outline-offset-2 disabled:pointer-events-none disabled:opacity-40",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    />
  );
}

export function ButtonLink({
  variant = "primary",
  size = "md",
  className,
  ...props
}: Common & ComponentProps<typeof Link>) {
  return (
    <Link
      className={cn(
        "inline-flex cursor-pointer select-none items-center justify-center gap-2 rounded-full transition-all duration-200 ease-out focus-visible:outline-2 focus-visible:outline-offset-2",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    />
  );
}


