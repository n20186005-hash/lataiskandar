# Lata Iskandar — Astro + Tailwind CSS + Cloudflare Workers

Laman satu halaman berbahasa Melayu untuk Lata Iskandar, Tapah, Perak. Reka bentuk berasaskan suasana hutan hujan, aliran air dan hentian tepi Route 59; foto sebenar disimpan secara tempatan dalam projek.

## Versi terkunci

- Node.js 24.19.0 (LTS)
- pnpm 9.15.5
- Astro 7.2.1
- Tailwind CSS 4.3.3 + `@tailwindcss/vite` 4.3.3
- TypeScript 6.0.3
- `@astrojs/check` 0.9.10
- `@astrojs/sitemap` 3.7.3
- Wrangler 4.120.0

Semua versi dalam `package.json` ialah versi tepat; tiada `latest`, `*`, `^` atau `~`. Projek pakej tunggal ini tidak memerlukan `pnpm-workspace.yaml`.

## Pembangunan / semakan CI

```bash
corepack enable
CI=1 corepack pnpm install --frozen-lockfile
corepack pnpm check
corepack pnpm build
```

`.npmrc` mengandungi `only-built-dependencies=esbuild`, dan `packageManager` mengunci pnpm 9.15.5.

## Domain / URL kanonik

URL laman hanya datang daripada medan `site` Astro, yang dibekalkan melalui `SITE_URL`:

```bash
SITE_URL=https://domain-sebenar-anda.my corepack pnpm build
```

Jika `SITE_URL` kosong, projek masih boleh dibina. Tag canonical dan `og:url` tidak dikeluarkan, imej sosial menggunakan laluan relatif, JSON-LD tidak memasukkan URL mutlak, dan integrasi sitemap tidak diaktifkan. Tiada domain contoh dijadikan fallback.

## Cloudflare Workers

Laman ini dijana sepenuhnya sebagai fail statik, jadi adapter SSR tidak diperlukan. `wrangler.jsonc` menerbitkan folder `./dist` melalui Workers Static Assets.

```bash
corepack pnpm build
corepack pnpm exec wrangler deploy
```

Untuk produksi, tetapkan `SITE_URL` kepada domain sebenar semasa proses build supaya canonical, Open Graph, JSON-LD dan sitemap semuanya berasal daripada satu konfigurasi yang sama.

## Foto dan lesen

Foto sebenar Lata Iskandar berada di `public/images/`. Sumber dan lesen Wikimedia Commons disenaraikan dalam `PHOTO-LICENSES.md` dan dikreditkan di footer laman.
