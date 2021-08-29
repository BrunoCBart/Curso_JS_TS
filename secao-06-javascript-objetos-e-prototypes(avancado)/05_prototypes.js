function Pessoa(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;
}

Pessoa.prototype.nomeCompleto = function () {
  return `${this.nome} ${this.sobrenome}`
}

const pessoa1 = new Pessoa('Bruno', 'Bartolomeu')
const pesssoa2 = new Pessoa('Luiz', 'Otávio')

console.log(pessoa1)
console.log(pesssoa2)
console.log(pessoa1.nomeCompleto())
