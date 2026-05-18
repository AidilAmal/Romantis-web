CARA EDIT WEB ROMANTIS
======================

1. Buka assets/js/config.js
2. Ganti PIN di bagian:
   pin: "141105"

3. Ganti nomor WhatsApp di bagian:
   whatsappNumber: "6281234567890"
   Format harus pakai 62, bukan 08.

4. Ganti foto:
   - Simpan foto kamu di folder assets/img/
   - Ubah path img di memories atau lovePlanets.
   Contoh:
   img: "assets/img/foto-kita.jpg"

5. Menu Love versi baru:
   - Awalnya partikel hati berantakan.
   - Klik tombol "Perbaikin hati mungilku".
   - Partikel akan membentuk love.
   - Foto/planet muncul dari luar layar.
   - Orbit muter otomatis lebih pelan.
   - Bisa pilih Auto atau Manual.
   - Bisa geser area orbit untuk muter manual.
   - Klik foto/planet untuk membuka popup rasio 1:1.
   - Klik bagian luar popup atau tombol X untuk menutup.

6. Jumlah foto di Love:
   - Jumlah planet/foto mengikuti jumlah data di lovePlanets.
   - Kalau lovePlanets dihapus/dikosongkan, Love otomatis pakai data memories.
   - Jadi tidak ada foto yang diulang cuma demi memenuhi orbit.

7. Mengatur speed orbit Love:
   Buka assets/js/config.js, cari:
   loveSettings: {
     particleCount: 520,
     orbitSpeed: 0.00115
   }

   - orbitSpeed makin kecil = muter makin pelan.
   - particleCount makin besar = partikel makin banyak, tapi lebih berat.

8. Music:
   - Buka assets/js/config.js
   - Edit spotifyEmbeds.
   - Pakai link embed Spotify, bukan link biasa.

9. Jalankan:
   - Cukup buka index.html di browser.
   - Kalau mau upload ke hosting, upload semua isi folder romantis_web.

UPDATE LOVE PARTICLE TERBARU:
- Bentuk love sekarang dibuat dari partikel dengan rumus heart yang lebih jelas.
- Tombol "Perbaikin hati mungilku" otomatis hilang setelah love dan planet/foto muncul.
- Manual rotate dibuat lebih smooth dengan easing + inertia.
- Kecepatan auto ada di assets/js/config.js bagian loveSettings.orbitSpeed.
  Contoh: 0.00072 pelan, 0.001 lebih cepat, 0.0004 lebih lambat.


=== CARA GANTI VIDEO JJ ===
1. Masukkan file video kamu ke folder: assets/video/
   Contoh: assets/video/video-1.mp4
2. Buka assets/js/config.js
3. Cari bagian videos: [ ... ]
4. Ganti title, date, video, poster, dan desc sesuai video kamu.
5. Buka video.html untuk cek menu Video.

Catatan: supaya gampang diupload ke GitHub/Vercel, pakai format MP4 dan usahakan ukuran video tidak terlalu besar.


CATATAN REVISI FOTO/VIDEO:
- Foto dari web.zip sudah dimasukkan ke assets/img/user/ dan sebagian dibuat thumbnail 1:1 biar wajah tidak gampang kepotong.
- Home memakai Gallery scroll bawah 1-8.
- Love memakai Planet 1-8. Jumlah planet = jumlah data lovePlanets di assets/js/config.js.
- Memory/buku memakai Album buku 1-8 dan gambar dibuat contain supaya tidak kepotong.
- Video memakai Video jj 1-5 di assets/video/.
- Data teks/caption/PIN/WA tetap bisa diganti dari assets/js/config.js.
