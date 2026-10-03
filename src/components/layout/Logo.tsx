import Link from "next/link";
import { CoffeeIcon } from "@/components/icons";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className="inline-flex items-center gap-2" aria-label="Kopi Rengkuh, ke beranda">
      <span className="grid size-9 place-items-center rounded-full bg-[#7a4b2f] text-[#faf6ee] shadow-xs">
        <CoffeeIcon size={18} />
      </span>
      <span className={`font-display text-xl font-bold tracking-tight ${light ? "text-[#faf6ee]" : "text-[#1e3932]"}`}>
        Kopi Rengkuh
      </span>
    </Link>
  );
}
