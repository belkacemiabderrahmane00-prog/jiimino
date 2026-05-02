import { ArrowRight, Clock, Tag } from "lucide-react";

const articles = [
  {
    tag: "Réglementation",
    title: "CNAPS : ce que signifie vraiment l'agrément pour votre sécurité",
    excerpt: "Comprendre l'autorisation d'exercice délivrée par le Conseil National des Activités Privées de Sécurité et pourquoi elle est indispensable avant de choisir une société de gardiennage.",
    date: "28 avril 2026",
    readTime: "4 min",
    color: "hsl(42 72% 50%)",
  },
  {
    tag: "Événementiel",
    title: "Sécuriser un événement d'entreprise : les 5 questions clés à poser",
    excerpt: "Du nombre d'agents au plan d'évacuation, voici les points essentiels à valider avec votre prestataire de sécurité avant chaque événement professionnel ou gala.",
    date: "15 avril 2026",
    readTime: "5 min",
    color: "hsl(210 72% 52%)",
  },
  {
    tag: "Gardiennage",
    title: "Gardiennage vs rondier : quelle solution pour votre site ?",
    excerpt: "Agent sur site en permanence ou rondes programmées ? Les deux approches ont leurs avantages selon la superficie, la sensibilité du site et votre budget sécurité.",
    date: "3 avril 2026",
    readTime: "3 min",
    color: "hsl(150 50% 40%)",
  },
];

const BlogSection = () => (
  <section
    className="relative py-24 md:py-32 overflow-hidden"
    style={{ background: 'linear-gradient(180deg, hsl(228 7% 19%) 0%, hsl(228 7% 17%) 100%)' }}
  >
    <div className="absolute top-0 right-1/4 w-[400px] h-[300px] rounded-full blur-[120px] pointer-events-none"
      style={{ background: 'hsl(42 72% 50% / 0.03)' }} />

    <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
        <div>
          <p className="section-label">Ressources</p>
          <h2 className="section-title">
            Actualités & <span className="gold-text">conseils sécurité</span>
          </h2>
        </div>
        <a href="#contact" className="btn-outline-premium px-6 py-3 text-[11px] shrink-0">
          Tous les articles
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {articles.map((article, i) => (
          <article
            key={i}
            className="group relative rounded-2xl overflow-hidden card-premium card-premium-hover cursor-pointer"
          >
            {/* Color accent top bar */}
            <div className="h-[3px] w-full" style={{ background: article.color, opacity: 0.7 }} />

            <div className="p-7">
              <div className="flex items-center gap-3 mb-5">
                <span
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider"
                  style={{ background: 'hsl(42 72% 50% / 0.1)', color: 'hsl(42 72% 60%)', border: '1px solid hsl(42 72% 50% / 0.15)' }}
                >
                  <Tag className="w-2.5 h-2.5" />
                  {article.tag}
                </span>
                <span className="flex items-center gap-1 text-[10px]" style={{ color: 'hsl(38 15% 45%)' }}>
                  <Clock className="w-2.5 h-2.5" />
                  {article.readTime}
                </span>
              </div>

              <h3 className="font-serif text-[17px] font-semibold leading-snug mb-3 text-foreground/90 group-hover:text-foreground transition-colors">
                {article.title}
              </h3>
              <p className="text-[12px] leading-relaxed mb-6" style={{ color: 'hsl(38 15% 50%)' }}>
                {article.excerpt}
              </p>

              <div className="flex items-center justify-between pt-4"
                style={{ borderTop: '1px solid hsl(225 6% 28%)' }}>
                <span className="text-[11px]" style={{ color: 'hsl(38 15% 40%)' }}>{article.date}</span>
                <span className="flex items-center gap-1 text-[11px] text-primary font-semibold group-hover:gap-2 transition-all">
                  Lire <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default BlogSection;
