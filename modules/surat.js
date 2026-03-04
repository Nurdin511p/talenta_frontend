registerPage("surat", async ()=>{

  content.innerHTML=`<h3>Surat</h3><table><tbody id="tb"></tbody></table>`;

  const res = await api("getData",{sheet:"Surat"});

  tb.innerHTML = res.data.map(s=>`
    <tr>
      <td>${s["NomorSurat"]}</td>
      <td>${s["JenisSurat"]}</td>
      <td>${s["Ditujukan"]}</td>
    </tr>
  `).join("");
});