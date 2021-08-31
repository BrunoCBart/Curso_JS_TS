function Produto(nome, preco) {
  this.nome = nome;
  this.preco = preco;

  Produto.prototype.aumento = function (quantia) {
    this.preco += quantia
  }

  Produto.prototype.desconto = function (quantia) {
    this.preco -= quantia
  }
}


function Camiseta(nome, preco, cor) {
  Produto.call(this, nome, preco)
  this.cor = cor
}

function Caneca(nome, preco, material, estoque) {
  Produto.call(this, nome, preco)
  this.material = material

  Object.defineProperty(this, 'estoque', {
    enumerable: true,
    get: function () {
      return estoque
    },
    set: function (valor) {
      if (typeof valor !== 'number') return
      estoque = valor
    }
  })
}


Camiseta.prototype = Object.create(Produto.prototype)
Camiseta.prototype.constructor = Camiseta

Camiseta.prototype.aumento = function (percentual) {
  this.preco = this.preco + (this.preco * (percentual / 100))
}

Caneca.prototype = Object.create(Produto.prototype)
Caneca.prototype.constructor = Caneca

const produto = new Produto('Gen', 321)
const camiseta = new Camiseta('Tryber', 50, 'Black')
const caneca = new Caneca('Batman', 50, 'Preta', 5)
console.log(caneca.estoque = 10)
console.log(caneca)
console.log(produto)
camiseta.aumento(100)
console.log(camiseta)