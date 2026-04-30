import { Check, X, ArrowRight, Shield, Crown } from "lucide-react";

const features = [
  { label: "Gardiennage & surveillance", perf: true, premium: true },
  { label: "Contrôle d'accès", perf: true, premium: true },
  { label: "Rondes de sécurité", perf: true, premium: true },
  { label: "Sécurité incendie (SSIAP)", perf: false, premium: true },
  { label: "Sécurité événementielle", perf: false, premium: true },
  { label: "Interlocuteur dédié", perf: false, premium: true },
  { label: "Reporting personnalisé", perf: false, premium: true },
  { label: "Audit & conseil sûreté", perf: false, premium: true },
  { label: "Astreinte 24h/24", perf: true, premium: true },
  { label: "Dispositif sur mesure", perf: false, premium: true },
];

const OffersSection = () => (
  <section className="relative py-24 md:py-32 section-cream overflow-hidden">
    {/* Decorative */}
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
    <div className="absolute top-20 right-0 w-72 h-72 rounded-full bg-primary/5 blur-3xl" />
    <div className="absolute bottom-20 left-0 w-56 h-56 rounded-full bg-primary/5 blur-3xl" />

    <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-10">
      <div className="text-center mb-16">
        <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-4 inline-block text-primary">
          Nos formules
        </p>
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.05] mb-5" style={{ color: 'hsl(225 15% 12%)' }}>
          Choisissez votre <span className="text-primary">niveau de protection</span>
        </h2>
        <p className="text-sm max-w-xl mx-auto" style={{ color: 'hsl(225 10% 40%)' }}>
          Deux formules adaptées à vos besoins, du gardiennage classique à la sécurité globale.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {/* Performance */}
        <div className="rounded-2xl border overflow-hidden" style={{ background: 'hsl(0 0% 100% / 0.8)', borderColor: 'hsl(0 0% 0% / 0.08)' }}>
          <div className="p-8 text-center" style={{ borderBottom: '1px solid hsl(0 0% 0% / 0.06)' }}>
            <div className="w-14 h-14 mx-auto mb-4 rounded-xl flex items-center justify-center" style={{ background: 'hsl(225 15% 12%)', color: 'hsl(42 72% 50%)' }}>
              <Shield className="w-7 h-7" />
            </div>
            <h3 className="font-serif text-2xl font-semibold mb-2" style={{ color: 'hsl(225 15% 12%)' }}>Performance</h3>
            <p className="text-xs" style={{ color: 'hsl(225 10% 45%)' }}>Protection fiable pour vos locaux</p>
          </div>
          <div className="p-6 space-y-3">
            {features.map((f, i) => (
              <div key={i} className="flex items-center gap-3">
                {f.perf ? (
                  <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0" style={{ background: 'hsl(142 60% 45% / 0.15)' }}>
                    <Check className="w-3 h-3" style={{ color: 'hsl(142 60% 40%)' }} />
                  </div>
                ) : (
                  <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0" style={{ background: 'hsl(0 0% 0% / 0.05)' }}>
                    <X className="w-3 h-3" style={{ color: 'hsl(0 0% 60%)' }} />
                  </div>
                )}
                <span className="text-[13px]" style={{ color: f.perf ? 'hsl(225 15% 20%)' : 'hsl(225 10% 55%)' }}>{f.label}</span>
              </div>
            ))}
          </div>
          <div className="p-6 pt-2">
            <a href="#contact" className="flex items-center justify-center gap-2 w-full py-3 rounded-lg text-[13px] font-semibold uppercase tracking-wider transition-all" style={{ background: 'hsl(225 15% 12%)', color: 'hsl(38 15% 88%)' }}>
              Demander un devis <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Premium */}
        <div className="rounded-2xl border-2 overflow-hidden relative" style={{ borderColor: 'hsl(42 72% 50%)', background: 'hsl(0 0% 100% / 0.95)' }}>
          <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider" style={{ background: 'hsl(42 72% 50%)', color: 'hsl(225 15% 5%)' }}>
            Recommandé
          </div>
          <div className="p-8 text-center" style={{ borderBottom: '1px solid hsl(42 72% 50% / 0.2)' }}>
            <div className="w-14 h-14 mx-auto mb-4 rounded-xl flex items-center justify-center gold-gradient">
              <Crown className="w-7 h-7" style={{ color: 'hsl(225 15% 5%)' }} />
            </div>
            <h3 className="font-serif text-2xl font-semibold mb-2" style={{ color: 'hsl(225 15% 12%)' }}>Premium</h3>
            <p className="text-xs" style={{ color: 'hsl(225 10% 45%)' }}>Sécurité globale & sur mesure</p>
          </div>
          <div className="p-6 space-y-3">
            {features.map((f, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0" style={{ background: 'hsl(42 72% 50% / 0.15)' }}>
                  <Check className="w-3 h-3" style={{ color: 'hsl(42 60% 40%)' }} />
                </div>
                <span className="text-[13px] font-medium" style={{ color: 'hsl(225 15% 15%)' }}>{f.label}</span>
              </div>
            ))}
          </div>
          <div className="p-6 pt-2">
            <a href="#contact" className="flex items-center justify-center gap-2 w-full py-3 rounded-lg text-[13px] font-bold uppercase tracking-wider gold-gradient transition-all hover:shadow-lg" style={{ color: 'hsl(225 15% 5%)' }}>
              Choisir Premium <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      <p className="text-center mt-8 text-[12px]" style={{ color: 'hsl(225 10% 50%)' }}>
        Chaque formule est adaptable selon vos besoins. Contactez-nous pour un devis personnalisé.
      </p>
    </div>
  </section>
);

export default OffersSection;
