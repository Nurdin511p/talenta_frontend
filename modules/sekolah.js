registerPage("sekolah", async ()=>{
  const res = await api("getSekolah");

  const rows = (res.data||[]).map(s=>`
    <tr>
      <td>${s.NPSN}</td>
      <td>${s.NamaSekolah}</td>
    </tr>
  `);

  content.innerHTML = `
    <h3>Data Sekolah</h3>
    ${renderTable(["NPSN","Nama"], rows)}
  `;
});