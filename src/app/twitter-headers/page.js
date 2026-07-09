import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TemplatesNav from "@/components/TemplatesNav";

export const metadata = {
  title: "Gaming Twitter Headers & Symmetrical Banner Maker | GAMINGBANNER",
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

      <main className="flex-1 min-h-screen py-24 px-md md:px-xl w-full max-w-[1440px] mx-auto flex flex-col gap-xl overflow-x-hidden">
        <TemplatesNav activeTab="twitter" />

        {/* Page Hero */}
        <section className="text-center py-lg border-b border-outline-variant/60 flex flex-col items-center gap-sm">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-on-background">
            Free Twitter/X Gaming Headers & Cool Banners
          </h1>
          <p className="max-w-[620px] text-sm text-outline leading-relaxed">
            Generate cool gaming banners and headers for your Twitter/X profile. Pre-configured to fit the standard Twitter header size (1500 x 500 pixels) with avatar safe zones.
          </p>


        </section>

        {/* Template Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg">
          {templates.map((template, idx) => (
            <div key={idx} className="bento-card overflow-hidden rounded-xl shadow-lg border-outline-variant/50">
              <div className="aspect-video relative flex items-center justify-end font-gamertag uppercase p-lg overflow-hidden pr-[8%]" style={{ ...template.style, containerType: "inline-size" }}>
                <div className="text-right flex flex-col items-end">
                  <span className="font-black tracking-wide leading-none" style={{ fontSize: "clamp(12px, 7cqw, 22px)" }}>@YOURHANDLE</span>
                  <span className="tracking-widest text-white/60 mt-xs font-sans font-semibold normal-case leading-none" style={{ fontSize: "clamp(5px, 2.2cqw, 9px)" }}>
                    twitch.tv/username
                  </span>
                </div>
              </div>
              <div className="p-lg bg-surface-container-high flex flex-col justify-between h-40">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-on-background">{template.name}</span>
                  </div>
                  <p className="text-xs text-outline mt-1">{template.desc}</p>
                </div>

                <Link
                  href={`/customize/${template.id}`}
                  className="w-full bg-primary-container hover:bg-primary-container/90 text-on-primary-container text-center font-bold text-xs py-2.5 rounded transition-all block mt-md"
                >
                  Customize & Download
                </Link>
              </div>
            </div>
          ))}
        </section>
      </main>

      <Footer />
    </>
  );
}
