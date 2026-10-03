# Session — Rancangan Manajemen Sesi

Dokumen ini menjelaskan bagaimana sesi login bekerja pada website Kopi Rengkuh.

## 1. Pendekatan
**Sesi stateless berbasis cookie JWT.** Server tidak menyimpan sesi; seluruh status ada di cookie bertanda tangan (HS256) memakai library `jose`. Cocok untuk MVP tanpa database dan berjalan di Edge (middleware) maupun Node.

| Aspek | Keputusan |
|---|---|
| Nama cookie | `kopi_session` |
| Isi (payload) | `sub` (id pengguna), `name`, `email`, `iat`, `exp` |
| Algoritma | HS256 |
| Secret | env `SESSION_SECRET` (≥ 32 karakter) |
| Masa berlaku | 7 hari |
| Flag cookie | `httpOnly`, `sameSite=lax`, `secure` (produksi), `path=/` |

## 2. Alur

### 2.1 Login
```
Browser ──POST form──▶ loginAction (Server Action)
                         1. validasi input
                         2. cari user & cocokkan kata sandi
                         3. createSession(user) → JWT ditandatangani
                         4. set cookie kopi_session
                         5. redirect(next ?? "/account")
```

### 2.2 Akses halaman terproteksi
```
Browser ──GET /account──▶ middleware
                           ├─ cookie ada & JWT valid ─▶ lanjut ke halaman
                           └─ tidak ada / kedaluwarsa ─▶ redirect /login?next=/account
```
Halaman `/account` tetap memeriksa sesi lagi di server (`getSession()`) sebagai pertahanan berlapis; middleware bukan satu-satunya penjaga.

### 2.3 Logout
`logoutAction` menghapus cookie `kopi_session`, lalu redirect ke `/`.

## 3. API Internal (`src/lib/session.ts`)
| Fungsi | Tugas |
|---|---|
| `createSession(user)` | Menandatangani JWT dan menyetel cookie |
| `getSession()` | Membaca & memverifikasi cookie; mengembalikan payload atau `null` |
| `destroySession()` | Menghapus cookie |
| `verifyToken(token)` | Verifikasi murni (dipakai middleware) |

## 4. Rute & Aturan Akses
| Rute | Tanpa sesi | Dengan sesi |
|---|---|---|
| `/`, `/menu`, `/about`, `/reservation`, `/contact` | Boleh | Boleh (form reservasi terisi otomatis) |
| `/login` | Boleh | Redirect ke `/account` |
| `/account` | Redirect ke `/login?next=/account` | Boleh |

`next` hanya diterima bila berupa path internal (diawali `/` dan bukan `//`) untuk mencegah *open redirect*.

## 5. Akun Demo
| Email | Kata sandi |
|---|---|
| `demo@kopisenja.id` | `kopi12345` |

Akun ini hanya untuk pengembangan. Sebelum produksi: simpan pengguna di database, hash kata sandi (argon2/bcrypt), tambahkan pembatasan percobaan login (rate limiting).

## 6. Keamanan
- Cookie `httpOnly` → tidak bisa dibaca JavaScript (mitigasi XSS pencurian sesi).
- `sameSite=lax` + Server Actions (Next.js memeriksa origin) → mitigasi CSRF.
- Pesan login gagal bersifat umum (anti-enumerasi akun).
- Secret hanya di environment variable; jangan di-commit. Salin `.env.example` ke `.env.local`.
- Rotasi `SESSION_SECRET` membatalkan seluruh sesi aktif.

## 7. Keterbatasan MVP & Rencana Lanjutan
| Keterbatasan | Rencana |
|---|---|
| Tidak bisa mencabut satu sesi tertentu (stateless) | Tambah tabel sesi/denylist di fase 2 |
| Tidak ada refresh token | Perpanjang sesi (sliding expiration) saat aktivitas |
| Pengguna demo in-memory | Database + registrasi pengguna |
| Belum ada OAuth | Tambah login Google lewat Auth.js |
| Belum ada peran (role) | Tambah klaim `role` untuk admin |
