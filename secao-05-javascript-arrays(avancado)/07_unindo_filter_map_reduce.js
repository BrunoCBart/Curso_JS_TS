const numeros = []

for (let i = 0; i < 10; i++) {
  numeros.push(Math.floor(Math.random() * 100 + 1))
}


const result = numeros
  .filter(num => num % 2 === 0)
  .map(num => num * 2)
  .reduce((acc, val) => acc + val)

console.log(result)