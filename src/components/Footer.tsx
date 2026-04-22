"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer
      className="section-wrapper relative text-center pb-24"
      style={{
        background:
          "linear-gradient(180deg, var(--color-ivory) 0%, var(--color-champagne-light) 100%)",
      }}
    >
      {/* Closing Message */}
      <motion.div
        className="max-w-sm mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {/* Ornament */}
        <div className="ornament-divider mb-8">
          <span className="text-[var(--color-rose-gold)] text-sm">✦</span>
        </div>

        {/* Message */}
        <p className="text-[var(--color-charcoal-light)] text-sm leading-relaxed mb-6">
          Merupakan suatu kebahagiaan dan kehormatan bagi kami apabila
          Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa restu kepada
          kami.
        </p>

        <p
          className="text-[var(--color-burgundy)] text-lg mb-2"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          وَالسَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللَّهِ وَبَرَكَاتُهُ
        </p>

        <p className="text-[var(--color-charcoal-light)] text-xs italic mb-8">
          Wassalamu&apos;alaikum Warahmatullahi Wabarakatuh
        </p>

        {/* Couple Names */}
        <motion.div
          className="mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <p className="font-script text-3xl text-[var(--color-burgundy)] mb-1">
            Fauzan & Haliza
          </p>
          <p className="text-[var(--color-rose-gold)] text-xs tracking-widest">
            beserta keluarga besar
          </p>
        </motion.div>

        {/* Ornament */}
        <div className="ornament-divider mb-8">
          <span className="text-[var(--color-rose-gold)] text-sm">✦</span>
        </div>

        {/* Heart animation */}
        <motion.div
          className="text-3xl mb-6"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          💕
        </motion.div>

        {/* Copyright */}
        <p className="text-[var(--color-charcoal-light)] text-[10px] tracking-wider">
          Made with ❤️ for our special day
        </p>
        <p className="text-[var(--color-charcoal-light)]/40 text-[10px] mt-1">
          © 2026 Wedding of Fauzan & Haliza
        </p>
      </motion.div>
    </footer>
  );
}
