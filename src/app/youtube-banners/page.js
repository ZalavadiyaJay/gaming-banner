import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CategoryCatalog from "@/components/CategoryCatalog";

export const metadata = {
  title: "Free YouTube Gaming Banner Maker (2025) | Gaming Banner",
  description: "Design high-quality YouTube gaming banners for free. Symmetrical layouts, neon glow, and modern esports templates for Valorant, Minecraft, COD, and more.",
};

export default function YouTubeBanners() {

  // YouTube Official Banner Templates
  const templates = [
    {
      id: "valorant-protocol",
      game: "valorant",
      bannerSlug: "protocol-agent-banner",
      name: "Valorant Protocol Agent",
      desc: "Tactical radianite combat agent in destroyed futuristic city with purple sky portal",
      gamertag: "RADIANT_PRO",
      sub: "IMMORTAL 3 • 450 RR",
      textStyle: {
        fontFamily: "var(--font-gamertag)",
        color: "#00d4ff",
        textShadow: "0 0 16px rgba(0, 212, 255, 0.7), 0 0 32px rgba(168, 85, 247, 0.5)",
      },
      style: {
        background: "url('/banner_valorant_v3.jpg') center/cover no-repeat",
      },
    },
    {
      id: "minecraft-overworld-nether",
      game: "minecraft",
      bannerSlug: "overworld-nether-split-banner",
      name: "Minecraft Overworld vs Nether",
      desc: "Panoramic blocky landscape split with sunny Overworld castle & fiery Nether Ghast fortress",
      gamertag: "CRAFT_LEGEND",
      sub: "HARDCORE SURVIVAL • Day 100",
      textStyle: {
        fontFamily: "var(--font-data-mono)",
        color: "#10b981",
        textShadow: "2px 2px 0px #064e3b, 4px 4px 0px #022c22, 0 0 16px rgba(16, 185, 129, 0.6)",
      },
      style: {
        background: "url('/banner_minecraft_v3.jpg') center/cover no-repeat",
      },
    },
    {
      id: "fortnite-mega-city",
      game: "fortnite",
      bannerSlug: "mega-city-rift-battle-banner",
      name: "Fortnite Mega City Rift Battle",
      desc: "Vibrant battle royale collage across ramp structures with neon cyberpunk skyline & purple rift sky",
      gamertag: "ROYALE_CHAMP",
      sub: "VICTORY ROYALE • Crown Wins: 99",
      textStyle: {
        fontFamily: "var(--font-sans)",
        fontWeight: "900",
        color: "#ffffff",
        textShadow: "0 0 20px rgba(139, 92, 246, 0.9), 0 0 40px rgba(236, 72, 153, 0.7)",
      },
      style: {
        background: "url('/banner_fortnite_v3.jpg') center/cover no-repeat",
      },
    },
    {
      id: "cod-warzone",
      game: "call-of-duty",
      bannerSlug: "warzone-special-ops-banner",
      name: "Call of Duty Warzone Special Ops",
      desc: "Action-packed military special forces battlefield scene with tactical operators & helicopters",
      gamertag: "GHOST_ACTUAL",
      sub: "TACTICAL LOADOUT • Global Elite",
      textStyle: {
        fontFamily: "Impact, sans-serif",
        color: "#ffffff",
        textShadow: "3px 3px 0px #1e293b, -3px -3px 0px #1e293b, 3px -3px 0px #1e293b, -3px 3px 0px #1e293b, 0 0 20px rgba(222, 155, 53, 0.7)",
        letterSpacing: "0.05em",
      },
      style: {
        background: "url('/banner_cod_v3.jpg') center/cover no-repeat",
      },
    },
    {
      id: "gta-street",
      game: "gta-v",
      bannerSlug: "los-santos-heist-banner",
      name: "GTA V Los Santos Heist",
      desc: "Iconic GTA comic-book panel collage with Los Santos skyline, supercars, stunt bikes, & police chases",
      gamertag: "LOS_SANTOS",
      sub: "LOS SANTOS • Heist Leader",
      textStyle: {
        fontFamily: "Impact, sans-serif",
        color: "#10b981",
        textShadow: "3px 3px 0px #000000, -3px -3px 0px #000000, 0 0 16px rgba(16, 185, 129, 0.7)",
        letterSpacing: "0.05em",
      },
      style: {
        background: "url('/banner_gtav_v3.jpg') center/cover no-repeat",
      },
    },
    {
      id: "apex-canyon",
      game: "apex-legends",
      bannerSlug: "canyon-predator-banner",
      name: "Apex Legends Canyon Predator",
      desc: "Cinematic sci-fi legends combat splash art on a volcanic canyon with lava fissures & dropships",
      gamertag: "APEX_CHAMP",
      sub: "PREDATOR RANK • Season 22",
      textStyle: {
        fontFamily: "var(--font-gamertag)",
        fontStyle: "italic",
        color: "#ff3e3e",
        textShadow: "0 0 16px rgba(255, 62, 62, 0.9), 0 0 32px rgba(234, 88, 12, 0.7)",
      },
      style: {
        background: "url('/banner_apex_v3.jpg') center/cover no-repeat",
      },
    },
    {
      id: "league-rift",
      game: "league-of-legends",
      bannerSlug: "summoners-rift-champions-banner",
      name: "League of Legends Champions Clash",
      desc: "Cinematic fantasy team splash art with gunslinger, fox mage, and golem crossing stone bridge",
      gamertag: "SUMMONER_1",
      sub: "CHALLENGER • Mid Lane Carry",
      textStyle: {
        fontFamily: "Georgia, serif",
        color: "#dfc8a5",
        textShadow: "0 2px 8px rgba(0,0,0,0.9), 0 0 20px rgba(223, 200, 165, 0.7)",
      },
      style: {
        background: "url('/banner_league_v3.jpg') center/cover no-repeat",
      },
    },
    {
      id: "rocket-league",
      game: "rocket-league",
      bannerSlug: "aerial-stadium-clash-banner",
      name: "Rocket League Aerial Stadium Clash",
      desc: "High-octane rocket-powered cars in mid-air collision around fiery metallic ball inside stadium",
      gamertag: "AERO_DRIFT",
      sub: "GRAND CHAMPION • Boost On",
      textStyle: {
        fontFamily: "var(--font-gamertag)",
        color: "#00d4ff",
        textShadow: "0 0 16px rgba(0, 212, 255, 0.9), 0 0 32px rgba(249, 115, 22, 0.7)",
      },
      style: {
        background: "url('/banner_rocketleague_v3.jpg') center/cover no-repeat",
      },
    },
    {
      id: "pubg-mobile",
      game: "pubg-mobile",
      bannerSlug: "erangel-air-drop-banner",
      name: "PUBG Mobile Erangel Air Drop",
      desc: "Tense Erangel sunset battleground scene with Level 3 helmet operators, burning UAZ, & supply crate",
      gamertag: "PUBG_WARLORD",
      sub: "WINNER WINNER • Conqueror Tier",
      textStyle: {
        fontFamily: "Impact, sans-serif",
        color: "#facc15",
        textShadow: "3px 3px 0px #000000, -3px -3px 0px #000000, 0 0 16px rgba(234, 179, 8, 0.8)",
        letterSpacing: "0.05em",
      },
      style: {
        background: "url('/banner_pubg_v3.jpg') center/cover no-repeat",
      },
    },
    {
      id: "clash-of-clans",
      game: "clash-of-clans",
      bannerSlug: "clan-war-siege-banner",
      name: "Clash of Clans Clan War Siege",
      desc: "Isometric fantasy siege with Town Hall 12, Golems, Barbarian King, Archer Queen, & Dragons",
      gamertag: "TOWN_HALL_16",
      sub: "TOWN HALL 16 • Clan Leader",
      textStyle: {
        fontFamily: "Impact, sans-serif",
        color: "#fbbf24",
        textShadow: "3px 3px 0px #78350f, -3px -3px 0px #78350f, 0 0 20px rgba(245, 158, 11, 0.8)",
        letterSpacing: "0.05em",
      },
      style: {
        background: "url('/banner_coc_v3.jpg') center/cover no-repeat",
      },
    },
    {
      id: "forza-horizon",
      game: "forza-horizon",
      bannerSlug: "alpine-mountain-drift-banner",
      name: "Forza Horizon Alpine Mountain Drift",
      desc: "Orange hypercar drifting at high speed around alpine mountain road with autumn foliage & snow peaks",
      gamertag: "HORIZON_DRIFT",
      sub: "FESTIVAL CHAMPION • Horizon 5",
      textStyle: {
        fontFamily: "var(--font-gamertag)",
        color: "#f43f5e",
        textShadow: "0 0 16px rgba(244, 63, 94, 0.9), 0 0 32px rgba(251, 146, 60, 0.7)",
      },
      style: {
        background: "url('/banner_forza_v3.jpg') center/cover no-repeat",
      },
    },
    {
      id: "asphalt-9",
      game: "asphalt-9",
      bannerSlug: "times-square-night-drift-banner",
      name: "Asphalt 9 Times Square Night Drift",
      desc: "Blue hypercar drifting in Times Square street race with sparks, police cruisers, & neon billboards",
      gamertag: "ASPHALT_LEGEND",
      sub: "LEGENDS DIVISION • Nitro On",
      textStyle: {
        fontFamily: "Impact, sans-serif",
        color: "#f472b6",
        textShadow: "3px 3px 0px #831843, -3px -3px 0px #831843, 0 0 20px rgba(236, 72, 153, 0.9)",
        letterSpacing: "0.05em",
      },
      style: {
        background: "url('/banner_asphalt_v3.jpg') center/cover no-repeat",
      },
    },
    {
      id: "genshin-impact",
      game: "genshin-impact",
      bannerSlug: "teyvat-archons-clash-banner",
      name: "Genshin Impact Teyvat Archons",
      desc: "Lineup of six anime fantasy heroes overlooking mountains, harbors, pagodas, & windmills",
      gamertag: "TEYVAT_TRAVELER",
      sub: "TEYVAT EXPLORER • AR 60",
      textStyle: {
        fontFamily: "Georgia, serif",
        color: "#fde047",
        textShadow: "0 2px 8px rgba(0,0,0,0.9), 0 0 20px rgba(56, 189, 248, 0.9)",
        letterSpacing: "0.05em",
      },
      style: {
        background: "url('/banner_genshin_v3.jpg') center/cover no-repeat",
      },
    },
    {
      id: "roblox-virtual",
      game: "roblox",
      bannerSlug: "metaverse-parkour-banner",
      name: "Roblox Metaverse Parkour",
      desc: "Sprawling voxel multiverse with heroic party, floating parkour obby, castle, & city skyline",
      gamertag: "BLOX_MASTER",
      sub: "TOP CREATOR • 1M Visits",
      textStyle: {
        fontFamily: "var(--font-sans)",
        fontWeight: "900",
        color: "#ffffff",
        textShadow: "3px 3px 0px #1e3a8a, -3px -3px 0px #1e3a8a, 0 0 20px rgba(59, 130, 246, 0.9)",
        letterSpacing: "0.05em",
      },
      style: {
        background: "url('/banner_roblox_v3.jpg') center/cover no-repeat",
      },
    },
    {
      id: "cyberpunk-2077",
      game: "cyberpunk-2077",
      bannerSlug: "night-city-mercenary-banner",
      name: "Cyberpunk 2077 Night City Mercenary",
      desc: "Rainy Night City skyline with rooftop mercenary, neon reflections, mantis blade, & mega-skyscrapers",
      gamertag: "CYBER_MERC",
      sub: "NIGHT CITY LEGEND • Cyberware Maxed",
      textStyle: {
        fontFamily: "Impact, sans-serif",
        color: "#facc15",
        textShadow: "3px 3px 0px #06b6d4, -3px -3px 0px #06b6d4, 0 0 24px rgba(250, 204, 21, 0.9)",
        letterSpacing: "0.08em",
      },
      style: {
        background: "url('/banner_cyberpunk_v3.jpg') center/cover no-repeat",
      },
    },
    {
      id: "elden-ring",
      game: "elden-ring",
      bannerSlug: "shadow-erdtree-throne-banner",
      name: "Elden Ring Shadow of the Erdtree",
      desc: "Messmer the Impaler on gothic throne with serpent staff, candlelit ruins, & burning Erdtree",
      gamertag: "TARNISHED_LORD",
      sub: "LORD OF BLASPHEMY • Erdtree Burned",
      textStyle: {
        fontFamily: "Georgia, serif",
        color: "#fde047",
        textShadow: "0 2px 10px rgba(0,0,0,0.9), 0 0 20px rgba(245, 158, 11, 0.9), 0 0 40px rgba(239, 68, 68, 0.7)",
        letterSpacing: "0.08em",
      },
      style: {
        background: "url('/banner_eldenring_v3.jpg') center/cover no-repeat",
      },
    },
    {
      id: "among-us",
      game: "among-us",
      bannerSlug: "skeld-spaceship-sabotage-banner",
      name: "Among Us Skeld Spaceship Sabotage",
      desc: "Skeld spaceship cross-section with Red impostor, ghost crewmate, electrical wiring tasks, & vents",
      gamertag: "RED_IMPOSTOR",
      sub: "IMPOSTOR SUS • Tasks Completed",
      textStyle: {
        fontFamily: "Impact, sans-serif",
        color: "#ef4444",
        textShadow: "3px 3px 0px #000000, -3px -3px 0px #000000, 0 0 20px rgba(239, 68, 68, 0.9)",
        letterSpacing: "0.06em",
      },
      style: {
        background: "url('/banner_amongus_v3.jpg') center/cover no-repeat",
      },
    },
    {
      id: "clash-royale",
      game: "clash-royale",
      bannerSlug: "arena-champions-clash-banner",
      name: "Clash Royale Arena Champions",
      desc: "3D animated arena clash with Blue King, Skeletons, Barbarian, Archers, Wizard, PEKKA, & Prince",
      gamertag: "ROYALE_KING",
      sub: "ULTIMATE CHAMPION • Top Ladder",
      textStyle: {
        fontFamily: "Impact, sans-serif",
        color: "#fbbf24",
        textShadow: "3px 3px 0px #1e3a8a, -3px -3px 0px #1e3a8a, 0 0 20px rgba(59, 130, 246, 0.9)",
        letterSpacing: "0.06em",
      },
      style: {
        background: "url('/banner_clashroyale_v3.jpg') center/cover no-repeat",
      },
    },
    {
      id: "overwatch-2",
      game: "overwatch-2",
      bannerSlug: "rooftop-heroes-clash-banner",
      name: "Overwatch 2 Rooftop Heroes Clash",
      desc: "Futuristic rooftop battle with Reinhardt, Sojourn, leaping Tracer, winged Mercy, Bastion, Genji, & Kiriko",
      gamertag: "HERO_GRANDMASTER",
      sub: "GRANDMASTER • Top 500",
      textStyle: {
        fontFamily: "Impact, sans-serif",
        color: "#f97316",
        textShadow: "3px 3px 0px #000000, -3px -3px 0px #000000, 0 0 20px rgba(249, 115, 22, 0.9)",
        letterSpacing: "0.06em",
      },
      style: {
        background: "url('/banner_overwatch_v3.jpg') center/cover no-repeat",
      },
    },
    {
      id: "cs2-tactical",
      game: "cs2",
      bannerSlug: "tactical-dust-standoff-banner",
      name: "Counter-Strike 2 Tactical Firefight",
      desc: "Tactical squad firefight on desert bomb site with Counter-Terrorists firing M4, AWP sniper, & muzzle flashes",
      gamertag: "GLOBAL_ELITE",
      sub: "GLOBAL ELITE • 20,000+ Premier Rating",
      textStyle: {
        fontFamily: "Impact, sans-serif",
        color: "#fbbf24",
        textShadow: "3px 3px 0px #000000, -3px -3px 0px #000000, 0 0 20px rgba(245, 158, 11, 0.9)",
        letterSpacing: "0.06em",
      },
      style: {
        background: "url('/banner_cs2_v3.jpg') center/cover no-repeat",
      },
    },
    {
      id: "fifa-soccer",
      game: "ea-sports-fc",
      bannerSlug: "stadium-bicycle-volley-banner",
      name: "EA Sports FC 25 Stadium Volley",
      desc: "High-flying acrobatic bicycle kick volley under dazzling mega-stadium floodlights with golden confetti",
      gamertag: "FUT_CHAMPION",
      sub: "DIVISION RIVALS • Rank 1 FUT Champions",
      textStyle: {
        fontFamily: "Impact, sans-serif",
        color: "#34d399",
        textShadow: "3px 3px 0px #064e3b, -3px -3px 0px #064e3b, 0 0 24px rgba(16, 185, 129, 0.9)",
        letterSpacing: "0.06em",
      },
      style: {
        background: "url('/banner_fifa_v3.jpg') center/cover no-repeat",
      },
    },
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

      <main className="flex-1 min-h-screen pt-24 pb-6 px-4 md:px-8 w-full max-w-[1440px] mx-auto flex flex-col gap-6 overflow-x-hidden">
        {/* Page Hero */}
        <section className="text-center py-2 flex flex-col items-center gap-2">
          <h1 className="text-2xl md:text-3xl font-extrabold text-on-background tracking-tight">
            Free YouTube Gaming Banner Maker (No Watermark & No Signup)
          </h1>
          <p className="max-w-[760px] text-xs md:text-sm text-outline leading-relaxed">
            Create custom 4K YouTube channel art without Photoshop or paid subscriptions. Unlike generic design tools, Gaming Banner is 100% free with zero watermarks, no account registration, and built-in mobile safe zone overlays.
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
