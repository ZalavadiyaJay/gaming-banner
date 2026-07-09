import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-gamertag",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-data-mono",
});

export const metadata = {
  metadataBase: new URL("https://gamingbanner.com"),
  title: {
    default: "GAMINGBANNER | Level Up Your Identity",
    template: "%s | GAMINGBANNER"
  },
  description: "Create premium, custom gaming banners for YouTube, Twitch, Discord, and Twitter instantly.",
  keywords: ["gaming banner maker", "youtube banner template", "twitch offline banner maker", "discord server banner maker", "twitter header gaming", "free banner templates", "youtube banner size safe zone", "twitch banner size", "discord profile banner size", "cool gaming banners", "gaming youtube channel art", "valorant banner maker", "minecraft banner maker"],
  openGraph: {
    title: "GAMINGBANNER | Level Up Your Identity",
    description: "Create premium, custom gaming banners for YouTube, Twitch, Discord, and Twitter instantly.",
    url: "https://gamingbanner.com",
    siteName: "GAMINGBANNER",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GAMINGBANNER | Level Up Your Identity",
    description: "Create premium, custom gaming banners for YouTube, Twitch, Discord, and Twitter instantly.",
  }
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "GAMINGBANNER",
    "url": "https://gamingbanner.com",
    "description": "Design premium, custom gaming banners for YouTube, Twitch, Discord, and Twitter instantly. Free template editor with safe zones.",
    "applicationCategory": "DesignApplication",
    "operatingSystem": "All",
    "browserRequirements": "Requires HTML5 canvas support",
    "offers": {
      "@type": "Offer",
      "price": "0.00",
      "priceCurrency": "USD"
    }
  };

  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} h-full dark`}>
      <body className="min-h-full w-full overflow-x-hidden flex flex-col font-sans bg-background text-on-background antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
