// src/components/AuthorBio.js
import Link from "next/link";
import { AUTHORS, DEFAULT_AUTHOR } from "@/data/authors";

export default function AuthorBio({ authorId = "alex-rivers", updatedDate = "August 2026", reviewedBy = "marcus-vance" }) {
  const author = AUTHORS[authorId] || DEFAULT_AUTHOR;
  const reviewer = AUTHORS[reviewedBy] || AUTHORS["marcus-vance"];

  return (
    <div className="bg-surface-container/70 border border-outline-variant/60 rounded-2xl p-6 md:p-8 mt-12 backdrop-blur-md shadow-xl flex flex-col gap-6">
      {/* Top Verification Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-outline-variant/40 text-xs text-outline">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse" />
          <span className="font-data-mono text-on-background font-bold">
            Editorial Standard & Fact-Checked
          </span>
        </div>
        <div className="flex items-center gap-4 font-data-mono text-[11px]">
          <span>Updated: <strong className="text-on-background">{updatedDate}</strong></span>
          <span>•</span>
          <span>Technical Reviewer: <strong className="text-primary-container">{reviewer.name}</strong></span>
        </div>
      </div>

      {/* Author Details */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
        <div className="relative">
          <div
            className="w-16 h-16 rounded-full bg-cover bg-center border-2 border-primary-container shadow-lg shadow-primary-container/20"
            style={{ backgroundImage: `url('${author.avatar}')` }}
          />
          {author.verified && (
            <span
              className="absolute -bottom-1 -right-1 bg-primary-container text-on-primary-container rounded-full w-5 h-5 flex items-center justify-center text-[10px] font-black shadow-md"
              title="Verified Industry Expert"
            >
              ✓
            </span>
          )}
        </div>

        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <h4 className="font-black text-lg text-on-background">
              {author.name}
            </h4>
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold font-data-mono bg-primary-container/15 text-primary-container border border-primary-container/30">
              {author.experience}
            </span>
          </div>
          <p className="text-xs font-semibold text-outline mt-0.5">
            {author.role}
          </p>
          <p className="text-xs text-outline/90 mt-2 leading-relaxed">
            {author.bio}
          </p>
        </div>
      </div>

      {/* Trust & Transparency Note */}
      <div className="bg-surface-container-high/50 p-3.5 rounded-xl border border-outline-variant/30 text-[11px] text-outline flex items-center justify-between gap-4">
        <span>
          🛡️ <strong>GamingBanner Editorial Integrity:</strong> All guides are tested on live broadcast software and verified against current platform safe-zone specifications.
        </span>
        <Link href="/about" className="text-primary-container hover:underline whitespace-nowrap font-bold">
          Our Standards →
        </Link>
      </div>
    </div>
  );
}
