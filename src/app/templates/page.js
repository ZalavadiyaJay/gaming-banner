"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function TemplatesRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/youtube-banners");
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-on-background p-xl">
      <head>
        <meta httpEquiv="refresh" content="0; url=/youtube-banners" />
      </head>
      <div className="flex flex-col items-center gap-md text-center">
        <div className="w-8 h-8 border-2 border-primary-container border-t-transparent rounded-full animate-spin" />
        <p className="text-sm font-data-mono text-outline">Redirecting to Templates...</p>
      </div>
    </div>
  );
}
