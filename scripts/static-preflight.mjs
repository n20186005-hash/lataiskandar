import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const read = (p) => fs.readFileSync(path.join(root, p), 'utf8');
const exists = (p) => fs.existsSync(path.join(root, p));
const pkg = JSON.parse(read('package.json'));
const fail = (m) => { throw new Error(m); };
const pass = (m) => console.log(`PASS ${m}`);

if (pkg.packageManager !== 'pnpm@9.15.5') fail('packageManager must be pnpm@9.15.5');
if (pkg.engines?.node !== '24.19.0' || pkg.engines?.pnpm !== '9.15.5') fail('engines mismatch');
if (read('.node-version').trim() !== '24.19.0') fail('.node-version mismatch');
if (read('.npmrc').trim() !== 'only-built-dependencies=esbuild') fail('.npmrc mismatch');
pass('pinned Node/pnpm/.npmrc');

for (const group of ['dependencies', 'devDependencies']) {
  for (const [name, version] of Object.entries(pkg[group] ?? {})) {
    if (!/^\d+\.\d+\.\d+(?:-[0-9A-Za-z.-]+)?$/.test(version)) fail(`${name} is not exact: ${version}`);
  }
}
pass('all direct dependency versions are exact');

if (exists('pnpm-workspace.yaml')) fail('single-package project should not contain pnpm-workspace.yaml');
pass('no pnpm-workspace.yaml');

const lock = read('pnpm-lock.yaml');
if (!lock.startsWith("lockfileVersion: '9.0'")) fail('lockfile is not pnpm v9 format');
for (const [group, deps] of Object.entries({dependencies: pkg.dependencies, devDependencies: pkg.devDependencies})) {
  for (const [name, version] of Object.entries(deps)) {
    const escaped = name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const re = new RegExp(`['\"]?${escaped}['\"]?:\\n\\s+specifier: ${version.replaceAll('.', '\\.')}`);
    if (!re.test(lock)) fail(`lock importer missing exact ${name}@${version}`);
  }
}
pass('pnpm-lock importer matches package.json specifiers');

const sourceFiles = [];
for (const dir of ['src', 'public']) {
  const walk = (current) => {
    for (const entry of fs.readdirSync(path.join(root, current), {withFileTypes: true})) {
      const rel = path.join(current, entry.name);
      if (entry.isDirectory()) walk(rel); else sourceFiles.push(rel);
    }
  };
  walk(dir);
}
for (const rel of [...sourceFiles, 'README.md', 'astro.config.mjs', 'wrangler.jsonc']) {
  if (/\.(png|jpe?g)$/i.test(rel)) continue;
  const s = read(rel);
  if (/example\.com|localhost|chrome-extension:\/\//i.test(s)) fail(`forbidden placeholder in ${rel}`);
}
pass('no forbidden placeholder/extension URLs in project text');

const page = read('src/pages/index.astro');
const required = [
  '<html lang="ms">', 'TouristAttraction', 'LocalBusiness', 'FAQPage', 'aggregateRating', 'openingHours',
  'Bayaran / kos', 'Masa terbaik', 'Parkir', 'Tempoh lawatan', 'Sultan Azlan Shah', 'Terminal Bas Tapah',
  'Teksi / e-hailing', 'Tapah Road', 'Makan sekitar', 'Tempat menarik berdekatan', 'Bukan laman rasmi',
  'G-HXM22WWPKP', '!1sms!2smy'
];
for (const token of required) if (!page.includes(token)) fail(`missing required page token: ${token}`);
if (!page.includes('canonicalUrl && <link rel="canonical"')) fail('canonical is not conditional');
if (!page.includes('integrations: site ? [sitemap()] : []') && !read('astro.config.mjs').includes('integrations: site ? [sitemap()] : []')) fail('sitemap is not conditional on site');
pass('required content, schema, GA4, local map locale, and URL fallbacks present');

for (const image of ['public/images/lata-iskandar-hero.jpg','public/images/lata-iskandar-portrait.jpg','public/images/lata-iskandar-entrance.jpg','public/favicon.svg','public/favicon-16x16.png','public/favicon-32x32.png','public/apple-touch-icon.png','public/logo.svg']) {
  if (!exists(image) || fs.statSync(path.join(root,image)).size === 0) fail(`missing asset ${image}`);
}
pass('local photos/logo/favicon assets present');
console.log('STATIC PREFLIGHT COMPLETE');
