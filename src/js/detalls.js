const paginesDetall = ["detall-ten.html","detall-vs.html","detall-vitalogy.html"];

const paginaActual = location.href.split("/").slice(-1);

const index = paginesDetall.indexOf(paginaActual[0]);

const seguent = paginesDetall.at((index + 1) % paginesDetall.length);

const anterior = paginesDetall.at(index - 1);

document.querySelector(".anterior").href = anterior;

document.querySelector(".seguent").href = seguent;
