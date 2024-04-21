const paginesDetall = ["detall-ten.html","detall-vs.html","detall-vitalogy.html"];

const paginaActual = location.href.split("/").slice(-1);

const index = paginesDetall.indexOf(paginaActual[0]);

console.log(index);

const seguent = paginesDetall.at((index + 1) % paginesDetall.length);

console.log(seguent);

const anterior = paginesDetall.at(index - 1);

console.log(anterior);

document.querySelector(".anterior").href = anterior;

document.querySelector(".seguent").href = seguent;

