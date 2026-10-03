"use server";

import { redirect } from "next/navigation";
import { createSession, destroySession } from "@/lib/session";
import { isEmail, str, validateReservation, type FormState } from "@/lib/validation";
import { safeNextPath } from "@/lib/utils";

// Pengguna demo (in-memory). Ganti dengan database + hash kata sandi di produksi.
const DEMO_USERS = [
  { id: "u1", name: "Pelanggan Demo", email: "demo@kopirengkuh.id", password: "kopi12345" },
];

export async function loginAction(_prev: FormState, fd: FormData): Promise<FormState> {
  const email = str(fd, "email").toLowerCase();
  const password = String(fd.get("password") ?? "");
  const next = safeNextPath(fd.get("next"));

  if (!isEmail(email) || password.length === 0) {
    return { message: "Isi email dan kata sandi dengan benar.", values: { email } };
  }
  const user = DEMO_USERS.find((u) => u.email === email && u.password === password);
  if (!user) return { message: "Email atau kata sandi salah.", values: { email } };

  await createSession({ sub: user.id, name: user.name, email: user.email });
  redirect(next);
}

export async function logoutAction() {
  await destroySession();
  redirect("/");
}

export async function reservationAction(_prev: FormState, fd: FormData): Promise<FormState> {
  const { values, errors, valid } = validateReservation(fd);
  if (!valid) return { errors, values, message: "Periksa kembali isian Anda." };
  // TODO: simpan ke database / kirim email konfirmasi.
  return { ok: true, values, message: "Reservasi diterima." };
}

export async function contactAction(_prev: FormState, fd: FormData): Promise<FormState> {
  const values = { name: str(fd, "name"), email: str(fd, "email"), message: str(fd, "message") };
  const errors: FormState["errors"] = {};
  if (values.name.length < 2) errors.name = "Nama minimal 2 karakter.";
  if (!isEmail(values.email)) errors.email = "Format email tidak valid.";
  if (values.message.length < 10) errors.message = "Pesan minimal 10 karakter.";
  if (Object.keys(errors).length) return { errors, values, message: "Periksa kembali isian Anda." };
  // TODO: kirim ke email/CRM.
  return { ok: true, message: "Terima kasih! Pesan Anda sudah kami terima." };
}
