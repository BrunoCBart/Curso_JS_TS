/* 
Object.values
Object.entries
Object.assign(des, any)
Object.getOwnPropertyDescriptor(o, 'prop')
... (spread)

Já vimos
Object.keys (retorna as chaves)
Object.freeze (congela o objeto)
Object.defineProperties (define vária propiedades)
Object.defineProperty (define uma propiedade)
*/

const produto = { nome: 'Caneca', preco: 1.8 }
const outraCoisa = { ...produto, material: 'Porcelana' };
// Object.defineProperty(produto, 'nome', {
//   writable: false,
//   configurable: false,
//   value: 'Qaulqer outra coisa'
// })
for (let [chave, valor] of Object.entries(produto)) {
  console.log(chave, valor)
}

// console.log(Object.entries(produto))
// console.log(Object.getOwnPropertyDescriptor(produto, 'nome'))
// console.log(produto)

// produto.nome = 'Bruno'
// outraCoisa.nome = 'Bruno'
// outraCoisa.preco = '2.5'
// console.log(produto)
// console.log(outraCoisa)