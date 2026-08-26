// src/app/about/page.js
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { AUTHORS } from "@/data/authors";

export const metadata = {
  title: "About Us | Editorial Team & 4K Design Standards | Gaming Banner",
  description: "Meet the editorial team behind Gaming Banner — professional broadcast engineers, esports visual designers, and streaming consultants.",
  alternates: {
    canonical: "https://gamingbanner.com/about",
  },
};

export default function About() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Gaming Banner",
    "url": "https://gamingbanner.com",
    "logo": "https://gamingbanner.com/icon.png",
    "description": "Professional 4K gaming graphics suite and broadcast publication for live streamers and content creators.",
    "founder": {
      "@type": "Person",
      "name": "Alex Rivers",
      "jobTitle": "Lead Esports Graphic Designer"
    },
    "knowsAbout": [
      "Esports Graphic Design",
      "Twitch Stream Optimization",
      "YouTube Channel Art Sizing",
      "OBS Studio Broadcasting",
      "Discord Server Branding"
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />

      <main className="flex-1 min-h-screen pt-24 pb-16 px-4 md:px-8 max-w-[960px] mx-auto flex flex-col gap-10 text-on-background">
        {/* Hero Section */}
        <section className="text-center py-6 border-b border-outline-variant/60 flex flex-col items-center gap-3">
          <span className="text-xs font-bold font-data-mono text-primary-container uppercase tracking-widest bg-primary-container/10 border border-primary-container/20 px-3 py-1 rounded-full">
            Our Mission & Editorial Team
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-on-background tracking-tight">
            About GamingBanner
          </h1>
          <p className="max-w-[700px] text-sm md:text-base text-outline leading-relaxed">
            The free, browser-native 4K graphic design engine and esports publication empowering over 50,000+ gaming creators worldwide.
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
              Every year, millions of passionate gamers start YouTube channels, Twitch streams, and Discord communities. However, most new creators hit an immediate roadblock: <strong>channel branding</strong>.
            </p>
            <p>
              Professional desktop software like Photoshop and Illustrator requires expensive monthly subscriptions and steep learning curves. Meanwhile, generic design websites produce blurry, compressed exports that get cut off on smartphone screens because they lack YouTube's strict <strong>1546 × 423 px mobile safe zone</strong> calibration.
            </p>
            <p>
              We founded <strong>GamingBanner</strong> to solve this permanently: creating an instant, safe-zone calibrated 4K canvas studio where anyone can craft high-contrast, esports-grade channel art in under 60 seconds—100% free with zero watermarks.
            </p>
          </section>

          {/* Section 2: The Editorial & Design Team (E-E-A-T) */}
          <section className="flex flex-col gap-4">
            <div className="flex items-center justify-between gap-4">
              <h2 className="text-xl md:text-2xl font-bold text-on-background">
                👥 Meet the Editorial & Broadcast Team
              </h2>
              <span className="text-xs font-data-mono text-primary-container font-bold">
                ✓ Verified Industry Experts
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {Object.values(AUTHORS).map((author, idx) => (
                <div key={idx} className="p-5 bg-surface-container/70 border border-outline-variant/40 rounded-2xl flex flex-col justify-between gap-3 shadow-md">
                  <div>
                    <div
                      className="w-14 h-14 rounded-full bg-cover bg-center border-2 border-primary-container mb-3 shadow-md"
                      style={{ backgroundImage: `url('${author.avatar}')` }}
                    />
                    <h3 className="font-bold text-on-background text-base">
                      {author.name}
                    </h3>
                    <p className="text-[11px] font-semibold text-primary-container font-data-mono mt-0.5">
                      {author.role}
                    </p>
                    <p className="text-xs text-outline mt-2 leading-relaxed">
                      {author.bio}
                    </p>
                  </div>
                  <div className="pt-2 border-t border-outline-variant/30 text-[10px] font-data-mono text-outline">
                    <span>Experience: <strong className="text-on-background">{author.experience}</strong></span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 3: Editorial Guidelines & Fact-Checking Standards */}
          <section className="bg-surface-container/60 border border-outline-variant/50 p-6 md:p-8 rounded-2xl flex flex-col gap-4">
            <h2 className="text-xl md:text-2xl font-bold text-on-background">
              🛡️ Editorial Guidelines & Fact-Checking Standards
            </h2>
            <p>
              To maintain the highest level of technical accuracy for our creator community:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-xs md:text-sm text-outline">
              <li><strong>Live Platform Testing:</strong> Every safe-zone measurement is tested on real iOS, Android, macOS, and Windows hardware before publication.</li>
              <li><strong>OBS Hardware Benchmarking:</strong> Bitrate formulas and encoder guidelines are verified using real OBS Studio diagnostic logs on NVIDIA NVENC and AMD AMF configurations.</li>
              <li><strong>Quarterly Specification Audits:</strong> We audit all YouTube, Twitch, Kick, and Discord dimension requirements every quarter to reflect new UI updates.</li>
              <li><strong>Commercial Fair-Use Compliance:</strong> All background concept paintings and 3D environment renderings are created in-house without copyrighted game rips.</li>
            </ul>
          </section>

          {/* Section 4: Technology & Principles */}
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

          {/* Section 5: Transparency & Contact */}
          <section className="bg-surface-container/60 border border-outline-variant/50 p-6 md:p-8 rounded-2xl flex flex-col gap-4">
            <h2 className="text-xl md:text-2xl font-bold text-on-background">
              📬 Editorial Contact & Support
            </h2>
            <p>
              Have a suggestion for our editorial team, a safe-zone update, or a partnership inquiry?
            </p>
            <div className="bg-surface-container-high/60 p-4 rounded-xl border border-outline-variant/40 text-xs font-data-mono flex flex-col gap-1">
              <p><strong className="text-on-background">Editorial & Inquiries:</strong> <a href="mailto:editorial@gamingbanner.com" className="text-primary-container underline">editorial@gamingbanner.com</a></p>
              <p><strong className="text-on-background">Creator Support:</strong> <a href="mailto:support@gamingbanner.com" className="text-primary-container underline">support@gamingbanner.com</a></p>
              <p><strong className="text-on-background">Contact Page:</strong> <Link href="/contact" className="text-primary-container underline">https://gamingbanner.com/contact</Link></p>
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </>
  );
}
