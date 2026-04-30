import { Award, Users, Clock, Settings, Zap, HeartHandshake, MapPin, Eye } from "lucide-react";

const reasons = [
  { icon: Award, title: "Expertise métier", desc: "Années d'expérience au service de la sécurité privée." },
  { icon: Eye, title: "Présence dissuasive", desc: "Agents rigoureux, formés et professionnels." },
  { icon: Settings, title: "Sur mesure", desc: "Dispositifs conçus pour vos contraintes spécifiques." },
  { icon: Zap, title: "Réactivité", desc: "Interventions rapides et coordination efficace." },
  { icon: HeartHandshake, title: "Accompagnement", desc: "Interlocuteur dédié et suivi constant." },
  { icon: Clock, title: "24h/24", desc: "Centre de coordination joignable en permanence." },
  { icon: Users, title: "Image professionnelle", desc: "Agents soignés, formés à l'accueil." },
  { icon: MapPin, title: "Paris & régions", desc: "Couverture Paris, Grenoble, Lille." },
];

const WhyUsSection = () => (
  <section
    id="pourquoi"
    className="relative py-28 md:py-36 overflow-hidden gold-grain gold-spotlight"
    style={{
      background: 'linear-gradient(180deg, hsl(228 7% 17%) 0%, hsl(228 7% 19%) 40%, hsl(38 8% 18%) 100%)',
    }}
  >
    <div className="absolute top-20 right-0 w-[500px] h-[500px] rounded-full blur-[150px] pointer-events-none" style={{ background: 'hsl(42 72% 50% / 0.04)' }} />

    <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
      <div className="text-center max-w-2xl mx-auto mb-20">
        <p className="section-label">Nos engagements</p>
        <h2 className="section-title">
          Pourquoi choisir <span className="gold-text">JII MINO</span>
        </h2>
        <div className="metallic-line w-20 mx-auto my-6" />
        <p className="text-sm text-foreground/60">
          Une approche exigeante fondée sur le professionnalisme et la confiance.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-5">
        {reasons.slice(0, 2).map((r, i) => (
          <div
            key={i}
            className="group relative overflow-hidden rounded-2xl p-8 card-premium card-premium-hover"
          >
            <div className="absolute top-0 right-0 w-48 h-48 rounded-full -translate-y-1/2 translate-x-1/2 blur-[70px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" style={{ background: 'hsl(42 72% 50% / 0.08)' }} />
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-all duration-500" style={{ background: 'linear-gradient(135deg, hsl(42 72% 50% / 0.14), hsl(42 72% 50% / 0.06))', border: '1px solid hsl(42 72% 50% / 0.25)', boxShadow: '0 4px 24px hsl(42 72% 50% / 0.1)' }}>
                <r.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground/92 mb-2">{r.title}</h3>
              <p className="text-[14px] leading-relaxed text-foreground/60">{r.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {reasons.slice(2).map((r, i) => (
          <div
            key={i}
            className="group text-center p-6 rounded-xl card-premium card-premium-hover"
          >
            <div className="w-12 h-12 mx-auto rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-all duration-500" style={{ background: 'linear-gradient(135deg, hsl(42 72% 50% / 0.12), hsl(42 72% 50% / 0.05))', border: '1px solid hsl(42 72% 50% / 0.18)', boxShadow: '0 2px 14px hsl(42 72% 50% / 0.08)' }}>
              <r.icon className="w-5 h-5 text-primary" />
            </div>
            <h3 className="text-[12px] font-semibold text-foreground/88 mb-1">{r.title}</h3>
            <p className="text-[11px] leading-relaxed text-foreground/55">{r.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyUsSection;
