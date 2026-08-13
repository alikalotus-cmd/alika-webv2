(function () {
  // Data Tugas Informatika
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

  // Data Artikel Informatika
  const articlesData = [
    {
      id: 'network-topology',
      title: 'Topologi Jaringan: Mengatur Arsitektur Hubungan Antarkomputer',
      category: 'Jaringan',
      date: '29 Juli 2026',
      author: 'Alika Lotus Apriyanto',
      readTime: '5 Menit Baca',
      image: 'assets/topologi.jpg',
      summary: 'Topologi jaringan adalah peta arsitektur yang menentukan bagaimana komputer saling terhubung untuk bertukar data secara efisien dan cepat. Pelajari jenis-jenis topologi seperti star, bus, ring, mesh, tree, dan hybrid beserta visualisasinya.',
      tags: ['Topologi Jaringan', 'Jaringan Komputer', 'Infrastruktur', 'Informatika'],
      content: `
<style>
  .topology-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.5rem;
    margin: 1.5rem 0;
  }
  @media (min-width: 640px) {
    .topology-grid {
      grid-template-columns: 1fr 1fr;
    }
  }
  .topology-card {
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }
  .topology-card:hover {
    transform: translateY(-4px);
  }
  
  /* SVG Animations for topologi */
  @keyframes flow-dash {
    to {
      stroke-dashoffset: -20;
    }
  }
  @keyframes pulse-node {
    0%, 100% {
      transform: scale(1);
      filter: drop-shadow(0 0 2px rgba(244, 114, 182, 0.4));
    }
    50% {
      transform: scale(1.15);
      filter: drop-shadow(0 0 8px rgba(244, 114, 182, 0.8));
    }
  }
  .animate-flow {
    stroke-dasharray: 5, 5;
    animation: flow-dash 1.5s linear infinite;
  }
  .animate-pulse-node {
    animation: pulse-node 2s infinite ease-in-out;
    transform-origin: center;
  }
  
  /* Ring pulse animation */
  @keyframes ring-orbit {
    0% { stroke-dashoffset: 100; }
    100% { stroke-dashoffset: 0; }
  }
  .animate-ring-flow {
    stroke-dasharray: 20, 80;
    animation: ring-orbit 3s linear infinite;
  }

  /* Interactive Tabs Styling */
  .hidden-tab-input {
    display: none;
  }
  .tab-content {
    display: none;
  }
  .tab-label {
    color: var(--pastel-pink-accent);
    background: rgba(244, 114, 182, 0.05);
    border-color: rgba(244, 114, 182, 0.1);
  }
  #tab-star-ring:checked ~ .flex .tab-label[for="tab-star-ring"],
  #tab-mesh-tree:checked ~ .flex .tab-label[for="tab-mesh-tree"] {
    background: linear-gradient(135deg, #f472b6, #a78bfa);
    color: white;
    border-color: transparent;
    box-shadow: 0 4px 12px rgba(244, 114, 182, 0.2);
  }
  #tab-star-ring:checked ~ #content-star-ring {
    display: block;
  }
  #tab-mesh-tree:checked ~ #content-mesh-tree {
    display: block;
  }
</style>

<div class="relative w-full rounded-2xl overflow-hidden mb-6 border border-pink-200/50 dark:border-pink-900/30 shadow-md">
  <img src="assets/topologi.jpg" alt="Topologi Jaringan" class="w-full h-auto object-cover max-h-64 sm:max-h-80">
  <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
    <span class="text-white text-xs font-mono bg-pink-500/80 px-2.5 py-1 rounded">Edisi Jaringan Komputer</span>
  </div>
</div>

<p class="text-sm sm:text-base leading-relaxed text-zinc-700 dark:text-zinc-300 mb-6 font-sans">
  <strong>Topologi jaringan</strong> adalah cara, pola, atau bentuk pengaturan hubungan fisik maupun logis antar komputer dalam suatu jaringan untuk saling berkomunikasi dan berbagi data. Pemilihan jenis topologi yang tepat sangat krusial karena berdampak langsung pada efisiensi, kecepatan komunikasi, biaya instalasi, serta skalabilitas sistem jaringan itu sendiri.
</p>

<h4 class="text-base font-bold text-zinc-900 dark:text-white mt-6 mb-2 font-serif">Jenis-Jenis Topologi Jaringan</h4>

<div class="topology-grid">
  <!-- Topologi Bus -->
  <div class="glass-panel p-5 rounded-2xl border border-pink-200/40 dark:border-pink-900/30 hover:border-pink-400 dark:hover:border-pink-500 hover:shadow-lg topology-card flex flex-col justify-between">
    <div>
      <div class="flex items-center gap-2 mb-2">
        <span class="text-xs font-mono font-bold px-2 py-0.5 rounded bg-pink-100 text-pink-700 dark:bg-pink-950/40 dark:text-pink-300">BUS</span>
      </div>
      <p class="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
        Semua komputer terhubung ke satu kabel utama (bus). Data dikirim melalui kabel utama dan diterima oleh perangkat tujuan.
      </p>
    </div>
    <div class="mt-4 pt-2 border-t border-zinc-100 dark:border-zinc-800 text-[10px] text-zinc-450 dark:text-zinc-500 italic">
      Contoh: Jaringan kecil di laboratorium sekolah.
    </div>
  </div>

  <!-- Topologi Star -->
  <div class="glass-panel p-5 rounded-2xl border border-purple-200/40 dark:border-purple-900/30 hover:border-purple-400 dark:hover:border-purple-500 hover:shadow-lg topology-card flex flex-col justify-between">
    <div>
      <div class="flex items-center gap-2 mb-2">
        <span class="text-xs font-mono font-bold px-2 py-0.5 rounded bg-purple-100 text-purple-700 dark:bg-purple-950/40 dark:text-purple-300">STAR</span>
      </div>
      <p class="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
        Semua komputer terhubung ke satu perangkat pusat seperti switch atau hub. Jika satu kabel putus, komputer lain tidak terganggu.
      </p>
    </div>
    <div class="mt-4 pt-2 border-t border-zinc-100 dark:border-zinc-800 text-[10px] text-zinc-450 dark:text-zinc-500 italic">
      Contoh: Jaringan kantor modern atau warnet.
    </div>
  </div>

  <!-- Topologi Ring -->
  <div class="glass-panel p-5 rounded-2xl border border-blue-200/40 dark:border-blue-900/30 hover:border-blue-400 dark:hover:border-blue-500 hover:shadow-lg topology-card flex flex-col justify-between">
    <div>
      <div class="flex items-center gap-2 mb-2">
        <span class="text-xs font-mono font-bold px-2 py-0.5 rounded bg-blue-100 text-blue-700 dark:bg-blue-950/40 dark:text-blue-300">RING</span>
      </div>
      <p class="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
        Setiap komputer terhubung dengan dua komputer lain sehingga membentuk lingkaran. Data mengalir satu atau dua arah melewati setiap node.
      </p>
    </div>
    <div class="mt-4 pt-2 border-t border-zinc-100 dark:border-zinc-800 text-[10px] text-zinc-450 dark:text-zinc-500 italic">
      Contoh: Jaringan serat optik kecepatan tinggi (backbone).
    </div>
  </div>

  <!-- Topologi Mesh -->
  <div class="glass-panel p-5 rounded-2xl border border-amber-200/40 dark:border-amber-900/30 hover:border-amber-400 dark:hover:border-amber-500 hover:shadow-lg topology-card flex flex-col justify-between">
    <div>
      <div class="flex items-center gap-2 mb-2">
        <span class="text-xs font-mono font-bold px-2 py-0.5 rounded bg-amber-100 text-amber-700 dark:bg-amber-955/40 dark:text-amber-300">MESH</span>
      </div>
      <p class="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
        Setiap perangkat terhubung langsung ke semua perangkat lain. Menawarkan keandalan tertinggi tanpa titik kegagalan tunggal.
      </p>
    </div>
    <div class="mt-4 pt-2 border-t border-zinc-100 dark:border-zinc-800 text-[10px] text-zinc-450 dark:text-zinc-500 italic">
      Contoh: Jaringan militer atau data center kritis.
    </div>
  </div>

  <!-- Topologi Tree -->
  <div class="glass-panel p-5 rounded-2xl border border-emerald-200/40 dark:border-emerald-900/30 hover:border-emerald-400 dark:hover:border-emerald-500 hover:shadow-lg topology-card flex flex-col justify-between">
    <div>
      <div class="flex items-center gap-2 mb-2">
        <span class="text-xs font-mono font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300">TREE</span>
      </div>
      <p class="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
        Gabungan hierarkis antara topologi star dan bus. Memiliki beberapa tingkat koneksi terpusat seperti cabang-cabang pohon.
      </p>
    </div>
    <div class="mt-4 pt-2 border-t border-zinc-100 dark:border-zinc-800 text-[10px] text-zinc-450 dark:text-zinc-500 italic">
      Contoh: Sistem jaringan inter-departemen di universitas.
    </div>
  </div>

  <!-- Topologi Hybrid -->
  <div class="glass-panel p-5 rounded-2xl border border-rose-200/40 dark:border-rose-900/30 hover:border-rose-400 dark:hover:border-rose-500 hover:shadow-lg topology-card flex flex-col justify-between">
    <div>
      <div class="flex items-center gap-2 mb-2">
        <span class="text-xs font-mono font-bold px-2 py-0.5 rounded bg-rose-100 text-rose-700 dark:bg-rose-950/40 dark:text-rose-300">HYBRID</span>
      </div>
      <p class="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
        Gabungan dari dua atau lebih jenis topologi dasar yang berbeda. Sangat fleksibel dan adaptif untuk perluasan skala besar.
      </p>
    </div>
    <div class="mt-4 pt-2 border-t border-zinc-100 dark:border-zinc-800 text-[10px] text-zinc-450 dark:text-zinc-500 italic">
      Contoh: Jaringan korporat gabungan tipe Star dan Ring.
    </div>
  </div>
</div>

<!-- Animating Diagram Box (interactive demonstration) -->
<h4 class="text-base font-bold text-zinc-900 dark:text-white mt-6 mb-3 font-serif">Diagram Animasi Transmisi Data</h4>
<div class="bg-zinc-950 p-6 rounded-2xl border border-pink-200/20 dark:border-zinc-800 flex flex-col sm:flex-row gap-6 justify-around items-center mb-6">
  
  <!-- Star SVG -->
  <div class="flex flex-col items-center gap-2">
    <span class="text-[10px] font-mono text-zinc-400 tracking-widest uppercase">Star (Switch Pusat)</span>
    <svg class="w-32 h-32" viewBox="0 0 120 120">
      <!-- Lines to center -->
      <line x1="20" y1="20" x2="60" y2="60" stroke="#f472b6" stroke-width="1.5" stroke-dasharray="5,5" class="animate-flow" />
      <line x1="100" y1="20" x2="60" y2="60" stroke="#f472b6" stroke-width="1.5" stroke-dasharray="5,5" class="animate-flow" />
      <line x1="20" y1="100" x2="60" y2="60" stroke="#f472b6" stroke-width="1.5" stroke-dasharray="5,5" class="animate-flow" />
      <line x1="100" y1="100" x2="60" y2="60" stroke="#f472b6" stroke-width="1.5" stroke-dasharray="5,5" class="animate-flow" />
      <!-- Central Node -->
      <circle cx="60" cy="60" r="12" fill="#ec4899" class="animate-pulse-node" />
      <text x="60" y="63" fill="#fff" font-size="8" font-family="monospace" text-anchor="middle" font-weight="bold">HUB</text>
      <!-- Outer Nodes -->
      <circle cx="20" cy="20" r="8" fill="#38bdf8" />
      <circle cx="100" cy="20" r="8" fill="#38bdf8" />
      <circle cx="20" cy="100" r="8" fill="#38bdf8" />
      <circle cx="100" cy="100" r="8" fill="#38bdf8" />
    </svg>
  </div>

  <!-- Ring SVG -->
  <div class="flex flex-col items-center gap-2">
    <span class="text-[10px] font-mono text-zinc-400 tracking-widest uppercase">Ring (Sirkulasi Token)</span>
    <svg class="w-32 h-32" viewBox="0 0 120 120">
      <!-- Ring Connection -->
      <circle cx="60" cy="60" r="35" fill="none" stroke="#a78bfa" stroke-width="2" />
      <circle cx="60" cy="60" r="35" fill="none" stroke="#67e8f9" stroke-width="2.5" class="animate-ring-flow" stroke-linecap="round" />
      <!-- Nodes along circle -->
      <circle cx="60" cy="25" r="8" fill="#a855f7" />
      <circle cx="95" cy="60" r="8" fill="#a855f7" />
      <circle cx="60" cy="95" r="8" fill="#a855f7" />
      <circle cx="25" cy="60" r="8" fill="#a855f7" />
    </svg>
  </div>

  <!-- Bus SVG -->
  <div class="flex flex-col items-center gap-2">
    <span class="text-[10px] font-mono text-zinc-400 tracking-widest uppercase">Bus (Shared Backbone)</span>
    <svg class="w-32 h-32" viewBox="0 0 120 120">
      <!-- Central Backbone -->
      <line x1="15" y1="60" x2="105" y2="60" stroke="#f59e0b" stroke-width="3" />
      <!-- Glowing data flow -->
      <line x1="15" y1="60" x2="105" y2="60" stroke="#fbbf24" stroke-width="3" stroke-dasharray="10, 20" class="animate-flow" />
      <!-- Vertical Drops -->
      <line x1="30" y1="35" x2="30" y2="60" stroke="#71717a" stroke-width="1.5" />
      <line x1="60" y1="35" x2="60" y2="60" stroke="#71717a" stroke-width="1.5" />
      <line x1="90" y1="35" x2="90" y2="60" stroke="#71717a" stroke-width="1.5" />
      <line x1="45" y1="85" x2="45" y2="60" stroke="#71717a" stroke-width="1.5" />
      <line x1="75" y1="85" x2="75" y2="60" stroke="#71717a" stroke-width="1.5" />
      <!-- Nodes -->
      <circle cx="30" cy="35" r="7" fill="#fbbf24" />
      <circle cx="60" cy="35" r="7" fill="#fbbf24" />
      <circle cx="90" cy="35" r="7" fill="#fbbf24" />
      <circle cx="45" cy="85" r="7" fill="#fbbf24" />
      <circle cx="75" cy="85" r="7" fill="#fbbf24" />
    </svg>
  </div>
</div>

<!-- Comparison Interactive Tabs Section -->
<h4 class="text-base font-bold text-zinc-900 dark:text-white mt-8 mb-3 font-serif">Galeri Komparasi Struktur Jaringan</h4>
<div class="my-6 animate-fade-in">
  <div class="tabs-wrapper relative w-full border border-pink-100 dark:border-zinc-800 rounded-3xl p-4 bg-white/40 dark:bg-zinc-950/20 backdrop-blur-md">
    <input type="radio" id="tab-star-ring" name="topology-tabs" checked class="hidden-tab-input hidden">
    <input type="radio" id="tab-mesh-tree" name="topology-tabs" class="hidden-tab-input hidden">

    <div class="flex border-b border-zinc-150 dark:border-zinc-800 pb-3 mb-4 gap-2">
      <label for="tab-star-ring" class="tab-label cursor-pointer px-4 py-2 text-xs font-mono font-bold uppercase tracking-wider rounded-xl transition-all duration-300 border border-transparent">
        Visualisasi Star & Ring
      </label>
      <label for="tab-mesh-tree" class="tab-label cursor-pointer px-4 py-2 text-xs font-mono font-bold uppercase tracking-wider rounded-xl transition-all duration-300 border border-transparent">
        Visualisasi Mesh & Tree
      </label>
    </div>

    <div class="tab-content animate-fade-in" id="content-star-ring">
      <div class="flex flex-col gap-4">
        <div class="relative w-full rounded-2xl overflow-hidden border border-pink-100 dark:border-pink-900/20 shadow-sm max-h-56 sm:max-h-72">
          <img src="assets/topology_star_ring.png" alt="Star & Ring Topologi" class="w-full h-full object-cover">
        </div>
        <p class="text-xs text-zinc-550 dark:text-zinc-400 italic">
          <strong>Perbandingan Star & Ring</strong>: Jaringan Star memusatkan data pada switch (jika satu kabel client putus, yang lain aman), sedangkan Ring mengirim data berantai melingkar.
        </p>
      </div>
    </div>

    <div class="tab-content animate-fade-in" id="content-mesh-tree">
      <div class="flex flex-col gap-4">
        <div class="relative w-full rounded-2xl overflow-hidden border border-pink-100 dark:border-pink-900/20 shadow-sm max-h-56 sm:max-h-72">
          <img src="assets/topology_mesh_tree.png" alt="Mesh & Tree Topologi" class="w-full h-full object-cover">
        </div>
        <p class="text-xs text-zinc-550 dark:text-zinc-400 italic">
          <strong>Perbandingan Mesh & Tree</strong>: Jaringan Mesh menyambungkan semua perangkat secara point-to-point (sangat tangguh namun kompleks), sedangkan Tree menggunakan arsitektur hierarkis bertingkat.
        </p>
      </div>
    </div>
  </div>
</div>

<!-- Comparison Table Section -->
<h4 class="text-base font-bold text-zinc-900 dark:text-white mt-8 mb-3 font-serif">Tabel Perbandingan Efisiensi & Kinerja</h4>
<div class="overflow-x-auto rounded-2xl border border-pink-100 dark:border-zinc-800 shadow-sm bg-white/20 dark:bg-zinc-950/20 backdrop-blur-md mb-6">
  <table class="w-full text-left text-xs font-sans border-collapse">
    <thead>
      <tr class="bg-pink-50/50 dark:bg-zinc-900/60 border-b border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300">
        <th class="p-3 font-mono uppercase tracking-wider">Topologi</th>
        <th class="p-3 font-mono uppercase tracking-wider">Biaya Pasang</th>
        <th class="p-3 font-mono uppercase tracking-wider">Keandalan</th>
        <th class="p-3 font-mono uppercase tracking-wider">Toleransi Gangguan</th>
        <th class="p-3 font-mono uppercase tracking-wider">Kemudahan Deteksi Cacat</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-zinc-150 dark:divide-zinc-800 text-zinc-650 dark:text-zinc-400">
      <tr class="hover:bg-pink-50/30 dark:hover:bg-zinc-900/30 transition-colors">
        <td class="p-3 font-bold text-pink-600 dark:text-pink-400">Bus</td>
        <td class="p-3">Sangat Murah</td>
        <td class="p-3 text-red-500">Rendah</td>
        <td class="p-3">Lemah (Satu putus, mati semua)</td>
        <td class="p-3">Sukar dideteksi</td>
      </tr>
      <tr class="hover:bg-purple-50/30 dark:hover:bg-zinc-900/30 transition-colors">
        <td class="p-3 font-bold text-purple-600 dark:text-purple-400">Star</td>
        <td class="p-3">Sedang</td>
        <td class="p-3 text-emerald-500">Tinggi</td>
        <td class="p-3">Bagus (Kabel putus terisolasi)</td>
        <td class="p-3">Sangat Mudah</td>
      </tr>
      <tr class="hover:bg-blue-50/30 dark:hover:bg-zinc-900/30 transition-colors">
        <td class="p-3 font-bold text-blue-600 dark:text-blue-400">Ring</td>
        <td class="p-3">Murah</td>
        <td class="p-3 text-red-500">Rendah</td>
        <td class="p-3">Lemah (Satu putus, mati semua)</td>
        <td class="p-3">Sukar dideteksi</td>
      </tr>
      <tr class="hover:bg-amber-50/30 dark:hover:bg-zinc-900/30 transition-colors">
        <td class="p-3 font-bold text-amber-600 dark:text-amber-400">Mesh</td>
        <td class="p-3 text-red-500">Sangat Mahal</td>
        <td class="p-3 text-emerald-500">Sangat Tinggi</td>
        <td class="p-3">Luar Biasa (Redundansi Jalur)</td>
        <td class="p-3">Sangat Mudah</td>
      </tr>
      <tr class="hover:bg-emerald-50/30 dark:hover:bg-zinc-900/30 transition-colors">
        <td class="p-3 font-bold text-emerald-600 dark:text-emerald-400">Tree</td>
        <td class="p-3 text-red-500">Mahal</td>
        <td class="p-3 text-emerald-500">Sedang</td>
        <td class="p-3">Sedang (Hierarkis terpusat)</td>
        <td class="p-3">Mudah terdeteksi</td>
      </tr>
    </tbody>
  </table>
</div>

<h4 class="text-base font-bold text-zinc-900 dark:text-white mt-6 mb-2 font-serif">Gambaran dan Penjelasan Topologi</h4>
<p class="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed mb-4 text-justify font-sans">
  Secara umum, topologi jaringan menggambarkan bagaimana komputer dan perangkat lain saling terhubung untuk bertukar data. Contohnya, pada topologi star, setiap komputer tersambung ke hub atau switch pusat, jadi kalau satu kabel putus, komputer lain tidak akan terganggu. Sedangkan pada topologi bus, semua komputer berbagi satu jalur data utama. Jika kabel utama rusak, seluruh jaringan bisa terganggu. Topologi mesh sering digunakan pada sistem besar seperti militer atau perusahaan besar karena koneksinya banyak dan kuat — walau biayanya lebih mahal.
</p>

<!-- Author opinion quote card -->
<div class="my-8 p-6 rounded-2xl bg-gradient-to-br from-pink-50/50 via-purple-50/30 to-sky-50/40 dark:from-pink-950/10 dark:via-purple-950/10 dark:to-zinc-900/30 border border-pink-100 dark:border-pink-900/30 relative">
  <span class="absolute top-4 right-4 text-4xl text-pink-300/40 font-serif select-none leading-none">“</span>
  <div class="flex gap-4 items-start">
    <div class="w-10 h-10 rounded-full overflow-hidden border border-pink-200 flex-shrink-0">
      <img src="assets/alika2.jpg" alt="Alika Lotus" class="w-full h-full object-cover">
    </div>
    <div class="space-y-2">
      <span class="text-xs uppercase tracking-wider font-bold text-pink-600 dark:text-pink-400 font-mono">Opini Penulis</span>
      <p class="text-sm italic text-zinc-700 dark:text-zinc-300 leading-relaxed font-serif">
        "Menurutku, topologi jaringan itu seperti &ldquo;peta&rdquo; yang menentukan bagaimana komputer saling terhubung dan sangat penting karena menentukan efisiensi dan kecepatan komunikasi antar perangkat. Pemilihan topologi bukan hal sepele, karena setiap bentuk punya dampak besar terhadap kinerja jaringan."
      </p>
    </div>
  </div>
</div>
`
    },
    {
      id: 'sistem-digital',
      title: 'Sistem Digital: Fondasi Teknologi Modern',
      category: 'Sistem Komputer',
      date: '29 Juli 2026',
      author: 'Alika Lotus Apriyanto',
      readTime: '4 Menit Baca',
      image: 'assets/biner.jpg',
      summary: 'Pahami cara kerja sistem digital yang mendasari komputer modern. Pelajari bilangan biner, fungsi sistem digital, dan coba simulator gerbang logika interaktif.',
      tags: ['Sistem Digital', 'Bilangan Biner', 'Gerbang Logika', 'Informatika'],
      content: `
<style>
  .gate-btn {
    transition: all 0.2s ease-in-out;
    background-color: transparent;
  }
  .gate-btn.active {
    background: linear-gradient(135deg, #f472b6, #a78bfa);
    color: white;
    border-color: transparent;
    box-shadow: 0 4px 10px rgba(244, 114, 182, 0.25);
  }
  .input-toggle {
    transition: all 0.2s ease-in-out;
  }
  .input-toggle.val-1 {
    background-color: #ec4899;
    color: white;
    border-color: transparent;
    box-shadow: 0 0 8px rgba(236, 72, 153, 0.5);
  }
  .input-toggle.val-0 {
    background-color: #e4e4e7;
    color: #3f3f46;
    border-color: #d4d4d8;
  }
  .dark .input-toggle.val-0 {
    background-color: #27272a;
    color: #d4d4d8;
    border-color: #3f3f46;
  }
  
  .wire-line {
    transition: stroke 0.3s ease, stroke-width 0.3s ease;
    fill: none;
  }
  .wire-line.active {
    stroke: rgba(236, 72, 153, 0.25);
    stroke-width: 2.5;
  }
  .wire-line.inactive {
    stroke: #e4e4e7;
    stroke-width: 2;
  }
  .dark .wire-line.inactive {
    stroke: #27272a;
  }
  
  .wire-flow {
    fill: none;
    stroke-width: 2.5;
    stroke-linecap: round;
    stroke-linejoin: round;
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  .wire-flow.active {
    stroke: #ec4899;
    opacity: 1;
    stroke-dasharray: 6, 6;
    animation: flow-dash 1.5s linear infinite;
    filter: drop-shadow(0 0 3px #ec4899);
  }
  
  .bulb-glow {
    transition: fill 0.3s ease, filter 0.3s ease;
  }
  .bulb-glow.active {
    fill: #fbbf24;
    filter: drop-shadow(0 0 10px #fbbf24);
  }
  .bulb-glow.inactive {
    fill: #4b5563;
    filter: none;
  }
  
  .tr-highlight {
    transition: background-color 0.2s ease, border-color 0.2s ease;
  }
  .tr-highlight.active {
    background-color: rgba(244, 114, 182, 0.15);
    border-color: rgba(244, 114, 182, 0.4);
    font-weight: 700;
  }
</style>

<div class="relative w-full rounded-2xl overflow-hidden mb-6 border border-pink-200/50 dark:border-pink-900/30 shadow-md">
  <img src="assets/biner.jpg" alt="File Biner" class="w-full h-auto object-cover max-h-64 sm:max-h-80">
  <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
    <span class="text-white text-xs font-mono bg-pink-500/80 px-2.5 py-1 rounded">Edisi Elektronika &amp; Komputasi</span>
  </div>
</div>

<p class="text-sm sm:text-base leading-relaxed text-zinc-700 dark:text-zinc-300 mb-6 font-sans">
  <strong>Sistem digital</strong> adalah sistem yang bekerja dengan <strong>data diskrit (tidak kontinu)</strong>, yaitu data yang hanya memiliki dua kondisi spesifik, biasanya dilambangkan dengan angka <strong>0 dan 1</strong>. Sistem ini menggunakan representasi bilangan biner untuk memproses, menyimpan, dan mengirimkan berbagai jenis informasi. Hampir seluruh perangkat elektronik modern yang kita gunakan hari ini bekerja berdasarkan prinsip dasar sistem digital.
</p>
<p class="text-sm sm:text-base leading-relaxed text-zinc-700 dark:text-zinc-300 mb-6 font-sans">
  Contoh penerapan nyata sistem digital dapat dengan mudah ditemukan pada komputer, smartphone, kalkulator pintar, jam tangan digital, hingga sistem otomatis pada mesin ATM.
</p>

<h4 class="text-base font-bold text-zinc-900 dark:text-white mt-6 mb-3 font-serif">Fungsi Sistem Digital dalam Dunia Teknologi</h4>

<div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
  <!-- Fungsi 1 -->
  <div class="glass-panel p-5 rounded-2xl border border-pink-200/40 dark:border-pink-900/30 flex flex-col items-center text-center">
    <div class="w-10 h-10 rounded-full bg-pink-100 dark:bg-pink-950/40 flex items-center justify-center text-pink-500 mb-3">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"/></svg>
    </div>
    <span class="text-xs font-bold text-zinc-800 dark:text-white mb-1">Memproses Data</span>
    <p class="text-[11px] text-zinc-550 dark:text-zinc-400 leading-relaxed">Melakukan perhitungan logis dan aritmatika dengan sangat cepat dan akurat.</p>
  </div>

  <!-- Fungsi 2 -->
  <div class="glass-panel p-5 rounded-2xl border border-purple-200/40 dark:border-purple-900/30 flex flex-col items-center text-center">
    <div class="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-950/40 flex items-center justify-center text-purple-500 mb-3">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2M8 7h8m0 0v8a2 2 0 01-2 2h-2m-2 0H5a2 2 0 01-2-2v-4a2 2 0 012-2h2m-2 0h2"/></svg>
    </div>
    <span class="text-xs font-bold text-zinc-800 dark:text-white mb-1">Menyimpan Informasi</span>
    <p class="text-[11px] text-zinc-550 dark:text-zinc-400 leading-relaxed">Menyimpan berkas, instruksi, dan media dalam format file digital yang aman.</p>
  </div>

  <!-- Fungsi 3 -->
  <div class="glass-panel p-5 rounded-2xl border border-blue-200/40 dark:border-blue-900/30 flex flex-col items-center text-center">
    <div class="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-950/40 flex items-center justify-center text-blue-500 mb-3">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"/></svg>
    </div>
    <span class="text-xs font-bold text-zinc-800 dark:text-white mb-1">Mengontrol Perangkat</span>
    <p class="text-[11px] text-zinc-550 dark:text-zinc-400 leading-relaxed">Mengendalikan komponen elektronika agar beroperasi sesuai algoritma perintah.</p>
  </div>
</div>

<!-- Logic Gate Simulation (Interactive component) -->
<div class="glass-panel p-5 rounded-3xl border border-pink-100 dark:border-zinc-800 my-6 bg-pink-50/10 dark:bg-zinc-950/20">
  <div class="flex flex-col gap-4">
    <div class="text-center">
      <span class="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-pink-100 text-pink-700 dark:bg-pink-950/40 dark:text-pink-300">LAB INTERAKTIF</span>
      <h4 class="text-base font-bold text-zinc-900 dark:text-white mt-1.5 font-serif">Simulasi Gerbang Logika &amp; Aliran Arus Sinyal</h4>
      <p class="text-xs text-zinc-500 mt-1">Pilih tipe gerbang logika, lalu tekan saklar INPUT A dan B untuk melihat perubahan arus data digital.</p>
    </div>
    
    <!-- Selector Gerbang -->
    <div class="flex flex-wrap justify-center gap-2 border-b border-zinc-150 dark:border-zinc-800/60 pb-4">
      <button onclick="window.setGateSimType('AND')" id="gate-btn-AND" class="gate-btn active px-3.5 py-1.5 rounded-xl border border-pink-200/50 dark:border-zinc-700 text-xs font-bold font-mono">AND</button>
      <button onclick="window.setGateSimType('OR')" id="gate-btn-OR" class="gate-btn px-3.5 py-1.5 rounded-xl border border-pink-200/50 dark:border-zinc-700 text-xs font-bold font-mono">OR</button>
      <button onclick="window.setGateSimType('XOR')" id="gate-btn-XOR" class="gate-btn px-3.5 py-1.5 rounded-xl border border-pink-200/50 dark:border-zinc-700 text-xs font-bold font-mono">XOR</button>
      <button onclick="window.setGateSimType('NOT')" id="gate-btn-NOT" class="gate-btn px-3.5 py-1.5 rounded-xl border border-pink-200/50 dark:border-zinc-700 text-xs font-bold font-mono">NOT</button>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
      <!-- Input Controls and SVG -->
      <div class="flex flex-col items-center gap-4 bg-zinc-950/5 p-4 dark:bg-zinc-950/50 rounded-2xl border border-zinc-100 dark:border-zinc-900">
        <!-- Input Toggles -->
        <div class="flex gap-6">
          <div class="flex flex-col items-center gap-1.5">
            <span class="text-[9px] font-mono font-bold text-zinc-400">SAKLAR A</span>
            <button onclick="window.toggleGateSimInput('A')" id="input-toggle-A" class="input-toggle val-0 w-12 h-10 rounded-xl border font-mono font-bold text-sm">0</button>
          </div>
          <div id="input-B-container" class="flex flex-col items-center gap-1.5">
            <span class="text-[9px] font-mono font-bold text-zinc-400">SAKLAR B</span>
            <button onclick="window.toggleGateSimInput('B')" id="input-toggle-B" class="input-toggle val-0 w-12 h-10 rounded-xl border font-mono font-bold text-sm">0</button>
          </div>
        </div>
        
        <!-- SVG Circuit Diagram -->
        <svg class="w-full max-w-[280px] h-36" viewBox="0 0 200 120">
          <defs>
            <linearGradient id="bulb-grad-on" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#fef08a" />
              <stop offset="100%" stop-color="#eab308" />
            </linearGradient>
          </defs>
          
          <!-- Flow wires -->
          <!-- Wire A -->
          <path id="wire-a" d="M 25 35 L 75 35 L 75 52" class="wire-line inactive" />
          <path id="wire-a-flow" d="M 25 35 L 75 35 L 75 52" class="wire-flow" />
          
          <!-- Wire B -->
          <path id="wire-b" d="M 25 85 L 75 85 L 75 68" class="wire-line inactive" />
          <path id="wire-b-flow" d="M 25 85 L 75 85 L 75 68" class="wire-flow" />
          
          <!-- Wire Output -->
          <path id="wire-out" d="M 125 60 L 160 60" class="wire-line inactive" />
          <path id="wire-out-flow" d="M 125 60 L 160 60" class="wire-flow" />
          
          <!-- Gate node -->
          <g transform="translate(75, 40)">
            <rect width="50" height="40" rx="10" fill="#a78bfa" stroke="#ec4899" stroke-width="1.5" />
            <text x="25" y="24" fill="#ffffff" font-size="9" font-family="monospace" font-weight="bold" text-anchor="middle" id="gate-symbol-text">AND</text>
            <text x="25" y="33" fill="#fce7f3" font-size="6" font-family="sans-serif" text-anchor="middle">GATE</text>
          </g>
          
          <!-- Input labels -->
          <text x="20" y="38" fill="#71717a" font-size="9" font-family="monospace" text-anchor="end" font-weight="bold">A</text>
          <text x="20" y="88" fill="#71717a" font-size="9" font-family="monospace" text-anchor="end" font-weight="bold" id="label-text-b">B</text>
          
          <!-- Output Light Bulb -->
          <g transform="translate(160, 42)">
            <!-- Bulb base -->
            <rect x="8" y="24" width="10" height="5" rx="1" fill="#9ca3af" />
            <rect x="10" y="29" width="6" height="2" fill="#4b5563" />
            <!-- Bulb element -->
            <path id="bulb-element" d="M 13 6 A 8 8 0 0 1 19 22 L 17 24 L 9 24 L 7 22 A 8 8 0 0 1 13 6 Z" class="bulb-glow inactive" />
            <!-- Filaments -->
            <line x1="11" y1="18" x2="13" y2="13" stroke="#ffffff" stroke-width="0.5" opacity="0.6" />
            <line x1="15" y1="18" x2="13" y2="13" stroke="#ffffff" stroke-width="0.5" opacity="0.6" />
          </g>
        </svg>
        
        <div class="text-xs font-mono text-zinc-550 dark:text-zinc-400">
          Status Output: <span id="gate-output-val" class="font-bold text-pink-500">0 (OFF)</span>
        </div>
      </div>
      
      <!-- Truth Table -->
      <div class="overflow-hidden border border-zinc-150 dark:border-zinc-800 rounded-2xl w-full bg-white dark:bg-zinc-900">
        <table class="w-full text-center text-xs font-mono">
          <thead>
            <tr class="bg-pink-50/50 dark:bg-zinc-950 border-b border-zinc-150 dark:border-zinc-800 text-zinc-500">
              <th class="py-2.5 px-2">Input A</th>
              <th class="py-2.5 px-2" id="th-b">Input B</th>
              <th class="py-2.5 px-2">Output</th>
            </tr>
          </thead>
          <tbody id="truth-table-body" class="divide-y divide-zinc-100 dark:divide-zinc-850 text-zinc-700 dark:text-zinc-300">
            <!-- Populated dynamically -->
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>

<h4 class="text-base font-bold text-zinc-900 dark:text-white mt-8 mb-2 font-serif">Mengapa Kita Membutuhkan Bilangan Biner?</h4>
<p class="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed mb-4 text-justify font-sans">
  Bilangan biner mutlak diperlukan dalam dunia siber karena sirkuit fisik perangkat elektronik beroperasi menggunakan <strong>sinyal listrik</strong>. Sinyal listrik ini secara alami hanya memiliki dua kondisi stabil: mengalirkan listrik, yaitu <strong>ON (menyala)</strong>, dan terputus, yaitu <strong>OFF (mati)</strong>. 
</p>
<p class="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed mb-4 text-justify font-sans">
  Kondisi tersebut kemudian direpresentasikan menggunakan sistem bilangan berbasis 2 (biner) dengan simbol:
</p>
<ul class="space-y-1 mb-6">
  <li class="ml-4 list-disc text-sm text-zinc-700 dark:text-zinc-300"><strong>1</strong> merepresentasikan kondisi <strong>ON</strong> (Tegangan Tinggi / Sinyal Mengalir).</li>
  <li class="ml-4 list-disc text-sm text-zinc-700 dark:text-zinc-300"><strong>0</strong> merepresentasikan kondisi <strong>OFF</strong> (Tegangan Rendah / Sinyal Terputus).</li>
</ul>

<div class="glass-panel p-5 rounded-2xl border border-purple-100 dark:border-zinc-800 mb-6 bg-purple-50/10 dark:bg-purple-950/5">
  <h5 class="text-xs uppercase font-mono font-bold text-purple-600 dark:text-purple-400 mb-2">Manfaat Penggunaan Bilangan Biner:</h5>
  <ul class="space-y-2 text-xs text-zinc-650 dark:text-zinc-400">
    <li class="flex items-start gap-2">
      <svg class="w-4 h-4 text-purple-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/></svg>
      <span><strong>Sistem Menjadi Lebih Sederhana</strong>: Mengurangi kerumitan perancangan sirkuit elektronik karena hanya perlu mendeteksi dua level tegangan.</span>
    </li>
    <li class="flex items-start gap-2">
      <svg class="w-4 h-4 text-purple-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/></svg>
      <span><strong>Data Lebih Mudah Diproses &amp; Disimpan</strong>: Memory storage dapat dibuat dengan menyusun ribuan sel mikroskopis bermuatan listrik (ada muatan = 1, kosong = 0).</span>
    </li>
    <li class="flex items-start gap-2">
      <svg class="w-4 h-4 text-purple-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/></svg>
      <span><strong>Risiko Kesalahan Sangat Kecil</strong>: Sangat mudah membedakan sinyal "tinggi" dan "rendah" sehingga distorsi gangguan (noise) listrik tidak mudah merusak data.</span>
    </li>
    <li class="flex items-start gap-2">
      <svg class="w-4 h-4 text-purple-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/></svg>
      <span><strong>Sistem Lebih Stabil &amp; Efisien</strong>: Transmisi data digital jarak jauh memiliki keandalan yang jauh melampaui sinyal analog konvensional.</span>
    </li>
  </ul>
</div>

<!-- Author opinion quote card -->
<div class="my-8 p-6 rounded-2xl bg-gradient-to-br from-pink-50/50 via-purple-50/30 to-sky-50/40 dark:from-pink-950/10 dark:via-purple-950/10 dark:to-zinc-900/30 border border-pink-100 dark:border-pink-900/30 relative">
  <span class="absolute top-4 right-4 text-4xl text-pink-300/40 font-serif select-none leading-none">“</span>
  <div class="flex gap-4 items-start">
    <div class="w-10 h-10 rounded-full overflow-hidden border border-pink-200 flex-shrink-0">
      <img src="assets/alika2.jpg" alt="Alika Lotus" class="w-full h-full object-cover">
    </div>
    <div class="space-y-2">
      <span class="text-xs uppercase tracking-wider font-bold text-pink-600 dark:text-pink-400 font-mono">Opini Penulis</span>
      <p class="text-sm italic text-zinc-700 dark:text-zinc-300 leading-relaxed font-serif">
        "Menurut saya, sistem digital sangat penting karena menjadi fondasi utama teknologi modern. Kehidupan sehari-hari kita sangat bergantung pada sistem digital, mulai dari belajar, berkomunikasi, hingga hiburan. Memahami sistem digital membantu kita lebih mengerti cara kerja teknologi dan mempersiapkan diri menghadapi perkembangan teknologi di masa depan."
      </p>
    </div>
  </div>
</div>
`
    },
    {
      id: 'uu-ite',
      title: 'UU ITE: Etika & Konsekuensi Hukum di Ruang Digital',
      category: 'Keamanan Siber',
      date: '29 Juli 2026',
      author: 'Alika Lotus Apriyanto',
      readTime: '5 Menit Baca',
      image: 'assets/hukum.jpg',
      summary: 'Artikel edukatif interaktif mengenai Undang-Undang Informasi dan Transaksi Elektronik (UU ITE). Dilengkapi dengan Cyber Patrol Simulator interaktif untuk memahami klasifikasi pelanggaran hukum di dunia siber.',
      tags: ['UU ITE', 'Hukum Siber', 'Etika Digital', 'Cyber Patrol'],
      content: `
<style>
  /* Custom Styles and Animations for Cyber Patrol Simulator */
  .cyber-console {
    background-color: #07070d;
    border: 1px solid rgba(244, 114, 182, 0.15);
    font-family: var(--font-mono), monospace;
  }
  
  .dark .cyber-console {
    border: 1px solid rgba(244, 114, 182, 0.1);
  }

  .scenario-btn {
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .scenario-btn.selected {
    background-color: rgba(244, 114, 182, 0.12);
    border-color: rgba(244, 114, 182, 0.6);
    box-shadow: 0 0 12px rgba(244, 114, 182, 0.15);
  }

  /* Scan sweep animation */
  @keyframes scan-sweep {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  .scan-line {
    transform-origin: 60px 60px;
    transition: opacity 0.3s ease;
    opacity: 0;
  }

  .scan-line.scanning {
    opacity: 1;
    animation: scan-sweep 2s linear infinite;
  }

  /* Radar blips animation */
  @keyframes radar-blip {
    0%, 100% { transform: scale(0.5); opacity: 0; }
    50% { transform: scale(1.2); opacity: 0.8; }
  }

  .radar-blip-dot {
    transform-origin: center;
    display: none;
  }

  .radar-blip-dot.active {
    display: block;
    animation: radar-blip 1.5s infinite ease-in-out;
  }

  /* Warning/Success panels flashing */
  @keyframes flash-error {
    0%, 100% { background-color: rgba(239, 68, 68, 0.05); border-color: rgba(239, 68, 68, 0.2); }
    50% { background-color: rgba(239, 68, 68, 0.2); border-color: rgba(239, 68, 68, 0.7); }
  }

  @keyframes flash-warning {
    0%, 100% { background-color: rgba(245, 158, 11, 0.05); border-color: rgba(245, 158, 11, 0.2); }
    50% { background-color: rgba(245, 158, 11, 0.2); border-color: rgba(245, 158, 11, 0.7); }
  }

  @keyframes flash-success {
    0%, 100% { background-color: rgba(16, 185, 129, 0.05); border-color: rgba(16, 185, 129, 0.2); }
    50% { background-color: rgba(16, 185, 129, 0.2); border-color: rgba(16, 185, 129, 0.7); }
  }

  .alarm-error { animation: flash-error 1.2s infinite; }
  .alarm-warning { animation: flash-warning 1.2s infinite; }
  .alarm-success { animation: flash-success 1.2s infinite; }
  
  .terminal-cursor {
    display: inline-block;
    width: 6px;
    height: 14px;
    background-color: #f472b6;
    animation: blink-cursor 0.8s infinite;
    vertical-align: middle;
  }
  
  @keyframes blink-cursor {
    0%, 100% { opacity: 0; }
    50% { opacity: 1; }
  }
</style>

<div class="relative w-full rounded-2xl overflow-hidden mb-6 border border-pink-200/50 dark:border-pink-900/30 shadow-md">
  <img src="assets/hukum.jpg" alt="Undang Undang ITE" class="w-full h-auto object-cover max-h-64 sm:max-h-80">
  <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
    <span class="text-white text-xs font-mono bg-emerald-500/80 px-2.5 py-1 rounded">Edisi Hukum &amp; Etika Siber</span>
  </div>
</div>

<p class="text-sm sm:text-base leading-relaxed text-zinc-700 dark:text-zinc-300 mb-6 font-sans">
  <strong>Undang-Undang Informasi dan Transaksi Elektronik (UU ITE)</strong> adalah landasan hukum utama yang mengatur segala bentuk pemanfaatan teknologi informasi dan komunikasi di Indonesia. Lahir untuk memberikan kepastian hukum di dunia maya, UU ITE bertindak sebagai rambu-rambu agar setiap warganet berselancar secara aman, beretika, dan tidak merugikan orang lain.
</p>
<p class="text-sm sm:text-base leading-relaxed text-zinc-700 dark:text-zinc-300 mb-6 font-sans">
  Seiring maraknya interaksi digital, pemahaman terhadap pasal-pasal UU ITE sangat krusial agar kita tidak terjebak dalam tindakan yang berkonsekuensi pidana siber (cybercrime).
</p>

<h4 class="text-base font-bold text-zinc-900 dark:text-white mt-6 mb-3 font-serif">Pasal-Pasal Krusial UU ITE</h4>

<div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
  <!-- Pasal 27 -->
  <div class="glass-panel p-5 rounded-2xl border border-pink-200/40 dark:border-pink-900/30 flex flex-col justify-between">
    <div>
      <span class="text-xs font-mono font-bold px-2 py-0.5 rounded bg-pink-100 text-pink-700 dark:bg-pink-950/40 dark:text-pink-300">PASAL 27</span>
      <h5 class="text-xs font-bold text-zinc-800 dark:text-white mt-2 mb-1">Konten Ilegal &amp; Defamasi</h5>
      <p class="text-[11px] text-zinc-550 dark:text-zinc-400 leading-relaxed">
        Mengatur larangan penyebaran konten bermuatan kesusilaan, perjudian, pencemaran nama baik (fitnah/penghinaan), serta pemerasan atau pengancaman.
      </p>
    </div>
    <div class="text-[10px] text-pink-650 dark:text-pink-400 font-mono mt-3">Ancaman: Max 4 Tahun Penjara</div>
  </div>

  <!-- Pasal 28 -->
  <div class="glass-panel p-5 rounded-2xl border border-purple-200/40 dark:border-purple-900/30 flex flex-col justify-between">
    <div>
      <span class="text-xs font-mono font-bold px-2 py-0.5 rounded bg-purple-100 text-purple-700 dark:bg-purple-950/40 dark:text-purple-300">PASAL 28</span>
      <h5 class="text-xs font-bold text-zinc-800 dark:text-white mt-2 mb-1">Hoaks &amp; Ujaran Kebencian</h5>
      <p class="text-[11px] text-zinc-550 dark:text-zinc-400 leading-relaxed">
        Melarang penyebaran berita bohong yang merugikan konsumen (penipuan online) serta ujaran kebencian berbasis SARA (Suku, Agama, Ras, dan Antargolongan).
      </p>
    </div>
    <div class="text-[10px] text-purple-650 dark:text-purple-400 font-mono mt-3">Ancaman: Max 6 Tahun Penjara</div>
  </div>

  <!-- Pasal 30 -->
  <div class="glass-panel p-5 rounded-2xl border border-blue-200/40 dark:border-blue-900/30 flex flex-col justify-between">
    <div>
      <span class="text-xs font-mono font-bold px-2 py-0.5 rounded bg-blue-100 text-blue-700 dark:bg-blue-950/40 dark:text-blue-300">PASAL 30</span>
      <h5 class="text-xs font-bold text-zinc-800 dark:text-white mt-2 mb-1">Akses Ilegal (Hacking)</h5>
      <p class="text-[11px] text-zinc-550 dark:text-zinc-400 leading-relaxed">
        Melarang keras tindakan mengakses komputer atau sistem elektronik milik orang lain tanpa izin (hacking, pembobolan data, atau bypass proteksi keamanan).
      </p>
    </div>
    <div class="text-[10px] text-blue-650 dark:text-blue-400 font-mono mt-3">Ancaman: Max 6-8 Tahun Penjara</div>
  </div>
</div>

<!-- Simulator Interaktif -->
<div class="glass-panel p-5 rounded-3xl border border-pink-100 dark:border-zinc-800 my-6 bg-pink-50/10 dark:bg-zinc-950/20">
  <div class="flex flex-col gap-4">
    <div class="text-center">
      <span class="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300">SIMULATOR ETIKA</span>
      <h4 class="text-base font-bold text-zinc-900 dark:text-white mt-1.5 font-serif">Cyber Patrol Simulator (Pemindai UU ITE)</h4>
      <p class="text-xs text-zinc-500 mt-1">Pilih skenario perilaku digital di bawah ini, lalu jalankan pemindaian siber untuk menguji kesesuaian dengan UU ITE.</p>
    </div>

    <!-- Skenario Pilihan -->
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-2.5">
      <button onclick="window.selectCyberScenario('defamation', this)" class="scenario-btn selected p-3 border border-zinc-200 dark:border-zinc-800 rounded-xl text-left flex flex-col justify-between h-24 text-zinc-850 dark:text-zinc-100">
        <span class="text-[9px] font-mono font-bold text-pink-500">Pencemaran</span>
        <span class="text-[10px] text-zinc-650 dark:text-zinc-350 leading-snug line-clamp-3">Menuduh orang lain menipu di grup WA tanpa bukti valid.</span>
      </button>
      <button onclick="window.selectCyberScenario('hoax', this)" class="scenario-btn p-3 border border-zinc-200 dark:border-zinc-800 rounded-xl text-left flex flex-col justify-between h-24 text-zinc-850 dark:text-zinc-100">
        <span class="text-[9px] font-mono font-bold text-purple-500">Hoaks</span>
        <span class="text-[10px] text-zinc-650 dark:text-zinc-350 leading-snug line-clamp-3">Menyebarkan link undian palsu bermotif mencuri saldo rekening.</span>
      </button>
      <button onclick="window.selectCyberScenario('hacking', this)" class="scenario-btn p-3 border border-zinc-200 dark:border-zinc-800 rounded-xl text-left flex flex-col justify-between h-24 text-zinc-850 dark:text-zinc-100">
        <span class="text-[9px] font-mono font-bold text-blue-500">Hacking</span>
        <span class="text-[10px] text-zinc-650 dark:text-zinc-350 leading-snug line-clamp-3">Mengambil alih password akun e-learning teman menggunakan brute-force.</span>
      </button>
      <button onclick="window.selectCyberScenario('hate', this)" class="scenario-btn p-3 border border-zinc-200 dark:border-zinc-800 rounded-xl text-left flex flex-col justify-between h-24 text-zinc-850 dark:text-zinc-100">
        <span class="text-[9px] font-mono font-bold text-amber-500">SARA</span>
        <span class="text-[10px] text-zinc-650 dark:text-zinc-350 leading-snug line-clamp-3">Menulis provokasi kebencian suku ras di kolom komentar sosmed.</span>
      </button>
      <button onclick="window.selectCyberScenario('safe', this)" class="scenario-btn p-3 border border-zinc-200 dark:border-zinc-800 rounded-xl text-left flex flex-col justify-between h-24 text-zinc-850 dark:text-zinc-100">
        <span class="text-[9px] font-mono font-bold text-emerald-500">Kreatif</span>
        <span class="text-[10px] text-zinc-650 dark:text-zinc-350 leading-snug line-clamp-3">Membuat konten tutorial merakit PC di YouTube pribadi.</span>
      </button>
    </div>

    <!-- Simulator Terminal Console and Radar -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 items-stretch mt-2">
      <!-- Radar Screen (SVG Animating Glow Grid) -->
      <div class="flex flex-col items-center justify-center bg-zinc-950 p-4 rounded-2xl border border-zinc-900 relative overflow-hidden min-h-[160px]">
        <span class="text-[8px] font-mono text-zinc-500 tracking-wider absolute top-3 left-3">MONITOR PATROLI SIBER</span>
        
        <!-- Radar Grid SVG -->
        <svg class="w-28 h-28" viewBox="0 0 120 120">
          <!-- Concentric Circles -->
          <circle cx="60" cy="60" r="50" fill="none" stroke="#10b981" stroke-width="0.5" opacity="0.3" class="radar-grid" />
          <circle cx="60" cy="60" r="35" fill="none" stroke="#10b981" stroke-width="0.5" opacity="0.3" class="radar-grid" />
          <circle cx="60" cy="60" r="20" fill="none" stroke="#10b981" stroke-width="0.5" opacity="0.3" class="radar-grid" />
          
          <!-- Crosshairs -->
          <line x1="10" y1="60" x2="110" y2="60" stroke="#10b981" stroke-width="0.5" opacity="0.3" />
          <line x1="60" y1="10" x2="60" y2="110" stroke="#10b981" stroke-width="0.5" opacity="0.3" />
          
          <!-- Sweeper Line -->
          <line id="radar-sweeper" x1="60" y1="60" x2="60" y2="10" stroke="#10b981" stroke-width="1.5" class="scan-line" />
          
          <!-- Blips (Targets) -->
          <circle id="blip-defamation" cx="35" cy="35" r="4.5" fill="#f43f5e" class="radar-blip-dot" />
          <circle id="blip-hoax" cx="85" cy="35" r="4.5" fill="#a855f7" class="radar-blip-dot" />
          <circle id="blip-hacking" cx="35" cy="85" r="4.5" fill="#0ea5e9" class="radar-blip-dot" />
          <circle id="blip-hate" cx="85" cy="85" r="4.5" fill="#f59e0b" class="radar-blip-dot" />
          <circle id="blip-safe" cx="60" cy="35" r="4.5" fill="#10b981" class="radar-blip-dot" />
        </svg>
        
        <span id="radar-status-badge" class="text-[9px] font-mono font-bold bg-zinc-800 text-zinc-400 px-2 py-0.5 rounded mt-2">IDLE</span>
      </div>

      <!-- Console Log Screen -->
      <div class="cyber-console md:col-span-2 p-4 rounded-2xl flex flex-col justify-between text-xs text-zinc-350 min-h-[160px]">
        <div class="space-y-1.5 overflow-y-auto max-h-[100px] font-mono leading-relaxed" id="cyber-log-container">
          <div class="text-zinc-500">&gt; Sistem siap. Silakan pilih skenario aktivitas digital.</div>
          <div class="text-zinc-500">&gt; Klik "Mulai Pemindaian Siber" untuk memeriksa status.</div>
        </div>
        
        <div class="mt-4 pt-3 border-t border-zinc-900 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div class="text-[10px] text-zinc-500 font-mono">
            Aktivitas terpilih: <span id="selected-scenario-text" class="text-pink-400 font-bold">Pencemaran</span>
          </div>
          <button onclick="window.runCyberScanner()" id="scan-cyber-btn" class="px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold text-[10px] rounded-xl hover:shadow-md hover:shadow-pink-500/20 active:scale-95 transition-all text-center">
            Mulai Pemindaian Siber ⚡
          </button>
        </div>
      </div>
    </div>

    <!-- Alert Hasil Panel -->
    <div id="cyber-result-panel" class="hidden p-4 border rounded-2xl flex items-start gap-3 transition-all duration-300 animate-fade-in">
      <div id="result-icon-container" class="w-8 h-8 rounded-full flex items-center justify-center text-sm flex-shrink-0">
        <!-- SVG Icon here -->
      </div>
      <div>
        <h5 id="result-title-text" class="text-xs font-bold mb-1">Hasil Evaluasi Keamanan</h5>
        <p id="result-desc-text" class="text-[11px] leading-relaxed"></p>
      </div>
    </div>
  </div>
</div>

<h4 class="text-base font-bold text-zinc-900 dark:text-white mt-8 mb-2 font-serif">Pentingnya Menjaga Etika Digital (Netiquette)</h4>
<p class="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed mb-4 text-justify font-sans">
  Memahami hukum siber bukanlah sekadar agar terhindar dari jerat pidana. Hal yang jauh lebih esensial adalah membangun kesadaran bersama untuk menciptakan ruang siber yang sehat, ramah, dan produktif.
</p>
<p class="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed mb-4 text-justify font-sans">
  Berikut beberapa prinsip dasar etika digital yang patut kita terapkan setiap hari:
</p>

<ul class="space-y-2 mb-6">
  <li class="flex items-start gap-2.5 text-sm text-zinc-700 dark:text-zinc-300">
    <svg class="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
    <span><strong>Saring Sebelum Sharing</strong>: Pastikan kebenaran informasi sebelum membagikannya. Jangan ikut menyebarkan berita bohong atau hoaks yang membingungkan masyarakat.</span>
  </li>
  <li class="flex items-start gap-2.5 text-sm text-zinc-700 dark:text-zinc-300">
    <svg class="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
    <span><strong>Gunakan Bahasa yang Sopan</strong>: Ketikan di layar mencerminkan siapa kita. Hindari penghinaan, kata kasar, atau provokasi yang memicu konflik.</span>
  </li>
  <li class="flex items-start gap-2.5 text-sm text-zinc-700 dark:text-zinc-300">
    <svg class="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
    <span><strong>Hargai Privasi &amp; Karya Orang Lain</strong>: Jangan menyebarkan informasi pribadi orang lain tanpa izin (doxxing) dan selalu cantumkan sumber jika membagikan karya milik orang lain.</span>
  </li>
</ul>

<!-- Author opinion quote card -->
<div class="my-8 p-6 rounded-2xl bg-gradient-to-br from-pink-50/50 via-purple-50/30 to-sky-50/40 dark:from-pink-950/10 dark:via-purple-950/10 dark:to-zinc-900/30 border border-pink-100 dark:border-pink-900/30 relative font-sans">
  <span class="absolute top-4 right-4 text-4xl text-pink-300/40 font-serif select-none leading-none">“</span>
  <div class="flex gap-4 items-start">
    <div class="w-10 h-10 rounded-full overflow-hidden border border-pink-200 flex-shrink-0">
      <img src="assets/alika2.jpg" alt="Alika Lotus" class="w-full h-full object-cover">
    </div>
    <div class="space-y-2 font-sans">
      <span class="text-xs uppercase tracking-wider font-bold text-emerald-600 dark:text-emerald-400 font-mono">Opini Penulis</span>
      <p class="text-sm italic text-zinc-700 dark:text-zinc-300 leading-relaxed font-serif">
        "Bagiku, internet itu seperti pedang bermata dua. Jika digunakan untuk hal kreatif dan positif, ia bisa membuka gerbang peluang tanpa batas. Namun jika dipakai tanpa etika, ia bisa merusak reputasi bahkan menghancurkan masa depan kita sendiri. Mari menjadi warganet yang cerdas, sopan, dan taat hukum!"
      </p>
    </div>
  </div>
`
    },
    {
      id: 'uu-ite-privasi',
      title: 'UU ITE & Privasi: Mengamankan Data Pribadi di Era Siber',
      category: 'Keamanan Siber',
      date: '29 Juli 2026',
      author: 'Alika Lotus Apriyanto',
      readTime: '6 Menit Baca',
      image: 'assets/hukum.jpg',
      summary: 'Artikel edukatif interaktif mengenai perlindungan data pribadi dan pentingnya pengamanan informasi digital sesuai regulasi UU ITE. Dilengkapi simulator visualisasi enkripsi data untuk mendemonstrasikan proteksi terhadap penyadapan.',
      tags: ['UU ITE', 'Data Pribadi', 'Keamanan Siber', 'Enkripsi Data', 'Informatika'],
      content: `
<style>
  @keyframes spin-gear {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
  .animate-spin-gear {
    animation: spin-gear 3s linear infinite;
    transform-origin: center;
  }
  @keyframes shield-pulse {
    0%, 100% { transform: scale(1); filter: drop-shadow(0 0 4px rgba(244, 114, 182, 0.4)); }
    50% { transform: scale(1.1); filter: drop-shadow(0 0 12px rgba(244, 114, 182, 0.8)); }
  }
  .animate-shield-pulse {
    animation: shield-pulse 2s infinite ease-in-out;
    transform-origin: center;
  }
  .encrypt-wire-flow {
    fill: none;
    stroke-width: 2.5;
    stroke-linecap: round;
    opacity: 0;
  }
  .encrypt-wire-flow.active {
    stroke: #ec4899;
    opacity: 1;
    stroke-dasharray: 6, 6;
    animation: flow-dash 1.5s linear infinite;
    filter: drop-shadow(0 0 3px #ec4899);
  }
  .encrypt-wire-flow-back {
    fill: none;
    stroke-width: 2.5;
    stroke-linecap: round;
    opacity: 0;
  }
  .encrypt-wire-flow-back.active {
    stroke: #a78bfa;
    opacity: 1;
    stroke-dasharray: 6, 6;
    animation: flow-dash-reverse 1.5s linear infinite;
    filter: drop-shadow(0 0 3px #a78bfa);
  }
  @keyframes flow-dash-reverse {
    to {
      stroke-dashoffset: 20;
    }
  }
</style>

<div class="relative w-full rounded-2xl overflow-hidden mb-6 border border-pink-200/50 dark:border-pink-900/30 shadow-md">
  <img src="assets/hukum.jpg" alt="UU ITE & Privasi" class="w-full h-auto object-cover max-h-64 sm:max-h-80">
  <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
    <span class="text-white text-xs font-mono bg-pink-500/80 px-2.5 py-1 rounded">Edisi Perlindungan Data Pribadi</span>
  </div>
</div>

<p class="text-sm sm:text-base leading-relaxed text-zinc-700 dark:text-zinc-300 mb-6 font-sans">
  Di era siber saat ini, <strong>data pribadi</strong> adalah aset paling berharga sekaligus target utama kejahatan digital. Seiring disahkannya Undang-Undang Perlindungan Data Pribadi (UU PDP) serta diperbarui pasal-pasal dalam <strong>UU ITE (khususnya Pasal 26 dan Pasal 32)</strong>, perlindungan privasi warganet kini mendapatkan payung hukum yang jauh lebih tegas dan ketat.
</p>
<p class="text-sm sm:text-base leading-relaxed text-zinc-700 dark:text-zinc-300 mb-6 font-sans">
  Pasal 26 UU ITE menetapkan bahwa penggunaan setiap informasi melalui media elektronik yang menyangkut data pribadi seseorang <strong>harus dilakukan atas persetujuan orang yang bersangkutan</strong>. Sementara Pasal 32 melarang keras tindakan memindahkan, mengubah, atau menyembunyikan informasi elektronik milik orang lain secara ilegal. Salah satu cara teknis paling ampuh untuk mematuhi regulasi ini adalah menerapkan <strong>kriptografi (enkripsi data)</strong>.
</p>

<h4 class="text-base font-bold text-zinc-900 dark:text-white mt-6 mb-3 font-serif">Regulasi Hukum Perlindungan Data (UU ITE)</h4>

<div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 font-sans">
  <!-- Pasal 26 -->
  <div class="glass-panel p-5 rounded-2xl border border-pink-200/40 dark:border-pink-900/30 flex flex-col justify-between">
    <div>
      <span class="text-xs font-mono font-bold px-2 py-0.5 rounded bg-pink-100 text-pink-700 dark:bg-pink-950/40 dark:text-pink-300">PASAL 26 UU ITE</span>
      <h5 class="text-xs font-bold text-zinc-800 dark:text-white mt-2 mb-1">Hak Privasi & Persetujuan</h5>
      <p class="text-[11px] text-zinc-550 dark:text-zinc-400 leading-relaxed">
        Pemanfaatan data pribadi di media elektronik wajib atas persetujuan pemilik data. Pelanggaran hak ini dapat digugat secara perdata oleh korban.
      </p>
    </div>
    <div class="text-[10px] text-pink-650 dark:text-pink-400 font-mono mt-3">Prinsip: Consent & Hak untuk Dihapus</div>
  </div>

  <!-- Pasal 32 -->
  <div class="glass-panel p-5 rounded-2xl border border-purple-200/40 dark:border-purple-900/30 flex flex-col justify-between">
    <div>
      <span class="text-xs font-mono font-bold px-2 py-0.5 rounded bg-purple-100 text-purple-700 dark:bg-purple-950/40 dark:text-purple-300">PASAL 32 UU ITE</span>
      <h5 class="text-xs font-bold text-zinc-800 dark:text-white mt-2 mb-1">Integritas Data & Transmisi</h5>
      <p class="text-[11px] text-zinc-550 dark:text-zinc-400 leading-relaxed">
        Melarang pemindahan, modifikasi, penyadapan, perusakan, atau pembocoran data elektronik milik orang lain tanpa hak.
      </p>
    </div>
    <div class="text-[10px] text-purple-650 dark:text-purple-400 font-mono mt-3">Ancaman: Max 8 Tahun Penjara</div>
  </div>
</div>

<!-- Simulator Enkripsi Interaktif -->
<div class="glass-panel p-5 rounded-3xl border border-pink-100 dark:border-zinc-800 my-6 bg-pink-50/10 dark:bg-zinc-950/20 font-sans">
  <div class="flex flex-col gap-4">
    <div class="text-center">
      <span class="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-pink-100 text-pink-700 dark:bg-pink-950/40 dark:text-pink-300">LAB PRIVASI DATA</span>
      <h4 class="text-base font-bold text-zinc-900 dark:text-white mt-1.5 font-serif">Visualisator Enkripsi Kriptografi Data</h4>
      <p class="text-xs text-zinc-500 mt-1">Simulasikan bagaimana enkripsi menyandikan pesan sensitif menjadi kode acak (ciphertext) sehingga aman dari penyadapan menurut standar UU ITE.</p>
    </div>

    <!-- Input text & preset selector -->
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
      <div class="sm:col-span-2">
        <label class="text-[9px] font-mono font-bold text-zinc-400 block mb-1">MASUKKAN PESAN SENSITIF</label>
        <input type="text" id="encrypt-input-text" value="NIK: 3174092801080002" class="w-full text-xs bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl px-3 py-2 outline-none focus:border-pink-500 dark:focus:border-pink-500 text-zinc-800 dark:text-zinc-200">
      </div>
      <div>
        <label class="text-[9px] font-mono font-bold text-zinc-400 block mb-1">PILIH TEMPLATE DATA</label>
        <select onchange="window.changeEncryptPreset(this.value)" class="w-full text-xs bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl px-3 py-2 outline-none text-zinc-800 dark:text-zinc-200">
          <option value="nik">NIK KTP Rahasia</option>
          <option value="password">Kata Sandi Email</option>
          <option value="chat">Chat Rahasia</option>
        </select>
      </div>
    </div>

    <!-- SVG Circuit and Engine -->
    <div class="flex flex-col items-center justify-center p-4 bg-zinc-950/5 dark:bg-zinc-950/50 rounded-2xl border border-zinc-100 dark:border-zinc-900 relative">
      <svg class="w-full max-w-[320px] h-32" viewBox="0 0 300 100">
        <!-- Connecting Wires -->
        <path id="wire-encrypt-in" d="M 55 50 L 125 50" class="wire-line inactive" stroke-width="2" />
        <path id="wire-encrypt-in-flow" d="M 55 50 L 125 50" class="encrypt-wire-flow" />

        <path id="wire-encrypt-out" d="M 175 50 L 245 50" class="wire-line inactive" stroke-width="2" />
        <path id="wire-encrypt-out-flow" d="M 175 50 L 245 50" class="encrypt-wire-flow" />
        <path id="wire-encrypt-out-flow-back" d="M 245 50 L 175 50" class="encrypt-wire-flow-back" />

        <!-- Source Node -->
        <g transform="translate(15, 30)">
          <rect width="40" height="40" rx="10" fill="#f472b6" opacity="0.15" />
          <rect width="40" height="40" rx="10" fill="none" stroke="#f472b6" stroke-width="1.5" />
          <text x="20" y="24" fill="#ec4899" font-size="12" font-weight="bold" text-anchor="middle">A</text>
          <text x="20" y="32" fill="#71717a" font-size="6" font-family="monospace" text-anchor="middle">DATA</text>
        </g>

        <!-- Encryption Engine (Center) -->
        <g id="encrypt-engine-core" transform="translate(125, 25)">
          <circle cx="25" cy="25" r="24" fill="#1e1b4b" stroke="#6366f1" stroke-width="1.5" />
          <!-- Gear Spokes -->
          <g id="encrypt-gear" class="">
            <circle cx="25" cy="25" r="14" fill="none" stroke="#f472b6" stroke-width="2.5" stroke-dasharray="6, 3" />
            <circle cx="25" cy="25" r="8" fill="none" stroke="#a78bfa" stroke-width="2.5" stroke-dasharray="3, 3" />
          </g>
          <!-- Center Padlock Icon or Lock Symbol -->
          <path id="lock-icon-svg" d="M 21 24 L 29 24 L 29 31 L 21 31 Z M 23 24 L 23 21 A 2 2 0 0 1 27 21 L 27 24" fill="none" stroke="#ffffff" stroke-width="1.2" stroke-linecap="round" />
        </g>

        <!-- Destination Node -->
        <g id="dest-node-group" transform="translate(245, 30)">
          <rect id="dest-bg" width="40" height="40" rx="10" fill="#e4e4e7" class="transition-all duration-300" />
          <rect id="dest-border" width="40" height="40" rx="10" fill="none" stroke="#a1a1aa" stroke-width="1.5" class="transition-all duration-300" />
          <!-- Shield Vector -->
          <path id="shield-vector" d="M 20 12 L 11 16 L 11 22 C 11 27.5 15.5 31.5 20 33 C 24.5 31.5 29 27.5 29 22 L 29 16 Z" fill="none" stroke="#71717a" stroke-width="1.2" stroke-linejoin="round" class="transition-all duration-300" />
        </g>
      </svg>

      <!-- Display box comparisons -->
      <div class="grid grid-cols-2 gap-4 w-full mt-2 font-mono text-center">
        <div class="p-2 border border-zinc-150 dark:border-zinc-800 rounded-xl bg-white/50 dark:bg-zinc-900/50">
          <span class="text-[8px] text-zinc-450 dark:text-zinc-500 block mb-0.5">PLAIN DATA</span>
          <span id="display-plain-text" class="text-xs text-zinc-700 dark:text-zinc-300 truncate block">NIK: 3174...</span>
        </div>
        <div class="p-2 border border-zinc-150 dark:border-zinc-800 rounded-xl bg-white/50 dark:bg-zinc-900/50">
          <span class="text-[8px] text-zinc-450 dark:text-zinc-500 block mb-0.5">SECURE CIPHER</span>
          <span id="display-cipher-text" class="text-xs text-zinc-400 dark:text-zinc-500 truncate block">Unencrypted</span>
        </div>
      </div>
    </div>

    <!-- Controls Button & Logs -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
      <div class="flex flex-col justify-center gap-2">
        <button onclick="window.runEncryptionSim()" id="encrypt-action-btn" class="w-full py-2.5 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold text-xs rounded-xl hover:shadow-md hover:shadow-pink-500/20 active:scale-95 transition-all text-center">
          Enkripsikan Data 🔒
        </button>
      </div>

      <!-- Simulator terminal output -->
      <div class="cyber-console md:col-span-2 p-3 rounded-2xl flex flex-col justify-between text-xs text-zinc-350 min-h-[90px]">
        <div class="space-y-1 overflow-y-auto max-h-[70px] font-mono leading-relaxed text-[10px]" id="encrypt-log-container">
          <div class="text-zinc-500">&gt; Simulator siap. Masukkan pesan lalu klik "Enkripsikan Data".</div>
        </div>
      </div>
    </div>
  </div>
</div>

<h4 class="text-base font-bold text-zinc-900 dark:text-white mt-8 mb-2 font-serif">Bagaimana Kriptografi Melindungi Privasi Kita?</h4>
<p class="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed mb-4 text-justify font-sans">
  Kriptografi bekerja dengan cara mengacak pesan asli (Plaintext) menggunakan formula matematika khusus yang disebut <strong>kunci enkripsi</strong>. Hasil pengacakan ini (Ciphertext) mustahil dibaca oleh peretas atau penyadap di tengah jalan tanpa memiliki kunci pemulihannya (Kunci Dekripsi). 
</p>
<p class="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed mb-4 text-justify font-sans">
  Dalam implementasi transaksi elektronik legal (seperti e-banking, aplikasi chat WhatsApp dengan end-to-end encryption, atau database e-commerce), enkripsi adalah kewajiban dasar untuk mencegah kebocoran data yang melanggar hukum.
</p>

<!-- Author opinion quote card -->
<div class="my-8 p-6 rounded-2xl bg-gradient-to-br from-pink-50/50 via-purple-50/30 to-sky-50/40 dark:from-pink-950/10 dark:via-purple-950/10 dark:to-zinc-900/30 border border-pink-100 dark:border-pink-900/30 relative font-sans">
  <span class="absolute top-4 right-4 text-4xl text-pink-300/40 font-serif select-none leading-none">“</span>
  <div class="flex gap-4 items-start">
    <div class="w-10 h-10 rounded-full overflow-hidden border border-pink-200 flex-shrink-0">
      <img src="assets/alika2.jpg" alt="Alika Lotus" class="w-full h-full object-cover">
    </div>
    <div class="space-y-2 font-sans">
      <span class="text-xs uppercase tracking-wider font-bold text-pink-600 dark:text-pink-400 font-mono">Opini Penulis</span>
      <p class="text-sm italic text-zinc-700 dark:text-zinc-300 leading-relaxed font-serif">
        "Keamanan data pribadi adalah hak dasar setiap kita. Mengabaikan enkripsi di era siber sekarang sama saja seperti meninggalkan pintu rumah terbuka lebar di malam hari. Melalui kepatuhan UU ITE, mari kita tingkatkan kesadaran untuk selalu mengamankan informasi pribadi!"
      </p>
    </div>
  </div>
</div>
`
    },
    {
      id: 'vibe-coding',
      title: 'Vibe Coding: Era Baru Pemrograman Berbasis Agen Kecerdasan Buatan',
      category: 'Kecerdasan Buatan',
      date: '05 Agustus 2026',
      author: 'Alika Lotus Apriyanto',
      readTime: '6 Menit Baca',
      image: 'assets/vibe_coding.jpg',
      summary: 'Vibe coding merepresentasikan pergeseran paradigma di mana developer fokus pada visi dan logika sistem sementara AI menangani detail sintaksis dan penulisan kode program.',
      tags: ['Vibe Coding', 'Artificial Intelligence', 'Agentic Coding', 'Software Development'],
      content: `
<p class="text-sm sm:text-base leading-relaxed text-zinc-700 dark:text-zinc-300 mb-6 font-sans text-justify">
  <strong>Vibe coding</strong> adalah fenomena terbaru dalam dunia pengembangan perangkat lunak yang didefinisikan sebagai aktivitas pemrograman di mana developer tidak lagi menulis sintaksis baris demi baris secara manual. Sebaliknya, peran manusia bergeser menjadi konseptor, pengarah, dan kurator yang memberikan instruksi tingkat tinggi kepada agen kecerdasan buatan (<em>AI agents</em>) untuk menulis, merapikan, dan merefaktor basis kode. Istilah ini pertama kali populer untuk mendeskripsikan gaya kerja para pendiri startup dan teknolog yang mampu meluncurkan aplikasi fungsional dalam hitungan jam hanya dengan berdiskusi dengan asisten AI mereka, sambil menikmati prosesnya—atau secara harfiah, hanya "vibeing".
</p>

<p class="text-sm sm:text-base leading-relaxed text-zinc-700 dark:text-zinc-300 mb-6 font-sans text-justify">
  Secara teknis, <em>vibe coding</em> dimungkinkan oleh lompatan besar kapabilitas <em>Large Language Models</em> (LLM) dari sekadar pemberi saran kode (<em>code completion</em>) menjadi agen otonom yang mampu melakukan navigasi folder, membaca pustaka kode, mendeteksi kesalahan kompilasi (<em>compile error</em>), hingga menulis tes unit secara mandiri. Developer bertindak sebagai navigator yang menetapkan arsitektur sistem, merumuskan <em>user experience</em>, serta memvalidasi hasil kerja AI. Model interaksi ini menghilangkan beban mental dalam menghafal sintaksis bahasa pemrograman yang rumit atau mengatasi kesalahan penulisan kurung kurawal, sehingga membebaskan fokus manusia untuk memecahkan masalah logika yang lebih mendalam.
</p>

<!-- Interactive Vibe Coding Simulator -->
<div class="my-8 p-6 rounded-3xl border border-pink-200/20 dark:border-zinc-800 bg-zinc-950 text-white font-mono space-y-5 shadow-2xl overflow-hidden relative group/sim">
  <!-- Decorative Header -->
  <div class="flex items-center justify-between border-b border-zinc-850 pb-3">
    <div class="flex items-center gap-2">
      <span class="w-3 h-3 rounded-full bg-rose-500 shadow-sm shadow-rose-500/20"></span>
      <span class="w-3 h-3 rounded-full bg-amber-500 shadow-sm shadow-amber-500/20"></span>
      <span class="w-3 h-3 rounded-full bg-emerald-500 shadow-sm shadow-emerald-500/20"></span>
      <span class="text-xs text-zinc-400 ml-2 font-mono">vibe_agent_console.sh</span>
    </div>
    <span class="text-[9px] text-pink-500 border border-pink-500/30 px-2 py-0.5 rounded font-sans tracking-widest uppercase font-bold animate-pulse">● Agentic Simulator</span>
  </div>

  <!-- Chat / Prompt Input Bar -->
  <div class="space-y-2 font-sans">
    <label class="text-xs font-semibold text-zinc-300 dark:text-zinc-400">Instruksikan AI Agent Anda:</label>
    <div class="flex gap-2">
      <input type="text" id="vibe-prompt-input" 
        placeholder="Ketik instruksi (contoh: 'tambah efek salju', 'buat game baru')..." 
        class="flex-1 bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-pink-500/50 transition-all font-sans"
        onkeydown="if(event.key === 'Enter') runCustomVibeSim()" />
      <button onclick="runCustomVibeSim()" 
        class="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition-all shadow-md shadow-pink-500/10 active:scale-95 flex items-center gap-1.5 cursor-pointer font-sans">
        <span>Kirim</span>
        <svg class="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
          <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
        </svg>
      </button>
    </div>
    <div class="flex gap-1.5 flex-wrap pt-1.5">
      <span class="text-[10px] text-zinc-400">Coba template:</span>
      <button onclick="fillVibePrompt('Buat game ular klasik')" class="text-[9px] text-zinc-400 hover:text-pink-400 bg-zinc-900 border border-zinc-800 px-2 py-0.5 rounded-full cursor-pointer hover:border-pink-500/30 transition-all font-mono">Buat game ular klasik</button>
      <button onclick="fillVibePrompt('Tambahkan animasi partikel')" class="text-[9px] text-zinc-400 hover:text-pink-400 bg-zinc-900 border border-zinc-800 px-2 py-0.5 rounded-full cursor-pointer hover:border-pink-500/30 transition-all font-mono">Tambahkan animasi partikel</button>
      <button onclick="fillVibePrompt('Optimasi performa landing page')" class="text-[9px] text-zinc-400 hover:text-pink-400 bg-zinc-900 border border-zinc-800 px-2 py-0.5 rounded-full cursor-pointer hover:border-pink-500/30 transition-all font-mono">Optimasi performa landing page</button>
    </div>
  </div>

  <!-- Terminal Display -->
  <div class="relative w-full h-64 bg-zinc-900/90 rounded-2xl overflow-hidden flex flex-col border border-zinc-850 p-4 font-mono shadow-inner">
    <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(236,72,153,0.05),transparent_70%)]"></div>
    
    <div class="flex-1 overflow-y-auto text-[11px] leading-relaxed text-zinc-300 space-y-1.5 scrollbar-thin select-text" id="vibe-terminal-log">
      <div class="text-zinc-500 font-mono">// AI Agent siap menerima perintah di atas.</div>
      <div class="text-zinc-500 font-mono">// Silakan ketik perintah atau gunakan salah satu template untuk memulai simulasi coding otonom.</div>
    </div>

    <!-- Floating UI Card Overlay simulating AI decision tree -->
    <div class="absolute bottom-4 right-4 bg-zinc-950/95 border border-pink-500/20 p-3 rounded-2xl shadow-xl max-w-[190px] space-y-1.5 backdrop-blur-md transition-all duration-300 hover:border-pink-500/40">
      <div class="text-[8px] text-zinc-400 font-sans font-bold uppercase tracking-wider">AI AGENT STATE</div>
      <div class="flex items-center gap-1.5 text-[10px]">
        <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" id="agent-pulse-dot"></span>
        <span class="text-emerald-400 font-semibold font-sans" id="agent-confidence-text">Ready & Calm</span>
      </div>
      <div class="w-full h-1 bg-zinc-800 rounded-full overflow-hidden">
        <div class="h-full bg-gradient-to-r from-pink-500 to-purple-500" style="width: 100%" id="agent-confidence-bar"></div>
      </div>
    </div>
  </div>
</div>

<p class="text-sm sm:text-base leading-relaxed text-zinc-700 dark:text-zinc-300 mb-6 font-sans text-justify">
  Dampak paling nyata dari <em>vibe coding</em> adalah demokratisasi teknologi dan lonjakan produktivitas yang eksponensial. Seorang pengembang tunggal kini dapat bertindak layaknya tim pengembang lengkap (<em>full-stack engineering team</em>), mempercepat proses pembuatan prototipe (<em>rapid prototyping</em>) dari hitungan minggu menjadi hitungan menit. Selain itu, metode ini memungkinkan non-programmer untuk membangun perangkat lunak mereka sendiri dengan menggunakan bahasa alami, mereduksi batasan masuk (<em>barrier to entry</em>) ke industri digital secara signifikan dan mendorong inovasi kreatif secara masif di berbagai sektor.
</p>

<p class="text-sm sm:text-base leading-relaxed text-zinc-700 dark:text-zinc-300 mb-6 font-sans text-justify">
  Namun demikian, <em>vibe coding</em> bukan tanpa tantangan. Kebergantungan penuh pada kode buatan AI dapat menimbulkan risiko keamanan apabila model menghasilkan celah kerentanan tersembunyi (<em>hallucinated vulnerabilities</em>) atau kode yang sulit dipelihara (<em>technical debt</em>). Oleh karena itu, pemahaman mendasar tentang konsep ilmu komputer, desain arsitektur, dan prinsip keamanan siber tetap sangat krusial bagi developer modern. Di masa depan, pemrograman tidak akan lagi dipandang sebagai seni menulis teks kode yang misterius, melainkan seni merancang instruksi logis yang presisi untuk dikerjakan secara harmoni oleh kolaborasi manusia dan mesin.
</p>

<!-- Premium Video Player Wrapper -->
<div class="my-8">
  <h4 class="text-base font-bold text-zinc-900 dark:text-white mb-4 font-serif flex items-center gap-2">
    <span class="text-pink-500">🎬</span> Video Pendukung: Mengapa "Vibe Coding" Mengubah Segalanya
  </h4>
  <div class="relative w-full h-64 sm:h-96 rounded-2xl overflow-hidden border border-purple-100 dark:border-zinc-800 shadow-xl group/video cursor-pointer" onclick="playVibeVideo(this)">
    <!-- Custom Video Preview Overlay (Thumbnail) -->
    <div id="video-placeholder" class="absolute inset-0 bg-zinc-950 flex flex-col items-center justify-center text-center p-6 transition-all duration-500 group-hover/video:scale-105 z-10">
      <!-- Neon background glow -->
      <div class="absolute -inset-10 bg-gradient-to-tr from-pink-500/20 to-purple-500/20 blur-2xl opacity-70 group-hover/video:opacity-100 transition-opacity duration-500"></div>
      
      <!-- Video Cover Image/Art (Generated look) -->
      <div class="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-overlay" style="background-image: url('assets/vibe_coding.jpg');"></div>
      
      <!-- Play Button Icon with pulsing effects -->
      <div class="relative w-20 h-20 rounded-full bg-white/10 dark:bg-white/5 border border-white/30 flex items-center justify-center shadow-2xl backdrop-blur-md transition-all duration-300 group-hover/video:scale-110 group-hover/video:border-pink-500/50 group-hover/video:shadow-[0_0_30px_rgba(236,72,153,0.4)]">
        <span class="absolute inset-0 rounded-full border-2 border-pink-500/40 animate-ping group-hover/video:animate-none opacity-75"></span>
        <svg class="w-8 h-8 text-white fill-current translate-x-0.5 group-hover/video:text-pink-400 transition-colors" viewBox="0 0 24 24">
          <path d="M8 5v14l11-7z" />
        </svg>
      </div>
      
      <!-- Info overlay text -->
      <div class="mt-6 z-20 max-w-md flex flex-col items-center">
        <p class="text-xs font-mono uppercase tracking-widest text-pink-400 font-bold mb-1">YouTube Preview</p>
        <h5 class="text-white font-bold text-lg leading-tight font-serif drop-shadow-md">Vibe Coding: The Next Era of AI Software Engineering</h5>
        <p class="text-zinc-300 text-xs mt-2 font-sans line-clamp-2 mb-3">Pelajari bagaimana agen otonom dan pengembang berkolaborasi untuk membangun aplikasi dalam hitungan menit.</p>
        <a href="https://www.youtube.com/watch?v=iLCDSY2XX7E" target="_blank" onclick="event.stopPropagation();" class="px-4 py-2 bg-pink-500 hover:bg-pink-600 text-white rounded-xl text-xs font-bold transition-all shadow-md active:scale-95 inline-flex items-center gap-1.5 z-20 hover:scale-105">
          <span>Buka Langsung di YouTube ↗</span>
        </a>
      </div>
    </div>
    
    <!-- Real Iframe (Initially empty, loaded on click) -->
    <div id="video-iframe-container" class="absolute inset-0 w-full h-full hidden">
      <!-- Will be injected with iframe by JavaScript -->
    </div>
  </div>
</div>

<!-- Author opinion quote card -->
<div class="my-8 p-6 rounded-2xl bg-gradient-to-br from-pink-50/50 via-purple-50/30 to-sky-50/40 dark:from-pink-950/10 dark:via-purple-950/10 dark:to-zinc-900/30 border border-pink-100 dark:border-pink-900/30 relative font-sans">
  <span class="absolute top-4 right-4 text-4xl text-pink-300/40 font-serif select-none leading-none">“</span>
  <div class="flex gap-4 items-start">
    <div class="w-10 h-10 rounded-full overflow-hidden border border-pink-200 flex-shrink-0">
      <img src="assets/alika2.jpg" alt="Alika Lotus" class="w-full h-full object-cover">
    </div>
    <div class="space-y-2 font-sans">
      <span class="text-xs uppercase tracking-wider font-bold text-pink-600 dark:text-pink-400 font-mono">Opini Penulis</span>
      <p class="text-sm italic text-zinc-700 dark:text-zinc-300 leading-relaxed font-serif">
        "Bagiku, vibe coding itu sangat menyenangkan! Kita seperti sutradara film yang mengarahkan pemeran utama (AI) untuk melakukan aksi-aksi terbaiknya. Tapi ingat, sutradara yang handal harus mengerti jalan cerita dengan baik agar filmnya tidak kacau!"
      </p>
    </div>
  </div>
</div>
`
    }
  ];

  // Combine all searchable items
  const allSearchItems = [
    ...articlesData.map(item => ({ ...item, type: 'article' })),
    ...dataInformatika.map(item => ({ ...item, type: 'task' }))
  ];

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

  // Navigasi Header
  function setupHeaderEvents() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileNav = document.getElementById('mobileNav');

    if (mobileMenuBtn && mobileNav) {
      mobileMenuBtn.addEventListener('click', () => {
        mobileNav.classList.toggle('hidden');
      });
    }
  }

  // App Initialization
  document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    setupHeaderEvents();
    setupSearch();
    setupModals();
    setupPills();
    renderFeaturedArticles();
    renderTasksList();
    renderInformatika(dataInformatika);
    initHeroDashboard();

    // Focus search input on page load
    const searchInput = document.getElementById('googleSearchInput');
    if (searchInput) searchInput.focus();

    // Scroll Navbar effect
    const header = document.querySelector('header');
    if (header) {
      window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
          header.classList.add('backdrop-blur-md', 'bg-white/70', 'dark:bg-zinc-950/70', 'shadow-sm');
        } else {
          header.classList.remove('backdrop-blur-md', 'bg-white/70', 'dark:bg-zinc-950/70', 'shadow-sm');
        }
      });
    }
  });

  // Setup Interactive Hero Dashboard Stats
  function initHeroDashboard() {
    const simText = document.getElementById('sys-active-sim');
    const cpuText = document.getElementById('sys-cpu-load');
    const compileText = document.getElementById('sys-compiling-state');

    if (!simText || !cpuText || !compileText) return;

    const simulations = [
      'UU ITE Patroli',
      'Logic Gate Sim',
      'Mesh Topology',
      'Data Encryption',
      'Vibe Coding Agent'
    ];

    const states = [
      'OPTIMAL (98%)',
      'SYNCING (94%)',
      'STANDBY (100%)',
      'COMPILING (91%)'
    ];

    setInterval(() => {
      // Randomize CPU load
      const load = (Math.random() * 15 + 8).toFixed(1);
      cpuText.innerText = `${load}% CPU`;

      // Occasionally randomize simulation and state
      if (Math.random() > 0.7) {
        const randomSim = simulations[Math.floor(Math.random() * simulations.length)];
        simText.innerText = randomSim;
      }
      if (Math.random() > 0.8) {
        const randomState = states[Math.floor(Math.random() * states.length)];
        compileText.innerText = randomState;
      }
    }, 3000);
  }

  // Theme Management (Synced with index.html via localStorage)
  function initTheme() {
    const savedTheme = localStorage.getItem('alika_theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    const themeBtn = document.getElementById('themeToggleBtn');
    if (themeBtn && !document.getElementById('globalSearchInput')) {
      themeBtn.addEventListener('click', () => {
        const isDark = document.documentElement.classList.toggle('dark');
        localStorage.setItem('alika_theme', isDark ? 'dark' : 'light');
      });
    }
  }

  // Global active search tab state
  let activeSearchTab = 'all';

  // Search Tab Switches Trigger
  window.setSearchTab = function (tab) {
    activeSearchTab = tab;

    // Highlight active tab button
    const tabs = ['all', 'articles', 'tasks'];
    tabs.forEach(t => {
      const btn = document.getElementById(`tab-${t}`);
      if (btn) {
        if (t === tab || (tab === 'article' && t === 'articles') || (tab === 'task' && t === 'tasks')) {
          btn.classList.add('bg-white', 'dark:bg-zinc-800', 'text-blue-600', 'dark:text-blue-400', 'shadow-sm', 'font-bold');
          btn.classList.remove('text-slate-500', 'dark:text-zinc-400', 'font-semibold');
        } else {
          btn.classList.remove('bg-white', 'dark:bg-zinc-800', 'text-blue-600', 'dark:text-blue-400', 'shadow-sm', 'font-bold');
          btn.classList.add('text-slate-500', 'dark:text-zinc-400', 'font-semibold');
        }
      }
    });

    const searchInput = document.getElementById('googleSearchInput');
    const query = searchInput ? searchInput.value.trim() : '';

    if (query.length > 0) {
      if (window.performSearchGlobal) {
        window.performSearchGlobal(query);
      }
    } else {
      // Show / Hide default grids based on selected category when search is empty
      const featuredSection = document.getElementById('featuredSection');
      const tasksSection = document.getElementById('tasksSection');
      const resultsWrapper = document.getElementById('resultsWrapper');
      if (resultsWrapper) resultsWrapper.classList.add('hidden');

      if (tab === 'all') {
        if (featuredSection) featuredSection.classList.remove('hidden');
        if (tasksSection) tasksSection.classList.remove('hidden');
      } else if (tab === 'article') {
        if (featuredSection) featuredSection.classList.remove('hidden');
        if (tasksSection) tasksSection.classList.add('hidden');
      } else if (tab === 'task') {
        if (featuredSection) featuredSection.classList.add('hidden');
        if (tasksSection) tasksSection.classList.remove('hidden');
      }
    }
  };

  // Search Logic
  function setupSearch() {
    const searchInput = document.getElementById('googleSearchInput');
    const luckyBtn = document.getElementById('luckyBtn');
    const clearBtn = document.getElementById('clearSearchBtn');
    const searchContainer = document.getElementById('searchContainer');
    const resultsWrapper = document.getElementById('resultsWrapper');
    const resultsStats = document.getElementById('resultsStats');
    const resultsList = document.getElementById('resultsList');

    if (!searchInput || !searchContainer) {
      return;
    }

    function performSearch(query) {
      const q = query.toLowerCase().trim();

      // Toggle clear button visibility
      if (clearBtn) {
        if (q.length > 0) {
          clearBtn.classList.remove('hidden');
        } else {
          clearBtn.classList.add('hidden');
          resetToHome();
          return;
        }
      }

      const startTime = performance.now();

      // Filter items based on query matching title, summary, tags, category
      let filtered = allSearchItems.filter(item =>
        (item.title && item.title.toLowerCase().includes(q)) ||
        (item.summary && item.summary.toLowerCase().includes(q)) ||
        (item.category && item.category.toLowerCase().includes(q)) ||
        (item.tags && item.tags.some(t => t.toLowerCase().includes(q)))
      );

      // Apply active tab filter
      if (activeSearchTab === 'article') {
        filtered = filtered.filter(item => item.type === 'article');
      } else if (activeSearchTab === 'task') {
        filtered = filtered.filter(item => item.type === 'task');
      }

      const endTime = performance.now();
      const duration = ((endTime - startTime) / 1000).toFixed(4);

      // Transition Layout: Shift search bar to active state, show results wrapper
      if (resultsWrapper) {
        resultsWrapper.classList.remove('hidden');
        resultsWrapper.classList.add('animate-fade-in');
      }

      // Hide default featured grid & tasks grid when searching
      const featuredSection = document.getElementById('featuredSection');
      if (featuredSection) featuredSection.classList.add('hidden');
      const tasksSection = document.getElementById('tasksSection');
      if (tasksSection) tasksSection.classList.add('hidden');

      // Display Stats
      if (resultsStats) {
        resultsStats.innerHTML = `Sekitar ${filtered.length} hasil (${duration} detik)`;
      }

      // Render Results List (Premium Cards Grid matching theme)
      if (resultsList) {
        if (filtered.length === 0) {
          resultsList.innerHTML = `
          <div class="col-span-full py-12 text-slate-500 dark:text-zinc-400 text-center bg-white dark:bg-zinc-900 border border-slate-200/60 dark:border-zinc-800/40 rounded-3xl p-8 shadow-sm">
            <p class="text-base mb-2">Penelusuran Anda - <strong class="text-slate-800 dark:text-zinc-100">${escapeHtml(query)}</strong> - tidak cocok dengan dokumen apa pun.</p>
            <p class="text-sm mt-4 text-slate-400">Saran:</p>
            <ul class="list-none mt-2 text-xs space-y-1 text-slate-400">
              <li>Pastikan semua kata dieja dengan benar.</li>
              <li>Coba kata kunci lain atau yang lebih umum.</li>
              <li>Coba filter atau tag pencarian yang berbeda.</li>
            </ul>
          </div>
        `;
        } else {
          resultsList.innerHTML = filtered.map(item => {
            const categoryClass = getPastelCategoryClasses(item.category);
            if (item.type === 'article') {
              return `
              <div onclick="openInfoArticleModal('${item.id}')"
                class="glass-panel p-6 rounded-[1.5rem] border border-white/50 dark:border-white/5 hover:border-pink-300 dark:hover:border-pink-700/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group cursor-pointer animate-fade-in card-hologram">
                <div>
                  ${item.image ? `
                  <div class="w-full h-44 rounded-2xl overflow-hidden mb-4 relative border border-zinc-100 dark:border-zinc-800/30">
                    <img src="${item.image}" alt="${item.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                    <div class="absolute inset-0 bg-gradient-to-t from-zinc-950/20 via-transparent to-transparent opacity-60"></div>
                  </div>` : ''}
                  <div class="flex items-center justify-between mb-3.5">
                    <span class="tag-badge border ${categoryClass}">
                      ${item.category}
                    </span>
                    <span class="text-[10px] font-mono text-slate-400 dark:text-zinc-555">${item.date}</span>
                  </div>
                  <h3 class="text-base font-bold text-slate-900 dark:text-white mb-2 group-hover:text-pink-500 transition-colors leading-tight">
                    ${item.title}
                  </h3>
                  <p class="text-xs text-slate-500 dark:text-zinc-400 line-clamp-3 leading-relaxed mb-4">
                    ${item.summary}
                  </p>
                </div>
                <div class="pt-4 border-t border-pink-100/50 dark:border-zinc-800/40 flex items-center justify-between text-xs text-slate-400 dark:text-zinc-555">
                  <span class="italic font-medium text-slate-500">Oleh: ${item.author}</span>
                  <span class="text-pink-600 dark:text-pink-400 font-extrabold group-hover:underline flex items-center gap-1">
                    Baca Jurnal &rarr;
                  </span>
                </div>
              </div>
            `;
            } else {
              return `
              <div onclick="openInfoModal('${item.id}')"
                class="glass-panel p-6 rounded-[1.5rem] border border-white/50 dark:border-white/5 hover:border-pink-300 dark:hover:border-pink-700/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group cursor-pointer animate-fade-in card-hologram">
                <div>
                  <div class="flex items-center justify-between mb-3.5">
                    <span class="tag-badge border ${categoryClass}">
                      ${item.category}
                    </span>
                    <span class="text-[10px] font-mono text-slate-400 dark:text-zinc-555">Nilai: <strong class="text-emerald-500 font-bold font-mono">${item.score}</strong></span>
                  </div>
                  <h3 class="text-base font-bold text-slate-900 dark:text-white mb-2 group-hover:text-pink-500 transition-colors leading-tight">
                    ${item.title}
                  </h3>
                  <p class="text-xs text-slate-500 dark:text-zinc-400 line-clamp-3 leading-relaxed mb-4">
                    ${item.summary}
                  </p>
                </div>
                <div class="pt-4 border-t border-pink-100/50 dark:border-zinc-800/40 flex items-center justify-between text-xs text-slate-400 dark:text-zinc-555">
                  <span class="font-mono text-[10px]">Ukuran: ${item.fileSize || 'N/A'}</span>
                  <span class="text-pink-600 dark:text-pink-400 font-extrabold group-hover:underline flex items-center gap-1">
                    Lihat Kode &rarr;
                  </span>
                </div>
              </div>
            `;
            }
          }).join('');
        }
      }
    }

    // Expose performSearch globally
    window.performSearchGlobal = performSearch;

    function resetToHome() {
      searchInput.value = '';
      if (clearBtn) clearBtn.classList.add('hidden');
      if (resultsWrapper) resultsWrapper.classList.add('hidden');
      if (resultsList) resultsList.innerHTML = '';
      if (resultsStats) resultsStats.innerHTML = '';

      // Show featured section and tasks section depending on selected tab
      const featuredSection = document.getElementById('featuredSection');
      const tasksSection = document.getElementById('tasksSection');
      if (activeSearchTab === 'all') {
        if (featuredSection) featuredSection.classList.remove('hidden');
        if (tasksSection) tasksSection.classList.remove('hidden');
      } else if (activeSearchTab === 'article') {
        if (featuredSection) featuredSection.classList.remove('hidden');
        if (tasksSection) tasksSection.classList.add('hidden');
      } else if (activeSearchTab === 'task') {
        if (featuredSection) featuredSection.classList.add('hidden');
        if (tasksSection) tasksSection.classList.remove('hidden');
      }
    }

    // Trigger search on input change (Instant Search)
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        performSearch(e.target.value);
      });

      searchInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          performSearch(searchInput.value);
        }
      });
    }

    // Clear Button click handler
    if (clearBtn) {
      clearBtn.addEventListener('click', () => {
        resetToHome();
        if (searchInput) searchInput.focus();
      });
    }

    // I'm Feeling Lucky Button (Opens a random article/task in a modal)
    if (luckyBtn) {
      luckyBtn.addEventListener('click', () => {
        const randomIndex = Math.floor(Math.random() * allSearchItems.length);
        const randomItem = allSearchItems[randomIndex];
        if (randomItem.type === 'article') {
          openInfoArticleModal(randomItem.id);
        } else {
          openInfoModal(randomItem.id);
        }
      });
    }

    // Expose search trigger globally so tag clicks work
    window.triggerTagSearch = function (tag) {
      if (searchInput) {
        searchInput.value = tag;
        performSearch(tag);
        searchInput.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };
  }

  function renderFeaturedArticles() {
    const container = document.getElementById('featuredArticlesList');
    if (!container) return;

    container.innerHTML = articlesData.map(item => {
      const categoryClass = getPastelCategoryClasses(item.category);
      return `
      <div onclick="openInfoArticleModal('${item.id}')"
        class="glass-panel p-6 rounded-[1.5rem] border border-white/50 dark:border-white/5 hover:border-pink-300 dark:hover:border-pink-700/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group cursor-pointer animate-fade-in card-hologram">
        <div>
          ${item.image ? `
          <div class="w-full h-44 rounded-2xl overflow-hidden mb-4 relative border border-zinc-100 dark:border-zinc-800/30">
            <img src="${item.image}" alt="${item.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
            <div class="absolute inset-0 bg-gradient-to-t from-zinc-950/20 via-transparent to-transparent opacity-60"></div>
          </div>` : ''}
          <div class="flex items-center justify-between mb-3.5">
            <span class="tag-badge border ${categoryClass}">
              ${item.category}
            </span>
            <span class="text-[10px] font-mono text-slate-400 dark:text-zinc-555">${item.date}</span>
          </div>
          <h3 class="text-base font-bold text-slate-900 dark:text-white mb-2 group-hover:text-pink-500 transition-colors leading-tight">
            ${item.title}
          </h3>
          <p class="text-xs text-slate-500 dark:text-zinc-400 line-clamp-3 leading-relaxed mb-4">
            ${item.summary}
          </p>
        </div>
        <div class="pt-4 border-t border-pink-100/50 dark:border-zinc-800/40 flex items-center justify-between text-xs text-slate-400 dark:text-zinc-555">
          <span class="italic font-medium text-slate-500">Oleh: ${item.author}</span>
          <span class="text-pink-600 dark:text-pink-400 font-extrabold group-hover:underline flex items-center gap-1">
            Baca Jurnal &rarr;
          </span>
        </div>
      </div>
    `;
    }).join('');
  }

  function renderTasksList() {
    const container = document.getElementById('tasksList');
    if (!container) return;

    container.innerHTML = dataInformatika.map(item => {
      const categoryClass = getPastelCategoryClasses(item.category);
      return `
      <div onclick="openInfoModal('${item.id}')"
        class="glass-panel p-6 rounded-[1.5rem] border border-white/50 dark:border-white/5 hover:border-pink-300 dark:hover:border-pink-700/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group cursor-pointer animate-fade-in card-hologram">
        <div>
          <div class="flex items-center justify-between mb-3.5">
            <span class="tag-badge border ${categoryClass}">
              ${item.category}
            </span>
            <span class="text-[10px] font-mono text-slate-400 dark:text-zinc-555">Nilai: <strong class="text-emerald-500 font-bold font-mono">${item.score}</strong></span>
          </div>
          <h3 class="text-base font-bold text-slate-900 dark:text-white mb-2 group-hover:text-pink-500 transition-colors leading-tight">
            ${item.title}
          </h3>
          <p class="text-xs text-slate-500 dark:text-zinc-400 line-clamp-3 leading-relaxed mb-4">
            ${item.summary}
          </p>
        </div>
        <div class="pt-4 border-t border-pink-100/50 dark:border-zinc-800/40 flex items-center justify-between text-xs text-slate-400 dark:text-zinc-555">
          <span class="font-mono text-[10px]">Ukuran: ${item.fileSize || 'N/A'}</span>
          <span class="text-pink-600 dark:text-pink-400 font-extrabold group-hover:underline flex items-center gap-1">
            Lihat Kode &rarr;
          </span>
        </div>
      </div>
    `;
    }).join('');
  }

  // Render Card Tugas Informatika ke Grid infoGrid (mengikuti bindoGrid)
  function renderInformatika(items) {
    const container = document.getElementById('infoGrid');
    if (!container) return;

    if (items.length === 0) {
      container.innerHTML = `
      <div class="col-span-full py-16 text-center text-zinc-550 dark:text-zinc-400">
        <svg class="w-12 h-12 mx-auto mb-3 text-pink-300 dark:text-pink-850" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
        <p class="font-medium text-sm">Tidak ada tugas Informatika yang cocok.</p>
      </div>`;
      return;
    }

    container.innerHTML = items.map(item => `
    <div class="glass-panel p-6 rounded-[1.5rem] border border-white/50 dark:border-white/5 hover:border-pink-300 dark:hover:border-pink-700/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group card-hologram">
      <div>
        ${item.image ? `
        <div class="w-full h-48 rounded-2xl overflow-hidden mb-4 relative">
          <img src="${item.image}" alt="${item.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
        </div>` : ''}
        <div class="flex items-center justify-between mb-4">
          <span class="tag-badge border ${getPastelCategoryClasses(item.category)}">
            ${item.category}
          </span>
          <span class="text-xs font-semibold text-zinc-450 dark:text-zinc-500">Nilai: <strong class="text-emerald-500 font-bold font-mono">${item.score}</strong></span>
        </div>
        <h3 class="text-xl font-bold text-zinc-900 dark:text-white mb-2 group-hover:text-pink-500 transition-colors">
          ${item.title}
        </h3>
        <p class="text-sm text-zinc-500 dark:text-zinc-455 mb-6 line-clamp-3 leading-relaxed">
          ${item.summary}
        </p>
      </div>

      <div>
        <div class="flex flex-wrap gap-1.5 mb-5">
          ${item.tags.map(t => `<span class="text-[11px] px-2 py-0.5 rounded bg-zinc-50 dark:bg-zinc-900/40 text-zinc-500 dark:text-zinc-450 font-mono border border-zinc-200/50 dark:border-zinc-800/40 font-mono">#${t}</span>`).join('')}
        </div>
        <div class="pt-4 border-t border-pink-100/50 dark:border-zinc-800/40 flex items-center justify-between">
          <span class="text-xs font-semibold text-zinc-500 dark:text-zinc-400 font-mono">
            ${item.date}
          </span>
          <button onclick="openInfoModal('${item.id}')" 
            class="relative inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl text-xs font-extrabold text-white bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 active:scale-95 shadow-md shadow-pink-500/20 hover:shadow-lg hover:shadow-purple-500/25 hover:-translate-y-0.5 transition-all duration-300 group overflow-hidden">
            <span class="absolute inset-0 w-full h-full bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></span>
            <span>Lihat Kode</span>
            <svg class="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  `).join('');
  }


  // Quick Labs Shortcuts Handlers
  window.openQuickLab = function (id, el) {
    if (el) {
      el.classList.add('clicked-pulse');
      setTimeout(() => {
        el.classList.remove('clicked-pulse');
        openInfoArticleModal(id);
      }, 250);
    } else {
      openInfoArticleModal(id);
    }
  };

  // Gallery Lightbox Handlers
  window.openGalleryLightbox = function (src, caption) {
    const lightbox = document.getElementById('galleryLightbox');
    const img = document.getElementById('lightboxImage');
    const captionEl = document.getElementById('lightboxCaption');
    if (lightbox && img) {
      img.src = src;
      if (captionEl) captionEl.innerText = caption;
      lightbox.classList.remove('hidden');
      lightbox.classList.add('flex');
      document.body.classList.add('overflow-hidden');
    }
  };

  window.closeGalleryLightbox = function () {
    const lightbox = document.getElementById('galleryLightbox');
    if (lightbox) {
      lightbox.classList.add('hidden');
      lightbox.classList.remove('flex');
      document.body.classList.remove('overflow-hidden');
    }
  };

  // Logic Gate Simulator State
  let gateSimState = {
    gateType: 'AND',
    inputA: 0,
    inputB: 0
  };

  window.setGateSimType = function (type) {
    gateSimState.gateType = type;

    // Highlight active button
    const buttons = document.querySelectorAll('.gate-btn');
    buttons.forEach(btn => {
      if (btn.id === `gate-btn-${type}`) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    // Show or hide input B based on gate type (NOT gate only has 1 input A)
    const inputBContainer = document.getElementById('input-B-container');
    const wireB = document.getElementById('wire-b');
    const wireBFlow = document.getElementById('wire-b-flow');
    const labelB = document.getElementById('label-text-b');
    const thB = document.getElementById('th-b');

    if (type === 'NOT') {
      if (inputBContainer) inputBContainer.style.display = 'none';
      if (wireB) wireB.style.display = 'none';
      if (wireBFlow) wireBFlow.style.display = 'none';
      if (labelB) labelB.style.display = 'none';
      if (thB) thB.style.display = 'none';
    } else {
      if (inputBContainer) inputBContainer.style.display = 'flex';
      if (wireB) wireB.style.display = 'block';
      if (wireBFlow) wireBFlow.style.display = 'block';
      if (labelB) labelB.style.display = 'block';
      if (thB) thB.style.display = 'table-cell';
    }

    // Update SVG gate symbol text
    const symbolText = document.getElementById('gate-symbol-text');
    if (symbolText) symbolText.innerText = type;

    // Re-render truth table body
    renderTruthTable();

    // Recalculate and update
    window.updateGateSimulation();
  };

  window.toggleGateSimInput = function (inputName) {
    if (inputName === 'A') {
      gateSimState.inputA = gateSimState.inputA === 0 ? 1 : 0;
      const btnA = document.getElementById('input-toggle-A');
      if (btnA) {
        btnA.innerText = gateSimState.inputA;
        btnA.className = `input-toggle rounded-xl border font-bold text-sm w-12 h-10 val-${gateSimState.inputA}`;
      }
    } else if (inputName === 'B') {
      gateSimState.inputB = gateSimState.inputB === 0 ? 1 : 0;
      const btnB = document.getElementById('input-toggle-B');
      if (btnB) {
        btnB.innerText = gateSimState.inputB;
        btnB.className = `input-toggle rounded-xl border font-bold text-sm w-12 h-10 val-${gateSimState.inputB}`;
      }
    }

    window.updateGateSimulation();
  };

  window.updateGateSimulation = function () {
    const aNum = gateSimState.inputA;
    const bNum = gateSimState.inputB;
    const a = aNum === 1;
    const b = bNum === 1;
    const gate = gateSimState.gateType;

    let outVal = false;
    if (gate === 'AND') {
      outVal = (a && b);
    } else if (gate === 'OR') {
      outVal = (a || b);
    } else if (gate === 'XOR') {
      outVal = (a !== b);
    } else if (gate === 'NOT') {
      outVal = (!a);
    }

    const out = outVal ? 1 : 0;
    console.log(`[Simulator Update] Gate: ${gate}, Input A: ${aNum}, Input B: ${bNum} => Output: ${out}`);

    // Update wire flows visual states
    const wireA = document.getElementById('wire-a');
    const wireAFlow = document.getElementById('wire-a-flow');
    const wireB = document.getElementById('wire-b');
    const wireBFlow = document.getElementById('wire-b-flow');
    const wireOut = document.getElementById('wire-out');
    const wireOutFlow = document.getElementById('wire-out-flow');

    // Sync toggle button states in case they were reset or loaded
    const btnA = document.getElementById('input-toggle-A');
    if (btnA) {
      btnA.innerText = aNum;
      btnA.className = `input-toggle rounded-xl border font-bold text-sm w-12 h-10 val-${aNum}`;
    }
    const btnB = document.getElementById('input-toggle-B');
    if (btnB) {
      btnB.innerText = bNum;
      btnB.className = `input-toggle rounded-xl border font-bold text-sm w-12 h-10 val-${bNum}`;
    }

    if (aNum === 1) {
      if (wireA) wireA.className = 'wire-line active';
      if (wireAFlow) wireAFlow.className = 'wire-flow active';
    } else {
      if (wireA) wireA.className = 'wire-line inactive';
      if (wireAFlow) wireAFlow.className = 'wire-flow';
    }

    if (gate !== 'NOT' && b === 1) {
      if (wireB) wireB.className = 'wire-line active';
      if (wireBFlow) wireBFlow.className = 'wire-flow active';
    } else {
      if (wireB) wireB.className = 'wire-line inactive';
      if (wireBFlow) wireBFlow.className = 'wire-flow';
    }

    if (out === 1) {
      if (wireOut) wireOut.className = 'wire-line active';
      if (wireOutFlow) wireOutFlow.className = 'wire-flow active';
    } else {
      if (wireOut) wireOut.className = 'wire-line inactive';
      if (wireOutFlow) wireOutFlow.className = 'wire-flow';
    }

    // Update Light Bulb state
    const bulb = document.getElementById('bulb-element');
    if (bulb) {
      bulb.setAttribute('class', `bulb-glow ${out === 1 ? 'active' : 'inactive'}`);
    }

    // Update output text label
    const outputText = document.getElementById('gate-output-val');
    if (outputText) {
      outputText.innerHTML = out === 1 ? '<span class="text-emerald-500 font-bold">1 (ON)</span>' : '<span class="text-zinc-400 font-bold">0 (OFF)</span>';
    }

    // Highlight Truth Table active row
    const rows = document.querySelectorAll('.tr-highlight');
    rows.forEach(row => {
      const rowA = parseInt(row.getAttribute('data-a'));
      const rowB = parseInt(row.getAttribute('data-b'));

      if (gate === 'NOT') {
        if (rowA === a) {
          row.classList.add('active', 'bg-pink-100/50', 'dark:bg-pink-950/40');
        } else {
          row.classList.remove('active', 'bg-pink-100/50', 'dark:bg-pink-950/40');
        }
      } else {
        if (rowA === a && rowB === b) {
          row.classList.add('active', 'bg-pink-100/50', 'dark:bg-pink-950/40');
        } else {
          row.classList.remove('active', 'bg-pink-100/50', 'dark:bg-pink-950/40');
        }
      }
    });
  };

  function renderTruthTable() {
    const tableBody = document.getElementById('truth-table-body');
    if (!tableBody) return;

    const gate = gateSimState.gateType;
    let rowsHtml = '';

    if (gate === 'NOT') {
      const combos = [0, 1];
      rowsHtml = combos.map(aVal => {
        const outNum = (!aVal) ? 1 : 0;
        return `
        <tr class="tr-highlight cursor-default hover:bg-zinc-50 dark:hover:bg-zinc-900" data-a="${aVal}">
          <td class="py-2 px-1">${aVal}</td>
          <td class="py-2 px-1 font-bold text-pink-500">${outNum}</td>
        </tr>
      `;
      }).join('');
    } else {
      const combos = [
        { a: 0, b: 0 },
        { a: 0, b: 1 },
        { a: 1, b: 0 },
        { a: 1, b: 1 }
      ];
      rowsHtml = combos.map(item => {
        const aVal = item.a === 1;
        const bVal = item.b === 1;
        let outVal = false;
        if (gate === 'AND') outVal = (aVal && bVal);
        else if (gate === 'OR') outVal = (aVal || bVal);
        else if (gate === 'XOR') outVal = (aVal !== bVal);

        const outNum = outVal ? 1 : 0;
        return `
        <tr class="tr-highlight cursor-default hover:bg-zinc-50 dark:hover:bg-zinc-900" data-a="${item.a}" data-b="${item.b}">
          <td class="py-2 px-1">${item.a}</td>
          <td class="py-2 px-1">${item.b}</td>
          <td class="py-2 px-1 font-bold text-pink-500">${outNum}</td>
        </tr>
      `;
      }).join('');
    }

    tableBody.innerHTML = rowsHtml;
  }

  window.initLogicGateSim = function () {
    gateSimState = {
      gateType: 'AND',
      inputA: 0,
      inputB: 0
    };

    const btnA = document.getElementById('input-toggle-A');
    if (btnA) {
      btnA.innerText = '0';
      btnA.className = 'input-toggle rounded-xl border font-bold text-sm w-12 h-10 val-0';
    }
    const btnB = document.getElementById('input-toggle-B');
    if (btnB) {
      btnB.innerText = '0';
      btnB.className = 'input-toggle rounded-xl border font-bold text-sm w-12 h-10 val-0';
    }

    window.setGateSimType('AND');
  };

  // ==========================================
  // Cyber Patrol Simulator Logic (UU ITE)
  // ==========================================
  let cyberSimState = {
    selectedScenario: 'defamation',
    isScanning: false
  };

  const cyberScenarios = {
    defamation: {
      name: 'Pencemaran Nama Baik',
      badgeClass: 'text-pink-500',
      blipId: 'blip-defamation',
      code: 'Article 27 Paragraph (3)',
      title: 'Pelanggaran Pasal 27 ayat (3) UU ITE (Defamasi)',
      desc: 'Menyebarkan tuduhan, fitnah, atau penghinaan terhadap pihak lain tanpa bukti faktual di media elektronik. Tindakan ini merugikan reputasi korban.',
      penalty: 'Ancaman pidana penjara paling lama 4 tahun dan/atau denda paling banyak Rp750.000.000.',
      status: 'ILLEGAL ACT',
      alarmClass: 'alarm-warning border-amber-500/30 text-amber-800 bg-amber-500/5 dark:text-amber-300',
      iconColor: 'bg-amber-100 dark:bg-amber-950 text-amber-500',
      iconSvg: '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>'
    },
    hoax: {
      name: 'Berita Bohong & Penipuan',
      badgeClass: 'text-purple-500',
      blipId: 'blip-hoax',
      code: 'Article 28 Paragraph (1)',
      title: 'Pelanggaran Pasal 28 ayat (1) UU ITE (Hoaks Konsumen)',
      desc: 'Menyebarkan informasi palsu (hoaks) yang mengakibatkan kerugian materiil bagi konsumen dalam transaksi elektronik (misalnya tautan undian atau phising palsu).',
      penalty: 'Ancaman pidana penjara paling lama 6 tahun dan/atau denda paling banyak Rp1.000.000.000.',
      status: 'FRAUD ALERT',
      alarmClass: 'alarm-warning border-purple-500/30 text-purple-800 bg-purple-500/5 dark:text-purple-300',
      iconColor: 'bg-purple-100 dark:bg-purple-950 text-purple-500',
      iconSvg: '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>'
    },
    hacking: {
      name: 'Akses Ilegal',
      badgeClass: 'text-blue-500',
      blipId: 'blip-hacking',
      code: 'Article 30 Paragraph (1) / (2)',
      title: 'Pelanggaran Pasal 30 UU ITE (Akses Tanpa Izin)',
      desc: 'Mengakses komputer, server, atau sistem elektronik milik orang lain secara sengaja dan tanpa hak/izin (hacking, brute force, sniffing).',
      penalty: 'Ancaman pidana penjara paling lama 6 - 8 tahun dan/atau denda paling banyak Rp600.000.000 - Rp800.000.000.',
      status: 'SYSTEM BREACH',
      alarmClass: 'alarm-error border-red-500/30 text-red-800 bg-red-500/5 dark:text-red-300',
      iconColor: 'bg-red-100 dark:bg-red-950 text-red-500',
      iconSvg: '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>'
    },
    hate: {
      name: 'Ujaran Kebencian (SARA)',
      badgeClass: 'text-amber-500',
      blipId: 'blip-hate',
      code: 'Article 28 Paragraph (2)',
      title: 'Pelanggaran Pasal 28 ayat (2) UU ITE (Hate Speech)',
      desc: 'Menyebarkan informasi yang ditujukan untuk menimbulkan rasa kebencian atau permusuhan individu dan/atau kelompok masyarakat tertentu berdasarkan SARA.',
      penalty: 'Ancaman pidana penjara paling lama 6 tahun dan/atau denda paling banyak Rp1.000.000.000.',
      status: 'HATE SPEECH WARNING',
      alarmClass: 'alarm-error border-red-500/30 text-red-800 bg-red-500/5 dark:text-red-300',
      iconColor: 'bg-red-100 dark:bg-red-950 text-red-500',
      iconSvg: '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>'
    },
    safe: {
      name: 'Kreatif & Edukatif',
      badgeClass: 'text-emerald-500',
      blipId: 'blip-safe',
      code: 'Compliant with law',
      title: 'Aktivitas Aman & Sesuai Hukum',
      desc: 'Melakukan unggahan yang bermanfaat, kreatif, edukatif, dan tidak merugikan orang lain. Mengembangkan konten positif di dunia digital sangat dianjurkan.',
      penalty: 'Tidak ada pelanggaran hukum. Selamat! Anda telah mempraktikkan etika kewarganegaraan digital yang baik.',
      status: 'SAFE & ETHICAL',
      alarmClass: 'alarm-success border-emerald-500/30 text-emerald-800 bg-emerald-500/5 dark:text-emerald-300',
      iconColor: 'bg-emerald-100 dark:bg-emerald-950 text-emerald-500',
      iconSvg: '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>'
    }
  };

  window.selectCyberScenario = function (scenarioKey, element) {
    if (cyberSimState.isScanning) return;

    cyberSimState.selectedScenario = scenarioKey;

    // Update selected classes for buttons
    const buttons = document.querySelectorAll('.scenario-btn');
    buttons.forEach(btn => btn.classList.remove('selected'));
    if (element) element.classList.add('selected');

    // Update text label
    const textLabel = document.getElementById('selected-scenario-text');
    if (textLabel) {
      textLabel.innerText = cyberScenarios[scenarioKey].name;
      textLabel.className = `${cyberScenarios[scenarioKey].badgeClass} font-bold`;
    }

    // Reset logs to idle state
    const logContainer = document.getElementById('cyber-log-container');
    if (logContainer) {
      logContainer.innerHTML = `
      <div class="text-zinc-500">&gt; Aktivitas dialihkan ke: [${cyberScenarios[scenarioKey].name.toUpperCase()}]</div>
      <div class="text-zinc-500">&gt; Klik "Mulai Pemindaian Siber" untuk memeriksa status.</div>
    `;
    }

    // Hide result panel
    const resultPanel = document.getElementById('cyber-result-panel');
    if (resultPanel) resultPanel.classList.add('hidden');

    // Reset radar lights
    const blips = document.querySelectorAll('.radar-blip-dot');
    blips.forEach(blip => blip.classList.remove('active'));

    const radarStatus = document.getElementById('radar-status-badge');
    if (radarStatus) {
      radarStatus.innerText = 'READY';
      radarStatus.className = 'text-[9px] font-mono font-bold bg-zinc-800 text-zinc-400 px-2 py-0.5 rounded mt-2';
    }
  };

  window.runCyberScanner = function () {
    if (cyberSimState.isScanning) return;

    cyberSimState.isScanning = true;

    const scenarioKey = cyberSimState.selectedScenario;
    const scenario = cyberScenarios[scenarioKey];

    const scanBtn = document.getElementById('scan-cyber-btn');
    if (scanBtn) {
      scanBtn.disabled = true;
      scanBtn.innerText = 'MEMINDAI... ⏳';
      scanBtn.classList.add('opacity-50');
    }

    const radarSweeper = document.getElementById('radar-sweeper');
    if (radarSweeper) {
      radarSweeper.classList.add('scanning');
    }

    const radarStatus = document.getElementById('radar-status-badge');
    if (radarStatus) {
      radarStatus.innerText = 'SCANNING';
      radarStatus.className = 'text-[9px] font-mono font-bold bg-pink-950 text-pink-400 animate-pulse px-2 py-0.5 rounded mt-2';
    }

    const logContainer = document.getElementById('cyber-log-container');
    if (logContainer) {
      logContainer.innerHTML = `
      <div class="text-pink-400 font-bold">&gt; [SYSTEM] Memulai patroli siber taktis...</div>
      <div class="text-zinc-400">&gt; [SCANNING] Menganalisis transmisi data siber...</div>
    `;

      // Simulate lines typing in terminal
      setTimeout(() => {
        if (logContainer) {
          logContainer.innerHTML += `
          <div class="text-zinc-400">&gt; [PARSING] Memindai jejak digital & identifikasi pasal...</div>
        `;
          logContainer.scrollTop = logContainer.scrollHeight;
        }
      }, 600);

      setTimeout(() => {
        if (logContainer) {
          logContainer.innerHTML += `
          <div class="text-zinc-400">&gt; [MATCHING] Membandingkan perilaku dengan UU No. 19 Tahun 2016...</div>
        `;
          logContainer.scrollTop = logContainer.scrollHeight;
        }
      }, 1200);
    }

    // Hide result panel while scanning
    const resultPanel = document.getElementById('cyber-result-panel');
    if (resultPanel) resultPanel.classList.add('hidden');

    // Run scanning animation for 2 seconds
    setTimeout(() => {
      cyberSimState.isScanning = false;

      if (scanBtn) {
        scanBtn.disabled = false;
        scanBtn.innerText = 'Mulai Pemindaian Siber ⚡';
        scanBtn.classList.remove('opacity-50');
      }

      if (radarSweeper) {
        radarSweeper.classList.remove('scanning');
      }

      // Show active blip on radar
      const blip = document.getElementById(scenario.blipId);
      if (blip) blip.classList.add('active');

      // Update radar status badge
      if (radarStatus) {
        radarStatus.innerText = scenario.status;
        if (scenarioKey === 'safe') {
          radarStatus.className = 'text-[9px] font-mono font-bold bg-emerald-950 text-emerald-400 px-2 py-0.5 rounded mt-2';
        } else if (scenarioKey === 'defamation' || scenarioKey === 'hoax') {
          radarStatus.className = 'text-[9px] font-mono font-bold bg-amber-950 text-amber-400 px-2 py-0.5 rounded mt-2';
        } else {
          radarStatus.className = 'text-[9px] font-mono font-bold bg-red-950 text-red-400 px-2 py-0.5 rounded mt-2';
        }
      }

      // Update terminal output logs
      if (logContainer) {
        if (scenarioKey === 'safe') {
          logContainer.innerHTML += `
          <div class="text-emerald-400 font-bold">&gt; [CLEAR] Hasil pemindaian aman. Kode kepatuhan terpenuhi.</div>
        `;
        } else {
          logContainer.innerHTML += `
          <div class="text-red-400 font-bold">&gt; [ALERT] Terdeteksi pelanggaran siber! ${scenario.code}</div>
          <div class="text-zinc-400">&gt; [PENALTY] ${scenario.penalty}</div>
        `;
        }
        logContainer.scrollTop = logContainer.scrollHeight;
      }

      // Pop up and flash the result panel
      if (resultPanel) {
        resultPanel.className = `p-4 border rounded-2xl flex items-start gap-3 transition-all duration-300 animate-fade-in ${scenario.alarmClass}`;

        const iconContainer = document.getElementById('result-icon-container');
        if (iconContainer) {
          iconContainer.className = `w-8 h-8 rounded-full flex items-center justify-center text-sm flex-shrink-0 ${scenario.iconColor}`;
          iconContainer.innerHTML = scenario.iconSvg;
        }

        const titleText = document.getElementById('result-title-text');
        if (titleText) {
          titleText.innerText = scenario.title;
        }

        const descText = document.getElementById('result-desc-text');
        if (descText) {
          descText.innerHTML = `<strong>Keterangan:</strong> ${scenario.desc}<br><strong class="mt-1 block">Rekomendasi Hukum:</strong> ${scenario.penalty}`;
        }

        resultPanel.classList.remove('hidden');
      }
    }, 2000);
  };

  window.initCyberSim = function () {
    cyberSimState = {
      selectedScenario: 'defamation',
      isScanning: false
    };

    // Set default selection state on load
    const buttons = document.querySelectorAll('.scenario-btn');
    buttons.forEach(btn => btn.classList.remove('selected'));
    if (buttons.length > 0) buttons[0].classList.add('selected');

    const textLabel = document.getElementById('selected-scenario-text');
    if (textLabel) {
      textLabel.innerText = 'Pencemaran';
      textLabel.className = 'text-pink-500 font-bold';
    }

    const scanBtn = document.getElementById('scan-cyber-btn');
    if (scanBtn) {
      scanBtn.disabled = false;
      scanBtn.innerText = 'Mulai Pemindaian Siber ⚡';
      scanBtn.classList.remove('opacity-50');
    }

    const radarSweeper = document.getElementById('radar-sweeper');
    if (radarSweeper) {
      radarSweeper.classList.remove('scanning');
    }

    const radarStatus = document.getElementById('radar-status-badge');
    if (radarStatus) {
      radarStatus.innerText = 'READY';
      radarStatus.className = 'text-[9px] font-mono font-bold bg-zinc-800 text-zinc-400 px-2 py-0.5 rounded mt-2';
    }

    const logContainer = document.getElementById('cyber-log-container');
    if (logContainer) {
      logContainer.innerHTML = `
      <div class="text-zinc-500">&gt; Sistem siap. Silakan pilih skenario aktivitas digital.</div>
      <div class="text-zinc-500">&gt; Klik "Mulai Pemindaian Siber" untuk memeriksa status.</div>
    `;
    }

    const resultPanel = document.getElementById('cyber-result-panel');
    if (resultPanel) resultPanel.classList.add('hidden');

    const blips = document.querySelectorAll('.radar-blip-dot');
    blips.forEach(blip => blip.classList.remove('active'));
  };

  // ==========================================
  // Data Privacy & Encryption Simulator Logic
  // ==========================================
  let encryptSimState = {
    state: 'idle', // 'idle', 'encrypting', 'encrypted', 'decrypting'
    inputText: 'NIK: 3174092801080002',
    cipherText: ''
  };

  const encryptPresets = {
    nik: 'NIK: 3174092801080002',
    password: 'Password: alika*123!',
    chat: 'Pesan: Rapat rahasia jam 4 sore.'
  };

  window.changeEncryptPreset = function (val) {
    const input = document.getElementById('encrypt-input-text');
    if (input) {
      input.value = encryptPresets[val] || '';
      encryptSimState.inputText = input.value;
    }

    // If currently encrypted, reset to idle
    if (encryptSimState.state === 'encrypted') {
      window.initEncryptSim();
    } else {
      // update plain text display
      const displayPlain = document.getElementById('display-plain-text');
      if (displayPlain) {
        displayPlain.innerText = input.value.substring(0, 18) + (input.value.length > 18 ? '...' : '');
      }
    }
  };

  window.initEncryptSim = function () {
    encryptSimState.state = 'idle';
    const input = document.getElementById('encrypt-input-text');
    if (input) {
      encryptSimState.inputText = input.value;
    }
    encryptSimState.cipherText = '';

    // Reset Display Text
    const displayPlain = document.getElementById('display-plain-text');
    if (displayPlain) {
      displayPlain.innerText = encryptSimState.inputText.substring(0, 18) + (encryptSimState.inputText.length > 18 ? '...' : '');
    }
    const displayCipher = document.getElementById('display-cipher-text');
    if (displayCipher) {
      displayCipher.innerText = 'Unencrypted';
      displayCipher.className = 'text-xs text-zinc-400 dark:text-zinc-500 truncate block';
    }

    // Reset SVG wires
    const wireIn = document.getElementById('wire-encrypt-in');
    const wireInFlow = document.getElementById('wire-encrypt-in-flow');
    const wireOut = document.getElementById('wire-encrypt-out');
    const wireOutFlow = document.getElementById('wire-encrypt-out-flow');
    const wireOutFlowBack = document.getElementById('wire-encrypt-out-flow-back');

    if (wireIn) wireIn.className = 'wire-line inactive';
    if (wireInFlow) wireInFlow.className = 'encrypt-wire-flow';
    if (wireOut) wireOut.className = 'wire-line inactive';
    if (wireOutFlow) wireOutFlow.className = 'encrypt-wire-flow';
    if (wireOutFlowBack) wireOutFlowBack.className = 'encrypt-wire-flow-back';

    // Reset Gear & Lock Icon
    const gear = document.getElementById('encrypt-gear');
    if (gear) gear.className = '';

    const lockIcon = document.getElementById('lock-icon-svg');
    if (lockIcon) {
      lockIcon.setAttribute('stroke', '#ffffff');
    }

    // Reset Destination Node
    const destBg = document.getElementById('dest-bg');
    const destBorder = document.getElementById('dest-border');
    const shield = document.getElementById('shield-vector');

    if (destBg) destBg.setAttribute('class', 'transition-all duration-300 fill-zinc-200 dark:fill-zinc-800');
    if (destBorder) destBorder.setAttribute('class', 'transition-all duration-300 stroke-zinc-400');
    if (shield) {
      shield.setAttribute('class', 'transition-all duration-300 stroke-zinc-500 fill-none');
      shield.setAttribute('stroke', '#71717a');
    }

    // Reset Button
    const btn = document.getElementById('encrypt-action-btn');
    if (btn) {
      btn.disabled = false;
      btn.innerText = 'Enkripsikan Data 🔒';
    }

    // Reset Logs
    const logContainer = document.getElementById('encrypt-log-container');
    if (logContainer) {
      logContainer.innerHTML = `<div class="text-zinc-500">&gt; Simulator siap. Masukkan pesan lalu klik "Enkripsikan Data".</div>`;
    }
  };

  window.runEncryptionSim = function () {
    if (encryptSimState.state === 'encrypting' || encryptSimState.state === 'decrypting') return;

    const btn = document.getElementById('encrypt-action-btn');
    const logContainer = document.getElementById('encrypt-log-container');
    const input = document.getElementById('encrypt-input-text');
    if (input) {
      encryptSimState.inputText = input.value;
    }

    if (encryptSimState.state === 'idle') {
      // ENCRYPT PROCESS
      encryptSimState.state = 'encrypting';

      if (btn) {
        btn.disabled = true;
        btn.innerText = 'MENGENKRIPSI... ⏳';
      }

      if (logContainer) {
        logContainer.innerHTML = `
        <div class="text-pink-400 font-bold">&gt; [INIT] Membaca data Plaintext sensitif...</div>
      `;
      }

      // Trigger SVG inputs flow
      const wireIn = document.getElementById('wire-encrypt-in');
      const wireInFlow = document.getElementById('wire-encrypt-in-flow');
      if (wireIn) wireIn.className = 'wire-line active';
      if (wireInFlow) wireInFlow.className = 'encrypt-wire-flow active';

      // Start Gear Spin
      const gear = document.getElementById('encrypt-gear');
      if (gear) gear.className = 'animate-spin-gear';

      setTimeout(() => {
        if (logContainer) {
          logContainer.innerHTML += `<div class="text-zinc-400">&gt; [KEYGEN] Menghasilkan Kunci Kriptografi (AES-256)...</div>`;
          logContainer.scrollTop = logContainer.scrollHeight;
        }
      }, 500);

      setTimeout(() => {
        if (logContainer) {
          logContainer.innerHTML += `<div class="text-zinc-400">&gt; [CIPHER] Mengacak karakter dengan algoritma Galois Counter Mode...</div>`;
          logContainer.scrollTop = logContainer.scrollHeight;
        }

        const wireOut = document.getElementById('wire-encrypt-out');
        const wireOutFlow = document.getElementById('wire-encrypt-out-flow');
        if (wireOut) wireOut.className = 'wire-line active';
        if (wireOutFlow) wireOutFlow.className = 'encrypt-wire-flow active';
      }, 1100);

      setTimeout(() => {
        // Complete Encryption
        encryptSimState.state = 'encrypted';

        // Calculate cipher text (Base64 of Input)
        try {
          encryptSimState.cipherText = btoa(unescape(encodeURIComponent(encryptSimState.inputText)));
        } catch (e) {
          encryptSimState.cipherText = 'U2VjdXJlRGF0YQ==';
        }

        // Display Cipher Text
        const displayCipher = document.getElementById('display-cipher-text');
        if (displayCipher) {
          displayCipher.innerText = encryptSimState.cipherText;
          displayCipher.className = 'text-xs text-emerald-500 font-bold truncate block animate-pulse';
        }

        // Lock SVG Center Icon glow
        const lockIcon = document.getElementById('lock-icon-svg');
        if (lockIcon) {
          lockIcon.setAttribute('stroke', '#10b981');
        }

        // Secure Database glows green
        const destBg = document.getElementById('dest-bg');
        const destBorder = document.getElementById('dest-border');
        const shield = document.getElementById('shield-vector');
        if (destBg) destBg.setAttribute('class', 'transition-all duration-300 fill-emerald-100 dark:fill-emerald-950/30');
        if (destBorder) destBorder.setAttribute('class', 'transition-all duration-300 stroke-emerald-500');
        if (shield) {
          shield.setAttribute('class', 'transition-all duration-300 stroke-emerald-500 fill-emerald-500/20');
          shield.setAttribute('stroke', '#10b981');
        }

        if (logContainer) {
          logContainer.innerHTML += `
          <div class="text-emerald-400 font-bold">&gt; [SUCCESS] Data berhasil diamankan! Terkunci dalam cipher.</div>
          <div class="text-zinc-500">&gt; Data tidak dapat dibaca tanpa kunci dekripsi yang sah.</div>
        `;
          logContainer.scrollTop = logContainer.scrollHeight;
        }

        if (btn) {
          btn.disabled = false;
          btn.innerText = 'Dekripsikan Kembali 🔓';
        }

        // Stop gear
        if (gear) gear.className = '';
        if (wireInFlow) wireInFlow.className = 'encrypt-wire-flow';
        if (wireOutFlow) wireOutFlow.className = 'encrypt-wire-flow';
      }, 1800);

    } else if (encryptSimState.state === 'encrypted') {
      // DECRYPT PROCESS
      encryptSimState.state = 'decrypting';

      if (btn) {
        btn.disabled = true;
        btn.innerText = 'MENDEKRIPSI... ⏳';
      }

      if (logContainer) {
        logContainer.innerHTML = `
        <div class="text-purple-400 font-bold">&gt; [INIT] Membaca Ciphertext terenkripsi dari server...</div>
      `;
      }

      // Trigger Out Flow Wire back (flowing from right to center)
      const wireOutFlowBack = document.getElementById('wire-encrypt-out-flow-back');
      if (wireOutFlowBack) wireOutFlowBack.className = 'encrypt-wire-flow-back active';

      // Start Gear Spin
      const gear = document.getElementById('encrypt-gear');
      if (gear) gear.className = 'animate-spin-gear';

      setTimeout(() => {
        if (logContainer) {
          logContainer.innerHTML += `<div class="text-zinc-400">&gt; [AUTH] Mengajukan Kunci Dekripsi Privat...</div>`;
          logContainer.scrollTop = logContainer.scrollHeight;
        }
      }, 500);

      setTimeout(() => {
        if (logContainer) {
          logContainer.innerHTML += `<div class="text-zinc-400">&gt; [DECRYPT] Mengembalikan data ke format Plaintext semula...</div>`;
          logContainer.scrollTop = logContainer.scrollHeight;
        }

        const wireIn = document.getElementById('wire-encrypt-in');
        const wireInFlow = document.getElementById('wire-encrypt-in-flow');
        // Flow back to client
        if (wireInFlow) wireInFlow.className = 'encrypt-wire-flow active';
      }, 1100);

      setTimeout(() => {
        // Complete Decryption
        encryptSimState.state = 'idle';

        // Reset cipher display
        const displayCipher = document.getElementById('display-cipher-text');
        if (displayCipher) {
          displayCipher.innerText = 'Unencrypted';
          displayCipher.className = 'text-xs text-zinc-400 dark:text-zinc-500 truncate block';
        }

        // Reset destination node to grey
        const destBg = document.getElementById('dest-bg');
        const destBorder = document.getElementById('dest-border');
        const shield = document.getElementById('shield-vector');
        if (destBg) destBg.setAttribute('class', 'transition-all duration-300 fill-zinc-200 dark:fill-zinc-800');
        if (destBorder) destBorder.setAttribute('class', 'transition-all duration-300 stroke-zinc-400');
        if (shield) {
          shield.setAttribute('class', 'transition-all duration-300 stroke-zinc-500 fill-none');
          shield.setAttribute('stroke', '#71717a');
        }

        const lockIcon = document.getElementById('lock-icon-svg');
        if (lockIcon) {
          lockIcon.setAttribute('stroke', '#ffffff');
        }

        if (logContainer) {
          logContainer.innerHTML += `
          <div class="text-purple-400 font-bold">&gt; [SUCCESS] Dekripsi sukses. Plaintext berhasil dipulihkan.</div>
        `;
          logContainer.scrollTop = logContainer.scrollHeight;
        }

        if (btn) {
          btn.disabled = false;
          btn.innerText = 'Enkripsikan Data 🔒';
        }

        // Stop gear & flows
        if (gear) gear.className = '';
        const wireInFlow = document.getElementById('wire-encrypt-in-flow');
        if (wireInFlow) wireInFlow.className = 'encrypt-wire-flow';
        if (wireOutFlowBack) wireOutFlowBack.className = 'encrypt-wire-flow-back';
      }, 1800);
    }
  };

  // Setup Populer/Trending Pills
  function setupPills() {
    const pills = document.querySelectorAll('.trending-pill');
    pills.forEach(pill => {
      pill.addEventListener('click', () => {
        const topic = pill.getAttribute('data-topic') || pill.innerText;
        window.triggerTagSearch(topic);
      });
    });
  }

  // Setup Modals (Synced with core template structures)
  function setupModals() {
    const modalOverlay = document.getElementById('assignmentModal');
    const closeModalBtn = document.getElementById('closeModalBtn');

    if (closeModalBtn && modalOverlay && !document.getElementById('globalSearchInput')) {
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

  // Open Task Modal (Renders code editor widgets)
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
    <span class="text-xs text-zinc-500 dark:text-zinc-455">Diposting: ${item.date}</span>
    <span class="text-xs text-pink-600 dark:text-pink-400 font-semibold">Status: ${item.status} (${item.score})</span>
  `;

    modalBody.innerHTML = `
    <div class="space-y-4">
      <div>
        <h4 class="text-xs uppercase tracking-wider font-semibold text-pink-500 dark:text-pink-400 mb-1 font-mono">Ringkasan Tugas</h4>
        <p class="text-sm text-zinc-700 dark:text-zinc-300">${item.summary}</p>
      </div>

      <div>
        <h4 class="text-xs uppercase tracking-wider font-semibold text-pink-500 dark:text-pink-400 mb-1 font-mono">Instruksi Guru</h4>
        <p class="text-sm text-zinc-700 dark:text-zinc-300 whitespace-pre-line bg-pink-50/20 dark:bg-zinc-900/40 p-3 rounded-xl border border-pink-100/50 dark:border-zinc-800/40">${item.instructions}</p>
      </div>

      <div>
        <div class="flex items-center justify-between mb-2">
          <h4 class="text-xs uppercase tracking-wider font-semibold text-pink-500 dark:text-pink-400 font-mono">Source Code / Output</h4>
          <button onclick="copyCodeSnippet()" class="text-xs text-pink-500 dark:text-pink-400 hover:underline font-mono flex items-center gap-1">
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"/></svg>
            <span id="copyCodeText">Salin Kode</span>
          </button>
        </div>
        <pre id="codeSnippetPre" class="bg-zinc-955 text-pink-100 p-4 rounded-xl text-xs overflow-x-auto border border-zinc-850 dark:border-zinc-800 font-mono leading-relaxed"><code>${escapeHtml(item.codeSnippet)}</code></pre>
      </div>
    </div>
  `;

    modalOverlay.classList.remove('hidden');
  };

  // Open Article Modal (Renders rich reading layout)
  window.openInfoArticleModal = function (id) {
    const item = articlesData.find(i => i.id === id);
    if (!item) return;

    const modalOverlay = document.getElementById('assignmentModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalMeta = document.getElementById('modalMeta');
    const modalBody = document.getElementById('modalBody');

    modalTitle.innerText = item.title;
    modalMeta.innerHTML = `
    <span class="tag-badge border ${getPastelCategoryClasses(item.category)}">${item.category}</span>
    <span class="text-xs text-zinc-500 dark:text-zinc-400">Diposting: ${item.date}</span>
    <span class="text-xs text-pink-600 dark:text-pink-400 font-semibold">Penulis: ${item.author} • ${item.readTime}</span>
  `;

    // Mini-markdown compiler replacement for basic headers
    const compiledContent = item.content
      .replace(/^### (.*$)/gim, '<h4 class="text-base font-bold text-zinc-900 dark:text-white mt-4 mb-2 font-serif">$1</h4>')
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/^\- (.*$)/gim, '<li class="ml-4 list-disc">$1</li>');

    modalBody.innerHTML = `
    <div class="space-y-4">
      <div class="bg-pink-50/20 dark:bg-zinc-900/40 p-4 rounded-xl border border-pink-100/50 dark:border-zinc-800/40 mb-4">
        <h4 class="text-xs uppercase tracking-wider font-semibold text-pink-500 dark:text-pink-400 mb-1 font-mono">Ringkasan Artikel</h4>
        <p class="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">${item.summary}</p>
      </div>

      <div class="prose dark:prose-invert max-w-none text-sm leading-relaxed text-zinc-800 dark:text-zinc-200 space-y-3 font-sans">
        ${compiledContent}
      </div>
    </div>
  `;

    modalOverlay.classList.remove('hidden');

    if (id === 'sistem-digital' && typeof window.initLogicGateSim === 'function') {
      setTimeout(window.initLogicGateSim, 50);
    }
    if (id === 'uu-ite' && typeof window.initCyberSim === 'function') {
      setTimeout(window.initCyberSim, 50);
    }
    if (id === 'uu-ite-privasi' && typeof window.initEncryptSim === 'function') {
      setTimeout(window.initEncryptSim, 50);
    }
    if (id === 'vibe-coding' && typeof window.initVibeCodingSim === 'function') {
      setTimeout(window.initVibeCodingSim, 50);
    }
  };

  // Copy Code Snippet Utility
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

  // Utilities
  function escapeHtml(text) {
    return text
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
  }

  // Video Player Loader
  window.playVibeVideo = function (container) {
    const placeholder = container.querySelector('#video-placeholder');
    const iframeContainer = container.querySelector('#video-iframe-container');
    if (placeholder && iframeContainer) {
      placeholder.classList.add('opacity-0', 'pointer-events-none');
      setTimeout(() => {
        placeholder.classList.add('hidden');
      }, 500);
      iframeContainer.classList.remove('hidden');
      iframeContainer.innerHTML = `
      <iframe class="w-full h-full rounded-2xl border border-zinc-200/50 dark:border-zinc-800 shadow-md" 
              src="https://www.youtube.com/embed/iLCDSY2XX7E?autoplay=1" 
              title="YouTube video player" 
              frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowfullscreen>
      </iframe>
    `;
    }
  };

  // Vibe Coding Typing Simulator Animation
  window.fillVibePrompt = function (text) {
    const input = document.getElementById('vibe-prompt-input');
    if (input) {
      input.value = text;
    }
  };

  window.runCustomVibeSim = function () {
    const input = document.getElementById('vibe-prompt-input');
    const terminal = document.getElementById('vibe-terminal-log');
    const pulseDot = document.getElementById('agent-pulse-dot');
    const confidenceText = document.getElementById('agent-confidence-text');
    const confidenceBar = document.getElementById('agent-confidence-bar');

    if (!terminal) return;

    const prompt = input ? input.value.trim() : '';
    const finalPrompt = prompt || 'Buat website portofolio premium dengan vibe aesthetic';

    // Clear any existing simulation timeouts
    if (window.vibeCodingSimInterval) {
      clearTimeout(window.vibeCodingSimInterval);
    }

    // Update state card to thinking/working
    if (pulseDot) {
      pulseDot.className = 'w-2 h-2 rounded-full bg-amber-500 animate-pulse';
    }
    if (confidenceText) {
      confidenceText.innerText = 'Agent Working...';
      confidenceText.className = 'text-amber-400 font-semibold font-sans';
    }
    if (confidenceBar) {
      confidenceBar.style.width = '75%';
      confidenceBar.className = 'h-full bg-gradient-to-r from-amber-500 to-pink-500';
    }

    terminal.innerHTML = '';

    const logSteps = [
      { text: `&gt; [USER] ${escapeHtml(finalPrompt)}`, class: 'text-zinc-100 font-semibold' },
      { text: `&gt; [AGENT] Menerima instruksi. Memulai analisis semantik...`, class: 'text-emerald-400' },
      { text: `&gt; [AGENT] Menelusuri berkas proyek: 'index.html', 'main.js'...`, class: 'text-zinc-500' },
      { text: `&gt; [AGENT] Merancang perubahan kode yang aman & optimal...`, class: 'text-purple-400' },
      { text: `&gt; [AGENT] Menulis kode implementasi:`, class: 'text-pink-400 font-bold' }
    ];

    let stepIndex = 0;

    function playLogSteps() {
      if (!document.getElementById('vibe-terminal-log')) return;

      if (stepIndex < logSteps.length) {
        const step = logSteps[stepIndex];
        const lineDiv = document.createElement('div');
        lineDiv.innerHTML = step.text;
        lineDiv.className = step.class;
        terminal.appendChild(lineDiv);
        terminal.scrollTop = terminal.scrollHeight;

        stepIndex++;
        window.vibeCodingSimInterval = setTimeout(playLogSteps, 600);
      } else {
        // Start typing the code segment based on prompt keywords
        startCodeTyping();
      }
    }

    function startCodeTyping() {
      let codeLines = [];

      const lowerPrompt = finalPrompt.toLowerCase();
      if (lowerPrompt.includes('game') || lowerPrompt.includes('ular') || lowerPrompt.includes('snake')) {
        codeLines = [
          '# Game engine initialization',
          'class SnakeGame:',
          '    def __init__(self, width=800, height=600):',
          '        self.grid_size = 20',
          '        self.snake = [(200, 200), (180, 200), (160, 200)]',
          '        self.direction = "RIGHT"',
          '        self.score = 0',
          '',
          '    def spawn_food(self):',
          '        self.food = (random.randint(0, 39) * 20, random.randint(0, 29) * 20)',
          '        # AI optimized: grid alignment verified! 🍏',
          '        Agent.log("Food spawned successfully")'
        ];
      } else if (lowerPrompt.includes('animasi') || lowerPrompt.includes('partikel') || lowerPrompt.includes('efek')) {
        codeLines = [
          '// Particle system implementation',
          'class GlowParticle {',
          '  constructor(x, y, color) {',
          '    this.x = x;',
          '    this.y = y;',
          '    this.vx = (Math.random() - 0.5) * 3;',
          '    this.vy = (Math.random() - 0.5) * 3;',
          '    this.alpha = 1.0;',
          '    this.color = color || "#ec4899"; // Neon Pink',
          '  }',
          '  update() {',
          '    this.x += this.vx;',
          '    this.y += this.vy;',
          '    this.alpha -= 0.02; // Smooth fade-out ✨',
          '  }',
          '}'
        ];
      } else if (lowerPrompt.includes('optimasi') || lowerPrompt.includes('performa') || lowerPrompt.includes('kecepatan')) {
        codeLines = [
          '// Optimization routine',
          'function optimizeLandingPage() {',
          '  const images = document.querySelectorAll("img");',
          '  images.forEach(img => {',
          '    img.setAttribute("loading", "lazy");',
          '    img.classList.add("transition-all", "duration-500");',
          '  });',
          '  // Minifying state updates...',
          '  State.batchUpdate(() => {',
          '    App.renderMode = "reactive-vibe";',
          '  });',
          '  console.log("Performance score optimized to 100! ⚡");',
          '}'
        ];
      } else {
        // Fallback
        codeLines = [
          '# Custom feature implementation',
          'def apply_custom_request():',
          `    user_request = "${escapeHtml(finalPrompt.substring(0, 45))}"`,
          '    print(f"Applying changes for: {user_request}")',
          '    ',
          '    # Injecting responsive containers',
          '    layout = Layout(fluid=True, gap=4)',
          '    layout.add_card(title="AI Generated Feature", glow=True)',
          '    layout.apply_styles(theme="aesthetic-glassmorphism")',
          '    ',
          '    # Validation checks',
          '    Agent.verify_compliance(standard="HTML5/TailwindCSS")',
          '    return "[SUCCESS] Feature is live! 🌟"'
        ];
      }

      const codeDiv = document.createElement('pre');
      codeDiv.className = 'text-pink-300/90 pl-3 border-l-2 border-pink-500/30 min-h-[100px] overflow-x-auto whitespace-pre font-mono mt-1.5 scrollbar-none';
      terminal.appendChild(codeDiv);

      let currentLineIndex = 0;
      let currentCharIndex = 0;

      function typeChar() {
        if (!document.getElementById('vibe-terminal-log')) return;

        if (currentLineIndex >= codeLines.length) {
          // Success steps
          const successDiv1 = document.createElement('div');
          successDiv1.innerHTML = '&gt; [AGENT] Modifikasi berkas selesai secara otomatis.';
          successDiv1.className = 'text-purple-400 mt-2';

          const successDiv2 = document.createElement('div');
          successDiv2.innerHTML = '&gt; [AGENT] Menjalankan pengujian sintaksis... Sukses tanpa error!';
          successDiv2.className = 'text-emerald-400';

          const successDiv3 = document.createElement('div');
          successDiv3.innerHTML = '&gt; [SUCCESS] Modifikasi diterapkan di index.html. Nikmati hasilnya! 😎✨';
          successDiv3.className = 'text-pink-500 font-bold';

          terminal.appendChild(successDiv1);
          terminal.appendChild(successDiv2);
          terminal.appendChild(successDiv3);
          terminal.scrollTop = terminal.scrollHeight;

          // Restore confidence card state
          if (pulseDot) {
            pulseDot.className = 'w-2 h-2 rounded-full bg-emerald-500 animate-pulse';
          }
          if (confidenceText) {
            confidenceText.innerText = '99.8% Confident';
            confidenceText.className = 'text-emerald-400 font-semibold font-sans';
          }
          if (confidenceBar) {
            confidenceBar.style.width = '100%';
            confidenceBar.className = 'h-full bg-gradient-to-r from-pink-500 to-purple-500';
          }
          return;
        }

        const line = codeLines[currentLineIndex];

        if (currentCharIndex < line.length) {
          const char = line[currentCharIndex];
          codeDiv.innerHTML += char;
          currentCharIndex++;
          terminal.scrollTop = terminal.scrollHeight;
          window.vibeCodingSimInterval = setTimeout(typeChar, 18);
        } else {
          codeDiv.innerHTML += '\n';
          currentLineIndex++;
          currentCharIndex = 0;
          terminal.scrollTop = terminal.scrollHeight;
          window.vibeCodingSimInterval = setTimeout(typeChar, 100);
        }
      }

      typeChar();
    }

    playLogSteps();
  };

  window.initVibeCodingSim = function () {
    const terminal = document.getElementById('vibe-terminal-log');
    if (terminal) {
      terminal.innerHTML = `
      <div class="text-zinc-500 font-mono">// AI Agent siap menerima perintah di atas.</div>
      <div class="text-zinc-500 font-mono">// Silakan ketik perintah atau gunakan salah satu template untuk memulai simulasi coding otonom.</div>
    `;
    }

    // Set default placeholder or prompt input focus/values
    const input = document.getElementById('vibe-prompt-input');
    if (input) {
      input.value = '';
    }

    // Reset confidence state card
    const pulseDot = document.getElementById('agent-pulse-dot');
    const confidenceText = document.getElementById('agent-confidence-text');
    const confidenceBar = document.getElementById('agent-confidence-bar');
    if (pulseDot) pulseDot.className = 'w-2 h-2 rounded-full bg-emerald-500 animate-pulse';
    if (confidenceText) {
      confidenceText.innerText = 'Ready & Calm';
      confidenceText.className = 'text-emerald-400 font-semibold font-sans';
    }
    if (confidenceBar) {
      confidenceBar.style.width = '100%';
      confidenceBar.className = 'h-full bg-gradient-to-r from-pink-500 to-purple-500';
    }
  };
})();

// ==========================================================================
// BitLab (Binary Converter & Base64 Cipher) Logic
// ==========================================================================
let base64Mode = 'encode';

window.switchBitLabTab = function (tab) {
  const btnConverter = document.getElementById('bitlab-tab-btn-converter');
  const btnCipher = document.getElementById('bitlab-tab-btn-cipher');
  const tabConverter = document.getElementById('bitlab-tab-converter');
  const tabCipher = document.getElementById('bitlab-tab-cipher');

  if (!btnConverter || !btnCipher || !tabConverter || !tabCipher) return;

  if (tab === 'converter') {
    btnConverter.className = 'px-4 py-1.5 rounded-lg text-xs font-bold transition-all bg-white dark:bg-zinc-900 text-pink-600 dark:text-pink-400 shadow-sm cursor-pointer';
    btnCipher.className = 'px-4 py-1.5 rounded-lg text-xs font-bold transition-all text-zinc-500 hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-200 cursor-pointer';
    tabConverter.classList.remove('hidden');
    tabCipher.classList.add('hidden');
  } else {
    btnCipher.className = 'px-4 py-1.5 rounded-lg text-xs font-bold transition-all bg-white dark:bg-zinc-900 text-pink-600 dark:text-pink-400 shadow-sm cursor-pointer';
    btnConverter.className = 'px-4 py-1.5 rounded-lg text-xs font-bold transition-all text-zinc-500 hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-200 cursor-pointer';
    tabCipher.classList.remove('hidden');
    tabConverter.classList.add('hidden');
  }
};

window.convertTxtToBin = function () {
  const inputEl = document.getElementById('bitlab-txt-input');
  const outputEl = document.getElementById('bitlab-bin-output');
  if (!inputEl || !outputEl) return;

  const input = inputEl.value;
  if (!input) {
    outputEl.innerText = 'Biner hasil konversi muncul di sini...';
    return;
  }
  const binary = input.split('').map(char => {
    let bin = char.charCodeAt(0).toString(2);
    return '0'.repeat(8 - bin.length) + bin;
  }).join(' ');
  outputEl.innerText = binary;
};

window.setBase64Mode = function (mode) {
  base64Mode = mode;
  const btnEncode = document.getElementById('btn-base64-encode');
  const btnDecode = document.getElementById('btn-base64-decode');
  const lblOutput = document.getElementById('lbl-cipher-output');
  const txtInput = document.getElementById('bitlab-cipher-input');

  if (!btnEncode || !btnDecode || !lblOutput || !txtInput) return;

  if (mode === 'encode') {
    btnEncode.className = 'text-[10px] font-bold text-pink-600 dark:text-pink-400 border-b-2 border-pink-500 pb-0.5';
    btnDecode.className = 'text-[10px] font-bold text-zinc-400 dark:text-zinc-500 pb-0.5';
    lblOutput.innerText = 'Hasil Sandi (Base64)';
    txtInput.placeholder = 'Ketik pesan untuk disandikan...';
  } else {
    btnDecode.className = 'text-[10px] font-bold text-pink-600 dark:text-pink-400 border-b-2 border-pink-500 pb-0.5';
    btnEncode.className = 'text-[10px] font-bold text-zinc-400 dark:text-zinc-500 pb-0.5';
    lblOutput.innerText = 'Hasil Terjemah (Plaintext)';
    txtInput.placeholder = 'Ketik kode Base64 untuk diterjemahkan (Contoh: QWxpa2E=)...';
  }
  window.processBase64();
};

window.processBase64 = function () {
  const inputEl = document.getElementById('bitlab-cipher-input');
  const outputEl = document.getElementById('bitlab-cipher-output');
  if (!inputEl || !outputEl) return;

  const input = inputEl.value;
  if (!input) {
    outputEl.innerText = base64Mode === 'encode' ? 'Sandi hasil encode muncul di sini...' : 'Pesan hasil decode muncul di sini...';
    return;
  }
  try {
    if (base64Mode === 'encode') {
      outputEl.innerText = btoa(unescape(encodeURIComponent(input)));
    } else {
      outputEl.innerText = decodeURIComponent(escape(atob(input)));
    }
  } catch (e) {
    outputEl.innerText = 'Format Base64 tidak valid!';
  }
};

window.copyBitLabOutput = function (elementId) {
  const outputEl = document.getElementById(elementId);
  if (!outputEl) return;

  const text = outputEl.innerText;
  if (text === 'Format Base64 tidak valid!' || text.includes('muncul di sini...')) return;

  navigator.clipboard.writeText(text).then(() => {
    const originalText = text;
    outputEl.innerText = '✓ Berhasil disalin ke papan klip!';
    setTimeout(() => {
      // check if element text hasn't been changed by next keystroke
      if (outputEl.innerText === '✓ Berhasil disalin ke papan klip!') {
        outputEl.innerText = originalText;
      }
    }, 1000);
  });
};

// Pre-initialize converter values on window load
window.addEventListener('load', () => {
  const txtInput = document.getElementById('bitlab-txt-input');
  if (txtInput) {
    txtInput.value = 'Alika';
    window.convertTxtToBin();
  }
  const cipherInput = document.getElementById('bitlab-cipher-input');
  if (cipherInput) {
    cipherInput.value = 'Alika';
    window.processBase64();
  }
});
