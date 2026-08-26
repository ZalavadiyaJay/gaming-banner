// src/app/guides/page.js
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Gaming Banner Design Guides & Dimension Specifications 2026",
  description: "Complete technical dimension specifications, safe zones, upload tutorials, OBS setups, and typography guidelines for YouTube, Twitch, Kick, Discord, and Twitter.",
  alternates: {
    canonical: "https://gamingbanner.com/guides",
  },
};

export default function GuidesHub() {
  const guides = [
    {
      slug: "youtube-banner-size",
      title: "YouTube Banner Size & Safe Zones (2560 × 1440)",
      desc: "Exact dimensions, mobile safe zones (1546×423 px), and 4K TV scaling for YouTube channel art.",
      category: "Platform Specs",
      readTime: "7 min",
      icon: "🔴",
      color: "border-t-[#ff0000]",
    },
    {
      slug: "twitch-banner-size",
      title: "Twitch Banner Size (1920×1080 vs 1200×480)",
      desc: "Video player offline screen and profile header specifications for Twitch broadcasters.",
      category: "Platform Specs",
      readTime: "8 min",
      icon: "🟣",
      color: "border-t-[#9146ff]",
    },
    {
      slug: "discord-banner-size",
      title: "Discord Server & Profile Banner Size (960 × 540)",
      desc: "Server header banner, invite splash (1080p), and Nitro profile banner dimensions.",
      category: "Platform Specs",
      readTime: "6 min",
      icon: "🔵",
      color: "border-t-[#5865f2]",
    },
    {
      slug: "twitter-header-size",
      title: "Twitter / X Header Size (1500 × 500)",
      desc: "Header cover dimensions, 3:1 panoramic ratios, and bottom-left avatar overlap zones.",
      category: "Platform Specs",
      readTime: "6 min",
      icon: "🐦",
      color: "border-t-[#1da1f2]",
    },
    {
      slug: "kick-banner-size",
      title: "Kick.com Banner Size (1920 × 1080) Guide",
      desc: "Channel header specifications, mobile web viewports, and avatar placement on Kick.",
      category: "Platform Specs",
      readTime: "6 min",
      icon: "🟢",
      color: "border-t-[#53fc18]",
    },
    {
      slug: "obs-stream-overlays-dimensions",
      title: "OBS Stream Overlays Dimensions (1080p, 1440p, 4K)",
      desc: "Base canvas vs. output scaled resolution, camera frames, and scene hierarchy.",
      category: "Technical Setup",
      readTime: "9 min",
      icon: "🎥",
      color: "border-t-[#00d4ff]",
    },
    {
      slug: "twitch-panels-dimensions-and-markdown",
      title: "Twitch Panels Size (320 × 160) & Markdown",
      desc: "Design modular 320×160 info tiles and write markdown for clickable bio links.",
      category: "Platform Specs",
      readTime: "7 min",
      icon: "📌",
      color: "border-t-[#9146ff]",
    },
    {
      slug: "youtube-thumbnail-size-and-click-through-rate",
      title: "YouTube Thumbnail Size (1280 × 720) & CTR Guide",
      desc: "High-CTR gaming thumbnail design rules, timestamp buffers, and contrast tips.",
      category: "Design Theory",
      readTime: "8 min",
      icon: "🖼️",
      color: "border-t-[#ff0000]",
    },
    {
      slug: "tiktok-and-youtube-shorts-safe-zones",
      title: "TikTok & Shorts 9:16 Safe Zones (1080 × 1920)",
      desc: "Vertical video safe margins preventing UI buttons from blocking gaming action.",
      category: "Platform Specs",
      readTime: "7 min",
      icon: "📱",
      color: "border-t-[#ec4899]",
    },
    {
      slug: "how-to-make-gaming-banner",
      title: "How to Make a Gaming Banner Without Photoshop",
      desc: "Step-by-step masterclass on designing 4K channel art in your browser for free.",
      category: "Tutorials",
      readTime: "9 min",
      icon: "⚡",
      color: "border-t-[#10b981]",
    },
    {
      slug: "upload-youtube-banner",
      title: "How to Upload & Change YouTube Banner (2026)",
      desc: "Complete walkthrough for uploading channel art on PC, Mac, iPhone, and Android.",
      category: "Tutorials",
      readTime: "5 min",
      icon: "📤",
      color: "border-t-[#10b981]",
    },
    {
      slug: "gaming-fonts",
      title: "Best Gaming Fonts for Banners & Twitch Overlays",
      desc: "Top free esports typography, italic display fonts, and monospace typefaces.",
      category: "Design Theory",
      readTime: "8 min",
      icon: "🔤",
      color: "border-t-[#f59e0b]",
    },
    {
      slug: "gaming-color-palettes",
      title: "Gaming Color Palettes: Neon, Cyberpunk & Tactical",
      desc: "Curated 4-swatch hex color codes and psychology of channel brand aesthetics.",
      category: "Design Theory",
      readTime: "7 min",
      icon: "🎨",
      color: "border-t-[#f59e0b]",
    },
    {
      slug: "esports-jersey-and-social-banner-branding",
      title: "Esports Team Branding & Roster Headers",
      desc: "Principles of professional team identities across social media and merchandise.",
      category: "Design Theory",
      readTime: "8 min",
      icon: "🏆",
      color: "border-t-[#00d4ff]",
    },
    {
      slug: "png-vs-webp-vs-jpeg-for-gaming-banners",
      title: "PNG vs WebP vs JPEG for Gaming Graphics",
      desc: "Compression analysis, 24-bit RGB color banding, and lossless export.",
      category: "Technical Setup",
      readTime: "7 min",
      icon: "💾",
      color: "border-t-[#10b981]",
    },
    {
      slug: "twitch-emotes-and-sub-badges-dimensions",
      title: "Twitch Emotes & Sub Badges Size (28px, 56px, 112px)",
      desc: "Pixel grid dimensions, transparency, and auto-resize upload rules.",
      category: "Platform Specs",
      readTime: "7 min",
      icon: "🎭",
      color: "border-t-[#9146ff]",
    }
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
        "name": "Guides",
        "item": "https://gamingbanner.com/guides"
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

      <main className="flex-1 min-h-screen pt-24 pb-16 px-4 md:px-8 max-w-[1440px] mx-auto flex flex-col gap-10">
        {/* Page Hero */}
        <section className="text-center py-6 border-b border-outline-variant/60 flex flex-col items-center gap-3">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase bg-primary-container/15 text-primary-container border border-primary-container/30">
              📚 Design Masterclasses 2026
            </span>
            <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-surface-container border border-outline-variant/40 text-outline font-data-mono">
              16 Comprehensive Guides
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-on-background tracking-tight">
            Gaming Banner Design Guides & Specifications
          </h1>
          <p className="max-w-[750px] text-xs md:text-sm text-outline leading-relaxed">
            Verified safe-zone measurements, responsive viewport scaling, OBS broadcast setups, and esports color theory written by professional broadcast designers.
          </p>
        </section>

        {/* Guides Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {guides.map((g, idx) => (
            <Link
              key={idx}
              href={`/guides/${g.slug}`}
              className={`bg-surface-container/60 border border-outline-variant/50 hover:border-primary-container/70 rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 hover:scale-[1.02] shadow-lg hover:shadow-primary-container/10 group ${g.color} border-t-4`}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-2xl">{g.icon}</span>
                  <div className="flex items-center gap-1.5">
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-surface-container-high text-outline">
                      {g.category}
                    </span>
                    <span className="text-[10px] font-data-mono text-outline/80">
                      ⏱️ {g.readTime}
                    </span>
                  </div>
                </div>

                <h3 className="text-base font-extrabold text-on-background group-hover:text-primary-container transition-colors line-clamp-2 leading-snug">
                  {g.title}
                </h3>
                <p className="text-xs text-outline mt-2 line-clamp-3 leading-relaxed">
                  {g.desc}
                </p>
              </div>

              <div className="flex items-center justify-between pt-4 mt-4 border-t border-outline-variant/30 text-xs font-bold text-primary-container">
                <span>Read Masterclass</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </Link>
          ))}
        </section>
      </main>

      <Footer />
    </>
  );
}
