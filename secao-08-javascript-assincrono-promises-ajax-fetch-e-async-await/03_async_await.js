function rand(max = 1, min = 3) {
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
      resolve(msg.toUpperCase() + ' - Passei na promise ' + time)
    }, time)
  })
}

async function execute() {
  try {
    const fase = await esperaAi('Fase 1', rand())
    console.log(fase)
    const fase2 = await esperaAi('Fase 2', rand())
    console.log(fase2)
    const fase3 = await esperaAi('Fase 3', rand())
    console.log(fase3)
    const finish = await esperaAi('Finish', rand())
    console.log(finish)
  } catch (e) {
    console.log(e)
  }
}

execute()
