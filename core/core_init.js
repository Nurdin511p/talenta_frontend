const sidebar = document.getElementById("sidebar");
const welcome = document.getElementById("welcome");

welcome.innerText = "Selamat datang, " + (localStorage.getItem("username") || "User");

sidebar.innerHTML = `
<button onclick="loadPage('dashboard')">Dashboard</button>
<button onclick="loadPage('peserta')">Peserta</button>
<button onclick="loadPage('sekolah')">Sekolah</button>
<button onclick="loadPage('lomba')">Lomba</button>
<button onclick="loadPage('kopel')">Kopel</button>
<button onclick="loadPage('nilai')">Nilai</button>
<button onclick="loadPage('user')">User</button>
<button onclick="logout()">Logout</button>
`;

function logout(){
  localStorage.clear();
  location.href="/p/loginv1_2.html";
}

loadPage("dashboard");