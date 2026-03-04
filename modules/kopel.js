registerPage("kopel", async ()=>{

  content.innerHTML=`<h3>Kopel</h3><table><tbody id="tb"></tbody></table>`;

  const res = await api("getData",{sheet:"Kopel"});

  tb.innerHTML = res.data.map(k=>`
    <tr>
      <td>${k.NamaKopel}</td>
      <td>${k.NomorHP}</td>
    </tr>
  `).join("");
});