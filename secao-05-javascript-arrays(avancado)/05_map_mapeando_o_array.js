const numeros = []

for (let i = 0; i < 10; i++) {
  numeros.push(Math.floor(Math.random() * 100 + 1))
}

const doubleNumeros = numeros.map(num => num * 2)
console.log(doubleNumeros)

const pessoas = [
  { nome: 'Bruno', idade: 22 },
  { nome: 'Maria', idade: 23 },
  { nome: 'Eduardo', idade: 55 },
  { nome: 'Letícia', idade: 19 },
  { nome: 'Rosana', idade: 32 },
  { nome: 'Wallace', idade: 47 },
  { nome: 'Isaac', idade: 28 },
];


const nomeString = pessoas.map(({ nome }) => `${nome}`)
console.log(nomeString)

const removeNome = pessoas.map(obj => {
  return { idade: obj.idade }
})
console.log(removeNome)

const addId = pessoas.map((obj, index) => {
  const newObject = { ...obj }
  newObject.id = (index + 1) * 1000
  return newObject
  // return { nome: key.nome, idade: key.idade, id: key.id = (Math.random() * 10).toFixed(0) }
})
console.log(addId)

console.log(pessoas)