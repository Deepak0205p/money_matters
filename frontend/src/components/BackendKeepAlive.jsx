"use client";

import { useEffect } from "react";
import { getApiUrl } from "@/lib/apiClient";

export default function BackendKeepAlive() {
  useEffect(() => {
    const pingBackend = async () => {
      try {
        await fetch(getApiUrl("/api/health"), { cache: "no-store" });
      } catch (err) {
        console.debug("Keep-alive ping error:", err);
      }
    };

    // Ping once immediately on load
    pingBackend();

    // Ping every 4.5 minutes (270,000 ms) so Render free tier never idles/shuts down
    const interval = setInterval(pingBackend, 270000);

    return () => clearInterval(interval);
  }, []);

  return null;
}
