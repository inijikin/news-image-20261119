// Entry program for news-image-20261119.
// Copies the pre-rendered image entry.png from this repository
// into the output directory as entry.png. Deterministic: the
// same bytes are written on every run.
import { copyFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const repoRoot = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  throw new Error('MAKEFUN_OUTPUT_DIR is not set');
}
mkdirSync(outDir, { recursive: true });
copyFileSync(join(repoRoot, 'entry.png'), join(outDir, 'entry.png'));
