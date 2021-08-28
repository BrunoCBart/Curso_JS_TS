//defineProperty - defineProperties
function Produto(nome, preco, estoque) {
  Object.defineProperty(this, 'estoque', {
    enumerable: true, //mostra a chave
    value: function () {
      return estoque
    }, // valor 
    writable: false, // pode alterar
    configurable: false, // configurável
  })

  Object.defineProperties(this, {
    nome: {
      enumerable: true,
      value: nome,
      writable: false,
    },
    preco: {
      enumerable: true,
      value: preco,
      writable: false,
    },
  })
}

const p1 = new Produto('Skate', 450, 12)
console.log(p1)
console.log(p1.estoque())