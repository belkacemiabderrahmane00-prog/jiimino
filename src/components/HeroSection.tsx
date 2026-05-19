import { useEffect, useRef } from "react";
import { ArrowRight, Phone } from "lucide-react";
import heroImg from "@/assets/hero-security.jpg";
import badgeCnaps from "@/assets/badge-cnaps.png";
import badgeRcpro from "@/assets/badge-rcpro.png";

const HeroSection = () => {
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    let raf: number;
    const onScroll = () => {
      raf = requestAnimationFrame(() => {
        if (imgRef.current) {
          const y = window.scrollY * 0.35;
          imgRef.current.style.transform = `translateY(${y}px) scale(1.08)`;
        }
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section id="accueil" className="relative min-h-screen overflow-hidden">
      {/* Background parallax image */}
      <div className="absolute inset-0">
        <img
          ref={imgRef}
          src={heroImg}
          alt="Agent de sécurité JII MINO"
          width={1920}
          height={1080}
          className="w-full h-full object-cover object-center will-change-transform"
          style={{
            filter: 'brightness(0.75) contrast(1.05)',
            transform: 'scale(1.08)',
            transformOrigin: 'center top',
          }}
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(105deg, hsl(225 15% 8% / 0.97) 0%, hsl(225 12% 10% / 0.82) 45%, hsl(225 10% 8% / 0.35) 100%)' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(0deg, hsl(225 15% 8%) 0%, transparent 35%, transparent 70%, hsl(225 15% 8% / 0.6) 100%)' }} />
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 60% 80% at 20% 50%, hsl(42 72% 50% / 0.04) 0%, transparent 70%)' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 min-h-screen flex items-center">
        <div className="max-w-2xl pt-28 pb-16 lg:py-0">

          <h1
            className="animate-fade-up-d1 font-serif leading-[1.02] font-semibold mb-8"
            style={{ fontSize: 'clamp(2.8rem, 6vw, 5rem)' }}
          >
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

          <div className="animate-fade-up-d4 flex flex-wrap items-center gap-4 sm:gap-6">
            <div className="flex items-center gap-3">
              <div className="relative">
                <img src={badgeCnaps} alt="Agrément CNAPS" className="w-11 h-11 rounded-full ring-1 ring-primary/30" />
                <div className="absolute inset-0 rounded-full" style={{ boxShadow: '0 0 12px hsl(42 72% 50% / 0.3)' }} />
              </div>
              <div>
                <p className="text-[11px] font-semibold text-foreground/80">Agréée CNAPS</p>
                <p className="text-[10px] text-foreground/45">Sécurité réglementée</p>
              </div>
            </div>
            <div className="w-px h-8 bg-foreground/15" />
            <div className="flex items-center gap-3">
              <div className="relative">
                <img src={badgeRcpro} alt="Assurance RC Pro" className="w-11 h-11 rounded-full ring-1 ring-primary/30" />
                <div className="absolute inset-0 rounded-full" style={{ boxShadow: '0 0 12px hsl(42 72% 50% / 0.3)' }} />
              </div>
              <div>
                <p className="text-[11px] font-semibold text-foreground/80">Assurance RC Pro</p>
                <p className="text-[10px] text-foreground/45">Couverture complète</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-up-d4 hidden md:flex"
        style={{ color: 'hsl(42 72% 50% / 0.5)' }}
      >
        <span className="text-[9px] tracking-[0.3em] uppercase">Défiler</span>
        <div className="w-px h-10 overflow-hidden">
          <div
            className="w-full h-1/2"
            style={{
              background: 'linear-gradient(to bottom, hsl(42 72% 50% / 0.8), transparent)',
              animation: 'scrollDrop 1.5s ease-in-out infinite',
            }}
          />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
    </section>
  );
};

export default HeroSection;
