"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { CloseIcon, MenuIcon, UserIcon } from "@/components/icons";
import { Logo } from "@/components/layout/Logo";
import { ButtonLink } from "@/components/ui/Button";
import { nav } from "@/lib/data";
import { cn } from "@/lib/utils";

export function NavbarClient({ loggedIn }: { loggedIn: boolean }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  const authLink = loggedIn ? (
    <ButtonLink href="/account" variant="secondary" size="sm">
      <UserIcon size={16} /> Akun
    </ButtonLink>
  ) : (
    <ButtonLink href="/login" variant="secondary" size="sm">
      Masuk
    </ButtonLink>
  );

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full transition-all duration-300",
        scrolled
          ? "border-b border-[#1e3932]/10 bg-[#faf6ee]/85 backdrop-blur-xl shadow-xs"
          : "border-b border-[#1e3932]/5 bg-[#faf6ee]/70 backdrop-blur-md"
      )}
    >
      <a
        href="#konten"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-2 focus:rounded-full focus:bg-[#1e3932] focus:px-4 focus:py-2 focus:text-white z-50"
      >
        Lewati ke konten
      </a>
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6">
        <Logo />

        {/* Desktop Nav Links (Apple SF clean typographic style) */}
        <nav aria-label="Utama" className="hidden items-center gap-1 md:flex">
          {nav.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "relative rounded-full px-4 py-1.5 text-xs font-semibold tracking-tight transition-all duration-200 active:scale-95",
                  active
                    ? "bg-[#1e3932]/10 text-[#1e3932]"
                    : "text-[#1e3932]/75 hover:bg-[#1e3932]/5 hover:text-[#1e3932]"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Action Button Cluster */}
        <div className="hidden md:flex items-center gap-2.5">
          {authLink}
          <ButtonLink
            href="/reservation"
            variant="primary"
            size="sm"
            className="bg-[#1e3932] hover:bg-[#162c26] text-[#faf6ee] font-semibold"
          >
            Reservasi Meja
          </ButtonLink>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          className="grid size-10 place-items-center rounded-full hover:bg-[#1e3932]/5 md:hidden cursor-pointer text-[#1e3932] transition-all active:scale-95"
          aria-expanded={open}
          aria-controls="menu-mobile"
          aria-label={open ? "Tutup menu" : "Buka menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <CloseIcon size={20} /> : <MenuIcon size={20} />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <div
        id="menu-mobile"
        className={cn(
          "grid overflow-hidden border-t border-[#1e3932]/8 bg-[#faf6ee]/95 backdrop-blur-2xl transition-all duration-300 md:hidden",
          open ? "grid-rows-[1fr] opacity-100 shadow-xl" : "grid-rows-[0fr] border-transparent opacity-0"
        )}
        aria-hidden={!open}
      >
        <div className="min-h-0">
          <nav aria-label="Seluler" className="flex flex-col gap-1 px-4 py-5">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                tabIndex={open ? 0 : -1}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={cn(
                  "rounded-2xl px-4 py-3 text-sm font-semibold tracking-tight transition",
                  isActive(item.href) ? "bg-[#1e3932] text-white" : "text-[#1e3932] hover:bg-[#1e3932]/5"
                )}
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-3 flex flex-col gap-2 pt-3 border-t border-[#1e3932]/8">
              <ButtonLink
                href="/reservation"
                variant="primary"
                size="md"
                className="w-full bg-[#1e3932] text-[#faf6ee]"
              >
                Reservasi Meja
              </ButtonLink>
              {authLink}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}


