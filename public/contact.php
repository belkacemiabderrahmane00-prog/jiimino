<?php
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: https://www.jiimino.com');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Méthode non autorisée']);
    exit;
}

$raw = file_get_contents('php://input');
$input = json_decode($raw, true);

if (!$input) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Données invalides']);
    exit;
}

// Sanitize
function clean($v) {
    return htmlspecialchars(strip_tags(trim($v ?? '')), ENT_QUOTES, 'UTF-8');
}

$nom      = clean($input['nom']);
$societe  = clean($input['societe']);
$tel      = clean($input['telephone']);
$email    = filter_var(trim($input['email'] ?? ''), FILTER_SANITIZE_EMAIL);
$besoin   = clean($input['besoin']);
$message  = clean($input['message']);

// Validate
if (empty($nom) || empty($tel) || empty($email)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Champs requis manquants (nom, téléphone, email)']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Adresse e-mail invalide']);
    exit;
}

// Simple anti-spam: honeypot check (optional field must be empty)
if (!empty($input['website'])) {
    http_response_code(200);
    echo json_encode(['success' => true]); // Silently discard spam
    exit;
}

$to      = 'contact@jiimino.com';
$subject = '=?UTF-8?B?' . base64_encode("Demande de devis – {$nom}") . '?=';

$body  = "Nouvelle demande de devis reçue via jiimino.com\n";
$body .= str_repeat('─', 50) . "\n\n";
$body .= "Nom          : {$nom}\n";
$body .= "Société      : " . ($societe ?: '—') . "\n";
$body .= "Téléphone    : {$tel}\n";
$body .= "E-mail       : {$email}\n";
$body .= "Type besoin  : " . ($besoin ?: 'Non précisé') . "\n";
$body .= "\nMessage :\n";
$body .= str_repeat('─', 30) . "\n";
$body .= ($message ?: '(aucun message)') . "\n\n";
$body .= str_repeat('─', 50) . "\n";
$body .= "Envoyé automatiquement depuis jiimino.com\n";

$headers  = "From: JII MINO Site <noreply@jiimino.com>\r\n";
$headers .= "Reply-To: {$email}\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
$headers .= "Content-Transfer-Encoding: 8bit\r\n";
$headers .= "X-Mailer: PHP/" . phpversion() . "\r\n";

$sent = mail($to, $subject, $body, $headers);

if ($sent) {
    echo json_encode(['success' => true, 'message' => 'Message envoyé avec succès']);
} else {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Erreur lors de l\'envoi. Veuillez nous appeler directement.']);
}
