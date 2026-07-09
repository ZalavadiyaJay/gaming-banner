import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t border-outline-variant bg-surface-container-lowest py-lg">
      <div className="flex flex-col md:flex-row items-center justify-between gap-md px-xl w-full max-w-[1440px] mx-auto text-sm text-outline">
        {/* Left Links */}
        <div className="flex flex-wrap items-center justify-center gap-lg">
          {[
            { label: "Home", href: "/" },
            { label: "Templates", href: "/youtube-banners" },
            { label: "Guides", href: "/guides" },
            { label: "Blog", href: "/blog" },
            { label: "About", href: "/about" },
            { label: "Contact", href: "/contact" },
            { label: "Privacy", href: "/privacy" },
            { label: "Terms", href: "/terms" },
            { label: "Disclaimer", href: "/disclaimer" },
          ].map((link, idx) => (
            <Link key={idx} href={link.href} className="hover:text-on-background transition-colors">
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right Copyright */}
        <span className="text-xs text-outline/65 font-data-mono">
          &copy; 2025 GamingBanner. All rights reserved.
        </span>
      </div>
    </footer>
  );
}
