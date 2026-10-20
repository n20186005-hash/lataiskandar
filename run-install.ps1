$ErrorActionPreference = 'Stop'
Set-Location $PSScriptRoot
& corepack pnpm install --frozen-lockfile
if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }
