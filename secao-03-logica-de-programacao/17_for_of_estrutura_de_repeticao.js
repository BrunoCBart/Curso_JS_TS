const nome = "Bruno";

// A string é iterável
for (let val of nome) {
  console.log(val);
}

// for (let index in nome) {
//   console.log(nome[index]);
// }

console.log("####");

const array = ["Bruno", "Sarah", "Luiz", "Andre"];

for (let nomes of array) {
  console.log(nomes);
}

console.log("####");

array.forEach((element, i, array) => {
  console.log(element, i, array);
});
