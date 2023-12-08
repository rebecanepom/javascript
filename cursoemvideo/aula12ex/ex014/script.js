function carregar() {
    let msg = document.getElementById('msg')
    let img = document.getElementById('imagem')
    let saudacao = document.getElementById('saudacao')
    let agora = new Date()
    let hora = agora.getHours()
    //let hora = 2

    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 6 && hora < 12) {
        // BOM DIA
        img.src = 'imgs/fotomanhã.png'
        saudacao.innerHTML = 'Bom Dia!'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora < 18) {
        // BOA TARDE
        img.src = 'imgs/fototarde.png'
        saudacao.innerHTML = 'Boa Tarde!'
        document.body.style.background = '#C17B6F'
    } else if (hora >= 18 && hora <= 23) {
        // BOA NOITE
        img.src = 'imgs/fotonoite.png'
        saudacao.innerHTML = 'Boa Noite!'
        document.body.style.background = '#000f39d3'
    } else if (hora >= 0 && hora < 6) {
        // BOA MADRUGADA
        img.src = 'imgs/fotonoite.png'
        saudacao.innerHTML = 'Boa Madrugada!'
        document.body.style.background = '#000f39d3'
    }
}