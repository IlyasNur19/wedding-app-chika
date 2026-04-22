"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MOCK_WISHES } from "@/lib/constants";

interface WishItem {
  id: number;
  name: string;
  message: string;
  timestamp: string;
}

export default function RSVPSection() {
  const [formData, setFormData] = useState({
    name: "",
    guests: "1",
    attendance: "hadir",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [wishes, setWishes] = useState<WishItem[]>(MOCK_WISHES);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim()) return;

    setIsSubmitting(true);

    // Simulate API call
    await new Promise((r) => setTimeout(r, 1500));

    // Add new wish to the list
    if (formData.message.trim()) {
      setWishes((prev) => [
        {
          id: Date.now(),
          name: formData.name,
          message: formData.message,
          timestamp: "Baru saja",
        },
        ...prev,
      ]);
    }

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", guests: "1", attendance: "hadir", message: "" });
    }, 3000);
  };

  return (
    <section
      id="rsvp"
      className="section-wrapper relative"
      style={{
        background:
          "linear-gradient(180deg, var(--color-ivory) 0%, var(--color-soft-pink) 50%, var(--color-ivory) 100%)",
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
          Konfirmasi Kehadiran
        </p>
        <h2 className="font-script text-4xl text-[var(--color-burgundy)] mb-4">
          RSVP & Ucapan
        </h2>
        <div className="ornament-divider">
          <span className="text-[var(--color-rose-gold)] text-sm">✦</span>
        </div>
      </motion.div>

      {/* RSVP Form */}
      <motion.div
        className="max-w-sm mx-auto mb-14"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <form onSubmit={handleSubmit} className="wedding-card space-y-5">
          {/* Name */}
          <div>
            <label
              htmlFor="rsvp-name"
              className="block text-sm font-medium text-[var(--color-charcoal)] mb-1.5"
            >
              Nama Lengkap
            </label>
            <input
              id="rsvp-name"
              type="text"
              required
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="w-full px-4 py-3 rounded-xl bg-[var(--color-ivory)] border border-[var(--color-rose-gold)]/15 text-sm text-[var(--color-charcoal)] placeholder-[var(--color-charcoal-light)]/50 focus:outline-none focus:border-[var(--color-rose-gold)] focus:ring-2 focus:ring-[var(--color-rose-gold)]/10 transition-all"
              placeholder="Masukkan nama Anda"
            />
          </div>

          {/* Guest count & Attendance */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="rsvp-guests"
                className="block text-sm font-medium text-[var(--color-charcoal)] mb-1.5"
              >
                Jumlah Tamu
              </label>
              <select
                id="rsvp-guests"
                value={formData.guests}
                onChange={(e) =>
                  setFormData({ ...formData, guests: e.target.value })
                }
                className="w-full px-4 py-3 rounded-xl bg-[var(--color-ivory)] border border-[var(--color-rose-gold)]/15 text-sm text-[var(--color-charcoal)] focus:outline-none focus:border-[var(--color-rose-gold)] focus:ring-2 focus:ring-[var(--color-rose-gold)]/10 transition-all appearance-none cursor-pointer"
              >
                {[1, 2, 3, 4, 5].map((n) => (
                  <option key={n} value={n}>
                    {n} orang
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label
                htmlFor="rsvp-attendance"
                className="block text-sm font-medium text-[var(--color-charcoal)] mb-1.5"
              >
                Kehadiran
              </label>
              <select
                id="rsvp-attendance"
                value={formData.attendance}
                onChange={(e) =>
                  setFormData({ ...formData, attendance: e.target.value })
                }
                className="w-full px-4 py-3 rounded-xl bg-[var(--color-ivory)] border border-[var(--color-rose-gold)]/15 text-sm text-[var(--color-charcoal)] focus:outline-none focus:border-[var(--color-rose-gold)] focus:ring-2 focus:ring-[var(--color-rose-gold)]/10 transition-all appearance-none cursor-pointer"
              >
                <option value="hadir">Hadir</option>
                <option value="tidak">Tidak Hadir</option>
                <option value="ragu">Belum Pasti</option>
              </select>
            </div>
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="rsvp-message"
              className="block text-sm font-medium text-[var(--color-charcoal)] mb-1.5"
            >
              Ucapan & Doa
            </label>
            <textarea
              id="rsvp-message"
              rows={3}
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="w-full px-4 py-3 rounded-xl bg-[var(--color-ivory)] border border-[var(--color-rose-gold)]/15 text-sm text-[var(--color-charcoal)] placeholder-[var(--color-charcoal-light)]/50 focus:outline-none focus:border-[var(--color-rose-gold)] focus:ring-2 focus:ring-[var(--color-rose-gold)]/10 transition-all resize-none"
              placeholder="Tuliskan ucapan dan doa untuk mempelai..."
            />
          </div>

          {/* Submit */}
          <AnimatePresence mode="wait">
            {isSubmitted ? (
              <motion.div
                key="success"
                className="flex items-center justify-center gap-2 py-3 text-green-700 bg-green-50 rounded-xl text-sm font-medium"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Terima kasih atas konfirmasi Anda!
              </motion.div>
            ) : (
              <motion.button
                key="submit"
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full py-3.5 disabled:opacity-70"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                id="rsvp-submit-btn"
              >
                {isSubmitting ? (
                  <motion.div
                    className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  />
                ) : (
                  <>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="22" y1="2" x2="11" y2="13" />
                      <polygon points="22 2 15 22 11 13 2 9 22 2" />
                    </svg>
                    Kirim Konfirmasi
                  </>
                )}
              </motion.button>
            )}
          </AnimatePresence>
        </form>
      </motion.div>

      {/* Guestbook / Wishes */}
      <div className="max-w-sm mx-auto">
        <h3 className="font-heading text-xl text-[var(--color-burgundy)] text-center mb-6">
          Ucapan & Doa 💝
        </h3>

        <div className="space-y-4 max-h-[400px] overflow-y-auto pr-1" style={{ scrollbarWidth: "thin" }}>
          <AnimatePresence>
            {wishes.map((wish, i) => (
              <motion.div
                key={wish.id}
                className="wedding-card py-4 px-5"
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: i * 0.05 }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[var(--color-rose-gold)] to-[var(--color-burgundy)] flex items-center justify-center text-white text-xs font-bold shadow-sm">
                    {wish.name.charAt(0)}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-[var(--color-charcoal)]">
                      {wish.name}
                    </p>
                    <p className="text-[10px] text-[var(--color-charcoal-light)]">
                      {wish.timestamp}
                    </p>
                  </div>
                </div>
                <p className="text-sm text-[var(--color-charcoal-light)] leading-relaxed pl-11">
                  {wish.message}
                </p>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
