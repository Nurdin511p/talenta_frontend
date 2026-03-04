registerPage("setting", async ()=>{

  const res = await api("getData",{sheet:"Setting"});

  content.innerHTML = `
    <h3>Setting</h3>
    <pre>${JSON.stringify(res.data,null,2)}</pre>
  `;
});