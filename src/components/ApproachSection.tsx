import { Search, BarChart3, Cog, TrendingUp } from "lucide-react";

const steps = [
  { icon: Search, num: "01", title: "Analyse du besoin", desc: "Écoute approfondie, visite de site et compréhension de vos enjeux." },
  { icon: BarChart3, num: "02", title: "Évaluation des risques", desc: "Audit des vulnérabilités et définition des priorités de protection." },
  { icon: Cog, num: "03", title: "Mise en place", desc: "Déploiement opérationnel : agents, technologies et procédures." },
  { icon: TrendingUp, num: "04", title: "Suivi continu", desc: "Reporting, ajustements et optimisation permanente." },
];

const ApproachSection = () => (
  <section
    id="approche"
    className="relative py-28 md:py-36 overflow-hidden gold-grain"
    style={{
      background: 'linear-gradient(180deg, hsl(228 7% 17%) 0%, hsl(228 7% 19%) 50%, hsl(42 8% 18%) 100%)',
    }}
  >
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full blur-[150px] pointer-events-none" style={{ background: 'hsl(42 72% 50% / 0.04)' }} />

    <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
      <div className="text-center max-w-2xl mx-auto mb-20">
        <p className="section-label">Notre méthode</p>
        <h2 className="section-title">
          Une approche <span className="gold-text">structurée</span>
        </h2>
        <div className="metallic-line w-20 mx-auto my-6" />
        <p className="text-foreground/60 text-[15px]">
          Un processus éprouvé en 4 étapes pour garantir l'excellence de chaque mission.
        </p>
      </div>

      <div className="relative max-w-5xl mx-auto">
        {/* Metallic connecting line */}
        <div className="hidden md:block absolute top-[60px] left-[12%] right-[12%]" style={{ height: '2px', background: 'linear-gradient(90deg, transparent, hsl(42 72% 50% / 0.3), hsl(42 80% 62% / 0.5), hsl(42 72% 50% / 0.3), transparent)' }} />

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((s, i) => (
            <div key={i} className="relative text-center group">
              {/* Number circle with 3D effect */}
              <div className="relative z-10 w-[88px] h-[88px] mx-auto mb-6">
                <div className="absolute inset-0 rounded-full transition-all duration-500 group-hover:scale-110" style={{
                  border: '2px solid hsl(42 72% 50% / 0.25)',
                  boxShadow: '0 0 30px hsl(42 72% 50% / 0.06), inset 0 0 20px hsl(42 72% 50% / 0.03)',
                }} />
                <div className="absolute inset-[4px] rounded-full flex items-center justify-center transition-all duration-500 group-hover:shadow-xl" style={{
                  background: 'linear-gradient(145deg, hsl(228 8% 22%), hsl(228 7% 18%))',
                  border: '1px solid hsl(225 6% 28%)',
                  boxShadow: '0 4px 16px hsl(0 0% 0% / 0.2), inset 0 1px 0 hsl(225 6% 30%)',
                }}>
                  <span className="text-primary font-serif text-3xl font-semibold" style={{ textShadow: '0 0 20px hsl(42 72% 50% / 0.3)' }}>{s.num}</span>
                </div>
              </div>
              <s.icon className="w-5 h-5 text-primary/50 mx-auto mb-3 group-hover:text-primary group-hover:scale-110 transition-all duration-300" />
              <h3 className="text-sm font-semibold text-foreground/90 mb-2">{s.title}</h3>
              <p className="text-[12px] leading-relaxed text-foreground/55 max-w-[190px] mx-auto">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center mt-16">
        <a
          href="#contact"
          className="btn-premium px-8 py-4"
        >
          Démarrer votre projet →
        </a>
      </div>
    </div>
  </section>
);

export default ApproachSection;
