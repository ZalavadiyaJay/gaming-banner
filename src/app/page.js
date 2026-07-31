"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  const [gamertag, setGamertag] = useState("");
  const [activeFaq, setActiveFaq] = useState(null);
  const [selectedUniverse, setSelectedUniverse] = useState("All");

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  // Game Universe configuration (20 Official Games)
  const universes = [
    { name: "All", colors: "from-[#00d4ff]/20 to-transparent" },
    { name: "Valorant", colors: "from-[#ff4655]/20 to-transparent" },
    { name: "Minecraft", colors: "from-[#5b8731]/20 to-transparent" },
    { name: "Fortnite", colors: "from-[#f2da3b]/20 to-transparent" },
    { name: "Call of Duty", colors: "from-[#de9b35]/20 to-transparent" },
    { name: "GTA V", colors: "from-[#10b981]/20 to-transparent" },
    { name: "Apex Legends", colors: "from-[#ff2d55]/20 to-transparent" },
    { name: "League of Legends", colors: "from-[#c8aa6e]/20 to-transparent" },
    { name: "Rocket League", colors: "from-[#00d4ff]/20 to-transparent" },
    { name: "PUBG Mobile", colors: "from-[#eab308]/20 to-transparent" },
    { name: "Clash of Clans", colors: "from-[#f59e0b]/20 to-transparent" },
    { name: "Forza Horizon", colors: "from-[#f43f5e]/20 to-transparent" },
    { name: "Asphalt 9", colors: "from-[#ec4899]/20 to-transparent" },
    { name: "Genshin Impact", colors: "from-[#38bdf8]/20 to-transparent" },
    { name: "Roblox", colors: "from-[#ef4444]/20 to-transparent" },
    { name: "EA Sports FC", colors: "from-[#10b981]/20 to-transparent" },
    { name: "Cyberpunk 2077", colors: "from-[#facc15]/20 to-transparent" },
    { name: "Elden Ring", colors: "from-[#fbbf24]/20 to-transparent" },
    { name: "Among Us", colors: "from-[#ef4444]/20 to-transparent" },
    { name: "Clash Royale", colors: "from-[#3b82f6]/20 to-transparent" },
    { name: "Overwatch 2", colors: "from-[#f99e1a]/20 to-transparent" },
  ];

  // Base templates definition (Classic & V2 Official Games)
  const templates = [
    // Classic Templates
    { id: "esports", name: "Valorant Classic", sub: "Ranked / K/D 2.5", universe: "Valorant", glow: "shadow-[#00d4ff]/10 border-[#00d4ff]/30", style: { background: "url('/banner_valorant.jpg') center/cover no-repeat", color: "#ffffff" }, decor: null },
    { id: "minimalist", name: "Minecraft Classic", sub: "Est. 2018", universe: "Minecraft", glow: "shadow-white/5 border-outline/30", style: { background: "url('/banner_minecraft.jpg') center/cover no-repeat", color: "#ffffff" }, decor: null },
    { id: "streaming", name: "Fortnite Classic", sub: "STREAMING NOW", universe: "Fortnite", glow: "shadow-[#8b5cf6]/10 border-[#8b5cf6]/30", style: { background: "url('/banner_fortnite.jpg') center/cover no-repeat", color: "#ffffff" }, decor: null },
    { id: "cs2-tactical", name: "Call of Duty / CS2 Classic", sub: "TACTICAL LOADOUT", universe: "Call of Duty", glow: "shadow-[#de9b35]/10 border-[#de9b35]/30", style: { background: "url('/banner_cod.jpg') center/cover no-repeat", color: "#ffffff" }, decor: null },
    { id: "gta-street", name: "GTA V / Roleplay Classic", sub: "LOS SANTOS", universe: "GTA V", glow: "shadow-[#10b981]/10 border-[#10b981]/30", style: { background: "url('/banner_gtav.jpg') center/cover no-repeat", color: "#ffffff" }, decor: null },
    { id: "modern-apex", name: "Apex Legends Classic", sub: "Ranked Master", universe: "Apex Legends", glow: "shadow-[#ff3e3e]/10 border-[#ff3e3e]/30", style: { background: "url('/banner_apex.jpg') center/cover no-repeat", color: "#ff3e3e" }, decor: null },
    { id: "rpg", name: "League of Legends Classic", sub: "Lv 100 Mage", universe: "League of Legends", glow: "shadow-[#ffd8ae]/5 border-[#c8aa6e]/20", style: { background: "url('/banner_league.jpg') center/cover no-repeat", color: "#dfc8a5" }, decor: null },
    { id: "rocket-league", name: "Rocket League Classic", sub: "BOOST ON", universe: "Rocket League", glow: "shadow-[#00d4ff]/10 border-[#00d4ff]/30", style: { background: "url('/banner_rocketleague.jpg') center/cover no-repeat", color: "#00d4ff" }, decor: null },
    { id: "pubg-mobile", name: "PUBG Mobile Classic", sub: "Tactical Battlegrounds", universe: "PUBG Mobile", glow: "shadow-[#eab308]/10 border-[#eab308]/30", style: { background: "url('/banner_pubg.jpg') center/cover no-repeat", color: "#eab308" }, decor: null },
    { id: "clash-of-clans", name: "Clash of Clans Classic", sub: "Clan Leader", universe: "Clash of Clans", glow: "shadow-[#f59e0b]/10 border-[#f59e0b]/30", style: { background: "url('/banner_coc_game.jpg') center/cover no-repeat", color: "#f59e0b" }, decor: null },
    { id: "forza-horizon", name: "Forza Horizon Classic", sub: "Horizon Festival", universe: "Forza Horizon", glow: "shadow-[#f43f5e]/10 border-[#f43f5e]/30", style: { background: "url('/banner_forza.jpg') center/cover no-repeat", color: "#f43f5e" }, decor: null },
    { id: "asphalt-9", name: "Asphalt 9 Classic", sub: "Legendary Driver", universe: "Asphalt 9", glow: "shadow-[#ec4899]/10 border-[#ec4899]/30", style: { background: "url('/banner_asphalt.jpg') center/cover no-repeat", color: "#ec4899" }, decor: null },
    { id: "genshin-impact", name: "Genshin Impact Classic", sub: "Traveler of Teyvat", universe: "Genshin Impact", glow: "shadow-[#38bdf8]/10 border-[#38bdf8]/30", style: { background: "url('/banner_genshin.jpg') center/cover no-repeat", color: "#38bdf8" }, decor: null },
    { id: "roblox-virtual", name: "Roblox Classic", sub: "Vibrant Virtual World", universe: "Roblox", glow: "shadow-[#ef4444]/10 border-[#ef4444]/30", style: { background: "url('/banner_roblox.jpg') center/cover no-repeat", color: "#f43f5e" }, decor: null },
    { id: "fifa-soccer", name: "EA Sports FC 24 Classic", sub: "Ultimate Team", universe: "EA Sports FC", glow: "shadow-[#10b981]/10 border-[#10b981]/30", style: { background: "url('/banner_fifa.jpg') center/cover no-repeat", color: "#10b981" }, decor: null },
    { id: "cyberpunk-2077", name: "Cyberpunk 2077 Classic", sub: "Night City Mercenary", universe: "Cyberpunk 2077", glow: "shadow-[#facc15]/10 border-[#facc15]/30", style: { background: "url('/banner_cyberpunk.jpg') center/cover no-repeat", color: "#facc15" }, decor: null },
    { id: "elden-ring", name: "Elden Ring Classic", sub: "Tarnished Lord", universe: "Elden Ring", glow: "shadow-[#fbbf24]/10 border-[#fbbf24]/30", style: { background: "url('/banner_eldenring.jpg') center/cover no-repeat", color: "#fbbf24" }, decor: null },
    { id: "among-us", name: "Among Us Classic", sub: "Spaceship Crewmate", universe: "Among Us", glow: "shadow-[#ef4444]/10 border-[#ef4444]/30", style: { background: "url('/banner_amongus.jpg') center/cover no-repeat", color: "#ef4444" }, decor: null },
    { id: "clash-royale", name: "Clash Royale Classic", sub: "Arena Challenger", universe: "Clash Royale", glow: "shadow-[#3b82f6]/10 border-[#3b82f6]/30", style: { background: "url('/banner_clashroyale.jpg') center/cover no-repeat", color: "#3b82f6" }, decor: null },
    { id: "overwatch-hero", name: "Overwatch 2 Classic", sub: "HERO SELECT", universe: "Overwatch 2", glow: "shadow-[#f99e1a]/10 border-[#f99e1a]/30", style: { background: "url('/banner_overwatch.jpg') center/cover no-repeat", color: "#f99e1a" }, decor: null },

    // New V2 Authentic Templates
    { id: "esports-v2", name: "Valorant Arena V2", sub: "Ranked / K/D 2.5", universe: "Valorant", glow: "shadow-[#00d4ff]/10 border-[#00d4ff]/30", style: { background: "url('/banner_valorant_v2.jpg') center/cover no-repeat", color: "#ffffff" }, decor: null },
    { id: "minimalist-v2", name: "Minecraft Sunset V2", sub: "Est. 2018", universe: "Minecraft", glow: "shadow-white/5 border-outline/30", style: { background: "url('/banner_minecraft_v2.jpg') center/cover no-repeat", color: "#ffffff" }, decor: null },
    { id: "streaming-v2", name: "Fortnite Storm V2", sub: "STREAMING NOW", universe: "Fortnite", glow: "shadow-[#8b5cf6]/10 border-[#8b5cf6]/30", style: { background: "url('/banner_fortnite_v2.jpg') center/cover no-repeat", color: "#ffffff" }, decor: null },
    { id: "cs2-tactical-v2", name: "Call of Duty / CS2 Warzone V2", sub: "TACTICAL LOADOUT", universe: "Call of Duty", glow: "shadow-[#de9b35]/10 border-[#de9b35]/30", style: { background: "url('/banner_cod_v2.jpg') center/cover no-repeat", color: "#ffffff" }, decor: null },
    { id: "gta-street-v2", name: "GTA V Los Santos V2", sub: "LOS SANTOS", universe: "GTA V", glow: "shadow-[#10b981]/10 border-[#10b981]/30", style: { background: "url('/banner_gtav_v2.jpg') center/cover no-repeat", color: "#ffffff" }, decor: null },
    { id: "modern-apex-v2", name: "Apex Legends Canyon V2", sub: "Ranked Master", universe: "Apex Legends", glow: "shadow-[#ff3e3e]/10 border-[#ff3e3e]/30", style: { background: "url('/banner_apex_v2.jpg') center/cover no-repeat", color: "#ff3e3e" }, decor: null },
    { id: "rpg-v2", name: "League of Legends Rift V2", sub: "Lv 100 Mage", universe: "League of Legends", glow: "shadow-[#ffd8ae]/5 border-[#c8aa6e]/20", style: { background: "url('/banner_league_v2.jpg') center/cover no-repeat", color: "#dfc8a5" }, decor: null },
    { id: "rocket-league-v2", name: "Rocket League Dome V2", sub: "BOOST ON", universe: "Rocket League", glow: "shadow-[#00d4ff]/10 border-[#00d4ff]/30", style: { background: "url('/banner_rocketleague_v2.jpg') center/cover no-repeat", color: "#00d4ff" }, decor: null },
    { id: "pubg-mobile-v2", name: "PUBG Mobile Air Drop V2", sub: "Tactical Battlegrounds", universe: "PUBG Mobile", glow: "shadow-[#eab308]/10 border-[#eab308]/30", style: { background: "url('/banner_pubg_v2.jpg') center/cover no-repeat", color: "#eab308" }, decor: null },
    { id: "clash-of-clans-v2", name: "Clash of Clans Fortress V2", sub: "Clan Leader", universe: "Clash of Clans", glow: "shadow-[#f59e0b]/10 border-[#f59e0b]/30", style: { background: "url('/banner_coc_v2.jpg') center/cover no-repeat", color: "#f59e0b" }, decor: null },
    { id: "forza-horizon-v2", name: "Forza Horizon Speed V2", sub: "Horizon Festival", universe: "Forza Horizon", glow: "shadow-[#f43f5e]/10 border-[#f43f5e]/30", style: { background: "url('/banner_forza_v2.jpg') center/cover no-repeat", color: "#f43f5e" }, decor: null },
    { id: "asphalt-9-v2", name: "Asphalt 9 Neon V2", sub: "Legendary Driver", universe: "Asphalt 9", glow: "shadow-[#ec4899]/10 border-[#ec4899]/30", style: { background: "url('/banner_asphalt_v2.jpg') center/cover no-repeat", color: "#ec4899" }, decor: null },
    { id: "genshin-impact-v2", name: "Genshin Impact Meadow V2", sub: "Traveler of Teyvat", universe: "Genshin Impact", glow: "shadow-[#38bdf8]/10 border-[#38bdf8]/30", style: { background: "url('/banner_genshin_v2.jpg') center/cover no-repeat", color: "#38bdf8" }, decor: null },
    { id: "roblox-virtual-v2", name: "Roblox Parkour V2", sub: "Vibrant Virtual World", universe: "Roblox", glow: "shadow-[#ef4444]/10 border-[#ef4444]/30", style: { background: "url('/banner_roblox_v2.jpg') center/cover no-repeat", color: "#f43f5e" }, decor: null },
    { id: "fifa-soccer-v2", name: "EA Sports FC 25 Pitch V2", sub: "Ultimate Team", universe: "EA Sports FC", glow: "shadow-[#10b981]/10 border-[#10b981]/30", style: { background: "url('/banner_fifa_v2.jpg') center/cover no-repeat", color: "#10b981" }, decor: null },
    { id: "cyberpunk-2077-v2", name: "Cyberpunk 2077 City V2", sub: "Night City Mercenary", universe: "Cyberpunk 2077", glow: "shadow-[#facc15]/10 border-[#facc15]/30", style: { background: "url('/banner_cyberpunk_v2.jpg') center/cover no-repeat", color: "#facc15" }, decor: null },
    { id: "elden-ring-v2", name: "Elden Ring Erdtree V2", sub: "Tarnished Lord", universe: "Elden Ring", glow: "shadow-[#fbbf24]/10 border-[#fbbf24]/30", style: { background: "url('/banner_eldenring_v2.jpg') center/cover no-repeat", color: "#fbbf24" }, decor: null },
    { id: "among-us-v2", name: "Among Us Nebula V2", sub: "Spaceship Crewmate", universe: "Among Us", glow: "shadow-[#ef4444]/10 border-[#ef4444]/30", style: { background: "url('/banner_amongus_v2.jpg') center/cover no-repeat", color: "#ef4444" }, decor: null },
    { id: "clash-royale-v2", name: "Clash Royale Tower V2", sub: "Arena Challenger", universe: "Clash Royale", glow: "shadow-[#3b82f6]/10 border-[#3b82f6]/30", style: { background: "url('/banner_clashroyale_v2.jpg') center/cover no-repeat", color: "#3b82f6" }, decor: null },
    { id: "overwatch-hero-v2", name: "Overwatch 2 Hub V2", sub: "HERO SELECT", universe: "Overwatch 2", glow: "shadow-[#f99e1a]/10 border-[#f99e1a]/30", style: { background: "url('/banner_overwatch_v2.jpg') center/cover no-repeat", color: "#f99e1a" }, decor: null },
  ];
  // Filtering templates based on universe explorer
  const filteredTemplates = templates.filter(
    (t) => selectedUniverse === "All" || t.universe === selectedUniverse
  );

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is GamingBanner really free?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! You can customize and download all templates completely free of charge. We do not apply any watermarks to exported high-resolution PNG files."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need graphic design experience?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "None at all. Just type your gamertag, choose a game style, adjust colors using our side panel options, and download. The tool takes care of dimensions automatically."
        }
      },
      {
        "@type": "Question",
        "name": "Are the dimensions accurate for my channel?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. All templates are built according to platform specifications, including YouTube's central mobile safe-zone (1546 x 423 px) to ensure text renders perfectly on phone screens."
        }
      },
      {
        "@type": "Question",
        "name": "Can I use these banners commercially?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, you are free to use your downloaded banners to brand your monetized streams, channels, and social profiles."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Header />

      <main className="flex-1 pt-16">
        {/* Section 1: Hero */}
        <section className="relative px-md md:px-xl py-20 text-center overflow-hidden border-b border-outline-variant">
          <div className="absolute inset-0 cyan-backdrop -z-10" />
          <div className="max-w-[1440px] mx-auto flex flex-col items-center gap-md">
            {/* Pill badge */}
            <div className="inline-flex items-center gap-2 px-lg py-1 rounded-full border border-primary-container bg-primary-container/10 text-primary-container text-xs font-bold font-data-mono uppercase tracking-wider">
              Free Forever &bull; No Sign Up Required
            </div>

            <h1 className="max-w-[896px] text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-on-background leading-tight">
              Create Banners That Match <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-container to-secondary">
                Your Gaming Style
              </span>
            </h1>

            <p className="max-w-[576px] text-lg text-outline leading-relaxed">
              Design high-quality, personalized gaming banners for Twitch, YouTube, and Discord instantly. No design skills needed.
            </p>
            {/* Input Bar */}
            <div className="w-full max-w-[512px] mt-sm flex items-center bg-white rounded-lg border border-outline-variant overflow-hidden shadow-lg shadow-black/40">
              <span className="hidden sm:inline text-sm font-semibold text-zinc-500 pl-lg select-none whitespace-nowrap">
                Type Your Gamertag:
              </span>
              <input
                type="text"
                value={gamertag}
                onChange={(e) => setGamertag(e.target.value.toUpperCase().slice(0, 15))}
                placeholder="Enter Gamertag..."
                className="flex-1 bg-transparent text-zinc-950 font-bold text-lg px-md py-sm outline-none border-none min-w-0"
              />
              <Link
                href="/youtube-banners"
                className="bg-primary-container hover:bg-primary-container/90 text-on-primary-container font-extrabold text-sm tracking-wider uppercase px-xl py-sm h-full flex items-center justify-center transition-all hover:scale-[1.01]"
              >
                Customize
              </Link>
            </div>

            {/* Counter */}
            <div className="flex items-center gap-2 mt-sm text-sm text-outline">
              <span className="h-2 w-2 rounded-full bg-emerald-500 pulse-live" />
              <span>12,400+ banners created this month</span>
            </div>
          </div>
        </section>

        {/* Section 2: Platform Badges */}
        <section className="bg-surface-container-low py-lg border-b border-outline-variant">
          <div className="max-w-[1440px] mx-auto px-md md:px-xl">
            <p className="text-center text-xs font-bold text-outline/80 uppercase tracking-widest mb-md">
              Works perfectly with:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-md max-w-[896px] mx-auto">
              {[
                { name: "YouTube", size: "2560 x 1440" },
                { name: "Twitch", size: "1200 x 480" },
                { name: "Discord", size: "960 x 540" },
                { name: "Twitter/X", size: "1500 x 500" },
              ].map((plat, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center justify-center bg-surface-container-high border border-outline-variant/40 hover:border-primary-container/50 p-md rounded-lg transition-all"
                >
                  <span className="font-bold text-sm text-on-background">{plat.name}</span>
                  <span className="text-xs text-outline font-data-mono mt-1">{plat.size}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3: Try-On Grid */}
        <section className="py-xl max-w-[1440px] mx-auto px-md md:px-xl">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-sm border-b border-outline-variant/65 pb-sm mb-lg">
            <div>
              <h2 className="text-2xl font-bold text-on-background">
                {gamertag ? `${gamertag}'s` : "Your"} Custom Gaming Banners
              </h2>
              <p className="text-sm text-outline mt-1">Instant preview on game-inspired template themes</p>
            </div>
            <div className="flex items-center gap-xs">
              <span className="text-xs font-bold text-outline uppercase tracking-wider">Sort:</span>
              <select className="bg-surface-container-high border border-outline-variant rounded px-sm py-1 text-sm outline-none text-on-background">
                <option>Featured</option>
                <option>Newest</option>
                <option>Popular</option>
              </select>
            </div>
          </div>

          {filteredTemplates.length === 0 ? (
            <div className="text-center py-xl bg-surface-container-low rounded-xl border border-outline-variant">
              <p className="text-outline">No templates found for this Game Universe. Try selecting "All".</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg">
              {filteredTemplates.map((template, idx) => (
                <div key={idx} className={`bento-card overflow-hidden rounded-xl shadow-lg ${template.glow}`}>
                  {/* Canvas Preview Area */}
                  <div className="relative aspect-video flex items-center justify-center overflow-hidden" style={{ ...template.style, containerType: "inline-size" }}>
                    {template.decor}
                    {gamertag && (
                      <span className="relative z-10 uppercase select-none font-black tracking-wider leading-none text-center" style={{ fontSize: "clamp(12px, 7.5cqw, 24px)" }}>
                        {gamertag}
                      </span>
                    )}
                  </div>

                  {/* Info Footer */}
                  <div className="p-lg bg-surface-container-high">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-on-background">{template.name}</span>
                      <span className="text-xs bg-surface-container-low border border-outline-variant px-2 py-0.5 rounded text-outline font-data-mono">
                        {template.universe}
                      </span>
                    </div>
                    <p className="text-xs text-outline mt-1">{template.sub}</p>

                    <div className="flex items-center gap-md mt-lg">
                      <Link
                        href={`/customize/${template.id}?name=${encodeURIComponent(gamertag)}`}
                        className="flex-1 bg-primary-container hover:bg-primary-container/90 text-on-primary-container text-center font-bold text-xs py-2.5 rounded transition-all"
                      >
                        Use Template
                      </Link>
                      <Link
                        href={`/customize/${template.id}?name=${encodeURIComponent(gamertag)}`}
                        className="flex-1 bg-transparent hover:bg-surface-container-low border border-outline-variant text-on-background text-center font-semibold text-xs py-2.5 rounded transition-all"
                      >
                        Customize
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>        {/* Section 4: Trending Templates Carousel */}
        <section className="bg-surface-container-low/50 py-xl border-t border-b border-outline-variant/60 overflow-hidden">
          <div className="max-w-[1440px] mx-auto px-md md:px-xl mb-lg">
            <h2 className="text-2xl font-bold text-on-background text-center">Trending This Week</h2>
            <p className="text-sm text-outline text-center mt-1">Most popular designs chosen by the community</p>
          </div>

          <div className="relative w-full max-w-[1152px] mx-auto px-md md:px-xl">
            <div className="flex gap-lg overflow-x-auto pb-sm scrollbar-hide">
              {[
                {
                  game: "Valorant",
                  character: "JETT",
                  name: "Tactical Agent",
                  downloads: "4.8K Downloads",
                  style: {
                    background: "url('/banner_valorant.jpg') center/cover no-repeat",
                    fontFamily: "var(--font-gamertag)",
                    color: "#ffffff",
                    textShadow: "0 0 16px rgba(0, 212, 255, 0.6)",
                  },
                  decor: null,
                },
                {
                  game: "Minecraft",
                  character: "STEVE",
                  name: "Pixel Builder",
                  downloads: "5.2K Downloads",
                  style: {
                    background: "url('/banner_minecraft.jpg') center/cover no-repeat",
                    fontFamily: "var(--font-data-mono)",
                    color: "#55ff55",
                    textShadow: "0 2px 6px rgba(0,0,0,0.9)",
                  },
                  decor: null,
                },
                {
                  game: "Fortnite",
                  character: "PEELY",
                  name: "Storm Survival",
                  downloads: "3.9K Downloads",
                  style: {
                    background: "url('/banner_fortnite.jpg') center/cover no-repeat",
                    fontFamily: "var(--font-sans)",
                    fontWeight: "900",
                    color: "#ffffff",
                    textShadow: "0 0 20px rgba(139, 92, 246, 0.7)",
                  },
                  decor: null,
                },
                {
                  game: "Call of Duty",
                  character: "GHOST",
                  name: "Warzone Operator",
                  downloads: "4.1K Downloads",
                  style: {
                    background: "url('/banner_cod.jpg') center/cover no-repeat",
                    fontFamily: "var(--font-gamertag)",
                    color: "#d1d5db",
                    letterSpacing: "0.08em",
                    textShadow: "0 2px 8px rgba(0,0,0,0.8)",
                  },
                  decor: null,
                },
                {
                  game: "GTA V",
                  character: "TREVOR",
                  name: "Los Santos Street",
                  downloads: "6.0K Downloads",
                  style: {
                    background: "url('/banner_gtav.jpg') center/cover no-repeat",
                    fontFamily: "Impact, sans-serif",
                    color: "#ffffff",
                    textShadow: "2px 2px 8px rgba(0,0,0,0.9)",
                    fontStyle: "italic",
                  },
                  decor: null,
                },
                {
                  game: "League",
                  character: "JINX",
                  name: "Runic Spell",
                  downloads: "3.7K Downloads",
                  style: {
                    background: "url('/banner_league.jpg') center/cover no-repeat",
                    fontFamily: "Georgia, serif",
                    color: "#c8aa6e",
                    textShadow: "0 2px 8px rgba(0,0,0,0.9)",
                  },
                  decor: null,
                },
              ].map((template, idx) => (
                <div
                  key={idx}
                  className="flex-shrink-0 w-72 bg-surface-container border border-outline-variant/40 rounded-lg overflow-hidden shadow-md hover:border-primary-container/40 transition-colors"
                >
                  <div className="aspect-video relative flex items-center justify-center overflow-hidden" style={template.style}>
                    {template.decor}
                    <span className="text-sm font-bold tracking-widest uppercase relative z-10">{gamertag}</span>
                  </div>
                  <div className="p-sm flex items-center justify-between text-xs bg-surface-container-high">
                    <div className="flex flex-col">
                      <span className="font-semibold text-on-background">{template.name}</span>
                      <span className="text-[10px] text-outline">{template.game}</span>
                    </div>
                    <span className="text-outline/80 font-data-mono text-[10px]">{template.downloads}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Section 5: Game Universe Explorer */}
        <section className="py-xl max-w-[1440px] mx-auto px-md md:px-xl">
          <div className="text-center mb-lg">
            <h2 className="text-2xl font-bold text-on-background">Browse by Game Universe</h2>
            <p className="text-sm text-outline mt-1">Find templates inspired by your favorite games</p>
          </div>

          <div className="flex flex-wrap justify-center gap-sm max-w-[896px] mx-auto">
            {universes.map((uni, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedUniverse(uni.name)}
                className={`px-lg py-2 rounded-lg border font-semibold text-sm transition-all bg-gradient-to-b ${uni.colors} ${
                  selectedUniverse === uni.name
                    ? "border-primary-container text-primary-container shadow-md shadow-primary-container/10"
                    : "border-outline-variant/45 text-outline hover:border-outline hover:text-on-background"
                }`}
              >
                {uni.name}
              </button>
            ))}
          </div>
        </section>

        {/* Section 6: How It Works */}
        <section className="bg-surface-container-low py-xl border-t border-b border-outline-variant/60">
          <div className="max-w-[1440px] mx-auto px-md md:px-xl">
            <div className="text-center mb-xl">
              <h2 className="text-2xl font-bold text-on-background">How GamingBanner Works</h2>
              <p className="text-sm text-outline mt-1">Zero installation. Full customization in under a minute.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-xl max-w-[1024px] mx-auto">
              {[
                {
                  step: "1",
                  title: "Enter Gamertag",
                  desc: "Type your name at the top to instantly preview it across our complete template gallery.",
                },
                {
                  step: "2",
                  title: "Select Style",
                  desc: "Pick your design inspired by Valorant, Minecraft, or Call of Duty, and adjust fonts, colors, and layout.",
                },
                {
                  step: "3",
                  title: "Download Free",
                  desc: "Export high-resolution PNG files optimized for desktop and mobile banner safe-zones. No watermark.",
                },
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col items-center text-center p-lg bg-surface-container rounded-xl border border-outline-variant/40">
                  <div className="h-12 w-12 rounded-lg bg-primary-container/10 border border-primary-container/40 flex items-center justify-center font-gamertag font-black text-primary-container text-xl shadow-inner shadow-primary-container/5">
                    {item.step}
                  </div>
                  <h3 className="font-bold text-lg text-on-background mt-md">{item.title}</h3>
                  <p className="text-sm text-outline leading-relaxed mt-xs">{item.desc}</p>
                </div>
              ))}
          </div>
        </div>
      </section>

        {/* Section 6: Frequently Asked Questions */}
        <section className="py-xl max-w-[1440px] mx-auto px-md md:px-xl">
          <div className="text-center mb-xl">
            <h2 className="text-2xl font-bold text-on-background">Frequently Asked Questions</h2>
            <p className="text-sm text-outline mt-1">Find answers to common questions about GamingBanner.</p>
          </div>

          <div className="max-w-[768px] mx-auto flex flex-col gap-sm">
            {[
              {
                q: "Is GamingBanner really free?",
                a: "Yes! You can customize and download all templates completely free of charge. We do not apply any watermarks to exported high-resolution PNG files.",
              },
              {
                q: "Do I need graphic design experience?",
                a: "None at all. Just type your gamertag, choose a game style, adjust colors using our side panel options, and download. The tool takes care of dimensions automatically.",
              },
              {
                q: "Are the dimensions accurate for my channel?",
                a: "Absolutely. All templates are built according to platform specifications, including YouTube's central mobile safe-zone (1546 x 423 px) to ensure text renders perfectly on phone screens.",
              },
              {
                q: "Can I use these banners commercially?",
                a: "Yes, you are free to use your downloaded banners to brand your monetized streams, channels, and social profiles.",
              },
            ].map((faq, idx) => (
              <div key={idx} className="bg-surface-container-high/60 border border-outline-variant/45 rounded-lg overflow-hidden transition-colors">
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left px-lg py-md flex items-center justify-between text-on-background font-bold text-sm outline-none"
                >
                  <span>{faq.q}</span>
                  <span className="text-primary-container text-lg font-data-mono">
                    {activeFaq === idx ? "−" : "+"}
                  </span>
                </button>
                {activeFaq === idx && (
                  <div className="px-lg pb-md text-xs text-outline leading-relaxed border-t border-outline-variant/25 pt-sm bg-surface-container">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
