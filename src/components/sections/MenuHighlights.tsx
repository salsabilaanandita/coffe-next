import { ArrowRightIcon, SparklesIcon } from "@/components/icons";
import { MenuCard } from "@/components/features/MenuCard";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Layout";
import { menuItems } from "@/lib/data";

export function MenuHighlights() {
  // Take 4 featured items matching the reference: Kopi, Pastry, Dessert, Signature
  const items = menuItems.filter((m) => m.featured).slice(0, 4);

  return (
    <section className="bg-[#FAF6EE] py-14 md:py-20">
      <Container>
        <div className="text-center max-w-xl mx-auto">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-[#1e3932]">
            <SparklesIcon size={13} className="text-[#cba258]" />
            <span>Pilihan Terfavorit</span>
          </div>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-[#1e3932] sm:text-4xl md:text-5xl">
            Our Popular Picks
          </h2>
          <p className="mt-3 text-sm text-[#1e3932]/75">
            Racikan spesial dan sajian hangat yang paling dicintai oleh para penikmat Kopi Rengkuh.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <MenuCard key={item.id} item={item} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <ButtonLink
            href="/menu"
            variant="secondary"
            size="md"
            className="border-[#1e3932]/15 bg-white/80 backdrop-blur-md text-[#1e3932] hover:bg-[#f4f0e6] shadow-2xs font-semibold"
          >
            Lihat Semua Menu <ArrowRightIcon size={15} />
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}



