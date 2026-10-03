import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Container({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("mx-auto w-full max-w-6xl px-4 sm:px-6", className)}>{children}</div>;
}

const tones = {
  base: "bg-cream-50 text-espresso-900",
  soft: "bg-cream-100 text-espresso-900",
  dark: "bg-espresso-900 text-cream-50",
} as const;

export function Section({
  tone = "base",
  id,
  children,
  className,
}: {
  tone?: keyof typeof tones;
  id?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={cn("py-16 md:py-24", tones[tone], className)}>
      <Container>{children}</Container>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  level = 2,
  dark = false,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  level?: 1 | 2;
  dark?: boolean;
}) {
  const Tag = level === 1 ? "h1" : "h2";
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center")}>
      {eyebrow && (
        <p className={cn("text-xs font-semibold uppercase tracking-[0.2em]", dark ? "text-cream-200" : "text-terracotta-600")}>
          {eyebrow}
        </p>
      )}
      <Tag className={cn("mt-3 text-3xl md:text-5xl", level === 1 && "md:text-6xl")}>{title}</Tag>
      {description && (
        <p className={cn("mt-4 text-base md:text-lg", dark ? "text-cream-200" : "text-espresso-500")}>{description}</p>
      )}
    </div>
  );
}
