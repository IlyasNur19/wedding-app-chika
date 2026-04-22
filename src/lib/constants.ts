// =============================================
// Wedding App Constants & Data
// =============================================

export const COUPLE = {
  groom: {
    fullName: "Ahmad Fauzan",
    shortName: "Fauzan",
    parentInfo: "Putra dari Bpk. H. Ahmad Ridwan & Ibu Hj. Siti Aminah",
    instagram: "https://instagram.com/ahmadfauzan",
    instagramHandle: "@ahmadfauzan",
  },
  bride: {
    fullName: "Siti Nurhaliza",
    shortName: "Haliza",
    parentInfo: "Putri dari Bpk. H. Muhammad Yusuf & Ibu Hj. Fatimah Zahra",
    instagram: "https://instagram.com/sitinurhaliza",
    instagramHandle: "@sitinurhaliza",
  },
};

export const WEDDING_DATE = new Date("2026-06-15T08:00:00+07:00");

export const EVENTS = {
  akad: {
    title: "Akad Nikah",
    date: "Senin, 15 Juni 2026",
    time: "08:00 - 10:00 WIB",
    venue: "Masjid Agung Al-Azhar",
    address: "Jl. Sisingamangaraja, Kebayoran Baru, Jakarta Selatan",
    mapsUrl: "https://maps.google.com/?q=Masjid+Agung+Al-Azhar+Jakarta",
  },
  resepsi: {
    title: "Resepsi",
    date: "Senin, 15 Juni 2026",
    time: "11:00 - 14:00 WIB",
    venue: "Grand Ballroom, Hotel Mulia",
    address: "Jl. Asia Afrika, Senayan, Jakarta Selatan",
    mapsUrl: "https://maps.google.com/?q=Hotel+Mulia+Senayan+Jakarta",
  },
};

export const STORY_TIMELINE = [
  {
    id: 1,
    title: "Pertemuan Pertama",
    date: "Maret 2020",
    description:
      "Takdir mempertemukan kami di acara kampus. Sebuah senyuman sederhana yang mengawali segalanya.",
    emoji: "✨",
  },
  {
    id: 2,
    title: "Saling Mengenal",
    date: "Juni 2020",
    description:
      "Percakapan panjang setiap malam, berbagi cerita dan mimpi. Perlahan hati mulai berbicara.",
    emoji: "💬",
  },
  {
    id: 3,
    title: "Menjalin Cinta",
    date: "Oktober 2020",
    description:
      "Resmi menjadi pasangan. Bersama melewati suka dan duka, semakin menguatkan ikatan hati.",
    emoji: "💕",
  },
  {
    id: 4,
    title: "Lamaran",
    date: "Desember 2025",
    description:
      "Sebuah pertanyaan sederhana yang mengubah segalanya. 'Maukah kamu menemani hidupku selamanya?'",
    emoji: "💍",
  },
  {
    id: 5,
    title: "Pernikahan",
    date: "Juni 2026",
    description:
      "Hari yang dinantikan telah tiba. Bismillah, kami siap mengarungi bahtera rumah tangga bersama.",
    emoji: "🕌",
  },
];

export const BANK_ACCOUNTS = [
  {
    id: 1,
    bank: "Bank Central Asia (BCA)",
    accountNumber: "1234567890",
    accountName: "Ahmad Fauzan",
    icon: "🏦",
  },
  {
    id: 2,
    bank: "Bank Mandiri",
    accountNumber: "9876543210",
    accountName: "Siti Nurhaliza",
    icon: "🏦",
  },
];

export const MOCK_WISHES = [
  {
    id: 1,
    name: "Rizky Pratama",
    message: "Barakallah! Semoga menjadi keluarga yang sakinah, mawaddah, warahmah. Aamiin 🤲",
    timestamp: "2 jam lalu",
  },
  {
    id: 2,
    name: "Anisa Rahma",
    message: "Selamat menempuh hidup baru! Semoga selalu diberkahi Allah SWT 💐",
    timestamp: "3 jam lalu",
  },
  {
    id: 3,
    name: "Budi Santoso",
    message: "Happy wedding bro! Semoga lancar dan bahagia selalu ya ❤️",
    timestamp: "5 jam lalu",
  },
  {
    id: 4,
    name: "Dewi Lestari",
    message: "MasyaAllah, pasangan yang serasi! Barakallahu laka wa baraka 'alaik 🌸",
    timestamp: "1 hari lalu",
  },
  {
    id: 5,
    name: "Farhan Adi",
    message: "Semoga pernikahan ini menjadi awal dari kebahagiaan yang tiada henti. Aamiin! 🎉",
    timestamp: "1 hari lalu",
  },
];

export const NAV_ITEMS = [
  { id: "hero", label: "Beranda", icon: "home" },
  { id: "couple", label: "Mempelai", icon: "heart" },
  { id: "events", label: "Acara", icon: "calendar" },
  { id: "story", label: "Cerita", icon: "book" },
  { id: "rsvp", label: "RSVP", icon: "mail" },
] as const;
