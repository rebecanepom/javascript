function calc() {
    let nome = document.querySelector('input#inome').value
    let altura = document.querySelector('input#ialtura').value
    let peso = document.querySelector('input#ipeso').value
    let imc = peso/(altura**2)

    if (nome == '' || altura == 0 || peso == 0) {
        res.innerHTML = 'Preencha todos os dados!'
    } else {
        res.innerHTML = `${nome} seu IMC é ${imc.toFixed(1)} e você está `
        if (imc <= 18.5) {
            res.innerHTML += `abaixo do peso.`
        } if (imc > 18.5 && imc <= 24.9) {
            res.innerHTML += `com o peso ideal.`
        } if (imc > 24.9 && imc <= 29.9) {
            res.innerHTML += `levemente acima do peso.`
        } if (imc > 29.9 && imc <= 34.9) {
            res.innerHTML += `com obesidade grau I`
        } if (imc > 34.9 && imc <= 39.9) {
            res.innerHTML += `com obesidade grau II (severa).`
        } if (imc >= 40) {
            res.innerHTML += `com obesidade grau III (mórbida)`
        }
    } 
}