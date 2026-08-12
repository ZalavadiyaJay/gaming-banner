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
    
    if (game.includes("counter strike") || game.includes("counter-strike") || game === "cs2") {
      return name.includes("counter-strike") || name.includes("counter strike") || name.includes("cs2") || template.game === "cs2";
    }
    if (game === "call of duty" && (name.includes("cod") || name.includes("warzone") || template.game === "call-of-duty")) return true;
    if (game === "ea sports fc" && (name.includes("fifa") || name.includes("fc 24") || name.includes("fc 25") || name.includes("soccer") || template.game === "ea-sports-fc")) return true;
    if (game === "gta v" && (name.includes("gta") || name.includes("los santos") || name.includes("street") || template.game === "gta-v")) return true;
    
    return name.includes(game) || cat.includes(game) || (template.game && template.game.toLowerCase().includes(game.replace(/\s+/g, '-')));
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
                className="aspect-video relative flex flex-col items-center justify-center p-md overflow-hidden"
                style={{ ...template.style, containerType: "inline-size" }}
              ></div>
              <div className="p-lg bg-surface-container-high flex flex-col justify-between h-40">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-on-background">{template.name}</span>
                  </div>
                  <p className="text-xs text-outline mt-1">{template.desc}</p>
                </div>

                <Link
                  href={template.game && template.bannerSlug ? `/customize/${template.game}/${template.bannerSlug}` : `/customize/${template.id}`}
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
