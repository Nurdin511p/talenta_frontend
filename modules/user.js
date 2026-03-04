registerPage("user", async ()=>{
  const res = await api("getData",{sheet:"User"});

  const rows = (res.data||[]).map(u=>`
    <tr>
      <td>${u.Username}</td>
      <td>${u.Role}</td>
    </tr>
  `);

  content.innerHTML = `
    <h3>User</h3>
    ${renderTable(["Username","Role"], rows)}
  `;
});