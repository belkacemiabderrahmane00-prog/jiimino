import { ArrowRight, Shield, Phone } from "lucide-react";
import heroSecurity from "@/assets/hero-security.jpg";
import photoSurveillance from "@/assets/photo-surveillance.jpg";
import photoEvent from "@/assets/photo-evenementiel.jpg";

const stats = [
  { value: "50+", label: "Agents certifiés" },
  { value: "500+", label: "Missions réalisées" },
  { value: "24/7", label: "Disponibilité" },
  { value: "98%", label: "Satisfaction" },
];

const VideoShowcase = () => (
  <section className="relative overflow-hidden">
    {/* Transition depuis le hero */}
    <div className="absolute top-0 inset-x-0 h-24 z-10 pointer-events-none"
      style={{ background: 'linear-gradient(to bottom, hsl(225 15% 8%), transparent)' }} />

    {/* Image cinématique principale */}
    <div className="relative h-[70vh] md:h-[85vh] max-h-[780px]">
      <img
        src={heroSecurity}
        alt="JII MINO – sécurité d'excellence"
        className="absolute inset-0 w-full h-full object-cover object-center"
        style={{ filter: 'brightness(0.45) contrast(1.1) saturate(0.85)' }}
      />

      {/* Overlays sophistiqués */}
      <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, hsl(225 20% 6% / 0.85) 0%, transparent 60%)' }} />
      <div className="absolute inset-0" style={{ background: 'linear-gradient(0deg, hsl(225 15% 8%) 0%, transparent 40%, transparent 70%, hsl(225 15% 8% / 0.5) 100%)' }} />
      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 50%, hsl(42 72% 50% / 0.06), transparent 70%)' }} />

      {/* Contenu centré */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-6">
        {/* Badge */}
        <div className="flex items-center gap-2.5 mb-8 px-5 py-2.5 rounded-full" style={{ background: 'hsl(42 72% 50% / 0.1)', border: '1px solid hsl(42 72% 50% / 0.25)', backdropFilter: 'blur(12px)' }}>
          <Shield className="w-3.5 h-3.5 text-primary" />
          <span className="text-[11px] font-bold tracking-[0.22em] uppercase text-primary">Agréé CNAPS — Paris & IDF</span>
        </div>

        <h2 className="font-serif text-[clamp(2.4rem,6vw,5rem)] leading-[1.02] font-semibold mb-6 max-w-4xl">
          La sécurité <span className="gold-shimmer">au service<br />de l'excellence</span>
        </h2>

        <p className="text-[15px] md:text-[17px] leading-relaxed max-w-xl mb-10" style={{ color: 'hsl(38 15% 70%)' }}>
          Des agents formés, des dispositifs sur mesure, une présence qui protège et rassure — 24h/24, 7j/7.
        </p>

        <div className="flex flex-col sm:flex-row gap-3">
          <a href="#contact" className="btn-premium px-8 py-4 text-[13px]">
            Demander un devis gratuit
            <ArrowRight className="w-4 h-4" />
          </a>
          <a href="tel:+33781914499" className="btn-outline-premium px-8 py-4 text-[13px]">
            <Phone className="w-4 h-4" />
            Appeler maintenant
          </a>
        </div>

        {/* Stats row */}
        <div className="absolute bottom-10 left-0 right-0 flex justify-center gap-6 md:gap-12 px-6">
          {stats.map((s, i) => (
            <div key={i} className="text-center">
              <p className="font-serif text-2xl md:text-3xl font-bold text-primary leading-none">{s.value}</p>
              <p className="text-[10px] uppercase tracking-wider mt-1" style={{ color: 'hsl(38 15% 55%)' }}>{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Ligne décorative en bas */}
      <div className="absolute bottom-0 inset-x-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, hsl(42 72% 50% / 0.4), transparent)' }} />
    </div>

    {/* Bande d'images secondaires */}
    <div className="grid grid-cols-2 h-[220px] md:h-[300px]">
      <div className="relative overflow-hidden group cursor-pointer">
        <img src={photoSurveillance} alt="Surveillance" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" style={{ filter: 'brightness(0.55) saturate(0.8)' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, hsl(225 20% 6% / 0.7), transparent)' }} />
        <div className="absolute bottom-5 left-6">
          <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-primary mb-1">Surveillance</p>
          <p className="font-serif text-lg md:text-xl font-semibold text-white">Présence dissuasive</p>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-1" style={{ background: 'linear-gradient(90deg, hsl(42 72% 50% / 0.6), transparent)' }} />
      </div>
      <div className="relative overflow-hidden group cursor-pointer">
        <img src={photoEvent} alt="Événementiel" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" style={{ filter: 'brightness(0.55) saturate(0.8)' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(225deg, hsl(225 20% 6% / 0.7), transparent)' }} />
        <div className="absolute bottom-5 right-6 text-right">
          <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-primary mb-1">Événementiel</p>
          <p className="font-serif text-lg md:text-xl font-semibold text-white">Protection sur mesure</p>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-1" style={{ background: 'linear-gradient(270deg, hsl(42 72% 50% / 0.6), transparent)' }} />
      </div>
    </div>

    {/* Transition vers la section suivante */}
    <div className="absolute bottom-0 inset-x-0 h-16 pointer-events-none"
      style={{ background: 'linear-gradient(to top, hsl(228 7% 18%), transparent)' }} />
  </section>
);

export default VideoShowcase;
