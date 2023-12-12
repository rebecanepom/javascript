let lampada = document.querySelector('div#lamp')
lampada.addEventListener('mouseenter', entrar)
lampada.addEventListener('dblclick', clicar) /* clicar 2 vezes */
lampada.addEventListener('mouseout', sair)

function entrar() {
    lampada.style.background = 'url(imagens/lampada-acesa.png) center center /cover no-repeat'
}

function sair() {
    if (lampBroken()) {
        lampada.style.background = 'url(imagens/lampada-apagada.png) center center /cover no-repeat'
    }
}

function clicar() {
    lampada.style.background = 'url(imagens/lampada-quebrada.png) center center /cover no-repeat'
}

function ligar() {
    if (lampBroken()) {
        lampada.style.background = 'url(imagens/lampada-acesa.png) center center /cover no-repeat'
    }
}

function desligar() {
    if (lampBroken()) {
        lampada.style.background = 'url(imagens/lampada-apagada.png) center center /cover no-repeat'
    }
}

function lampBroken() {
    return lamp.style.indexOf('quebrada') > -1
}