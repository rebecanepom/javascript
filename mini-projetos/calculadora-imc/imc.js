function calc() {
    let n = document.querySelector('input#inome')
    let nome = n.value
    let alt = document.querySelector('input#ialtura')
    let altura = alt.value
    let pe = document.querySelector('input#ipeso')
    let peso = pe.value
    let imc = peso.toFixed(2)

    if (nome.length == 0 || altura.length == 0 || peso.length == 0) {
        res.innerHTML = 'Preencha todos os dados!'
    } else {
        res.innerHTML = `${nome} seu IMC é ${imc} e você está ${altura} e seu peso é ${peso}`
    }

    
}