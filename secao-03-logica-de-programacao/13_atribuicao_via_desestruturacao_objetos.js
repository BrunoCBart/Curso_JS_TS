const pessoa = {
  nome: "Bruno",
  sobrenome: "Correa",
  idade: 22,
  endereco: {
    // rua: "Av. Brasil",
    numero: 320,
  },
};

// const { nome = "Não existe", sobrenome } = pessoa;
const {
  nome: teste = "Não existe",
  sobrenome,
  endereco: { rua: r = 12345, numero },
  endereco,
} = pessoa;
console.log(teste, sobrenome);
console.log(r, numero, endereco);

const { nome, ...resto } = pessoa;
console.log(nome, resto);
