(function () {
  // Database Jadwal Pelajaran Terkelompok per Hari
  const JADWAL_ORBIT = {
    1: { // Senin
      dayName: "Senin",
      themeName: "Sweet Lavender Orbit",
      glowClass: "bg-purple-500",
      accentColor: "rgba(139, 92, 246, 0.4)",
      orbitClass: "orbit-ring-lavender",
      rotationSpeedFactor: 1.0,
      subjects: [
        { id: "mon-1", name: "Sosiologi", time: "07.30 - 09.00", endHour: 9, endMin: 0, color: "from-purple-400 to-indigo-600", size: "w-4 h-4" },
        { id: "mon-2", name: "Mandarin", time: "09.30 - 10.50", endHour: 10, endMin: 50, color: "from-indigo-400 to-blue-600", size: "w-3 h-3" },
        { id: "mon-3", name: "Inggris", time: "10.50 - 12.10", endHour: 12, endMin: 10, color: "from-blue-400 to-sky-600", size: "w-4.5 h-4.5" },
        { id: "mon-4", name: "Sejarah", time: "12.40 - 13.20", endHour: 13, endMin: 20, color: "from-sky-400 to-teal-600", size: "w-3.5 h-3.5" },
        { id: "mon-5", name: "Matematika Wajib", time: "13.20 - 14.40", endHour: 14, endMin: 40, color: "from-teal-400 to-emerald-600", size: "w-5 h-5" },
        { id: "mon-6", name: "PKN", time: "14.40 - 15.20", endHour: 15, endMin: 20, color: "from-purple-500 to-pink-500", size: "w-3.5 h-3.5" }
      ]
    },
    2: { // Selasa
      dayName: "Selasa",
      themeName: "Deep Space Teal Orbit",
      glowClass: "bg-teal-500",
      accentColor: "rgba(20, 184, 166, 0.4)",
      orbitClass: "orbit-ring-teal",
      rotationSpeedFactor: 0.8,
      subjects: [
        { id: "tue-1", name: "Agama", time: "07.30 - 09.00", endHour: 9, endMin: 0, color: "from-yellow-400 to-amber-600", size: "w-4 h-4" },
        { id: "tue-2", name: "B. Mandarin", time: "09.30 - 10.50", endHour: 10, endMin: 50, color: "from-emerald-400 to-teal-600", size: "w-3 h-3" },
        { id: "tue-3", name: "B. Indonesia", time: "10.50 - 12.10", endHour: 12, endMin: 10, color: "from-purple-500 to-indigo-600", size: "w-4.5 h-4.5" },
        { id: "tue-4", name: "Matematika Minat", time: "12.40 - 14.40", endHour: 14, endMin: 40, color: "from-indigo-400 to-cyan-600", size: "w-5 h-5" },
        { id: "tue-5", name: "Ekonomi", time: "14.40 - 15.20", endHour: 15, endMin: 20, color: "from-sky-400 to-blue-600", size: "w-3.5 h-3.5" }
      ]
    },
    3: { // Rabu
      dayName: "Rabu",
      themeName: "Cyberpunk Pink Orbit",
      glowClass: "bg-pink-500",
      accentColor: "rgba(236, 72, 153, 0.4)",
      orbitClass: "orbit-ring-pink",
      rotationSpeedFactor: 1.3,
      subjects: [
        { id: "wed-1", name: "Mandarin", time: "07.30 - 09.00", endHour: 9, endMin: 0, color: "from-rose-400 to-pink-600", size: "w-3.5 h-3.5" },
        { id: "wed-2", name: "PJOK", time: "09.30 - 10.50", endHour: 10, endMin: 50, color: "from-amber-400 to-orange-500", size: "w-4.5 h-4.5" },
        { id: "wed-3", name: "Sosiologi", time: "10.50 - 12.10", endHour: 12, endMin: 10, color: "from-purple-400 to-fuchsia-600", size: "w-4 h-4" },
        { id: "wed-4", name: "Sejarah", time: "12.40 - 14.00", endHour: 14, endMin: 0, color: "from-sky-400 to-indigo-600", size: "w-3.5 h-3.5" },
        { id: "wed-5", name: "Seni Budaya", time: "14.00 - 15.20", endHour: 15, endMin: 20, color: "from-pink-500 to-purple-600", size: "w-4.5 h-4.5" }
      ]
    },
    4: { // Kamis
      dayName: "Kamis",
      themeName: "Golden Nebula Orbit",
      glowClass: "bg-amber-500",
      accentColor: "rgba(245, 158, 11, 0.4)",
      orbitClass: "orbit-ring-gold",
      rotationSpeedFactor: 0.9,
      subjects: [
        { id: "thu-1", name: "Informatika", time: "06.45 - 08.15", endHour: 8, endMin: 15, color: "from-pink-500 to-purple-600", size: "w-4.5 h-4.5" },
        { id: "thu-2", name: "Matematika Wajib", time: "08.15 - 10.15", endHour: 10, endMin: 15, color: "from-amber-400 to-orange-600", size: "w-5 h-5" },
        { id: "thu-3", name: "PKN", time: "10.15 - 11.45", endHour: 11, endMin: 45, color: "from-slate-400 to-zinc-600", size: "w-3.5 h-3.5" },
        { id: "thu-4", name: "Inggris", time: "12.30 - 14.35", endHour: 14, endMin: 35, color: "from-sky-400 to-blue-600", size: "w-4.5 h-4.5" },
        { id: "thu-5", name: "Ekonomi", time: "14.35 - 15.15", endHour: 15, endMin: 15, color: "from-amber-500 to-yellow-600", size: "w-4 h-4" }
      ]
    },
    5: { // Jumat
      dayName: "Jumat",
      themeName: "Cosmic Rose Orbit",
      glowClass: "bg-rose-500",
      accentColor: "rgba(244, 63, 94, 0.4)",
      orbitClass: "orbit-ring-rose",
      rotationSpeedFactor: 1.1,
      subjects: [
        { id: "fri-1", name: "PKWU", time: "07.15 - 08.45", endHour: 8, endMin: 45, color: "from-rose-400 to-pink-600", size: "w-4.5 h-4.5" },
        { id: "fri-2", name: "PJOK", time: "09.15 - 10.45", endHour: 10, endMin: 45, color: "from-yellow-400 to-orange-500", size: "w-4 h-4" },
        { id: "fri-3", name: "B. Konseling", time: "10.45 - 11.30", endHour: 11, endMin: 30, color: "from-teal-400 to-emerald-600", size: "w-3.5 h-3.5" },
        { id: "fri-4", name: "Geografi", time: "13.00 - 14.30", endHour: 14, endMin: 30, color: "from-indigo-400 to-purple-600", size: "w-5 h-5" }
      ]
    }
  };

  // State
  let currentMode = "auto"; // "auto" atau "manual"
  let manualPassed = {}; // Menyimpan status manual { subjectId: true/false }
  let updateInterval = null;

  // Mendapatkan string tanggal hari ini (YYYY-MM-DD)
  function getTodayDateString() {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    return `${yyyy}-${mm}-${dd}`;
  }

  // Load state dari localStorage dengan reset harian otomatis
  function loadState() {
    const todayStr = getTodayDateString();
    const savedDate = localStorage.getItem("orbit_last_saved_date");
    if (savedDate !== todayStr) {
      localStorage.setItem("orbit_last_saved_date", todayStr);
      localStorage.setItem("orbit_manual_passed", JSON.stringify({}));
      manualPassed = {};
    } else {
      try {
        manualPassed = JSON.parse(localStorage.getItem("orbit_manual_passed")) || {};
      } catch (e) {
        manualPassed = {};
      }
    }
  }

  // Simpan state ke localStorage
  function saveState() {
    localStorage.setItem("orbit_manual_passed", JSON.stringify(manualPassed));
    localStorage.setItem("orbit_last_saved_date", getTodayDateString());
  }


  // Mendapatkan hari saat ini (1 = Senin, ..., 5 = Jumat, 6 = Sabtu, 0 = Minggu)
  function getCurrentDayIndex() {
    const today = new Date().getDay();
    // Jika akhir pekan, default ke hari Senin untuk demo data atau tetap biarkan akhir pekan
    return today;
  }

  // Cek apakah pelajaran sudah selesai berdasarkan waktu realtime
  function isSubjectPassedRealtime(subj) {
    const now = new Date();
    const currentHour = now.getHours();
    const currentMin = now.getMinutes();

    if (currentHour > subj.endHour) return true;
    if (currentHour === subj.endHour && currentMin >= subj.endMin) return true;
    return false;
  }

  // Menyediakan gaya dinamis untuk Orbit di halaman
  function injectOrbitStyles() {
    const styleId = "orbit-dynamic-keyframes-style";
    if (document.getElementById(styleId)) return;

    const style = document.createElement("style");
    style.id = styleId;
    style.innerHTML = `
      .orbit-system-wrapper {
        transform-style: preserve-3d;
        transform: rotateX(65deg) rotateY(-10deg);
        width: 100%;
        height: 100%;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      
      @keyframes orbit-cw {
        from { transform: translate(-50%, -50%) rotate(0deg); }
        to { transform: translate(-50%, -50%) rotate(360deg); }
      }
      @keyframes orbit-ccw {
        from { transform: translate(-50%, -50%) rotate(360deg); }
        to { transform: translate(-50%, -50%) rotate(0deg); }
      }

      .orbit-line {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        border: 1px dashed rgba(160, 160, 160, 0.2);
        border-radius: 50%;
        transform-style: preserve-3d;
        pointer-events: none;
      }

      .orbit-ring-lavender { border-color: rgba(167, 139, 250, 0.25); }
      .orbit-ring-teal { border-color: rgba(45, 212, 191, 0.25); }
      .orbit-ring-pink { border-color: rgba(244, 114, 182, 0.25); }
      .orbit-ring-gold { border-color: rgba(251, 191, 36, 0.25); }
      .orbit-ring-rose { border-color: rgba(251, 113, 133, 0.25); }

      .planet-holder {
        position: absolute;
        top: 50%;
        left: 50%;
        transform-style: preserve-3d;
        transform-origin: 0 0;
        pointer-events: none;
      }

      .planet-sphere {
        position: absolute;
        top: 0;
        left: 50%;
        /* Menggunakan counter-rotation agar bola tetap tegak lurus menghadap kamera */
        transform: translate(-50%, -50%) rotateX(-65deg) rotateY(10deg);
        border-radius: 50%;
        box-shadow: inset -3px -3px 8px rgba(0,0,0,0.6), 0 0 15px currentColor;
        transition: opacity 0.5s ease, transform 0.5s ease, color 0.5s ease;
      }

      .planet-ring-saturn {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 180%;
        height: 40%;
        border: 2px solid rgba(255, 255, 255, 0.4);
        border-radius: 50%;
        transform: translate(-50%, -50%) rotateX(75deg);
        pointer-events: none;
      }

      .planet-ghost {
        background: transparent !important;
        border: 2px dashed rgba(160, 160, 160, 0.4) !important;
        box-shadow: none !important;
        color: rgba(160, 160, 160, 0.3) !important;
        opacity: 0.5;
      }
    `;
    document.head.appendChild(style);
  }

  // Mengatur Mode Orbit: auto (waktu nyata) atau manual (simulasi)
  window.setOrbitMode = function (mode) {
    currentMode = mode;
    const btnAuto = document.getElementById("orbit-mode-auto");
    const btnManual = document.getElementById("orbit-mode-manual");
    const resetBtn = document.getElementById("orbit-reset-btn");

    if (!btnAuto || !btnManual) return;

    if (mode === "auto") {
      btnAuto.className = "px-3 py-1.5 rounded-lg text-xs font-bold transition-all bg-white dark:bg-zinc-800 text-pink-600 dark:text-pink-400 shadow-sm cursor-pointer";
      btnManual.className = "px-3 py-1.5 rounded-lg text-xs font-bold transition-all text-zinc-500 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-200 cursor-pointer";
      if (resetBtn) resetBtn.classList.add("hidden");
    } else {
      btnManual.className = "px-3 py-1.5 rounded-lg text-xs font-bold transition-all bg-white dark:bg-zinc-800 text-pink-600 dark:text-pink-400 shadow-sm cursor-pointer";
      btnAuto.className = "px-3 py-1.5 rounded-lg text-xs font-bold transition-all text-zinc-555 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-200 cursor-pointer";
      if (resetBtn) resetBtn.classList.remove("hidden");
    }

    renderOrbitWidget();
  };

  // Reset Pilihan Manual
  window.resetManualOrbit = function () {
    manualPassed = {};
    saveState();
    renderOrbitWidget();
  };

  // Mengubah status check pelajaran secara manual
  window.toggleManualSubject = function (subjectId) {
    manualPassed[subjectId] = !manualPassed[subjectId];
    saveState();
    renderOrbitWidget();
  };

  // Render Utama Widget
  window.renderOrbitWidget = function () {
    const viewport = document.getElementById("orbit-system-viewport");
    const timeline = document.getElementById("orbit-timeline-container");
    const badgeText = document.getElementById("orbit-badge-text");
    const bgGlow = document.getElementById("orbit-bg-glow");
    const bgGlow2 = document.getElementById("orbit-bg-glow-2");

    if (!viewport || !timeline) return;

    const dayIndex = getCurrentDayIndex(); // 0-6
    const isWeekend = dayIndex === 0 || dayIndex === 6;

    // Jika akhir pekan
    if (isWeekend) {
      if (badgeText) badgeText.innerText = "Rest & Recharge Orbit";
      if (bgGlow) {
        bgGlow.className = "absolute -right-20 -bottom-20 w-80 h-80 rounded-full blur-[100px] opacity-20 pointer-events-none transition-all duration-1000 bg-sky-500";
      }
      if (bgGlow2) {
        bgGlow2.className = "absolute -left-20 -top-20 w-80 h-80 rounded-full blur-[100px] opacity-15 pointer-events-none transition-all duration-1000 bg-emerald-500";
      }

      // Render Stage Akhir Pekan
      viewport.innerHTML = `
        <!-- Solar Center Star -->
        <div class="absolute w-12 h-12 rounded-full bg-gradient-to-r from-sky-400 via-teal-400 to-emerald-400 animate-pulse shadow-[0_0_30px_rgba(56,189,248,0.5)] z-20 flex items-center justify-center text-white font-serif italic text-base select-none">
          ☕
        </div>
        <div class="orbit-system-wrapper">
          <!-- Relaksasi Ring -->
          <div class="orbit-line w-[160px] h-[160px] border border-dashed border-sky-400/25" style="animation: orbit-cw 20s linear infinite;">
            <div class="planet-sphere w-4 h-4 bg-gradient-to-r from-sky-400 to-teal-500 text-sky-400 shadow-[0_0_10px_rgba(56,189,248,0.6)]"></div>
          </div>
          <div class="orbit-line w-[240px] h-[240px] border border-dashed border-teal-400/20" style="animation: orbit-ccw 30s linear infinite;">
            <div class="planet-sphere w-5 h-5 bg-gradient-to-r from-teal-400 to-emerald-500 text-teal-400 shadow-[0_0_12px_rgba(45,212,191,0.6)]"></div>
          </div>
        </div>
      `;

      // Render Timeline Akhir Pekan
      timeline.innerHTML = `
        <div class="flex flex-col items-center justify-center py-8 text-center text-zinc-500">
          <span class="text-3xl mb-2">🪐</span>
          <p class="font-bold text-sm text-zinc-800 dark:text-zinc-200">Hari Libur Sekolah!</p>
          <p class="text-[10px] text-zinc-550 mt-1 max-w-xs leading-relaxed">
            Tidak ada jadwal pelajaran hari ini. Sistem orbit berada dalam mode peristirahatan luar angkasa. Selamat berakhir pekan!
          </p>
        </div>
      `;
      return;
    }

    // Ambil Data Hari Aktif (1-5)
    const dayData = JADWAL_ORBIT[dayIndex] || JADWAL_ORBIT[1]; // Fallback ke senin jika gagal

    // Set Header/Glow Info
    if (badgeText) badgeText.innerText = `${dayData.dayName} • ${dayData.themeName}`;
    if (bgGlow) {
      bgGlow.className = `absolute -right-20 -bottom-20 w-80 h-80 rounded-full blur-[100px] opacity-25 pointer-events-none transition-all duration-1000 ${dayData.glowClass}`;
    }

    // Render Timeline Checklist
    let timelineHTML = "";
    let passedCount = 0;

    dayData.subjects.forEach((subj) => {
      let isPassed = false;
      if (currentMode === "auto") {
        isPassed = isSubjectPassedRealtime(subj);
      } else {
        isPassed = !!manualPassed[subj.id];
      }

      if (isPassed) passedCount++;

      timelineHTML += `
        <div class="flex items-center justify-between p-3 rounded-xl border transition-all ${isPassed
          ? "bg-emerald-50/40 dark:bg-emerald-950/10 border-emerald-200/50 dark:border-emerald-900/30"
          : "bg-white/50 dark:bg-zinc-900/40 border-zinc-150 dark:border-zinc-850"
        }">
          <div class="flex items-center gap-3">
            <!-- Visual Indicator Dot -->
            <span class="w-2.5 h-2.5 rounded-full ${isPassed
          ? "bg-gradient-to-r from-emerald-400 to-teal-500 shadow-md shadow-emerald-400/30"
          : "bg-zinc-200 dark:bg-zinc-800 border border-dashed border-zinc-400"
        }"></span>
            
            <div>
              <span class="text-xs font-bold text-zinc-800 dark:text-zinc-200 block">${subj.name}</span>
              <span class="text-[9px] text-zinc-400 dark:text-zinc-550 font-mono">${subj.time}</span>
            </div>
          </div>

          <!-- Switch / Checked Box -->
          <div class="flex items-center">
            <button onclick="toggleManualSubject('${subj.id}')" class="px-2.5 py-1 rounded-lg text-[10px] font-bold border cursor-pointer transition-all duration-200 ${isPassed
          ? "bg-emerald-500 border-emerald-600 text-white shadow-sm hover:bg-emerald-600"
          : "bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 text-zinc-500 dark:text-zinc-450 hover:bg-pink-50 dark:hover:bg-pink-950/20 hover:text-pink-600 dark:hover:text-pink-400 hover:border-pink-200 dark:hover:border-pink-900"
        }">
              ${isPassed ? "✓ Selesai" : "Tandai Selesai"}
            </button>
          </div>
        </div>
      `;
    });

    timeline.innerHTML = timelineHTML;

    // Check if the system is already rendered for this day in the viewport
    const systemWrapper = viewport.querySelector('.orbit-system-wrapper');
    const systemDay = viewport.getAttribute('data-orbit-day');
    const dayIndexStr = String(dayIndex);

    if (!systemWrapper || systemDay !== dayIndexStr) {
      viewport.setAttribute('data-orbit-day', dayIndexStr);

      let orbitHTML = `
        <!-- Center Star (Matahari) -->
        <div class="absolute w-12 h-12 rounded-full bg-gradient-to-r from-amber-400 via-orange-500 to-yellow-300 animate-pulse shadow-[0_0_35px_rgba(245,158,11,0.6)] z-20 flex flex-col items-center justify-center text-white font-bold select-none border border-orange-300/40">
          <span class="text-xs">☀️</span>
          <span class="sun-count-text text-[9px] font-mono leading-none">${passedCount}/${dayData.subjects.length}</span>
        </div>
        <div class="orbit-system-wrapper">
      `;

      // Render all rings and planets in the DOM initially
      dayData.subjects.forEach((subj, idx) => {
        let isPassed = false;
        if (currentMode === "auto") {
          isPassed = isSubjectPassedRealtime(subj);
        } else {
          isPassed = !!manualPassed[subj.id];
        }

        const baseRadius = 110;
        const step = 32;
        const sizePx = baseRadius + (idx * step);

        const direction = (idx % 2 === 0) ? "orbit-cw" : "orbit-ccw";
        const baseSpeed = 12 + (idx * 6);
        const speed = (baseSpeed / dayData.rotationSpeedFactor).toFixed(1);

        const planetColor = `bg-gradient-to-r ${subj.color}`;
        const planetShadowColor = subj.color.includes("purple") ? "rgba(167, 139, 250, 0.6)" : "rgba(236, 72, 153, 0.6)";

        const ringOpacity = isPassed ? "opacity-60 dark:opacity-40" : "opacity-10 dark:opacity-5";
        const planetVisibility = isPassed ? "opacity-100 scale-100" : "opacity-0 scale-50 pointer-events-none";

        orbitHTML += `
          <!-- Ring Orbit ${idx + 1} -->
          <div class="orbit-line orbit-line-idx-${idx} ${dayData.orbitClass} ${ringOpacity} transition-all duration-700" style="width: ${sizePx}px; height: ${sizePx}px; animation: ${direction} ${speed}s linear infinite;">
            <!-- Planet -->
            <div class="planet-sphere planet-sphere-idx-${idx} ${subj.size} ${planetColor} ${planetVisibility} transition-all duration-700" style="color: ${planetShadowColor};">
              <!-- Cincin Saturnus khusus untuk variasi visual -->
              ${(idx === 2 || idx === 4) ? '<div class="planet-ring-saturn"></div>' : ''}
            </div>
          </div>
        `;
      });

      orbitHTML += "</div>";
      viewport.innerHTML = orbitHTML;
    } else {
      // Dynamic updates to avoid page flashes and preserve rotation angles
      dayData.subjects.forEach((subj, idx) => {
        let isPassed = false;
        if (currentMode === "auto") {
          isPassed = isSubjectPassedRealtime(subj);
        } else {
          isPassed = !!manualPassed[subj.id];
        }

        const ring = viewport.querySelector(`.orbit-line-idx-${idx}`);
        const planet = viewport.querySelector(`.planet-sphere-idx-${idx}`);

        if (ring && planet) {
          if (isPassed) {
            ring.classList.remove('opacity-10', 'dark:opacity-5');
            ring.classList.add('opacity-60', 'dark:opacity-40');

            planet.classList.remove('opacity-0', 'scale-50', 'pointer-events-none');
            planet.classList.add('opacity-100', 'scale-100');
          } else {
            ring.classList.remove('opacity-60', 'dark:opacity-40');
            ring.classList.add('opacity-10', 'dark:opacity-5');

            planet.classList.remove('opacity-100', 'scale-100');
            planet.classList.add('opacity-0', 'scale-50', 'pointer-events-none');
          }
        }
      });

      const sunCountText = viewport.querySelector('.sun-count-text');
      if (sunCountText) {
        sunCountText.innerText = `${passedCount}/${dayData.subjects.length}`;
      }
    }
  };

  // Inisialisasi awal
  window.initOrbitWidget = function () {
    loadState();
    injectOrbitStyles();
    renderOrbitWidget();

    // Jalankan timer realtime update
    if (updateInterval) clearInterval(updateInterval);
    updateInterval = setInterval(() => {
      if (currentMode === "auto") {
        renderOrbitWidget();
      }
    }, 30000); // Update setiap 30 detik
  };

  // Auto-run pada load pertama jika elemen ada
  if (document.readyState === "complete" || document.readyState === "interactive") {
    if (document.getElementById("orbit-system-viewport")) {
      window.initOrbitWidget();
    }
  } else {
    document.addEventListener("DOMContentLoaded", () => {
      if (document.getElementById("orbit-system-viewport")) {
        window.initOrbitWidget();
      }
    });
  }

})();
