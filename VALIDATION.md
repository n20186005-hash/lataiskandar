# Validation status

## Static preflight

Passed locally with:

```bash
node scripts/static-preflight.mjs
```

This verifies pinned Node/pnpm settings, exact direct dependency versions, lockfile importer/specifiers, absence of `pnpm-workspace.yaml`, forbidden placeholder URLs, required Malay content/JSON-LD/GA4/map locale, and local image/logo/favicon assets.

## Required clean install / Astro checks

The requested clean install was attempted after deleting `node_modules`:

```bash
CI=1 corepack pnpm install --frozen-lockfile
```

The execution sandbox failed before pnpm could start because its DNS resolver could not resolve `registry.npmjs.org` (`getaddrinfo EAI_AGAIN`). Therefore `pnpm check` and `pnpm build` could not truthfully be marked as executed in this sandbox. The complete output is in `INSTALL-CHECK.log`.

Run the required final sequence in a network-enabled environment with Node 24.19.0:

```bash
rm -rf node_modules
CI=1 corepack pnpm install --frozen-lockfile
pnpm check
pnpm build
! grep -RInE 'example\\.com|localhost|chrome-extension://' dist
```

With `SITE_URL` unset, sitemap integration is intentionally disabled and no sitemap should be generated. Once a real domain is supplied through `SITE_URL`, rerun the build and inspect the generated sitemap for only that real origin and no fabricated `lastmod` values.
