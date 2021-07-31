var sobrenome; //hoisting
const verdadeira = true

//let tem escopo de bloco {... bloco }
//var so tem escopo de função
// let nome = 'Luiz' //criando
// var nome2= 'Luiz'


// if(verdadeira) {
//     let nome = 'Otávio'
//     var nome2 = 'Rogério' //criando
//     // console.log(nome, nome2)

//     if(verdadeira) {
//         var nome2 = 'Ronaldo' //Redeclarada
//         let nome = 'Outra coisa'
//     }
// }

// console.log(nome, nome2)


//Novamente let tem escopo de bloco

// function falaOi() {
//     var sobrenome = 'Miranda'

//     if(verdadeira) {
//         let nome = 'Luiz'
//         console.log(sobrenome)
//     }
//     console.log(nome)
// }
// falaOi()


console.log(sobrenome)

let sobrenome = 'Bruno'