# PowerShell script to search code edits in f74d1a28 and 0a86a451
$brainDir = "C:\Users\user\.gemini\antigravity-ide\brain"
$conversationIds = @("f74d1a28-6b3d-4838-919b-5f006745b6e1", "0a86a451-881a-4163-85a4-d21df9f69b5f")
$outputFile = "c:\Users\user\antigravity\alika\scratch\transcript_edits_results.txt"
$results = @()

foreach ($cid in $conversationIds) {
    $logPath = Join-Path $brainDir "$cid\.system_generated\logs\transcript.jsonl"
    if (Test-Path $logPath) {
        $lines = Get-Content $logPath
        foreach ($line in $lines) {
            if ($line -match '"type":"PLANNER_RESPONSE"' -and $line -match 'replace_file_content|write_to_file') {
                $results += "$cid : $line"
            }
        }
    }
}

$results | Out-File -FilePath $outputFile -Encoding utf8
Write-Host "Search finished. Results saved to $outputFile"
