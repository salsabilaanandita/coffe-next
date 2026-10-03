import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

const base =
  "w-full rounded-xl border border-cream-200 bg-white px-4 py-3 text-espresso-900 placeholder:text-espresso-500/70 aria-[invalid=true]:border-terracotta-600";

type FieldProps = {
  label: string;
  name: string;
  error?: string;
  hint?: string;
  children: (props: { id: string; className: string; "aria-invalid": boolean; "aria-describedby"?: string }) => ReactNode;
};

/** Label + kontrol + pesan error, terhubung via aria. */
export function Field({ label, name, error, hint, children }: FieldProps) {
  const id = `field-${name}`;
  const descId = error || hint ? `${id}-desc` : undefined;
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-semibold text-espresso-700">
        {label}
      </label>
      {children({ id, className: base, "aria-invalid": Boolean(error), "aria-describedby": descId })}
      {(error || hint) && (
        <p id={descId} className={cn("mt-1.5 text-sm", error ? "text-terracotta-600" : "text-espresso-500")}>
          {error ?? hint}
        </p>
      )}
    </div>
  );
}
