Berikut adalah **Product Requirements Document (PRD)** yang mendetail untuk pengembangan website undangan pernikahan digital kamu, dengan mengintegrasikan referensi struktur dari file yang kamu unggah namun disesuaikan dengan konsep **animasi karakter** dan **interaktivitas modern**.

---

# Product Requirements Document (PRD): Animated Wedding Invitation

**Versi:** 1.1  
**Status:** In-Progress  
**Teknologi Utama:** Next.js (App Router), Tailwind CSS, Framer Motion, Lottie, Prisma.

---

## 1. Visi & Tujuan Produk
Membangun platform undangan pernikahan digital yang memberikan pengalaman eksklusif ala aplikasi seluler (*app-like experience*). Fokus utama adalah mengganti elemen visual statis (foto) dengan **karakter animasi** dan mengganti galeri konvensional dengan **narasi interaktif** (*scrollytelling*) guna meningkatkan keterlibatan emosional tamu.

---

## 2. Target Pengguna
* **Tamu Undangan:** Teman, kolega, dan keluarga yang mengakses melalui perangkat seluler (90% trafik diprediksi dari *smartphone*).
* **Mempelai:** Membutuhkan data kehadiran yang akurat dan manajemen ucapan yang terpusat.

---

## 3. Spesifikasi Fitur Utama

### A. Welcome Screen & Audio Control
* **Overlay Modal:** Menampilkan ilustrasi animasi karakter mempelai yang melambai atau tersenyum.
* **Call to Action (CTA):** Tombol "Buka Undangan" yang memicu efek *unlock* (membuka kunci).
* **Background Music:** Mengaktifkan audio otomatis (setelah interaksi pengguna) dengan ikon piringan hitam/not balok yang berputar secara *floating* di pojok layar.

### B. App-Like Navigation (Sticky Bottom Bar)
* **Komponen:** Menu navigasi yang menempel di bawah layar dengan ikon minimalis.
* **Item Menu:** Beranda (Hero), Mempelai (Profile), Acara (Events), Cerita (Scrollytelling), dan Konfirmasi (RSVP).
* **Interaksi:** Transisi antar seksi yang halus menggunakan *smooth scroll* atau *page transition* Framer Motion.

### C. Profil Mempelai (Animated Characters)
* **Visual:** Menggunakan file Lottie (JSON) untuk menampilkan karakter animasi mempelai pria dan wanita yang memiliki gerakan halus (berkedip, bernapas, atau gerakan tangan).
* **Informasi:** Nama lengkap, nama orang tua, dan media sosial.

### D. Pengganti Galeri: Interactive Story Timeline (*Scrollytelling*)
* **Konsep:** Menggantikan galeri foto kotak-kotak dengan garis waktu perjalanan cinta yang bergerak seiring *scroll*.
* **Visual:** Ilustrasi latar belakang yang berubah (paralaks) saat pengguna menggulir ke bawah. Karakter animasi mempelai terlihat seolah berjalan melewati momen-momen penting (misal: Pertemuan pertama -> Liburan bersama -> Lamaran).
* **Teknis:** Integrasi `framer-motion` dengan *hook* `useScroll` untuk mengontrol progres animasi Lottie berdasarkan posisi *viewport*.

### E. Informasi Acara & Navigasi
* **Detail:** Tanggal, Jam, dan Lokasi Akad & Resepsi.
* **Fitur Tambahan:**
    * *Countdown Timer* menuju hari-H.
    * Tombol "Simpan Kalender" (Google Calendar/iCal).
    * Integrasi peta interaktif atau tombol langsung menuju Google Maps.

### F. RSVP & Digital Guestbook (Dynamic Interaction)
* **RSVP Form:** Input Nama, Jumlah Tamu, dan Status Kehadiran menggunakan *Server Actions* Next.js.
* **Guestbook:** Area pesan yang menampilkan ucapan tamu secara *real-time* atau dengan efek *loading* yang elegan.
* **Data Persistence:** Integrasi dengan database PostgreSQL melalui Prisma ORM.

### G. Digital Gift & Wallet
* **Copy to Clipboard:** Tombol untuk menyalin nomor rekening bank/nomor e-wallet tanpa perlu mengetik ulang.
* **QRIS Display:** Menampilkan kode QR untuk memudahkan pemindaian.

---

## 4. Persyaratan Teknis & Performa

| Kategori | Persyaratan |
| :--- | :--- |
| **Framework** | Next.js 14+ (App Router) untuk optimasi SSR dan Image Optimization. |
| **Styling** | Tailwind CSS (Utility-first) untuk kustomisasi tema yang cepat. |
| **Animasi** | `lottie-react` untuk karakter dan `framer-motion` untuk transisi komponen. |
| **Media** | Aset vektor diekspor dalam format SVG atau JSON (Lottie) untuk memastikan ketajaman di semua ukuran layar dan menjaga kecepatan *loading*. |
| **Responsivitas** | Prioritas pada *Mobile-First Design* (layar 360px - 450px). |
| **Keamanan** | Validasi input pada *form* RSVP untuk mencegah *spam* atau *injection*. |

---

## 5. Alur Pengguna (User Flow)
1.  **Akses:** Tamu mengklik tautan unik dari WhatsApp.
2.  **Membuka:** Melihat animasi sampul, mengklik "Buka Undangan".
3.  **Eksplorasi:** Menggulir layar, membaca profil, dan mengikuti narasi cerita cinta (*Scrollytelling*).
4.  **Logistik:** Melihat detail lokasi dan menyetel pengingat kalender.
5.  **Interaksi:** Mengisi RSVP dan memberikan ucapan selamat.
6.  **Pemberian Hadiah:** (Opsional) Melakukan transfer hadiah digital.

---

## 6. Jadwal Pengembangan (High-Level Roadmap)
* **Minggu 1:** Desain aset karakter (Affinity/Photoshop) & Ekspor Lottie.
* **Minggu 2:** Setup Next.js, Skema Prisma, dan UI Struktur Dasar (App Bar & Hero).
* **Minggu 3:** Implementasi Logika Scrollytelling dan Animasi Karakter.
* **Minggu 4:** Integrasi Form RSVP (Server Actions), Pengujian Responsivitas, dan *Deployment* ke Vercel.

---

Apakah poin-poin dalam PRD ini sudah sesuai dengan visi aplikasi yang ingin kamu bangun, atau ada bagian spesifik yang ingin dipertajam lagi?