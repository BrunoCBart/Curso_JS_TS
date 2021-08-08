// IIFE -> Immediately invoked function expression
(function(altura, idade, peso) {
  
  const sobrenome = 'Bartolomeu'
  function criaNome(nome) {
    return nome + ' ' + sobrenome
  }

  function falaNome() {
    console.log(criaNome('Bruno'))
  }
  falaNome()
  console.log(altura, idade, peso)
})(1.80, 22, 60)