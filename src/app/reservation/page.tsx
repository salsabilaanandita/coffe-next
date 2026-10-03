import type { Metadata } from "next";

import { ReservationForm } from "@/components/features/ReservationForm";
import {
  ClockIcon,
  SparklesIcon,
} from "@/components/icons";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Layout";
import { openingHours } from "@/lib/data";
import { getSession } from "@/lib/session";

export const metadata: Metadata = {
  title: "Reservasi",
  description: "Pesan meja di Kopi Teduh secara online.",
};

export default async function ReservationPage() {
  const session = await getSession();

  return (
    <main className="min-h-screen bg-[#F8F6EF]">
      <Section className="pb-16 pt-8 md:pb-20 md:pt-12">
        {/* ================================
            INTRO
        ================================= */}
        <div className="mb-8 md:mb-10">
          <div className="flex items-center gap-2 text-[#765B45]">
            <span className="h-px w-7 bg-[#765B45]/40" />

            <span className="text-[10px] font-bold uppercase tracking-[0.2em]">
              Reservasi Meja
            </span>
          </div>

          <div className="mt-3 max-w-2xl">
            <h1 className="font-display text-3xl font-bold leading-tight tracking-tight text-[#30443A] sm:text-4xl md:text-[2.8rem]">
              Jadikan waktumu lebih berarti.
            </h1>

            <p className="mt-3 max-w-xl text-sm leading-6 text-[#30443A]/60 md:text-[15px]">
              Pesan meja terlebih dahulu dan nikmati waktu santai
              bersama kopi, makanan, dan suasana teduh Kopi Teduh.
            </p>
          </div>
        </div>

        {/* ================================
            CONTENT
        ================================= */}
        <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,1fr)_19rem]">
          {/* ================================
              RESERVATION FORM
          ================================= */}
          <Card
            className="
              overflow-hidden
              border-[#3F5A4D]/10
              bg-white
              p-0
              shadow-[0_8px_30px_rgba(48,68,58,0.06)]
            "
          >
            {/* Form Header */}
            <div className="border-b border-[#3F5A4D]/8 bg-[#F1EEE4] px-6 py-5 md:px-7">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#765B45]">
                    Reservasi
                  </p>

                  <h2 className="mt-1 font-display text-xl font-bold text-[#30443A]">
                    Pesan meja Anda
                  </h2>

                  <p className="mt-1 text-xs text-[#30443A]/50">
                    Isi detail berikut untuk membuat reservasi.
                  </p>
                </div>

                <div className="hidden size-10 shrink-0 place-items-center rounded-xl bg-[#3F5A4D] text-[#D5C6A3] sm:grid">
                  <SparklesIcon size={17} />
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="px-6 py-7 md:px-7 md:py-8">
              <ReservationForm
                defaultName={session?.name}
                defaultEmail={session?.email}
              />
            </div>
          </Card>

          {/* ================================
              SIDEBAR
          ================================= */}
          <aside className="space-y-5">
            {/* Opening Hours */}
            <Card
              className="
                border-[#3F5A4D]/10
                bg-white
                p-5
                shadow-[0_8px_30px_rgba(48,68,58,0.05)]
                md:p-6
              "
            >
              <div className="flex items-center gap-3">
                <div className="grid size-10 shrink-0 place-items-center rounded-xl bg-[#3F5A4D] text-[#D5C6A3]">
                  <ClockIcon size={18} />
                </div>

                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.17em] text-[#765B45]">
                    Waktu
                  </p>

                  <h2 className="mt-0.5 font-display text-lg font-bold text-[#30443A]">
                    Jam operasional
                  </h2>
                </div>
              </div>

              <div className="my-5 h-px bg-[#3F5A4D]/8" />

              <ul className="space-y-3.5">
                {openingHours.map((h) => (
                  <li
                    key={h.day}
                    className="flex items-center justify-between gap-3"
                  >
                    <span className="text-xs text-[#30443A]/55">
                      {h.day}
                    </span>

                    <span className="text-xs font-semibold text-[#30443A]">
                      {h.hours}
                    </span>
                  </li>
                ))}
              </ul>
            </Card>

            {/* Atmosphere */}
            <Card
              className="
                overflow-hidden
                border-[#3F5A4D]/10
                bg-white
                p-0
                shadow-[0_8px_30px_rgba(48,68,58,0.05)]
              "
            >
              <div className="p-4 md:p-5">
                <div className="flex items-start gap-3">
                  <div className="grid size-10 shrink-0 place-items-center rounded-xl bg-[#E7DDD1] text-[#765B45]">
                    <SparklesIcon size={18} />
                  </div>

                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-[0.17em] text-[#765B45]">
                      Tentang tempat
                    </p>

                    <h2 className="mt-1 font-display text-lg font-bold leading-snug text-[#30443A]">
                      Ruang beristirahat
                    </h2>
                  </div>
                </div>

                <div className="mt-4 rounded-xl bg-[#F1EEE4] px-3.5 py-3.5">
                  <p className="text-xs leading-relaxed text-[#30443A]/70">
                    Tempat tenang untuk menikmati kopi, berbincang, bekerja, atau sekadar mengambil jeda dari kesibukan.
                  </p>
                </div>
              </div>

              <div className="border-t border-[#3F5A4D]/8 bg-[#F8F6EF] px-4 py-3 md:px-5">
                <p className="text-[10px] leading-relaxed text-[#30443A]/50">
                  Datang dengan santai. Kami akan menyiapkan meja sesuai waktu reservasi.
                </p>
              </div>
            </Card>
          </aside>
        </div>
      </Section>
    </main>
  );
}