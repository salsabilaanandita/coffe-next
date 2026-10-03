import type { Metadata } from "next";

import { MenuExplorer } from "@/components/features/MenuExplorer";
import { Section } from "@/components/ui/Layout";

export const metadata: Metadata = {
  title: "Menu",
  description:
    "Daftar lengkap kopi, non-kopi, makanan, dan dessert Kopi Rengkuh.",
};

export default function MenuPage() {
  return (
    <main className="bg-[#FAF6EE]">
      <Section className="pt-8 pb-16 md:pt-10 md:pb-20">
{/* Intro */}
<div className="mb-10 md:mb-12">
  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#9b6947]">
    Kopi Rengkuh
  </p>

  <div className="mt-3 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
    <div>
      <h1 className="font-display text-3xl font-bold tracking-tight text-[#1e3932] md:text-4xl">
        Pilihan untuk setiap suasana.
      </h1>

      <p className="mt-4 max-w-2xl text-sm leading-7 text-[#1e3932]/55 md:text-base">
        Kopi pilihan, minuman segar, makanan, dan dessert yang
        dibuat untuk menemani setiap momen.
      </p>
    </div>

    <span className="hidden pb-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#1e3932]/35 md:block">
      Crafted with care
    </span>
  </div>
</div>

<MenuExplorer />
      </Section>
    </main>
  );
}
