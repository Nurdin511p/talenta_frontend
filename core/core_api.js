const WEB_APP_URL = "PASTE_WEBAPP_URL_DISINI";

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