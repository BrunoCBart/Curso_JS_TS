function soma(a, b) {
  return a + b;
};
console.log(soma(5, 2));

function criaPessoa(nome, sobrenome) {
  return { nome, sobrenome };
};

const p1 = criaPessoa('Bruno', 'Bartolomeu')
console.log(p1)
const p2 = {
  nome: 'Bruno',
  sobrenome: 'Correa'
};
console.log(p2);

function falaFrase(comeco) {
  return function falaResto(resto) {
    return comeco + ' ' + resto;
  }
  
}

const olaMundo = falaFrase('Olá')
console.log(olaMundo('mundo'))

function makeMultiplier(multiplier) {
  return function(n) {
    return n * multiplier
  }
}

const timesTwo = makeMultiplier(2)
const timesThree = makeMultiplier(3)
const timesFour = makeMultiplier(4)

console.log(timesTwo(2))
console.log(timesThree(2))
console.log(timesFour(2))