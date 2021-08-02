// wierd
function relogio() {
  function criaHoraSegundos(segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString("pt-BR", {
      hour12: false,
      timeZone: "UTC",
    });
  }

  console.log(criaHoraSegundos(10));

  const relogio = document.querySelector(".timer");
  const iniciar = document.querySelector(".iniciar");
  const pausar = document.querySelector(".pausar");
  const zerar = document.querySelector(".zerar");

  let segundos = 0;
  let timer;

  function iniciaTimer() {
    timer = setInterval(function () {
      segundos++;
      relogio.innerHTML = criaHoraSegundos(segundos);
    }, 1000);
  }

  document.addEventListener("click", function (e) {
    const el = e.target;
    if (el.classList.contains("iniciar")) {
      clearInterval(timer);
      iniciaTimer();
      relogio.classList.remove("red");
    }

    if (el.classList.contains("pausar")) {
      clearInterval(timer);
      relogio.classList.add("red");
    }

    if (el.classList.contains("zerar")) {
      clearInterval(timer);
      relogio.innerHTML = "00:00:00";
      segundos = 0;
    }
  });
}

relogio();
