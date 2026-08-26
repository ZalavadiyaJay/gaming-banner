// src/app/blog/page.js
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Gaming Brand Design & Streaming Growth Blog 2026 | Gaming Banner",
  description: "Read expert guides, design trends, OBS broadcast setups, and growth strategies for streamers and content creators written by esports visual designers.",
  alternates: {
    canonical: "https://gamingbanner.com/blog",
  },
};

export default function BlogHub() {
  const posts = [
    {
      slug: "complete-twitch-stream-branding-guide-2026",
      title: "Complete Twitch Stream Branding Guide: From Zero to Affiliate",
      date: "August 2026",
      readTime: "12 min read",
      author: "Alex Rivers",
      excerpt: "Step-by-step masterclass on designing matching 1080p offline banners, 1200x480 profile covers, 320x160 panels, and OBS starting scenes.",
      category: "Streaming Setup",
      featured: true,
    },
    {
      slug: "best-youtube-banner-ideas-2025",
      title: "Top 10 YouTube Gaming Banner Ideas & Layout Trends 2026",
      date: "August 2026",
      readTime: "9 min read",
      author: "Alex Rivers",
      excerpt: "Discover the leading tactical grids, cyberpunk neon kanji, and cozy voxel aesthetics top gaming creators use to scale their channel art.",
      category: "Design Trends",
    },
    {
      slug: "how-to-grow-your-gaming-channel",
      title: "How to Grow Your Gaming Channel: Algorithmic CTR & Visual Branding",
      date: "August 2026",
      readTime: "10 min read",
      author: "Alex Rivers",
      excerpt: "Proven branding strategies, thumbnail safe-zone hooks, and community retention rules to convert casual viewers into loyal subscribers.",
      category: "Channel Growth",
    },
    {
      slug: "best-obs-settings-for-streaming",
      title: "Best OBS Settings for Streaming: NVENC, Bitrates & 1080p60 Guide",
      date: "August 2026",
      readTime: "11 min read",
      author: "Marcus Vance",
      excerpt: "Configure OBS Studio for lag-free gaming broadcasts. Platform bitrate formulas for YouTube, Twitch, and Kick with GPU hardware encoding.",
      category: "Technical Setup",
    },
    {
      slug: "youtube-banner-safe-zone-mobile-tv-desktop",
      title: "YouTube Banner Safe Zone Masterclass: 4K TVs, Tablets & Mobile",
      date: "August 2026",
      readTime: "9 min read",
      author: "Alex Rivers",
      excerpt: "Master the 1546x423 px safe area and responsive viewport scaling across 65-inch Smart TVs, iPads, and Android/iOS smartphones.",
      category: "Platform Specs",
    },
    {
      slug: "best-gaming-color-palettes-for-streamers",
      title: "Color Theory for Streamers: Cyberpunk Neon, Gunmetal & Lo-Fi",
      date: "August 2026",
      readTime: "8 min read",
      author: "Elena Rostova",
      excerpt: "Learn the 60-30-10 rule and dark-mode psychology in gaming branding. Explore curated 4-swatch hex color codes for esports channels.",
      category: "Design Theory",
    },
    {
      slug: "how-to-setup-obs-starting-soon-scenes",
      title: "How to Setup OBS Starting Soon & BRB Scenes with Stinger Transitions",
      date: "August 2026",
      readTime: "9 min read",
      author: "Marcus Vance",
      excerpt: "A complete walkthrough for adding 1080p intermission screens, countdown timers, and animated stinger transitions in OBS Studio.",
      category: "Streaming Setup",
    },
    {
      slug: "how-to-design-esports-clan-logo-and-header",
      title: "Esports Clan Branding: Roster Headers, Logos & Team Banners",
      date: "August 2026",
      readTime: "8 min read",
      author: "Alex Rivers",
      excerpt: "How competitive gaming organizations design unified brand systems across Twitter/X, YouTube, Discord, and tournament broadcasts.",
      category: "Design Theory",
    },
    {
      slug: "free-vs-paid-banner-makers",
      title: "Free vs Paid Gaming Banner Makers: Photoshop vs Canva Matrix",
      date: "August 2026",
      readTime: "8 min read",
      author: "Marcus Vance",
      excerpt: "An objective comparison matrix evaluating graphic design workflows, cost, watermark restrictions, and 4K lossless rendering quality.",
      category: "Tools & Software",
    },
    {
      slug: "cool-gaming-names-generator-tips",
      title: "250+ Cool Gaming Names: Gamertag Generator Tips & Clan Formulas",
      date: "August 2026",
      readTime: "9 min read",
      author: "Alex Rivers",
      excerpt: "Curated list of 250+ cool gamertags grouped by genre (Tactical, Cyberpunk, Anime, Fantasy) plus expert clan naming formulas.",
      category: "Branding",
    },
    {
      slug: "kick-vs-twitch-streaming-banner-sizes",
      title: "Kick vs Twitch Banner Sizes & Channel Graphics Comparison 2026",
      date: "August 2026",
      readTime: "7 min read",
      author: "Marcus Vance",
      excerpt: "Comprehensive breakdown of graphic dimensions, file limits, and layout differences between Kick.com and Twitch live platforms.",
      category: "Platform Specs",
    },
    {
      slug: "discord-server-banner-and-nitro-dimensions",
      title: "Complete Guide to Discord Server Headers, Nitro Banners & Role Icons",
      date: "August 2026",
      readTime: "8 min read",
      author: "Alex Rivers",
      excerpt: "Official 960x540 server banner dimensions, boost level requirements, invite splashes, and animated Nitro profile headers.",
      category: "Platform Specs",
    },
    {
      slug: "top-10-gaming-fonts-for-banners-and-thumbnails",
      title: "Top 10 Gaming Typography & Esports Font Pairing Formulas",
      date: "August 2026",
      readTime: "9 min read",
      author: "Alex Rivers",
      excerpt: "Explore the best free fonts for gaming banners, logos, and YouTube thumbnails with quad-directional drop shadow formulas.",
      category: "Design Theory",
    },
    {
      slug: "how-to-grow-on-twitch-without-followers",
      title: "How to Grow on Twitch in 2026: Discovery Funnels for Small Streamers",
      date: "August 2026",
      readTime: "11 min read",
      author: "Marcus Vance",
      excerpt: "Escape the 0-viewer trap. How to leverage vertical gaming clips on TikTok/Shorts and professional channel art to build a community.",
      category: "Channel Growth",
    },
    {
      slug: "free-tools-every-gaming-streamer-needs",
      title: "The Ultimate Free Creator Stack: Audio Filters, Overlays & Banners",
      date: "August 2026",
      readTime: "10 min read",
      author: "Marcus Vance",
      excerpt: "The 10 essential 100% free tools every live broadcaster needs in 2026 for audio processing, graphics, and automated chat bots.",
      category: "Tools & Software",
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
        "name": "Blog",
        "item": "https://gamingbanner.com/blog"
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
              ✍️ Esports Publishing & Tutorials
            </span>
            <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-surface-container border border-outline-variant/40 text-outline font-data-mono">
              15 Masterclasses
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-on-background tracking-tight">
            Gaming Channel Branding & Streaming Blog
          </h1>
          <p className="max-w-[750px] text-xs md:text-sm text-outline leading-relaxed">
            In-depth guides, design trend analyses, OBS broadcast optimization, and audience growth strategies for gaming creators and esports teams.
          </p>
        </section>

        {/* Featured Post Card (Top Hero) */}
        {posts[0] && (
          <div className="bg-surface-container/70 border-2 border-primary-container/40 rounded-3xl p-6 md:p-10 shadow-2xl backdrop-blur-md flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="flex-1 space-y-4">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-primary-container text-on-primary-container">
                  ⭐ Featured Masterclass
                </span>
                <span className="text-xs text-outline font-data-mono">
                  ⏱️ {posts[0].readTime} • By {posts[0].author}
                </span>
              </div>
              <h2 className="text-2xl md:text-4xl font-extrabold text-on-background hover:text-primary-container transition-colors leading-tight">
                <Link href={`/blog/${posts[0].slug}`}>{posts[0].title}</Link>
              </h2>
              <p className="text-xs md:text-sm text-outline leading-relaxed line-clamp-3">
                {posts[0].excerpt}
              </p>
              <div className="pt-2">
                <Link
                  href={`/blog/${posts[0].slug}`}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary-container text-on-primary-container rounded-xl font-extrabold text-xs hover:bg-primary-container/90 transition-all shadow-md shadow-primary-container/20"
                >
                  <span>Read Full Masterclass</span>
                  <span>→</span>
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Blog Posts Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.slice(1).map((post, idx) => (
            <Link
              key={idx}
              href={`/blog/${post.slug}`}
              className="bg-surface-container/60 border border-outline-variant/50 hover:border-primary-container/60 rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 hover:scale-[1.02] shadow-lg hover:shadow-primary-container/10 group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3 text-[11px] font-data-mono text-outline">
                  <span className="px-2.5 py-0.5 rounded-md font-bold uppercase bg-surface-container-high text-primary-container border border-primary-container/20">
                    {post.category}
                  </span>
                  <span>⏱️ {post.readTime}</span>
                </div>

                <h3 className="text-base font-extrabold text-on-background group-hover:text-primary-container transition-colors line-clamp-2 leading-snug">
                  {post.title}
                </h3>
                <p className="text-xs text-outline mt-2 line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </p>
              </div>

              <div className="flex items-center justify-between pt-4 mt-4 border-t border-outline-variant/30 text-xs font-bold text-outline group-hover:text-primary-container">
                <span className="font-data-mono text-[11px]">By {post.author}</span>
                <span className="group-hover:translate-x-1 transition-transform">Read Article →</span>
              </div>
            </Link>
          ))}
        </section>
      </main>

      <Footer />
    </>
  );
}
