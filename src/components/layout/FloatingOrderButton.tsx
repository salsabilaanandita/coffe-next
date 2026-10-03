"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRightIcon, ClockIcon, CloseIcon, CoffeeIcon, PhoneIcon } from "@/components/icons";
import { contactInfo } from "@/lib/data";

export function FloatingOrderButton() {
  const [open, setOpen] = useState(false);

  return (
    <aside aria-label="Aksi Cepat & Reservasi" className="fixed bottom-6 right-6 z-50">
      {/* Floating Action Modal Drawer */}
      {open && (
        <div
          className="mb-3 w-80 max-w-[calc(100vw-3rem)] rounded-3xl border border-[#1e3932]/10 bg-white/95 p-5 shadow-2xl backdrop-blur-2xl transition-all duration-300 animate-in fade-in slide-in-from-bottom-5"
          role="dialog"
          aria-modal="false"
          aria-label="Aksi Cepat Kopi Rengkuh"
        >
          <div className="flex items-center justify-between border-b border-[#1e3932]/8 pb-3">
            <div className="flex items-center gap-2">
              <span className="grid size-7 place-items-center rounded-full bg-[#1e3932] text-[#faf6ee]">
                <CoffeeIcon size={14} />
              </span>
              <span className="font-display text-sm font-semibold text-[#1e3932]">
                Kopi Rengkuh Express
              </span>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="grid size-7 cursor-pointer place-items-center rounded-full text-[#1e3932]/60 hover:bg-[#1e3932]/5 hover:text-[#1e3932]"
              aria-label="Tutup"
            >
              <CloseIcon size={16} />
            </button>
          </div>

          <div className="mt-4 space-y-2.5">
            <Link
              href="/reservation"
              onClick={() => setOpen(false)}
              className="flex items-center justify-between rounded-2xl bg-[#1e3932] px-4 py-3 text-xs font-semibold text-[#faf6ee] shadow-xs transition hover:bg-[#162c26] active:scale-[0.96]"
            >
              <span>Reservasi Meja Online</span>
              <ArrowRightIcon size={15} />
            </Link>

            <Link
              href="/menu"
              onClick={() => setOpen(false)}
              className="flex items-center justify-between rounded-2xl bg-[#faf6ee] px-4 py-3 text-xs font-semibold text-[#1e3932] border border-[#1e3932]/10 transition hover:bg-[#f4f0e6] active:scale-[0.96]"
            >
              <span>Jelajahi Semua Menu</span>
              <ArrowRightIcon size={15} />
            </Link>

            <a
              href={`https://wa.me/${contactInfo.phone.replace(/[^0-9]/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 rounded-2xl border border-[#1e3932]/10 bg-white/80 backdrop-blur-md p-3 text-xs font-medium text-[#1e3932]/80 transition hover:bg-white"
            >
              <PhoneIcon size={14} className="text-[#1e3932]" />
              <span>Tanya Barista via WhatsApp</span>
            </a>
          </div>

          <div className="mt-3.5 flex items-center justify-between border-t border-[#1e3932]/8 pt-3 text-[11px] text-[#1e3932]/70">
            <span className="flex items-center gap-1">
              <ClockIcon size={12} className="text-[#1e3932]" /> Buka s/d 22.00 WIB
            </span>
            <span className="font-semibold text-[#1e3932]">Senopati, Jaksel</span>
          </div>
        </div>
      )}

      {/* Signature Circular Frap Order Button */}
      <button
        id="floating-frap-btn"
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        aria-label="Buka Aksi Cepat & Reservasi"
        className="group relative flex size-14 cursor-pointer items-center justify-center rounded-full bg-[#1e3932] text-[#faf6ee] shadow-frap transition-all duration-300 ease-out hover:bg-[#162c26] hover:scale-105 active:scale-[0.92]"
      >
        <span className="sr-only">Menu Cepat</span>
        {open ? (
          <CloseIcon size={22} />
        ) : (
          <CoffeeIcon size={22} className="transition-transform duration-300 group-hover:scale-110" />
        )}
        {/* Ambient status dot */}
        <span className="absolute -right-0.5 -top-0.5 flex size-3.5">
          <span className="absolute inline-flex size-full animate-ping rounded-full bg-[#cba258] opacity-75" />
          <span className="relative inline-flex size-3.5 rounded-full border-2 border-white bg-[#cba258]" />
        </span>
      </button>
    </aside>
  );
}

