"use client";

import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { NAV_ITEMS } from "@/lib/constants";

const NavIcon = ({ icon, isActive }: { icon: string; isActive: boolean }) => {
  const color = isActive ? "var(--color-burgundy)" : "var(--color-charcoal-light)";

  const icons: Record<string, React.ReactNode> = {
    home: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    heart: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill={isActive ? color : "none"} stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
    calendar: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
    book: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
    mail: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  };

  return <>{icons[icon]}</>;
};

export default function BottomNav() {
  const [activeSection, setActiveSection] = useState("hero");

  const handleScroll = useCallback(() => {
    const sections = NAV_ITEMS.map((item) =>
      document.getElementById(item.id)
    ).filter(Boolean) as HTMLElement[];

    const scrollPos = window.scrollY + window.innerHeight / 2;

    for (let i = sections.length - 1; i >= 0; i--) {
      if (sections[i].offsetTop <= scrollPos) {
        setActiveSection(NAV_ITEMS[i].id);
        break;
      }
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <motion.nav
      className="fixed bottom-0 left-0 right-0 z-50 glass"
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ delay: 0.5, type: "spring", stiffness: 200, damping: 25 }}
      style={{
        paddingBottom: "env(safe-area-inset-bottom, 0px)",
        borderTop: "1px solid rgba(74, 124, 89, 0.1)",
      }}
      id="bottom-nav"
    >
      <div className="flex justify-around items-center h-16 max-w-lg mx-auto px-2">
        {NAV_ITEMS.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="relative flex flex-col items-center gap-1 py-2 px-3 rounded-xl transition-all duration-300"
              id={`nav-${item.id}`}
              aria-label={`Navigasi ke ${item.label}`}
            >
              {/* Active background indicator */}
              {isActive && (
                <motion.div
                  className="absolute inset-0 bg-[var(--color-soft-pink)] rounded-xl"
                  layoutId="nav-active"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}

              <span className="relative z-10">
                <NavIcon icon={item.icon} isActive={isActive} />
              </span>
              <span
                className={`relative z-10 text-[10px] font-medium transition-colors duration-300 ${
                  isActive
                    ? "text-[var(--color-burgundy)]"
                    : "text-[var(--color-charcoal-light)]"
                }`}
              >
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </motion.nav>
  );
}
