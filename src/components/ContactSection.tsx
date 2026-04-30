import { useState } from "react";
import { Phone, Mail, Globe, MapPin, Send, CheckCircle, AlertCircle } from "lucide-react";
import { toast } from "sonner";

const ContactSection = () => {
  const [form, setForm] = useState({
    nom: "", societe: "", telephone: "", email: "", besoin: "", message: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nom: form.nom,
          societe: form.societe,
          telephone: form.telephone,
          email: form.email,
          besoin: form.besoin,
          message: form.message,
        }),
      });
      if (res.ok) {
        setSubmitted(true);
        toast.success("Votre demande a bien été envoyée. Nous vous recontacterons sous 24h.");
        setForm({ nom: "", societe: "", telephone: "", email: "", besoin: "", message: "" });
      } else {
        setError("Une erreur est survenue. Veuillez réessayer ou nous appeler directement.");
      }
    } catch {
      setError("Erreur réseau. Veuillez vérifier votre connexion ou nous appeler.");
    } finally {
      setLoading(false);
    }
  };

  const update = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm({ ...form, [field]: e.target.value });

  const inputClass =
    "w-full px-4 py-3 rounded-md text-foreground placeholder:text-foreground/25 focus:outline-none focus:border-primary/40 focus:ring-1 focus:ring-primary/15 transition-all duration-300 text-[13px]";

  return (
    <section
      id="contact"
      className="relative py-28 md:py-36 overflow-hidden gold-grain gold-glow-top"
      style={{
        background: 'linear-gradient(180deg, hsl(228 7% 17%) 0%, hsl(228 7% 19%) 40%, hsl(42 8% 18%) 100%)',
      }}
    >
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] rounded-full blur-[120px] pointer-events-none" style={{ background: 'hsl(42 72% 50% / 0.03)' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="section-label">Contact</p>
          <h2 className="section-title">
            Demandez votre <span className="gold-text">devis gratuit</span>
          </h2>
          <div className="metallic-line w-20 mx-auto my-6" />
          <p className="text-foreground/60 text-[15px]">
            Notre équipe vous recontacte sous 24h pour étudier votre besoin.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {/* Info */}
          <div className="lg:col-span-2 space-y-3">
            {[
              { icon: Phone, label: "Téléphone", value: "09 55 79 09 88", href: "tel:+33955790988" },
              { icon: Mail, label: "E-mail", value: "contact@jiimino.com", href: "mailto:contact@jiimino.com" },
              { icon: Globe, label: "Site web", value: "www.jiimino.com", href: "https://www.jiimino.com" },
            ].map((item, i) => (
              <a key={i} href={item.href} className="group flex items-center gap-3 p-4 rounded-xl card-premium card-premium-hover">
                <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0" style={{ background: 'hsl(42 72% 50% / 0.1)', border: '1px solid hsl(42 72% 50% / 0.15)' }}>
                  <item.icon className="w-4 h-4 text-primary/70" />
                </div>
                <div>
                  <p className="text-[10px] text-foreground/45 uppercase tracking-wider">{item.label}</p>
                  <p className="text-[13px] font-medium text-foreground/80 group-hover:text-primary transition-colors">{item.value}</p>
                </div>
              </a>
            ))}

            <div className="flex items-start gap-3 p-4 rounded-xl card-premium">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0" style={{ background: 'hsl(42 72% 50% / 0.1)', border: '1px solid hsl(42 72% 50% / 0.15)' }}>
                <MapPin className="w-4 h-4 text-primary/70" />
              </div>
              <div>
                <p className="text-[10px] text-foreground/45 uppercase tracking-wider">Adresse</p>
                <p className="text-[13px] font-medium text-foreground/80">58 av. de Wagram, 75017 Paris</p>
              </div>
            </div>

            {/* Hotline — refined dark premium card instead of yellow */}
            <div className="p-5 rounded-xl card-premium" style={{ borderLeft: '3px solid hsl(42 72% 50% / 0.5)', boxShadow: '0 4px 20px hsl(0 0% 0% / 0.15), 0 0 30px hsl(42 72% 50% / 0.04)' }}>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse-gold" />
                <span className="text-[11px] font-bold uppercase tracking-wider text-primary">Hotline 24h/24</span>
              </div>
              <div className="space-y-1.5">
                <a href="tel:+33781914499" className="flex items-center gap-2 text-foreground/85 font-bold text-base hover:text-primary transition-colors">
                  <Phone className="w-3.5 h-3.5 text-primary/60" /> 07 81 91 44 99
                </a>
                <a href="tel:+33651175180" className="flex items-center gap-2 text-foreground/85 font-bold text-base hover:text-primary transition-colors">
                  <Phone className="w-3.5 h-3.5 text-primary/60" /> 06 51 17 51 80
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="lg:col-span-3 rounded-xl p-7 md:p-9 card-premium">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <CheckCircle className="w-16 h-16 text-primary mb-5" />
                <h3 className="font-serif text-2xl font-semibold mb-2 text-foreground/92">Demande envoyée !</h3>
                <p className="text-foreground/60 text-[14px] max-w-xs">
                  Merci pour votre confiance. Notre équipe vous recontacte sous 24h.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-6 btn-outline-premium px-6 py-2.5 text-[12px]"
                >
                  Nouvelle demande
                </button>
              </div>
            ) : (
              <>
                <h3 className="font-serif text-2xl font-semibold mb-1 text-foreground/92">Demande de devis</h3>
                <div className="metallic-line w-12 my-4" />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
                  <div>
                    <label className="text-[10px] text-foreground/50 uppercase tracking-wider font-medium mb-1.5 block">Nom *</label>
                    <input type="text" required value={form.nom} onChange={update("nom")} className={inputClass} placeholder="Votre nom" style={{ background: 'hsl(228 7% 19%)', border: '1px solid hsl(225 6% 26%)' }} />
                  </div>
                  <div>
                    <label className="text-[10px] text-foreground/50 uppercase tracking-wider font-medium mb-1.5 block">Société</label>
                    <input type="text" value={form.societe} onChange={update("societe")} className={inputClass} placeholder="Nom de société" style={{ background: 'hsl(228 7% 19%)', border: '1px solid hsl(225 6% 26%)' }} />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
                  <div>
                    <label className="text-[10px] text-foreground/50 uppercase tracking-wider font-medium mb-1.5 block">Téléphone *</label>
                    <input type="tel" required value={form.telephone} onChange={update("telephone")} className={inputClass} placeholder="06 00 00 00 00" style={{ background: 'hsl(228 7% 19%)', border: '1px solid hsl(225 6% 26%)' }} />
                  </div>
                  <div>
                    <label className="text-[10px] text-foreground/50 uppercase tracking-wider font-medium mb-1.5 block">E-mail *</label>
                    <input type="email" required value={form.email} onChange={update("email")} className={inputClass} placeholder="email@exemple.com" style={{ background: 'hsl(228 7% 19%)', border: '1px solid hsl(225 6% 26%)' }} />
                  </div>
                </div>

                <div className="mb-3">
                  <label className="text-[10px] text-foreground/50 uppercase tracking-wider font-medium mb-1.5 block">Type de besoin</label>
                  <select value={form.besoin} onChange={update("besoin")} className={inputClass} style={{ background: 'hsl(228 7% 19%)', border: '1px solid hsl(225 6% 26%)' }}>
                    <option value="">Sélectionnez</option>
                    <option value="Surveillance humaine">Surveillance humaine</option>
                    <option value="Gardiennage">Gardiennage</option>
                    <option value="Sécurité événementielle">Sécurité événementielle</option>
                    <option value="Prévention incendie">Prévention incendie</option>
                    <option value="Rondes et interventions">Rondes et interventions</option>
                    <option value="Contrôle d'accès">Contrôle d'accès</option>
                    <option value="Autre">Autre</option>
                  </select>
                </div>

                <div className="mb-5">
                  <label className="text-[10px] text-foreground/50 uppercase tracking-wider font-medium mb-1.5 block">Message</label>
                  <textarea rows={3} value={form.message} onChange={update("message")} className={`${inputClass} resize-none`} placeholder="Décrivez votre besoin..." style={{ background: 'hsl(228 7% 19%)', border: '1px solid hsl(225 6% 26%)' }} />
                </div>

                {error && (
                  <div className="flex items-center gap-2 mb-4 p-3 rounded-md text-[13px]" style={{ background: 'hsl(0 60% 50% / 0.1)', border: '1px solid hsl(0 60% 50% / 0.3)', color: 'hsl(0 70% 70%)' }}>
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    {error}
                  </div>
                )}

                <button type="submit" disabled={loading} className="w-full btn-premium py-3.5 disabled:opacity-60 disabled:cursor-not-allowed">
                  <Send className="w-4 h-4" />
                  {loading ? "Envoi en cours…" : "Envoyer ma demande"}
                </button>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
