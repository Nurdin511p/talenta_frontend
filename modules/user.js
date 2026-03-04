registerPage("user", async ()=>{

  content.innerHTML=`<h3>User</h3><table><tbody id="tb"></tbody></table>`;

  const res = await api("getData",{sheet:"User"});

  tb.innerHTML = res.data.map(u=>`
    <tr>
      <td>${u.Username}</td>
      <td>${u.Role}</td>
    </tr>
  `).join("");
});