import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(204).end();
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Méthode non autorisée' });
  }

  const { nom, societe, telephone, email, besoin, message, website } = req.body || {};

  // Honeypot anti-spam
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
    console.error('Missing SMTP_USER or SMTP_PASS environment variables');
    return res.status(500).json({ success: false, message: 'Configuration serveur manquante' });
  }

  let transporter;
  try {
    transporter = nodemailer.createTransport({
      host: 'smtp.hostinger.com',
      port: 465,
      secure: true,
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
      tls: {
        rejectUnauthorized: true,
      },
    });
  } catch (err) {
    console.error('Transporter creation error:', err);
    return res.status(500).json({ success: false, message: 'Erreur configuration SMTP' });
  }

  const emailHTML = `
<!DOCTYPE html>
<html lang="fr">
<head><meta charset="UTF-8"></head>
<body style="font-family: Arial, sans-serif; color: #1a1a2e; max-width: 600px; margin: 0 auto; padding: 20px;">
  <div style="background: linear-gradient(135deg, #1a1a2e, #2a2a3e); padding: 30px; border-radius: 12px 12px 0 0; text-align: center;">
    <h1 style="color: #d4a853; margin: 0; font-size: 24px;">JII MINO</h1>
    <p style="color: #aaa; margin: 5px 0 0; font-size: 13px;">Nouvelle demande de devis</p>
  </div>
  <div style="background: #f9f7f2; padding: 30px; border-radius: 0 0 12px 12px; border: 1px solid #e5e0d5; border-top: none;">
    <table style="width: 100%; border-collapse: collapse;">
      <tr><td style="padding: 8px 0; color: #666; width: 130px; font-size: 13px;">Nom</td><td style="padding: 8px 0; font-weight: bold; font-size: 14px;">${nom}</td></tr>
      <tr><td style="padding: 8px 0; color: #666; font-size: 13px;">Société</td><td style="padding: 8px 0; font-size: 14px;">${societe || '—'}</td></tr>
      <tr><td style="padding: 8px 0; color: #666; font-size: 13px;">Téléphone</td><td style="padding: 8px 0; font-size: 14px;"><a href="tel:${telephone}" style="color: #d4a853;">${telephone}</a></td></tr>
      <tr><td style="padding: 8px 0; color: #666; font-size: 13px;">E-mail</td><td style="padding: 8px 0; font-size: 14px;"><a href="mailto:${email}" style="color: #d4a853;">${email}</a></td></tr>
      <tr><td style="padding: 8px 0; color: #666; font-size: 13px;">Besoin</td><td style="padding: 8px 0; font-size: 14px;">${besoin || 'Non précisé'}</td></tr>
    </table>
    ${message ? `
    <div style="margin-top: 20px; padding: 15px; background: #fff; border-radius: 8px; border-left: 3px solid #d4a853;">
      <p style="margin: 0 0 8px; color: #666; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em;">Message</p>
      <p style="margin: 0; font-size: 14px; line-height: 1.6;">${message.replace(/\n/g, '<br>')}</p>
    </div>` : ''}
    <div style="margin-top: 25px; padding-top: 20px; border-top: 1px solid #e5e0d5; text-align: center;">
      <a href="tel:${telephone}" style="display: inline-block; background: #d4a853; color: #1a1a2e; padding: 12px 28px; border-radius: 6px; text-decoration: none; font-weight: bold; font-size: 14px;">Appeler le client</a>
    </div>
  </div>
  <p style="text-align: center; color: #aaa; font-size: 11px; margin-top: 15px;">Envoyé depuis jiimino.com le ${new Date().toLocaleDateString('fr-FR', { day: '2-digit', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit' })}</p>
</body>
</html>
  `.trim();

  try {
    await transporter.sendMail({
      from: `"JII MINO Site Web" <${SMTP_USER}>`,
      to: SMTP_USER,
      replyTo: `"${nom}" <${email}>`,
      subject: `[Devis] ${nom}${societe ? ` — ${societe}` : ''} — ${besoin || 'Demande'}`,
      html: emailHTML,
      text: `Nouvelle demande de devis\n\nNom: ${nom}\nSociété: ${societe || '—'}\nTéléphone: ${telephone}\nE-mail: ${email}\nBesoin: ${besoin || 'Non précisé'}\nMessage: ${message || '—'}`,
    });

    // Accusé de réception au client
    await transporter.sendMail({
      from: `"JII MINO" <${SMTP_USER}>`,
      to: email,
      replyTo: SMTP_USER,
      subject: `Votre demande a bien été reçue — JII MINO`,
      html: `
<!DOCTYPE html>
<html lang="fr">
<head><meta charset="UTF-8"></head>
<body style="font-family: Arial, sans-serif; color: #1a1a2e; max-width: 600px; margin: 0 auto; padding: 20px;">
  <div style="background: linear-gradient(135deg, #1a1a2e, #2a2a3e); padding: 30px; border-radius: 12px 12px 0 0; text-align: center;">
    <h1 style="color: #d4a853; margin: 0; font-size: 24px;">JII MINO</h1>
    <p style="color: #aaa; margin: 5px 0 0; font-size: 13px;">Sécurité Privée d'Excellence</p>
  </div>
  <div style="background: #f9f7f2; padding: 30px; border-radius: 0 0 12px 12px; border: 1px solid #e5e0d5; border-top: none;">
    <p style="font-size: 16px;">Bonjour <strong>${nom}</strong>,</p>
    <p style="font-size: 14px; line-height: 1.7; color: #444;">Nous avons bien reçu votre demande de devis et nous vous recontacterons dans les <strong>24 heures</strong> (jours ouvrés).</p>
    <p style="font-size: 14px; line-height: 1.7; color: #444;">Pour toute urgence, vous pouvez nous joindre directement :</p>
    <div style="text-align: center; margin: 25px 0;">
      <a href="tel:+33781914499" style="display: inline-block; background: #d4a853; color: #1a1a2e; padding: 12px 28px; border-radius: 6px; text-decoration: none; font-weight: bold; font-size: 14px; margin: 5px;">📞 07 81 91 44 99</a>
    </div>
    <p style="font-size: 13px; color: #888; margin-top: 25px; padding-top: 20px; border-top: 1px solid #e5e0d5;">Cordialement,<br><strong style="color: #1a1a2e;">L'équipe JII MINO</strong></p>
  </div>
</body>
</html>`,
    });

    return res.status(200).json({ success: true, message: 'Demande envoyée avec succès' });
  } catch (error) {
    console.error('SMTP sendMail error:', error.message || error);
    return res.status(500).json({ success: false, message: 'Erreur lors de l\'envoi de l\'email' });
  }
}
