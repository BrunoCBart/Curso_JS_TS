function rand(max, min) {
  max = max * 1000;
  min = min * 1000;
  return Math.floor(Math.random() * (max - min) + min)
}

function esperaAi(msg, time) {
  return new Promise((resolve, reject) => {

    if (typeof msg !== 'string') reject(new Error('ERROR'))

    setTimeout(() => {
      console.log(time)
      resolve(msg, time)
    }, time)
  })
}

esperaAi('Verifica conexão com internet', rand(1, 3))
  .then((msg) => {
    console.log(msg)
    return esperaAi('Conexão com BD', rand(1, 3))
  })
  .then((msg,) => {
    console.log(msg)
    return esperaAi('Buscando dados da base', rand(1, 3))
  })
  .then(msg => {
    console.log(msg)
    return esperaAi(2222, rand(1, 3))
  })
  .then(msg => {
    console.log(msg)
  })
  .then(() => {
    console.log('Exibe dados na tela')
  })
  .catch(e => {
    console.log(e)
  })

console.log('Im first')