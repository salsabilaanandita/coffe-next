import { AwardIcon, CoffeeIcon, LeafIcon, StarIcon, UserIcon } from "@/components/icons";
import { Container } from "@/components/ui/Layout";

const metrics = [
  {
    icon: StarIcon,
    value: "4.9",
    label: "Google Rating",
    iconClass: "text-[#cba258]",
  },
  {
    icon: CoffeeIcon,
    value: "25+",
    label: "Menu Spesialti",
    iconClass: "text-[#d4e9e2]",
  },
  {
    icon: UserIcon,
    value: "10K+",
    label: "Pelanggan Puas",
    iconClass: "text-[#d4e9e2]",
  },
  {
    icon: LeafIcon,
    value: "Teduh",
    label: "Suasana Tenang",
    iconClass: "text-[#d4e9e2]",
  },
];

export function Features() {
  return (
    <section className="bg-[#FAF6EE] py-4">
      <Container>
        {/* Unified Dark Green Stats Bar */}
        <div className="rounded-3xl bg-[#1e3932] px-6 py-7 text-white shadow-xl md:px-12 border border-white/10 backdrop-blur-md">
          <dl className="grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-4 text-center">
            {metrics.map((m, idx) => {
              const Icon = m.icon;
              return (
                <div
                  key={m.label}
                  className={`flex flex-col items-center justify-center ${
                    idx !== metrics.length - 1 ? "sm:border-r sm:border-white/10" : ""
                  }`}
                >
                  <Icon size={22} className={`mb-2 ${m.iconClass}`} />
                  <dd className="font-display text-2xl font-bold tracking-tight md:text-3xl text-[#faf6ee]">
                    {m.value}
                  </dd>
                  <dt className="text-xs text-[#d4e9e2]/80 mt-0.5">{m.label}</dt>
                </div>
              );
            })}
          </dl>
        </div>
      </Container>
    </section>
  );
}




