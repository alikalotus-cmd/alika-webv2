// Sample Data Tugas Informatika
const dataInformatika = [
  {
    id: 'info-1',
    title: 'Website Portfolio Interaktif Berbasis Pastel Purple Theme',
    category: 'Web Dev',
    date: '18 Juli 2026',
    status: 'Selesai',
    score: '100 / 100',
    summary: 'Rancangan halaman web responsif berkonsep pastel ungu (soft lavender & violet) dengan Tailwind CSS, komponen interaktif, dan modal viewer.',
    tags: ['HTML5', 'Tailwind CSS', 'JavaScript', 'UI/UX'],
    fileSize: '1.2 MB',
    codeSnippet: `<!DOCTYPE html>
<html lang="id" class="dark scroll-smooth">
<head>
  <meta charset="UTF-8">
  <title>Portofolio & Repositori Tugas | Alika</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-purple-50/50 dark:bg-zinc-950 text-zinc-800 dark:text-zinc-100 font-sans">
  <div class="max-w-4xl mx-auto py-12 px-6">
    <h1 class="text-4xl font-extrabold text-purple-600 dark:text-purple-400">Halo, Saya Alika 👋</h1>
    <p class="mt-4 text-zinc-600 dark:text-zinc-300">Selamat datang di hub portofolio & tugas sekolah saya.</p>
  </div>
</body>
</html>`,
    instructions: '1. Buat struktur HTML5 semantic.\n2. Hubungkan dengan CDN Tailwind CSS.\n3. Aplikasikan warna pastel ungu (lavender & violet) yang lembut dan elegan.'
  },
  {
    id: 'info-2',
    title: 'Algoritma Pencarian & Pengurutan Data (Sorting System)',
    category: 'Algoritma',
    date: '10 Juli 2026',
    status: 'Selesai',
    score: '95 / 100',
    summary: 'Implementasi algoritma Bubble Sort, Quick Sort, dan Binary Search berbasis Python dengan analisis kompleksitas Big-O.',
    tags: ['Python', 'Data Structures', 'Algorithms'],
    fileSize: '450 KB',
    codeSnippet: `def quick_sort(arr):
    if len(arr) <= 1:
        return arr
    pivot = arr[len(arr) // 2]
    left = [x for x in arr if x < pivot]
    middle = [x for x in arr if x == pivot]
    right = [x for x in arr if x > pivot]
    return quick_sort(left) + middle + quick_sort(right)

# Test Data
numbers = [42, 12, 88, 3, 27, 65, 1]
sorted_numbers = quick_sort(numbers)
print("Data Terurut:", sorted_numbers)`,
    instructions: '1. Tulis kode program pengurutan data.\n2. Hitung statistik waktu eksekusi untuk 10,000 sampel data.'
  },
  {
    id: 'info-3',
    title: 'Desain Wireframe & Prototype Aplikasi Edukasi Sekolah',
    category: 'UI/UX',
    date: '25 Juni 2026',
    status: 'Selesai',
    score: '98 / 100',
    summary: 'Studi kasus perancangan antarmuka aplikasi manajemen tugas kelas menggunakan prinsip Soft UI/UX Design dan palet warna lavender.',
    tags: ['Figma', 'UI/UX Design', 'Wireframing', 'User Testing'],
    fileSize: '5.8 MB',
    codeSnippet: `/* UI Design System Specs - Soft Pastel Purple */
:root {
  --primary-purple: #9333ea;
  --accent-violet: #8b5cf6;
  --soft-lavender-bg: #f5f3ff;
  --text-primary: #3f3f46;
  --accent-border: #ddd6fe;
  --border-radius-card: 16px;
}`,
    instructions: '1. Buat User Persona siswa dan guru.\n2. Rancang wireframe low-fidelity dan prototype hi-fi di Figma.\n3. Gunakan skema warna pastel ungu yang menenangkan.'
  },
  {
    id: 'info-4',
    title: 'Rancangan Basis Data Perpus Digital (Relational DB Schema)',
    category: 'Basis Data',
    date: '12 Juni 2026',
    status: 'Selesai',
    score: '92 / 100',
    summary: 'Desain Entity Relationship Diagram (ERD) dan skrip SQL untuk sistem perpustakaan sekolah.',
    tags: ['SQL', 'MySQL', 'ERD', 'Database Schema'],
    fileSize: '820 KB',
    codeSnippet: `CREATE TABLE Anggota (
    id_anggota VARCHAR(10) PRIMARY KEY,
    nama VARCHAR(100) NOT NULL,
    kelas VARCHAR(20) NOT NULL,
    email VARCHAR(100) UNIQUE
);

CREATE TABLE Peminjaman (
    id_pinjam INT AUTO_INCREMENT PRIMARY KEY,
    id_anggota VARCHAR(10),
    tanggal_pinjam DATE,
    FOREIGN KEY (id_anggota) REFERENCES Anggota(id_anggota)
);`,
    instructions: '1. Buat diagram ERD 3-NF.\n2. Eksekusi DDL script untuk membuat tabel dan foreign keys.'
  },
  {
    id: 'info-5',
    title: 'Analisis Keamanan Jaringan & Enkripsi Sederhana (AES/Hashing)',
    category: 'Algoritma',
    date: '22 Juni 2026',
    status: 'Selesai',
    score: '96 / 100',
    summary: 'Studi literatur dan simulasi skrip Python untuk enkripsi pesan menggunakan algoritma hashing MD5 dan SHA-256 serta analisis celah keamanan Wi-Fi publik.',
    tags: ['Cybersecurity', 'Python', 'Encryption', 'Network'],
    fileSize: '1.5 MB',
    codeSnippet: `import hashlib

def encrypt_message(message):
    # MD5 & SHA-256 Hashing demonstration
    md5_hash = hashlib.md5(message.encode()).hexdigest()
    sha256_hash = hashlib.sha256(message.encode()).hexdigest()
    return md5_hash, sha256_hash

msg = "KunciRahasiaAlika"
md5, sha = encrypt_message(msg)
print(f"MD5: {md5}")
print(f"SHA-256: {sha}")`,
    instructions: '1. Tulis penjelasan mengenai kerentanan Wi-Fi publik.\n2. Buat skrip Python untuk melakukan enkripsi/hashing teks.'
  }
];

// Sample Data Tugas Bahasa Indonesia
const dataBahasaIndonesia = [
  {
    id: 'bindo-1',
    title: 'Teks Eksposisi: Dampak Kecerdasan Buatan terhadap Pendidikan Masa Depan',
    category: 'Teks Eksposisi',
    date: '15 Juli 2026',
    status: 'Selesai',
    score: '98 / 100',
    readTime: '4 min baca',
    summary: 'Analisis kritis mengenai integrasi AI dalam metode pembelajaran sekolah serta etika pemanfaatan teknologi digital.',
    tags: ['Teks Eksposisi', 'Esai Ilmiah', 'Opini', 'Teknologi'],
    content: `### Tesis (Pernyataan Pendapat)
Perkembangan pesat Kecerdasan Buatan (Artificial Intelligence) telah membawa transformasi mendasar dalam berbagai sektor kehidupan, tak terkecuali dunia pendidikan. Penggunaan AI bukan lagi sekadar alat bantu opsional, melainkan elemen integral yang membentuk cara belajar siswa abad ke-21.

### Argumen Pendukung
Pertama, AI memungkinkan pembelajaran yang terpersonalisasi (personalized learning). Setiap siswa memiliki kecepatan dan gaya belajar yang berbeda. Melalui platform pintar, materi dapat disesuaikan secara otomatis berdasarkan tingkat pemahaman individu.

Kedua, efisiensi tugas administratif guru. AI dapat membantu memverifikasi tugas dasar sehingga pengajar memiliki waktu lebih banyak untuk melakukan interaksi emosional dan pembimbingan karakter siswa.

Namun demikian, ketergantungan yang berlebihan pada teknologi dapat menumpulkan daya kritis dan kreativitas alami. Oleh karena itu, integritas akademik dan pemahaman etika penggunaan AI harus senantiasa ditanamkan sejak dini.

### Penegasan Ulang
Sebagai kesimpulan, AI adalah alat pembantu yang sangat kuat namun tidak dapat menggantikan peran empati dan bimbingan guru. Penguasaan teknologi yang dibarengi etika adalah kunci utama menghadapi masa depan.`
  },
  {
    id: 'bindo-2',
    title: 'Resensi Buku: "Bumi Manusia" karya Pramoedya Ananta Toer',
    category: 'Resensi Buku',
    date: '02 Juli 2026',
    status: 'Selesai',
    score: '96 / 100',
    readTime: '5 min baca',
    summary: 'Ulasan komprehensif mengenai latar belakang sejarah, karakterisasi Minke, dan relevansi pesan keadilan sosial.',
    tags: ['Resensi', 'Sastra Indonesia', 'Kritik Sastra'],
    content: `### Identitas Buku
* **Judul**: Bumi Manusia
* **Penulis**: Pramoedya Ananta Toer
* **Penerbit**: Lentera Dipantara
* **Jumlah Halaman**: 535 Halaman

### Ringkasan & Analisis
Bumi Manusia mengisahkan perjalanan hidup Minke, seorang pemuda pribumi berbakat di era kolonial Hindia Belanda. Roman ini menggambarkan pertarungan gagasan antara kemajuan pemikiran rasional Eropa dengan penindasan sistemis yang terjadi di tanah air.

Gaya bahasa Pramoedya sangat lugas, kaya akan metafora perjuangan, serta menyentuh aspek kesetaraan manusia. Karakter Nyai Ontosoroh ditampilkan sangat kuat sebagai simbol keteguhan wanita independen di tengah dominasi patriarki kolonial.

### Kesimpulan & Rekomendasi
Bumi Manusia bukan sekadar novel sejarah, tetapi manifesto pentingnya pendidikan, keberanian berpikir bebas, dan harga diri bangsa.`
  },
  {
    id: 'bindo-3',
    title: 'Antologi Puisi: "Jejak Langkah di Lorong Sekolah"',
    category: 'Puisi/Sastra',
    date: '18 Juni 2026',
    status: 'Selesai',
    score: '94 / 100',
    readTime: '3 min baca',
    summary: 'Kumpulan puisi kontemplatif tentang persahabatan, perjuangan menuntut ilmu, dan harapan masa depan.',
    tags: ['Puisi', 'Sastra', 'Karya Kreatif'],
    content: `### Bayang Lembar Kertas

Di antara garis buku yang membisu,
Ada selarik gita yang terus bergema.
Bukan tentang seberapa cepat kita melangkah,
Namun seberapa dalam kita memahami makna.

Papan tulis menghapus jejak kemarin,
Waktu merajut masa depan di balik jemari.
Di lorong sekolah ini kita berjanji,
Menjadi cahaya di gelapnya malam nanti.

---
*Dibuat untuk Tugas Apresiasi Sastra Kelas XI*`
  },
  {
    id: 'bindo-4',
    title: 'Makalah Penelitian: Efektivitas Penggunaan Bahasa Indonesia Baku dalam Media Sosial',
    category: 'Karya Tulis',
    date: '05 Mei 2026',
    status: 'Selesai',
    score: '95 / 100',
    readTime: '6 min baca',
    summary: 'Studi tata bahasa dan fenomena ragam slang di kalangan generasi Z pada platform komunikasi digital.',
    tags: ['Makalah', 'Tata Bahasa', 'Sosiolinguistik'],
    content: `### BAB I: PENDAHULUAN
Bahasa Indonesia sebagai bahasa nasional mengalami perkembangan dinamis seiring populernya platform jejaring sosial. Makalah ini mengkaji bagaimana kaidah Ejaan yang Disempurnakan (EYD V) diterapkan dalam komunikasi informal sehari-hari di internet.

### BAB II: PEMBAHASAN
Berdasarkan sampel 200 unggahan di media sosial, terjadi pergeseran singkatan dan istilah serapan informal. Meskipun demikian, kesadaran akan penggunaan bahasa baku tetap tinggi dalam situasi formal seperti penulisan artikel ilmiah dan karya jurnalistik.`
  },
  {
    id: 'bindo-5',
    title: 'Kritik Sastra: Fenomena Fiksi Penggemar (Fanfiction) di Platform Wattpad',
    category: 'Karya Tulis',
    date: '18 Juni 2026',
    status: 'Selesai',
    score: '95 / 100',
    readTime: '5 min baca',
    summary: 'Kajian kritis mengenai perkembangan tulisan fiksi penggemar (fanfiction) sebagai wadah kreativitas menulis alternatif remaja masa kini.',
    tags: ['Kritik Sastra', 'Sastra Digital', 'Karya Tulis'],
    content: `### Pendahuluan
Perkembangan teknologi internet membuka ruang kreativitas tanpa batas bagi siapa saja untuk mempublikasikan tulisan mereka. Salah satu fenomena sastra digital yang paling menonjol di kalangan remaja saat ini adalah merebaknya fiksi penggemar (fanfiction) di platform seperti Wattpad.

### Pembahasan
Fiksi penggemar adalah genre tulisan yang ditulis oleh pembaca berdasarkan tokoh, latar, atau alur cerita dari karya populer yang sudah ada (misalnya film, novel, atau tokoh terkenal dunia nyata). 

Meskipun seringkali dianggap kurang berbobot secara akademis dibandingkan karya sastra konvensional, penulisan fiksi penggemar melatih kemampuan menyusun alur cerita (plotting), pendalaman karakter, dan kosa kata penulis pemula. Ini merupakan gerbang awal yang ramah bagi remaja untuk mencintai dunia tulis-menulis.

### Kesimpulan
Sebagai bentuk sastra alternatif, fiksi penggemar patut dipresiasi sebagai ruang belajar menulis kreatif yang dinamis bagi generasi muda.`
  }
];

// App State Management
window.initHomepage = function (targetTabId) {
  // 1. Run global components
  if (!window.alikaGlobalInitialized) {
    initTheme();
    window.alikaGlobalInitialized = true;
  }
  initProfileImage();

  // 2. Render homepage components if we are on the homepage
  const dashboard = document.getElementById('dashboard');
  if (!dashboard) return; // Exit if not on home page

  renderInformatika(dataInformatika);
  renderBahasaIndonesia(dataBahasaIndonesia);
  setupFilters();
  setupSearch();
  setupModals();
  initMemoryGame();
  initStickyBoard();
  initNavigation();
  if (typeof window.initOrbitWidget === 'function') {
    window.initOrbitWidget();
  }

  // 3. Handle tab switching from hash or parameter
  const tabId = targetTabId || window.location.hash.substring(1) || 'dashboard';
  if (tabId && document.getElementById(tabId) && typeof window.switchAlikaTab === 'function') {
    window.switchAlikaTab(tabId);
  }
};

if (document.readyState === 'complete' || document.readyState === 'interactive') {
  window.initHomepage();
} else {
  document.addEventListener('DOMContentLoaded', () => {
    window.initHomepage();
  });
}


// Theme Management
function initTheme() {
  const savedTheme = localStorage.getItem('alika_theme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }

  const themeBtn = document.getElementById('themeToggleBtn');
  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      const isDark = document.documentElement.classList.toggle('dark');
      localStorage.setItem('alika_theme', isDark ? 'dark' : 'light');
    });
  }
}

// Profile Image Management
function initProfileImage() {
  const profileImageInput = document.getElementById('profileImageInput');
  const profileImageDisplay = document.getElementById('profileImageDisplay');
  const profilePlaceholder = document.getElementById('profilePlaceholder');
  const dashboardAvatar = document.getElementById('dashboardAvatar');

  // Load saved profile image from localStorage
  const savedImage = localStorage.getItem('alika_profile_image');
  if (savedImage) {
    if (profileImageDisplay) {
      profileImageDisplay.src = savedImage;
      profileImageDisplay.classList.remove('hidden');
    }
    if (profilePlaceholder) {
      profilePlaceholder.classList.add('hidden');
    }
    if (dashboardAvatar) {
      dashboardAvatar.src = savedImage;
    }
  }

  if (profileImageInput) {
    profileImageInput.onchange = (e) => {
      const file = e.target.files[0];
      if (file) {
        // Validation for image size (e.g. max 2MB for localStorage limits)
        if (file.size > 2 * 1024 * 1024) {
          showToast('Gambar terlalu besar. Batas ukuran adalah 2MB.');
          return;
        }

        const reader = new FileReader();
        reader.onload = function (event) {
          const dataUrl = event.target.result;

          try {
            // Save to localStorage
            localStorage.setItem('alika_profile_image', dataUrl);

            // Update UI elements
            if (profileImageDisplay) {
              profileImageDisplay.src = dataUrl;
              profileImageDisplay.classList.remove('hidden');
            }
            if (profilePlaceholder) {
              profilePlaceholder.classList.add('hidden');
            }
            if (dashboardAvatar) {
              dashboardAvatar.src = dataUrl;
            }
            showToast('Foto profil berhasil diperbarui! ✨');
          } catch (err) {
            console.error(err);
            showToast('Gagal menyimpan foto. Coba foto dengan ukuran lebih kecil.');
          }
        };
        reader.readAsDataURL(file);
      }
    };
  }
}

// Navigation Logic
function initNavigation() {
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('.tab-section');
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileNav = document.getElementById('mobileNav');

  function switchTab(targetTabId) {
    // Remove temporary hash routing style if exists to avoid interfering with normal styling
    const tempStyle = document.getElementById('temp-hash-routing-style');
    if (tempStyle) {
      tempStyle.remove();
    }

    // Hide all sections
    sections.forEach(sec => {
      sec.classList.add('hidden');
      sec.classList.remove('animate-fade-in');
    });

    // Remove active state from links
    navLinks.forEach(link => {
      link.classList.remove('active', 'text-pink-600', 'dark:text-pink-400');
      link.classList.add('text-zinc-600', 'dark:text-zinc-400');
    });

    // Target Section
    const activeSection = document.getElementById(targetTabId);
    if (activeSection) {
      activeSection.classList.remove('hidden');
      activeSection.classList.add('animate-fade-in');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Activate Nav Buttons
    const activeLinks = document.querySelectorAll(`[data-target="${targetTabId}"]`);
    activeLinks.forEach(link => {
      link.classList.add('active', 'text-pink-600', 'dark:text-pink-400');
      link.classList.remove('text-zinc-600', 'dark:text-zinc-400');
    });

    // Update Hash
    history.replaceState(null, '', `#${targetTabId}`);

    // Close mobile menu
    if (mobileNav && !mobileNav.classList.contains('hidden')) {
      mobileNav.classList.add('hidden');
    }
  }

  window.switchAlikaTab = switchTab; // Expose globally for SPA router

  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const target = link.getAttribute('data-target');
      if (target) {
        e.preventDefault();
        switchTab(target);
      }
    });
  });

  // Initial hash routing is managed once by initHomepage to prevent duplicate tab flashes

  // Mobile Menu Toggle
  if (mobileMenuBtn && mobileNav) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileNav.classList.toggle('hidden');
    });
  }
}

// Helper for pastel category badges
function getPastelCategoryClasses(category) {
  switch (category) {
    case 'Web Dev':
    case 'Teks Eksposisi':
      return 'bg-pastel-pink-bg text-pastel-pink-accent border-pastel-pink-border/40 dark:bg-pastel-pink-light/10 dark:border-pastel-pink-border/20';
    case 'Algoritma':
    case 'Resensi Buku':
      return 'bg-pastel-purple-bg text-pastel-purple-accent border-pastel-purple-border/40 dark:bg-pastel-purple-light/10 dark:border-pastel-purple-border/20';
    case 'UI/UX':
    case 'Puisi/Sastra':
      return 'bg-pastel-blue-bg text-pastel-blue-accent border-pastel-blue-border/40 dark:bg-pastel-blue-light/10 dark:border-pastel-blue-border/20';
    case 'Basis Data':
    case 'Karya Tulis':
      return 'bg-pastel-peach-bg text-pastel-peach-accent border-pastel-peach-border/40 dark:bg-pastel-peach-light/10 dark:border-pastel-peach-border/20';
    default:
      return 'bg-pastel-mint-bg text-pastel-mint-accent border-pastel-mint-border/40 dark:bg-pastel-mint-light/10 dark:border-pastel-mint-border/20';
  }
}

// Render Informatics Assignments
function renderInformatika(items) {
  const container = document.getElementById('informatikaGrid');
  if (!container) return;

  if (items.length === 0) {
    container.innerHTML = `
      <div class="col-span-full py-16 text-center text-zinc-500 dark:text-zinc-400">
        <svg class="w-12 h-12 mx-auto mb-3 text-pink-300 dark:text-pink-800/30" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
        <p class="font-medium">Tidak ada tugas Informatika yang cocok dengan pencarian.</p>
      </div>`;
    return;
  }

  container.innerHTML = items.map(item => {
    const scoreNum = parseInt(item.score.split('/')[0].trim()) || 0;
    const progressColorClass = scoreNum >= 98
      ? 'text-pink-500 dark:text-pink-400'
      : (scoreNum >= 95 ? 'text-purple-500 dark:text-purple-400' : 'text-emerald-500 dark:text-emerald-400');

    return `
      <div class="glass-panel p-6 rounded-[1.5rem] border border-white/50 dark:border-white/5 hover:border-pink-300 dark:hover:border-pink-700/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group card-hologram">
        <div>
          <div class="flex items-center justify-between mb-4">
            <span class="tag-badge border ${getPastelCategoryClasses(item.category)}">
              ${item.category}
            </span>
            <span class="text-xs font-semibold text-zinc-400 dark:text-zinc-500">${item.date}</span>
          </div>
          <h3 class="text-xl font-bold text-zinc-900 dark:text-white mb-2 group-hover:text-pink-500 transition-colors font-tech">
            ${item.title}
          </h3>
          <p class="text-sm text-zinc-500 dark:text-zinc-400 mb-6 line-clamp-3 leading-relaxed">
            ${item.summary}
          </p>
        </div>

        <div>
          <div class="flex flex-wrap gap-1.5 mb-5">
            ${item.tags.map(t => `<span class="text-[11px] px-2 py-0.5 rounded bg-zinc-50 dark:bg-zinc-900/40 text-zinc-500 dark:text-zinc-400 font-mono border border-zinc-200/50 dark:border-zinc-800/40 hover:bg-pink-50 dark:hover:bg-zinc-800 hover:text-pink-600 dark:hover:text-pink-300 transition-colors cursor-pointer">#${t}</span>`).join('')}
          </div>
          <div class="pt-4 border-t border-pink-100/50 dark:border-zinc-800/40 flex items-center justify-between">
            <!-- Circular SVG Score Gauge -->
            <div class="flex items-center gap-2.5">
              <div class="relative w-8 h-8 flex items-center justify-center flex-shrink-0">
                <svg class="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                  <!-- Background Track -->
                  <path class="text-zinc-100 dark:text-zinc-800" stroke-width="3" stroke="currentColor" fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                  <!-- Progress Bar -->
                  <path class="${progressColorClass} transition-all duration-1000" stroke-width="3.5" stroke-dasharray="${scoreNum}, 100" stroke-linecap="round" stroke="currentColor" fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                </svg>
                <span class="absolute text-[8px] font-extrabold font-mono text-zinc-700 dark:text-zinc-200 leading-none">${scoreNum}</span>
              </div>
              <div class="flex flex-col">
                <span class="text-[9px] text-zinc-400 dark:text-zinc-550 font-bold uppercase tracking-wider leading-none mb-0.5">Nilai Tugas</span>
                <span class="text-xs font-bold text-zinc-800 dark:text-zinc-200 leading-none">${item.score}</span>
              </div>
            </div>

            <button onclick="openInfoModal('${item.id}')" class="px-4 py-2.5 text-xs font-bold text-white bg-gradient-to-r from-pink-400 to-purple-400 hover:opacity-90 dark:from-pink-500 dark:to-purple-500 rounded-xl transition-all shadow-md flex items-center gap-1.5 shadow-pink-300/10 hover:shadow-pink-400/25 active:scale-95 duration-200 cursor-pointer">
              <span>Detail Kode</span>
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// Render Indonesian Language Assignments
function renderBahasaIndonesia(items) {
  const container = document.getElementById('bindoGrid');
  if (!container) return;

  if (items.length === 0) {
    container.innerHTML = `
      <div class="col-span-full py-16 text-center text-zinc-500 dark:text-zinc-400">
        <svg class="w-12 h-12 mx-auto mb-3 text-pink-300 dark:text-pink-800/30" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
        <p class="font-medium">Tidak ada tugas Bahasa Indonesia yang cocok dengan pencarian.</p>
      </div>`;
    return;
  }

  container.innerHTML = items.map(item => `
    <div class="glass-panel p-6 rounded-[1.5rem] border border-white/50 dark:border-white/5 hover:border-pink-300 dark:hover:border-pink-700/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group card-hologram">
      <div>
        <div class="flex items-center justify-between mb-4">
          <span class="tag-badge border ${getPastelCategoryClasses(item.category)}">
            ${item.category}
          </span>
          <span class="text-xs font-semibold text-zinc-400 dark:text-zinc-500">${item.readTime}</span>
        </div>
        <h3 class="text-xl font-bold text-zinc-900 dark:text-white mb-2 group-hover:text-pink-500 transition-colors">
          ${item.title}
        </h3>
        <p class="text-sm text-zinc-500 dark:text-zinc-400 mb-6 line-clamp-3 leading-relaxed">
          ${item.summary}
        </p>
      </div>

      <div>
        <div class="flex flex-wrap gap-1.5 mb-5">
          ${item.tags.map(t => `<span class="text-[11px] px-2 py-0.5 rounded bg-zinc-50 dark:bg-zinc-900/40 text-zinc-500 dark:text-zinc-400 font-mono border border-zinc-200/50 dark:border-zinc-800/40">#${t}</span>`).join('')}
        </div>
        <div class="pt-4 border-t border-pink-100/50 dark:border-zinc-800/40 flex items-center justify-between">
          <span class="text-xs font-semibold text-zinc-500 dark:text-zinc-400">
            ${item.date}
          </span>
          <button onclick="openBindoModal('${item.id}')" class="px-4 py-2.5 text-xs font-bold text-pink-700 bg-pink-50 hover:bg-pink-100 dark:bg-pink-950/40 dark:text-pink-300 dark:hover:bg-pink-900/50 border border-pink-200/50 dark:border-pink-800/30 rounded-xl transition-all flex items-center gap-1.5">
            <span>Baca Teks</span>
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

// Search Functionality
function setupSearch() {
  const searchInput = document.getElementById('globalSearchInput');
  const mobileSearchInput = document.getElementById('mobileSearchInput');

  function handleSearch(query) {
    const q = query.toLowerCase().trim();

    // Filter Informatika
    const filteredInfo = dataInformatika.filter(item =>
      item.title.toLowerCase().includes(q) ||
      item.summary.toLowerCase().includes(q) ||
      item.category.toLowerCase().includes(q) ||
      item.tags.some(t => t.toLowerCase().includes(q))
    );
    renderInformatika(filteredInfo);

    // Filter Bahasa Indonesia
    const filteredBindo = dataBahasaIndonesia.filter(item =>
      item.title.toLowerCase().includes(q) ||
      item.summary.toLowerCase().includes(q) ||
      item.category.toLowerCase().includes(q) ||
      item.tags.some(t => t.toLowerCase().includes(q))
    );
    renderBahasaIndonesia(filteredBindo);
  }

  if (searchInput) {
    searchInput.addEventListener('input', (e) => handleSearch(e.target.value));
  }
  if (mobileSearchInput) {
    mobileSearchInput.addEventListener('input', (e) => handleSearch(e.target.value));
  }
}

// Category Filter Functionality
function setupFilters() {
  // Informatika Filters
  const infoFilterBtns = document.querySelectorAll('.info-filter-btn');
  infoFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      infoFilterBtns.forEach(b => {
        b.classList.remove('bg-pink-500', 'text-white', 'dark:bg-pink-600');
        b.classList.add('bg-pink-50', 'text-pink-800', 'dark:bg-zinc-800', 'dark:text-zinc-300');
      });

      btn.classList.remove('bg-pink-50', 'text-pink-800', 'dark:bg-zinc-800', 'dark:text-zinc-300');
      btn.classList.add('bg-pink-500', 'text-white', 'dark:bg-pink-600');

      const cat = btn.getAttribute('data-category');
      if (cat === 'All') {
        renderInformatika(dataInformatika);
      } else {
        renderInformatika(dataInformatika.filter(i => i.category === cat));
      }
    });
  });

  // Bahasa Indonesia Filters
  const bindoFilterBtns = document.querySelectorAll('.bindo-filter-btn');
  bindoFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      bindoFilterBtns.forEach(b => {
        b.classList.remove('bg-pink-500', 'text-white', 'dark:bg-pink-600');
        b.classList.add('bg-pink-50', 'text-pink-800', 'dark:bg-zinc-800', 'dark:text-zinc-300');
      });

      btn.classList.remove('bg-pink-50', 'text-pink-800', 'dark:bg-zinc-800', 'dark:text-zinc-300');
      btn.classList.add('bg-pink-500', 'text-white', 'dark:bg-pink-600');

      const cat = btn.getAttribute('data-category');
      if (cat === 'All') {
        renderBahasaIndonesia(dataBahasaIndonesia);
      } else {
        renderBahasaIndonesia(dataBahasaIndonesia.filter(i => i.category === cat));
      }
    });
  });
}

// Modal Viewers Setup
function setupModals() {
  const modalOverlay = document.getElementById('assignmentModal');
  const closeModalBtn = document.getElementById('closeModalBtn');

  if (closeModalBtn && modalOverlay) {
    closeModalBtn.addEventListener('click', () => {
      modalOverlay.classList.add('hidden');
    });

    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) {
        modalOverlay.classList.add('hidden');
      }
    });
  }
}

// Open Informatika Modal
window.openInfoModal = function (id) {
  const item = dataInformatika.find(i => i.id === id);
  if (!item) return;

  const modalOverlay = document.getElementById('assignmentModal');
  const modalTitle = document.getElementById('modalTitle');
  const modalMeta = document.getElementById('modalMeta');
  const modalBody = document.getElementById('modalBody');

  modalTitle.innerText = item.title;
  modalMeta.innerHTML = `
    <span class="tag-badge border ${getPastelCategoryClasses(item.category)}">${item.category}</span>
    <span class="text-xs text-zinc-500 dark:text-zinc-400">Diposting: ${item.date}</span>
    <span class="text-xs text-pink-600 dark:text-pink-400 font-semibold">Status: ${item.status} (${item.score})</span>
  `;

  modalBody.innerHTML = `
    <div class="space-y-4">
      <div>
        <h4 class="text-xs uppercase tracking-wider font-semibold text-pink-500 dark:text-pink-400 mb-1">Ringkasan Tugas</h4>
        <p class="text-sm text-zinc-700 dark:text-zinc-300">${item.summary}</p>
      </div>

      <div>
        <h4 class="text-xs uppercase tracking-wider font-semibold text-pink-500 dark:text-pink-400 mb-1">Instruksi Guru</h4>
        <p class="text-sm text-zinc-700 dark:text-zinc-300 whitespace-pre-line bg-pink-50/20 dark:bg-zinc-900/40 p-3 rounded-xl border border-pink-100/50 dark:border-zinc-800/40">${item.instructions}</p>
      </div>

      <div>
        <div class="flex items-center justify-between mb-2">
          <h4 class="text-xs uppercase tracking-wider font-semibold text-pink-500 dark:text-pink-400">Source Code / Output</h4>
          <button onclick="copyCodeSnippet()" class="text-xs text-pink-500 dark:text-pink-400 hover:underline font-mono flex items-center gap-1">
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"/></svg>
            <span id="copyCodeText">Salin Kode</span>
          </button>
        </div>
        <pre id="codeSnippetPre" class="bg-zinc-950 text-pink-100 p-4 rounded-xl text-xs overflow-x-auto border border-zinc-800 font-mono leading-relaxed"><code>${escapeHtml(item.codeSnippet)}</code></pre>
      </div>
    </div>
  `;

  modalOverlay.classList.remove('hidden');
};

// Open Bahasa Indonesia Modal
window.openBindoModal = function (id) {
  const item = dataBahasaIndonesia.find(i => i.id === id);
  if (!item) return;

  const modalOverlay = document.getElementById('assignmentModal');
  const modalTitle = document.getElementById('modalTitle');
  const modalMeta = document.getElementById('modalMeta');
  const modalBody = document.getElementById('modalBody');

  modalTitle.innerText = item.title;
  modalMeta.innerHTML = `
    <span class="tag-badge border ${getPastelCategoryClasses(item.category)}">${item.category}</span>
    <span class="text-xs text-zinc-500 dark:text-zinc-400">Estimasi: ${item.readTime}</span>
    <span class="text-xs text-pink-600 dark:text-pink-400 font-semibold">Status: ${item.status} (${item.score})</span>
  `;

  modalBody.innerHTML = `
    <div class="space-y-4">
      <div class="bg-pink-50/20 dark:bg-zinc-900/40 p-4 rounded-xl border border-pink-100/50 dark:border-zinc-800/40 mb-4">
        <h4 class="text-xs uppercase tracking-wider font-semibold text-pink-500 dark:text-pink-400 mb-1">Abstrak / Pendahuluan</h4>
        <p class="text-sm text-zinc-700 dark:text-zinc-300">${item.summary}</p>
      </div>

      <div class="prose dark:prose-invert max-w-none text-sm leading-relaxed text-zinc-800 dark:text-zinc-200 whitespace-pre-line">
        ${item.content}
      </div>
    </div>
  `;

  modalOverlay.classList.remove('hidden');
};

// Utility: Copy Code Snippet
window.copyCodeSnippet = function () {
  const codePre = document.getElementById('codeSnippetPre');
  const copyText = document.getElementById('copyCodeText');
  if (!codePre) return;

  navigator.clipboard.writeText(codePre.innerText).then(() => {
    if (copyText) {
      copyText.innerText = 'Tersalin! ✓';
      setTimeout(() => {
        copyText.innerText = 'Salin Kode';
      }, 2000);
    }
  });
};

// Utility: Copy Social Media Link
window.copySocialLink = function (url, platformName) {
  navigator.clipboard.writeText(url).then(() => {
    showToast(`Link ${platformName} tersalin ke clipboard!`);
  }).catch(() => {
    showToast(`Buka: ${url}`);
  });
};

// Toast Notification
function showToast(message) {
  let toast = document.getElementById('appToast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'appToast';
    toast.className = 'fixed bottom-6 right-6 z-50 bg-pink-600 text-white dark:bg-pink-500 dark:text-white px-5 py-3 rounded-2xl shadow-xl text-xs font-semibold transform transition-all duration-300 translate-y-10 opacity-0 flex items-center gap-2 border border-pink-400/30';
    document.body.appendChild(toast);
  }

  toast.innerHTML = `
    <svg class="w-4 h-4 text-pink-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
    <span>${message}</span>
  `;

  setTimeout(() => {
    toast.classList.remove('translate-y-10', 'opacity-0');
  }, 10);

  setTimeout(() => {
    toast.classList.add('translate-y-10', 'opacity-0');
  }, 3000);
}

// Escape HTML utility
function escapeHtml(text) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// Articles Data for Informatics
const articlesData = {
  'ai-education': {
    title: 'Integrasi AI dalam Kurikulum Sekolah Masa Kini',
    category: 'Teknologi',
    date: '20 Juli 2026',
    author: 'Alika Lotus Apriyanto',
    summary: 'Penerapan kecerdasan buatan dalam proses belajar mengajar membuka gerbang efisiensi baru. Dari personalisasi materi hingga penilaian otomatis, AI menjadi asisten setia guru dalam mencetak generasi cerdas digital.',
    content: `### Pendahuluan
Kecerdasan Buatan (Artificial Intelligence) bukan lagi masa depan, melainkan realitas hari ini yang menyentuh berbagai aspek kehidupan manusia. Di dunia pendidikan, AI mulai diintegrasikan ke dalam kurikulum sekolah untuk mempercepat adaptasi siswa terhadap era otomasi.

### Mengapa AI Penting di Sekolah?
Pertama, **pembelajaran terpersonalisasi**. Platform berbasis AI dapat menganalisis kelemahan dan kelebihan belajar siswa secara real-time, kemudian merekomendasikan latihan soal yang spesifik sesuai kebutuhan masing-masing.

Kedua, **membantu guru**. Tugas administratif seperti memeriksa ujian pilihan ganda atau mendata presensi kini bisa diotomatiskan, sehingga guru memiliki lebih banyak waktu untuk interaksi emosional dan pembimbingan karakter siswa.

### Kesimpulan
Teknologi ini adalah alat bantu yang kuat. Keberhasilan integrasi AI di sekolah bergantung pada kolaborasi bijak antara teknologi dan bimbingan manusia agar proses belajar tetap humanis.`
  },
  'coding-teen': {
    title: 'Mengapa Remaja Harus Belajar Coding?',
    category: 'Programming',
    date: '14 Juli 2026',
    author: 'Alika Lotus Apriyanto',
    summary: 'Coding bukan sekadar menulis instruksi untuk komputer, melainkan latihan berpikir logis dan memecahkan masalah (computational thinking). Mempelajari pemrograman melatih otak kita terstruktur dalam menghadapi tantangan.',
    content: `### Lebih dari Sekadar Kode
Banyak orang mengira belajar coding hanya ditujukan bagi mereka yang ingin menjadi software engineer atau programmer. Padahal, coding adalah cara melatih otak kita untuk berpikir secara logis, runut, dan terstruktur.

### Computational Thinking
Ketika menulis baris-baris kode, kita dituntut untuk:
1. **Dekomposisi**: Memecah masalah besar menjadi bagian-bagian kecil yang mudah dikelola.
2. **Pengenalan Pola**: Mencari kesamaan atau pola dari masalah yang pernah diselesaikan sebelumnya.
3. **Abstraksi**: Fokus pada informasi penting dan mengabaikan detail yang kurang relevan.
4. **Algoritma**: Menyusun langkah-langkah sistematis untuk menyelesaikan masalah.

Kemampuan berpikir computational thinking ini sangat berguna di kehidupan sehari-hari, bahkan jika siswa tidak memilih karir di bidang teknologi.

### Kesimpulan
Belajar coding melatih daya juang (resilience) saat menghadapi galat (error) dan melatih logika analitis yang sangat krusial bagi masa depan generasi muda.`
  },
  'wifi-security': {
    title: 'Mengamankan Data Pribadi di Wi-Fi Publik',
    category: 'Cybersecurity',
    date: '08 Juli 2026',
    author: 'Alika Lotus Apriyanto',
    summary: 'Wi-Fi gratis di kafe atau sekolah memang menyenangkan, namun menyimpan bahaya besar berupa man-in-the-middle attacks. Memahami cara melindungi perangkat dengan VPN dan menghindari transaksi keuangan di jaringan publik sangat krusial.',
    content: `### Bahaya di Balik Wi-Fi Gratis
Mendapatkan akses internet gratis di kafe, perpustakaan, atau stasiun memang sangat membantu. Namun, jaringan Wi-Fi publik tanpa proteksi sandi (open network) adalah ladang subur bagi para pelaku kejahatan siber untuk melancarkan serangan.

### Bagaimana Serangan Terjadi?
Salah satu teknik yang paling umum adalah **Man-in-the-Middle (MitM) Attack**. Dalam skenario ini, peretas memosisikan diri di antara perangkat Anda dan router Wi-Fi. Semua data yang Anda kirimkan (seperti username, password, atau chat) dapat disadap dengan mudah.

### Tips Perlindungan Mandiri
Untuk menghindari kebocoran data, lakukan langkah-langkah berikut:
- **Gunakan VPN**: Virtual Private Network mengenkripsi seluruh lalu lintas data Anda, sehingga tidak dapat dibaca oleh pihak lain di jaringan yang sama.
- **Hindari Transaksi Sensitif**: Jangan pernah membuka aplikasi perbankan m-banking atau memasukkan data kartu kredit saat terhubung ke Wi-Fi publik.
- **Gunakan Koneksi HTTPS**: Pastikan situs web yang Anda kunjungi selalu menggunakan protokol HTTPS (memiliki lambang gembok di browser).

### Kesimpulan
Kewaspadaan digital adalah pertahanan utama kita di ruang siber. Selalu lindungi data pribadi Anda!`
  }
};

// Open Article Modal
window.openArticleModal = function (id) {
  const item = articlesData[id];
  if (!item) return;

  const modalOverlay = document.getElementById('assignmentModal');
  const modalTitle = document.getElementById('modalTitle');
  const modalMeta = document.getElementById('modalMeta');
  const modalBody = document.getElementById('modalBody');

  modalTitle.innerText = item.title;
  modalMeta.innerHTML = `
    <span class="tag-badge border bg-pastel-pink-bg text-pastel-pink-accent border-pastel-pink-border/40 dark:bg-pastel-pink-light/10 dark:border-pastel-pink-border/20">${item.category}</span>
    <span class="text-xs text-zinc-500 dark:text-zinc-400">Diposting: ${item.date}</span>
    <span class="text-xs text-pink-600 dark:text-pink-400 font-semibold">Penulis: ${item.author}</span>
  `;

  modalBody.innerHTML = `
    <div class="space-y-4">
      <div class="bg-pink-50/20 dark:bg-zinc-900/40 p-4 rounded-xl border border-pink-100/50 dark:border-zinc-800/40 mb-4">
        <h4 class="text-xs uppercase tracking-wider font-semibold text-pink-500 dark:text-pink-400 mb-1">Ringkasan Artikel</h4>
        <p class="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">${item.summary}</p>
      </div>

      <div class="prose dark:prose-invert max-w-none text-sm leading-relaxed text-zinc-800 dark:text-zinc-200 whitespace-pre-line">
        ${item.content}
      </div>
    </div>
  `;

  modalOverlay.classList.remove('hidden');
};

// Interactive Terminal Simulation for Informatika Section
let terminalBusy = false;
window.runTerminalCmd = function (cmd) {
  if (terminalBusy) return;
  const outputEl = document.getElementById('terminalOutput');
  if (!outputEl) return;

  if (cmd === 'clear') {
    outputEl.innerHTML = `
      <p class="text-zinc-500">$ clear</p>
      <p class="text-pink-400 font-bold blink-cursor mt-1">&gt; ready to explore</p>
    `;
    return;
  }

  terminalBusy = true;
  outputEl.innerHTML = `<p class="text-zinc-500">$ run ${cmd}</p>`;

  let lines = [];
  if (cmd === 'all') {
    lines = [
      '&gt; Scanning all modules...',
      'WebDev: <span class="text-emerald-400 font-bold">100% Active</span>',
      'UI/UX: <span class="text-emerald-400 font-bold">100% Active</span>',
      'Database: <span class="text-purple-400 font-bold">Active</span>',
      'Algorithms: <span class="text-emerald-400 font-bold">Optimized</span>',
      'System: <span class="text-pink-400 font-semibold">ALL TASKS ONLINE ✓</span>'
    ];
  } else if (cmd === 'specs') {
    lines = [
      '&gt; Fetching repository environment...',
      'Stack: HTML5 / TailwindCSS / VanillaJS',
      'Modules: 2 active (Informatika, B.Indo)',
      'Total Works: 10 documented assignments',
      'Aesthetics: Soft Pink & Pastel Purple',
      'State: Fully Responsive, Darkmode Ready'
    ];
  } else if (cmd === 'sort') {
    lines = [
      '&gt; Initiating Bubble Sort Simulation...',
      'Input: [42, 12, 88, 3, 27]',
      'Step 1: [12, 42, 3, 27, 88] (comp: 10)',
      'Step 2: [12, 3, 27, 42, 88] (comp: 20)',
      'Step 3: [3, 12, 27, 42, 88] (comp: 25)',
      'Sorted: [3, 12, 27, 42, 88] ✓ (Time: 0.12ms)'
    ];
  } else {
    lines = ['&gt; Error: Command not recognized.'];
  }

  let lineIdx = 0;
  function printNextLine() {
    if (lineIdx < lines.length) {
      const p = document.createElement('p');
      p.className = 'text-zinc-300 opacity-0 transform translate-y-1 transition-all duration-300';
      p.innerHTML = lines[lineIdx];
      outputEl.appendChild(p);

      // Trigger CSS transition animation
      setTimeout(() => {
        p.classList.remove('opacity-0', 'translate-y-1');
      }, 10);

      lineIdx++;
      setTimeout(printNextLine, 220); // delay between lines
    } else {
      // Print cursor at the end
      const cursor = document.createElement('p');
      cursor.className = 'text-pink-400 blink-cursor font-bold mt-1';
      cursor.innerHTML = '&gt; ready to explore';
      outputEl.appendChild(cursor);
      terminalBusy = false;
    }
  }

  setTimeout(printNextLine, 300);
};

// ==========================================================================
// Memory Match Mini Game Logic
// ==========================================================================
let memoryCards = [];
let flippedCards = [];
let matchedCount = 0;
let gameTurns = 0;
let lockBoard = false;

const cardIcons = ['📖', '💻', '🎨', '🎵', '🍰', '🍵'];
const gameIcons = [...cardIcons, ...cardIcons]; // 12 cards, 6 pairs

window.initMemoryGame = function () {
  const grid = document.getElementById('memory-game-grid');
  const turnsDisplay = document.getElementById('game-turns');
  const victoryScreen = document.getElementById('game-victory-screen');
  if (!grid) return;

  grid.innerHTML = '';
  flippedCards = [];
  matchedCount = 0;
  gameTurns = 0;
  lockBoard = false;

  if (turnsDisplay) turnsDisplay.innerText = '0';
  if (victoryScreen) {
    victoryScreen.classList.add('opacity-0', 'pointer-events-none');
    victoryScreen.classList.remove('opacity-100');
  }

  // Shuffle icons using Fisher-Yates or simple sort
  const shuffledIcons = [...gameIcons].sort(() => Math.random() - 0.5);

  // Generate cards markup
  shuffledIcons.forEach((icon, index) => {
    const card = document.createElement('div');
    card.className = 'memory-card w-full h-[65px]';
    card.dataset.icon = icon;
    card.dataset.index = index;

    card.innerHTML = `
      <div class="memory-card-inner w-full h-full">
        <div class="memory-card-front">
          <span>?</span>
        </div>
        <div class="memory-card-back">
          <span>${icon}</span>
        </div>
      </div>
    `;

    card.addEventListener('click', () => flipCard(card));
    grid.appendChild(card);
  });
};

function flipCard(card) {
  if (lockBoard) return;
  if (card.classList.contains('flipped') || card.classList.contains('matched')) return;

  card.classList.add('flipped');
  flippedCards.push(card);

  if (flippedCards.length === 2) {
    gameTurns++;
    const turnsDisplay = document.getElementById('game-turns');
    if (turnsDisplay) turnsDisplay.innerText = gameTurns;

    checkForMatch();
  }
}

function checkForMatch() {
  const [card1, card2] = flippedCards;
  const isMatch = card1.dataset.icon === card2.dataset.icon;

  if (isMatch) {
    disableCards();
  } else {
    unflipCards();
  }
}

function disableCards() {
  flippedCards[0].classList.add('matched');
  flippedCards[1].classList.add('matched');

  // Quick bounce animation for match
  flippedCards.forEach(c => {
    c.style.transform = 'scale(1.05)';
    setTimeout(() => {
      c.style.transform = 'scale(1)';
    }, 200);
  });

  matchedCount += 2;
  flippedCards = [];

  if (matchedCount === gameIcons.length) {
    showVictoryScreen();
  }
}

function unflipCards() {
  lockBoard = true;
  setTimeout(() => {
    flippedCards[0].classList.remove('flipped');
    flippedCards[1].classList.remove('flipped');
    flippedCards = [];
    lockBoard = false;
  }, 1000);
}

function showVictoryScreen() {
  const victoryScreen = document.getElementById('game-victory-screen');
  const victoryTurns = document.getElementById('victory-turns');
  if (victoryTurns) victoryTurns.innerText = gameTurns;

  if (victoryScreen) {
    victoryScreen.classList.remove('pointer-events-none', 'opacity-0');
    victoryScreen.classList.add('opacity-100');
  }
}

window.resetMemoryGame = function () {
  window.initMemoryGame();
};

// ==========================================================================
// Papan Catatan Tempel Logic
// ==========================================================================
let stickyNotes = [];

const defaultNotes = [
  { id: 'def-1', author: 'Alika', message: 'Semangat belajar & vibe coding hari ini ya! 🌸💻', color: 'pink', date: 'Hari ini', rotate: -2 },
  { id: 'def-2', author: 'Mama', message: 'Jangan lupa minum air putih yang cukup! 💧🍵', color: 'purple', date: 'Kemarin', rotate: 3 },
  { id: 'def-3', author: 'Budi', message: 'Keren banget website portofolionya! Sukses terus! 🚀', color: 'blue', date: '2 hari lalu', rotate: -1 },
  { id: 'def-4', author: 'Tzu Chi School', message: 'Cinta kasih menyatukan kita semua. 🌸🏫', color: 'mint', date: '3 hari lalu', rotate: 2 }
];

window.initStickyBoard = function () {
  const storedNotes = localStorage.getItem('alika_sticky_notes');
  if (storedNotes) {
    try {
      stickyNotes = JSON.parse(storedNotes);
    } catch (e) {
      stickyNotes = [...defaultNotes];
    }
  } else {
    stickyNotes = [...defaultNotes];
    localStorage.setItem('alika_sticky_notes', JSON.stringify(stickyNotes));
  }
  renderStickyNotes();
};

function renderStickyNotes() {
  const container = document.getElementById('sticky-notes-container');
  if (!container) return;

  container.innerHTML = '';
  stickyNotes.forEach(note => {
    const noteEl = document.createElement('div');
    noteEl.className = `sticky-note sticky-note-${note.color} animate-fade-in`;
    noteEl.style.transform = `rotate(${note.rotate || 0}deg)`;

    noteEl.innerHTML = `
      <div>
        <span onclick="deleteStickyNote('${note.id}')" class="sticky-note-delete">×</span>
        <p class="font-serif italic leading-snug break-words mb-2">"${escapeHtml(note.message)}"</p>
      </div>
      <div class="flex justify-between items-center text-[8px] opacity-75 font-mono">
        <span class="font-bold">By: ${escapeHtml(note.author)}</span>
        <span>${note.date}</span>
      </div>
    `;

    container.appendChild(noteEl);
  });
  container.scrollTop = container.scrollHeight;
}

window.handleStickySubmit = function (event) {
  event.preventDefault();
  const authorInput = document.getElementById('sticky-author-input');
  const messageInput = document.getElementById('sticky-message-input');
  if (!authorInput || !messageInput) return;

  const author = authorInput.value.trim();
  const message = messageInput.value.trim();
  if (author === '' || message === '') return;

  const colorRadios = document.getElementsByName('sticky-color');
  let color = 'pink';
  for (const radio of colorRadios) {
    if (radio.checked) {
      color = radio.value;
      break;
    }
  }

  const randomRotate = Math.floor(Math.random() * 9) - 4;

  const newNote = {
    id: 'note-' + Date.now(),
    author: author,
    message: message,
    color: color,
    date: 'Baru saja',
    rotate: randomRotate === 0 ? 1 : randomRotate
  };

  stickyNotes.push(newNote);
  localStorage.setItem('alika_sticky_notes', JSON.stringify(stickyNotes));

  renderStickyNotes();

  authorInput.value = '';
  messageInput.value = '';
};

window.deleteStickyNote = function (id) {
  stickyNotes = stickyNotes.filter(note => note.id !== id);
  localStorage.setItem('alika_sticky_notes', JSON.stringify(stickyNotes));
  renderStickyNotes();
};
