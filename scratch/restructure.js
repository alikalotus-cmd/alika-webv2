const fs = require('fs');
const path = require('path');

const targetPath = 'c:/Users/user/antigravity/alika/index.html';
let content = fs.readFileSync(targetPath, 'utf8');

// Find schedule and orbit block
const startMarker = '      <!-- Jadwal Pelajaran -->';
const endMarker = '      <!-- Quick Section Previews & Stats Sidebar Grid -->';

const startIndex = content.indexOf(startMarker);
const endIndex = content.indexOf(endMarker);

if (startIndex !== -1 && endIndex !== -1) {
  console.log('Found indices:', startIndex, endIndex);
  
  // Extract schedule code block
  const scheduleBlock = content.substring(startIndex, endIndex);
  
  // Remove block from dashboard
  content = content.substring(0, startIndex) + content.substring(endIndex);
  
  // Build new section
  const newSection = `      <!-- SECTION 4: SCHEDULE -->
      <section id="schedule" class="tab-section hidden space-y-12">
${scheduleBlock}      </section>

`;
  
  // Insert before Profil section
  const profilMarker = '      <!-- SECTION 2: PROFIL -->';
  const profilIndex = content.indexOf(profilMarker);
  if (profilIndex !== -1) {
    content = content.substring(0, profilIndex) + newSection + content.substring(profilIndex);
    console.log('Inserted schedule section before Profil!');
  } else {
    console.error('Could not find Profil section marker');
  }
  
  // Add Schedule in desktop navigation
  const desktopSearch = '<button data-target="profil"';
  const desktopInsert = `<button data-target="schedule"
          class="nav-link px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 flex items-center gap-2 text-zinc-600 dark:text-zinc-400 hover:text-pink-600 dark:hover:text-pink-400">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span>Schedule</span>
        </button>
        <button data-target="profil"`;
  
  content = content.replace(desktopSearch, desktopInsert);
  console.log('Added desktop nav button!');
  
  // Add Schedule in mobile navigation drawer
  const mobileSearch = '<button data-target="profil"';
  const mobileInsert = `<button data-target="schedule"
        class="nav-link w-full text-left px-4 py-2.5 rounded-xl text-sm font-semibold text-zinc-700 dark:text-zinc-300 hover:bg-pink-50 dark:hover:bg-zinc-900 flex items-center gap-2">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <span>Schedule</span>
      </button>
      <button data-target="profil"`;
      
  content = content.replace(mobileSearch, mobileInsert);
  console.log('Added mobile nav button!');
  
  // Add Schedule in footer
  const footerSearch = '<a href="#profil" data-target="profil"';
  const footerInsert = `<a href="#schedule" data-target="schedule" class="nav-link hover:text-pink-600 dark:hover:text-pink-400">Schedule</a>
        <a href="#profil" data-target="profil"`;
        
  content = content.replace(footerSearch, footerInsert);
  console.log('Added footer nav link!');
  
  fs.writeFileSync(targetPath, content, 'utf8');
  console.log('Saved index.html successfully!');
} else {
  console.error('Could not find start or end markers for schedule block');
}
