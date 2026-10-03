import Image from "next/image";

import {
  ArrowRightIcon,
  SparklesIcon,
  StarIcon,
} from "@/components/icons";

import { ButtonLink } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* ================= HERO BACKGROUND ================= */}
      <div className="relative min-h-[620px] w-full md:min-h-[700px]">

        {/* Coffee Image */}
        <Image
          src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=2000&q=90"
          alt="Coffee shop"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Dark brown overlay */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-[#21140d]/85 via-[#3b2418]/55 to-[#21140d]/20"
          aria-hidden="true"
        />

        {/* Soft bottom fade */}
        <div
          className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#FAF6EE]/30 to-transparent"
          aria-hidden="true"
        />

        {/* ================= CONTENT ================= */}
        <div className="relative z-10 mx-auto flex min-h-[620px] max-w-7xl items-center px-6 py-20 md:min-h-[700px] md:px-10 lg:px-16">

          <div className="max-w-xl text-white">

            {/* Small badge */}
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-semibold backdrop-blur-md">

              <SparklesIcon
                size={13}
                className="text-[#d5aa70]"
              />

              <span>
                Kafe &amp; Micro-Roastery Jakarta
              </span>

            </div>

            {/* Heading */}
            <h1 className="font-display text-5xl font-bold leading-[0.95] tracking-tight sm:text-6xl md:text-7xl">

              Savor the
              <br />

              <span className="font-normal italic text-[#e2bb83]">
                Perfect Brew.
              </span>

            </h1>

            {/* Description */}
            <p className="mt-6 max-w-md text-sm leading-relaxed text-white/80 md:text-base">
              Nikmati kopi pilihan yang diseduh dengan penuh perhatian,
              sajian lezat, dan suasana hangat untuk menemani setiap momen.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap gap-3">

              <ButtonLink
                href="/menu"
                variant="primary"
                size="md"
                className="bg-[#5b3624] font-semibold text-white shadow-lg hover:bg-[#432719]"
              >
                Jelajahi Menu

                <ArrowRightIcon size={15} />
              </ButtonLink>

              <ButtonLink
                href="/reservation"
                variant="secondary"
                size="md"
                className="border-white/30 bg-white/10 text-white backdrop-blur-md hover:bg-white/20"
              >
                Reservasi Meja
              </ButtonLink>

            </div>

            {/* Rating */}
            <div className="mt-8 flex items-center gap-3">

              <div className="flex items-center gap-0.5">
                {[1, 2, 3, 4, 5].map((star) => (
                  <StarIcon
                    key={star}
                    size={14}
                    className="fill-[#d5aa70] text-[#d5aa70]"
                  />
                ))}
              </div>

              <span className="text-xs text-white/70">
                Loved by coffee enthusiasts
              </span>

            </div>
          </div>
        </div>

        {/* ================= FLOATING INFO ================= */}
        <div className="absolute bottom-8 right-6 z-10 hidden rounded-2xl border border-white/20 bg-black/20 px-5 py-4 text-white backdrop-blur-md md:block lg:right-12">

          <div className="flex items-center gap-3">

            <span className="grid size-10 place-items-center rounded-xl bg-white/10">
              <StarIcon
                size={17}
                className="fill-[#d5aa70] text-[#d5aa70]"
              />
            </span>

            <div>
              <p className="text-xs font-bold">
                Freshly Roasted
              </p>

              <p className="mt-0.5 text-[11px] text-white/60">
                Disangrai setiap minggu
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
