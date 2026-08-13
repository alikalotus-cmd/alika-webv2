$path = "c:\Users\user\antigravity\alika\index.html"
$content = [System.IO.File]::ReadAllText($path)

# Regex pattern matching from <!-- SECTION 3: INFORMATIKA --> to the end of the section
# We target the specific commented header up to the section closing tag before SECTION 4
$pattern = "(?s)[ \t]*<!-- SECTION 3: INFORMATIKA -->.*?    </section>\r?\n"

if ($content -match $pattern) {
    $content = $content -replace $pattern, "`n    <!-- SECTION 3 (REMOVED: Moved to separate page informatika.html) -->`n"
    [System.IO.File]::WriteAllText($path, $content)
    Write-Host "Informatika section successfully removed from index.html"
} else {
    Write-Host "Warning: Regex pattern did not match the Informatika section in index.html"
}
