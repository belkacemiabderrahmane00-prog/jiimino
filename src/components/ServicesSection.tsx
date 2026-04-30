import {
  Shield, Camera, AlertTriangle, Building2, Bell, CalendarCheck,
  Flame, RotateCcw, Lock, ShoppingBag, ClipboardList, UserCheck, Wifi,
} from "lucide-react";
import photoSurveillance from "@/assets/photo-surveillance.jpg";
import photoEvent from "@/assets/photo-evenementiel.jpg";
import photoAcces from "@/assets/photo-acces.jpg";
import photoRondes from "@/assets/photo-rondes.jpg";

const featured = [
  {
    icon: Shield, title: "Surveillance humaine",
    desc: "Agents qualifiés pour une présence dissuasive et rassurante sur vos sites, jour et nuit.",
    image: photoSurveillance,
  },
  {
    icon: CalendarCheck, title: "Sécurité événementielle",
    desc: "Sécurisation sur mesure de vos événements : galas, salons, défilés et conférences.",
    image: photoEvent,
  },
  {
    icon: Lock, title: "Contrôle d'accès",
    desc: "Gestion rigoureuse des flux pour protéger vos espaces sensibles et vos invités.",
    image: photoAcces,
  },
  {
    icon: RotateCcw, title: "Rondes & interventions",
    desc: "Rondes de surveillance et interventions rapides, de jour comme de nuit.",
    image: photoRondes,
  },
];

const others = [
  { icon: Camera, title: "Surveillance électronique", desc: "Vidéosurveillance et monitoring avancés." },
  { icon: Building2, title: "Gardiennage", desc: "Protection continue de vos biens et immeubles." },
  { icon: Bell, title: "Interventions sur alarme", desc: "Levée de doute et intervention ciblée." },
  { icon: Flame, title: "Prévention incendie", desc: "Agents SSIAP et conformité sécurité." },
  { icon: ShoppingBag, title: "Démarque inconnue", desc: "Surveillance discrète en milieu commercial." },
  { icon: ClipboardList, title: "Assistance inventaires", desc: "Accompagnement sécurisé de vos inventaires." },
  { icon: UserCheck, title: "Filtrage", desc: "Contrôle professionnel des accès événementiels." },
  { icon: Wifi, title: "Télésurveillance", desc: "Surveillance à distance via centre de veille." },
  { icon: AlertTriangle, title: "Contrôles réguliers", desc: "Vérifications périodiques de vos installations." },
];

const ServicesSection = () => (
  <section
    id="prestations"
    className="relative py-28 md:py-36 gold-grain gold-spotlight"
    style={{
      background: 'linear-gradient(180deg, hsl(228 7% 17%) 0%, hsl(228 6% 19%) 30%, hsl(230 8% 18%) 60%, hsl(42 8% 16%) 100%)',
    }}
  >
    <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-[120px] pointer-events-none" style={{ background: 'hsl(42 72% 50% / 0.04)' }} />
    <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full blur-[100px] pointer-events-none" style={{ background: 'hsl(42 72% 50% / 0.03)' }} />

    <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
      <div className="max-w-xl mb-20">
        <p className="section-label">Nos prestations</p>
        <h2 className="section-title">
          Des solutions de sécurité <span className="gold-text">sur mesure</span>
        </h2>
        <div className="metallic-line w-24 my-6" />
        <p className="text-foreground/65 text-[15px] leading-relaxed">
          Chaque mission est unique. Nous concevons des dispositifs adaptés à vos contraintes.
        </p>
      </div>

      {/* Featured — large image cards with 3D depth */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
        {featured.map((s, i) => (
          <div
            key={i}
            className="group relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-700"
            style={{
              boxShadow: '0 4px 20px hsl(0 0% 0% / 0.2), 0 12px 40px hsl(0 0% 0% / 0.15)',
              border: '1px solid hsl(225 6% 26%)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-6px) scale(1.01)';
              e.currentTarget.style.boxShadow = '0 12px 40px hsl(0 0% 0% / 0.25), 0 20px 60px hsl(0 0% 0% / 0.2), 0 0 60px hsl(42 72% 50% / 0.08)';
              e.currentTarget.style.borderColor = 'hsl(42 72% 50% / 0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = '';
              e.currentTarget.style.boxShadow = '0 4px 20px hsl(0 0% 0% / 0.2), 0 12px 40px hsl(0 0% 0% / 0.15)';
              e.currentTarget.style.borderColor = 'hsl(225 6% 26%)';
            }}
          >
            <img
              src={s.image}
              alt={s.title}
              loading="lazy"
              className="w-full h-[280px] md:h-[340px] object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" style={{ background: 'radial-gradient(ellipse at bottom, hsl(42 72% 50% / 0.1), transparent 60%)' }} />
            <div className="absolute bottom-0 left-0 right-0 p-7">
              <div className="flex items-center gap-2.5 mb-2">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center backdrop-blur-sm" style={{ background: 'hsl(42 72% 50% / 0.15)', border: '1px solid hsl(42 72% 50% / 0.3)', boxShadow: '0 2px 12px hsl(42 72% 50% / 0.1)' }}>
                  <s.icon className="w-4.5 h-4.5 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-white">{s.title}</h3>
              </div>
              <p className="text-white/70 text-sm leading-relaxed">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="metallic-line my-10" />

      {/* Others — compact cards with hover lift */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {others.map((s, i) => (
          <div
            key={i}
            className="group p-5 rounded-xl card-premium card-premium-hover cursor-default"
          >
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-500" style={{ background: 'linear-gradient(135deg, hsl(42 72% 50% / 0.1), hsl(42 72% 50% / 0.04))', border: '1px solid hsl(42 72% 50% / 0.15)', boxShadow: '0 2px 10px hsl(42 72% 50% / 0.06)' }}>
                <s.icon className="w-4 h-4 text-primary/70 group-hover:text-primary transition-colors duration-300" />
              </div>
              <div>
                <h3 className="text-[13px] font-semibold text-foreground/90 mb-0.5">{s.title}</h3>
                <p className="text-foreground/55 text-[12px] leading-relaxed">{s.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
