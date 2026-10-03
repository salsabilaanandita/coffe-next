# SRS — Software Requirements Specification
**Proyek:** Website Kafe "Kopi Rengkuh" · **Versi:** 1.0 · **Tanggal:** 2 Oktober 2026
Mengacu pada `PRD.md`. Format mengikuti struktur ringkas IEEE 830.

## 1. Pendahuluan
### 1.1 Tujuan
Menjabarkan kebutuhan fungsional, non-fungsional, antarmuka, dan data untuk website Kopi Rengkuh.
### 1.2 Cakupan
Aplikasi web Next.js (App Router) berisi landing page dan halaman terpisah: menu, tentang, reservasi, kontak, login, akun.
### 1.3 Definisi
| Istilah | Arti |
|---|---|
| RSC | React Server Component |
| SSG | Static Site Generation |
| Sesi | Status login pengguna yang disimpan di cookie bertanda tangan (JWT) |

## 2. Deskripsi Umum
### 2.1 Perspektif Produk
Aplikasi mandiri (monolit Next.js). Data menu statis di kode; sesi memakai cookie; reservasi diproses lewat Server Action.
### 2.2 Kelas Pengguna
Pengunjung (anonim), Pengguna Terdaftar (login), Admin (fase 2).
### 2.3 Lingkungan Operasi
Node.js ≥ 20, deploy ke Vercel/Node server/Docker. Browser modern.
### 2.4 Batasan
- Tanpa database pada MVP (user demo & reservasi in-memory/tidak persisten).
- Bahasa antarmuka: Indonesia.
### 2.5 Asumsi
Konten dan foto final disediakan klien; sementara memakai ilustrasi SVG.

## 3. Kebutuhan Fungsional

### 3.1 Navigasi & Layout
| ID | Kebutuhan |
|---|---|
| FR-01 | Navbar sticky pada semua halaman dengan tautan: Beranda, Menu, Tentang, Reservasi, Kontak. |
| FR-02 | Navbar menampilkan tombol Masuk bila tanpa sesi, atau tautan Akun bila ada sesi. |
| FR-03 | Pada layar < 768px navbar menjadi menu hamburger yang bisa dibuka/tutup dan tertutup otomatis saat pindah halaman. |
| FR-04 | Footer memuat alamat, jam buka, tautan sosial, dan navigasi. |
| FR-05 | Tautan "Lewati ke konten" tersedia untuk keyboard. |

### 3.2 Landing Page (`/`)
| ID | Kebutuhan |
|---|---|
| FR-10 | Section Hero dengan judul, deskripsi, CTA "Lihat Menu" dan "Reservasi". |
| FR-11 | Section Keunggulan (4 kartu: biji pilihan, suasana nyaman, Wi-Fi cepat, buka hingga malam). |
| FR-12 | Section Menu Unggulan menampilkan 6 item dari data menu dan tautan ke `/menu`. |
| FR-13 | Section Tentang singkat dengan tautan ke `/about`. |
| FR-14 | Section Testimoni (3 kutipan pelanggan). |
| FR-15 | Section CTA reservasi sebelum footer. |

### 3.3 Menu (`/menu`)
| ID | Kebutuhan |
|---|---|
| FR-20 | Menampilkan seluruh item menu dalam grid kartu (nama, deskripsi, harga Rupiah, label). |
| FR-21 | Filter kategori: Semua, Kopi, Non-Kopi, Makanan, Dessert. |
| FR-22 | Pencarian teks pada nama/deskripsi (tidak peka huruf besar/kecil). |
| FR-23 | Keadaan kosong ditampilkan bila tidak ada hasil. |
| FR-24 | Harga diformat `Rp 28.000`. |

### 3.4 Tentang (`/about`)
| ID | Kebutuhan |
|---|---|
| FR-30 | Menampilkan cerita kafe, 3 nilai utama, angka statistik, dan profil tim. |

### 3.5 Reservasi (`/reservation`)
| ID | Kebutuhan |
|---|---|
| FR-40 | Form: nama, email, telepon, tanggal, jam, jumlah orang (1–12), catatan (opsional). |
| FR-41 | Validasi sisi klien (HTML5) dan sisi server (Server Action). |
| FR-42 | Tanggal tidak boleh di masa lalu; jam harus dalam jam operasional (08.00–22.00). |
| FR-43 | Saat valid: tampilkan kartu konfirmasi dengan ringkasan. |
| FR-44 | Saat tidak valid: tampilkan pesan error per kolom, nilai yang diisi dipertahankan. |
| FR-45 | Jika ada sesi, nama & email terisi otomatis. |

### 3.6 Kontak (`/contact`)
| ID | Kebutuhan |
|---|---|
| FR-50 | Menampilkan alamat, telepon, email, jam buka per hari, dan blok peta (placeholder). |
| FR-51 | Form pesan (nama, email, pesan) dengan validasi dan pesan sukses. |

### 3.7 Autentikasi & Sesi (`/login`, `/account`)
| ID | Kebutuhan |
|---|---|
| FR-60 | Form login (email + kata sandi) memakai Server Action. |
| FR-61 | Login berhasil membuat cookie sesi `httpOnly`, `sameSite=lax`, `secure` di produksi, masa berlaku 7 hari. |
| FR-62 | Login gagal menampilkan pesan umum tanpa membocorkan apakah email terdaftar. |
| FR-63 | `/account` hanya bisa diakses dengan sesi valid; tanpa sesi → redirect ke `/login?next=/account`. |
| FR-64 | Pengguna yang sudah login membuka `/login` → redirect ke `/account`. |
| FR-65 | Logout menghapus cookie sesi dan kembali ke `/`. |
| FR-66 | Detail rancangan sesi ada di `SESSION.md`. |

### 3.8 SEO & Lainnya
| ID | Kebutuhan |
|---|---|
| FR-70 | Metadata (title, description, Open Graph) per halaman. |
| FR-71 | `sitemap.xml` dan `robots.txt` dihasilkan otomatis. |
| FR-72 | Halaman 404 kustom. |

## 4. Kebutuhan Antarmuka
### 4.1 Antarmuka Pengguna
Mengikuti `DESIGN.md` (token warna, tipografi, komponen).
### 4.2 Antarmuka Perangkat Lunak
| Komponen | Keterangan |
|---|---|
| Server Actions | `loginAction`, `logoutAction`, `reservationAction`, `contactAction` |
| Middleware | `src/middleware.ts` memeriksa cookie sesi untuk rute terproteksi |
| Library | `next`, `react`, `jose` (JWT), `tailwindcss` |
### 4.3 Antarmuka Komunikasi
HTTPS; cookie sesi dikirim otomatis oleh browser.

## 5. Kebutuhan Non-Fungsional
| ID | Kategori | Kebutuhan |
|---|---|---|
| NFR-01 | Performa | LCP < 2,5 dtk; JS klien dibatasi: hanya Navbar, filter menu, dan form yang `"use client"`. |
| NFR-02 | Responsif | Tata letak valid 320–1440px tanpa scroll horizontal. |
| NFR-03 | Aksesibilitas | WCAG 2.2 AA: kontras ≥ 4,5:1, fokus terlihat, label form, `aria-*` pada menu mobile. |
| NFR-04 | Keamanan | Cookie `httpOnly`; secret JWT dari `SESSION_SECRET`; validasi server-side; tidak menyimpan kata sandi plaintext di produksi. |
| NFR-05 | Pemeliharaan | TypeScript strict; komponen dipisah per folder; data terpusat di `src/lib`. |
| NFR-06 | Portabilitas | `next build` dan `next start` berjalan di Node ≥ 20. |
| NFR-07 | SEO | Satu `<h1>` per halaman; heading berurutan. |

## 6. Model Data (logis)
```
MenuItem   { id, name, description, price:int, category, tag? }
User       { id, name, email, passwordHash }       // demo: in-memory
Session    { sub:userId, name, email, exp }         // payload JWT
Reservation{ name, email, phone, date, time, guests, notes? }
ContactMsg { name, email, message }
```

## 7. Alur Utama
**Reservasi:** Pengunjung buka `/reservation` → isi form → Server Action validasi → (valid) tampil konfirmasi / (tidak valid) tampil error per kolom.
**Login:** `/login` → `loginAction` memverifikasi → set cookie → redirect `next` atau `/account`.
**Akses terproteksi:** Request `/account` → middleware verifikasi JWT → lanjut atau redirect `/login`.

## 8. Matriks Keterlacakan
| User Story (PRD) | Kebutuhan |
|---|---|
| US-01 | FR-10…FR-15 |
| US-02 | FR-20…FR-24 |
| US-03 | FR-04, FR-50 |
| US-04 | FR-40…FR-45 |
| US-05 | FR-60…FR-66 |
| US-06 | FR-51 |
| US-07 | FR-03, NFR-02 |
| US-08 | FR-70…FR-71, NFR-07 |

## 9. Kriteria Pengujian (contoh)
| ID | Skenario | Hasil diharapkan |
|---|---|---|
| T-01 | Buka `/account` tanpa login | Redirect ke `/login?next=/account` |
| T-02 | Login dengan sandi salah | Pesan "Email atau kata sandi salah" |
| T-03 | Reservasi tanggal kemarin | Error pada kolom tanggal |
| T-04 | Reservasi jam 23.00 | Error pada kolom jam |
| T-05 | Cari "latte" di menu | Hanya item berisi "latte" tampil |
| T-06 | Lebar layar 375px | Navbar menjadi hamburger |
