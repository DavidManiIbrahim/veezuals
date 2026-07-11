import sharp from "sharp";
import { readdir, stat } from "node:fs/promises";
import { join, extname } from "node:path";

const PROJECTS_DIR = join(import.meta.dirname, "../src/assets/projects");
const MAX_WIDTH = 1200;
const QUALITY = 75;

const EXTENSIONS = new Set([".jpg", ".jpeg", ".png"]);

async function getAllImages(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await getAllImages(full)));
    } else if (EXTENSIONS.has(extname(entry.name).toLowerCase())) {
      files.push(full);
    }
  }
  return files;
}

async function compress(filePath) {
  const before = (await stat(filePath)).size;
  const ext = extname(filePath).toLowerCase();
  const outPath = filePath.replace(ext, ".webp");

  await sharp(filePath)
    .resize({ width: MAX_WIDTH, withoutEnlargement: true })
    .webp({ quality: QUALITY, effort: 4 })
    .toFile(outPath);

  const after = (await stat(outPath)).size;
  const saved = ((1 - after / before) * 100).toFixed(1);
  console.log(`  ${filePath.split("/assets/projects/")[1]}: ${(before / 1e6).toFixed(1)}MB → ${(after / 1e6).toFixed(2)}MB (${saved}% smaller)`);
  return { before, after };
}

async function main() {
  console.log(`Compressing images (max ${MAX_WIDTH}px, quality ${QUALITY})...\n`);
  const images = await getAllImages(PROJECTS_DIR);
  console.log(`Found ${images.length} images\n`);

  let totalBefore = 0;
  let totalAfter = 0;

  for (const img of images) {
    const { before, after } = await compress(img);
    totalBefore += before;
    totalAfter += after;
  }

  console.log(`\nDone! Total: ${(totalBefore / 1e6).toFixed(0)}MB → ${(totalAfter / 1e6).toFixed(1)}MB (${((1 - totalAfter / totalBefore) * 100).toFixed(0)}% smaller)`);
  console.log(`\nNext steps:`);
  console.log(`1. Update the glob pattern in gallery.tsx to include .webp`);
  console.log(`2. Delete the original .jpg/.jpeg/.png files if desired`);
}

main().catch(console.error);
