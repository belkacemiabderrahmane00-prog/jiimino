import { useEffect, useState } from "react";
import { X, ArrowRight, Phone } from "lucide-react";

const ExitIntentPopup = () => {
  const [visible, setVisible] = useState(false);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const alreadyShown = sessionStorage.getItem("jiimino_exit_shown");
    if (alreadyShown) return;

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 5 && !shown) {
        setVisible(true);
        setShown(true);
        sessionStorage.setItem("jiimino_exit_shown", "1");
      }
    };

    const timer = setTimeout(() => {
      document.addEventListener("mouseleave", handleMouseLeave);
    }, 8000);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [shown]);

  const close = () => setVisible(false);

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-[300] flex items-center justify-center p-4"
      onClick={close}
    >
      <div className="absolute inset-0 bg-black/65 backdrop-blur-sm" />
      <div
        className="relative w-full max-w-md rounded-2xl p-8 animate-fade-up"
        style={{
          background: 'linear-gradient(145deg, hsl(228 8% 16%), hsl(228 7% 14%))',
          border: '1px solid hsl(42 72% 50% / 0.22)',
          boxShadow: '0 24px 80px hsl(0 0% 0% / 0.5), 0 0 60px hsl(42 72% 50% / 0.06)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={close}
          className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors"
        >
          <X className="w-4 h-4 text-foreground/50" />
        </button>

        <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5"
          style={{ background: 'hsl(42 72% 50% / 0.12)', border: '1px solid hsl(42 72% 50% / 0.25)' }}>
          <Phone className="w-5 h-5 text-primary" />
        </div>

        <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-primary mb-3">Avant de partir</p>
        <h3 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-3 leading-tight">
          Obtenez votre devis<br />
          <span className="gold-shimmer">en moins de 2 heures</span>
        </h3>
        <p className="text-[13px] leading-relaxed mb-7" style={{ color: 'hsl(38 15% 55%)' }}>
          Notre équipe répond à toutes les demandes en jours ouvrés. Gratuit, sans engagement.
        </p>

        <div className="flex flex-col gap-3">
          <a href="#contact" onClick={close} className="btn-premium py-3.5 justify-center text-[12px]">
            Demander un devis gratuit
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="tel:+33955790988"
            className="btn-outline-premium py-3 justify-center text-[12px]"
          >
            <Phone className="w-4 h-4" />
            09 55 79 09 88
          </a>
        </div>

        <button onClick={close} className="mt-5 w-full text-center text-[11px] hover:text-foreground/60 transition-colors" style={{ color: 'hsl(38 15% 35%)' }}>
          Continuer sans devis
        </button>
      </div>
    </div>
  );
};

export default ExitIntentPopup;
