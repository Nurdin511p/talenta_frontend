const pages = {};
const content = document.getElementById("content");

function registerPage(name, fn){
  pages[name] = fn;
}

async function loadPage(name){
  if(!pages[name]) return;
  content.innerHTML = "Loading...";
  await pages[name]();
}