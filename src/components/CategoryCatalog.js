"use client";

import { useState } from "react";
import Link from "next/link";
import TemplatesNav from "@/components/TemplatesNav";

export default function CategoryCatalog({ templates }) {
  const [selectedGame, setSelectedGame] = useState("All");

  const filteredTemplates = templates.filter((template) => {
    if (selectedGame === "All") return true;
    const name = (template.name || "").toLowerCase();
    const cat = (template.category || "").toLowerCase();
    const game = selectedGame.toLowerCase();
    
    if (game === "call of duty" && (name.includes("cod") || name.includes("cs2") || name.includes("warzone") || cat.includes("tactical"))) return true;
    if (game === "ea sports fc" && (name.includes("fifa") || name.includes("fc 24") || name.includes("fc 25") || name.includes("soccer"))) return true;
    if (game === "gta v" && (name.includes("gta") || name.includes("los santos") || name.includes("street"))) return true;
    
    return name.includes(game) || cat.includes(game);
  });

  return (
    <>
      <TemplatesNav selectedGame={selectedGame} onSelectGame={setSelectedGame} />

      {/* Template Catalog Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg">
        {filteredTemplates.length > 0 ? (
          filteredTemplates.map((template, idx) => (
            <div key={idx} className="bento-card overflow-hidden rounded-xl shadow-lg border-outline-variant/50">
              <div
                className="aspect-video relative flex flex-col items-center justify-center p-md overflow-hidden select-none"
                style={{ ...template.style, containerType: "inline-size" }}
              >
                {/* Contrast overlay tint */}
                <div className="absolute inset-0 bg-black/25 pointer-events-none" />

                {/* Styled Gamertag Preview Text */}
                {template.gamertag && (
                  <span
                    className="relative z-10 font-bold uppercase tracking-wider text-center text-[min(7cqi,26px)] leading-tight"
                    style={template.textStyle}
                  >
                    {template.gamertag}
                  </span>
                )}

                {/* Subtitle tag overlay */}
                {template.sub && (
                  <span className="relative z-10 text-[min(3.6cqi,12px)] font-semibold text-white/90 uppercase tracking-widest mt-1 text-center font-data-mono drop-shadow">
                    {template.sub}
                  </span>
                )}
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
          ))
        ) : (
          <div className="col-span-full text-center py-xl bg-surface-container/40 rounded-xl border border-outline-variant/40 text-outline text-sm font-semibold">
            No templates matching "{selectedGame}". Try another game or click "All".
          </div>
        )}
      </section>
    </>
  );
}
