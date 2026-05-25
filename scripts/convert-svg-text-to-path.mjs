/**
 * Convert SVG <text> to <path> outlines using opentype.js
 * This makes the SVGs completely font-independent.
 */
import opentype from "opentype.js";
import fs from "fs";
import path from "path";
import https from "https";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const publicDir = path.join(__dirname, "..", "public");

const FONT_URL =
  "https://github.com/google/fonts/raw/main/ofl/greatvibes/GreatVibes-Regular.ttf";

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    const follow = (url) => {
      https
        .get(url, (res) => {
          if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
            follow(res.headers.location);
            return;
          }
          if (res.statusCode !== 200) {
            reject(new Error(`Download failed: ${res.statusCode}`));
            return;
          }
          const file = fs.createWriteStream(dest);
          res.pipe(file);
          file.on("finish", () => file.close(resolve));
        })
        .on("error", reject);
    };
    follow(url);
  });
}

function textToPathManual(font, text, x, y, fontSize) {
  // Manually convert each character to a glyph path, bypassing GSUB features
  const scale = fontSize / font.unitsPerEm;
  let xPos = x;
  const pathParts = [];

  for (let i = 0; i < text.length; i++) {
    const charCode = text.charCodeAt(i);
    const glyphIndex = font.charToGlyphIndex(text[i]);
    const glyph = font.glyphs.get(glyphIndex);

    if (glyph && glyph.path) {
      const glyphPath = glyph.getPath(xPos, y, fontSize);
      const d = glyphPath.toPathData(2);
      if (d) pathParts.push(d);
    }

    // Advance position
    if (glyph) {
      xPos += glyph.advanceWidth * scale;

      // Apply kerning if available
      if (i < text.length - 1) {
        const nextGlyphIndex = font.charToGlyphIndex(text[i + 1]);
        const kerning = font.getKerningValue(glyphIndex, nextGlyphIndex);
        xPos += kerning * scale;
      }
    }
  }

  return pathParts.join(" ");
}

function generateSvg(font, text, viewBox, strokeWidth) {
  const fontSize = 786.08;
  const x = 9.57;
  const y = 717.04;

  const pathData = textToPathManual(font, text, x, y, fontSize);

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="${viewBox}">
  <path
    d="${pathData}"
    fill="#1b3c2a"
    stroke="#1b3c2a"
    stroke-linejoin="round"
    stroke-width="${strokeWidth}"
  />
</svg>
`;
}

async function main() {
  const fontPath = path.join(__dirname, "GreatVibes-Regular.ttf");

  if (!fs.existsSync(fontPath)) {
    console.log("Downloading Great Vibes font...");
    await downloadFile(FONT_URL, fontPath);
    console.log("Font downloaded.");
  }

  const fontBuffer = fs.readFileSync(fontPath);
  const font = opentype.parse(fontBuffer.buffer);
  console.log("Font loaded, unitsPerEm:", font.unitsPerEm);

  // Generate Chika SVG
  const chikaSvg = generateSvg(font, "Chika", "0 0 1602.31 1189.62", 19.14);
  fs.writeFileSync(path.join(publicDir, "chika.svg"), chikaSvg);
  console.log("✅ chika.svg written with path outlines");

  // Generate Berry SVG
  const berrySvg = generateSvg(font, "Berry", "0 0 1820.84 1189.62", 19.14);
  fs.writeFileSync(path.join(publicDir, "berry.svg"), berrySvg);
  console.log("✅ berry.svg written with path outlines");

  console.log("\nDone! SVGs now use <path> instead of <text>.");
}

main().catch(console.error);
