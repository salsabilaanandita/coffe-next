"use client";

import { useActionState } from "react";
import { Button } from "@/components/ui/Button";
import { Field } from "@/components/ui/Field";
import { contactAction } from "@/lib/actions";
import type { FormState } from "@/lib/validation";

const initial: FormState = {};

export function ContactForm() {
  const [state, action, pending] = useActionState(contactAction, initial);
  const v = state.values ?? {};
  const e = state.errors ?? {};

  if (state.ok) {
    return (
      <p role="status" className="rounded-2xl bg-leaf-100 p-6 font-semibold text-leaf-600">
        {state.message}
      </p>
    );
  }

  return (
    <form action={action} noValidate className="space-y-5">
      <Field label="Nama" name="contact-name" error={e.name}>
        {(p) => <input {...p} name="name" autoComplete="name" required defaultValue={v.name} />}
      </Field>
      <Field label="Email" name="contact-email" error={e.email}>
        {(p) => <input {...p} name="email" type="email" autoComplete="email" required defaultValue={v.email} />}
      </Field>
      <Field label="Pesan" name="contact-message" error={e.message}>
        {(p) => <textarea {...p} name="message" rows={5} required defaultValue={v.message} />}
      </Field>
      <Button type="submit" disabled={pending}>{pending ? "Mengirim…" : "Kirim pesan"}</Button>
    </form>
  );
}
