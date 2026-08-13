$path = "c:\Users\user\antigravity\alika\index.html"
$newSchedulePath = "c:\Users\user\antigravity\alika\scratch\new_schedule.html"

$content = [System.IO.File]::ReadAllText($path)
$newHTML = [System.IO.File]::ReadAllText($newSchedulePath)

$startMarker = "        <!-- Jadwal Pelajaran"
$endMarker = "      </section>"

$startIndex = $content.IndexOf($startMarker)
if ($startIndex -eq -1) {
    # Check if it was replaced with the new comment
    $startMarker = "        <!-- Jadwal Pelajaran Banner Header"
    $startIndex = $content.IndexOf($startMarker)
}

# Find the next </section> after the start marker
$endIndex = $content.IndexOf($endMarker, $startIndex)

if ($startIndex -eq -1 -or $endIndex -eq -1) {
    Write-Host "Markers not found!"
    Exit 1
}

$updatedContent = $content.Substring(0, $startIndex) + $newHTML + "`r`n" + $content.Substring($endIndex)
[System.IO.File]::WriteAllText($path, $updatedContent)
Write-Host "Schedule successfully replaced!"
