export default async function handler(req, res) {
  // CORS
  res.setHeader('Access-Control-Allow-Origin', 'https://jiimino.com');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(204).end();
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Méthode non autorisée' });
  }

  const { nom, societe, telephone, email, besoin, message, website } = req.body || {};

  // Anti-spam honeypot
  if (website) return res.status(200).json({ success: true });

  // Validation
  if (!nom?.trim() || !telephone?.trim() || !email?.trim()) {
    return res.status(400).json({ success: false, message: 'Champs requis manquants' });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ success: false, message: 'E-mail invalide' });
  }

  const RESEND_API_KEY = process.env.RESEND_API_KEY;
  if (!RESEND_API_KEY) {
    return res.status(500).json({ success: false, message: 'Configuration email manquante' });
  }

  const emailBody = `
Nouvelle demande de devis — jiimino.com
${'─'.repeat(48)}

Nom          : ${nom}
Société      : ${societe || '—'}
Téléphone    : ${telephone}
E-mail       : ${email}
Type besoin  : ${besoin || 'Non précisé'}

Message :
${'─'.repeat(30)}
${message || '(aucun message)'}

${'─'.repeat(48)}
Envoyé depuis jiimino.com
  `.trim();

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'JII MINO <onboarding@resend.dev>',
        to: ['contact@jiimino.com'],
        reply_to: email,
        subject: `Demande de devis – ${nom}`,
        text: emailBody,
      }),
    });

    if (response.ok) {
      return res.status(200).json({ success: true, message: 'Email envoyé avec succès' });
    } else {
      const err = await response.json().catch(() => ({}));
      console.error('Resend error:', err);
      return res.status(500).json({ success: false, message: 'Erreur lors de l\'envoi' });
    }
  } catch (error) {
    console.error('Contact API error:', error);
    return res.status(500).json({ success: false, message: 'Erreur serveur' });
  }
}
