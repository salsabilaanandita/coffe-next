import "server-only";
import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";

import { SESSION_COOKIE } from "@/lib/cookie-name";

const MAX_AGE = 60 * 60 * 24 * 7; // 7 hari

export type SessionPayload = { sub: string; name: string; email: string };

function key() {
  const secret = process.env.SESSION_SECRET ?? "dev-only-secret-ganti-di-produksi-32chars";
  return new TextEncoder().encode(secret);
}

export async function signToken(payload: SessionPayload) {
  return new SignJWT({ ...payload })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime(`${MAX_AGE}s`)
    .sign(key());
}

export async function verifyToken(token?: string): Promise<SessionPayload | null> {
  if (!token) return null;
  try {
    const { payload } = await jwtVerify(token, key(), { algorithms: ["HS256"] });
    return { sub: String(payload.sub), name: String(payload.name), email: String(payload.email) };
  } catch {
    return null;
  }
}

export async function createSession(user: SessionPayload) {
  const token = await signToken(user);
  const jar = await cookies();
  jar.set(SESSION_COOKIE, token, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: MAX_AGE,
  });
}

export async function getSession() {
  const jar = await cookies();
  return verifyToken(jar.get(SESSION_COOKIE)?.value);
}

export async function destroySession() {
  const jar = await cookies();
  jar.delete(SESSION_COOKIE);
}
