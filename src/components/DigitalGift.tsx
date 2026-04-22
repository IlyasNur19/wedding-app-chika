"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { BANK_ACCOUNTS } from "@/lib/constants";
import { copyToClipboard } from "@/lib/utils";

export default function DigitalGift() {
  const [copiedId, setCopiedId] = useState<number | null>(null);

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
        <div className="wedding-card text-center">
          <h3 className="font-heading text-lg text-[var(--color-burgundy)] mb-3 font-semibold">
            Scan QRIS
          </h3>
          <p className="text-xs text-[var(--color-charcoal-light)] mb-4">
            Scan kode QR di bawah ini untuk pembayaran melalui e-wallet
          </p>

          {/* QR Placeholder */}
          <div className="w-40 h-40 mx-auto bg-white border-2 border-dashed border-[var(--color-rose-gold)]/30 rounded-xl flex flex-col items-center justify-center gap-2">
            <svg
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="var(--color-rose-gold-light)"
              strokeWidth="1.5"
            >
              <rect x="3" y="3" width="7" height="7" />
              <rect x="14" y="3" width="7" height="7" />
              <rect x="3" y="14" width="7" height="7" />
              <rect x="14" y="14" width="3" height="3" />
              <rect x="18" y="14" width="3" height="3" />
              <rect x="14" y="18" width="3" height="3" />
              <rect x="18" y="18" width="3" height="3" />
            </svg>
            <p className="text-[10px] text-[var(--color-charcoal-light)]">
              QR Code
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
