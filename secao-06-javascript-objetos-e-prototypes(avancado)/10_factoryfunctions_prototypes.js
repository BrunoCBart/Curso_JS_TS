const falar = {
  fala() {
    console.log(`${this.nome} está falando.`)
  }
}

const beber = {
  beber() {
    console.log(`${this.nome} está bebendo.`)
  }
}

const comer = {
  comer() {
    console.log(`${this.nome} está comendo.`)
  }
}

const criaPessoaPrototype = Object.assign({}, falar, beber, comer)

function criaPessoa(nome, sobrenome) {
  return Object.create(criaPessoaPrototype, {
    nome: { value: nome },
    sobrenome: { value: sobrenome }
  });
}

const p1 = criaPessoa('Bruno', 'Bartolomeu')
console.log(p1)
p1.fala()
p1.comer()
p1.beber()