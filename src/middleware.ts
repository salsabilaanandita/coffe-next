import { NextResponse, type NextRequest } from "next/server";
import { SESSION_COOKIE } from "@/lib/cookie-name";
import { jwtVerify } from "jose";

async function isValid(token?: string) {
  if (!token) return false;
  try {
    const secret = new TextEncoder().encode(
      process.env.SESSION_SECRET ?? "dev-only-secret-ganti-di-produksi-32chars"
    );
    await jwtVerify(token, secret, { algorithms: ["HS256"] });
    return true;
  } catch {
    return false;
  }
}

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const authed = await isValid(req.cookies.get(SESSION_COOKIE)?.value);

  if (pathname.startsWith("/account") && !authed) {
    const url = req.nextUrl.clone();
    url.pathname = "/login";
    url.search = `?next=${encodeURIComponent(pathname)}`;
    return NextResponse.redirect(url);
  }
  if (pathname === "/login" && authed) {
    const url = req.nextUrl.clone();
    url.pathname = "/account";
    url.search = "";
    return NextResponse.redirect(url);
  }
  return NextResponse.next();
}

export const config = { matcher: ["/account/:path*", "/login"] };
