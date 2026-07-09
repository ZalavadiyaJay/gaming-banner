import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TemplatesNav from "@/components/TemplatesNav";

export const metadata = {
  title: "Free YouTube Gaming Banner Maker & Templates | GAMINGBANNER",
  description: "Design high-quality YouTube gaming banners for free. Symmetrical layouts, neon glow, and modern esports templates for Valorant, Minecraft, COD, and more.",
};

export default function YouTubeBanners() {

  const templates = [
    { id: "esports", name: "Valorant", desc: "Vibrant neon cyan highlights on tactical agent backdrop", gamertag: "SHADOW_VAL", sub: "RADIANITE CHAMP", textStyle: { fontFamily: "var(--font-gamertag)", color: "#00d4ff", textShadow: "0 0 16px rgba(0, 212, 255, 0.6)" }, style: { background: "linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url('/banner_valorant.jpg') center/cover no-repeat" } },
    { id: "cs2-tactical", name: "CS2 / CS:GO", desc: "Gunmetal carbon grid with tactical HUD outlines", gamertag: "FRAG_LORD", sub: "GLOBAL ELITE", textStyle: { fontFamily: "Impact, sans-serif", color: "#ffffff", textShadow: "2px 2px 4px rgba(0,0,0,0.8)" }, style: { background: "linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url('/banner_cod.jpg') center/cover no-repeat" } },
    { id: "streaming", name: "Fortnite", desc: "Purple rift storm sky with drop bus landscapes", gamertag: "VICTORY_ROY", sub: "CROWNED WINS: 99", textStyle: { fontFamily: "var(--font-sans)", fontWeight: "900", color: "#ffffff", textShadow: "0 0 20px rgba(139, 92, 246, 0.7)" }, style: { background: "linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url('/banner_fortnite.jpg') center/cover no-repeat" } },
    { id: "minimalist", name: "Minecraft", desc: "Blocky voxel landscape under beautiful pixelated sunset", gamertag: "STEVE_BUILD", sub: "HARDCORE SURVIVOR", textStyle: { fontFamily: "var(--font-data-mono)", color: "#10b981", textShadow: "0 2px 4px rgba(0,0,0,0.9)" }, style: { background: "linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url('/banner_minecraft.jpg') center/cover no-repeat" } },
    { id: "modern-apex", name: "Apex Legends", desc: "Volcanic rocky canyon backdrop with bold orange text", gamertag: "APEX_CHAMP", sub: "PREDATOR RANK", textStyle: { fontFamily: "var(--font-gamertag)", fontStyle: "italic", color: "#ff3e3e", textShadow: "0 0 12px rgba(255, 62, 62, 0.8)" }, style: { background: "linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url('/banner_apex.jpg') center/cover no-repeat" } },
    { id: "overwatch-hero", name: "Overwatch 2", desc: "Clean orange accent layout with futuristic tech patterns", gamertag: "HERO_TACTIC", sub: "GRANDMASTER ELO", textStyle: { fontFamily: "Impact, sans-serif", color: "#f99e1a", textShadow: "0 0 10px rgba(249, 158, 26, 0.6)" }, style: { background: "linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url('/banner_overwatch.jpg') center/cover no-repeat" } },
    { id: "gta-street", name: "GTA V / Roleplay", desc: "Los Santos street skyline with sunset overlay", gamertag: "LOS_SANTOS", sub: "HEIST LEADER", textStyle: { fontFamily: "Impact, sans-serif", color: "#10b981", textShadow: "2px 2px 4px rgba(0,0,0,0.8)" }, style: { background: "linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url('/banner_gtav.jpg') center/cover no-repeat" } },
    { id: "rpg", name: "League of Legends", desc: "Magical golden runic border details with ancient carvings", gamertag: "SUMMONER_1", sub: "CHALLENGER RANK", textStyle: { fontFamily: "Georgia, serif", color: "#dfc8a5", textShadow: "0 2px 6px rgba(0,0,0,0.9)" }, style: { background: "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/banner_league.jpg') center/cover no-repeat" } },
    { id: "rocket-league", name: "Rocket League", desc: "Futuristic stadium dome with glowing neon sparks", gamertag: "AERO_DRIFT", sub: "GRAND CHAMPION", textStyle: { fontFamily: "var(--font-gamertag)", color: "#00d4ff", textShadow: "0 0 12px rgba(0,212,255,0.5)" }, style: { background: "linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url('/banner_rocketleague.jpg') center/cover no-repeat" } },
    { id: "pubg-mobile", name: "PUBG Mobile", desc: "Tactical drop crate with red smoke on battlefield", gamertag: "CHICKEN_DIN", sub: "CONQUEROR / K/D 6.5", textStyle: { fontFamily: "Impact, sans-serif", color: "#eab308", textShadow: "2px 2px 6px rgba(0,0,0,0.9)" }, style: { background: "linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url('/banner_pubg.jpg') center/cover no-repeat" } },
    { id: "clash-of-clans", name: "Clash of Clans", desc: "Epic fantasy cartoon village walls with shield details", gamertag: "TOWN_HALL", sub: "CLAN CHIEF / LVL 250", textStyle: { fontFamily: "Impact, sans-serif", color: "#f59e0b", textShadow: "0 4px 6px rgba(0,0,0,0.9)" }, style: { background: "linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url('/banner_coc_game.jpg') center/cover no-repeat" } },
    { id: "forza-horizon", name: "Forza Horizon", desc: "High-end sports car racing on scenic mountain roads", gamertag: "HORIZON_5", sub: "FESTIVAL CHAMPION", textStyle: { fontFamily: "var(--font-gamertag)", color: "#f43f5e", textShadow: "0 0 10px rgba(244, 63, 94, 0.5)" }, style: { background: "linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url('/banner_forza.jpg') center/cover no-repeat" } },
    { id: "asphalt-9", name: "Asphalt 9", desc: "Futuristic hypercar drifting through neon-lit streets", gamertag: "ASPHALT_X", sub: "LEGENDS DIVISION", textStyle: { fontFamily: "Impact, sans-serif", color: "#ec4899", textShadow: "0 0 12px rgba(236, 72, 153, 0.6)" }, style: { background: "linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url('/banner_asphalt.jpg') center/cover no-repeat" } },
    { id: "genshin-impact", name: "Genshin Impact", desc: "Fantasy floating islands over grassy meadows", gamertag: "TRAVELER_G", sub: "TEYVAT EXPLORER", textStyle: { fontFamily: "Georgia, serif", color: "#38bdf8", textShadow: "0 2px 6px rgba(0,0,0,0.9)" }, style: { background: "linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url('/banner_genshin.jpg') center/cover no-repeat" } },
    { id: "roblox-virtual", name: "Roblox", desc: "Blocky virtual world with bright blue skies", gamertag: "ROBLOX_DEV", sub: "CREATOR WORLD", textStyle: { fontFamily: "var(--font-sans)", fontWeight: "900", color: "#f43f5e", textShadow: "0 2px 4px rgba(0,0,0,0.9)" }, style: { background: "linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url('/banner_roblox.jpg') center/cover no-repeat" } },
    { id: "fifa-soccer", name: "FIFA / FC 24", desc: "Stadium pitch floodlights on green grass ground", gamertag: "FC_PRO", sub: "FUT CHAMPIONS", textStyle: { fontFamily: "var(--font-gamertag)", color: "#10b981", textShadow: "0 0 10px rgba(16, 185, 129, 0.5)" }, style: { background: "linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url('/banner_fifa.jpg') center/cover no-repeat" } },
    { id: "cyberpunk-2077", name: "Cyberpunk 2077", desc: "Night City neon streets with retro cyber glow", gamertag: "V_MERCENARY", sub: "NIGHT CITY LEGEND", textStyle: { fontFamily: "Impact, sans-serif", color: "#facc15", textShadow: "0 0 12px rgba(250, 204, 21, 0.6)" }, style: { background: "linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url('/banner_cyberpunk.jpg') center/cover no-repeat" } },
    { id: "elden-ring", name: "Elden Ring", desc: "Dark fantasy landscape with glowing golden tree dust", gamertag: "TARNISHED", sub: "ELDEN LORD", textStyle: { fontFamily: "Georgia, serif", color: "#fbbf24", textShadow: "0 2px 8px rgba(0,0,0,0.9)" }, style: { background: "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/banner_eldenring.jpg') center/cover no-repeat" } },
    { id: "among-us", name: "Among Us", desc: "Space stars galaxy backdrop with cosmic nebula", gamertag: "IMPOSTOR_X", sub: "SHERIFF ROLE", textStyle: { fontFamily: "var(--font-sans)", fontWeight: "900", color: "#ef4444", textShadow: "0 2px 4px rgba(0,0,0,0.9)" }, style: { background: "linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url('/banner_amongus.jpg') center/cover no-repeat" } },
    { id: "clash-royale", name: "Clash Royale", desc: "Medieval swords and stone towers fantasy backdrop", gamertag: "ROYAL_KING", sub: "TROPHY ROAD 9000", textStyle: { fontFamily: "var(--font-sans)", fontWeight: "900", color: "#3b82f6", textShadow: "0 2px 6px rgba(0,0,0,0.9)" }, style: { background: "linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url('/banner_clashroyale.jpg') center/cover no-repeat" } }
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
        <TemplatesNav activeTab="youtube" />

        {/* Page Hero */}
        <section className="text-center py-lg border-b border-outline-variant/60 flex flex-col items-center gap-sm">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-on-background">
            Free YouTube Gaming Banner Templates & Channel Art
          </h1>
          <p className="max-w-[620px] text-sm text-outline leading-relaxed">
            Download professional gaming youtube channel art templates. Our customizer is fully calibrated to fit the official youtube banner size safe zone (2560 x 1440 pixels) perfectly on mobile, tablet, and desktop views.
          </p>


        </section>

        {/* Template Catalog Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg">
          {templates.map((template, idx) => (
            <div key={idx} className="bento-card overflow-hidden rounded-xl shadow-lg border-outline-variant/50">
              <div className="aspect-video relative flex flex-col items-center justify-center p-md overflow-hidden" style={{ ...template.style, containerType: "inline-size" }}>
                <span style={{ ...template.textStyle, fontSize: "clamp(12px, 8cqw, 24px)" }} className="font-black uppercase tracking-wider select-none relative z-10 text-center leading-none">
                  {template.gamertag}
                </span>
                <span style={{ fontSize: "clamp(6px, 2.5cqw, 10px)" }} className="font-bold text-white/80 tracking-widest uppercase mt-xs relative z-10 select-none font-sans leading-none">
                  {template.sub}
                </span>
              </div>
              <div className="p-lg bg-surface-container-high flex flex-col justify-between h-40">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-on-background">{template.name}</span>
                  </div>
                  <p className="text-xs text-outline mt-1">{template.desc}</p>
                </div>

                <Link
                  href={`/customize/${template.id}`}
                  className="w-full bg-primary-container hover:bg-primary-container/90 text-on-primary-container text-center font-bold text-xs py-2.5 rounded transition-all block mt-md"
                >
                  Customize & Download
                </Link>
              </div>
            </div>
          ))}
        </section>

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
