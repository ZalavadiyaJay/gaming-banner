import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CategoryCatalog from "@/components/CategoryCatalog";

export const metadata = {
  title: "Free YouTube Gaming Banner Maker & Templates | Gaming Banner",
  description: "Design high-quality YouTube gaming banners for free. Symmetrical layouts, neon glow, and modern esports templates for Valorant, Minecraft, COD, and more.",
};

export default function YouTubeBanners() {

  const templates = [
    // Classic Templates
    { id: "esports", name: "Valorant Classic", desc: "Vibrant neon cyan highlights on tactical agent backdrop", gamertag: "SHADOW_VAL", sub: "RADIANITE CHAMP", textStyle: { fontFamily: "var(--font-gamertag)", color: "#00d4ff", textShadow: "0 0 16px rgba(0, 212, 255, 0.6)" }, style: { background: "url('/banner_valorant.jpg') center/cover no-repeat" } },
    { id: "cs2-tactical", name: "CS2 / Call of Duty Classic", desc: "Gunmetal carbon grid with tactical HUD outlines", gamertag: "FRAG_LORD", sub: "GLOBAL ELITE", textStyle: { fontFamily: "Impact, sans-serif", color: "#ffffff", textShadow: "2px 2px 4px rgba(0,0,0,0.8)" }, style: { background: "url('/banner_cod.jpg') center/cover no-repeat" } },
    { id: "streaming", name: "Fortnite Classic", desc: "Purple rift storm sky with drop bus landscapes", gamertag: "VICTORY_ROY", sub: "CROWNED WINS: 99", textStyle: { fontFamily: "var(--font-sans)", fontWeight: "900", color: "#ffffff", textShadow: "0 0 20px rgba(139, 92, 246, 0.7)" }, style: { background: "url('/banner_fortnite.jpg') center/cover no-repeat" } },
    { id: "minimalist", name: "Minecraft Classic", desc: "Blocky voxel landscape under beautiful pixelated sunset", gamertag: "STEVE_BUILD", sub: "HARDCORE SURVIVOR", textStyle: { fontFamily: "var(--font-data-mono)", color: "#10b981", textShadow: "0 2px 4px rgba(0,0,0,0.9)" }, style: { background: "url('/banner_minecraft.jpg') center/cover no-repeat" } },
    { id: "modern-apex", name: "Apex Legends Classic", desc: "Volcanic rocky canyon backdrop with bold orange text", gamertag: "APEX_CHAMP", sub: "PREDATOR RANK", textStyle: { fontFamily: "var(--font-gamertag)", fontStyle: "italic", color: "#ff3e3e", textShadow: "0 0 12px rgba(255, 62, 62, 0.8)" }, style: { background: "url('/banner_apex.jpg') center/cover no-repeat" } },
    { id: "overwatch-hero", name: "Overwatch 2 Classic", desc: "Clean orange accent layout with futuristic tech patterns", gamertag: "HERO_TACTIC", sub: "GRANDMASTER ELO", textStyle: { fontFamily: "Impact, sans-serif", color: "#f99e1a", textShadow: "0 0 10px rgba(249, 158, 26, 0.6)" }, style: { background: "url('/banner_overwatch.jpg') center/cover no-repeat" } },
    { id: "gta-street", name: "GTA V / Roleplay Classic", desc: "Los Santos street skyline with sunset overlay", gamertag: "LOS_SANTOS", sub: "HEIST LEADER", textStyle: { fontFamily: "Impact, sans-serif", color: "#10b981", textShadow: "2px 2px 4px rgba(0,0,0,0.8)" }, style: { background: "url('/banner_gtav.jpg') center/cover no-repeat" } },
    { id: "rpg", name: "League of Legends Classic", desc: "Magical golden runic border details with ancient carvings", gamertag: "SUMMONER_1", sub: "CHALLENGER RANK", textStyle: { fontFamily: "Georgia, serif", color: "#dfc8a5", textShadow: "0 2px 6px rgba(0,0,0,0.9)" }, style: { background: "url('/banner_league.jpg') center/cover no-repeat" } },
    { id: "rocket-league", name: "Rocket League Classic", desc: "Futuristic stadium dome with glowing neon sparks", gamertag: "AERO_DRIFT", sub: "GRAND CHAMPION", textStyle: { fontFamily: "var(--font-gamertag)", color: "#00d4ff", textShadow: "0 0 12px rgba(0,212,255,0.5)" }, style: { background: "url('/banner_rocketleague.jpg') center/cover no-repeat" } },
    { id: "pubg-mobile", name: "PUBG Mobile Classic", desc: "Tactical drop crate with red smoke on battlefield", gamertag: "CHICKEN_DIN", sub: "CONQUEROR / K/D 6.5", textStyle: { fontFamily: "Impact, sans-serif", color: "#eab308", textShadow: "2px 2px 6px rgba(0,0,0,0.9)" }, style: { background: "url('/banner_pubg.jpg') center/cover no-repeat" } },
    { id: "clash-of-clans", name: "Clash of Clans Classic", desc: "Epic fantasy cartoon village walls with shield details", gamertag: "TOWN_HALL", sub: "CLAN CHIEF / LVL 250", textStyle: { fontFamily: "Impact, sans-serif", color: "#f59e0b", textShadow: "0 4px 6px rgba(0,0,0,0.9)" }, style: { background: "url('/banner_coc_game.jpg') center/cover no-repeat" } },
    { id: "forza-horizon", name: "Forza Horizon Classic", desc: "High-end sports car racing on scenic mountain roads", gamertag: "HORIZON_5", sub: "FESTIVAL CHAMPION", textStyle: { fontFamily: "var(--font-gamertag)", color: "#f43f5e", textShadow: "0 0 10px rgba(244, 63, 94, 0.5)" }, style: { background: "url('/banner_forza.jpg') center/cover no-repeat" } },
    { id: "asphalt-9", name: "Asphalt 9 Classic", desc: "Futuristic hypercar drifting through neon-lit streets", gamertag: "ASPHALT_X", sub: "LEGENDS DIVISION", textStyle: { fontFamily: "Impact, sans-serif", color: "#ec4899", textShadow: "0 0 12px rgba(236, 72, 153, 0.6)" }, style: { background: "url('/banner_asphalt.jpg') center/cover no-repeat" } },
    { id: "genshin-impact", name: "Genshin Impact Classic", desc: "Fantasy floating islands over grassy meadows", gamertag: "TRAVELER_G", sub: "TEYVAT EXPLORER", textStyle: { fontFamily: "Georgia, serif", color: "#38bdf8", textShadow: "0 2px 6px rgba(0,0,0,0.9)" }, style: { background: "url('/banner_genshin.jpg') center/cover no-repeat" } },
    { id: "roblox-virtual", name: "Roblox Classic", desc: "Blocky virtual world with bright blue skies", gamertag: "ROBLOX_DEV", sub: "CREATOR WORLD", textStyle: { fontFamily: "var(--font-sans)", fontWeight: "900", color: "#f43f5e", textShadow: "0 2px 4px rgba(0,0,0,0.9)" }, style: { background: "url('/banner_roblox.jpg') center/cover no-repeat" } },
    { id: "fifa-soccer", name: "FIFA / FC 24 Classic", desc: "Stadium pitch floodlights on green grass ground", gamertag: "FC_PRO", sub: "FUT CHAMPIONS", textStyle: { fontFamily: "var(--font-gamertag)", color: "#10b981", textShadow: "0 0 10px rgba(16, 185, 129, 0.5)" }, style: { background: "url('/banner_fifa.jpg') center/cover no-repeat" } },
    { id: "cyberpunk-2077", name: "Cyberpunk 2077 Classic", desc: "Night City neon streets with retro cyber glow", gamertag: "V_MERCENARY", sub: "NIGHT CITY LEGEND", textStyle: { fontFamily: "Impact, sans-serif", color: "#facc15", textShadow: "0 0 12px rgba(250, 204, 21, 0.6)" }, style: { background: "url('/banner_cyberpunk.jpg') center/cover no-repeat" } },
    { id: "elden-ring", name: "Elden Ring Classic", desc: "Dark fantasy landscape with glowing golden tree dust", gamertag: "TARNISHED", sub: "ELDEN LORD", textStyle: { fontFamily: "Georgia, serif", color: "#fbbf24", textShadow: "0 2px 8px rgba(0,0,0,0.9)" }, style: { background: "url('/banner_eldenring.jpg') center/cover no-repeat" } },
    { id: "among-us", name: "Among Us Classic", desc: "Space stars galaxy backdrop with cosmic nebula", gamertag: "IMPOSTOR_X", sub: "SHERIFF ROLE", textStyle: { fontFamily: "var(--font-sans)", fontWeight: "900", color: "#ef4444", textShadow: "0 2px 4px rgba(0,0,0,0.9)" }, style: { background: "url('/banner_amongus.jpg') center/cover no-repeat" } },
    { id: "clash-royale", name: "Clash Royale Classic", desc: "Medieval swords and stone towers fantasy backdrop", gamertag: "ROYAL_KING", sub: "TROPHY ROAD 9000", textStyle: { fontFamily: "var(--font-sans)", fontWeight: "900", color: "#3b82f6", textShadow: "0 2px 6px rgba(0,0,0,0.9)" }, style: { background: "url('/banner_clashroyale.jpg') center/cover no-repeat" } },

    // New V2 Authentic Templates
    { id: "esports-v2", name: "Valorant Arena V2", desc: "Vibrant neon cyan highlights on tactical agent backdrop", gamertag: "SHADOW_VAL", sub: "RADIANITE CHAMP", textStyle: { fontFamily: "var(--font-gamertag)", color: "#00d4ff", textShadow: "0 0 16px rgba(0, 212, 255, 0.6)" }, style: { background: "url('/banner_valorant_v2.jpg') center/cover no-repeat" } },
    { id: "cs2-tactical-v2", name: "Call of Duty / CS2 Warzone V2", desc: "Gunmetal carbon grid with tactical HUD outlines", gamertag: "FRAG_LORD", sub: "GLOBAL ELITE", textStyle: { fontFamily: "Impact, sans-serif", color: "#ffffff", textShadow: "2px 2px 4px rgba(0,0,0,0.8)" }, style: { background: "url('/banner_cod_v2.jpg') center/cover no-repeat" } },
    { id: "streaming-v2", name: "Fortnite Storm V2", desc: "Purple rift storm sky with drop bus landscapes", gamertag: "VICTORY_ROY", sub: "CROWNED WINS: 99", textStyle: { fontFamily: "var(--font-sans)", fontWeight: "900", color: "#ffffff", textShadow: "0 0 20px rgba(139, 92, 246, 0.7)" }, style: { background: "url('/banner_fortnite_v2.jpg') center/cover no-repeat" } },
    { id: "minimalist-v2", name: "Minecraft Sunset V2", desc: "Blocky voxel landscape under beautiful pixelated sunset", gamertag: "STEVE_BUILD", sub: "HARDCORE SURVIVOR", textStyle: { fontFamily: "var(--font-data-mono)", color: "#10b981", textShadow: "0 2px 4px rgba(0,0,0,0.9)" }, style: { background: "url('/banner_minecraft_v2.jpg') center/cover no-repeat" } },
    { id: "modern-apex-v2", name: "Apex Legends Canyon V2", desc: "Volcanic rocky canyon backdrop with bold orange text", gamertag: "APEX_CHAMP", sub: "PREDATOR RANK", textStyle: { fontFamily: "var(--font-gamertag)", fontStyle: "italic", color: "#ff3e3e", textShadow: "0 0 12px rgba(255, 62, 62, 0.8)" }, style: { background: "url('/banner_apex_v2.jpg') center/cover no-repeat" } },
    { id: "overwatch-hero-v2", name: "Overwatch 2 Hub V2", desc: "Clean orange accent layout with futuristic tech patterns", gamertag: "HERO_TACTIC", sub: "GRANDMASTER ELO", textStyle: { fontFamily: "Impact, sans-serif", color: "#f99e1a", textShadow: "0 0 10px rgba(249, 158, 26, 0.6)" }, style: { background: "url('/banner_overwatch_v2.jpg') center/cover no-repeat" } },
    { id: "gta-street-v2", name: "GTA V Los Santos V2", desc: "Los Santos street skyline with sunset overlay", gamertag: "LOS_SANTOS", sub: "HEIST LEADER", textStyle: { fontFamily: "Impact, sans-serif", color: "#10b981", textShadow: "2px 2px 4px rgba(0,0,0,0.8)" }, style: { background: "url('/banner_gtav_v2.jpg') center/cover no-repeat" } },
    { id: "rpg-v2", name: "League of Legends Rift V2", desc: "Magical golden runic border details with ancient carvings", gamertag: "SUMMONER_1", sub: "CHALLENGER RANK", textStyle: { fontFamily: "Georgia, serif", color: "#dfc8a5", textShadow: "0 2px 6px rgba(0,0,0,0.9)" }, style: { background: "url('/banner_league_v2.jpg') center/cover no-repeat" } },
    { id: "rocket-league-v2", name: "Rocket League Dome V2", desc: "Futuristic stadium dome with glowing neon sparks", gamertag: "AERO_DRIFT", sub: "GRAND CHAMPION", textStyle: { fontFamily: "var(--font-gamertag)", color: "#00d4ff", textShadow: "0 0 12px rgba(0,212,255,0.5)" }, style: { background: "url('/banner_rocketleague_v2.jpg') center/cover no-repeat" } },
    { id: "pubg-mobile-v2", name: "PUBG Mobile Air Drop V2", desc: "Tactical drop crate with red smoke on battlefield", gamertag: "CHICKEN_DIN", sub: "CONQUEROR / K/D 6.5", textStyle: { fontFamily: "Impact, sans-serif", color: "#eab308", textShadow: "2px 2px 6px rgba(0,0,0,0.9)" }, style: { background: "url('/banner_pubg_v2.jpg') center/cover no-repeat" } },
    { id: "clash-of-clans-v2", name: "Clash of Clans Fortress V2", desc: "Epic fantasy cartoon village walls with shield details", gamertag: "TOWN_HALL", sub: "CLAN CHIEF / LVL 250", textStyle: { fontFamily: "Impact, sans-serif", color: "#f59e0b", textShadow: "0 4px 6px rgba(0,0,0,0.9)" }, style: { background: "url('/banner_coc_v2.jpg') center/cover no-repeat" } },
    { id: "forza-horizon-v2", name: "Forza Horizon Speed V2", desc: "High-end sports car racing on scenic mountain roads", gamertag: "HORIZON_5", sub: "FESTIVAL CHAMPION", textStyle: { fontFamily: "var(--font-gamertag)", color: "#f43f5e", textShadow: "0 0 10px rgba(244, 63, 94, 0.5)" }, style: { background: "url('/banner_forza_v2.jpg') center/cover no-repeat" } },
    { id: "asphalt-9-v2", name: "Asphalt 9 Neon V2", desc: "Futuristic hypercar drifting through neon-lit streets", gamertag: "ASPHALT_X", sub: "LEGENDS DIVISION", textStyle: { fontFamily: "Impact, sans-serif", color: "#ec4899", textShadow: "0 0 12px rgba(236, 72, 153, 0.6)" }, style: { background: "url('/banner_asphalt_v2.jpg') center/cover no-repeat" } },
    { id: "genshin-impact-v2", name: "Genshin Impact Meadow V2", desc: "Fantasy floating islands over grassy meadows", gamertag: "TRAVELER_G", sub: "TEYVAT EXPLORER", textStyle: { fontFamily: "Georgia, serif", color: "#38bdf8", textShadow: "0 2px 6px rgba(0,0,0,0.9)" }, style: { background: "url('/banner_genshin_v2.jpg') center/cover no-repeat" } },
    { id: "roblox-virtual-v2", name: "Roblox Parkour V2", desc: "Blocky virtual world with bright blue skies", gamertag: "ROBLOX_DEV", sub: "CREATOR WORLD", textStyle: { fontFamily: "var(--font-sans)", fontWeight: "900", color: "#f43f5e", textShadow: "0 2px 4px rgba(0,0,0,0.9)" }, style: { background: "url('/banner_roblox_v2.jpg') center/cover no-repeat" } },
    { id: "fifa-soccer-v2", name: "EA Sports FC 25 Pitch V2", desc: "Stadium pitch floodlights on green grass ground", gamertag: "FC_PRO", sub: "FUT CHAMPIONS", textStyle: { fontFamily: "var(--font-gamertag)", color: "#10b981", textShadow: "0 0 10px rgba(16, 185, 129, 0.5)" }, style: { background: "url('/banner_fifa_v2.jpg') center/cover no-repeat" } },
    { id: "cyberpunk-2077-v2", name: "Cyberpunk 2077 City V2", desc: "Night City neon streets with retro cyber glow", gamertag: "V_MERCENARY", sub: "NIGHT CITY LEGEND", textStyle: { fontFamily: "Impact, sans-serif", color: "#facc15", textShadow: "0 0 12px rgba(250, 204, 21, 0.6)" }, style: { background: "url('/banner_cyberpunk_v2.jpg') center/cover no-repeat" } },
    { id: "elden-ring-v2", name: "Elden Ring Erdtree V2", desc: "Dark fantasy landscape with glowing golden tree dust", gamertag: "TARNISHED", sub: "ELDEN LORD", textStyle: { fontFamily: "Georgia, serif", color: "#fbbf24", textShadow: "0 2px 8px rgba(0,0,0,0.9)" }, style: { background: "url('/banner_eldenring_v2.jpg') center/cover no-repeat" } },
    { id: "among-us-v2", name: "Among Us Nebula V2", desc: "Space stars galaxy backdrop with cosmic nebula", gamertag: "IMPOSTOR_X", sub: "SHERIFF ROLE", textStyle: { fontFamily: "var(--font-sans)", fontWeight: "900", color: "#ef4444", textShadow: "0 2px 4px rgba(0,0,0,0.9)" }, style: { background: "url('/banner_amongus_v2.jpg') center/cover no-repeat" } },
    { id: "clash-royale-v2", name: "Clash Royale Tower V2", desc: "Medieval swords and stone towers fantasy backdrop", gamertag: "ROYAL_KING", sub: "TROPHY ROAD 9000", textStyle: { fontFamily: "var(--font-sans)", fontWeight: "900", color: "#3b82f6", textShadow: "0 2px 6px rgba(0,0,0,0.9)" }, style: { background: "url('/banner_clashroyale_v2.jpg') center/cover no-repeat" } }
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
        "name": "YouTube Banners",
        "item": "https://gamingbanner.com/youtube-banners"
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

      <main className="flex-1 min-h-screen py-24 px-md md:px-xl w-full max-w-[1440px] mx-auto flex flex-col gap-xl overflow-x-hidden">
        {/* Page Hero */}
        <section className="text-center py-lg border-b border-outline-variant/60 flex flex-col items-center gap-sm">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-on-background">
            Free YouTube Gaming Banner Templates & Channel Art
          </h1>
          <p className="max-w-[620px] text-sm text-outline leading-relaxed">
            Download professional gaming youtube channel art templates. Our customizer is fully calibrated to fit the official youtube banner size safe zone (2560 x 1440 pixels) perfectly on mobile, tablet, and desktop views.
          </p>
        </section>

        {/* Category Catalog Grid with Game Filter Pills */}
        <CategoryCatalog templates={templates} />

        {/* Size Guide & Upload specs */}
        <section className="max-w-[800px] mx-auto w-full py-lg border-t border-outline-variant/65 flex flex-col gap-lg">
          <div className="border-l-4 border-primary-container pl-lg">
            <h2 className="text-2xl font-bold text-on-background">YouTube Banner Size Guide</h2>
            <p className="text-sm text-outline mt-1 leading-relaxed">
              YouTube channel art displays differently across desktop, mobile, and television devices. Sizing your banner accurately ensures your main text and logo are visible everywhere.
            </p>
          </div>

          <div className="p-lg bg-surface-container-high border-l-4 border-emerald-500 rounded-r-lg">
            <span className="font-bold text-sm text-on-background">Recommended Dimensions:</span>
            <p className="text-xs font-data-mono text-outline mt-1">
              Banner Size: 2560 x 1440 px | Safe Area (Center): 1546 x 423 px
            </p>
          </div>

          {/* Sizing Table */}
          <div className="overflow-x-auto rounded-lg border border-outline-variant/60 bg-surface-container">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-surface-container-high text-on-background font-bold border-b border-outline-variant/60">
                  <th className="p-md">Device</th>
                  <th className="p-md">Visible Sizing</th>
                  <th className="p-md">Notes</th>
                </tr>
              </thead>
              <tbody className="text-outline">
                <tr className="border-b border-outline-variant/30">
                  <td className="p-md font-bold text-on-background">Mobile</td>
                  <td className="p-md font-data-mono">1546 x 423 px</td>
                  <td className="p-md">Absolute safe area. Keep text & logo inside this zone.</td>
                </tr>
                <tr className="border-b border-outline-variant/30">
                  <td className="p-md font-bold text-on-background">Tablet</td>
                  <td className="p-md font-data-mono">1855 x 423 px</td>
                  <td className="p-md">Scales up centered. Outer edges are clipped.</td>
                </tr>
                <tr className="border-b border-outline-variant/30">
                  <td className="p-md font-bold text-on-background">Desktop</td>
                  <td className="p-md font-data-mono">2560 x 423 px</td>
                  <td className="p-md">Full horizontal display width on desktop browsers.</td>
                </tr>
                <tr>
                  <td className="p-md font-bold text-on-background">Television</td>
                  <td className="p-md font-data-mono">2560 x 1440 px</td>
                  <td className="p-md">Full banner canvas displays on TV applications.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
