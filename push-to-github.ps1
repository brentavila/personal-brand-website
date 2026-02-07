# Run this from the project folder to push your Cursor edits to GitHub.
# Right-click push-to-github.ps1 -> Run with PowerShell, or in Cursor terminal: .\push-to-github.ps1

Set-Location $PSScriptRoot

Write-Host "Current folder: $(Get-Location)" -ForegroundColor Cyan
Write-Host ""

Write-Host "=== Git status ===" -ForegroundColor Yellow
git status
Write-Host ""

$status = git status --porcelain
$branchAhead = git status 2>&1 | Select-String "Your branch is ahead"

if ($status -or $branchAhead) {
    Write-Host "=== Staging all changes ===" -ForegroundColor Yellow
    git add -A
    if ($status) {
        Write-Host "=== Committing ===" -ForegroundColor Yellow
        git commit -m "Sync Cursor project with all updates"
    }
    Write-Host "=== Pushing to GitHub (origin main) ===" -ForegroundColor Yellow
    git push origin main
    if ($LASTEXITCODE -eq 0) {
        Write-Host ""
        Write-Host "Done. Check https://github.com/brentavila/personal-brand-website" -ForegroundColor Green
    } else {
        Write-Host ""
        Write-Host "Push failed. Common fix: sign in to GitHub (browser or 'git credential-manager')." -ForegroundColor Red
    }
} else {
    Write-Host "Nothing new to commit. Your branch may already be in sync with GitHub." -ForegroundColor Gray
    Write-Host "To force push anyway: git push origin main" -ForegroundColor Gray
}

Read-Host "Press Enter to close"
