// src/app/customize/[...slug]/page.js
import { notFound, permanentRedirect } from "next/navigation";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CustomizeClient from "@/components/CustomizeClient";
import { TEMPLATES, getTemplate, getTemplateByLegacyId } from "@/data/templates";

export const dynamicParams = false;

export async function generateStaticParams() {
  const paths = [];

  // 1. Canonical Nested 2-segment routes: /customize/[game]/[banner]
  TEMPLATES.forEach((t) => {
    paths.push({ slug: [t.game, t.bannerSlug] });
  });

  // 2. Legacy 1-segment routes: /customize/[id]
  const legacySet = new Set();
  TEMPLATES.forEach((t) => {
    legacySet.add(t.id);
    legacySet.add(t.game);
    legacySet.add(t.bannerSlug);
    if (t.legacyIds) {
      t.legacyIds.forEach((lid) => legacySet.add(lid));
    }
  });

  // Common aliases and previous URLs
  [
    "valorant",
    "valorant-protocol",
    "esports",
    "esports-v2",
    "minecraft",
    "minecraft-overworld-nether",
    "minimalist",
    "minimalist-v2",
    "fortnite",
    "fortnite-mega-city",
    "streaming",
    "streaming-v2",
    "cod",
    "call-of-duty",
    "warzone",
    "cod-warzone",
    "cs2-tactical",
    "cs2-tactical-v2",
    "cs2",
    "counter-strike",
    "counter-strike-2",
    "ea-sports-fc",
    "fifa",
    "fifa-soccer",
    "fifa-soccer-v2",
    "gta",
    "gtav",
    "gta-v",
    "gta-street",
    "gta-street-v2",
    "apex",
    "apex-legends",
    "apex-canyon",
    "modern-apex",
    "modern-apex-v2",
    "league",
    "league-of-legends",
    "league-rift",
    "lol",
    "rpg",
    "rpg-v2",
    "rocket-league",
    "rocket-league-v2",
    "pubg",
    "pubg-mobile",
    "pubg-mobile-v2",
    "coc",
    "clash-of-clans",
    "clash-of-clans-v2",
    "forza",
    "forza-horizon",
    "forza-horizon-v2",
    "asphalt",
    "asphalt-9",
    "asphalt-9-v2",
    "genshin",
    "genshin-impact",
    "genshin-impact-v2",
    "roblox",
    "roblox-virtual",
    "roblox-virtual-v2",
    "cyberpunk",
    "cyberpunk-2077",
    "cyberpunk-2077-v2",
    "elden-ring",
    "eldenring",
    "elden-ring-v2",
    "among-us",
    "amongus",
    "among-us-v2",
    "clash-royale",
    "clashroyale",
    "clash-royale-v2",
    "overwatch",
    "overwatch-2",
    "overwatch-hero",
    "overwatch-hero-v2",
    "twitch-valorant",
    "twitch-cod",
    "twitch-fortnite",
    "twitch-minecraft",
    "twitch-apex",
    "twitch-gtav",
    "twitch-league",
    "twitch-rocketleague",
    "twitch-pubg",
    "twitch-coc",
    "twitch-forza",
    "twitch-asphalt",
    "twitch-genshin",
    "discord-animated-cyber",
    "discord-animated-frost",
    "discord-cyber-red",
    "discord-gold-tactical",
    "discord-liquid-ice",
    "discord-synth-clouds",
    "discord-dark-anime",
    "discord-purple-shorts",
    "discord-phase-freak",
    "discord-frantox-blue",
    "discord-zephyr-red",
    "discord-thumb-green",
    "discord-cyberpunk-yellow",
    "discord-toxic-glow",
    "discord-angelic-grace",
    "discord-abyssal-void",
    "discord-crimson-slayer",
    "discord-glitch-system",
    "discord-frost-bite",
    "discord-solar-flare",
    "discord-cosmic-nebula",
    "discord-phantom-spirit",
    "esports-pro",
    "stream-schedule",
    "clan-tag",
    "neon-glow",
  ].forEach((id) => legacySet.add(id));

  legacySet.forEach((id) => {
    paths.push({ slug: [id] });
  });

  return paths;
}

export async function generateMetadata({ params }) {
  const { slug } = await params;

  if (slug.length === 2) {
    const [game, banner] = slug;
    const template = getTemplate(game, banner);
    if (template) {
      const title = `Free ${template.name} Maker (4K No Watermark) | Gaming Banner`;
      const description = `Customize the ${template.name} for ${template.gameName}. Add your gamertag, adjust colors, and export high-resolution PNG channel art with safe-zone compliance.`;
      return {
        title,
        description,
        openGraph: {
          title,
          description,
          images: [{ url: template.image }],
        },
      };
    }
  }

  if (slug.length === 1) {
    const template = getTemplateByLegacyId(slug[0]);
    const title = template ? template.name : slug[0];
    return {
      title: `Customize ${title} | Gaming Banner`,
      description: `Edit and download your personalized ${title} gaming channel art. Adjust colors, text tags, and export size.`,
    };
  }

  return {
    title: "Gaming Banner Customizer | Gaming Banner",
    description: "Customize and download free 4K gaming banners.",
  };
}

export default async function CustomizePage({ params }) {
  const { slug } = await params;

  // Handle 1-segment legacy URLs -> 301 Permanent Redirect to canonical URL
  if (slug.length === 1) {
    const template = getTemplateByLegacyId(slug[0]);
    if (template) {
      permanentRedirect(`/customize/${template.game}/${template.bannerSlug}`);
    }
    // If not in registry, redirect to templates hub
    permanentRedirect("/youtube-banners");
  }

  // Handle 2-segment canonical URLs
  if (slug.length === 2) {
    const [game, banner] = slug;
    const template = getTemplate(game, banner);

    if (!template) {
      notFound();
    }

    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://gamingbanner.com",
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "YouTube Banners",
          "item": "https://gamingbanner.com/youtube-banners",
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": template.gameName,
          "item": `https://gamingbanner.com/customize/${template.game}/${template.bannerSlug}`,
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": template.name,
          "item": `https://gamingbanner.com/customize/${template.game}/${template.bannerSlug}`,
        },
      ],
    };

    const faqEntities = (template.faqs && template.faqs.length > 0)
      ? template.faqs.map((f) => ({
          "@type": "Question",
          "name": f.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": f.a,
          },
        }))
      : [
          {
            "@type": "Question",
            "name": `How do I customize the ${template.name}?`,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": `Simply enter your Gamertag into the text input box above, pick your custom font and glowing color accents, adjust the position, and click 'Download 4K PNG'. No signup or software installation is required.`,
            },
          },
          {
            "@type": "Question",
            "name": `Is this ${template.gameName} banner sized properly for YouTube and mobile?`,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": `Yes, all banner elements and central text layers are configured within the strict 1546 x 423 px safe-zone to ensure your name is never cropped on iPhones, Android devices, tablets, or desktop screens.`,
            },
          },
          {
            "@type": "Question",
            "name": "Can I use this banner on monetized Twitch and YouTube channels?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes! All downloaded banners from GamingBanner.com are completely royalty-free and watermark-free for personal and commercial gaming stream use.",
            },
          },
        ];

    const faqJsonLd = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqEntities,
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

        {/* Interactive Canvas Editor */}
        <CustomizeClient params={Promise.resolve({ id: template.id })} />

        {/* Rich Educational Publisher Section (Ultra-Attractive Bento Grid UI) */}
        <section className="bg-surface-container-lowest border-t border-outline-variant/30 py-16 px-4 md:px-8 relative overflow-hidden">
          {/* Subtle Ambient Background Glow matching template theme */}
          <div
            className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full blur-[140px] opacity-15 pointer-events-none"
            style={{ backgroundColor: template.themeColor || '#00d4ff' }}
          />

          <div className="max-w-6xl mx-auto space-y-10 relative z-10">
            
            {/* Breadcrumbs Navigation & Header */}
            <div className="flex flex-col gap-4">
              <nav className="flex items-center gap-2 text-xs text-outline font-medium">
                <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                <span className="text-outline/40">/</span>
                <Link href="/youtube-banners" className="hover:text-primary transition-colors">YouTube Banners</Link>
                <span className="text-outline/40">/</span>
                <span className="text-on-background/70 font-semibold">{template.gameName}</span>
                <span className="text-outline/40">/</span>
                <span className="text-primary font-bold">{template.name}</span>
              </nav>

              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase border shadow-sm"
                      style={{
                        backgroundColor: `${template.themeColor}15` || '#00d4ff15',
                        borderColor: `${template.themeColor}40` || '#00d4ff40',
                        color: template.themeColor || '#00d4ff'
                      }}
                    >
                      <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: template.themeColor || '#00d4ff' }} />
                      {template.gameName} Official Template
                    </span>
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-surface-container border border-outline-variant/40 text-outline">
                      {template.category}
                    </span>
                  </div>
                  <h2 className="text-3xl md:text-5xl font-black text-on-background tracking-tight">
                    About {template.name}
                  </h2>
                </div>

                {/* Quick Specs Chips */}
                <div className="flex flex-wrap items-center gap-2 text-xs">
                  <span className="px-3 py-1.5 rounded-xl bg-surface-container/80 border border-outline-variant/50 text-on-background font-data-mono flex items-center gap-1.5 shadow-sm">
                    📐 <strong>2560 × 1440</strong> 4K UHD
                  </span>
                  <span className="px-3 py-1.5 rounded-xl bg-surface-container/80 border border-outline-variant/50 text-on-background font-data-mono flex items-center gap-1.5 shadow-sm">
                    📱 <strong>1546 × 423</strong> Safe Area
                  </span>
                  <span className="px-3 py-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-semibold flex items-center gap-1.5 shadow-sm">
                    ⚡ 100% Free PNG
                  </span>
                </div>
              </div>

              <p className="text-sm md:text-base text-outline leading-relaxed max-w-4xl">
                {template.description}
              </p>
            </div>

            {/* 2-Column Bento Grid: Lore & Art (Left) + Typography & Palette (Right) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              
              {/* Left Column (7/12): Story & Art Breakdown */}
              <div className="lg:col-span-7 flex flex-col gap-6">
                
                {/* Story & Lore Card */}
                {template.story && (
                  <div
                    className="relative bg-surface-container/70 backdrop-blur-xl rounded-3xl p-6 md:p-8 border shadow-xl flex flex-col gap-4 overflow-hidden"
                    style={{ borderColor: `${template.themeColor}30` || 'rgba(255,255,255,0.1)' }}
                  >
                    <div
                      className="absolute top-0 left-0 right-0 h-1"
                      style={{ background: `linear-gradient(90deg, transparent, ${template.themeColor || '#00d4ff'}, transparent)` }}
                    />
                    <div className="flex items-center gap-2">
                      <span className="text-lg">📖</span>
                      <h3 className="text-lg font-extrabold text-on-background tracking-tight">
                        The Story Behind the Artwork
                      </h3>
                    </div>
                    <p className="text-sm text-outline leading-relaxed">
                      {template.story}
                    </p>
                  </div>
                )}

                {/* Visual Art Direction & Safe-Zone Card */}
                {template.artAnalysis && (
                  <div className="bg-surface-container/50 backdrop-blur-xl rounded-3xl p-6 md:p-8 border border-outline-variant/40 shadow-xl flex flex-col gap-4">
                    <div className="flex items-center gap-2">
                      <span className="text-lg">🎨</span>
                      <h3 className="text-lg font-extrabold text-on-background tracking-tight">
                        Visual Art Breakdown & Safe-Zone Calibration
                      </h3>
                    </div>
                    <p className="text-sm text-outline leading-relaxed">
                      {template.artAnalysis}
                    </p>
                  </div>
                )}

              </div>

              {/* Right Column (5/12): Live Font Preview & Curated Hex Palette */}
              <div className="lg:col-span-5 flex flex-col gap-6">
                
                {/* Live Font & Typography Card */}
                <div className="bg-surface-container/70 backdrop-blur-xl rounded-3xl p-6 border border-outline-variant/40 shadow-xl flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-lg">🔤</span>
                      <h3 className="text-base font-extrabold text-on-background">
                        Recommended Typography
                      </h3>
                    </div>
                    <span className="text-[10px] font-bold font-data-mono px-2 py-0.5 rounded bg-primary/10 text-primary border border-primary/20">
                      LIVE PREVIEW
                    </span>
                  </div>

                  {/* Font Display Box */}
                  <div className="bg-surface-container-lowest/80 border border-outline-variant/60 rounded-2xl p-5 text-center flex flex-col items-center justify-center gap-2 shadow-inner">
                    <span
                      className="text-2xl md:text-3xl font-bold tracking-wider"
                      style={template.textStyle || { color: template.themeColor || '#00d4ff' }}
                    >
                      {template.gamertag || 'GAMERTAG'}
                    </span>
                    <span className="text-[11px] text-outline font-data-mono">
                      {template.sub || 'OFFICIAL STREAM CHANNEL'}
                    </span>
                  </div>

                  <p className="text-xs text-outline leading-relaxed">
                    {template.fontTip || `Pair bold athletic or geometric fonts with subtle glowing text shadows to match ${template.gameName}'s competitive in-game UI.`}
                  </p>
                </div>

                {/* Curated Color Swatches Card */}
                {template.palette && template.palette.length > 0 && (
                  <div className="bg-surface-container/70 backdrop-blur-xl rounded-3xl p-6 border border-outline-variant/40 shadow-xl flex flex-col gap-4">
                    <div className="flex items-center gap-2">
                      <span className="text-lg">💎</span>
                      <h3 className="text-base font-extrabold text-on-background">
                        Curated Color Swatches
                      </h3>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      {template.palette.map((c, idx) => (
                        <div
                          key={idx}
                          className="bg-surface-container-high/40 hover:bg-surface-container-high/80 transition-all rounded-2xl p-3.5 border border-outline-variant/40 flex flex-col gap-2 group"
                        >
                          <div className="flex items-center gap-2.5">
                            <span
                              className="w-5 h-5 rounded-lg shadow-md flex-shrink-0 border border-white/20"
                              style={{ backgroundColor: c.hex }}
                            />
                            <span className="font-bold text-xs text-on-background truncate">
                              {c.name}
                            </span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="font-data-mono text-xs font-bold text-primary">
                              {c.hex}
                            </span>
                          </div>
                          <span className="text-[10px] text-outline leading-tight">
                            {c.desc}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

              </div>

            </div>

            {/* Technical Safe-Zone Sizing Chart (Full Width Glass Table) */}
            <div className="bg-surface-container/60 backdrop-blur-xl rounded-3xl p-6 md:p-8 border border-outline-variant/40 shadow-2xl space-y-4">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 border-b border-outline-variant/30 pb-4">
                <div>
                  <h3 className="text-xl font-extrabold text-on-background flex items-center gap-2">
                    📐 Safe-Zone & Resolution Specifications
                  </h3>
                  <p className="text-xs text-outline mt-1">
                    Calibrated strictly to YouTube, Twitch, and Discord official aspect ratio display guidelines.
                  </p>
                </div>
                <span className="text-xs font-bold font-data-mono px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 self-start md:self-auto">
                  ✓ ZERO MOBILE CROPPING
                </span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs md:text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-outline-variant text-outline font-data-mono text-xs uppercase tracking-wider">
                      <th className="py-3 px-4">Viewing Device</th>
                      <th className="py-3 px-4">Full Resolution</th>
                      <th className="py-3 px-4">Center Safe-Zone</th>
                      <th className="py-3 px-4">Aspect Ratio</th>
                      <th className="py-3 px-4 text-right">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-outline-variant/30 text-on-surface-variant font-medium">
                    <tr className="hover:bg-surface-container-high/40 transition-colors">
                      <td className="py-4 px-4 font-bold text-on-background flex items-center gap-2">
                        <span>📱</span> Mobile Phones (iOS / Android)
                      </td>
                      <td className="py-4 px-4 font-data-mono">2560 × 1440 px</td>
                      <td className="py-4 px-4 font-data-mono text-primary font-bold">1546 × 423 px</td>
                      <td className="py-4 px-4">16:9 Mobile Crop</td>
                      <td className="py-4 px-4 text-right">
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                          CORE SAFE
                        </span>
                      </td>
                    </tr>
                    <tr className="hover:bg-surface-container-high/40 transition-colors">
                      <td className="py-4 px-4 font-bold text-on-background flex items-center gap-2">
                        <span>💻</span> Desktop & Laptop Browsers
                      </td>
                      <td className="py-4 px-4 font-data-mono">2560 × 423 px</td>
                      <td className="py-4 px-4 font-data-mono text-primary font-bold">1546 × 423 px</td>
                      <td className="py-4 px-4">Wide Strip</td>
                      <td className="py-4 px-4 text-right">
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-blue-500/20 text-blue-400 border border-blue-500/30">
                          EXTENDED
                        </span>
                      </td>
                    </tr>
                    <tr className="hover:bg-surface-container-high/40 transition-colors">
                      <td className="py-4 px-4 font-bold text-on-background flex items-center gap-2">
                        <span>📟</span> Tablets & iPads
                      </td>
                      <td className="py-4 px-4 font-data-mono">1855 × 423 px</td>
                      <td className="py-4 px-4 font-data-mono text-primary font-bold">1546 × 423 px</td>
                      <td className="py-4 px-4">Tablet Frame</td>
                      <td className="py-4 px-4 text-right">
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-purple-500/20 text-purple-400 border border-purple-500/30">
                          TABLET SAFE
                        </span>
                      </td>
                    </tr>
                    <tr className="hover:bg-surface-container-high/40 transition-colors">
                      <td className="py-4 px-4 font-bold text-on-background flex items-center gap-2">
                        <span>📺</span> 4K Smart TVs & TV Apps
                      </td>
                      <td className="py-4 px-4 font-data-mono">2560 × 1440 px</td>
                      <td className="py-4 px-4 font-data-mono text-primary font-bold">2560 × 1440 px</td>
                      <td className="py-4 px-4">16:9 Full View</td>
                      <td className="py-4 px-4 text-right">
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-500/20 text-amber-400 border border-amber-500/30">
                          FULL 4K
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Quick 3-Step Customization Workflow Cards */}
            <div>
              <div className="text-center mb-6">
                <span className="text-xs font-bold font-data-mono text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 px-3 py-1 rounded-full">
                  Quick Start
                </span>
                <h3 className="text-2xl font-extrabold text-on-background mt-2">
                  Create Your Custom 4K Banner in 3 Simple Steps
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-surface-container/60 backdrop-blur-xl rounded-3xl p-6 border border-outline-variant/40 shadow-xl flex flex-col gap-3 group hover:border-primary/50 transition-all">
                  <div className="w-10 h-10 rounded-2xl bg-primary/10 border border-primary/30 text-primary font-black flex items-center justify-center text-base shadow-sm">
                    1
                  </div>
                  <h4 className="font-bold text-on-background text-base">Type Your Gamertag</h4>
                  <p className="text-xs text-outline leading-relaxed">
                    Replace default text in the sidebar with your channel handle, clan name, or esports alias.
                  </p>
                </div>

                <div className="bg-surface-container/60 backdrop-blur-xl rounded-3xl p-6 border border-outline-variant/40 shadow-xl flex flex-col gap-3 group hover:border-primary/50 transition-all">
                  <div className="w-10 h-10 rounded-2xl bg-primary/10 border border-primary/30 text-primary font-black flex items-center justify-center text-base shadow-sm">
                    2
                  </div>
                  <h4 className="font-bold text-on-background text-base">Tune Glowing Accents</h4>
                  <p className="text-xs text-outline leading-relaxed">
                    Tweak glowing colors, font families, letter spacing, and shadow intensities to match your channel branding.
                  </p>
                </div>

                <div className="bg-surface-container/60 backdrop-blur-xl rounded-3xl p-6 border border-outline-variant/40 shadow-xl flex flex-col gap-3 group hover:border-primary/50 transition-all">
                  <div className="w-10 h-10 rounded-2xl bg-primary/10 border border-primary/30 text-primary font-black flex items-center justify-center text-base shadow-sm">
                    3
                  </div>
                  <h4 className="font-bold text-on-background text-base">Export 4K PNG</h4>
                  <p className="text-xs text-outline leading-relaxed">
                    Click Download Free to instantly generate an uncompressed, lossless 2560x1440 PNG with zero watermarks.
                  </p>
                </div>
              </div>
            </div>

            {/* High-Impact SEO / AEO / GEO 5-Question FAQ Hub */}
            <div className="space-y-6 pt-4">
              <div className="flex flex-col gap-1">
                <span className="text-xs font-bold font-data-mono text-primary uppercase tracking-widest">
                  Frequently Asked Questions
                </span>
                <h3 className="text-2xl md:text-3xl font-extrabold text-on-background tracking-tight">
                  {template.gameName} Channel Art & Setup Guide
                </h3>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {(template.faqs || []).map((faq, idx) => (
                  <div
                    key={idx}
                    className="bg-surface-container/60 backdrop-blur-xl rounded-2xl p-6 border border-outline-variant/40 hover:border-outline-variant transition-all shadow-md flex flex-col gap-2"
                  >
                    <div className="flex items-center gap-3">
                      {faq.tag && (
                        <span className="px-2 py-0.5 rounded text-[10px] font-extrabold font-data-mono bg-primary/10 text-primary border border-primary/20 flex-shrink-0">
                          {faq.tag}
                        </span>
                      )}
                      <h4 className="font-bold text-sm md:text-base text-on-background">
                        {faq.q}
                      </h4>
                    </div>
                    <p className="text-xs md:text-sm text-outline leading-relaxed pl-0 md:pl-1">
                      {faq.a}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        <Footer />
      </>
    );
  }

  notFound();
}
