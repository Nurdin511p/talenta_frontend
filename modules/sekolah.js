registerPage("sekolah", async ()=>{

  content.innerHTML=`<h3>Data Sekolah</h3><table><tbody id="tb"></tbody></table>`;

  const res = await api("getSekolah");

  tb.innerHTML = res.data.map(s=>`
    <tr>
      <td>${s.NPSN}</td>
      <td>${s.NamaSekolah}</td>
    </tr>
  `).join("");
});