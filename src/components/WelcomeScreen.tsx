"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getGuestName } from "@/lib/utils";
import Image from "next/image";
import { COUPLE } from "@/lib/constants";


interface WelcomeScreenProps {
  onOpen: () => void;
  guestName?: string;
}

export default function WelcomeScreen({ onOpen, guestName: guestNameProp }: WelcomeScreenProps) {
  const [guestName, setGuestName] = useState("Tamu Undangan");
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Priority: prop from path > query param ?to= > default
    if (guestNameProp) {
      setGuestName(guestNameProp);
    } else {
      setGuestName(getGuestName());
    }
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [guestNameProp]);

  const handleOpen = () => {
    setIsExiting(true);
    document.body.style.overflow = "";
    setTimeout(() => {
      onOpen();
    }, 800);
  };

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-center justify-center"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -60 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        >
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-ivory)] via-[var(--color-champagne-light)] to-[var(--color-soft-pink)]" />

          <motion.div
            className="absolute inset-0 w-full h-full z-40 pointer-events-none"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <Image
              src="/flower-ornamen.svg"
              alt="Ornament Hero Section"
              fill
              className=" object-cover"
              priority
            />
          </motion.div>

          {/* Content Card */}
          <motion.div
            className="relative z-10 flex flex-col items-center text-center px-6 max-w-sm mx-auto"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          >
            {/* Bismillah */}
            <motion.p
              className="text-[var(--color-burgundy)] font-heading text-lg mb-2 opacity-80"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.8 }}
              transition={{ delay: 0.6 }}
              style={{ fontFamily: "var(--font-heading)" }}
            >
              بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ
            </motion.p>

            {/* Ornament top */}
            <motion.div
              className="w-20 h-[1px] bg-gradient-to-r from-transparent via-[var(--color-rose-gold)] to-transparent mb-6"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            />

            {/* Wedding Invitation label */}
            <motion.p
              className="text-[var(--color-rose-gold)] text-sm tracking-[4px] uppercase mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              The Wedding Of
            </motion.p>

            <motion.div
              className="mb-2"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.6, ease: "easeOut" }}
            >
              <Image
                src="/chika.svg"
                alt={COUPLE.bride.shortName}
                width={320}
                height={240}
                className="w-32 md:w-80 h-auto"
                priority
              />
            </motion.div>

            <motion.div
              className="text-[var(--color-rose-gold)] text-3xl font-script my-1"
              initial={{ opacity: 0, rotate: -10 }}
              animate={{ opacity: 1, rotate: 0 }}
              transition={{ delay: 1.2, duration: 0.5 }}
            >
              &
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.4, duration: 0.6, ease: "easeOut" }}
            >
              <Image
                src="/berry.svg"
                alt={COUPLE.groom.shortName}
                width={360}
                height={240}
                className="w-32 md:w-80 h-auto"
                priority
              />
            </motion.div>

            {/* Ornament bottom */}
            <motion.div
              className="w-20 h-[1px] bg-gradient-to-r from-transparent via-[var(--color-rose-gold)] to-transparent mb-6"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1.6, duration: 0.6 }}
            />

            {/* Date */}
            <motion.p
              className="text-[var(--color-charcoal-light)] text-sm tracking-widest mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.7 }}
            >
              6 . 06 . 2026
            </motion.p>

            {/* Guest Name */}
            <motion.div
              className="mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.9 }}
            >
              <p className="text-[var(--color-charcoal-light)] text-xs tracking-widest uppercase mb-1">
                Kepada Yth.
              </p>
              <p className="text-[var(--color-burgundy)] font-heading text-xl font-medium">
                {guestName}
              </p>
            </motion.div>

            {/* Open Button */}
            <motion.button
              onClick={handleOpen}
              className="btn-primary text-base px-10 py-4 tracking-wide z-50"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.2, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              id="open-invitation-btn"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
              Buka Undangan
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
