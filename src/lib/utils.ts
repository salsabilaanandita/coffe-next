export function cn(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

export function formatRupiah(value: number) {
  return "Rp " + new Intl.NumberFormat("id-ID").format(value);
}

/** Hanya terima path internal untuk mencegah open redirect. */
export function safeNextPath(value: unknown, fallback = "/account") {
  if (typeof value !== "string") return fallback;
  if (!value.startsWith("/") || value.startsWith("//")) return fallback;
  return value;
}
