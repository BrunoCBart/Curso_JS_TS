class DispositivoEletronico {
  constructor(nome) {
    this.nome = nome;
    this.ligado = false
  }

  ligar() {
    if (this.ligado) {
      console.log(this.nome + ' já está ligado')
      return
    }
    this.ligado = true
  }

  desligar() {
    if (!this.ligado) {
      console.log(this.nome + ' já está desligado')
    }
    this.ligado = false
  }
}

class Smartphone extends DispositivoEletronico {
  constructor(nome, cor, modelo) {
    super(nome)
    this.cor = cor;
    this.modelo = modelo;
  }
}

class Tablet extends DispositivoEletronico {
  constructor(nome, wifi) {
    super(nome)
    this.wifi = wifi
  }
}

const s1 = new Smartphone('iPhone', 'Black', 'iPhone10')
console.log(s1)