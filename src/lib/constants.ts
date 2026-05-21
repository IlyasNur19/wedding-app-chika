// =============================================
// Wedding App Constants & Data
// =============================================

export const COUPLE = {
  groom: {
    fullName: "Berry Wibowo",
    shortName: "Berry",
    parentInfo: `Putra dari Bapak (Alm) \nIndriyanto & ibu Suwarni`,
    instagram: "https://www.instagram.com/massberrrrr_",
    instagramHandle: "@massberrrrr_",
  },
  bride: {
    fullName: "Chika Amelia Putri",
    shortName: "Chika",
    parentInfo: "Putri dari Bapak Puji Utomo & Ibu Wiwik",
    instagram: "https://instagram.com/_chikamelia",
    instagramHandle: "@_chikamelia",
  },
};

export const WEDDING_DATE = new Date("2026-06-06T09:00:00+07:00");

export const EVENTS = {
  akad: {
    title: "Akad Nikah",
    date: "Sabtu, 6 Juni 2026",
    time: "09:00 WIB",
    venue: "Kuliner Mba Ning, Ngargoyoso, Kemuning ",
    address: "Puntukrejo, Kec. Ngargoyoso, Kabupaten Karanganyar, Jawa Tengah 57793",
    mapsUrl: "https://maps.app.goo.gl/CkQoCXuLjcDN1nGM9",
  },
  resepsi: {
    title: "Resepsi",
    date: "Sabtu, 6 Juni 2026",
    time: "10:00 WIB",
    venue: "Kuliner Mba Ning, Ngargoyoso, Kemuning ",
    address: "Puntukrejo, Kec. Ngargoyoso, Kabupaten Karanganyar, Jawa Tengah 57793",
    mapsUrl: "https://maps.app.goo.gl/CkQoCXuLjcDN1nGM9",
  },
};

export const STORY_TIMELINE = [
  {
    id: 1,
    title: "Pertemuan Pertama",
    date: "Maret 2020",
    description:
      "Tidak ada yang kebetulan didunia ini, semua sudah tersusun dengan sangat rapi oleh sang maha kuasa, kita tidak bisa memilih kepada siapa kita akan jatuh cinta. Kami bertemu pertama kalinya tanpa sengaja, tepatnya saat kami berada di suatu event lari kota solo, tidak ada yang pernah menyangka bahwa pertemuan itu membawa kami menuju sebuah ikatan suci.",
    emoji: "✨",
  },
  {
    id: 2,
    title: "Pendekatan",
    date: "Juni 2020",
    description:
      "Berkali-kali kami bertemu di tengah keramaian, hanya saja kami saling pandang dalam diam. Hingga satu percakapan panjang membuka hati 'ternyata kita punya rasa yang sama'. Dengan penuh kemantapan hati kami saling meminta petunjuk dengan istikharah, doa, dan meminta  restu orang tua. Kami memang tak 100% serasi, tapi visi, sudut pandang, dan tujuan kami searah. Dari tatap malu-malu, kini kami memilih melangkah bersama. Bismillah, kami menikah",
    emoji: "💬",
  },
  {
    id: 3,
    title: "Lamaran",
    date: "Oktober 2020",
    description:
      "Kehendaknya menuntun kami pada sebuah pertemuan dua keluarga besar yang tak pernah disangka, hingga akhirnya pada 14 DESEMSER 2025 terlaksanalah khitbah sederhana yang penuh makna, membawa kami menuju sebuah ikatan yang ia ridho-i",
    emoji: "💕",
  },
  {
    id: 5,
    title: "Pernikahan",
    date: "Juni 2026",
    description:
      'Bukan karena bertemu lalu berjodoh, tapi karna berjodohlah kami bisa bertemu, dan memutuskan untuk mengikrarkan janji suci pernikahan pada 6 JUNI 2026 sebagaimana yang pernah dikatakan oleh Ali Bin Abi Thalib : "Apa yang menjadi takdirmu akan menemukan jalannya untuk menemukanmu" ',
    emoji: "🕌",
  },
];

export const BANK_ACCOUNTS = [
  {
    id: 1,
    bank: "Bank Central Asia (BCA)",
    accountNumber: "3271285823",
    accountName: "Chika Amelia Putri",
  },
];

// MOCK_WISHES removed — wishes data is now fetched from Supabase

export const NAV_ITEMS = [
  { id: "hero", label: "Beranda", icon: "home" },
  { id: "couple", label: "Mempelai", icon: "heart" },
  { id: "events", label: "Acara", icon: "calendar" },
  { id: "story", label: "Cerita", icon: "book" },
  { id: "rsvp", label: "RSVP", icon: "mail" },
] as const;
