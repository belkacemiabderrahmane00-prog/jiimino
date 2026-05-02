import formidable from 'formidable';
import nodemailer from 'nodemailer';
import fs from 'fs';

export const config = {
  api: { bodyParser: false },
};

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', 'https://jiimino.com');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(204).end();
  if (req.method !== 'POST') return res.status(405).end();

  const SMTP_USER = process.env.SMTP_USER;
  const SMTP_PASS = process.env.SMTP_PASS;

  if (!SMTP_USER || !SMTP_PASS) {
    return res.status(500).json({ success: false, message: 'Configuration email manquante' });
  }

  const form = formidable({ maxFileSize: 10 * 1024 * 1024, multiples: true });

  let fields, files;
  try {
    [fields, files] = await new Promise((resolve, reject) => {
      form.parse(req, (err, f, fi) => err ? reject(err) : resolve([f, fi]));
    });
  } catch {
    return res.status(400).json({ success: false, message: 'Erreur de parsing du formulaire' });
  }

  const get = (v) => (Array.isArray(v) ? v[0] : v) || '';
  const nom = get(fields.nom);
  const telephone = get(fields.telephone);
  const email = get(fields.email);
  const poste = get(fields.poste);
  const message = get(fields.message);

  if (!nom || !telephone || !email) {
    return res.status(400).json({ success: false, message: 'Champs requis manquants' });
  }

  const transporter = nodemailer.createTransport({
    host: 'smtp.hostinger.com',
    port: 587,
    secure: false,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  const attachments = [];

  const addAttachment = (fileField, defaultName) => {
    const f = Array.isArray(fileField) ? fileField[0] : fileField;
    if (f && f.filepath) {
      attachments.push({
        filename: f.originalFilename || defaultName,
        content: fs.readFileSync(f.filepath),
      });
    }
  };

  if (files.attachment) addAttachment(files.attachment, 'cv.pdf');
  if (files.attachment2) addAttachment(files.attachment2, 'lettre.pdf');

  const body = `
Nouvelle candidature — jiimino.com
${'─'.repeat(48)}

Nom          : ${nom}
Téléphone    : ${telephone}
E-mail       : ${email}
Poste visé   : ${poste || 'Non précisé'}

Motivations :
${'─'.repeat(30)}
${message || '(aucun message)'}

${'─'.repeat(48)}
Pièces jointes : ${attachments.length} fichier(s)
  `.trim();

  try {
    await transporter.sendMail({
      from: `"JII MINO Recrutement" <${SMTP_USER}>`,
      to: 'contact@jiimino.com',
      replyTo: email,
      subject: `Candidature – ${nom}${poste ? ` – ${poste}` : ''}`,
      text: body,
      attachments,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('SMTP recruitment error:', error);
    return res.status(500).json({ success: false, message: 'Erreur lors de l\'envoi' });
  }
}
