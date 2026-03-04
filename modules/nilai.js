registerPage("nilai", async ()=>{
  const res = await api("getData",{sheet:"HasilLomba"});

  const rows = (res.data||[]).map(n=>`
    <tr>
      <td>${n.NamaPeserta}</td>
      <td>${n.TotalSkor}</td>
      <td>${n.Juara}</td>
    </tr>
  `);

  content.innerHTML = `
    <h3>Nilai</h3>
    ${renderTable(["Peserta","Skor","Juara"], rows)}
  `;
});