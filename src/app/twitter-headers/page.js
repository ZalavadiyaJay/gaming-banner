import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CategoryCatalog from "@/components/CategoryCatalog";

export const metadata = {
  title: "Gaming Twitter Headers & Symmetrical Banner Maker | Gaming Banner",
  description: "Generate gaming banners for Twitter/X profiles. Optimized dimensions, layout safe zones, and esports styles featuring glow text edits.",
};

export default function TwitterHeaders() {

  const templates = [
    { id: "esports-pro", name: "Esports Pro", category: "Esports", desc: "Dark graphite layout with custom team tags", style: { background: "radial-gradient(circle at 90% 50%, rgba(0, 212, 255, 0.12) 0%, transparent 60%), linear-gradient(135deg, #111827 0%, #030712 100%)", textShadow: "0 0 16px rgba(0, 212, 255, 0.6)" } },
    { id: "stream-schedule", name: "Stream Schedule", category: "Minimalist", desc: "Clean sidebar grid for time slots", style: { background: "radial-gradient(circle at 80% 50%, rgba(139, 92, 246, 0.12) 0%, transparent 60%), linear-gradient(135deg, #1e1b4b 0%, #030712 100%)", borderRight: "4px solid rgba(139, 92, 246, 0.3)" } },
    { id: "clan-tag", name: "Clan Tag Esports", category: "Esports", desc: "Tactical reticle crosshair line accents", style: { background: "radial-gradient(circle at 90% 50%, rgba(239, 68, 68, 0.1) 0%, transparent 60%), linear-gradient(135deg, #1f2937 0%, #111827 100%)" } },
    { id: "neon-glow", name: "Neon Glow", category: "Neon", desc: "Abstract shapes with vibrant electric cyan shadows", style: { background: "radial-gradient(circle at 100% 50%, rgba(0, 212, 255, 0.15) 0%, transparent 60%), linear-gradient(135deg, #09090b 0%, #1e1b4b 100%)", color: "#00d4ff" } },
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

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />

      <main className="flex-1 min-h-screen pt-24 pb-6 px-4 md:px-8 w-full max-w-[1440px] mx-auto flex flex-col gap-6 overflow-x-hidden">
        {/* Page Hero */}
        <section className="text-center py-2 flex flex-col items-center gap-2">
          <h1 className="text-2xl md:text-3xl font-extrabold text-on-background tracking-tight">
            Free Twitter/X Gaming Headers & Cool Banners
          </h1>
          <p className="max-w-[720px] text-xs md:text-sm text-outline leading-relaxed">
            Generate cool gaming headers for Twitter/X profiles (1500 x 500 px).
          </p>
        </section>

        {/* Category Catalog Grid with Game Filter Pills */}
        <CategoryCatalog templates={templates} />
      </main>

      <Footer />
    </>
  );
}
