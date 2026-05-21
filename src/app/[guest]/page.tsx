"use client";

import { useState, useCallback, use } from "react";
import { AnimatePresence } from "framer-motion";
import WelcomeScreen from "@/components/WelcomeScreen";
import MusicPlayer from "@/components/MusicPlayer";
import BottomNav from "@/components/BottomNav";
import HeroSection from "@/components/HeroSection";
import CoupleProfile from "@/components/CoupleProfile";
import EventInfo from "@/components/EventInfo";
import StoryTimeline from "@/components/StoryTimeline";
import RSVPSection from "@/components/RSVPSection";
import DigitalGift from "@/components/DigitalGift";
import Footer from "@/components/Footer";
import { useAudio } from "@/lib/audio";

export default function GuestPage({
  params,
}: {
  params: Promise<{ guest: string }>;
}) {
  const { guest } = use(params);
  const guestName = decodeURIComponent(guest);
  const [isWelcomeOpen, setIsWelcomeOpen] = useState(true);
  const { play } = useAudio();

  const handleOpen = useCallback(() => {
    play();
    setIsWelcomeOpen(false);
  }, [play]);

  return (
    <>
      {/* Welcome Screen Overlay */}
      <AnimatePresence>
        {isWelcomeOpen && (
          <WelcomeScreen
            onOpen={handleOpen}
            guestName={guestName}
          />
        )}
      </AnimatePresence>

      {/* Main Content */}
      {!isWelcomeOpen && (
        <>
          <MusicPlayer />
          <BottomNav />

          <main className="main-content">
            <HeroSection />
            <CoupleProfile />
            <EventInfo />
            <StoryTimeline />
            <RSVPSection />
            <DigitalGift />
            <Footer />
          </main>
        </>
      )}
    </>
  );
}
