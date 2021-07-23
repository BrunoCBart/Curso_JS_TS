// Valores que retornam false em javascript

/* 
FALSY values
false
0
'' "" ``
null/undefined
NaN
*/

console.log('string' && NaN && 'string2')

function falaOi() {
    console.log('Oi')
}

let vaiExecutar = true

vaiExecutar && falaOi()

console.log(null || undefined || 'Bruno' || 'Correa')

var a = null
var b = undefined
var c =  false
var d = false
var e = NaN

console.log(a || b || c || d || e) //Retorna a última falsa

