registerPage("lomba", async ()=>{
  const res = await api("getJenisLomba");

  const rows = (res.data||[]).map(l=>`
    <tr>
      <td>${l.cabang}</td>
      <td>${l.jenis}</td>
    </tr>
  `);

  content.innerHTML = `
    <h3>Jenis Lomba</h3>
    ${renderTable(["Cabang","Jenis"], rows)}
  `;
});