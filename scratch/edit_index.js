const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'index.html');

try {
  let content = fs.readFileSync(filePath, 'utf8');

  // 1. Replace desktop nav button
  const desktop_old = `        <button data-target="informatika"
          class="nav-link px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 flex items-center gap-2 text-zinc-600 dark:text-zinc-400 hover:text-pink-600 dark:hover:text-pink-400">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
          <span>Informatika</span>
        </button>`;

  const desktop_new = `        <a href="informatika.html" target="_blank"
          class="px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 flex items-center gap-2 text-zinc-600 dark:text-zinc-400 hover:text-pink-600 dark:hover:text-pink-400">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
          <span>Informatika</span>
        </a>`;

  if (content.includes(desktop_old)) {
    content = content.replace(desktop_old, desktop_new);
    console.log("Desktop nav replaced successfully.");
  } else {
    console.log("Warning: Desktop nav NOT found.");
  }

  // 2. Replace mobile nav button
  const mobile_old = `      <button data-target="informatika"
        class="nav-link w-full text-left px-4 py-2.5 rounded-xl text-sm font-semibold text-zinc-700 dark:text-zinc-300 hover:bg-pink-50 dark:hover:bg-zinc-900 flex items-center gap-2">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
        <span>Informatika</span>
      </button>`;

  const mobile_new = `      <a href="informatika.html" target="_blank"
        class="w-full text-left px-4 py-2.5 rounded-xl text-sm font-semibold text-zinc-700 dark:text-zinc-300 hover:bg-pink-50 dark:hover:bg-zinc-900 flex items-center gap-2">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
        <span>Informatika</span>
      </a>`;

  if (content.includes(mobile_old)) {
    content = content.replace(mobile_old, mobile_new);
    console.log("Mobile nav replaced successfully.");
  } else {
    console.log("Warning: Mobile nav NOT found.");
  }

  // 3. Replace hero banner button
  const hero_old = `            <button data-target="informatika"
              class="nav-link px-7 py-4 rounded-2xl bg-gradient-to-r from-[#f472b6] via-[#a78bfa] to-[#38bdf8] hover:opacity-95 text-white text-sm font-semibold transition-all shadow-lg shadow-pink-500/20 flex items-center gap-2 group">
              <span>Jelajahi Tugas</span>
              <svg class="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none"
                stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>`;

  const hero_new = `            <a href="informatika.html" target="_blank"
              class="px-7 py-4 rounded-2xl bg-gradient-to-r from-[#f472b6] via-[#a78bfa] to-[#38bdf8] hover:opacity-95 text-white text-sm font-semibold transition-all shadow-lg shadow-pink-500/20 flex items-center justify-center gap-2 group">
              <span>Jelajahi Tugas</span>
              <svg class="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none"
                stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>`;

  if (content.includes(hero_old)) {
    content = content.replace(hero_old, hero_new);
    console.log("Hero button replaced successfully.");
  } else {
    console.log("Warning: Hero button NOT found.");
  }

  // 4. Replace footer link
  const footer_old = `        <a href="#informatika" data-target="informatika"
          class="nav-link hover:text-pink-600 dark:hover:text-pink-400">Informatika</a>`;

  const footer_new = `        <a href="informatika.html" target="_blank"
          class="hover:text-pink-600 dark:hover:text-pink-400">Informatika</a>`;

  if (content.includes(footer_old)) {
    content = content.replace(footer_old, footer_new);
    console.log("Footer link replaced successfully.");
  } else {
    console.log("Warning: Footer link NOT found.");
  }

  // 5. Remove Section 3: Informatika
  // Find everything between "<!-- SECTION 3: INFORMATIKA -->" and "<!-- SECTION 4: BAHASA INDONESIA -->"
  const startTag = "<!-- SECTION 3: INFORMATIKA -->";
  const endTag = "<!-- SECTION 4: BAHASA INDONESIA -->";
  
  const startIndex = content.indexOf(startTag);
  const endIndex = content.indexOf(endTag);
  
  if (startIndex !== -1 && endIndex !== -1 && endIndex > startIndex) {
    const sectionToRemove = content.substring(startIndex, endIndex);
    // Replace section but preserve indentation and layout nicely
    content = content.replace(sectionToRemove, `<!-- SECTION 3 (REMOVED: Moved to separate page informatika.html) -->\n    `);
    console.log("Informatika section removed successfully.");
  } else {
    console.log("Warning: Informatika section tags NOT found.");
  }

  fs.writeFileSync(filePath, content, 'utf8');
  console.log("Changes written to index.html successfully.");
} catch (err) {
  console.error("Error editing index.html:", err);
}
