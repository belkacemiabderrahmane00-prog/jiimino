import sharp from 'sharp';
import { readdirSync, statSync, writeFileSync } from 'fs';
import { join, extname, basename } from 'path';

const assetsDir = './src/assets';
const JPG_QUALITY = 78;
const PNG_QUALITY = 80;
const MAX_WIDTH = 1920;

async function compress() {
  const files = readdirSync(assetsDir);
  let totalSaved = 0;

  for (const file of files) {
    const filePath = join(assetsDir, file);
    const stat = statSync(filePath);
    if (stat.isDirectory()) continue;

    const ext = extname(file).toLowerCase();
    if (!['.jpg', '.jpeg', '.png'].includes(ext)) continue;

    const sizeBefore = stat.size;

    try {
      const image = sharp(filePath);
      const meta = await image.metadata();

      let pipeline = sharp(filePath);
      if (meta.width && meta.width > MAX_WIDTH) {
        pipeline = pipeline.resize(MAX_WIDTH, null, { withoutEnlargement: true });
      }

      let buf;
      if (ext === '.png') {
        buf = await pipeline.png({ quality: PNG_QUALITY, compressionLevel: 9 }).toBuffer();
      } else {
        buf = await pipeline.jpeg({ quality: JPG_QUALITY, mozjpeg: true, progressive: true }).toBuffer();
      }

      if (buf.length < sizeBefore) {
        writeFileSync(filePath, buf);
        const saved = ((sizeBefore - buf.length) / sizeBefore * 100).toFixed(1);
        const savedKb = ((sizeBefore - buf.length) / 1024).toFixed(0);
        totalSaved += (sizeBefore - buf.length);
        console.log(`✓ ${file.padEnd(45)} ${(sizeBefore/1024).toFixed(0).padStart(6)}kB → ${(buf.length/1024).toFixed(0).padStart(6)}kB  (-${saved}%, -${savedKb}kB)`);
      } else {
        console.log(`~ ${file.padEnd(45)} already optimal`);
      }
    } catch (e) {
      console.error(`✗ ${file}: ${e.message}`);
    }
  }

  console.log(`\nTotal économisé : ${(totalSaved / 1024 / 1024).toFixed(2)} MB`);
}

compress().catch(console.error);
