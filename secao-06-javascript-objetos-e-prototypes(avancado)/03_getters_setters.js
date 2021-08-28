//defineProperty -> Getter e Setter
function Produto(nome, preco, estoque) {
  this.nome = nome;
  this.preco = preco

  let estoquePrivado = estoque
  Object.defineProperty(this, 'estoque', {
    enumerable: true, //mostra a chave
    configurable: false, // configurável
    get: function () {
      return estoquePrivado;
    },
    set: function (val) {
      if (typeof val !== "number") {
        console.log(NaN)
        return
      }
      estoquePrivado = val
    }
  })
}

const p1 = new Produto('Skate', 450, 12)
console.log(p1)
p1.estoque = 'string'
console.log(p1.estoque)

function criaProduto(nome) {
  return {
    get nome() {
      return nome
    },
    set nome(valor) {
      valor = valor.replace(' ', '   ')
      nome = valor
    }
  }
}

const prod1 = criaProduto('Camisata')

prod1.nome = 'Camiseta Tryber'
console.log(prod1.nome)