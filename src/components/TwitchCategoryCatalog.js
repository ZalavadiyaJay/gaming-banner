"use client";

import { useState } from "react";
import Link from "next/link";

export default function TwitchCategoryCatalog({ templates }) {
  const [activeFormat, setActiveFormat] = useState("all");
  const [selectedGenre, setSelectedGenre] = useState("all");

  const formatTabs = [
    { id: "all", label: "All Formats", icon: "🔥", badge: "20" },
    { id: "suites", label: "Full Stream Suites", icon: "📦", badge: "8-in-1" },
    { id: "offline", label: "Offline Screens", icon: "📺", badge: "1080p" },
    { id: "headers", label: "Profile Headers", icon: "🖼️", badge: "1200×480" },
    { id: "panels", label: "Stream Bio Panels", icon: "📌", badge: "320×160" },
    { id: "starting", label: "Starting Soon", icon: "⏱️", badge: "OBS" }
  ];

  const genres = [
    { id: "all", label: "All Games", icon: "⚡" },
    { id: "fps", label: "Tactical FPS", icon: "🎯", games: ["valorant", "call-of-duty", "cs2"] },
    { id: "br", label: "Battle Royale", icon: "🟣", games: ["fortnite", "apex-legends", "pubg-mobile"] },
    { id: "sandbox", label: "Sandbox & Party", icon: "🪵", games: ["minecraft", "roblox", "among-us"] },
    { id: "rpg", label: "RPG & Adventure", icon: "🌸", games: ["genshin-impact", "cyberpunk-2077", "elden-ring", "league-of-legends"] },
    { id: "sports", label: "Racing & Sports", icon: "🏎️", games: ["rocket-league", "ea-sports-fc", "forza-horizon", "asphalt-9", "clash-of-clans", "clash-royale", "gta-v", "overwatch-2"] }
  ];

  const filteredTemplates = templates.filter((template) => {
    // Genre Filter
    if (selectedGenre !== "all") {
      const genreObj = genres.find((g) => g.id === selectedGenre);
      if (genreObj && genreObj.games) {
        if (!genreObj.games.includes(template.game)) return false;
      }
    }
    return true;
  });

  return (
    <div className="flex flex-col gap-8">
      {/* Tier 1: Asset Format Navigation Tabs */}
      <div className="bg-surface-container/70 border border-outline-variant/50 p-2 rounded-2xl flex flex-wrap items-center gap-2 backdrop-blur-md shadow-lg">
        {formatTabs.map((tab) => {
          const isActive = activeFormat === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveFormat(tab.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs md:text-sm font-bold transition-all ${
                isActive
                  ? "bg-primary-container text-on-primary-container shadow-md shadow-primary-container/20 scale-[1.02]"
                  : "text-outline hover:text-on-background hover:bg-surface-container-high/60"
              }`}
            >
              <span>{tab.icon}</span>
              <span>{tab.label}</span>
              <span
                className={`text-[10px] px-1.5 py-0.5 rounded-md font-data-mono ${
                  isActive ? "bg-on-primary-container/15 text-on-primary-container" : "bg-surface-container-highest text-outline"
                }`}
              >
                {tab.badge}
              </span>
            </button>
          );
        })}
      </div>

      {/* Tier 2: Gaming Genre Filter Chips */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        <span className="text-xs font-data-mono text-outline uppercase tracking-wider pl-1 mr-1 hidden sm:inline">
          Genre:
        </span>
        {genres.map((g) => {
          const isSelected = selectedGenre === g.id;
          return (
            <button
              key={g.id}
              onClick={() => setSelectedGenre(g.id)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all border ${
                isSelected
                  ? "bg-secondary-container text-on-secondary-container border-secondary-container/80 shadow-sm"
                  : "bg-surface-container/60 text-outline border-outline-variant/40 hover:border-outline-variant hover:text-on-background"
              }`}
            >
              <span>{g.icon}</span>
              <span>{g.label}</span>
            </button>
          );
        })}
      </div>

      {/* Format Explainer Notice when a specific format is active */}
      {activeFormat !== "all" && (
        <div className="bg-primary-container/10 border border-primary-container/30 p-4 rounded-xl flex items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-3">
            <span className="text-2xl">
              {activeFormat === "suites" && "📦"}
              {activeFormat === "offline" && "📺"}
              {activeFormat === "headers" && "🖼️"}
              {activeFormat === "panels" && "📌"}
              {activeFormat === "starting" && "⏱️"}
            </span>
            <div>
              <p className="font-bold text-on-background">
                {activeFormat === "suites" && "Full Stream Suite Mode: Includes 1080p Offline Screen, 1200×480 Profile Header, and 5 Bio Panels"}
                {activeFormat === "offline" && "Video Player Offline Banner (1920 × 1080 px, 16:9 Full HD)"}
                {activeFormat === "headers" && "Channel Profile Header (1200 × 480 px, 2.5:1 Panoramic Banner)"}
                {activeFormat === "panels" && "Stream Info Panels (320 × 160 px, Set of 5 matching Bio Tiles)"}
                {activeFormat === "starting" && "Stream Starting Soon Scene (1920 × 1080 px for OBS & Streamlabs)"}
              </p>
              <p className="text-outline text-[11px] mt-0.5">
                Customize with your gamertag and stream schedule. 100% free with zero watermarks.
              </p>
            </div>
          </div>
          <button
            onClick={() => setActiveFormat("all")}
            className="text-xs text-primary-container hover:underline font-semibold whitespace-nowrap"
          >
            Show All
          </button>
        </div>
      )}

      {/* Template Catalog Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg">
        {filteredTemplates.length > 0 ? (
          filteredTemplates.map((template, idx) => {
            const isSuite = activeFormat === "suites" || activeFormat === "all";
            const targetUrl = `/customize/${template.game}/${template.bannerSlug}`;

            return (
              <div
                key={idx}
                className="bento-card overflow-hidden rounded-2xl shadow-xl border border-outline-variant/50 hover:border-primary-container/60 transition-all duration-300 flex flex-col justify-between group"
              >
                {/* Visual Thumbnail */}
                <div
                  className="aspect-video relative flex flex-col items-center justify-center p-4 overflow-hidden group-hover:scale-[1.02] transition-transform duration-300"
                  style={{ ...template.style, containerType: "inline-size" }}
                >
                  {/* Overlay Badges */}
                  <div className="absolute top-3 left-3 flex items-center gap-1.5 z-10">
                    <span className="px-2.5 py-1 rounded-lg text-[10px] font-extrabold uppercase tracking-wider bg-background/85 backdrop-blur-md border border-white/10 text-on-background shadow-md">
                      {template.category}
                    </span>
                    <span className="px-2 py-0.5 rounded-md text-[9px] font-bold font-data-mono bg-primary-container text-on-primary-container shadow-sm">
                      {activeFormat === "headers" ? "1200×480" : activeFormat === "panels" ? "320×160" : "1080p FHD"}
                    </span>
                  </div>

                  {/* Multi-Pack Indicator on Full Suite Mode */}
                  {isSuite && (
                    <div className="absolute bottom-3 right-3 bg-black/80 backdrop-blur-md border border-primary-container/40 text-primary-container text-[10px] font-bold px-2 py-1 rounded-lg flex items-center gap-1 shadow-lg">
                      <span>📦</span>
                      <span>8-in-1 Pack</span>
                    </div>
                  )}
                </div>

                {/* Card Content Details */}
                <div className="p-5 bg-surface-container-high flex flex-col justify-between flex-1 gap-4">
                  <div>
                    <div className="flex items-center justify-between">
                      <h3 className="font-extrabold text-base text-on-background group-hover:text-primary-container transition-colors">
                        {template.name}
                      </h3>
                    </div>
                    <p className="text-xs text-outline mt-1 leading-relaxed">
                      {template.desc}
                    </p>

                    {/* Quick Specs Icons */}
                    <div className="flex items-center gap-3 mt-3 pt-3 border-t border-outline-variant/30 text-[11px] text-outline font-data-mono">
                      <span>📐 1920×1080</span>
                      <span>•</span>
                      <span>⚡ Instant PNG</span>
                      <span>•</span>
                      <span>🚫 No Watermark</span>
                    </div>
                  </div>

                  <Link
                    href={targetUrl}
                    className="w-full bg-primary-container hover:bg-primary-container/90 text-on-primary-container text-center font-extrabold text-xs py-3 rounded-xl transition-all shadow-md shadow-primary-container/20 flex items-center justify-center gap-2 group-hover:scale-[1.01]"
                  >
                    <span>⚡ Customize Stream Pack</span>
                    <span className="text-sm">→</span>
                  </Link>
                </div>
              </div>
            );
          })
        ) : (
          <div className="col-span-full text-center py-16 bg-surface-container/40 rounded-2xl border border-outline-variant/40 text-outline text-sm font-semibold flex flex-col items-center gap-3">
            <span className="text-3xl">🎮</span>
            <p>No templates found for this specific genre filter.</p>
            <button
              onClick={() => {
                setSelectedGenre("all");
                setActiveFormat("all");
              }}
              className="px-4 py-2 bg-primary-container text-on-primary-container rounded-xl text-xs font-bold"
            >
              Reset Filters
            </button>
          </div>
        )}
      </section>
    </div>
  );
}
