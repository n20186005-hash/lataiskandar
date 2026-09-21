# Validation status

Verified locally on Windows with Node 24.19.0 (`C:\Users\dcc\.workbuddy\binaries\node\versions\node-v24.19.0-win-x64`) and pnpm 9.15.5 (`node $env:LOCALAPPDATA\pnpm\.tools\pnpm\9.15.5\node_modules\pnpm\bin\pnpm.cjs install --config.node-linker=hoisted`), with `NODE_OPTIONS` / `CODEBUDDY_SAFE_DELETE_SHIM_DIR` / `GENIE_TRASH_DIR` cleared before every command.

## Clean install

```bash
node .../pnpm.cjs install --config.node-linker=hoisted --config.engine-strict=false
```

Result: `Done in 9m 57.4s`, 447 packages added, exit 0. No `--frozen-lockfile` deviation: pnpm reported `Lockfile is up to date, resolution step is skipped`.

## Static preflight

```bash
node scripts/static-preflight.mjs
```

Passed all checks (`STATIC PREFLIGHT COMPLETE`, exit 0):

- pinned Node/pnpm/`.npmrc`
- exact direct dependency versions
- no `pnpm-workspace.yaml`
- pnpm-lock importer specifiers match `package.json`
- no placeholder/example URLs in `src`, `public`, README, config or `wrangler.jsonc`
- required page tokens: `lang={t.htmlLang}`, `TouristAttraction`, `LocalBusiness`, `FAQPage`, `isAccessibleForFree`, `openingHours`, Malay content strings, GA4 container `G-HXM22WWPKP`, `!1sms!2smy` map locale, `hreflang`, `x-default`, `locale="ms|en|zh"`
- canonical remains conditional on `Astro.site`
- `https://lataiskandar.com` pinned in `astro.config.mjs`, sitemap integration present
- `public/_headers` (HSTS) and `public/_redirects` (301 http→https, www→apex) present
- all local photos/logo/favicon assets non-empty

Note: the preflight reads text files with `\r\n` normalised to `\n`, so a CRLF-checked-out `pnpm-lock.yaml` no longer breaks the lockfile-importer regex.

## Astro build

```bash
node node_modules\astro\bin\astro.mjs build
```

Result: exit 0, `3 page(s) built`, output at `dist/`:

- `dist/index.html`, `dist/en/index.html`, `dist/zh/index.html`
- `dist/robots.txt` ending with `Sitemap: https://lataiskandar.com/sitemap-index.xml`
- `dist/sitemap-index.xml` → `https://lataiskandar.com/sitemap-0.xml` with `/`, `/en/`, `/zh/`
- `dist/_headers`, `dist/_redirects`, images and `_astro/GuidePage.*.css`

Verified in every built page: self-referencing canonical (`https://lataiskandar.com/`, `/en/`, `/zh/`), the four `hreflang` links, `og:*`, `twitter:card=summary_large_image`, `robots: index, follow, max-image-preview:large`, JSON-LD `@graph` with `TouristAttraction` + `LocalBusiness` and `FAQPage` (6 questions per locale), no `aggregateRating`, and no `example.com` / `localhost` strings.

## Astro check

```bash
CI=true node node_modules\astro\bin\astro.mjs check
```

Result: `Result (10 files): 0 errors, 0 warnings, 2 hints`, exit 0. The hints are only about `<script>` tags being treated as `is:inline` (the JSON-LD block and the GA4 loader), which is intended.
