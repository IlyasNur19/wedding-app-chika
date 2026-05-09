"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { STORY_TIMELINE } from "@/lib/constants";

export default function StoryTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      id="story"
      className="section-wrapper relative py-20"
      ref={containerRef}
      style={{
        background:
          "linear-gradient(180deg, var(--color-ivory) 0%, var(--color-blush) 30%, var(--color-soft-pink) 50%, var(--color-blush) 70%, var(--color-ivory) 100%)",
      }}
    >
      {/* Section Title */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-[var(--color-rose-gold)] text-xs tracking-[6px] uppercase mb-3">
          Love Story
        </p>
        <h2 className="font-script text-4xl text-[var(--color-burgundy)] mb-4">
          Cerita Cinta Kami
        </h2>
        <div className="ornament-divider">
          <span className="text-[var(--color-rose-gold)] text-sm">✦</span>
        </div>
      </motion.div>

      {/* Timeline */}
      <div className="relative max-w-md mx-auto">
        {/* Vertical Line (background) */}
        <div className="absolute left-6 top-0 bottom-0 w-[2px] bg-[var(--color-rose-gold-light)]/20 rounded-full" />

        {/* Animated fill line */}
        <motion.div
          className="absolute left-6 top-0 w-[2px] bg-gradient-to-b from-[var(--color-rose-gold)] to-[var(--color-burgundy)] rounded-full origin-top"
          style={{ height: lineHeight }}
        />

        {/* Timeline Items */}
        <div className="space-y-10">
          {STORY_TIMELINE.map((item, i) => (
            <motion.div
              key={item.id}
              className="relative pl-16"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
            >
              {/* Dot */}
              <motion.div
                className="absolute left-[14px] top-1 w-6 h-6 rounded-full bg-white border-2 border-[var(--color-rose-gold)] flex items-center justify-center z-10 shadow-sm"
                whileInView={{
                  borderColor: "var(--color-burgundy)",
                  backgroundColor: "var(--color-soft-pink)",
                }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 + 0.3 }}
              >
                <span className="text-xs">{item.emoji}</span>
              </motion.div>

              {/* Card */}
              <div className="wedding-card py-5 px-6">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xl">{item.emoji}</span>
                  <div>
                    <h3 className="font-heading text-lg text-[var(--color-burgundy)] font-semibold leading-tight">
                      {item.title}
                    </h3>
                    {/* <p className="text-[var(--color-rose-gold)] text-xs font-medium">
                      {item.date}
                    </p> */}
                  </div>
                </div>
                <p className="text-[var(--color-charcoal-light)] text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
