# Portofolio Pribadi — Fakhri Azzam Nufail

Portofolio web statis dengan tampilan tech modern, tema gelap/terang, dan layout responsif. Dibangun menggunakan HTML, CSS, dan JavaScript tanpa framework atau database.

## Isi folder
- `index.html` — struktur dan konten halaman.
- `style.css` — sistem desain, tema dark/light, layout responsif, dan animasi.
- `script.js` — pergantian tema, penyimpanan preferensi, navigasi mobile, dan animasi saat scroll.

## Menjalankan di Linux Mint
1. Ekstrak ZIP.
2. Buka folder ini lewat VS Code.
3. Buka `index.html` di browser, atau jalankan lewat ekstensi Live Server.

## Mengganti foto profil
Saat ini bagian hero menggunakan monogram `FA` yang dibuat dengan CSS agar tampil konsisten tanpa foto. Jika ingin menambahkan foto:
1. Letakkan gambar misalnya `foto-fakhri.jpg` pada folder yang sama.
2. Di `index.html`, cari elemen `<div class="avatar-monogram" ...>FA<span>.</span></div>`.
3. Ganti elemen itu dengan `<img class="avatar-photo" src="foto-fakhri.jpg" alt="Foto Fakhri Azzam Nufail">`.
4. Tambahkan CSS `.avatar-photo { display:block; width:118px; height:118px; margin:24px auto 19px; object-fit:cover; border-radius:31px; border:1px solid var(--accent-border); }`.

## Publikasi lewat GitHub Pages
1. Buat repositori publik bernama `fakhriazzamnufail.github.io` pada akun GitHub `fakhriazzamnufail`.
2. Unggah `index.html`, `style.css`, dan `script.js` ke akar repositori (bukan ke dalam folder tambahan).
3. Buka **Settings → Pages**.
4. Pilih **Deploy from a branch**, pilih branch `main` dan folder `/(root)`, lalu simpan.
5. Setelah deployment berhasil, alamat yang diharapkan adalah `https://fakhriazzamnufail.github.io/`.

## Konten & kejujuran informasi
- Isi menggunakan bahasa Indonesia dan tidak mencantumkan prestasi/sertifikat yang belum dikonfirmasi.
- Travelin ditampilkan sebagai proyek pengembangan pribadi.
- Suara Santri ditampilkan sebagai konsep aplikasi, bukan sebagai produk yang diklaim sudah selesai.
- Tombol proyek mengarah ke profil GitHub sampai URL repositori khusus tersedia.
- Google Fonts memerlukan koneksi internet; font fallback tersedia jika layanan tidak terjangkau.
