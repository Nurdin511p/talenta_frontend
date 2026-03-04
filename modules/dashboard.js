registerPage("dashboard", async () => {

  content.innerHTML = `
    <h2>Dashboard</h2>
    <div class="cards">
      ${card("Peserta","-","statPeserta")}
      ${card("Sekolah","-","statSekolah")}
      ${card("Lomba","-","statLomba")}
    </div>
  `;

  try {
    const [p, s, l] = await Promise.all([
      api(getData",{sheet"PesertaLomba"),
      api("getData",{sheet:"Kopel"})
      api("getData",{sheet:"Sekolah"})
      api("getData",{sheet:"JenisLomba"})
      api("getData",{sheet:"HasilLomba"})
      api("getData",{sheet:"Surat"})
      api("getData",{sheet:"User"})
    ]);

    document.getElementById("statPeserta").textContent = (p.data || []).length;
    document.getElementById("statSekolah").textContent = (s.data || []).length;
    document.getElementById("statLomba").textContent   = (l.data || []).length;

  } catch (err) {
    console.error("Dashboard error:", err);
  }

});