const num = prompt('numero')
let numTitulo = document.getElementById('numero-titulo')
let texto = document.getElementById('texto')

numTitulo.innerHTML = num

texto.innerHTML = `<p>A raiz quadrada é ${num ** 0.5}<p>`
texto.innerHTML += `<p>${num} é inteiro? ${Number.isInteger(Number(num))}<p>`
texto.innerHTML += `<p>É NAN? ${Number.isNaN(num)}<p>`
texto.innerHTML += `<p>Arredondando para baixo ${Math.floor(num)}<p>`
texto.innerHTML += `<p>Arredondando para cima ${Math.ceil(num)}<p>`
texto.innerHTML += `<p>Com duas casas decimais ${Number(num).toFixed(2)}</p>`