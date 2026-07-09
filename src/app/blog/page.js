import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Gaming Brand Design & Streaming Growth Blog | GAMINGBANNER",
  description: "Read expert guides, design trends, and growth strategies for streamers and content creators. Level up your gaming brand identity.",
};

export default function BlogHub() {
  const posts = [
    {
      slug: "best-youtube-banner-ideas-2025",
      title: "Top 10 YouTube Gaming Banner Ideas for 2025",
      date: "June 28, 2025",
      readTime: "5 min read",
      excerpt: "Discover the trending graphics, gaming color schemes, and layout systems esports channels are using this year to scale visual identity.",
      category: "Design",
    },
    {
      slug: "how-to-grow-your-gaming-channel",
      title: "How to Grow Your Gaming Channel: 5 Creator Tips",
      date: "June 15, 2025",
      readTime: "7 min read",
      excerpt: "Proven branding strategies, dynamic overlay hooks, custom thumbnails, and community retention rules to scale your channel successfully.",
      category: "Growth",
    },
    {
      slug: "free-vs-paid-banner-makers",
      title: "Free vs Paid Banner Makers: Which is Best?",
      date: "May 30, 2025",
      readTime: "4 min read",
      excerpt: "An honest comparison analyzing online automated template engines versus professional Photoshop vectors. Find what fits your stream budget.",
      category: "Branding",
    },
    {
      slug: "cool-gaming-names-generator-tips",
      title: "Cool Gaming Names: Best Gamertag Ideas & Generator Tips",
      date: "June 30, 2025",
      readTime: "6 min read",
      excerpt: "Stuck on finding a cool gamer name? Here is our curated list of 200+ gamertag ideas grouped by genre, plus expert tips to create your own.",
      category: "Branding",
    },
    {
      slug: "best-obs-settings-for-streaming",
      title: "Best OBS Settings for Streaming & Recording (2025 Guide)",
      date: "June 25, 2025",
      readTime: "8 min read",
      excerpt: "Configure Open Broadcaster Software (OBS) for lag-free gaming streams. Settings for YouTube, Twitch, and low-end PC configurations.",
      category: "Guides",
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
        "name": "Blog",
        "item": "https://gamingbanner.com/blog"
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
          <h1 className="text-4xl font-extrabold text-on-background">Gaming Banner Blog</h1>
          <p className="max-w-[620px] text-sm text-outline leading-relaxed">
            Tips, tutorials, design ideas, and growth guides for gaming content creators and esports streamers.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-lg">
          {posts.map((post, idx) => (
            <div key={idx} className="bento-card rounded-xl overflow-hidden shadow-lg border-outline-variant/50 flex flex-col justify-between p-lg h-80">
              <div>
                <div className="flex items-center gap-sm text-[11px] font-data-mono text-outline/80 mb-sm">
                  <span>{post.date}</span>
                  <span>&bull;</span>
                  <span>{post.readTime}</span>
                </div>
                <h2 className="font-extrabold text-lg text-on-background hover:text-primary-container transition-colors line-clamp-2">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>
                <p className="text-xs text-outline line-clamp-3 mt-xs leading-relaxed">
                  {post.excerpt}
                </p>
              </div>

              <div className="flex items-center justify-between border-t border-outline-variant/30 pt-sm mt-md">
                <span className="text-[10px] font-bold uppercase tracking-wider text-primary-container/85">
                  {post.category}
                </span>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-xs font-bold text-primary-container hover:text-primary transition-colors flex items-center gap-1"
                >
                  Read Article &rarr;
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
