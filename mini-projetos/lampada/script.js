let lampada = document.querySelector('div#lamp')
lampada.addEventListener('mouseenter', entrarLigar)
lampada.addEventListener('dblclick', clicarQuebrar) /* clicar 2 vezes */
lampada.addEventListener('mouseout', sairApagar)

function entrarLigar() {
    lampada.style.background = 'url(imagens/lampada-acesa.png) center center /cover no-repeat'
}

function sairApagar() {
    lampada.style.background = 'url(imagens/lampada-apagada.png) center center /cover no-repeat'
}

function clicarQuebrar() {
    lampada.style.background = 'url(imagens/lampada-quebrada.png) center center /cover no-repeat'
}

function ligar() {
    lampada.style.background = 'url(imagens/lampada-acesa.png) center center /cover no-repeat'
}

function desligar() {
    lampada.style.background = 'url(imagens/lampada-apagada.png) center center /cover no-repeat'
}