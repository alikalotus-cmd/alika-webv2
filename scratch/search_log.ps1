$logPath = "C:\Users\user\.gemini\antigravity-ide\brain\2f45070f-f6c0-4cc1-8bbc-bbe4d4d2759b\.system_generated\logs\transcript_full.jsonl"
if (Test-Path $logPath) {
    $lines = Get-Content -Path $logPath
    # Search backwards for view_file or write_to_file of index.html containing "Jadwal Pelajaran Mingguan"
    for ($i = $lines.Length - 1; $i -ge 0; $i--) {
        $line = $lines[$i]
        if ($line.Contains("Jadwal Pelajaran Mingguan") -and $line.Contains("Sosiologi") -and $line.Contains("Mandarin")) {
            try {
                $json = ConvertFrom-Json $line
                if ($json.content) {
                    Write-Output "--- FOUND LATEST TIMETABLE AT STEP $($json.step_index) ---"
                    # Save content to a temp file in scratch so we can read it easily
                    [System.IO.File]::WriteAllText("c:\Users\user\antigravity\alika\scratch\recovered_timetable.html", $json.content)
                    Write-Output "Saved to scratch\recovered_timetable.html!"
                    break
                }
            } catch {
                # ignore
            }
        }
    }
} else {
    Write-Error "Log not found"
}
