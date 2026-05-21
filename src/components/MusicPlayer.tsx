"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useAudio } from "@/lib/audio";

export default function MusicPlayer() {
  const { isPlaying, toggle } = useAudio();

  return (
    <AnimatePresence>
      <motion.button
        onClick={toggle}
        className="fixed top-5 right-5 z-50 w-12 h-12 rounded-full glass flex items-center justify-center shadow-lg"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        id="music-toggle-btn"
        aria-label={isPlaying ? "Pause musik" : "Putar musik"}
      >
        {/* Vinyl disc icon */}
        <div className="relative w-8 h-8">
          <motion.div
            className="w-8 h-8 rounded-full bg-gradient-to-br from-[var(--color-burgundy)] to-[var(--color-burgundy-dark)] flex items-center justify-center"
            animate={isPlaying ? { rotate: 360 } : { rotate: 0 }}
            transition={
              isPlaying
                ? { duration: 3, repeat: Infinity, ease: "linear" }
                : { duration: 0 }
            }
          >
            {/* Vinyl grooves */}
            <div className="w-6 h-6 rounded-full border border-[var(--color-rose-gold)]/30 flex items-center justify-center">
              <div className="w-4 h-4 rounded-full border border-[var(--color-rose-gold)]/20 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-[var(--color-rose-gold)]" />
              </div>
            </div>
          </motion.div>

          {/* Play/pause indicator */}
          {!isPlaying && (
            <div className="absolute inset-0 flex items-center justify-center bg-[var(--color-burgundy)]/40 rounded-full">
              <svg
                width="12"
                height="12"
                fill="white"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          )}
        </div>

        {/* Pulse ring when playing */}
        {isPlaying && (
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-[var(--color-rose-gold)]"
            animate={{ opacity: [0.6, 0], scale: [1, 1.5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        )}
      </motion.button>
    </AnimatePresence>
  );
}
