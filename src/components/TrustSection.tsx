import { FileCheck, ShieldCheck, Scale, Umbrella, Handshake, BadgeCheck } from "lucide-react";
import badgeCnaps from "@/assets/badge-cnaps.png";
import badgeRcpro from "@/assets/badge-rcpro.png";

const trustItems = [
  { icon: FileCheck, title: "Entreprise immatriculée", desc: "SIRET 82905277800034 — Société enregistrée conformément à la législation." },
  { icon: ShieldCheck, title: "Autorisation CNAPS", desc: "N° AUT-075-2124-01-08-20240964712 — Surveillance et gardiennage." },
  { icon: Scale, title: "Conformité réglementaire", desc: "Respect strict du Livre VI du Code de la sécurité intérieure." },
  { icon: Umbrella, title: "Assurance RC Pro", desc: "Couverture complète en responsabilité civile professionnelle." },
  { icon: Handshake, title: "Éthique & transparence", desc: "Confidentialité et déontologie professionnelle." },
];

const certifications = [
  { label: "CQP APS", desc: "Agent de Prévention et de Sécurité" },
  { label: "SSIAP", desc: "Sécurité Incendie" },
  { label: "SST", desc: "Sauveteur Secouriste du Travail" },
  { label: "H0B0", desc: "Habilitation Électrique" },
  { label: "Carte Pro CNAPS", desc: "Carte professionnelle obligatoire" },
];

const TrustSection = () => (
  <section
    id="confiance"
    className="relative py-28 md:py-36 overflow-hidden gold-grain gold-spotlight"
    style={{
      background: 'linear-gradient(180deg, hsl(228 7% 17%) 0%, hsl(228 7% 19%) 40%, hsl(42 8% 18%) 100%)',
    }}
  >
    <div className="absolute top-20 left-0 w-[400px] h-[400px] rounded-full blur-[120px] pointer-events-none" style={{ background: 'hsl(42 72% 50% / 0.04)' }} />

    <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        <div>
          <p className="section-label">Confiance & conformité</p>
          <h2 className="section-title">
            Un cadre <span className="gold-text">réglementaire rigoureux</span>
          </h2>
          <div className="metallic-line w-24 my-6" />
          <p className="text-[15px] leading-relaxed mb-6 text-foreground/65">
            JII MINO opère dans le strict respect de la réglementation française. Tous nos documents sont disponibles sur demande.
          </p>

          <div className="flex items-center gap-6 mb-8">
            <div className="flex flex-col items-center gap-2">
              <div className="rounded-full p-1" style={{ boxShadow: '0 0 25px hsl(42 72% 50% / 0.18)' }}>
                <img src={badgeCnaps} alt="CNAPS" className="w-16 h-16 rounded-full" />
              </div>
              <span className="text-[10px] font-medium uppercase tracking-wider text-foreground/50">CNAPS</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="rounded-full p-1" style={{ boxShadow: '0 0 25px hsl(42 72% 50% / 0.18)' }}>
                <img src={badgeRcpro} alt="RC Pro" className="w-16 h-16 rounded-full" />
              </div>
              <span className="text-[10px] font-medium uppercase tracking-wider text-foreground/50">RC Pro</span>
            </div>
          </div>

          <div className="mb-8">
            <p className="text-[11px] font-semibold uppercase tracking-[0.15em] mb-4 text-primary flex items-center gap-2">
              <BadgeCheck className="w-4 h-4" /> Certifications de nos agents
            </p>
            <div className="flex flex-wrap gap-2">
              {certifications.map((c) => (
                <span
                  key={c.label}
                  className="group relative px-4 py-2 text-[11px] font-semibold rounded-full cursor-default transition-all duration-300 hover:scale-105"
                  style={{
                    background: 'linear-gradient(135deg, hsl(42 72% 50% / 0.12), hsl(42 72% 50% / 0.06))',
                    border: '1px solid hsl(42 72% 50% / 0.22)',
                    color: 'hsl(38 30% 82%)',
                    boxShadow: '0 2px 10px hsl(42 72% 50% / 0.06)',
                  }}
                  title={c.desc}
                >
                  {c.label}
                  <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 text-[10px] rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none card-premium" style={{ color: 'hsl(38 15% 85%)' }}>
                    {c.desc}
                  </span>
                </span>
              ))}
            </div>
          </div>

          <a
            href="#contact"
            className="btn-outline-premium px-6 py-3"
          >
            Documents disponibles sur demande
          </a>
        </div>

        <div className="space-y-3">
          {trustItems.map((item, i) => (
            <div
              key={i}
              className="group flex items-center gap-4 p-5 rounded-xl card-premium card-premium-hover"
              style={{ borderLeft: '3px solid hsl(42 72% 50% / 0.35)' }}
            >
              <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-all duration-500" style={{ background: 'linear-gradient(135deg, hsl(42 72% 50% / 0.14), hsl(42 72% 50% / 0.06))', border: '1px solid hsl(42 72% 50% / 0.18)', boxShadow: '0 2px 12px hsl(42 72% 50% / 0.08)' }}>
                <item.icon className="w-4.5 h-4.5 text-primary" />
              </div>
              <div>
                <h3 className="text-[13px] font-semibold text-foreground/90">{item.title}</h3>
                <p className="text-[12px] text-foreground/60">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default TrustSection;
