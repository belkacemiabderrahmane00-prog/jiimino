import { useState } from "react";
import { ArrowRight, Shield, GraduationCap, Heart, Clock, MapPin, Send, Paperclip, X, CheckCircle } from "lucide-react";
import photoRecruit from "@/assets/photo-recruit.jpg";
import { toast } from "sonner";

const perks = [
  { icon: Shield, title: "Métier valorisant", desc: "Un rôle clé dans la protection des personnes et des biens." },
  { icon: GraduationCap, title: "Formation continue", desc: "Montée en compétences et certifications (SSIAP, CQP APS)." },
  { icon: Heart, title: "Esprit d'équipe", desc: "Une entreprise à taille humaine, solidaire et bienveillante." },
  { icon: Clock, title: "Stabilité", desc: "CDI et missions régulières sur Paris et Île-de-France." },
];

const RecruitmentSection = () => {
  const [showForm, setShowForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [cvFile, setCvFile] = useState<File | null>(null);
  const [lmFile, setLmFile] = useState<File | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);

    const formData = new FormData(e.currentTarget);

    try {
      const res = await fetch("/api/recruitment", {
        method: "POST",
        body: formData,
      });
      if (res.ok) {
        setSubmitted(true);
        toast.success("Votre candidature a bien été envoyée !");
      } else {
        toast.error("Erreur lors de l'envoi. Veuillez réessayer.");
      }
    } catch {
      toast.error("Erreur réseau. Veuillez réessayer.");
    } finally {
      setSending(false);
    }
  };

  const inputClass =
    "w-full px-4 py-3 rounded-md text-[13px] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/30 bg-white/60 border border-primary/15 text-[hsl(225,15%,12%)] placeholder:text-[hsl(225,10%,50%)]";

  return (
    <section className="relative py-24 md:py-32 overflow-hidden section-cream-warm">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="rounded-2xl overflow-hidden shadow-2xl shadow-primary/10">
              <img
                src={photoRecruit}
                alt="Rejoignez l'équipe JII MINO"
                loading="lazy"
                className="w-full h-[360px] lg:h-[440px] object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-primary text-primary-foreground rounded-xl p-5 shadow-xl">
              <p className="text-2xl font-serif font-bold">On recrute</p>
              <p className="text-[11px] uppercase tracking-wider opacity-80">Paris & IDF</p>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-4 inline-block text-primary">
              Carrières
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-semibold leading-[1.05] mb-5" style={{ color: 'hsl(225 15% 12%)' }}>
              Rejoignez <span className="text-primary">JII MINO</span>
            </h2>
            <p className="text-[15px] leading-relaxed mb-8" style={{ color: 'hsl(225 12% 30%)' }}>
              Vous êtes agent de sécurité, SSIAP ou titulaire d'une carte professionnelle CNAPS ?
              Intégrez une entreprise qui valorise ses collaborateurs et investit dans leur développement.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {perks.map((p, i) => (
                <div key={i} className="group flex items-start gap-3 p-4 rounded-xl bg-white/40 border border-primary/10 hover:border-primary/25 transition-all duration-300">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/15 flex items-center justify-center shrink-0 group-hover:bg-primary/15 transition-colors">
                    <p.icon className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-[13px] font-semibold" style={{ color: 'hsl(225 15% 12%)' }}>{p.title}</h3>
                    <p className="text-[12px] leading-relaxed" style={{ color: 'hsl(225 10% 40%)' }}>{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => { setShowForm(true); setSubmitted(false); }}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 gold-gradient text-primary-foreground font-bold text-[13px] tracking-[0.04em] uppercase rounded-sm hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
              >
                Postuler maintenant
                <ArrowRight className="w-4 h-4" />
              </button>
              <div className="flex items-center gap-2 text-[13px]" style={{ color: 'hsl(225 10% 40%)' }}>
                <MapPin className="w-4 h-4 text-primary/60" />
                Paris & Île-de-France
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal form */}
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={() => setShowForm(false)}>
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
          <div
            className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl p-6 md:p-8"
            style={{ background: 'hsl(225 6% 19%)', border: '1px solid hsl(225 5% 27%)' }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors"
            >
              <X className="w-4 h-4 text-foreground/60" />
            </button>

            {submitted ? (
              <div className="text-center py-10">
                <CheckCircle className="w-16 h-16 text-primary mx-auto mb-4" />
                <h3 className="font-serif text-2xl font-semibold mb-2" style={{ color: 'hsl(38 15% 88%)' }}>
                  Candidature envoyée !
                </h3>
                <p className="text-sm" style={{ color: 'hsl(38 15% 65%)' }}>
                  Merci pour votre intérêt. Nous reviendrons vers vous rapidement.
                </p>
                <button
                  onClick={() => setShowForm(false)}
                  className="mt-6 px-6 py-2.5 gold-gradient text-primary-foreground font-bold text-[13px] uppercase tracking-wider rounded-sm"
                >
                  Fermer
                </button>
              </div>
            ) : (
              <>
                <h3 className="font-serif text-2xl font-semibold mb-1" style={{ color: 'hsl(38 15% 88%)' }}>
                  Postuler chez JII MINO
                </h3>
                <div className="w-10 h-px bg-primary/50 mb-6" />

                <form onSubmit={handleSubmit} encType="multipart/form-data" className="space-y-4">

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="text-[10px] uppercase tracking-wider font-medium mb-1.5 block" style={{ color: 'hsl(38 15% 55%)' }}>Nom complet *</label>
                      <input type="text" name="nom" required className={inputClass} placeholder="Votre nom" style={{ background: 'hsl(225 6% 19%)', border: '1px solid hsl(225 6% 27%)', color: 'hsl(38 15% 88%)' }} />
                    </div>
                    <div>
                      <label className="text-[10px] uppercase tracking-wider font-medium mb-1.5 block" style={{ color: 'hsl(38 15% 55%)' }}>Téléphone *</label>
                      <input type="tel" name="telephone" required className={inputClass} placeholder="06 00 00 00 00" style={{ background: 'hsl(225 6% 19%)', border: '1px solid hsl(225 6% 27%)', color: 'hsl(38 15% 88%)' }} />
                    </div>
                  </div>

                  <div>
                    <label className="text-[10px] uppercase tracking-wider font-medium mb-1.5 block" style={{ color: 'hsl(38 15% 55%)' }}>E-mail *</label>
                    <input type="email" name="email" required className={inputClass} placeholder="email@exemple.com" style={{ background: 'hsl(225 6% 19%)', border: '1px solid hsl(225 6% 27%)', color: 'hsl(38 15% 88%)' }} />
                  </div>

                  <div>
                    <label className="text-[10px] uppercase tracking-wider font-medium mb-1.5 block" style={{ color: 'hsl(38 15% 55%)' }}>Poste souhaité</label>
                    <select name="poste" className={inputClass} style={{ background: 'hsl(225 6% 19%)', border: '1px solid hsl(225 6% 27%)', color: 'hsl(38 15% 88%)' }}>
                      <option value="">Sélectionnez</option>
                      <option value="agent-securite">Agent de sécurité (APS)</option>
                      <option value="ssiap">Agent SSIAP</option>
                      <option value="chef-equipe">Chef d'équipe</option>
                      <option value="rondier">Rondier intervenant</option>
                      <option value="evenementiel">Agent événementiel</option>
                      <option value="autre">Autre</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-[10px] uppercase tracking-wider font-medium mb-1.5 block" style={{ color: 'hsl(38 15% 55%)' }}>Message / Motivations</label>
                    <textarea name="message" rows={3} className={`${inputClass} resize-none`} placeholder="Présentez-vous brièvement..." style={{ background: 'hsl(225 6% 19%)', border: '1px solid hsl(225 6% 27%)', color: 'hsl(38 15% 88%)' }} />
                  </div>

                  {/* CV Upload */}
                  <div>
                    <label className="text-[10px] uppercase tracking-wider font-medium mb-1.5 block" style={{ color: 'hsl(38 15% 55%)' }}>
                      CV (PDF, DOC) *
                    </label>
                    <label className="flex items-center gap-3 p-3 rounded-md cursor-pointer transition-all hover:border-primary/30" style={{ background: 'hsl(225 6% 19%)', border: '1px solid hsl(225 6% 27%)' }}>
                      <Paperclip className="w-4 h-4 text-primary/60 shrink-0" />
                      <span className="text-[13px]" style={{ color: cvFile ? 'hsl(38 15% 88%)' : 'hsl(38 15% 45%)' }}>
                        {cvFile ? cvFile.name : "Joindre votre CV"}
                      </span>
                      <input
                        type="file"
                        name="attachment"
                        accept=".pdf,.doc,.docx"
                        required
                        className="hidden"
                        onChange={(e) => setCvFile(e.target.files?.[0] || null)}
                      />
                    </label>
                  </div>

                  {/* Lettre de recommandation */}
                  <div>
                    <label className="text-[10px] uppercase tracking-wider font-medium mb-1.5 block" style={{ color: 'hsl(38 15% 55%)' }}>
                      Lettre de recommandation (optionnel)
                    </label>
                    <label className="flex items-center gap-3 p-3 rounded-md cursor-pointer transition-all hover:border-primary/30" style={{ background: 'hsl(225 6% 19%)', border: '1px solid hsl(225 6% 27%)' }}>
                      <Paperclip className="w-4 h-4 text-primary/60 shrink-0" />
                      <span className="text-[13px]" style={{ color: lmFile ? 'hsl(38 15% 88%)' : 'hsl(38 15% 45%)' }}>
                        {lmFile ? lmFile.name : "Joindre une lettre"}
                      </span>
                      <input
                        type="file"
                        name="attachment2"
                        accept=".pdf,.doc,.docx"
                        className="hidden"
                        onChange={(e) => setLmFile(e.target.files?.[0] || null)}
                      />
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={sending}
                    className="w-full flex items-center justify-center gap-2 py-3.5 gold-gradient text-primary-foreground font-bold text-[13px] uppercase tracking-wider rounded-md hover:shadow-lg hover:shadow-primary/20 transition-all disabled:opacity-60"
                  >
                    <Send className="w-4 h-4" />
                    {sending ? "Envoi en cours..." : "Envoyer ma candidature"}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default RecruitmentSection;
