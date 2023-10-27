function contar() {
    let inicio = document.querySelector('input#inicio')
    let fim = document.querySelector('input#fim')
    let passo = document.querySelector('input#passo')
    let res = document.querySelector('div#res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        alert('[ERRO] Dados incompletos!')
    } else {
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        res.innerHTML = `Contagem: `

        // Se inicio for menor que o fim
        if (i < f) {
            for(let c = i; c <= f; c += p) {
                res.innerHTML += `${c} `
        } else if(i > f) {
            for(let co = i; co >= f; co -= p) {
                res.innerHTML += `${co} `
            }
        }
        }
        
    }
}