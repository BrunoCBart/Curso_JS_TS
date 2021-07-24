// new Date(ano, mês, dia, hora, minuto, segundo, milissegundo);
// const tresHoras = 60 * 60 * 3 * 1000
// const umDia = 60 * 60 * 24 * 10**3
// const data = new Date(0 + tresHoras + umDia); //Date(0) Timestamp unix

//se omitir tudo date (val = milliseconds)
// const data = new Date(1627161732838)
// console.log('Dia', data.getDate())
// console.log('Ano', data.getFullYear())
// console.log('Mes', data.getMonth())
// console.log('Hora', data.getHours())
// console.log('minuto', data.getMinutes())
// console.log('segundo', data.getSeconds())
// console.log('ms', data.getMilliseconds())
// console.log(data.toString())
// console.log(Date.now())


function zeroAesquerda(num) {
    return num < 10 ? `0${num}` : num;
}

function formataData(data) {
    const ano = zeroAesquerda(data.getFullYear())
    const mes = zeroAesquerda(data.getMonth() + 1)
    const dia = zeroAesquerda(data.getDate())
    const hora = zeroAesquerda(data.getHours())
    const minutes = zeroAesquerda(data.getMinutes())
    const seconds = zeroAesquerda(data.getSeconds())

    return `${ano}/${mes}/${dia} ${hora}:${minutes}:${seconds}`
}

const data = new Date()
const dataBrasil = formataData(data)
console.log(dataBrasil)
