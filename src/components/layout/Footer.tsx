import Link from "next/link";
import { ClockIcon, InstagramIcon, MailIcon, MapPinIcon, PhoneIcon, SparklesIcon } from "@/components/icons";
import { Logo } from "@/components/layout/Logo";
import { Container } from "@/components/ui/Layout";
import { contactInfo, nav, openingHours } from "@/lib/data";

export function Footer() {
  return (
    <footer className="bg-[#1e3932] text-[#edebe9] border-t border-white/10">
      <Container className="grid gap-10 py-16 md:grid-cols-4">
        <div className="md:col-span-1">
          <Logo light />
          <p className="mt-4 max-w-xs text-xs text-white/70 leading-relaxed">
            Kopi pilihan Nusantara yang disangrai mandiri tiap pekan dan disajikan dengan penuh kehangatan sejak 2019.
          </p>
          <div className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-[#cba258]/30 bg-[#cba258]/10 px-3 py-1 text-xs text-[#cba258]">
            <SparklesIcon size={12} />
            <span>Artisan Roastery Jakarta</span>
          </div>
        </div>

        <div>
          <h2 className="font-sans text-xs font-semibold uppercase tracking-[0.15em] text-[#d4e9e2]">
            Jelajahi
          </h2>
          <ul className="mt-4 space-y-2.5 text-xs">
            {nav.map((n) => (
              <li key={n.href}>
                <Link
                  href={n.href}
                  className="text-white/80 hover:text-white transition-colors duration-200"
                >
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-sans text-xs font-semibold uppercase tracking-[0.15em] text-[#d4e9e2]">
            Jam Operasional
          </h2>
          <ul className="mt-4 space-y-2.5 text-xs">
            {openingHours.map((h) => (
              <li key={h.day} className="flex items-start gap-2 text-white/80">
                <ClockIcon size={14} className="mt-0.5 shrink-0 text-[#cba258]" />
                <span>
                  <strong className="font-semibold text-white">{h.day}</strong>
                  <br />
                  <span className="text-white/60">{h.hours}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-sans text-xs font-semibold uppercase tracking-[0.15em] text-[#d4e9e2]">
            Kontak &amp; Lokasi
          </h2>
          <ul className="mt-4 space-y-2.5 text-xs text-white/80">
            <li className="flex items-start gap-2">
              <MapPinIcon size={14} className="mt-0.5 shrink-0 text-[#cba258]" />
              <span>{contactInfo.address}</span>
            </li>
            <li className="flex items-center gap-2">
              <PhoneIcon size={14} className="text-[#cba258]" />
              <span>{contactInfo.phone}</span>
            </li>
            <li className="flex items-center gap-2">
              <MailIcon size={14} className="text-[#cba258]" />
              <span>{contactInfo.email}</span>
            </li>
            <li className="flex items-center gap-2">
              <InstagramIcon size={14} className="text-[#cba258]" />
              <span>{contactInfo.instagram}</span>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10 py-6 text-center text-xs text-white/50">
        <Container className="flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>© {new Date().getFullYear()} Kopi Rengkuh. Seluruh hak cipta dilindungi.</span>
          <span className="text-white/40 text-[11px]">Terinspirasi oleh kesempurnaan retail &amp; estetika digital modern</span>
        </Container>
      </div>
    </footer>
  );
}


