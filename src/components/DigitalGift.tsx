"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BANK_ACCOUNTS } from "@/lib/constants";
import { copyToClipboard } from "@/lib/utils";
import Image from "next/image";

export default function DigitalGift() {
  const [copiedId, setCopiedId] = useState<number | null>(null);
  const [isQrisOpen, setIsQrisOpen] = useState(false);

  const handleCopy = async (accountNumber: string, id: number) => {
    const success = await copyToClipboard(accountNumber);
    if (success) {
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    }
  };

  return (
    <section
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
          Hadiah Digital
        </p>
        <h2 className="font-script text-4xl text-[var(--color-burgundy)] mb-4">
          Wedding Gift
        </h2>
        <div className="ornament-divider">
          <span className="text-[var(--color-rose-gold)] text-sm">✦</span>
        </div>
        <p className="text-[var(--color-charcoal-light)] text-sm mt-4 max-w-xs mx-auto leading-relaxed">
          Doa restu Anda merupakan karunia yang sangat berarti bagi kami. Namun jika Anda ingin
          memberikan tanda kasih, kami menyediakan opsi berikut.
        </p>
      </motion.div>

      {/* Bank Account Cards */}


      {/* QRIS Section */}
      <motion.div
        className="max-w-sm mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <div className="wedding-card text-center p-10">
          <h3 className="font-heading text-lg text-[var(--color-burgundy)] mb-3 font-semibold">
            Scan QRIS
          </h3>
          <p className="text-[var(--color-charcoal-light)] text-sm mb-6 leading-relaxed">
            Scan kode QRIS di bawah ini untuk mengirimkan hadiah digital
          </p>

          {/* QRIS Button */}
          <motion.button
            onClick={() => setIsQrisOpen(true)}
            className="btn-primary text-sm px-8 py-3"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            id="open-qris-btn"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="3" width="7" height="7" rx="1" />
              <rect x="14" y="3" width="7" height="7" rx="1" />
              <rect x="3" y="14" width="7" height="7" rx="1" />
              <rect x="14" y="14" width="3" height="3" />
              <path d="M21 14h-1v3h-3v1h4z" />
              <path d="M14 21v-2h3" />
            </svg>
            Tampilkan QRIS
          </motion.button>
        </div>
      </motion.div>

      {/* QRIS Modal */}
      <AnimatePresence>
        {isQrisOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setIsQrisOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Modal Content */}
            <motion.div
              className="relative z-10 w-full max-w-sm rounded-3xl overflow-hidden"
              initial={{ opacity: 0, scale: 0.85, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.85, y: 30 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              style={{
                background: "white",
                boxShadow: "0 25px 60px rgba(26, 60, 42, 0.25)",
              }}
            >
              {/* Modal Header */}
              <div
                className="relative px-6 pt-6 pb-4 text-center"
                style={{
                  background:
                    "linear-gradient(135deg, var(--color-rose-gold) 0%, var(--color-burgundy-light) 100%)",
                }}
              >
                {/* Close Button */}
                <button
                  onClick={() => setIsQrisOpen(false)}
                  className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-white/20 text-white hover:bg-white/30 transition-colors"
                  id="close-qris-btn"
                  aria-label="Tutup"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>

                <div className="w-14 h-14 mx-auto mb-3 rounded-2xl bg-white/20 flex items-center justify-center">
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="3" y="3" width="7" height="7" rx="1" />
                    <rect x="14" y="3" width="7" height="7" rx="1" />
                    <rect x="3" y="14" width="7" height="7" rx="1" />
                    <rect x="14" y="14" width="3" height="3" />
                    <path d="M21 14h-1v3h-3v1h4z" />
                    <path d="M14 21v-2h3" />
                  </svg>
                </div>
                <h3 className="text-white font-heading text-xl font-semibold mb-1">
                  QRIS Payment
                </h3>
                <p className="text-white/80 text-xs">
                  Scan untuk mengirimkan hadiah
                </p>
              </div>

              {/* Modal Body */}
              <div className="px-6 py-6">
                {/* QRIS Image Placeholder */}
                <div
                  className="w-full aspect-square max-w-[260px] mx-auto rounded-2xl flex flex-col items-center justify-center mb-5"
                  style={{
                    background:
                      "linear-gradient(135deg, var(--color-champagne-light), var(--color-soft-pink))",
                    border: "2px dashed var(--color-rose-gold-light)",
                  }}
                >
                  <Image src="/qris.jpeg" alt="QRIS" width={260} height={260} className="rounded-2xl" />
                </div>

                {/* Info */}
                <div
                  className="rounded-xl p-4 text-center"
                  style={{
                    background: "var(--color-champagne-light)",
                    border: "1px solid var(--color-champagne-dark)",
                  }}
                >
                  <p className="text-[var(--color-burgundy)] text-sm font-heading font-semibold mb-1">
                    Berry & Chika
                  </p>
                  <p className="text-[var(--color-charcoal-light)] text-xs leading-relaxed">
                    Gunakan aplikasi e-wallet atau mobile banking Anda untuk scan kode QRIS di atas
                  </p>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="px-6 pb-6">
                <button
                  onClick={() => setIsQrisOpen(false)}
                  className="w-full py-3 rounded-xl text-sm font-medium transition-all duration-200 hover:opacity-80"
                  style={{
                    background: "var(--color-champagne)",
                    color: "var(--color-burgundy)",
                  }}
                >
                  Tutup
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
