"use client";

import { useActionState } from "react";
import { Button } from "@/components/ui/Button";
import { Field } from "@/components/ui/Field";
import { loginAction } from "@/lib/actions";
import type { FormState } from "@/lib/validation";

const initial: FormState = {};

export function LoginForm({ next }: { next: string }) {
  const [state, action, pending] = useActionState(loginAction, initial);
  return (
    <form action={action} className="space-y-5">
      <input type="hidden" name="next" value={next} />
      {state.message && (
        <p role="alert" className="rounded-xl bg-terracotta-500/10 px-4 py-3 text-sm font-semibold text-terracotta-600">
          {state.message}
        </p>
      )}
      <Field label="Email" name="login-email">
        {(p) => <input {...p} name="email" type="email" autoComplete="email" required defaultValue={state.values?.email} />}
      </Field>
      <Field label="Kata sandi" name="login-password">
        {(p) => <input {...p} name="password" type="password" autoComplete="current-password" required />}
      </Field>
      <Button type="submit" size="lg" disabled={pending} className="w-full">
        {pending ? "Memproses…" : "Masuk"}
      </Button>
    </form>
  );
}
