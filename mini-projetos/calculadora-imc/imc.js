function calc() {
    let n = document.querySelector('input#inome')
    let nome = n.value
    let alt = document.querySelector('input#ialtura')
    let altura = alt.value
    let pe = document.querySelector('input#ipeso')
    let peso = pe.value
    let imc = peso/(altura**2)

    if (nome.length == 0 || altura.length == 0 || peso.length == 0) {
        res.innerHTML = 'Preencha todos os dados!'
    } else {
        res.innerHTML = `${nome} seu IMC é ${imc.toFixed(1)} e você está `
    } if (imc <= 18.5) {
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