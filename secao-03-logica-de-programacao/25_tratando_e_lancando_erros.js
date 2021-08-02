function retornaHora(data) {
  if (data && !(data instanceof Date)) {
    throw new TypeError("Esperando instância de Date.");
  }
  if (!data) {
    data = new Date();
  }

  return data.toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });
}

try {
  const data = new Date("01-01-1970 12:58:12");
  console.log(retornaHora(11));
} catch (e) {
  //tratar erro
  //console.log(e);
} finally {
  console.log("tenha um bom dia");
}

// try {
//   //executa quando não há erros
//   console.log(a);
//   console.log("Abri um arquivo");
//   console.log("Manipulei um arquivo e gerou erro");
//   console.log("Fechei o arquivo");
// } catch (e) {
//   //executa quando há erros
//   console.log("Tratando o erro");
// } finally {
//   //sempre
//   console.log("FINALLY: Eu sempre sou executado");
// }
