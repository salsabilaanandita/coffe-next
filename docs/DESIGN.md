# Design — Website Kafe "Kopi Rengkuh"

Dokumen desain: arah visual, token, komponen, dan layout halaman.

## 1. Arah Visual
**Konsep:** hangat, editorial, seperti kertas menu kafe di sore hari. Krem hangat sebagai latar, cokelat espresso sebagai teks, terakota sebagai aksen, hijau daun sebagai pendukung. Judul memakai serif ekspresif; teks isi memakai sans yang bersih.

**Kata kunci:** hangat · tenang · artisan · ramah.

## 2. Design Tokens

### 2.1 Warna
| Token | Hex | Penggunaan |
|---|---|---|
| `cream-50` | `#FBF6EE` | Latar halaman |
| `cream-100` | `#F4EBDC` | Latar section alternatif, kartu |
| `cream-200` | `#E8D9C0` | Garis/border lembut |
| `espresso-900` | `#2B1A12` | Teks utama, footer |
| `espresso-700` | `#4A2F22` | Teks sekunder gelap |
| `espresso-500` | `#7A5A48` | Teks muted (kontras ≥ 4,5:1 di atas cream-50) |
| `terracotta-500` | `#C2653A` | Aksen utama, tombol primer |
| `terracotta-600` | `#A8532D` | Hover tombol primer |
| `leaf-600` | `#4F6B4A` | Aksen pendukung, label sukses |
| `leaf-100` | `#E3EBDD` | Latar badge hijau |

Kontras: teks `espresso-900` di `cream-50` ≈ 15:1; `espresso-500` di `cream-50` ≈ 5,6:1; teks putih di `terracotta-600` ≈ 5,2:1 (dipakai untuk tombol).

### 2.2 Tipografi
| Peran | Font | Ukuran (mobile → desktop) | Berat |
|---|---|---|---|
| Display / H1 | Fraunces (serif) | 40 → 64 px | 600 |
| H2 | Fraunces | 30 → 44 px | 600 |
| H3 | Fraunces | 20 → 24 px | 600 |
| Body | Inter (sans) | 16 → 18 px | 400 |
| Label / caption | Inter | 12 – 14 px, tracking lebar, uppercase | 600 |

### 2.3 Spasi, Radius, Bayangan
- Skala spasi 4 px (Tailwind default). Section: `py-16` mobile, `py-24` desktop.
- Container maksimum `max-w-6xl` (1152 px), gutter 16/24 px.
- Radius: kartu `rounded-2xl` (16 px), tombol `rounded-full`, input `rounded-xl`.
- Bayangan lembut: `0 10px 30px -12px rgb(43 26 18 / 0.25)`.

### 2.3 Breakpoint
`sm` 640 · `md` 768 · `lg` 1024 · `xl` 1280.

## 3. Ikon
Set ikon SVG buatan sendiri, 24×24, stroke 1.75, `currentColor`, `aria-hidden` secara default. Berada di `src/components/icons/`.

| Ikon | Penggunaan |
|---|---|
| `CoffeeIcon` | Logo, kategori Kopi, keunggulan |
| `LeafIcon` | Biji pilihan, kategori Non-Kopi |
| `CakeIcon` | Dessert |
| `UtensilsIcon` | Makanan |
| `WifiIcon` | Keunggulan Wi-Fi |
| `ClockIcon` | Jam buka |
| `MapPinIcon` | Lokasi |
| `PhoneIcon`, `MailIcon` | Kontak |
| `InstagramIcon` | Sosial |
| `StarIcon` | Rating testimoni |
| `MenuIcon`, `CloseIcon` | Hamburger |
| `ArrowRightIcon` | CTA |
| `CheckIcon` | Konfirmasi |
| `UserIcon` | Akun |
| `SearchIcon` | Pencarian menu |

## 4. Komponen

### 4.1 Primitif UI (`src/components/ui`)
| Komponen | Varian / Props |
|---|---|
| `Button` | `variant`: primary, secondary, ghost · `size`: sm, md, lg · dapat dirender sebagai `Link` (`href`) |
| `Container` | Pembungkus lebar maksimum |
| `Section` | `tone`: base, soft, dark · padding vertikal standar |
| `SectionHeading` | `eyebrow`, `title`, `description`, `align` |
| `Badge` | `tone`: terracotta, leaf, neutral |
| `Card` | Kartu dasar dengan border & bayangan |
| `Field` | Label + input/textarea/select + pesan error |

### 4.2 Layout (`src/components/layout`)
- `Navbar` — sticky, blur latar, logo kiri, tautan tengah, aksi kanan; hamburger < `md`.
- `Footer` — 4 kolom (brand, jelajahi, jam buka, kontak) + baris hak cipta.
- `Logo` — ikon + wordmark "Kopi Rengkuh".

### 4.3 Section Landing (`src/components/sections`)
`Hero`, `Features`, `MenuHighlights`, `AboutTeaser`, `Testimonials`, `CtaBanner`.

### 4.4 Fitur
- `MenuCard`, `MenuExplorer` (filter + pencarian, client)
- `ReservationForm`, `ContactForm` (client, `useActionState`)
- `LoginForm` (client)
- `PageHeader` — judul halaman dalam untuk halaman non-landing.
- `CupIllustration` — ilustrasi SVG cangkir kopi untuk Hero.

## 5. Layout Halaman

### 5.1 Landing `/`
```
[Navbar]
[Hero]            2 kolom: teks+CTA | ilustrasi cangkir; statistik kecil di bawah
[Features]        grid 4 kartu ikon
[MenuHighlights]  grid 3x2 kartu menu + tombol "Lihat semua menu"
[AboutTeaser]     2 kolom: ilustrasi | cerita singkat + tautan
[Testimonials]    3 kartu kutipan (latar gelap espresso)
[CtaBanner]       ajakan reservasi
[Footer]
```

### 5.2 Halaman Dalam (`/menu`, `/about`, `/reservation`, `/contact`)
```
[Navbar]
[PageHeader]   eyebrow + H1 + deskripsi (latar cream-100)
[Konten]       spesifik halaman
[CtaBanner?]   opsional
[Footer]
```
- **Menu:** bar filter chip + kolom pencarian di atas, grid kartu 1/2/3 kolom.
- **About:** cerita + 3 nilai + statistik + tim (3 kartu).
- **Reservation:** 2 kolom — form (kiri), info & jam operasional (kanan).
- **Contact:** 2 kolom — info kontak & jam (kiri), form pesan (kanan).
- **Login:** kartu form di tengah, latar cream-100.
- **Account:** sapaan, kartu profil, daftar reservasi (kosong state), tombol keluar.

## 6. Interaksi & Gerak
- Hover tombol: naik 1 px + warna lebih gelap, 150 ms.
- Kartu menu: bayangan membesar saat hover.
- Navbar mobile: panel turun dengan transisi tinggi/opasitas 200 ms.
- Hormati `prefers-reduced-motion`: matikan transisi non-esensial.

## 7. Aksesibilitas
- Fokus terlihat: ring 2 px terakota dengan offset.
- Target sentuh ≥ 44 px.
- Semua input punya `<label>`; error dikaitkan via `aria-describedby` dan `aria-invalid`.
- Ikon dekoratif `aria-hidden`; tombol ikon punya `aria-label`.
- Struktur heading berurutan; satu H1 per halaman.

## 8. Ilustrasi & Gambar
MVP tidak memakai foto stok. Visual berupa ilustrasi SVG (cangkir, biji kopi, pola) dan blok warna. Saat foto asli tersedia, ganti dengan `next/image` pada Hero, AboutTeaser, dan halaman About.

## 9. Struktur Folder
```
src/
  app/
    layout.tsx  globals.css  page.tsx  not-found.tsx  sitemap.ts  robots.ts
    menu/page.tsx  about/page.tsx  reservation/page.tsx  contact/page.tsx
    login/page.tsx  account/page.tsx
  components/
    icons/index.tsx
    ui/  layout/  sections/  features/
  lib/
    data.ts  utils.ts  session.ts  actions.ts  validation.ts
  middleware.ts
docs/  PRD.md SRS.md DESIGN.md SESSION.md
```
