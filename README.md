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

## HTTPS, canonical dan SEO

- `site` di `astro.config.mjs` dikunci kepada `https://lataiskandar.com` (boleh diganti melalui `SITE_URL`). Dengan nilai ini setiap halaman mengeluarkan `canonical`, `og:url`, `hreflang` (`ms`, `en`, `zh-CN`, `x-default`) serta JSON-LD dengan URL mutlak, dan integrasi sitemap diaktifkan.
- Laman tersedia dalam tiga bahasa: `/` (Bahasa Melayu), `/en/` (Inggeris), `/zh/` (Cina Ringkas), semuanya saling berpaut melalui `hreflang`.
- Pengalihan HTTP → HTTPS 301 dilakukan di Cloudflare: hidupkan **Always Use HTTPS** pada zon ini di papan pemuka Cloudflare. Sebagai lapisan tambahan, `public/_redirects` mengandungi peraturan 301 untuk `http://` dan `www`, manakala HSTS dihantar melalui `public/_headers`.
- Peta laman terhasil di `https://lataiskandar.com/sitemap-index.xml`; hantar URL ini ke Google Search Console.
- JSON-LD setiap halaman mengandungi `@graph` dengan `TouristAttraction` + `LocalBusiness` (nama, alamat, koordinat, `isAccessibleForFree`) dan `FAQPage`. `aggregateRating` sengaja **tidak** disertakan: laman ini tidak mengumpul atau memaparkan sebarang ulasan, dan memasukkan penarafan tanpa sumber yang sah melanggar polisi data berstruktur Google.

## Cloudflare Workers

Laman ini dijana sepenuhnya sebagai fail statik, jadi adapter SSR tidak diperlukan. `wrangler.jsonc` menerbitkan folder `./dist` melalui Workers Static Assets.

```bash
corepack pnpm build
corepack pnpm exec wrangler deploy
```

Untuk produksi, tetapkan `SITE_URL` kepada domain sebenar semasa proses build supaya canonical, Open Graph, JSON-LD dan sitemap semuanya berasal daripada satu konfigurasi yang sama.

## Foto dan lesen

Foto sebenar Lata Iskandar berada di `public/images/`. Sumber dan lesen Wikimedia Commons disenaraikan dalam `PHOTO-LICENSES.md` dan dikreditkan di footer laman.
