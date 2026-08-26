// src/components/KeyTakeaways.js

export default function KeyTakeaways({ points = [] }) {
  if (!points || points.length === 0) return null;

  return (
    <div className="bg-primary-container/10 border-2 border-primary-container/30 rounded-2xl p-5 md:p-6 my-6 shadow-md">
      <div className="flex items-center gap-2 mb-3">
        <span className="text-xl">⚡</span>
        <h3 className="font-extrabold text-sm md:text-base text-on-background tracking-tight uppercase tracking-wider font-data-mono">
          Key Takeaways at a Glance
        </h3>
      </div>
      <ul className="space-y-2.5 text-xs md:text-sm text-outline">
        {points.map((pt, idx) => (
          <li key={idx} className="flex items-start gap-2.5">
            <span className="text-primary-container font-black mt-0.5">✓</span>
            <span className="leading-relaxed">
              <strong className="text-on-background">{pt.title}: </strong>
              {pt.desc}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
