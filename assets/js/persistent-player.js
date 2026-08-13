(function () {
  // Playlist definition
  const localPlaylist = [
    {
      title: "The One That Got Away",
      artist: "Katy Perry",
      src: "assets/The One That Got Away.mp4"
    },
    {
      title: "Lose",
      artist: "NIKI",
      src: "assets/Lose.mp4"
    },
    {
      title: "Enchanted",
      artist: "Taylor Swift",
      src: "assets/Enchanted.mp4"
    }
  ];

  // Player state
  let currentSongIndex = 0;
  let isPlaying = false;
  let isMinimized = false;
  let isDragging = false;
  let dragStartX = 0;
  let dragStartY = 0;
  let playerX = window.innerWidth - 350;
  let playerY = window.innerHeight - 300;
  let dragMoved = false; // flag to distinguish drag from click

  // DOM Elements references
  let playerContainer = null;
  let audioEl = null;

  // Initialize persistent player
  function init() {
    // 1. Create or bind audio element
    audioEl = document.getElementById('local-audio-player');
    if (!audioEl) {
      audioEl = document.createElement('audio');
      audioEl.id = 'local-audio-player';
      audioEl.preload = 'auto';
      document.body.appendChild(audioEl);
    }

    // Load saved state
    loadSavedState();

    // Set initial source
    if (!audioEl.src) {
      audioEl.src = localPlaylist[currentSongIndex].src;
    }

    // 2. Create floating player container in body if not exists
    playerContainer = document.getElementById('persistent-player-container');
    if (!playerContainer) {
      playerContainer = document.createElement('div');
      playerContainer.id = 'persistent-player-container';
      document.body.appendChild(playerContainer);
    }

    // 3. Setup event listeners for audio
    setupAudioListeners();

    // 4. Render correct player markup depending on page
    renderPlayerMarkup();

    // 5. Initial Volume Sync
    audioEl.volume = parseFloat(localStorage.getItem('alika_player_volume') || '0.7');
    syncVolumeInputs();
  }

  function loadSavedState() {
    currentSongIndex = parseInt(localStorage.getItem('alika_player_song_idx') || '0', 10);
    isMinimized = localStorage.getItem('alika_player_minimized') === 'true';

    const savedX = localStorage.getItem('alika_player_x');
    const savedY = localStorage.getItem('alika_player_y');
    if (savedX !== null) playerX = parseInt(savedX, 10);
    if (savedY !== null) playerY = parseInt(savedY, 10);

    // Validate bounds in case screen size changed
    clampPosition();
  }

  function saveState() {
    localStorage.setItem('alika_player_song_idx', currentSongIndex);
    localStorage.setItem('alika_player_minimized', isMinimized);
    localStorage.setItem('alika_player_x', playerX);
    localStorage.setItem('alika_player_y', playerY);
    if (audioEl) {
      localStorage.setItem('alika_player_volume', audioEl.volume);
    }
  }

  function clampPosition() {
    const maxX = window.innerWidth - (isMinimized ? 60 : 330);
    const maxY = window.innerHeight - (isMinimized ? 60 : 250);
    playerX = Math.max(10, Math.min(playerX, maxX));
    playerY = Math.max(10, Math.min(playerY, maxY));
  }

  function renderPlayerMarkup() {
    const path = window.location.pathname.split('/').pop() || 'index.html';
    const isHome = (path === 'index.html' || path === '');

    if (isHome) {
      // DOCKED INLINE MODE (Homepage)
      // Clean up any active floating DOM elements
      const trigger = document.getElementById('float-note-trigger');
      if (trigger) trigger.remove();
      const card = document.getElementById('float-player-card');
      if (card) card.remove();

      // Render docked inside sidebar container
      const sidebarContainer = document.getElementById('local-player-sidebar-container');
      if (!sidebarContainer) {
        // If container not yet in DOM, retry shortly
        setTimeout(renderPlayerMarkup, 50);
        return;
      }

      const activeSong = localPlaylist[currentSongIndex];
      sidebarContainer.innerHTML = `
        <div id="docked-player-card" class="p-5 py-6 space-y-4 min-h-[190px] rounded-2xl bg-gradient-to-br from-pink-50/40 to-purple-50/30 dark:from-pink-950/10 dark:to-zinc-900/40 border border-purple-100/50 dark:border-zinc-800/40 shadow-sm flex flex-col justify-between relative overflow-hidden">
          <!-- Header -->
          <div class="flex items-center justify-between">
            <span class="text-[9px] font-bold uppercase tracking-wider text-purple-500 dark:text-purple-400 font-mono">Now Playing</span>
            <span class="flex h-2 w-2 relative">
              <span id="docked-live-ping" class="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 ${isPlaying ? 'animate-ping' : 'hidden'}"></span>
              <span id="docked-live-dot" class="relative inline-flex rounded-full h-2 w-2 ${isPlaying ? 'bg-emerald-500' : 'bg-zinc-400'} transition-colors duration-300"></span>
            </span>
          </div>

          <!-- Song Info -->
          <div class="flex items-center justify-between gap-3">
            <div class="min-w-0 flex-1">
              <p id="docked-title" class="text-xs font-bold text-zinc-850 dark:text-zinc-200 truncate font-serif italic">${activeSong.title}</p>
              <p id="docked-artist" class="text-[9px] text-zinc-400 dark:text-zinc-500 truncate font-mono">${activeSong.artist}</p>
            </div>
            <!-- CD vinyl cover rotating -->
            <div class="player-vinyl ${isPlaying ? '' : 'paused'} w-12 h-12 flex-shrink-0"></div>
          </div>

          <!-- Waveform / progress bar -->
          <div class="space-y-1">
            <input type="range" id="docked-timeline" class="player-range" min="0" max="100" value="0">
            <div class="flex justify-between text-[8px] font-mono text-zinc-400">
              <span id="docked-time-curr">00:00</span>
              <span id="docked-time-dur">00:00</span>
            </div>
          </div>

          <!-- Controls row -->
          <div class="flex items-center justify-between gap-2">
            <div class="flex items-center gap-2.5 text-zinc-400 dark:text-zinc-500 pt-0.5">
              <button id="docked-prev-btn" class="hover:text-pink-500 dark:hover:text-pink-400 transition-colors cursor-pointer" title="Sebelumnya">
                <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 6h2v12H6zm3.5 6L18 6v12z" />
                </svg>
              </button>
              <button id="docked-play-btn" class="w-6 h-6 rounded-full bg-pink-100 dark:bg-pink-900/60 text-pink-600 dark:text-pink-400 flex items-center justify-center shadow-sm hover:scale-105 transition-transform cursor-pointer" title="Putar/Jeda">
                <svg id="docked-play-icon" class="w-2.5 h-2.5 fill-current ml-0.5" viewBox="0 0 24 24">
                  ${isPlaying ? '<path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>' : '<path d="M8 5v14l11-7z"/>'}
                </svg>
              </button>
              <button id="docked-next-btn" class="hover:text-pink-500 dark:hover:text-pink-400 transition-colors cursor-pointer" title="Selanjutnya">
                <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 18V6l8.5 6zm10-12h2v12h-2z" />
                </svg>
              </button>
            </div>

            <!-- Volume slider -->
            <div class="flex items-center gap-1.5 w-20">
              <svg class="w-3 h-3 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
              </svg>
              <input type="range" id="docked-volume" class="player-range" min="0" max="1" step="0.05" value="0.7">
            </div>

            <!-- Playlist toggle -->
            <button id="docked-playlist-btn" class="p-1.5 rounded-lg text-zinc-500 hover:text-pink-600 dark:text-zinc-400 dark:hover:text-pink-400 transition-colors cursor-pointer" title="Daftar Putar">
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          <!-- Playlist collapsible container -->
          <div id="docked-playlist-panel" class="hidden border-t border-purple-100/30 dark:border-zinc-800/40 pt-2 space-y-1">
            <p class="text-[8px] font-bold text-zinc-400 uppercase tracking-widest font-mono px-1">Daftar Lagu</p>
            <div id="docked-songs-list" class="player-playlist-dropdown space-y-1"></div>
          </div>
        </div>
      `;
      setupDockedControls();
      renderPlaylistItems('docked');
      syncVolumeInputs();
      syncTrackProgress();
    } else {
      // FLOATING MODE (Subpages)
      // Clean up docked HTML player reference
      const docked = document.getElementById('docked-player-card');
      if (docked) docked.remove();

      // Only show the floating player on other pages if music is active/playing
      if (isPlaying || audioEl.currentTime > 0) {
        if (isMinimized) {
          // Remove floating card if exists
          const card = document.getElementById('float-player-card');
          if (card) card.remove();

          if (!document.getElementById('float-note-trigger')) {
            const trigger = document.createElement('div');
            trigger.id = 'float-note-trigger';
            trigger.className = `minimized-music-trigger ${isPlaying ? 'playing-pulse' : ''}`;
            trigger.style.left = `${playerX}px`;
            trigger.style.top = `${playerY}px`;
            trigger.innerHTML = `
              <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
              </svg>
            `;
            playerContainer.appendChild(trigger);
            setupMinimizedDrag();
          } else {
            updatePlayerPosition();
            updateUIPlayState();
          }
        } else {
          // Remove trigger if exists
          const trigger = document.getElementById('float-note-trigger');
          if (trigger) trigger.remove();

          let card = document.getElementById('float-player-card');
          if (!card) {
            card = document.createElement('div');
            card.id = 'float-player-card';
            card.className = 'floating-player-card p-4 space-y-3';
            card.style.left = `${playerX}px`;
            card.style.top = `${playerY}px`;
            playerContainer.appendChild(card);
          }

          const activeSong = localPlaylist[currentSongIndex];
          card.innerHTML = `
            <!-- Top bar with drag handle and close -->
            <div class="player-drag-handle flex items-center justify-between border-b border-purple-100/30 dark:border-zinc-800/40 pb-2">
              <div class="flex items-center gap-1 text-zinc-400 dark:text-zinc-500">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
                <span class="text-[9px] uppercase font-mono tracking-wider font-bold">Musik Mengambang</span>
              </div>
              <button id="float-btn-minimize" class="p-1 rounded-lg hover:bg-pink-100 dark:hover:bg-zinc-800 text-zinc-450 dark:text-zinc-400 transition-colors" title="Minimize">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </button>
            </div>

            <!-- Song Info Section -->
            <div class="flex items-center gap-3">
              <div id="float-vinyl" class="player-vinyl ${isPlaying ? '' : 'paused'} flex-shrink-0"></div>
              <div class="min-w-0 flex-1">
                <div class="overflow-hidden">
                  <div id="float-title" class="text-xs font-bold text-zinc-800 dark:text-zinc-100 truncate font-serif italic">${activeSong.title}</div>
                </div>
                <div id="float-artist" class="text-[9px] text-zinc-400 dark:text-zinc-505 truncate font-mono">${activeSong.artist}</div>
                <div class="flex items-center gap-2 mt-1">
                  <div class="micro-wave">
                    <div class="wave-bar ${isPlaying ? '' : 'paused'}"></div>
                    <div class="wave-bar ${isPlaying ? '' : 'paused'}"></div>
                    <div class="wave-bar ${isPlaying ? '' : 'paused'}"></div>
                    <div class="wave-bar ${isPlaying ? '' : 'paused'}"></div>
                  </div>
                  <span class="text-[8px] font-bold text-pink-500 uppercase tracking-widest font-mono">PLAYING</span>
                </div>
              </div>
            </div>

            <!-- Timeline Slider -->
            <div class="space-y-1">
              <input type="range" id="float-timeline" class="player-range" min="0" max="100" value="0">
              <div class="flex justify-between text-[8px] font-mono text-zinc-400">
                <span id="float-time-curr">00:00</span>
                <span id="float-time-dur">00:00</span>
              </div>
            </div>

            <!-- Controls Section -->
            <div class="flex items-center justify-between gap-2">
              <div class="flex items-center gap-2">
                <button id="float-prev-btn" class="p-1.5 rounded-lg text-zinc-500 hover:text-pink-600 dark:text-zinc-400 dark:hover:text-pink-400 transition-colors" title="Sebelumnya">
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6 6h2v12H6zm3.5 6L18 6v12z" />
                  </svg>
                </button>
                <button id="float-play-btn" class="w-8 h-8 rounded-full bg-pink-500 text-white flex items-center justify-center shadow-md hover:scale-105 transition-transform" title="Putar/Jeda">
                  <svg id="float-play-icon" class="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    ${isPlaying ? '<path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>' : '<path d="M8 5v14l11-7z"/>'}
                  </svg>
                </button>
                <button id="float-next-btn" class="p-1.5 rounded-lg text-zinc-500 hover:text-pink-600 dark:text-zinc-400 dark:hover:text-pink-400 transition-colors" title="Berikutnya">
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6 18V6l8.5 6zm10-12h2v12h-2z" />
                  </svg>
                </button>
              </div>

              <!-- Volume Slider -->
              <div class="flex items-center gap-1.5 w-24">
                <svg class="w-3 h-3 text-zinc-400" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
                </svg>
                <input type="range" id="float-volume" class="player-range" min="0" max="1" step="0.05" value="0.7">
              </div>

              <!-- Playlist toggle -->
              <button id="float-playlist-btn" class="p-1.5 rounded-lg text-zinc-500 hover:text-pink-600 dark:text-zinc-400 dark:hover:text-pink-400 transition-colors" title="Daftar Putar">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                </svg>
              </button>
            </div>

            <!-- Collapsible Playlist -->
            <div id="float-playlist-panel" class="hidden border-t border-purple-100/30 dark:border-zinc-800/40 pt-2 space-y-1">
              <p class="text-[8px] font-bold text-zinc-400 uppercase tracking-widest font-mono px-1">Daftar Lagu</p>
              <div id="float-songs-list" class="player-playlist-dropdown space-y-1"></div>
            </div>
          `;
          setupCardDrag();
          setupCardControls();
          renderPlaylistItems('float');
          updatePlayerPosition();
          updateUIPlayState();
          syncVolumeInputs();
          syncTrackProgress();
        }
      } else {
        // If not playing and not active, clean up all floating UI on other pages
        const trigger = document.getElementById('float-note-trigger');
        if (trigger) trigger.remove();
        const card = document.getElementById('float-player-card');
        if (card) card.remove();
      }
    }
  }

  function setupMinimizedDrag() {
    const trigger = document.getElementById('float-note-trigger');
    if (!trigger) return;

    trigger.addEventListener('pointerdown', (e) => {
      isDragging = true;
      dragStartX = e.clientX - playerX;
      dragStartY = e.clientY - playerY;
      dragMoved = false;
      trigger.setPointerCapture(e.pointerId);
    });

    trigger.addEventListener('pointermove', (e) => {
      if (!isDragging) return;

      const newX = e.clientX - dragStartX;
      const newY = e.clientY - dragStartY;

      if (Math.abs(newX - playerX) > 4 || Math.abs(newY - playerY) > 4) {
        dragMoved = true;
      }

      playerX = newX;
      playerY = newY;
      clampPosition();
      trigger.style.left = `${playerX}px`;
      trigger.style.top = `${playerY}px`;
    });

    trigger.addEventListener('pointerup', (e) => {
      if (!isDragging) return;
      isDragging = false;
      trigger.releasePointerCapture(e.pointerId);
      saveState();

      // If it was just a click (hardly moved), expand the player
      if (!dragMoved) {
        isMinimized = false;
        saveState();
        renderPlayerMarkup();
      }
    });
  }

  function setupCardDrag() {
    const card = document.getElementById('float-player-card');
    const handle = card.querySelector('.player-drag-handle');
    if (!card || !handle) return;

    handle.addEventListener('pointerdown', (e) => {
      isDragging = true;
      dragStartX = e.clientX - playerX;
      dragStartY = e.clientY - playerY;
      handle.setPointerCapture(e.pointerId);
    });

    handle.addEventListener('pointermove', (e) => {
      if (!isDragging) return;
      playerX = e.clientX - dragStartX;
      playerY = e.clientY - dragStartY;
      clampPosition();
      card.style.left = `${playerX}px`;
      card.style.top = `${playerY}px`;
    });

    handle.addEventListener('pointerup', (e) => {
      if (!isDragging) return;
      isDragging = false;
      handle.releasePointerCapture(e.pointerId);
      saveState();
    });
  }

  function setupCardControls() {
    const playBtn = document.getElementById('float-play-btn');
    const prevBtn = document.getElementById('float-prev-btn');
    const nextBtn = document.getElementById('float-next-btn');
    const minBtn = document.getElementById('float-btn-minimize');
    const playlistBtn = document.getElementById('float-playlist-btn');
    const timeline = document.getElementById('float-timeline');
    const volume = document.getElementById('float-volume');

    if (playBtn) playBtn.addEventListener('click', togglePlay);
    if (prevBtn) prevBtn.addEventListener('click', playPrev);
    if (nextBtn) nextBtn.addEventListener('click', playNext);
    if (minBtn) {
      minBtn.addEventListener('click', () => {
        isMinimized = true;
        saveState();
        renderPlayerMarkup();
      });
    }

    if (playlistBtn) {
      playlistBtn.addEventListener('click', () => {
        const panel = document.getElementById('float-playlist-panel');
        if (panel) panel.classList.toggle('hidden');
      });
    }

    if (timeline) {
      timeline.addEventListener('input', () => {
        if (!audioEl.duration) return;
        const targetSec = (timeline.value / 100) * audioEl.duration;
        audioEl.currentTime = targetSec;
      });
    }

    if (volume) {
      volume.addEventListener('input', () => {
        audioEl.volume = volume.value;
        saveState();
        syncVolumeInputs();
      });
    }
  }

  function setupDockedControls() {
    const playBtn = document.getElementById('docked-play-btn');
    const prevBtn = document.getElementById('docked-prev-btn');
    const nextBtn = document.getElementById('docked-next-btn');
    const playlistBtn = document.getElementById('docked-playlist-btn');
    const timeline = document.getElementById('docked-timeline');
    const volume = document.getElementById('docked-volume');

    if (playBtn) playBtn.addEventListener('click', togglePlay);
    if (prevBtn) prevBtn.addEventListener('click', playPrev);
    if (nextBtn) nextBtn.addEventListener('click', playNext);

    if (playlistBtn) {
      playlistBtn.addEventListener('click', () => {
        const panel = document.getElementById('docked-playlist-panel');
        if (panel) panel.classList.toggle('hidden');
      });
    }

    if (timeline) {
      timeline.addEventListener('input', () => {
        if (!audioEl.duration) return;
        audioEl.currentTime = (timeline.value / 100) * audioEl.duration;
      });
    }

    if (volume) {
      volume.addEventListener('input', () => {
        audioEl.volume = volume.value;
        saveState();
        syncVolumeInputs();
      });
    }
  }

  function renderPlaylistItems(prefix) {
    const list = document.getElementById(`${prefix}-songs-list`);
    if (!list) return;

    list.innerHTML = localPlaylist.map((song, idx) => {
      const isCurrent = idx === currentSongIndex;
      return `
        <div data-song-idx="${idx}" class="${prefix}-song-item flex items-center justify-between p-1.5 rounded-lg text-[10px] cursor-pointer transition-colors duration-200 
          ${isCurrent
          ? 'bg-pink-500/10 text-pink-600 dark:text-pink-400 font-bold border border-pink-500/10'
          : 'text-zinc-600 dark:text-zinc-400 hover:bg-purple-50/50 dark:hover:bg-zinc-800/40'}">
          <div class="flex items-center gap-2 truncate">
            <span class="font-mono text-[9px]. w-3 text-zinc-400">${idx + 1}</span>
            <div class="truncate">
              <span class="block truncate font-serif italic">${song.title}</span>
              <span class="block text-[8px] text-zinc-400 dark:text-zinc-505 font-mono">${song.artist}</span>
            </div>
          </div>
          ${isCurrent ? '<span class="text-pink-500 animate-pulse text-[8px]">●</span>' : ''}
        </div>
      `;
    }).join('');

    // Event listener for selecting song
    list.querySelectorAll(`.${prefix}-song-item`).forEach(item => {
      item.addEventListener('click', () => {
        const idx = parseInt(item.getAttribute('data-song-idx'), 10);
        playSong(idx);
      });
    });
  }

  function togglePlay() {
    if (audioEl.paused) {
      audioEl.play().then(() => {
        isPlaying = true;
        updateUIPlayState();
      }).catch(err => console.log("Audio play failed:", err));
    } else {
      audioEl.pause();
      isPlaying = false;
      updateUIPlayState();
    }
  }

  function playSong(idx) {
    if (idx < 0 || idx >= localPlaylist.length) return;
    currentSongIndex = idx;
    saveState();

    audioEl.pause();
    audioEl.src = localPlaylist[currentSongIndex].src;
    audioEl.load();

    audioEl.play().then(() => {
      isPlaying = true;
      updateUIPlayState();
      updateSongInfo();
    }).catch(err => console.log("Audio play failed:", err));
  }

  function playNext() {
    const nextIdx = (currentSongIndex + 1) % localPlaylist.length;
    playSong(nextIdx);
  }

  function playPrev() {
    const prevIdx = (currentSongIndex - 1 + localPlaylist.length) % localPlaylist.length;
    playSong(prevIdx);
  }

  function syncVolumeInputs() {
    const v = audioEl ? audioEl.volume : 0.7;
    const floatVolume = document.getElementById('float-volume');
    if (floatVolume) floatVolume.value = v;
    const dockedVolume = document.getElementById('docked-volume');
    if (dockedVolume) dockedVolume.value = v;
  }

  function syncTrackProgress() {
    if (!audioEl) return;
    const currTime = audioEl.currentTime;
    const duration = audioEl.duration || 0;

    const floatTimeCurr = document.getElementById('float-time-curr');
    if (floatTimeCurr) floatTimeCurr.innerText = formatTime(currTime);
    const dockedTimeCurr = document.getElementById('docked-time-curr');
    if (dockedTimeCurr) dockedTimeCurr.innerText = formatTime(currTime);

    const floatTimeDur = document.getElementById('float-time-dur');
    if (floatTimeDur && duration > 0) floatTimeDur.innerText = formatTime(duration);
    const dockedTimeDur = document.getElementById('docked-time-dur');
    if (dockedTimeDur && duration > 0) dockedTimeDur.innerText = formatTime(duration);

    const floatTimeline = document.getElementById('float-timeline');
    if (floatTimeline && duration > 0) floatTimeline.value = (currTime / duration) * 100;
    const dockedTimeline = document.getElementById('docked-timeline');
    if (dockedTimeline && duration > 0) dockedTimeline.value = (currTime / duration) * 100;
  }

  function updateUIPlayState() {
    // 1. Update Play Icons
    const floatPlayIcon = document.getElementById('float-play-icon');
    if (floatPlayIcon) {
      floatPlayIcon.innerHTML = isPlaying
        ? '<path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>'
        : '<path d="M8 5v14l11-7z"/>';
    }
    const dockedPlayIcon = document.getElementById('docked-play-icon');
    if (dockedPlayIcon) {
      dockedPlayIcon.innerHTML = isPlaying
        ? '<path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>'
        : '<path d="M8 5v14l11-7z"/>';
    }

    // 2. Update CD Rotations
    const vinyls = document.querySelectorAll('.player-vinyl');
    vinyls.forEach(v => {
      if (isPlaying) v.classList.remove('paused');
      else v.classList.add('paused');
    });

    // 3. Update Soundwave lines
    const waveBars = document.querySelectorAll('.wave-bar');
    waveBars.forEach(bar => {
      if (isPlaying) bar.classList.remove('paused');
      else bar.classList.add('paused');
    });

    // 4. Update Docked Pulse/Pings
    const dockedPing = document.getElementById('docked-live-ping');
    const dockedDot = document.getElementById('docked-live-dot');
    if (dockedPing) {
      if (isPlaying) dockedPing.classList.remove('hidden');
      else dockedPing.classList.add('hidden');
    }
    if (dockedDot) {
      dockedDot.className = `relative inline-flex rounded-full h-2 w-2 transition-colors duration-300 ${isPlaying ? 'bg-emerald-500' : 'bg-zinc-400'}`;
    }

    // 5. Update Minimized Note Pulse
    const trigger = document.getElementById('float-note-trigger');
    if (trigger) {
      if (isPlaying) trigger.classList.add('playing-pulse');
      else trigger.classList.remove('playing-pulse');
    }
  }

  function updateSongInfo() {
    const activeSong = localPlaylist[currentSongIndex];

    const floatTitle = document.getElementById('float-title');
    const floatArtist = document.getElementById('float-artist');
    if (floatTitle) floatTitle.innerText = activeSong.title;
    if (floatArtist) floatArtist.innerText = activeSong.artist;

    const dockedTitle = document.getElementById('docked-title');
    const dockedArtist = document.getElementById('docked-artist');
    if (dockedTitle) dockedTitle.innerText = activeSong.title;
    if (dockedArtist) dockedArtist.innerText = activeSong.artist;

    renderPlaylistItems('float');
    renderPlaylistItems('docked');
  }

  function updatePlayerPosition() {
    if (isMinimized) {
      const trigger = document.getElementById('float-note-trigger');
      if (trigger) {
        trigger.style.left = `${playerX}px`;
        trigger.style.top = `${playerY}px`;
      }
    } else {
      const card = document.getElementById('float-player-card');
      if (card) {
        card.style.left = `${playerX}px`;
        card.style.top = `${playerY}px`;
      }
    }
  }

  function formatTime(secs) {
    if (isNaN(secs)) return "00:00";
    const minutes = Math.floor(secs / 60);
    const seconds = Math.floor(secs % 60);
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  }

  function setupAudioListeners() {
    audioEl.addEventListener('timeupdate', () => {
      syncTrackProgress();
    });

    audioEl.addEventListener('durationchange', () => {
      syncTrackProgress();
    });

    audioEl.addEventListener('ended', () => {
      playNext();
    });

    audioEl.addEventListener('play', () => {
      isPlaying = true;
      updateUIPlayState();
    });

    audioEl.addEventListener('pause', () => {
      isPlaying = false;
      updateUIPlayState();
    });
  }

  // Handle browser window resize to keep player inside bounds
  window.addEventListener('resize', () => {
    clampPosition();
    updatePlayerPosition();
  });

  // Re-expose public player API globally
  window.PersistentPlayer = {
    playNext: playNext,
    playPrev: prevIdx => playPrev(),
    togglePlay: togglePlay,
    playSong: playSong,
    getPlaylist: () => localPlaylist,
    getCurrentSong: () => localPlaylist[currentSongIndex],
    isPlaying: () => isPlaying,
    toggleMinimize: () => {
      isMinimized = !isMinimized;
      saveState();
      renderPlayerMarkup();
    },
    isMinimized: () => isMinimized,
    onPageTransition: () => {
      // Re-trigger player layout update on dynamic content swap
      renderPlayerMarkup();
    }
  };

  // Run initial setup when script runs
  if (document.readyState === 'complete' || document.readyState === 'interactive') {
    init();
  } else {
    document.addEventListener('DOMContentLoaded', init);
  }
})();
