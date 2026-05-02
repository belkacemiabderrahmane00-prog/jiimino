import { MapPin, Building2, Shield } from "lucide-react";

const locations = [
  {
    city: "Paris",
    region: "Île-de-France",
    type: "Siège social",
    address: "58 av. de Wagram, 75017",
    description: "Direction générale & coordination nationale",
    icon: Building2,
  },
  {
    city: "Grenoble",
    region: "Auvergne-Rhône-Alpes",
    type: "Site opérationnel",
    address: null,
    description: "Musées départementaux de l'Isère, sites culturels & patrimoniaux",
    icon: Shield,
  },
  {
    city: "Lille",
    region: "Hauts-de-France",
    type: "Site opérationnel",
    address: null,
    description: "Opéra de Lille, événements culturels & institutionnels",
    icon: Shield,
  },
];

const LocationsSection = () => (
  <section
    className="relative py-24 md:py-32 gold-grain gold-spotlight"
    id="implantations"
    style={{
      background: 'linear-gradient(135deg, hsl(228 7% 17%) 0%, hsl(228 7% 19%) 50%, hsl(42 8% 18%) 100%)',
    }}
  >
    <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
      <div className="text-center mb-14">
        <p className="section-label">Nos implantations</p>
        <h2 className="section-title">
          Déployés sur <span className="gold-text">3 régions stratégiques</span>
        </h2>
        <div className="metallic-line w-20 mx-auto my-6" />
        <p className="text-foreground/60 text-[15px] max-w-lg mx-auto">
          Un siège à Paris et des équipes opérationnelles en Auvergne-Rhône-Alpes et Hauts-de-France.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-14">
        {locations.map((loc) => {
          const Icon = loc.icon;
          return (
            <div
              key={loc.city}
              className="group relative overflow-hidden rounded-2xl card-premium card-premium-hover"
            >
              <div className="h-1 w-full" style={{ background: 'linear-gradient(90deg, transparent, hsl(42 72% 50% / 0.5), transparent)' }} />
              <div className="p-7">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-500" style={{ background: 'linear-gradient(135deg, hsl(42 72% 50% / 0.14), hsl(42 72% 50% / 0.06))', border: '1px solid hsl(42 72% 50% / 0.22)', boxShadow: '0 4px 18px hsl(42 72% 50% / 0.1)' }}>
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-serif font-semibold text-foreground/92">{loc.city}</h3>
                    <span className="text-[10px] px-2 py-0.5 rounded-full text-primary font-medium uppercase tracking-wider" style={{ background: 'hsl(42 72% 50% / 0.1)', border: '1px solid hsl(42 72% 50% / 0.15)' }}>
                      {loc.type}
                    </span>
                  </div>
                </div>
                <p className="text-[11px] text-primary/55 uppercase tracking-wider mb-2">{loc.region}</p>
                {loc.address && (
                  <p className="text-[13px] text-foreground/65 mb-1 flex items-center gap-1.5">
                    <MapPin className="w-3 h-3 text-primary/55" />
                    {loc.address}
                  </p>
                )}
                <p className="text-[13px] text-foreground/55 leading-relaxed">{loc.description}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Google Maps */}
      <div className="relative rounded-2xl overflow-hidden card-premium" style={{ boxShadow: '0 12px 48px hsl(0 0% 0% / 0.25)' }}>
        <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 rounded-tl-2xl z-10" style={{ borderColor: 'hsl(42 72% 50% / 0.3)' }} />
        <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 rounded-tr-2xl z-10" style={{ borderColor: 'hsl(42 72% 50% / 0.3)' }} />
        <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 rounded-bl-2xl z-10" style={{ borderColor: 'hsl(42 72% 50% / 0.3)' }} />
        <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 rounded-br-2xl z-10" style={{ borderColor: 'hsl(42 72% 50% / 0.3)' }} />

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2623.5!2d2.2937!3d48.8789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66fc718507497%3A0x5765cb7e8c5765e3!2s58%20Av.%20de%20Wagram%2C%2075017%20Paris!5e0!3m2!1sfr!2sfr!4v1700000000000"
          width="100%"
          className="h-[260px] sm:h-[340px] md:h-[420px]"
          style={{
            border: 0,
            filter: 'invert(0.9) hue-rotate(180deg) brightness(1.15) contrast(0.85) saturate(0.3)',
          }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="JII MINO — 58 avenue de Wagram, Paris"
        />

        <div className="absolute bottom-4 left-4 right-4 flex justify-center gap-2 sm:gap-4 z-10">
          {locations.map((loc) => (
            <div key={loc.city} className="glass px-4 py-2 rounded-full flex items-center gap-2 text-[12px]">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse-gold" />
              <span className="text-foreground/75 font-medium">{loc.city}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default LocationsSection;
