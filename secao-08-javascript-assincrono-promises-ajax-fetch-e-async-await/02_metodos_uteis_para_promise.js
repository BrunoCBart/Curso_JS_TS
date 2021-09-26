function rand(max, min) {
  max = max * 1000;
  min = min * 1000;
  return Math.floor(Math.random() * (max - min) + min)
}

function esperaAi(msg, time) {
  return new Promise((resolve, reject) => {

    if (typeof msg !== 'string') {
      reject('Cai no Erro')
      return
    }

    setTimeout(() => {
      console.log(time)
      resolve(msg.toUpperCase())
    }, time)
  })
}

const promises = [
  // 'valor inicial',
  esperaAi('Promise 1', rand(1, 3)),
  esperaAi('Promise 2', rand(1, 3)),
  esperaAi('Promise 3', rand(1, 3)),
  // 'valor final'
]

// Promise.race; Promise.all; Promise.resolve; Promise.reject


// Promise.race(promises)
//   .then((val) => {
//     console.log(val)
//   }).catch((e) => {
//     console.log(e)
//   })


Promise.all(promises)
  .then((val) => {
    console.log(val)
  }).catch((e) => {
    console.log(e)
  })

function downloadPage() {
  const pageCache = false

  if (pageCache) {
    return Promise.reject('Página em cache')
  } else {
    return esperaAi('Baixando Página', rand(1, 3))
  }
}

downloadPage()
  .then((dados) => {
    console.log(dados)
  })
  .catch(e => console.log('Erro', e))