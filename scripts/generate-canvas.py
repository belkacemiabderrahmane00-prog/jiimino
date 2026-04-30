from PIL import Image, ImageDraw, ImageFont
import math, os, sys

W, H = 2400, 3200
bg = (17, 19, 24)          # anthracite profond
gold = (192, 152, 72)      # or brûlé
gold_lt = (220, 185, 110)  # or clair
gold_dim = (100, 78, 35)   # or sombre
cream = (238, 230, 215)     # crème ivoire
white = (248, 244, 238)

img = Image.new("RGB", (W, H), bg)
d = ImageDraw.Draw(img)

# ── Grain texture simulé ──
import random
random.seed(42)
grain = Image.new("RGBA", (W, H), (0, 0, 0, 0))
gd = ImageDraw.Draw(grain)
for _ in range(280000):
    x = random.randint(0, W - 1)
    y = random.randint(0, H - 1)
    a = random.randint(2, 9)
    gd.point((x, y), fill=(gold[0], gold[1], gold[2], a))
img.paste(Image.alpha_composite(img.convert("RGBA"), grain).convert("RGB"))
d = ImageDraw.Draw(img)

# ── Fond dégradé subtil ──
for y in range(H):
    t = y / H
    r = int(bg[0] + (28 - bg[0]) * (1 - t) * 0.4)
    g_ = int(bg[1] + (22 - bg[1]) * (1 - t) * 0.3)
    b = int(bg[2] + (35 - bg[2]) * t * 0.2)
    d.line([(0, y), (W, y)], fill=(r, g_, b))

# ── Ligne or supérieure ──
for i in range(3):
    alpha_val = [180, 90, 40][i]
    y_pos = 110 + i * 2
    d.line([(160, y_pos), (W - 160, y_pos)], fill=(*gold, alpha_val) if False else gold, width=1)
d.line([(160, 110), (W - 160, 110)], fill=gold_lt, width=2)
d.line([(160, 114), (W - 160, 114)], fill=gold_dim, width=1)

# ── Label supérieur ──
try:
    font_path = os.path.join(os.path.dirname(__file__), "..", "canvas-fonts")
    fonts_available = os.path.exists(font_path)
    fn_serif = None
    fn_sans = None
    if fonts_available:
        candidates_serif = [f for f in os.listdir(font_path) if "Cormorant" in f or "Garamond" in f or "Playfair" in f]
        candidates_sans = [f for f in os.listdir(font_path) if "Inter" in f or "Montserrat" in f or "Raleway" in f]
        if candidates_serif:
            fn_serif = os.path.join(font_path, candidates_serif[0])
        if candidates_sans:
            fn_sans = os.path.join(font_path, candidates_sans[0])
except Exception:
    pass

def get_font(path, size, fallback_size=None):
    if path and os.path.exists(path):
        try:
            return ImageFont.truetype(path, size)
        except Exception:
            pass
    try:
        return ImageFont.load_default()
    except Exception:
        return ImageFont.load_default()

f_label  = get_font(fn_sans,  26)
f_small  = get_font(fn_sans,  22)
f_title  = get_font(fn_serif, 160)
f_sub    = get_font(fn_serif, 64)
f_body   = get_font(fn_sans,  28)
f_micro  = get_font(fn_sans,  18)

# Label
label_text = "LUMIÈRE SOUVERAINE  ·  PHILOSOPHIE DE DESIGN  ·  MMXXVI"
d.text((160, 68), label_text, font=f_label, fill=(*gold_dim, 200) if False else (100, 78, 35))

# ── Grande lettre décorative ──
# "L" géant en filigrane
d.text((80, 200), "L", font=get_font(fn_serif, 900), fill=(30, 28, 24))

# ── Ligne dorée verticale gauche ──
d.rectangle([148, 160, 151, H - 160], fill=gold_dim)
d.rectangle([155, 300, 157, 1200], fill=gold)

# ── Titre principal ──
title_lines = ["LUMIÈRE", "SOUVERAINE"]
y_t = 320
for line in title_lines:
    d.text((220, y_t), line, font=get_font(fn_serif, 195), fill=white)
    y_t += 195

# ── Ligne d'or sous-titre ──
d.line([(220, y_t + 20), (W - 200, y_t + 20)], fill=gold_dim, width=1)
d.line([(220, y_t + 24), (220 + 320, y_t + 24)], fill=gold, width=2)

# ── Sous-titre ──
d.text((222, y_t + 48), "Une philosophie de l'obscurité maîtrisée", font=get_font(fn_serif, 54), fill=(180, 160, 120))

# ── Bloc de colonnes ──
col_y = y_t + 160
col_w = (W - 400 - 60) // 2

# Fond bloc gauche
d.rectangle([200, col_y, 200 + col_w, col_y + 720], fill=(22, 21, 18))
d.rectangle([200, col_y, 201, col_y + 720], fill=gold)

# Texte bloc gauche
texts_l = [
    ("ESPACE ET FORME", "Architecture de l'absence contrôlée.\nChaque surface respire.\nFormes monolithiques, permanentes.\nRien ne s'excuse de sa présence."),
    ("COULEUR ET MATIÈRE", "Trois tons : anthracite, or brûlé, lin.\nL'or n'inonde jamais — il illumine.\nUne ligne, un éclat, un frisson."),
]
ty = col_y + 50
for title_t, body_t in texts_l:
    d.text((230, ty), title_t, font=get_font(fn_sans, 20), fill=gold)
    ty += 36
    for line in body_t.split("\n"):
        d.text((230, ty), line, font=get_font(fn_sans, 24), fill=(160, 152, 138))
        ty += 32
    ty += 40

# Fond bloc droit
rx = 200 + col_w + 60
d.rectangle([rx, col_y, rx + col_w, col_y + 720], fill=(22, 21, 18))
d.rectangle([rx, col_y, rx + 1, col_y + 720], fill=gold_dim)

texts_r = [
    ("RYTHME ET ÉCHELLE", "Hiérarchie par contraste extrême.\nSérif monumental, labels invisibles.\nSilence large, puis un battement d'or."),
    ("COMPOSITION", "Asymétrie au service de la tension.\nSection dorée invisible sous la surface.\nRien ne centre sauf pour créer le drame."),
]
ty = col_y + 50
for title_t, body_t in texts_r:
    d.text((rx + 30, ty), title_t, font=get_font(fn_sans, 20), fill=gold)
    ty += 36
    for line in body_t.split("\n"):
        d.text((rx + 30, ty), line, font=get_font(fn_sans, 24), fill=(160, 152, 138))
        ty += 32
    ty += 40

# ── Séparateur central ──
sep_y = col_y + 780
d.line([(200, sep_y), (W - 200, sep_y)], fill=(40, 37, 30), width=1)

# ── Grille de cercles décoratifs (motif répétitif) ──
grid_y = sep_y + 60
circle_r = 4
gap = 38
cols_g = (W - 400) // gap
rows_g = 10
for row in range(rows_g):
    for col in range(cols_g):
        cx = 200 + col * gap + gap // 2
        cy = grid_y + row * gap + gap // 2
        dist = math.sqrt((col - cols_g / 2) ** 2 + (row - rows_g / 2) ** 2)
        max_d = math.sqrt((cols_g / 2) ** 2 + (rows_g / 2) ** 2)
        intensity = 1 - (dist / max_d)
        if intensity > 0.1:
            r_size = max(1, int(circle_r * intensity * 0.8))
            alpha = int(60 + 140 * intensity)
            color = (
                int(gold_dim[0] + (gold[0] - gold_dim[0]) * intensity),
                int(gold_dim[1] + (gold[1] - gold_dim[1]) * intensity),
                int(gold_dim[2] + (gold[2] - gold_dim[2]) * intensity),
            )
            d.ellipse([cx - r_size, cy - r_size, cx + r_size, cy + r_size], fill=color)

# ── Ligne centrale ──
center_y = grid_y + rows_g * gap + 60
d.text((200, center_y), "« L'obscurité bien dosée est la forme la plus haute de la clarté »", font=get_font(fn_serif, 52), fill=(140, 115, 65))
d.line([(200, center_y + 72), (200 + 380, center_y + 72)], fill=gold, width=1)

# ── Grand bloc typographique bas ──
big_y = center_y + 120
d.text((195, big_y), "CONF", font=get_font(fn_serif, 280), fill=(28, 26, 22))
d.text((195, big_y + 260), "IANCE", font=get_font(fn_serif, 280), fill=(28, 26, 22))

# Or overlay lettre
d.text((197, big_y + 2), "C", font=get_font(fn_serif, 280), fill=(50, 42, 25))

# ── Numéro de page / référence ──
d.text((200, H - 130), "01", font=get_font(fn_sans, 22), fill=(80, 72, 55))
d.text((W - 380, H - 130), "jiimino.com  ·  SÉCURITÉ D'EXCELLENCE", font=get_font(fn_sans, 18), fill=(80, 72, 55))
d.line([(160, H - 148), (W - 160, H - 148)], fill=gold_dim, width=1)
d.line([(160, H - 144), (160 + 280, H - 144)], fill=gold, width=2)

# ── Sauvegarde ──
out_path = os.path.join(os.path.dirname(__file__), "..", "design-canvas.png")
img.save(out_path, "PNG", dpi=(300, 300))
print(f"Canvas sauvegardé : {out_path}")
print(f"Dimensions : {W}x{H}px @ 300 DPI")
