"use client";

import { useState, use } from "react";
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

export default function GuestPage({
  params,
}: {
  params: Promise<{ guest: string }>;
}) {
  const { guest } = use(params);
  const guestName = decodeURIComponent(guest);
  const [isWelcomeOpen, setIsWelcomeOpen] = useState(true);

  return (
    <>
      {/* Welcome Screen Overlay */}
      <AnimatePresence>
        {isWelcomeOpen && (
          <WelcomeScreen
            onOpen={() => setIsWelcomeOpen(false)}
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
