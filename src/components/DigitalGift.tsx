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
      <div className="flex flex-col gap-5 max-w-sm mx-auto mb-10">
        {BANK_ACCOUNTS.map((account, i) => (
          <motion.div
            key={account.id}
            className="relative overflow-hidden rounded-2xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.6 }}
          >
            {/* Card with gradient */}
            <div
              className="p-6 text-white relative overflow-hidden"
              style={{
                background:
                  i === 0
                    ? "linear-gradient(135deg, #1A3C2A 0%, #4A7C59 50%, #2D5E42 100%)"
                    : "linear-gradient(135deg, #2D2D2D 0%, #5A5A5A 50%, #3D3D3D 100%)",
              }}
            >
              {/* Card pattern */}
              <div className="absolute inset-0 opacity-5">
                <div
                  className="w-full h-full"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.1) 10px, rgba(255,255,255,0.1) 20px)",
                  }}
                />
              </div>

              {/* Glow circle */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/5 rounded-full" />

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl">{account.icon}</span>
                  <span className="text-xs opacity-80 font-medium tracking-wider uppercase">
                    {account.bank}
                  </span>
                </div>

                <p className="text-2xl font-mono tracking-[3px] mb-3 font-medium">
                  {account.accountNumber}
                </p>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[10px] uppercase opacity-60 tracking-wider mb-0.5">
                      Atas Nama
                    </p>
                    <p className="text-sm font-medium">{account.accountName}</p>
                  </div>

                  <motion.button
                    onClick={() =>
                      handleCopy(account.accountNumber, account.id)
                    }
                    className="px-4 py-2 rounded-full bg-white/15 backdrop-blur-sm text-xs font-medium hover:bg-white/25 transition-all flex items-center gap-2"
                    whileTap={{ scale: 0.95 }}
                    id={`copy-account-${account.id}`}
                  >
                    {copiedId === account.id ? (
                      <>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        Tersalin!
                      </>
                    ) : (
                      <>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                        </svg>
                        Salin
                      </>
                    )}
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

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
