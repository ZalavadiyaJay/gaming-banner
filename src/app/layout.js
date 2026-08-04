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
  keywords: [
    // Top Global High-Volume Queries (10k - 500k+ Monthly Searches)
    "youtube banner maker", "youtube banner size", "free banner maker", "gaming banner maker", "youtube banner template", "twitch banner maker", "discord banner maker", "youtube channel art maker", "twitch banner size", "discord banner size", "twitter header maker", "valorant banner maker", "minecraft banner maker", "fortnite banner maker",
    
    // High-Intent Problem-Solving Queries
    "how to make a youtube gaming banner without photoshop", "free gaming banner maker no watermark", "youtube banner generator no signup", "valorant banner maker safe zone", "twitch offline banner maker 4k",
    
    // Top High-Volume Spanish Queries (ES / LatAm)
    "banner para youtube", "creador de banners", "banner para twitch", "plantillas de banners", "banner gaming", "como hacer un banner para youtube de gaming sin photoshop", "creador de banners para twitch gratis sin marca de agua",
    
    // Top High-Volume German Queries (DE)
    "youtube banner erstellen", "twitch banner erstellen", "gaming banner erstellen", "youtube banner vorlage", "youtube gaming banner ohne photoshop erstellen", "kostenlos twitch banner generator ohne anmeldung",
    
    // Top High-Volume Portuguese Queries (BR)
    "banner para youtube", "criador de banner", "banner para twitch", "fazer banner para youtube", "como fazer banner de jogos para youtube sem photoshop", "banner para canal de gaming grátis sem marca d'água",
    
    // Top High-Volume French Queries (FR)
    "créer une bannière youtube", "bannière twitch", "bannière gaming", "comment faire une bannière youtube gaming sans photoshop", "créateur de bannière twitch gratuit sans inscription",
    
    // Top High-Volume Asian Queries (JP / KR)
    "YouTube バナー 作成", "ゲーミングバナー 作成", "YouTube ゲーミング バナー 簡単 作成 フォトショなし",
    "유튜브 배너 만들기", "게이밍 배너 제작", "포토샵 없이 유튜브 게이밍 배너 만들기",
    
    // High-Volume Polish, Turkish, Indonesian Queries
    "baner youtube", "kreator banerów", "darmowy kreator banerów dla graczy",
    "youtube banner", "banner yapma", "ücretsiz oyun banner yapma",
    "banner youtube", "buat banner", "buat banner gaming gratis"
  ],
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
  const targetLanguages = [
    "en-US", "en-GB", "en-CA", "en-AU", "en-NZ",
    "de-DE", "fr-FR", "es-ES", "es-MX", "pt-BR",
    "ja-JP", "ko-KR", "it-IT", "nl-NL", "sv-SE",
    "no-NO", "pl-PL", "tr-TR", "id-ID", "ar-SA"
  ];

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Gaming Banner",
    "inLanguage": targetLanguages,
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
    "inLanguage": targetLanguages,
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
    "inLanguage": targetLanguages,
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
