import type { Metadata } from "next";

import { ContactForm } from "@/components/features/ContactForm";

import {
  ClockIcon,
  InstagramIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  SparklesIcon,
} from "@/components/icons";

import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Layout";

import { contactInfo, openingHours } from "@/lib/data";

export const metadata: Metadata = {
  title: "Kontak",
  description: "Alamat, jam buka, dan formulir kontak Kopi Rengkuh.",
};

export default function ContactPage() {
  const rows = [
    {
      icon: MapPinIcon,
      label: "Alamat",
      value: contactInfo.address,
    },
    {
      icon: PhoneIcon,
      label: "Telepon",
      value: contactInfo.phone,
    },
    {
      icon: MailIcon,
      label: "Email",
      value: contactInfo.email,
    },
    {
      icon: InstagramIcon,
      label: "Instagram",
      value: contactInfo.instagram,
    },
  ];

  return (
    <main className="overflow-hidden bg-[#FAF6EE]">
      <Section className="pb-16 pt-10 md:pb-20 md:pt-14">
        {/* Intro */}
        <div className="mb-10 md:mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#1e3932]/10 bg-white/70 px-3.5 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[#9b6947]">
            <SparklesIcon size={13} />
            Hubungi Kami
          </div>

          <div className="mt-4 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <h1 className="font-display text-3xl font-bold tracking-tight text-[#1e3932] sm:text-4xl md:text-5xl">
                Mampir, ngobrol, atau sapa kami.
              </h1>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-[#1e3932]/55 md:text-base">
                Punya pertanyaan, masukan, atau sekadar ingin
                menyapa? Kami senang mendengar dari kamu.
              </p>
            </div>

            <p className="hidden pb-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#1e3932]/30 md:block">
              We would love to hear from you
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="grid items-start gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Left */}
          <div className="space-y-6">
            {/* Contact information */}
            <Card
              className="
                overflow-hidden
                border-[#1e3932]/8
                bg-white
                p-0
                shadow-[0_10px_35px_rgba(30,57,50,0.06)]
              "
            >
              <div className="border-b border-[#1e3932]/8 px-6 py-5 md:px-7">
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#9b6947]">
                  Informasi
                </p>

                <h2 className="mt-1 font-display text-xl font-bold text-[#1e3932]">
                  Temukan kami
                </h2>
              </div>

              <ul className="divide-y divide-[#1e3932]/8">
                {rows.map(({ icon: Icon, label, value }) => (
                  <li
                    key={label}
                    className="flex items-start gap-4 px-6 py-5 md:px-7"
                  >
                    <span
                      className="
                        grid size-10 shrink-0
                        place-items-center
                        rounded-xl
                        bg-[#f5ead7]
                        text-[#b88a3f]
                      "
                    >
                      <Icon size={18} />
                    </span>

                    <div className="min-w-0 pt-0.5">
                      <p className="text-[9px] font-bold uppercase tracking-[0.17em] text-[#1e3932]/40">
                        {label}
                      </p>

                      <p className="mt-1 break-words text-sm font-semibold leading-6 text-[#1e3932]">
                        {value}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </Card>

            {/* Opening hours */}
            <Card
              className="
                border-[#1e3932]/8
                bg-white
                p-6
                shadow-[0_10px_35px_rgba(30,57,50,0.06)]
                md:p-7
              "
            >
              <div className="flex items-center gap-3">
                <span className="grid size-10 place-items-center rounded-xl bg-[#1e3932] text-[#d6b46c]">
                  <ClockIcon size={18} />
                </span>

                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.17em] text-[#9b6947]">
                    Kapan kami buka
                  </p>

                  <h2 className="mt-0.5 font-display text-xl font-bold text-[#1e3932]">
                    Jam operasional
                  </h2>
                </div>
              </div>

              <div className="my-5 border-t border-[#1e3932]/8" />

              <ul className="space-y-3">
                {openingHours.map((h) => (
                  <li
                    key={h.day}
                    className="flex items-center justify-between gap-5 text-xs"
                  >
                    <span className="text-[#1e3932]/55">
                      {h.day}
                    </span>

                    <span className="font-semibold text-[#1e3932]">
                      {h.hours}
                    </span>
                  </li>
                ))}
              </ul>
            </Card>

            {/* Location */}
            <div
              className="
                rounded-[1.5rem]
                bg-[#1e3932]
                p-6
                text-white
                shadow-[0_12px_35px_rgba(30,57,50,0.10)]
                md:p-7
              "
            >
              <div className="flex items-start gap-4">
                <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-white/10 text-[#d6b46c]">
                  <MapPinIcon size={18} />
                </span>

                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.17em] text-[#d6b46c]">
                    Datang langsung
                  </p>

                  <h2 className="mt-1 font-display text-xl font-bold">
                    Sampai jumpa di Kopi Rengkuh.
                  </h2>

                  <p className="mt-2 text-xs leading-5 text-white/60">
                    {contactInfo.address}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <Card
            className="
              border-[#1e3932]/8
              bg-white
              p-6
              shadow-[0_15px_50px_rgba(30,57,50,0.07)]
              md:p-8
              lg:p-9
            "
          >
            <div className="mb-7">
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#9b6947]">
                Kirim Pesan
              </p>

              <h2 className="mt-2 font-display text-2xl font-bold text-[#1e3932] md:text-3xl">
                Ada yang ingin disampaikan?
              </h2>

              <p className="mt-2 max-w-md text-sm leading-6 text-[#1e3932]/50">
                Isi formulir di bawah ini dan kami akan menghubungi
                kamu kembali.
              </p>
            </div>

            <ContactForm />
          </Card>
        </div>
      </Section>
    </main>
  );
}
