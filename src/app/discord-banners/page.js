import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CategoryCatalog from "@/components/CategoryCatalog";

export const metadata = {
  title: "Discord Server Banner Maker & Profiles | Gaming Banner",
  description: "Create free 4K Discord server banners and profile headers. Custom anime, gaming, and cyberpunk themes optimized for Discord Nitro dimensions.",
};

export default function DiscordBanners() {

  const templates = [
    { id: "discord-animated-cyber", name: "Animated Cyber Red (GIF)", category: "Animated", desc: "Seamless looping crimson pulse neon gaming cover for Discord Nitro", textStyle: { fontFamily: "var(--font-gamertag)", fontStyle: "italic", color: "#fca5a5", textShadow: "0 0 10px #ef4444, 0 0 20px #991b1b, 2px 2px 0px #000000", letterSpacing: "0.1em" }, style: { background: "url('/discord_animated_cyber.gif') center/cover no-repeat" } },
    { id: "discord-animated-frost", name: "Animated Frost Blue (GIF)", category: "Animated", desc: "Glacial cyan lighting flash loop optimized for Discord profile layouts", textStyle: { fontFamily: "var(--font-gamertag)", fontStyle: "italic", color: "#ffffff", textShadow: "0 0 10px #06b6d4, 0 0 20px #0891b2", letterSpacing: "0.15em" }, style: { background: "url('/discord_animated_frost.gif') center/cover no-repeat" } },
    { id: "discord-cyber-red", name: "Cyber Red Mech", category: "Mech", desc: "Obsidian black grid with deep crimson neon flares and gothic text", textStyle: { fontFamily: "var(--font-gamertag)", fontStyle: "italic", color: "#fca5a5", textShadow: "0 0 10px #ef4444, 0 0 20px #991b1b, 2px 2px 0px #000000", letterSpacing: "0.1em" }, style: { background: "url('/discord_cyber_red.jpg') center/cover no-repeat" } },
    { id: "discord-gold-tactical", name: "Gold Tactical Grid", category: "Military", desc: "Brushed carbon mesh with rich gold flares and heavy blocky text", textStyle: { fontFamily: "Impact, sans-serif", color: "#fef08a", textShadow: "3px 3px 0px #000, -1px -1px 0px #78350f, 0 0 15px #fbbf24", letterSpacing: "0.08em" }, style: { background: "url('/discord_gold_tactical.jpg') center/cover no-repeat" } },
    { id: "discord-liquid-ice", name: "Liquid Ice", category: "Tactical", desc: "Slate steel background with ice-blue frost trails and glows", textStyle: { fontFamily: "var(--font-gamertag)", color: "#ffffff", textShadow: "0 0 8px #0ea5e9, 0 0 16px #0369a1, 3px 3px 0px #0f172a", letterSpacing: "0.15em" }, style: { background: "url('/discord_liquid_ice.jpg') center/cover no-repeat" } },
    { id: "discord-synth-clouds", name: "Synth Horizon", category: "Synthwave", desc: "Vibrant neon-magenta sunset horizon with high-contrast text", textStyle: { fontFamily: "var(--font-sans)", fontWeight: "900", color: "#fbcfe8", textShadow: "0 0 12px #ec4899, 0 0 24px #4a044e, 3px 3px 0px #000", letterSpacing: "0.1em" }, style: { background: "url('/discord_synth_clouds.jpg') center/cover no-repeat" } },
    { id: "discord-dark-anime", name: "Dark Crimson Mist", category: "Anime", desc: "Shadowy crimson mist overlay with dark red neon highlights", textStyle: { fontFamily: "var(--font-gamertag)", fontStyle: "italic", color: "#ef4444", textShadow: "0 0 15px #ef4444, 3px 3px 0px #000000", letterSpacing: "0.12em" }, style: { background: "url('/discord_dark_anime.jpg') center/cover no-repeat" } },
    { id: "discord-purple-shorts", name: "Amethyst Smoke", category: "Anime", desc: "Vibrant amethyst smoke clusters and high-frequency purple streaks", textStyle: { fontFamily: "Impact, sans-serif", color: "#ffffff", textShadow: "0 0 10px #c084fc, 0 0 20px #7e22ce, 2px 2px 0px #000000", letterSpacing: "0.05em" }, style: { background: "url('/discord_purple_shorts.jpg') center/cover no-repeat" } },
    { id: "discord-phase-freak", name: "Phase Pink Lightning", category: "Neon", desc: "Intense pink lightning bolts crackling across a deep obsidian sky", textStyle: { fontFamily: "Georgia, serif", color: "#fca5a5", textShadow: "0 0 12px #f43f5e, 0 0 24px #9f1239, 3px 3px 0px #000", letterSpacing: "0.2em" }, style: { background: "url('/discord_phase_freak.jpg') center/cover no-repeat" } },
    { id: "discord-frantox-blue", name: "Frantox Glacial Blue", category: "Esports", desc: "Glacial cyan energy storms with frozen blue ice patterns", textStyle: { fontFamily: "var(--font-gamertag)", fontStyle: "italic", color: "#e0f7fa", textShadow: "0 0 8px #06b6d4, 0 0 16px #0891b2, 3px 3px 0px #000", letterSpacing: "0.15em" }, style: { background: "url('/discord_frantox_blue.jpg') center/cover no-repeat" } },
    { id: "discord-zephyr-red", name: "Zephyr Red Speed", category: "Esports", desc: "Sleek red racing light streaks with raw carbon mesh panels", textStyle: { fontFamily: "Impact, sans-serif", color: "#fca5a5", textShadow: "2px 2px 0px #000, -2px -2px 0px #7f1d1d, 0 0 10px #ef4444", letterSpacing: "0.06em" }, style: { background: "url('/discord_zephyr_red.jpg') center/cover no-repeat" } },
    { id: "discord-thumb-green", name: "Toxic Emerald Glow", category: "Neon", desc: "Radioactive toxic green gas smoke and chemical grid lines", textStyle: { fontFamily: "var(--font-data-mono)", color: "#a7f3d0", textShadow: "2px 2px 0px #064e3b, 4px 4px 0px #022c22, 0 0 12px #10b981", letterSpacing: "0.1em" }, style: { background: "url('/discord_thumb_green.jpg') center/cover no-repeat" } },
    { id: "discord-cyberpunk-yellow", name: "Cyber Matrix Yellow", category: "Cyberpunk", desc: "Vibrant neon yellow glitch lines on slate background", textStyle: { fontFamily: "Impact, sans-serif", color: "#fef08a", textShadow: "3px 3px 0px #000000, 0 0 12px #eab308", letterSpacing: "0.1em" }, style: { background: "url('/discord_cyberpunk_yellow.jpg') center/cover no-repeat" } },
    { id: "discord-toxic-glow", name: "Acid Biohazard", category: "Neon", desc: "Vibrant neon green acid leaks with metal sheet grids", textStyle: { fontFamily: "var(--font-gamertag)", fontStyle: "italic", color: "#34d399", textShadow: "0 0 10px #10b981, 0 0 20px #047857", letterSpacing: "0.12em" }, style: { background: "url('/discord_toxic_glow.jpg') center/cover no-repeat" } },
    { id: "discord-angelic-grace", name: "Angelic Light", category: "Minimalist", desc: "Soft white skies with glowing golden particle rings", textStyle: { fontFamily: "Georgia, serif", color: "#fef08a", textShadow: "0 2px 4px #78350f, 0 0 15px rgba(251, 191, 36, 0.5)", letterSpacing: "0.25em" }, style: { background: "url('/discord_angelic_grace.jpg') center/cover no-repeat" } },
    { id: "discord-abyssal-void", name: "Abyssal Singularity", category: "Dark", desc: "Infinite black hole singularity with white particle dust", textStyle: { fontFamily: "var(--font-sans)", fontWeight: "900", color: "#93c5fd", textShadow: "0 0 12px #3b82f6, 3px 3px 0px #1e3a8a", letterSpacing: "0.08em" }, style: { background: "url('/discord_abyssal_void.jpg') center/cover no-repeat" } },
    { id: "discord-crimson-slayer", name: "Crimson Ninja", category: "Mech", desc: "Blood-red samurai outline with dark steel grids", textStyle: { fontFamily: "Impact, sans-serif", color: "#fca5a5", textShadow: "3px 3px 0px #000000, 0 0 10px #dc2626", letterSpacing: "0.08em" }, style: { background: "url('/discord_crimson_slayer.jpg') center/cover no-repeat" } },
    { id: "discord-glitch-system", name: "Green System Glitch", category: "Cyberpunk", desc: "Matrix green system code drop overlays on clean slate", textStyle: { fontFamily: "var(--font-data-mono)", color: "#86efac", textShadow: "2px 2px 0px #14532d, 4px 4px 0px #052e16", letterSpacing: "0.12em" }, style: { background: "url('/discord_glitch_system.jpg') center/cover no-repeat" } },
    { id: "discord-frost-bite", name: "Frost Bite Dragon", category: "Tactical", desc: "Frozen blue shards with cold wind drift overlays", textStyle: { fontFamily: "var(--font-gamertag)", fontStyle: "italic", color: "#ffffff", textShadow: "0 0 10px #06b6d4, 0 0 20px #0891b2", letterSpacing: "0.15em" }, style: { background: "url('/discord_frost_bite.jpg') center/cover no-repeat" } },
    { id: "discord-solar-flare", name: "Solar Phoenix", category: "Synthwave", desc: "Bright orange solar flares shooting across cosmic slate", textStyle: { fontFamily: "Impact, sans-serif", color: "#fed7aa", textShadow: "2px 2px 0px #431407, 0 0 12px #f97316", letterSpacing: "0.06em" }, style: { background: "radial-gradient(circle at 10% 50%, rgba(249, 115, 22, 0.3) 0%, transparent 60%), radial-gradient(circle at 90% 50%, rgba(244, 63, 94, 0.15) 0%, transparent 50%), linear-gradient(135deg, #180500 0%, #030712 100%)" } },
    { id: "discord-cosmic-nebula", name: "Nebula Violet Space", category: "Dark", desc: "Swirling purple and magenta space dust clouds", textStyle: { fontFamily: "var(--font-sans)", fontWeight: "900", color: "#e9d5ff", textShadow: "0 0 15px #c084fc, 0 0 30px #7e22ce, 3px 3px 0px #000", letterSpacing: "0.08em" }, style: { background: "radial-gradient(circle at 80% 80%, rgba(168, 85, 247, 0.25) 0%, transparent 60%), radial-gradient(circle at 20% 20%, rgba(219, 39, 119, 0.2) 0%, transparent 50%), linear-gradient(135deg, #0f0728 0%, #030712 100%)" } },
    { id: "discord-phantom-spirit", name: "Phantom Spectral", category: "Mech", desc: "Cyan spectral flames and dark hollow skull grids", textStyle: { fontFamily: "var(--font-gamertag)", color: "#cffafe", textShadow: "0 0 12px #06b6d4, 0 0 24px #0891b2, 2px 2px 0px #000000", letterSpacing: "0.2em" }, style: { background: "radial-gradient(circle at 50% 100%, rgba(6, 182, 212, 0.25) 0%, transparent 70%), radial-gradient(circle at 50% 0%, rgba(13, 148, 136, 0.15) 0%, transparent 60%), linear-gradient(135deg, #040d12 0%, #01161b 100%)" } }
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
        "name": "Discord Banners",
        "item": "https://gamingbanner.com/discord-banners"
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
            Free Discord Server Banner Maker – Nitro Profile Cover Art
          </h1>
          <p className="max-w-[760px] text-xs md:text-sm text-outline leading-relaxed">
            Create high-resolution Discord server banners (960 x 540 px) and Nitro profile headers (680 x 240 px) for free. Animated GIFs, anime aesthetics, and cyberpunk esports presets.
          </p>
        </section>

        {/* Category Catalog Grid with Game Filter Pills */}
        <CategoryCatalog templates={templates} />

        {/* Size Guide & Upload specs */}
        <section className="max-w-[800px] mx-auto w-full py-lg border-t border-outline-variant/65 flex flex-col gap-lg">
          <div className="border-l-4 border-primary-container pl-lg">
            <h2 className="text-2xl font-bold text-on-background">Discord Banner Size Guide</h2>
            <p className="text-sm text-outline mt-1 leading-relaxed">
              Discord supports Server Banners (available at Level 2 Boosts) and user Profile Banners (requires Discord Nitro). Safe margins are vital to prevent overlay crops from server icons.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
