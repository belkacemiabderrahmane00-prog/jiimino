import { Star, Quote } from "lucide-react";
import operaLille from "@/assets/clients/opera-lille.jpg";
import isere from "@/assets/clients/isere.png";
import nexity from "@/assets/clients/nexity.png";
import jll from "@/assets/clients/jll.png";
import vinci from "@/assets/clients/vinci.png";
import engie from "@/assets/clients/engie.png";
import hm from "@/assets/clients/hm.png";
import gifi from "@/assets/clients/gifi.png";
import ca from "@/assets/clients/ca.png";
import eLeclerc from "@/assets/clients/e_leclerc.png";
import gcc from "@/assets/clients/gcc.png";
import bpost from "@/assets/clients/bpost.png";
import bateauxParisiens from "@/assets/clients/bateaux_parisiens.png";
import altareaCogedim from "@/assets/clients/altarea_cogedim.png";
import venissieux from "@/assets/clients/venissieux.svg";
import dumarey from "@/assets/clients/dumarey.svg";

const testimonials = [
  {
    text: "JII MINO assure la sécurité de nos locaux depuis plusieurs mois. Professionnalisme irréprochable, agents discrets et réactifs.",
    author: "Directeur général",
    company: "Groupe immobilier parisien",
  },
  {
    text: "Organisation parfaite pour notre événement annuel. Coordination fluide, personnel exemplaire. Une tranquillité d'esprit totale.",
    author: "Responsable événementiel",
    company: "Maison de luxe",
  },
  {
    text: "Équipe sérieuse, disponible et à l'écoute. Qualité de service constante et accompagnement remarquable.",
    author: "Gérant de boutique",
    company: "Commerce haut de gamme, Paris 8e",
  },
];

const row1 = [
  { name: "Nexity", logo: nexity },
  { name: "JLL", logo: jll },
  { name: "Vinci", logo: vinci },
  { name: "Engie", logo: engie },
  { name: "H&M", logo: hm },
  { name: "E.Leclerc", logo: eLeclerc },
  { name: "GCC", logo: gcc },
  { name: "Gifi", logo: gifi },
];

const row2 = [
  { name: "C&A", logo: ca },
  { name: "bpost", logo: bpost },
  { name: "Bateaux Parisiens", logo: bateauxParisiens },
  { name: "Altarea Cogedim", logo: altareaCogedim },
  { name: "Opéra de Lille", logo: operaLille },
  { name: "Isère", logo: isere },
  { name: "Ville de Vénissieux", logo: venissieux },
  { name: "DUMAREY", logo: dumarey },
];

const museums = [
  "Musées départementaux de l'Isère",
  "Musée Hector Berlioz",
  "Musée Saint-Antoine-l'Abbaye",
  "Musée Arcabas en Chartreuse",
];

const TestimonialsSection = () => (
  <section id="temoignages" className="relative py-24 md:py-32 section-cream overflow-hidden">
    <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-primary/5 blur-3xl" />
    <div className="absolute bottom-10 right-10 w-56 h-56 rounded-full bg-primary/5 blur-3xl" />

    <div className="max-w-7xl mx-auto px-6 md:px-10">
      {/* Header */}
      <div className="text-center mb-16">
        <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-4 inline-block text-primary">
          Témoignages & références
        </p>
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.05] mb-5" style={{ color: 'hsl(225 15% 12%)' }}>
          Ils nous font <span className="text-primary">confiance</span>
        </h2>
      </div>

      {/* Testimonials */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto mb-20">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="group rounded-2xl p-7 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
            style={{
              background: 'hsl(0 0% 100% / 0.85)',
              border: '1px solid hsl(0 0% 0% / 0.08)',
              boxShadow: '0 4px 16px hsl(0 0% 0% / 0.06)',
            }}
          >
            <Quote className="w-7 h-7 mb-4 group-hover:scale-110 transition-transform duration-300" style={{ color: 'hsl(42 72% 50% / 0.4)' }} />
            <div className="flex gap-0.5 mb-4">
              {[...Array(5)].map((_, j) => (
                <Star key={j} className="w-3.5 h-3.5 fill-primary text-primary" />
              ))}
            </div>
            <p className="text-[14px] leading-relaxed mb-6 italic" style={{ color: 'hsl(225 10% 30%)' }}>
              « {t.text} »
            </p>
            <div className="pt-4" style={{ borderTop: '1px solid hsl(0 0% 0% / 0.06)' }}>
              <p className="text-[14px] font-semibold" style={{ color: 'hsl(225 15% 12%)' }}>{t.author}</p>
              <p className="text-[12px] mt-0.5" style={{ color: 'hsl(225 10% 50%)' }}>{t.company}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Client logos — Premium grid layout */}
      <div className="text-center mb-10">
        <h3 className="font-serif text-2xl md:text-3xl font-semibold mb-3" style={{ color: 'hsl(225 15% 12%)' }}>
          Nos <span className="text-primary">références</span>
        </h3>
        <p className="text-[13px] max-w-lg mx-auto" style={{ color: 'hsl(225 10% 45%)' }}>
          Des partenaires de tous secteurs : immobilier, luxe, grande distribution, culture et événementiel.
        </p>
      </div>

      {/* Marquee rows */}
      <div className="overflow-hidden marquee-track mb-4 w-full" style={{ maskImage: 'linear-gradient(90deg, transparent, black 8%, black 92%, transparent)' }}>
        {/* Row 1 — défile vers la gauche */}
        <div className="flex gap-4 w-max marquee-left" style={{ willChange: 'transform' }}>
          {[...row1, ...row1].map((client, i) => (
            <div
              key={i}
              className="flex items-center justify-center h-20 w-36 rounded-xl shrink-0 cursor-default"
              style={{
                background: 'hsl(0 0% 100% / 0.92)',
                border: '1px solid hsl(0 0% 0% / 0.07)',
                boxShadow: '0 2px 10px hsl(0 0% 0% / 0.06)',
              }}
            >
              <img
                src={client.logo}
                alt={client.name}
                className="max-h-10 max-w-[90px] object-contain"
                title={client.name}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="overflow-hidden marquee-track mb-10 w-full" style={{ maskImage: 'linear-gradient(90deg, transparent, black 8%, black 92%, transparent)' }}>
        {/* Row 2 — défile vers la droite */}
        <div className="flex gap-4 w-max marquee-right" style={{ willChange: 'transform' }}>
          {[...row2, ...row2].map((client, i) => (
            <div
              key={i}
              className="flex items-center justify-center h-20 w-36 rounded-xl shrink-0 cursor-default"
              style={{
                background: 'hsl(0 0% 100% / 0.92)',
                border: '1px solid hsl(0 0% 0% / 0.07)',
                boxShadow: '0 2px 10px hsl(0 0% 0% / 0.06)',
              }}
            >
              <img
                src={client.logo}
                alt={client.name}
                className="max-h-10 max-w-[90px] object-contain"
                title={client.name}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Museum references */}
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-[11px] font-semibold uppercase tracking-[0.15em] mb-4 text-primary">
          Références culturelles – Isère
        </p>
        <div className="flex flex-wrap justify-center gap-2">
          {museums.map((m) => (
            <span
              key={m}
              className="px-4 py-2 text-[12px] font-medium rounded-full transition-all duration-300 hover:scale-105"
              style={{
                background: 'hsl(42 72% 50% / 0.1)',
                border: '1px solid hsl(42 72% 50% / 0.2)',
                color: 'hsl(225 15% 20%)',
              }}
            >
              {m}
            </span>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
