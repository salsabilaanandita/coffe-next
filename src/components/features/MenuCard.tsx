"use client";

import Image from "next/image";
import { useState } from "react";

import {
  CakeIcon,
  CoffeeIcon,
  FlameIcon,
  LeafIcon,
  SnowflakeIcon,
  StarIcon,
  UtensilsIcon,
} from "@/components/icons";

import { Badge } from "@/components/ui/Card";
import { formatRupiah } from "@/lib/utils";
import type { Category, MenuItem } from "@/lib/data";

const catIcon: Record<Category, typeof CoffeeIcon> = {
  Kopi: CoffeeIcon,
  "Roti & Pastry": UtensilsIcon,
  Dessert: CakeIcon,
};

type CupSize = "Reguler" | "Besar";

/**
 * Pengaturan gambar per menu.
 *
 * position:
 * - 50% = tengah
 * - 65% = objek lebih ke atas
 * - 80% = objek lebih ke atas lagi
 *
 * fit:
 * - cover  = memenuhi kotak, kemungkinan crop sedikit
 * - contain = foto tampil lebih utuh
 *
 * rotation:
 * - 0 = normal
 * - 90 = putar 90 derajat
 * - -90 = putar -90 derajat
 */
const imageSettings: Record<
  string,
  {
    position?: string;
    fit?: "cover" | "contain";
    rotation?: number;
  }
> = {
  "Kopi Susu Rengkuh": {
    position: "center 55%",
    fit: "cover",
    rotation: 0,
  },

  "Hazelnut Latte": {
    position: "center 50%",
    fit: "cover",
    rotation: 0,
  },

  Cappuccino: {
    position: "center 55%",
    fit: "cover",
    rotation: 0,
  },

  "Flat White": {
    position: "center 50%",
    fit: "cover",
    rotation: 0,
  },

  "Americano Teduh": {
    position: "center 50%",
    fit: "cover",
    rotation: 0,
  },

  "Long Black": {
    position: "center 50%",
    fit: "cover",
    rotation: 0,
  },

  "Matcha Rengkuh": {
    position: "center 50%",
    fit: "cover",
    rotation: 0,
  },

  "Cold Brew Rengkuh": {
    position: "center 55%",
    fit: "cover",
    rotation: 0,
  },

  "Espresso Tonic": {
    position: "center 50%",
    fit: "cover",
    rotation: 0,
  },

  "Matcha Oat Latte": {
    position: "center 50%",
    fit: "cover",
    rotation: 0,
  },

  "Chocolate Tuh": {
    position: "center 50%",
    fit: "cover",
    rotation: 0,
  },
};

export function MenuCard({
  item,
}: {
  item: MenuItem;
}) {
  const [temp, setTemp] =
    useState<"iced" | "hot">("iced");

  const [size, setSize] =
    useState<CupSize>("Reguler");

  const Icon = catIcon[item.category];

  const isDrink =
    item.category === "Kopi";

  const sizePriceAdjustment =
    size === "Besar" ? 6000 : 0;

  const currentPrice =
    item.price + sizePriceAdjustment;

  const isGoldBadge =
    item.tag === "Signature" ||
    item.tag === "Best Seller";

  const settings =
    imageSettings[item.name] ?? {
      position: "center center",
      fit: "cover" as const,
      rotation: 0,
    };

  const imageClass =
    settings.fit === "contain"
      ? "object-contain"
      : "object-cover";

  return (
    <article
      className="
        group
        relative
        flex
        h-full
        flex-col
        overflow-hidden
        rounded-[1.75rem]
        border
        border-[#1e3932]/10
        bg-white/80
        shadow-[0_8px_30px_rgba(30,57,50,0.06)]
        backdrop-blur-xl
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-[#1e3932]/20
        hover:bg-white/95
        hover:shadow-[0_20px_45px_rgba(30,57,50,0.12)]
      "
    >
      {/* ================================================= */}
      {/* IMAGE */}
      {/* ================================================= */}

      {item.image && (
        <div
          className="
            relative
            aspect-[4/3]
            w-full
            overflow-hidden
            bg-[#eee6d9]
          "
        >
          <div
            className="
              absolute
              inset-0
              flex
              items-center
              justify-center
            "
          >
            <Image
              src={item.image}
              alt={item.name}
              fill
              priority={item.featured === true}
              quality={95}
              sizes="
                (max-width: 640px) 100vw,
                (max-width: 1024px) 50vw,
                33vw
              "
              style={{
                objectPosition:
                  settings.position,

                transform:
                  settings.rotation
                    ? `rotate(${settings.rotation}deg) scale(1.01)`
                    : undefined,
              }}
              className={`
                ${imageClass}
                transition-transform
                duration-700
                ease-out
                group-hover:scale-[1.035]
              `}
            />
          </div>

          {/* Soft gradient */}
          <div
            className="
              pointer-events-none
              absolute
              inset-0
              bg-gradient-to-t
              from-[#132c25]/45
              via-transparent
              to-black/5
            "
          />

          {/* Top glass line */}
          <div
            className="
              pointer-events-none
              absolute
              inset-x-0
              top-0
              h-px
              bg-white/50
            "
          />

          {/* ================================================= */}
          {/* TAG */}
          {/* ================================================= */}

          {item.tag && (
            <div
              className="
                absolute
                left-3.5
                top-3.5
              "
            >
              <span
                className={`
                  inline-flex
                  items-center
                  gap-1.5
                  rounded-full
                  border
                  px-3
                  py-1.5
                  text-[10px]
                  font-bold
                  tracking-wide
                  shadow-sm
                  backdrop-blur-xl
                  ${
                    isGoldBadge
                      ? `
                        border-[#d6b46c]/40
                        bg-[#17382f]/90
                        text-[#fffaf0]
                      `
                      : `
                        border-white/40
                        bg-white/85
                        text-[#1e3932]
                      `
                  }
                `}
              >
                {isGoldBadge && (
                  <StarIcon
                    size={11}
                    className="
                      fill-[#d6b46c]
                      text-[#d6b46c]
                    "
                  />
                )}

                {item.tag}
              </span>
            </div>
          )}

          {/* ================================================= */}
          {/* ORIGIN */}
          {/* ================================================= */}

          {item.origin && (
            <div
              className="
                absolute
                bottom-3.5
                left-3.5
              "
            >
              <span
                className="
                  inline-flex
                  items-center
                  rounded-full
                  border
                  border-white/20
                  bg-black/25
                  px-3
                  py-1.5
                  text-[10px]
                  font-medium
                  text-white
                  backdrop-blur-xl
                "
              >
                {item.origin}
              </span>
            </div>
          )}
        </div>
      )}

      {/* ================================================= */}
      {/* CONTENT */}
      {/* ================================================= */}

      <div
        className="
          flex
          flex-1
          flex-col
          p-5
        "
      >
        {/* Category */}

        <div
          className="
            flex
            items-center
            justify-between
          "
        >
          <span
            className="
              inline-flex
              items-center
              gap-1.5
              text-[10px]
              font-bold
              uppercase
              tracking-[0.16em]
              text-[#1e3932]/55
            "
          >
            <Icon
              size={13}
              className="text-[#7a4b2f]"
            />

            {item.category}
          </span>

          {!item.image && item.tag && (
            <Badge
              tone={
                isGoldBadge
                  ? "gold"
                  : item.tag === "Baru"
                    ? "mint"
                    : "parchment"
              }
            >
              {isGoldBadge && (
                <StarIcon
                  size={11}
                  className="
                    fill-[#cba258]
                    text-[#cba258]
                  "
                />
              )}

              {item.tag}
            </Badge>
          )}
        </div>

        {/* Title */}

        <h3
          className="
            mt-2.5
            font-display
            text-xl
            font-bold
            tracking-tight
            text-[#1e3932]
            transition-colors
            group-hover:text-[#7a4b2f]
          "
        >
          {item.name}
        </h3>

        {/* Description */}

        <p
          className="
            mt-1.5
            line-clamp-2
            text-xs
            leading-relaxed
            text-[#1e3932]/60
          "
        >
          {item.description}
        </p>

        {/* Notes */}

        {item.notes &&
          item.notes.length > 0 && (
            <div
              className="
                mt-3
                flex
                flex-wrap
                gap-1.5
              "
            >
              {item.notes.map((note) => (
                <span
                  key={note}
                  className="
                    rounded-full
                    border
                    border-[#7a4b2f]/10
                    bg-[#f4eee5]
                    px-2.5
                    py-1
                    text-[9px]
                    font-semibold
                    text-[#7a4b2f]
                  "
                >
                  {note}
                </span>
              ))}
            </div>
          )}

        {/* ================================================= */}
        {/* DRINK CUSTOMIZER */}
        {/* ================================================= */}

        {isDrink && (
          <div
            className="
              mt-4
              rounded-2xl
              border
              border-[#1e3932]/8
              bg-[#f7f3eb]/80
              p-3
            "
          >
            {/* Sajian */}

            <div
              className="
                flex
                items-center
                justify-between
                gap-2
              "
            >
              <span
                className="
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.14em]
                  text-[#1e3932]/45
                "
              >
                Sajian
              </span>

              <div
                className="
                  flex
                  rounded-full
                  border
                  border-[#1e3932]/10
                  bg-white/80
                  p-0.5
                "
              >
                <button
                  type="button"
                  onClick={() =>
                    setTemp("iced")
                  }
                  className={`
                    inline-flex
                    cursor-pointer
                    items-center
                    gap-1.5
                    rounded-full
                    px-3
                    py-1
                    text-[10px]
                    font-semibold
                    transition-all
                    ${
                      temp === "iced"
                        ? `
                          bg-[#1e3932]
                          text-white
                          shadow-sm
                        `
                        : `
                          text-[#1e3932]/55
                          hover:text-[#1e3932]
                        `
                    }
                  `}
                >
                  <SnowflakeIcon size={11} />
                  Dingin
                </button>

                <button
                  type="button"
                  onClick={() =>
                    setTemp("hot")
                  }
                  className={`
                    inline-flex
                    cursor-pointer
                    items-center
                    gap-1.5
                    rounded-full
                    px-3
                    py-1
                    text-[10px]
                    font-semibold
                    transition-all
                    ${
                      temp === "hot"
                        ? `
                          bg-[#1e3932]
                          text-white
                          shadow-sm
                        `
                        : `
                          text-[#1e3932]/55
                          hover:text-[#1e3932]
                        `
                    }
                  `}
                >
                  <FlameIcon size={11} />
                  Panas
                </button>
              </div>
            </div>

            {/* Divider */}

            <div
              className="
                my-2.5
                border-t
                border-[#1e3932]/8
              "
            />

            {/* Size */}

            <div
              className="
                flex
                items-center
                justify-between
                gap-2
              "
            >
              <span
                className="
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.14em]
                  text-[#1e3932]/45
                "
              >
                Ukuran
              </span>

              <div
                className="
                  flex
                  gap-1
                "
              >
                {(
                  [
                    "Reguler",
                    "Besar",
                  ] as const
                ).map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() =>
                      setSize(s)
                    }
                    className={`
                      cursor-pointer
                      rounded-full
                      px-3
                      py-1
                      text-[10px]
                      font-semibold
                      transition-all
                      ${
                        size === s
                          ? `
                            border
                            border-[#1e3932]/20
                            bg-white
                            text-[#1e3932]
                            shadow-sm
                          `
                          : `
                            text-[#1e3932]/45
                            hover:text-[#1e3932]
                          `
                      }
                    `}
                  >
                    {s}

                    {s === "Besar" && (
                      <span
                        className="
                          ml-1
                          text-[9px]
                          text-[#7a4b2f]
                        "
                      >
                        +6k
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* ================================================= */}
      {/* FOOTER */}
      {/* ================================================= */}

      <div
        className="
          flex
          items-center
          justify-between
          border-t
          border-[#1e3932]/8
          bg-[#f8f4ec]/70
          px-5
          py-4
          backdrop-blur-md
        "
      >
        <div>
          <span
            className="
              text-[9px]
              font-semibold
              uppercase
              tracking-[0.14em]
              text-[#1e3932]/40
            "
          >
            Mulai dari
          </span>

          <p
            className="
              mt-0.5
              font-display
              text-lg
              font-bold
              text-[#1e3932]
            "
          >
            {formatRupiah(currentPrice)}
          </p>
        </div>

        <button
          type="button"
          onClick={() => {
            const button =
              document.getElementById(
                "floating-frap-btn"
              );

            if (button) {
              button.click();
            }
          }}
          className="
            inline-flex
            cursor-pointer
            items-center
            justify-center
            rounded-full
            bg-[#1e3932]
            px-4
            py-2
            text-[11px]
            font-semibold
            text-[#faf6ee]
            shadow-sm
            transition-all
            hover:bg-[#162c26]
            hover:shadow-md
            active:scale-95
          "
        >
          Pesan
        </button>
      </div>
    </article>
  );
}