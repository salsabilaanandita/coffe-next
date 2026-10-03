import { ButtonLink } from "@/components/ui/Button";
import { Section } from "@/components/ui/Layout";

export default function NotFound() {
  return (
    <Section className="min-h-[60vh] text-center">
      <p className="font-display text-7xl text-terracotta-600">404</p>
      <h1 className="mt-4 text-3xl md:text-4xl">Halaman tidak ditemukan</h1>
      <p className="mx-auto mt-3 max-w-md text-espresso-500">Mungkin kopinya sudah habis. Kembali ke beranda yuk.</p>
      <div className="mt-8"><ButtonLink href="/">Ke beranda</ButtonLink></div>
    </Section>
  );
}
