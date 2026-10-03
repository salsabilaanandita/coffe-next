# PRD — Website Kafe "Kopi Rengkuh"

| | |
|---|---|
| Versi | 1.0 |
| Tanggal | 2 Oktober 2026 |
| Status | Draft untuk review |
| Stack | Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS 4 |

## 1. Ringkasan
Kopi Rengkuh adalah website kafe yang memadukan **landing page** (satu halaman panjang untuk memikat pengunjung baru) dengan **halaman terpisah per fungsi** (menu lengkap, tentang, reservasi, kontak, akun). Tujuannya: menaikkan kunjungan ke kafe, reservasi meja, dan pengenalan brand.

## 2. Latar Belakang & Masalah
- Pelanggan sering bertanya via chat tentang menu, harga, jam buka, dan ketersediaan meja.
- Kafe belum punya kanal resmi yang menampilkan identitas brand secara konsisten.
- Reservasi manual lewat chat sulit dilacak dan sering bentrok.

## 3. Tujuan & Metrik Keberhasilan
| Tujuan | Metrik | Target 3 bulan |
|---|---|---|
| Meningkatkan reservasi | Jumlah reservasi via website | ≥ 150 / bulan |
| Mengurangi pertanyaan berulang | Pertanyaan menu/jam buka via chat | turun 40% |
| Performa baik | Lighthouse Performance (mobile) | ≥ 90 |
| Aksesibilitas | Lighthouse Accessibility | ≥ 95 |
| Konversi landing | Klik CTA "Reservasi" dari landing | ≥ 6% |

## 4. Target Pengguna (Persona)
1. **Rani, 24, mahasiswa/pekerja remote** — mencari tempat nyaman untuk bekerja, butuh info Wi-Fi, jam buka, dan harga.
2. **Budi, 35, pekerja kantoran** — pesan meja untuk meeting kecil/kumpul keluarga, ingin reservasi cepat.
3. **Dewi, 29, pecinta kopi** — ingin tahu asal biji, menu signature, dan promo.
4. **Admin kafe (internal)** — melihat reservasi masuk (fase 2).

## 5. Ruang Lingkup

### 5.1 Termasuk (MVP)
- Landing page: hero, keunggulan, menu unggulan, tentang singkat, testimoni, CTA reservasi.
- Halaman Menu dengan filter kategori & pencarian.
- Halaman Tentang (cerita, nilai, tim).
- Halaman Reservasi (form validasi).
- Halaman Kontak (alamat, jam buka, form pesan).
- Login/logout sederhana dengan sesi cookie; halaman Akun (terproteksi) menampilkan reservasi pengguna.
- Desain responsif, mode terang, ikon SVG sendiri.

### 5.2 Tidak termasuk (fase 2+)
- Pemesanan makanan online & pembayaran.
- Dashboard admin penuh, program loyalitas, multi-cabang.
- Integrasi WhatsApp/Email otomatis, OAuth (Google).

## 6. Fitur & User Stories
| ID | Sebagai | Saya ingin | Agar | Prioritas |
|---|---|---|---|---|
| US-01 | Pengunjung | melihat landing page yang menarik | tertarik datang | Must |
| US-02 | Pengunjung | melihat menu per kategori dan mencari item | cepat menemukan pilihan | Must |
| US-03 | Pengunjung | melihat jam buka & lokasi | tahu cara datang | Must |
| US-04 | Pengunjung | mengirim reservasi (nama, tanggal, jam, jumlah orang) | meja terjamin | Must |
| US-05 | Pengguna | login dan melihat akun | mengelola reservasi | Should |
| US-06 | Pengunjung | menghubungi kafe lewat form | bertanya tanpa chat | Should |
| US-07 | Pengunjung | membuka situs nyaman di HP | sering mengakses via mobile | Must |
| US-08 | Pemilik | situs mudah ditemukan di Google | menarik trafik organik | Should |

## 7. Struktur Informasi
```
/               Landing page (semua section ringkas)
/menu           Menu lengkap + filter
/about          Tentang kami
/reservation    Form reservasi
/contact        Kontak & lokasi
/login          Masuk
/account        Akun (butuh sesi)
```

## 8. Persyaratan Non-Fungsional (ringkas)
- Performa: LCP < 2,5 dtk di 4G; gunakan Server Components secara default.
- Aksesibilitas: WCAG 2.2 AA (kontras, fokus terlihat, label form).
- SEO: metadata per halaman, heading terstruktur, sitemap.
- Keamanan: cookie sesi `httpOnly`, validasi input server-side.
- Browser: 2 versi terakhir Chrome, Safari, Firefox, Edge.

## 9. Asumsi, Risiko, Ketergantungan
| Item | Keterangan | Mitigasi |
|---|---|---|
| Data menu statis | Awalnya di `src/lib/data.ts` | Fase 2: pindah ke CMS/database |
| Autentikasi demo | User dummy untuk demo | Ganti dengan DB + hash password sebelum produksi |
| Reservasi belum tersimpan | MVP memvalidasi & mengonfirmasi saja | Hubungkan ke DB/email di fase 2 |
| Konten/foto asli | Belum tersedia | Placeholder ilustrasi SVG, ganti saat foto siap |

## 10. Rencana Rilis
| Fase | Isi | Estimasi |
|---|---|---|
| M1 | Setup, design system, komponen | Minggu 1 |
| M2 | Landing + Menu + About | Minggu 2 |
| M3 | Reservasi, Kontak, Login/Sesi | Minggu 3 |
| M4 | QA, SEO, aksesibilitas, deploy | Minggu 4 |

## 11. Kriteria Penerimaan MVP
- Semua halaman di bagian 7 dapat dibuka dan responsif (320px–1440px).
- Form reservasi menolak input tidak valid dan menampilkan konfirmasi saat valid.
- `/account` mengarahkan ke `/login` bila tidak ada sesi.
- Build produksi (`next build`) berhasil tanpa error.
