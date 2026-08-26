// src/components/CalloutBox.js

export default function CalloutBox({ type = "tip", title, children }) {
  const styles = {
    tip: {
      border: "border-primary-container/40",
      bg: "bg-primary-container/10",
      badgeBg: "bg-primary-container text-on-primary-container",
      icon: "💡",
      defaultTitle: "Pro Designer Tip"
    },
    warning: {
      border: "border-yellow-500/40",
      bg: "bg-yellow-500/10",
      badgeBg: "bg-yellow-500 text-black",
      icon: "⚠️",
      defaultTitle: "Common Pitfall to Avoid"
    },
    spec: {
      border: "border-cyan-500/40",
      bg: "bg-cyan-500/10",
      badgeBg: "bg-cyan-500 text-black",
      icon: "📐",
      defaultTitle: "Technical Specification"
    }
  };

  const current = styles[type] || styles.tip;

  return (
    <div className={`${current.bg} border ${current.border} rounded-xl p-5 my-6 shadow-sm`}>
      <div className="flex items-center gap-2 mb-2">
        <span className="text-base">{current.icon}</span>
        <h4 className="font-bold text-xs md:text-sm text-on-background uppercase tracking-wider font-data-mono">
          {title || current.defaultTitle}
        </h4>
      </div>
      <div className="text-xs md:text-sm text-outline leading-relaxed space-y-2">
        {children}
      </div>
    </div>
  );
}
