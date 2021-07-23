function imc() {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');
    const peso = document.querySelector('.peso');
    const altura = document.querySelector('.altura');

    const imc = peso.value / (altura.value ** 2)
    let nivelImc = '';

    if(imc < 18.5 && imc > 0) {
        nivelImc = 'Abaixo do peso';
    } else if (imc >= 18.5 && imc < 25) {
        nivelImc = 'Peso normal';
    } else if (imc >= 25 && imc < 30) {
        nivelImc = 'Sobrepeso';
    } else if (imc >= 30 && imc < 35) {
        nivelImc = 'Obesidade grau 1';
    } else if (imc >= 35 && imc < 40) {
        nivelImc = 'Obesidade grau 2';
    } else {
        nivelImc = 'Obesidade grau 3';
    };

    resultado.innerHTML += `<p>Seu imc é ${imc.toFixed(2)} e, o seu nível é ${nivelImc}</p>`;
    console.log(imc, nivelImc)
};