registerPage("dashboard", async () => {

  // 1. Render Struktur Dashboard (Loading State)
  content.innerHTML = `
    <h2>Dashboard Overview</h2>
    <div class="cards">
      ${card("Peserta", "Loading...", "statPeserta")}
      ${card("Sekolah", "Loading...", "statSekolah")}
      ${card("Lomba", "Loading...", "statLomba")}
    </div>
    <div id="dashboard-details" style="margin-top: 20px;">
      <p id="msg-tambahan">Memuat data tambahan...</p>
    </div>
  `;

  try {
    // 2. Mengambil SEMUA data secara paralel (7 Request)
    // PENTING: Urutan variabel [p, k, s, jl, hl, sr, u] HARUS SAMA dengan urutan api(...)
    const [p, k, s, jl, hl, sr, u] = await Promise.all([
      api("getPesertaLomba"), // Index 0 -> p
      api("getKopel"),        // Index 1 -> k
      api("getSekolah"),      // Index 2 -> s
      api("getJenisLomba"),   // Index 3 -> jl
      api("getHasilLomba"),   // Index 4 -> hl
      api("getSurat"),        // Index 5 -> sr
      api("getUser")          // Index 6 -> u
    ]);

    // 3. Update Angka Statistik di Card
    document.getElementById("statPeserta").textContent = (p.data || []).length;
    document.getElementById("statSekolah").textContent = (s.data || []).length;
    document.getElementById("statLomba").textContent   = (jl.data || []).length;

    // 4. Contoh penggunaan data lainnya (Misal: menampilkan jumlah surat)
    document.getElementById("dashboard-details").innerHTML = `
      <div class="info-box">
        <p>Total Surat: <strong>${(sr.data || []).length}</strong></p>
        <p>User Aktif: <strong>${(u.data || []).length}</strong></p>
      </div>
    `;

    // Kamu sekarang bisa mengolah variabel 'k' (Kopel) atau 'hl' (Hasil Lomba) di sini
    console.log("Data Hasil Lomba siap digunakan:", hl.data);

  } catch (err) {
    console.error("Dashboard error:", err);
    // Jika ada yang gagal, beri notifikasi ke user
    ["statPeserta", "statSekolah", "statLomba"].forEach(id => {
      document.getElementById(id).textContent = "Error";
    });
  }
});