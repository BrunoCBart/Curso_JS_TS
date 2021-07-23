function saudacao(nome) {
    // console.log(`Bom dia ${nome}!`)
    return `Bom dia ${nome}!`
}

saudacao('Bruno')

let variavel = saudacao('Luiz')
console.log(variavel)

function soma(x = 1, y = 1) {
    const soma = x + y
    return soma
}

console.log(soma(2, 7))
console.log(soma())

const raiz = n => n ** 0.5;


console.log(raiz(25))