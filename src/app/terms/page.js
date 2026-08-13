import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Terms of Service | Gaming Banner",
  description: "Read the Terms of Service for Gaming Banner. Understand your commercial rights, permitted usage, intellectual property, and platform policies.",
  alternates: {
    canonical: "https://gamingbanner.com/terms",
  },
};

export default function Terms() {
  return (
    <>
      <Header />

      <main className="flex-1 min-h-screen pt-24 pb-16 px-4 md:px-8 max-w-[960px] mx-auto flex flex-col gap-8 text-on-background">
        {/* Header */}
        <section className="text-center py-6 border-b border-outline-variant/60 flex flex-col items-center gap-2">
          <span className="text-xs font-bold font-data-mono text-primary-container uppercase tracking-widest bg-primary-container/10 border border-primary-container/20 px-3 py-1 rounded-full">
            Platform Agreement
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-on-background tracking-tight">
            Terms of Service
          </h1>
          <p className="text-xs md:text-sm text-outline font-data-mono">
            Last Updated: August 2026 • Effective Date: January 1, 2025
          </p>
        </section>

        {/* Content Body */}
        <div className="bg-surface-container/60 border border-outline-variant/50 p-6 md:p-10 rounded-2xl flex flex-col gap-8 leading-relaxed text-sm text-outline">
          
          <section className="flex flex-col gap-3">
            <h2 className="text-lg md:text-xl font-bold text-on-background border-l-4 border-primary-container pl-3">
              1. Acceptance of Terms & Conditions
            </h2>
            <p>
              By accessing, browsing, or using <strong>Gaming Banner</strong> (<Link href="https://gamingbanner.com" className="text-primary-container underline">https://gamingbanner.com</Link>), you acknowledge that you have read, understood, and agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree with any part of these terms, please do not use our website or online tools.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-lg md:text-xl font-bold text-on-background border-l-4 border-primary-container pl-3">
              2. Commercial Usage Rights & Free License
            </h2>
            <p>
              GamingBanner grants you a perpetual, worldwide, non-exclusive, royalty-free license to download, customize, and publish your generated channel banners and offline cards for both <strong>personal and commercial purposes</strong>. This includes:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-on-surface-variant">
              <li>Monetized YouTube channels and YouTube Partner Program streams.</li>
              <li>Twitch Affiliate and Twitch Partner live broadcasts.</li>
              <li>Public Discord community servers, esports clans, and tournament broadcasts.</li>
              <li>Social media gaming profiles across Twitter/X, TikTok, Kick, and Facebook Gaming.</li>
              <li>You may use your generated graphics without paying licensing fees and without mandatory watermark attribution.</li>
            </ul>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-lg md:text-xl font-bold text-on-background border-l-4 border-primary-container pl-3">
              3. Intellectual Property & Fair Use Disclaimers
            </h2>
            <p>
              All graphic template compositions, website code, canvas rendering engines, typography systems, and the GamingBanner brand mark are the exclusive intellectual property of GamingBanner.
            </p>
            <p>
              <strong>Trademark Notice:</strong> Any game titles, character archetypes, or franchise names mentioned on GamingBanner (e.g., <em>Valorant, Minecraft, Fortnite, Call of Duty, CS2, GTA V, Apex Legends, League of Legends, Roblox, Cyberpunk 2077, Elden Ring, EA Sports FC</em>) are the registered trademarks of their respective copyright owners (including Riot Games, Mojang/Microsoft, Epic Games, Activision Blizzard, Valve Corporation, Rockstar Games, Electronic Arts, CD Projekt Red, FromSoftware). Their reference on this website is strictly for <strong>fair use identification, fan community commentary, and educational categorization</strong>. GamingBanner is not affiliated with, sponsored by, or endorsed by any game publisher.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-lg md:text-xl font-bold text-on-background border-l-4 border-primary-container pl-3">
              4. Prohibited User Conduct
            </h2>
            <p>When using GamingBanner, you agree not to:</p>
            <ul className="list-disc pl-6 space-y-1 text-on-surface-variant">
              <li>Attempt to disrupt, reverse engineer, overload, or attack our server infrastructure through automated scraping bots, DDoS tools, or malicious scripts.</li>
              <li>Resell, redistribute, or repackage our raw graphic template files as a standalone paid graphic asset pack without meaningful creative transformation.</li>
              <li>Generate or overlay text containing hate speech, harassment, defamation, or unlawful material using our canvas editor.</li>
            </ul>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-lg md:text-xl font-bold text-on-background border-l-4 border-primary-container pl-3">
              5. Disclaimer of Warranties ("As-Is" Service)
            </h2>
            <p>
              GamingBanner and all its tools, templates, guides, and services are provided on an <strong>"as-is" and "as-available" basis</strong> without warranties of any kind, either express or implied. While we strive for 100% uptime and accurate canvas rendering, we do not warrant that our services will be uninterrupted, error-free, or free of bugs.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-lg md:text-xl font-bold text-on-background border-l-4 border-primary-container pl-3">
              6. Limitation of Liability
            </h2>
            <p>
              In no event shall GamingBanner, its founders, contributors, or technical team be liable for any direct, indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of, or inability to use, our platform, tools, or downloaded artwork.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-lg md:text-xl font-bold text-on-background border-l-4 border-primary-container pl-3">
              7. Third-Party Links & Advertising
            </h2>
            <p>
              Our website may contain links to external third-party websites or serve advertisements via Google AdSense and certified advertising networks. We have no control over the content, privacy policies, or practices of any third-party websites and assume no responsibility for them.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-lg md:text-xl font-bold text-on-background border-l-4 border-primary-container pl-3">
              8. Modifications to Terms & Service
            </h2>
            <p>
              We reserve the right to modify or update these Terms of Service at any time. Changes become effective immediately upon posting to this page with an updated "Last Updated" timestamp. Your continued use of the website following any changes constitutes acceptance of the new terms.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-lg md:text-xl font-bold text-on-background border-l-4 border-primary-container pl-3">
              9. Contact & Legal Inquiries
            </h2>
            <p>
              For legal inquiries, copyright notices, or questions regarding these Terms of Service, please reach out to:
            </p>
            <div className="bg-surface-container-high/60 p-4 rounded-xl border border-outline-variant/40 text-xs font-data-mono">
              <p className="font-bold text-on-background">GamingBanner Legal Team</p>
              <p>Email: <a href="mailto:support@gamingbanner.com" className="text-primary-container underline">support@gamingbanner.com</a></p>
              <p>Website: <Link href="https://gamingbanner.com" className="text-primary-container underline">https://gamingbanner.com</Link></p>
              <p>Contact Page: <Link href="/contact" className="text-primary-container underline">https://gamingbanner.com/contact</Link></p>
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </>
  );
}
