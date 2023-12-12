function calc() {
    let nome = document.querySelector('input#inome').value
    let altura = document.querySelector('input#ialtura').value
    let peso = document.querySelector('input#ipeso').value
    let imc = (peso / (altura**2)).toFixed(1)

    if (nome == '' || altura == 0 || peso == 0) {
        res.innerHTML = 'Preencha todos os dados!'
    } else {
        res.innerHTML = `${nome} seu IMC é ${imc} e você está `
        if (imc <= 18.5) {
            res.innerHTML += `abaixo do peso.`
        } else if (imc <= 24.9) {
            res.innerHTML += `com o peso ideal.`
        } else if (imc <= 29.9) {
            res.innerHTML += `levemente acima do peso.`
        } else if (imc <= 34.9) {
            res.innerHTML += `com obesidade grau I`
        } else if (imc <= 39.9) {
            res.innerHTML += `com obesidade grau II (severa).`
        } else if (imc >= 40) {
            res.innerHTML += `com obesidade grau III (mórbida)`
        }
    } 
}