$targetPath = "c:\Users\user\antigravity\alika\index.html"
$content = [System.IO.File]::ReadAllText($targetPath)

# Find schedule and orbit block
$startMarker = "      <!-- Jadwal Pelajaran -->"
$endMarker = "      <!-- Quick Section Previews & Stats Sidebar Grid -->"

$startIndex = $content.IndexOf($startMarker)
$endIndex = $content.IndexOf($endMarker)

if ($startIndex -ne -1 -and $endIndex -ne -1) {
    Write-Output "Found indices!"
    
    # Extract schedule code block
    $scheduleBlock = $content.Substring($startIndex, $endIndex - $startIndex)
    
    # Remove block from dashboard
    $content = $content.Substring(0, $startIndex) + $content.Substring($endIndex)
    
    # Build new section
    $newSection = @"
      <!-- SECTION 4: SCHEDULE -->
      <section id="schedule" class="tab-section hidden space-y-12">
$scheduleBlock      </section>

"@
    
    # Insert before Profil section
    $profilMarker = "      <!-- SECTION 2: PROFIL -->"
    $profilIndex = $content.IndexOf($profilMarker)
    
    if ($profilIndex -ne -1) {
        $content = $content.Substring(0, $profilIndex) + $newSection + $content.Substring($profilIndex)
        Write-Output "Inserted schedule section!"
    } else {
        Write-Error "Could not find Profil section marker"
    }
    
    # Add Schedule in desktop navigation (use unique suffix to avoid multiple replacements)
    $desktopSearch = '        <button data-target="profil"'
    $desktopInsert = @"
        <button data-target="schedule"
          class="nav-link px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 flex items-center gap-2 text-zinc-600 dark:text-zinc-400 hover:text-pink-600 dark:hover:text-pink-400">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span>Schedule</span>
        </button>
        <button data-target="profil"
"@
    # Perform a single replacement by using regex replace or String.Replace
    # Since String.Replace replaces all, and desktopSearch is unique in the file, it is safe.
    $content = $content.Replace($desktopSearch, $desktopInsert)
    Write-Output "Added desktop nav button!"

    # Add Schedule in mobile navigation drawer
    $mobileSearch = '      <button data-target="profil"'
    $mobileInsert = @"
      <button data-target="schedule"
        class="nav-link w-full text-left px-4 py-2.5 rounded-xl text-sm font-semibold text-zinc-700 dark:text-zinc-300 hover:bg-pink-50 dark:hover:bg-zinc-900 flex items-center gap-2">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <span>Schedule</span>
      </button>
      <button data-target="profil"
"@
    $content = $content.Replace($mobileSearch, $mobileInsert)
    Write-Output "Added mobile nav button!"

    # Add Schedule in footer
    $footerSearch = '        <a href="#profil" data-target="profil"'
    $footerInsert = @"
        <a href="#schedule" data-target="schedule" class="nav-link hover:text-pink-600 dark:hover:text-pink-400">Schedule</a>
        <a href="#profil" data-target="profil"
"@
    $content = $content.Replace($footerSearch, $footerInsert)
    Write-Output "Added footer nav link!"

    [System.IO.File]::WriteAllText($targetPath, $content)
    Write-Output "Restructured index.html successfully!"
} else {
    Write-Error "Could not find start or end markers"
}
