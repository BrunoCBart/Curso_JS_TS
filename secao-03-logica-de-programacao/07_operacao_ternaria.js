const pontos = 999

const nivelUsuario = pontos >= 1000 ? 'Usuario Vip' : 'Usuario normal'


const corUsuario = null
const corPadrao = corUsuario || 'Preta'

console.log(nivelUsuario, corPadrao)