
//                0       1       2 
const array = ['Laura', 'Luiz', 'Bruno']

console.log(array[0])

array[array.length] = 'Otavio'
array.push('Lara')
array.unshift('Paulo')

removido = array.pop()
removed = array.shift()

console.log(array, removido, removed)
console.log(array.slice(2,4))