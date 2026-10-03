"use client";

import { useActionState } from "react";
import { CheckIcon } from "@/components/icons";
import { Button } from "@/components/ui/Button";
import { Field } from "@/components/ui/Field";
import { reservationAction } from "@/lib/actions";
import type { FormState } from "@/lib/validation";

const initial: FormState = {};

export function ReservationForm({ defaultName = "", defaultEmail = "" }: { defaultName?: string; defaultEmail?: string }) {
  const [state, action, pending] = useActionState(reservationAction, initial);
  const v = state.values ?? {};
  const e = state.errors ?? {};
  const today = new Date().toISOString().slice(0, 10);

  if (state.ok) {
    return (
      <div className="rounded-2xl border border-leaf-600/30 bg-leaf-100 p-8" role="status">
        <span className="grid size-12 place-items-center rounded-full bg-leaf-600 text-white">
          <CheckIcon size={24} />
        </span>
        <h2 className="mt-4 text-2xl">Reservasi diterima</h2>
        <p className="mt-2 text-espresso-700">
          Terima kasih, {v.name}. Meja untuk <strong>{v.guests} orang</strong> pada <strong>{v.date}</strong> pukul{" "}
          <strong>{v.time}</strong> kami catat. Konfirmasi akan dikirim ke {v.email}.
        </p>
      </div>
    );
  }

  return (
    <form action={action} noValidate className="space-y-5">
      {state.message && (
        <p role="alert" className="rounded-xl bg-terracotta-500/10 px-4 py-3 text-sm font-semibold text-terracotta-600">
          {state.message}
        </p>
      )}
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Nama" name="name" error={e.name}>
          {(p) => <input {...p} name="name" autoComplete="name" required defaultValue={v.name ?? defaultName} />}
        </Field>
        <Field label="Email" name="email" error={e.email}>
          {(p) => <input {...p} name="email" type="email" autoComplete="email" required defaultValue={v.email ?? defaultEmail} />}
        </Field>
      </div>
      <Field label="Telepon" name="phone" error={e.phone}>
        {(p) => <input {...p} name="phone" type="tel" autoComplete="tel" required defaultValue={v.phone} placeholder="+62 812 3456 7890" />}
      </Field>
      <div className="grid gap-5 sm:grid-cols-3">
        <Field label="Tanggal" name="date" error={e.date}>
          {(p) => <input {...p} name="date" type="date" min={today} required defaultValue={v.date} />}
        </Field>
        <Field label="Jam" name="time" error={e.time} hint="Buka 08.00–22.00">
          {(p) => <input {...p} name="time" type="time" min="08:00" max="21:00" required defaultValue={v.time} />}
        </Field>
        <Field label="Jumlah tamu" name="guests" error={e.guests}>
          {(p) => <input {...p} name="guests" type="number" min={1} max={12} required defaultValue={v.guests ?? "2"} />}
        </Field>
      </div>
      <Field label="Catatan (opsional)" name="notes">
        {(p) => <textarea {...p} name="notes" rows={3} defaultValue={v.notes} placeholder="Ulang tahun, kursi bayi, dll." />}
      </Field>
      <Button type="submit" size="lg" disabled={pending} className="w-full sm:w-auto">
        {pending ? "Mengirim…" : "Kirim reservasi"}
      </Button>
    </form>
  );
}
