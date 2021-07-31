
const form = document.querySelector('.form')

form.addEventListener('submit', function(e) {
    e.preventDefault()

    const pesoInput = document.querySelector('.peso')
    const alturaInput = document.querySelector('.altura')

    const peso = Number(pesoInput.value)
    const altura = Number(alturaInput.value)

    if(!peso) {
        setResultado('Peso inválido', false)
        return
    }

    if(!altura) {
        setResultado('Altura inválida', false)
    }

    const imc = getImc(peso, altura)
    const nivelImc = getNivelImc(imc)
    const msg = `Seu IMC é ${imc} (${nivelImc})`

    setResultado(msg, true)
})

function criaP() {
    const p = document.createElement('p')
    return p
}

function setResultado(msg, isValid) {
    const resultado = document.querySelector('.resultado')
    resultado.innerHTML = ''

    const p = criaP()

    if(isValid) {
        p.classList.add('paragrafo-resultado')
    } else {
        p.classList.add('bad')
    }

    p.innerHTML = msg
    resultado.appendChild(p)
}

function getImc(peso, altura) {
    const imc = peso / altura ** 2
    return imc.toFixed(2)
}

function getNivelImc(imc) {
    if(imc < 18.5 && imc > 0) {
        return 'Abaixo do peso';
    } else if (imc >= 18.5 && imc < 25) {
        return 'Peso normal';
    } else if (imc >= 25 && imc < 30) {
        return 'Sobrepeso';
    } else if (imc >= 30 && imc < 35) {
        return 'Obesidade grau 1';
    } else if (imc >= 35 && imc < 40) {
        return 'Obesidade grau 2';
    } else {
        return 'Obesidade grau 3';
    };
}