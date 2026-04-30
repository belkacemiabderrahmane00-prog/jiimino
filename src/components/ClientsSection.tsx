import {
  Building, Store, Landmark, Warehouse, CalendarCheck, Gem, Trophy, Home, ShieldCheck,
} from "lucide-react";
import logoVenissieux from "@/assets/logo-venissieux.svg";
import logoDumarey from "@/assets/logo-dumarey.svg";

const references = [
  {
    logo: logoVenissieux,
    name: "Ville de Vénissieux",
    type: "Institution publique · Vénissieux",
    bg: "white",
  },
  {
    logo: logoDumarey,
    name: "DUMAREY",
    type: "Industrie automobile · Saint-Étienne",
    bg: "white",
  },
];

const sectors = [
  { icon: Building, label: "Entreprises & bureaux" },
  { icon: Store, label: "Commerces & boutiques" },
  { icon: Landmark, label: "Sites culturels & musées" },
  { icon: Warehouse, label: "Entrepôts & logistique" },
  { icon: CalendarCheck, label: "Événements & salons" },
  { icon: Gem, label: "Mode & luxe" },
  { icon: Trophy, label: "Événements sportifs" },
  { icon: Home, label: "Copropriétés" },
  { icon: ShieldCheck, label: "Foires & expositions" },
];

const ClientsSection = () => (
  <section
    id="clients"
    className="relative py-28 md:py-36 overflow-hidden gold-grain gold-spotlight"
    style={{
      background: 'linear-gradient(135deg, hsl(228 7% 17%) 0%, hsl(228 7% 19%) 50%, hsl(42 8% 18%) 100%)',
    }}
  >
    <div className="absolute bottom-0 left-1/3 w-[500px] h-[400px] rounded-full blur-[140px] pointer-events-none" style={{ background: 'hsl(42 72% 50% / 0.03)' }} />

    <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">

      {/* Références clients */}
      <div className="mb-16">
        <p className="section-label">Références</p>
        <h2 className="section-title mb-8">
          Ils nous font <span className="gold-text">confiance</span>
        </h2>
        <div className="flex flex-wrap gap-5">
          {references.map((ref) => (
            <div
              key={ref.name}
              className="flex flex-col items-center gap-3 p-6 rounded-xl transition-all duration-300 hover:scale-[1.02]"
              style={{
                background: 'white',
                border: '1px solid hsl(42 72% 50% / 0.2)',
                boxShadow: '0 4px 24px hsl(0 0% 0% / 0.15)',
                minWidth: '200px',
              }}
            >
              <img
                src={ref.logo}
                alt={ref.name}
                className="h-12 w-auto object-contain"
              />
              <p className="text-[10px] uppercase tracking-widest text-center" style={{ color: 'hsl(225 6% 40%)' }}>
                {ref.type}
              </p>
            </div>
          ))}
        </div>
        <div className="metallic-line w-24 mt-8" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
        <div>
          <p className="section-label">Nos secteurs</p>
          <h2 className="section-title">
            Nous protégeons <span className="gold-text">tous les secteurs</span>
          </h2>
          <div className="metallic-line w-24 my-6" />
          <p className="text-[15px] leading-relaxed mb-8 text-foreground/60">
            Quelle que soit votre activité, nous adaptons nos dispositifs à vos exigences et à votre environnement.
          </p>

          <div className="flex items-center gap-8 mb-8">
            <div>
              <p className="text-3xl font-serif font-semibold text-primary" style={{ textShadow: '0 0 25px hsl(42 72% 50% / 0.25)' }}>150+</p>
              <p className="text-[11px] uppercase tracking-wider text-foreground/45">Partenaires</p>
            </div>
            <div className="w-px h-10" style={{ background: 'linear-gradient(180deg, transparent, hsl(42 72% 50% / 0.4), transparent)' }} />
            <div>
              <p className="text-3xl font-serif font-semibold text-primary" style={{ textShadow: '0 0 25px hsl(42 72% 50% / 0.25)' }}>90%</p>
              <p className="text-[11px] uppercase tracking-wider text-foreground/45">Satisfaction client</p>
            </div>
          </div>

          <a
            href="#contact"
            className="btn-premium px-7 py-3.5"
          >
            Étudier votre besoin
          </a>
        </div>

        <div className="grid grid-cols-3 gap-4">
          {sectors.map((s, i) => (
            <div
              key={i}
              className="group p-5 flex flex-col items-center text-center rounded-xl card-premium card-premium-hover"
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-all duration-500" style={{ background: 'linear-gradient(135deg, hsl(42 72% 50% / 0.12), hsl(42 72% 50% / 0.05))', border: '1px solid hsl(42 72% 50% / 0.18)', boxShadow: '0 2px 14px hsl(42 72% 50% / 0.08)' }}>
                <s.icon className="w-5 h-5 text-primary/65 group-hover:text-primary transition-colors duration-300" />
              </div>
              <span className="text-[11px] font-medium leading-tight text-foreground/60 group-hover:text-foreground/80 transition-colors">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ClientsSection;
