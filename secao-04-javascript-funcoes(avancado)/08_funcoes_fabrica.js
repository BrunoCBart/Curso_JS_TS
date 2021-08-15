
//this referencia a chave da funcao construtora
//Constructor function

function criaPessoa(nome, sobrenome, altura, peso) {
  return { 
    nome,
    sobrenome,
    get nomeCompleto() {
      return nome + ' ' + sobrenome
    },
    set nomeCompleto(name) {
      const nameSplit = name.split(' ')
      this.nome = nameSplit.shift()
      this.sobrenome = nameSplit.join(' ')
      return nome + ' ' + sobrenome
    },
    fala(assunto = 'falando sobre nada') {
      return `${this.nome} está ${assunto}`
    },
    altura,
    peso,
    //Getter
    get imc() {
      return (this.peso / this.altura ** 2).toFixed(2);
    }
  }
}
//this se referencia as pessoas p1, p2
const p1 = criaPessoa('Bruno', 'Corrêa')
const p2 = criaPessoa('Luiz', 'Otavio', 1.68, 60)
//Para enviar um valor pro setter você usa igual
p1.nomeCompleto = 'Sky Brown'
console.log(p1.nome)
console.log(p1.sobrenome)
console.log(p1.fala())
//funcao camuflada de atributo Getter
console.log(p2.imc)



// console.log(p1)
// console.log(p1.nome)
// console.log(p1.fala('falando sobre skate'))
// console.log(p2)
