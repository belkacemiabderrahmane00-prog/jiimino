import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', 'https://jiimino.com');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(204).end();
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Méthode non autorisée' });
  }

  const { nom, societe, telephone, email, besoin, message, website } = req.body || {};

  if (website) return res.status(200).json({ success: true });

  if (!nom?.trim() || !telephone?.trim() || !email?.trim()) {
    return res.status(400).json({ success: false, message: 'Champs requis manquants' });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ success: false, message: 'E-mail invalide' });
  }

  const SMTP_USER = process.env.SMTP_USER;
  const SMTP_PASS = process.env.SMTP_PASS;

  if (!SMTP_USER || !SMTP_PASS) {
    return res.status(500).json({ success: false, message: 'Configuration email manquante' });
  }

  const transporter = nodemailer.createTransport({
    host: 'smtp.hostinger.com',
    port: 587,
    secure: false,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

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
    await transporter.sendMail({
      from: `"JII MINO Site" <${SMTP_USER}>`,
      to: 'contact@jiimino.com',
      replyTo: email,
      subject: `Demande de devis – ${nom}`,
      text: emailBody,
    });

    return res.status(200).json({ success: true, message: 'Email envoyé avec succès' });
  } catch (error) {
    console.error('SMTP error:', error);
    return res.status(500).json({ success: false, message: 'Erreur lors de l\'envoi' });
  }
}
