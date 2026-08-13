$targetPath = "c:\Users\user\antigravity\alika\index.html"
$content = [System.IO.File]::ReadAllText($targetPath)

$scheduleHTML = @"
      <!-- SECTION 4: SCHEDULE -->
      <section id="schedule" class="tab-section hidden space-y-12">
        
        <!-- Jadwal Pelajaran -->
        <div class="glass-panel mt-10 p-7 rounded-[2rem] border border-pink-200/50 dark:border-pink-900/40 shadow-lg">
          <div class="flex items-center justify-between mb-6">
            <div>
              <span class="text-xs font-bold uppercase tracking-widest text-pink-500">Akademik</span>
              <h2 class="text-3xl font-bold text-zinc-800 dark:text-white">📚 Jadwal Pelajaran Mingguan</h2>
            </div>
            <div class="px-4 py-2 rounded-xl bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-300 text-sm font-semibold">
              Semester Ganjil
            </div>
          </div>

          <div class="overflow-x-auto rounded-2xl">
            <table class="w-full text-sm border-collapse overflow-hidden">
              <thead>
                <tr class="bg-gradient-to-r from-pink-500 via-purple-500 to-sky-500 text-white">
                  <th class="p-3">Hari</th>
                  <th class="p-3">JP</th>
                  <th class="p-3">Waktu</th>
                  <th class="p-3">Mata Pelajaran</th>
                  <th class="p-3">KD Guru</th>
                </tr>
              </thead>
              <tbody class="text-zinc-700 dark:text-zinc-200">
                <!-- SENIN -->
                <tr class="bg-pink-50 dark:bg-pink-950/20 hover:bg-pink-100 transition">
                  <td rowspan="11" class="border p-3 font-bold text-pink-600">Senin</td>
                  <td class="border p-3">1</td>
                  <td class="border p-3">07.30-08.15</td>
                  <td class="border p-3">Sosiologi</td>
                  <td class="border p-3">3</td>
                </tr>
                <tr class="hover:bg-pink-50 dark:hover:bg-pink-950/10">
                  <td class="border p-3">2</td>
                  <td class="border p-3">08.15-09.00</td>
                  <td class="border p-3">Sosiologi</td>
                  <td class="border p-3">3</td>
                </tr>
                <tr class="bg-pink-50/30 dark:bg-pink-950/10 hover:bg-pink-50/50 transition-colors">
                  <td class="border p-3 text-center text-zinc-400 dark:text-zinc-500 font-mono">-</td>
                  <td class="border p-3 font-mono text-zinc-500 dark:text-zinc-400">09.00-09.30</td>
                  <td class="border p-3">
                    <span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300">
                      ☕ Istirahat Pertama
                    </span>
                  </td>
                  <td class="border p-3 text-center text-zinc-400 dark:text-zinc-500 font-mono">-</td>
                </tr>
                <tr class="hover:bg-pink-50 dark:hover:bg-pink-950/10">
                  <td class="border p-3">3</td>
                  <td class="border p-3">09.30-10.10</td>
                  <td class="border p-3">Mandarin</td>
                  <td class="border p-3">1</td>
                </tr>
                <tr class="hover:bg-pink-50 dark:hover:bg-pink-950/10">
                  <td class="border p-3">4</td>
                  <td class="border p-3">10.10-10.50</td>
                  <td class="border p-3">Mandarin</td>
                  <td class="border p-3">1</td>
                </tr>
                <tr class="hover:bg-pink-50 dark:hover:bg-pink-950/10">
                  <td class="border p-3">5</td>
                  <td class="border p-3">10.50-11.30</td>
                  <td class="border p-3">Sosiologi</td>
                  <td class="border p-3">3</td>
                </tr>
                <tr class="hover:bg-pink-50 dark:hover:bg-pink-950/10">
                  <td class="border p-3">6</td>
                  <td class="border p-3">11.30-12.10</td>
                  <td class="border p-3">Bahasa Indonesia</td>
                  <td class="border p-3">17</td>
                </tr>
                <tr class="bg-pink-50/30 dark:bg-pink-950/10 hover:bg-pink-50/50 transition-colors">
                  <td class="border p-3 text-center text-zinc-400 dark:text-zinc-500 font-mono">-</td>
                  <td class="border p-3 font-mono text-zinc-500 dark:text-zinc-400">12.10-12.40</td>
                  <td class="border p-3">
                    <span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300">
                      🍱 Istirahat Kedua
                    </span>
                  </td>
                  <td class="border p-3 text-center text-zinc-400 dark:text-zinc-500 font-mono">-</td>
                </tr>
                <tr class="hover:bg-pink-50 dark:hover:bg-pink-950/10">
                  <td class="border p-3">8</td>
                  <td class="border p-3">12.40-13.20</td>
                  <td class="border p-3">Sejarah</td>
                  <td class="border p-3">2</td>
                </tr>
                <tr class="hover:bg-pink-50 dark:hover:bg-pink-950/10">
                  <td class="border p-3">9</td>
                  <td class="border p-3">13.20-14.00</td>
                  <td class="border p-3">Sejarah</td>
                  <td class="border p-3">2</td>
                </tr>
                <tr class="hover:bg-pink-50 dark:hover:bg-pink-950/10">
                  <td class="border p-3">10</td>
                  <td class="border p-3">14.00-14.40</td>
                  <td class="border p-3">Seni Budaya</td>
                  <td class="border p-3">5</td>
                </tr>

                <!-- SELASA -->
                <tr class="bg-sky-50 dark:bg-sky-950/20 hover:bg-sky-100 transition">
                  <td rowspan="12" class="border p-3 font-bold text-sky-600">Selasa</td>
                  <td class="border p-3">1</td>
                  <td class="border p-3">07.30-08.15</td>
                  <td class="border p-3">Agama</td>
                  <td class="border p-3">6</td>
                </tr>
                <tr class="hover:bg-sky-50 dark:hover:bg-sky-950/10">
                  <td class="border p-3">2</td>
                  <td class="border p-3">08.15-09.00</td>
                  <td class="border p-3">Agama</td>
                  <td class="border p-3">6</td>
                </tr>
                <tr class="bg-sky-50/30 dark:bg-sky-950/10 hover:bg-sky-50/50 transition-colors">
                  <td class="border p-3 text-center text-zinc-400 dark:text-zinc-500 font-mono">-</td>
                  <td class="border p-3 font-mono text-zinc-500 dark:text-zinc-400">09.00-09.30</td>
                  <td class="border p-3">
                    <span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-sky-100 dark:bg-sky-900/30 text-sky-700 dark:text-sky-300">
                      ☕ Istirahat Pertama
                    </span>
                  </td>
                  <td class="border p-3 text-center text-zinc-400 dark:text-zinc-500 font-mono">-</td>
                </tr>
                <tr class="hover:bg-sky-50 dark:hover:bg-sky-950/10">
                  <td class="border p-3">3</td>
                  <td class="border p-3">09.30-10.10</td>
                  <td class="border p-3">B. Mandarin</td>
                  <td class="border p-3">1</td>
                </tr>
                <tr class="hover:bg-sky-50 dark:hover:bg-sky-950/10">
                  <td class="border p-3">4</td>
                  <td class="border p-3">10.10-10.50</td>
                  <td class="border p-3">B. Mandarin</td>
                  <td class="border p-3">1</td>
                </tr>
                <tr class="hover:bg-sky-50 dark:hover:bg-sky-950/10">
                  <td class="border p-3">5</td>
                  <td class="border p-3">10.50-11.30</td>
                  <td class="border p-3">B. Indonesia</td>
                  <td class="border p-3">17</td>
                </tr>
                <tr class="hover:bg-sky-50 dark:hover:bg-sky-950/10">
                  <td class="border p-3">6</td>
                  <td class="border p-3">11.30-12.10</td>
                  <td class="border p-3">B. Indonesia</td>
                  <td class="border p-3">17</td>
                </tr>
                <tr class="bg-sky-50/30 dark:bg-sky-950/10 hover:bg-sky-50/50 transition-colors">
                  <td class="border p-3 text-center text-zinc-400 dark:text-zinc-500 font-mono">-</td>
                  <td class="border p-3 font-mono text-zinc-500 dark:text-zinc-400">12.10-12.40</td>
                  <td class="border p-3">
                    <span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-sky-100 dark:bg-sky-900/30 text-sky-700 dark:text-sky-300">
                      🍱 Istirahat Kedua
                    </span>
                  </td>
                  <td class="border p-3 text-center text-zinc-400 dark:text-zinc-500 font-mono">-</td>
                </tr>
                <tr class="hover:bg-sky-50 dark:hover:bg-sky-950/10">
                  <td class="border p-3">8</td>
                  <td class="border p-3">12.40-13.20</td>
                  <td class="border p-3">Matematika Minat</td>
                  <td class="border p-3">10</td>
                </tr>
                <tr class="hover:bg-sky-50 dark:hover:bg-sky-950/10">
                  <td class="border p-3">9</td>
                  <td class="border p-3">13.20-14.00</td>
                  <td class="border p-3">Matematika Minat</td>
                  <td class="border p-3">10</td>
                </tr>
                <tr class="hover:bg-sky-50 dark:hover:bg-sky-950/10">
                  <td class="border p-3">10</td>
                  <td class="border p-3">14.00-14.40</td>
                  <td class="border p-3">Matematika Minat</td>
                  <td class="border p-3">10</td>
                </tr>
                <tr class="hover:bg-sky-50 dark:hover:bg-sky-950/10">
                  <td class="border p-3">11</td>
                  <td class="border p-3">14.40-15.20</td>
                  <td class="border p-3">Ekonomi</td>
                  <td class="border p-3">4</td>
                </tr>

                <!-- RABU -->
                <tr class="bg-purple-50 dark:bg-purple-950/20 hover:bg-purple-100 transition">
                  <td rowspan="12" class="border p-3 font-bold text-purple-600">Rabu</td>
                  <td class="border p-3">1</td>
                  <td class="border p-3">07.30-08.15</td>
                  <td class="border p-3">Mandarin</td>
                  <td class="border p-3">1</td>
                </tr>
                <tr class="hover:bg-purple-50 dark:hover:bg-purple-950/10">
                  <td class="border p-3">2</td>
                  <td class="border p-3">08.15-09.00</td>
                  <td class="border p-3">Mandarin</td>
                  <td class="border p-3">1</td>
                </tr>
                <tr class="bg-purple-50/30 dark:bg-purple-950/10 hover:bg-purple-50/50 transition-colors">
                  <td class="border p-3 text-center text-zinc-400 dark:text-zinc-500 font-mono">-</td>
                  <td class="border p-3 font-mono text-zinc-500 dark:text-zinc-400">09.00-09.30</td>
                  <td class="border p-3">
                    <span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300">
                      ☕ Istirahat Pertama
                    </span>
                  </td>
                  <td class="border p-3 text-center text-zinc-400 dark:text-zinc-500 font-mono">-</td>
                </tr>
                <tr class="hover:bg-purple-50 dark:hover:bg-purple-950/10">
                  <td class="border p-3">3</td>
                  <td class="border p-3">09.30-10.10</td>
                  <td class="border p-3">PJOK</td>
                  <td class="border p-3">20</td>
                </tr>
                <tr class="hover:bg-purple-50 dark:hover:bg-purple-950/10">
                  <td class="border p-3">4</td>
                  <td class="border p-3">10.10-10.50</td>
                  <td class="border p-3">PJOK</td>
                  <td class="border p-3">20</td>
                </tr>
                <tr class="hover:bg-purple-50 dark:hover:bg-purple-950/10">
                  <td class="border p-3">5</td>
                  <td class="border p-3">10.50-11.30</td>
                  <td class="border p-3">Sosiologi</td>
                  <td class="border p-3">3</td>
                </tr>
                <tr class="hover:bg-purple-50 dark:hover:bg-purple-950/10">
                  <td class="border p-3">6</td>
                  <td class="border p-3">11.30-12.10</td>
                  <td class="border p-3">Sosiologi</td>
                  <td class="border p-3">3</td>
                </tr>
                <tr class="bg-purple-50/30 dark:bg-purple-950/10 hover:bg-purple-50/50 transition-colors">
                  <td class="border p-3 text-center text-zinc-400 dark:text-zinc-500 font-mono">-</td>
                  <td class="border p-3 font-mono text-zinc-500 dark:text-zinc-400">12.10-12.40</td>
                  <td class="border p-3">
                    <span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300">
                      🍱 Istirahat Kedua
                    </span>
                  </td>
                  <td class="border p-3 text-center text-zinc-400 dark:text-zinc-500 font-mono">-</td>
                </tr>
                <tr class="hover:bg-purple-50 dark:hover:bg-purple-950/10">
                  <td class="border p-3">8</td>
                  <td class="border p-3">12.40-13.20</td>
                  <td class="border p-3">Sejarah</td>
                  <td class="border p-3">2</td>
                </tr>
                <tr class="hover:bg-purple-50 dark:hover:bg-purple-950/10">
                  <td class="border p-3">9</td>
                  <td class="border p-3">13.20-14.00</td>
                  <td class="border p-3">Sejarah</td>
                  <td class="border p-3">2</td>
                </tr>
                <tr class="hover:bg-purple-50 dark:hover:bg-purple-950/10">
                  <td class="border p-3">10</td>
                  <td class="border p-3">14.00-14.40</td>
                  <td class="border p-3">Seni Budaya</td>
                  <td class="border p-3">5</td>
                </tr>
                <tr class="hover:bg-purple-50 dark:hover:bg-purple-950/10">
                  <td class="border p-3">11</td>
                  <td class="border p-3">14.40-15.20</td>
                  <td class="border p-3">Seni Budaya</td>
                  <td class="border p-3">5</td>
                </tr>

                <!-- KAMIS -->
                <tr class="bg-amber-50 dark:bg-amber-950/20 hover:bg-amber-100 transition">
                  <td rowspan="12" class="border p-3 font-bold text-amber-600">Kamis</td>
                  <td class="border p-3">1</td>
                  <td class="border p-3">06.45-07.30</td>
                  <td class="border p-3">Informatika</td>
                  <td class="border p-3">22</td>
                </tr>
                <tr class="hover:bg-amber-50 dark:hover:bg-amber-950/10">
                  <td class="border p-3">2</td>
                  <td class="border p-3">07.30-08.15</td>
                  <td class="border p-3">Informatika</td>
                  <td class="border p-3">22</td>
                </tr>
                <tr class="hover:bg-amber-50 dark:hover:bg-amber-950/10">
                  <td class="border p-3">3</td>
                  <td class="border p-3">08.15-09.00</td>
                  <td class="border p-3">Matematika Wajib</td>
                  <td class="border p-3">10</td>
                </tr>
                <tr class="bg-amber-50/30 dark:bg-amber-950/10 hover:bg-amber-50/50 transition-colors">
                  <td class="border p-3 text-center text-zinc-400 dark:text-zinc-500 font-mono">-</td>
                  <td class="border p-3 font-mono text-zinc-500 dark:text-zinc-400">09.00-09.30</td>
                  <td class="border p-3">
                    <span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300">
                      ☕ Istirahat Pertama
                    </span>
                  </td>
                  <td class="border p-3 text-center text-zinc-400 dark:text-zinc-500 font-mono">-</td>
                </tr>
                <tr class="hover:bg-amber-50 dark:hover:bg-amber-950/10">
                  <td class="border p-3">4</td>
                  <td class="border p-3">09.30-10.15</td>
                  <td class="border p-3">Matematika Wajib</td>
                  <td class="border p-3">10</td>
                </tr>
                <tr class="hover:bg-amber-50 dark:hover:bg-amber-950/10">
                  <td class="border p-3">5</td>
                  <td class="border p-3">10.15-11.00</td>
                  <td class="border p-3">PKN</td>
                  <td class="border p-3">2</td>
                </tr>
                <tr class="hover:bg-amber-50 dark:hover:bg-amber-950/10">
                  <td class="border p-3">6</td>
                  <td class="border p-3">11.00-11.45</td>
                  <td class="border p-3">PKN</td>
                  <td class="border p-3">2</td>
                </tr>
                <tr class="bg-amber-50/30 dark:bg-amber-950/10 hover:bg-amber-50/50 transition-colors">
                  <td class="border p-3 text-center text-zinc-400 dark:text-zinc-500 font-mono">-</td>
                  <td class="border p-3 font-mono text-zinc-500 dark:text-zinc-400">11.45-12.30</td>
                  <td class="border p-3">
                    <span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300">
                      🍱 Makan Bersama
                    </span>
                  </td>
                  <td class="border p-3 text-center text-zinc-400 dark:text-zinc-500 font-mono">-</td>
                </tr>
                <tr class="hover:bg-amber-50 dark:hover:bg-amber-950/10">
                  <td class="border p-3">7</td>
                  <td class="border p-3">12.30-13.15</td>
                  <td class="border p-3">Inggris</td>
                  <td class="border p-3">27</td>
                </tr>
                <tr class="hover:bg-amber-50 dark:hover:bg-amber-950/10">
                  <td class="border p-3">8</td>
                  <td class="border p-3">13.15-13.55</td>
                  <td class="border p-3">Inggris</td>
                  <td class="border p-3">27</td>
                </tr>
                <tr class="hover:bg-amber-50 dark:hover:bg-amber-950/10">
                  <td class="border p-3">9</td>
                  <td class="border p-3">13.55-14.35</td>
                  <td class="border p-3">Inggris</td>
                  <td class="border p-3">27</td>
                </tr>
                <tr class="hover:bg-amber-50 dark:hover:bg-amber-950/10">
                  <td class="border p-3">10</td>
                  <td class="border p-3">14.35-15.15</td>
                  <td class="border p-3">Ekonomi</td>
                  <td class="border p-3">4</td>
                </tr>

                <!-- JUMAT -->
                <tr class="bg-rose-50 dark:bg-rose-950/20 hover:bg-rose-100 transition">
                  <td rowspan="10" class="border p-3 font-bold text-rose-600">Jumat</td>
                  <td class="border p-3">1</td>
                  <td class="border p-3">07.15-08.00</td>
                  <td class="border p-3">PKWU</td>
                  <td class="border p-3">4</td>
                </tr>
                <tr class="hover:bg-rose-50 dark:hover:bg-rose-950/10">
                  <td class="border p-3">2</td>
                  <td class="border p-3">08.00-08.45</td>
                  <td class="border p-3">PKWU</td>
                  <td class="border p-3">4</td>
                </tr>
                <tr class="bg-rose-50/30 dark:bg-rose-950/10 hover:bg-rose-50/50 transition-colors">
                  <td class="border p-3 text-center text-zinc-400 dark:text-zinc-500 font-mono">-</td>
                  <td class="border p-3 font-mono text-zinc-500 dark:text-zinc-400">08.45-09.15</td>
                  <td class="border p-3">
                    <span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-rose-100 dark:bg-rose-900/30 text-rose-700 dark:text-rose-300">
                      ☕ Istirahat Pertama
                    </span>
                  </td>
                  <td class="border p-3 text-center text-zinc-400 dark:text-zinc-500 font-mono">-</td>
                </tr>
                <tr class="hover:bg-rose-50 dark:hover:bg-rose-950/10">
                  <td class="border p-3">3</td>
                  <td class="border p-3">09.15-10.00</td>
                  <td class="border p-3">PJOK</td>
                  <td class="border p-3">20</td>
                </tr>
                <tr class="hover:bg-rose-50 dark:hover:bg-rose-950/10">
                  <td class="border p-3">4</td>
                  <td class="border p-3">10.00-10.45</td>
                  <td class="border p-3">PJOK</td>
                  <td class="border p-3">20</td>
                </tr>
                <tr class="hover:bg-rose-50 dark:hover:bg-rose-950/10">
                  <td class="border p-3">5</td>
                  <td class="border p-3">10.45-11.30</td>
                  <td class="border p-3">B. Konseling</td>
                  <td class="border p-3">11</td>
                </tr>
                <tr class="bg-rose-50/30 dark:bg-rose-950/10 hover:bg-rose-50/50 transition-colors">
                  <td class="border p-3 text-center text-zinc-400 dark:text-zinc-500 font-mono">-</td>
                  <td class="border p-3 font-mono text-zinc-500 dark:text-zinc-400">11.30-12.30</td>
                  <td class="border p-3">
                    <span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-rose-100 dark:bg-rose-900/30 text-rose-700 dark:text-rose-300">
                      🕌 Jumat Ibadah
                    </span>
                  </td>
                  <td class="border p-3 text-center text-zinc-400 dark:text-zinc-500 font-mono">-</td>
                </tr>
                <tr class="bg-rose-50/30 dark:bg-rose-950/10 hover:bg-rose-50/50 transition-colors">
                  <td class="border p-3 text-center text-zinc-400 dark:text-zinc-500 font-mono">-</td>
                  <td class="border p-3 font-mono text-zinc-500 dark:text-zinc-400">12.30-13.00</td>
                  <td class="border p-3">
                    <span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-rose-100 dark:bg-rose-900/30 text-rose-700 dark:text-rose-300">
                      🍱 Istirahat Kedua
                    </span>
                  </td>
                  <td class="border p-3 text-center text-zinc-400 dark:text-zinc-500 font-mono">-</td>
                </tr>
                <tr class="hover:bg-rose-50 dark:hover:bg-rose-950/10">
                  <td class="border p-3">6</td>
                  <td class="border p-3">13.00-13.45</td>
                  <td class="border p-3">Geografi</td>
                  <td class="border p-3">14</td>
                </tr>
                <tr class="hover:bg-rose-50 dark:hover:bg-rose-950/10">
                  <td class="border p-3">7</td>
                  <td class="border p-3">13.45-14.30</td>
                  <td class="border p-3">Geografi</td>
                  <td class="border p-3">14</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- ORBIT PROGRESS Harian -->
        <div class="glass-panel mt-8 p-7 rounded-[2rem] border border-pink-200/50 dark:border-pink-900/40 shadow-lg relative overflow-hidden bg-white/40 dark:bg-zinc-950/20">
          <div id="orbit-bg-glow" class="absolute -right-20 -bottom-20 w-80 h-80 rounded-full blur-[100px] opacity-20 pointer-events-none transition-all duration-1000 bg-pink-500"></div>
          <div id="orbit-bg-glow-2" class="absolute -left-20 -top-20 w-80 h-80 rounded-full blur-[100px] opacity-15 pointer-events-none transition-all duration-1000 bg-purple-500"></div>
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div class="lg:col-span-5 flex flex-col items-center justify-center relative min-h-[380px]">
              <div class="orbit-stage-container w-full h-[340px] flex items-center justify-center">
                <div class="relative w-full h-full max-w-[340px] flex items-center justify-center" id="orbit-system-viewport">
                  <div class="absolute w-12 h-12 rounded-full bg-gradient-to-r from-amber-400 via-orange-500 to-yellow-300 animate-pulse shadow-[0_0_35px_rgba(245,158,11,0.6)] z-20 flex items-center justify-center text-white font-bold select-none border border-orange-300/40">
                    ☀️
                  </div>
                  <div id="orbit-rings-container" class="absolute inset-0 flex items-center justify-center" style="perspective: 1000px;">
                    <div class="absolute w-[280px] h-[280px] border border-dashed border-zinc-700/30 dark:border-zinc-800/40 rounded-full" style="transform: rotateX(70deg) rotateY(-10deg);"></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="lg:col-span-7 space-y-5">
              <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-50 border border-pink-100 text-[10px] font-bold uppercase tracking-wider text-pink-600 dark:bg-pink-950/30 dark:border-pink-900/50 dark:text-pink-400">
                    <span class="w-1.5 h-1.5 rounded-full bg-pink-500 animate-ping"></span>
                    <span id="orbit-badge-text">Orbit Hari Ini</span>
                  </span>
                  <h3 class="text-2xl font-bold text-zinc-900 dark:text-white mt-1.5 font-serif">🌌 Orbit Progress Pelajaran</h3>
                </div>
                <div class="flex items-center gap-2 bg-zinc-100 dark:bg-zinc-900 p-1 rounded-xl self-start sm:self-center border border-zinc-200/50 dark:border-zinc-800/50">
                  <button id="orbit-mode-auto" onclick="setOrbitMode('auto')" class="px-3 py-1.5 rounded-lg text-xs font-bold transition-all bg-white dark:bg-zinc-800 text-pink-600 dark:text-pink-400 shadow-sm cursor-pointer">⏱️ Waktu Nyata</button>
                  <button id="orbit-mode-manual" onclick="setOrbitMode('manual')" class="px-3 py-1.5 rounded-lg text-xs font-bold transition-all text-zinc-500 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-200 cursor-pointer">🎮 Simulasi</button>
                </div>
              </div>
              <p class="text-xs text-zinc-500 leading-relaxed">Ketika satu sesi pelajaran hari ini selesai dilewati, satu planet baru akan menyala dan mulai mengorbit pada sistem bintang portofoliomu. Sistem ini tereset otomatis setiap pergantian hari.</p>
              <div id="orbit-timeline-container" class="space-y-2 max-h-[180px] overflow-y-auto pr-1 scrollbar-thin"></div>
              <div class="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-zinc-100 dark:border-zinc-800/50 text-[10px] text-zinc-400 dark:text-zinc-500">
                <div class="flex items-center gap-3">
                  <span class="flex items-center gap-1"><span class="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block"></span> Selesai (Planet Mengorbit)</span>
                  <span class="flex items-center gap-1"><span class="w-2.5 h-2.5 rounded-full bg-zinc-300 dark:bg-zinc-700 inline-block border border-dashed border-zinc-400"></span> Belum Mulai</span>
                </div>
                <button id="orbit-reset-btn" onclick="resetManualOrbit()" class="hidden px-2.5 py-1 rounded-lg bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 font-bold hover:bg-pink-50 dark:hover:bg-pink-950/20 hover:text-pink-600 dark:hover:text-pink-400 transition-all cursor-pointer">↻ Reset Simulasi</button>
              </div>
            </div>
          </div>
        </div>

      </section>
"@

# Replace the Profil section marker in index.html with the new section + Profil section marker
$searchMarker = "    <!-- SECTION 2: PROFIL -->"
$replaceContent = $scheduleHTML + "`n`n" + $searchMarker

if ($content.Contains($searchMarker)) {
    $content = $content.Replace($searchMarker, $replaceContent)
    [System.IO.File]::WriteAllText($targetPath, $content)
    Write-Output "Successfully inserted schedule section into index.html!"
} else {
    Write-Error "Could not find Profil section marker in index.html"
}
