import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "About Us | Professional Gaming Branding & 4K Studio | Gaming Banner",
  description: "Learn about Gaming Banner — the free, high-performance 4K graphic design studio empowering YouTube creators, Twitch streamers, and esports clans worldwide.",
  alternates: {
    canonical: "https://gamingbanner.com/about",
  },
};

export default function About() {
  return (
    <>
      <Header />

      <main className="flex-1 min-h-screen pt-24 pb-16 px-4 md:px-8 max-w-[960px] mx-auto flex flex-col gap-10 text-on-background">
        {/* Hero Section */}
        <section className="text-center py-6 border-b border-outline-variant/60 flex flex-col items-center gap-3">
          <span className="text-xs font-bold font-data-mono text-primary-container uppercase tracking-widest bg-primary-container/10 border border-primary-container/20 px-3 py-1 rounded-full">
            Our Mission & Team
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-on-background tracking-tight">
            About GamingBanner
          </h1>
          <p className="max-w-[700px] text-sm md:text-base text-outline leading-relaxed">
            The free, browser-native 4K graphic design engine built specifically for competitive gamers, content creators, and esports communities.
          </p>
        </section>

        {/* Content Body */}
        <div className="flex flex-col gap-10 leading-relaxed text-sm text-outline">
          
          {/* Section 1: The Problem & Our Story */}
          <section className="bg-surface-container/60 border border-outline-variant/50 p-6 md:p-8 rounded-2xl flex flex-col gap-4">
            <h2 className="text-xl md:text-2xl font-bold text-on-background flex items-center gap-2">
              🎮 Why We Built GamingBanner
            </h2>
            <p>
              Every year, millions of passionate gamers start YouTube channels, Twitch streams, and Discord communities. However, most new creators hit an immediate roadblock: **channel branding**.
            </p>
            <p>
              Professional desktop software like Photoshop and Illustrator requires expensive monthly subscriptions and steep learning curves. Meanwhile, generic design websites produce blurry, compressed exports that get cut off on smartphone screens because they lack YouTube's strict **1546 × 423 px mobile safe zone** calibration.
            </p>
            <p>
              We founded <strong>GamingBanner</strong> to solve this permanently: creating an instant, safe-zone calibrated 4K canvas studio where anyone can craft high-contrast, esports-grade channel art in under 60 seconds—100% free with zero watermarks.
            </p>
          </section>

          {/* Section 2: Core Engineering & Design Principles */}
          <section className="flex flex-col gap-4">
            <h2 className="text-xl md:text-2xl font-bold text-on-background">
              ⚡ How Our Technology Works
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="p-5 bg-surface-container/70 border border-outline-variant/40 rounded-xl flex flex-col gap-2">
                <span className="text-2xl">📐</span>
                <h3 className="font-bold text-on-background text-base">Mobile Safe-Zone Lock</h3>
                <p className="text-xs text-outline leading-relaxed">
                  Every template is mathematically locked to the 1546 × 423 px central viewport, ensuring your gamertag and schedule never get cut off on iPhones, Androids, or smart TVs.
                </p>
              </div>

              <div className="p-5 bg-surface-container/70 border border-outline-variant/40 rounded-xl flex flex-col gap-2">
                <span className="text-2xl">🖼️</span>
                <h3 className="font-bold text-on-background text-base">Lossless 4K PNG Engine</h3>
                <p className="text-xs text-outline leading-relaxed">
                  We export uncompressed 2560 × 1440 4K UHD graphics locally in your browser, preventing YouTube and Twitch server-side compression artifacts.
                </p>
              </div>

              <div className="p-5 bg-surface-container/70 border border-outline-variant/40 rounded-xl flex flex-col gap-2">
                <span className="text-2xl">🔒</span>
                <h3 className="font-bold text-on-background text-base">Privacy-First Architecture</h3>
                <p className="text-xs text-outline leading-relaxed">
                  All text rendering, color adjustments, and image processing execute entirely inside your local browser session. We never harvest your gamertags or images.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3: Editorial Standards & Game Coverage */}
          <section className="bg-surface-container/60 border border-outline-variant/50 p-6 md:p-8 rounded-2xl flex flex-col gap-4">
            <h2 className="text-xl md:text-2xl font-bold text-on-background">
              🏆 Game Coverage & Authentic Art Direction
            </h2>
            <p>
              Unlike generic template mills, our design team custom-crafts every banner composition to match the actual culture, color palette, and competitive hierarchy of each specific title:
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 text-xs font-data-mono text-on-surface-variant pt-2">
              <span className="p-2 bg-surface-container-high/50 rounded border border-outline-variant/30 text-center">Valorant</span>
              <span className="p-2 bg-surface-container-high/50 rounded border border-outline-variant/30 text-center">Minecraft</span>
              <span className="p-2 bg-surface-container-high/50 rounded border border-outline-variant/30 text-center">Fortnite</span>
              <span className="p-2 bg-surface-container-high/50 rounded border border-outline-variant/30 text-center">Call of Duty</span>
              <span className="p-2 bg-surface-container-high/50 rounded border border-outline-variant/30 text-center">Counter-Strike 2</span>
              <span className="p-2 bg-surface-container-high/50 rounded border border-outline-variant/30 text-center">GTA V / FiveM</span>
              <span className="p-2 bg-surface-container-high/50 rounded border border-outline-variant/30 text-center">Apex Legends</span>
              <span className="p-2 bg-surface-container-high/50 rounded border border-outline-variant/30 text-center">League of Legends</span>
              <span className="p-2 bg-surface-container-high/50 rounded border border-outline-variant/30 text-center">Rocket League</span>
              <span className="p-2 bg-surface-container-high/50 rounded border border-outline-variant/30 text-center">PUBG Mobile</span>
              <span className="p-2 bg-surface-container-high/50 rounded border border-outline-variant/30 text-center">Clash of Clans</span>
              <span className="p-2 bg-surface-container-high/50 rounded border border-outline-variant/30 text-center">EA Sports FC 25</span>
            </div>
          </section>

          {/* Section 4: Transparency & Business Model */}
          <section className="bg-surface-container/60 border border-outline-variant/50 p-6 md:p-8 rounded-2xl flex flex-col gap-4">
            <h2 className="text-xl md:text-2xl font-bold text-on-background">
              💡 Why is GamingBanner Free?
            </h2>
            <p>
              We believe quality design tools should be accessible to all creators. GamingBanner is funded transparently through certified display advertising (Google AdSense) and optional sponsorship partnerships. This allows us to keep all templates, 4K exports, and customization features 100% free for our community without paywalls or subscriptions.
            </p>
          </section>

          {/* Section 5: Editorial Contact & Community Support */}
          <section className="bg-surface-container/60 border border-outline-variant/50 p-6 md:p-8 rounded-2xl flex flex-col gap-4">
            <h2 className="text-xl md:text-2xl font-bold text-on-background">
              📬 Get in Touch
            </h2>
            <p>
              Have a game template suggestion, design feedback, or partnership proposal? We'd love to hear from you:
            </p>
            <div className="bg-surface-container-high/60 p-4 rounded-xl border border-outline-variant/40 text-xs font-data-mono flex flex-col gap-1">
              <p><strong className="text-on-background">Support & Feedback:</strong> <a href="mailto:support@gamingbanner.com" className="text-primary-container underline">support@gamingbanner.com</a></p>
              <p><strong className="text-on-background">Editorial & Partnerships:</strong> <a href="mailto:partnerships@gamingbanner.com" className="text-primary-container underline">partnerships@gamingbanner.com</a></p>
              <p><strong className="text-on-background">Direct Contact Form:</strong> <Link href="/contact" className="text-primary-container underline">https://gamingbanner.com/contact</Link></p>
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </>
  );
}
