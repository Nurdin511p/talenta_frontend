registerPage("peserta", loadPeserta);

async function loadPeserta(){

  content.innerHTML = `
    <h3>Peserta</h3>
    <button onclick="addPeserta()">Tambah</button>
    <table>
      <thead>
        <tr>
          <th>Nama</th>
          <th>Sekolah</th>
          <th>Lomba</th>
          <th>Aksi</th>
        </tr>
      </thead>
      <tbody id="tb"></tbody>
    </table>
  `;

  const res = await api("getPeserta");

  tb.innerHTML = res.data.map(r=>`
    <tr>
      <td>${r.NamaPeserta}</td>
      <td>${r.NamaSekolah}</td>
      <td>${r.Lomba}</td>
      <td>
        <button onclick="hapusPeserta('${r.PesId}')">Hapus</button>
      </td>
    </tr>
  `).join("");
}

async function hapusPeserta(id){
  if(confirm("Hapus?")){
    await api("deletePeserta",{pesId:id});
    loadPeserta();
  }
}