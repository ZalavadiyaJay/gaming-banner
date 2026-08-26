// src/app/guides/[id]/page.js
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AuthorBio from "@/components/AuthorBio";
import TableOfContents from "@/components/TableOfContents";
import KeyTakeaways from "@/components/KeyTakeaways";
import CalloutBox from "@/components/CalloutBox";

export const dynamicParams = false;

export async function generateStaticParams() {
  return [
    { id: "youtube-banner-size" },
    { id: "twitch-banner-size" },
    { id: "discord-banner-size" },
    { id: "twitter-header-size" },
    { id: "how-to-make-gaming-banner" },
    { id: "upload-youtube-banner" },
    { id: "gaming-fonts" },
    { id: "gaming-color-palettes" },
    { id: "kick-banner-size" },
    { id: "obs-stream-overlays-dimensions" },
    { id: "twitch-panels-dimensions-and-markdown" },
    { id: "youtube-thumbnail-size-and-click-through-rate" },
    { id: "tiktok-and-youtube-shorts-safe-zones" },
    { id: "esports-jersey-and-social-banner-branding" },
    { id: "png-vs-webp-vs-jpeg-for-gaming-banners" },
    { id: "twitch-emotes-and-sub-badges-dimensions" }
  ];
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const guideTitles = {
    "youtube-banner-size": "YouTube Gaming Banner Size (2560x1440) Safe Zone Guide 2026",
    "twitch-banner-size": "Twitch Banner Size (1920x1080 vs 1200x480) Complete Dimensions Guide",
    "discord-banner-size": "Discord Server & Profile Banner Size (960x540) Dimensions Guide",
    "twitter-header-size": "Twitter Header Size (1500x500) Safe Zone Dimensions Guide 2026",
    "how-to-make-gaming-banner": "How to Make a Gaming Banner for Free Without Photoshop (Step-by-Step)",
    "upload-youtube-banner": "How to Upload & Change YouTube Banner on Mobile, PC & Mac (2026)",
    "gaming-fonts": "Best Gaming Fonts for Banners, Logos & Twitch Overlays (Free Typography)",
    "gaming-color-palettes": "Best Gaming Color Palettes: Neon, Cyberpunk & Tactical Hex Codes",
    "kick-banner-size": "Kick Banner Size (1920x1080) & Channel Art Dimensions Guide 2026",
    "obs-stream-overlays-dimensions": "OBS Stream Overlays Dimensions & Canvas Resolution Guide (1080p, 1440p, 4K)",
    "twitch-panels-dimensions-and-markdown": "Twitch Panels Size (320x160) & Markdown Formatting Guide for Streamers",
    "youtube-thumbnail-size-and-click-through-rate": "YouTube Thumbnail Size (1280x720) & CTR Safe Zone Optimization Guide",
    "tiktok-and-youtube-shorts-safe-zones": "TikTok & YouTube Shorts Safe Zone Dimensions (1080x1920 9:16) for Gaming Clips",
    "esports-jersey-and-social-banner-branding": "Esports Team Branding: Roster Headers, Social Banners & Jersey Logos",
    "png-vs-webp-vs-jpeg-for-gaming-banners": "PNG vs WebP vs JPEG for Gaming Banners: Compression & 4K Quality Analysis",
    "twitch-emotes-and-sub-badges-dimensions": "Twitch Emotes & Sub Badges Size (28x28, 56x56, 112x112) Pixel Grid Guide"
  };

  const title = guideTitles[id] || "Gaming Banner Dimension Guide & Tutorial";
  return {
    title: `${title} | Gaming Banner`,
    description: `Comprehensive technical specification and design tutorial for ${title}. Verified safe zones, responsive breakdown, and lossless export instructions.`,
    alternates: {
      canonical: `https://gamingbanner.com/guides/${id}`,
    },
    openGraph: {
      title: `${title} | Gaming Banner`,
      description: `Complete technical specification and design guide for ${title}.`,
      url: `https://gamingbanner.com/guides/${id}`,
      type: "article",
      siteName: "Gaming Banner"
    }
  };
}

export default async function GuidePage({ params }) {
  const { id } = await params;

  // Comprehensive Guide Dataset (16 Masterclasses)
  const guidesData = {
    "youtube-banner-size": {
      title: "YouTube Gaming Banner Size (2560 × 1440) Safe Zone Guide 2026",
      subtitle: "The definitive technical guide to YouTube channel art dimensions, mobile safe zones (1546 × 423 px), 4K TV scaling, and lossless PNG export.",
      category: "Platform Specs",
      readTime: "7 min read",
      authorId: "alex-rivers",
      takeaways: [
        { title: "Recommended Resolution", desc: "2560 × 1440 pixels (16:9 aspect ratio, 4K UHD scaling)." },
        { title: "Minimum Safe Area", desc: "1546 × 423 pixels vertically and horizontally centered (visible on all smartphones)." },
        { title: "Max File Size", desc: "6 MB upload limit on YouTube Studio (24-bit RGB PNG recommended)." },
        { title: "TV Display Crop", desc: "Full 2560 × 1440 displays on smart TVs, living room consoles, and Apple TV." }
      ],
      toc: [
        { id: "overview", title: "1. Official YouTube Channel Art Specifications" },
        { id: "safe-zone-breakdown", title: "2. The Responsive Safe-Zone Breakdown" },
        { id: "mobile-vs-tv", title: "3. Mobile vs. Desktop vs. TV Viewports" },
        { id: "export-settings", title: "4. Lossless Export & File Compression Rules" },
        { id: "common-mistakes", title: "5. Top 4 Mistakes Gaming Creators Make" }
      ],
      content: (
        <>
          <section id="overview" className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-on-background">1. Official YouTube Channel Art Specifications</h2>
            <p>
              Designing a YouTube gaming banner requires accounting for <strong>multi-device responsive cropping</strong>. YouTube displays channel banners across everything from 6-inch mobile screens to 65-inch 4K living room televisions.
            </p>
            <div className="overflow-x-auto my-4">
              <table className="w-full text-left text-xs border border-outline-variant/40 rounded-xl overflow-hidden">
                <thead className="bg-surface-container-high text-on-background font-data-mono uppercase">
                  <tr>
                    <th className="p-3 border-b border-outline-variant/40">Device Viewport</th>
                    <th className="p-3 border-b border-outline-variant/40">Visible Dimensions</th>
                    <th className="p-3 border-b border-outline-variant/40">Aspect Ratio</th>
                    <th className="p-3 border-b border-outline-variant/40">Target Elements</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline-variant/30 text-outline">
                  <tr className="bg-primary-container/5">
                    <td className="p-3 font-bold text-on-background">Mobile & Tablet Safe Area</td>
                    <td className="p-3 font-data-mono text-primary-container font-bold">1546 × 423 px</td>
                    <td className="p-3 font-data-mono">3.65:1</td>
                    <td className="p-3">Gamertag, Socials, Upload Schedule</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold text-on-background">Desktop Displays</td>
                    <td className="p-3 font-data-mono">2560 × 423 px</td>
                    <td className="p-3 font-data-mono">6.05:1</td>
                    <td className="p-3">Extended Background & Esports Sponsors</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold text-on-background">Tablet Displays</td>
                    <td className="p-3 font-data-mono">1855 × 423 px</td>
                    <td className="p-3 font-data-mono">4.38:1</td>
                    <td className="p-3">Mid-width Clan Logos</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold text-on-background">Smart TV Displays</td>
                    <td className="p-3 font-data-mono">2560 × 1440 px</td>
                    <td className="p-3 font-data-mono">16:9</td>
                    <td className="p-3">Full 4K Background Concept Art</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section id="safe-zone-breakdown" className="space-y-4 pt-6">
            <h2 className="text-xl md:text-2xl font-bold text-on-background">2. The Responsive Safe-Zone Breakdown</h2>
            <p>
              The <strong>Safe Area (1546 × 423 px)</strong> is the only region guaranteed to never be cropped on any device. If you place your gamertag, live streaming schedule, or clan logo outside this box, mobile viewers will see a cut-off name.
            </p>
            <CalloutBox type="tip" title="Centering Formula">
              Always center your text precisely horizontally at <strong>X = 1280 px</strong> and vertically at <strong>Y = 720 px</strong> on your 2560×1440 canvas. Keep the total height of all text elements within <strong>380 px</strong> to allow a 20px padding buffer.
            </CalloutBox>
          </section>

          <section id="mobile-vs-tv" className="space-y-4 pt-6">
            <h2 className="text-xl md:text-2xl font-bold text-on-background">3. Mobile vs. Desktop vs. TV Viewports</h2>
            <p>
              Over <strong>72% of gaming channel views</strong> originate from mobile devices. However, the YouTube desktop interface displays social link icons in the bottom right corner of the banner. Keep the bottom right 100px of your safe zone free of critical text to prevent link overlays from obscuring your schedule.
            </p>
          </section>

          <section id="export-settings" className="space-y-4 pt-6">
            <h2 className="text-xl md:text-2xl font-bold text-on-background">4. Lossless Export & File Compression Rules</h2>
            <p>
              YouTube compresses uploaded images aggressively using JPEG re-encoding. To prevent color banding on dark gradient backgrounds:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-outline">
              <li>Export exclusively as <strong>24-bit PNG (RGB color profile)</strong>.</li>
              <li>Avoid saving as 8-bit indexed PNG, which causes harsh dither lines on glowing neon lights.</li>
              <li>Ensure the final file size is between <strong>1.5 MB and 5.8 MB</strong> (under YouTube's 6MB ceiling).</li>
            </ul>
          </section>

          <section id="common-mistakes" className="space-y-4 pt-6">
            <h2 className="text-xl md:text-2xl font-bold text-on-background">5. Top 4 Mistakes Gaming Creators Make</h2>
            <CalloutBox type="warning" title="Avoid These Errors">
              <ol className="list-decimal pl-4 space-y-1">
                <li><strong>Placing text at the top edge:</strong> Cut off on both desktop and mobile.</li>
                <li><strong>Using low-contrast font colors:</strong> White text over pale smoke without a 3D drop shadow blends into the background.</li>
                <li><strong>Designing at 1920×1080:</strong> Causes pixelation when stretched to YouTube's 2560×1440 container.</li>
                <li><strong>Overcrowding with 10 social handles:</strong> Stick to your 2 primary platforms (e.g. Twitch & TikTok).</li>
              </ol>
            </CalloutBox>
          </section>
        </>
      )
    },

    "twitch-banner-size": {
      title: "Twitch Banner Size (1920 × 1080 vs 1200 × 480) Complete Dimensions Guide",
      subtitle: "Learn the crucial differences between Twitch Video Player Offline Screens and Channel Profile Banners, including OBS canvas setups and mobile app rendering.",
      category: "Platform Specs",
      readTime: "8 min read",
      authorId: "marcus-vance",
      takeaways: [
        { title: "Video Player Offline Banner", desc: "1920 × 1080 pixels (16:9 Full HD) sits in the video player when stream is offline." },
        { title: "Profile Header Banner", desc: "1200 × 480 pixels (2.5:1 ratio) sits behind your channel avatar and bio." },
        { title: "Twitch Panels Size", desc: "320 × 160 pixels (2:1 ratio) modular image blocks below stream player." },
        { title: "Twitch Player UI Safe Zone", desc: "Keep bottom 180px clear of small text to avoid video controls overlay." }
      ],
      toc: [
        { id: "offline-vs-profile", title: "1. Video Player Offline Screen vs. Profile Banner" },
        { id: "twitch-specs-table", title: "2. Official Twitch Graphic Dimension Matrix" },
        { id: "obs-integration", title: "3. Importing Offline Screens into OBS & Streamlabs" },
        { id: "player-safe-zones", title: "4. Video Player Control Safe Zones" },
        { id: "mobile-rendering", title: "5. Mobile Twitch App Dark Mode Best Practices" }
      ],
      content: (
        <>
          <section id="offline-vs-profile" className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-on-background">1. Video Player Offline Screen vs. Profile Banner</h2>
            <p>
              Many streamers confuse the <strong>Video Player Offline Banner</strong> with the <strong>Profile Banner</strong>. They serve completely different functions in your channel layout:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
              <div className="bg-surface-container-high/60 p-4 rounded-xl border border-outline-variant/40">
                <span className="text-lg">📺</span>
                <h4 className="font-bold text-on-background mt-1">Video Player Offline Screen (1920 × 1080)</h4>
                <p className="text-xs text-outline mt-1 leading-relaxed">
                  Appears inside the embedded 16:9 media player when you are not broadcasting. Displays your streaming timetable, clan roster, and Discord community links.
                </p>
              </div>
              <div className="bg-surface-container-high/60 p-4 rounded-xl border border-outline-variant/40">
                <span className="text-lg">🖼️</span>
                <h4 className="font-bold text-on-background mt-1">Profile Header Banner (1200 × 480)</h4>
                <p className="text-xs text-outline mt-1 leading-relaxed">
                  Sits as a panoramic background banner at the very top of your channel home page, behind your circular avatar and bio description.
                </p>
              </div>
            </div>
          </section>

          <section id="twitch-specs-table" className="space-y-4 pt-6">
            <h2 className="text-xl md:text-2xl font-bold text-on-background">2. Official Twitch Graphic Dimension Matrix</h2>
            <div className="overflow-x-auto my-2">
              <table className="w-full text-left text-xs border border-outline-variant/40 rounded-xl overflow-hidden">
                <thead className="bg-surface-container-high text-on-background font-data-mono uppercase">
                  <tr>
                    <th className="p-3 border-b border-outline-variant/40">Twitch Asset</th>
                    <th className="p-3 border-b border-outline-variant/40">Resolution</th>
                    <th className="p-3 border-b border-outline-variant/40">Aspect Ratio</th>
                    <th className="p-3 border-b border-outline-variant/40">Max File Size</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline-variant/30 text-outline font-data-mono">
                  <tr>
                    <td className="p-3 font-bold text-on-background font-sans">Video Player Offline Screen</td>
                    <td className="p-3 text-primary-container font-bold">1920 × 1080 px</td>
                    <td className="p-3">16:9</td>
                    <td className="p-3">10 MB</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold text-on-background font-sans">Profile Header Banner</td>
                    <td className="p-3 text-primary-container font-bold">1200 × 480 px</td>
                    <td className="p-3">2.5:1</td>
                    <td className="p-3">10 MB</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold text-on-background font-sans">Channel Bio Panels</td>
                    <td className="p-3 text-primary-container font-bold">320 × 160 px</td>
                    <td className="p-3">2:1</td>
                    <td className="p-3">2.9 MB</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold text-on-background font-sans">Profile Avatar / Icon</td>
                    <td className="p-3 text-primary-container font-bold">800 × 800 px</td>
                    <td className="p-3">1:1</td>
                    <td className="p-3">10 MB</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section id="obs-integration" className="space-y-4 pt-6">
            <h2 className="text-xl md:text-2xl font-bold text-on-background">3. Importing Offline Screens into OBS & Streamlabs</h2>
            <p>
              Your 1920×1080 banner double-functions as a broadcast intermission slide. In OBS Studio:
            </p>
            <ol className="list-decimal pl-5 space-y-1.5 text-outline text-xs md:text-sm">
              <li>Create a new Scene titled <strong>"BRB Screen"</strong> or <strong>"Starting Soon"</strong>.</li>
              <li>Under Sources, click <strong>+ &gt; Image</strong> and select your downloaded PNG file.</li>
              <li>Right-click the image source &gt; <strong>Transform &gt; Fit to Screen (Ctrl+F)</strong>.</li>
              <li>Add your background lo-fi music track or countdown timer plugin as a nested source.</li>
            </ol>
          </section>

          <section id="player-safe-zones" className="space-y-4 pt-6">
            <h2 className="text-xl md:text-2xl font-bold text-on-background">4. Video Player Control Safe Zones</h2>
            <CalloutBox type="spec" title="Player Safe Margins">
              When viewers hover over an offline channel on Twitch desktop, the video scrub bar, volume sliders, and gear icon appear across the bottom 180px. Keep all critical text vertically centered between <strong>Y = 300px and Y = 850px</strong>.
            </CalloutBox>
          </section>
        </>
      )
    },

    "discord-banner-size": {
      title: "Discord Server & Profile Banner Size (960 × 540) Dimensions Guide",
      subtitle: "Technical specifications for Discord Server Banners, Server Invite Splashes (1920 × 1080), Nitro Profile Headers, and community branding assets.",
      category: "Platform Specs",
      readTime: "6 min read",
      authorId: "alex-rivers",
      takeaways: [
        { title: "Server Banner Resolution", desc: "960 × 540 pixels (16:9 aspect ratio, minimum 16:9)." },
        { title: "Nitro Profile Banner", desc: "600 × 240 pixels (5:2 ratio) for animated GIF or static PNG user profiles." },
        { title: "Server Invite Splash", desc: "1920 × 1080 pixels (16:9 Full HD) for server invite link cards." },
        { title: "Server Level Perk", desc: "Requires Server Boost Level 2 (7 Boosts) for static banner, Level 3 for animated banner." }
      ],
      toc: [
        { id: "discord-banner-specs", title: "1. Discord Graphic Specs & Boost Tiers" },
        { id: "server-header-safe-zone", title: "2. Server Banner Title Overlay Safe Zone" },
        { id: "invite-splash-art", title: "3. Server Invite Splash Best Practices" },
        { id: "nitro-profile-customization", title: "4. Discord Nitro Profile Banner Setup" }
      ],
      content: (
        <>
          <section id="discord-banner-specs" className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-on-background">1. Discord Graphic Specs & Boost Tiers</h2>
            <p>
              Discord displays custom community banners above your voice and text channel list. The official recommended resolution is <strong>960 × 540 px</strong> at a 16:9 ratio.
            </p>
            <div className="overflow-x-auto my-3">
              <table className="w-full text-left text-xs border border-outline-variant/40 rounded-xl overflow-hidden font-data-mono">
                <thead className="bg-surface-container-high text-on-background uppercase">
                  <tr>
                    <th className="p-3">Discord Asset</th>
                    <th className="p-3">Resolution</th>
                    <th className="p-3">Required Boost Level</th>
                    <th className="p-3">Max File Size</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline-variant/30 text-outline">
                  <tr>
                    <td className="p-3 font-bold text-on-background font-sans">Server Banner (Static)</td>
                    <td className="p-3 text-primary-container font-bold">960 × 540 px</td>
                    <td className="p-3">Level 2 (7 Boosts)</td>
                    <td className="p-3">10 MB</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold text-on-background font-sans">Server Banner (Animated)</td>
                    <td className="p-3 text-primary-container font-bold">960 × 540 px</td>
                    <td className="p-3">Level 3 (14 Boosts)</td>
                    <td className="p-3">10 MB</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold text-on-background font-sans">Server Invite Splash</td>
                    <td className="p-3 text-primary-container font-bold">1920 × 1080 px</td>
                    <td className="p-3">Level 1 (2 Boosts)</td>
                    <td className="p-3">10 MB</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold text-on-background font-sans">User Nitro Profile Header</td>
                    <td className="p-3 text-primary-container font-bold">600 × 240 px</td>
                    <td className="p-3">Nitro Subscriber</td>
                    <td className="p-3">10 MB</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section id="server-header-safe-zone" className="space-y-4 pt-6">
            <h2 className="text-xl md:text-2xl font-bold text-on-background">2. Server Banner Title Overlay Safe Zone</h2>
            <p>
              Discord renders your server name, boost badge, and verification pill directly over the top 28% of the banner. Keep the upper <strong>120 pixels</strong> free of important text or logos so it does not collide with the server title.
            </p>
          </section>
        </>
      )
    },

    "twitter-header-size": {
      title: "Twitter Header Size (1500 × 500) Safe Zone Dimensions Guide 2026",
      subtitle: "Learn the exact safe zones for Twitter/X gaming headers, mobile avatar overlap offsets, and high-impact clan roster cover art.",
      category: "Platform Specs",
      readTime: "6 min read",
      authorId: "alex-rivers",
      takeaways: [
        { title: "Recommended Resolution", desc: "1500 × 500 pixels (3:1 panoramic aspect ratio)." },
        { title: "Avatar Overlap Buffer", desc: "Bottom-left 400 × 200 px is obscured by your circular profile avatar on desktop and mobile." },
        { title: "Top & Bottom Margin", desc: "60px margin at top and bottom is cropped depending on mobile browser search bars." },
        { title: "Supported Formats", desc: "PNG, JPG, GIF up to 5 MB file size." }
      ],
      toc: [
        { id: "twitter-specs", title: "1. Twitter / X Official Header Dimensions" },
        { id: "avatar-safe-zone", title: "2. The Bottom-Left Profile Picture Safe Zone" },
        { id: "clan-roster-layout", title: "3. Designing Esports Clan Roster Headers" }
      ],
      content: (
        <>
          <section id="twitter-specs" className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-on-background">1. Twitter / X Official Header Dimensions</h2>
            <p>
              Twitter headers use a <strong>3:1 aspect ratio</strong> rendered at <strong>1500 × 500 px</strong>. Because Twitter crops headers dynamically on mobile devices and tablet screens, centering your focal design elements is essential.
            </p>
          </section>
          <section id="avatar-safe-zone" className="space-y-4 pt-6">
            <h2 className="text-xl md:text-2xl font-bold text-on-background">2. The Bottom-Left Profile Picture Safe Zone</h2>
            <CalloutBox type="warning" title="Avatar Overlap Warning">
              Your profile picture overlaps the bottom-left corner of the header by approximately <strong>400 px width and 180 px height</strong> on desktop. Never place gamertags, team sponsors, or social handles in the bottom-left corner. Place them centrally or toward the right half.
            </CalloutBox>
          </section>
        </>
      )
    },

    "how-to-make-gaming-banner": {
      title: "How to Make a Gaming Banner for Free Without Photoshop (Step-by-Step)",
      subtitle: "A beginner-friendly masterclass on designing 4K channel art, picking esports fonts, adding glowing neon typography, and exporting lossless PNGs in under 60 seconds.",
      category: "Tutorial",
      readTime: "9 min read",
      authorId: "alex-rivers",
      takeaways: [
        { title: "No Software Needed", desc: "Create 4K channel art entirely inside your web browser with zero software installations." },
        { title: "3-Step Workflow", desc: "Pick game theme &gt; Customize gamertag &amp; schedule &gt; Download 4K PNG." },
        { title: "Safe Zone Automatic Overlay", desc: "Every template is pre-calibrated to 1546×423 px safe zones." }
      ],
      toc: [
        { id: "step1-theme", title: "Step 1: Choose Your Game Theme & Aesthetic" },
        { id: "step2-typography", title: "Step 2: Gamertag Typography & Color Styling" },
        { id: "step3-schedule", title: "Step 3: Adding Your Stream Schedule & Socials" },
        { id: "step4-export", title: "Step 4: 1-Click Lossless 4K Export" }
      ],
      content: (
        <>
          <section id="step1-theme" className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-on-background">Step 1: Choose Your Game Theme & Aesthetic</h2>
            <p>
              Match your banner's visual style to your primary content genre. If you stream tactical FPS games (Valorant, CS2), choose dark gunmetal or glowing cyan. If you stream Minecraft or sandbox adventures, select cozy sunset voxel art.
            </p>
          </section>
          <section id="step2-typography" className="space-y-4 pt-6">
            <h2 className="text-xl md:text-2xl font-bold text-on-background">Step 2: Gamertag Typography & Color Styling</h2>
            <p>
              Your gamertag is the centerpiece of your channel. Use bold, heavy sans-serif or geometric display fonts with multi-layer drop shadows to ensure maximum legibility against explosive backgrounds.
            </p>
          </section>
        </>
      )
    },

    "upload-youtube-banner": {
      title: "How to Upload & Change YouTube Banner on Mobile, PC & Mac (2026)",
      subtitle: "Step-by-step instructions for uploading your new 4K channel banner on YouTube Studio desktop, iPhone/iPad, and Android devices without cropping errors.",
      category: "Tutorial",
      readTime: "5 min read",
      authorId: "marcus-vance",
      takeaways: [
        { title: "Desktop Upload", desc: "YouTube Studio &gt; Customization &gt; Branding &gt; Banner Image &gt; Change." },
        { title: "Mobile Upload", desc: "YouTube App &gt; Profile &gt; View Channel &gt; Edit Pencil Icon &gt; Camera Icon." }
      ],
      toc: [
        { id: "desktop-steps", title: "1. Uploading via YouTube Studio on PC / Mac" },
        { id: "mobile-steps", title: "2. Uploading via YouTube Mobile App (iOS / Android)" }
      ],
      content: (
        <>
          <section id="desktop-steps" className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-on-background">1. Uploading via YouTube Studio on PC / Mac</h2>
            <ol className="list-decimal pl-5 space-y-2 text-outline text-xs md:text-sm">
              <li>Log in to <a href="https://studio.youtube.com" className="text-primary-container underline" target="_blank" rel="noopener">YouTube Studio</a>.</li>
              <li>Click <strong>Customization</strong> in the left sidebar menu.</li>
              <li>Click the <strong>Branding</strong> tab at the top.</li>
              <li>Under <strong>Banner image</strong>, click <strong>Upload</strong> (or <strong>Change</strong>).</li>
              <li>Select your 2560×1440 PNG file and verify the safe area preview box.</li>
              <li>Click <strong>Done</strong>, then click the blue <strong>Publish</strong> button in the top right.</li>
            </ol>
          </section>
        </>
      )
    },

    "gaming-fonts": {
      title: "Best Gaming Fonts for Banners, Logos & Twitch Overlays (Free Typography)",
      subtitle: "The definitive guide to selecting, pairing, and styling gaming typography. Discover the top italic display fonts, monospace tech fonts, and cyberpunk typefaces.",
      category: "Design Theory",
      readTime: "8 min read",
      authorId: "alex-rivers",
      takeaways: [
        { title: "Display Heading Fonts", desc: "Orbitron, Space Grotesk, Impact, Bebas Neue." },
        { title: "Monospace Data Fonts", desc: "JetBrains Mono, Roboto Mono for coordinates and stats." },
        { title: "Drop Shadow Formula", desc: "Use 3px quad-directional black shadows for maximum contrast." }
      ],
      toc: [
        { id: "top-fonts", title: "1. Top 5 Gaming Display Fonts for 2026" },
        { id: "font-pairing", title: "2. Font Pairing Formulas for Streamers" }
      ],
      content: (
        <>
          <section id="top-fonts" className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-on-background">1. Top 5 Gaming Display Fonts for 2026</h2>
            <p>
              Esports branding demands high-impact, geometric typefaces that convey speed, energy, and precision. Fonts like <strong>Orbitron</strong>, <strong>Space Grotesk</strong>, and <strong>Impact</strong> have become universal standards across tournament broadcasts.
            </p>
          </section>
        </>
      )
    },

    "gaming-color-palettes": {
      title: "Best Gaming Color Palettes: Neon, Cyberpunk & Tactical Hex Codes",
      subtitle: "Master the psychology of gaming channel color schemes. Explore curated 4-swatch hex color codes for Cyberpunk, Tactical Stealth, Sunset Lo-Fi, and Gold Esports.",
      category: "Design Theory",
      readTime: "7 min read",
      authorId: "elena-rostova",
      takeaways: [
        { title: "Cyberpunk Neon", desc: "#00d4ff (Electric Cyan) + #ec4899 (Neon Magenta) + #0e0e10 (Obsidian)." },
        { title: "Tactical Stealth", desc: "#10b981 (Radiant Green) + #1e293b (Slate Grey) + #f8fafc (Pure White)." },
        { title: "Championship Gold", desc: "#fbbf24 (Amber Gold) + #78350f (Bronze) + #1c1917 (Stone Black)." }
      ],
      toc: [
        { id: "color-psychology", title: "1. Color Psychology in Streamer Branding" },
        { id: "curated-palettes", title: "2. Top 4 Curated Gaming Hex Palettes" }
      ],
      content: (
        <>
          <section id="color-psychology" className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-on-background">1. Color Psychology in Streamer Branding</h2>
            <p>
              Your color scheme creates instant recognition across YouTube recommendations and Twitch sidebars. High-contrast neon pairings cut through dark-mode UI themes and command viewer attention.
            </p>
          </section>
        </>
      )
    },

    "kick-banner-size": {
      title: "Kick Banner Size (1920 × 1080) & Channel Art Dimensions Guide 2026",
      subtitle: "Official specifications for Kick.com live streaming channel headers, profile avatar safe zones, and mobile web viewports.",
      category: "Platform Specs",
      readTime: "6 min read",
      authorId: "marcus-vance",
      takeaways: [
        { title: "Recommended Resolution", desc: "1920 × 1080 pixels (16:9 Full HD)." },
        { title: "Supported Formats", desc: "PNG, JPG, GIF up to 4 MB upload size." },
        { title: "Avatar Placement", desc: "Circular avatar sits in bottom-left corner with 240px offset." }
      ],
      toc: [
        { id: "kick-specs", title: "1. Kick.com Official Channel Dimensions" },
        { id: "kick-vs-twitch", title: "2. Kick vs. Twitch Banner Differences" }
      ],
      content: (
        <>
          <section id="kick-specs" className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-on-background">1. Kick.com Official Channel Dimensions</h2>
            <p>
              Kick.com utilizes a standardized <strong>1920 × 1080 px (16:9)</strong> channel header banner. Unlike Twitch, which separates the profile banner from the video player offline card, Kick displays a single prominent banner above your chat and live stream container.
            </p>
          </section>
        </>
      )
    },

    "obs-stream-overlays-dimensions": {
      title: "OBS Stream Overlays Dimensions & Canvas Resolution Guide (1080p, 1440p, 4K)",
      subtitle: "Configure OBS Studio and Streamlabs canvas resolutions for crisp 1080p60 streaming. Webcam frame dimensions, gameplay safe zones, and stinger transitions.",
      category: "Technical Setup",
      readTime: "9 min read",
      authorId: "marcus-vance",
      takeaways: [
        { title: "Standard Canvas", desc: "1920 × 1080 at 60 FPS (Base Canvas & Output Scaled)." },
        { title: "1440p Canvas", desc: "2560 × 1440 for high-bitrate YouTube streaming (avoids VP9 blur)." },
        { title: "Webcam Overlay", desc: "16:9 (1920×1080 camera crop) or 4:3 (1440×1080 camera crop)." }
      ],
      toc: [
        { id: "obs-resolutions", title: "1. OBS Base Canvas vs. Output Scaled Resolution" },
        { id: "overlay-layers", title: "2. Recommended Layer Hierarchy in OBS Scenes" }
      ],
      content: (
        <>
          <section id="obs-resolutions" className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-on-background">1. OBS Base Canvas vs. Output Scaled Resolution</h2>
            <p>
              Always set your <strong>Base (Canvas) Resolution</strong> to match your primary monitor (typically 1920×1080 or 2560×1440). Set your <strong>Output (Scaled) Resolution</strong> to 1080p for Twitch (6000 kbps bitrate cap) or 1440p for YouTube Gaming (14,000–18,000 kbps).
            </p>
          </section>
        </>
      )
    },

    "twitch-panels-dimensions-and-markdown": {
      title: "Twitch Panels Size (320 × 160) & Markdown Formatting Guide for Streamers",
      subtitle: "The ultimate guide to designing 320×160 Twitch info panels. Includes markdown syntax for clickable Discord links, PC specs, rules, and tip jar buttons.",
      category: "Platform Specs",
      readTime: "7 min read",
      authorId: "alex-rivers",
      takeaways: [
        { title: "Standard Dimensions", desc: "320 pixels width by 160 pixels height (2:1 aspect ratio)." },
        { title: "Max File Size", desc: "2.9 MB per panel image (PNG recommended)." },
        { title: "Essential 5 Panels", desc: "About Me, Schedule, Discord Server, PC Specs, Rules/Donate." }
      ],
      toc: [
        { id: "panel-dimensions", title: "1. Official Twitch Panel Sizing & Proportions" },
        { id: "markdown-formatting", title: "2. Twitch Panel Markdown Syntax Guide" }
      ],
      content: (
        <>
          <section id="panel-dimensions" className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-on-background">1. Official Twitch Panel Sizing & Proportions</h2>
            <p>
              Twitch panels have a fixed width of <strong>320 pixels</strong>. While height can vary up to 600px, top streamers universally standardise on <strong>320 × 160 px</strong> for a uniform, modular appearance below the live video player.
            </p>
          </section>
        </>
      )
    },

    "youtube-thumbnail-size-and-click-through-rate": {
      title: "YouTube Thumbnail Size (1280 × 720) & CTR Safe Zone Optimization Guide",
      subtitle: "Design high-CTR gaming thumbnails that convert impressions into clicks. 16:9 dimensions, mobile timestamp overlay buffers, and contrast rules.",
      category: "Design Theory",
      readTime: "8 min read",
      authorId: "alex-rivers",
      takeaways: [
        { title: "Recommended Resolution", desc: "1280 × 720 pixels (minimum 640px width, 16:9 ratio)." },
        { title: "Timestamp Buffer", desc: "Keep bottom-right 180 × 60 px free of text (blocked by video duration badge)." },
        { title: "Rule of Thirds", desc: "Place human face/reaction on left/right third, text on opposite third." }
      ],
      toc: [
        { id: "thumbnail-specs", title: "1. YouTube Thumbnail Dimensions & File Limits" },
        { id: "timestamp-safe-zone", title: "2. The Bottom-Right Timestamp Safe Zone" }
      ],
      content: (
        <>
          <section id="thumbnail-specs" className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-on-background">1. YouTube Thumbnail Dimensions & File Limits</h2>
            <p>
              YouTube recommends <strong>1280 × 720 px</strong> with a minimum width of 640 px and a 2 MB file limit. Export as high-quality PNG or 90% quality JPG to maintain clean edges around character cutouts.
            </p>
          </section>
        </>
      )
    },

    "tiktok-and-youtube-shorts-safe-zones": {
      title: "TikTok & YouTube Shorts Safe Zone Dimensions (1080 × 1920 9:16) for Gaming Clips",
      subtitle: "The definitive 9:16 vertical video safe zone guide. Prevent UI icons, captions, like buttons, and sound titles from blocking your gaming highlights.",
      category: "Platform Specs",
      readTime: "7 min read",
      authorId: "marcus-vance",
      takeaways: [
        { title: "Resolution", desc: "1080 × 1920 pixels (9:16 vertical aspect ratio)." },
        { title: "Right Margin Buffer", desc: "Keep rightmost 120px clear of subtitles (blocked by Like, Comment, Share buttons)." },
        { title: "Bottom Margin Buffer", desc: "Keep bottom 320px clear of gamertag/stats (blocked by sound title & caption)." }
      ],
      toc: [
        { id: "vertical-specs", title: "1. Vertical Video Dimensions & Frame Rates" },
        { id: "ui-overlays", title: "2. Platform UI Overlay Collision Map" }
      ],
      content: (
        <>
          <section id="vertical-specs" className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-on-background">1. Vertical Video Dimensions & Frame Rates</h2>
            <p>
              Both TikTok and YouTube Shorts standardize on <strong>1080 × 1920 pixels at 60 FPS</strong>. Center your gameplay action vertically between <strong>Y = 400px and Y = 1400px</strong> for unobstructed visibility.
            </p>
          </section>
        </>
      )
    },

    "esports-jersey-and-social-banner-branding": {
      title: "Esports Team Branding: Roster Headers, Social Banners & Jersey Logos",
      subtitle: "How professional gaming organizations design unified brand identities across Twitter, YouTube, Discord, and physical esports team jerseys.",
      category: "Design Theory",
      readTime: "8 min read",
      authorId: "alex-rivers",
      takeaways: [
        { title: "Vector Master Assets", desc: "Always design core team crests in vector SVG before rasterizing." },
        { title: "Unified Color Codes", desc: "Stick to 1 primary color, 1 secondary accent, and dark neutral backgrounds." },
        { title: "Multi-Platform Scaling", desc: "Adapt one core theme across 2560x1440 (YT), 1500x500 (X), and 960x540 (Discord)." }
      ],
      toc: [
        { id: "clan-identity", title: "1. Principles of Professional Esports Identity" },
        { id: "cross-platform-matrix", title: "2. Cross-Platform Asset Dimensions Matrix" }
      ],
      content: (
        <>
          <section id="clan-identity" className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-on-background">1. Principles of Professional Esports Identity</h2>
            <p>
              A cohesive esports organization maintains consistent color palettes, typography, and logo badge placement across every platform where players interact with fans and tournament organizers.
            </p>
          </section>
        </>
      )
    },

    "png-vs-webp-vs-jpeg-for-gaming-banners": {
      title: "PNG vs WebP vs JPEG for Gaming Banners: Compression & 4K Quality Analysis",
      subtitle: "Technical compression analysis of image formats for gaming graphics. Learn why 24-bit lossless PNG prevents color banding on dark gradient neon banners.",
      category: "Technical Setup",
      readTime: "7 min read",
      authorId: "marcus-vance",
      takeaways: [
        { title: "PNG (24-bit RGB)", desc: "Best for high-contrast neon graphics and dark gradient backgrounds with 0 artifacts." },
        { title: "WebP (Lossy/Lossless)", desc: "30% smaller file size than JPEG, excellent for fast web delivery." },
        { title: "JPEG (8-bit)", desc: "Causes color banding around glowing text due to discrete cosine transform block compression." }
      ],
      toc: [
        { id: "format-comparison", title: "1. Technical Format Comparison Matrix" },
        { id: "color-banding", title: "2. Understanding 8-Bit vs. 24-Bit Color Banding" }
      ],
      content: (
        <>
          <section id="format-comparison" className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-on-background">1. Technical Format Comparison Matrix</h2>
            <p>
              Gaming banners feature glowing neon effects, deep dark slate gradients, and sharp geometric text. Using lossy JPEG compression creates noticeable block artifacts around text edges. <strong>24-bit PNG</strong> preserves every individual pixel value without degradation.
            </p>
          </section>
        </>
      )
    },

    "twitch-emotes-and-sub-badges-dimensions": {
      title: "Twitch Emotes & Sub Badges Size (28x28, 56x56, 112x112) Pixel Grid Guide",
      subtitle: "Complete pixel grid dimensions, transparent background requirements, and auto-resize upload rules for Twitch Affiliate and Partner custom emotes.",
      category: "Platform Specs",
      readTime: "7 min read",
      authorId: "elena-rostova",
      takeaways: [
        { title: "Auto-Resize Mode", desc: "Upload a single 112 × 112 px (or up to 4096×4096 px) square PNG image." },
        { title: "Manual 3-Tier Mode", desc: "112 × 112 px, 56 × 56 px, and 28 × 28 px exact pixel exports." },
        { title: "Transparency Required", desc: "Must use transparent PNG background with RGB color profile." }
      ],
      toc: [
        { id: "emote-dimensions", title: "1. Official Twitch Emote Dimensions" },
        { id: "badge-grid", title: "2. Subscriber & Loyalty Badge Pixel Sizes" }
      ],
      content: (
        <>
          <section id="emote-dimensions" className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-on-background">1. Official Twitch Emote Dimensions</h2>
            <p>
              Twitch supports both <strong>Auto-Resize</strong> (upload a single square PNG between 112×112 and 4096×4096 px) and <strong>Manual Mode</strong> (exact exports at 28×28, 56×56, and 112×112 pixels).
            </p>
          </section>
        </>
      )
    }
  };

  const guide = guidesData[id] || guidesData["youtube-banner-size"];

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": guide.title,
    "description": guide.subtitle,
    "inLanguage": "en-US",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://gamingbanner.com/guides/${id}`
    },
    "author": {
      "@type": "Person",
      "name": "Alex Rivers",
      "jobTitle": "Lead Esports Graphic Designer",
      "url": "https://gamingbanner.com/about"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Gaming Banner",
      "logo": {
        "@type": "ImageObject",
        "url": "https://gamingbanner.com/icon.png"
      }
    },
    "datePublished": "2025-01-15T08:00:00+00:00",
    "dateModified": "2026-08-26T12:00:00+00:00"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <Header />

      <main className="flex-1 min-h-screen pt-24 pb-16 px-4 md:px-8 max-w-[960px] mx-auto flex flex-col gap-6 text-on-background">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs font-data-mono text-outline">
          <Link href="/" className="hover:text-primary-container">Home</Link>
          <span>/</span>
          <Link href="/guides" className="hover:text-primary-container">Guides</Link>
          <span>/</span>
          <span className="text-on-background font-semibold truncate">{guide.title}</span>
        </nav>

        {/* Article Header */}
        <header className="flex flex-col gap-3 py-4 border-b border-outline-variant/50">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase bg-primary-container/15 text-primary-container border border-primary-container/30">
              {guide.category}
            </span>
            <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-surface-container border border-outline-variant/40 text-outline font-data-mono">
              ⏱️ {guide.readTime}
            </span>
            <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-surface-container border border-outline-variant/40 text-primary-container font-data-mono hidden sm:inline">
              ✓ Verified for 2026
            </span>
          </div>
          <h1 className="text-2xl md:text-4xl font-extrabold text-on-background tracking-tight leading-tight">
            {guide.title}
          </h1>
          <p className="text-xs md:text-sm text-outline leading-relaxed">
            {guide.subtitle}
          </p>
        </header>

        {/* Key Takeaways Box */}
        {guide.takeaways && <KeyTakeaways points={guide.takeaways} />}

        {/* Table of Contents */}
        {guide.toc && <TableOfContents items={guide.toc} />}

        {/* Article Main Body */}
        <article className="prose prose-invert max-w-none text-xs md:text-sm text-outline leading-relaxed space-y-6">
          {guide.content}
        </article>

        {/* Action Button */}
        <div className="bg-surface-container-high/60 border border-primary-container/30 p-6 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 mt-8 shadow-lg">
          <div>
            <h4 className="font-bold text-on-background text-base">Ready to create your channel banner?</h4>
            <p className="text-xs text-outline mt-0.5">Pick from 51+ 4K presets and customize your gamertag in 30 seconds.</p>
          </div>
          <Link
            href="/templates"
            className="px-6 py-3 bg-primary-container text-on-primary-container font-bold text-xs rounded-xl hover:bg-primary-container/90 transition-all shadow-md shadow-primary-container/20 whitespace-nowrap"
          >
            Explore 4K Templates →
          </Link>
        </div>

        {/* Author Bio & E-E-A-T Box */}
        <AuthorBio authorId={guide.authorId || "alex-rivers"} updatedDate="August 2026" />
      </main>

      <Footer />
    </>
  );
}
