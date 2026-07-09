import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Twitch & YouTube Banner Size Guides & Tutorials | GAMINGBANNER",
  description: "Learn exact dimensions, safe zones, upload walkthroughs, and typography guidelines for YouTube, Twitch, Discord, and Twitter banners.",
};

export default function GuidesHub() {
  const guides = [
    {
      slug: "youtube-banner-size",
      title: "YouTube Banner Size Guide",
      desc: "Exact dimensions, safe zones, and upload specifications for YouTube channel art.",
      category: "Size Guides",
      color: "border-t-[#00d4ff]",
    },
    {
      slug: "twitch-banner-size",
      title: "Twitch Banner Size Guide",
      desc: "Profile banner and offline screen dimensions for Twitch channels.",
      category: "Size Guides",
      color: "border-t-[#00d4ff]",
    },
    {
      slug: "discord-banner-size",
      title: "Discord Banner Size Guide",
      desc: "Server banner and Nitro profile banner size specifications.",
      category: "Size Guides",
      color: "border-t-[#00d4ff]",
    },
    {
      slug: "twitter-header-size",
      title: "Twitter Header Size Guide",
      desc: "Header photo dimensions and profile picture overlap zones.",
      category: "Size Guides",
      color: "border-t-[#00d4ff]",
    },
    {
      slug: "how-to-make-gaming-banner",
      title: "How to Make a Gaming Banner",
      desc: "Step-by-step tutorial for designing your first professional gaming banner.",
      category: "Tutorials",
      color: "border-t-[#10b981]",
    },
    {
      slug: "upload-youtube-banner",
      title: "How to Upload a YouTube Banner",
      desc: "Complete walkthrough for uploading and positioning your channel art.",
      category: "Tutorials",
      color: "border-t-[#10b981]",
    },
    {
      slug: "gaming-fonts",
      title: "Best Gaming Fonts",
      desc: "Top fonts used by professional gaming channels and esports teams.",
      category: "Design Resources",
      color: "border-t-[#f59e0b]",
    },
    {
      slug: "gaming-color-palettes",
      title: "Gaming Color Palettes",
      desc: "Curated color combinations inspired by popular game aesthetics.",
      category: "Design Resources",
      color: "border-t-[#f59e0b]",
    },
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
        "name": "Guides",
        "item": "https://gamingbanner.com/guides"
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

      <main className="flex-1 min-h-screen py-24 px-xl max-w-[1440px] mx-auto flex flex-col gap-xl">
        <section className="text-center py-lg border-b border-outline-variant/60 flex flex-col items-center gap-sm">
          <h1 className="text-4xl font-extrabold text-on-background">Gaming Banner Design Guides</h1>
          <p className="max-w-[620px] text-sm text-outline leading-relaxed">
            Learn everything about banner dimensions, gaming fonts, color palettes, and design best practices for every platform.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg">
          {guides.map((guide, idx) => (
            <div key={idx} className={`bento-card border-t-4 ${guide.color} rounded-xl overflow-hidden shadow-lg p-lg flex flex-col justify-between h-56`}>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-primary-container">
                  {guide.category}
                </span>
                <h2 className="font-extrabold text-lg text-on-background hover:text-primary-container transition-colors mt-1">
                  <Link href={`/guides/${guide.slug}`}>{guide.title}</Link>
                </h2>
                <p className="text-xs text-outline mt-2 leading-relaxed">
                  {guide.desc}
                </p>
              </div>

              <Link
                href={`/guides/${guide.slug}`}
                className="text-xs font-bold text-primary-container hover:text-primary transition-colors flex items-center gap-1 self-start mt-md"
              >
                Read Guide &rarr;
              </Link>
            </div>
          ))}
        </section>
      </main>

      <Footer />
    </>
  );
}
