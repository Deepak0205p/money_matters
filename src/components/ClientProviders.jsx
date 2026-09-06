"use client";

import { LanguageProvider } from '@/components/LanguageProvider';
import { Toaster } from "@/components/ui/toaster";
import BackendKeepAlive from "@/components/BackendKeepAlive";

export default function ClientProviders({ children }) {
  return (
    <LanguageProvider>
      <BackendKeepAlive />
      {children}
      <Toaster />
    </LanguageProvider>
  );
}
