"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { EVENTS, WEDDING_DATE } from "@/lib/constants";
import { calculateCountdown, generateCalendarUrl } from "@/lib/utils";

export default function EventInfo() {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isExpired: false,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(calculateCountdown(WEDDING_DATE));
    }, 1000);
    setCountdown(calculateCountdown(WEDDING_DATE));
    return () => clearInterval(timer);
  }, []);

  const countdownItems = [
    { value: countdown.days, label: "Hari" },
    { value: countdown.hours, label: "Jam" },
    { value: countdown.minutes, label: "Menit" },
    { value: countdown.seconds, label: "Detik" },
  ];

  return (
    <section
      id="events"
      className="section-wrapper relative"
      style={{
        background:
          "linear-gradient(180deg, var(--color-ivory) 0%, var(--color-champagne-light) 50%, var(--color-ivory) 100%)",
      }}
    >
      {/* Section Title */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-[var(--color-rose-gold)] text-xs tracking-[6px] uppercase mb-3">
          Waktu & Tempat
        </p>
        <h2 className="font-script text-4xl text-[var(--color-burgundy)] mb-4">
          Jadwal Acara
        </h2>
        <div className="ornament-divider">
          <span className="text-[var(--color-rose-gold)] text-sm">✦</span>
        </div>
      </motion.div>

      {/* Countdown Timer */}
      <motion.div
        className="max-w-sm mx-auto mb-14"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <p className="text-center text-[var(--color-charcoal-light)] text-sm mb-4 tracking-wide">
          Menghitung Hari Menuju
        </p>
        <div className="flex justify-center gap-3">
          {countdownItems.map((item, i) => (
            <motion.div
              key={item.label}
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.1 }}
            >
              <div className="w-16 h-16 rounded-2xl bg-white shadow-md border border-[var(--color-rose-gold)]/10 flex items-center justify-center mb-2">
                <motion.span
                  key={item.value}
                  className="text-2xl font-heading font-bold text-[var(--color-burgundy)]"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {String(item.value).padStart(2, "0")}
                </motion.span>
              </div>
              <span className="text-xs text-[var(--color-charcoal-light)] font-medium">
                {item.label}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Event Cards */}
      <div className="flex flex-col gap-6 max-w-sm mx-auto">
        {/* Akad Card */}
        <motion.div
          className="wedding-card"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--color-rose-gold)] to-[var(--color-burgundy)] flex items-center justify-center text-white shadow-md">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            </div>
            <div>
              <h3 className="font-heading text-xl text-[var(--color-burgundy)] font-semibold">
                {EVENTS.akad.title}
              </h3>
              <p className="text-[var(--color-rose-gold)] text-xs font-medium">
                {EVENTS.akad.date}
              </p>
            </div>
          </div>

          <div className="space-y-3 mb-5">
            <div className="flex items-start gap-3">
              <svg className="w-4 h-4 text-[var(--color-rose-gold)] mt-0.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              <p className="text-sm text-[var(--color-charcoal)]">{EVENTS.akad.time}</p>
            </div>
            <div className="flex items-start gap-3">
              <svg className="w-4 h-4 text-[var(--color-rose-gold)] mt-0.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <div>
                <p className="text-sm text-[var(--color-charcoal)] font-medium">{EVENTS.akad.venue}</p>
                <p className="text-xs text-[var(--color-charcoal-light)]">{EVENTS.akad.address}</p>
              </div>
            </div>
          </div>

          <div className="flex gap-3">
            <a
              href={EVENTS.akad.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary flex-1 text-xs"
              id="akad-maps-btn"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              Google Maps
            </a>
            <a
              href={generateCalendarUrl("akad")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary flex-1 text-xs"
              id="akad-calendar-btn"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="4" width="18" height="18" rx="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              Simpan
            </a>
          </div>
        </motion.div>

        {/* Resepsi Card */}
        <motion.div
          className="wedding-card"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--color-gold)] to-[var(--color-burgundy)] flex items-center justify-center text-white shadow-md">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>
            <div>
              <h3 className="font-heading text-xl text-[var(--color-burgundy)] font-semibold">
                {EVENTS.resepsi.title}
              </h3>
              <p className="text-[var(--color-rose-gold)] text-xs font-medium">
                {EVENTS.resepsi.date}
              </p>
            </div>
          </div>

          <div className="space-y-3 mb-5">
            <div className="flex items-start gap-3">
              <svg className="w-4 h-4 text-[var(--color-rose-gold)] mt-0.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              <p className="text-sm text-[var(--color-charcoal)]">{EVENTS.resepsi.time}</p>
            </div>
            <div className="flex items-start gap-3">
              <svg className="w-4 h-4 text-[var(--color-rose-gold)] mt-0.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <div>
                <p className="text-sm text-[var(--color-charcoal)] font-medium">{EVENTS.resepsi.venue}</p>
                <p className="text-xs text-[var(--color-charcoal-light)]">{EVENTS.resepsi.address}</p>
              </div>
            </div>
          </div>

          <div className="flex gap-3">
            <a
              href={EVENTS.resepsi.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary flex-1 text-xs"
              id="resepsi-maps-btn"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              Google Maps
            </a>
            <a
              href={generateCalendarUrl("resepsi")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary flex-1 text-xs"
              id="resepsi-calendar-btn"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="4" width="18" height="18" rx="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              Simpan
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
