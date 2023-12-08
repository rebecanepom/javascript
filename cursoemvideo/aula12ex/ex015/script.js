function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var anodigitado = document.getElementById('nasci')
    var res = document.getElementById('res')
    if (anodigitado.value.length == 0 || anodigitado.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente')
    } else {
        var sexdigi = document.getElementsByName('radsex')
        var idade = ano - Number(anodigitado.value)
        var genero = ''

        // Criar as imagens
        var img = document.createElement('img')
        img.setAttribute('id', 'foto') // cria um id com nome foto p/ img

        // Verificar o sexo da pessoa
        if (sexdigi[0].checked) { // se o q tiver marcado for 0 [masc]
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'imgs/foto-criança-m.png')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'imgs/foto-jovem-m.png')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'imgs/foto-adulto-m.png')
            } else {
                //Idoso
                img.setAttribute('src', 'imgs/foto-idoso-m.png')
            }
        } else if (sexdigi[1].checked) { // se o q tiver marcado for 1[fem]
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'imgs/foto-criança-f.png')
            } else if (idade < 21) {
                // Jovem // Essa foto ta com problema
                img.setAttribute('src', 'imgs/foto-jovem-f.png')
            } else if (idade < 50) {
                // Adulta
                img.setAttribute('src', 'imgs/foto-adulta-f.png')
            } else {
                //Idosa
                img.setAttribute('src', 'imgs/foto-idosa-f.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        // Pra foto aparecer
        res.appendChild(img)
    }
}