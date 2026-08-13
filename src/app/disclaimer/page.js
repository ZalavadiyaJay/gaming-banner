import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Legal Disclaimer | Fair Use & Trademarks | Gaming Banner",
  description: "Read the Legal Disclaimer for Gaming Banner regarding game trademarks, fan-art digital assets, third-party rights, and fair use policies.",
  alternates: {
    canonical: "https://gamingbanner.com/disclaimer",
  },
};

export default function Disclaimer() {
  return (
    <>
      <Header />

      <main className="flex-1 min-h-screen pt-24 pb-16 px-4 md:px-8 max-w-[960px] mx-auto flex flex-col gap-8 text-on-background">
        {/* Header */}
        <section className="text-center py-6 border-b border-outline-variant/60 flex flex-col items-center gap-2">
          <span className="text-xs font-bold font-data-mono text-primary-container uppercase tracking-widest bg-primary-container/10 border border-primary-container/20 px-3 py-1 rounded-full">
            Legal Disclosures
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-on-background tracking-tight">
            Legal Disclaimer
          </h1>
          <p className="text-xs md:text-sm text-outline font-data-mono">
            Last Updated: August 2026 • Verified Fair Use & Trademark Compliance
          </p>
        </section>

        {/* Content Body */}
        <div className="bg-surface-container/60 border border-outline-variant/50 p-6 md:p-10 rounded-2xl flex flex-col gap-8 leading-relaxed text-sm text-outline">
          
          <section className="flex flex-col gap-3">
            <h2 className="text-lg md:text-xl font-bold text-on-background border-l-4 border-primary-container pl-3">
              1. General Disclaimer
            </h2>
            <p>
              The graphic design tools, banner templates, educational articles, and dimension guidelines provided on <strong>Gaming Banner</strong> (<Link href="https://gamingbanner.com" className="text-primary-container underline">https://gamingbanner.com</Link>) are for creator branding, informational, and entertainment purposes. While we make every effort to maintain accurate safe-zone measurements and lossless rendering engines, all tools and materials are provided on an "as-is" basis.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-lg md:text-xl font-bold text-on-background border-l-4 border-primary-container pl-3">
              2. Trademark Notice & Non-Affiliation
            </h2>
            <div className="text-on-background bg-surface-container-high/60 p-4 border-l-4 border-primary-container rounded-r-xl leading-relaxed text-xs">
              <p className="font-bold mb-1">Non-Affiliation Disclosure:</p>
              <p>
                All game titles, franchise names, trademarks, logos, and registered brand properties referenced across GamingBanner (including but not limited to <em>Valorant, Minecraft, Fortnite, Call of Duty, Counter-Strike 2, GTA V, Apex Legends, League of Legends, Rocket League, PUBG Mobile, Clash of Clans, Forza Horizon, Asphalt 9, Genshin Impact, Roblox, Cyberpunk 2077, Elden Ring, Among Us, Clash Royale, Overwatch 2, EA Sports FC</em>) are the property of their respective copyright owners.
              </p>
            </div>
            <p>
              GamingBanner is an independent online design studio and is <strong>not affiliated with, endorsed by, sponsored by, or associated with</strong> Riot Games, Mojang/Microsoft, Epic Games, Activision Blizzard, Valve Corporation, Rockstar Games, Electronic Arts, CD Projekt Red, FromSoftware, Supercell, Innersloth, or any other game publisher.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-lg md:text-xl font-bold text-on-background border-l-4 border-primary-container pl-3">
              3. Original Digital Fan-Art & Copyright Compliance
            </h2>
            <p>
              All background artworks and visual compositions available on GamingBanner are original digital concept paintings and 3D environment renderings created by our in-house design team. Our templates do not incorporate copyrighted game textures, proprietary logos, or official character model rips.
            </p>
            <p>
              If you are a copyright owner and believe that any content hosted on GamingBanner infringes upon your copyright, please contact us immediately at <a href="mailto:support@gamingbanner.com" className="text-primary-container underline">support@gamingbanner.com</a> with relevant proof of ownership, and we will take swift action to address your inquiry.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-lg md:text-xl font-bold text-on-background border-l-4 border-primary-container pl-3">
              4. External Links & Advertising Disclaimer
            </h2>
            <p>
              GamingBanner may contain links to external websites and display third-party advertisements served by Google AdSense. We do not endorse or assume responsibility for the accuracy, content, or privacy practices of any third-party websites or services.
            </p>
          </section>

        </div>
      </main>

      <Footer />
    </>
  );
}
