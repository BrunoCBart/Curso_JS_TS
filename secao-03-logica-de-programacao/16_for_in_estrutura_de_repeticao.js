const frutas = ["Pera", "Maça", "Banana"];

for (let index in frutas) {
  console.log(frutas[index]);
}

const obj = {
  nome: "Bruno",
  vontade: "Estudar",
  motivo: "I got nothing better to do",
};

for (let chaves in obj) {
  console.log(`${chaves}: ${obj[chaves]}`);
}
