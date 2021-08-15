const numeros = []

for (let i = 0; i < 10; i++) {
  numeros.push(Math.floor(Math.random() * 100 + 1))
}


const total = numeros.reduce((acc, val) => acc + val)
console.log(total)

const pares = numeros.filter(val => val % 2 === 0)
console.log(pares)

const double = numeros.map(val => val * 2)
console.log(double)

const pares2 = numeros.reduce((acc, val) => {
  if (val % 2 === 0) {
    acc.push(val)
  }
  return acc
}, [])

console.log(pares2)


const double2 = numeros.reduce((acc, val) => {
  acc.push(val * 2)
  return acc
}, [])

console.log(double2)



const pessoas = [
  { nome: 'Bruno', idade: 22 },
  { nome: 'Maria', idade: 23 },
  { nome: 'Eduardo', idade: 55 },
  { nome: 'Letícia', idade: 19 },
  { nome: 'Rosana', idade: 62 },
  { nome: 'Wallace', idade: 47 },
  { nome: 'Isaac', idade: 28 },
]


const maisVelha = pessoas.reduce((acc, obj) => {
  console.log(acc)
  if (obj.idade > acc.idade) {
    acc = obj
  }
  return acc
})


// Not working I don't know why
// const maisVelha = pessoas.reduce((acc, obj) => {
//   if (acc.idade > obj.idade) return acc
// })

// console.log(maisVelha)