import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "Quels sont vos délais de mise en place ?",
    a: "Nous pouvons déployer un dispositif de sécurité en 24 à 48 heures pour les interventions urgentes. Pour un contrat de gardiennage régulier, comptez 3 à 5 jours ouvrés afin de vous affecter les agents les mieux adaptés à votre site.",
  },
  {
    q: "Vos agents sont-ils tous certifiés CNAPS ?",
    a: "Oui, sans exception. Chaque agent JII MINO est titulaire d'une carte professionnelle délivrée par le CNAPS, condition légale obligatoire pour exercer en France. Ils sont également formés CQP APS, et selon leur spécialité : SSIAP, SST, H0B0.",
  },
  {
    q: "Intervenez-vous en dehors de Paris ?",
    a: "Nous intervenons principalement sur Paris et l'Île-de-France. Nous disposons également d'équipes opérationnelles à Grenoble et Lille. Contactez-nous pour étudier toute demande sur d'autres régions.",
  },
  {
    q: "Comment obtenir un devis ?",
    a: "Remplissez le formulaire de contact en bas de page ou appelez-nous directement au 09 55 79 09 88. Nous vous recontactons sous 2 heures en jours ouvrés pour analyser vos besoins et vous proposer une solution sur mesure.",
  },
  {
    q: "Proposez-vous des contrats longue durée ?",
    a: "Oui. Nous proposons aussi bien des missions ponctuelles (événement, chantier, remplacement) que des contrats de gardiennage en CDI sur vos sites. Une tarification préférentielle est appliquée sur les engagements longue durée.",
  },
  {
    q: "Êtes-vous disponibles les week-ends et jours fériés ?",
    a: "Absolument. JII MINO assure une disponibilité 24h/24, 7j/7, 365 jours par an. Notre équipe de coordination reste joignable à tout moment pour répondre aux situations d'urgence.",
  },
];

const FaqItem = ({ q, a, open, onToggle }: { q: string; a: string; open: boolean; onToggle: () => void }) => (
  <div
    className="border-b cursor-pointer group"
    style={{ borderColor: 'hsl(42 72% 50% / 0.12)' }}
    onClick={onToggle}
  >
    <div className="flex items-center justify-between py-5 gap-6">
      <h3
        className="font-serif text-[16px] md:text-[18px] font-medium leading-snug transition-colors duration-300"
        style={{ color: open ? 'hsl(42 72% 58%)' : 'hsl(38 15% 88%)' }}
      >
        {q}
      </h3>
      <div
        className="w-7 h-7 rounded-full shrink-0 flex items-center justify-center transition-all duration-300"
        style={{
          background: open ? 'hsl(42 72% 50% / 0.15)' : 'hsl(42 72% 50% / 0.07)',
          border: '1px solid hsl(42 72% 50% / 0.2)',
        }}
      >
        {open
          ? <Minus className="w-3 h-3 text-primary" />
          : <Plus className="w-3 h-3 text-primary" />
        }
      </div>
    </div>
    <div
      className="overflow-hidden transition-all duration-500"
      style={{ maxHeight: open ? '200px' : '0px', opacity: open ? 1 : 0 }}
    >
      <p className="pb-5 text-[14px] leading-relaxed" style={{ color: 'hsl(38 15% 62%)' }}>
        {a}
      </p>
    </div>
  </div>
);

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, hsl(228 7% 17%) 0%, hsl(228 7% 19%) 100%)' }}
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full blur-[120px] pointer-events-none" style={{ background: 'hsl(42 72% 50% / 0.03)' }} />

      <div className="relative z-10 max-w-3xl mx-auto px-6 md:px-10">
        <div className="text-center mb-14">
          <p className="section-label">Questions fréquentes</p>
          <h2 className="section-title">
            Tout ce que vous <span className="gold-text">devez savoir</span>
          </h2>
          <div className="metallic-line w-20 mx-auto mt-6" />
        </div>

        <div>
          {faqs.map((faq, i) => (
            <FaqItem
              key={i}
              q={faq.q}
              a={faq.a}
              open={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-[13px] mb-4" style={{ color: 'hsl(38 15% 50%)' }}>
            Vous ne trouvez pas la réponse à votre question ?
          </p>
          <a href="#contact" className="btn-premium px-8 py-3.5 text-[12px]">
            Nous contacter directement
          </a>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
