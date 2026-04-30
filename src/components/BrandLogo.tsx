interface BrandLogoProps {
  className?: string;
  variant?: "light" | "dark";
}

const BrandLogo = ({ className = "h-10", variant = "light" }: BrandLogoProps) => {
  const textColor = variant === "light" ? "#f0ead6" : "#1a1a2e";
  
  return (
    <svg
      viewBox="0 0 240 60"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="JII MINO"
    >
      <defs>
        <linearGradient id="goldGradO" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#b8860b" />
          <stop offset="30%" stopColor="#daa520" />
          <stop offset="60%" stopColor="#f5d060" />
          <stop offset="100%" stopColor="#c5941a" />
        </linearGradient>
      </defs>
      
      {/* JII */}
      <text
        x="4"
        y="44"
        fontFamily="'Cormorant Garamond', Georgia, serif"
        fontSize="42"
        fontWeight="600"
        letterSpacing="3"
        fill={textColor}
      >
        JII
      </text>
      
      {/* MINO — O collé à MIN */}
      <text
        x="94"
        y="44"
        fontFamily="'Cormorant Garamond', Georgia, serif"
        fontSize="42"
        fontWeight="600"
        letterSpacing="3"
        fill={textColor}
      >
        MIN
      </text>
      
      {/* Golden O — collé right after MIN */}
      <text
        x="191"
        y="44"
        fontFamily="'Cormorant Garamond', Georgia, serif"
        fontSize="42"
        fontWeight="700"
        fill="url(#goldGradO)"
      >
        O
      </text>
    </svg>
  );
};

export default BrandLogo;
