import re

def main():
    file_path = r"c:\Users\user\antigravity\alika\index.html"
    
    with open(file_path, "r", encoding="utf-8") as f:
        content = f.read()

    # 1. Replace desktop nav button
    desktop_old = """        <button data-target="informatika"
          class="nav-link px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 flex items-center gap-2 text-zinc-600 dark:text-zinc-400 hover:text-pink-600 dark:hover:text-pink-400">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
          <span>Informatika</span>
        </button>"""
        
    desktop_new = """        <a href="informatika.html" target="_blank"
          class="px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 flex items-center gap-2 text-zinc-600 dark:text-zinc-400 hover:text-pink-600 dark:hover:text-pink-400">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
          <span>Informatika</span>
        </a>"""
        
    if desktop_old in content:
        content = content.replace(desktop_old, desktop_new)
        print("Desktop nav replaced successfully.")
    else:
        print("Warning: Desktop nav NOT found.")

    # 2. Replace mobile nav button
    mobile_old = """      <button data-target="informatika"
        class="nav-link w-full text-left px-4 py-2.5 rounded-xl text-sm font-semibold text-zinc-700 dark:text-zinc-300 hover:bg-pink-50 dark:hover:bg-zinc-900 flex items-center gap-2">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
        <span>Informatika</span>
      </button>"""
      
    mobile_new = """      <a href="informatika.html" target="_blank"
        class="w-full text-left px-4 py-2.5 rounded-xl text-sm font-semibold text-zinc-700 dark:text-zinc-300 hover:bg-pink-50 dark:hover:bg-zinc-900 flex items-center gap-2">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
        <span>Informatika</span>
      </a>"""
      
    if mobile_old in content:
        content = content.replace(mobile_old, mobile_new)
        print("Mobile nav replaced successfully.")
    else:
        print("Warning: Mobile nav NOT found.")

    # 3. Replace hero banner button
    hero_old = """            <button data-target="informatika"
              class="nav-link px-7 py-4 rounded-2xl bg-gradient-to-r from-[#f472b6] via-[#a78bfa] to-[#38bdf8] hover:opacity-95 text-white text-sm font-semibold transition-all shadow-lg shadow-pink-500/20 flex items-center gap-2 group">
              <span>Jelajahi Tugas</span>
              <svg class="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none"
                stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>"""
            
    hero_new = """            <a href="informatika.html" target="_blank"
              class="px-7 py-4 rounded-2xl bg-gradient-to-r from-[#f472b6] via-[#a78bfa] to-[#38bdf8] hover:opacity-95 text-white text-sm font-semibold transition-all shadow-lg shadow-pink-500/20 flex items-center justify-center gap-2 group">
              <span>Jelajahi Tugas</span>
              <svg class="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none"
                stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>"""
            
    if hero_old in content:
        content = content.replace(hero_old, hero_new)
        print("Hero button replaced successfully.")
    else:
        print("Warning: Hero button NOT found.")

    # 4. Replace footer link
    footer_old = """        <a href="#informatika" data-target="informatika"
          class="nav-link hover:text-pink-600 dark:hover:text-pink-400">Informatika</a>"""
          
    footer_new = """        <a href="informatika.html" target="_blank"
          class="hover:text-pink-600 dark:hover:text-pink-400">Informatika</a>"""
          
    if footer_old in content:
        content = content.replace(footer_old, footer_new)
        print("Footer link replaced successfully.")
    else:
        print("Warning: Footer link NOT found.")

    # 5. Remove Section 3: Informatika
    # Regex to find everything from "    <!-- SECTION 3: INFORMATIKA -->" up to "    <!-- SECTION 4: BAHASA INDONESIA -->"
    section_pattern = re.compile(
        r"[ \t]*<!-- SECTION 3: INFORMATIKA -->.*?<!-- SECTION 4: BAHASA INDONESIA -->",
        re.DOTALL
    )
    
    match = section_pattern.search(content)
    if match:
        # Keep the header comment for Bahasa Indonesia
        replacement = "    <!-- SECTION 4: BAHASA INDONESIA -->"
        content = section_pattern.sub(replacement, content)
        print("Informatika section removed successfully.")
    else:
        print("Warning: Informatika section NOT found via regex.")

    with open(file_path, "w", encoding="utf-8") as f:
        f.write(content)
    print("Changes written to index.html successfully.")

if __name__ == "__main__":
    main()
