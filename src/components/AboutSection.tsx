import photoAbout from "@/assets/photo-about.jpg";

const AboutSection = () => (
  <section
    id="apropos"
    className="relative py-28 md:py-36 overflow-hidden section-cream-warm"
  >
    <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        <div className="relative">
          <div className="rounded-2xl overflow-hidden" style={{ boxShadow: '0 8px 40px hsl(225 15% 12% / 0.15), 0 0 60px hsl(42 72% 50% / 0.08)' }}>
            <img
              src={photoAbout}
              alt="Siège JII MINO – Paris 17e"
              loading="lazy"
              className="w-full h-[380px] lg:h-[460px] object-cover"
            />
          </div>
          <div className="absolute -bottom-4 -right-4 rounded-xl p-5 bg-white border border-primary/20" style={{ boxShadow: '0 8px 32px hsl(225 15% 12% / 0.12)' }}>
            <p className="text-3xl font-serif font-semibold text-primary">24/7</p>
            <p className="text-[10px] uppercase tracking-wider" style={{ color: 'hsl(225 10% 45%)' }}>Disponibilité</p>
          </div>
          <div className="absolute -top-3 -left-3 rounded-xl p-4 bg-white border border-primary/20" style={{ boxShadow: '0 8px 32px hsl(225 15% 12% / 0.12)' }}>
            <p className="text-[11px] uppercase tracking-wider" style={{ color: 'hsl(225 10% 45%)' }}>Siège social</p>
            <p className="text-sm font-semibold" style={{ color: 'hsl(225 15% 12%)' }}>Paris 17e</p>
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-4 inline-block text-primary">À propos</p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.05] mb-5" style={{ color: 'hsl(225 15% 12%)' }}>
            <span className="text-primary">JII MINO</span>
          </h2>
          <div className="metallic-line w-24 my-6" />
          <div className="space-y-4 text-[15px] leading-relaxed" style={{ color: 'hsl(225 12% 28%)' }}>
            <p>
              <strong style={{ color: 'hsl(225 15% 12%)' }}>JII MINO SAS</strong> offre des solutions de sécurité adaptées à chaque secteur, avec une expertise reconnue dans divers domaines.
            </p>
            <p>
              Nous assurons la sécurité humaine et électronique, en nous efforçant de garantir une protection rapide des biens et des personnes grâce à des agents formés et l'usage de technologies parmi les plus avancées.
            </p>
            <p>
              Chez JII MINO, nous protégeons vos enjeux, pas juste vos biens. Grâce à des équipes formées et des solutions innovantes, nous transformons vos vulnérabilités en zones de confiance.
            </p>
          </div>

          <div className="mt-8 p-5 rounded-xl inline-block bg-white/60 border border-primary/15" style={{ boxShadow: '0 4px 20px hsl(42 72% 50% / 0.08)' }}>
            <p className="text-[10px] text-primary font-semibold uppercase tracking-wider mb-2">Horaires</p>
            <div className="text-[13px] space-y-1" style={{ color: 'hsl(225 12% 35%)' }}>
              <p>Lun – Ven : <span className="font-semibold" style={{ color: 'hsl(225 15% 12%)' }}>09h00 – 18h00</span></p>
              <p>Samedi : <span className="font-semibold" style={{ color: 'hsl(225 15% 12%)' }}>10h00 – 15h00</span></p>
              <p>Dimanche : <span className="font-semibold text-primary">Astreinte 24h/24</span></p>
            </div>
          </div>

          <p className="text-primary font-serif italic text-xl mt-8">
            « Votre sécurité, notre engagement »
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
