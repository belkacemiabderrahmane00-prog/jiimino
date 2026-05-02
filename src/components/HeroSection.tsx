import { ArrowRight, Phone } from "lucide-react";
import heroImg from "@/assets/hero-security.jpg";
import badgeCnaps from "@/assets/badge-cnaps.png";
import badgeRcpro from "@/assets/badge-rcpro.png";

const HeroSection = () => {
  return (
    <section id="accueil" className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Agent de sécurité JII MINO"
          width={1920}
          height={1080}
          className="w-full h-full object-cover object-center"
          style={{ filter: 'brightness(0.75) contrast(1.05)' }}
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(105deg, hsl(225 15% 8% / 0.97) 0%, hsl(225 12% 10% / 0.82) 45%, hsl(225 10% 8% / 0.35) 100%)' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(0deg, hsl(225 15% 8%) 0%, transparent 35%, transparent 70%, hsl(225 15% 8% / 0.6) 100%)' }} />
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 60% 80% at 20% 50%, hsl(42 72% 50% / 0.04) 0%, transparent 70%)' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 min-h-screen flex items-center">
        <div className="max-w-2xl pt-28 pb-16 lg:py-0">
          <div className="animate-fade-up mb-8 flex items-center gap-3">
            <div className="h-px w-8" style={{ background: 'linear-gradient(90deg, transparent, hsl(42 72% 52% / 0.8))' }} />
            <p className="text-[10px] tracking-[0.3em] uppercase font-bold" style={{ color: 'hsl(42 72% 55%)' }}>
              Sécurité privée d'excellence — Paris
            </p>
          </div>

          <h1 className="animate-fade-up-d1 font-serif leading-[1.02] font-semibold mb-8" style={{ fontSize: 'clamp(2.8rem, 6vw, 5rem)' }}>
            Protéger avec<br />
            <span className="gold-shimmer">rigueur et élégance</span>
          </h1>

          <p className="animate-fade-up-d2 text-[15px] md:text-[16px] leading-[1.8] mb-8 max-w-md" style={{ color: 'hsl(38 15% 75%)' }}>
            Des dispositifs sur mesure pour sécuriser vos sites, vos événements
            et vos actifs — avec discrétion et professionnalisme.
          </p>

          <p className="animate-fade-up-d2 font-serif italic text-lg mb-10" style={{ color: 'hsl(42 55% 58%)' }}>
            « Votre sécurité, notre engagement »
          </p>

          <div className="animate-fade-up-d3 flex flex-col sm:flex-row gap-3 mb-12">
            <a href="#contact" className="btn-premium px-7 py-3.5">
              Demander un devis
              <ArrowRight className="w-4 h-4" />
            </a>
            <a href="tel:+33781914499" className="btn-outline-premium px-7 py-3.5">
              <Phone className="w-4 h-4" />
              Appeler 24h/24
            </a>
          </div>

          <div className="animate-fade-up-d4 flex items-center gap-6">
            <div className="flex items-center gap-3">
              <img src={badgeCnaps} alt="Agrément CNAPS" className="w-10 h-10 rounded-full" />
              <div>
                <p className="text-[11px] font-semibold text-foreground/75">Agréée CNAPS</p>
                <p className="text-[10px] text-foreground/45">Sécurité réglementée</p>
              </div>
            </div>
            <div className="w-px h-8 bg-foreground/15" />
            <div className="flex items-center gap-3">
              <img src={badgeRcpro} alt="Assurance RC Pro" className="w-10 h-10 rounded-full" />
              <div>
                <p className="text-[11px] font-semibold text-foreground/75">Assurance RC Pro</p>
                <p className="text-[10px] text-foreground/45">Couverture complète</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
    </section>
  );
};

export default HeroSection;
