# Local validation

Run `corepack pnpm install --frozen-lockfile`, `corepack pnpm check`, `corepack pnpm preflight:static` and `corepack pnpm build` from the repository root. The project pins its tool versions in `package.json`. Set `ASTRO_TELEMETRY_DISABLED=1` when the runtime does not permit telemetry configuration writes.

The current local checks pass: Astro reports zero errors, warnings or hints; the static build produces the Malay, English and Chinese guides plus a noindex 404 page. Generated output checks cover unique titles and descriptions, one H1, self canonical URLs, reciprocal language alternates, sitemap membership, internal links and anchors, image files, valid JSON-LD and FAQ parity. The 404 page is excluded from the sitemap.

Attraction data uses `TouristAttraction` without business, rating, opening-hours or free-entry claims. Dated Google Maps observations appear visibly with attribution and an explicit warning that listed hours do not establish night-time access or safety. Public source links are available on every language page.

Worker `src/worker.js` runs before the `ASSETS` binding and redirects HTTP/www requests to the HTTPS apex with paths and queries intact. Static Assets uses `404-page` handling; 404 responses retain their status and receive a noindex response header. Wrangler dry-run succeeds. Local Worker HTTP checks confirm guide responses, canonical redirects and 404/noindex. The bundled runtime was tested with a local compatibility-date override of 2026-08-08; production configuration remains 2026-08-13. Production status codes, redirects, deployed commit and rendered appearance must be verified after release; local checks do not establish production acceptance.
