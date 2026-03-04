registerPage("lomba", async ()=>{

  content.innerHTML=`<h3>Jenis Lomba</h3><table><tbody id="tb"></tbody></table>`;

  const res = await api("getJenisLomba");

  tb.innerHTML = res.data.map(l=>`
    <tr>
      <td>${l.cabang}</td>
      <td>${l.jenis}</td>
    </tr>
  `).join("");
});