function retornaFuncao(nome) {
  return function() {
    return nome
  }
}


const funcao = retornaFuncao('Bruno')
const funcao2 = retornaFuncao('Luiz')
console.log(funcao(), funcao2())  