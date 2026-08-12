import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CategoryCatalog from "@/components/CategoryCatalog";

export const metadata = {
  title: "Twitch Offline Banner Maker & Overlays | Gaming Banner",
  description: "Create custom 4K Twitch offline banners and stream headers for free. 20+ esports game-themed presets with centered typography and safe zone overlays.",
};

export default function TwitchBanners() {

  const templates = [
    { id: "twitch-valorant", game: "valorant", bannerSlug: "tactical-offline-banner", name: "Valorant Offline", category: "Tactical", sub: "OFFLINE • Season 12 Live Soon", desc: "Tactical neon cyan offline screen for Valorant mains", textStyle: { fontFamily: "var(--font-gamertag)", fontStyle: "italic", color: "#00d4ff", textShadow: "0 0 10px #00d4ff, 0 0 20px #00d4ff, 0 0 40px #005f73", letterSpacing: "0.15em" }, style: { background: "url('/twitch_valorant.jpg') center/cover no-repeat" } },
    { id: "twitch-cod", game: "call-of-duty", bannerSlug: "warzone-offline-banner", name: "Warzone Offline", category: "Esports", sub: "STARTING SOON • Mon-Fri 8PM", desc: "Gunmetal grid overlay for tactical Warzone streams", textStyle: { fontFamily: "Impact, sans-serif", color: "#ffffff", textShadow: "3px 3px 0px #1e293b, -3px -3px 0px #1e293b, 3px -3px 0px #1e293b, -3px 3px 0px #1e293b", letterSpacing: "0.05em" }, style: { background: "url('/twitch_cod.jpg') center/cover no-repeat" } },
    { id: "twitch-fortnite", game: "fortnite", bannerSlug: "purple-rift-offline-banner", name: "Fortnite Offline", category: "Royale", sub: "OFFLINE • Follow for Rank Push", desc: "Purple rift sky offline card for Battle Royale content", textStyle: { fontFamily: "var(--font-sans)", fontWeight: "900", color: "#ffffff", textShadow: "0 0 10px #c084fc, 0 0 20px #8b5cf6, 0 0 30px #6d28d9", letterSpacing: "0.08em" }, style: { background: "url('/twitch_fortnite.jpg') center/cover no-repeat" } },
    { id: "twitch-minecraft", game: "minecraft", bannerSlug: "cozy-voxel-offline-banner", name: "Minecraft Offline", category: "Sandbox", sub: "BE RIGHT BACK • Building spawn", desc: "Cozy voxel sunset card for creative and survival modes", textStyle: { fontFamily: "var(--font-data-mono)", color: "#10b981", textShadow: "2px 2px 0px #064e3b, 4px 4px 0px #022c22", letterSpacing: "0.1em" }, style: { background: "url('/twitch_minecraft.jpg') center/cover no-repeat" } },
    { id: "twitch-apex", game: "apex-legends", bannerSlug: "volcanic-hazard-offline-banner", name: "Apex Legends Offline", category: "Esports", sub: "STREAMING SOON • Predator Grind", desc: "Volcanic hazard orange background for high-tier Apex content", textStyle: { fontFamily: "var(--font-gamertag)", fontStyle: "italic", color: "#ff3e3e", textShadow: "0 0 8px #ea580c, 3px 3px 0px #000000", letterSpacing: "0.05em" }, style: { background: "url('/twitch_apex.jpg') center/cover no-repeat" } },
    { id: "twitch-gtav", game: "gta-v", bannerSlug: "los-santos-offline-banner", name: "GTA RP Offline", category: "Roleplay", sub: "OFFLINE • Back at 7PM EST", desc: "Los Santos skyline retro purple glow for GTA RP streams", textStyle: { fontFamily: "var(--font-gamertag)", fontStyle: "italic", color: "#f472b6", textShadow: "0 0 10px #f472b6, 0 0 20px #db2777, 0 0 30px #00d4ff", letterSpacing: "0.12em" }, style: { background: "url('/twitch_gtav.jpg') center/cover no-repeat" } },
    { id: "twitch-league", game: "league-of-legends", bannerSlug: "golden-rune-offline-banner", name: "League of Legends Offline", category: "MOBA", sub: "STARTING SOON • Mid Lane Carry", desc: "Magical golden rune lines for League of Legends rank push", textStyle: { fontFamily: "Georgia, serif", color: "#dfc8a5", textShadow: "0 2px 4px #78350f, 0 0 12px rgba(223, 200, 165, 0.4)", letterSpacing: "0.2em" }, style: { background: "url('/twitch_league.jpg') center/cover no-repeat" } },
    { id: "twitch-rocketleague", game: "rocket-league", bannerSlug: "stadium-lights-offline-banner", name: "Rocket League Offline", category: "Sports", sub: "BE RIGHT BACK • Grand Champ ELO", desc: "Cyber dome stadium lights for Rocket League speed runs", textStyle: { fontFamily: "var(--font-gamertag)", color: "#06b6d4", textShadow: "0 0 15px #06b6d4, 0 0 25px #0891b2, 2px 2px 0px #000000", letterSpacing: "0.15em" }, style: { background: "url('/twitch_rocketleague.jpg') center/cover no-repeat" } },
    { id: "twitch-pubg", game: "pubg-mobile", bannerSlug: "tactical-smoke-offline-banner", name: "PUBG Offline", category: "Royale", sub: "OFFLINE • Winner Winner Dinner", desc: "Tactical military green smoke backdrop for battlegrounds", textStyle: { fontFamily: "Impact, sans-serif", color: "#eab308", textShadow: "2px 2px 0px #451a03, -2px -2px 0px #451a03, 0px 4px 8px rgba(0,0,0,0.9)", letterSpacing: "0.05em" }, style: { background: "url('/twitch_pubg.jpg') center/cover no-repeat" } },
    { id: "twitch-coc", game: "clash-of-clans", bannerSlug: "fantasy-fortress-offline-banner", name: "Clash of Clans Offline", category: "Strategy", sub: "OFFLINE • Town Hall 15 Live", desc: "Epic fantasy cartoon fort village for strategy builders", textStyle: { fontFamily: "Impact, sans-serif", color: "#fbbf24", textShadow: "0 4px 0px #b45309, 0 8px 0px #78350f, 0 12px 16px rgba(0,0,0,0.8)", letterSpacing: "0.06em" }, style: { background: "url('/twitch_coc.jpg') center/cover no-repeat" } },
    { id: "twitch-forza", game: "forza-horizon", bannerSlug: "mountain-summit-offline-banner", name: "Forza Horizon Offline", category: "Racing", sub: "STARTING SOON • Wheel Cam Setup", desc: "Scenic mountain racing landscape for racing streams", textStyle: { fontFamily: "var(--font-gamertag)", fontStyle: "italic", color: "#f43f5e", textShadow: "0 0 12px #f43f5e, 0 0 24px #be123c", letterSpacing: "0.2em" }, style: { background: "url('/twitch_forza.jpg') center/cover no-repeat" } },
    { id: "twitch-asphalt", game: "asphalt-9", bannerSlug: "neon-drift-offline-banner", name: "Asphalt Offline", category: "Racing", sub: "BE RIGHT BACK • Custom Lobby Runs", desc: "Vibrant neon city drift backdrop for street arcade racing", textStyle: { fontFamily: "Impact, sans-serif", color: "#ec4899", textShadow: "0 0 8px #db2777, 0 0 16px #4a044e, 3px 3px 0px #000", letterSpacing: "0.1em" }, style: { background: "url('/twitch_asphalt.jpg') center/cover no-repeat" } },
    { id: "twitch-genshin", game: "genshin-impact", bannerSlug: "floating-skies-offline-banner", name: "Genshin Impact Offline", category: "RPG", sub: "OFFLINE • Farming Materials", desc: "Fantasy anime floating skies for Genshin Impact travelers", textStyle: { fontFamily: "Georgia, serif", color: "#38bdf8", textShadow: "0 0 10px #0284c7, 0 2px 4px rgba(0,0,0,0.8)", letterSpacing: "0.25em" }, style: { background: "url('/twitch_genshin.jpg') center/cover no-repeat" } }
  ];



  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://gamingbanner.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Twitch Banners",
        "item": "https://gamingbanner.com/twitch-banners"
      }
    ]
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the official Twitch offline banner size?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The recommended size for a Twitch video player offline banner is 1920 x 1080 pixels (16:9 aspect ratio). This matches Full HD stream resolutions and ensures crisp display on desktop and mobile player windows."
        }
      },
      {
        "@type": "Question",
        "name": "What is the difference between a Twitch Profile Banner and Offline Banner?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A Twitch Profile Banner (1200 x 480 px) sits behind your avatar and channel header, while a Video Player Offline Banner (1920 x 1080 px) appears in place of your stream player when you are offline."
        }
      },
      {
        "@type": "Question",
        "name": "How do I upload an offline banner to Twitch?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Go to your Twitch Creator Dashboard > Settings > Channel. Under the Brand tab, scroll down to Video Player Banner and upload your 1920x1080 PNG or JPG file."
        }
      },
      {
        "@type": "Question",
        "name": "Can I use these Twitch banners in OBS Studio or Streamlabs?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! All banners download as lossless, uncompressed PNG files with zero watermarks. You can add them directly as Image Sources in OBS Studio, Streamlabs Desktop, or Twitch Studio."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Header />

      <main className="flex-1 min-h-screen pt-24 pb-6 px-4 md:px-8 w-full max-w-[1440px] mx-auto flex flex-col gap-6 overflow-x-hidden">
        {/* Page Hero */}
        <section className="text-center py-2 flex flex-col items-center gap-2">
          <h1 className="text-2xl md:text-4xl font-extrabold text-on-background tracking-tight">
            Free Twitch Offline Banner Maker (100% Free 4K PNG)
          </h1>
          <p className="max-w-[800px] text-xs md:text-sm text-outline leading-relaxed">
            Create professional 1920×1080 Twitch offline screens, stream schedule cards, and channel headers in seconds. Zero watermarks, full commercial streaming rights, and instant 4K lossless downloads.
          </p>
        </section>

        {/* Category Catalog Grid with Game Filter Pills */}
        <CategoryCatalog templates={templates} />

        {/* Deep Educational Publisher Section (AdSense High Authority & Anti-Thin Content) */}
        <section className="max-w-[960px] mx-auto w-full py-12 border-t border-outline-variant/60 flex flex-col gap-10">
          
          {/* Header Overview */}
          <div>
            <span className="text-xs font-bold font-data-mono text-primary-container uppercase tracking-widest bg-primary-container/10 border border-primary-container/20 px-3 py-1 rounded-full">
              Twitch Graphics Standard 2025
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-on-background mt-4">
              Complete Guide to Twitch Channel Art & Offline Banners
            </h2>
            <p className="text-sm text-outline leading-relaxed mt-2">
              When you are offline, your video player banner is the prime real estate on your channel. It tells prospective followers your streaming schedule, social handles, Discord links, and esports games. Having a high-contrast 1080p offline card boosts conversion rates from channel visitors into long-term subscribers.
            </p>
          </div>

          {/* Technical Resolution Table */}
          <div className="bg-surface-container rounded-2xl p-6 border border-outline-variant/50 shadow-md">
            <h3 className="text-lg font-bold text-on-background flex items-center gap-2 mb-2">
              📐 Official Twitch Graphic Dimensions & Aspect Ratios
            </h3>
            <p className="text-xs text-outline mb-6">
              Use these exact dimensions when configuring your channel branding to avoid blurry scaling and awkward mobile cropping.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="border-b border-outline-variant text-outline font-data-mono uppercase tracking-wider">
                    <th className="py-3 px-4">Asset Type</th>
                    <th className="py-3 px-4">Optimal Resolution</th>
                    <th className="py-3 px-4">Aspect Ratio</th>
                    <th className="py-3 px-4">Max File Size</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline-variant/30 text-on-surface-variant font-medium">
                  <tr className="hover:bg-surface-container-high/50 transition-colors">
                    <td className="py-3 px-4 font-bold text-on-background">Video Player Offline Screen</td>
                    <td className="py-3 px-4 font-data-mono text-primary-container">1920 × 1080 px</td>
                    <td className="py-3 px-4">16:9 Standard</td>
                    <td className="py-3 px-4">10 MB (PNG/JPG)</td>
                  </tr>
                  <tr className="hover:bg-surface-container-high/50 transition-colors">
                    <td className="py-3 px-4 font-bold text-on-background">Profile Header Banner</td>
                    <td className="py-3 px-4 font-data-mono text-primary-container">1200 × 480 px</td>
                    <td className="py-3 px-4">5:2 Wide</td>
                    <td className="py-3 px-4">10 MB (PNG/JPG)</td>
                  </tr>
                  <tr className="hover:bg-surface-container-high/50 transition-colors">
                    <td className="py-3 px-4 font-bold text-on-background">Stream Info Panels</td>
                    <td className="py-3 px-4 font-data-mono text-primary-container">320 × 160 px</td>
                    <td className="py-3 px-4">2:1 Compact</td>
                    <td className="py-3 px-4">2.9 MB</td>
                  </tr>
                  <tr className="hover:bg-surface-container-high/50 transition-colors">
                    <td className="py-3 px-4 font-bold text-on-background">Twitch Avatar Icon</td>
                    <td className="py-3 px-4 font-data-mono text-primary-container">800 × 800 px</td>
                    <td className="py-3 px-4">1:1 Square</td>
                    <td className="py-3 px-4">10 MB</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* OBS Walkthrough */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-surface-container/60 rounded-xl p-5 border border-outline-variant/40">
              <span className="w-8 h-8 rounded-full bg-primary-container/20 text-primary-container font-bold flex items-center justify-center text-sm mb-3">
                1
              </span>
              <h4 className="font-bold text-on-background text-sm">Design Offline Card</h4>
              <p className="text-xs text-outline leading-relaxed mt-2">
                Select your favorite game theme above, customize your channel schedule and gamertag, and download the high-res PNG.
              </p>
            </div>

            <div className="bg-surface-container/60 rounded-xl p-5 border border-outline-variant/40">
              <span className="w-8 h-8 rounded-full bg-primary-container/20 text-primary-container font-bold flex items-center justify-center text-sm mb-3">
                2
              </span>
              <h4 className="font-bold text-on-background text-sm">Upload to Twitch Dashboard</h4>
              <p className="text-xs text-outline leading-relaxed mt-2">
                Open Creator Dashboard &gt; Settings &gt; Channel &gt; Brand. Scroll down to Video Player Banner and upload your 1920x1080 file.
              </p>
            </div>

            <div className="bg-surface-container/60 rounded-xl p-5 border border-outline-variant/40">
              <span className="w-8 h-8 rounded-full bg-primary-container/20 text-primary-container font-bold flex items-center justify-center text-sm mb-3">
                3
              </span>
              <h4 className="font-bold text-on-background text-sm">Add to OBS Studio Scenes</h4>
              <p className="text-xs text-outline leading-relaxed mt-2">
                Import as an Image Source into your OBS scenes for "Starting Soon" and "Be Right Back" stream transition intervals.
              </p>
            </div>
          </div>

          {/* Twitch FAQs */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-on-background">
              Frequently Asked Questions (Twitch Banners)
            </h3>
            
            <div className="bg-surface-container/50 rounded-xl p-5 border border-outline-variant/40">
              <h4 className="font-bold text-sm text-on-background">What is the best resolution for Twitch offline screens?</h4>
              <p className="text-xs text-outline leading-relaxed mt-1">
                The optimal resolution is 1920 × 1080 pixels (Full HD, 16:9 aspect ratio). This fills modern desktop and mobile video players with zero black bars.
              </p>
            </div>

            <div className="bg-surface-container/50 rounded-xl p-5 border border-outline-variant/40">
              <h4 className="font-bold text-sm text-on-background">Do I need Twitch Affiliate or Partner to use offline banners?</h4>
              <p className="text-xs text-outline leading-relaxed mt-1">
                No! Every Twitch streamer (even brand new accounts) can upload custom Video Player Banners and Profile Headers for free in their Creator Dashboard.
              </p>
            </div>

            <div className="bg-surface-container/50 rounded-xl p-5 border border-outline-variant/40">
              <h4 className="font-bold text-sm text-on-background">Are these Twitch banners free for commercial streaming?</h4>
              <p className="text-xs text-outline leading-relaxed mt-1">
                Yes, 100%. All banner graphics created on GamingBanner.com come with full commercial rights and zero watermarks.
              </p>
            </div>
          </div>

        </section>
      </main>

      <Footer />
    </>
  );
}
