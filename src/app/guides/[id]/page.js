import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export async function generateMetadata({ params }) {
  const { id } = await params;
  const guidesContent = {
    "youtube-banner-size": {
      title: "YouTube Banner Size Guide 2025: Dimensions & Safe Zones",
      desc: "Exact dimensions, safe zones, and upload specifications for YouTube channel art. Keep your graphics perfect on Desktop, Mobile and TV."
    },
    "twitch-banner-size": {
      title: "Twitch Banner Size Guide 2025: Profile Art & Offline Screen Specs",
      desc: "Complete size guide for Twitch offline screens, stream overlays, and profile banner sizes. Get recommended resolutions for streaming."
    },
    "discord-banner-size": {
      title: "Discord Banner Size Guide: Server & Profile Specifications",
      desc: "Detailed dimensions for Discord server banners and animated profile headers. Optimize files to fit correctly without cropping."
    },
    "twitter-header-size": {
      title: "Twitter Header Size Guide: Profile Cover Art Safe Zones",
      desc: "The correct dimensions and aspect ratio for Twitter/X headers. Learn how to prevent the profile photo from blocking your designs."
    },
    "how-to-make-gaming-banner": {
      title: "How to Make a Gaming Banner: Step-by-Step Design Tutorial",
      desc: "A beginner's guide to creating gaming banners from scratch. Choose custom assets, configure text colors, and output layouts."
    },
    "upload-youtube-banner": {
      title: "How to Upload a YouTube Banner: Quick Customization Guide",
      desc: "Step-by-step walkthrough to upload, update, and crop your channel art on YouTube Studio using desktop or mobile."
    },
    "gaming-fonts": {
      title: "Top 10 Best Gaming Fonts for Esports & Stream Headers",
      desc: "Find the best fonts for esports logos and channel headers, from clean geometric sans to heavy blocky stencil outlines."
    },
    "gaming-color-palettes": {
      title: "Gaming Color Palettes: Best Color Palettes for Stream Banners",
      desc: "Curated dark mode color schemes and neon gradient combinations to brand your YouTube, Twitch, and Discord servers."
    }
  };
  const guide = guidesContent[id] || { title: "Gaming Guide", desc: "Design resources, guides, and tutorials for creators." };
  return {
    title: `${guide.title} | GAMINGBANNER`,
    description: guide.desc,
  };
}

export default async function GuideArticle({ params }) {
  const { id } = await params;

  // Guides contents dictionary
  const guidesContent = {
    "youtube-banner-size": {
      title: "YouTube Banner Size Guide 2025: Dimensions & Safe Zones",
      category: "Size Guides",
      body: (
        <div className="flex flex-col gap-md text-sm text-outline leading-relaxed">
          <p>
            Designing YouTube channel art is a tricky balance. YouTube requires banners to be uploaded at a large aspect ratio to support 4K TV screens, while cropping the margins severely on smaller desktop, tablet, and mobile layouts.
          </p>
          <div className="p-lg bg-surface-container-high border-l-4 border-primary-container rounded-r-lg font-data-mono text-xs my-sm">
            Recommended Dimensions: 2560 x 1440 px<br />
            Mobile Safe Zone (Center): 1546 x 423 px
          </div>
          <h2 className="text-lg font-bold text-on-background mt-md border-l-2 border-primary-container pl-sm">
            Understanding Safe Zones
          </h2>
          <p>
            The absolute safe zone is the central 1546 x 423 pixel rectangle. YouTube guarantees that any text, logo, or critical branding details placed inside this boundary will display without crop clipping across all smartphones and tablet models.
          </p>
          <div className="my-md border border-outline-variant/60 rounded-lg overflow-hidden bg-surface-container">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-surface-container-high border-b border-outline-variant/60 text-on-background font-bold">
                  <th className="p-md">Platform View</th>
                  <th className="p-md">Dimensions</th>
                  <th className="p-md">Visibility Description</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-outline-variant/30">
                  <td className="p-md text-on-background">Mobile Screen</td>
                  <td className="p-md font-data-mono">1546 x 423 px</td>
                  <td className="p-md">Central area visible on all smartphone screens. Keep text here.</td>
                </tr>
                <tr className="border-b border-outline-variant/30">
                  <td className="p-md text-on-background">Tablet display</td>
                  <td className="p-md font-data-mono">1855 x 423 px</td>
                  <td className="p-md">Slightly wider area visible on iPad and tablet screens.</td>
                </tr>
                <tr className="border-b border-outline-variant/30">
                  <td className="p-md text-on-background">Desktop View</td>
                  <td className="p-md font-data-mono">2560 x 423 px</td>
                  <td className="p-md">Full banner width but vertically restricted to 423px on browsers.</td>
                </tr>
                <tr>
                  <td className="p-md text-on-background">TV Screen</td>
                  <td className="p-md font-data-mono">2560 x 1440 px</td>
                  <td className="p-md">Full canvas visible on smart TVs and game consoles.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      ),
    },
    "twitch-banner-size": {
      title: "Twitch Banner Size Guide: Sizing Profile & Offline Screens",
      category: "Size Guides",
      body: (
        <div className="flex flex-col gap-md text-sm text-outline leading-relaxed">
          <p>
            Twitch banners act as the header background behind your video player. Twitch scales banners horizontally to match the viewer's browser width, making design positioning essential.
          </p>
          <div className="p-lg bg-surface-container-high border-l-4 border-primary-container rounded-r-lg font-data-mono text-xs my-sm">
            Profile Banner Dimensions: 1200 x 480 px<br />
            Offline Screen Size: 1920 x 1080 px
          </div>
          <h2 className="text-lg font-bold text-on-background mt-md border-l-2 border-primary-container pl-sm">
            Best Practices for Twitch Art
          </h2>
          <p>
            Ensure your main handle is positioned on the left or centered, keeping in mind that Twitch overlays your profile avatar, follow button, and channel details on top of the left side of your banner.
          </p>
        </div>
      ),
    },
    "discord-banner-size": {
      title: "Discord Banner Size Guide: Server & Profile Sizing",
      category: "Size Guides",
      body: (
        <div className="flex flex-col gap-md text-sm text-outline leading-relaxed">
          <p>
            Discord offers two types of custom banners. Server Banners appear at the top of your channel lists, while Profile Banners render inside your user profile cards.
          </p>
          <div className="p-lg bg-surface-container-high border-l-4 border-primary-container rounded-r-lg font-data-mono text-xs my-sm">
            Server Banner Size: 960 x 540 px (aspect ratio 16:9)<br />
            Nitro Profile Banner: 680 x 240 px
          </div>
          <h2 className="text-lg font-bold text-on-background mt-md border-l-2 border-primary-container pl-sm">
            Guild Banner Requirements
          </h2>
          <p>
            To upload a custom Server Banner, your guild must reach Boost Level 2. Keep the top 25% of the banner simple or dark, as Discord overlays server name headers and settings menus over it.
          </p>
        </div>
      ),
    },
    "twitter-header-size": {
      title: "Twitter/X Header Dimensions & Profile Pic Safe Zones",
      category: "Size Guides",
      body: (
        <div className="flex flex-col gap-md text-sm text-outline leading-relaxed">
          <p>
            Twitter profile banners use a 3:1 aspect ratio. Sizing your cover correctly avoids overlap issues with your avatar photo.
          </p>
          <div className="p-lg bg-surface-container-high border-l-4 border-primary-container rounded-r-lg font-data-mono text-xs my-sm">
            Recommended Dimensions: 1500 x 500 px
          </div>
          <h2 className="text-lg font-bold text-on-background mt-md border-l-2 border-primary-container pl-sm">
            Avatar Overlap Area
          </h2>
          <p>
            Your circular profile picture clips the bottom-left corner of the header banner on desktop viewports. Keep text and design details in the top and right sections to ensure clean display.
          </p>
        </div>
      ),
    },
    "how-to-make-gaming-banner": {
      title: "How to Make a Gaming Banner: Step-by-Step Tutorial",
      category: "Tutorials",
      body: (
        <div className="flex flex-col gap-md text-sm text-outline leading-relaxed">
          <p>
            Creating a professional-looking banner doesn't require graphic design degrees. Follow this step-by-step layout structure to build your first template.
          </p>
          <h2 className="text-lg font-bold text-on-background mt-md border-l-2 border-primary-container pl-sm">
            Step 1: Choose Your Core Gamertag Font
          </h2>
          <p>
            Your name is the central focus. Use futuristic gaming typefaces (like Orbitron or Space Grotesk) to set the mood.
          </p>
          <h2 className="text-lg font-bold text-on-background mt-md border-l-2 border-primary-container pl-sm">
            Step 2: Add Game-Genre Details
          </h2>
          <p>
            Incorporate elements matching your game style. For competitive shooters, add tactical grid lines; for fantasy/RPG streams, gold scroll patterns.
          </p>
        </div>
      ),
    },
    "upload-youtube-banner": {
      title: "How to Upload and Position Your YouTube Channel Art",
      category: "Tutorials",
      body: (
        <div className="flex flex-col gap-md text-sm text-outline leading-relaxed">
          <p>
            Once you download your free watermark-free banner from GamingBanner, uploading it to YouTube is simple.
          </p>
          <h2 className="text-lg font-bold text-on-background mt-md border-l-2 border-primary-container pl-sm">
            Step-by-Step Instructions:
          </h2>
          <ol className="list-decimal pl-lg flex flex-col gap-sm">
            <li>Log in to your YouTube Studio account.</li>
            <li>On the left menu bar, click <strong>Customization</strong>, then select the <strong>Branding</strong> tab.</li>
            <li>Under the <strong>Banner Image</strong> section, click <strong>Upload</strong>.</li>
            <li>Select the downloaded PNG file, verify the safe-zone boundaries in the crop window, and click <strong>Publish</strong>.</li>
          </ol>
        </div>
      ),
    },
    "gaming-fonts": {
      title: "Best Gaming Fonts: Typography Secrets of Pro Creators",
      category: "Design Resources",
      body: (
        <div className="flex flex-col gap-md text-sm text-outline leading-relaxed">
          <p>
            Typography choice defines the atmosphere of your social gaming channels. Here are the top gaming fonts for banners.
          </p>
          <h2 className="text-lg font-bold text-on-background mt-md border-l-2 border-primary-container pl-sm">
            1. Orbitron
          </h2>
          <p>
            A high-tech, futuristic geometric font that mirrors science-fiction themes. Ideal for tactical grid banners.
          </p>
          <h2 className="text-lg font-bold text-on-background mt-md border-l-2 border-primary-container pl-sm">
            2. Rajdhani
          </h2>
          <p>
            A condensed, industrial sans-serif typeface that fits streams displaying live stats, overlays, and countdown clocks.
          </p>
        </div>
      ),
    },
    "gaming-color-palettes": {
      title: "Gaming Color Palettes: Schemes for Every Game Style",
      category: "Design Resources",
      body: (
        <div className="flex flex-col gap-md text-sm text-outline leading-relaxed">
          <p>
            Selecting a cohesive color scheme helps build channel consistency. Here are popular game genre color guides.
          </p>
          <h2 className="text-lg font-bold text-on-background mt-md border-l-2 border-primary-container pl-sm">
            Tactical/Competitive Shooters
          </h2>
          <p>
            Deep midnight black backgrounds combined with vibrant highlights like electric cyan, crimson red, or toxic green.
          </p>
          <h2 className="text-lg font-bold text-on-background mt-md border-l-2 border-primary-container pl-sm">
            Retro Synthwave Streams
          </h2>
          <p>
            Deep navy/purple gradients paired with neon magenta, hot violet, and gold overlays.
          </p>
        </div>
      ),
    },
  };

  const currentGuide = guidesContent[id] || {
    title: "Guide Not Found",
    category: "Design Resources",
    body: <p>We could not find the guide article you are looking for.</p>,
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "headline": currentGuide.title,
    "author": {
      "@type": "Organization",
      "name": "GamingBanner Design Team",
      "url": "https://gamingbanner.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "GAMINGBANNER"
    },
    "description": currentGuide.title
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />

      <main className="flex-1 min-h-screen py-24 px-xl max-w-[800px] mx-auto flex flex-col gap-lg">
        {/* Breadcrumb */}
        <div className="text-xs text-outline/80 font-data-mono">
          <Link href="/" className="hover:text-on-background">Home</Link> &gt;{" "}
          <Link href="/guides" className="hover:text-on-background">Guides</Link> &gt;{" "}
          <span className="text-primary-container">{id}</span>
        </div>

        {/* Title block */}
        <header className="border-b border-outline-variant/65 pb-sm">
          <span className="text-xs bg-primary-container/10 border border-primary-container/30 px-2 py-0.5 rounded text-primary-container font-data-mono uppercase tracking-wider">
            {currentGuide.category}
          </span>
          <h1 className="text-3xl font-extrabold text-on-background mt-xs leading-tight">
            {currentGuide.title}
          </h1>
          <div className="flex items-center gap-sm text-xs text-outline/70 font-data-mono mt-xs">
            <span>By GamingBanner Design Team</span>
          </div>
        </header>

        {/* Article Body */}
        <section className="bg-surface-container/60 border border-outline-variant/50 p-lg rounded-xl shadow-lg">
          {currentGuide.body}
        </section>

        {/* CTA */}
        <section className="bg-surface-container-high border border-outline-variant/60 rounded-xl p-lg text-center flex flex-col items-center gap-sm mt-md">
          <h3 className="font-bold text-on-background text-lg">Build Your Custom Gaming Banner Now</h3>
          <p className="text-xs text-outline">Type your name and preview templates in under 60 seconds.</p>
          <Link
            href="/youtube-banners"
            className="bg-primary-container hover:bg-primary-container/90 text-on-primary-container font-extrabold text-xs px-lg py-2.5 rounded transition-all block w-full max-w-[240px] mt-2 shadow shadow-primary-container/20"
          >
            Create Free Banner
          </Link>
        </section>
      </main>

      <Footer />
    </>
  );
}
