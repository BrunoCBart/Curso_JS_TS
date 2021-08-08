//So funciona para palavrinha functions
//Arguments sustenta todos os argumentos enviados
function funcao(a, b, c) {
  let total = 0
  for(let argument of arguments) 
  total += argument
  console.log(total, a, b, c)
}

funcao(1, 2, 3, 4, 5, 6 ,7 ,8 ,9, 10)


function soma ({nome, sobrenome, idade}) { 
  console.log(nome, sobrenome, idade)
}
let obj = {nome:  'Bruno', sobrenome: 'Bartolomeu', idade: 22}
soma(obj)

function array([val1, val2, val3]) {
  console.log(val1, val2, val3)
}

array(['Bruno', 'Valor2', 3])

function conta (operador, acumulador, ...numeros) {
  console.log(operador, acumulador, numeros)
  for(let num of numeros) {
    if(operador === '+') acumulador += num
    if(operador === '-') acumulador -= num
    if(operador === '/') acumulador /= num
    if(operador === '*') acumulador *= num
  }
  console.log(acumulador)
}

conta('*', 1, 20, 30, 40, 50)


function conta2 (...args) {

  console.log(args)
}

conta2('*', 1, 20, 30, 40, 50)