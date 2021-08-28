const pessoa = {
  nome: 'Luiz',
  sobrenome: 'Otávio'
};

const chave = 'nome';
// console.log(pessoa[chave]);

const pessoa1 = new Object
pessoa1.nome = 'Bruno';
pessoa1.sobrenome = 'Bartolomeu';
pessoa1.idade = 22;
pessoa1.falarNome = function () {
  return `${this.nome} está falando seu nome`
}
// console.log(pessoa1.falarNome())

pessoa1.getDataNascimento = function () {
  const data = new Date()
  return data.getFullYear() - this.idade
}
// console.log(pessoa1.getDataNascimento())
// delete pessoa1.nome;

// for (let chave in pessoa1) {
//   console.log(pessoa1[chave])

// }


//Factory function
function criaPessoa(nome, sobrenome) {
  return {
    nome,
    sobrenome,
    get nomeCompleto() {
      return this.nome + ' ' + this.sobrenome;
    }
  };
}

const pessoaCriada = criaPessoa('Bruno', 'Bartolomeu')
console.log(pessoaCriada.nomeCompleto)

//Contructor Function

function CriaPessoa(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.nomeCompleto = () => {
    return this.nome + ' ' + this.sobrenome
  }


}

const pessoaA = new CriaPessoa('Bruno', 'Corrêa')
Object.freeze(pessoaA)
pessoaA.nome = 'Outra coisa'
console.log(pessoaA.nome, 'sou eu')
pessoaA.nomeCompleto()