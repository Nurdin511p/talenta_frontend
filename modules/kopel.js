registerPage("kopel", async ()=>{
  const res = await api("getData",{sheet:"Kopel"});

  const rows = (res.data||[]).map(k=>`
    <tr>
      <td>${k.NamaKopel}</td>
      <td>${k.NomorHP}</td>
    </tr>
  `);

  content.innerHTML = `
    <h3>Kopel</h3>
    ${renderTable(["Nama","HP"], rows)}
  `;
});