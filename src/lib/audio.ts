"use client";

import {
  createContext,
  useContext,
  useRef,
  useState,
  useCallback,
  ReactNode,
} from "react";

interface AudioContextType {
  isPlaying: boolean;
  play: () => void;
  pause: () => void;
  toggle: () => void;
}

const AudioCtx = createContext<AudioContextType>({
  isPlaying: false,
  play: () => {},
  pause: () => {},
  toggle: () => {},
});

export function useAudio() {
  return useContext(AudioCtx);
}

export function AudioProvider({ children }: { children: ReactNode }) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const play = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.play().then(() => {
      setIsPlaying(true);
    }).catch((err) => {
      console.warn("Audio play failed:", err);
    });
  }, []);

  const pause = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.pause();
    setIsPlaying(false);
  }, []);

  const toggle = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) {
      play();
    } else {
      pause();
    }
  }, [play, pause]);

  return (
    <AudioCtx.Provider value={{ isPlaying, play, pause, toggle }}>
      {/* Hidden audio element — most reliable cross-browser approach */}
      <audio
        ref={audioRef}
        src="/audio.mp3"
        loop
        preload="auto"
        style={{ display: "none" }}
      />
      {children}
    </AudioCtx.Provider>
  );
}
