const elementos = [
  { tag: "p", texto: "Qualquer texto que você quiser" },
  { tag: "div", texto: "Frase2" },
  { tag: "footer", texto: "Frase3" },
  { tag: "section", texto: "Frase4" },
];

const content = document.querySelector(".content");

for (let el of elementos) {
  const { tag, texto } = el;
  criaElementos(tag, texto);
}

function criaElementos(tag, texto) {
  const el = document.createElement(`${tag}`);
  el.innerHTML = texto;
  content.appendChild(el);
}
