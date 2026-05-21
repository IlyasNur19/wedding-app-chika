"use client";

import { motion } from "framer-motion";
import { COUPLE } from "@/lib/constants";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="section-wrapper relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse at 50% 0%, var(--color-soft-pink) 0%, var(--color-ivory) 60%)",
      }}
    >

      {/* Ornament Overlay */}
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

      <motion.div
        className="absolute inset-0 w-full h-full z-50 -scale-85 pointer-events-none"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <Image
          src="/border-ornamen.svg"
          alt="Ornament Hero Section"
          fill
          className=" object-center"
          priority
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center">

        {/* Bismillah */}
        <motion.p
          className="text-[var(--color-burgundy)] text-xl mb-2 opacity-70"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 0.7, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ fontFamily: "var(--font-heading)" }}
        >
          بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ
        </motion.p>

        {/* Subtitle */}
        <motion.p
          className="text-[var(--color-rose-gold)] text-xs tracking-[6px] uppercase mb-15"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Undangan Pernikahan
        </motion.p>

        {/* Ornament */}
        {/* <motion.div
          className="relative"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <Image
            src="/bunga-asset-1.png"
            alt="Flower Ornament"
            width={800}
            height={800}
            className="w-70 md:w-40 h-auto opacity-90 object-contain"
          />
        </motion.div> */}



        {/* Groom Name */}
        <motion.h1
          className="font-script text-6xl md:text-7xl text-[var(--color-burgundy)] leading-tight"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.7 }}
        >
          {COUPLE.groom.shortName}
        </motion.h1>

        {/* Ampersand */}
        <motion.div
          className="my-3"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, type: "spring", stiffness: 200 }}
        >
          <span className="font-script text-4xl text-[var(--color-rose-gold)]">
            &
          </span>
        </motion.div>

        {/* Bride Name */}
        <motion.h1
          className="font-script text-6xl md:text-7xl text-[var(--color-burgundy)] leading-tight mb-8"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.7 }}
        >
          {COUPLE.bride.shortName}
        </motion.h1>

        {/* Ornament */}
        {/* <motion.div
          className="relative bottom-10"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <Image 
            src="/bunga-asset-2.png" 
            alt="Flower Ornament" 
            width={800} 
            height={800} 
            className="w-70 md:w-40 h-auto opacity-90 object-contain"
          />
        </motion.div> */}


        {/* Date */}
        <motion.div
          className="flex flex-col items-center gap-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1.1, duration: 0.6 }}
        >
          <p className="text-[var(--color-charcoal)] text-sm tracking-[3px] uppercase">
            Sabtu, 6 Juni 2026
          </p>
          <p className="text-[var(--color-charcoal-light)] text-xs tracking-widest">
            Karanganyar, Indonesia
          </p>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.5 }}
        >
          <motion.div
            className="flex flex-col items-center gap-2 text-[var(--color-rose-gold)]"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <p className="text-xs tracking-widest uppercase opacity-60">
              Scroll ke bawah
            </p>
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="opacity-60"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
