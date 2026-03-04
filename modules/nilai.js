registerPage("nilai", async ()=>{

  content.innerHTML=`<h3>Nilai Lomba</h3><table><tbody id="tb"></tbody></table>`;

  const res = await api("getData",{sheet:"HasilLomba"});

  tb.innerHTML = res.data.map(n=>`
    <tr>
      <td>${n.NamaPeserta}</td>
      <td>${n.TotalSkor}</td>
      <td>${n.Juara}</td>
    </tr>
  `).join("");
});