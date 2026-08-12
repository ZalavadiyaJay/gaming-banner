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

    const faqJsonLd = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
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
      ],
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

        {/* Rich Educational Publisher Section (AdSense Compliance & High SEO Authority) */}
        <section className="bg-surface-container-lowest border-t border-outline-variant/30 py-16 px-4 md:px-8">
          <div className="max-w-5xl mx-auto space-y-12">
            
            {/* Breadcrumbs Navigation */}
            <nav className="flex items-center gap-2 text-xs text-outline font-medium">
              <Link href="/" className="hover:text-primary transition-colors">Home</Link>
              <span>/</span>
              <Link href="/youtube-banners" className="hover:text-primary transition-colors">YouTube Banners</Link>
              <span>/</span>
              <span className="text-on-background font-semibold">{template.gameName}</span>
              <span>/</span>
              <span className="text-primary font-bold">{template.name}</span>
            </nav>

            {/* Header Overview */}
            <div>
              <span className="text-xs font-bold font-data-mono text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 px-3 py-1 rounded-full">
                {template.gameName} Official Template
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-on-background mt-4 tracking-tight">
                About the {template.name} Design
              </h2>
              <p className="text-base text-outline leading-relaxed mt-3">
                {template.description}
              </p>
            </div>

            {/* Technical Safe-Zone Sizing Chart */}
            <div className="bg-surface-container rounded-2xl p-6 md:p-8 border border-outline-variant/50 shadow-md">
              <h3 className="text-xl font-bold text-on-background flex items-center gap-2">
                📐 Technical Safe-Zone & Resolution Specifications
              </h3>
              <p className="text-sm text-outline mt-1 mb-6">
                Our studio automatically aligns text layers to match YouTube, Twitch, and Discord aspect ratio requirements.
              </p>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-outline-variant text-outline font-data-mono text-xs uppercase tracking-wider">
                      <th className="py-3 px-4">Display Platform</th>
                      <th className="py-3 px-4">Full Resolution</th>
                      <th className="py-3 px-4">Center Safe-Zone</th>
                      <th className="py-3 px-4">Aspect Ratio</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-outline-variant/30 text-on-surface-variant font-medium">
                    <tr className="hover:bg-surface-container-high/50 transition-colors">
                      <td className="py-3.5 px-4 font-bold text-on-background">YouTube Channel Art</td>
                      <td className="py-3.5 px-4 font-data-mono">2560 × 1440 px</td>
                      <td className="py-3.5 px-4 font-data-mono text-primary">1546 × 423 px</td>
                      <td className="py-3.5 px-4">16:9 Wide</td>
                    </tr>
                    <tr className="hover:bg-surface-container-high/50 transition-colors">
                      <td className="py-3.5 px-4 font-bold text-on-background">Twitch Offline Screen</td>
                      <td className="py-3.5 px-4 font-data-mono">1920 × 1080 px</td>
                      <td className="py-3.5 px-4 font-data-mono text-primary">1920 × 1080 px</td>
                      <td className="py-3.5 px-4">16:9 Standard</td>
                    </tr>
                    <tr className="hover:bg-surface-container-high/50 transition-colors">
                      <td className="py-3.5 px-4 font-bold text-on-background">Twitter / X Header</td>
                      <td className="py-3.5 px-4 font-data-mono">1500 × 500 px</td>
                      <td className="py-3.5 px-4 font-data-mono text-primary">1200 × 400 px</td>
                      <td className="py-3.5 px-4">3:1 Ultra-wide</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Step-by-Step Customization Guide */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-surface-container/60 rounded-xl p-6 border border-outline-variant/40">
                <span className="w-8 h-8 rounded-full bg-primary/20 text-primary font-bold flex items-center justify-center text-sm mb-3">
                  1
                </span>
                <h4 className="font-bold text-on-background text-base">Type Your Gamertag</h4>
                <p className="text-xs text-outline leading-relaxed mt-2">
                  Replace default text with your channel handle, clan name, or esports alias in the Studio sidebar.
                </p>
              </div>

              <div className="bg-surface-container/60 rounded-xl p-6 border border-outline-variant/40">
                <span className="w-8 h-8 rounded-full bg-primary/20 text-primary font-bold flex items-center justify-center text-sm mb-3">
                  2
                </span>
                <h4 className="font-bold text-on-background text-base">Tune Glowing Accents</h4>
                <p className="text-xs text-outline leading-relaxed mt-2">
                  Match your channel branding by tweaking font families, neon glow shadows, font sizes, and opacity.
                </p>
              </div>

              <div className="bg-surface-container/60 rounded-xl p-6 border border-outline-variant/40">
                <span className="w-8 h-8 rounded-full bg-primary/20 text-primary font-bold flex items-center justify-center text-sm mb-3">
                  3
                </span>
                <h4 className="font-bold text-on-background text-base">Export 4K PNG</h4>
                <p className="text-xs text-outline leading-relaxed mt-2">
                  Click download to render a crisp, uncompressed lossless PNG file with zero watermark.
                </p>
              </div>
            </div>

            {/* Creator Pro Tips & Color Guide */}
            <div className="bg-surface-container-high/40 rounded-2xl p-6 md:p-8 border border-outline-variant/40">
              <h3 className="text-lg font-bold text-on-background mb-3">
                💡 Pro Tip for {template.gameName} Creators
              </h3>
              <p className="text-sm text-outline leading-relaxed">
                When designing your channel layout, keep high-contrast fonts (such as <strong>Orbitron</strong>, <strong>Impact</strong>, or <strong>Rajdhani</strong>) paired with bright cyan or neon yellow accent glows. This ensures your gamertag remains readable even when viewed in dark mode on mobile screens.
              </p>
            </div>

          </div>
        </section>

        <Footer />
      </>
    );
  }

  notFound();
}
