import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CategoryCatalog from "@/components/CategoryCatalog";

export const metadata = {
  title: "Free Twitter/X Gaming Headers & Banners | Gaming Banner",
  description: "Create free gaming headers for Twitter/X profiles. Pre-configured 1500 x 500 px dimensions with avatar safe zones and glowing esports typography.",
};

export default function TwitterHeaders() {

  const templates = [
    { id: "esports-pro", name: "Tactical Reticle Pro", category: "Esports", desc: "Dark graphite layout with custom team tags and aiming reticles", style: { background: "radial-gradient(circle at 90% 50%, rgba(0, 212, 255, 0.18) 0%, transparent 60%), linear-gradient(135deg, #111827 0%, #030712 100%)", textShadow: "0 0 16px rgba(0, 212, 255, 0.6)" } },
    { id: "stream-schedule", name: "Stream Schedule Minimal", category: "Minimalist", desc: "Clean right-side grid for stream schedule and social handles", style: { background: "radial-gradient(circle at 80% 50%, rgba(139, 92, 246, 0.18) 0%, transparent 60%), linear-gradient(135deg, #1e1b4b 0%, #030712 100%)", borderRight: "4px solid rgba(139, 92, 246, 0.5)" } },
    { id: "clan-tag", name: "Clan Roster Crimson", category: "Esports", desc: "Aggressive red speed streaks with military carbon mesh textures", style: { background: "radial-gradient(circle at 90% 50%, rgba(239, 68, 68, 0.2) 0%, transparent 60%), linear-gradient(135deg, #1f1015 0%, #090204 100%)" } },
    { id: "neon-glow", name: "Cyberpunk Neon Kanji", category: "Neon", desc: "Vibrant electric cyan and magenta flares on obsidian slate", style: { background: "radial-gradient(circle at 100% 50%, rgba(0, 212, 255, 0.2) 0%, transparent 60%), linear-gradient(135deg, #09090b 0%, #1e1b4b 100%)", color: "#00d4ff" } },
    { id: "glacial-frost", name: "Glacial Frost Speed", category: "Tactical", desc: "Sub-zero ice cyan crystals and clean geometric telemetry data", style: { background: "radial-gradient(circle at 90% 50%, rgba(6, 182, 212, 0.2) 0%, transparent 60%), linear-gradient(135deg, #031e2b 0%, #020b10 100%)" } },
    { id: "synth-sunset", name: "Synthwave Sunset 80s", category: "Synthwave", desc: "Retro neon magenta grid horizon with high-contrast gamer tag", style: { background: "radial-gradient(circle at 80% 80%, rgba(236, 72, 153, 0.25) 0%, transparent 60%), linear-gradient(135deg, #240a2b 0%, #060209 100%)" } },
    { id: "acid-biohazard", name: "Toxic Emerald Hazard", category: "Neon", desc: "Vibrant radioactive emerald smoke trails and warning hazard bands", style: { background: "radial-gradient(circle at 85% 50%, rgba(16, 185, 129, 0.22) 0%, transparent 60%), linear-gradient(135deg, #052316 0%, #020c07 100%)" } },
    { id: "dark-singularity", name: "Abyssal Singularity", category: "Dark", desc: "Deep space cosmic gravitational lens with glowing star dust", style: { background: "radial-gradient(circle at 75% 50%, rgba(99, 102, 241, 0.2) 0%, transparent 60%), linear-gradient(135deg, #0f0c29 0%, #030208 100%)" } },
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
        "name": "Twitter Headers",
        "item": "https://gamingbanner.com/twitter-headers"
      }
    ]
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the official Twitter / X header size for gamers?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The recommended size for a Twitter/X header is 1500 x 500 pixels (3:1 aspect ratio). Keep all text and important graphics inside the safe zone (1200 x 400 pixels) to avoid avatar obstruction."
        }
      },
      {
        "@type": "Question",
        "name": "How do I prevent my Twitter profile picture from blocking my header text?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Your circular profile avatar covers the bottom-left area (approximately 400x200 pixels) on mobile and desktop. Always align your gamertag, sponsors, and social handles toward the center or right side of the canvas."
        }
      },
      {
        "@type": "Question",
        "name": "What file format is best for Twitter/X headers?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Lossless PNG format is strongly recommended. Twitter compresses JPG files heavily, which can cause artifacts around glowing text and sharp vector logos. Our generator exports uncompressed 4K PNG files."
        }
      },
      {
        "@type": "Question",
        "name": "Are these Twitter gaming headers free for commercial use?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! All headers created on GamingBanner are 100% free with no watermarks and full commercial rights for content creators and esports organizations."
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
            Free Twitter/X Gaming Header Maker (1500×500 Safe-Zone)
          </h1>
          <p className="max-w-[800px] text-xs md:text-sm text-outline leading-relaxed">
            Generate professional esports headers and gaming banners for your Twitter/X profile. Pre-calibrated for official 1500×500 px dimensions with avatar blindspot protection and 100% free lossless PNG downloads.
          </p>
        </section>

        {/* Category Catalog Grid with Game Filter Pills */}
        <CategoryCatalog templates={templates} />

        {/* Deep Educational Publisher Section (Anti-Thin Content & High Authority) */}
        <section className="max-w-[960px] mx-auto w-full py-12 border-t border-outline-variant/60 flex flex-col gap-10">
          
          {/* Header Overview */}
          <div>
            <span className="text-xs font-bold font-data-mono text-primary-container uppercase tracking-widest bg-primary-container/10 border border-primary-container/20 px-3 py-1 rounded-full">
              Twitter / X Profile Standards 2025
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-on-background mt-4">
              Complete Guide to Twitter/X Gaming Headers & Safe Zones
            </h2>
            <p className="text-sm text-outline leading-relaxed mt-2">
              Your Twitter/X banner is the first visual element visitors see when checking your gaming profile, clan roster, or tournament clips. Because Twitter/X places your circular profile photo over the bottom-left corner of the header, keeping typography aligned to the center and right is critical for professional channel presentation.
            </p>
          </div>

          {/* Technical Resolution Table */}
          <div className="bg-surface-container rounded-2xl p-6 border border-outline-variant/50 shadow-md">
            <h3 className="text-lg font-bold text-on-background flex items-center gap-2 mb-2">
              📐 Official Twitter/X Graphic Specifications
            </h3>
            <p className="text-xs text-outline mb-6">
              Follow these exact dimension standards to prevent compression blur and awkward avatar clipping across iOS, Android, and Desktop web apps.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="border-b border-outline-variant text-outline font-data-mono uppercase tracking-wider">
                    <th className="py-3 px-4">Twitter Asset Type</th>
                    <th className="py-3 px-4">Optimal Resolution</th>
                    <th className="py-3 px-4">Safe Area</th>
                    <th className="py-3 px-4">Max File Size</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline-variant/30 text-on-surface-variant font-medium">
                  <tr className="hover:bg-surface-container-high/50 transition-colors">
                    <td className="py-3 px-4 font-bold text-on-background">Profile Header Banner</td>
                    <td className="py-3 px-4 font-data-mono text-primary-container">1500 × 500 px</td>
                    <td className="py-3 px-4 font-data-mono text-primary-container">1200 × 400 px</td>
                    <td className="py-3 px-4">5.0 MB (PNG/JPG)</td>
                  </tr>
                  <tr className="hover:bg-surface-container-high/50 transition-colors">
                    <td className="py-3 px-4 font-bold text-on-background">Profile Photo Avatar</td>
                    <td className="py-3 px-4 font-data-mono text-primary-container">400 × 400 px</td>
                    <td className="py-3 px-4 font-data-mono text-primary-container">Circular Cutout</td>
                    <td className="py-3 px-4">2.0 MB</td>
                  </tr>
                  <tr className="hover:bg-surface-container-high/50 transition-colors">
                    <td className="py-3 px-4 font-bold text-on-background">In-Stream Clip Image</td>
                    <td className="py-3 px-4 font-data-mono text-primary-container">1200 × 675 px</td>
                    <td className="py-3 px-4">16:9 Standard</td>
                    <td className="py-3 px-4">5.0 MB</td>
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
              <h4 className="font-bold text-on-background text-sm">Select Esports Theme</h4>
              <p className="text-xs text-outline leading-relaxed mt-2">
                Choose from tactical reticle layouts, synthwave grids, or minimal stream schedule cards designed specifically for Twitter/X headers.
              </p>
            </div>

            <div className="bg-surface-container/60 rounded-xl p-5 border border-outline-variant/40">
              <span className="w-8 h-8 rounded-full bg-primary-container/20 text-primary-container font-bold flex items-center justify-center text-sm mb-3">
                2
              </span>
              <h4 className="font-bold text-on-background text-sm">Avoid Avatar Blindspot</h4>
              <p className="text-xs text-outline leading-relaxed mt-2">
                All templates automatically place text layers on the right 70% of the canvas so your profile picture never obstructs your gamertag.
              </p>
            </div>

            <div className="bg-surface-container/60 rounded-xl p-5 border border-outline-variant/40">
              <span className="w-8 h-8 rounded-full bg-primary-container/20 text-primary-container font-bold flex items-center justify-center text-sm mb-3">
                3
              </span>
              <h4 className="font-bold text-on-background text-sm">Export Lossless PNG</h4>
              <p className="text-xs text-outline leading-relaxed mt-2">
                Download your uncompressed 1500x500 banner and upload directly to Twitter/X via Edit Profile with zero cropping required.
              </p>
            </div>
          </div>

          {/* Twitter FAQs */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-on-background">
              Frequently Asked Questions (Twitter / X Headers)
            </h3>
            
            <div className="bg-surface-container/50 rounded-xl p-5 border border-outline-variant/40">
              <h4 className="font-bold text-sm text-on-background">Why does Twitter/X make headers look blurry?</h4>
              <p className="text-xs text-outline leading-relaxed mt-1">
                Twitter automatically recompresses JPG images. To maintain sharp edges on typography and neon glow effects, always upload high-resolution PNG format files.
              </p>
            </div>

            <div className="bg-surface-container/50 rounded-xl p-5 border border-outline-variant/40">
              <h4 className="font-bold text-sm text-on-background">How do I change my header on Twitter/X?</h4>
              <p className="text-xs text-outline leading-relaxed mt-1">
                Open your Twitter profile, click <strong>Edit Profile</strong>, click the camera icon on your header, select your downloaded 1500x500 PNG file, and click <strong>Apply</strong>.
              </p>
            </div>

            <div className="bg-surface-container/50 rounded-xl p-5 border border-outline-variant/40">
              <h4 className="font-bold text-sm text-on-background">Are these Twitter headers free for esports teams and clans?</h4>
              <p className="text-xs text-outline leading-relaxed mt-1">
                Yes! All headers on GamingBanner.com are completely free for personal and commercial team branding with zero watermarks.
              </p>
            </div>
          </div>

        </section>
      </main>

      <Footer />
    </>
  );
}
