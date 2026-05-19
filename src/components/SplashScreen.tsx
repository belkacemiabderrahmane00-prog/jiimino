import { useEffect, useState } from "react";

const SplashScreen = () => {
  const [phase, setPhase] = useState<"visible" | "fading" | "gone">("visible");

  useEffect(() => {
    const already = sessionStorage.getItem("jiimino_splash_shown");
    if (already) { setPhase("gone"); return; }

    const t1 = setTimeout(() => setPhase("fading"), 1600);
    const t2 = setTimeout(() => {
      setPhase("gone");
      sessionStorage.setItem("jiimino_splash_shown", "1");
    }, 2200);

    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  if (phase === "gone") return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
      style={{
        background: 'linear-gradient(135deg, hsl(225 15% 7%), hsl(228 12% 10%))',
        transition: 'opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
        opacity: phase === "fading" ? 0 : 1,
        pointerEvents: phase === "fading" ? "none" : "all",
      }}
    >
      {/* Ambient glow */}
      <div
        className="absolute"
        style={{
          width: '600px', height: '400px',
          background: 'radial-gradient(ellipse, hsl(42 72% 50% / 0.08) 0%, transparent 65%)',
          filter: 'blur(40px)',
        }}
      />

      {/* Logo */}
      <div
        className="relative z-10 flex flex-col items-center"
        style={{ animation: 'splashReveal 0.9s cubic-bezier(0.16, 1, 0.3, 1) both' }}
      >
        <svg viewBox="0 0 240 60" className="h-16 md:h-20 mb-6" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="goldSplash" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#b8860b" />
              <stop offset="30%" stopColor="#daa520" />
              <stop offset="60%" stopColor="#f5d060" />
              <stop offset="100%" stopColor="#c5941a" />
            </linearGradient>
          </defs>
          <text x="4" y="44" fontFamily="'Cormorant Garamond', Georgia, serif" fontSize="42" fontWeight="600" letterSpacing="3" fill="#f0ead6">JII</text>
          <text x="94" y="44" fontFamily="'Cormorant Garamond', Georgia, serif" fontSize="42" fontWeight="600" letterSpacing="3" fill="#f0ead6">MIN</text>
          <text x="191" y="44" fontFamily="'Cormorant Garamond', Georgia, serif" fontSize="42" fontWeight="700" fill="url(#goldSplash)">O</text>
        </svg>

        {/* Gold line that draws */}
        <div
          className="h-px mb-5"
          style={{
            width: '120px',
            background: 'linear-gradient(90deg, transparent, hsl(42 80% 55%), transparent)',
            animation: 'drawLine 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.4s both',
          }}
        />

        <p
          style={{
            color: 'hsl(42 72% 55%)',
            fontSize: '9px',
            letterSpacing: '0.35em',
            textTransform: 'uppercase',
            fontWeight: 600,
            animation: 'splashReveal 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.5s both',
          }}
        >
          Sécurité privée d'excellence
        </p>
      </div>

      {/* Bottom loader bar */}
      <div
        className="absolute bottom-0 left-0 h-[2px]"
        style={{
          background: 'linear-gradient(90deg, hsl(42 72% 46%), hsl(43 88% 64%))',
          boxShadow: '0 0 8px hsl(42 72% 50% / 0.6)',
          animation: 'splashLoader 1.5s cubic-bezier(0.4, 0, 0.2, 1) both',
        }}
      />
    </div>
  );
};

export default SplashScreen;
