registerPage("peserta", async ()=>{

  const res = await api("getPeserta");

  const rows = (res.data||[]).map(r=>`
    <tr>
      <td>${r.NamaPeserta}</td>
      <td>${r.NamaSekolah}</td>
      <td>${r.Lomba}</td>
    </tr>
  `);

  content.innerHTML = `
    <h3>Data Peserta</h3>
    ${renderTable(["Nama","Sekolah","Lomba"], rows)}
  `;
});