import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const PolitiqueConfidentialite = () => (
  <div className="min-h-screen bg-background">
    <div className="max-w-3xl mx-auto px-6 md:px-10 py-20">
      <Link to="/" className="inline-flex items-center gap-2 text-primary text-sm mb-10 hover:text-primary/80 transition-colors">
        <ArrowLeft className="w-4 h-4" /> Retour au site
      </Link>

      <h1 className="font-serif text-4xl md:text-5xl font-semibold mb-3">Politique de confidentialité</h1>
      <div className="w-16 h-px bg-primary/50 mb-10" />

      <div className="space-y-8 text-foreground/50 text-[14px] leading-relaxed">
        <section>
          <h2 className="text-foreground font-semibold text-lg mb-3">1. Responsable du traitement</h2>
          <p>
            Le responsable du traitement des données personnelles est :<br />
            <strong className="text-foreground/70">JII MINO SAS</strong><br />
            58 avenue de Wagram, 75017 Paris<br />
            E-mail : contact@jiimino.com<br />
            Téléphone : 09 55 79 09 88
          </p>
        </section>

        <section>
          <h2 className="text-foreground font-semibold text-lg mb-3">2. Données collectées</h2>
          <p>Nous pouvons collecter les données suivantes via le formulaire de contact :</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Nom et prénom</li>
            <li>Adresse e-mail</li>
            <li>Numéro de téléphone</li>
            <li>Nom de la société (facultatif)</li>
            <li>Message et nature du besoin</li>
          </ul>
        </section>

        <section>
          <h2 className="text-foreground font-semibold text-lg mb-3">3. Finalité du traitement</h2>
          <p>Les données collectées sont utilisées uniquement pour :</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Répondre à vos demandes de devis ou d'information</li>
            <li>Vous recontacter dans le cadre d'une prestation de sécurité</li>
            <li>Améliorer nos services et notre relation client</li>
          </ul>
          <p className="mt-2">
            Vos données ne sont jamais vendues, cédées ou partagées avec des tiers à des fins commerciales.
          </p>
        </section>

        <section>
          <h2 className="text-foreground font-semibold text-lg mb-3">4. Base légale</h2>
          <p>
            Le traitement est fondé sur votre <strong className="text-foreground/70">consentement</strong> (article 6.1.a du RGPD)
            lorsque vous remplissez le formulaire de contact, ainsi que sur
            l'<strong className="text-foreground/70">intérêt légitime</strong> de JII MINO SAS à répondre à vos demandes.
          </p>
        </section>

        <section>
          <h2 className="text-foreground font-semibold text-lg mb-3">5. Durée de conservation</h2>
          <p>
            Les données personnelles sont conservées pendant une durée maximale de
            <strong className="text-foreground/70"> 3 ans</strong> à compter du dernier contact,
            conformément aux recommandations de la CNIL.
          </p>
        </section>

        <section>
          <h2 className="text-foreground font-semibold text-lg mb-3">6. Vos droits (RGPD)</h2>
          <p>Conformément au Règlement Général sur la Protection des Données (UE 2016/679), vous disposez des droits suivants :</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li><strong className="text-foreground/70">Droit d'accès</strong> — obtenir une copie de vos données</li>
            <li><strong className="text-foreground/70">Droit de rectification</strong> — corriger vos données inexactes</li>
            <li><strong className="text-foreground/70">Droit à l'effacement</strong> — demander la suppression de vos données</li>
            <li><strong className="text-foreground/70">Droit à la limitation</strong> — restreindre le traitement</li>
            <li><strong className="text-foreground/70">Droit à la portabilité</strong> — recevoir vos données dans un format structuré</li>
            <li><strong className="text-foreground/70">Droit d'opposition</strong> — vous opposer au traitement</li>
          </ul>
          <p className="mt-3">
            Pour exercer vos droits, contactez-nous à : <a href="mailto:contact@jiimino.com" className="text-primary hover:underline">contact@jiimino.com</a>
          </p>
        </section>

        <section>
          <h2 className="text-foreground font-semibold text-lg mb-3">7. Cookies</h2>
          <p>
            Ce site n'utilise pas de cookies de traçage publicitaire. Seuls des cookies techniques
            strictement nécessaires au fonctionnement du site peuvent être utilisés.
          </p>
        </section>

        <section>
          <h2 className="text-foreground font-semibold text-lg mb-3">8. Sécurité des données</h2>
          <p>
            JII MINO SAS met en œuvre des mesures techniques et organisationnelles appropriées
            pour protéger vos données contre tout accès non autorisé, modification, divulgation ou destruction.
          </p>
        </section>

        <section>
          <h2 className="text-foreground font-semibold text-lg mb-3">9. Réclamation</h2>
          <p>
            Si vous estimez que vos droits ne sont pas respectés, vous pouvez introduire une réclamation
            auprès de la <strong className="text-foreground/70">Commission Nationale de l'Informatique et des Libertés (CNIL)</strong> :
          </p>
          <p className="mt-2">
            CNIL — 3 place de Fontenoy, TSA 80715, 75334 Paris Cedex 07<br />
            Site : <a href="https://www.cnil.fr" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">www.cnil.fr</a>
          </p>
        </section>

        <p className="text-foreground/25 text-[12px] pt-4 border-t border-border/20">
          Dernière mise à jour : avril 2026
        </p>
      </div>
    </div>
  </div>
);

export default PolitiqueConfidentialite;
