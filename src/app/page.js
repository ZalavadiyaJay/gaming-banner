"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  const [gamertag, setGamertag] = useState("STORM");
  const [activeFaq, setActiveFaq] = useState(null);
  const [selectedUniverse, setSelectedUniverse] = useState("All");

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  // Game Universe configuration
  const universes = [
    { name: "All", colors: "from-[#00d4ff]/20 to-transparent" },
    { name: "Valorant", colors: "from-[#ff4655]/20 to-transparent" },
    { name: "Minecraft", colors: "from-[#5b8731]/20 to-transparent" },
    { name: "Fortnite", colors: "from-[#f2da3b]/20 to-transparent" },
    { name: "Apex Legends", colors: "from-[#ff2d55]/20 to-transparent" },
    { name: "CS2", colors: "from-[#de9b35]/20 to-transparent" },
    { name: "League", colors: "from-[#c8aa6e]/20 to-transparent" },
    { name: "GTA V", colors: "from-[#10b981]/20 to-transparent" },
    { name: "Genshin", colors: "from-[#3e86c1]/20 to-transparent" },
    { name: "Overwatch", colors: "from-[#f99e1a]/20 to-transparent" },
    { name: "Roblox", colors: "from-[#ef4444]/20 to-transparent" },
  ];  // Base templates definition
  const templates = [
    {
      id: "esports",
      name: "Esports Grid",
      sub: "Ranked / K/D 2.5",
      universe: "Valorant",
      glow: "shadow-[#00d4ff]/10 border-[#00d4ff]/30",
      style: {
        background: "url('/banner_valorant.jpg') center/cover no-repeat",
        fontFamily: "var(--font-gamertag)",
        color: "#ffffff",
        textShadow: "0 0 16px rgba(0, 212, 255, 0.6)",
        letterSpacing: "0.15em",
      },
      decor: (
        <div className="absolute inset-0 bg-black/45 z-0" />
      ),
    },
    {
      id: "streaming",
      name: "Stream Wave",
      sub: "STREAMING NOW",
      universe: "Fortnite",
      glow: "shadow-[#8b5cf6]/10 border-[#8b5cf6]/30",
      style: {
        background: "url('/banner_fortnite.jpg') center/cover no-repeat",
        fontFamily: "var(--font-sans)",
        fontWeight: "900",
        color: "#ffffff",
        textShadow: "0 0 20px rgba(139, 92, 246, 0.7)",
      },
      decor: (
        <div className="absolute inset-0 bg-black/40 z-0" />
      ),
    },
    {
      id: "minimalist",
      name: "Sleek Carbon",
      sub: "Est. 2018",
      universe: "CS2",
      glow: "shadow-white/5 border-outline/30",
      style: {
        background: "url('/banner_cod.jpg') center/cover no-repeat",
        fontFamily: "var(--font-sans)",
        fontWeight: "800",
        color: "#ffffff",
        textShadow: "0 2px 8px rgba(0,0,0,0.8)",
      },
      decor: (
        <div className="absolute inset-0 bg-black/40 z-0" />
      ),
    },
    {
      id: "rpg",
      name: "Fantasy Realm",
      sub: "Lv 100 Mage",
      universe: "Genshin",
      glow: "shadow-[#ffd8ae]/5 border-[#c8aa6e]/20",
      style: {
        background: "url('/banner_genshin.jpg') center/cover no-repeat",
        fontFamily: "Georgia, serif",
        color: "#dfc8a5",
        textShadow: "0 2px 8px rgba(0,0,0,0.9)",
      },
      decor: (
        <div className="absolute inset-0 bg-black/50 z-0" />
      ),
    },
    {
      id: "modern-apex",
      name: "Apex Master",
      sub: "Ranked Master",
      universe: "Apex Legends",
      glow: "shadow-[#ff3e3e]/10 border-[#ff3e3e]/30",
      style: {
        background: "url('/banner_apex.jpg') center/cover no-repeat",
        fontFamily: "var(--font-gamertag)",
        fontStyle: "italic",
        color: "#ff3e3e",
        textShadow: "0 0 12px rgba(255, 62, 62, 0.8), 0 2px 6px rgba(0,0,0,0.9)",
      },
      decor: (
        <div className="absolute inset-0 bg-black/45 z-0" />
      ),
    },
    {
      id: "gamer-profile",
      name: "Cyber Streamer",
      sub: "Gamer / Streamer / Creator",
      universe: "Minecraft",
      glow: "shadow-[#00d4ff]/5 border-[#2a3a4e]",
      style: {
        background: "url('/banner_minecraft.jpg') center/cover no-repeat",
        fontFamily: "var(--font-gamertag)",
        color: "#00d4ff",
        textShadow: "0 2px 6px rgba(0,0,0,0.9)",
      },
      decor: (
        <div className="absolute inset-0 bg-black/40 z-0" />
      ),
    },
  ];
  // Filtering templates based on universe explorer
  const filteredTemplates = templates.filter(
    (t) => selectedUniverse === "All" || t.universe === selectedUniverse
  );

  return (
    <>
      <Header />

      <main className="flex-1 pt-16">
        {/* Section 1: Hero */}
        <section className="relative px-md md:px-xl py-20 text-center overflow-hidden border-b border-outline-variant">
          <div className="absolute inset-0 cyan-backdrop -z-10" />
          <div className="max-w-[1440px] mx-auto flex flex-col items-center gap-md">
            {/* Pill badge */}
            <div className="inline-flex items-center gap-2 px-lg py-1 rounded-full border border-primary-container bg-primary-container/10 text-primary-container text-xs font-bold font-data-mono uppercase tracking-wider">
              Free Forever &bull; No Sign Up Required
            </div>

            <h1 className="max-w-[896px] text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-on-background leading-tight">
              Create Banners That Match <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-container to-secondary">
                Your Gaming Style
              </span>
            </h1>

            <p className="max-w-[576px] text-lg text-outline leading-relaxed">
              Design high-quality, personalized gaming banners for Twitch, YouTube, and Discord instantly. No design skills needed.
            </p>
            {/* Input Bar */}
            <div className="w-full max-w-[512px] mt-sm flex items-center bg-white rounded-lg border border-outline-variant overflow-hidden shadow-lg shadow-black/40">
              <span className="hidden sm:inline text-sm font-semibold text-zinc-500 pl-lg select-none whitespace-nowrap">
                Type Your Gamertag:
              </span>
              <input
                type="text"
                value={gamertag}
                onChange={(e) => setGamertag(e.target.value.toUpperCase().slice(0, 15))}
                placeholder="Enter Gamertag..."
                className="flex-1 bg-transparent text-zinc-950 font-bold text-lg px-md py-sm outline-none border-none min-w-0"
              />
              <Link
                href="/youtube-banners"
                className="bg-primary-container hover:bg-primary-container/90 text-on-primary-container font-extrabold text-sm tracking-wider uppercase px-xl py-sm h-full flex items-center justify-center transition-all hover:scale-[1.01]"
              >
                Customize
              </Link>
            </div>

            {/* Counter */}
            <div className="flex items-center gap-2 mt-sm text-sm text-outline">
              <span className="h-2 w-2 rounded-full bg-emerald-500 pulse-live" />
              <span>12,400+ banners created this month</span>
            </div>
          </div>
        </section>

        {/* Section 2: Platform Badges */}
        <section className="bg-surface-container-low py-lg border-b border-outline-variant">
          <div className="max-w-[1440px] mx-auto px-md md:px-xl">
            <p className="text-center text-xs font-bold text-outline/80 uppercase tracking-widest mb-md">
              Works perfectly with:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-md max-w-[896px] mx-auto">
              {[
                { name: "YouTube", size: "2560 x 1440" },
                { name: "Twitch", size: "1200 x 480" },
                { name: "Discord", size: "960 x 540" },
                { name: "Twitter/X", size: "1500 x 500" },
              ].map((plat, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center justify-center bg-surface-container-high border border-outline-variant/40 hover:border-primary-container/50 p-md rounded-lg transition-all"
                >
                  <span className="font-bold text-sm text-on-background">{plat.name}</span>
                  <span className="text-xs text-outline font-data-mono mt-1">{plat.size}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3: Try-On Grid */}
        <section className="py-xl max-w-[1440px] mx-auto px-md md:px-xl">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-sm border-b border-outline-variant/65 pb-sm mb-lg">
            <div>
              <h2 className="text-2xl font-bold text-on-background">
                {gamertag ? `${gamertag}'s` : "Your"} Custom Gaming Banners
              </h2>
              <p className="text-sm text-outline mt-1">Instant preview on game-inspired template themes</p>
            </div>
            <div className="flex items-center gap-xs">
              <span className="text-xs font-bold text-outline uppercase tracking-wider">Sort:</span>
              <select className="bg-surface-container-high border border-outline-variant rounded px-sm py-1 text-sm outline-none text-on-background">
                <option>Featured</option>
                <option>Newest</option>
                <option>Popular</option>
              </select>
            </div>
          </div>

          {filteredTemplates.length === 0 ? (
            <div className="text-center py-xl bg-surface-container-low rounded-xl border border-outline-variant">
              <p className="text-outline">No templates found for this Game Universe. Try selecting "All".</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg">
              {filteredTemplates.map((template, idx) => (
                <div key={idx} className={`bento-card overflow-hidden rounded-xl shadow-lg ${template.glow}`}>
                  {/* Canvas Preview Area */}
                  <div className="relative aspect-video flex items-center justify-center overflow-hidden" style={{ ...template.style, containerType: "inline-size" }}>
                    {template.decor}
                    <span className="relative z-10 uppercase select-none font-black tracking-wider leading-none text-center" style={{ fontSize: "clamp(12px, 7.5cqw, 24px)" }}>
                      {gamertag || "YOUR NAME"}
                    </span>
                  </div>

                  {/* Info Footer */}
                  <div className="p-lg bg-surface-container-high">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-on-background">{template.name}</span>
                      <span className="text-xs bg-surface-container-low border border-outline-variant px-2 py-0.5 rounded text-outline font-data-mono">
                        {template.universe}
                      </span>
                    </div>
                    <p className="text-xs text-outline mt-1">{template.sub}</p>

                    <div className="flex items-center gap-md mt-lg">
                      <Link
                        href={`/customize/${template.id}?name=${encodeURIComponent(gamertag)}`}
                        className="flex-1 bg-primary-container hover:bg-primary-container/90 text-on-primary-container text-center font-bold text-xs py-2.5 rounded transition-all"
                      >
                        Use Template
                      </Link>
                      <Link
                        href={`/customize/${template.id}?name=${encodeURIComponent(gamertag)}`}
                        className="flex-1 bg-transparent hover:bg-surface-container-low border border-outline-variant text-on-background text-center font-semibold text-xs py-2.5 rounded transition-all"
                      >
                        Customize
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>        {/* Section 4: Trending Templates Carousel */}
        <section className="bg-surface-container-low/50 py-xl border-t border-b border-outline-variant/60 overflow-hidden">
          <div className="max-w-[1440px] mx-auto px-md md:px-xl mb-lg">
            <h2 className="text-2xl font-bold text-on-background text-center">Trending This Week</h2>
            <p className="text-sm text-outline text-center mt-1">Most popular designs chosen by the community</p>
          </div>

          <div className="relative w-full max-w-[1152px] mx-auto px-md md:px-xl">
            <div className="flex gap-lg overflow-x-auto pb-sm scrollbar-hide">
              {[
                {
                  game: "Valorant",
                  character: "JETT",
                  name: "Tactical Agent",
                  downloads: "4.8K Downloads",
                  style: {
                    background: "url('/banner_valorant.jpg') center/cover no-repeat",
                    fontFamily: "var(--font-gamertag)",
                    color: "#ffffff",
                    textShadow: "0 0 16px rgba(0, 212, 255, 0.6)",
                  },
                  decor: (
                    <div className="absolute inset-0 bg-black/45 z-0" />
                  ),
                },
                {
                  game: "Minecraft",
                  character: "STEVE",
                  name: "Pixel Builder",
                  downloads: "5.2K Downloads",
                  style: {
                    background: "url('/banner_minecraft.jpg') center/cover no-repeat",
                    fontFamily: "var(--font-data-mono)",
                    color: "#55ff55",
                    textShadow: "0 2px 6px rgba(0,0,0,0.9)",
                  },
                  decor: (
                    <div className="absolute inset-0 bg-black/40 z-0" />
                  ),
                },
                {
                  game: "Fortnite",
                  character: "PEELY",
                  name: "Storm Survival",
                  downloads: "3.9K Downloads",
                  style: {
                    background: "url('/banner_fortnite.jpg') center/cover no-repeat",
                    fontFamily: "var(--font-sans)",
                    fontWeight: "900",
                    color: "#ffffff",
                    textShadow: "0 0 20px rgba(139, 92, 246, 0.7)",
                  },
                  decor: (
                    <div className="absolute inset-0 bg-black/40 z-0" />
                  ),
                },
                {
                  game: "Call of Duty",
                  character: "GHOST",
                  name: "Warzone Operator",
                  downloads: "4.1K Downloads",
                  style: {
                    background: "url('/banner_cod.jpg') center/cover no-repeat",
                    fontFamily: "var(--font-gamertag)",
                    color: "#d1d5db",
                    letterSpacing: "0.08em",
                    textShadow: "0 2px 8px rgba(0,0,0,0.8)",
                  },
                  decor: (
                    <div className="absolute inset-0 bg-black/40 z-0" />
                  ),
                },
                {
                  game: "GTA V",
                  character: "TREVOR",
                  name: "Los Santos Street",
                  downloads: "6.0K Downloads",
                  style: {
                    background: "url('/banner_gtav.jpg') center/cover no-repeat",
                    fontFamily: "Impact, sans-serif",
                    color: "#ffffff",
                    textShadow: "2px 2px 8px rgba(0,0,0,0.9)",
                    fontStyle: "italic",
                  },
                  decor: (
                    <div className="absolute inset-0 bg-black/45 z-0" />
                  ),
                },
                {
                  game: "League",
                  character: "JINX",
                  name: "Runic Spell",
                  downloads: "3.7K Downloads",
                  style: {
                    background: "url('/banner_league.jpg') center/cover no-repeat",
                    fontFamily: "Georgia, serif",
                    color: "#c8aa6e",
                    textShadow: "0 2px 8px rgba(0,0,0,0.9)",
                  },
                  decor: (
                    <div className="absolute inset-0 bg-black/50 z-0" />
                  ),
                },
              ].map((template, idx) => (
                <div
                  key={idx}
                  className="flex-shrink-0 w-72 bg-surface-container border border-outline-variant/40 rounded-lg overflow-hidden shadow-md hover:border-primary-container/40 transition-colors"
                >
                  <div className="aspect-video relative flex items-center justify-center overflow-hidden" style={template.style}>
                    {template.decor}
                    <span className="text-sm font-bold tracking-widest uppercase relative z-10">{gamertag}</span>
                  </div>
                  <div className="p-sm flex items-center justify-between text-xs bg-surface-container-high">
                    <div className="flex flex-col">
                      <span className="font-semibold text-on-background">{template.name}</span>
                      <span className="text-[10px] text-outline">{template.game}</span>
                    </div>
                    <span className="text-outline/80 font-data-mono text-[10px]">{template.downloads}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Section 5: Game Universe Explorer */}
        <section className="py-xl max-w-[1440px] mx-auto px-md md:px-xl">
          <div className="text-center mb-lg">
            <h2 className="text-2xl font-bold text-on-background">Browse by Game Universe</h2>
            <p className="text-sm text-outline mt-1">Find templates inspired by your favorite games</p>
          </div>

          <div className="flex flex-wrap justify-center gap-sm max-w-[896px] mx-auto">
            {universes.map((uni, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedUniverse(uni.name)}
                className={`px-lg py-2 rounded-lg border font-semibold text-sm transition-all bg-gradient-to-b ${uni.colors} ${
                  selectedUniverse === uni.name
                    ? "border-primary-container text-primary-container shadow-md shadow-primary-container/10"
                    : "border-outline-variant/45 text-outline hover:border-outline hover:text-on-background"
                }`}
              >
                {uni.name}
              </button>
            ))}
          </div>
        </section>

        {/* Section 6: How It Works */}
        <section className="bg-surface-container-low py-xl border-t border-b border-outline-variant/60">
          <div className="max-w-[1440px] mx-auto px-md md:px-xl">
            <div className="text-center mb-xl">
              <h2 className="text-2xl font-bold text-on-background">How GamingBanner Works</h2>
              <p className="text-sm text-outline mt-1">Zero installation. Full customization in under a minute.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-xl max-w-[1024px] mx-auto">
              {[
                {
                  step: "1",
                  title: "Enter Gamertag",
                  desc: "Type your name at the top to instantly preview it across our complete template gallery.",
                },
                {
                  step: "2",
                  title: "Select Style",
                  desc: "Pick your design inspired by Valorant, Minecraft, or Call of Duty, and adjust fonts, colors, and layout.",
                },
                {
                  step: "3",
                  title: "Download Free",
                  desc: "Export high-resolution PNG files optimized for desktop and mobile banner safe-zones. No watermark.",
                },
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col items-center text-center p-lg bg-surface-container rounded-xl border border-outline-variant/40">
                  <div className="h-12 w-12 rounded-lg bg-primary-container/10 border border-primary-container/40 flex items-center justify-center font-gamertag font-black text-primary-container text-xl shadow-inner shadow-primary-container/5">
                    {item.step}
                  </div>
                  <h3 className="font-bold text-lg text-on-background mt-md">{item.title}</h3>
                  <p className="text-sm text-outline leading-relaxed mt-xs">{item.desc}</p>
                </div>
              ))}
          </div>
        </div>
      </section>

        {/* Section 6: Frequently Asked Questions */}
        <section className="py-xl max-w-[1440px] mx-auto px-md md:px-xl">
          <div className="text-center mb-xl">
            <h2 className="text-2xl font-bold text-on-background">Frequently Asked Questions</h2>
            <p className="text-sm text-outline mt-1">Find answers to common questions about GamingBanner.</p>
          </div>

          <div className="max-w-[768px] mx-auto flex flex-col gap-sm">
            {[
              {
                q: "Is GamingBanner really free?",
                a: "Yes! You can customize and download all templates completely free of charge. We do not apply any watermarks to exported high-resolution PNG files.",
              },
              {
                q: "Do I need graphic design experience?",
                a: "None at all. Just type your gamertag, choose a game style, adjust colors using our side panel options, and download. The tool takes care of dimensions automatically.",
              },
              {
                q: "Are the dimensions accurate for my channel?",
                a: "Absolutely. All templates are built according to platform specifications, including YouTube's central mobile safe-zone (1546 x 423 px) to ensure text renders perfectly on phone screens.",
              },
              {
                q: "Can I use these banners commercially?",
                a: "Yes, you are free to use your downloaded banners to brand your monetized streams, channels, and social profiles.",
              },
            ].map((faq, idx) => (
              <div key={idx} className="bg-surface-container-high/60 border border-outline-variant/45 rounded-lg overflow-hidden transition-colors">
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left px-lg py-md flex items-center justify-between text-on-background font-bold text-sm outline-none"
                >
                  <span>{faq.q}</span>
                  <span className="text-primary-container text-lg font-data-mono">
                    {activeFaq === idx ? "−" : "+"}
                  </span>
                </button>
                {activeFaq === idx && (
                  <div className="px-lg pb-md text-xs text-outline leading-relaxed border-t border-outline-variant/25 pt-sm bg-surface-container">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
