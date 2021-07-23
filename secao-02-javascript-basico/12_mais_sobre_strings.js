let souUmaString = "Um texto com aspas \"duplas\""
console.log(souUmaString)

//                 0123456789...  
let outraString = "Uma string é iterável"

console.log(outraString[4])

console.log(outraString.charAt(7))

//Concatenação de uma string

// console.log(outraString.concat(' e também concatenável'))

// console.log(outraString + ' e também concatenável')

console.log(`${outraString} e também concatenável`)

//Procura o índice de um valor
console.log(outraString.indexOf('string'))
// retorna -1 se não encontrar nada

//                    0123456789...  
// let outraString = "Uma string é iterável" 
console.log(outraString.indexOf('g', 10))
// Verifica o índice a partir do 10 e volta -1 pois g está no índice 9.

//Pode se utilizar o regex para retornar as letras/palavras/numeros... que dão match.
console.log(outraString.match(/[a-z]/g))

//search procura um índice através do regex.
console.log(outraString.search(/s/))

//replace, troca um valor por outro.
console.log(outraString.replace(/Uma/, 'Outra'))

//replace aceita regex.
const travaLinguas = 'O rato roeu a roupa do rei de roma.'
console.log(travaLinguas.replace(/r/g, '#'))

//Retorna o tamanho da string contando espaços
console.log(travaLinguas.length)

//Corta uma string a partir e até os valores indicados
console.log(travaLinguas.slice(4, 10))

//Valores negativos começam do final ex : a partir do -5 até o -1
console.log(travaLinguas.slice(-5, -1))

//Pega o valor de uma string a partir dos índices indicados
console.log(travaLinguas.substr(7, 15))

//Através do método split você pode divir uma string a partir de um caractere, retorna um array.
const maisUmaString = 'Vou ser partida em pedacos'
console.log(maisUmaString.split(' ', 2))