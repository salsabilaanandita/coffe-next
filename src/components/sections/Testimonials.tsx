import { CoffeeIcon, StarIcon } from "@/components/icons";
import { Container } from "@/components/ui/Layout";
import { testimonials } from "@/lib/data";

export function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-[#1e3932] py-16 md:py-24 text-white">
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 size-[600px] rounded-full bg-[#7a4b2f]/15 blur-3xl" aria-hidden="true" />

      <Container>
        <div className="text-center max-w-xl mx-auto">
          <p className="font-sans text-xs font-semibold uppercase tracking-widest text-[#d4e9e2]">
            Cerita Pelanggan
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-[#faf6ee] sm:text-4xl md:text-5xl">
            Kesan dari Meja Kami
          </h2>
          <p className="mt-3 text-sm text-[#d4e9e2]/80 leading-relaxed">
            Pengalaman nyata dari mereka yang menjadikan Kopi Rengkuh sebagai ruang kerja kedua dan tempat temu favorit.
          </p>
        </div>

        <ul className="relative z-10 mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <li key={t.name} className="list-none">
              <figure className="flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-white/5 p-7 shadow-lg backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-[#cba258]/30 hover:bg-white/[0.08]">
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex gap-1 text-[#cba258]" role="img" aria-label="Rating 5 dari 5 bintang">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <StarIcon key={i} size={15} className="fill-[#cba258]" />
                      ))}
                    </div>
                    {t.favorite && (
                      <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-2.5 py-0.5 text-[11px] font-medium text-[#faf6ee]">
                        <CoffeeIcon size={12} className="text-[#cba258]" />
                        {t.favorite}
                      </span>
                    )}
                  </div>
                  <blockquote className="mt-5 text-sm md:text-base leading-relaxed text-[#faf6ee]/90 font-light italic">
                    “{t.text}”
                  </blockquote>
                </div>

                <figcaption className="mt-6 flex items-center gap-3 border-t border-white/10 pt-4">
                  <div
                    className="grid size-9 shrink-0 place-items-center rounded-full bg-[#7a4b2f] text-xs font-bold text-[#faf6ee] border border-white/10"
                    aria-hidden="true"
                  >
                    {t.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-[#faf6ee]">{t.name}</div>
                    <div className="text-xs text-[#d4e9e2]/75">{t.role}</div>
                  </div>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

