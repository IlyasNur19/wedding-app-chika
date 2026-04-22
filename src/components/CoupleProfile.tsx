"use client";

import { motion } from "framer-motion";
import { COUPLE } from "@/lib/constants";
import Image from "next/image";

export default function CoupleProfile() {
  return (
    <section
      id="couple"
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
          Mempelai
        </p>
        <h2 className="font-script text-4xl text-[var(--color-burgundy)] mb-4">
          Pasangan Pengantin
        </h2>
        <div className="ornament-divider">
          <span className="text-[var(--color-rose-gold)] text-sm">✦</span>
        </div>
      </motion.div>

      {/* Quran Verse */}
      <motion.div
        className="text-center max-w-md mx-auto mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <p className="text-[var(--color-burgundy)] text-lg mb-3 leading-relaxed" style={{ fontFamily: "var(--font-heading)" }}>
          وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا
        </p>
        <p className="text-[var(--color-charcoal-light)] text-xs italic leading-relaxed">
          &ldquo;Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya.&rdquo;
        </p>
        <p className="text-[var(--color-rose-gold)] text-xs mt-2 font-medium">
          — QS. Ar-Rum: 21
        </p>
      </motion.div>

      {/* Couple Cards */}
      <div className="flex flex-col items-center gap-10 max-w-sm mx-auto">
        {/* Groom Card */}
        <motion.div
          className="wedding-card w-full text-center"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          {/* Avatar Placeholder */}
          <div className="relative w-32 h-32 mx-auto mb-4">
            <div className="w-full h-full rounded-full bg-gradient-to-br from-[var(--color-champagne)] to-[var(--color-champagne-dark)] flex items-center justify-center border-4 border-white shadow-lg">
              <Image src="/laki-laki_1.png" alt="Cowok" width={128} height={128} className="w-full h-full rounded-full object-cover"/>
            </div>
          </div>

          <h3 className="font-heading text-2xl text-[var(--color-burgundy)] mb-1 font-semibold">
            {COUPLE.groom.fullName}
          </h3>
          <p className="text-[var(--color-charcoal-light)] text-sm mb-3 leading-relaxed">
            {COUPLE.groom.parentInfo}
          </p>
          <a
            href={COUPLE.groom.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[var(--color-rose-gold)] text-sm hover:text-[var(--color-burgundy)] transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
            {COUPLE.groom.instagramHandle}
          </a>
        </motion.div>

        {/* Connector */}
        <motion.div
          className="flex items-center gap-3"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
        >
          <div className="w-12 h-[1px] bg-[var(--color-rose-gold-light)]" />
          <motion.span
            className="text-3xl"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            ❤️
          </motion.span>
          <div className="w-12 h-[1px] bg-[var(--color-rose-gold-light)]" />
        </motion.div>

        {/* Bride Card */}
        <motion.div
          className="wedding-card w-full text-center"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.7 }}
        >
          {/* Avatar Placeholder */}
          <div className="relative w-32 h-32 mx-auto mb-4">
            <div className="w-full h-full rounded-full bg-gradient-to-br from-[var(--color-soft-pink)] to-[var(--color-rose-gold-light)] flex items-center justify-center border-4 border-white shadow-lg">
              <Image src="/perempuan_1.png" alt="Cewek" width={128} height={128} className="w-full h-full rounded-full object-cover"/>
            </div>
          </div>

          <h3 className="font-heading text-2xl text-[var(--color-burgundy)] mb-1 font-semibold">
            {COUPLE.bride.fullName}
          </h3>
          <p className="text-[var(--color-charcoal-light)] text-sm mb-3 leading-relaxed">
            {COUPLE.bride.parentInfo}
          </p>
          <a
            href={COUPLE.bride.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[var(--color-rose-gold)] text-sm hover:text-[var(--color-burgundy)] transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
            {COUPLE.bride.instagramHandle}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
