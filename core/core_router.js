const pages = {};

function registerPage(name, fn){
  pages[name] = fn;
}

function loadPage(name){
  pages[name]?.();
}