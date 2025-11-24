"use client";

import dynamic from "next/dynamic";

const ClientTransitionProvider = dynamic(
  () => import("./ClientTransitionProvider"),
  { ssr: false }
);

interface LayoutWrapperProps {
  children: React.ReactNode;
}

export default function LayoutWrapper({ children }: LayoutWrapperProps) {
  return <ClientTransitionProvider>{children}</ClientTransitionProvider>;
}

