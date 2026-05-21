"use client";

import { AudioProvider } from "@/lib/audio";
import { ReactNode } from "react";

export default function Providers({ children }: { children: ReactNode }) {
  return <AudioProvider>{children}</AudioProvider>;
}
