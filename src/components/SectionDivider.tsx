interface SectionDividerProps {
  type: "wave" | "curve" | "angle" | "swoosh";
  fromColor?: string;
  toColor?: string;
  className?: string;
}

const SectionDivider = ({ type, fromColor, toColor, className = "" }: SectionDividerProps) => {
  const top = fromColor || "hsl(225, 6%, 13%)";
  const bottom = toColor || "hsl(40, 25%, 92%)";
  const gold = "hsl(42, 72%, 50%)";

  const svgProps = {
    width: "100%",
    preserveAspectRatio: "none" as const,
    className: `block w-full ${className}`,
    xmlns: "http://www.w3.org/2000/svg",
  };

  switch (type) {
    case "wave":
      return (
        <svg {...svgProps} viewBox="0 0 1440 80" style={{ height: "60px" }}>
          <path d="M0,0 L0,40 Q360,80 720,40 Q1080,0 1440,40 L1440,0 Z" fill={top} />
          <path d="M0,40 Q360,80 720,40 Q1080,0 1440,40 L1440,80 L0,80 Z" fill={bottom} />
          {/* Metallic accent line */}
          <path d="M0,40 Q360,80 720,40 Q1080,0 1440,40" fill="none" stroke={gold} strokeWidth="0.5" strokeOpacity="0.25" />
        </svg>
      );

    case "curve":
      return (
        <svg {...svgProps} viewBox="0 0 1440 80" style={{ height: "60px" }}>
          <path d="M0,0 L0,30 Q720,80 1440,30 L1440,0 Z" fill={top} />
          <path d="M0,30 Q720,80 1440,30 L1440,80 L0,80 Z" fill={bottom} />
          <path d="M0,30 Q720,80 1440,30" fill="none" stroke={gold} strokeWidth="0.5" strokeOpacity="0.25" />
        </svg>
      );

    case "angle":
      return (
        <svg {...svgProps} viewBox="0 0 1440 60" style={{ height: "50px" }}>
          <polygon points="0,0 1440,0 1440,15 0,60" fill={top} />
          <polygon points="0,60 1440,15 1440,60 0,60" fill={bottom} />
          <line x1="0" y1="60" x2="1440" y2="15" stroke={gold} strokeWidth="0.5" strokeOpacity="0.25" />
        </svg>
      );

    case "swoosh":
      return (
        <svg {...svgProps} viewBox="0 0 1440 80" style={{ height: "60px" }}>
          <path d="M0,0 L0,35 C300,70 600,10 900,50 C1100,70 1440,35 1440,35 L1440,0 Z" fill={top} />
          <path d="M0,35 C300,70 600,10 900,50 C1100,70 1440,35 1440,35 L1440,80 L0,80 Z" fill={bottom} />
          <path d="M0,35 C300,70 600,10 900,50 C1100,70 1440,35 1440,35" fill="none" stroke={gold} strokeWidth="0.5" strokeOpacity="0.25" />
        </svg>
      );

    default:
      return null;
  }
};

export default SectionDivider;
