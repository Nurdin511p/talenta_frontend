const WEB_APP_URL = "https://script.google.com/macros/s/AKfycbxzT3gnxsS5S6w7Q2hEvAk78MMiHTcvXn0BL8m1PNwoiDUpodb5Uwn43u0oLA7s6motOg/exec";

const token = localStorage.getItem("token");

async function api(action, data = {}) {
  const res = await fetch(WEB_APP_URL, {
    method: "POST",
    body: new URLSearchParams({
      action,
      data: JSON.stringify({
        ...data,
        token: localStorage.getItem("token")
      })
    })
  });

  const text = await res.text();

  try {
    return JSON.parse(text);
  } catch (e) {
    console.error("❌ GAS bukan JSON:");
    console.error(text); // tampilkan isi response asli
    throw new Error("Server bukan JSON. Cek URL / izin deployment GAS.");
  }
}