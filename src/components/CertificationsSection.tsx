import { BadgeCheck, ShieldCheck, Flame, Heart, Zap, Award } from "lucide-react";

const certs = [
  {
    icon: Award,
    code: "CQP APS",
    label: "Agent de Prévention & Sécurité",
    desc: "Certificat de Qualification Professionnelle — diplôme de référence du métier.",
  },
  {
    icon: Flame,
    code: "SSIAP 1 & 2",
    label: "Sécurité Incendie",
    desc: "Agent et chef d'équipe sécurité incendie et assistance à personnes.",
  },
  {
    icon: Heart,
    code: "SST",
    label: "Sauveteur Secouriste du Travail",
    desc: "Formation aux gestes de premiers secours en milieu professionnel.",
  },
  {
    icon: Zap,
    code: "H0B0",
    label: "Habilitation Électrique",
    desc: "Non-électricien habilité — intervention en sécurité sur sites industriels.",
  },
  {
    icon: ShieldCheck,
    code: "Carte Pro CNAPS",
    label: "Autorisation d'exercice",
    desc: "Obligatoire en France — délivrée après enquête administrative et formation.",
  },
  {
    icon: BadgeCheck,
    code: "AUT-075",
    label: "Agrément CNAPS JII MINO",
    desc: "N° AUT-075-2124-01-08-20240964712 — Surveillance & gardiennage.",
  },
];

const CertificationsSection = () => (
  <section
    id="certifications"
    className="relative py-24 md:py-32 overflow-hidden"
    style={{ background: 'linear-gradient(135deg, hsl(228 7% 17%) 0%, hsl(42 8% 16%) 100%)' }}
  >
    <div className="absolute inset-0 gold-grain pointer-events-none" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full blur-[160px] pointer-events-none"
      style={{ background: 'hsl(42 72% 50% / 0.04)' }} />

    <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
      <div className="text-center mb-14">
        <p className="section-label">Certifications & agréments</p>
        <h2 className="section-title">
          Des agents <span className="gold-text">qualifiés & certifiés</span>
        </h2>
        <div className="metallic-line w-20 mx-auto mt-6" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {certs.map((cert, i) => (
          <div
            key={i}
            className="group relative p-6 rounded-2xl card-premium card-premium-hover overflow-hidden"
          >
            {/* Gold accent corner */}
            <div className="absolute top-0 right-0 w-16 h-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{ background: 'radial-gradient(circle at top right, hsl(42 72% 50% / 0.08), transparent 70%)' }} />

            <div className="flex items-start gap-4">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-all duration-500"
                style={{
                  background: 'linear-gradient(135deg, hsl(42 72% 50% / 0.15), hsl(42 72% 50% / 0.05))',
                  border: '1px solid hsl(42 72% 50% / 0.22)',
                  boxShadow: '0 4px 16px hsl(42 72% 50% / 0.08)',
                }}
              >
                <cert.icon className="w-5 h-5 text-primary" />
              </div>

              <div className="min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span
                    className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded"
                    style={{ background: 'hsl(42 72% 50% / 0.12)', color: 'hsl(42 85% 62%)' }}
                  >
                    {cert.code}
                  </span>
                </div>
                <h3 className="text-[13px] font-semibold text-foreground/90 mb-1.5">{cert.label}</h3>
                <p className="text-[11px] leading-relaxed" style={{ color: 'hsl(38 15% 48%)' }}>{cert.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default CertificationsSection;
