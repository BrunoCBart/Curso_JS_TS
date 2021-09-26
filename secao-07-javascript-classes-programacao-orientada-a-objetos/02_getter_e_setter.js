const _velocidade = Symbol('velocidade')
class Carro {
  constructor(nome) {
    this.nome = nome;
    this[_velocidade] = 0
  }

  get velocidade() {
    console.log(this[_velocidade])
    return this[_velocidade]
  }

  set velocidade(val) {
    if (val > 100 && typeof val !== 'number') return
    this[_velocidade] = val;
    console.log(`Sua velocidade é ${val}km/h`)
  }
}

const carro1 = new Carro('Fusca')
carro1.velocidade = 100