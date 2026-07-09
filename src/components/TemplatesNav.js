import Link from "next/link";

export default function TemplatesNav({ activeTab }) {
  const tabs = [
    { id: "youtube", label: "YouTube Banners", href: "/youtube-banners" },
    { id: "twitch", label: "Twitch Banners", href: "/twitch-banners" },
    { id: "discord", label: "Discord Banners", href: "/discord-banners" },
    { id: "twitter", label: "Twitter Headers", href: "/twitter-headers" },
  ];

  return (
    <div className="w-full border-b border-outline-variant/40 bg-surface-container/20 pb-sm mb-lg">
      <div className="w-full max-w-[1440px] mx-auto px-md md:px-xl flex items-center justify-start md:justify-center gap-sm overflow-x-auto scrollbar-hide py-xs">
        {tabs.map((tab, idx) => {
          const isActive = activeTab === tab.id;
          return (
            <Link
              key={idx}
              href={tab.href}
              className={`px-lg py-2 rounded-lg text-xs font-bold whitespace-nowrap transition-all uppercase tracking-wider ${
                isActive
                  ? "bg-primary-container text-on-primary-container shadow-md shadow-primary-container/10 scale-102"
                  : "bg-surface-container border border-outline-variant/60 text-outline hover:border-outline hover:text-on-background"
              }`}
            >
              {tab.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
