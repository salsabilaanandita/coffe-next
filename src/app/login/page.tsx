import type { Metadata } from "next";
import { LoginForm } from "@/components/features/LoginForm";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Layout";
import { safeNextPath } from "@/lib/utils";

export const metadata: Metadata = { title: "Masuk" };

export default async function LoginPage({ searchParams }: { searchParams: Promise<{ next?: string }> }) {
  const { next } = await searchParams;
  return (
    <div className="bg-cream-100 py-16 md:py-24">
      <Container className="max-w-md">
        <h1 className="text-center text-4xl">Masuk</h1>
        <p className="mt-2 text-center text-espresso-500">Kelola reservasi dan akun Anda.</p>
        <Card className="mt-8 p-6 md:p-8">
          <LoginForm next={safeNextPath(next)} />
          <p className="mt-6 rounded-xl bg-cream-100 p-3 text-xs text-espresso-500">
            Akun demo: <strong>demo@kopirengkuh.id</strong> / <strong>kopi12345</strong>
          </p>
        </Card>
      </Container>
    </div>
  );
}
