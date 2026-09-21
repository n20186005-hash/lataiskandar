$ErrorActionPreference = 'Stop'
Set-Location h:\GitHub\lataiskandar
$env:NODE_OPTIONS = ''
$env:CODEBUDDY_SAFE_DELETE_SHIM_DIR = ''
$env:GENIE_TRASH_DIR = ''
$env:PATH = 'C:\Users\dcc\.workbuddy\binaries\node\versions\node-v24.19.0-win-x64;' + $env:PATH
Write-Output "node: $(node -v)"
Write-Output "pnpm starting..."
& node "$env:LOCALAPPDATA\pnpm\.tools\pnpm\9.15.5\node_modules\pnpm\bin\pnpm.cjs" install --config.node-linker=hoisted --config.engine-strict=false
Write-Output "INSTALL_DONE exit=$LASTEXITCODE"
