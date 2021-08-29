function Produto(nome, preco) {
  this.nome = nome;
  this.preco = preco
}

Produto.prototype.desconto = function (desconto) {
  return this.preco = this.preco - (this.preco * (desconto / 100))
}
Produto.prototype.aumento = function (desconto) {
  return this.preco = this.preco + (this.preco * (desconto / 100))
}

const p1 = new Produto('Skate', 450)
console.log(p1)

const p2 = {
  nome: 'Caneca',
  preco: 15
}

Object.setPrototypeOf(p2, Produto.prototype)

p2.aumento(100)
console.log(p2)

const p3 = Object.create(Produto.prototype, {
  preco: {
    writable: true,
    configurable: true,
    enumerable: true,
    value: 113
  },
  tamanho2: {
    writable: true,
    configurable: true,
    enumerable: true,
    value: 42
  }
})

p3.aumento(10)
console.log(p3)

// const objA = {
//   chaveA: 'A'
// }

// const objB = {
//   chaveB: 'B'
// }

// Object.setPrototypeOf(objB, objA)
// Object.getPrototypeOf(objA)