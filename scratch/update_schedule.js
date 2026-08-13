const fs = require('fs');
const path = require('path');

const indexPath = path.join(__dirname, '../index.html');
let content = fs.readFileSync(indexPath, 'utf8');

// Find the target markers
const startMarker = '        <!-- Jadwal Pelajaran -->';
const endMarker = '        <!-- ORBIT PROGRESS Harian -->';

const startIndex = content.indexOf(startMarker);
const endIndex = content.indexOf(endMarker);

if (startIndex === -1 || endIndex === -1) {
  console.error('Markers not found!');
  process.exit(1);
}

console.log('Found markers at indices:', startIndex, endIndex);

const newHTML = `        <!-- Jadwal Pelajaran -->
        <div class="glass-panel mt-10 p-7 rounded-[2rem] border border-pink-200/50 dark:border-pink-900/40 shadow-lg relative overflow-hidden bg-white/40 dark:bg-zinc-950/20">
          <div class="absolute -right-24 -top-24 w-72 h-72 rounded-full blur-[120px] opacity-15 pointer-events-none bg-pink-400"></div>
          <div class="absolute -left-24 -bottom-24 w-72 h-72 rounded-full blur-[120px] opacity-10 pointer-events-none bg-purple-400"></div>
          
          <div class="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 pb-6 border-b border-pink-100/40 dark:border-zinc-800/40 relative z-10">
            <div>
              <span class="text-xs font-bold uppercase tracking-widest text-pink-500">Akademik</span>
              <h2 class="text-3xl font-bold text-zinc-800 dark:text-white">📚 Jadwal Pelajaran Mingguan</h2>
              <p class="text-xs text-zinc-400 dark:text-zinc-550 mt-1 font-mono">// Kelas XI • Semester Ganjil</p>
            </div>
            
            <!-- View Mode Switcher -->
            <div class="flex items-center gap-2 bg-zinc-100/80 dark:bg-zinc-900/60 p-1 rounded-2xl border border-zinc-200/40 dark:border-zinc-850/40 self-start md:self-center shadow-inner">
              <button id="sched-view-timeline" onclick="changeScheduleViewMode('timeline')" class="px-4 py-2 rounded-xl text-xs font-bold transition-all bg-white dark:bg-zinc-800 text-pink-600 dark:text-pink-400 shadow-sm cursor-pointer flex items-center gap-1.5 border border-zinc-200/20">
                <span>📅 Timeline Hari</span>
              </button>
              <button id="sched-view-grid" onclick="changeScheduleViewMode('grid')" class="px-4 py-2 rounded-xl text-xs font-bold transition-all text-zinc-550 dark:text-zinc-450 hover:text-zinc-850 dark:hover:text-zinc-200 cursor-pointer flex items-center gap-1.5">
                <span>📊 Board Mingguan</span>
              </button>
            </div>
          </div>

          <!-- 1. Day Selector Tabs (only visible in Timeline View) -->
          <div id="sched-timeline-tabs-wrapper" class="mb-8 relative z-10">
            <div class="flex flex-wrap items-center justify-center gap-2 p-1.5 bg-zinc-100/40 dark:bg-zinc-950/20 rounded-2xl border border-zinc-200/30 dark:border-zinc-850/30 max-w-2xl mx-auto shadow-sm">
              <button onclick="changeScheduleDay('Senin')" data-day="Senin" class="sched-day-tab flex-1 min-w-[75px] py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer text-center">
                Senin
              </button>
              <button onclick="changeScheduleDay('Selasa')" data-day="Selasa" class="sched-day-tab flex-1 min-w-[75px] py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer text-center">
                Selasa
              </button>
              <button onclick="changeScheduleDay('Rabu')" data-day="Rabu" class="sched-day-tab flex-1 min-w-[75px] py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer text-center">
                Rabu
              </button>
              <button onclick="changeScheduleDay('Kamis')" data-day="Kamis" class="sched-day-tab flex-1 min-w-[75px] py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer text-center">
                Kamis
              </button>
              <button onclick="changeScheduleDay('Jumat')" data-day="Jumat" class="sched-day-tab flex-1 min-w-[75px] py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer text-center">
                Jumat
              </button>
            </div>
          </div>

          <!-- 2. Timeline View Area -->
          <div id="sched-timeline-view" class="relative pl-6 sm:pl-8 space-y-4 max-w-4xl mx-auto z-10 min-h-[300px]">
            <!-- Vertical Line decoration -->
            <div class="absolute left-3 sm:left-4 top-2 bottom-2 w-0.5 bg-gradient-to-b from-pink-400 via-purple-400 to-sky-400 opacity-25 dark:opacity-15 rounded-full"></div>
            
            <!-- Dynamic timeline list will be inserted here -->
            <div id="sched-timeline-list" class="space-y-4"></div>
          </div>

          <!-- 3. Grid View Area (Hidden by default) -->
          <div id="sched-grid-view" class="hidden relative z-10">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              <!-- Dynamic days columns will be inserted here -->
            </div>
          </div>
        </div>

        <script>
          (function() {
            // Database Guru pengampu berdasarkan kode (KD)
            const GURU_MAP = {
              "1": "Laoshi Chen (Bahasa Mandarin)",
              "2": "Pak Bambang (Sejarah / PKN)",
              "3": "Ibu Rahma (Sosiologi)",
              "4": "Ibu Kartika (Ekonomi / PKWU)",
              "5": "Pak Rian (Seni Budaya)",
              "6": "Pak Ahmad (Agama)",
              "10": "Ibu Yanti (Matematika)",
              "11": "Ibu Siska (Bimbingan Konseling)",
              "14": "Pak Dodi (Geografi)",
              "17": "Ibu Wahyuni (Bahasa Indonesia)",
              "20": "Pak Heri (PJOK)",
              "22": "Ibu Alika (Informatika)",
              "27": "Miss Emily (Bahasa Inggris)"
            };

            // Database Jadwal Pelajaran
            const JADWAL_PELAJARAN = {
              "Senin": {
                accent: "purple",
                items: [
                  { jp: "1-2", start: "07:30", end: "09:00", subject: "Sosiologi", kd: "3", icon: "👥", isBreak: false },
                  { jp: "-", start: "09:00", end: "09:30", subject: "Istirahat Pertama", kd: "-", icon: "☕", isBreak: true },
                  { jp: "3-4", start: "09:30", end: "10:50", subject: "Mandarin", kd: "1", icon: "🗣️", isBreak: false },
                  { jp: "5", start: "10:50", end: "11:30", subject: "Sosiologi", kd: "3", icon: "👥", isBreak: false },
                  { jp: "6", start: "11:30", end: "12:10", subject: "Bahasa Indonesia", kd: "17", icon: "📝", isBreak: false },
                  { jp: "-", start: "12:10", end: "12:40", subject: "Istirahat Kedua", kd: "-", icon: "🍱", isBreak: true },
                  { jp: "8-9", start: "12:40", end: "14:00", subject: "Sejarah", kd: "2", icon: "📜", isBreak: false },
                  { jp: "10", start: "14:00", end: "14:40", subject: "Seni Budaya", kd: "5", icon: "🎨", isBreak: false }
                ]
              },
              "Selasa": {
                accent: "teal",
                items: [
                  { jp: "1-2", start: "07:30", end: "09:00", subject: "Agama", kd: "6", icon: "🕌", isBreak: false },
                  { jp: "-", start: "09:00", end: "09:30", subject: "Istirahat Pertama", kd: "-", icon: "☕", isBreak: true },
                  { jp: "3-4", start: "09:30", end: "10:50", subject: "B. Mandarin", kd: "1", icon: "🗣️", isBreak: false },
                  { jp: "5-6", start: "10:50", end: "12:10", subject: "B. Indonesia", kd: "17", icon: "📝", isBreak: false },
                  { jp: "-", start: "12:10", end: "12:40", subject: "Istirahat Kedua", kd: "-", icon: "🍱", isBreak: true },
                  { jp: "8-10", start: "12:40", end: "14:40", subject: "Matematika Minat", kd: "10", icon: "📐", isBreak: false },
                  { jp: "11", start: "14:40", end: "15:20", subject: "Ekonomi", kd: "4", icon: "📊", isBreak: false }
                ]
              },
              "Rabu": {
                accent: "pink",
                items: [
                  { jp: "1-2", start: "07:30", end: "09:00", subject: "Mandarin", kd: "1", icon: "🗣️", isBreak: false },
                  { jp: "-", start: "09:00", end: "09:30", subject: "Istirahat Pertama", kd: "-", icon: "☕", isBreak: true },
                  { jp: "3-4", start: "09:30", end: "10:50", subject: "PJOK", kd: "20", icon: "🏃‍♂️", isBreak: false },
                  { jp: "5-6", start: "10:50", end: "12:10", subject: "Sosiologi", kd: "3", icon: "👥", isBreak: false },
                  { jp: "-", start: "12:10", end: "12:40", subject: "Istirahat Kedua", kd: "-", icon: "🍱", isBreak: true },
                  { jp: "8-9", start: "12:40", end: "14:00", subject: "Sejarah", kd: "2", icon: "📜", isBreak: false },
                  { jp: "10-11", start: "14:00", end: "15:20", subject: "Seni Budaya", kd: "5", icon: "🎨", isBreak: false }
                ]
              },
              "Kamis": {
                accent: "gold",
                items: [
                  { jp: "1-2", start: "06:45", end: "08:15", subject: "Informatika", kd: "22", icon: "💻", isBreak: false },
                  { jp: "3", start: "08:15", end: "09:00", subject: "Matematika Wajib", kd: "10", icon: "📐", isBreak: false },
                  { jp: "-", start: "09:00", end: "09:30", subject: "Istirahat Pertama", kd: "-", icon: "☕", isBreak: true },
                  { jp: "4", start: "09:30", end: "10:15", subject: "Matematika Wajib", kd: "10", icon: "📐", isBreak: false },
                  { jp: "5-6", start: "10:15", end: "11:45", subject: "PKN", kd: "2", icon: "🏛️", isBreak: false },
                  { jp: "-", start: "11:45", end: "12:30", subject: "Makan Bersama", kd: "-", icon: "🍱", isBreak: true },
                  { jp: "7-9", start: "12:30", end: "14:35", subject: "Inggris", kd: "27", icon: "🗣️", isBreak: false },
                  { jp: "10", start: "14:35", end: "15:15", subject: "Ekonomi", kd: "4", icon: "📊", isBreak: false }
                ]
              },
              "Jumat": {
                accent: "rose",
                items: [
                  { jp: "1-2", start: "07:15", end: "08:45", subject: "PKWU", kd: "4", icon: "💼", isBreak: false },
                  { jp: "-", start: "08:45", end: "09:15", subject: "Istirahat Pertama", kd: "-", icon: "☕", isBreak: true },
                  { jp: "3-4", start: "09:15", end: "10:45", subject: "PJOK", kd: "20", icon: "🏃‍♂️", isBreak: false },
                  { jp: "5", start: "10:45", end: "11:30", subject: "B. Konseling", kd: "11", icon: "🧘‍♀️", isBreak: false },
                  { jp: "-", start: "11:30", end: "12:30", subject: "Jumat Ibadah", kd: "-", icon: "🕌", isBreak: true },
                  { jp: "-", start: "12:30", end: "13:00", subject: "Istirahat Kedua", kd: "-", icon: "🍱", isBreak: true },
                  { jp: "6-7", start: "13:00", end: "14:30", subject: "Geografi", kd: "14", icon: "🗺️", isBreak: false }
                ]
              }
            };

            let activeDay = "Senin";
            let viewMode = "timeline";

            function getSubjectStatus(day, item) {
              const now = new Date();
              const days = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
              const currentDayName = days[now.getDay()];
              
              if (currentDayName !== day) {
                return "upcoming";
              }

              const [startHour, startMin] = item.start.split(":").map(Number);
              const [endHour, endMin] = item.end.split(":").map(Number);

              const startTime = new Date();
              startTime.setHours(startHour, startMin, 0, 0);

              const endTime = new Date();
              endTime.setHours(endHour, endMin, 0, 0);

              if (now < startTime) {
                return "upcoming";
              } else if (now >= startTime && now < endTime) {
                return "active";
              } else {
                return "passed";
              }
            }

            window.renderTimelineView = function() {
              const timelineList = document.getElementById("sched-timeline-list");
              if (!timelineList) return;

              const dayData = JADWAL_PELAJARAN[activeDay];
              const items = dayData.items;

              let html = "";
              items.forEach((item, idx) => {
                const status = getSubjectStatus(activeDay, item);
                let statusBadge = "";
                let borderClass = "";
                let glowClass = "";

                if (item.isBreak) {
                  borderClass = "border-dashed border-zinc-200 dark:border-zinc-800 bg-zinc-50/20 dark:bg-zinc-950/10";
                } else {
                  if (dayData.accent === "purple") {
                    borderClass = "border-l-4 border-l-purple-500 bg-purple-50/10 dark:bg-purple-950/10";
                    if (status === "active") glowClass = "ring-2 ring-purple-500/50 shadow-lg shadow-purple-500/10";
                  } else if (dayData.accent === "teal") {
                    borderClass = "border-l-4 border-l-teal-500 bg-teal-50/10 dark:bg-teal-950/10";
                    if (status === "active") glowClass = "ring-2 ring-teal-500/50 shadow-lg shadow-teal-500/10";
                  } else if (dayData.accent === "pink") {
                    borderClass = "border-l-4 border-l-pink-500 bg-pink-50/10 dark:bg-pink-950/10";
                    if (status === "active") glowClass = "ring-2 ring-pink-500/50 shadow-lg shadow-pink-500/10";
                  } else if (dayData.accent === "gold") {
                    borderClass = "border-l-4 border-l-amber-500 bg-amber-50/10 dark:bg-amber-950/10";
                    if (status === "active") glowClass = "ring-2 ring-amber-500/50 shadow-lg shadow-amber-500/10";
                  } else if (dayData.accent === "rose") {
                    borderClass = "border-l-4 border-l-rose-500 bg-rose-50/10 dark:bg-rose-950/10";
                    if (status === "active") glowClass = "ring-2 ring-rose-500/50 shadow-lg shadow-rose-500/10";
                  }
                }

                if (status === "active" && !item.isBreak) {
                  statusBadge = \`<span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-emerald-100 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-400 animate-pulse border border-emerald-350/30">
                    <span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Belajar
                  </span>\`;
                } else if (status === "passed" && !item.isBreak) {
                  statusBadge = \`<span class="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400">
                    Selesai ✓
                  </span>\`;
                } else if (status === "upcoming" && !item.isBreak) {
                  statusBadge = \`<span class="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-blue-50 dark:bg-blue-950/30 text-blue-500 dark:text-blue-400 border border-blue-200/30">
                    Mendatang
                  </span>\`;
                }

                const teacherName = item.isBreak ? "" : (GURU_MAP[item.kd] || "Guru Pengampu");

                if (item.isBreak) {
                  html += \`
                    <div class="relative flex items-center gap-4 py-2 group transition-all duration-300 animate-fade-in" style="animation-delay: \${idx * 40}ms">
                      <div class="w-20 sm:w-24 text-right flex-shrink-0">
                        <span class="text-xs font-bold text-zinc-450 dark:text-zinc-550 block font-mono">\${item.start}</span>
                        <span class="text-[9px] text-zinc-400 dark:text-zinc-550 block font-mono">\${item.end}</span>
                      </div>
                      <div class="w-8 h-8 rounded-full bg-zinc-150 dark:bg-zinc-850 flex items-center justify-center text-xs relative z-10 border border-zinc-200 dark:border-zinc-800 text-zinc-400 group-hover:scale-110 transition-transform duration-300">
                        \${item.icon}
                      </div>
                      <div class="flex-1 p-3 px-4 rounded-xl border border-dashed border-zinc-200 dark:border-zinc-800 bg-zinc-50/20 dark:bg-zinc-950/5 text-zinc-550 dark:text-zinc-400 flex items-center gap-3">
                        <span class="text-xs font-bold uppercase tracking-wider">\${item.subject}</span>
                        <span class="text-[9px] font-mono text-zinc-400 dark:text-zinc-550">• Sesi Istirahat</span>
                      </div>
                    </div>
                  \`;
                } else {
                  html += \`
                    <div class="relative flex items-start gap-4 py-3 group transition-all duration-300 animate-fade-in" style="animation-delay: \${idx * 40}ms">
                      <div class="w-20 sm:w-24 text-right mt-2 flex-shrink-0">
                        <span class="text-xs font-extrabold text-zinc-700 dark:text-zinc-300 block font-mono">\${item.start} - \${item.end}</span>
                        <span class="text-[9px] font-mono font-bold tracking-wide uppercase px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400 inline-block mt-1">JP \${item.jp}</span>
                      </div>
                      <div class="w-8 h-8 rounded-full flex items-center justify-center text-xs relative z-10 border shadow-sm group-hover:scale-110 transition-transform duration-300 mt-2.5
                        \${status === 'active' ? 'bg-pink-500 border-pink-400 text-white animate-pulse' : 'bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 text-zinc-650 dark:text-zinc-400'}"
                      >
                        \${item.icon}
                      </div>
                      <div class="flex-1 p-4 rounded-2xl border transition-all duration-300 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white dark:bg-zinc-900/60 border-zinc-200 dark:border-zinc-800/60 hover:border-pink-300 dark:hover:border-purple-800/60 hover:shadow-md \${borderClass} \${glowClass}">
                        <div class="space-y-1">
                          <h4 class="text-base font-extrabold text-zinc-850 dark:text-white leading-tight">\${item.subject}</h4>
                          <div class="flex flex-wrap items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400 font-mono">
                            <span class="px-1.5 py-0.5 rounded bg-zinc-100/85 dark:bg-zinc-800 font-bold">KD \${item.kd}</span>
                            <span>•</span>
                            <span class="hover:text-pink-500 transition-colors font-medium">\text{\${teacherName}}</span>
                          </div>
                        </div>
                        <div class="self-start sm:self-center">
                          \${statusBadge}
                        </div>
                      </div>
                    </div>
                  \`;
                }
              });

              timelineList.innerHTML = html;
            };

            window.renderGridView = function() {
              const gridView = document.querySelector("#sched-grid-view > div");
              if (!gridView) return;

              let html = "";
              Object.keys(JADWAL_PELAJARAN).forEach(day => {
                const dayData = JADWAL_PELAJARAN[day];
                let headerGradient = "";
                let borderHeader = "";

                if (dayData.accent === "purple") {
                  headerGradient = "from-purple-500 to-indigo-600 shadow-purple-500/20";
                  borderHeader = "border-l-4 border-l-purple-500";
                } else if (dayData.accent === "teal") {
                  headerGradient = "from-teal-500 to-emerald-600 shadow-teal-500/20";
                  borderHeader = "border-l-4 border-l-teal-500";
                } else if (dayData.accent === "pink") {
                  headerGradient = "from-pink-500 to-rose-600 shadow-pink-500/20";
                  borderHeader = "border-l-4 border-l-pink-500";
                } else if (dayData.accent === "gold") {
                  headerGradient = "from-amber-500 to-orange-600 shadow-amber-500/20";
                  borderHeader = "border-l-4 border-l-amber-500";
                } else if (dayData.accent === "rose") {
                  headerGradient = "from-rose-500 to-red-600 shadow-rose-500/20";
                  borderHeader = "border-l-4 border-l-rose-500";
                }

                html += \`
                  <div class="flex flex-col space-y-4">
                    <div class="p-3 rounded-2xl bg-gradient-to-r text-white font-extrabold text-center text-xs tracking-wider uppercase shadow-sm \${headerGradient}">
                      \${day}
                    </div>
                    <div class="flex flex-col gap-2.5">
                \`;

                dayData.items.forEach(item => {
                  if (item.isBreak) {
                    html += \`
                      <div class="p-2.5 rounded-xl border border-dashed border-zinc-200 dark:border-zinc-800 bg-zinc-50/20 dark:bg-zinc-950/5 text-center text-[10px] text-zinc-400 dark:text-zinc-550 font-medium">
                        \${item.icon} \${item.subject} (\${item.start})
                      </div>
                    \`;
                  } else {
                    const shortTeacher = (GURU_MAP[item.kd] || "Guru").split(" (")[0];
                    html += \`
                      <div class="p-3 rounded-xl border bg-white dark:bg-zinc-900 border-zinc-250/50 dark:border-zinc-800/40 hover:border-pink-300 dark:hover:border-purple-800/60 shadow-sm transition-all duration-300 flex flex-col space-y-1 border-l-4 \${borderHeader}">
                        <div class="flex items-center justify-between gap-1 text-[9px] text-zinc-450 dark:text-zinc-550 font-mono">
                          <span>\${item.start}</span>
                          <span class="font-bold uppercase bg-zinc-100 dark:bg-zinc-800 px-1 py-0.2 rounded">JP \${item.jp}</span>
                        </div>
                        <h5 class="text-xs font-bold text-zinc-855 dark:text-zinc-200 truncate leading-tight">\${item.icon} \${item.subject}</h5>
                        <div class="flex items-center justify-between text-[9px] text-zinc-400 dark:text-zinc-550 font-mono">
                          <span>KD \${item.kd}</span>
                          <span class="truncate max-w-[65px]">\${shortTeacher}</span>
                        </div>
                      </div>
                    \`;
                  }
                });

                html += \`
                    </div>
                  </div>
                \`;
              });

              gridView.innerHTML = html;
            };

            window.changeScheduleDay = function(day) {
              activeDay = day;
              
              const tabButtons = document.querySelectorAll(".sched-day-tab");
              tabButtons.forEach(btn => {
                const btnDay = btn.getAttribute("data-day");
                if (btnDay === day) {
                  btn.className = "sched-day-tab flex-1 min-w-[75px] py-2.5 rounded-xl text-xs font-extrabold transition-all cursor-pointer text-center bg-pink-500 dark:bg-pink-600 text-white shadow-md shadow-pink-500/10 scale-105";
                } else {
                  btn.className = "sched-day-tab flex-1 min-w-[75px] py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer text-center text-zinc-500 dark:text-zinc-400 hover:text-zinc-855 dark:hover:text-zinc-200 hover:bg-zinc-150/40 dark:hover:bg-zinc-950/20";
                }
              });

              renderTimelineView();
            };

            window.changeScheduleViewMode = function(mode) {
              viewMode = mode;
              const timelineView = document.getElementById("sched-timeline-view");
              const timelineTabs = document.getElementById("sched-timeline-tabs-wrapper");
              const gridView = document.getElementById("sched-grid-view");
              
              const btnTimeline = document.getElementById("sched-view-timeline");
              const btnGrid = document.getElementById("sched-view-grid");

              if (mode === "timeline") {
                timelineView.classList.remove("hidden");
                timelineTabs.classList.remove("hidden");
                gridView.classList.add("hidden");

                btnTimeline.className = "px-4 py-2 rounded-xl text-xs font-bold transition-all bg-white dark:bg-zinc-800 text-pink-600 dark:text-pink-400 shadow-sm cursor-pointer flex items-center gap-1.5 border border-zinc-200/20";
                btnGrid.className = "px-4 py-2 rounded-xl text-xs font-bold transition-all text-zinc-500 dark:text-zinc-400 hover:text-zinc-855 dark:hover:text-zinc-200 cursor-pointer flex items-center gap-1.5";
                
                renderTimelineView();
              } else {
                timelineView.classList.add("hidden");
                timelineTabs.classList.add("hidden");
                gridView.classList.remove("hidden");

                btnGrid.className = "px-4 py-2 rounded-xl text-xs font-bold transition-all bg-white dark:bg-zinc-800 text-pink-600 dark:text-pink-400 shadow-sm cursor-pointer flex items-center gap-1.5 border border-zinc-200/20";
                btnTimeline.className = "px-4 py-2 rounded-xl text-xs font-bold transition-all text-zinc-550 dark:text-zinc-405 hover:text-zinc-850 dark:hover:text-zinc-200 cursor-pointer flex items-center gap-1.5";
                
                renderGridView();
              }
            };

            window.initAlikaSchedule = function() {
              const daysOfWeek = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
              const currentDay = daysOfWeek[new Date().getDay()];
              if (JADWAL_PELAJARAN[currentDay]) {
                activeDay = currentDay;
              } else {
                activeDay = "Senin";
              }

              changeScheduleDay(activeDay);
              changeScheduleViewMode(viewMode);
            };

            document.addEventListener("DOMContentLoaded", initAlikaSchedule);
            
            if (window.switchAlikaTab) {
              const originalSwitchTab = window.switchAlikaTab;
              window.switchAlikaTab = function(targetTabId) {
                originalSwitchTab(targetTabId);
                if (targetTabId === 'schedule') {
                  setTimeout(initAlikaSchedule, 50);
                }
              };
            } else {
              window.addEventListener("hashchange", function() {
                if (window.location.hash === "#schedule") {
                  setTimeout(initAlikaSchedule, 50);
                }
              });
            }
          })();
        </script>`;

// Insert the new HTML block
const updatedContent = content.substring(0, startIndex) + newHTML + content.substring(endIndex);

fs.writeFileSync(indexPath, updatedContent, 'utf8');
console.log('Update schedule successfully completed!');
