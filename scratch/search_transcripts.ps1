# PowerShell script to search past conversations for profile changes
$brainDir = "C:\Users\user\.gemini\antigravity-ide\brain"
$outputFile = "c:\Users\user\antigravity\alika\scratch\transcript_search_results.txt"
$results = @()

Get-ChildItem -Path $brainDir -Directory | ForEach-Object {
    $cid = $_.Name
    $logPath = Join-Path $_.FullName ".system_generated\logs\transcript.jsonl"
    if (Test-Path $logPath) {
        $lines = Get-Content $logPath
        $hasProfileImageInput = $false
        $userRequest = ""
        
        # Check first line (usually user input) for request details
        foreach ($line in $lines) {
            if ($line -match '"type":"USER_INPUT"') {
                # Simple extraction of content
                if ($line -match '"content":"([^"]+)"') {
                    $userRequest = $Matches[1]
                }
            }
            if ($line -match 'profileImageInput') {
                $hasProfileImageInput = $true
            }
        }
        
        if ($hasProfileImageInput -or $userRequest -match 'profil|profile|foto') {
            $results += [PSCustomObject]@{
                ConversationID = $cid
                UserRequest = $userRequest
                HasProfileImageInput = $hasProfileImageInput
            }
        }
    }
}

$results | Out-File -FilePath $outputFile -Encoding utf8
Write-Host "Search finished. Results saved to $outputFile"
