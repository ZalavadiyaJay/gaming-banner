import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TemplatesNav from "@/components/TemplatesNav";

export const metadata = {
  title: "Twitch Offline Banner Maker & Gaming Banners | GAMINGBANNER",
  description: "Create custom Twitch offline screens and gaming banners. 20+ game-themed presets with centered typography and esports shading panels.",
};

export default function TwitchBanners() {

  const templates = [
    { id: "twitch-valorant", name: "Valorant Offline", category: "Tactical", sub: "OFFLINE • Season 12 Live Soon", desc: "Tactical neon cyan offline screen for Valorant mains", textStyle: { fontFamily: "var(--font-gamertag)", fontStyle: "italic", color: "#00d4ff", textShadow: "0 0 10px #00d4ff, 0 0 20px #00d4ff, 0 0 40px #005f73", letterSpacing: "0.15em" }, style: { background: "linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url('/twitch_valorant.jpg') center/cover no-repeat" } },
    { id: "twitch-cod", name: "Warzone Offline", category: "Esports", sub: "STARTING SOON • Mon-Fri 8PM", desc: "Gunmetal grid overlay for tactical Warzone streams", textStyle: { fontFamily: "Impact, sans-serif", color: "#ffffff", textShadow: "3px 3px 0px #1e293b, -3px -3px 0px #1e293b, 3px -3px 0px #1e293b, -3px 3px 0px #1e293b", letterSpacing: "0.05em" }, style: { background: "linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url('/twitch_cod.jpg') center/cover no-repeat" } },
    { id: "twitch-fortnite", name: "Fortnite Offline", category: "Royale", sub: "OFFLINE • Follow for Rank Push", desc: "Purple rift sky offline card for Battle Royale content", textStyle: { fontFamily: "var(--font-sans)", fontWeight: "900", color: "#ffffff", textShadow: "0 0 10px #c084fc, 0 0 20px #8b5cf6, 0 0 30px #6d28d9", letterSpacing: "0.08em" }, style: { background: "linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url('/twitch_fortnite.jpg') center/cover no-repeat" } },
    { id: "twitch-minecraft", name: "Minecraft Offline", category: "Sandbox", sub: "BE RIGHT BACK • Building spawn", desc: "Cozy voxel sunset card for creative and survival modes", textStyle: { fontFamily: "var(--font-data-mono)", color: "#10b981", textShadow: "2px 2px 0px #064e3b, 4px 4px 0px #022c22", letterSpacing: "0.1em" }, style: { background: "linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url('/twitch_minecraft.jpg') center/cover no-repeat" } },
    { id: "twitch-apex", name: "Apex Legends Offline", category: "Esports", sub: "STREAMING SOON • Predator Grind", desc: "Volcanic hazard orange background for high-tier Apex content", textStyle: { fontFamily: "var(--font-gamertag)", fontStyle: "italic", color: "#ff3e3e", textShadow: "0 0 8px #ea580c, 3px 3px 0px #000000", letterSpacing: "0.05em" }, style: { background: "linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url('/twitch_apex.jpg') center/cover no-repeat" } },
    { id: "twitch-overwatch", name: "Overwatch Offline", category: "Hero Shooter", sub: "OFFLINE • Comp Grind Tomorrow", desc: "Sleek futuristic grid for Overwatch 2 team play", textStyle: { fontFamily: "Impact, sans-serif", color: "#f99e1a", textShadow: "0 2px 0px #78350f, 0 4px 0px #451a03, 0 8px 12px rgba(0,0,0,0.8)", letterSpacing: "0.05em" }, style: { background: "linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url('/twitch_overwatch.jpg') center/cover no-repeat" } },
    { id: "twitch-gtav", name: "GTA RP Offline", category: "Roleplay", sub: "OFFLINE • Back at 7PM EST", desc: "Los Santos skyline retro purple glow for GTA RP streams", textStyle: { fontFamily: "var(--font-gamertag)", fontStyle: "italic", color: "#f472b6", textShadow: "0 0 10px #f472b6, 0 0 20px #db2777, 0 0 30px #00d4ff", letterSpacing: "0.12em" }, style: { background: "linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url('/twitch_gtav.jpg') center/cover no-repeat" } },
    { id: "twitch-league", name: "League of Legends Offline", category: "MOBA", sub: "STARTING SOON • Mid Lane Carry", desc: "Magical golden rune lines for League of Legends rank push", textStyle: { fontFamily: "Georgia, serif", color: "#dfc8a5", textShadow: "0 2px 4px #78350f, 0 0 12px rgba(223, 200, 165, 0.4)", letterSpacing: "0.2em" }, style: { background: "linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url('/twitch_league.jpg') center/cover no-repeat" } },
    { id: "twitch-rocketleague", name: "Rocket League Offline", category: "Sports", sub: "BE RIGHT BACK • Grand Champ ELO", desc: "Cyber dome stadium lights for Rocket League speed runs", textStyle: { fontFamily: "var(--font-gamertag)", color: "#06b6d4", textShadow: "0 0 15px #06b6d4, 0 0 25px #0891b2, 2px 2px 0px #000000", letterSpacing: "0.15em" }, style: { background: "linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url('/twitch_rocketleague.jpg') center/cover no-repeat" } },
    { id: "twitch-pubg", name: "PUBG Offline", category: "Royale", sub: "OFFLINE • Winner Winner Dinner", desc: "Tactical military green smoke backdrop for battlegrounds", textStyle: { fontFamily: "Impact, sans-serif", color: "#eab308", textShadow: "2px 2px 0px #451a03, -2px -2px 0px #451a03, 0px 4px 8px rgba(0,0,0,0.9)", letterSpacing: "0.05em" }, style: { background: "linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url('/twitch_pubg.jpg') center/cover no-repeat" } },
    { id: "twitch-coc", name: "Clash of Clans Offline", category: "Strategy", sub: "OFFLINE • Town Hall 15 Live", desc: "Epic fantasy cartoon fort village for strategy builders", textStyle: { fontFamily: "Impact, sans-serif", color: "#fbbf24", textShadow: "0 4px 0px #b45309, 0 8px 0px #78350f, 0 12px 16px rgba(0,0,0,0.8)", letterSpacing: "0.06em" }, style: { background: "linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url('/twitch_coc.jpg') center/cover no-repeat" } },
    { id: "twitch-forza", name: "Forza Horizon Offline", category: "Racing", sub: "STARTING SOON • Wheel Cam Setup", desc: "Scenic mountain racing landscape for racing streams", textStyle: { fontFamily: "var(--font-gamertag)", fontStyle: "italic", color: "#f43f5e", textShadow: "0 0 12px #f43f5e, 0 0 24px #be123c", letterSpacing: "0.2em" }, style: { background: "linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url('/twitch_forza.jpg') center/cover no-repeat" } },
    { id: "twitch-asphalt", name: "Asphalt Offline", category: "Racing", sub: "BE RIGHT BACK • Custom Lobby Runs", desc: "Vibrant neon city drift backdrop for street arcade racing", textStyle: { fontFamily: "Impact, sans-serif", color: "#ec4899", textShadow: "0 0 8px #db2777, 0 0 16px #4a044e, 3px 3px 0px #000", letterSpacing: "0.1em" }, style: { background: "linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url('/twitch_asphalt.jpg') center/cover no-repeat" } },
    { id: "twitch-genshin", name: "Genshin Impact Offline", category: "RPG", sub: "OFFLINE • Farming Materials", desc: "Fantasy anime floating skies for Genshin Impact travelers", textStyle: { fontFamily: "Georgia, serif", color: "#38bdf8", textShadow: "0 0 10px #0284c7, 0 2px 4px rgba(0,0,0,0.8)", letterSpacing: "0.25em" }, style: { background: "linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url('/twitch_genshin.jpg') center/cover no-repeat" } },
    { id: "twitch-roblox", name: "Roblox Offline", category: "Sandbox", sub: "STREAMING SOON • Custom Mini-games", desc: "Bright blocky layout for Roblox gaming variety channels", textStyle: { fontFamily: "var(--font-sans)", fontWeight: "900", color: "#ef4444", textShadow: "4px 4px 0px #7f1d1d, 8px 8px 12px rgba(0,0,0,0.8)", letterSpacing: "0.05em" }, style: { background: "linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url('/twitch_roblox.jpg') center/cover no-repeat" } },
    { id: "twitch-fifa", name: "FC 24 Offline", category: "Sports", sub: "OFFLINE • FUT Champions Weekend", desc: "Pitch green grass stadium lights for soccer streamers", textStyle: { fontFamily: "var(--font-gamertag)", color: "#10b981", textShadow: "0 0 10px #10b981, 0 0 20px #047857, 2px 2px 0px #000000", letterSpacing: "0.15em" }, style: { background: "linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url('/twitch_fifa.jpg') center/cover no-repeat" } },
    { id: "twitch-cyberpunk", name: "Cyberpunk Offline", category: "RPG", sub: "STARTING SOON • Netrunner Build", desc: "Glitch cyber neon yellow grid for RPG mercenaries", textStyle: { fontFamily: "Impact, sans-serif", color: "#facc15", textShadow: "3px 3px 0px #000000, -3px -3px 0px #000000, 0 0 15px #facc15", letterSpacing: "0.1em" }, style: { background: "linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url('/twitch_cyberpunk.jpg') center/cover no-repeat" } },
    { id: "twitch-eldenring", name: "Elden Ring Offline", category: "RPG", sub: "OFFLINE • Rune Level 1 runs", desc: "Golden glowing tree ash landscape for dark soulslikes", textStyle: { fontFamily: "Georgia, serif", color: "#fbbf24", textShadow: "0 2px 8px #78350f, 0 0 20px #b45309", letterSpacing: "0.25em" }, style: { background: "linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url('/twitch_eldenring.jpg') center/cover no-repeat" } },
    { id: "twitch-amongus", name: "Among Us Offline", category: "Casual", sub: "BE RIGHT BACK • Who is Impostor?", desc: "Cosmic space galaxy background for multiplayer lobby fun", textStyle: { fontFamily: "var(--font-sans)", fontWeight: "900", color: "#ef4444", textShadow: "3px 3px 0px #000, -3px -3px 0px #000, 3px -3px 0px #000, -3px 3px 0px #000", letterSpacing: "0.08em" }, style: { background: "linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url('/twitch_amongus.jpg') center/cover no-repeat" } },
    { id: "twitch-clashroyale", name: "Clash Royale Offline", category: "Strategy", sub: "OFFLINE • Midladder Trophy Push", desc: "Medieval card battle towers for clash strategies", textStyle: { fontFamily: "var(--font-sans)", fontWeight: "900", color: "#3b82f6", textShadow: "0 3px 0px #1d4ed8, 0 6px 0px #1e3a8a, 0 10px 12px rgba(0,0,0,0.8)", letterSpacing: "0.1em" }, style: { background: "linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url('/twitch_clashroyale.jpg') center/cover no-repeat" } }
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

      <main className="flex-1 min-h-screen py-24 px-md md:px-xl w-full max-w-[1440px] mx-auto flex flex-col gap-xl overflow-x-hidden">
        <TemplatesNav activeTab="twitch" />

        {/* Page Hero */}
        <section className="text-center py-lg border-b border-outline-variant/60 flex flex-col items-center gap-sm">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-on-background">
            Free Twitch Offline Banner Maker & Stream Banners
          </h1>
          <p className="max-w-[620px] text-sm text-outline leading-relaxed">
            Create stunning profile graphics with our free Twitch offline banner maker. Choose from 20+ templates optimized for the recommended Twitch banner size (1200 x 480 pixels) to fit stream overlays correctly.
          </p>


        </section>

        {/* Template Catalog Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg">
          {templates.map((template, idx) => (
            <div key={idx} className="bento-card overflow-hidden rounded-xl shadow-lg border-outline-variant/50">
              <div className="aspect-video relative flex flex-col items-center justify-center p-md overflow-hidden" style={{ ...template.style, containerType: "inline-size" }}>
                {/* Background Dimmer */}
                <div className="absolute inset-0 bg-black/30 z-0" />

                {/* Left/Right Symmetrical Shading */}
                <div className="absolute inset-y-0 left-0 w-[22%] bg-gradient-to-r from-black/60 to-transparent pointer-events-none z-0" />
                <div className="absolute inset-y-0 right-0 w-[22%] bg-gradient-to-l from-black/60 to-transparent pointer-events-none z-0" />

                {/* Huge stylized Gamertag */}
                <span
                  style={{
                    ...template.textStyle,
                    fontSize: "clamp(16px, 9cqw, 36px)",
                    lineHeight: "1"
                  }}
                  className="font-black uppercase tracking-wider select-none relative z-10 text-center"
                >
                  YOUR NAME
                </span>

                {/* Subtitle / Status pill underneath */}
                <span
                  style={{
                    fontSize: "clamp(6px, 2.2cqw, 10px)"
                  }}
                  className="font-bold tracking-widest uppercase mt-xs relative z-10 select-none font-sans px-2 py-0.5 rounded bg-black/60 border border-white/10 text-white/90"
                >
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
