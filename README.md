# Kopi Rengkuh — Website Kafe (Next.js)

Landing page + halaman terpisah (menu, tentang, reservasi, kontak, login, akun).

## Menjalankan
```bash
cp .env.example .env.local   # isi SESSION_SECRET (≥ 32 karakter)
npm install
npm run dev                  # http://localhost:3000
```
Akun demo: `demo@kopisenja.id` / `kopi12345`

## Dokumen
- `docs/PRD.md` — kebutuhan produk
- `docs/SRS.md` — spesifikasi kebutuhan perangkat lunak
- `docs/DESIGN.md` — token, komponen, layout
- `docs/SESSION.md` — rancangan sesi login

## Struktur
- `src/app` — rute (App Router)
- `src/components/{icons,ui,layout,sections,features}` — komponen
- `src/lib` — data, sesi, validasi, server actions
- `src/middleware.ts` — proteksi `/account`
