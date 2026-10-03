export type FormState<T extends string = string> = {
  ok?: boolean;
  message?: string;
  errors?: Partial<Record<T, string>>;
  values?: Partial<Record<T, string>>;
};

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const isEmail = (v: string) => emailRe.test(v);

export function str(fd: FormData, key: string) {
  const v = fd.get(key);
  return typeof v === "string" ? v.trim() : "";
}

export const OPEN_HOUR = 8;
export const CLOSE_HOUR = 22;

export function validateReservation(fd: FormData, today = new Date()) {
  const values = {
    name: str(fd, "name"),
    email: str(fd, "email"),
    phone: str(fd, "phone"),
    date: str(fd, "date"),
    time: str(fd, "time"),
    guests: str(fd, "guests"),
    notes: str(fd, "notes"),
  };
  const errors: Partial<Record<keyof typeof values, string>> = {};

  if (values.name.length < 2) errors.name = "Nama minimal 2 karakter.";
  if (!isEmail(values.email)) errors.email = "Format email tidak valid.";
  if (!/^[+0-9\s-]{8,16}$/.test(values.phone)) errors.phone = "Nomor telepon tidak valid.";

  const todayStr = today.toISOString().slice(0, 10);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(values.date)) errors.date = "Pilih tanggal.";
  else if (values.date < todayStr) errors.date = "Tanggal tidak boleh di masa lalu.";

  const m = /^(\d{2}):(\d{2})$/.exec(values.time);
  if (!m) errors.time = "Pilih jam.";
  else {
    const minutes = Number(m[1]) * 60 + Number(m[2]);
    if (minutes < OPEN_HOUR * 60 || minutes > (CLOSE_HOUR - 1) * 60)
      errors.time = "Jam harus antara 08.00 dan 21.00.";
  }

  const guests = Number(values.guests);
  if (!Number.isInteger(guests) || guests < 1 || guests > 12) errors.guests = "Jumlah tamu 1 sampai 12.";

  return { values, errors, valid: Object.keys(errors).length === 0 };
}
