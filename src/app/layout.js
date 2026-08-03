import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
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
  alternates: {
    canonical: "./",
  },
  title: {
    default: "Gaming Banner | Level Up Your Identity",
    template: "%s | Gaming Banner"
  },
  description: "Create premium, custom gaming banners for YouTube, Twitch, Discord, and Twitter instantly.",
  keywords: ["gaming banner maker", "youtube banner template", "twitch offline banner maker", "discord server banner maker", "twitter header gaming", "free banner templates", "youtube banner size safe zone", "twitch banner size", "discord profile banner size", "cool gaming banners", "gaming youtube channel art", "valorant banner maker", "minecraft banner maker"],
  verification: {
    google: "VZg_9aVM21iFywiwLemiPb9BD_9v6SbT-Pk-l0Y2G5c",
  },
  openGraph: {
    title: "Gaming Banner | Level Up Your Identity",
    description: "Create premium, custom gaming banners for YouTube, Twitch, Discord, and Twitter instantly.",
    url: "https://gamingbanner.com",
    siteName: "Gaming Banner",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gaming Banner | Level Up Your Identity",
    description: "Create premium, custom gaming banners for YouTube, Twitch, Discord, and Twitter instantly.",
  }
};

export default function RootLayout({ children }) {
  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Gaming Banner",
    "alternateName": [
      "GamingBanner",
      "GAMINGBANNER",
      "GamingBanners",
      "Gaming Banners",
      "Gaming Banner Maker",
      "Gaming Banners Maker",
      "Gaming Banner Generator",
      "Gaming Banner Customization",
      "Gaming Banner Customisation",
      "Gaming Banner Editor",
      "Gaming Channel Art Maker",
      "Free Gaming Banner Maker",
      "YouTube Gaming Banner Maker",
      "Twitch Gaming Banner Maker",
      "Discord Gaming Banner Maker",
      "GamingBanner.com",
      "GamingBanners.com"
    ],
    "url": "https://gamingbanner.com"
  };

  const webAppJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Gaming Banner",
    "url": "https://gamingbanner.com",
    "description": "Design premium, custom gaming banners for YouTube, Twitch, Discord, and Twitter instantly. Free 4K template editor with safe zone overlays.",
    "applicationCategory": "DesignApplication",
    "operatingSystem": "All",
    "browserRequirements": "Requires HTML5 canvas support",
    "featureList": [
      "Instant 4K PNG Banner Export",
      "Official 20 Top Game Background Artwork",
      "YouTube Safe Zone Overlay Grid",
      "Twitch Offline & Profile Header Creator",
      "Discord Animated & Server Banner Editor",
      "Twitter/X Header Banner Generator",
      "Zero Watermark & 100% Free Forever"
    ],
    "offers": {
      "@type": "Offer",
      "price": "0.00",
      "priceCurrency": "USD"
    }
  };

  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Gaming Banner",
    "alternateName": ["GamingBanner", "GAMINGBANNER", "GamingBanners"],
    "url": "https://gamingbanner.com",
    "logo": "https://gamingbanner.com/favicon.ico",
    "description": "Gaming Banner is the leading free online banner generator for YouTube creators, Twitch streamers, Discord servers, and esports gamers."
  };

  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} h-full dark`}>
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-MCS19G3FL8"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-MCS19G3FL8');
          `}
        </Script>
      </head>
      <body className="min-h-full w-full overflow-x-hidden flex flex-col font-sans bg-background text-on-background antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
