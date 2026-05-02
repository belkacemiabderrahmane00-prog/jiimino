import { useState, useEffect } from "react";
import { TrendingUp } from "lucide-react";

const SocialProofBadge = () => {
  const [visible, setVisible] = useState(false);
  const [count] = useState(7);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 4000);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-24 left-5 z-40 animate-fade-up"
      style={{ animation: 'fadeUp 0.5s ease forwards' }}
    >
      <div
        className="flex items-center gap-2.5 px-4 py-2.5 rounded-full text-[11px] font-semibold"
        style={{
          background: 'hsl(225 8% 14% / 0.95)',
          border: '1px solid hsl(42 72% 50% / 0.25)',
          boxShadow: '0 4px 20px hsl(0 0% 0% / 0.3)',
          backdropFilter: 'blur(12px)',
        }}
      >
        <span
          className="w-2 h-2 rounded-full shrink-0"
          style={{
            background: '#22c55e',
            boxShadow: '0 0 6px #22c55e',
            animation: 'pulseGold 2s ease-in-out infinite',
          }}
        />
        <TrendingUp className="w-3 h-3 shrink-0" style={{ color: 'hsl(42 72% 55%)' }} />
        <span style={{ color: 'hsl(38 15% 80%)' }}>
          <span style={{ color: 'hsl(42 85% 62%)', fontWeight: 700 }}>{count} devis</span> demandés ce mois
        </span>
      </div>
    </div>
  );
};

export default SocialProofBadge;
