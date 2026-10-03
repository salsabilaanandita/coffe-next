import Image from "next/image";
import { ArrowRightIcon, PhoneIcon } from "@/components/icons";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Layout";
import { contactInfo } from "@/lib/data";

export function CtaBanner() {
  return (
    <section className="relative overflow-hidden py-24">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=2000&q=90"
          alt="Cafe Interior"
          fill
          className="object-cover object-center"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-[#21140d]/80 backdrop-blur-[2px]" />
      </div>

      <Container className="relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Siap Menikmati Seduhan Kami?
          </h2>
          <p className="mt-4 text-white/80 max-w-xl mx-auto">
            Pesan mejamu sekarang dan pastikan kamu mendapatkan tempat duduk terbaik untuk menikmati kopi di sore hari.
          </p>

          {/* Reservation Bar */}
          <div className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between rounded-3xl bg-white/10 px-6 py-6 text-white shadow-2xl border border-white/20 backdrop-blur-md">
            <div className="flex items-center gap-4 text-left">
              <span className="grid size-12 place-items-center rounded-2xl bg-[#5b3624] text-white shadow-inner">
                <PhoneIcon size={20} />
              </span>
              <div>
                <p className="text-xs uppercase tracking-widest text-white/70 font-medium">
                  Hubungi Kami
                </p>
                <p className="font-display text-xl sm:text-2xl font-bold tracking-tight text-white">
                  {contactInfo.phone}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <ButtonLink
                href="/reservation"
                variant="primary"
                size="md"
                className="bg-[#d5aa70] hover:bg-[#c2965a] text-[#21140d] font-bold shadow-lg"
              >
                Reservasi Sekarang <ArrowRightIcon size={15} />
              </ButtonLink>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}




