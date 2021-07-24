// function getDiaSemana(diaSemana) {

//     let diaSemanaTexto = ''
    
//     switch(diaSemana) {
//         case 0:
//             diaSemanaTexto = `Domingo`
//             break
//         case 1:
//             diaSemanaTexto = `Segunda`
//             break
//         case 2:
//             diaSemanaTexto = `Terça`
//             break
//         case 3:
//             diaSemanaTexto = `Quarta`
//             break
//         case 4:
//             diaSemanaTexto = `Quinta`
//             break
//         case 5:
//             diaSemanaTexto = `Sexta`
//             break
//         case 6:
//             diaSemanaTexto = `Domingo`
//             break
//     }
//     return diaSemanaTexto
// }

// function getMes(mes) {

//     let mesTexto = ''
    
//     switch(mes) {
//         case 0:
//             mesTexto = `Janeiro`
//             break
//         case 1:
//             mesTexto = `Fevereiro`
//             break
//         case 2:
//             mesTexto = `Março`
//             break
//         case 3:
//             mesTexto = `Abril`
//             break
//         case 4:
//             mesTexto = `Maio`
//             break
//         case 5:
//             mesTexto = `Junho`
//             break
//         case 6:
//             mesTexto = `Julho`
//             break
//         case 7:
//             mesTexto = `Agosto`
//             break
//         case 8:
//             mesTexto = `Setembro`
//             break
//         case 9:
//             mesTexto = `Outubro`
//             break
//         case 10:
//             mesTexto = `Novembro`
//             break
//         case 11:
//             mesTexto = `Dezembro`
//             break
//     }
//     return mesTexto
// }

function getDiaSemana(day) {
    const diaArray = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sabádo' ]
    return diaArray[day]
}

function getMes(mes) {
    const mesArray = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
     'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
    return mesArray[mes]
}

function zeroEsquerda(num) {
    return num < 10 ? `0${num}` : num;
}

const date = new Date('2021-07-24 8:9:0')
const day = date.getDay()
const mes = date.getMonth()
const ano = date.getFullYear()
const hour = zeroEsquerda(date.getHours())
const minutes = zeroEsquerda(date.getMinutes())
const diaSemana = getDiaSemana(day)
const mesTexto = getMes(mes)


function displayDate(msg) {
const resultado = document.querySelector('.resultado')
resultado.innerHTML = `<p>${msg}</p>`


}

displayDate(`${diaSemana}, ${day} de ${mesTexto} de ${ano} ${hour}:${minutes}`)

// const resultado = document.querySelector('.resultado')
// const data = new Date()
// resultado.innerHTML = data.toLocaleString('pt-BR', {dateStyle: 'full', timeStyle: 'short'})  



