const username = localStorage.getItem("username") || "User";

welcome.innerText = "Selamat datang, " + username;

sidebar.innerHTML = `
<button onclick="loadPage('dashboard')">Dashboard</button>
<button onclick="loadPage('peserta')">Peserta</button>
<button onclick="loadPage('sekolah')">Sekolah</button>
<button onclick="loadPage('lomba')">Lomba</button>
<button onclick="loadPage('kopel')">Kopel</button>
<button onclick="loadPage('nilai')">Nilai</button>
<button onclick="loadPage('user')">User</button>
<button onclick="loadPage('setting')">Setting</button>
<button onclick="loadPage('surat')">Surat</button>
`;

function logout(){
  localStorage.clear();
  location.href="/p/loginv1.html";
}

loadPage("dashboard");