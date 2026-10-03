import type { Metadata } from "next";
import Image from "next/image";

import { HeartIcon } from "@/components/icons/extra";
import {
  ArrowRightIcon,
  CoffeeIcon,
  LeafIcon,
  SparklesIcon,
  StarIcon,
} from "@/components/icons";

import { CtaBanner } from "@/components/sections/CtaBanner";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Layout";

import { team } from "@/lib/data";

export const metadata: Metadata = {
  title: "Tentang Kami",
  description: "Kisah, nilai, dan tim di balik Kopi Rengkuh.",
};

const values = [
  {
    icon: LeafIcon,
    title: "Dekat dengan petani",
    text: "Kami membeli langsung dengan harga adil dan mencatat asal tiap biji.",
  },
  {
    icon: CoffeeIcon,
    title: "Sabar dalam seduhan",
    text: "Setiap resep ditakar, diuji, dan disempurnakan sebelum masuk menu.",
  },
  {
    icon: HeartIcon,
    title: "Ramah untuk semua",
    text: "Ruang terbuka untuk pekerja, keluarga, dan siapa pun yang butuh jeda.",
  },
];

const stats = [
  { v: "2019", l: "Tahun berdiri" },
  { v: "12+", l: "Petani mitra" },
  { v: "40K+", l: "Cangkir tersaji" },
];

export default function AboutPage() {
  return (
    <>
      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative overflow-hidden">
        <div className="relative min-h-[560px] w-full md:min-h-[640px]">
          <Image
            src="https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&w=2200&q=90"
            alt="Suasana kedai Kopi Rengkuh"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />

          {/* Overlay */}
          <div
            className="
              absolute inset-0
              bg-gradient-to-r
              from-[#1b120d]/90
              via-[#342017]/70
              to-[#2b1b12]/35
            "
            aria-hidden="true"
          />

          <div
            className="
              absolute inset-0
              bg-gradient-to-t
              from-[#21140d]/60
              via-transparent
              to-transparent
            "
            aria-hidden="true"
          />

          {/* Content */}
          <div className="relative z-10 mx-auto flex min-h-[560px] max-w-7xl items-center px-6 py-20 md:min-h-[640px] md:px-10 lg:px-16">
            <div className="max-w-2xl text-white">
              <div
                className="
                  mb-6 inline-flex items-center gap-2
                  rounded-full
                  border border-white/20
                  bg-white/10
                  px-4 py-2
                  text-xs font-semibold
                  backdrop-blur-xl
                "
              >
                <SparklesIcon
                  size={13}
                  className="text-[#d6b46c]"
                />
                <span>Tentang Kopi Rengkuh</span>
              </div>

              <h1
                className="
                  font-display
                  text-5xl font-bold
                  leading-[0.95]
                  tracking-tight
                  sm:text-6xl
                  md:text-7xl
                "
              >
                Kopi yang punya
                <br />
                <span className="font-normal italic text-[#e2bb83]">
                  sebuah cerita.
                </span>
              </h1>

              <p className="mt-7 max-w-xl text-sm leading-7 text-white/75 md:text-base">
                Dari sebuah mesin sangrai kecil hingga menjadi ruang hangat
                untuk bertemu, bekerja, dan menikmati secangkir kopi yang
                dibuat dengan penuh perhatian.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#cerita"
                  className="
                    inline-flex items-center gap-2
                    rounded-full
                    bg-[#5b3624]
                    px-5 py-3
                    text-xs font-semibold
                    text-white
                    shadow-lg
                    transition
                    hover:bg-[#432719]
                    active:scale-95
                  "
                >
                  Cerita Kami
                  <ArrowRightIcon size={14} />
                </a>

                <a
                  href="#nilai"
                  className="
                    inline-flex items-center gap-2
                    rounded-full
                    border border-white/25
                    bg-white/10
                    px-5 py-3
                    text-xs font-semibold
                    text-white
                    backdrop-blur-md
                    transition
                    hover:bg-white/20
                    active:scale-95
                  "
                >
                  Nilai Kami
                </a>
              </div>

              <div className="mt-9 flex items-center gap-3">
                <div className="flex items-center gap-0.5">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <StarIcon
                      key={star}
                      size={14}
                      className="fill-[#d6b46c] text-[#d6b46c]"
                    />
                  ))}
                </div>

                <span className="text-xs text-white/60">
                  Dibuat dengan perhatian sejak 2019
                </span>
              </div>
            </div>
          </div>

          {/* Floating badge */}
          <div
            className="
              absolute bottom-8 right-6 z-10
              hidden
              rounded-2xl
              border border-white/15
              bg-black/20
              px-5 py-4
              text-white
              backdrop-blur-xl
              md:block
              lg:right-12
            "
          >
            <div className="flex items-center gap-3">
              <span
                className="
                  grid size-10 place-items-center
                  rounded-xl
                  bg-white/10
                "
              >
                <CoffeeIcon
                  size={18}
                  className="text-[#e2bb83]"
                />
              </span>

              <div>
                <p className="text-xs font-bold">
                  Micro-Roastery
                </p>
                <p className="mt-0.5 text-[11px] text-white/55">
                  Disangrai setiap minggu
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          STORY
      ========================================================= */}
      <section
        id="cerita"
        className="relative overflow-hidden bg-[#faf6ee] py-20 md:py-28"
      >
        <div
          className="
            pointer-events-none
            absolute -right-32 top-20
            size-72 rounded-full
            bg-[#d6b46c]/10 blur-3xl
          "
        />

        <div
          className="
            pointer-events-none
            absolute -left-32 bottom-0
            size-72 rounded-full
            bg-[#1e3932]/10 blur-3xl
          "
        />

        <div className="relative mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
          <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            {/* Image */}
            <div className="relative">
              <div
                className="
                  relative aspect-[4/5]
                  overflow-hidden
                  rounded-[2rem]
                  border border-[#1e3932]/10
                  shadow-[0_25px_70px_rgba(30,57,50,0.12)]
                "
              >
                <Image
                  src="https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&fit=crop&w=1200&q=90"
                  alt="Proses penyeduhan kopi"
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#1e3932]/55 via-transparent to-transparent" />
              </div>

              {/* Small floating card */}
              <div
                className="
                  absolute -bottom-5 -right-3
                  rounded-2xl
                  border border-white/50
                  bg-white/75
                  px-5 py-4
                  shadow-[0_15px_40px_rgba(30,57,50,0.12)]
                  backdrop-blur-xl
                  sm:-right-6
                "
              >
                <div className="flex items-center gap-3">
                  <span
                    className="
                      grid size-10 place-items-center
                      rounded-xl
                      bg-[#1e3932]
                      text-[#e2bb83]
                    "
                  >
                    <LeafIcon size={18} />
                  </span>

                  <div>
                    <p className="text-xs font-bold text-[#1e3932]">
                      Lokal & Terpilih
                    </p>
                    <p className="mt-0.5 text-[10px] text-[#1e3932]/50">
                      Gayo · Toraja · Flores
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Text */}
            <div>
              <div
                className="
                  inline-flex items-center gap-2
                  rounded-full
                  border border-[#1e3932]/10
                  bg-white/70
                  px-4 py-2
                  text-[10px]
                  font-bold uppercase
                  tracking-[0.16em]
                  text-[#7a4b2f]
                  backdrop-blur-md
                "
              >
                <CoffeeIcon size={13} />
                Perjalanan Kami
              </div>

              <h2
                className="
                  mt-5
                  font-display
                  text-4xl font-bold
                  leading-tight
                  tracking-tight
                  text-[#1e3932]
                  md:text-5xl
                "
              >
                Berawal dari satu
                <br />
                <span className="font-normal italic text-[#9b6848]">
                  mesin sangrai kecil.
                </span>
              </h2>

              <div className="mt-7 space-y-5 text-sm leading-7 text-[#1e3932]/65 md:text-base">
                <p>
                  Kopi Rengkuh dimulai pada 2019 ketika dua sahabat ingin
                  membuktikan bahwa kopi lokal layak mendapat panggung. Kami
                  memulai semuanya dengan satu mesin sangrai dan sebuah meja
                  kecil.
                </p>

                <p>
                  Seiring waktu, perjalanan itu membawa kami bertemu dengan
                  lebih banyak petani, belajar memahami karakter setiap biji,
                  dan menemukan cara terbaik untuk menyajikannya.
                </p>

                <p>
                  Kini kami menyangrai setiap pekan, bekerja sama dengan
                  petani di Gayo, Toraja, dan Flores, serta menciptakan ruang
                  hangat bagi siapa saja yang ingin menikmati jeda.
                </p>
              </div>

              <div className="mt-8 h-px w-20 bg-[#d6b46c]" />
            </div>
          </div>

          {/* Stats */}
          <dl
            className="
              mt-20
              grid
              overflow-hidden
              rounded-[1.75rem]
              border border-[#1e3932]/10
              bg-white/60
              shadow-[0_15px_45px_rgba(30,57,50,0.06)]
              backdrop-blur-xl
              sm:grid-cols-3
            "
          >
            {stats.map((s, index) => (
              <div
                key={s.l}
                className={`
                  relative px-6 py-8 text-center
                  sm:py-10
                  ${
                    index !== stats.length - 1
                      ? "border-b border-[#1e3932]/10 sm:border-b-0 sm:border-r"
                      : ""
                  }
                `}
              >
                <dd
                  className="
                    font-display
                    text-4xl font-bold
                    tracking-tight
                    text-[#1e3932]
                    md:text-5xl
                  "
                >
                  {s.v}
                </dd>

                <dt
                  className="
                    mt-2
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.16em]
                    text-[#1e3932]/45
                  "
                >
                  {s.l}
                </dt>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* =========================================================
          VALUES
      ========================================================= */}
      <section
        id="nilai"
        className="
          relative overflow-hidden
          bg-[#eee7da]
          py-20 md:py-28
        "
      >
        <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
          <div className="mx-auto max-w-2xl text-center">
            <span
              className="
                inline-flex items-center gap-2
                rounded-full
                border border-[#1e3932]/10
                bg-white/60
                px-4 py-2
                text-[10px]
                font-bold uppercase
                tracking-[0.16em]
                text-[#7a4b2f]
                backdrop-blur-md
              "
            >
              <LeafIcon size={13} />
              Nilai Kami
            </span>

            <h2
              className="
                mt-5
                font-display
                text-4xl font-bold
                tracking-tight
                text-[#1e3932]
                md:text-5xl
              "
            >
              Yang kami pegang
            </h2>

            <p className="mt-4 text-sm leading-6 text-[#1e3932]/55">
              Prinsip sederhana yang menjadi bagian dari setiap biji,
              seduhan, dan interaksi di Kopi Rengkuh.
            </p>
          </div>

          <ul className="mt-12 grid gap-5 md:grid-cols-3">
            {values.map(({ icon: Icon, title, text }, index) => (
              <li key={title}>
                <Card
                  className="
                    group
                    h-full
                    rounded-[1.75rem]
                    border-[#1e3932]/10
                    bg-white/65
                    p-7
                    shadow-[0_10px_35px_rgba(30,57,50,0.05)]
                    backdrop-blur-xl
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:bg-white/85
                    hover:shadow-[0_20px_45px_rgba(30,57,50,0.10)]
                  "
                >
                  <div className="flex items-start justify-between">
                    <span
                      className="
                        grid size-14 place-items-center
                        rounded-2xl
                        bg-[#1e3932]
                        text-[#e2bb83]
                        shadow-sm
                        transition-transform
                        duration-300
                        group-hover:scale-105
                      "
                    >
                      <Icon size={24} />
                    </span>

                    <span
                      className="
                        text-[10px]
                        font-bold
                        tracking-[0.15em]
                        text-[#1e3932]/20
                      "
                    >
                      0{index + 1}
                    </span>
                  </div>

                  <h3
                    className="
                      mt-6
                      font-display
                      text-xl font-bold
                      text-[#1e3932]
                    "
                  >
                    {title}
                  </h3>

                  <p
                    className="
                      mt-3
                      text-sm
                      leading-6
                      text-[#1e3932]/55
                    "
                  >
                    {text}
                  </p>
                </Card>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* =========================================================
          TEAM
      ========================================================= */}
      <section
        className="
          relative overflow-hidden
          bg-[#faf6ee]
          py-20 md:py-28
        "
      >
        <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
             <span
                className="
                  inline-flex items-center gap-2
                  rounded-full
                  border border-[#1e3932]/10
                  bg-white/70
                  px-4 py-2
                  text-[10px]
                  font-bold uppercase
                  tracking-[0.16em]
                  text-[#7a4b2f]
                  backdrop-blur-md
                "
              >
                <CoffeeIcon size={13} />
                Tim Kami
              </span>

              <h2
                className="
                  mt-5
                  font-display
                  text-4xl font-bold
                  tracking-tight
                  text-[#1e3932]
                  md:text-5xl
                "
              >
                Orang di balik bar
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-6 text-[#1e3932]/55">
                Orang-orang yang memastikan setiap cangkir punya rasa,
                cerita, dan pengalaman yang berkesan.
              </p>
            </div>

            <div
              className="
                hidden
                items-center gap-2
                text-xs font-semibold
                text-[#1e3932]/45
                md:flex
              "
            >
              <span className="grid size-8 place-items-center rounded-full bg-[#eee7da]">
                <CoffeeIcon size={14} />
              </span>
              The people behind the brew
            </div>
          </div>

          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((m) => {
              const initials = m.name
                .split(" ")
                .map((p) => p[0])
                .join("")
                .slice(0, 2);

              return (
                <li key={m.name}>
                  <div
                    className="
                      group
                      rounded-[1.75rem]
                      border border-[#1e3932]/10
                      bg-white/60
                      p-6
                      text-center
                      shadow-[0_10px_35px_rgba(30,57,50,0.05)]
                      backdrop-blur-xl
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:bg-white/85
                      hover:shadow-[0_20px_45px_rgba(30,57,50,0.10)]
                    "
                  >
                    <div
                      className="
                        relative mx-auto grid size-28
                        place-items-center
                        overflow-hidden
                        rounded-full
                        border-4
                        border-white/80
                        bg-[#1e3932]
                        font-display
                        text-3xl font-bold
                        text-[#e2bb83]
                        shadow-lg
                        transition-transform
                        duration-300
                        group-hover:scale-105
                      "
                    >
                      <div
                        className="
                          absolute inset-0
                          bg-gradient-to-br
                          from-[#315b4e]
                          via-[#1e3932]
                          to-[#13271f]
                        "
                      />

                      <span className="relative">
                        {initials}
                      </span>
                    </div>

                    <h3
                      className="
                        mt-5
                        font-display
                        text-xl font-bold
                        text-[#1e3932]
                      "
                    >
                      {m.name}
                    </h3>

                    <p className="mt-1 text-xs font-medium text-[#7a4b2f]">
                      {m.role}
                    </p>

                    <div className="mx-auto mt-4 h-px w-10 bg-[#d6b46c]" />
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
