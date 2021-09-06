let months = 26280000000 - 60 * 60 * 1000

function mostraHora() {
  let data = new Date(months);
  return data.toLocaleTimeString("pt-BR", {
    hour12: false,
  });
}

const timer = setInterval(function () {
  console.log(mostraHora());
  months -= 1000
}, 1000);

setTimeout(function () {
  clearInterval(timer);
}, 10000);

setTimeout(function () {
  console.log("Olá Mundo!");
}, 5000);
