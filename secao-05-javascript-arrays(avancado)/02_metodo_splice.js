const nomes = ['Bruno', 'Maria', 'João', 'Luiz', 'Otávio', 'Júlia']
//nomes.splice(índice, delete, elem1, elem2, elem3)
// const removidos = nomes.splice(3, 2, 'Jotaro', 'Ronaldo')
//pop
// const removidos = nomes.splice(-1, 1)

//shift
// const removidos = nomes.splice(0, 1)

//push
// nomes.splice(nomes.length, 0, 'Hello')

//unshift
const removidos = nomes.splice(0, 0, 'Hello2')
console.log(nomes)
