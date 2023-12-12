let lampada = document.querySelector('div#lamp')
lampada.addEventListener('mouseenter', entrar)
lampada.addEventListener('click', clicar)
lampada.addEventListener('mouseout', sair)

function entrar() {
    lampada.style.background = 'url(imagens/lampada-acesa.png) center center /cover no-repeat'
}

function sair() {
    lampada.style.background = 'url(imagens/lampada-apagada.png) center center /cover no-repeat'
}

function clicar() {
    lampada.style.background = 'url(imagens/lampada-quebrada.png) center center /cover no-repeat'
}

function ligar() {
    lampada.style.background = 'url(imagens/lampada-acesa.png) center center /cover no-repeat'
}

function desligar() {
    lampada.style.background = 'url(imagens/lampada-apagada.png) center center /cover no-repeat'
}