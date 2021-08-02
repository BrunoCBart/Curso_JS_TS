//Throw error

function soma(x, y) {
  if (typeof x !== "number" || typeof y !== "number") {
    throw new Error("x e y precisam ser numeros");
  }
  return x + y;
}

// lanca a mensagem do throw
try {
  console.log(soma(3, 10));
  console.log(soma(5, "1"));
} catch (err) {
  //   console.log(err);
  console.log("Algo mais amigável");
}

// try {
//   console.log(naoexisto);
// } catch (err) {
//   console.log("Não existo não existe");
//   console.log(err);
// }
