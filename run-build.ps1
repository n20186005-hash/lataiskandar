$ErrorActionPreference = 'Stop'
Set-Location $PSScriptRoot
& corepack pnpm preflight:static
if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }
& corepack pnpm check
if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }
& corepack pnpm build
if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }
