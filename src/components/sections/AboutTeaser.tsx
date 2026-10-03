import Image from "next/image";
import { ArrowRightIcon, SparklesIcon } from "@/components/icons";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Layout";

export function AboutTeaser() {
  return (
    <section className="bg-[#FAF6EE] py-14 md:py-20 overflow-hidden">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-12">
          {/* Left Text Column */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-[#1e3932]">
              <SparklesIcon size={13} className="text-[#cba258]" />
              <span>Tentang Ruang Temu Kami</span>
            </div>

            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-[#1e3932] sm:text-4xl md:text-5xl">
              Selamat Datang di <br />
              <span className="italic font-normal text-[#7a4b2f]">Kopi Rengkuh</span>
            </h2>

            <p className="mt-4 text-sm md:text-base leading-relaxed text-[#1e3932]/75">
              Kami menyajikan kopi Nusantara pilihan yang disangrai segar setiap pekan, kue serta sajian artisan buatan sendiri, berpadu dengan suasana hangat dan teduh di waktu sore.
            </p>

            <div className="mt-7 flex items-center gap-3">
              <ButtonLink
                href="/about"
                variant="primary"
                size="md"
                className="bg-[#1e3932] hover:bg-[#162c26] text-[#faf6ee] font-semibold shadow-xs"
              >
                Cerita Kami <ArrowRightIcon size={15} />
              </ButtonLink>
              <ButtonLink
                href="/menu"
                variant="secondary"
                size="md"
                className="border-[#1e3932]/15 bg-white/80 backdrop-blur-md text-[#1e3932] hover:bg-[#f4f0e6]"
              >
                Lihat Menu
              </ButtonLink>
            </div>
          </div>

          {/* Right 3-Photo Bento Collage Column */}
          <div className="lg:col-span-7 grid grid-cols-12 gap-3.5">
            {/* Main Cafe Interior Photo */}
            <div className="col-span-7 relative aspect-[4/5] overflow-hidden rounded-3xl border-2 border-white shadow-apple-product bg-[#f4f0e6]">
              <Image
                src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80"
                alt="Suasana Hangat Interior Kopi Rengkuh"
                fill
                sizes="(max-width: 768px) 60vw, 40vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1e3932]/50 via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-3 left-3 right-3 rounded-2xl bg-[#1e3932]/85 p-3 backdrop-blur-md border border-white/10 text-white">
                <p className="text-xs font-semibold text-[#faf6ee]">Suasana Teduh &amp; Hening</p>
                <p className="text-[11px] text-[#faf6ee]/75">Cocok untuk bekerja &amp; bercengkerama</p>
              </div>
            </div>

            {/* Stacked 2 Photos on the Right */}
            <div className="col-span-5 flex flex-col gap-3.5 justify-between">
              {/* Photo 1: Pastry / Cake */}
              <div className="relative aspect-square w-full overflow-hidden rounded-3xl border-2 border-white/80 shadow-md bg-[#e5dfd5]">
             <Image
                src="https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=500&q=80"
                alt="Kopi Spesial Kopi Rengkuh"
                fill
                sizes="(max-width: 768px) 40vw, 20vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
              </div>

              {/* Photo 2: Iced Coffee Drink */}
              <div className="relative aspect-square w-full overflow-hidden rounded-3xl border-2 border-white/80 shadow-md bg-[#e5dfd5]">
              <Image
  src="https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=500&q=80"
  alt="Minuman Iced Coffee Kopi Rengkuh"
  fill
  sizes="(max-width: 768px) 40vw, 20vw"
  className="object-cover object-[center_80%] transition-transform duration-700 hover:scale-105"
/>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}




