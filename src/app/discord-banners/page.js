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

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the best resolution for a Discord Server Banner?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The recommended size for a Discord Server Banner is 960 x 540 pixels (16:9 aspect ratio). Your server requires Server Boost Level 2 to unlock animated and static banners."
        }
      },
      {
        "@type": "Question",
        "name": "What is the size for a Discord Nitro Profile Banner?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A Discord Nitro User Profile Banner should be 600 x 240 pixels (or 680 x 240 pixels with a 5:2 aspect ratio). Keep all text away from the bottom-left corner to avoid avatar overlap."
        }
      },
      {
        "@type": "Question",
        "name": "What are the file size limits for animated GIF banners on Discord?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Discord allows GIF and PNG files up to 10.0 MB for Nitro profile headers and Server Boost banners. All animated templates on GamingBanner are pre-optimized to stay well below the 10MB limit."
        }
      },
      {
        "@type": "Question",
        "name": "Are these Discord banners free to use for gaming communities?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, 100% free with no watermarks. You can use them for esports teams, clan servers, community hubs, or personal Nitro profiles."
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
            Free Discord Server & Profile Banner Maker (Animated & Static)
          </h1>
          <p className="max-w-[800px] text-xs md:text-sm text-outline leading-relaxed">
            Create stunning Discord server banners (960×540 px) and Nitro profile headers (600×240 px). Free instant exports with zero watermarks, animated GIF compatibility, and custom gamertag typography.
          </p>
        </section>

        {/* Category Catalog Grid with Game Filter Pills */}
        <CategoryCatalog templates={templates} />

        {/* Deep Educational Publisher Section (Anti-Thin Content & High Authority) */}
        <section className="max-w-[960px] mx-auto w-full py-12 border-t border-outline-variant/60 flex flex-col gap-10">
          
          {/* Header Overview */}
          <div>
            <span className="text-xs font-bold font-data-mono text-primary-container uppercase tracking-widest bg-primary-container/10 border border-primary-container/20 px-3 py-1 rounded-full">
              Discord Nitro & Community Standards
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-on-background mt-4">
              Complete Guide to Discord Server & Profile Graphics
            </h2>
            <p className="text-sm text-outline leading-relaxed mt-2">
              Discord visual branding has become essential for gaming guilds, esports clans, and creators. Whether configuring a Server Boost Level 2 banner above your channel list or personalizing your user profile with an animated GIF header, understanding exact dimension safe-zones prevents annoying crops and avatar overlap.
            </p>
          </div>

          {/* Technical Resolution Table */}
          <div className="bg-surface-container rounded-2xl p-6 border border-outline-variant/50 shadow-md">
            <h3 className="text-lg font-bold text-on-background flex items-center gap-2 mb-2">
              📐 Discord Graphic Dimension Specifications
            </h3>
            <p className="text-xs text-outline mb-6">
              Use these standard resolutions to ensure your server invite splash and profile headers render with crisp quality across desktop and mobile apps.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="border-b border-outline-variant text-outline font-data-mono uppercase tracking-wider">
                    <th className="py-3 px-4">Discord Asset Type</th>
                    <th className="py-3 px-4">Recommended Size</th>
                    <th className="py-3 px-4">Aspect Ratio</th>
                    <th className="py-3 px-4">Requirement</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline-variant/30 text-on-surface-variant font-medium">
                  <tr className="hover:bg-surface-container-high/50 transition-colors">
                    <td className="py-3 px-4 font-bold text-on-background">Server Banner Header</td>
                    <td className="py-3 px-4 font-data-mono text-primary-container">960 × 540 px</td>
                    <td className="py-3 px-4">16:9 Wide</td>
                    <td className="py-3 px-4">Boost Level 2 (Static) / Level 3 (Animated)</td>
                  </tr>
                  <tr className="hover:bg-surface-container-high/50 transition-colors">
                    <td className="py-3 px-4 font-bold text-on-background">Nitro User Profile Banner</td>
                    <td className="py-3 px-4 font-data-mono text-primary-container">600 × 240 px</td>
                    <td className="py-3 px-4">5:2 Standard</td>
                    <td className="py-3 px-4">Discord Nitro / Nitro Basic</td>
                  </tr>
                  <tr className="hover:bg-surface-container-high/50 transition-colors">
                    <td className="py-3 px-4 font-bold text-on-background">Server Invite Splash</td>
                    <td className="py-3 px-4 font-data-mono text-primary-container">1920 × 1080 px</td>
                    <td className="py-3 px-4">16:9 Full HD</td>
                    <td className="py-3 px-4">Boost Level 1</td>
                  </tr>
                  <tr className="hover:bg-surface-container-high/50 transition-colors">
                    <td className="py-3 px-4 font-bold text-on-background">Server Icon Avatar</td>
                    <td className="py-3 px-4 font-data-mono text-primary-container">512 × 512 px</td>
                    <td className="py-3 px-4">1:1 Square</td>
                    <td className="py-3 px-4">Free for All Servers</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Setup Walkthrough */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-surface-container/60 rounded-xl p-5 border border-outline-variant/40">
              <span className="w-8 h-8 rounded-full bg-primary-container/20 text-primary-container font-bold flex items-center justify-center text-sm mb-3">
                1
              </span>
              <h4 className="font-bold text-on-background text-sm">Choose Your Theme</h4>
              <p className="text-xs text-outline leading-relaxed mt-2">
                Browse our animated cyber loops, anime aesthetics, or dark esports grids above and customize your server name.
              </p>
            </div>

            <div className="bg-surface-container/60 rounded-xl p-5 border border-outline-variant/40">
              <span className="w-8 h-8 rounded-full bg-primary-container/20 text-primary-container font-bold flex items-center justify-center text-sm mb-3">
                2
              </span>
              <h4 className="font-bold text-on-background text-sm">Mind the Avatar Safe-Zone</h4>
              <p className="text-xs text-outline leading-relaxed mt-2">
                Keep critical logos and text centered or aligned to the right side so your circular user avatar doesn't block it.
              </p>
            </div>

            <div className="bg-surface-container/60 rounded-xl p-5 border border-outline-variant/40">
              <span className="w-8 h-8 rounded-full bg-primary-container/20 text-primary-container font-bold flex items-center justify-center text-sm mb-3">
                3
              </span>
              <h4 className="font-bold text-on-background text-sm">Upload & Save</h4>
              <p className="text-xs text-outline leading-relaxed mt-2">
                Go to User Settings &gt; Profiles (or Server Settings &gt; Overview) and upload your lossless file.
              </p>
            </div>
          </div>

          {/* Discord FAQs */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-on-background">
              Frequently Asked Questions (Discord Banners)
            </h3>
            
            <div className="bg-surface-container/50 rounded-xl p-5 border border-outline-variant/40">
              <h4 className="font-bold text-sm text-on-background">Can I use animated GIF banners without Discord Nitro?</h4>
              <p className="text-xs text-outline leading-relaxed mt-1">
                For personal profiles, Discord requires an active Nitro subscription to display animated GIF headers. However, static PNG banners can be applied to server invite links and boost slots.
              </p>
            </div>

            <div className="bg-surface-container/50 rounded-xl p-5 border border-outline-variant/40">
              <h4 className="font-bold text-sm text-on-background">What is the maximum file size for Discord banners?</h4>
              <p className="text-xs text-outline leading-relaxed mt-1">
                Discord enforces a maximum file upload limit of 10.0 MB for banners. All templates downloaded from our studio are optimized to stay well beneath this threshold while preserving maximum clarity.
              </p>
            </div>

            <div className="bg-surface-container/50 rounded-xl p-5 border border-outline-variant/40">
              <h4 className="font-bold text-sm text-on-background">Are these banners free for public gaming servers?</h4>
              <p className="text-xs text-outline leading-relaxed mt-1">
                Yes! Every Discord banner on GamingBanner.com is 100% free with no watermarks and full commercial usage rights for your community.
              </p>
            </div>
          </div>

        </section>
      </main>

      <Footer />
    </>
  );
}
