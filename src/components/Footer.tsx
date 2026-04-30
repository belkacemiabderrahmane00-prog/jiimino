import { Phone, Mail, MapPin, ArrowUp, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import BrandLogo from "@/components/BrandLogo";

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer
      className="relative gold-grain"
      style={{
        background: 'linear-gradient(180deg, hsl(228 7% 15%) 0%, hsl(225 5% 12%) 60%, hsl(42 8% 12%) 100%)',
        borderTop: '1px solid hsl(42 72% 50% / 0.1)',
      }}
    >
      <div className="metallic-line" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 pt-14 pb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-12">
          <div className="lg:col-span-4">
            <BrandLogo variant="light" className="h-9 mb-4" />
            <p className="text-primary/70 font-serif italic text-[14px] mb-3">
              « Votre sécurité, notre engagement »
            </p>
            <p className="text-foreground/60 text-[12px] leading-relaxed max-w-xs">
              Entreprise française de sécurité privée. Protection des personnes, des biens et des événements.
            </p>
            <a
              href="https://www.linkedin.com/company/jiimino/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 text-[12px] text-foreground/50 hover:text-primary transition-colors"
            >
              <Linkedin className="w-4 h-4" /> LinkedIn
            </a>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-[10px] font-semibold uppercase tracking-[0.15em] text-foreground/50 mb-4">Navigation</h4>
            <nav className="space-y-2">
              {[
                { label: "Accueil", href: "#accueil" },
                { label: "Prestations", href: "#prestations" },
                { label: "Pourquoi nous", href: "#pourquoi" },
                { label: "Approche", href: "#approche" },
                { label: "À propos", href: "#apropos" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <a key={link.href} href={link.href} className="block text-[12px] text-foreground/50 hover:text-primary transition-colors">
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-[10px] font-semibold uppercase tracking-[0.15em] text-foreground/50 mb-4">Prestations</h4>
            <nav className="space-y-2">
              {["Surveillance humaine", "Sécurité événementielle", "Gardiennage", "Contrôle d'accès", "Prévention incendie", "Rondes & interventions"].map((s) => (
                <a key={s} href="#prestations" className="block text-[12px] text-foreground/50 hover:text-primary transition-colors">
                  {s}
                </a>
              ))}
            </nav>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-[10px] font-semibold uppercase tracking-[0.15em] text-foreground/50 mb-4">Contact</h4>
            <div className="space-y-2.5">
              <a href="tel:+33955790988" className="flex items-center gap-2 text-[12px] text-foreground/50 hover:text-primary transition-colors">
                <Phone className="w-3 h-3 text-primary/50" /> 09 55 79 09 88
              </a>
              <a href="mailto:contact@jiimino.com" className="flex items-center gap-2 text-[12px] text-foreground/50 hover:text-primary transition-colors">
                <Mail className="w-3 h-3 text-primary/50" /> contact@jiimino.com
              </a>
              <div className="flex items-start gap-2 text-[12px] text-foreground/50">
                <MapPin className="w-3 h-3 text-primary/50 mt-0.5 shrink-0" />
                58 av. de Wagram, 75017 Paris
              </div>
            </div>
            <a href="#contact" className="mt-4 inline-flex btn-premium px-5 py-2.5 text-[11px]">
              Devis gratuit
            </a>
          </div>
        </div>

        <div className="metallic-line mb-6" />

        <div className="mb-6">
          <div className="max-w-4xl mx-auto text-center space-y-3">
            <p className="text-[12px] text-foreground/65 tracking-wide">
              <span className="text-primary font-semibold">SIRET :</span> 829 052 778 00034 &nbsp;·&nbsp;
              <span className="text-primary font-semibold">APE :</span> 80.20 Z
            </p>
            <div className="max-w-2xl mx-auto px-5 py-3 rounded-lg" style={{ background: 'hsl(42 72% 50% / 0.04)', border: '1px solid hsl(42 72% 50% / 0.1)' }}>
              <p className="text-[12px] text-foreground/60 leading-relaxed">
                <span className="text-primary/70 font-semibold">Art. L612-14 :</span> « L'autorisation d'exercice ne confère aucune prérogative de puissance publique à l'entreprise ou aux personnes qui en bénéficient. »
              </p>
            </div>
          </div>
        </div>

        <div className="metallic-line mb-5" />
        <div className="flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-[11px] text-foreground/50">
            © {new Date().getFullYear()} JII MINO — Tous droits réservés
          </p>
          <div className="flex items-center gap-5">
            <Link to="/mentions-legales" className="text-[11px] text-foreground/45 hover:text-primary transition-colors">Mentions légales</Link>
            <Link to="/politique-de-confidentialite" className="text-[11px] text-foreground/45 hover:text-primary transition-colors">Confidentialité</Link>
            <button
              onClick={scrollToTop}
              className="w-8 h-8 rounded-lg flex items-center justify-center text-primary/60 hover:text-primary transition-all"
              style={{ background: 'hsl(42 72% 50% / 0.08)', border: '1px solid hsl(42 72% 50% / 0.15)' }}
              aria-label="Haut de page"
            >
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
