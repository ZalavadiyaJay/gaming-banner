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

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />

      <main className="flex-1 min-h-screen pt-24 pb-6 px-4 md:px-8 w-full max-w-[1440px] mx-auto flex flex-col gap-6 overflow-x-hidden">
        {/* Page Hero */}
        <section className="text-center py-2 flex flex-col items-center gap-2">
          <h1 className="text-2xl md:text-3xl font-extrabold text-on-background tracking-tight">
            Free Twitch Offline Banner Maker (100% Free 4K Downloads)
          </h1>
          <p className="max-w-[760px] text-xs md:text-sm text-outline leading-relaxed">
            Design custom Twitch offline banners and stream headers in seconds. Enjoy full commercial usage rights, zero watermarks, and instant PNG downloads tailored for gaming creators.
          </p>
        </section>

        {/* Category Catalog Grid with Game Filter Pills */}
        <CategoryCatalog templates={templates} />

        {/* Size Guide & Upload specs */}
        <section className="max-w-[800px] mx-auto w-full py-lg border-t border-outline-variant/65 flex flex-col gap-lg">
          <div className="border-l-4 border-primary-container pl-lg">
            <h2 className="text-2xl font-bold text-on-background">Twitch Banner Size Guide</h2>
            <p className="text-sm text-outline mt-1 leading-relaxed">
              Twitch channel graphics display centered above the video feed player on desktop browsers, and are clipped on mobile profiles. Keeping dimensions calibrated to 1200 x 480 px ensures clean display.
            </p>
          </div>

          <div className="p-lg bg-surface-container-high border-l-4 border-emerald-500 rounded-r-lg">
            <span className="font-bold text-sm text-on-background">Recommended Dimensions:</span>
            <p className="text-xs font-data-mono text-outline mt-1">
              Profile Banner Size: 1200 x 480 px | Video Player Offset: 1920 x 1080 px
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
