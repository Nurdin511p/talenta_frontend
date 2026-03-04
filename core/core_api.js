/* =========================
   CORE API v2.1
   ========================= */

const WEB_APP_URL =
  "https://script.google.com/macros/s/AKfycbxzT3gnxsS5S6w7Q2hEvAk78MMiHTcvXn0BL8m1PNwoiDUpodb5Uwn43u0oLA7s6motOg/exec";

const API_VERSION = "2.1";
console.log("core_api.js v" + API_VERSION);

async function api(action, data = {}) {
  const controller = new AbortController();

  // timeout 20 detik (GAS kadang lambat)
  const timeout = setTimeout(() => controller.abort(), 20000);

  try {
    const res = await fetch(WEB_APP_URL, {
      method: "POST",
      signal: controller.signal,
      body: new URLSearchParams({
        action,
        data: JSON.stringify({
          ...data,
          token: localStorage.getItem("token")
        })
      })
    });

    clearTimeout(timeout);

    if (!res.ok) {
      throw new Error("HTTP " + res.status);
    }

    const text = await res.text();

    let json;
    try {
      json = JSON.parse(text);
    } catch {
      console.error("Response bukan JSON:", text);
      throw new Error("Server bukan JSON");
    }

    // auto handle auth gagal
    if (json.error === "INVALID_TOKEN") {
      alert("Session habis, silakan login ulang");
      localStorage.clear();
      location.href = "/p/loginv1_2.html";
      return;
    }

    return json;

  } catch (err) {
    if (err.name === "AbortError") {
      throw new Error("Request timeout (server lambat)");
    }
    throw err;
  }
}
