const GAS_URL = "https://script.google.com/macros/s/AKfycbxzT3gnxsS5S6w7Q2hEvAk78MMiHTcvXn0BL8m1PNwoiDUpodb5Uwn43u0oLA7s6motOg/exec";

async function api(action, data = {}) {
  const token = localStorage.getItem("token") || "";

  const res = await fetch(GAS_URL, {
    method: "POST",
    body: new URLSearchParams({
      action,
      data: JSON.stringify({ ...data, token })
    })
  });

  const text = await res.text();

  try {
    return JSON.parse(text);
  } catch {
    console.error(text);
    throw new Error("Response bukan JSON dari GAS");
  }
}