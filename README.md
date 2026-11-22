# EduStudio Suite — Magazine Bold + Visitor Counter Tanpa Supabase

Berisi Dashboard Utama, EduTP Studio, EduSoal Studio, dan EduLKPD Studio.

## Visitor Counter: Vercel + Upstash Redis (tanpa Supabase)

1. Buat database Redis di [Upstash](https://console.upstash.com/) dan aktifkan REST API.
2. Deploy folder `EduStudio-Suite` ke Vercel (Framework Preset **Other**; jika folder ini berada di subfolder repo, atur Root Directory ke `EduStudio-Suite`). Tidak perlu build command.
3. Tambahkan Environment Variables di Vercel: `UPSTASH_REDIS_REST_URL`, `UPSTASH_REDIS_REST_TOKEN`, dan `VISITOR_HASH_SECRET` (buat rahasia acak, misalnya `openssl rand -hex 32`).
4. Redeploy, lalu kunjungi dashboard untuk melihat jumlah pengunjung hari ini dan total kunjungan harian unik.

**Aturan:** Setiap IP publik hanya dihitung sekali per tanggal WITA (Asia/Makassar). IP yang sama di tanggal berbeda dihitung kembali. Angka total adalah penjumlahan visitor unik harian, bukan jumlah individu unik sepanjang waktu. Hanya dashboard yang memanggil API pencatatan. Penyimpanan deduplikasi memakai HMAC SHA-256 dari tanggal dan IP, bukan alamat IP asli; kunci deduplikasi kedaluwarsa dalam 48 jam. Penghitungan disimpan permanen sebagai agregat harian dan total. Jangan bagikan token Upstash atau secret ke frontend/GitHub. Wi-Fi bersama dihitung sebagai satu IP; VPN/IP dinamis dan bot dapat memengaruhi angka.

**Catatan:** Counter global yang akurat memerlukan penyimpanan server-side; versi ini memakai Upstash, **bukan Supabase**. Ketiga generator tetap dapat dipakai dengan membuka HTML secara lokal, tetapi statistik online memerlukan Vercel + Upstash. Sertakan penjelasan pemrosesan IP di kebijakan privasi website.
