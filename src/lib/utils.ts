// =============================================
// Wedding App Utility Functions
// =============================================

import { EVENTS } from "./constants";

/**
 * Generate a Google Calendar URL for the wedding event
 */
export function generateCalendarUrl(
  eventType: "akad" | "resepsi"
): string {
  const event = EVENTS[eventType];
  const title = encodeURIComponent(
    `Pernikahan Ahmad Fauzan & Siti Nurhaliza - ${event.title}`
  );
  const location = encodeURIComponent(`${event.venue}, ${event.address}`);
  
  // Convert to Google Calendar date format
  const dateStr = "20260615";
  const startTime = eventType === "akad" ? "010000Z" : "040000Z"; // UTC (WIB-7)
  const endTime = eventType === "akad" ? "030000Z" : "070000Z";
  
  return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${dateStr}T${startTime}/${dateStr}T${endTime}&location=${location}&sf=true&output=xml`;
}

/**
 * Copy text to clipboard and return success status
 */
export async function copyToClipboard(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    // Fallback for older browsers
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.position = "fixed";
    textArea.style.left = "-9999px";
    document.body.appendChild(textArea);
    textArea.select();
    try {
      document.execCommand("copy");
      return true;
    } catch {
      return false;
    } finally {
      document.body.removeChild(textArea);
    }
  }
}

/**
 * Calculate countdown to a target date
 */
export function calculateCountdown(targetDate: Date): {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isExpired: boolean;
} {
  const now = new Date().getTime();
  const target = targetDate.getTime();
  const diff = target - now;

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, isExpired: true };
  }

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((diff % (1000 * 60)) / 1000),
    isExpired: false,
  };
}

/**
 * Get guest name from URL search params
 */
export function getGuestName(): string {
  if (typeof window === "undefined") return "Tamu Undangan";
  const params = new URLSearchParams(window.location.search);
  return params.get("to") || "Tamu Undangan";
}
