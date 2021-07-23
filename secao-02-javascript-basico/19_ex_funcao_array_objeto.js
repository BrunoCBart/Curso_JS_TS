function meuEscopo() {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado')

    const pessoas = []

    function recebeEventoForm(event) {
        event.preventDefault()
        const nome = form.querySelector('.nome')
        const sobrenome = form.querySelector('.sobrenome')
        const peso = form.querySelector('.peso')
        const altura = form.querySelector('.altura')

        // const obj = {nome: nome.value, sobrenome: sobrenome.value, peso: peso.value, altura:altura.value}
        // pessoas.push(obj)
        pessoas.push({
            nome: nome.value, 
            sobrenome: sobrenome.value, 
            peso: peso.value, 
            altura:altura.value
        })
        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}m</p>`
        console.log(pessoas)
    }
    form.addEventListener('submit', recebeEventoForm)
}

meuEscopo()