"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { PocketProvider } from "@/context/PocketContext";
import Navbar from "@/components/Navbar";

export default function OrteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <PocketProvider>
          <Navbar />
          <div className="mt-1">
            <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">{children}</div>
          </div>
        </PocketProvider>
      </QueryClientProvider>
    </>
  );
}
