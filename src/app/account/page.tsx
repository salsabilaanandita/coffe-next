import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { UserIcon } from "@/components/icons";
import { ButtonLink, Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Layout";
import { logoutAction } from "@/lib/actions";
import { getSession } from "@/lib/session";

export const metadata: Metadata = { title: "Akun Saya", robots: { index: false } };

export default async function AccountPage() {
  const session = await getSession();
  if (!session) redirect("/login?next=/account"); // pertahanan berlapis selain middleware

  return (
    <Section tone="soft" className="min-h-[60vh]">
      <h1 className="text-4xl md:text-5xl">Halo, {session.name}</h1>
      <p className="mt-2 text-espresso-500">Selamat datang kembali di Kopi Rengkuh.</p>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <Card>
          <h2 className="flex items-center gap-2 text-xl"><UserIcon size={20} /> Profil</h2>
          <dl className="mt-4 space-y-3 text-sm">
            <div><dt className="text-espresso-500">Nama</dt><dd className="font-semibold">{session.name}</dd></div>
            <div><dt className="text-espresso-500">Email</dt><dd className="font-semibold">{session.email}</dd></div>
          </dl>
          <form action={logoutAction} className="mt-6">
            <Button type="submit" variant="secondary">Keluar</Button>
          </form>
        </Card>

        <Card>
          <h2 className="text-xl">Reservasi Anda</h2>
          <p className="mt-4 rounded-xl border border-dashed border-cream-200 p-6 text-center text-sm text-espresso-500">
            Belum ada reservasi. Riwayat akan tampil di sini setelah penyimpanan data diaktifkan.
          </p>
          <div className="mt-6">
            <ButtonLink href="/reservation">Buat reservasi</ButtonLink>
          </div>
        </Card>
      </div>
    </Section>
  );
}
