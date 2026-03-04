const WEB_APP_URL = "https://script.google.com/macros/s/AKfycbxzT3gnxsS5S6w7Q2hEvAk78MMiHTcvXn0BL8m1PNwoiDUpodb5Uwn43u0oLA7s6motOg/exec";

const token = localStorage.getItem("token");

async function api(action, data = {}) {
  const fd = new URLSearchParams();
  fd.append("action", action);
  fd.append("data", JSON.stringify({ token, ...data }));

  const res = await fetch(WEB_APP_URL, {
    method: "POST",
    body: fd
  });

  return await res.json();
}