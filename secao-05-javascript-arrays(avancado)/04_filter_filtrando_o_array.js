const numeros = []

for (let i = 0; i < 10; i++) {
  numeros.push(Math.floor(Math.random() * 100 + 1))
}

const filter = numeros.filter(num => num > 50)
console.log(filter)

const pessoas = [
  { nome: 'Bruno', idade: 22 },
  { nome: 'Maria', idade: 23 },
  { nome: 'Eduardo', idade: 55 },
  { nome: 'Letícia', idade: 19 },
  { nome: 'Rosana', idade: 32 },
  { nome: 'Wallace', idade: 47 },
  { nome: 'Isaac', idade: 28 },
]

const nomeMaiorQueCinco = pessoas.filter(({ nome }) => nome.length > 5)
console.log(nomeMaiorQueCinco)

const ideadeMaiorQueCinquenta = pessoas.filter(({ idade }) => idade > 50)
console.log(ideadeMaiorQueCinquenta)

const nomesQueTerminamComA = pessoas.filter(({ nome }) => nome.match(/[a-z]a$/g))
console.log(nomesQueTerminamComA)