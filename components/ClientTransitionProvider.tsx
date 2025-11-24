"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

// Dynamically import TransitionProvider to avoid SSR issues
const TransitionProvider = dynamic(
  () => import("./transitionProvider"),
  { ssr: false }
);

interface ClientTransitionProviderProps {
  children: React.ReactNode;
}

const ClientTransitionProvider = ({ children }: ClientTransitionProviderProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // During SSR/SSG, render children without animations
    return <>{children}</>;
  }

  return <TransitionProvider>{children}</TransitionProvider>;
};

export default ClientTransitionProvider;

