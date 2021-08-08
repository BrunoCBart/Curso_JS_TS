const nome = 'Bruno'

function falaNome() {
  console.log(nome)
}

function usaFalaNome() {
  const nome = 'Luiz'
  return falaNome()
}

usaFalaNome()