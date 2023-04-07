"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { PocketProvider } from "@/context/PocketContext";

export default function OrteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <PocketProvider>{children}</PocketProvider>
    </QueryClientProvider>
  );
}
