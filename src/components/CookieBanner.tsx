import { useState, useEffect } from "react";
import { X, Cookie } from "lucide-react";

const CookieBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("jiimino_cookie_consent");
    if (!consent) setTimeout(() => setVisible(true), 1500);
  }, []);

  const accept = () => {
    localStorage.setItem("jiimino_cookie_consent", "accepted");
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem("jiimino_cookie_consent", "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-[200] px-4 pb-4 md:px-6 md:pb-6 animate-fade-up"
    >
      <div
        className="max-w-3xl mx-auto rounded-2xl p-5 md:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4"
        style={{
          background: 'hsl(225 8% 14% / 0.97)',
          border: '1px solid hsl(42 72% 50% / 0.18)',
          boxShadow: '0 -4px 40px hsl(0 0% 0% / 0.35), 0 0 60px hsl(42 72% 50% / 0.04)',
          backdropFilter: 'blur(20px)',
        }}
      >
        <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
          style={{ background: 'hsl(42 72% 50% / 0.1)', border: '1px solid hsl(42 72% 50% / 0.2)' }}>
          <Cookie className="w-4 h-4 text-primary" />
        </div>

        <div className="flex-1 min-w-0">
          <p className="text-[13px] font-semibold text-foreground/90 mb-1">Ce site utilise des cookies</p>
          <p className="text-[12px] leading-relaxed" style={{ color: 'hsl(38 15% 55%)' }}>
            Nous utilisons uniquement des cookies techniques indispensables au bon fonctionnement du site. Aucun cookie publicitaire.{" "}
            <a href="/politique-de-confidentialite" className="text-primary hover:underline">En savoir plus</a>
          </p>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={decline}
            className="px-4 py-2 text-[11px] font-semibold uppercase tracking-wider rounded-md transition-all duration-300 hover:bg-white/5"
            style={{ color: 'hsl(38 15% 50%)', border: '1px solid hsl(225 6% 28%)' }}
          >
            Refuser
          </button>
          <button
            onClick={accept}
            className="btn-premium px-5 py-2 text-[11px]"
          >
            Accepter
          </button>
          <button onClick={decline} className="ml-1 text-foreground/30 hover:text-foreground/60 transition-colors">
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
