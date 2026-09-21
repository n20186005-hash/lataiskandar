$ErrorActionPreference = 'Stop'
Set-Location h:\GitHub\lataiskandar
$env:NODE_OPTIONS = ''
$env:CODEBUDDY_SAFE_DELETE_SHIM_DIR = ''
$env:GENIE_TRASH_DIR = ''
$env:PATH = 'C:\Users\dcc\.workbuddy\binaries\node\versions\node-v24.19.0-win-x64;' + $env:PATH
Write-Output "node: $(node -v)"
& node scripts\static-preflight.mjs
if ($LASTEXITCODE -ne 0) { Write-Output 'PREFLIGHT_FAILED'; exit 1 }
Write-Output 'PREFLIGHT_OK'
& node node_modules\astro\bin\astro.mjs build
if ($LASTEXITCODE -ne 0) { Write-Output 'BUILD_FAILED'; exit 1 }
Write-Output 'BUILD_OK'
Get-ChildItem dist | Select-Object Name
Get-ChildItem dist\en, dist\zh | Select-Object FullName
