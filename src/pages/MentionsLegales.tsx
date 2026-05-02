import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const MentionsLegales = () => (
  <div className="min-h-screen bg-background">
    <div className="max-w-3xl mx-auto px-6 md:px-10 py-20">
      <Link to="/" className="inline-flex items-center gap-2 text-primary text-sm mb-10 hover:text-primary/80 transition-colors">
        <ArrowLeft className="w-4 h-4" /> Retour au site
      </Link>

      <h1 className="font-serif text-4xl md:text-5xl font-semibold mb-3">Mentions légales</h1>
      <div className="w-16 h-px bg-primary/50 mb-10" />

      <div className="space-y-8 text-foreground/50 text-[14px] leading-relaxed">
        <section>
          <h2 className="text-foreground font-semibold text-lg mb-3">1. Éditeur du site</h2>
          <p>
            <strong className="text-foreground/70">JII MINO SAS</strong><br />
            Société par actions simplifiée<br />
            Siège social : 58 avenue de Wagram, 75017 Paris<br />
            SIRET : 829 052 778 00034<br />
            Code APE : 80.20 Z — Activités liées aux systèmes de sécurité<br />
            Téléphone : 09 55 79 09 88<br />
            E-mail : contact@jiimino.com
          </p>
        </section>

        <section>
          <h2 className="text-foreground font-semibold text-lg mb-3">2. Autorisation d'exercice</h2>
          <p>
            JII MINO SAS est titulaire d'une autorisation d'exercice délivrée par le
            <strong className="text-foreground/70"> Conseil National des Activités Privées de Sécurité (CNAPS)</strong>,
            conformément au Livre VI du Code de la sécurité intérieure.
          </p>
          <blockquote className="mt-4 border-l-2 border-primary/30 pl-4 italic text-foreground/35 text-[13px]">
            Art. L612-14 : « L'autorisation d'exercice ne confère aucune prérogative de puissance publique
            à l'entreprise ou aux personnes qui en bénéficient. Elle n'engage en aucune manière
            la responsabilité des Pouvoirs Publics. »
          </blockquote>
        </section>

        <section>
          <h2 className="text-foreground font-semibold text-lg mb-3">3. Directeur de la publication</h2>
          <p>Le représentant légal de la société JII MINO SAS.</p>
        </section>

        <section>
          <h2 className="text-foreground font-semibold text-lg mb-3">4. Propriété intellectuelle</h2>
          <p>
            L'ensemble des contenus présents sur ce site (textes, images, logos, graphismes, icônes)
            est protégé par le droit de la propriété intellectuelle. Toute reproduction, même partielle,
            est interdite sans autorisation préalable écrite de JII MINO SAS.
          </p>
        </section>

        <section>
          <h2 className="text-foreground font-semibold text-lg mb-3">5. Responsabilité</h2>
          <p>
            JII MINO SAS s'efforce de fournir des informations exactes et à jour.
            Toutefois, la société ne saurait garantir l'exactitude, la complétude ou l'actualité
            des informations diffusées. L'utilisateur est seul responsable de l'utilisation
            qu'il fait des informations présentées sur ce site.
          </p>
        </section>

        <section>
          <h2 className="text-foreground font-semibold text-lg mb-3">6. Liens hypertextes</h2>
          <p>
            Le site peut contenir des liens vers d'autres sites. JII MINO SAS
            n'exerce aucun contrôle sur le contenu de ces sites tiers et décline toute responsabilité
            les concernant.
          </p>
        </section>

        <section>
          <h2 className="text-foreground font-semibold text-lg mb-3">7. Droit applicable</h2>
          <p>
            Les présentes mentions légales sont soumises au droit français. Tout litige relatif
            à l'utilisation du site sera de la compétence exclusive des tribunaux de Paris.
          </p>
        </section>
      </div>
    </div>
  </div>
);

export default MentionsLegales;
