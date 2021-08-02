const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// continue pula pra prox iteração sem executar código em baixo.
// pula o console log do 2.

//break quebra o laço

let i = 0;
do {
  if (numeros[i] === 2) {
    console.log("pulei o numero 2");
    i++;
    continue;
  }

  if (numeros[i] === 7) {
    console.log("7 encontrado, saindo");
    break;
  }
  console.log(numeros[i]);
  i++;
} while (i < numeros.length);
