/**
 * Re-runnable asset pipeline.
 *
 *   node scripts/generate-assets.mjs
 *
 * 1. Converts source photos in src/assets to WebP.
 * 2. Builds favicons + apple-touch-icon from the profile photo.
 * 3. Composites a branded 1200x630 OG image.
 *
 * OG output stays JPEG on purpose — several social crawlers still handle
 * WebP previews badly. Everything rendered on the site itself is WebP.
 */
import sharp from 'sharp';
import { readdir, mkdir, unlink } from 'node:fs/promises';
import path from 'node:path';

const ASSETS = 'src/assets';
const PUBLIC = 'public';

const PAPER = '#F1E8D6';
const INK = '#201512';
const BURGUNDY = '#7A1F2B';
const GOLD = '#C89B3C';
const GOLD_LIGHT = '#E4C878';

async function convertSourceImages() {
  const files = await readdir(ASSETS);
  const jpegs = files.filter((f) => /\.(jpe?g|png)$/i.test(f));

  for (const file of jpegs) {
    const from = path.join(ASSETS, file);
    const to = path.join(ASSETS, `${path.parse(file).name}.webp`);
    await sharp(from).webp({ quality: 82, effort: 6 }).toFile(to);
    await unlink(from);
    console.log(`  webp   ${file} -> ${path.basename(to)}`);
  }
  if (!jpegs.length) console.log('  webp   (already converted)');
}

async function buildIcons(source) {
  await mkdir(PUBLIC, { recursive: true });

  // Square crop centred on the face (image is near-square already).
  const square = sharp(source).resize(512, 512, { fit: 'cover', position: 'top' });

  const sizes = [
    { size: 512, name: 'icon-512.png' },
    { size: 192, name: 'icon-192.png' },
    { size: 180, name: 'apple-touch-icon.png' },
    { size: 32, name: 'favicon-32.png' },
    { size: 16, name: 'favicon-16.png' },
  ];

  for (const { size, name } of sizes) {
    await square
      .clone()
      .resize(size, size)
      .png({ compressionLevel: 9 })
      .toFile(path.join(PUBLIC, name));
    console.log(`  icon   ${name}`);
  }

  // favicon.ico — 32px PNG payload, which every current browser accepts.
  await square.clone().resize(32, 32).png().toFile(path.join(PUBLIC, 'favicon.ico'));
  console.log('  icon   favicon.ico');
}

async function buildOgImage(source) {
  const W = 1200;
  const H = 630;

  const bulbs = Array.from({ length: 30 }, (_, i) => {
    const cx = 24 + i * 40;
    return `<circle cx="${cx}" cy="${H - 22}" r="6" fill="${i % 2 ? GOLD : GOLD_LIGHT}"/>`;
  }).join('');

  const svg = `
  <svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
    <rect width="${W}" height="${H}" fill="${PAPER}"/>
    <rect x="0" y="0" width="${W}" height="14" fill="${BURGUNDY}"/>
    <rect x="0" y="${H - 44}" width="${W}" height="44" fill="${INK}"/>
    ${bulbs}

    <text x="64" y="132" font-family="Courier New, monospace" font-size="22"
          letter-spacing="6" fill="${BURGUNDY}">NOW APPEARING</text>

    <text x="64" y="236" font-family="Georgia, serif" font-weight="bold"
          font-size="82" fill="${INK}">Yes, that</text>
    <text x="64" y="330" font-family="Georgia, serif" font-weight="bold"
          font-size="82" fill="${BURGUNDY}">Steve Martin.</text>

    <text x="64" y="404" font-family="Georgia, serif" font-size="30" fill="#4A3A34">
      SEO, AI Search &amp; Websites
    </text>
    <text x="64" y="446" font-family="Georgia, serif" font-size="30" fill="#4A3A34">
      for Small Business
    </text>

    <text x="64" y="524" font-family="Courier New, monospace" font-size="19"
          letter-spacing="3" fill="${BURGUNDY}">WILDANDCRAZYSEO.COM</text>
  </svg>`;

  // Photo panel on the right, framed like the site's stage-frame.
  const photoSize = 380;
  const photo = await sharp(source)
    .resize(photoSize, photoSize, { fit: 'cover', position: 'top' })
    .toBuffer();

  const frameX = W - photoSize - 78;
  const frameY = Math.round((H - photoSize) / 2) - 10;

  const frame = Buffer.from(
    `<svg width="${photoSize + 16}" height="${photoSize + 16}" xmlns="http://www.w3.org/2000/svg">
       <rect x="12" y="12" width="${photoSize + 4}" height="${photoSize + 4}" fill="${BURGUNDY}"/>
       <rect x="0" y="0" width="${photoSize + 6}" height="${photoSize + 6}" fill="${INK}"/>
     </svg>`
  );

  await sharp(Buffer.from(svg))
    .composite([
      { input: frame, left: frameX - 3, top: frameY - 3 },
      { input: photo, left: frameX, top: frameY },
    ])
    .jpeg({ quality: 88 })
    .toFile(path.join(PUBLIC, 'og-image.jpg'));

  console.log('  og     og-image.jpg (1200x630)');
}

console.log('Generating assets…');
await convertSourceImages();

const profile = path.join(ASSETS, 'steve-profile.webp');
await buildIcons(profile);
await buildOgImage(profile);

console.log('Done.');
