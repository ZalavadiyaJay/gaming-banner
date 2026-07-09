import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Legal Disclaimer | GAMINGBANNER",
  description: "Read the legal disclaimer for GAMINGBANNER templates, assets, and third-party copyright details.",
};

export default function Disclaimer() {
  return (
    <>
      <Header />

      <main className="flex-1 min-h-screen py-24 px-xl max-w-[800px] mx-auto flex flex-col gap-xl">
        <section className="text-center py-lg border-b border-outline-variant/60 flex flex-col items-center gap-sm">
          <h1 className="text-4xl font-extrabold text-on-background">Disclaimer</h1>
          <p className="max-w-[620px] text-sm text-outline leading-relaxed font-data-mono">
            Last updated: June 2025
          </p>
        </section>

        <section className="bg-surface-container/60 border border-outline-variant/50 p-lg rounded-xl flex flex-col gap-lg leading-relaxed text-sm text-outline">
          <h2 className="text-lg font-bold text-on-background border-l-2 border-primary-container pl-sm">1. General Disclaimer</h2>
          <p>
            The information and tools provided by GamingBanner are for general entertainment and creator branding purposes only. We strive to provide high-quality templates, but cannot guarantee availability or download output metrics for all devices.
          </p>

          <h2 className="text-lg font-bold text-on-background border-l-2 border-primary-container pl-sm">2. Game Trademarks</h2>
          <p className="text-on-background font-bold bg-surface-container-high/40 p-md border-l-4 border-amber-500 rounded-r-lg leading-relaxed">
            Game names such as Valorant, Minecraft, Fortnite, Call of Duty, Apex Legends, League of Legends, and others referenced on this site are registered trademarks of their respective owners. GamingBanner is not affiliated with or endorsed by any game publisher or developer.
          </p>

          <h2 className="text-lg font-bold text-on-background border-l-2 border-primary-container pl-sm">3. No Affiliation</h2>
          <p>
            All template designs are creative fan arts inspired by the colors and themes of popular games, and do not contain copyrighted assets or official character textures of those games.
          </p>
        </section>
      </main>

      <Footer />
    </>
  );
}
