registerPage("dashboard", async ()=>{

  content.innerHTML = `
    <h2>Dashboard</h2>
    <div class="cards">
      ${card("Peserta","-","statPeserta")}
      ${card("Sekolah","-","statSekolah")}
      ${card("Lomba","-","statLomba")}
    </div>
  `;

  const p = await api("getPeserta");
  const s = await api("getSekolah");
  const l = await api("getJenisLomba");

  statPeserta.innerText = (p.data||[]).length;
  statSekolah.innerText = (s.data||[]).length;
  statLomba.innerText = (l.data||[]).length;
});