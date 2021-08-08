//Hoisting Declaração de função
falaOi()
function falaOi() {
  console.log('Oie')
}

//First-class objects (objetos de primeira classe)
//Function expression
const souUmDado = function() {
  console.log('Sou um dado')
}


//Tratar a função como um dado
//Executa o parâmetro
function executaFuncao(funcao) {
  console.log('vou executar sua funcao abaixo')
  funcao()
}

executaFuncao(souUmDado)

//Arrow function

const arrowFunction = () => {
  console.log('SOu uma arrow function')
}

arrowFunction()

//Dentro de um objeto
const obj = {
  falar() {
    console.log('estou falando')
  }
}

obj.falar()