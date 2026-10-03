"use client";

import { useMemo, useState } from "react";

import { MenuCard } from "@/components/features/MenuCard";

import {
  CloseIcon,
  SearchIcon,
  StarIcon,
} from "@/components/icons";

import {
  categories,
  menuItems,
  type Category,
} from "@/lib/data";

import { cn } from "@/lib/utils";

export function MenuExplorer() {
  const [cat, setCat] =
    useState<"Semua" | Category>("Semua");

  const [onlySignature, setOnlySignature] =
    useState(false);

  const [q, setQ] = useState("");

  const items = useMemo(() => {
    const term = q.trim().toLowerCase();

    return menuItems.filter((m) => {
      const matchCat =
        cat === "Semua" || m.category === cat;

      const matchSig =
        !onlySignature ||
        m.tag === "Signature" ||
        m.tag === "Best Seller";

      const matchTerm =
        !term ||
        m.name.toLowerCase().includes(term) ||
        m.description.toLowerCase().includes(term) ||
        (m.notes &&
          m.notes.some((n) =>
            n.toLowerCase().includes(term)
          )) ||
        (m.origin &&
          m.origin.toLowerCase().includes(term));

      return matchCat && matchSig && matchTerm;
    });
  }, [cat, onlySignature, q]);

  const hasFilter =
    cat !== "Semua" ||
    onlySignature ||
    q.trim() !== "";

  const resetFilters = () => {
    setCat("Semua");
    setOnlySignature(false);
    setQ("");
  };

  return (
    <div>

      {/* ================= FILTER BAR ================= */}
      <div
        className="
          rounded-[1.75rem]
          border border-[#1e3932]/8
          bg-white/65
          p-4
          shadow-[0_10px_35px_rgba(30,57,50,0.05)]
          backdrop-blur-xl
          md:p-5
        "
      >
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

          {/* Categories */}
          <div
            role="group"
            aria-label="Filter kategori"
            className="flex flex-wrap items-center gap-2"
          >
            {categories.map((c) => {
              const active = cat === c;

              return (
                <button
                  key={c}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setCat(c)}
                  className={cn(
                    `
                      h-10 cursor-pointer
                      rounded-full
                      px-4
                      text-[11px]
                      font-semibold
                      tracking-tight
                      transition-all
                      duration-200
                      active:scale-95
                    `,
                    active
                      ? `
                        bg-[#1e3932]
                        text-[#faf6ee]
                        shadow-sm
                      `
                      : `
                        border border-[#1e3932]/10
                        bg-white/70
                        text-[#1e3932]/70
                        hover:border-[#1e3932]/25
                        hover:bg-white
                        hover:text-[#1e3932]
                      `
                  )}
                >
                  {c}
                </button>
              );
            })}

            {/* Favorite */}
            <button
              type="button"
              onClick={() =>
                setOnlySignature((value) => !value)
              }
              aria-pressed={onlySignature}
              className={cn(
                `
                  inline-flex h-10
                  cursor-pointer
                  items-center
                  gap-1.5
                  rounded-full
                  px-4
                  text-[11px]
                  font-semibold
                  transition-all
                  active:scale-95
                `,
                onlySignature
                  ? `
                    border border-[#cba258]/40
                    bg-[#fbf5e8]
                    text-[#7a4b2f]
                    shadow-sm
                  `
                  : `
                    border border-[#1e3932]/10
                    bg-white/70
                    text-[#1e3932]/60
                    hover:bg-white
                    hover:text-[#1e3932]
                  `
              )}
            >
              <StarIcon
                size={13}
                className={
                  onlySignature
                    ? "fill-[#cba258] text-[#cba258]"
                    : "text-[#cba258]"
                }
              />

              <span>Pilihan Favorit</span>
            </button>
          </div>

          {/* Search */}
          <div className="relative w-full lg:max-w-xs">

            <SearchIcon
              size={16}
              className="
                pointer-events-none
                absolute left-4 top-1/2
                -translate-y-1/2
                text-[#1e3932]/35
              "
            />

            <label
              htmlFor="cari-menu"
              className="sr-only"
            >
              Cari menu atau rasa
            </label>

            <input
              id="cari-menu"
              type="search"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Cari kopi, origin, atau rasa..."
              className="
                h-10 w-full
                rounded-full
                border border-[#1e3932]/10
                bg-white/80
                pl-10 pr-10
                text-[11px]
                font-medium
                text-[#1e3932]
                shadow-sm
                outline-none
                placeholder:text-[#1e3932]/35
                transition-all
                focus:border-[#1e3932]/30
                focus:bg-white
                focus:ring-4
                focus:ring-[#1e3932]/5
              "
            />

            {q && (
              <button
                type="button"
                onClick={() => setQ("")}
                aria-label="Hapus pencarian"
                className="
                  absolute right-3 top-1/2
                  -translate-y-1/2
                  cursor-pointer
                  rounded-full
                  p-1
                  text-[#1e3932]/40
                  transition
                  hover:bg-[#f4f0e6]
                  hover:text-[#1e3932]
                "
              >
                <CloseIcon size={13} />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* ================= RESULT INFO ================= */}
      <div className="mt-6 flex items-center justify-between px-1">

        <div>
          <p
            className="
              text-[10px]
              font-bold
              uppercase
              tracking-[0.16em]
              text-[#1e3932]/45
            "
            aria-live="polite"
          >
            {items.length} sajian tersedia
          </p>

          {(cat !== "Semua" || onlySignature) && (
            <p className="mt-1 text-xs text-[#1e3932]/55">
              {cat !== "Semua" && cat}

              {cat !== "Semua" && onlySignature && " · "}

              {onlySignature && "Pilihan Favorit"}
            </p>
          )}
        </div>

        {hasFilter && (
          <button
            type="button"
            onClick={resetFilters}
            className="
              cursor-pointer
              rounded-full
              border border-[#1e3932]/10
              bg-white/60
              px-3 py-1.5
              text-[10px]
              font-semibold
              text-[#1e3932]/60
              transition
              hover:bg-white
              hover:text-[#1e3932]
            "
          >
            Reset Filter
          </button>
        )}
      </div>

      {/* ================= MENU GRID ================= */}
      {items.length === 0 ? (
        <div
          className="
            mt-8
            rounded-[1.75rem]
            border border-dashed
            border-[#1e3932]/15
            bg-white/55
            p-12
            text-center
            backdrop-blur-md
          "
        >
          <div
            className="
              mx-auto grid size-14
              place-items-center
              rounded-full
              bg-[#f3eee5]
              text-[#1e3932]
            "
          >
            <SearchIcon size={22} />
          </div>

          <p className="mt-4 font-display text-lg font-semibold text-[#1e3932]">
            Menu tidak ditemukan
          </p>

          <p className="mx-auto mt-1 max-w-sm text-xs leading-relaxed text-[#1e3932]/55">
            Tidak ada item yang cocok dengan pencarian
            atau filter yang dipilih.
          </p>

          <button
            type="button"
            onClick={resetFilters}
            className="
              mt-5
              inline-flex
              cursor-pointer
              items-center
              rounded-full
              bg-[#1e3932]
              px-5 py-2.5
              text-xs
              font-semibold
              text-[#faf6ee]
              shadow-sm
              transition
              hover:bg-[#162c26]
              active:scale-95
            "
          >
            Tampilkan Semua Menu
          </button>
        </div>
      ) : (
        <div
          className="
            mt-7
            grid
            gap-5
            sm:grid-cols-2
            lg:grid-cols-3
          "
        >
          {items.map((item) => (
            <MenuCard
              key={item.id}
              item={item}
            />
          ))}
        </div>
      )}
    </div>
  );
}
